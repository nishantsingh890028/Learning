/* Khel Khel Mein v3 – hands-on maths (concrete → pictorial → abstract) and picture-scene games. */
(() => {
  'use strict';
  const { t, tx, esc, pick, rand, shuffle, say, sayT, q, qa } = K;
  const E = K.ENGINES; const { frame, series, lbl, shake, bounce, wait, alive } = K.G;
  const N = (n) => (K.ui() === 'hi' ? K.hiNum(n) : String(n));
  const OBJ = ['🥭', '🍎', '🪔', '🌸', '🐟', '⭐', '🍪', '🎈', '🐥', '🥥'];

  // ================================================================ TEN FRAME
  // act.mode: 'build' (show n), 'make10' (how many more to make 10), 'bond' (two colours make n)
  E.tenframe = (act, back) => {
    const total = act.rounds || 5;
    series(act, back, total, (r, next) => {
      const mode = act.mode || 'build'; const e = pick(OBJ);
      const n = mode === 'make10' ? rand(1, 9) : rand(act.min || 1, act.max || 10);
      const two = (act.max || 10) > 10 && mode === 'build';
      const cells = two ? 20 : 10; const filled = new Set(); let tries = 0;
      const pre = mode === 'make10' ? n : 0;
      const prompt = mode === 'make10' ? { en: `There ${n === 1 ? 'is' : 'are'} ${n}. Fill the frame to make 10. How many more?`, hi: `यहाँ ${n} हैं। 10 बनाने के लिए खाने भरो। कितने और चाहिए?` } : { en: `Put ${n} ${e} in the frame.`, hi: `खानों में ${n} ${e} रखो।` };
      frame(act, back, {
        id: 'ten', r, total, prompt,
        body: `<div class="tenframe ${two ? 'two' : ''}">${Array.from({ length: cells }, (_, k) => `<button class="tf ${k < pre ? 'pre' : ''}" data-t="${k}">${k < pre ? e : ''}</button>`).join('')}</div>
          <div class="tf-count"><span data-cnt>${pre}</span>${mode === 'make10' ? ` + <b data-add>0</b> = 10?` : ''}</div>
          <div class="nav"><button class="btn green" data-check>✔ ${t('Check', 'जाँचो')}</button></div>`,
      });
      qa('.tf:not(.pre)').forEach((el) => {
        el.onclick = () => {
          const k = el.dataset.t; if (filled.has(k)) { filled.delete(k); el.textContent = ''; } else { filled.add(k); el.textContent = e; K.sfx.pop(); say(N(pre + filled.size)); }
          q('[data-cnt]').textContent = mode === 'make10' ? pre : filled.size; const a = q('[data-add]'); if (a) { a.textContent = filled.size; }
        };
      });
      q('[data-check]').onclick = async () => {
        const got = pre + filled.size; const goal = mode === 'make10' ? 10 : n;
        if (got === goal) {
          K.sfx.good(); await K.praise();
          await sayT(mode === 'make10' ? { en: `${n} and ${10 - n} make 10!`, hi: `${n} और ${10 - n} मिलकर 10 बनते हैं!` } : { en: `${n}! ${n > 5 && n <= 10 ? `That is 5 and ${n - 5} more.` : ''}`, hi: `${n}! ${n > 5 && n <= 10 ? `यह 5 और ${n - 5} है।` : ''}` });
          if (alive('ten')) { next(tries === 0); }
        } else { tries++; shake(q('.tenframe')); await sayT(got < goal ? { en: `That is ${got}. Put some more.`, hi: `यह ${got} हैं। कुछ और रखो।` } : { en: `That is ${got}. Too many!`, hi: `यह ${got} हैं। ज़्यादा हो गए!` }); }
      };
    });
  };

  // ================================================================ BUNDLES (place value with sticks)
  // act.max: 99 or 999
  E.bundles = (act, back) => {
    const total = act.rounds || 4; const max = act.max || 99;
    series(act, back, total, (r, next) => {
      const n = rand(max > 99 ? 101 : 11, max); let H = 0; let T = 0; let O = 0; let tries = 0;
      frame(act, back, {
        id: 'bund', r, total, prompt: { en: `Make ${n} with bundles and sticks.`, hi: `गड्डियों और तीलियों से ${n} बनाओ।` },
        body: `<div class="target-num">${n}</div>
          <div class="pv">${max > 99 ? `<div class="pv-col"><div class="pv-h">${t('Hundreds', 'सैकड़े')}</div><div class="pv-in" data-pv="H"></div><div class="pv-n" data-n="H">0</div><div class="row center"><button class="mini-btn" data-sub="H">−</button><button class="mini-btn add" data-addp="H">＋</button></div></div>` : ''}
            <div class="pv-col"><div class="pv-h">${t('Tens', 'दहाई')}</div><div class="pv-in" data-pv="T"></div><div class="pv-n" data-n="T">0</div><div class="row center"><button class="mini-btn" data-sub="T">−</button><button class="mini-btn add" data-addp="T">＋</button></div></div>
            <div class="pv-col"><div class="pv-h">${t('Ones', 'इकाई')}</div><div class="pv-in" data-pv="O"></div><div class="pv-n" data-n="O">0</div><div class="row center"><button class="mini-btn" data-sub="O">−</button><button class="mini-btn add" data-addp="O">＋</button></div></div></div>
          <div class="pv-total">= <b data-total>0</b></div>
          <div class="nav"><button class="btn green" data-check>✔ ${t('Check', 'जाँचो')}</button></div>`,
      });
      const draw = () => {
        q('[data-pv="O"]').innerHTML = '<span class="stick"></span>'.repeat(O); q('[data-pv="T"]').innerHTML = '<span class="bundle"></span>'.repeat(T);
        const h = q('[data-pv="H"]'); if (h) { h.innerHTML = '<span class="flat"></span>'.repeat(H); }
        qa('[data-n]').forEach((el) => { el.textContent = { H, T, O }[el.dataset.n]; }); q('[data-total]').textContent = H * 100 + T * 10 + O;
      };
      qa('[data-addp]').forEach((el) => { el.onclick = () => { const k = el.dataset.addp; if (k === 'O' && O < 9) { O++; } else if (k === 'T' && T < 9) { T++; } else if (k === 'H' && H < 9) { H++; } else { say(t('Only 9 fit here! 10 ones make a ten.', 'यहाँ सिर्फ़ 9! दस इकाई से एक दहाई बनती है।')); } K.sfx.pop(); draw(); say(N(H * 100 + T * 10 + O)); }; });
      qa('[data-sub]').forEach((el) => { el.onclick = () => { const k = el.dataset.sub; if (k === 'O' && O) { O--; } if (k === 'T' && T) { T--; } if (k === 'H' && H) { H--; } K.sfx.tap(); draw(); }; });
      q('[data-check]').onclick = async () => {
        if (H * 100 + T * 10 + O === n) {
          K.sfx.good(); await K.praise();
          await sayT(n > 99 ? { en: `${Math.floor(n / 100)} hundreds, ${Math.floor(n / 10) % 10} tens and ${n % 10} ones make ${n}.`, hi: `${Math.floor(n / 100)} सैकड़े, ${Math.floor(n / 10) % 10} दहाई और ${n % 10} इकाई मिलकर ${n}।` } : { en: `${T} tens and ${O} ones make ${n}.`, hi: `${T} दहाई और ${O} इकाई मिलकर ${n}।` });
          if (alive('bund')) { next(tries === 0); }
        } else { tries++; shake(q('.pv')); K.tryAgain(); if (tries >= 2) { sayT({ en: `Look at ${n}: the first digit tells how many ${n > 99 ? 'hundreds' : 'tens'}.`, hi: `${n} को देखो: पहला अंक बताता है कितने ${n > 99 ? 'सैकड़े' : 'दहाई'}।` }); } }
      };
      draw();
    });
  };

  // ================================================================ SET THE CLOCK (drag the hands)
  E.clockset = (act, back) => {
    const total = act.rounds || 4;
    series(act, back, total, (r, next) => {
      const h = rand(1, 12); const m = act.minutes ? pick(act.minutes) : pick([0, 30]); let hh = 12; let mm = 0; let tries = 0;
      const timeEn = m === 0 ? `${h} o'clock` : m === 30 ? `half past ${h}` : m === 15 ? `quarter past ${h}` : m === 45 ? `quarter to ${h % 12 + 1}` : `${h}:${String(m).padStart(2, '0')}`;
      const timeHi = m === 0 ? `${h} बजे` : m === 30 ? `साढ़े ${h} बजे` : m === 15 ? `सवा ${h} बजे` : m === 45 ? `पौने ${h % 12 + 1} बजे` : `${h} बजकर ${m} मिनट`;
      frame(act, back, {
        id: 'clk', r, total, prompt: { en: `Set the clock to ${timeEn}. Drag the hands.`, hi: `घड़ी में ${timeHi} बजाओ। सुइयाँ घुमाओ।` },
        body: `<div class="target-num small">${h}:${String(m).padStart(2, '0')}</div>
          <div class="clock-wrap"><svg viewBox="0 0 100 100" data-clock><circle cx="50" cy="50" r="47" fill="#fff" stroke="#7c3aed" stroke-width="3.5"/>
          ${Array.from({ length: 60 }, (_, k) => { const a = k * 6 * Math.PI / 180; const r1 = k % 5 ? 43 : 40; return `<line x1="${50 + r1 * Math.sin(a)}" y1="${50 - r1 * Math.cos(a)}" x2="${50 + 45 * Math.sin(a)}" y2="${50 - 45 * Math.cos(a)}" stroke="#c4b5fd" stroke-width="${k % 5 ? 0.8 : 1.8}"/>`; }).join('')}
          ${Array.from({ length: 12 }, (_, k) => { const a = (k + 1) * 30 * Math.PI / 180; return `<text x="${50 + 33 * Math.sin(a)}" y="${54 - 33 * Math.cos(a)}" font-size="9" text-anchor="middle" font-weight="800" fill="#1e1b4b">${k + 1}</text>`; }).join('')}
          <line data-hand="h" x1="50" y1="50" x2="50" y2="28" stroke="#1e1b4b" stroke-width="5" stroke-linecap="round"/><line data-hand="m" x1="50" y1="50" x2="50" y2="12" stroke="#ec4899" stroke-width="3.2" stroke-linecap="round"/><circle cx="50" cy="50" r="3.5" fill="#1e1b4b"/></svg></div>
          <p class="center small muted">${t('Short hand = hours · Long pink hand = minutes', 'छोटी सुई = घंटे · लंबी गुलाबी सुई = मिनट')}</p>
          <div class="nav"><button class="btn green" data-check>✔ ${t('Check', 'जाँचो')}</button></div>`,
      });
      const svg = q('[data-clock]');
      const setHands = () => {
        const ha = ((hh % 12) + mm / 60) * 30 * Math.PI / 180; const ma = mm * 6 * Math.PI / 180;
        const H = svg.querySelector('[data-hand="h"]'); const M = svg.querySelector('[data-hand="m"]');
        H.setAttribute('x2', 50 + 22 * Math.sin(ha)); H.setAttribute('y2', 50 - 22 * Math.cos(ha)); M.setAttribute('x2', 50 + 38 * Math.sin(ma)); M.setAttribute('y2', 50 - 38 * Math.cos(ma));
      };
      let which = null;
      const angle = (e) => { const b = svg.getBoundingClientRect(); const x = (e.clientX - b.left) / b.width * 100 - 50; const y = (e.clientY - b.top) / b.height * 100 - 50; return { a: (Math.atan2(x, -y) * 180 / Math.PI + 360) % 360, d: Math.hypot(x, y) }; };
      svg.style.touchAction = 'none';
      svg.onpointerdown = (e) => {
        const { a, d } = angle(e); const ha = ((hh % 12) + mm / 60) * 30; const ma = mm * 6;
        const diff = (x, y) => Math.min(Math.abs(x - y), 360 - Math.abs(x - y));
        which = d < 26 ? 'h' : diff(a, ma) <= diff(a, ha) ? 'm' : 'h'; try { svg.setPointerCapture(e.pointerId); } catch { /* synthetic */ } svg.onpointermove(e);
      };
      svg.onpointermove = (e) => { if (!which) { return; } const { a } = angle(e); if (which === 'm') { const nm = Math.round(a / 30) * 5 % 60; if (nm !== mm) { K.sfx.tap(); } mm = nm; } else { hh = Math.round((a - mm / 2) / 30 + 12) % 12 || 12; } setHands(); };
      svg.onpointerup = svg.onpointercancel = () => { which = null; };
      setHands();
      q('[data-check]').onclick = async () => {
        if (hh === h && mm === m) { K.sfx.good(); await K.praise(); await sayT({ en: `Yes, it is ${timeEn}.`, hi: `हाँ, ${timeHi}।` }); if (alive('clk')) { next(tries === 0); } return; }
        tries++; shake(svg); await sayT(mm !== m ? { en: m === 0 ? 'For o\'clock, the long hand points to 12.' : m === 30 ? 'For half past, the long hand points to 6.' : 'Check the long hand.', hi: m === 0 ? 'पूरे घंटे पर लंबी सुई 12 पर होती है।' : m === 30 ? 'साढ़े पर लंबी सुई 6 पर होती है।' : 'लंबी सुई देखो।' } : { en: `Now the short hand: point it at ${h}.`, hi: `अब छोटी सुई ${h} की ओर करो।` });
      };
    });
  };

  // ================================================================ BALANCE SCALE
  const THINGS = [['🐘', 'elephant', 'हाथी', 5000], ['🐄', 'cow', 'गाय', 600], ['🧒', 'child', 'बच्चा', 25], ['🐕', 'dog', 'कुत्ता', 20], ['🍉', 'watermelon', 'तरबूज़', 5], ['🎒', 'school bag', 'बस्ता', 3], ['🍎', 'apple', 'सेब', 0.2], ['🪶', 'feather', 'पंख', 0.001], ['🐜', 'ant', 'चींटी', 0.0001], ['🧱', 'brick', 'ईंट', 3], ['📕', 'book', 'किताब', 0.5], ['🎈', 'balloon', 'गुब्बारा', 0.005]];
  // act.mode: 'compare' (which is heavier) | 'balance' (add kg weights)
  E.scale = (act, back) => {
    const total = act.rounds || 5;
    series(act, back, total, (r, next) => {
      if ((act.mode || 'compare') === 'compare') {
        let [a, b] = shuffle(THINGS).slice(0, 2); while (a[3] === b[3]) { b = pick(THINGS); }
        const heavy = Math.random() < 0.6; const ans = heavy ? (a[3] > b[3] ? a : b) : (a[3] < b[3] ? a : b);
        frame(act, back, {
          id: 'scale', r, total, prompt: heavy ? { en: 'Which is HEAVIER? Tap it.', hi: 'कौन ज़्यादा भारी है? उसे दबाओ।' } : { en: 'Which is LIGHTER? Tap it.', hi: 'कौन ज़्यादा हल्का है? उसे दबाओ।' },
          body: `<div class="balance" data-bal><div class="beam"><div class="pan" data-p="0">${a[0]}</div><div class="pan" data-p="1">${b[0]}</div></div><div class="pivot"></div></div>
            <div class="options two">${[a, b].map((x, k) => `<button class="opt" data-k="${k}">${x[0]}<small>${t(x[1], x[2])}</small></button>`).join('')}</div>`,
        });
        let tries = 0;
        qa('[data-k]').forEach((el) => {
          el.onclick = async () => {
            const x = [a, b][Number(el.dataset.k)];
            const tilt = a[3] > b[3] ? -14 : 14; q('.beam').style.transform = `rotate(${tilt}deg)`;
            if (x === ans) { el.classList.add('right'); K.sfx.good(); await K.praise(); await sayT(heavy ? { en: `The ${ans[1]} is heavier, so its side goes down.`, hi: `${ans[2]} ज़्यादा भारी है, इसलिए उसका पलड़ा नीचे गया।` } : { en: `The ${ans[1]} is lighter, so its side goes up.`, hi: `${ans[2]} हल्का है, इसलिए उसका पलड़ा ऊपर गया।` }); if (alive('scale')) { next(tries === 0); } } else { tries++; el.classList.add('wrong'); K.tryAgain(); }
          };
        });
        return;
      }
      const kg = rand(2, act.max || 15); let put = []; let tries = 0; const thing = pick([['🍉', 'watermelon', 'तरबूज़'], ['🎃', 'pumpkin', 'कद्दू'], ['🥔', 'sack of potatoes', 'आलू का बोरा'], ['🌾', 'rice bag', 'चावल का थैला']]);
      frame(act, back, {
        id: 'scale', r, total, prompt: { en: `The ${thing[1]} weighs ${kg} kg. Add weights to balance the scale.`, hi: `${thing[2]} का वज़न ${kg} किलो है। बाट रखकर तराज़ू बराबर करो।` },
        body: `<div class="balance" data-bal><div class="beam"><div class="pan">${thing[0]}<small>${kg} kg</small></div><div class="pan" data-right></div></div><div class="pivot"></div></div>
          <div class="weights">${[1, 2, 5, 10].map((w) => `<button class="wt" data-w="${w}">${w}<small>kg</small></button>`).join('')}<button class="wt clear" data-clear>↺</button></div>
          <div class="center big-sum">${t('Right side', 'दायाँ पलड़ा')}: <b data-sum>0</b> kg</div>`,
      });
      const upd = async () => {
        const s = put.reduce((x, y) => x + y, 0); q('[data-sum]').textContent = s; q('[data-right]').innerHTML = put.map((w) => `<span class="wtm">${w}</span>`).join('');
        q('.beam').style.transform = `rotate(${s === kg ? 0 : s < kg ? -12 : 12}deg)`;
        if (s === kg) { K.sfx.good(); await K.praise(); await sayT({ en: `Balanced! ${put.join(' + ')} = ${kg} kg.`, hi: `बराबर हो गया! ${put.join(' + ')} = ${kg} किलो।` }); if (alive('scale')) { next(tries === 0); } } else if (s > kg) { tries++; say(t('Too heavy! Take some off.', 'ज़्यादा भारी! कुछ हटाओ।')); }
      };
      qa('[data-w]').forEach((el) => { el.onclick = () => { put.push(Number(el.dataset.w)); K.sfx.pop(); upd(); }; });
      q('[data-clear]').onclick = () => { put = []; K.sfx.tap(); upd(); };
    });
  };

  // ================================================================ FAIR SHARE (division)
  E.share = (act, back) => {
    const total = act.rounds || 4;
    series(act, back, total, (r, next) => {
      const k = rand(2, act.maxPlates || 4); const each = rand(2, Math.max(2, act.maxEach || 4)); const n = k * each; const e = pick(['🍪', '🍬', '🥭', '🍌', '🧁', '🟡']);
      let tries = 0; const plates = Array(k).fill(0);
      frame(act, back, {
        id: 'share', r, total, prompt: { en: `Share ${n} ${e} equally on ${k} plates.`, hi: `${n} ${e} को ${k} प्लेटों में बराबर बाँटो।` },
        body: `<div class="tray">${Array.from({ length: n }, (_, i) => `<button class="piece sw-piece" data-s="${i}">${e}</button>`).join('')}</div>
          <div class="plates">${plates.map((_, i) => `<div class="plate2" data-pl="${i}"><div class="pl-in"></div><span class="pl-n">0</span></div>`).join('')}</div>`,
      });
      K.dnd(qa('.sw-piece'), () => qa('.plate2'), async (el, pl) => {
        el.classList.add('placed'); pl.querySelector('.pl-in').appendChild(el); const i = Number(pl.dataset.pl); plates[i]++; pl.querySelector('.pl-n').textContent = plates[i]; K.sfx.pop();
        el.onclick = () => { el.classList.remove('placed'); q('.tray').appendChild(el); plates[i]--; pl.querySelector('.pl-n').textContent = plates[i]; };
        if (plates.reduce((a, b) => a + b, 0) === n) {
          if (plates.every((p) => p === each)) { K.sfx.good(); await K.praise(); await sayT({ en: `Fair! Each plate gets ${each}. ${n} shared by ${k} is ${each}.`, hi: `बराबर! हर प्लेट में ${each}। ${n} को ${k} में बाँटें तो ${each}।` }); if (alive('share')) { next(tries === 0); } } else { tries++; shake(q('.plates')); sayT({ en: 'Not fair! Some plates have more. Move them so all are the same.', hi: 'बराबर नहीं! किसी में ज़्यादा है। हटाकर सबको बराबर करो।' }); }
        }
      });
    });
  };

  // ================================================================ FRACTIONS (shade the part)
  E.fraction = (act, back) => {
    const total = act.rounds || 4;
    series(act, back, total, (r, next) => {
      const opts = act.parts || [[1, 2], [1, 4], [3, 4], [1, 3]]; const [num, den] = pick(opts); const shape = pick(['roti', 'bar']); const on = new Set(); let tries = 0;
      const name = { '1/2': ['half', 'आधा'], '1/4': ['one quarter', 'एक चौथाई'], '3/4': ['three quarters', 'तीन चौथाई'], '1/3': ['one third', 'एक तिहाई'], '2/3': ['two thirds', 'दो तिहाई'], '2/4': ['two quarters', 'दो चौथाई'] }[`${num}/${den}`] || [`${num} out of ${den}`, `${den} में से ${num}`];
      const segs = shape === 'roti' ? Array.from({ length: den }, (_, k) => { const a0 = (k / den) * 2 * Math.PI - Math.PI / 2; const a1 = ((k + 1) / den) * 2 * Math.PI - Math.PI / 2; const p = (a) => `${50 + 44 * Math.cos(a)},${50 + 44 * Math.sin(a)}`; return `<path data-fp="${k}" d="M50,50 L${p(a0)} A44,44 0 0,1 ${p(a1)} Z"/>`; }).join('') : Array.from({ length: den }, (_, k) => `<rect data-fp="${k}" x="${4 + k * 92 / den}" y="30" width="${92 / den}" height="40" rx="2"/>`).join('');
      frame(act, back, {
        id: 'frac', r, total, prompt: { en: `Colour ${name[0]} of the ${shape === 'roti' ? 'roti' : 'chocolate'}.`, hi: `${shape === 'roti' ? 'रोटी' : 'चॉकलेट'} का ${name[1]} भाग रंगो।` },
        body: `<div class="frac-big">${num}/${den}</div><div class="frac-wrap ${shape}"><svg viewBox="0 0 100 100" data-fr>${segs}</svg></div>
          <div class="nav"><button class="btn green" data-check>✔ ${t('Check', 'जाँचो')}</button></div>`,
      });
      qa('[data-fp]').forEach((el) => { el.onclick = () => { const k = el.dataset.fp; if (on.has(k)) { on.delete(k); el.classList.remove('on'); } else { on.add(k); el.classList.add('on'); } K.sfx.pop(); }; });
      q('[data-check]').onclick = async () => {
        if (on.size === num) { K.sfx.good(); await K.praise(); await sayT({ en: `${num} out of ${den} equal parts. That is ${name[0]}.`, hi: `${den} बराबर हिस्सों में से ${num}। यह ${name[1]} है।` }); if (alive('frac')) { next(tries === 0); } } else { tries++; shake(q('[data-fr]')); sayT({ en: `Colour ${num} of the ${den} equal parts.`, hi: `${den} बराबर हिस्सों में से ${num} रंगो।` }); }
      };
    });
  };

  // ================================================================ PICTOGRAPH (count & build a chart)
  E.pictograph = (act, back) => {
    const total = act.rounds || 2;
    series(act, back, total, (r, next) => {
      const kinds = shuffle(act.kinds || ['🥭', '🍌', '🍎', '🍇']).slice(0, 3); const counts = kinds.map(() => rand(1, 6));
      const scatter = shuffle(kinds.flatMap((k, i) => Array(counts[i]).fill(k))); const mine = kinds.map(() => 0); let tries = 0;
      frame(act, back, {
        id: 'pict', r, total, prompt: { en: 'Count each kind and make the chart. Tap + to add one.', hi: 'हर तरह की चीज़ गिनो और चार्ट बनाओ। एक जोड़ने के लिए + दबाओ।' },
        body: `<div class="scatter">${scatter.map((k) => `<span style="transform:rotate(${rand(-20, 20)}deg)">${k}</span>`).join('')}</div>
          <div class="chart">${kinds.map((k, i) => `<div class="ch-row"><span class="ch-k">${k}</span><div class="ch-bar" data-bar="${i}"></div><button class="mini-btn" data-m="${i}">−</button><button class="mini-btn add" data-p="${i}">＋</button></div>`).join('')}</div>
          <div class="nav"><button class="btn green" data-check>✔ ${t('Check', 'जाँचो')}</button></div>`,
      });
      const draw = () => kinds.forEach((k, i) => { q(`[data-bar="${i}"]`).innerHTML = `<span>${k}</span>`.repeat(mine[i]); });
      qa('[data-p]').forEach((el) => { el.onclick = () => { const i = Number(el.dataset.p); if (mine[i] < 9) { mine[i]++; } K.sfx.pop(); draw(); say(N(mine[i])); }; });
      qa('[data-m]').forEach((el) => { el.onclick = () => { const i = Number(el.dataset.m); if (mine[i]) { mine[i]--; } K.sfx.tap(); draw(); }; });
      q('[data-check]').onclick = async () => {
        if (mine.every((v, i) => v === counts[i])) {
          K.sfx.good(); await K.praise(); const mx = Math.max(...counts); const top = kinds.filter((_, i) => counts[i] === mx);
          q('.nav').innerHTML = `<p class="center">${t('Which has the MOST?', 'कौन सबसे ज़्यादा है?')}</p><div class="options">${kinds.map((k) => `<button class="opt" data-a="${k}">${k}</button>`).join('')}</div>`;
          await say(t('Which one has the most?', 'कौन सबसे ज़्यादा है?'));
          qa('[data-a]').forEach((b) => { b.onclick = async () => { if (top.includes(b.dataset.a)) { b.classList.add('right'); await K.praise(); if (alive('pict')) { next(tries === 0); } } else { tries++; b.classList.add('wrong'); K.tryAgain(); } }; });
        } else { tries++; const i = mine.findIndex((v, j) => v !== counts[j]); shake(q(`[data-bar="${i}"]`)); sayT({ en: 'Count again carefully.', hi: 'फिर से ध्यान से गिनो।' }); }
      };
      draw();
    });
  };

  // ================================================================ NUMBER LINE HOPS
  E.numline = (act, back) => {
    const total = act.rounds || 5; const max = act.max || 20; const step = act.step || 1;
    series(act, back, total, (r, next) => {
      const back2 = act.sub && Math.random() < 0.5; const hop = rand(1, Math.min(6, max / step / 3)) * step;
      const start = back2 ? rand(hop / step, max / step) * step : rand(0, (max - hop) / step) * step; const ans = back2 ? start - hop : start + hop; let tries = 0;
      const ticks = Array.from({ length: max / step + 1 }, (_, k) => k * step);
      frame(act, back, {
        id: 'nl', r, total, prompt: back2 ? { en: `Frog is on ${start}. It hops back ${hop}. Where does it land?`, hi: `मेंढक ${start} पर है। ${hop} पीछे कूदता है। कहाँ पहुँचेगा?` } : { en: `Frog is on ${start}. It hops ${hop} forward. Where does it land?`, hi: `मेंढक ${start} पर है। ${hop} आगे कूदता है। कहाँ पहुँचेगा?` },
        body: `<div class="numline-wrap"><div class="numline" style="--n:${ticks.length}">${ticks.map((v) => `<button class="nl-t ${v === start ? 'start' : ''}" data-v="${v}"><span class="nl-dot"></span><b>${v}</b></button>`).join('')}<div class="frog" data-frog>🐸</div></div></div>
          <div class="center big-sum">${start} ${back2 ? '−' : '+'} ${hop} = <b>?</b></div>`,
      });
      const frog = q('[data-frog]'); const place = (v) => { const el = q(`[data-v="${v}"]`); const wr = q('.numline').getBoundingClientRect(); const b = el.getBoundingClientRect(); frog.style.left = `${b.left - wr.left + b.width / 2}px`; };
      place(start);
      const wrap = q('.numline-wrap'); const st = q(`[data-v="${start}"]`); wrap.scrollLeft = Math.max(0, st.offsetLeft - wrap.clientWidth / 3);
      qa('[data-v]').forEach((el) => {
        el.onclick = async () => {
          const v = Number(el.dataset.v);
          if (v === ans) {
            for (let k = 1; k <= hop / step; k++) { place(back2 ? start - k * step : start + k * step); frog.classList.remove('hop'); void frog.offsetWidth; frog.classList.add('hop'); K.sfx.pop(); say(N(back2 ? start - k * step : start + k * step)); await wait(480); }
            el.classList.add('right'); await K.praise(); await sayT({ en: `${start} ${back2 ? 'minus' : 'plus'} ${hop} is ${ans}.`, hi: `${start} ${back2 ? 'घटा' : 'जोड़'} ${hop} बराबर ${ans}।` }); if (alive('nl')) { next(tries === 0); }
          } else { tries++; shake(el); K.tryAgain(); if (tries >= 2) { sayT({ en: `Count ${hop} hops ${back2 ? 'back' : 'forward'} from ${start}.`, hi: `${start} से ${hop} कदम ${back2 ? 'पीछे' : 'आगे'} गिनो।` }); } }
        };
      });
    });
  };

  // ================================================================ SHOP (pay exact money / find change)
  const ITEMS = [['🍦', 'ice cream', 'आइसक्रीम'], ['🎈', 'balloon', 'गुब्बारा'], ['✏️', 'pencil', 'पेंसिल'], ['🪁', 'kite', 'पतंग'], ['🍫', 'chocolate', 'चॉकलेट'], ['📒', 'notebook', 'कॉपी'], ['⚽', 'ball', 'गेंद'], ['🧃', 'juice', 'जूस'], ['🍌', 'bananas', 'केले'], ['🧸', 'teddy', 'टेडी']];
  E.shop = (act, back) => {
    const total = act.rounds || 4; const max = act.max || 20; const coins = [1, 2, 5, 10, 20, 50, 100].filter((c) => c <= Math.max(10, max));
    series(act, back, total, (r, next) => {
      const it = pick(ITEMS); const price = rand(act.min || 3, max);
      if (act.mode === 'change') {
        const paid = [10, 20, 50, 100].find((v) => v > price) || 100; const ans = paid - price; let tries = 0;
        const set = new Set([ans]); while (set.size < 3) { set.add(Math.max(1, ans + rand(-5, 5))); }
        frame(act, back, {
          id: 'shop', r, total, prompt: { en: `The ${it[1]} costs ₹${price}. You pay ₹${paid}. How much change do you get back?`, hi: `${it[2]} ₹${price} का है। तुमने ₹${paid} दिए। कितने पैसे वापस मिलेंगे?` },
          body: `<div class="shop"><div class="item-big">${it[0]}<span class="tag">₹${price}</span></div><div class="paid"><span class="coin note">₹${paid}</span></div></div>
            <div class="options">${shuffle([...set]).map((v) => `<button class="opt" data-v="${v}">₹${v}</button>`).join('')}</div>`,
        });
        qa('[data-v]').forEach((el) => { el.onclick = async () => { if (Number(el.dataset.v) === ans) { el.classList.add('right'); await K.praise(); await sayT({ en: `${paid} minus ${price} is ${ans}. You get ₹${ans} back.`, hi: `${paid} घटा ${price} बराबर ${ans}। तुम्हें ₹${ans} वापस मिलेंगे।` }); if (alive('shop')) { next(tries === 0); } } else { tries++; el.classList.add('wrong'); K.tryAgain(); } }; });
        return;
      }
      let paid = []; let tries = 0;
      frame(act, back, {
        id: 'shop', r, total, prompt: { en: `Buy the ${it[1]}. It costs ₹${price}. Tap the coins and notes to pay exactly.`, hi: `${it[2]} खरीदो। यह ₹${price} का है। सिक्के और नोट दबाकर ठीक उतने पैसे दो।` },
        body: `<div class="shop"><div class="item-big">${it[0]}<span class="tag">₹${price}</span></div><div class="counter" data-ctr></div><div class="center big-sum">${t('You gave', 'तुमने दिए')}: <b data-sum>₹0</b></div></div>
          <div class="purse">${coins.map((c) => `<button class="coin ${c >= 10 ? 'note' : ''}" data-c="${c}">₹${c}</button>`).join('')}</div>
          <div class="nav"><button class="btn ghost" data-clear>↺</button><button class="btn green" data-pay>✔ ${t('Pay', 'पैसे दो')}</button></div>`,
      });
      const upd = () => { const s = paid.reduce((a, b) => a + b, 0); q('[data-sum]').textContent = `₹${s}`; q('[data-ctr]').innerHTML = paid.map((c, i) => `<button class="coin ${c >= 10 ? 'note' : ''} small" data-rm="${i}">₹${c}</button>`).join(''); qa('[data-rm]').forEach((el) => { el.onclick = () => { paid.splice(Number(el.dataset.rm), 1); K.sfx.tap(); upd(); }; }); return s; };
      qa('[data-c]').forEach((el) => { el.onclick = () => { paid.push(Number(el.dataset.c)); K.sfx.pop(); say(N(upd())); }; });
      q('[data-clear]').onclick = () => { paid = []; upd(); };
      q('[data-pay]').onclick = async () => {
        const s = upd();
        if (s === price) { K.sfx.good(); bounce(q('.item-big')); await K.praise(); await sayT({ en: `₹${price}. Exactly right! Thank you!`, hi: `₹${price}। बिल्कुल ठीक! धन्यवाद!` }); if (alive('shop')) { next(tries === 0); } } else { tries++; shake(q('.counter')); sayT(s < price ? { en: `That is ₹${s}. You need ₹${price - s} more.`, hi: `यह ₹${s} हैं। ₹${price - s} और चाहिए।` } : { en: `That is ₹${s}. Too much! Take some back.`, hi: `यह ₹${s} हैं। ज़्यादा हैं! कुछ वापस लो।` }); }
      };
    });
  };

  // ================================================================ SPOT (tap in a picture scene)
  // act: { scenes:[{ bg?, items:[{e, x, y, s?, name}], asks:[{q, a: index or name}] }] }
  E.spot = (act, back) => {
    const asks = act.scenes.flatMap((S, si) => S.asks.map((a) => ({ ...a, si })));
    const list = shuffle(asks).slice(0, act.count || 5);
    series(act, back, list.length, (r, next) => {
      const A = list[r]; const S = act.scenes[A.si]; let tries = 0;
      frame(act, back, {
        id: 'spot', r, total: list.length, prompt: A.q,
        body: `<div class="scene-box" style="${S.bg ? `background:${S.bg}` : ''}">${S.items.map((it, k) => `<button class="sp" data-sp="${k}" style="left:${it.x}%;top:${it.y}%;font-size:${it.s || 40}px">${it.e}</button>`).join('')}</div>`,
      });
      qa('[data-sp]').forEach((el) => {
        el.onclick = async () => {
          const k = Number(el.dataset.sp); const ok = Array.isArray(A.a) ? A.a.includes(k) : A.a === k;
          if (ok) { el.classList.add('found'); K.sfx.good(); await K.praise(); if (A.say) { await sayT(A.say); } if (alive('spot')) { next(tries === 0); } } else { tries++; shake(el); K.tryAgain(); const nm = S.items[k].name; if (nm) { sayT(nm); } }
        };
      });
    });
  };
})();
