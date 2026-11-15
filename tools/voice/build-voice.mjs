#!/usr/bin/env node
/*
 * Khel Khel Mein – studio voice generator.
 * Turns every line in tools/voice/lines.tsv into a soft neural-voice clip in www/audio/vo/,
 * and writes www/audio/vo/index.js so the app plays the clips (fully offline; nothing is sent from the app).
 *
 *   Azure (recommended, free tier = 500,000 characters / month – the whole app is ~135,000):
 *     AZURE_KEY=xxxx AZURE_REGION=centralindia node tools/voice/build-voice.mjs --sample 40   # listen first
 *     AZURE_KEY=xxxx AZURE_REGION=centralindia node tools/voice/build-voice.mjs              # everything
 *
 *   Sarvam AI Bulbul (very natural Indian Hindi; needs ffmpeg installed to convert WAV → OGG):
 *     SARVAM_KEY=xxxx node tools/voice/build-voice.mjs --provider sarvam --sample 40
 *
 * Options: --sample N (only N lines, mixed Hindi/English, into audio/vo-sample/ for listening)
 *          --only hi|en   --force (re-make existing clips)   --dry (count only)
 * Voices & speed: edit tools/voice/voices.json.  Pronunciation fixes: tools/voice/lexicon.json
 *   { "hi": { "कमला": "कम्ला" }, "en": { "Golu": "Go loo" } }  – changes what the voice reads, not the text on screen.
 * Re-running skips clips that already exist, so you can stop and resume any time.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i < 0 ? d : (process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : true); };
const provider = arg('provider', 'azure'); const sample = Number(arg('sample', 0)); const only = arg('only', null); const force = !!arg('force', false); const dry = !!arg('dry', false);
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/voice/voices.json'), 'utf8'));
const lexFile = path.join(ROOT, 'tools/voice/lexicon.json'); const LEX = fs.existsSync(lexFile) ? JSON.parse(fs.readFileSync(lexFile, 'utf8')) : { hi: {}, en: {} };
const outDir = path.join(ROOT, 'www/audio', sample ? 'vo-sample' : 'vo'); fs.mkdirSync(outDir, { recursive: true });

// same hash as K.voKey in www/js/core.js
const voKey = (lang, text) => { let h = 0x811c9dc5; const s = `${lang}|${text}`; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fixText = (lang, text) => { let t = text; for (const [a, b] of Object.entries(LEX[lang] || {})) { t = t.split(a).join(b); } return t; };

let lines = fs.readFileSync(path.join(ROOT, 'tools/voice/lines.tsv'), 'utf8').split('\n').slice(1).filter(Boolean).map((l) => { const [lang, ...r] = l.split('\t'); return { lang, text: r.join('\t') }; });
if (only) { lines = lines.filter((l) => l.lang === only); }
if (sample) { const hi = lines.filter((l) => l.lang === 'hi'); const en = lines.filter((l) => l.lang === 'en'); const pickN = (a, n) => a.filter((_, i) => i % Math.max(1, Math.floor(a.length / n)) === 0).slice(0, n); lines = [...pickN(hi, Math.ceil(sample / 2)), ...pickN(en, Math.floor(sample / 2))]; }
const chars = lines.reduce((s, l) => s + l.text.length, 0);
console.log(`${lines.length} lines, ${chars.toLocaleString()} characters → ${path.relative(ROOT, outDir)}  (provider: ${provider})`);
if (dry) { process.exit(0); }

// ---------------------------------------------------------------- providers
async function azure({ lang, text }) {
  const key = process.env.AZURE_KEY; const region = process.env.AZURE_REGION || 'centralindia';
  if (!key) { throw new Error('Set AZURE_KEY (Azure portal → Speech service → Keys and Endpoint)'); }
  const v = cfg.azure[lang];
  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="${v.locale}"><voice name="${v.voice}">${v.style ? `<mstts:express-as style="${v.style}" styledegree="${v.styledegree || 1}">` : ''}<prosody rate="${v.rate || '0%'}" pitch="${v.pitch || '0%'}">${xml(fixText(lang, text))}</prosody>${v.style ? '</mstts:express-as>' : ''}</voice></speak>`;
  const r = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, { method: 'POST', headers: { 'Ocp-Apim-Subscription-Key': key, 'Content-Type': 'application/ssml+xml', 'X-Microsoft-OutputFormat': 'ogg-24khz-16bit-mono-opus', 'User-Agent': 'khel-khel-mein-voice' }, body: ssml });
  if (r.status === 429) { const e = new Error('rate limited'); e.retry = true; throw e; }
  if (!r.ok) { throw new Error(`Azure ${r.status}: ${(await r.text()).slice(0, 200)}`); }
  return Buffer.from(await r.arrayBuffer());
}
async function sarvam({ lang, text }) {
  const key = process.env.SARVAM_KEY; if (!key) { throw new Error('Set SARVAM_KEY (dashboard.sarvam.ai → API keys)'); }
  const v = cfg.sarvam[lang];
  const r = await fetch('https://api.sarvam.ai/text-to-speech', { method: 'POST', headers: { 'api-subscription-key': key, 'Content-Type': 'application/json' }, body: JSON.stringify({ text: fixText(lang, text), target_language_code: v.locale, speaker: v.speaker, model: v.model, pace: v.pace || 0.9 }) });
  if (r.status === 429) { const e = new Error('rate limited'); e.retry = true; throw e; }
  if (!r.ok) { throw new Error(`Sarvam ${r.status}: ${(await r.text()).slice(0, 200)}`); }
  const j = await r.json(); const wav = Buffer.from(j.audios[0], 'base64');
  const tmp = path.join(outDir, '_tmp.wav'); const tmpOut = path.join(outDir, '_tmp.ogg'); fs.writeFileSync(tmp, wav);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-af', 'silenceremove=start_periods=1:start_threshold=-50dB,loudnorm=I=-16', '-c:a', 'libopus', '-b:a', '24k', '-ac', '1', tmpOut]);
  const ogg = fs.readFileSync(tmpOut); fs.rmSync(tmp); fs.rmSync(tmpOut); return ogg;
}
const synth = provider === 'sarvam' ? sarvam : azure;

// ---------------------------------------------------------------- run (4 at a time, resumable)
let done = 0; let made = 0; let failed = 0; const manifest = {};
const todo = lines.map((l) => ({ ...l, key: voKey(l.lang, l.text) }));
async function worker() {
  while (todo.length) {
    const L = todo.shift(); const file = path.join(outDir, `${L.key}.ogg`);
    if (!force && fs.existsSync(file) && fs.statSync(file).size > 200) { manifest[L.key] = 1; done++; continue; }
    for (let attempt = 0; attempt < 5; attempt++) {
      try { fs.writeFileSync(file, await synth(L)); manifest[L.key] = 1; made++; break; } catch (e) {
        if (e.retry || attempt < 2) { await new Promise((r) => setTimeout(r, 1500 * (attempt + 1))); continue; }
        failed++; console.error(`✖ ${L.lang} "${L.text.slice(0, 50)}": ${e.message}`); if (/AZURE_KEY|SARVAM_KEY|401|403/.test(e.message)) { process.exit(1); } break;
      }
    }
    done++; if (done % 100 === 0) { process.stdout.write(`  ${done}/${lines.length}\n`); }
  }
}
await Promise.all(Array.from({ length: cfg.parallel || 4 }, worker));
if (sample) {
  const list = lines.map((l) => ({ ...l, key: voKey(l.lang, l.text) })).filter((l) => manifest[l.key]);
  fs.writeFileSync(path.join(outDir, 'listen.html'), `<!doctype html><meta charset="utf-8"><title>Voice sample</title><body style="font:18px system-ui;max-width:760px;margin:30px auto"><h2>Voice sample (${provider})</h2>${list.map((l) => `<p>${l.lang} · ${xml(l.text)}<br><audio controls preload="none" src="${l.key}.ogg"></audio></p>`).join('')}`);
  if (!made && !done) { console.log("\nNo clips were made – check the errors above."); process.exit(1); }
  console.log(`\nSample ready: open www/audio/vo-sample/listen.html in Chrome and listen.`);
} else {
  const all = fs.readdirSync(outDir).filter((f) => f.endsWith('.ogg')).map((f) => f.slice(0, -4));
  fs.writeFileSync(path.join(outDir, 'index.js'), `/* Studio voice clips – generated by tools/voice/build-voice.mjs (${provider}, ${new Date().toISOString().slice(0, 10)}) */\nwindow.VO_EXT = 'ogg';\nwindow.VO = {${all.map((k) => `"${k}":1`).join(',')}};\n`);
  const mb = all.reduce((s, k) => s + fs.statSync(path.join(outDir, `${k}.ogg`)).size, 0) / 1e6;
  console.log(`\nDone: ${made} new, ${all.length} clips in total (${mb.toFixed(1)} MB), ${failed} failed. Now run: npm run build`);
}
