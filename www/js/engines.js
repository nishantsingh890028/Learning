/* Activity engines. Every activity in the curriculum is { id, world, type, title, levels, skills, ... } and runs here. */
(() => {
  'use strict';
  const { t, tx, esc, pick, rand, shuffle, say, sayT, q, qa } = K;

  // ---------------------------------------------------------------- shared end screen
  K.finish = (act, stars, back) => {
    K.complete(act, stars);
    K.addStars(0);
    K.confetti(); K.sfx.win();
    say(t('Hooray! You finished!', 'शाबाश! तुमने पूरा कर लिया!'));
    const next = K.nextAction;
    K.modal(`<div class="emo">🏆</div><h2>${t('You did it!', 'तुमने कर दिखाया!')}</h2>
      <p>${'⭐'.repeat(Math.max(1, Math.min(stars, 10)))}<br>${t(stars === 1 ? '1 star' : `${stars} stars`, `${stars} ${stars === 1 ? 'सितारा' : 'सितारे'}`)}</p>
      ${act.remember ? `<p class="remember">💡 ${esc(tx(act.remember))}</p>` : ''}
      <div class="row center">${next ? `<button class="btn green" data-next>${t('Next', 'आगे')} ▶</button>` : ''}<button class="btn ${next ? 'ghost' : 'green'}" data-again>↻ ${t('Again', 'फिर से')}</button><button class="btn ghost" data-home>🏠</button></div>`,
    { next: () => next(), again: () => K.run(act, back), home: () => K.home() });
    if (act.remember) { setTimeout(() => sayT(act.remember), 1600); }
  };

  /** Generic multiple-choice rounds. makeRound(i) → {question, sub?, stage?, options:[{label, correct, say?}], ask, onRight?, explain?} */
  function rounds(act, title, total, makeRound, back, extraStars = 0) {
    let r = 0; let earned = 0;
    const next = () => {
      if (r >= total) { K.finish(act, earned + extraStars, back); return; }
      const R = makeRound(r);
      K.render(title, `
        <div class="progress">${Array.from({ length: total }, (_, k) => `<span class="${k < r ? 'done' : ''}"></span>`).join('')}</div>
        <div class="question">${R.question}<button class="round speak" data-ask aria-label="Say again">🔊</button></div>
        ${R.sub || ''}
        ${R.stage ? `<div class="stage">${R.stage}</div>` : ''}
        <div class="options ${R.options.length === 4 || R.wide ? 'two' : ''} ${R.textOptions ? 'text' : ''}">${R.options.map((o, k) => `<button class="opt" data-k="${k}">${o.label}</button>`).join('')}</div>
        <div class="explain hidden" data-explain></div>`, { name: 'act', back });
      const ask = () => { if (R.ask) { R.ask(); } };
      ask();
      q('[data-ask]').onclick = () => { K.sfx.tap(); ask(); };
      if (R.bind) { R.bind(); }
      let tries = 0;
      qa('[data-k]').forEach((el) => {
        el.onclick = async () => {
          const o = R.options[Number(el.dataset.k)];
          if (o.correct) {
            el.classList.add('right'); qa('[data-k]').forEach((b) => { b.disabled = true; });
            if (tries === 0) { earned++; K.addStars(1); }
            await K.praise();
            if (R.onRight) { await R.onRight(); }
            if (R.explain) {
              const ex = q('[data-explain]'); ex.innerHTML = `💡 ${esc(tx(R.explain))}`; ex.classList.remove('hidden');
              await sayT(R.explain);
              ex.insertAdjacentHTML('beforeend', `<div style="margin-top:10px"><button class="btn green" data-go>${t('Next', 'आगे')} ▶</button></div>`);
              q('[data-go]').onclick = () => { K.sfx.tap(); r++; next(); };
            } else { r++; setTimeout(() => { if (K.current === 'act') { next(); } }, 700); }
          } else {
            tries++; el.classList.add('wrong'); setTimeout(() => el.classList.remove('wrong'), 450);
            K.tryAgain();
            if (R.hintOnWrong && tries >= 2) { const ex = q('[data-explain]'); ex.innerHTML = `💡 ${esc(tx(R.hintOnWrong))}`; ex.classList.remove('hidden'); }
          }
        };
      });
    };
    next();
  }
  K.rounds = rounds;

  const label = (o) => (typeof o === 'object' && o !== null ? (o.en && o.hi && K.both() ? `${esc(o.en)}<small>${esc(o.hi)}</small>` : esc(tx(o))) : esc(o));

  // ================================================================ 1. CARDS (learn + quick check)
  function cards(act, back) {
    const items = act.items;
    const speakItem = async (it) => {
      if (it.say) { return sayT(it.say); }
      if (act.bilingual) {   // English vocabulary with Hindi meaning
        await say(it.word.en, { lang: 'en-IN' });
        if (K.child().medium !== 'en' && it.word.hi) { await say(it.word.hi, { lang: 'hi-IN' }); }
        return;
      }
      return sayT(it.word || it.big);
    };
    const show = (i) => {
      const it = items[i];
      const w = it.word;
      const main = act.bilingual ? esc(w.en) : label(w);
      const second = act.bilingual && w.hi ? `<div class="meaning">${esc(w.hi)}</div>` : '';
      K.render(tx(act.title), `
        <div class="letter-card" data-say>
          ${it.big ? `<div class="big-letter">${esc(it.big)}</div>` : ''}
          ${it.emoji ? (it.pic ? `<div class="pic">${it.pic}</div>` : act.noCheck && it.note && K.scene && !it.big ? K.scene({ emoji: it.emoji, text: it.note, scene: it.scene }, act, { mini: true }) : `<div class="card-emoji">${it.emoji}</div>`) : ''}
          ${w ? `<div class="word">${main}</div>${second}` : ''}
          ${it.note ? `<div class="note">${label(it.note)}</div>` : ''}
          <div class="tap-hint">👆 ${t('Tap to hear', 'सुनने के लिए छुओ')}</div>
        </div>
        <div class="dots">${items.map((_, k) => `<span class="${k === i ? 'on' : k < i ? 'done' : ''}"></span>`).join('')}</div>
        <div class="nav"><button class="round" data-prev ${i === 0 ? 'disabled' : ''}>◀️</button>
          ${act.trace && it.big ? `<button class="btn orange" data-trace>✍️ ${t('Write', 'लिखो')}</button>` : ''}
          <button class="btn green" data-next>${i === items.length - 1 ? t('Quick check', 'छोटी परीक्षा') + ' ✔' : t('Next', 'आगे') + ' ▶'}</button></div>`, { name: 'act', back });
      const speakAndTurn = async () => { await speakItem(it); if (act.repeat && K.current === 'act') { await say(t('Now you say it!', 'अब तुम बोलो!')); } };
      speakAndTurn();
      if (act.repeat) { q('.tap-hint').textContent = `🗣️ ${t('Listen, then say it aloud!', 'सुनो, फिर ज़ोर से बोलो!')}`; }
      q('[data-say]').onclick = () => { K.sfx.pop(); speakAndTurn(); };
      q('[data-prev]').onclick = () => { K.sfx.tap(); if (i > 0) { show(i - 1); } };
      q('[data-next]').onclick = () => { K.sfx.tap(); if (i < items.length - 1) { show(i + 1); } else { check(); } };
      const tb = q('[data-trace]'); if (tb) { tb.onclick = () => { K.sfx.tap(); trace({ ...act, letters: [it.big], single: true }, () => show(i)); }; }
    };
    const check = () => {
      const pool = items.filter((it) => it.emoji && it.word);
      if (act.noCheck || pool.length < 3) { K.addStars(2); K.finish(act, 3, back); return; }
      const qs = shuffle(pool).slice(0, Math.min(4, pool.length));
      rounds(act, tx(act.title), qs.length, (r) => {
        const it = qs[r];
        const wrong = shuffle(pool.filter((x) => x !== it)).slice(0, 2);
        const w = act.bilingual ? it.word.en : tx(it.word);
        return {
          question: K.isHindi(w) ? `${esc(w)} – ${t('find it', 'ढूँढो')}` : t(`Find: ${esc(w)}`, `ढूँढो: ${esc(w)}`),
          options: shuffle([it, ...wrong]).map((x) => ({ label: x.emoji, correct: x === it })),
          ask: () => (act.bilingual ? say(`Find ${it.word.en}`, { lang: 'en-IN' }) : K.isHindi(w) ? say(`${w} ढूँढो`) : say(t(`Find ${w}`, `${w} ढूँढो`))),
        };
      }, back, 2);
    };
    show(0);
  }

  // ================================================================ 2. QUIZ (fixed questions with explanations)
  function quiz(act, back) {
    const qs = shuffle(act.questions).slice(0, act.count || 6);
    rounds(act, tx(act.title), qs.length, (r) => {
      const Q = qs[r];
      const opts = Q.options.map((o, k) => ({ o, k }));
      const textOpt = Q.options.some((o) => (typeof o === 'object' ? (tx(o) || '').length > 3 : String(o).length > 3));
      return {
        question: `${Q.emoji ? `<span class="q-emoji">${Q.emoji}</span>` : ''}${label(Q.q)}`,
        options: (Q.keepOrder ? opts : shuffle(opts)).map(({ o, k }) => ({ label: label(o), correct: k === Q.answer })),
        textOptions: textOpt, wide: textOpt,
        ask: () => sayT(Q.q),
        explain: Q.explain,
      };
    }, back);
  }

  // ================================================================ 3. TRACE
  function trace(act, back) {
    const letters = act.letters;
    let i = 0; let stars = 0;
    const show = () => {
      const L = letters[i];
      const hiL = K.isHindi(L);
      K.render(`${t('Write', 'लिखो')} ${esc(L)}`, `
        <div class="trace-wrap"><canvas id="guide"></canvas><canvas id="ink"></canvas><div class="trace-tip">${t('Trace with your finger', 'उँगली से लिखो')} ✍️</div></div>
        <div class="nav"><button class="btn ghost" data-clear>↺ ${t('Clear', 'मिटाओ')}</button><button class="btn green" data-done>✔ ${t('Done', 'हो गया')}</button></div>`, { name: 'trace', back });
      say(hiL ? `${L} लिखो` : `Let's write ${L}`);
      const wrap = q('.trace-wrap'); const guide = q('#guide'); const ink = q('#ink');
      const dpr = window.devicePixelRatio || 1; const W = wrap.clientWidth; const H = wrap.clientHeight;
      for (const c of [guide, ink]) { c.width = W * dpr; c.height = H * dpr; c.getContext('2d').scale(dpr, dpr); }
      const g = guide.getContext('2d');
      const font = (s) => `900 ${s}px "Nunito","Noto Sans Devanagari",system-ui,sans-serif`;
      let size = Math.min(W, H) * 0.78; g.font = font(size);
      let m = g.measureText(L);
      size *= Math.min(1, (W * 0.86) / ((m.actualBoundingBoxLeft + m.actualBoundingBoxRight) || 1), (H * 0.8) / ((m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) || 1));
      g.font = font(size); m = g.measureText(L);
      const x = (W - (m.actualBoundingBoxRight - m.actualBoundingBoxLeft)) / 2 + m.actualBoundingBoxLeft;
      const y = (H + m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2 + 10;
      const lw = Math.max(16, size * (L.length > 1 ? 0.06 : 0.085));
      g.fillStyle = '#ede9fe'; g.fillText(L, x, y); g.setLineDash([10, 12]); g.lineWidth = 3; g.strokeStyle = '#a78bfa'; g.strokeText(L, x, y);
      const mask = document.createElement('canvas'); mask.width = W; mask.height = H;
      const mk = mask.getContext('2d'); mk.font = font(size); mk.fillText(L, x, y);
      const body = mk.getImageData(0, 0, W, H).data;
      mk.lineWidth = lw * 1.6; mk.lineJoin = 'round'; mk.strokeText(L, x, y);
      const halo = mk.getImageData(0, 0, W, H).data;
      const STEP = 5; const target = [];
      for (let yy = 0; yy < H; yy += STEP) { for (let xx = 0; xx < W; xx += STEP) { if (body[(yy * W + xx) * 4 + 3] > 128) { target.push([xx, yy]); } } }
      const c = ink.getContext('2d'); c.lineCap = 'round'; c.lineJoin = 'round'; c.lineWidth = lw;
      let drawing = false; let last = null; let hue = 260; let solved = false;
      const pos = (e) => { const r = ink.getBoundingClientRect(); return [(e.clientX - r.left) / K.zoom, (e.clientY - r.top) / K.zoom]; };
      ink.onpointerdown = (e) => { drawing = true; last = pos(e); try { ink.setPointerCapture(e.pointerId); } catch { /* synthetic pointer */ } };
      ink.onpointermove = (e) => { if (!drawing) { return; } const p = pos(e); hue = (hue + 2) % 360; c.strokeStyle = `hsl(${hue} 85% 55%)`; c.beginPath(); c.moveTo(...last); c.lineTo(...p); c.stroke(); last = p; };
      ink.onpointerup = ink.onpointercancel = () => { drawing = false; if (!solved && score().cover > 0.78) { success(); } };
      function score() {
        const d = c.getImageData(0, 0, W * dpr, H * dpr).data;
        const at = (xx, yy) => d[(Math.round(yy * dpr) * W * dpr + Math.round(xx * dpr)) * 4 + 3] > 0;
        let hit = 0; for (const [xx, yy] of target) { if (at(xx, yy)) { hit++; } }
        let inkN = 0; let out = 0;
        for (let yy = 0; yy < H; yy += STEP * 2) { for (let xx = 0; xx < W; xx += STEP * 2) { if (at(xx, yy)) { inkN++; if (halo[(yy * W + xx) * 4 + 3] < 128) { out++; } } } }
        return { cover: target.length ? hit / target.length : 0, out: inkN ? out / inkN : 0 };
      }
      async function success() {
        solved = true; stars++; K.addStars(1); K.confetti();
        q('.trace-tip').textContent = t('Beautiful writing! ⭐', 'बहुत सुंदर लिखा! ⭐');
        await K.praise();
        setTimeout(() => {
          if (K.current !== 'trace') { return; }
          if (act.single) { back(); return; }
          i++; if (i < letters.length) { show(); } else { K.finish(act, stars, back); }
        }, 900);
      }
      q('[data-clear]').onclick = () => { K.sfx.tap(); c.clearRect(0, 0, W, H); solved = false; };
      q('[data-done]').onclick = () => {
        if (solved) { return; }
        const s = score();
        if (s.cover >= 0.55 && s.out < 0.5) { success(); } else { K.tryAgain(); q('.trace-tip').textContent = s.out >= 0.5 ? t('Stay on the letter 🙂', 'अक्षर के ऊपर ही लिखो 🙂') : t('Cover more of the letter ✍️', 'पूरे अक्षर पर लिखो ✍️'); }
      };
    };
    show();
  }

  // ================================================================ 4. SPELL (tap tiles to build a word)
  const EN_LETTERS = 'ABCDEFGHIJKLMNOPRSTUW'.split('');
  const HI_TILES = ['क', 'ग', 'म', 'र', 'ल', 'न', 'प', 'स', 'त', 'घ', 'च', 'ज', 'ब', 'द', 'ह', 'या', 'मा', 'ना', 'री', 'ली'];
  function spell(act, back) {
    const words = shuffle(act.words).slice(0, act.count || 5);
    let i = 0; let stars = 0;
    const show = () => {
      const W = words[i];
      const parts = W.tiles || W.w.split('');
      const hiW = K.isHindi(parts.join(''));
      const decoys = shuffle((hiW ? HI_TILES : EN_LETTERS).filter((x) => !parts.includes(x))).slice(0, Math.min(3, Math.max(2, 6 - parts.length)));
      const tiles = shuffle([...parts, ...decoys]);
      let pos = 0; let mistakes = 0;
      K.render(tx(act.title), `
        <div class="spell-pic">${W.emoji || ''}</div>
        ${W.hint ? `<div class="meaning" style="text-align:center">${label(W.hint)}</div>` : ''}
        <div class="slots">${parts.map(() => '<span class="slot"></span>').join('')}</div>
        <div class="tiles">${tiles.map((x, k) => `<button class="tile-l" data-t="${k}">${esc(x)}</button>`).join('')}</div>
        <div class="nav"><button class="btn ghost" data-hear>🔊 ${t('Hear word', 'शब्द सुनो')}</button></div>`, { name: 'act', back });
      const word = parts.join('');
      const hear = () => say(word, { lang: hiW ? 'hi-IN' : 'en-IN' });
      say(t('Spell the word', 'शब्द बनाओ')).then(hear);
      q('[data-hear]').onclick = () => { K.sfx.tap(); hear(); };
      const slots = qa('.slot');
      qa('[data-t]').forEach((el) => {
        el.onclick = async () => {
          const v = tiles[Number(el.dataset.t)];
          if (v === parts[pos]) {
            K.sfx.pop(); slots[pos].textContent = v; slots[pos].classList.add('filled'); el.disabled = true; el.classList.add('used'); pos++;
            say(v, { lang: hiW ? 'hi-IN' : 'en-IN', rate: 1 });
            if (pos === parts.length) {
              qa('[data-t]').forEach((b) => { b.disabled = true; });
              if (mistakes < 2) { stars++; K.addStars(1); }
              await K.praise(); await hear();
              setTimeout(() => { if (K.current !== 'act') { return; } i++; if (i < words.length) { show(); } else { K.finish(act, stars, back); } }, 500);
            }
          } else { mistakes++; el.classList.add('wrong'); setTimeout(() => el.classList.remove('wrong'), 400); K.sfx.bad(); }
        };
      });
    };
    show();
  }

  // ================================================================ 5. SENTENCE (put words in order)
  function sentence(act, back) {
    const list = shuffle(act.sentences).slice(0, act.count || 5);
    let i = 0; let stars = 0;
    const show = () => {
      const S = list[i]; const words = S.words; const hiS = K.isHindi(words.join(' '));
      let order = shuffle(words.map((w, k) => ({ w, k })));
      if (order.every((o, k) => o.k === k) && words.length > 1) { order = order.reverse(); }
      let pos = 0; let mistakes = 0;
      K.render(tx(act.title), `
        <div class="spell-pic" style="font-size:64px">${S.emoji || '💬'}</div>
        ${S.meaning ? `<div class="meaning" style="text-align:center">${esc(S.meaning)}</div>` : ''}
        <div class="sentence-line" data-line>${words.map(() => '<span class="gap"></span>').join('')}</div>
        <div class="tiles words">${order.map((o, k) => `<button class="tile-w" data-w="${k}">${esc(o.w)}</button>`).join('')}</div>
        <div class="nav"><button class="btn ghost" data-hear>🔊 ${t('Hear it', 'सुनो')}</button></div>`, { name: 'act', back });
      const full = words.join(' ');
      const hear = () => say(full, { lang: hiS ? 'hi-IN' : 'en-IN' });
      say(t('Make the sentence', 'वाक्य बनाओ'));
      q('[data-hear]').onclick = () => { K.sfx.tap(); hear(); };
      const gaps = qa('.gap');
      qa('[data-w]').forEach((el) => {
        el.onclick = async () => {
          const o = order[Number(el.dataset.w)];
          if (o.w === words[pos]) {
            K.sfx.pop(); gaps[pos].textContent = o.w; gaps[pos].classList.add('filled'); el.disabled = true; el.classList.add('used'); pos++;
            if (pos === words.length) {
              if (mistakes < 2) { stars++; K.addStars(1); }
              await K.praise(); await hear();
              setTimeout(() => { if (K.current !== 'act') { return; } i++; if (i < list.length) { show(); } else { K.finish(act, stars, back); } }, 500);
            }
          } else { mistakes++; el.classList.add('wrong'); setTimeout(() => el.classList.remove('wrong'), 400); K.sfx.bad(); }
        };
      });
    };
    show();
  }

  // ================================================================ 6. SITUATION (what would you do?)
  function situation(act, back) {
    const scenes = act.scenes; let i = 0; let stars = 0;
    const show = () => {
      const S = scenes[i];
      const choices = shuffle(S.choices.map((c, k) => ({ ...c, k })));
      K.render(tx(act.title), `
        <div class="progress">${scenes.map((_, k) => `<span class="${k < i ? 'done' : ''}"></span>`).join('')}</div>
        <div class="scene"><div class="scene-emoji">${S.emoji}</div><div class="scene-text">${label(S.text)}</div>
          <div class="scene-ask">${t('What should you do?', 'तुम्हें क्या करना चाहिए?')}</div></div>
        <div class="choices">${choices.map((c, k) => `<button class="choice" data-c="${k}">${label(c.t)}</button>`).join('')}</div>
        <div class="explain hidden" data-explain></div>`, { name: 'act', back });
      sayT(S.text).then(() => say(t('What should you do?', 'तुम्हें क्या करना चाहिए?')));
      let tries = 0;
      qa('[data-c]').forEach((el) => {
        el.onclick = async () => {
          const c = choices[Number(el.dataset.c)];
          const ex = q('[data-explain]');
          ex.innerHTML = `${c.good ? '✅' : '🤔'} ${esc(tx(c.why))}`; ex.classList.remove('hidden');
          if (c.good) {
            el.classList.add('right'); qa('[data-c]').forEach((b) => { b.disabled = true; });
            if (tries === 0) { stars++; K.addStars(1); }
            K.sfx.good(); await sayT(c.why);
            ex.insertAdjacentHTML('beforeend', `<div style="margin-top:10px"><button class="btn green" data-go>${t('Next', 'आगे')} ▶</button></div>`);
            q('[data-go]').onclick = () => { K.sfx.tap(); i++; if (i < scenes.length) { show(); } else { K.finish(act, stars, back); } };
          } else { tries++; el.classList.add('wrong'); el.disabled = true; K.sfx.bad(); sayT(c.why); }
        };
      });
    };
    show();
  }

  // ================================================================ 7. POEM (sing-along + your turn)
  function poem(act, back) {
    const lines = act.lines; const hiP = K.isHindi(lines.join(' ')); const lang = hiP ? 'hi-IN' : 'en-IN';
    let mode = 'idle'; let stars = 0; let sang = false;
    const view = () => {
      K.render(tx(act.title), `
        <div class="poem-card"><div class="poem-emoji">${act.emoji || '🎵'}</div>
          <div class="poem-lines">${lines.map((l, k) => `<div class="pl" data-l="${k}">${esc(l)}${act.roman && act.roman[k] ? `<small>${esc(act.roman[k])}</small>` : ''}<i class="pbar"></i></div>`).join('')}</div>
          ${act.meaning ? `<div class="meaning" style="margin-top:8px">${esc(tx(act.meaning))}</div>` : ''}
        </div>
        <div class="turn hidden" data-turn><div class="mic">🎤</div><div data-turn-text>${t('Your turn! Say it aloud', 'अब तुम्हारी बारी! ज़ोर से बोलो')}</div><div class="ring"><span data-ring></span></div><button class="btn green" data-said>✔ ${t('I said it!', 'मैंने बोल दिया!')}</button></div>
        <div class="nav"><button class="btn orange" data-sing>🎵 ${t('Sing along', 'साथ में गाओ')}</button><button class="btn green" data-repeat>🗣️ ${t('Learn line by line', 'लाइन-दर-लाइन सीखो')}</button></div>
        ${act.credit ? `<p class="credit">${esc(act.credit)}</p>` : ''}`, { name: 'poem', back });
      q('[data-sing]').onclick = () => { K.sfx.tap(); sing(); };
      q('[data-repeat]').onclick = () => { K.sfx.tap(); repeat(); };
    };
    const hl = (k) => { qa('.pl').forEach((el, j) => el.classList.toggle('on', j === k)); const el = q(`[data-l="${k}"]`); if (el) { el.scrollIntoView({ block: 'nearest' }); } };
    const playAudioFile = () => new Promise((resolve) => {
      if (!act.audio) { resolve(false); return; }
      const a = new Audio(act.audio);
      a.onended = () => resolve(true); a.onerror = () => resolve(false);
      a.play().catch(() => resolve(false));
    });
    // ---- v3.5: songs keep their rhythm. Real melodies (act.melody) play note by note with karaoke lines;
    //      rhymes are chanted ON a steady beat, one line per bar, like a teacher leading the class.
    const wait = (ms) => { const ep = K.rid; return new Promise((r) => setTimeout(() => { if (K.rid === ep) { r(); } }, ms)); };
    const bar = (k, secs) => { const el = q(`[data-l="${k}"] .pbar`); if (!el) { return; } el.style.transition = 'none'; el.style.width = '0%'; requestAnimationFrame(() => requestAnimationFrame(() => { el.style.transition = `width ${secs}s linear`; el.style.width = '100%'; })); };
    const busy = (on) => qa('[data-sing],[data-repeat]').forEach((b) => { b.disabled = on; });
    const lineSecs = (k) => (act.melody[k] || []).reduce((s2, [, u]) => s2 + u, 0) * (act.unit || 0.26);
    const fitRate = (line, secs) => Math.max(0.78, Math.min(1.3, (K.syllables(line) * (hiP ? 0.19 : 0.22)) / Math.max(0.8, secs)));
    async function melodySong(my, learn) {
      await say(learn ? t('Listen to me first, then sing the tune with the music.', 'पहले मुझे सुनो, फिर संगीत के साथ धुन गाओ।') : t('Stand straight and still. Let us sing together!', 'सीधे और स्थिर खड़े हो जाओ। चलो साथ में गाएँ!'), { silentWait: true });
      if (K.rid !== my) { return; }
      K.drone(true, act.root || 'C3'); await wait(900);
      for (let k = 0; k < lines.length; k++) {
        if (K.rid !== my) { break; }
        hl(k);
        if (learn) { await say(lines[k], { lang, rate: 0.82, silentWait: true }); if (K.rid !== my) { break; } await wait(250); }
        bar(k, lineSecs(k)); await K.playNotes(act.melody[k], act.unit || 0.26);
        if (learn) { await wait(500); }
      }
      K.drone(false);
    }
    async function chant(my, echo) {
      const bpm = act.bpm ? Math.max(84, Math.min(108, act.bpm)) : 96;
      K.beat.start(bpm, hiP ? 'desi' : 'rhyme');
      const bs = K.beat.barSec();
      await K.beat.nextBar(); await K.beat.nextBar();            // one bar of count-in
      const turn = q('[data-turn]');
      for (let k = 0; k < lines.length; k++) {
        if (K.rid !== my) { break; }
        const bars = K.syllables(lines[k]) > 10 ? 2 : 1;
        hl(k); bar(k, bars * bs); if (turn) { turn.classList.add('hidden'); }
        await say(lines[k], { lang, rate: fitRate(lines[k], bars * bs * 0.86), pitch: 1.12, noPause: true, silentWait: true });
        if (K.rid !== my) { break; }
        await K.beat.nextBar();
        if (echo) {                                               // child repeats the line over the next bar(s)
          if (turn) { turn.classList.remove('hidden'); const ring = q('[data-ring]'); ring.style.transition = 'none'; ring.style.width = '0%'; requestAnimationFrame(() => { ring.style.transition = `width ${bars * bs}s linear`; ring.style.width = '100%'; }); }
          bar(k, bars * bs);
          for (let n = 0; n < bars; n++) { await K.beat.nextBar(); }
          if (!K.beat.on) { await wait(bars * 2200); }
        }
      }
      if (turn) { turn.classList.add('hidden'); }
      K.beat.stop();
    }
    async function sing() {
      if (mode !== 'idle') { return; }
      mode = 'sing'; const my = K.rid; busy(true);
      if (!(await playAudioFile())) {
        if (act.melody) { await melodySong(my, false); } else { await chant(my, false); }
      }
      if (K.rid !== my) { return; }
      hl(-1); mode = 'idle'; sang = true; busy(false);
      say(t('Lovely! Now learn it line by line with me.', 'बहुत सुंदर! अब मेरे साथ लाइन-दर-लाइन सीखो।')); q('[data-repeat]').classList.add('pulse');
    }
    async function repeat() {
      if (mode !== 'idle') { return; }
      mode = 'repeat'; const my = K.rid; busy(true);
      if (act.melody) { await melodySong(my, true); } else { await chant(my, true); }
      if (K.rid !== my) { return; }
      hl(-1); mode = 'idle'; busy(false);
      stars = sang ? 4 : 3; K.addStars(stars);
      K.finish(act, stars, back);
    }
    view();
    setTimeout(() => { if (K.current === 'poem') { say(act.melody ? t('This is our National Anthem. Tap Sing along to hear the tune.', 'यह हमारा राष्ट्रगान है। धुन सुनने के लिए साथ में गाओ दबाओ।') : t('Tap Sing along to hear the rhyme on the beat, then learn it with me!', 'ताल पर कविता सुनने के लिए साथ में गाओ दबाओ, फिर मेरे साथ सीखो!')); } }, 300);
  }

  // ================================================================ 8. STORY (pages + moral + questions)
  function story(act, back) {
    let i = 0;
    const pages = act.pages;
    const show = () => {
      const P = pages[i];
      K.render(tx(act.title), `
        <div class="story-page">${K.scene ? K.scene(P, act) : `<div class="story-art">${P.emoji}</div>`}<div class="story-text">${label(P.text)}</div><div class="page-no">${i + 1} / ${pages.length}</div></div>
        <div class="dots">${pages.map((_, k) => `<span class="${k === i ? 'on' : k < i ? 'done' : ''}"></span>`).join('')}</div>
        <div class="nav"><button class="round" data-prev ${i === 0 ? 'disabled' : ''}>◀️</button><button class="round" data-read>🔊</button><button class="btn green" data-next>${i === pages.length - 1 ? t('The lesson', 'सीख') + ' 💡' : t('Next', 'आगे') + ' ▶'}</button></div>`, { name: 'story', back });
      sayT(P.text, { rate: 0.82 });
      q('[data-read]').onclick = () => { K.sfx.tap(); sayT(P.text, { rate: 0.82 }); };
      q('[data-prev]').onclick = () => { K.sfx.tap(); if (i > 0) { i--; show(); } };
      q('[data-next]').onclick = () => { K.sfx.tap(); if (i < pages.length - 1) { i++; show(); } else { moral(); } };
    };
    const moral = () => {
      K.render(tx(act.title), `<div class="moral"><div class="emo">💡</div><h2>${t('The lesson', 'कहानी की सीख')}</h2><p>${label(act.moral)}</p><button class="btn green" data-q>${t('Answer questions', 'सवालों के जवाब दो')} ▶</button></div>`, { name: 'story', back });
      sayT(act.moral);
      q('[data-q]').onclick = () => { K.sfx.tap(); quiz({ ...act, questions: act.questions, count: act.questions.length, remember: act.moral }, back); };
    };
    show();
  }

  // ================================================================ 9. GENERATORS (maths & thinking)
  const NUM_HI = ['शून्य', 'एक', 'दो', 'तीन', 'चार', 'पाँच', 'छह', 'सात', 'आठ', 'नौ', 'दस', 'ग्यारह', 'बारह', 'तेरह', 'चौदह', 'पंद्रह', 'सोलह', 'सत्रह', 'अठारह', 'उन्नीस', 'बीस'];
  K.NUM_HI = NUM_HI;
  const numSay = (n) => (K.ui() === 'hi' && n <= 20 ? NUM_HI[n] : String(n));
  const OBJ = ['🍎', '⭐', '🐟', '🎈', '🚗', '🐥', '🍌', '🌸', '⚽', '🧁', '🦋', '🍓', '🪁', '🥭'];
  const nearOpts = (ans, spread = 3, min = 0) => {
    const set = new Set([ans]);
    let guard = 0;
    while (set.size < 3 && guard++ < 50) { const v = ans + rand(-spread, spread); if (v >= min && v !== ans) { set.add(v); } }
    while (set.size < 3) { set.add(ans + set.size + 1); }
    return shuffle([...set]);
  };
  const numOptions = (ans, spread, min) => nearOpts(ans, spread, min).map((v) => ({ label: v, correct: v === ans }));
  const row = (n, e, faded = 0) => Array.from({ length: n }, (_, k) => `<span class="item" style="${k >= n - faded ? 'opacity:.25' : ''}">${e}</span>`).join('');

  function clockSVG(h, m) {
    const ha = ((h % 12) + m / 60) * 30; const ma = m * 6;
    const hand = (a, len, w, col) => `<line x1="50" y1="50" x2="${50 + len * Math.sin(a * Math.PI / 180)}" y2="${50 - len * Math.cos(a * Math.PI / 180)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
    const nums = Array.from({ length: 12 }, (_, k) => { const a = (k + 1) * 30 * Math.PI / 180; return `<text x="${50 + 36 * Math.sin(a)}" y="${54 + 36 * -Math.cos(a)}" font-size="10" text-anchor="middle" font-weight="800" fill="#1e1b4b">${k + 1}</text>`; }).join('');
    return `<svg viewBox="0 0 100 100" width="170" height="170"><circle cx="50" cy="50" r="46" fill="#fff" stroke="#7c3aed" stroke-width="4"/>${nums}${hand(ha, 22, 5, '#1e1b4b')}${hand(ma, 32, 3, '#ec4899')}<circle cx="50" cy="50" r="3" fill="#1e1b4b"/></svg>`;
  }
  function shapeSVG(shape, color, size = 72) {
    const s = { circle: '<circle cx="50" cy="50" r="40"/>', square: '<rect x="14" y="14" width="72" height="72" rx="6"/>', triangle: '<polygon points="50,10 92,86 8,86"/>',
      star: '<polygon points="50,6 62,38 96,38 68,58 79,92 50,72 21,92 32,58 4,38 38,38"/>', heart: '<path d="M50 88 C10 60 4 34 22 20 C36 9 48 18 50 28 C52 18 64 9 78 20 C96 34 90 60 50 88Z"/>',
      rectangle: '<rect x="6" y="28" width="88" height="44" rx="6"/>', oval: '<ellipse cx="50" cy="50" rx="44" ry="30"/>' }[shape];
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" fill="${color}" stroke="rgba(0,0,0,.12)" stroke-width="3">${s}</svg>`;
  }
  function fractionSVG(parts, shaded) {
    const segs = Array.from({ length: parts }, (_, k) => {
      const a0 = (k / parts) * 2 * Math.PI - Math.PI / 2; const a1 = ((k + 1) / parts) * 2 * Math.PI - Math.PI / 2;
      const p = (a) => `${50 + 42 * Math.cos(a)},${50 + 42 * Math.sin(a)}`;
      return `<path d="M50,50 L${p(a0)} A42,42 0 0,1 ${p(a1)} Z" fill="${k < shaded ? '#f97316' : '#fff'}" stroke="#1e1b4b" stroke-width="2"/>`;
    }).join('');
    return `<svg viewBox="0 0 100 100" width="150" height="150">${segs}</svg>`;
  }
  K.svg = { shapeSVG, clockSVG, fractionSVG };

  const COLORS = [['red', '#ef4444', 'लाल'], ['blue', '#3b82f6', 'नीला'], ['green', '#22c55e', 'हरा'], ['yellow', '#facc15', 'पीला'], ['orange', '#f97316', 'नारंगी'], ['purple', '#a855f7', 'बैंगनी'], ['pink', '#ec4899', 'गुलाबी']];
  const SHAPES = [['circle', 'गोला'], ['square', 'वर्ग'], ['triangle', 'त्रिभुज'], ['star', 'तारा'], ['heart', 'दिल'], ['rectangle', 'आयत']];
  const CATS = [
    { en: 'fruits', hi: 'फल', items: ['🍎', '🍌', '🍇', '🥭', '🍊', '🍉', '🍍', '🍓'] },
    { en: 'animals', hi: 'जानवर', items: ['🐶', '🐱', '🐘', '🦁', '🐄', '🐒', '🐯', '🐰'] },
    { en: 'vehicles', hi: 'वाहन', items: ['🚗', '🚌', '🚲', '✈️', '🚂', '🛺', '🚢', '🚁'] },
    { en: 'vegetables', hi: 'सब्ज़ियाँ', items: ['🥕', '🥔', '🍅', '🧅', '🥦', '🌽', '🍆', '🥒'] },
    { en: 'clothes', hi: 'कपड़े', items: ['👕', '👖', '🧦', '🧢', '👗', '🧥', '👟', '🧣'] },
    { en: 'things that fly', hi: 'उड़ने वाली चीज़ें', items: ['🦅', '🦋', '✈️', '🪁', '🐝', '🚁', '🎈', '🐦'] },
  ];

  /** Each generator: (level, round) → round object for rounds() */
  const GEN = {
    count: (lv, r) => {
      const n = rand(1, lv === 1 && r < 4 ? 5 : 10); const e = pick(OBJ);
      return { question: t(`How many ${e}?`, `कितने ${e} हैं?`), stage: row(n, e), options: numOptions(n, 3, 1),
        ask: () => say(t('Count them!', 'गिनो!')), onRight: () => say(numSay(n)),
        bind: () => { let k = 0; qa('.stage .item').forEach((el) => { el.onclick = () => { k++; K.sfx.pop(); el.style.opacity = '.4'; say(numSay(k)); }; }); } };
    },
    more: (lv) => {
      const e = pick(OBJ); const a = rand(1, 8); let b = rand(1, 8); if (b === a) { b = a + 1; }
      return { question: t('Which group has MORE?', 'किसमें ज़्यादा हैं?'), options: [{ label: `<div class="mini">${row(a, e)}</div>`, correct: a > b }, { label: `<div class="mini">${row(b, e)}</div>`, correct: b > a }],
        wide: true, ask: () => say(t('Which group has more?', 'किस तरफ़ ज़्यादा हैं?')) };
    },
    compare: (lv) => {
      const max = lv === 1 ? 20 : lv === 2 ? 100 : 1000; const a = rand(1, max); let b = rand(1, max); if (a === b) { b = a + 1; }
      const big = Math.random() < 0.5;
      return { question: big ? t('Which number is BIGGER?', 'कौन सी संख्या बड़ी है?') : t('Which number is SMALLER?', 'कौन सी संख्या छोटी है?'),
        options: [a, b].map((v) => ({ label: v, correct: big ? v === Math.max(a, b) : v === Math.min(a, b) })), wide: true,
        ask: () => say(big ? t('Which is bigger?', 'कौन बड़ी है?') : t('Which is smaller?', 'कौन छोटी है?')) };
    },
    add: (lv) => {
      const max = lv === 1 ? 5 : lv === 2 ? 50 : 500; const a = rand(1, max); const b = rand(1, max); const ans = a + b; const e = pick(OBJ);
      return { question: `${a} + ${b} = ?`, stage: lv === 1 ? `<div class="full">${row(a, e)} <b class="op">+</b> ${row(b, e)}</div>` : '', options: numOptions(ans, lv === 1 ? 3 : 10, 0),
        ask: () => say(t(`${a} plus ${b}?`, `${numSay(a)} और ${numSay(b)} कितने?`)), onRight: () => say(numSay(ans)) };
    },
    sub: (lv) => {
      const max = lv === 1 ? 9 : lv === 2 ? 50 : 500; const a = rand(3, max); const b = rand(1, a - 1); const ans = a - b; const e = pick(OBJ);
      return { question: `${a} − ${b} = ?`, stage: lv === 1 ? `<div class="full">${row(a, e, b)}</div>` : '', options: numOptions(ans, lv === 1 ? 3 : 10, 0),
        ask: () => say(t(`${a} take away ${b}?`, `${numSay(a)} में से ${numSay(b)} गए, कितने बचे?`)), onRight: () => say(numSay(ans)) };
    },
    missing: (lv) => {
      const step = lv === 1 ? 1 : pick(lv === 2 ? [1, 2, 5, 10] : [2, 3, 5, 10, 25]); const start = rand(1, lv === 1 ? 5 : 30);
      const seq = Array.from({ length: 5 }, (_, k) => start + k * step); const hole = rand(1, 3); const ans = seq[hole];
      return { question: t('Which number is missing?', 'कौन सी संख्या छूट गई?'), stage: `<div class="seq">${seq.map((v, k) => `<span class="${k === hole ? 'hole' : ''}">${k === hole ? '?' : v}</span>`).join('')}</div>`,
        options: numOptions(ans, step * 2, 0), ask: () => say(t('Which number is missing?', 'कौन सी संख्या छूट गई?')) };
    },
    tables: (lv, r) => {
      const a = lv === 2 ? rand(2, 5) : rand(2, 12); const b = rand(1, 10); const ans = a * b;
      return { question: `${a} × ${b} = ?`, options: numOptions(ans, a, 0), ask: () => say(t(`${a} times ${b}?`, `${a} गुणा ${b}?`)),
        onRight: () => say(K.ui() === 'hi' ? `${a} गुणा ${b} बराबर ${ans}` : `${a} times ${b} is ${ans}`) };
    },
    divide: () => { const b = rand(2, 9); const ans = rand(2, 10); const a = b * ans; return { question: `${a} ÷ ${b} = ?`, options: numOptions(ans, 3, 1), ask: () => say(t(`${a} divided by ${b}?`, `${a} भाग ${b}?`)) }; },
    placevalue: (lv) => {
      const n = lv === 2 ? rand(11, 99) : rand(101, 999); const tens = Math.floor(n / 10) % 10; const ask = pick(lv === 2 ? ['tens', 'ones'] : ['hundreds', 'tens', 'ones']);
      const ans = ask === 'ones' ? n % 10 : ask === 'tens' ? tens : Math.floor(n / 100);
      const nameHi = { ones: 'इकाई', tens: 'दहाई', hundreds: 'सैकड़ा' }[ask];
      return { question: t(`In ${n}, what is the ${ask} digit?`, `${n} में ${nameHi} का अंक क्या है?`), options: shuffle([...new Set([ans, (ans + 3) % 10, (ans + 6) % 10])]).map((v) => ({ label: v, correct: v === ans })),
        ask: () => say(t(`In ${n}, which digit is in the ${ask} place?`, `${n} में ${nameHi} के स्थान पर कौन सा अंक है?`)) };
    },
    money: (lv) => {
      const coins = lv === 2 ? [1, 2, 5, 10] : [1, 2, 5, 10, 20, 50];
      const picked = Array.from({ length: rand(2, lv === 2 ? 3 : 4) }, () => pick(coins)); const ans = picked.reduce((s, v) => s + v, 0);
      return { question: t('How much money is this?', 'यह कितने रुपये हैं?'), stage: picked.map((v) => `<span class="coin ${v >= 20 ? 'note' : ''}">₹${v}</span>`).join(''), options: numOptions(ans, 5, 1).map((o) => ({ ...o, label: `₹${o.label}` })),
        ask: () => say(t('Add the money. How many rupees?', 'पैसे जोड़ो। कितने रुपये हुए?')) };
    },
    clock: (lv) => {
      const h = rand(1, 12); const m = lv === 2 ? pick([0, 30]) : pick([0, 15, 30, 45]);
      const fmt = (hh, mm) => `${hh}:${String(mm).padStart(2, '0')}`;
      const right = fmt(h, m); const set = new Set([right]);
      while (set.size < 3) { set.add(fmt(rand(1, 12), pick(lv === 2 ? [0, 30] : [0, 15, 30, 45]))); }
      return { question: t('What time is it?', 'कितने बजे हैं?'), stage: clockSVG(h, m), options: shuffle([...set]).map((v) => ({ label: v, correct: v === right })), ask: () => say(t('What time does the clock show?', 'घड़ी में कितने बजे हैं?')) };
    },
    fraction: () => {
      const parts = pick([2, 3, 4]); const shaded = rand(1, parts - 1); const right = `${shaded}/${parts}`; const set = new Set([right]);
      while (set.size < 3) { const p = pick([2, 3, 4, 6]); set.add(`${rand(1, p - 1)}/${p}`); }
      return { question: t('What part is coloured?', 'कितना भाग रंगा है?'), stage: fractionSVG(parts, shaded), options: shuffle([...set]).map((v) => ({ label: v, correct: v === right })), ask: () => say(t('What fraction is coloured orange?', 'नारंगी रंग वाला भाग कितना है?')) };
    },
    word: (lv) => {
      const P = [
        () => { const a = rand(2, 9); const b = rand(1, 9); return { en: `Riya has ${a} mangoes. Mummy gives her ${b} more. How many mangoes now?`, hi: `रिया के पास ${a} आम हैं। मम्मी ने ${b} और दिए। अब कितने आम हैं?`, ans: a + b, e: '🥭' }; },
        () => { const a = rand(5, 15); const b = rand(1, a - 1); return { en: `There are ${a} birds on a tree. ${b} fly away. How many are left?`, hi: `पेड़ पर ${a} चिड़ियाँ हैं। ${b} उड़ गईं। कितनी बचीं?`, ans: a - b, e: '🐦' }; },
        () => { const a = rand(2, 6); const b = rand(2, 5); return { en: `Each box has ${a} laddoos. There are ${b} boxes. How many laddoos in all?`, hi: `हर डिब्बे में ${a} लड्डू हैं। ${b} डिब्बे हैं। कुल कितने लड्डू?`, ans: a * b, e: '📦' }; },
        () => { const b = rand(2, 6); const ans = rand(2, 6); return { en: `${b * ans} pencils are shared equally by ${b} friends. How many does each get?`, hi: `${b * ans} पेंसिलें ${b} दोस्तों में बराबर बाँटीं। हर एक को कितनी मिलीं?`, ans, e: '✏️' }; },
        () => { const p = rand(5, 20); const n = rand(2, 4); return { en: `A pen costs ₹${p}. How much do ${n} pens cost?`, hi: `एक पेन ₹${p} का है। ${n} पेन कितने के होंगे?`, ans: p * n, e: '🖊️' }; },
      ];
      const W = (lv === 2 ? pick(P.slice(0, 2)) : pick(P))();
      return { question: `<span class="q-emoji">${W.e}</span>${esc(t(W.en, W.hi))}`, options: numOptions(W.ans, 4, 0), wide: false, ask: () => say(t(W.en, W.hi)) };
    },
    shapes: (lv) => {
      const col = pick(COLORS); const shp = pick(lv === 1 ? SHAPES.slice(0, 5) : SHAPES); const combos = [[col, shp]];
      while (combos.length < 4) { const c = pick(COLORS); const s = pick(lv === 1 ? SHAPES.slice(0, 5) : SHAPES); if (!combos.some(([a, b]) => a[0] === c[0] && b[0] === s[0])) { combos.push([c, s]); } }
      const phrase = t(`Tap the ${col[0]} ${shp[0]}`, `${col[2]} ${shp[1]} दबाओ`);
      return { question: phrase, options: shuffle(combos).map(([c, s]) => ({ label: shapeSVG(s[0], c[1]), correct: c === col && s === shp })), ask: () => say(phrase) };
    },
    pattern: (lv) => {
      const pool = shuffle(['🔴', '🔵', '🟡', '🟢', '⭐', '🌙', '🍎', '🍌', '🐶', '🐱']);
      const unit = lv === 1 ? pool.slice(0, 2) : pick([pool.slice(0, 2), pool.slice(0, 3), [pool[0], pool[0], pool[1]], [pool[0], pool[1], pool[1]]]);
      const len = unit.length * 2 + rand(0, unit.length - 1); const seq = Array.from({ length: len }, (_, k) => unit[k % unit.length]); const ans = unit[len % unit.length];
      const opts = shuffle([...new Set([ans, ...unit, pool[4]])]).slice(0, 3); if (!opts.includes(ans)) { opts[0] = ans; }
      return { question: t('What comes next?', 'आगे क्या आएगा?'), stage: `<div class="seq">${seq.map((e) => `<span>${e}</span>`).join('')}<span class="hole">?</span></div>`, options: shuffle(opts).map((e) => ({ label: e, correct: e === ans })), ask: () => say(t('Look at the pattern. What comes next?', 'पैटर्न देखो। आगे क्या आएगा?')) };
    },
    numpattern: () => {
      const step = pick([2, 3, 5, 10, 11]); const start = rand(1, 20); const seq = Array.from({ length: 4 }, (_, k) => start + k * step); const ans = start + 4 * step;
      return { question: t('What comes next?', 'आगे कौन सी संख्या?'), stage: `<div class="seq">${seq.map((v) => `<span>${v}</span>`).join('')}<span class="hole">?</span></div>`, options: numOptions(ans, step, 0), ask: () => say(t('Find the rule. What comes next?', 'नियम पहचानो। आगे क्या आएगा?')) };
    },
    oddone: () => {
      const [A, B] = shuffle(CATS); const same = shuffle(A.items).slice(0, 3); const odd = pick(B.items);
      return { question: t('Which one does NOT belong?', 'कौन सा अलग है?'), options: shuffle([...same.map((e) => ({ label: e, correct: false })), { label: odd, correct: true }]),
        ask: () => say(t('Find the odd one out!', 'जो अलग है उसे ढूँढो!')), explain: { en: `The others are all ${A.en}.`, hi: `बाकी सब ${A.hi} हैं।` } };
    },
    bigsmall: () => {
      const e = pick(['🐘', '🍎', '🏠', '🌳', '🐶', '⚽']); const sizes = shuffle([34, 56, 84]); const big = Math.random() < 0.5; const target = big ? Math.max(...sizes) : Math.min(...sizes);
      return { question: big ? t('Tap the BIGGEST', 'सबसे बड़ा दबाओ') : t('Tap the SMALLEST', 'सबसे छोटा दबाओ'), options: sizes.map((s) => ({ label: `<span style="font-size:${s}px">${e}</span>`, correct: s === target })), ask: () => say(big ? t('Tap the biggest one', 'सबसे बड़े वाले को दबाओ') : t('Tap the smallest one', 'सबसे छोटे वाले को दबाओ')) };
    },
  };
  K.GEN = GEN;
  function gen(act, back) {
    const lv = K.level();
    const g = GEN[act.gen];
    rounds(act, tx(act.title), act.rounds || 8, (r) => g(act.level || lv, r), back);
  }

  // ================================================================ 10. MEMORY
  function memory(act, back) {
    const lv = K.level(); const pairs = act.pairs || (lv === 1 ? 4 : lv === 2 ? 6 : 8);
    const pool = act.pool || ['🐶', '🐱', '🦁', '🐸', '🐵', '🐼', '🐯', '🐷', '🐰', '🦊', '🐻', '🐨'];
    const deck = shuffle(shuffle(pool).slice(0, pairs).flatMap((e) => [e, e]));
    K.render(tx(act.title), `<p class="center muted">${t('Find the matching pairs!', 'एक जैसी जोड़ी ढूँढो!')}</p>
      <div class="mem ${pairs <= 4 ? 'small' : ''}">${deck.map((e, k) => `<div class="card" data-m="${k}"><div class="in"><div class="f">❓</div><div class="b">${e}</div></div></div>`).join('')}</div>`, { name: 'act', back });
    say(t('Find the matching pairs!', 'एक जैसी जोड़ी ढूँढो!'));
    let open = []; let matched = 0; let busy = false; let moves = 0;
    qa('[data-m]').forEach((el) => {
      el.onclick = () => {
        if (busy || el.classList.contains('flip')) { return; }
        K.sfx.tap(); el.classList.add('flip'); open.push(el);
        if (open.length < 2) { return; }
        moves++; const [a, b] = open; open = [];
        if (deck[a.dataset.m] === deck[b.dataset.m]) {
          a.classList.add('matched'); b.classList.add('matched'); matched++; K.sfx.pop();
          if (matched === pairs) { const stars = Math.max(2, pairs + 2 - Math.max(0, moves - pairs)); K.addStars(stars); setTimeout(() => K.finish(act, stars, back), 600); }
        } else { busy = true; setTimeout(() => { a.classList.remove('flip'); b.classList.remove('flip'); busy = false; }, 850); }
      };
    });
  }

  // ================================================================ 11. DRAW & RANGOLI (creativity)
  function draw(act, back) {
    const sym = act.type === 'rangoli';
    const palette = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#06b6d4', '#3b82f6', '#a855f7', '#ec4899', '#78350f', '#111827', '#ffffff'];
    const stamps = act.stamps || ['⭐', '🌸', '❤️', '🌞', '🌈', '🦋', '🐟', '🌳', '🏠', '🪔'];
    let color = palette[sym ? 1 : 5]; let size = 10; let stamp = null;
    K.render(tx(act.title), `
      <div class="draw-prompt">${esc(tx(act.prompt))}</div>
      <div class="draw-wrap ${sym ? 'rangoli' : ''}"><canvas id="pad"></canvas></div>
      <div class="palette">${palette.map((c) => `<button class="sw ${c === color ? 'on' : ''}" data-col="${c}" style="background:${c}"></button>`).join('')}</div>
      <div class="tools">
        ${[6, 12, 22].map((s) => `<button class="tool ${s === 12 ? 'on' : ''}" data-size="${s}"><span style="width:${s}px;height:${s}px"></span></button>`).join('')}
        ${sym ? '' : stamps.map((s) => `<button class="tool" data-stamp="${s}">${s}</button>`).join('')}
        <button class="tool" data-undo>↶</button><button class="tool" data-clear>🗑️</button>
      </div>
      <div class="nav"><button class="btn green" data-save>✔ ${t('Finished!', 'बन गया!')}</button></div>`, { name: 'draw', back });
    sayT(act.prompt);
    const wrap = q('.draw-wrap'); const cv = q('#pad'); const dpr = window.devicePixelRatio || 1;
    const W = wrap.clientWidth; const H = wrap.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; const c = cv.getContext('2d'); c.scale(dpr, dpr);
    const bg = () => { c.fillStyle = sym ? '#1e1b4b' : '#ffffff'; c.fillRect(0, 0, W, H); if (sym) { c.strokeStyle = 'rgba(255,255,255,.08)'; for (let k = 0; k < 8; k++) { c.beginPath(); c.moveTo(W / 2, H / 2); const a = k * Math.PI / 4; c.lineTo(W / 2 + Math.cos(a) * W, H / 2 + Math.sin(a) * W); c.stroke(); } } };
    bg();
    const history = [];
    const snap = () => { history.push(c.getImageData(0, 0, W * dpr, H * dpr)); if (history.length > 15) { history.shift(); } };
    const pos = (e) => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / K.zoom, (e.clientY - r.top) / K.zoom]; };
    const N = 8;
    const stroke = (a, b) => {
      c.strokeStyle = color; c.lineWidth = size; c.lineCap = 'round'; c.lineJoin = 'round';
      if (!sym) { c.beginPath(); c.moveTo(...a); c.lineTo(...b); c.stroke(); return; }
      const cx = W / 2; const cy = H / 2;
      for (let k = 0; k < N; k++) {
        const ang = (k * 2 * Math.PI) / N;
        for (const mirror of [1, -1]) {
          const tr = ([x, y]) => { const dx = x - cx; const dy = (y - cy) * mirror; return [cx + dx * Math.cos(ang) - dy * Math.sin(ang), cy + dx * Math.sin(ang) + dy * Math.cos(ang)]; };
          c.beginPath(); c.moveTo(...tr(a)); c.lineTo(...tr(b)); c.stroke();
        }
      }
    };
    let last = null; let drawn = 0;
    cv.onpointerdown = (e) => {
      snap(); const p = pos(e);
      if (stamp) { c.font = `${size * 3 + 20}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(stamp, ...p); K.sfx.pop(); drawn += 20; return; }
      last = p; try { cv.setPointerCapture(e.pointerId); } catch { /* synthetic pointer */ } stroke(p, [p[0] + 0.1, p[1] + 0.1]);
    };
    cv.onpointermove = (e) => { if (!last) { return; } const p = pos(e); stroke(last, p); last = p; drawn++; };
    cv.onpointerup = cv.onpointercancel = () => { last = null; };
    qa('[data-col]').forEach((el) => { el.onclick = () => { K.sfx.tap(); color = el.dataset.col; stamp = null; qa('[data-col]').forEach((x) => x.classList.toggle('on', x === el)); qa('[data-stamp]').forEach((x) => x.classList.remove('on')); }; });
    qa('[data-size]').forEach((el) => { el.onclick = () => { K.sfx.tap(); size = Number(el.dataset.size); qa('[data-size]').forEach((x) => x.classList.toggle('on', x === el)); }; });
    qa('[data-stamp]').forEach((el) => { el.onclick = () => { K.sfx.tap(); stamp = stamp === el.dataset.stamp ? null : el.dataset.stamp; qa('[data-stamp]').forEach((x) => x.classList.toggle('on', x.dataset.stamp === stamp)); }; });
    q('[data-undo]').onclick = () => { K.sfx.tap(); const h = history.pop(); if (h) { c.putImageData(h, 0, 0); } };
    q('[data-clear]').onclick = () => { K.sfx.tap(); snap(); bg(); drawn = 0; };
    q('[data-save]').onclick = () => {
      if (drawn < 15) { say(t('Draw a little more first!', 'पहले थोड़ा और बनाओ!')); return; }
      const small = document.createElement('canvas'); const sc = 360 / Math.max(W, H); small.width = Math.round(W * sc); small.height = Math.round(H * sc);
      small.getContext('2d').drawImage(cv, 0, 0, small.width, small.height);
      try { K.state.gallery.unshift({ img: small.toDataURL('image/jpeg', 0.7), title: tx(act.title), day: K.today(), child: K.state.current }); K.state.gallery = K.state.gallery.slice(0, 16); K.save(); } catch { /* storage full */ }
      K.addStars(3); K.finish({ ...act, remember: { en: 'Saved in your art gallery!', hi: 'तुम्हारी आर्ट गैलरी में सेव हो गया!' } }, 3, back);
    };
  }

  // ================================================================ dispatcher
  const ENGINES = K.ENGINES = { cards, quiz, trace, spell, sentence, situation, poem, story, gen, memory, draw, rangoli: draw };
  /** Run an activity. back = where the back button / home returns. */
  K.run = (act, back) => {
    K.closeModal();
    const fn = ENGINES[act.type]; K.curAct = act;
    if (!fn) { console.error('unknown activity type', act.type); return; }
    fn(act, back || K.home);
  };
})();
