#!/usr/bin/env node
/*
 * Art Studio server: your own in-house AI painting studio.
 * - Paintings are made by the Draw Things app on this Mac (free, runs open-source models like FLUX.1 [schnell] locally).
 * - This small server shows the Art Studio page to any phone or computer on your Wi-Fi and passes requests to Draw Things.
 * - Every painting is saved to ~/Pictures/Art Studio on this Mac.
 * No internet service, no API key and no per-painting cost. Needs Node.js 18 or newer; no packages to install.
 *
 *   node art-server.js                 (Draw Things on this Mac at http://127.0.0.1:7860)
 *   PORT=8080 DRAWTHINGS_URL=http://127.0.0.1:7860 node art-server.js
 */
'use strict';
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = Number(process.env.PORT || 8080);
const DT = new URL(process.env.DRAWTHINGS_URL || 'http://127.0.0.1:7860');
const GALLERY = process.env.ART_GALLERY || path.join(os.homedir(), 'Pictures', 'Art Studio');
const PAGE = path.join(__dirname, 'public', 'index.html');
fs.mkdirSync(GALLERY, { recursive: true });

// --- talk to Draw Things (plain http with no time limit: a big painting can take a few minutes) ---
function dt(method, pathname, body) {
  return new Promise((resolve, reject) => {
    const data = body ? Buffer.from(JSON.stringify(body)) : null;
    const req = http.request({ hostname: DT.hostname, port: DT.port || 80, path: pathname, method,
      headers: data ? { 'Content-Type': 'application/json', 'Content-Length': data.length } : {} }, (res) => {
      const chunks = []; res.on('data', (c) => chunks.push(c));
      res.on('end', () => { const text = Buffer.concat(chunks).toString('utf8');
        if (res.statusCode >= 400) return reject(new Error(`Draw Things answered ${res.statusCode}: ${text.slice(0, 200)}`));
        try { resolve(JSON.parse(text)); } catch (e) { resolve({ raw: text }); } });
    });
    req.setTimeout(0);
    req.on('error', (e) => reject(new Error(`Cannot reach Draw Things at ${DT.origin}. Open Draw Things and switch on its API Server (Settings → API Server, HTTP, port ${DT.port || 7860}). (${e.code || e.message})`)));
    if (data) req.write(data); req.end();
  });
}
const send = (res, code, obj) => { const b = Buffer.from(JSON.stringify(obj)); res.writeHead(code, { 'Content-Type': 'application/json', 'Content-Length': b.length, 'Cache-Control': 'no-store' }); res.end(b); };
const readJson = (req) => new Promise((resolve, reject) => { const c = []; let n = 0;
  req.on('data', (d) => { n += d.length; if (n > 60e6) { reject(new Error('Too large')); req.destroy(); } else c.push(d); });
  req.on('end', () => { try { resolve(JSON.parse(Buffer.concat(c).toString('utf8') || '{}')); } catch (e) { reject(new Error('Bad request')); } }); });
const safeName = (s) => String(s || 'painting').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'painting';
function saveImage(b64, label) {
  const file = `${new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)}-${safeName(label)}.png`;
  fs.writeFileSync(path.join(GALLERY, file), Buffer.from(b64, 'base64'));
  return file;
}
const num = (v, d, lo, hi) => { const n = Number(v); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, Math.round(n))) : d; };

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  try {
    if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) {
      const html = fs.readFileSync(PAGE); res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }); return res.end(html);
    }
    if (req.method === 'GET' && url.pathname === '/api/status') {
      try { const cfg = await dt('GET', '/'); return send(res, 200, { ok: true, model: cfg.model || '', steps: cfg.steps || null, upscaler: typeof cfg.upscaler === 'string' && cfg.upscaler ? cfg.upscaler : null, config: { width: cfg.width, height: cfg.height } }); }
      catch (e) { return send(res, 200, { ok: false, error: e.message }); }
    }
    if (req.method === 'GET' && url.pathname === '/api/gallery') {
      const files = fs.readdirSync(GALLERY).filter((f) => f.endsWith('.png')).sort().reverse().slice(0, 60);
      return send(res, 200, { files });
    }
    if (req.method === 'GET' && url.pathname.startsWith('/gallery/')) {
      const f = path.basename(decodeURIComponent(url.pathname.slice(9))); const p = path.join(GALLERY, f);
      if (!f.endsWith('.png') || !fs.existsSync(p)) { res.writeHead(404); return res.end('Not found'); }
      res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': 'max-age=3600' }); return fs.createReadStream(p).pipe(res);
    }
    if (req.method === 'POST' && (url.pathname === '/api/generate' || url.pathname === '/api/edit' || url.pathname === '/api/upscale')) {
      const b = await readJson(req);
      const body = { prompt: String(b.prompt || '').slice(0, 2000), negative_prompt: String(b.negative || '').slice(0, 1000),
        width: num(b.width, 1024, 256, 3072), height: num(b.height, 1024, 256, 3072), seed: num(b.seed, -1, -1, 2147483647) };
      if (b.steps) body.steps = num(b.steps, 4, 1, 80);
      let route = '/sdapi/v1/txt2img';
      if (url.pathname !== '/api/generate') {
        if (!b.image) return send(res, 400, { error: 'No picture to change.' });
        route = '/sdapi/v1/img2img'; body.init_images = [b.image];
        const s = Math.min(0.95, Math.max(0.05, Number(b.strength) || 0.55)); body.strength = s; body.denoising_strength = s;
        if (url.pathname === '/api/upscale') { body.strength = body.denoising_strength = 0.2; if (b.upscaler) { body.upscaler = b.upscaler; body.upscaler_scale_factor = 2; } }
      }
      const t0 = Date.now(); const out = await dt('POST', route, body);
      const img = out && Array.isArray(out.images) && out.images[0];
      if (!img) return send(res, 502, { error: 'Draw Things did not send back a picture. Check that a model is loaded in Draw Things.' });
      const file = saveImage(img, b.label || b.prompt);
      return send(res, 200, { image: img, file, seconds: Math.round((Date.now() - t0) / 100) / 10, seed: body.seed });
    }
    res.writeHead(404); res.end('Not found');
  } catch (e) { send(res, 500, { error: e.message }); }
});

server.listen(PORT, '0.0.0.0', () => {
  const ips = Object.values(os.networkInterfaces()).flat().filter((i) => i && i.family === 'IPv4' && !i.internal).map((i) => i.address);
  console.log('\n  Art Studio is running.\n');
  console.log(`  On this Mac:        http://localhost:${PORT}`);
  ips.forEach((ip) => console.log(`  On your phone/iPad: http://${ip}:${PORT}   (same Wi-Fi)`));
  console.log(`\n  Paintings are saved in: ${GALLERY}`);
  console.log(`  Painting engine: Draw Things at ${DT.origin}  (keep Draw Things open with its API Server on)\n`);
  console.log('  Keep this window open while you paint. Press Ctrl+C to stop.\n');
});
