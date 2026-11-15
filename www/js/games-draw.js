/* Khel Khel Mein v3 – drawing games: shape drawing (demo → trace), dot-to-dot, colouring pages, symmetry. */
(() => {
  'use strict';
  const { t, tx, esc, pick, rand, shuffle, say, sayT, q, qa } = K;
  const E = K.ENGINES; const { frame, series, starOf, lbl, shake, bounce, wait, alive } = K.G;

  // ---------------------------------------------------------------- shape paths (0–100 box)
  const arc = (cx, cy, rx, ry, a0, a1, n = 40) => Array.from({ length: n + 1 }, (_, k) => { const a = (a0 + (a1 - a0) * k / n) * Math.PI / 180; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  const poly = (pts, close = true) => (close ? [...pts, pts[0]] : pts);
  const regular = (n, r = 40, rot = -90) => poly(Array.from({ length: n }, (_, k) => { const a = (rot + k * 360 / n) * Math.PI / 180; return [50 + r * Math.cos(a), 52 + r * Math.sin(a)]; }));
  const starPts = () => poly(Array.from({ length: 10 }, (_, k) => { const a = (-90 + k * 36) * Math.PI / 180; const r = k % 2 ? 18 : 42; return [50 + r * Math.cos(a), 54 + r * Math.sin(a)]; }));
  const heartPts = () => Array.from({ length: 61 }, (_, k) => { const a = (k / 60) * 2 * Math.PI; const x = 16 * Math.sin(a) ** 3; const y = 13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a); return [50 + x * 2.5, 46 - y * 2.5]; });
  const SHAPES = {
    stand: { strokes: [[[50, 10], [50, 90]]], name: { en: 'Standing line', hi: 'खड़ी रेखा' }, like: '🧍 🕯️ 🌴', open: true },
    sleep: { strokes: [[[10, 50], [90, 50]]], name: { en: 'Sleeping line', hi: 'पड़ी रेखा' }, like: '🛏️ ➖ 🌊', open: true },
    slant: { strokes: [[[20, 12], [80, 88]]], name: { en: 'Slanting line', hi: 'तिरछी रेखा' }, like: '🛝 ⛷️', open: true },
    curve: { strokes: [arc(50, 70, 38, 50, 180, 360)], name: { en: 'Curved line', hi: 'घुमावदार रेखा' }, like: '🌈 🌙', open: true },
    zigzag: { strokes: [[[8, 70], [24, 30], [40, 70], [56, 30], [72, 70], [90, 30]]], name: { en: 'Zig-zag line', hi: 'टेढ़ी-मेढ़ी रेखा' }, like: '⚡ ⛰️', open: true },
    wave: { strokes: [Array.from({ length: 61 }, (_, k) => [8 + k * 1.4, 50 + 18 * Math.sin(k / 60 * 4 * Math.PI)])], name: { en: 'Wavy line', hi: 'लहरदार रेखा' }, like: '🌊 🐍', open: true },
    spiral: { strokes: [Array.from({ length: 90 }, (_, k) => { const a = k / 89 * 5 * Math.PI; const r = 4 + k * 0.42; return [50 + r * Math.cos(a), 52 + r * Math.sin(a)]; })], name: { en: 'Spiral', hi: 'चक्करदार रेखा' }, like: '🐌 🍭 🌀', open: true },
    circle: { strokes: [arc(50, 52, 38, 38, -90, 270)], name: { en: 'Circle', hi: 'गोला (वृत्त)' }, like: '🌞 ⚽ 🍪 🕛' },
    oval: { strokes: [arc(50, 52, 40, 27, -90, 270)], name: { en: 'Oval', hi: 'अंडाकार' }, like: '🥚 🏉 🪞' },
    square: { strokes: [poly([[16, 18], [84, 18], [84, 86], [16, 86]])], name: { en: 'Square', hi: 'वर्ग' }, like: '🎁 🪟 🧇', sides: 4 },
    rectangle: { strokes: [poly([[8, 30], [92, 30], [92, 76], [8, 76]])], name: { en: 'Rectangle', hi: 'आयत' }, like: '🚪 📱 📺', sides: 4 },
    triangle: { strokes: [poly([[50, 12], [90, 86], [10, 86]])], name: { en: 'Triangle', hi: 'त्रिभुज' }, like: '🍕 ⛰️ 🔺', sides: 3 },
    diamond: { strokes: [poly([[50, 8], [84, 52], [50, 94], [16, 52]])], name: { en: 'Diamond (kite)', hi: 'पतंग आकार' }, like: '🪁 💎 ♦️', sides: 4 },
    pentagon: { strokes: [regular(5)], name: { en: 'Pentagon', hi: 'पंचभुज' }, like: '🏠', sides: 5 },
    hexagon: { strokes: [regular(6, 40, 0)], name: { en: 'Hexagon', hi: 'षट्भुज' }, like: '🐝 🔩', sides: 6 },
    star: { strokes: [starPts()], name: { en: 'Star', hi: 'तारा' }, like: '⭐ 🌟 ✨' },
    heart: { strokes: [heartPts()], name: { en: 'Heart', hi: 'दिल' }, like: '❤️ 💌' },
    crescent: { strokes: [[...arc(50, 52, 38, 38, 60, 300), ...arc(36, 52, 30, 33, -60, 60).reverse().slice(1)]], name: { en: 'Crescent moon', hi: 'आधा चाँद' }, like: '🌙 🥐' },
    arrow: { strokes: [poly([[8, 42], [60, 42], [60, 22], [92, 52], [60, 82], [60, 62], [8, 62]])], name: { en: 'Arrow', hi: 'तीर' }, like: '➡️ 🏹' },
    cross: { strokes: [[[50, 12], [50, 90]], [[12, 50], [88, 50]]], name: { en: 'Plus (cross)', hi: 'धन चिह्न' }, like: '➕ 🏥', open: true },
  };
  K.SHAPE_PATHS = SHAPES;
  // resample a polyline to points ~step apart
  const resample = (pts, step = 2.5) => { const out = [pts[0]]; for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1]; const [x1, y1] = pts[i]; const d = Math.hypot(x1 - x0, y1 - y0); const n = Math.max(1, Math.ceil(d / step)); for (let k = 1; k <= n; k++) { out.push([x0 + (x1 - x0) * k / n, y0 + (y1 - y0) * k / n]); } } return out; };

  // ================================================================ SHAPES: watch → trace → it becomes something
  // act: { shapes:['circle','square',...] }
  E.shapes = (act, back) => {
    const list = act.shapes;
    series(act, back, list.length, (r, next) => {
      const S = SHAPES[list[r]]; let tries = 0; let solved = false;
      frame(act, back, {
        id: 'shape', r, total: list.length, prompt: { en: `Let's draw a ${S.name.en.toLowerCase()}! Watch first, then trace with your finger.`, hi: `चलो ${S.name.hi} बनाएँ! पहले देखो, फिर उँगली से बनाओ।` },
        body: `<div class="shape-name">${lbl(S.name)}${S.sides ? ` <span class="sides">${t(`${S.sides} sides`, `${S.sides} भुजाएँ`)}</span>` : ''}</div>
          <div class="pad-wrap"><canvas id="guide"></canvas><canvas id="ink"></canvas><div class="hand" data-hand>👆</div></div>
          <div class="like hidden" data-like></div>
          <div class="nav"><button class="btn ghost" data-demo>▶ ${t('Show me', 'दिखाओ')}</button><button class="btn ghost" data-clear>↺</button><button class="btn green" data-done>✔ ${t('Done', 'हो गया')}</button></div>`,
      });
      const wrap = q('.pad-wrap'); const guide = q('#guide'); const ink = q('#ink'); const dpr = window.devicePixelRatio || 1;
      const W = wrap.clientWidth; const H = wrap.clientHeight; const SZ = Math.min(W, H) * 0.92; const ox = (W - SZ) / 2; const oy = (H - SZ) / 2;
      const P = ([x, y]) => [ox + x / 100 * SZ, oy + y / 100 * SZ];
      for (const c of [guide, ink]) { c.width = W * dpr; c.height = H * dpr; c.getContext('2d').scale(dpr, dpr); }
      const g = guide.getContext('2d'); const c = ink.getContext('2d'); const lw = Math.max(14, SZ * 0.07);
      const strokes = S.strokes.map((s) => resample(s).map(P)); const target = strokes.flat();
      const drawGuide = () => {
        g.clearRect(0, 0, W, H); g.lineCap = 'round'; g.lineJoin = 'round';
        for (const s of strokes) { g.strokeStyle = '#ede9fe'; g.lineWidth = lw * 1.9; g.beginPath(); s.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke(); g.setLineDash([2, 14]); g.strokeStyle = '#a78bfa'; g.lineWidth = 6; g.beginPath(); s.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke(); g.setLineDash([]); }
        strokes.forEach((s, k) => { g.fillStyle = '#22c55e'; g.beginPath(); g.arc(s[0][0], s[0][1], 13, 0, 7); g.fill(); g.fillStyle = '#fff'; g.font = '800 14px "Baloo 2",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(k + 1), s[0][0], s[0][1] + 1); });
      };
      drawGuide();
      // demo: Golu's finger traces the path
      const hand = q('[data-hand]');
      const demo = async () => {
        hand.classList.add('on');
        for (const s of strokes) {
          for (let i = 0; i < s.length; i += 2) {
            if (!alive('shape')) { return; }
            const [x, y] = s[i]; hand.style.transform = `translate(${x - 6}px,${y - 4}px)`;
            g.fillStyle = 'rgba(124,58,237,.35)'; g.beginPath(); g.arc(x, y, lw * 0.32, 0, 7); g.fill();
            await wait(Math.max(8, 1600 / s.length));
          }
        }
        await wait(300); hand.classList.remove('on'); drawGuide();
      };
      wait(500).then(demo);
      // child's ink
      let pts = []; let drawing = false; let last = null; let hue = rand(0, 360);
      const pos = (e) => { const b = ink.getBoundingClientRect(); return [e.clientX - b.left, e.clientY - b.top]; };
      ink.onpointerdown = (e) => { drawing = true; last = pos(e); pts.push(last); try { ink.setPointerCapture(e.pointerId); } catch { /* synthetic */ } };
      ink.onpointermove = (e) => { if (!drawing) { return; } const p = pos(e); hue = (hue + 3) % 360; c.strokeStyle = `hsl(${hue} 85% 52%)`; c.lineWidth = lw; c.lineCap = 'round'; c.beginPath(); c.moveTo(...last); c.lineTo(...p); c.stroke(); for (const pp of resample([last, p], 4)) { pts.push(pp); } last = p; };
      ink.onpointerup = ink.onpointercancel = () => { drawing = false; if (!solved && score().cover > 0.86 && score().acc > 0.7) { success(); } };
      const tol = SZ * 0.1;
      function score() {
        if (!pts.length) { return { cover: 0, acc: 0 }; }
        let hit = 0; for (const [x, y] of target) { if (pts.some(([a, b]) => Math.abs(a - x) < tol && Math.abs(b - y) < tol && Math.hypot(a - x, b - y) < tol)) { hit++; } }
        let good = 0; for (const [a, b] of pts) { if (target.some(([x, y]) => Math.hypot(a - x, b - y) < tol * 1.7)) { good++; } }
        return { cover: hit / target.length, acc: good / pts.length };
      }
      async function success() {
        solved = true; K.sfx.good(); K.addStars(tries ? 0 : 1);
        if (!S.open) { c.save(); c.globalAlpha = 0.85; c.fillStyle = `hsl(${hue} 85% 62%)`; for (const s of strokes) { c.beginPath(); s.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath(); c.fill(); } c.restore(); }
        const lk = q('[data-like]'); lk.innerHTML = `<b>${t('It looks like', 'यह ऐसा दिखता है')}:</b> <span>${S.like}</span>`; lk.classList.remove('hidden');
        await K.praise();
        await sayT({ en: `A ${S.name.en.toLowerCase()}!${S.sides ? ` It has ${S.sides} sides.` : ''}`, hi: `${S.name.hi}!${S.sides ? ` इसकी ${S.sides} भुजाएँ हैं।` : ''}` });
        await wait(600); if (alive('shape')) { next(tries < 2); }
      }
      q('[data-demo]').onclick = () => { K.sfx.tap(); demo(); };
      q('[data-clear]').onclick = () => { K.sfx.tap(); c.clearRect(0, 0, W, H); pts = []; };
      q('[data-done]').onclick = () => {
        if (solved) { return; } const s = score();
        if (s.cover >= (K.level() === 1 ? 0.62 : 0.72) && s.acc >= 0.55) { success(); return; }
        tries++; K.tryAgain(); if (tries >= 2) { demo(); }
        sayT(s.acc < 0.55 ? { en: 'Stay on the dotted line.', hi: 'बिंदु वाली रेखा पर ही चलो।' } : { en: 'Go all the way round. Start at the green dot.', hi: 'पूरा घुमाओ। हरे बिंदु से शुरू करो।' });
      };
    });
  };

  // ================================================================ DOT-TO-DOT
  const PICS = {
    star: { e: '⭐', name: { en: 'a star', hi: 'तारा' }, color: '#facc15', pts: starPts().slice(0, -1) },
    house: { e: '🏠', name: { en: 'a house', hi: 'घर' }, color: '#fb923c', pts: [[18, 90], [18, 50], [10, 50], [50, 14], [90, 50], [82, 50], [82, 90], [60, 90], [60, 66], [40, 66], [40, 90]] },
    fish: { e: '🐟', name: { en: 'a fish', hi: 'मछली' }, color: '#38bdf8', pts: [[8, 50], [28, 32], [52, 26], [72, 38], [92, 22], [86, 50], [92, 78], [72, 62], [52, 74], [28, 68]] },
    kite: { e: '🪁', name: { en: 'a kite', hi: 'पतंग' }, color: '#f472b6', pts: [[50, 6], [82, 44], [50, 84], [18, 44]] },
    boat: { e: '⛵', name: { en: 'a boat', hi: 'नाव' }, color: '#60a5fa', pts: [[8, 58], [46, 58], [46, 10], [80, 52], [52, 52], [52, 58], [92, 58], [76, 82], [24, 82]] },
    tree: { e: '🌳', name: { en: 'a tree', hi: 'पेड़' }, color: '#4ade80', pts: [[50, 6], [78, 38], [64, 38], [86, 64], [56, 64], [56, 92], [44, 92], [44, 64], [14, 64], [36, 38], [22, 38]] },
    heart: { e: '❤️', name: { en: 'a heart', hi: 'दिल' }, color: '#f87171', pts: heartPts().filter((_, k) => k % 6 === 0).slice(0, -1) },
    diya: { e: '🪔', name: { en: 'a diya', hi: 'दीया' }, color: '#f59e0b', pts: [[10, 52], [40, 52], [44, 34], [50, 18], [56, 34], [60, 52], [90, 52], [78, 70], [60, 78], [40, 78], [22, 70]] },
    butterfly: { e: '🦋', name: { en: 'a butterfly', hi: 'तितली' }, color: '#c084fc', pts: [[50, 30], [70, 10], [92, 24], [80, 50], [92, 76], [70, 90], [50, 70], [30, 90], [8, 76], [20, 50], [8, 24], [30, 10]] },
    rocket: { e: '🚀', name: { en: 'a rocket', hi: 'रॉकेट' }, color: '#94a3b8', pts: [[50, 4], [64, 26], [64, 64], [80, 84], [60, 80], [50, 92], [40, 80], [20, 84], [36, 64], [36, 26]] },
    umbrella: { e: '☂️', name: { en: 'an umbrella', hi: 'छाता' }, color: '#818cf8', pts: [[8, 52], [18, 30], [34, 16], [50, 12], [66, 16], [82, 30], [92, 52], [54, 52], [54, 84], [46, 90], [40, 82]] },
  };
  const HINDI_ORDER = 'कखगघचछजझटठडढतथदधनपफबभमयरलवशसह'.split('');
  // act: { pics:['star',...], mode:'num'|'skip2'|'skip5'|'tens'|'abc'|'hindi'|'hinum' }
  E.dots = (act, back) => {
    const list = act.pics || shuffle(Object.keys(PICS)).slice(0, 3);
    series(act, back, list.length, (r, next) => {
      const Pc = PICS[list[r]]; const n = Pc.pts.length; let at = 0; let mistakes = 0;
      const labelOf = (k) => ({ skip2: (k + 1) * 2, skip5: (k + 1) * 5, tens: (k + 1) * 10, abc: String.fromCharCode(65 + k), hindi: HINDI_ORDER[k], hinum: (k + 1).toLocaleString('hi-IN-u-nu-deva') }[act.mode] ?? k + 1);
      const how = { skip2: { en: 'Count in twos: 2, 4, 6…', hi: 'दो-दो करके गिनो: 2, 4, 6…' }, skip5: { en: 'Count in fives: 5, 10, 15…', hi: 'पाँच-पाँच करके गिनो: 5, 10, 15…' }, tens: { en: 'Count in tens: 10, 20, 30…', hi: 'दस-दस करके गिनो: 10, 20, 30…' }, abc: { en: 'Follow A, B, C…', hi: 'A, B, C… के क्रम में चलो' }, hindi: { en: 'Follow क, ख, ग…', hi: 'क, ख, ग… के क्रम में चलो' } }[act.mode] || { en: 'Join the dots: 1, 2, 3…', hi: 'बिंदु जोड़ो: 1, 2, 3…' };
      frame(act, back, {
        id: 'dots', r, total: list.length, prompt: { en: `${how.en} What will it be?`, hi: `${how.hi} क्या बनेगा?` },
        body: `<div class="dots-wrap"><svg viewBox="-6 -6 112 112" data-svg><polygon class="dfill" points="" fill="${Pc.color}"/><polyline class="dline" points="" /></svg><div class="reveal hidden" data-rev>${Pc.e}</div></div>`,
      });
      const svg = q('[data-svg]');
      svg.insertAdjacentHTML('beforeend', Pc.pts.map(([x, y], k) => `<g class="dot ${k === 0 ? 'next' : ''}" data-d="${k}"><circle cx="${x}" cy="${y}" r="5.5"/><text x="${x + (x > 50 ? 7 : -7)}" y="${y - 6}" text-anchor="middle">${labelOf(k)}</text></g>`).join(''));
      const line = svg.querySelector('.dline'); const pts = [];
      const tryDot = async (k) => {
        if (k !== at) { if (k > at || k < at - 1) { mistakes++; shake(svg.querySelector(`[data-d="${k}"]`)); K.sfx.bad(); say(t(`Find ${labelOf(at)}`, `${labelOf(at)} ढूँढो`)); } return; }
        const el = svg.querySelector(`[data-d="${k}"]`); el.classList.remove('next'); el.classList.add('done');
        pts.push(Pc.pts[k].join(',')); line.setAttribute('points', pts.join(' ')); K.sfx.pop(); say(String(labelOf(k)));
        at++;
        if (at < n) { svg.querySelector(`[data-d="${at}"]`).classList.add('next'); return; }
        pts.push(Pc.pts[0].join(',')); line.setAttribute('points', pts.join(' ')); svg.querySelector('.dfill').setAttribute('points', pts.join(' ')); svg.classList.add('complete');
        q('[data-rev]').classList.remove('hidden'); K.confetti();
        await K.praise(); await sayT({ en: `It is ${Pc.name.en}!`, hi: `यह ${Pc.name.hi} है!` }); await wait(500);
        if (alive('dots')) { next(mistakes < 2); }
      };
      // tap or slide over dots
      const nearest = (e) => { const b = svg.getBoundingClientRect(); const x = (e.clientX - b.left) / b.width * 112 - 6; const y = (e.clientY - b.top) / b.height * 112 - 6; let best = -1; let bd = 11; Pc.pts.forEach(([px, py], k) => { const d = Math.hypot(px - x, py - y); if (d < bd) { bd = d; best = k; } }); return best; };
      let down = false;
      svg.onpointerdown = (e) => { down = true; try { svg.setPointerCapture(e.pointerId); } catch { /* synthetic */ } const k = nearest(e); if (k >= 0) { tryDot(k); } };
      svg.onpointermove = (e) => { if (!down) { return; } const k = nearest(e); if (k === at) { tryDot(k); } };
      svg.onpointerup = svg.onpointercancel = () => { down = false; };
    });
  };
  K.DOT_PICS = PICS;

  // ================================================================ COLOURING PAGES
  const PAL = [['#ef4444', 'red', 'लाल'], ['#f97316', 'orange', 'नारंगी'], ['#facc15', 'yellow', 'पीला'], ['#22c55e', 'green', 'हरा'], ['#15803d', 'dark green', 'गहरा हरा'], ['#38bdf8', 'sky blue', 'आसमानी'], ['#2563eb', 'blue', 'नीला'], ['#7c3aed', 'purple', 'बैंगनी'], ['#ec4899', 'pink', 'गुलाबी'], ['#92400e', 'brown', 'भूरा'], ['#ffffff', 'white', 'सफ़ेद'], ['#1f2937', 'black', 'काला'], ['#ff9933', 'saffron', 'केसरिया'], ['#138808', 'India green', 'तिरंगे का हरा'], ['#000080', 'navy blue', 'गहरा नीला']];
  const C = (n) => PAL.find((p) => p[1] === n);
  const PAGES = {
    house: { name: { en: 'My house', hi: 'मेरा घर' }, svg: `<rect data-r="sky" x="0" y="0" width="200" height="130"/><circle data-r="sun" cx="165" cy="32" r="20"/><rect data-r="grass" x="0" y="130" width="200" height="70"/><polygon data-r="roof" points="40,80 100,30 160,80"/><rect data-r="wall" x="52" y="80" width="96" height="78"/><rect data-r="door" x="88" y="112" width="26" height="46"/><rect data-r="win1" x="62" y="92" width="20" height="20"/><rect data-r="win2" x="120" y="92" width="20" height="20"/><rect data-r="trunk" x="170" y="120" width="10" height="40"/><circle data-r="leaves" cx="175" cy="110" r="20"/>` },
    fish: { name: { en: 'Fish in the river', hi: 'नदी में मछली' }, svg: `<rect data-r="water" x="0" y="0" width="200" height="200"/><ellipse data-r="body" cx="95" cy="95" rx="55" ry="34"/><polygon data-r="tail" points="148,95 185,65 185,125"/><polygon data-r="fin" points="85,62 110,40 115,66"/><circle data-r="eye" cx="62" cy="88" r="7"/><circle data-r="b1" cx="35" cy="40" r="8"/><circle data-r="b2" cx="50" cy="20" r="5"/><path data-r="weed" d="M20 200 C10 170 35 160 22 130 C40 150 30 175 40 200Z"/><rect data-r="sand" x="0" y="180" width="200" height="20"/>` },
    butterfly: { name: { en: 'Butterfly', hi: 'तितली' }, svg: `<rect data-r="bg" x="0" y="0" width="200" height="200"/><ellipse data-r="w1" cx="62" cy="68" rx="44" ry="36"/><ellipse data-r="w2" cx="138" cy="68" rx="44" ry="36"/><ellipse data-r="w3" cx="70" cy="135" rx="34" ry="30"/><ellipse data-r="w4" cx="130" cy="135" rx="34" ry="30"/><circle data-r="s1" cx="55" cy="65" r="12"/><circle data-r="s2" cx="145" cy="65" r="12"/><rect data-r="bodyb" x="92" y="40" width="16" height="120" rx="8"/><circle data-r="head" cx="100" cy="34" r="12"/>` },
    flower: { name: { en: 'Flower pot', hi: 'फूलों का गमला' }, svg: `<rect data-r="bg" x="0" y="0" width="200" height="200"/>${Array.from({ length: 8 }, (_, k) => { const a = k * Math.PI / 4; return `<circle data-r="p${k}" cx="${100 + 30 * Math.cos(a)}" cy="${70 + 30 * Math.sin(a)}" r="18"/>`; }).join('')}<circle data-r="centre" cx="100" cy="70" r="18"/><rect data-r="stem" x="96" y="96" width="8" height="54"/><ellipse data-r="leaf1" cx="78" cy="125" rx="18" ry="8"/><ellipse data-r="leaf2" cx="122" cy="118" rx="18" ry="8"/><polygon data-r="pot" points="62,148 138,148 126,196 74,196"/>` },
    kite: { name: { en: 'Kite in the sky', hi: 'आसमान में पतंग' }, svg: `<rect data-r="sky" x="0" y="0" width="200" height="200"/><polygon data-r="k1" points="100,15 145,70 100,70"/><polygon data-r="k2" points="100,15 55,70 100,70"/><polygon data-r="k3" points="55,70 100,70 100,135"/><polygon data-r="k4" points="145,70 100,70 100,135"/><polygon data-r="bow1" points="92,150 108,160 92,170"/><polygon data-r="bow2" points="110,175 94,185 110,195"/><circle data-r="cloud1" cx="35" cy="160" r="18"/><circle data-r="cloud2" cx="55" cy="165" r="14"/>` },
    elephant: { name: { en: 'Golu the elephant', hi: 'गोलू हाथी' }, svg: `<rect data-r="bg" x="0" y="0" width="200" height="200"/><ellipse data-r="bodye" cx="115" cy="120" rx="62" ry="42"/><rect data-r="leg1" x="70" y="145" width="18" height="40" rx="6"/><rect data-r="leg2" x="140" y="145" width="18" height="40" rx="6"/><ellipse data-r="ear" cx="70" cy="85" rx="28" ry="34"/><circle data-r="heade" cx="55" cy="90" r="32"/><path data-r="trunk" d="M30 98 C18 120 14 150 30 160 C36 150 34 130 44 112Z"/><circle data-r="eyee" cx="50" cy="82" r="5"/><polygon data-r="cloth" points="95,82 150,82 140,110 105,110"/>` },
    car: { name: { en: 'My car', hi: 'मेरी गाड़ी' }, svg: `<rect data-r="sky" x="0" y="0" width="200" height="140"/><rect data-r="road" x="0" y="140" width="200" height="60"/><rect data-r="carb" x="25" y="95" width="150" height="45" rx="10"/><polygon data-r="top" points="55,95 75,62 135,62 155,95"/><polygon data-r="w1" points="65,92 80,68 102,68 102,92"/><polygon data-r="w2" points="108,92 108,68 130,68 145,92"/><circle data-r="wh1" cx="62" cy="142" r="18"/><circle data-r="wh2" cx="140" cy="142" r="18"/><rect data-r="light" x="165" y="105" width="10" height="10"/>` },
    diya: { name: { en: 'Diwali diya', hi: 'दीवाली का दीया' }, svg: `<rect data-r="bg" x="0" y="0" width="200" height="200"/>${Array.from({ length: 8 }, (_, k) => { const a = k * Math.PI / 4; return `<ellipse data-r="r${k}" cx="${100 + 62 * Math.cos(a)}" cy="${115 + 62 * Math.sin(a)}" rx="16" ry="9" transform="rotate(${k * 45} ${100 + 62 * Math.cos(a)} ${115 + 62 * Math.sin(a)})"/>`; }).join('')}<path data-r="bowl" d="M45 115 L155 115 C150 150 50 150 45 115Z"/><path data-r="flame" d="M100 108 C85 90 98 70 100 58 C104 72 116 90 100 108Z"/>` },
    flag: { name: { en: 'Our flag', hi: 'हमारा तिरंगा' }, guided: [['top', 'saffron', { en: 'Colour the TOP band saffron.', hi: 'ऊपर वाली पट्टी केसरिया रंगो।' }], ['mid', 'white', { en: 'The MIDDLE band is white.', hi: 'बीच वाली पट्टी सफ़ेद है।' }], ['bot', 'India green', { en: 'Colour the BOTTOM band green.', hi: 'नीचे वाली पट्टी हरी रंगो।' }], ['chakra', 'navy blue', { en: 'The wheel, the Ashoka Chakra, is navy blue.', hi: 'बीच का चक्र, अशोक चक्र, गहरा नीला है।' }]], svg: `<rect data-r="pole" x="18" y="20" width="8" height="175"/><rect data-r="top" x="26" y="30" width="160" height="40"/><rect data-r="mid" x="26" y="70" width="160" height="40"/><rect data-r="bot" x="26" y="110" width="160" height="40"/><circle data-r="chakra" cx="106" cy="90" r="15" stroke-width="2"/>` },
    rainbow: { name: { en: 'Rainbow', hi: 'इंद्रधनुष' }, guided: ['red', 'orange', 'yellow', 'green', 'blue', 'dark blue', 'purple'].map((c, k) => [`a${k}`, c === 'dark blue' ? 'navy blue' : c, { en: `Arch ${k + 1}: ${c}.`, hi: `${k + 1}वाँ धनुष: ${['लाल', 'नारंगी', 'पीला', 'हरा', 'नीला', 'गहरा नीला', 'बैंगनी'][k]}।` }]), svg: `<rect data-r="sky" x="0" y="0" width="200" height="200"/>${Array.from({ length: 7 }, (_, k) => `<path data-r="a${k}" d="M${20 + k * 9} 160 A${80 - k * 9} ${80 - k * 9} 0 0 1 ${180 - k * 9} 160 L${171 - k * 9} 160 A${71 - k * 9} ${71 - k * 9} 0 0 0 ${29 + k * 9} 160Z"/>`).join('')}` },
    fruits: { name: { en: 'Fruit basket', hi: 'फलों की टोकरी' }, guided: [['banana', 'yellow', { en: 'Colour the banana yellow.', hi: 'केले को पीला रंगो।' }], ['apple', 'red', { en: 'Colour the apple red.', hi: 'सेब को लाल रंगो।' }], ['grapes1', 'purple', { en: 'Colour a grape purple.', hi: 'एक अंगूर बैंगनी रंगो।' }], ['leaf', 'green', { en: 'Colour the leaf green.', hi: 'पत्ते को हरा रंगो।' }], ['basket', 'brown', { en: 'Colour the basket brown.', hi: 'टोकरी को भूरा रंगो।' }], ['orange', 'orange', { en: 'Colour the orange… orange!', hi: 'संतरे को नारंगी रंगो!' }]], svg: `<rect data-r="bg" x="0" y="0" width="200" height="200"/><circle data-r="apple" cx="70" cy="95" r="26"/><path data-r="banana" d="M95 70 C130 110 170 100 182 70 C170 120 115 120 95 70Z"/><circle data-r="orange" cx="128" cy="105" r="24"/><circle data-r="grapes1" cx="40" cy="120" r="10"/><circle data-r="grapes2" cx="52" cy="132" r="10"/><circle data-r="grapes3" cx="30" cy="135" r="10"/><ellipse data-r="leaf" cx="82" cy="64" rx="12" ry="6"/><path data-r="basket" d="M20 125 L180 125 L160 190 L40 190Z"/>` },
  };
  K.COLOUR_PAGES = PAGES;
  // act: { pages:['house',...] }  guided pages check colours; free pages save to the gallery
  E.colour = (act, back) => {
    const list = act.pages;
    series(act, back, list.length, (r, next) => {
      const Pg = PAGES[list[r]]; let cur = Pg.guided ? null : PAL[2]; let step = 0; let mistakes = 0;
      const prompt = Pg.guided ? Pg.guided[0][2] : { en: 'Pick a colour, then tap a part of the picture to fill it.', hi: 'रंग चुनो, फिर चित्र के किसी हिस्से को छूकर रंग भरो।' };
      const need = [...new Set(Pg.guided ? Pg.guided.map((s) => s[1]) : [])]; const pal = Pg.guided ? shuffle([...need, ...['red', 'blue', 'green', 'yellow', 'pink', 'brown'].filter((x) => !need.includes(x))].slice(0, Math.max(9, need.length))).map(C).filter(Boolean) : PAL.slice(0, 12);
      frame(act, back, {
        id: 'colour', r, total: list.length, prompt,
        body: `<div class="colour-name">${lbl(Pg.name)}</div><div class="page"><svg viewBox="0 0 200 200" data-page>${Pg.svg}</svg></div>
          <div class="palette big">${pal.map((p) => `<button class="sw ${cur === p ? 'on' : ''}" data-c="${p[1]}" style="background:${p[0]}" aria-label="${p[1]}"></button>`).join('')}</div>
          ${Pg.guided ? '' : `<div class="nav"><button class="btn green" data-save>✔ ${t('Finished!', 'पूरा हुआ!')}</button></div>`}`,
      });
      const page = q('[data-page]');
      [...page.querySelectorAll('[data-r]')].forEach((el) => { el.setAttribute('fill', '#ffffff'); el.setAttribute('stroke', '#1e1b4b'); if (!el.getAttribute('stroke-width')) { el.setAttribute('stroke-width', '2.4'); } el.setAttribute('stroke-linejoin', 'round'); });
      qa('[data-c]').forEach((el) => { el.onclick = () => { cur = C(el.dataset.c); qa('[data-c]').forEach((x) => x.classList.toggle('on', x === el)); K.sfx.pop(); say(t(cur[1], cur[2])); }; });
      page.addEventListener('click', async (e) => {
        const reg = e.target.closest('[data-r]'); if (!reg) { return; }
        if (!cur) { say(t('First pick a colour.', 'पहले रंग चुनो।')); bounce(q('.palette')); return; }
        if (Pg.guided) {
          const [rid, cname, msg] = Pg.guided[step];
          if (reg.dataset.r !== rid) { mistakes++; shake(reg); say(tx(msg)); return; }
          if (cur[1] !== cname) { mistakes++; K.sfx.bad(); const right = C(cname); say(t(`Hmm, not ${cur[1]}. Try ${right[1]}.`, `${cur[2]} नहीं, ${right[2]} लगाओ।`)); return; }
          reg.setAttribute('fill', cur[0]); reg.classList.add('filled'); K.sfx.good(); step++;
          if (step < Pg.guided.length) { const nx = Pg.guided[step][2]; q('.question').firstChild.textContent = tx(nx); sayT(nx); } else { await K.praise(); saveArt(page, tx(Pg.name)); if (alive('colour')) { next(mistakes < 2); } }
          return;
        }
        reg.setAttribute('fill', cur[0]); reg.classList.remove('filled'); void reg.getBBox(); reg.classList.add('filled'); K.sfx.pop();
      });
      const sv = q('[data-save]'); if (sv) { sv.onclick = async () => { const filled = [...page.querySelectorAll('[data-r]')].filter((el) => el.getAttribute('fill') !== '#ffffff').length; if (filled < 3) { say(t('Colour a few more parts first!', 'पहले कुछ और हिस्से रंगो!')); return; } saveArt(page, tx(Pg.name)); K.sfx.good(); await K.praise(); next(true); }; }
    });
  };
  function saveArt(svg, title) {
    try {
      const xml = new XMLSerializer().serializeToString(svg).replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
      K.state.gallery.unshift({ img: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml), title, day: K.today(), child: K.state.current }); K.state.gallery = K.state.gallery.slice(0, 24); K.save();
    } catch { /* storage full */ }
  }
  // ================================================================ MIRROR (symmetry)
  E.mirror = (act, back) => {
    const total = act.rounds || 3; const N = act.size || 6; const half = N / 2;
    series(act, back, total, (r, next) => {
      const col = pick(['#f97316', '#ec4899', '#22c55e', '#3b82f6', '#a855f7']);
      const left = new Set(); while (left.size < rand(4, 6 + r * 2)) { left.add(`${rand(0, N - 1)},${rand(0, half - 1)}`); }
      const want = new Set([...left].map((k) => { const [y, x] = k.split(',').map(Number); return `${y},${N - 1 - x}`; }));
      const mine = new Set(); let mistakes = 0;
      frame(act, back, {
        id: 'mirror', r, total, prompt: { en: 'Make both sides the same, like a mirror! Tap the boxes on the right.', hi: 'दोनों तरफ़ एक जैसा बनाओ, जैसे शीशे में! दाईं ओर के खाने दबाओ।' },
        body: `<div class="mirror-grid" style="--n:${N}">${Array.from({ length: N * N }, (_, i) => { const y = Math.floor(i / N); const x = i % N; const k = `${y},${x}`; return `<button class="mc ${x < half ? 'l' : 'r'} ${x === half - 1 ? 'edge' : ''}" data-m="${k}" ${x < half ? 'disabled' : ''} style="${left.has(k) ? `background:${col}` : ''}"></button>`; }).join('')}</div>
          <div class="nav"><button class="btn green" data-check>✔ ${t('Check', 'जाँचो')}</button></div>`,
      });
      qa('.mc.r').forEach((el) => { el.onclick = () => { const k = el.dataset.m; if (mine.has(k)) { mine.delete(k); el.style.background = ''; } else { mine.add(k); el.style.background = col; } K.sfx.pop(); }; });
      q('[data-check]').onclick = async () => {
        const ok = want.size === mine.size && [...want].every((k) => mine.has(k));
        if (ok) { q('.mirror-grid').classList.add('done'); await K.praise(); if (alive('mirror')) { next(mistakes === 0); } return; }
        mistakes++; K.tryAgain(); [...want].filter((k) => !mine.has(k)).slice(0, mistakes > 1 ? 2 : 0).forEach((k) => { q(`[data-m="${k}"]`).classList.add('hint'); });
        [...mine].filter((k) => !want.has(k)).forEach((k) => shake(q(`[data-m="${k}"]`)));
      };
    });
  };
})();
