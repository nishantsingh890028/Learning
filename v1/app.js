/* Khel Khel Mein – Play & Learn. Plain JS, no dependencies, works offline. */
(() => {
  'use strict';

  // ------------------------------------------------------------------ config
  const CONFIG = {
    privacyUrl: 'https://example.com/khel-khel-mein/privacy',   // TODO: your privacy policy page
    revenuecatApiKey: '',                                      // TODO: RevenueCat public Android key (goog_...)
    entitlement: 'full',
    priceFallback: '₹249',
    demoUnlock: true,                                          // browser preview only: the Android app never unlocks without a real purchase
    version: '1.0.0',
  };

  const D = window.DATA;
  const plug = (name) => (window.KKM && window.KKM[name]) || null;   // native plugins (Android app only)
  const $app = document.getElementById('app');
  const $overlay = document.getElementById('overlay');

  // ------------------------------------------------------------------ state
  const defaults = () => ({ stars: 0, stickers: [], full: false, lang: 'en', sound: true, limit: 0, played: { day: '', ms: 0 }, bonusMs: 0 });
  const state = (() => { try { return Object.assign(defaults(), JSON.parse(localStorage.getItem('kkm') || '{}')); } catch { return defaults(); } })();
  const save = () => { try { localStorage.setItem('kkm', JSON.stringify(state)); } catch { /* storage unavailable */ } };
  const hi = () => state.lang === 'hi';
  const t = (en, hiText) => (hi() ? hiText : en);
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let current = 'home';

  // ------------------------------------------------------------------ sound
  let actx;
  const ac = () => { if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch { /* no audio */ } } if (actx && actx.state === 'suspended') { actx.resume(); } return actx; };
  function tone(freqs, dur = 0.12, type = 'sine', gap = 0.09, vol = 0.22) {
    if (!state.sound) { return; }
    const a = ac(); if (!a) { return; }
    freqs.forEach((f, i) => {
      const o = a.createOscillator(); const g = a.createGain();
      o.type = type; o.frequency.value = f;
      const s = a.currentTime + i * gap;
      g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(vol, s + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, s + dur);
      o.connect(g).connect(a.destination); o.start(s); o.stop(s + dur + 0.03);
    });
  }
  const sfx = {
    tap: () => tone([660], 0.07, 'triangle'),
    good: () => tone([523, 659, 784, 1047], 0.16, 'triangle', 0.08),
    bad: () => tone([260, 200], 0.18, 'square', 0.12, 0.08),
    pop: () => tone([880, 1320], 0.08, 'sine', 0.05),
    win: () => tone([523, 659, 784, 1047, 784, 1047, 1319], 0.2, 'triangle', 0.11),
  };

  let speakToken = 0;
  async function say(text, lang) {
    if (!state.sound || !text) { return; }
    lang = lang || (hi() ? 'hi-IN' : 'en-IN');
    const my = ++speakToken;
    const tts = plug('TextToSpeech');
    if (tts) {
      try { await tts.stop(); if (my === speakToken) { await tts.speak({ text, lang, rate: 0.85, pitch: 1.1, volume: 1.0 }); } return; } catch { /* fall back */ }
    }
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang; u.rate = 0.85; u.pitch = 1.15;
      const v = speechSynthesis.getVoices().find((x) => x.lang.replace('_', '-').toLowerCase().startsWith(lang.slice(0, 2)));
      if (v) { u.voice = v; }
      speechSynthesis.speak(u);
    }
  }
  const numWord = (n) => (hi() ? D.numbersHi[n] : String(n));

  // ------------------------------------------------------------------ rewards
  function addStar(n = 1) {
    const before = Math.floor(state.stars / 10);
    state.stars += n; save();
    document.querySelectorAll('[data-stars]').forEach((el) => { el.textContent = state.stars; });
    if (Math.floor(state.stars / 10) > before) { setTimeout(giveSticker, 1100); }
  }
  function giveSticker() {
    const left = D.stickers.filter((s) => !state.stickers.includes(s));
    if (!left.length) { return; }
    const s = pick(left);
    state.stickers.push(s); save();
    confetti(); sfx.win();
    say(t('You won a new sticker!', 'तुम्हें नया स्टिकर मिला!'));
    modal(`<div class="emo">${s}</div><h2>${t('New sticker!', 'नया स्टिकर!')}</h2><p>${t('It is in your sticker book.', 'यह तुम्हारी स्टिकर बुक में है।')}</p><button class="btn" data-close>${t('Yay!', 'वाह!')}</button>`);
  }
  const praise = () => { sfx.good(); say(hi() ? pick(D.praiseHi) : pick(D.praiseEn)); };
  const tryAgain = () => { sfx.bad(); say(hi() ? pick(D.tryHi) : pick(D.tryEn)); };

  function finishRound(again, earned) {
    confetti(); sfx.win();
    say(t('Hooray! You finished!', 'शाबाश! तुमने पूरा कर लिया!'));
    modal(`<div class="emo">🏆</div><h2>${t('You did it!', 'तुमने कर दिखाया!')}</h2>
      <p>${'⭐'.repeat(Math.min(earned, 10))}<br>${t(`${earned} stars`, `${earned} सितारे`)}</p>
      <div class="row" style="justify-content:center"><button class="btn green" data-again>${t('Play again', 'फिर से खेलो')}</button><button class="btn ghost" data-home>🏠</button></div>`,
    { again, home });
  }

  // ------------------------------------------------------------------ overlay
  function modal(html, actions = {}) {
    $overlay.innerHTML = `<div class="modal">${html}</div>`;
    $overlay.classList.remove('hidden');
    $overlay.onclick = (e) => {
      const b = e.target.closest('button');
      if (!b) { return; }
      sfx.tap();
      for (const [k, fn] of Object.entries(actions)) { if (b.hasAttribute(`data-${k}`)) { closeModal(); fn(); return; } }
      if (b.hasAttribute('data-close')) { closeModal(); }
    };
  }
  const closeModal = () => { $overlay.classList.add('hidden'); $overlay.innerHTML = ''; };

  // confetti
  const cv = document.getElementById('confetti');
  function confetti() {
    const ctx = cv.getContext('2d'); const dpr = window.devicePixelRatio || 1;
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.scale(dpr, dpr);
    const colors = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#a855f7', '#ec4899'];
    const ps = Array.from({ length: 110 }, () => ({ x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * 0.5, r: 5 + Math.random() * 7, c: pick(colors), vy: 3 + Math.random() * 4, vx: -2 + Math.random() * 4, a: Math.random() * 6, va: -0.2 + Math.random() * 0.4 }));
    const start = performance.now();
    (function frame(now) {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const p of ps) { p.x += p.vx; p.y += p.vy; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 3, p.r, p.r * 0.66); ctx.restore(); }
      if (now - start < 2200) { requestAnimationFrame(frame); } else { ctx.clearRect(0, 0, innerWidth, innerHeight); }
    })(start);
  }

  // ------------------------------------------------------------------ layout
  function bar(title, back = home) {
    return { html: `<div class="bar"><button class="round" data-back aria-label="Back">${back === home ? '🏠' : '⬅️'}</button><h1>${title}</h1><div class="stars">⭐ <span data-stars>${state.stars}</span></div></div>`, back };
  }
  function render(b, body, name) {
    current = name;
    $app.innerHTML = b.html + `<div class="screen">${body}</div>`;
    $app.querySelector('[data-back]').onclick = () => { sfx.tap(); speakToken++; b.back(); };
  }
  const q = (sel) => $app.querySelector(sel);
  const qa = (sel) => [...$app.querySelectorAll(sel)];

  // ------------------------------------------------------------------ home
  const GAMES = [
    { id: 'abc', emo: '🔤', name: 'ABC', hint: 'English letters', hintHi: 'अंग्रेज़ी अक्षर', c: 'c1', free: true },
    { id: 'swar', emo: 'अ', name: 'अ आ इ', hint: 'Hindi vowels', hintHi: 'स्वर', c: 'c2', free: true },
    { id: 'vyanjan', emo: 'क', name: 'क ख ग', hint: 'Hindi consonants', hintHi: 'व्यंजन', c: 'c5', free: false },
    { id: 'count', emo: '🔢', name: '1 2 3', hint: 'Counting', hintHi: 'गिनती', c: 'c3', free: true },
    { id: 'shapes', emo: '🔺', name: 'Shapes', hint: 'Shapes & colours', hintHi: 'आकार और रंग', c: 'c4', free: true },
    { id: 'animals', emo: '🦁', name: 'Animals', hint: 'Names & sounds', hintHi: 'जानवर', c: 'c7', free: true },
    { id: 'memory', emo: '🃏', name: 'Memory', hint: 'Find the pairs', hintHi: 'जोड़ी ढूँढो', c: 'c6', free: true },
    { id: 'maths', emo: '➕', name: 'Maths', hint: 'Add & take away', hintHi: 'जोड़ और घटाना', c: 'c8', free: false },
  ];
  const OPEN = { abc: () => letters('abc', 0), swar: () => letters('swar', 0), vyanjan: () => letters('vyanjan', 0), count: counting, shapes, animals: () => animals('listen'), memory: () => memory('easy'), maths };

  function home() {
    current = 'home';
    $app.innerHTML = `
      <div class="bar"><button class="round" data-parents aria-label="Grown-ups">⚙️</button><h1></h1><div class="stars">⭐ <span data-stars>${state.stars}</span></div></div>
      <div class="screen">
        <div class="hello"><div class="title">Khel Khel Mein</div><div class="sub">${t('Play & learn! Pick a game 👇', 'खेलो और सीखो! एक खेल चुनो 👇')}</div></div>
        <div class="grid">${GAMES.map((g) => `<button class="tile ${g.c}" data-game="${g.id}">
          ${!g.free && !state.full ? '<span class="lock">🔒</span>' : ''}<span class="emo">${g.emo}</span><span class="name">${g.name}</span><span class="hint">${hi() ? g.hintHi : g.hint}</span></button>`).join('')}</div>
        <div class="footer-row"><button class="pill" data-stickers>📒 ${t('My stickers', 'मेरे स्टिकर')} (${state.stickers.length})</button></div>
      </div>`;
    qa('[data-game]').forEach((el) => {
      el.onclick = () => {
        sfx.tap();
        const g = GAMES.find((x) => x.id === el.dataset.game);
        if (!g.free && !state.full) { lockedTeaser(); return; }
        OPEN[g.id]();
      };
    });
    q('[data-stickers]').onclick = () => { sfx.tap(); stickers(); };
    q('[data-parents]').onclick = () => { sfx.tap(); parentGate(parents); };
  }

  function lockedTeaser() {
    say(t('Ask a grown-up to unlock this game!', 'यह खेल खोलने के लिए किसी बड़े से पूछो!'));
    modal(`<div class="emo">🔒</div><h2>${t('Full Pack game', 'फुल पैक खेल')}</h2><p>${t('Ask a grown-up to unlock all games.', 'सभी खेल खोलने के लिए किसी बड़े से पूछो।')}</p>
      <div class="row" style="justify-content:center"><button class="btn" data-grown>${t('Grown-ups', 'बड़ों के लिए')}</button><button class="btn ghost" data-close>✖</button></div>`,
    { grown: () => parentGate(parents) });
  }

  // ------------------------------------------------------------------ letters
  function letters(set, i) {
    const items = D[set];
    const isHi = set !== 'abc';
    const [L, word, emo] = items[i];
    const title = set === 'abc' ? 'ABC' : set === 'swar' ? 'स्वर' : 'व्यंजन';
    render(bar(title), `
      <div class="letter-card" data-say>
        <div class="big-letter">${L}</div>
        ${word ? `<div class="word"><span class="emo">${emo}</span>${esc(word)}</div>` : ''}
      </div>
      <div class="strip">${items.map((x, k) => `<button class="chip ${k === i ? 'on' : ''}" data-i="${k}">${x[0]}</button>`).join('')}</div>
      <div class="nav">
        <button class="round" data-prev aria-label="Previous">◀️</button>
        <button class="btn orange" data-trace>✍️ ${t('Trace', 'लिखो')}</button>
        <button class="round" data-next aria-label="Next">▶️</button>
      </div>`, 'letters');
    const speakIt = () => say(word ? (isHi ? `${L} से ${word}` : `${L} for ${word}`) : L, isHi ? 'hi-IN' : 'en-IN');
    speakIt();
    q('[data-say]').onclick = () => { sfx.pop(); speakIt(); };
    q('[data-prev]').onclick = () => { sfx.tap(); letters(set, (i - 1 + items.length) % items.length); };
    q('[data-next]').onclick = () => { sfx.tap(); letters(set, (i + 1) % items.length); };
    q('[data-trace]').onclick = () => { sfx.tap(); trace(set, i); };
    qa('[data-i]').forEach((el) => { el.onclick = () => { sfx.tap(); letters(set, Number(el.dataset.i)); }; });
    const on = q('.chip.on'); if (on) { on.scrollIntoView({ inline: 'center', block: 'nearest' }); }
  }

  // ------------------------------------------------------------------ tracing
  function trace(set, i) {
    const items = D[set];
    const [L] = items[i];
    const isHi = set !== 'abc';
    render(bar(t('Trace', 'लिखो') + ` ${L}`, () => letters(set, i)), `
      <div class="trace-wrap"><canvas id="guide"></canvas><canvas id="ink"></canvas><div class="trace-tip">${t('Trace the letter with your finger', 'उँगली से अक्षर पर लिखो')} ✍️</div></div>
      <div class="nav">
        <button class="btn ghost" data-clear>↺ ${t('Clear', 'मिटाओ')}</button>
        <button class="btn green" data-done>✔ ${t('Done', 'हो गया')}</button>
        <button class="round" data-next aria-label="Next">▶️</button>
      </div>`, 'trace');
    say(isHi ? `${L} लिखो` : `Let's write ${L}`, isHi ? 'hi-IN' : 'en-IN');

    const wrap = q('.trace-wrap'); const guide = q('#guide'); const ink = q('#ink');
    const dpr = window.devicePixelRatio || 1;
    const W = wrap.clientWidth; const H = wrap.clientHeight;
    for (const c of [guide, ink]) { c.width = W * dpr; c.height = H * dpr; c.getContext('2d').scale(dpr, dpr); }
    const g = guide.getContext('2d');
    let size = Math.min(W, H) * 0.78;
    const font = (s) => `900 ${s}px "Nunito","Noto Sans Devanagari",system-ui,sans-serif`;
    g.font = font(size);
    let m = g.measureText(L);
    const fit = Math.min(1, (W * 0.84) / (m.actualBoundingBoxLeft + m.actualBoundingBoxRight || 1), (H * 0.8) / ((m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) || 1));
    size *= fit; g.font = font(size); m = g.measureText(L);
    g.textAlign = 'left'; g.textBaseline = 'alphabetic';
    const x = (W - (m.actualBoundingBoxRight - m.actualBoundingBoxLeft)) / 2 + m.actualBoundingBoxLeft;
    const y = (H + m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2 + 10;
    const lw = Math.max(18, size * 0.085);
    g.fillStyle = '#ede9fe'; g.fillText(L, x, y);
    g.setLineDash([10, 12]); g.lineWidth = 3; g.strokeStyle = '#a78bfa'; g.strokeText(L, x, y);

    // masks for scoring: letter body + a generous halo around it
    const mask = document.createElement('canvas'); mask.width = W; mask.height = H;
    const mk = mask.getContext('2d'); mk.font = font(size); mk.textBaseline = 'alphabetic'; mk.fillStyle = '#000'; mk.fillText(L, x, y);
    const body = mk.getImageData(0, 0, W, H).data;
    mk.lineWidth = lw * 1.6; mk.lineJoin = 'round'; mk.strokeStyle = '#000'; mk.strokeText(L, x, y);
    const halo = mk.getImageData(0, 0, W, H).data;
    const STEP = 5; const target = [];
    for (let yy = 0; yy < H; yy += STEP) { for (let xx = 0; xx < W; xx += STEP) { if (body[(yy * W + xx) * 4 + 3] > 128) { target.push([xx, yy]); } } }

    const c = ink.getContext('2d');
    c.lineCap = 'round'; c.lineJoin = 'round'; c.lineWidth = lw;
    let drawing = false; let last = null; let hue = 260; let solved = false;
    const pos = (e) => { const r = ink.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    ink.onpointerdown = (e) => { drawing = true; last = pos(e); ink.setPointerCapture(e.pointerId); };
    ink.onpointermove = (e) => {
      if (!drawing) { return; }
      const p = pos(e); hue = (hue + 2) % 360;
      c.strokeStyle = `hsl(${hue} 85% 55%)`;
      c.beginPath(); c.moveTo(last[0], last[1]); c.lineTo(p[0], p[1]); c.stroke(); last = p;
    };
    ink.onpointerup = ink.onpointercancel = () => { drawing = false; if (!solved && score().cover > 0.78) { success(); } };

    function score() {
      const d = c.getImageData(0, 0, W * dpr, H * dpr).data;
      const at = (xx, yy) => d[((Math.round(yy * dpr)) * W * dpr + Math.round(xx * dpr)) * 4 + 3] > 0;
      let hit = 0; for (const [xx, yy] of target) { if (at(xx, yy)) { hit++; } }
      let inkN = 0; let out = 0;
      for (let yy = 0; yy < H; yy += STEP * 2) { for (let xx = 0; xx < W; xx += STEP * 2) { if (at(xx, yy)) { inkN++; if (halo[(yy * W + xx) * 4 + 3] < 128) { out++; } } } }
      return { cover: target.length ? hit / target.length : 0, out: inkN ? out / inkN : 0 };
    }
    function success() {
      solved = true; praise(); addStar(1); confetti();
      q('.trace-tip').textContent = t('Great writing! ⭐', 'बहुत सुंदर लिखा! ⭐');
      setTimeout(() => { if (current === 'trace') { trace(set, (i + 1) % items.length); } }, 2200);
    }
    q('[data-clear]').onclick = () => { sfx.tap(); c.clearRect(0, 0, W, H); solved = false; };
    q('[data-done]').onclick = () => {
      if (solved) { return; }
      const s = score();
      if (s.cover >= 0.55 && s.out < 0.5) { success(); } else {
        tryAgain();
        q('.trace-tip').textContent = s.out >= 0.5 ? t('Stay on the letter 🙂', 'अक्षर के ऊपर ही लिखो 🙂') : t('Cover more of the letter ✍️', 'पूरे अक्षर पर लिखो ✍️');
      }
    };
    q('[data-next]').onclick = () => { sfx.tap(); trace(set, (i + 1) % items.length); };
  }

  // ------------------------------------------------------------------ quiz engine
  function quiz({ name, title, rounds = 10, makeRound }) {
    let r = 0; let earned = 0;
    const next = () => {
      if (r >= rounds) { finishRound(() => quiz({ name, title, rounds, makeRound }), earned); return; }
      const round = makeRound(r);
      render(bar(title), `
        <div class="progress">${Array.from({ length: rounds }, (_, k) => `<span class="${k < r ? 'done' : ''}"></span>`).join('')}</div>
        <div class="question">${round.question}<button class="round speak" data-ask aria-label="Say again">🔊</button></div>
        ${round.stage ? `<div class="stage">${round.stage}</div>` : ''}
        <div class="options ${round.options.length === 4 ? 'two' : ''}">${round.options.map((o, k) => `<button class="opt" data-k="${k}">${o.label}</button>`).join('')}</div>`, name);
      round.ask();
      q('[data-ask]').onclick = () => { sfx.tap(); round.ask(); };
      if (round.bind) { round.bind(); }
      let tries = 0;
      qa('[data-k]').forEach((el) => {
        el.onclick = () => {
          const o = round.options[Number(el.dataset.k)];
          if (o.correct) {
            el.classList.add('right'); qa('[data-k]').forEach((b) => { b.disabled = true; });
            if (tries === 0) { earned++; addStar(1); }
            praise(); if (round.onRight) { round.onRight(); }
            r++; setTimeout(() => { if (current === name) { next(); } }, 1300);
          } else { tries++; el.classList.add('wrong'); setTimeout(() => el.classList.remove('wrong'), 450); tryAgain(); }
        };
      });
    };
    next();
  }

  // ------------------------------------------------------------------ counting
  function counting() {
    quiz({
      name: 'count', title: t('Counting', 'गिनती'),
      makeRound: (r) => {
        const max = r < 4 ? 5 : 10;
        const n = rand(1, max); const emo = pick(D.countables);
        const opts = shuffle([n, ...shuffle([...Array(10).keys()].map((k) => k + 1).filter((k) => k !== n && Math.abs(k - n) <= 3)).slice(0, 2)]);
        return {
          question: t(`How many ${emo}?`, `कितने ${emo} हैं?`),
          stage: Array.from({ length: n }, (_, k) => `<span class="item" data-c="${k}" style="animation-delay:${k * 0.06}s">${emo}</span>`).join(''),
          options: opts.map((v) => ({ label: v, correct: v === n })),
          ask: () => say(t('How many can you count?', 'गिनो, कितने हैं?')),
          bind: () => { let k = 0; qa('[data-c]').forEach((el) => { el.onclick = () => { k++; sfx.pop(); el.style.opacity = '.45'; say(numWord(k)); }; }); },
          onRight: () => say(numWord(n)),
        };
      },
    });
  }

  // ------------------------------------------------------------------ shapes & colours
  function shapeSVG(shape, color) {
    const s = { circle: '<circle cx="50" cy="50" r="40"/>', square: '<rect x="14" y="14" width="72" height="72" rx="8"/>',
      triangle: '<polygon points="50,10 92,86 8,86"/>', star: '<polygon points="50,6 62,38 96,38 68,58 79,92 50,72 21,92 32,58 4,38 38,38"/>',
      heart: '<path d="M50 88 C10 60 4 34 22 20 C36 9 48 18 50 28 C52 18 64 9 78 20 C96 34 90 60 50 88Z"/>' }[shape];
    return `<svg viewBox="0 0 100 100" fill="${color}" stroke="rgba(0,0,0,.12)" stroke-width="3">${s}</svg>`;
  }
  function shapes() {
    quiz({
      name: 'shapes', title: t('Shapes & Colours', 'आकार और रंग'),
      makeRound: () => {
        const col = pick(D.colors); const shp = pick(D.shapes);
        const combos = [[col, shp]];
        while (combos.length < 4) {
          const c = pick(D.colors); const s = pick(D.shapes);
          if (!combos.some(([a, b]) => a[0] === c[0] && b[0] === s[0])) { combos.push([c, s]); }
        }
        const phrase = t(`Tap the ${col[0]} ${shp[0]}`, `${col[2]} ${shp[1]} दबाओ`);
        return {
          question: `${phrase}`,
          options: shuffle(combos).map(([c, s]) => ({ label: shapeSVG(s[0], c[1]), correct: c[0] === col[0] && s[0] === shp[0] })),
          ask: () => say(phrase),
        };
      },
    });
  }

  // ------------------------------------------------------------------ animals
  function animals(mode) {
    if (mode === 'quiz') {
      quiz({
        name: 'animals', title: t('Animals', 'जानवर'),
        makeRound: () => {
          const opts = shuffle(D.animals).slice(0, 3); const a = pick(opts);
          const nm = hi() ? a[3] : a[1];
          return {
            question: t(`Where is the ${nm}?`, `${nm} कहाँ है?`),
            options: opts.map((o) => ({ label: o[0], correct: o === a })),
            ask: () => say(t(`Where is the ${nm}?`, `${nm} कहाँ है?`)),
            onRight: () => setTimeout(() => say(hi() ? `${a[3]} बोलता है ${a[4]}` : `The ${a[1]} says ${a[2]}!`), 900),
          };
        },
      });
      return;
    }
    render(bar(t('Animals', 'जानवर')), `
      <div class="tabs"><button class="tab on">👂 ${t('Listen', 'सुनो')}</button><button class="tab" data-quiz>❓ ${t('Quiz', 'पहेली')}</button></div>
      <div class="animal-grid">${D.animals.map((a, k) => `<button class="animal" data-a="${k}"><span class="emo">${a[0]}</span>${hi() ? a[3] : a[1]}</button>`).join('')}</div>`, 'animals');
    say(t('Tap an animal!', 'किसी जानवर को छुओ!'));
    q('[data-quiz]').onclick = () => { sfx.tap(); animals('quiz'); };
    let heard = new Set();
    qa('[data-a]').forEach((el) => {
      el.onclick = () => {
        const a = D.animals[Number(el.dataset.a)];
        el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk');
        sfx.pop();
        say(hi() ? `${a[3]}! ${a[3]} बोलता है ${a[4]}` : `${a[1]}! The ${a[1].toLowerCase()} says ${a[2]}`);
        if (!heard.has(a[1])) { heard.add(a[1]); if (heard.size % 5 === 0) { addStar(1); } }
      };
    });
  }

  // ------------------------------------------------------------------ memory
  function memory(level) {
    if (level === 'hard' && !state.full) { lockedTeaser(); level = 'easy'; }
    const pairs = level === 'easy' ? 6 : 8;
    const deck = shuffle(shuffle(D.memory).slice(0, pairs).flatMap((e) => [e, e]));
    render(bar(t('Memory', 'याददाश्त')), `
      <div class="tabs"><button class="tab ${level === 'easy' ? 'on' : ''}" data-l="easy">${t('Easy', 'आसान')}</button><button class="tab ${level === 'hard' ? 'on' : ''}" data-l="hard">${t('Hard', 'कठिन')} ${state.full ? '' : '🔒'}</button></div>
      <div class="mem">${deck.map((e, k) => `<div class="card" data-m="${k}"><div class="in"><div class="f">❓</div><div class="b">${e}</div></div></div>`).join('')}</div>`, 'memory');
    say(t('Find the matching pairs!', 'एक जैसी जोड़ी ढूँढो!'));
    qa('[data-l]').forEach((el) => { el.onclick = () => { sfx.tap(); memory(el.dataset.l); }; });
    let open = []; let matched = 0; let busy = false; let moves = 0;
    qa('[data-m]').forEach((el) => {
      el.onclick = () => {
        if (busy || el.classList.contains('flip')) { return; }
        sfx.tap(); el.classList.add('flip'); open.push(el);
        if (open.length < 2) { return; }
        moves++;
        const [a, b] = open; open = [];
        if (deck[a.dataset.m] === deck[b.dataset.m]) {
          a.classList.add('matched'); b.classList.add('matched'); matched++; sfx.pop(); addStar(1);
          if (matched === pairs) { setTimeout(() => finishRound(() => memory(level), pairs), 600); } else if (matched % 2 === 0) { praise(); }
        } else { busy = true; setTimeout(() => { a.classList.remove('flip'); b.classList.remove('flip'); busy = false; }, 900); }
      };
    });
    void moves;
  }

  // ------------------------------------------------------------------ maths
  function maths() {
    quiz({
      name: 'maths', title: t('Maths', 'गणित'),
      makeRound: (r) => {
        const emo = pick(D.countables);
        const add = r % 2 === 0 || r < 2;
        let a; let b; let ans;
        if (add) { a = rand(1, 5); b = rand(1, 5); ans = a + b; } else { a = rand(3, 9); b = rand(1, a - 1); ans = a - b; }
        const opts = shuffle([ans, ...shuffle([...Array(11).keys()].filter((k) => k !== ans && Math.abs(k - ans) <= 3)).slice(0, 2)]);
        const row = (n, faded = 0) => Array.from({ length: n }, (_, k) => `<span class="item" style="${k >= n - faded ? 'opacity:.3;text-decoration:line-through' : ''}">${emo}</span>`).join('');
        const stage = add
          ? `<div style="width:100%;text-align:center">${row(a)} <b style="color:#16a34a">+</b> ${row(b)}</div>`
          : `<div style="width:100%;text-align:center">${row(a, b)}</div>`;
        const ques = add ? `${a} + ${b} = ?` : `${a} − ${b} = ?`;
        const spoken = add ? t(`${a} plus ${b}?`, `${D.numbersHi[a]} और ${D.numbersHi[b]} कितने?`) : t(`${a} take away ${b}?`, `${D.numbersHi[a]} में से ${D.numbersHi[b]} गए, कितने बचे?`);
        return { question: ques, stage, options: opts.map((v) => ({ label: v, correct: v === ans })), ask: () => say(spoken), onRight: () => say(numWord(ans)) };
      },
    });
  }

  // ------------------------------------------------------------------ stickers
  function stickers() {
    render(bar(t('My stickers', 'मेरे स्टिकर')), `
      <p style="text-align:center;color:var(--muted);margin:0 0 12px">${t('Every 10 stars wins a new sticker!', 'हर 10 सितारों पर एक नया स्टिकर!')} (${state.stickers.length}/${D.stickers.length})</p>
      <div class="sticker-grid">${D.stickers.map((s) => (state.stickers.includes(s) ? `<button class="sticker" data-s="${s}">${s}</button>` : '<div class="sticker empty">?</div>')).join('')}</div>`, 'stickers');
    qa('[data-s]').forEach((el) => { el.onclick = () => { sfx.pop(); el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); }; });
  }

  // ------------------------------------------------------------------ parents
  function parentGate(onPass, onCancel) {
    const a = rand(3, 9); const b = rand(3, 9); let entry = '';
    modal(`<div class="emo" style="font-size:56px">👨‍👩‍👧</div><h2>${t('Grown-ups only', 'केवल बड़ों के लिए')}</h2>
      <p>${t('Please answer:', 'कृपया उत्तर दें:')} <b>${a} × ${b}</b></p>
      <div class="answer" data-ans>&nbsp;</div>
      <div class="keypad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `<button data-n="${n}">${n}</button>`).join('')}<button data-del>⌫</button><button data-n="0">0</button><button data-ok style="background:#16a34a;color:#fff">✔</button></div>
      <button class="btn ghost" data-close style="margin-top:14px">${t('Cancel', 'रद्द करें')}</button>`);
    $overlay.onclick = (e) => {
      const btn = e.target.closest('button'); if (!btn) { return; }
      sfx.tap();
      if (btn.hasAttribute('data-close')) { closeModal(); if (onCancel) { onCancel(); } return; }
      if (btn.dataset.n !== undefined && entry.length < 3) { entry += btn.dataset.n; }
      if (btn.hasAttribute('data-del')) { entry = entry.slice(0, -1); }
      $overlay.querySelector('[data-ans]').innerHTML = entry || '&nbsp;';
      if (btn.hasAttribute('data-ok')) {
        if (Number(entry) === a * b) { closeModal(); onPass(); } else { sfx.bad(); entry = ''; $overlay.querySelector('[data-ans]').textContent = '✖'; }
      }
    };
  }

  async function parents() {
    const price = (await Store.price()) || CONFIG.priceFallback;
    const seg = (key, val, label) => `<button class="seg ${state[key] === val ? 'on' : ''}" data-set="${key}" data-val="${val}">${label}</button>`;
    render(bar(t('Grown-ups', 'बड़ों के लिए')), `
      <div class="panel">${state.full
    ? `<h3>✅ ${t('Full Pack unlocked', 'फुल पैक अनलॉक है')}</h3><p>${t('Thank you for supporting us!', 'हमारा साथ देने के लिए धन्यवाद!')}</p>`
    : `<h3>⭐ ${t('Unlock the Full Pack', 'फुल पैक अनलॉक करें')}</h3>
          <div class="price">${esc(price)} <span style="font-size:15px;color:var(--muted);font-weight:700">${t('one-time · no ads · no subscription', 'एक बार · कोई विज्ञापन नहीं')}</span></div>
          <ul class="perks"><li>${t('All 36 Hindi consonants (क to ज्ञ) with tracing', 'सभी 36 व्यंजन (क से ज्ञ) लिखने के अभ्यास के साथ')}</li><li>${t('Maths: adding and taking away', 'गणित: जोड़ना और घटाना')}</li><li>${t('Hard memory level', 'कठिन मेमोरी लेवल')}</li><li>${t('All future games', 'आने वाले सभी नए खेल')}</li></ul>
          <div class="row"><button class="btn" data-buy>${t('Unlock', 'अनलॉक करें')} – ${esc(price)}</button><button class="btn ghost" data-restore>${t('Restore', 'रीस्टोर')}</button></div>`}
      </div>
      <div class="panel"><h3>🗣️ ${t('Voice & language', 'आवाज़ और भाषा')}</h3><div class="row">${seg('lang', 'en', 'English')}${seg('lang', 'hi', 'हिंदी')}</div></div>
      <div class="panel"><h3>🔊 ${t('Sound', 'आवाज़')}</h3><div class="row">${seg('sound', true, t('On', 'चालू'))}${seg('sound', false, t('Off', 'बंद'))}</div></div>
      <div class="panel"><h3>⏰ ${t('Daily play time', 'रोज़ खेलने का समय')}</h3><p>${t('After this, the app asks your child to take a break.', 'इसके बाद ऐप बच्चे को आराम करने को कहेगा।')}</p>
        <div class="row">${seg('limit', 0, t('No limit', 'कोई सीमा नहीं'))}${seg('limit', 15, '15 min')}${seg('limit', 30, '30 min')}${seg('limit', 60, '60 min')}</div>
        <p style="margin-top:10px">${t('Played today', 'आज खेला')}: ${Math.round(todayMs() / 60000)} min</p></div>
      <div class="panel"><h3>📈 ${t('Progress', 'प्रगति')}</h3><p>⭐ ${state.stars} · 📒 ${state.stickers.length}/${D.stickers.length} ${t('stickers', 'स्टिकर')}</p><button class="btn ghost" data-reset>${t('Reset progress', 'प्रगति रीसेट करें')}</button></div>
      <div class="panel"><h3>🔒 ${t('Privacy', 'गोपनीयता')}</h3><p>${t('No ads. No accounts. No data leaves this device.', 'कोई विज्ञापन नहीं। कोई अकाउंट नहीं। कोई डेटा फ़ोन से बाहर नहीं जाता।')}</p>
        <button class="btn ghost" data-privacy>${t('Privacy policy', 'गोपनीयता नीति')}</button><p style="margin-top:10px;font-size:13px">Khel Khel Mein v${CONFIG.version}</p></div>`, 'parents');
    qa('[data-set]').forEach((el) => {
      el.onclick = () => {
        sfx.tap();
        const k = el.dataset.set; let v = el.dataset.val;
        v = k === 'sound' ? v === 'true' : k === 'limit' ? Number(v) : v;
        state[k] = v; save(); parents();
      };
    });
    const buy = q('[data-buy]');
    if (buy) {
      buy.onclick = async () => {
        sfx.tap(); buy.disabled = true; buy.textContent = '…';
        const res = await Store.buy();
        if (res.ok) { confetti(); sfx.win(); }
        modal(`<div class="emo">${res.ok ? '🎉' : 'ℹ️'}</div><h2>${res.ok ? t('Unlocked!', 'अनलॉक हो गया!') : t('Not completed', 'पूरा नहीं हुआ')}</h2><p>${esc(res.message)}</p><button class="btn" data-close>OK</button>`);
        parents();
      };
      q('[data-restore]').onclick = async () => {
        sfx.tap(); const res = await Store.restore();
        modal(`<div class="emo">${res.ok ? '✅' : 'ℹ️'}</div><h2>${res.ok ? t('Restored', 'रीस्टोर हो गया') : t('Nothing to restore', 'कुछ रीस्टोर नहीं हुआ')}</h2><p>${esc(res.message)}</p><button class="btn" data-close>OK</button>`);
        parents();
      };
    }
    q('[data-reset]').onclick = () => {
      modal(`<div class="emo">⚠️</div><h2>${t('Reset progress?', 'प्रगति रीसेट करें?')}</h2><p>${t('Stars and stickers will be cleared. Purchases are kept.', 'सितारे और स्टिकर मिट जाएँगे। खरीदारी बनी रहेगी।')}</p>
        <div class="row" style="justify-content:center"><button class="btn orange" data-yes>${t('Reset', 'रीसेट')}</button><button class="btn ghost" data-close>${t('Cancel', 'रद्द करें')}</button></div>`,
      { yes: () => { state.stars = 0; state.stickers = []; save(); parents(); } });
    };
    q('[data-privacy]').onclick = () => {
      const browser = plug('Browser');
      if (browser) { browser.open({ url: CONFIG.privacyUrl }); } else { window.open(CONFIG.privacyUrl, '_blank'); }
    };
  }

  // ------------------------------------------------------------------ purchases
  const Store = {
    plugin() { return plug('Purchases'); },
    ready: false,
    async init() {
      const P = this.plugin();
      if (!P || !CONFIG.revenuecatApiKey) { return; }
      try { await P.configure({ apiKey: CONFIG.revenuecatApiKey }); this.ready = true; const r = await P.getCustomerInfo(); this.apply(r.customerInfo); } catch (e) { console.warn('store init', e); }
    },
    apply(ci) { if (ci && ci.entitlements && ci.entitlements.active && ci.entitlements.active[CONFIG.entitlement]) { state.full = true; save(); } },
    async pkg() { const o = await this.plugin().getOfferings(); return o && o.current && o.current.availablePackages && o.current.availablePackages[0]; },
    async price() { if (!this.ready) { return null; } try { const p = await this.pkg(); return p && p.product && p.product.priceString; } catch { return null; } },
    async buy() {
      if (!this.ready) {
        if (CONFIG.demoUnlock && !window.KKM) { state.full = true; save(); return { ok: true, message: 'Preview mode: unlocked without payment. In the Android app this opens Google Play checkout.' }; }
        return { ok: false, message: 'Purchases are not available right now. Please try again later.' };
      }
      try {
        const p = await this.pkg();
        const r = await this.plugin().purchasePackage({ aPackage: p });
        this.apply(r.customerInfo);
        return state.full ? { ok: true, message: 'All games are now unlocked. Thank you!' } : { ok: false, message: 'The purchase did not complete.' };
      } catch (e) { return { ok: false, message: e && e.userCancelled ? 'Purchase cancelled.' : 'The purchase did not complete.' }; }
    },
    async restore() {
      if (!this.ready) { return { ok: state.full, message: state.full ? 'Already unlocked.' : 'Purchases are not available right now.' }; }
      try { const r = await this.plugin().restorePurchases(); this.apply(r.customerInfo); return { ok: state.full, message: state.full ? 'Full Pack restored.' : 'No previous purchase found for this Google account.' }; } catch { return { ok: false, message: 'Could not reach Google Play.' }; }
    },
  };

  // ------------------------------------------------------------------ play-time limit
  const today = () => new Date().toISOString().slice(0, 10);
  function todayMs() { if (state.played.day !== today()) { state.played = { day: today(), ms: 0 }; state.bonusMs = 0; } return state.played.ms; }
  let breakShown = false;
  setInterval(() => {
    if (document.hidden) { return; }
    todayMs(); state.played.ms += 10000; save();
    if (state.limit && state.played.ms >= state.limit * 60000 + (state.bonusMs || 0) && !breakShown) {
      breakShown = true; speakToken++;
      say(t('Time for a break! See you later.', 'आराम का समय! फिर मिलेंगे।'));
      modal(`<div class="emo">😴</div><h2>${t('Time for a break!', 'आराम का समय!')}</h2><p>${t('You played very well today. See you tomorrow!', 'आज तुमने बहुत अच्छा खेला। कल फिर मिलेंगे!')}</p><button class="btn ghost" data-more>${t('Grown-ups: 15 more minutes', 'बड़े: 15 मिनट और')}</button>`,
        { more: () => parentGate(() => { state.bonusMs = (state.bonusMs || 0) + 15 * 60000; save(); breakShown = false; }, () => { breakShown = false; }) });
      $overlay.onclick = ((orig) => (e) => { if (e.target.closest('[data-more]')) { orig(e); } })($overlay.onclick);
    }
  }, 10000);

  // ------------------------------------------------------------------ start
  const App = plug('App');
  if (App) {
    App.addListener('backButton', () => {
      if (!$overlay.classList.contains('hidden') && !breakShown) { closeModal(); return; }
      if (current === 'home') { App.exitApp(); } else { const b = $app.querySelector('[data-back]'); if (b) { b.click(); } else { home(); } }
    });
  }
  if ('speechSynthesis' in window) { speechSynthesis.getVoices(); }
  document.addEventListener('pointerdown', () => ac(), { once: true });
  Store.init().then(() => { if (current === 'home') { home(); } });
  home();
})();
