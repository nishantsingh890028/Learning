/* Khel Khel Mein – Abacus (soroban: one 5-bead above the bar, four 1-beads below).
   Every lesson: Golu demonstrates with an example, then the child solves fresh problems. */
(() => {
  'use strict';
  const { t, tx, esc, pick, rand, shuffle, say, sayT, q, qa } = K;
  const E = K.ENGINES; const { frame, shake, wait, alive } = K.G;
  const PL = [['ones', 'इकाई'], ['tens', 'दहाई'], ['hundreds', 'सैकड़े'], ['thousands', 'हज़ार']];

  // ---------------------------------------------------------------- abacus widget
  /** Build an abacus in el with `rods` rods. Returns API: get(), set(n), on(fn), lock(bool), hl(rod) */
  function abacus(el, rods, { labels = true, digits = true } = {}) {
    const st = Array.from({ length: rods }, () => ({ h: 0, e: 0 })); let cb = null; let locked = false;
    el.innerHTML = `<div class="abacus" style="--rods:${rods}"><div class="ab-frame">${st.map((_, i) => { const k = rods - 1 - i; return `<div class="rod" data-rod="${k}"><div class="stick"></div>
        <button class="bead h" data-h="${k}" aria-label="5"></button><div class="beam"></div>
        ${[0, 1, 2, 3].map((j) => `<button class="bead e" data-e="${k}" data-j="${j}" aria-label="1"></button>`).join('')}</div>`; }).join('')}</div>
      ${labels ? `<div class="ab-labels">${st.map((_, i) => `<span>${t(['O', 'T', 'H', 'Th'][rods - 1 - i], ['इ', 'द', 'सै', 'ह'][rods - 1 - i])}</span>`).join('')}</div>` : ''}
      ${digits ? `<div class="ab-digits">${st.map((_, i) => `<span data-dg="${rods - 1 - i}">0</span>`).join('')}</div>` : ''}</div>`;
    const draw = () => {
      st.forEach((s, k) => {
        el.querySelector(`[data-h="${k}"]`).classList.toggle('on', !!s.h);
        el.querySelectorAll(`[data-e="${k}"]`).forEach((b) => b.classList.toggle('on', Number(b.dataset.j) < s.e));
        const d = el.querySelector(`[data-dg="${k}"]`); if (d) { d.textContent = s.h * 5 + s.e; }
      });
    };
    const get = () => st.reduce((sum, s, k) => sum + (s.h * 5 + s.e) * 10 ** k, 0);
    el.querySelectorAll('[data-h]').forEach((b) => { b.onclick = () => { if (locked) { return; } const s = st[b.dataset.h]; s.h = s.h ? 0 : 1; K.sfx.pop(); draw(); if (cb) { cb(get()); } }; });
    el.querySelectorAll('[data-e]').forEach((b) => { b.onclick = () => { if (locked) { return; } const s = st[b.dataset.e]; const j = Number(b.dataset.j); s.e = j < s.e ? j : j + 1; K.sfx.tap(); draw(); if (cb) { cb(get()); } }; });
    draw();
    return {
      get, digit: (k) => st[k].h * 5 + st[k].e,
      setDigit: (k, d) => { st[k].h = d >= 5 ? 1 : 0; st[k].e = d % 5; draw(); },
      set: (n) => { st.forEach((s, k) => { const d = Math.floor(n / 10 ** k) % 10; s.h = d >= 5 ? 1 : 0; s.e = d % 5; }); draw(); },
      on: (fn) => { cb = fn; }, fire: () => { if (cb) { cb(get()); } }, lock: (v) => { locked = v; el.querySelector('.abacus').classList.toggle('locked', v); },
      hl: (k) => { el.querySelectorAll('.rod').forEach((r) => r.classList.toggle('hl', Number(r.dataset.rod) === k)); },
    };
  }
  K.abacus = abacus;

  // ---------------------------------------------------------------- how to add / subtract one digit on one rod (explanations)
  /** returns list of {rod, digitAfter, say} for adding (sign=1) or taking away (sign=-1) b to a, left to right */
  function plan(a, b, sign, rods) {
    const steps = []; const val = []; for (let k = 0; k < rods; k++) { val[k] = Math.floor(a / 10 ** k) % 10; }
    const bd = String(b).split('').map(Number); const nb = bd.length;
    bd.forEach((k0, i) => {
      const k = nb - 1 - i; if (!k0) { return; } const d = val[k]; const P = PL[k];
      if (sign > 0) {
        const low = d % 5;
        if (d + k0 <= 9) {
          if (k0 < 5 && low + k0 <= 4) { steps.push({ rod: k, say: { en: `${P[0]}: add ${k0}. Push up ${k0} one-bead${k0 > 1 ? 's' : ''}.`, hi: `${P[1]}: ${k0} जोड़ो। ${k0} नीचे वाले मोती ऊपर करो।` } }); } else if (k0 < 5) { steps.push({ rod: k, say: { en: `${P[0]}: add ${k0}. Not enough one-beads! Small friend: add 5 (bring the top bead down) and take away ${5 - k0}.`, hi: `${P[1]}: ${k0} जोड़ो। नीचे मोती कम हैं! छोटा दोस्त: 5 जोड़ो (ऊपर वाला मोती नीचे) और ${5 - k0} हटाओ।` } }); } else { steps.push({ rod: k, say: { en: `${P[0]}: add ${k0}. Bring the 5-bead down${k0 > 5 ? ` and push up ${k0 - 5}` : ''}.`, hi: `${P[1]}: ${k0} जोड़ो। 5 वाला मोती नीचे करो${k0 > 5 ? ` और ${k0 - 5} मोती ऊपर करो` : ''}।` } }); }
          val[k] = d + k0; steps[steps.length - 1].after = [...val];
        } else {
          steps.push({ rod: k, say: { en: `${P[0]}: add ${k0}. ${d} + ${k0} is more than 9. Big friend: take away ${10 - k0} here and add 1 to the ${PL[k + 1] ? PL[k + 1][0] : 'next rod'}.`, hi: `${P[1]}: ${k0} जोड़ो। ${d} + ${k0} नौ से ज़्यादा है। बड़ा दोस्त: यहाँ से ${10 - k0} हटाओ और ${PL[k + 1] ? PL[k + 1][1] : 'अगली छड़'} में 1 जोड़ो।` } });
          val[k] = d + k0 - 10; let j = k + 1; while (j < rods && val[j] === 9) { val[j] = 0; j++; } if (j < rods) { val[j] += 1; } steps[steps.length - 1].after = [...val];
        }
      } else {
        const low = d % 5;
        if (d >= k0) {
          if (k0 < 5 && low >= k0) { steps.push({ rod: k, say: { en: `${P[0]}: take away ${k0}. Push down ${k0} one-bead${k0 > 1 ? 's' : ''}.`, hi: `${P[1]}: ${k0} घटाओ। ${k0} मोती नीचे करो।` } }); } else if (k0 < 5) { steps.push({ rod: k, say: { en: `${P[0]}: take away ${k0}. Small friend: add ${5 - k0} one-beads, then lift the 5-bead up.`, hi: `${P[1]}: ${k0} घटाओ। छोटा दोस्त: ${5 - k0} मोती ऊपर करो, फिर 5 वाला मोती ऊपर उठाओ।` } }); } else { steps.push({ rod: k, say: { en: `${P[0]}: take away ${k0}. Lift the 5-bead up${k0 > 5 ? ` and push down ${k0 - 5}` : ''}.`, hi: `${P[1]}: ${k0} घटाओ। 5 वाला मोती ऊपर उठाओ${k0 > 5 ? ` और ${k0 - 5} मोती नीचे करो` : ''}।` } }); }
          val[k] = d - k0; steps[steps.length - 1].after = [...val];
        } else {
          steps.push({ rod: k, say: { en: `${P[0]}: take away ${k0}. ${d} is smaller than ${k0}. Big friend: take 1 from the ${PL[k + 1][0]} and add ${10 - k0} here.`, hi: `${P[1]}: ${k0} घटाओ। ${d}, ${k0} से छोटा है। बड़ा दोस्त: ${PL[k + 1][1]} से 1 लो और यहाँ ${10 - k0} जोड़ो।` } });
          val[k] = d + 10 - k0; let j = k + 1; while (val[j] === 0) { val[j] = 9; j++; } val[j] -= 1; steps[steps.length - 1].after = [...val];
        }
      }
    });
    return steps;
  }
  // problem makers per rule
  const kindOf = (a, b, sign, rods) => { const s = plan(a, b, sign, rods).map((x) => x.say.en); return s.some((x) => x.includes('Big friend')) ? 'big' : s.some((x) => x.includes('Small friend')) ? 'small' : 'direct'; };
  function makeProblem(rule, sign, rods) {
    const max = 10 ** rods - 1;
    for (let tries = 0; tries < 400; tries++) {
      const a = rand(rods > 1 ? 10 : 1, rods > 1 ? max - 10 : 8); const b = rand(1, rods > 1 ? (rods > 2 ? 99 : 9 + 10 * rand(0, 4)) : 8);
      const ans = a + sign * b; if (ans < 0 || ans > max) { continue; }
      if (rule === 'any' || kindOf(a, b, sign, rods) === rule) { return [a, b]; }
    }
    return [rods > 1 ? 21 : 2, rods > 1 ? 13 : 1];
  }

  /** numbered step list shown beside the abacus; returns mark(i) to highlight step i */
  function stepList(box, steps, shorts) {
    box.innerHTML = `<ol class="ab-steps ${shorts ? 'practice' : ''}">${steps.map((s, i) => `<li data-st="${i}">${shorts && shorts[i] ? `<b>${esc(tx(shorts[i]))}</b><span class="full">${esc(tx(s))}</span>` : esc(tx(s))}</li>`).join('')}</ol>`;
    return (i) => box.querySelectorAll('[data-st]').forEach((li) => { const k = Number(li.dataset.st); li.classList.toggle('now', k === i); li.classList.toggle('done', k < i); if (k === i) { try { li.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch { /* old WebView */ } } });
  }
  /** Demo: Golu solves a ± b on the abacus, step by step, with every step written down */
  async function demo(api, a, b, sign, rods, box) {
    api.lock(true); api.set(0);
    const ans = a + sign * b; const pl = plan(a, b, sign, rods);
    const steps = [{ en: `Put ${a} on the abacus.`, hi: `गिनतारे पर ${a} रखो।` }, ...pl.map((x) => x.say), { en: `Read the answer: ${ans}.`, hi: `उत्तर पढ़ो: ${ans}।` }];
    const mark = stepList(box, steps);
    mark(0); await sayT({ en: `Watch! First we put ${a} on the abacus.`, hi: `देखो! पहले गिनतारे पर ${a} रखते हैं।` });
    for (let k = rods - 1; k >= 0; k--) { const d = Math.floor(a / 10 ** k) % 10; if (d) { api.hl(k); api.setDigit(k, d); K.sfx.pop(); await wait(500); } }
    api.hl(-1);
    for (let i = 0; i < pl.length; i++) {
      if (!alive('abacus')) { return; }
      const s = pl[i]; mark(i + 1); api.hl(s.rod); await sayT(s.say);
      s.after.forEach((d, k) => api.setDigit(k, d)); K.sfx.pop(); await wait(700);
    }
    api.hl(-1); mark(steps.length - 1);
    await sayT({ en: `The abacus shows ${ans}. So ${a} ${sign > 0 ? 'plus' : 'minus'} ${b} is ${ans}!`, hi: `गिनतारा ${ans} दिखा रहा है। तो ${a} ${sign > 0 ? 'जोड़' : 'घटा'} ${b} बराबर ${ans}!` });
    await wait(250);
    api.lock(false);
  }

  // ================================================================ CARRY FORWARD / BORROW (column method on the abacus)
  /** written sum with a carry row; done = number of columns finished (from the right) */
  function written(a, b, sign, rods, done, carries) {
    const ans = a + sign * b; const A = String(a).padStart(rods, ' '); const Bs = String(b).padStart(rods, ' '); const S = String(ans).padStart(rods, ' ');
    const cell = (ch, k, cls = '') => `<span class="wc ${k === done ? 'hl' : ''} ${cls}">${ch === ' ' ? '' : ch}</span>`;
    const row = (str, f = (ch) => ch) => str.split('').map((ch, i) => cell(f(ch, rods - 1 - i), rods - 1 - i)).join('');
    return `<div class="wsum" style="--w:${rods + 1}">
      <div class="wrow carry"><span class="wc"></span>${Array.from({ length: rods }, (_, i) => { const k = rods - 1 - i; return `<span class="wc cy">${carries[k] ? (sign > 0 ? `+${carries[k]}` : '−1') : ''}</span>`; }).join('')}</div>
      <div class="wrow"><span class="wc"></span>${row(A)}</div>
      <div class="wrow"><span class="wc op">${sign > 0 ? '+' : '−'}</span>${row(Bs)}</div>
      <div class="wrow line"><span class="wc"></span>${row(S, (ch, k) => (k < done ? ch : ''))}</div></div>`;
  }
  /** steps for column addition/subtraction, right to left */
  function colPlan(a, b, sign, rods) {
    const out = []; let carry = 0; const carries = {};
    for (let k = 0; k < rods; k++) {
      const da = Math.floor(a / 10 ** k) % 10; const db = Math.floor(b / 10 ** k) % 10; const P = PL[k]; const N = PL[k + 1];
      if (sign > 0) {
        const s = da + db + carry; const fromC = carry ? ` + ${carry} (${t('carried', 'हासिल')})` : '';
        if (!db && !carry) { out.push({ k, say: { en: `${P[0]}: nothing to add. The ${P[0]} rod stays ${da}.`, hi: `${P[1]}: कुछ नहीं जोड़ना। ${P[1]} की छड़ ${da} ही रहेगी।` }, carries: { ...carries } }); continue; }
        if (s >= 10 && N) {
          carries[k + 1] = 1;
          out.push({ k, say: { en: `${P[0]}: ${da} + ${db}${fromC} = ${s}. That is 1 ten and ${s - 10}. Leave ${s - 10} on the ${P[0]} rod and CARRY 1 to the ${N[0]} rod.`, hi: `${P[1]}: ${da} + ${db}${fromC} = ${s}। यानी 1 दहाई और ${s - 10}। ${P[1]} की छड़ पर ${s - 10} छोड़ो और 1 हासिल ${N[1]} की छड़ पर ले जाओ।` }, carries: { ...carries } });
          carry = 1;
        } else {
          out.push({ k, say: { en: `${P[0]}: ${da} + ${db}${fromC} = ${s}. Show ${s} on the ${P[0]} rod. No carry.`, hi: `${P[1]}: ${da} + ${db}${fromC} = ${s}। ${P[1]} की छड़ पर ${s} दिखाओ। कोई हासिल नहीं।` }, carries: { ...carries } });
          carry = 0;
        }
      } else {
        const top = da - carry; const bor = carry ? ` (${t('after lending 1', '1 उधार देने के बाद')})` : '';
        if (!db && !carry) { out.push({ k, say: { en: `${P[0]}: nothing to take away. The ${P[0]} rod stays ${da}.`, hi: `${P[1]}: कुछ नहीं घटाना। ${P[1]} की छड़ ${da} ही रहेगी।` }, carries: { ...carries } }); continue; }
        if (top < db) {
          carries[k + 1] = 1;
          out.push({ k, say: { en: `${P[0]}: ${top}${bor} is smaller than ${db}. BORROW 1 from the ${N[0]} rod: now ${top + 10} − ${db} = ${top + 10 - db}. Show ${top + 10 - db} on the ${P[0]} rod and take 1 bead off the ${N[0]} rod.`, hi: `${P[1]}: ${top}${bor}, ${db} से छोटा है। ${N[1]} की छड़ से 1 उधार लो: अब ${top + 10} − ${db} = ${top + 10 - db}। ${P[1]} पर ${top + 10 - db} दिखाओ और ${N[1]} की छड़ से 1 मोती हटाओ।` }, carries: { ...carries } });
          carry = 1;
        } else {
          out.push({ k, say: { en: `${P[0]}: ${top}${bor} − ${db} = ${top - db}. Show ${top - db} on the ${P[0]} rod.`, hi: `${P[1]}: ${top}${bor} − ${db} = ${top - db}। ${P[1]} की छड़ पर ${top - db} दिखाओ।` }, carries: { ...carries } });
          carry = 0;
        }
      }
    }
    return out;
  }
  function colProblem(sign, rods) {
    for (let i = 0; i < 300; i++) {
      const a = rand(10 ** (rods - 1), 10 ** rods - 1); const b = rand(10 ** (rods - 2), (sign > 0 ? 10 ** rods - 1 - a : a - 1));
      if (b < 1) { continue; } const res = a + sign * b; if (res < 0 || res >= 10 ** rods) { continue; }
      const n = colPlan(a, b, sign, rods).filter((x) => /CARRY|BORROW/.test(x.say.en)).length;
      if (n >= Math.min(2, rods - 1)) { return [a, b]; }
    }
    return sign > 0 ? [478, 365].map((x) => x % 10 ** rods) : [512, 278].map((x) => x % 10 ** rods);
  }
  function colMode(act, back) {
    const rods = act.rods || 2; const sign = act.mode === 'borrow' ? -1 : 1; const total = act.rounds || 4; let r = 0; let good = 0;
    const round = () => {
      const [a, b] = colProblem(sign, rods); const ans = a + sign * b; const pl = colPlan(a, b, sign, rods); const showDemo = r === 0 && !act.noDemo;
      K._t = { ans };
      frame(act, back, { id: 'abacus', r, total, prompt: { en: `${a} ${sign > 0 ? '+' : '−'} ${b} = ?  ${showDemo ? 'Watch Golu, column by column.' : 'Solve it column by column.'}`, hi: `${a} ${sign > 0 ? '+' : '−'} ${b} = ?  ${showDemo ? 'गोलू को देखो, एक-एक कॉलम।' : 'एक-एक कॉलम करके हल करो।'}` },
        body: `<div class="ab-col"><div data-ab></div><div data-ws></div></div><div data-box class="ab-box"></div><div class="nav" data-nav></div>` });
      const api = K._ab = abacus(q('[data-ab]'), rods, {});
      const ws = q('[data-ws]'); const box = q('[data-box]'); const nav = q('[data-nav]');
      const steps = [{ en: `Put ${a} on the abacus.`, hi: `गिनतारे पर ${a} रखो।` }, ...pl.map((x) => x.say), { en: `Answer: ${ans}`, hi: `उत्तर: ${ans}` }];
      const shorts = showDemo ? null : [null, ...pl.map((x) => ({ en: `${PL[x.k][0][0].toUpperCase()}${PL[x.k][0].slice(1)} column`, hi: `${PL[x.k][1]} का कॉलम` })), { en: 'Read the answer', hi: 'उत्तर पढ़ो' }];
      const mark = stepList(box, steps, shorts);
      const draw = (done, carries = {}) => { ws.innerHTML = written(a, b, sign, rods, done, carries); };
      draw(-1); api.set(a); mark(0);
      const target = (i) => a + sign * (b % 10 ** (i + 1));   // abacus value after column i
      if (showDemo) {
        api.lock(true);
        (async () => {
          await sayT({ en: `${a} is on the abacus. Now we ${sign > 0 ? 'add' : 'take away'} ${b}, starting with the ones – just like in your notebook.`, hi: `गिनतारे पर ${a} है। अब ${b} ${sign > 0 ? 'जोड़ेंगे' : 'घटाएँगे'}, इकाई से शुरू करके – बिल्कुल कॉपी की तरह।` });
          for (let i = 0; i < pl.length; i++) {
            if (!alive('abacus')) { return; }
            mark(i + 1); api.hl(pl[i].k); draw(pl[i].k, pl[i].carries); await sayT(pl[i].say);
            api.set(target(i)); K.sfx.pop(); draw(pl[i].k + 1, pl[i].carries); await wait(650);
          }
          api.hl(-1); mark(steps.length - 1); draw(rods, pl[pl.length - 1].carries);
          await sayT({ en: `The abacus and the notebook both show ${ans}! Now it is your turn.`, hi: `गिनतारा और कॉपी दोनों ${ans} दिखा रहे हैं! अब तुम्हारी बारी।` });
          good++; r++; if (r >= total) { K.finish(act, 3, back); } else { round(); }
        })();
        return;
      }
      // guided practice: the child does one column at a time, Golu checks each step
      let i = 0; let tries = 0; let clean = true;
      const ask = () => { K._t = { ans: target(i) }; mark(i + 1); api.hl(pl[i].k); draw(pl[i].k, i ? pl[i - 1].carries : {}); sayT(pl[i].say.en.includes('nothing to') ? pl[i].say : { en: `${PL[pl[i].k][0]} column. Work it out and move the beads.`, hi: `${PL[pl[i].k][1]} का कॉलम। हल करो और मोती खिसकाओ।` }); };
      nav.innerHTML = `<button class="btn ghost" data-hint>💡 ${t('Hint', 'संकेत')}</button><button class="btn green" data-ck>✔ ${t('Check this step', 'यह कदम जाँचो')}</button>`;
      q('[data-hint]').onclick = () => { K.sfx.tap(); clean = false; box.querySelector('.now')?.classList.add('open'); sayT(pl[i].say); };
      q('[data-ck]').onclick = async () => {
        if (api.get() === target(i)) {
          K.sfx.good(); draw(pl[i].k + 1, pl[i].carries); tries = 0; i++;
          if (i >= pl.length) { api.hl(-1); mark(steps.length - 1); if (clean) { good++; } await K.praise(); await sayT({ en: `${a} ${sign > 0 ? 'plus' : 'minus'} ${b} is ${ans}!`, hi: `${a} ${sign > 0 ? 'जोड़' : 'घटा'} ${b} बराबर ${ans}!` }); r++; if (r >= total) { K.finish(act, Math.max(1, Math.round((good / total) * 5)), back); } else { round(); } return; }
          ask(); return;
        }
        tries++; clean = false; K.tryAgain();
        if (tries >= 2) { box.querySelector('.now')?.classList.add('open'); await sayT(pl[i].say); api.set(target(i)); draw(pl[i].k + 1, pl[i].carries); K.sfx.pop(); tries = 0; i++; if (i >= pl.length) { api.hl(-1); r++; if (r >= total) { K.finish(act, Math.max(1, Math.round((good / total) * 5)), back); } else { round(); } } else { ask(); } }
      };
      ask();
    };
    round();
  }

  // ================================================================ ABACUS engine
  // act.mode: 'intro' | 'set' | 'read' | 'add' | 'sub';  act.rods: 1–3;  act.rule: 'direct'|'small'|'big'|'any'
  E.abacus = (act, back) => {
    if (act.mode === 'carry' || act.mode === 'borrow') { colMode(act, back); return; }
    const rods = act.rods || 1; const mode = act.mode; const total = act.rounds || 5; let r = 0; let good = 0; let demoed = !!act.noDemo;
    const shell = (prompt, extra = '') => {
      frame(act, back, { id: 'abacus', r, total: mode === 'intro' ? 1 : total, prompt, body: `<div data-ab></div><div data-box class="ab-box"></div>${extra}` });
      K._ab = abacus(q('[data-ab]'), rods, { digits: act.digits !== false && mode !== 'read' }); return K._ab;
    };
    const done = () => { r++; if (r >= total) { K.finish(act, Math.max(1, Math.round(good / total * 5)), back); return true; } return false; };

    if (mode === 'intro') {
      const api = shell({ en: 'Meet the abacus!', hi: 'गिनतारे (अबेकस) से मिलो!' });
      const box = q('[data-box]'); api.lock(true);
      (async () => {
        const lines = [
          [{ en: 'The abacus is a counting frame. Each up-and-down stick is a rod.', hi: 'अबेकस गिनने का फ़्रेम है। हर खड़ी छड़ एक रॉड है।' }, () => api.set(0)],
          [{ en: 'Each bead BELOW the bar is worth 1. Push it UP to the bar to count it.', hi: 'पट्टी के नीचे वाला हर मोती 1 का है। उसे गिनने के लिए पट्टी की ओर ऊपर करो।' }, () => api.setDigit(0, 1)],
          [{ en: 'Two, three, four – push up more beads.', hi: 'दो, तीन, चार – और मोती ऊपर करो।' }, async () => { for (const d of [2, 3, 4]) { api.setDigit(0, d); K.sfx.pop(); await wait(500); } }],
          [{ en: 'The bead ABOVE the bar is worth 5. Bring it DOWN to the bar. Now it shows 5.', hi: 'पट्टी के ऊपर वाला मोती 5 का है। उसे पट्टी की ओर नीचे लाओ। अब 5 दिख रहा है।' }, () => api.setDigit(0, 5)],
          [{ en: '6 is 5 and 1. 7 is 5 and 2. 9 is 5 and 4.', hi: '6 यानी 5 और 1। 7 यानी 5 और 2। 9 यानी 5 और 4।' }, async () => { for (const d of [6, 7, 8, 9]) { api.setDigit(0, d); K.sfx.pop(); await wait(600); } }],
          [{ en: 'Beads away from the bar mean nothing. Clear the rod and it shows 0.', hi: 'पट्टी से दूर वाले मोती कुछ नहीं गिनते। सब हटाओ तो 0।' }, () => api.set(0)],
        ];
        for (const [o, fn] of lines) { if (!alive('abacus')) { return; } box.innerHTML = `<div class="step-say">${esc(tx(o))}</div>`; await fn(); await sayT(o); await wait(400); }
        api.lock(false); api.set(0);
        const targets = shuffle([3, 5, 7, 9, 4, 6]).slice(0, 3); let i = 0;
        const askT = () => { K._t = { ans: targets[i] }; box.innerHTML = `<div class="ab-task">${t('Your turn! Show', 'अब तुम! दिखाओ')} <b>${targets[i]}</b></div>`; say(t(`Your turn! Show ${targets[i]} on the abacus.`, `अब तुम! गिनतारे पर ${targets[i]} दिखाओ।`)); };
        askT();
        api.on(async (v) => { if (v === targets[i]) { K.sfx.good(); await K.praise(); i++; if (i >= targets.length) { K.finish(act, 3, back); } else { api.set(0); askT(); } } });
      })();
      return;
    }
    const lim = 10 ** rods - 1;
    const round = () => {
      if (mode === 'set') {
        const n = rand(rods > 1 ? 10 ** (rods - 1) : 1, lim); let tries = 0; K._t = { ans: n };
        const api = shell({ en: `Show ${n} on the abacus.`, hi: `गिनतारे पर ${n} दिखाओ।` }, `<div class="nav"><button class="btn green" data-ck>✔ ${t('Check', 'जाँचो')}</button></div>`);
        q('[data-box]').innerHTML = `<div class="target-num">${n}</div>`;
        q('[data-ck]').onclick = async () => { if (api.get() === n) { K.sfx.good(); if (!tries) { good++; } await K.praise(); if (!done()) { round(); } } else { tries++; K.tryAgain(); if (tries >= 2) { const k = [...Array(rods).keys()].find((kk) => api.digit(kk) !== Math.floor(n / 10 ** kk) % 10); api.hl(k); sayT({ en: `Check the ${PL[k][0]} rod: it should show ${Math.floor(n / 10 ** k) % 10}.`, hi: `${PL[k][1]} वाली छड़ देखो: उस पर ${Math.floor(n / 10 ** k) % 10} होना चाहिए।` }); } } };
        return;
      }
      if (mode === 'read') {
        const n = rand(1, lim); let tries = 0; K._t = { ans: n };
        const api = shell({ en: 'What number is on the abacus?', hi: 'गिनतारे पर कौन सी संख्या है?' }, '<div data-pad></div>');
        api.set(n); api.lock(true);
        K.keypad(q('[data-pad]'), async (v) => { if (v === n) { K.sfx.good(); if (!tries) { good++; } await K.praise(); if (!done()) { round(); } return true; } tries++; K.tryAgain(); if (tries >= 2) { sayT({ en: `Count each rod: the 5-bead plus the 1-beads. It is ${n}.`, hi: `हर छड़ गिनो: 5 वाला मोती और 1 वाले मोती। यह ${n} है।` }); } return false; }, { max: 3 });
        return;
      }
      const sign = mode === 'sub' ? -1 : 1; const [a, b] = makeProblem(act.rule || 'any', sign, rods); const ans = a + sign * b; let tries = 0; K._t = { ans };
      const api = shell({ en: `${a} ${sign > 0 ? '+' : '−'} ${b} = ?  Move the beads to find out.`, hi: `${a} ${sign > 0 ? '+' : '−'} ${b} = ?  मोती खिसकाकर उत्तर निकालो।` }, `<div class="nav"><button class="btn ghost" data-show>👀 ${t('Show me how', 'कैसे करें, दिखाओ')}</button><button class="btn green" data-ck>✔ ${t('Check', 'जाँचो')}</button></div>`);
      const box = q('[data-box]');
      const start = () => { api.set(a); box.innerHTML = `<div class="eqn big">${a} ${sign > 0 ? '+' : '−'} ${b}</div><p class="center small">${t(`${a} is ready on the abacus. Now ${sign > 0 ? 'add' : 'take away'} ${b}.`, `गिनतारे पर ${a} रखा है। अब ${b} ${sign > 0 ? 'जोड़ो' : 'घटाओ'}।`)}</p>`; };
      if (!demoed) { demoed = true; demo(api, a, b, sign, rods, box).then(() => { if (alive('abacus')) { round(); } }); return; }
      start();
      q('[data-show]').onclick = () => { K.sfx.tap(); demo(api, a, b, sign, rods, box).then(() => { tries = 2; box.insertAdjacentHTML('beforeend', `<p class="center small">${t('Now you try: put it back and do it yourself!', 'अब तुम करो: फिर से खुद करके देखो!')}</p>`); start(); }); };
      q('[data-ck]').onclick = async () => { if (api.get() === ans) { K.sfx.good(); if (!tries) { good++; } await K.praise(); await sayT({ en: `${a} ${sign > 0 ? 'plus' : 'minus'} ${b} is ${ans}!`, hi: `${a} ${sign > 0 ? 'जोड़' : 'घटा'} ${b} बराबर ${ans}!` }); if (!done()) { round(); } } else { tries++; K.tryAgain(); if (tries >= 2) { sayT({ en: 'Tap "Show me how" to watch Golu.', hi: '"कैसे करें, दिखाओ" दबाकर गोलू को देखो।' }); } } };
    };
    round();
  };
  void pick;
})();
