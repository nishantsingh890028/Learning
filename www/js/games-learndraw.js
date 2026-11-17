/* Khel Khel Mein – "Learn to draw": step-by-step drawing with Golu.
   Each step shows a dotted line; the child traces it and the line snaps perfect. When the picture
   is finished it comes alive in colour, and the child taps any part to paint it their way.
   act: { lessons:['apple','horse',…] } plays those pictures in a row.
   act without lessons opens the picture shelf (fruits, animals, things, Indian art) with a star per picture. */
(() => {
  'use strict';
  const { t, tx, say, sayT, q, qa } = K;
  const E = K.ENGINES; const { frame, series, lbl, wait, alive } = K.G;
  const L = K.DRAW_LESSONS;
  const NS = 'http://www.w3.org/2000/svg';
  const CATS = [['fruits', '🍎', { en: 'Fruits', hi: 'फल' }], ['animals', '🐾', { en: 'Animals', hi: 'जानवर' }], ['things', '🏠', { en: 'Things', hi: 'चीज़ें' }], ['indian', '🪷', { en: 'Indian art', hi: 'भारतीय कला' }]];
  const PENS = ['#3d2c8d', '#ef4444', '#f97316', '#facc15', '#22c55e', '#0ea5e9', '#a855f7', '#ec4899', '#92400e', '#111827'];
  const PAINTS = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#15803d', '#38bdf8', '#2563eb', '#a855f7', '#ec4899', '#92400e', '#9ca3af', '#ffffff'];

  // colour maths for the soft, shaded finished picture
  const rgb = (h) => { const n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
  const hex = (r, g, b) => '#' + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  const shade = (h, p) => { const [r, g, b] = rgb(h); const to = p < 0 ? 0 : 255; const a = Math.abs(p) / 100; return hex(r + (to - r) * a, g + (to - g) * a, b + (to - b) * a); };
  const stops = (c) => `<stop offset="0" stop-color="${shade(c, 55)}"/><stop offset=".6" stop-color="${c}"/><stop offset="1" stop-color="${shade(c, -25)}"/>`;

  // the child's own progress: a star for every picture finished
  const doneMap = () => { const c = K.child(); if (!c) { return {}; } c.drawDone = c.drawDone || {}; return c.drawDone; };

  // ================================================================ the picture shelf
  function shelf(act, back, cat) {
    const done = doneMap(); const keys = Object.keys(L);
    cat = cat || (act.cat) || (keys.find((k) => !done[k]) ? L[keys.find((k) => !done[k])].cat : 'fruits');
    const got = keys.filter((k) => done[k]).length;
    const prompt = { en: 'What shall we draw today? Pick a picture!', hi: 'आज क्या बनाएँ? एक चित्र चुनो!' };
    K.render(tx(act.title), `<div data-screen="ldshelf" class="game g-learndraw">
      <div class="question">${lbl(prompt)}<button class="round speak" data-ask aria-label="Say again">🔊</button></div>
      <div class="ld-cats">${CATS.map(([k, e, n]) => `<button class="ld-cat ${k === cat ? 'on' : ''}" data-cat="${k}">${e} ${lbl(n)}</button>`).join('')}</div>
      <div class="ld-grid">${keys.filter((k) => L[k].cat === cat).map((k) => `<button class="ld-card ${done[k] ? 'got' : ''}" data-k="${k}"><span class="em">${L[k].e}</span><span class="nm">${lbl(L[k].name)}</span>${done[k] ? '<span class="st">⭐</span>' : ''}</button>`).join('')}</div>
      <div class="ld-progress">⭐ ${t(`${got} of ${keys.length} pictures drawn`, `${keys.length} में से ${got} चित्र बने`)}</div></div>`, { name: 'act', back, mascot: true });
    q('[data-ask]').onclick = () => { K.sfx.tap(); sayT(prompt); };
    sayT(prompt);
    qa('[data-cat]').forEach((b) => { b.onclick = () => { K.sfx.tap(); shelf(act, back, b.dataset.cat); }; });
    qa('[data-k]').forEach((b) => { b.onclick = () => { K.sfx.pop(); const k = b.dataset.k; play({ ...act, id: `${act.id || 'learndraw'}-${k}`, lessons: [k], title: { en: `Draw: ${L[k].name.en}`, hi: `बनाओ: ${L[k].name.hi}` } }, () => shelf(act, back, L[k].cat)); }; });
  }

  // ================================================================ one or more lessons
  function play(act, back) {
    const list = act.lessons.filter((k) => L[k]);
    series(act, back, list.length, (r, next) => {
      const key = list[r]; const Ls = L[key]; const n = Ls.steps.length;
      let step = 0; let inked = {}; let cov = {}; let strokes = []; let pen = PENS[0]; let paint = PAINTS[0]; let snaps = 0; const colours = {};
      const intro = { en: `Let's draw ${/^[aeiou]/i.test(Ls.name.en) ? 'an' : 'a'} ${Ls.name.en.toLowerCase()}! ${Ls.steps[0].t.en}`, hi: `चलो ${Ls.name.hi} बनाएँ! ${Ls.steps[0].t.hi}` };
      frame(act, back, {
        id: 'ld', r, total: list.length, prompt: intro,
        body: `<div class="ld-head"><span class="em">${Ls.e}</span> ${lbl(Ls.name)}</div>
          <div class="ld-bar" data-bar></div>
          <div class="ld-pad"><svg viewBox="0 0 400 400" data-guide></svg><canvas data-ink></canvas></div>
          <div class="palette ld-pens" data-pens></div>
          <div class="nav" data-nav></div>`,
      });
      const guide = q('[data-guide]'); const ink = q('[data-ink]'); const pad = q('.ld-pad');
      const dpr = window.devicePixelRatio || 1; const Wp = pad.clientWidth;
      ink.width = Math.round(Wp * dpr); ink.height = Math.round(Wp * dpr);
      const c = ink.getContext('2d'); c.setTransform(ink.width / 400, 0, 0, ink.width / 400, 0, 0);
      const kOf = (si, i) => `${si}|${i}`;
      const isDone = () => step >= n;
      const colourOf = (i) => colours[i] || Ls.steps[i].c;

      // ---- prompt line + buttons
      const setPrompt = (o) => { const qe = q('.question'); qe.innerHTML = `${lbl(o)}<button class="round speak" data-ask aria-label="Say again">🔊</button>`; q('[data-ask]').onclick = () => { K.sfx.tap(); sayT(o); }; };
      const tellStep = (speak = true) => { const o = isDone() ? { en: `Wow, your ${Ls.name.en.toLowerCase()} came alive! Tap any part to colour it your way.`, hi: `वाह, तुम्हारा ${Ls.name.hi} जी उठा! किसी भी हिस्से को छूकर अपने रंग भरो।` } : { en: `Step ${step + 1} of ${n}: ${Ls.steps[step].t.en}`, hi: `चरण ${step + 1}/${n}: ${Ls.steps[step].t.hi}` }; setPrompt(o); if (speak) { sayT(isDone() ? o : Ls.steps[step].t); } };
      const swatches = () => {
        const list2 = isDone() ? PAINTS : PENS; const cur = isDone() ? paint : pen;
        q('[data-pens]').innerHTML = list2.map((p) => `<button class="sw ${p === cur ? 'on' : ''}" data-pen="${p}" style="background:${p}" aria-label="colour"></button>`).join('');
        qa('[data-pen]').forEach((b) => { b.onclick = () => { K.sfx.tap(); if (isDone()) { paint = b.dataset.pen; } else { pen = b.dataset.pen; } qa('[data-pen]').forEach((x) => x.classList.toggle('on', x === b)); }; });
      };
      const navs = () => {
        q('[data-nav]').innerHTML = isDone()
          ? `<button class="btn ghost" data-mix>🎲 ${t('Surprise colours', 'जादुई रंग')}</button><button class="btn ghost" data-again>↻ ${t('Draw again', 'फिर से बनाओ')}</button><button class="btn green" data-fin>✔ ${t('Finished!', 'बन गया!')}</button>`
          : `<button class="btn ghost" data-show>👀 ${t('Show me', 'दिखाओ')}</button><button class="btn ghost" data-prev ${step ? '' : 'disabled'}>◀</button><button class="btn ghost" data-clear>↺</button><button class="btn green" data-next>${step === n - 1 ? `✨ ${t('Finish', 'पूरा करो')}` : `${t('I drew it', 'बना लिया')} ▶`}</button>`;
        const on = (sel, fn) => { const b = q(sel); if (b) { b.onclick = fn; } };
        on('[data-show]', () => { K.sfx.tap(); showMe(); });
        on('[data-prev]', () => { if (step) { K.sfx.tap(); step--; render(); } });
        on('[data-clear]', () => { K.sfx.tap(); strokes = strokes.filter((s) => s.owner && inked[s.owner]); redraw(); });
        on('[data-next]', () => { advance(); });
        on('[data-mix]', () => { Ls.steps.forEach((_, i) => recolour(i, PAINTS[Math.floor(Math.random() * (PAINTS.length - 1))])); K.sfx.pop(); });
        on('[data-again]', () => { K.sfx.tap(); step = 0; inked = {}; cov = {}; strokes = []; redraw(); render(); });
        on('[data-fin]', async () => { saveArt(); K.sfx.good(); await K.praise(); if (alive('ld')) { next(snaps >= Math.ceil(totalPaths() / 2)); } });
      };
      const totalPaths = () => Ls.steps.reduce((a, s) => a + s.d.length, 0);

      // ---- the drawing: dotted guide, inked lines, finished colour picture
      function render(speak = true) {
        let out = '';
        if (isDone()) {
          out = `<defs>${Ls.steps.map((s, i) => `<radialGradient id="ldg${i}" cx="45%" cy="35%" r="75%">${stops(colourOf(i))}</radialGradient>`).join('')}<radialGradient id="ldhalo"><stop offset="0" stop-color="${Ls.halo}" stop-opacity=".45"/><stop offset="1" stop-color="${Ls.halo}" stop-opacity="0"/></radialGradient></defs><rect width="400" height="400" fill="#fffdf7"/><circle cx="200" cy="210" r="190" fill="url(#ldhalo)"/>`;
          Ls.order.forEach((i) => { const s = Ls.steps[i]; const col = colourOf(i); s.d.forEach((d) => { out += s.f ? `<path class="part pop" data-s="${i}" d="${d}" fill="url(#ldg${i})" stroke="${shade(col, -35)}" stroke-width="2.5" stroke-linejoin="round"/>` : `<path class="part pop" data-s="${i}" d="${d}" fill="none" stroke="${col === '#fff8e7' ? '#d4a72c' : col}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`; }); });
        } else {
          Ls.steps.forEach((s, i) => { if (i > step) { return; } s.d.forEach((d, j) => { const k = inked[kOf(i, j)]; out += k ? `<path class="inked" d="${d}" stroke="${k}"/>` : `<path class="${i < step ? 'was' : 'now'}" d="${d}"/>`; }); });
        }
        guide.innerHTML = out;
        ink.style.opacity = isDone() ? 0 : 1; ink.style.pointerEvents = isDone() ? 'none' : '';
        q('[data-bar]').innerHTML = Ls.steps.map((_, i) => `<i class="${i < step || isDone() ? 'on' : i === step ? 'cur' : ''}"></i>`).join('');
        swatches(); navs(); tellStep(speak);
      }
      async function advance() {
        step++;
        if (isDone()) {
          const first = !doneMap()[key]; doneMap()[key] = 1; K.save();
          K.confetti(); K.sfx.win && K.sfx.win(); render(false);
          await K.praise(); if (alive('ld')) { tellStep(true); if (first) { K.addStars(1); } }
          return;
        }
        K.sfx.pop(); render();
      }
      render(false);

      // ---- child's ink, in the 400 x 400 space
      const SAMPLES = {};
      const samples = (si, i) => {
        const k = kOf(si, i); if (SAMPLES[k]) { return SAMPLES[k]; }
        const el = document.createElementNS(NS, 'path'); el.setAttribute('d', Ls.steps[si].d[i]); guide.appendChild(el);
        const pts = []; try { const T = el.getTotalLength(); const m = Math.max(40, Math.min(200, Math.round(T / 5))); for (let j = 0; j < m; j++) { const p = el.getPointAtLength(T * j / (m - 1)); pts.push([p.x, p.y]); } } catch { /* not rendered */ }
        el.remove(); SAMPLES[k] = pts; return pts;
      };
      const lineW = 7;
      const dot = (s) => { c.strokeStyle = s.color; c.fillStyle = s.color; c.lineWidth = lineW; c.lineCap = 'round'; c.lineJoin = 'round'; };
      function drawStroke(s) { dot(s); if (s.pts.length === 1) { c.beginPath(); c.arc(s.pts[0][0], s.pts[0][1], lineW / 2, 0, 7); c.fill(); return; } c.beginPath(); s.pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke(); }
      function redraw() { c.clearRect(0, 0, 400, 400); strokes.forEach((s) => { if (!(s.owner && inked[s.owner])) { drawStroke(s); } }); }
      const pos = (e) => { const b = ink.getBoundingClientRect(); return [(e.clientX - b.left) / b.width * 400, (e.clientY - b.top) / b.height * 400]; };
      let cur = null;
      ink.onpointerdown = (e) => { if (isDone()) { return; } cur = { pts: [pos(e)], color: pen }; try { ink.setPointerCapture(e.pointerId); } catch { /* synthetic */ } drawStroke(cur); };
      ink.onpointermove = (e) => { if (!cur) { return; } const p = pos(e); const l = cur.pts[cur.pts.length - 1]; dot(cur); c.beginPath(); c.moveTo(...l); c.lineTo(...p); c.stroke(); cur.pts.push(p); };
      ink.onpointerup = ink.onpointercancel = () => { if (!cur) { return; } const s = cur; cur = null; strokes.push(s); snap(s); };
      // a stroke that follows the dotted line becomes a perfect line in the child's colour
      function snap(st) {
        if (isDone() || st.pts.length < 4) { return; }
        const si = step; const thr = 20; let best = -1; let bestF = 0;
        Ls.steps[si].d.forEach((_, i) => { if (inked[kOf(si, i)]) { return; } const S = samples(si, i); if (!S.length) { return; } let near = 0; st.pts.forEach(([x, y]) => { if (S.some(([a, b]) => Math.abs(a - x) < thr && Math.abs(b - y) < thr)) { near++; } }); const f = near / st.pts.length; if (f > bestF) { bestF = f; best = i; } });
        if (best < 0 || bestF < 0.5) { return; }
        const k = kOf(si, best); const S = samples(si, best); const cv = cov[k] || (cov[k] = new Array(S.length).fill(false));
        S.forEach(([a, b], j) => { if (!cv[j] && st.pts.some(([x, y]) => Math.hypot(a - x, b - y) < thr)) { cv[j] = true; } }); st.owner = k;
        if (cv.filter(Boolean).length / cv.length >= 0.7) {
          inked[k] = st.color; snaps++; redraw(); render(false); K.sfx.good();
          say(K.pick(K.ui() === 'hi' ? ['बहुत बढ़िया!', 'एकदम सही!', 'शाबाश!'] : ['Perfect!', 'Lovely line!', 'Well done!']));
          if (Ls.steps[si].d.every((_, i) => inked[kOf(si, i)])) { wait(700).then(() => { if (alive('ld') && step === si) { advance(); } }); }
        }
      }
      // ---- Golu's pencil shows how the step is drawn
      let demoRun = 0;
      function showMe() {
        if (isDone()) { return; } const run = ++demoRun; guide.querySelectorAll('.demo,.ldpen').forEach((x) => x.remove());
        const ps = Ls.steps[step].d.map((d) => { const p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); p.setAttribute('class', 'demo'); guide.appendChild(p); const T = p.getTotalLength(); p.style.strokeDasharray = T; p.style.strokeDashoffset = T; return { p, T }; });
        const pn = document.createElementNS(NS, 'text'); pn.setAttribute('class', 'ldpen'); pn.textContent = '✏️'; guide.appendChild(pn);
        let k = 0; let t0 = performance.now(); const per = 1500;
        const tick = (now) => {
          if (run !== demoRun || !pn.isConnected) { return; }
          const cur2 = ps[k]; const f = Math.min(1, (now - t0) / per); cur2.p.style.strokeDashoffset = cur2.T * (1 - f); const pt = cur2.p.getPointAtLength(cur2.T * f); pn.setAttribute('x', pt.x - 4); pn.setAttribute('y', pt.y - 2);
          if (f >= 1) { k++; t0 = now; if (k >= ps.length) { setTimeout(() => { if (run === demoRun) { pn.remove(); ps.forEach(({ p }) => p.remove()); } }, 700); return; } }
          requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      // ---- tap the finished picture to paint it
      function recolour(i, col) {
        colours[i] = col; const s = Ls.steps[i];
        if (s.f) { const g = guide.querySelector(`#ldg${i}`); if (g) { g.innerHTML = stops(col); } guide.querySelectorAll(`[data-s="${i}"]`).forEach((p) => p.setAttribute('stroke', shade(col, -35))); } else { guide.querySelectorAll(`[data-s="${i}"]`).forEach((p) => p.setAttribute('stroke', col)); }
      }
      guide.addEventListener('click', (e) => { if (!isDone()) { return; } const p = e.target.closest('[data-s]'); if (!p) { return; } recolour(+p.dataset.s, paint); K.sfx.pop(); p.classList.remove('pop'); void p.getBBox(); p.classList.add('pop'); });
      function saveArt() {
        try {
          const clone = guide.cloneNode(true); clone.setAttribute('xmlns', NS); clone.querySelectorAll('.demo,.ldpen').forEach((x) => x.remove());
          const xml = new XMLSerializer().serializeToString(clone);
          K.state.gallery.unshift({ img: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml), title: tx(Ls.name), day: K.today(), child: K.state.current }); K.state.gallery = K.state.gallery.slice(0, 24); K.save();
        } catch { /* storage full */ }
      }
    });
  }

  E.learndraw = (act, back) => { if (act.lessons && act.lessons.length) { play(act, back); } else { shelf(act, back); } };
  K.learnDrawShelf = shelf;
})();
