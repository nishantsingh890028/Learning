/* Khel Khel Mein v3 – interactive game engines (drag, draw, build, play).
   Every engine is (act, back) => void and finishes with K.finish(act, stars, back). */
(() => {
  'use strict';
  const { t, tx, esc, pick, rand, shuffle, say, sayT, q, qa } = K;
  const E = K.ENGINES;
  const lbl = (o) => (o == null ? '' : typeof o === 'object' ? (K.both() && o.en && o.hi && o.en !== o.hi ? `${esc(o.en)}<small>${esc(o.hi)}</small>` : esc(tx(o))) : esc(o));
  const isEmo = (v) => typeof v === 'string' && /^[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}\u200d\ufe0f\s]+$/u.test(v);
  const wait = (ms) => { const ep = K.rid; return new Promise((r) => setTimeout(() => { if (K.rid === ep) { r(); } }, ms)); };
  const alive = (screen) => K.current === 'act' && document.querySelector(`[data-screen="${screen}"]`);
  K.wait = wait;

  // ---------------------------------------------------------------- shared frame
  /** Render one game screen with progress dots, spoken prompt and a body. */
  function frame(act, back, { prompt, body, r = 0, total = 1, id = 'g' }) {
    K.render(tx(act.title), `<div data-screen="${id}" class="game g-${act.type}">
      ${total > 1 ? `<div class="progress">${Array.from({ length: total }, (_, k) => `<span class="${k < r ? 'done' : k === r ? 'now' : ''}"></span>`).join('')}</div>` : ''}
      <div class="question">${lbl(prompt)}<button class="round speak" data-ask aria-label="Say again">🔊</button></div>
      ${body}</div>`, { name: 'act', back, mascot: true });
    const ask = () => sayT(prompt);
    q('[data-ask]').onclick = () => { K.sfx.tap(); ask(); };
    ask();
  }
  /** run `total` rounds; play(r, next(firstTry)) renders a round */
  function series(act, back, total, play) {
    let r = 0; let stars = 0;
    const next = (good) => { if (good) { stars++; } r++; if (r >= total) { K.finish(act, Math.max(1, stars), back); } else { play(r, next); } };
    play(0, next);
  }
  const starOf = (mistakes) => (mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1);

  // ---------------------------------------------------------------- drag & drop (with tap-tap fallback)
  /**
   * items: elements that can be moved. targets: () => elements that accept drops.
   * onDrop(item, target) → true if accepted (item stays), false to send it back.
   */
  function dnd(items, targets, onDrop) {
    let sel = null;
    const clear = () => { if (sel) { sel.classList.remove('sel'); } sel = null; qa('.drop-hot').forEach((x) => x.classList.remove('drop-hot')); };
    const hit = (x, y) => targets().find((tg) => { const b = tg.getBoundingClientRect(); return x >= b.left - 8 && x <= b.right + 8 && y >= b.top - 8 && y <= b.bottom + 8; });
    items.forEach((el) => {
      el.style.touchAction = 'none';
      el.onpointerdown = (e) => {
        if (el.classList.contains('placed')) { return; }
        e.preventDefault();
        const sx = e.clientX; const sy = e.clientY; let moved = false;
        try { el.setPointerCapture(e.pointerId); } catch { /* synthetic */ }
        el.onpointermove = (m) => {
          const dx = m.clientX - sx; const dy = m.clientY - sy;
          if (!moved && Math.hypot(dx, dy) > 8) { moved = true; el.classList.add('dragging'); K.sfx.tap(); }
          if (moved) {
            el.style.transform = `translate(${dx / K.zoom}px,${dy / K.zoom}px) scale(1.12)`;
            const h = hit(m.clientX, m.clientY); qa('.drop-hot').forEach((x) => x !== h && x.classList.remove('drop-hot')); if (h) { h.classList.add('drop-hot'); }
          }
        };
        el.onpointerup = el.onpointercancel = (u) => {
          el.onpointermove = null; el.onpointerup = null; el.onpointercancel = null;
          el.classList.remove('dragging'); el.style.transform = '';
          qa('.drop-hot').forEach((x) => x.classList.remove('drop-hot'));
          if (moved) { const h = hit(u.clientX, u.clientY); clear(); if (h) { onDrop(el, h); } return; }
          // tap: select, then tap a target
          if (sel === el) { clear(); return; }
          clear(); sel = el; el.classList.add('sel'); K.sfx.pop();
          if (el.dataset.say) { say(el.dataset.say); }
        };
      };
    });
    targets().forEach((tg) => { tg.addEventListener('click', () => { if (sel) { const s = sel; clear(); onDrop(s, tg); } }); });
  }
  K.dnd = dnd;
  const shake = (el) => { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); };
  const bounce = (el) => { el.classList.remove('bounce'); void el.offsetWidth; el.classList.add('bounce'); };

  // ================================================================ SORT into baskets
  // act: { bins:[{id, label, emoji}], items:[{e, bin, name?}], count?, prompt? }
  E.sort = (act, back) => {
    const items = shuffle(act.items).slice(0, act.count || 8);
    let left = items.length; let mistakes = 0;
    frame(act, back, {
      id: 'sort', prompt: act.prompt || (items.every((it) => isEmo(it.e)) ? { en: 'Drag each picture into the right basket.', hi: 'हर चित्र को सही टोकरी में डालो।' } : { en: 'Drag each word into the right basket.', hi: 'हर शब्द को सही टोकरी में डालो।' }),
      body: `<div class="tray">${items.map((it, k) => (it.name && isEmo(it.e) && /\s/.test(tx(it.name)) ? `<button class="piece cap" data-i="${k}" data-say="${esc(tx(it.name))}"><span class="pe">${it.e}</span><span class="pc">${esc(tx(it.name))}</span></button>` : `<button class="piece ${isEmo(it.e) ? '' : 'txt'}" data-i="${k}" data-say="${esc(it.name ? tx(it.name) : '')}">${esc(it.e)}</button>`)).join('')}</div>
        <div class="bins b${act.bins.length}">${act.bins.map((b) => `<div class="bin" data-bin="${b.id}"><div class="bin-head">${b.emoji || ''} ${lbl(b.label)}</div><div class="bin-in"></div></div>`).join('')}</div>`,
    });
    dnd(qa('.piece'), () => qa('.bin'), async (el, bin) => {
      const it = items[Number(el.dataset.i)];
      if (it.bin === bin.dataset.bin) {
        el.classList.add('placed'); bin.querySelector('.bin-in').appendChild(el); bounce(bin); K.sfx.good(); left--;
        if (it.name) { say(tx(it.name)); }
        if (!left) { await K.praise(); if (alive('sort')) { K.finish(act, starOf(mistakes), back); } }
      } else {
        mistakes++; shake(el); K.tryAgain();
        if (it.why) { await wait(900); sayT(it.why); }
      }
    });
  };

  // ================================================================ ORDER (tap in the right sequence)
  // act: { sets:[{ prompt?, items:[{e, label}] }] }  items listed in the correct order
  E.order = (act, back) => {
    const sets = act.sets.slice(0, act.count || act.sets.length);
    series(act, back, sets.length, (r, next) => {
      const S = sets[r]; const n = S.items.length; let pos = 0; let mistakes = 0;
      const mixed = shuffle(S.items.map((it, k) => ({ ...it, k })));
      frame(act, back, {
        id: 'order', r, total: sets.length, prompt: S.prompt || act.prompt || { en: 'Tap the pictures in the right order.', hi: 'चित्रों को सही क्रम में दबाओ।' },
        body: `<div class="slots-row">${Array.from({ length: n }, (_, k) => `<div class="oslot" data-s="${k}"><span class="num">${k + 1}</span></div>`).join('')}</div>
          <div class="tray">${mixed.map((it) => `<button class="piece card-piece" data-k="${it.k}"><span class="pe">${it.e}</span>${it.label ? `<span class="pl">${lbl(it.label)}</span>` : ''}</button>`).join('')}</div>`,
      });
      qa('[data-k]').forEach((el) => {
        el.onclick = async () => {
          const k = Number(el.dataset.k);
          if (k === pos) {
            K.sfx.good(); el.classList.add('placed'); el.disabled = true; q(`[data-s="${pos}"]`).appendChild(el); pos++;
            const it = S.items[k]; if (it.say || it.label) { say(tx(it.say || it.label)); }
            if (pos === n) { await wait(400); await K.praise(); if (S.done) { await sayT(S.done); } if (alive('order')) { next(mistakes === 0); } }
          } else { mistakes++; shake(el); K.tryAgain(); }
        };
      });
    });
  };

  // ================================================================ MATCH pairs (tap left, then right)
  // act: { pairs:[[a,b],...], perRound?:4, rounds?, prompt? }  a/b: emoji/text or {en,hi}
  E.match = (act, back) => {
    const per = act.perRound || 4; const all = shuffle(act.pairs); const total = act.rounds || Math.min(3, Math.ceil(all.length / per));
    series(act, back, total, (r, next) => {
      let set = all.slice(r * per, r * per + per); if (set.length < 2) { set = shuffle(act.pairs).slice(0, per); }
      const L = set.map((p, k) => ({ v: p[0], k })); const R = shuffle(set.map((p, k) => ({ v: p[1], k })));
      let sel = null; let left = set.length; let mistakes = 0;
      frame(act, back, {
        id: 'match', r, total, prompt: act.prompt || { en: 'Match the pairs. Tap one on the left, then its partner.', hi: 'जोड़ी मिलाओ। बाईं ओर एक दबाओ, फिर उसका साथी।' },
        body: `<div class="match"><svg class="lines"></svg><div class="mcol">${L.map((x) => `<button class="mi ${isEmo(x.v) ? 'emo' : ''}" data-l="${x.k}">${lbl(x.v)}</button>`).join('')}</div>
          <div class="mcol">${R.map((x) => `<button class="mi ${isEmo(x.v) ? 'emo' : ''}" data-r="${x.k}">${lbl(x.v)}</button>`).join('')}</div></div>`,
      });
      const line = (a, b, col) => {
        const box = q('.match').getBoundingClientRect(); const A = a.getBoundingClientRect(); const B = b.getBoundingClientRect();
        q('.lines').insertAdjacentHTML('beforeend', `<line x1="${(A.right - box.left) / K.zoom}" y1="${(A.top + A.height / 2 - box.top) / K.zoom}" x2="${(B.left - box.left) / K.zoom}" y2="${(B.top + B.height / 2 - box.top) / K.zoom}" stroke="${col}" stroke-width="6" stroke-linecap="round"/>`);
      };
      const COLS = ['#f97316', '#16a34a', '#3b82f6', '#a855f7', '#ec4899', '#0ea5a4'];
      qa('[data-l]').forEach((el) => { el.onclick = () => { if (el.disabled) { return; } K.sfx.pop(); qa('[data-l]').forEach((x) => x.classList.remove('sel')); el.classList.add('sel'); sel = el; const v = set[Number(el.dataset.l)][0]; if (typeof v === 'object' || !/^\p{Extended_Pictographic}/u.test(v)) { sayT(v); } }; });
      qa('[data-r]').forEach((el) => {
        el.onclick = async () => {
          if (el.disabled) { return; }
          if (!sel) { bounce(q('[data-l]:not([disabled])')); say(t('First tap one on the left.', 'पहले बाईं ओर वाला दबाओ।')); return; }
          if (sel.dataset.l === el.dataset.r) {
            const col = COLS[(set.length - left) % COLS.length];
            sel.disabled = true; el.disabled = true; sel.classList.remove('sel'); sel.classList.add('ok'); el.classList.add('ok'); sel.style.borderColor = col; el.style.borderColor = col;
            line(sel, el, col); K.sfx.good(); left--; const p = set[Number(el.dataset.r)]; sel = null;
            if (act.sayPair) { await sayT(act.sayPair(p)); } else if (typeof p[1] === 'object') { await sayT(p[1]); }
            if (!left) { await K.praise(); if (alive('match')) { next(mistakes === 0); } }
          } else { mistakes++; shake(el); K.tryAgain(); }
        };
      });
    });
  };

  // ================================================================ FEED (counting by giving)
  // act: { max, rounds, who?:[[emoji, en, hi, food]] }
  const EATERS = [['🐒', 'monkey', 'बंदर', '🍌', 'bananas', 'केले', 'banana', 'केला'], ['🐰', 'rabbit', 'खरगोश', '🥕', 'carrots', 'गाजर', 'carrot', 'गाजर'], ['🐘', 'elephant', 'हाथी', '🍎', 'apples', 'सेब', 'apple', 'सेब'], ['🐿️', 'squirrel', 'गिलहरी', '🥜', 'nuts', 'मूँगफली', 'nut', 'मूँगफली'], ['🐦', 'bird', 'चिड़िया', '🌾', 'grains', 'दाने', 'grain', 'दाना'], ['🐄', 'cow', 'गाय', '🌿', 'leaves', 'पत्ते', 'leaf', 'पत्ता']];
  E.feed = (act, back) => {
    const total = act.rounds || 5;
    series(act, back, total, (r, next) => {
      const E0 = pick(EATERS); const n = rand(act.min || 1, act.max || 5); const [who, en, hi, food] = E0; const fen = n === 1 ? E0[6] : E0[4]; const fhi = n === 1 ? E0[7] : E0[5]; let given = 0; let tries = 0;
      const prompt = { en: `Give ${n} ${fen} to the ${en}.`, hi: `${hi} को ${n} ${fhi} दो।` };
      frame(act, back, {
        id: 'feed', r, total, prompt,
        body: `<div class="feed"><div class="eater"><span class="who">${who}</span><div class="plate" data-plate></div><div class="count-badge" data-cnt>0</div></div>
          <div class="tray">${Array.from({ length: Math.max(n + 3, 6) }, (_, k) => `<button class="piece food" data-f="${k}">${food}</button>`).join('')}</div>
          <div class="nav"><button class="btn ghost" data-undo>↺ ${t('Take back', 'वापस लो')}</button><button class="btn green" data-done>✔ ${t('Done', 'हो गया')}</button></div></div>`,
      });
      const upd = () => { q('[data-cnt]').textContent = given; };
      dnd(qa('.food'), () => [q('[data-plate]'), q('.who')], (el) => { el.classList.add('placed'); q('[data-plate]').appendChild(el); given++; upd(); K.sfx.pop(); say(K.ui() === 'hi' ? K.hiNum(given) : String(given)); });
      q('[data-undo]').onclick = () => { const last = q('[data-plate] .food:last-child'); if (!last) { return; } last.classList.remove('placed'); q('.tray').appendChild(last); given--; upd(); K.sfx.tap(); };
      q('[data-done]').onclick = async () => {
        if (given === n) { bounce(q('.who')); q('.who').textContent = '😋'; K.sfx.good(); await say(t(`Yes! ${n} ${fen}. Yummy!`, `हाँ! ${K.hiNum(n)} ${fhi}। मज़ा आ गया!`)); if (alive('feed')) { next(tries === 0); } } else {
          tries++; shake(q('.plate')); await say(given < n ? t(`That is ${given}. Give some more!`, `यह ${K.hiNum(given)} हैं। थोड़े और दो!`) : t(`That is ${given}. Too many! Take some back.`, `यह ${K.hiNum(given)} हैं। ज़्यादा हो गए! कुछ वापस लो।`));
        }
      };
    });
  };

  // ================================================================ POP balloons
  // act: { sets:[{ prompt, good:[...], bad:[...] }] } or act.kind: 'letters'|'numbers'|'hindi'
  E.pop = (act, back) => {
    const sets = act.sets || genPopSets(act);
    series(act, back, sets.length, (r, next) => {
      const S = sets[r]; let need = 3; let mistakes = 0;
      frame(act, back, { id: 'pop', r, total: sets.length, prompt: S.prompt, body: '<div class="sky" data-sky><div class="pop-count" data-pc>🎯 0/3</div></div>' });
      const sky = q('[data-sky]'); const COLS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7', '#ec4899'];
      let n = 0;
      const launch = () => {
        if (!alive('pop')) { clearInterval(timer); return; }
        const good = Math.random() < 0.45; const v = good ? pick(S.good) : pick(S.bad);
        const b = document.createElement('button'); b.className = 'balloon'; b.innerHTML = `<span>${esc(v)}</span>`;
        b.style.left = `${8 + ((n++ * 23) % 76)}%`; b.style.background = pick(COLS); b.style.animationDuration = `${act.speed || 7}s`; b.dataset.good = good ? 1 : '';
        b.onpointerdown = async () => {
          if (b.dataset.done) { return; } b.dataset.done = 1;
          if (b.dataset.good) { b.classList.add('popped'); K.sfx.pop(); need--; q('[data-pc]').textContent = `🎯 ${3 - need}/3`; say(String(v)); if (!need) { clearInterval(timer); await wait(500); await K.praise(); if (alive('pop')) { next(mistakes < 2); } } } else { mistakes++; b.classList.add('nope'); K.sfx.bad(); setTimeout(() => { b.dataset.done = ''; b.classList.remove('nope'); }, 500); }
        };
        b.addEventListener('animationend', () => b.remove());
        sky.appendChild(b);
      };
      launch(); const timer = setInterval(launch, act.every || 1100);
    });
  };
  function genPopSets(act) {
    const L = 'ABCDEFGHIJKLMNOPRSTUW'.split(''); const H = 'अआइईउऊएऐओऔकखगघचछजझटठडढतथदधनपफबभमयरलवसह'.split('').filter((c) => !/[ािीुूेैोौ]/.test(c));
    return Array.from({ length: act.rounds || 3 }, () => {
      if (act.kind === 'numbers') { const n = rand(act.from || 1, act.to || 20); const bad = shuffle(Array.from({ length: (act.to || 20) - (act.from || 1) + 1 }, (_, k) => k + (act.from || 1)).filter((x) => x !== n)).slice(0, 6); return { prompt: { en: `Pop every balloon with ${n}!`, hi: `${n} वाले सारे गुब्बारे फोड़ो!` }, good: [n], bad }; }
      if (act.kind === 'even') { return { prompt: { en: 'Pop the EVEN numbers (2, 4, 6…)!', hi: 'सम संख्याएँ (2, 4, 6…) फोड़ो!' }, good: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], bad: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] }; }
      if (act.kind === 'hindi') { const c = pick(act.letters || H); return { prompt: { en: `Pop every ${c}!`, hi: `सारे "${c}" फोड़ो!` }, good: [c], bad: shuffle(H.filter((x) => x !== c)).slice(0, 6) }; }
      const c = pick(act.letters || L); const lower = act.lower; const v = lower ? c.toLowerCase() : c;
      return { prompt: { en: `Pop every letter ${v}!`, hi: `सारे "${v}" फोड़ो!` }, good: [v], bad: shuffle(L.filter((x) => x !== c)).slice(0, 6).map((x) => (lower ? x.toLowerCase() : x)) };
    });
  }

  K.G = { frame, series, starOf, lbl, shake, bounce, wait, alive };
})();
