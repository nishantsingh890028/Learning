/* Khel Khel Mein – Maths Gym: Golu solves an example step by step, then endless fresh practice that adapts.
   Engines: mathlab (+ − × ÷), tables (1–20), countlab (forward, reverse, skip, before/after). */
(() => {
  'use strict';
  const { t, tx, esc, pick, rand, shuffle, say, sayT, q, qa } = K;
  const E = K.ENGINES; const { frame, lbl, shake, bounce, wait, alive } = K.G;
  const N = (n) => (K.ui() === 'hi' ? K.hiNum(n) : String(n));
  const OBJ = ['🍎', '🥭', '🍌', '🪔', '⭐', '🐟', '🍪', '🎈', '🌸', '🐥'];

  // ---------------------------------------------------------------- keypad
  /** On-screen number pad. onEnter(value) returns true if correct (pad clears). */
  K.keypad = (el, onEnter, { max = 6 } = {}) => {
    let v = '';
    el.innerHTML = `<div class="kp-show" data-kv>?</div><div class="kp">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => `<button data-d="${d}">${d}</button>`).join('')}<button data-del>⌫</button><button data-d="0">0</button><button class="kp-ok" data-ok>✔</button></div>`;
    const show = () => { el.querySelector('[data-kv]').textContent = v || '?'; };
    el.querySelectorAll('[data-d]').forEach((b) => { b.onclick = () => { if (v.length < max) { v = (v === '0' ? '' : v) + b.dataset.d; K.sfx.tap(); show(); } }; });
    el.querySelector('[data-del]').onclick = () => { v = v.slice(0, -1); K.sfx.tap(); show(); };
    el.querySelector('[data-ok]').onclick = async () => { if (!v) { shake(el.querySelector('[data-kv]')); return; } const ok = await onEnter(Number(v)); if (ok !== false) { v = ''; show(); } else { shake(el.querySelector('[data-kv]')); } };
    return { set: (x) => { v = String(x); show(); }, clear: () => { v = ''; show(); } };
  };

  // ---------------------------------------------------------------- problem generators by level
  const R = rand;
  const GEN = {
    add: [null, () => { const a = R(1, 6); return [a, R(1, 10 - a)]; }, () => { const a = R(3, 15); return [a, R(2, 20 - a)]; }, () => { const a = R(11, 70); const b = R(10, 89 - a); return (a % 10) + (b % 10) < 10 ? [a, b] : [a - (a % 10) + R(0, 4), b - (b % 10) + R(0, 4)]; }, () => { let a; let b; do { a = R(15, 79); b = R(12, 99 - a); } while ((a % 10) + (b % 10) < 10); return [a, b]; }, () => [R(105, 650), R(95, 349)]],
    sub: [null, () => { const a = R(3, 10); return [a, R(1, a - 1)]; }, () => { const a = R(11, 20); return [a, R(2, a - 1)]; }, () => { const a = R(30, 99); const b = R(10, a - 10); return (a % 10) >= (b % 10) ? [a, b] : [a, b - (b % 10) + R(0, a % 10)]; }, () => { let a; let b; do { a = R(31, 99); b = R(12, a - 5); } while ((a % 10) >= (b % 10)); return [a, b]; }, () => { const a = R(300, 999); return [a, R(105, a - 50)]; }],
    mul: [null, () => [R(2, 5), pick([2, 5, 10])], () => [R(1, 10), R(2, 5)], () => [R(2, 10), R(2, 10)], () => [R(12, 49), R(2, 9)], () => [R(102, 399), R(2, 9)]],
    div: [null, () => { const d = pick([2, 3, 5]); return [d * R(1, 4), d]; }, () => { const d = R(2, 5); return [d * R(2, 10), d]; }, () => { const d = R(2, 10); return [d * R(2, 10), d]; }, () => { const d = R(2, 9); return [d * R(11, 30), d]; }, () => { const d = R(2, 9); return [d * R(30, 120), d]; }],
  };
  const SYM = { add: '+', sub: '−', mul: '×', div: '÷' };
  const calc = (op, a, b) => ({ add: a + b, sub: a - b, mul: a * b, div: a / b }[op]);
  const NAME = { add: ['add', 'जोड़'], sub: ['take away', 'घटा'], mul: ['times', 'गुणा'], div: ['divided by', 'भाग'] };

  // ---------------------------------------------------------------- step-by-step solutions
  const digits = (n, w) => String(n).padStart(w, ' ').split('');
  /** vertical sum layout; marks: {col: highlighted column index from right, carry:{}, ans: string, cross:{}} */
  function vert(a, b, op, m = {}) {
    const res = m.ans || ''; const w = Math.max(String(a).length, String(b).length, res.length) + 1;
    const A = digits(a, w); const B = digits(b, w); const S = res.padStart(w, ' ').split('');
    const cell = (ch, i, cls = '') => `<span class="vc ${w - 1 - i === m.col ? 'hl' : ''} ${cls}">${ch === ' ' ? '' : ch}</span>`;
    const top = A.map((ch, i) => { const k = w - 1 - i; const cr = m.cross && m.cross[k] != null; return `<span class="vc ${k === m.col ? 'hl' : ''}">${cr ? `<s>${ch}</s><sup class="nb">${m.cross[k]}</sup>` : ch === ' ' ? '' : ch}</span>`; }).join('');
    const carry = A.map((_, i) => { const k = w - 1 - i; return `<span class="vc cy">${m.carry && m.carry[k] ? m.carry[k] : ''}</span>`; }).join('');
    return `<div class="vert" style="--w:${w}"><div class="vrow">${carry}</div><div class="vrow">${top}</div><div class="vrow">${B.map((ch, i) => cell(i === 0 ? SYM[op] : ch, i, i === 0 ? 'opc' : '')).join('')}</div><div class="vline"></div><div class="vrow ans">${S.map((ch, i) => cell(ch, i)).join('')}</div></div>`;
  }
  const PLACE = [['ones', 'इकाई'], ['tens', 'दहाई'], ['hundreds', 'सैकड़े'], ['thousands', 'हज़ार']];
  /** returns [{html, say:{en,hi}}] explaining a op b */
  function solve(op, a, b) {
    const ans = calc(op, a, b); const S = [];
    const e = pick(OBJ);
    if (op === 'add' && a + b <= 20) {
      S.push({ html: `<div class="objs">${`<span>${e}</span>`.repeat(a)}<b class="plus">+</b>${`<span class="new">${e}</span>`.repeat(b)}</div>`, say: { en: `${a} ${e} and ${b} more ${e}. Let's put them together.`, hi: `${a} ${e} और ${b} ${e} और। चलो सबको मिलाएँ।` } });
      S.push({ html: `<div class="objs counted">${Array.from({ length: a + b }, (_, k) => `<span class="${k >= a ? 'new' : ''}">${e}<i>${k + 1}</i></span>`).join('')}</div>`, say: { en: `Count them all: ${Array.from({ length: a + b }, (_, k) => k + 1).join(', ')}.`, hi: `सबको गिनो: ${Array.from({ length: a + b }, (_, k) => K.hiNum(k + 1)).join(', ')}।` } });
      S.push({ html: `<div class="eqn">${a} + ${b} = <b>${ans}</b></div>`, say: { en: `So ${a} plus ${b} is ${ans}. Tip: start from the bigger number and count on.`, hi: `तो ${a} जोड़ ${b} बराबर ${ans}। तरकीब: बड़ी संख्या से शुरू करके आगे गिनो।` } });
      return S;
    }
    if (op === 'sub' && a <= 20) {
      S.push({ html: `<div class="objs">${`<span>${e}</span>`.repeat(a)}</div>`, say: { en: `We have ${a} ${e}. Take away ${b}.`, hi: `हमारे पास ${a} ${e} हैं। ${b} हटाओ।` } });
      S.push({ html: `<div class="objs">${Array.from({ length: a }, (_, k) => `<span class="${k >= a - b ? 'gone' : ''}">${e}</span>`).join('')}</div>`, say: { en: `Cross out ${b}. How many are left? ${Array.from({ length: a - b }, (_, k) => k + 1).join(', ')}.`, hi: `${b} काट दो। कितने बचे? ${Array.from({ length: a - b }, (_, k) => K.hiNum(k + 1)).join(', ')}।` } });
      S.push({ html: `<div class="eqn">${a} − ${b} = <b>${ans}</b></div>`, say: { en: `${a} minus ${b} is ${ans}. Check: ${ans} plus ${b} makes ${a} again!`, hi: `${a} घटा ${b} बराबर ${ans}। जाँचो: ${ans} जोड़ ${b} फिर से ${a}!` } });
      return S;
    }
    if (op === 'mul' && a <= 10 && b <= 10) {
      S.push({ html: `<div class="array" style="--c:${b}">${Array.from({ length: a }, (_, r) => `<div class="arow">${`<span>${e}</span>`.repeat(b)}<i>${b * (r + 1)}</i></div>`).join('')}</div>`, say: { en: `${a} times ${b} means ${a} rows of ${b}. Count in ${b}s: ${Array.from({ length: a }, (_, k) => b * (k + 1)).join(', ')}.`, hi: `${a} गुणा ${b} का मतलब ${b} की ${a} पंक्तियाँ। ${b}-${b} करके गिनो: ${Array.from({ length: a }, (_, k) => K.hiNum(b * (k + 1))).join(', ')}।` } });
      S.push({ html: `<div class="eqn">${Array(a).fill(b).join(' + ')} = <b>${ans}</b></div><div class="eqn">${a} × ${b} = <b>${ans}</b></div>`, say: { en: `Adding ${b} again and again, ${a} times, gives ${ans}. So ${a} times ${b} is ${ans}.`, hi: `${b} को ${a} बार जोड़ने पर ${ans} आता है। तो ${a} गुणा ${b} बराबर ${ans}।` } });
      return S;
    }
    if (op === 'div' && a <= 30 && b <= 5) {
      const each = a / b;
      S.push({ html: `<div class="objs">${`<span>${e}</span>`.repeat(Math.min(a, 40))}${a > 40 ? `<b>… ${a}</b>` : ''}</div>`, say: { en: `${a} divided by ${b} means: share ${a} ${e} equally among ${b} friends.`, hi: `${a} भाग ${b} का मतलब: ${a} ${e} को ${b} दोस्तों में बराबर बाँटो।` } });
      S.push({ html: `<div class="shares">${Array.from({ length: b }, (_, k) => `<div class="share"><b>🧒${k + 1}</b><div>${`<span>${e}</span>`.repeat(Math.min(each, 12))}${each > 12 ? `+${each - 12}` : ''}</div></div>`).join('')}</div>`, say: { en: `Give one to each friend, again and again, until none are left. Each friend gets ${each}.`, hi: `हर दोस्त को एक-एक देते जाओ, जब तक खत्म न हों। हर दोस्त को ${each} मिले।` } });
      S.push({ html: `<div class="eqn">${a} ÷ ${b} = <b>${each}</b></div><div class="eqn small">${t('Check', 'जाँच')}: ${b} × ${each} = ${a} ✔</div>`, say: { en: `${a} divided by ${b} is ${each}. Check with the table: ${b} times ${each} is ${a}.`, hi: `${a} भाग ${b} बराबर ${each}। पहाड़े से जाँचो: ${b} गुणा ${each} बराबर ${a}।` } });
      return S;
    }
    if (op === 'div' && a / b <= 10) {
      const qn = a / b; const seq = Array.from({ length: qn }, (_, k) => b * (k + 1));
      S.push({ html: `<div class="eqn">${b} × ? = ${a}</div>`, say: { en: `${a} ÷ ${b} asks: how many ${b}s make ${a}? Use the table of ${b}.`, hi: `${a} ÷ ${b} पूछता है: कितने ${b} मिलकर ${a} बनते हैं? ${b} का पहाड़ा लगाओ।` } });
      S.push({ html: `<div class="chain-trail">${seq.map((v, k) => `<span>${k + 1}: ${v}</span>`).join('')}</div>`, say: { en: `Count in ${b}s: ${seq.join(', ')}. That is ${qn} jumps.`, hi: `${b}-${b} करके गिनो: ${seq.map((v) => K.hiNum(v)).join(', ')}। यह ${qn} छलाँग हैं।` } });
      S.push({ html: `<div class="eqn">${a} ÷ ${b} = <b>${qn}</b></div><div class="eqn small">${t('because', 'क्योंकि')} ${b} × ${qn} = ${a}</div>`, say: { en: `So ${a} divided by ${b} is ${qn}.`, hi: `तो ${a} भाग ${b} बराबर ${qn}।` } });
      return S;
    }
    if (op === 'add' || op === 'sub' || op === 'mul') {
      const da = String(a).split('').reverse().map(Number); const db = String(b).split('').reverse().map(Number);
      const cols = op === 'mul' ? da.length : Math.max(da.length, db.length);
      S.push({ html: vert(a, b, op), say: op === 'mul' ? { en: `Write ${a} on top and ${b} below the ones. We multiply each digit of ${a} by ${b}, starting from the ones.`, hi: `${a} ऊपर लिखो और ${b} इकाई के नीचे। ${a} के हर अंक को ${b} से गुणा करेंगे, इकाई से शुरू करके।` } : { en: `Write the numbers one below the other: ones under ones, tens under tens. Always start from the ones.`, hi: `संख्याएँ एक के नीचे एक लिखो: इकाई के नीचे इकाई, दहाई के नीचे दहाई। हमेशा इकाई से शुरू करो।` } });
      let carry = 0; let res = ''; const carries = {}; const cross = {}; const top = [...da];
      for (let k = 0; k < cols; k++) {
        const P = PLACE[k] || PLACE[3];
        if (op === 'add') {
          const s = (da[k] || 0) + (db[k] || 0) + carry; const cin = carry; carry = Math.floor(s / 10); res = String(s % 10) + res; if (carry) { carries[k + 1] = carry; }
          S.push({ html: vert(a, b, op, { col: k, ans: res, carry: { ...carries } }), say: { en: `${P[0]}: ${da[k] || 0} + ${db[k] || 0}${cin ? ` + ${cin} carried` : ''} = ${s}. ${carry ? `Write ${s % 10} and carry ${carry} to the ${PLACE[k + 1][0]}.` : `Write ${s}.`}`, hi: `${P[1]}: ${da[k] || 0} + ${db[k] || 0}${cin ? ` + हासिल ${cin}` : ''} = ${s}। ${carry ? `${s % 10} लिखो और ${carry} हासिल ${PLACE[k + 1][1]} में ले जाओ।` : `${s} लिखो।`}` } });
        } else if (op === 'sub') {
          let tp = top[k]; const bt = db[k] || 0; let borrowed = false;
          if (tp < bt) { let j = k + 1; while (top[j] === 0) { top[j] = 9; cross[j] = 9; j++; } top[j] -= 1; cross[j] = top[j]; tp += 10; top[k] = tp; cross[k] = tp; borrowed = true; }
          res = String(tp - bt) + res;
          S.push({ html: vert(a, b, op, { col: k, ans: res, cross: { ...cross } }), say: borrowed ? { en: `${P[0]}: we can't take ${bt} from ${tp - 10}, so borrow 1 from the ${PLACE[k + 1][0]}. Now ${tp} − ${bt} = ${tp - bt}.`, hi: `${P[1]}: ${tp - 10} में से ${bt} नहीं घटा सकते, इसलिए ${PLACE[k + 1][1]} से 1 उधार लो। अब ${tp} − ${bt} = ${tp - bt}।` } : { en: `${P[0]}: ${tp} − ${bt} = ${tp - bt}.`, hi: `${P[1]}: ${tp} − ${bt} = ${tp - bt}।` } });
        } else {
          const p = da[k] * b + carry; const cin = carry; carry = Math.floor(p / 10); const last = k === cols - 1;
          res = (last ? String(p) : String(p % 10)) + res; if (carry && !last) { carries[k + 1] = carry; }
          S.push({ html: vert(a, b, op, { col: k, ans: res, carry: { ...carries } }), say: { en: `${da[k]} × ${b}${cin ? ` + ${cin} carried` : ''} = ${p}. ${last ? `Write ${p}.` : carry ? `Write ${p % 10}, carry ${carry}.` : `Write ${p}.`}`, hi: `${da[k]} × ${b}${cin ? ` + हासिल ${cin}` : ''} = ${p}। ${last ? `${p} लिखो।` : carry ? `${p % 10} लिखो, हासिल ${carry}।` : `${p} लिखो।`}` } });
        }
      }
      if (op === 'add' && carry) { res = String(carry) + res; S.push({ html: vert(a, b, op, { ans: res, carry: { ...carries } }), say: { en: `Bring down the carried ${carry}.`, hi: `हासिल ${carry} नीचे लिखो।` } }); }
      S.push({ html: vert(a, b, op, { ans: String(ans), carry: { ...carries }, cross: { ...cross } }) + `<div class="eqn">${a} ${SYM[op]} ${b} = <b>${ans}</b></div>`, say: { en: `The answer is ${ans}!`, hi: `उत्तर है ${ans}!` } });
      return S;
    }
    // long division a ÷ b (exact)
    const ds = String(a).split('').map(Number); let rem = 0; let quo = ''; const rows = [];
    S.push({ html: longdiv(a, b, '', []), say: { en: `Long division: ${a} ÷ ${b}. We go from the left: divide, multiply, subtract, bring down.`, hi: `लंबा भाग: ${a} ÷ ${b}। बाएँ से चलते हैं: भाग दो, गुणा करो, घटाओ, नीचे उतारो।` } });
    ds.forEach((d, i) => {
      const cur = rem * 10 + d; const qd = Math.floor(cur / b); quo += qd; rem = cur - qd * b;
      if (quo === '0' && i < ds.length - 1) { quo = ''; rem = cur; S.push({ html: longdiv(a, b, quo, rows), say: { en: `${cur} is smaller than ${b}, so take the next digit too.`, hi: `${cur}, ${b} से छोटा है, इसलिए अगला अंक भी लो।` } }); return; }
      rows.push([cur, qd * b, rem]);
      S.push({ html: longdiv(a, b, quo, rows), say: { en: `How many ${b}s in ${cur}? ${qd}. ${qd} × ${b} = ${qd * b}. ${cur} − ${qd * b} = ${rem}.${i < ds.length - 1 ? ` Bring down the next digit.` : ''}`, hi: `${cur} में ${b} कितनी बार? ${qd}। ${qd} × ${b} = ${qd * b}। ${cur} − ${qd * b} = ${rem}।${i < ds.length - 1 ? ' अगला अंक नीचे उतारो।' : ''}` } });
    });
    S.push({ html: longdiv(a, b, String(ans), rows) + `<div class="eqn">${a} ÷ ${b} = <b>${ans}</b></div>`, say: { en: `The answer is ${ans}. Check: ${b} × ${ans} = ${a}.`, hi: `उत्तर ${ans} है। जाँच: ${b} × ${ans} = ${a}।` } });
    return S;
  }
  function longdiv(a, b, quo, rows) {
    return `<div class="ldiv"><div class="lq">${quo || '&nbsp;'}</div><div class="lmain"><span class="ldv">${b}</span><span class="ldd">${a}</span></div>${rows.map(([c, m, r]) => `<div class="lrow"><span>${c}</span><span>− ${m}</span><span class="lr">${r}</span></div>`).join('')}</div>`;
  }
  K.solveSteps = solve;

  /** Play solution steps with voice; shows Next / Replay. Resolves when done. */
  function teachSteps(box, steps) {
    return new Promise((resolve) => {
      let i = 0;
      const show = async () => {
        box.innerHTML = `<div class="steps-head">👨‍🏫 ${t('Golu shows you how', 'गोलू सिखाता है')} · ${t('step', 'चरण')} ${i + 1}/${steps.length}</div><div class="step-body">${steps[i].html}</div><div class="step-say">${esc(tx(steps[i].say))}</div>
          <div class="nav"><button class="btn ghost" data-rep>🔊</button><button class="btn green" data-nx>${i < steps.length - 1 ? t('Next step ▶', 'अगला चरण ▶') : t('I understand! Let me try ✔', 'समझ गया! मैं करूँगा ✔')}</button></div>`;
        box.querySelector('[data-rep]').onclick = () => sayT(steps[i].say);
        box.querySelector('[data-nx]').onclick = () => { K.sfx.tap(); if (i < steps.length - 1) { i++; show(); } else { resolve(); } };
        sayT(steps[i].say);
      };
      show();
    });
  }
  K.teachSteps = teachSteps;

  // ================================================================ MATHLAB: teach → practise (adaptive)
  // act: { op:'add'|'sub'|'mul'|'div'|'mix', level: 1–5, min?, max?, rounds? }
  E.mathlab = (act, back) => {
    const total = act.rounds || 10; let lv = act.level || 1; const lmin = act.min || Math.max(1, lv - 1); const lmax = act.max || Math.min(5, lv + 1);
    let r = 0; let good = 0; let streak = 0; let misses = 0;
    const opFor = () => (act.op === 'mix' ? pick(['add', 'sub', 'mul', 'div'].filter((o) => !(lv === 1 && o === 'div'))) : act.op);
    const intro = () => {
      const op = opFor(); const [a, b] = GEN[op][lv]();
      K.render(tx(act.title), `<div data-screen="lab" class="game g-mathlab"><div class="lab-intro">${t('First, watch Golu solve one', 'पहले देखो गोलू कैसे हल करता है')}: <b>${a} ${SYM[op]} ${b}</b></div><div data-steps></div></div>`, { name: 'act', back, mascot: true });
      teachSteps(q('[data-steps]'), solve(op, a, b)).then(() => { if (alive('lab')) { problem(); } });
    };
    const problem = () => {
      const op = opFor(); const [a, b] = GEN[op][lv](); const ans = calc(op, a, b); K._t = { ans }; let tries = 0; const big = a > 20 || b > 20 || (op === 'mul' && a * b > 50);
      const e = pick(OBJ);
      const visual = !big && lv <= 2 ? (op === 'add' ? `<div class="objs">${`<span>${e}</span>`.repeat(a)}<b class="plus">+</b>${`<span class="new">${e}</span>`.repeat(b)}</div>` : op === 'sub' ? `<div class="objs">${Array.from({ length: a }, (_, k) => `<span class="${k >= a - b ? 'gone' : ''}">${e}</span>`).join('')}</div>` : op === 'mul' ? `<div class="array small" style="--c:${b}">${Array.from({ length: a }, () => `<div class="arow">${`<span>${e}</span>`.repeat(b)}</div>`).join('')}</div>` : '') : '';
      frame(act, back, {
        id: 'lab', r, total, prompt: { en: `${a} ${NAME[op][0]} ${b}?`, hi: `${a} ${NAME[op][1]} ${b}?` },
        body: `<div class="lvl-chip">${t('Level', 'स्तर')} ${lv} ${'⭐'.repeat(lv)}</div>${visual}${big ? (op === 'div' ? `<div class="eqn big">${a} ÷ ${b} = ?</div>` : vert(a, b, op)) : `<div class="eqn big">${a} ${SYM[op]} ${b} = ?</div>`}<div data-pad></div><div data-help></div>`,
      });
      K.keypad(q('[data-pad]'), async (v) => {
        if (v === ans) {
          K.sfx.good(); good += tries === 0 ? 1 : 0; streak++; misses = 0; r++; await K.praise();
          if (streak >= 3 && lv < lmax) { lv++; streak = 0; K.confetti(); await say(t('Level up! Harder sums now.', 'अगला स्तर! अब थोड़े कठिन सवाल।')); }
          if (!alive('lab')) { return true; }
          if (r >= total) { K.finish(act, Math.max(1, Math.round(good / total * 5)), back); } else { problem(); }
          return true;
        }
        tries++; streak = 0; K.tryAgain();
        if (tries === 1) { sayT(big ? { en: 'Start with the ones place, then the tens.', hi: 'इकाई से शुरू करो, फिर दहाई।' } : { en: 'Count carefully and try again.', hi: 'ध्यान से गिनो और फिर कोशिश करो।' }); }
        if (tries >= 2) {
          misses++; q('[data-pad]').innerHTML = '';
          await teachSteps(q('[data-help]'), solve(op, a, b));
          if (misses >= 2 && lv > lmin) { lv--; misses = 0; }
          r++; if (!alive('lab')) { return true; } if (r >= total) { K.finish(act, Math.max(1, Math.round(good / total * 5)), back); } else { problem(); }
        }
        return false;
      });
    };
    intro();
  };

  // ================================================================ TABLES: learn the table, then practise
  // act: { tables:[2,3] } or { pick:true, from:1, to:20 }
  E.tables = (act, back) => {
    const learn = (n) => {
      let k = 0; const e = pick(OBJ);
      K.render(tx(act.title), `<div data-screen="tbl" class="game g-tables"><div class="tbl-title">${t(`Table of ${n}`, `${n} का पहाड़ा`)}</div>
        <div class="tbl-grid" data-g>${Array.from({ length: 10 }, (_, i) => `<div class="tr" data-r="${i}"><span>${n} × ${i + 1}</span><span>=</span><b>?</b></div>`).join('')}</div>
        <div class="tbl-dots" data-dots></div>
        <div class="nav"><button class="btn green" data-nx>${t('Next ▶', 'आगे ▶')}</button><button class="btn ghost" data-skip>${t('Practise now', 'अभ्यास करो')}</button></div></div>`, { name: 'act', back, mascot: true });
      say(t(`Let's learn the table of ${n}. Each time we add ${n} more.`, `चलो ${n} का पहाड़ा सीखें। हर बार ${n} और जुड़ता है।`));
      const step = async () => {
        if (k >= 10) { practise(n); return; }
        const row = q(`[data-r="${k}"]`); row.classList.add('on'); row.querySelector('b').textContent = n * (k + 1);
        q('[data-dots]').innerHTML = n <= 10 ? Array.from({ length: k + 1 }, () => `<div class="arow">${`<span>${e}</span>`.repeat(n)}</div>`).join('') : `<div class="eqn">${Array(k + 1).fill(n).join(' + ')} = ${n * (k + 1)}</div>`;
        K.sfx.pop(); k++;
        await say(K.ui() === 'hi' ? `${K.hiNum(n)} ${['एकम', 'दूनी', 'तिया', 'चौके', 'पंजे', 'छक्के', 'सत्ते', 'अट्ठे', 'नवें', 'दहाई'][k - 1]} ${K.hiNum(n * k)}` : `${n} times ${k} is ${n * k}`);
      };
      q('[data-nx]').onclick = () => { K.sfx.tap(); step(); };
      q('[data-skip]').onclick = () => { K.sfx.tap(); practise(n); };
      step();
    };
    const practise = (n) => {
      const ks = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).slice(0, 8); let r = 0; let good = 0;
      const one = () => {
        const k = ks[r]; let tries = 0; K._t = { ans: n * k };
        frame(act, back, { id: 'tbl', r, total: ks.length, prompt: { en: `${n} times ${k}?`, hi: `${n} गुणा ${k}?` }, body: `<div class="eqn big">${n} × ${k} = ?</div><div data-pad></div><div data-help class="center"></div>` });
        K.keypad(q('[data-pad]'), async (v) => {
          if (v === n * k) { K.sfx.good(); if (!tries) { good++; } r++; await K.praise(); if (!alive('tbl')) { return true; } if (r >= ks.length) { chain(n, good); } else { one(); } return true; }
          tries++; K.tryAgain(); q('[data-help]').innerHTML = `<div class="eqn small">${t('Hint', 'संकेत')}: ${n} × ${k - 1} = ${n * (k - 1)} → + ${n}</div>`;
          if (tries >= 2) { await sayT({ en: `${n} times ${k} is ${n * k}.`, hi: `${n} गुणा ${k} बराबर ${n * k}।` }); r++; if (r >= ks.length) { chain(n, good); } else { one(); } }
          return false;
        }, { max: 3 });
      };
      one();
    };
    const chain = (n, good) => {
      const seq = Array.from({ length: 10 }, (_, k) => n * (k + 1)); let at = 0; K._t = { seq };
      frame(act, back, { id: 'tbl', prompt: { en: `Skip-count race! Tap ${seq.slice(0, 3).join(', ')}… up to ${n * 10}.`, hi: `उछल-गिनती! ${seq.slice(0, 3).join(', ')}… से ${n * 10} तक दबाओ।` }, body: `<div class="chain">${shuffle(seq.map((v) => v)).map((v) => `<button class="cbtn" data-v="${v}">${v}</button>`).join('')}</div><div class="chain-trail" data-trail></div>` });
      qa('[data-v]').forEach((el) => { el.onclick = async () => { if (Number(el.dataset.v) === seq[at]) { el.disabled = true; el.classList.add('ok'); q('[data-trail]').insertAdjacentHTML('beforeend', `<span>${seq[at]}</span>`); K.sfx.pop(); at++; if (at === 10) { await K.praise(); K.finish(act, Math.max(1, Math.round(good / 8 * 5)), back); } } else { shake(el); K.sfx.bad(); } }; });
    };
    if (act.pick) {
      K.render(tx(act.title), `<div class="tbl-pick">${Array.from({ length: (act.to || 20) - (act.from || 1) + 1 }, (_, i) => i + (act.from || 1)).map((n) => `<button class="tp" data-n="${n}">${n}</button>`).join('')}</div>`, { name: 'act', back, mascot: true });
      say(t('Which table shall we learn?', 'कौन सा पहाड़ा सीखें?'));
      qa('[data-n]').forEach((el) => { el.onclick = () => { K.sfx.tap(); learn(Number(el.dataset.n)); }; });
      return;
    }
    learn(pick(act.tables || [2]));
  };

  // ================================================================ COUNTLAB: forward, reverse, skip, neighbours
  // act: { mode:'up'|'down'|'skip'|'near', max, step? }
  E.countlab = (act, back) => {
    const total = act.rounds || 3; let r = 0;
    const next = () => { r++; if (r >= total) { K.finish(act, 3, back); } else { play(); } };
    const play = () => {
      const mode = act.mode; const max = act.max || 20;
      if (mode === 'near') {
        const n = rand(2, max - 1); const kind = pick(['before', 'after', 'between']); const ans = kind === 'before' ? n - 1 : kind === 'after' ? n + 1 : n;
        K._t = { ans }; const prompt = kind === 'before' ? { en: `Which number comes just BEFORE ${n}?`, hi: `${n} से ठीक पहले कौन सी संख्या आती है?` } : kind === 'after' ? { en: `Which number comes just AFTER ${n}?`, hi: `${n} के ठीक बाद कौन सी संख्या आती है?` } : { en: `Which number comes BETWEEN ${n - 1} and ${n + 1}?`, hi: `${n - 1} और ${n + 1} के बीच कौन सी संख्या है?` };
        frame(act, back, { id: 'cnt', r, total, prompt, body: `<div class="near">${kind === 'before' ? `<b>?</b><span>${n}</span>` : kind === 'after' ? `<span>${n}</span><b>?</b>` : `<span>${n - 1}</span><b>?</b><span>${n + 1}</span>`}</div><div data-pad></div>` });
        let tries = 0;
        K.keypad(q('[data-pad]'), async (v) => { if (v === ans) { K.sfx.good(); await K.praise(); if (alive('cnt')) { next(); } return true; } tries++; K.tryAgain(); if (tries >= 2) { sayT({ en: `Count: ${ans - 1}, ${ans}, ${ans + 1}.`, hi: `गिनो: ${ans - 1}, ${ans}, ${ans + 1}।` }); } return false; }, { max: 4 });
        return;
      }
      const step = mode === 'skip' ? (act.step || pick([2, 5, 10])) : 1; const len = 10;
      const down = mode === 'down' || (mode === 'skip' && act.down);
      const hi = Math.max(len * step, Math.floor(rand(len * step, max) / step) * step); const seq = Array.from({ length: len }, (_, k) => (down ? hi - k * step : hi - (len - 1 - k) * step)); K._t = { seq };
      const prompt = down ? { en: `Count BACKWARDS from ${seq[0]}! Tap ${seq[0]}, ${seq[1]}, ${seq[2]}…`, hi: `${seq[0]} से उल्टी गिनती! ${seq[0]}, ${seq[1]}, ${seq[2]}… दबाओ` } : { en: `Count ${step > 1 ? `in ${step}s` : 'forwards'}: ${seq[0]}, ${seq[1]}, ${seq[2]}…`, hi: `${step > 1 ? `${step}-${step} करके` : 'आगे'} गिनो: ${seq[0]}, ${seq[1]}, ${seq[2]}…` };
      let at = 0;
      frame(act, back, { id: 'cnt', r, total, prompt, body: `<div class="launch ${down ? 'rocket' : 'train'}"><div class="vehicle" data-veh>${down ? '🚀' : '🚂'}</div><div class="trail" data-trail></div></div><div class="chain">${shuffle([...seq]).map((v) => `<button class="cbtn" data-v="${v}">${v}</button>`).join('')}</div>` });
      qa('[data-v]').forEach((el) => {
        el.onclick = async () => {
          if (Number(el.dataset.v) !== seq[at]) { shake(el); K.sfx.bad(); say(String(seq[at]).length ? t(`Find ${seq[at]}`, `${seq[at]} ढूँढो`) : ''); return; }
          el.disabled = true; el.classList.add('ok'); q('[data-trail]').insertAdjacentHTML('beforeend', `<span>${seq[at]}</span>`); K.sfx.pop(); say(N(seq[at])); at++;
          q('[data-veh]').style.transform = down ? `translateY(${-at * 6}px)` : `translateX(${at * 8}px)`;
          if (at === len) { q('[data-veh]').classList.add('go'); K.confetti(); await say(down ? t('Blast off!', 'उड़ चला रॉकेट!') : t('Choo choo! All aboard!', 'छुक छुक! सब सवार!')); await wait(600); if (alive('cnt')) { next(); } }
        };
      });
    };
    play();
  };
})();
