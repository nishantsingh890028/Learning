/* Class 4–5 maths: fresh problems every play, each with a worked explanation (shown after the answer) and a hint (after two
   wrong tries). Level 4 = Class 4, level 5 = Class 5 (chapters pass level: 5 for Class 5). Registered into K.GEN for the
   'gen' engine. */
(() => {
  'use strict';
  const { t, rand, pick, shuffle, say } = K;
  const GEN = K.GEN;
  const T = (en, hi) => ({ en, hi });

  // ---------------------------------------------------------------- helpers
  /** Indian grouping: 1234567 → 12,34,567 */
  const IN = (n) => {
    const neg = n < 0; const s = String(Math.abs(n)); if (s.length <= 3) { return (neg ? '-' : '') + s; }
    const last = s.slice(-3); let rest = s.slice(0, -3); const parts = [];
    while (rest.length > 2) { parts.unshift(rest.slice(-2)); rest = rest.slice(0, -2); }
    if (rest) { parts.unshift(rest); }
    return `${neg ? '-' : ''}${parts.join(',')},${last}`;
  };
  K.IN = IN;
  const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const two = (n) => (n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? `-${ONES[n % 10]}` : ''));
  const three = (n) => [n >= 100 ? `${ONES[Math.floor(n / 100)]} hundred` : '', n % 100 ? two(n % 100) : ''].filter(Boolean).join(' ');
  /** number name in the Indian system (lakh, crore) */
  const words = (n) => {
    if (n === 0) { return 'zero'; }
    const cr = Math.floor(n / 1e7); const lk = Math.floor(n / 1e5) % 100; const th = Math.floor(n / 1000) % 100; const rest = n % 1000;
    return [cr ? `${two(cr)} crore` : '', lk ? `${two(lk)} lakh` : '', th ? `${two(th)} thousand` : '', rest ? three(rest) : ''].filter(Boolean).join(' ');
  };
  K.numWords = words;
  const PLACES = [['ones', 'इकाई', 1], ['tens', 'दहाई', 10], ['hundreds', 'सैकड़ा', 100], ['thousands', 'हज़ार', 1000], ['ten thousands', 'दस हज़ार', 10000], ['lakhs', 'लाख', 100000], ['ten lakhs', 'दस लाख', 1000000]];
  /** n distinct options containing ans, built from candidate list */
  const opts = (ans, cands, fmt = (x) => x, n = 4) => {
    const set = [ans]; for (const c of shuffle(cands)) { if (set.length >= n) { break; } if (!set.some((s) => String(s) === String(c)) && c !== undefined && c !== null && !(typeof c === 'number' && (c < 0 || Number.isNaN(c)))) { set.push(c); } }
    let k = 1; while (set.length < n && typeof ans === 'number') { const c = ans + k * (k % 2 ? 1 : -1) * Math.max(1, Math.round(Math.abs(ans) * 0.1)); if (c >= 0 && !set.includes(c)) { set.push(c); } k++; if (k > 40) { break; } }
    return shuffle(set).map((v) => ({ label: fmt(v), correct: String(v) === String(ans) }));
  };
  const fr = (a, b) => `<span class="frac"><i>${a}</i><i>${b}</i></span>`;
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const rupee = (p) => `₹${(p / 100).toFixed(2)}`;
  const sayQ = (en, hi) => () => say(t(en, hi));
  const R = (o) => ({ textOptions: true, wide: true, ...o, question: `<span class="qt">${o.question}</span>` });

  // ---------------------------------------------------------------- 1. place value
  GEN.placeval = (lv) => {
    const n = lv >= 5 ? rand(100000, 9999999) : rand(10000, 99999);
    const ds = String(n).split('').reverse().map(Number);
    let k = rand(1, ds.length - 1); while (!ds[k]) { k = rand(0, ds.length - 1); }
    const d = ds[k]; const P = PLACES[k]; const ans = d * P[2];
    return R({ question: t(`In <b class="in">${IN(n)}</b>, what is the place value of the digit <b class="in">${d}</b>?`, `<b class="in">${IN(n)}</b> में अंक <b class="in">${d}</b> का स्थानीय मान क्या है?`),
      options: opts(ans, [d, d * P[2] * 10, Math.max(1, d * P[2] / 10), d * 10 ** (k + 2)], IN),
      ask: sayQ(`In ${IN(n)}, what is the place value of ${d}?`, `${IN(n)} में ${d} का स्थानीय मान क्या है?`),
      explain: T(`${d} is in the ${P[0]} place, so its value is ${d} × ${IN(P[2])} = ${IN(ans)}. (Its face value is just ${d}.)`, `${d} ${P[1]} के स्थान पर है, इसलिए इसका मान ${d} × ${IN(P[2])} = ${IN(ans)} है। (इसका अंकित मान सिर्फ़ ${d} है।)`),
      hintOnWrong: T('Count the places from the right: ones, tens, hundreds, thousands, ten thousands, lakhs…', 'दाईं ओर से स्थान गिनो: इकाई, दहाई, सैकड़ा, हज़ार, दस हज़ार, लाख…') });
  };

  // ---------------------------------------------------------------- 2. number names
  GEN.numname = (lv) => {
    const n = lv >= 5 ? rand(100000, 999999) : rand(10000, 99999);
    const s = String(n); const swap = (i, j) => { const a = s.split(''); [a[i], a[j]] = [a[j], a[i]]; return Number(a.join('')); };
    const w = words(n);
    return R({ question: t(`Which number is <b class="in">"${w}"</b>?`, `कौन सी संख्या <b class="in">"${w}"</b> है?`),
      options: opts(n, [swap(0, 1), swap(1, 2), swap(s.length - 2, s.length - 1), n + 10 ** (s.length - 2), n - 10 ** (s.length - 3)], IN),
      ask: () => say(w, { lang: 'en-IN' }),
      explain: T(`${IN(n)} is read as "${w}". Commas help: lakhs, thousands, then hundreds.`, `${IN(n)} को "${w}" पढ़ते हैं। अल्पविराम मदद करते हैं: लाख, हज़ार, फिर सैकड़ा।`) });
  };

  // ---------------------------------------------------------------- 3. greatest / smallest
  GEN.bigcompare = (lv) => {
    const len = lv >= 5 ? 6 : 5; const base = rand(10 ** (len - 1), 10 ** len - 1);
    const nums = new Set([base]); while (nums.size < 4) { const s = String(base).split(''); const i = rand(1, len - 1); s[i] = String(rand(0, 9)); nums.add(Number(s.join(''))); }
    const arr = [...nums]; const big = Math.random() < 0.5; const ans = big ? Math.max(...arr) : Math.min(...arr);
    return R({ question: big ? t('Which is the <b class="in">greatest</b> number?', 'सबसे <b class="in">बड़ी</b> संख्या कौन सी है?') : t('Which is the <b class="in">smallest</b> number?', 'सबसे <b class="in">छोटी</b> संख्या कौन सी है?'),
      options: arr.map((v) => ({ label: IN(v), correct: v === ans })),
      ask: sayQ(big ? 'Which is the greatest number?' : 'Which is the smallest number?', big ? 'सबसे बड़ी संख्या कौन सी है?' : 'सबसे छोटी संख्या कौन सी है?'),
      explain: T('All have the same number of digits, so compare digit by digit from the left. The first place where they differ decides.', 'सबमें अंक बराबर हैं, तो बाईं ओर से एक-एक अंक मिलाओ। जहाँ पहली बार अंक अलग हो, वही तय करता है।') });
  };

  // ---------------------------------------------------------------- 4. Roman numerals
  const ROM = [[100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  const roman = (n) => { let s = ''; for (const [v, r] of ROM) { while (n >= v) { s += r; n -= v; } } return s; };
  GEN.roman = (lv) => {
    const n = rand(4, lv >= 5 ? 100 : 39); const toNum = Math.random() < 0.5;
    const cands = [n + 1, n - 1, n + 10, n - 10, n + 5, n - 4].filter((x) => x > 0);
    return R(toNum ? { question: t(`What is <b class="in">${roman(n)}</b> in numbers?`, `<b class="in">${roman(n)}</b> को संख्या में लिखो।`), options: opts(n, cands),
      ask: sayQ('What is this Roman numeral in numbers?', 'यह रोमन संख्या कितनी है?'),
      explain: T(`I = 1, V = 5, X = 10, L = 50, C = 100. A smaller letter before a bigger one is taken away (IV = 4, IX = 9, XL = 40). ${roman(n)} = ${n}.`, `I = 1, V = 5, X = 10, L = 50, C = 100। छोटा अक्षर बड़े से पहले हो तो घटाते हैं (IV = 4, IX = 9, XL = 40)। ${roman(n)} = ${n}।`) }
      : { question: t(`Write <b class="in">${n}</b> in Roman numerals.`, `<b class="in">${n}</b> को रोमन में लिखो।`), options: opts(roman(n), cands.map(roman)),
        ask: sayQ(`Write ${n} in Roman numerals.`, `${n} को रोमन संख्या में लिखो।`),
        explain: T(`Break ${n} into tens and ones: ${roman(n)}. Never write the same letter more than three times in a row.`, `${n} को दहाई और इकाई में तोड़ो: ${roman(n)}। एक अक्षर लगातार तीन बार से ज़्यादा नहीं लिखते।`) });
  };

  // ---------------------------------------------------------------- 5. multiplication with partial products
  GEN.mulbig = (lv) => {
    const a = lv >= 5 ? rand(102, 499) : rand(12, 98); const b = lv >= 5 ? rand(12, 49) : (Math.random() < 0.5 ? rand(3, 9) : rand(11, 25));
    const ans = a * b; const bt = Math.floor(b / 10) * 10; const bo = b % 10;
    const how = b < 10 ? `${a} × ${b}: ${Math.floor(a / 10) * 10} × ${b} = ${Math.floor(a / 10) * 10 * b}, ${a % 10} × ${b} = ${(a % 10) * b}; ${IN(Math.floor(a / 10) * 10 * b)} + ${(a % 10) * b} = ${IN(ans)}`
      : `${a} × ${b} = ${a} × ${bt} + ${a} × ${bo} = ${IN(a * bt)} + ${IN(a * bo)} = ${IN(ans)}`;
    return R({ question: `${a} × ${b} = ?`, options: opts(ans, [ans + 10, ans - 10, ans + b, ans - a, a * (b + 1), ans + 100], IN),
      ask: sayQ(`${a} times ${b}?`, `${a} गुणा ${b} कितना?`),
      explain: T(`Split the smaller number: ${how}.`, `छोटी संख्या को तोड़ो: ${how}।`),
      hintOnWrong: T(`Multiply by the tens first, then by the ones, and add the two answers.`, 'पहले दहाई से गुणा करो, फिर इकाई से, फिर दोनों उत्तर जोड़ो।') });
  };

  // ---------------------------------------------------------------- 6. division with remainder
  GEN.divrem = (lv) => {
    const d = lv >= 5 ? pick([rand(3, 9), rand(11, 25)]) : rand(2, 9); const qt = lv >= 5 ? rand(21, 320) : rand(11, 99); const r = rand(0, d - 1); const n = d * qt + r;
    const lab = (q2, r2) => (r2 ? t(`${q2} remainder ${r2}`, `${q2} शेष ${r2}`) : `${q2}`);
    const ans = lab(qt, r);
    const c = [lab(qt + 1, r), lab(qt - 1, r), lab(qt, (r + 1) % d), lab(qt + 10, r)];
    return R({ question: `${IN(n)} ÷ ${d} = ?`, options: opts(ans, c),
      ask: sayQ(`${n} divided by ${d}?`, `${n} को ${d} से भाग दो।`),
      explain: T(`${d} × ${qt} = ${IN(d * qt)}, and ${IN(n)} − ${IN(d * qt)} = ${r}. Check: quotient × divisor + remainder = ${qt} × ${d} + ${r} = ${IN(n)} ✔`, `${d} × ${qt} = ${IN(d * qt)}, और ${IN(n)} − ${IN(d * qt)} = ${r}। जाँच: भागफल × भाजक + शेष = ${qt} × ${d} + ${r} = ${IN(n)} ✔`),
      hintOnWrong: T('The remainder must always be smaller than the divisor.', 'शेषफल हमेशा भाजक से छोटा होता है।') });
  };

  // ---------------------------------------------------------------- 7. factors, multiples, primes, HCF, LCM
  const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  GEN.factors = (lv) => {
    const kinds = lv >= 5 ? ['factor', 'multiple', 'prime', 'hcf', 'lcm'] : ['factor', 'multiple', 'common'];
    const k = pick(kinds);
    if (k === 'factor') {
      const n = pick([12, 18, 20, 24, 28, 30, 32, 36, 40, 42, 45, 48, 54, 56, 60, 63, 72]); const fs = []; for (let i = 2; i < n; i++) { if (n % i === 0) { fs.push(i); } }
      const ans = pick(fs); const non = []; for (let i = 2; i < n; i++) { if (n % i) { non.push(i); } }
      return R({ question: t(`Which is a <b class="in">factor</b> of ${n}?`, `${n} का <b class="in">गुणनखंड</b> कौन सा है?`), options: opts(ans, non),
        ask: sayQ(`Which is a factor of ${n}?`, `${n} का गुणनखंड कौन सा है?`),
        explain: T(`A factor divides a number exactly. ${n} ÷ ${ans} = ${n / ans}, no remainder. Factors of ${n}: 1, ${fs.join(', ')}, ${n}.`, `गुणनखंड संख्या को पूरा-पूरा बाँटता है। ${n} ÷ ${ans} = ${n / ans}, कोई शेष नहीं। ${n} के गुणनखंड: 1, ${fs.join(', ')}, ${n}।`) });
    }
    if (k === 'multiple' || k === 'common') {
      const a = rand(3, 9); const b = k === 'common' ? pick([2, 3, 4, 6].filter((x) => x !== a)) : 0;
      const L = k === 'common' ? lcm(a, b) * rand(1, 3) : a * rand(3, 12);
      const cands = []; for (let i = L - 9; i <= L + 9; i++) { if (i > 0 && (i % a || (b && i % b))) { cands.push(i); } }
      return R({ question: k === 'common' ? t(`Which is a <b class="in">common multiple</b> of ${a} and ${b}?`, `${a} और ${b} का <b class="in">सार्व गुणज</b> कौन सा है?`) : t(`Which is a <b class="in">multiple</b> of ${a}?`, `${a} का <b class="in">गुणज</b> कौन सा है?`),
        options: opts(L, cands), ask: sayQ(k === 'common' ? `Which is a common multiple of ${a} and ${b}?` : `Which is a multiple of ${a}?`, k === 'common' ? `${a} और ${b} का सार्व गुणज कौन सा है?` : `${a} का गुणज कौन सा है?`),
        explain: T(`Multiples come in the table: ${L} = ${a} × ${L / a}${b ? ` = ${b} × ${L / b}` : ''}.`, `गुणज पहाड़े में आते हैं: ${L} = ${a} × ${L / a}${b ? ` = ${b} × ${L / b}` : ''}।`) });
    }
    if (k === 'prime') {
      const p = pick(PRIMES.filter((x) => x > 10)); const comp = [21, 25, 27, 33, 35, 39, 49, 51, 55, 57, 63, 65, 69, 77, 81, 87, 91, 93, 95];
      return R({ question: t('Which is a <b class="in">prime</b> number?', '<b class="in">अभाज्य</b> संख्या कौन सी है?'), options: opts(p, comp),
        ask: sayQ('Which is a prime number?', 'अभाज्य संख्या कौन सी है?'),
        explain: T(`A prime number has exactly two factors: 1 and itself. ${p} cannot be divided exactly by any other number. (51 = 3 × 17 and 91 = 7 × 13 are tricky non-primes!)`, `अभाज्य संख्या के केवल दो गुणनखंड होते हैं: 1 और वह खुद। ${p} किसी और से पूरा नहीं बँटता। (51 = 3 × 17 और 91 = 7 × 13 भाज्य हैं!)`) });
    }
    const g = pick([2, 3, 4, 5, 6, 8]); let x = rand(2, 7); let y = rand(2, 7); while (gcd(x, y) !== 1 || x === y) { y = rand(2, 9); x = rand(2, 7); }
    const a = g * x; const b = g * y;
    if (k === 'hcf') {
      return R({ question: t(`HCF of ${a} and ${b}?`, `${a} और ${b} का म.स. (HCF)?`), options: opts(g, [1, g * 2, x, y, g + 1].filter((v) => a % v || b % v || v < g)),
        ask: sayQ(`What is the highest common factor of ${a} and ${b}?`, `${a} और ${b} का महत्तम समापवर्तक क्या है?`),
        explain: T(`HCF is the biggest number that divides both. ${a} = ${g} × ${x}, ${b} = ${g} × ${y}, so HCF = ${g}.`, `म.स. वह सबसे बड़ी संख्या है जो दोनों को बाँटे। ${a} = ${g} × ${x}, ${b} = ${g} × ${y}, तो म.स. = ${g}।`) });
    }
    return R({ question: t(`LCM of ${a} and ${b}?`, `${a} और ${b} का ल.स. (LCM)?`), options: opts(lcm(a, b), [a * b, lcm(a, b) * 2, a + b, lcm(a, b) / 2].filter((v) => v !== lcm(a, b))),
      ask: sayQ(`What is the lowest common multiple of ${a} and ${b}?`, `${a} और ${b} का लघुत्तम समापवर्त्य क्या है?`),
      explain: T(`LCM is the smallest number in both tables. ${lcm(a, b)} = ${a} × ${lcm(a, b) / a} = ${b} × ${lcm(a, b) / b}. Tip: HCF × LCM = ${a} × ${b}.`, `ल.स. दोनों पहाड़ों में आने वाली सबसे छोटी संख्या है। ${lcm(a, b)} = ${a} × ${lcm(a, b) / a} = ${b} × ${lcm(a, b) / b}। सूत्र: म.स. × ल.स. = ${a} × ${b}।`) });
  };

  // ---------------------------------------------------------------- 8. fractions (with a picture)
  const bar = (n, k, col = '#8b5cf6') => `<svg class="frbar" viewBox="0 0 ${n * 40 + 4} 48">${Array.from({ length: n }, (_, i) => `<rect x="${2 + i * 40}" y="4" width="40" height="40" fill="${i < k ? col : '#fff'}" stroke="#3b2e6b" stroke-width="2"/>`).join('')}</svg>`;
  GEN.fraction = (lv) => {
    const kinds = lv >= 5 ? ['equiv', 'addlike', 'subtract', 'ofnum', 'compareun'] : ['shaded', 'comparelike', 'equiv', 'ofnum'];
    const k = pick(kinds);
    if (k === 'shaded') {
      const n = rand(3, 10); const s = rand(1, n - 1);
      return R({ question: t('What fraction is coloured?', 'कितना भाग रंगा है?'), stage: bar(n, s), options: opts(`${s}/${n}`, [`${n - s}/${n}`, `${n}/${s}`, `${s}/${n + 1}`, `${s + 1}/${n}`], (v) => fr(...v.split('/'))),
        ask: sayQ('What fraction of the strip is coloured?', 'पट्टी का कितना भाग रंगा है?'),
        explain: T(`${s} out of ${n} equal parts are coloured, so the fraction is ${s}/${n}. The bottom number (denominator) tells how many equal parts in all.`, `${n} बराबर भागों में से ${s} रंगे हैं, तो भिन्न ${s}/${n} है। नीचे की संख्या (हर) बताती है कुल कितने बराबर भाग हैं।`) });
    }
    if (k === 'comparelike') {
      const n = rand(5, 12); let a = rand(1, n - 1); let b = rand(1, n - 1); if (a === b) { b = a === 1 ? 2 : a - 1; }
      return R({ question: t('Which fraction is bigger?', 'कौन सी भिन्न बड़ी है?'), stage: `${bar(n, a)}<br>${bar(n, b, '#f97316')}`, options: [{ label: fr(a, n), correct: a > b }, { label: fr(b, n), correct: b > a }],
        ask: sayQ('Which fraction is bigger?', 'कौन सी भिन्न बड़ी है?'),
        explain: T(`Same denominator (${n} parts), so the one with more parts coloured is bigger: ${Math.max(a, b)}/${n}.`, `हर एक जैसा (${n} भाग), तो जिसके ज़्यादा भाग रंगे हैं वही बड़ी: ${Math.max(a, b)}/${n}।`) });
    }
    if (k === 'compareun') {
      const a = rand(1, 3); const b = pick([2, 3, 4, 5]); const c = rand(1, 3); const d = pick([6, 8, 10, 12]);
      const v1 = a / b; const v2 = c / d; if (a >= b || c >= d || v1 === v2) { return GEN.fraction(lv); }
      return R({ question: t('Which fraction is bigger?', 'कौन सी भिन्न बड़ी है?'), options: [{ label: fr(a, b), correct: v1 > v2 }, { label: fr(c, d), correct: v2 > v1 }],
        ask: sayQ('Which fraction is bigger?', 'कौन सी भिन्न बड़ी है?'),
        explain: T(`Make the denominators the same: ${a}/${b} = ${a * lcm(b, d) / b}/${lcm(b, d)} and ${c}/${d} = ${c * lcm(b, d) / d}/${lcm(b, d)}. Now compare the tops.`, `हर एक जैसा बनाओ: ${a}/${b} = ${a * lcm(b, d) / b}/${lcm(b, d)} और ${c}/${d} = ${c * lcm(b, d) / d}/${lcm(b, d)}। अब ऊपर की संख्याएँ मिलाओ।`) });
    }
    if (k === 'equiv') {
      const b = rand(2, 6); const a = rand(1, b - 1); const m = rand(2, 5);
      return R({ question: t(`${fr(a, b)} = ${fr('?', b * m)}`, `${fr(a, b)} = ${fr('?', b * m)}`), options: opts(a * m, [a + m, a * m + 1, a * m - 1, b * m - a, a]),
        ask: sayQ(`${a} by ${b} equals how many by ${b * m}?`, `${a} बटा ${b} बराबर कितने बटा ${b * m}?`),
        explain: T(`${b} × ${m} = ${b * m}, so multiply the top by ${m} too: ${a} × ${m} = ${a * m}. Equivalent fractions show the same amount.`, `${b} × ${m} = ${b * m}, तो ऊपर वाले को भी ${m} से गुणा करो: ${a} × ${m} = ${a * m}। तुल्य भिन्नें बराबर मात्रा दिखाती हैं।`) });
    }
    if (k === 'addlike' || k === 'subtract') {
      const n = rand(5, 12); let a = rand(1, n - 2); let b = rand(1, n - a - 1); if (k === 'subtract' && b > a) { [a, b] = [b, a]; }
      const ans = k === 'addlike' ? a + b : a - b; const sym = k === 'addlike' ? '+' : '−';
      return R({ question: `${fr(a, n)} ${sym} ${fr(b, n)} = ?`, options: opts(`${ans}/${n}`, [`${ans}/${n * 2}`, `${ans + 1}/${n}`, `${Math.abs(ans - 1)}/${n}`, `${a * b}/${n}`], (v) => fr(...v.split('/'))),
        ask: sayQ(`${a} by ${n} ${k === 'addlike' ? 'plus' : 'minus'} ${b} by ${n}?`, `${a} बटा ${n} ${k === 'addlike' ? 'जोड़' : 'घटा'} ${b} बटा ${n}?`),
        explain: T(`Same denominator: ${k === 'addlike' ? 'add' : 'subtract'} only the tops. ${a} ${sym} ${b} = ${ans}, so the answer is ${ans}/${n}. The denominator stays ${n}.`, `हर एक जैसा: सिर्फ़ ऊपर की संख्याएँ ${k === 'addlike' ? 'जोड़ो' : 'घटाओ'}। ${a} ${sym} ${b} = ${ans}, तो उत्तर ${ans}/${n}। हर ${n} ही रहता है।`) });
    }
    const b = pick([2, 3, 4, 5, 10]); const a = rand(1, b - 1); const N = b * rand(2, 12); const ans = (N / b) * a;
    return R({ question: t(`${fr(a, b)} of ${N} = ?`, `${N} का ${fr(a, b)} = ?`), options: opts(ans, [N / b, N - ans, ans + a, N * a]),
      ask: sayQ(`What is ${a} by ${b} of ${N}?`, `${N} का ${a} बटा ${b} कितना?`),
      explain: T(`Divide into ${b} equal groups: ${N} ÷ ${b} = ${N / b}. Take ${a} group${a > 1 ? 's' : ''}: ${N / b} × ${a} = ${ans}.`, `${b} बराबर समूह बनाओ: ${N} ÷ ${b} = ${N / b}। ${a} समूह लो: ${N / b} × ${a} = ${ans}।`) });
  };

  // ---------------------------------------------------------------- 9. money (₹ and paise)
  GEN.money = () => {
    const k = pick(['add', 'change', 'total']);
    if (k === 'add') {
      const a = rand(10, 90) * 100 + pick([0, 25, 50, 75]); const b = rand(5, 60) * 100 + pick([0, 25, 50, 75]);
      return R({ question: `${rupee(a)} + ${rupee(b)} = ?`, options: opts(a + b, [a + b + 100, a + b - 100, a + b + 50, a + b - 25], rupee),
        ask: sayQ(`${rupee(a)} plus ${rupee(b)}?`, `${rupee(a)} और ${rupee(b)} जोड़ो।`),
        explain: T(`Line up the decimal points. Add paise first: 100 paise make ₹1, carry it to the rupees. Answer ${rupee(a + b)}.`, `दशमलव बिंदु एक सीध में रखो। पहले पैसे जोड़ो: 100 पैसे = ₹1, उसे रुपयों में हासिल ले जाओ। उत्तर ${rupee(a + b)}।`) });
    }
    if (k === 'change') {
      const note = pick([10000, 20000, 50000]); const cost = rand(15, note / 100 - 5) * 100 + pick([0, 50, 25]);
      return R({ question: t(`You buy a book for ${rupee(cost)} and pay ₹${note / 100}. How much change do you get?`, `तुमने ${rupee(cost)} की किताब ली और ₹${note / 100} दिए। कितने पैसे वापस मिलेंगे?`),
        options: opts(note - cost, [note - cost + 100, note - cost - 50, note - cost + 50, cost], rupee),
        ask: sayQ(`You pay ${note / 100} rupees for a book of ${rupee(cost)}. What change do you get?`, `${rupee(cost)} की किताब के लिए ${note / 100} रुपये दिए। कितने वापस मिलेंगे?`),
        explain: T(`Change = money given − cost = ₹${note / 100}.00 − ${rupee(cost)} = ${rupee(note - cost)}. Always count your change!`, `वापसी = दिए पैसे − कीमत = ₹${note / 100}.00 − ${rupee(cost)} = ${rupee(note - cost)}। वापसी हमेशा गिनो!`) });
    }
    const p = rand(12, 48) * 100 + pick([0, 50]); const n = rand(3, 8);
    return R({ question: t(`One notebook costs ${rupee(p)}. What do ${n} notebooks cost?`, `एक कॉपी ${rupee(p)} की है। ${n} कॉपियाँ कितने की?`), options: opts(p * n, [p * (n + 1), p * (n - 1), p * n + 100, p + n * 100], rupee),
      ask: sayQ(`One notebook costs ${rupee(p)}. What do ${n} cost?`, `एक कॉपी ${rupee(p)} की है। ${n} कितने की?`),
      explain: T(`Multiply: ${rupee(p)} × ${n} = ${rupee(p * n)}.`, `गुणा करो: ${rupee(p)} × ${n} = ${rupee(p * n)}।`) });
  };

  // ---------------------------------------------------------------- 10. decimals
  GEN.decimal = () => {
    const k = pick(['compare', 'add', 'fromfrac', 'place']);
    if (k === 'compare') {
      const a = rand(1, 9) / 10; const b = Number((a - rand(1, 9) / 100 + (Math.random() < 0.5 ? 0.1 : 0)).toFixed(2)); if (a === b || b <= 0) { return GEN.decimal(); }
      return R({ question: t('Which is greater?', 'कौन बड़ा है?'), options: [{ label: String(a), correct: a > b }, { label: String(b), correct: b > a }],
        ask: sayQ(`Which is greater, ${a} or ${b}?`, `${a} या ${b}, कौन बड़ा है?`),
        explain: T(`Write both with two places: ${a.toFixed(2)} and ${b.toFixed(2)}. Now compare tenths, then hundredths. More digits does not mean bigger!`, `दोनों को दो दशमलव स्थान तक लिखो: ${a.toFixed(2)} और ${b.toFixed(2)}। पहले दशांश, फिर शतांश मिलाओ। ज़्यादा अंक का मतलब बड़ा नहीं!`) });
    }
    if (k === 'add') {
      const a = rand(11, 99) / 10; const b = rand(11, 299) / 100; const s = Number((a + b).toFixed(2));
      return R({ question: `${a} + ${b} = ?`, options: opts(s, [Number((s + 0.1).toFixed(2)), Number((s - 0.01).toFixed(2)), Number((a * 10 + b).toFixed(2)), Number((s + 1).toFixed(2))]),
        ask: sayQ(`${a} plus ${b}?`, `${a} जोड़ ${b}?`),
        explain: T(`Line up the decimal points: ${a.toFixed(2)} + ${b.toFixed(2)} = ${s.toFixed(2)}.`, `दशमलव बिंदु एक सीध में: ${a.toFixed(2)} + ${b.toFixed(2)} = ${s.toFixed(2)}।`) });
    }
    if (k === 'fromfrac') {
      const big = Math.random() < 0.5; const a = big ? rand(1, 99) : rand(1, 9); const d = big ? 100 : 10; const v = a / d;
      return R({ question: t(`Write ${fr(a, d)} as a decimal.`, `${fr(a, d)} को दशमलव में लिखो।`), options: opts(String(v), [String(a), String(a / (d === 10 ? 100 : 10)), String(a / 1000)].filter((x) => x !== String(v))),
        ask: sayQ(`Write ${a} by ${d} as a decimal.`, `${a} बटा ${d} को दशमलव में लिखो।`),
        explain: T(`Tenths have one place after the point, hundredths have two: ${a}/${d} = ${v}.`, `दशांश में बिंदु के बाद एक स्थान, शतांश में दो: ${a}/${d} = ${v}।`) });
    }
    const n = (rand(100, 999) / 100).toFixed(2); const ds = n.replace('.', '').split(''); const i = rand(0, 2);
    const names = [['ones', 'इकाई'], ['tenths', 'दशांश'], ['hundredths', 'शतांश']];
    return R({ question: t(`In <b class="in">${n}</b>, the digit <b class="in">${ds[i]}</b> is in which place?`, `<b class="in">${n}</b> में अंक <b class="in">${ds[i]}</b> किस स्थान पर है?`), options: names.map((x, k2) => ({ label: t(x[0], x[1]), correct: k2 === i })).concat([{ label: t('tens', 'दहाई'), correct: false }]),
      ask: sayQ(`In ${n}, which place is the digit ${ds[i]} in?`, `${n} में ${ds[i]} किस स्थान पर है?`),
      explain: T('After the decimal point: first place = tenths, second place = hundredths.', 'दशमलव बिंदु के बाद पहला स्थान दशांश, दूसरा शतांश।') });
  };

  // ---------------------------------------------------------------- 11. measurement conversions
  GEN.measure = (lv) => {
    const list = [
      () => { const a = rand(1, 9); const b = rand(1, 999); return [t(`${a} km ${b} m = ? m`, `${a} किमी ${b} मी = ? मी`), a * 1000 + b, T('1 km = 1000 m', '1 किमी = 1000 मी'), (v) => `${IN(v)} m`]; },
      () => { const a = rand(1, 9); const b = rand(1, 99); return [t(`${a} m ${b} cm = ? cm`, `${a} मी ${b} सेमी = ? सेमी`), a * 100 + b, T('1 m = 100 cm', '1 मी = 100 सेमी'), (v) => `${v} cm`]; },
      () => { const g = rand(2, 9) * 1000 + pick([0, 250, 500, 750]); return [t(`${IN(g)} g = ? kg`, `${IN(g)} ग्राम = ? किग्रा`), g / 1000, T('1 kg = 1000 g', '1 किग्रा = 1000 ग्राम'), (v) => `${v} kg`]; },
      () => { const a = rand(1, 5); const b = rand(1, 9) * 100; return [t(`${a} L ${b} mL = ? mL`, `${a} ली ${b} मिली = ? मिली`), a * 1000 + b, T('1 L = 1000 mL', '1 लीटर = 1000 मिली'), (v) => `${IN(v)} mL`]; },
      () => { const h = rand(2, 5); return [t(`${h} hours = ? minutes`, `${h} घंटे = ? मिनट`), h * 60, T('1 hour = 60 minutes', '1 घंटा = 60 मिनट'), (v) => `${v} min`]; },
      () => { const d = rand(2, 9); return [t(`${d} weeks = ? days`, `${d} सप्ताह = ? दिन`), d * 7, T('1 week = 7 days', '1 सप्ताह = 7 दिन'), (v) => `${v}`]; },
    ];
    if (lv >= 5) { list.push(() => { const c = rand(2, 9) * 10; return [t(`${c} mm = ? cm`, `${c} मिमी = ? सेमी`), c / 10, T('10 mm = 1 cm', '10 मिमी = 1 सेमी'), (v) => `${v} cm`]; }); }
    const [qq, ans, rule, fmt] = pick(list)();
    const c = typeof ans === 'number' && ans % 1 ? [ans * 10, ans / 10, ans + 1, ans + 0.5] : [ans * 10, Math.round(ans / 10), ans + 100, ans - 1, ans + 10];
    return R({ question: qq, options: opts(ans, c, fmt), ask: () => say(qq.replace(/<[^>]+>/g, '')), explain: T(`Remember: ${rule.en}.`, `याद रखो: ${rule.hi}।`) });
  };

  // ---------------------------------------------------------------- 12. perimeter and area (drawn to scale)
  const rect = (w, h, unit) => { const s = 150 / Math.max(w, h); return `<svg class="shape-svg" viewBox="0 0 ${w * s + 70} ${h * s + 50}"><rect x="35" y="15" width="${w * s}" height="${h * s}" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
    ${Array.from({ length: w - 1 }, (_, i) => `<line x1="${35 + (i + 1) * s}" y1="15" x2="${35 + (i + 1) * s}" y2="${15 + h * s}" stroke="#93c5fd" stroke-width="1"/>`).join('')}${Array.from({ length: h - 1 }, (_, i) => `<line x1="35" y1="${15 + (i + 1) * s}" x2="${35 + w * s}" y2="${15 + (i + 1) * s}" stroke="#93c5fd" stroke-width="1"/>`).join('')}
    <text x="${35 + w * s / 2}" y="${h * s + 42}" text-anchor="middle" font-size="18" font-weight="800">${w} ${unit}</text><text x="20" y="${15 + h * s / 2}" text-anchor="middle" font-size="18" font-weight="800" transform="rotate(-90 20 ${15 + h * s / 2})">${h} ${unit}</text></svg>`; };
  GEN.perimarea = (lv) => {
    const w = rand(3, 12); const h = Math.random() < 0.3 ? w : rand(2, 9); const area = lv >= 5 && Math.random() < 0.6; const unit = 'cm';
    const ans = area ? w * h : 2 * (w + h);
    return R({ question: area ? t('What is the <b class="in">area</b> of this shape?', 'इस आकार का <b class="in">क्षेत्रफल</b> कितना है?') : t('What is the <b class="in">perimeter</b> of this shape?', 'इस आकार का <b class="in">परिमाप</b> कितना है?'), stage: rect(w, h, unit),
      options: opts(ans, area ? [2 * (w + h), w + h, w * h + w, (w - 1) * h] : [w * h, w + h, 2 * w + h, 4 * w], (v) => `${v} ${area ? 'sq cm' : 'cm'}`),
      ask: sayQ(area ? 'What is the area?' : 'What is the perimeter?', area ? 'क्षेत्रफल कितना है?' : 'परिमाप कितना है?'),
      explain: area ? T(`Area = length × breadth = ${w} × ${h} = ${ans} square cm. Count the small squares inside – there are ${ans}!`, `क्षेत्रफल = लंबाई × चौड़ाई = ${w} × ${h} = ${ans} वर्ग सेमी। अंदर के छोटे वर्ग गिनो – ${ans} हैं!`)
        : T(`Perimeter is the distance all around: ${w} + ${h} + ${w} + ${h} = 2 × (${w} + ${h}) = ${ans} cm.`, `परिमाप चारों ओर की दूरी है: ${w} + ${h} + ${w} + ${h} = 2 × (${w} + ${h}) = ${ans} सेमी।`) });
  };

  // ---------------------------------------------------------------- 13. angles
  const angleSvg = (deg) => { const r = 90; const x = 30 + r * Math.cos(-deg * Math.PI / 180); const y = 120 + r * Math.sin(-deg * Math.PI / 180); const big = deg > 180 ? 1 : 0;
    const ax = 30 + 30 * Math.cos(-deg * Math.PI / 180); const ay = 120 + 30 * Math.sin(-deg * Math.PI / 180);
    return `<svg class="shape-svg" viewBox="0 0 ${deg > 90 ? 230 : 160} 140"><g transform="translate(${deg > 90 ? 80 : 0},0)">${deg === 90 ? '<rect x="30" y="102" width="18" height="18" fill="none" stroke="#e11d48" stroke-width="2"/>' : `<path d="M60 120 A30 30 0 ${big} 0 ${ax} ${ay}" fill="none" stroke="#e11d48" stroke-width="3"/>`}<line x1="30" y1="120" x2="125" y2="120" stroke="#1e1b4b" stroke-width="5" stroke-linecap="round"/><line x1="30" y1="120" x2="${x}" y2="${y}" stroke="#1e1b4b" stroke-width="5" stroke-linecap="round"/><circle cx="30" cy="120" r="5" fill="#e11d48"/></g></svg>`; };
  GEN.angle = (lv) => {
    const deg = pick([25, 40, 55, 70, 90, 90, 110, 130, 150, 180]);
    const kind = deg < 90 ? 0 : deg === 90 ? 1 : deg < 180 ? 2 : 3; const names = [['acute', 'न्यून'], ['right', 'समकोण'], ['obtuse', 'अधिक'], ['straight', 'सरल']];
    if (lv >= 5 && Math.random() < 0.5 && deg !== 180) {
      const near = [30, 60, 90, 120, 150]; const ans = near.reduce((a, b) => (Math.abs(b - deg) < Math.abs(a - deg) ? b : a));
      return R({ question: t('About how many degrees is this angle?', 'यह कोण लगभग कितने अंश का है?'), stage: angleSvg(deg), options: opts(ans, near.filter((v) => v !== ans), (v) => `${v}°`),
        ask: sayQ('About how many degrees is this angle?', 'यह कोण लगभग कितने अंश का है?'),
        explain: T('A right angle (the corner of a book) is 90°. Compare: smaller than a book corner is less than 90°, wider is more.', 'समकोण (किताब का कोना) 90° होता है। तुलना करो: किताब के कोने से छोटा = 90° से कम, ज़्यादा खुला = 90° से ज़्यादा।') });
    }
    return R({ question: t('What kind of angle is this?', 'यह किस प्रकार का कोण है?'), stage: angleSvg(deg), options: names.map((n, i) => ({ label: t(`${n[0]} angle`, `${n[1]} कोण`), correct: i === kind })),
      ask: sayQ('What kind of angle is this?', 'यह किस प्रकार का कोण है?'),
      explain: T('Acute: less than a right angle. Right: exactly 90°, like a book corner. Obtuse: between 90° and 180°. Straight: a straight line, 180°.', 'न्यून: समकोण से छोटा। समकोण: ठीक 90°, किताब के कोने जैसा। अधिक कोण: 90° और 180° के बीच। सरल कोण: सीधी रेखा, 180°।') });
  };

  // ---------------------------------------------------------------- 14. time (24-hour clock, durations)
  const hm = (h, m) => `${h}:${String(m).padStart(2, '0')}`;
  GEN.time24 = () => {
    const k = pick(['to24', 'from24', 'duration']);
    if (k === 'to24') {
      const h = rand(1, 11); const m = pick([0, 15, 30, 45, 10, 50]); const pm = Math.random() < 0.7; const ans = hm(pm ? h + 12 : h, m).padStart(5, '0');
      return R({ question: t(`Write <b class="in">${hm(h, m)} ${pm ? 'p.m.' : 'a.m.'}</b> in 24-hour time.`, `<b class="in">${hm(h, m)} ${pm ? 'p.m.' : 'a.m.'}</b> को 24 घंटे वाले समय में लिखो।`), options: opts(ans, [hm(h, m).padStart(5, '0'), hm(h + 10, m), hm(pm ? h + 12 : h, (m + 30) % 60).padStart(5, '0'), hm(h + 2, m).padStart(5, '0')]),
        ask: sayQ(`Write ${h} ${m || ''} ${pm ? 'p m' : 'a m'} in 24-hour time.`, `${h} बजकर ${m} मिनट ${pm ? 'दोपहर/शाम' : 'सुबह'} को 24 घंटे वाले समय में लिखो।`),
        explain: T(pm ? `For p.m. add 12 to the hour: ${h} + 12 = ${h + 12}. So it is ${ans}.` : `a.m. times stay the same: ${ans}.`, pm ? `p.m. के लिए घंटे में 12 जोड़ो: ${h} + 12 = ${h + 12}। तो ${ans}।` : `a.m. का समय वैसा ही रहता है: ${ans}।`) });
    }
    if (k === 'from24') {
      const H = rand(13, 23); const m = pick([0, 20, 30, 45]);
      return R({ question: t(`<b class="in">${hm(H, m)}</b> is what time on a normal clock?`, `<b class="in">${hm(H, m)}</b> साधारण घड़ी में कितने बजे?`), options: opts(`${hm(H - 12, m)} p.m.`, [`${hm(H - 12, m)} a.m.`, `${hm(H - 10, m)} p.m.`, `${hm(H - 2, m)} p.m.`]),
        ask: sayQ(`${H} ${m || 'hundred'} hours is what time?`, `${H} बजकर ${m} मिनट साधारण घड़ी में कितने बजे?`),
        explain: T(`Subtract 12 from hours after 12: ${H} − 12 = ${H - 12}, and it is p.m.`, `12 के बाद के घंटों में से 12 घटाओ: ${H} − 12 = ${H - 12}, और यह p.m. है।`) });
    }
    const sh = rand(8, 16); const sm = pick([0, 10, 15, 30, 45]); const dur = rand(4, 16) * 10 + pick([0, 5]); const eh = sh + Math.floor((sm + dur) / 60); const em = (sm + dur) % 60;
    const lab = (d) => t(`${Math.floor(d / 60)} h ${d % 60} min`, `${Math.floor(d / 60)} घंटे ${d % 60} मिनट`);
    return R({ question: t(`A class trip starts at <b class="in">${hm(sh, sm)}</b> and ends at <b class="in">${hm(eh, em)}</b>. How long is it?`, `स्कूल की सैर <b class="in">${hm(sh, sm)}</b> पर शुरू होकर <b class="in">${hm(eh, em)}</b> पर ख़त्म होती है। कितनी देर चली?`), options: opts(lab(dur), [lab(dur + 10), lab(dur - 5 > 0 ? dur - 5 : dur + 20), lab(dur + 60)]),
      ask: sayQ(`From ${hm(sh, sm)} to ${hm(eh, em)}, how long is it?`, `${hm(sh, sm)} से ${hm(eh, em)} तक कितना समय?`),
      explain: T(`Count on: from ${hm(sh, sm)} jump whole hours, then the minutes. Total ${lab(dur)}.`, `आगे गिनो: ${hm(sh, sm)} से पहले पूरे घंटे, फिर मिनट। कुल ${lab(dur)}।`) });
  };

  // ---------------------------------------------------------------- 15. number patterns
  GEN.pattern4 = (lv) => {
    const kinds = [() => { const s = rand(2, 30); const d = rand(3, 12); return [[s, s + d, s + 2 * d, s + 3 * d], s + 4 * d, T(`add ${d} each time`, `हर बार ${d} जोड़ो`)]; },
      () => { const s = rand(90, 200); const d = rand(4, 15); return [[s, s - d, s - 2 * d, s - 3 * d], s - 4 * d, T(`subtract ${d} each time`, `हर बार ${d} घटाओ`)]; },
      () => { const s = rand(1, 5); const m = pick([2, 3]); return [[s, s * m, s * m * m, s * m ** 3], s * m ** 4, T(`multiply by ${m} each time`, `हर बार ${m} से गुणा करो`)]; }];
    if (lv >= 5) { kinds.push(() => { const s = rand(1, 4); return [[s * s, (s + 1) ** 2, (s + 2) ** 2, (s + 3) ** 2], (s + 4) ** 2, T('square numbers: 1×1, 2×2, 3×3…', 'वर्ग संख्याएँ: 1×1, 2×2, 3×3…')]; }); kinds.push(() => { const a = rand(1, 3); const b = rand(2, 4); const s = [a, b, a + b, a + 2 * b]; return [s, 2 * a + 3 * b, T('add the two numbers before', 'पिछली दो संख्याएँ जोड़ो')]; }); }
    const [seq, ans, rule] = pick(kinds)();
    return R({ question: `${seq.join(', ')}, <b class="in">?</b>`, options: opts(ans, [ans + 1, ans - 2, ans + seq[1] - seq[0] + 1, seq[3] + 1]),
      ask: sayQ('What comes next?', 'आगे क्या आएगा?'), explain: T(`The rule: ${rule.en}.`, `नियम: ${rule.hi}।`), hintOnWrong: T('Find the difference between neighbours first.', 'पहले पास-पास की संख्याओं का अंतर देखो।') });
  };

  // ---------------------------------------------------------------- 16. word problems (two steps)
  GEN.wordprob = (lv) => {
    const P = [
      () => { const r = rand(12, 30); const b = rand(4, 9); const g = rand(5, 20); return [T(`A school has ${b} buses. Each bus carries ${r} children. ${g} more children walk to school. How many children in all?`, `स्कूल में ${b} बसें हैं। हर बस में ${r} बच्चे आते हैं। ${g} बच्चे पैदल आते हैं। कुल कितने बच्चे?`), r * b + g, T(`${b} × ${r} = ${r * b}, then ${r * b} + ${g} = ${r * b + g}.`, `${b} × ${r} = ${r * b}, फिर ${r * b} + ${g} = ${r * b + g}।`)]; },
      () => { const tot = rand(120, 480); const n = pick([4, 5, 6, 8]); const tt = tot - (tot % n); return [T(`${tt} mangoes are packed equally into ${n} boxes. How many in each box?`, `${tt} आम ${n} डिब्बों में बराबर भरे। हर डिब्बे में कितने?`), tt / n, T(`Share equally means divide: ${tt} ÷ ${n} = ${tt / n}.`, `बराबर बाँटना यानी भाग: ${tt} ÷ ${n} = ${tt / n}।`)]; },
      () => { const s = rand(500, 2500); const sp = rand(100, s - 100); const e = rand(50, 400); return [T(`Riya saved ₹${s}. She spent ₹${sp} on books and then earned ₹${e} for helping. How much does she have now?`, `रिया ने ₹${s} बचाए। ₹${sp} किताबों पर ख़र्च किए, फिर मदद करके ₹${e} कमाए। अब कितने हैं?`), s - sp + e, T(`${s} − ${sp} = ${s - sp}; ${s - sp} + ${e} = ${s - sp + e}.`, `${s} − ${sp} = ${s - sp}; ${s - sp} + ${e} = ${s - sp + e}।`)]; },
      () => { const d = rand(35, 80); const h = rand(2, 6); return [T(`A train goes ${d} km every hour. How far does it go in ${h} hours?`, `एक रेलगाड़ी हर घंटे ${d} किमी चलती है। ${h} घंटे में कितनी दूर जाएगी?`), d * h, T(`${d} km × ${h} = ${d * h} km.`, `${d} किमी × ${h} = ${d * h} किमी।`)]; },
    ];
    if (lv >= 5) { P.push(() => { const tot = rand(4, 9) * 1000; const fr2 = pick([[1, 4], [3, 4], [2, 5], [1, 2]]); return [T(`A farmer had ${tot} kg of rice. He sold ${fr2[0]}/${fr2[1]} of it. How many kg did he sell?`, `एक किसान के पास ${tot} किलो चावल था। उसने ${fr2[0]}/${fr2[1]} बेच दिया। कितना बेचा?`), tot / fr2[1] * fr2[0], T(`${tot} ÷ ${fr2[1]} = ${tot / fr2[1]}, × ${fr2[0]} = ${tot / fr2[1] * fr2[0]} kg.`, `${tot} ÷ ${fr2[1]} = ${tot / fr2[1]}, × ${fr2[0]} = ${tot / fr2[1] * fr2[0]} किलो।`)]; }); }
    const [qq, ans, ex] = pick(P)();
    return R({ question: `<span class="wp">${t(qq.en, qq.hi)}</span>`, options: opts(ans, [ans + 10, ans - 10, ans + 100, Math.round(ans / 2)], IN),
      ask: () => K.sayT(qq), explain: T(`Step by step: ${ex.en}`, `एक-एक कदम: ${ex.hi}`), hintOnWrong: T('Read again. What do you find first? What next?', 'फिर से पढ़ो। पहले क्या निकालना है? फिर क्या?') });
  };

  // ---------------------------------------------------------------- 17. bar graphs
  GEN.bargraph = (lv) => {
    const sets = [[['🍎', 'Apple', 'सेब'], ['🍌', 'Banana', 'केला'], ['🥭', 'Mango', 'आम'], ['🍇', 'Grapes', 'अंगूर']], [['⚽', 'Football', 'फ़ुटबॉल'], ['🏏', 'Cricket', 'क्रिकेट'], ['🏸', 'Badminton', 'बैडमिंटन'], ['♟️', 'Chess', 'शतरंज']], [['🚌', 'Bus', 'बस'], ['🚲', 'Cycle', 'साइकिल'], ['🚶', 'Walk', 'पैदल'], ['🚗', 'Car', 'कार']]];
    const S = pick(sets); const step = lv >= 5 ? 5 : 2; const vals = S.map(() => rand(2, 10) * step); const max = Math.max(...vals);
    const svgB = `<svg class="shape-svg bars" viewBox="0 0 300 200"><line x1="40" y1="170" x2="290" y2="170" stroke="#1e1b4b" stroke-width="2"/><line x1="40" y1="10" x2="40" y2="170" stroke="#1e1b4b" stroke-width="2"/>${Array.from({ length: 6 }, (_, i) => { const v = Math.round(max / 5 * i); const y = 170 - (v / max) * 150; return `<text x="34" y="${y + 4}" font-size="10" text-anchor="end">${v}</text><line x1="40" x2="290" y1="${y}" y2="${y}" stroke="#e5e7eb"/>`; }).join('')}${S.map((s, i) => { const h = (vals[i] / max) * 150; return `<rect x="${55 + i * 60}" y="${170 - h}" width="38" height="${h}" rx="4" fill="${['#8b5cf6', '#f97316', '#16a34a', '#0ea5e9'][i]}"/><text x="${74 + i * 60}" y="190" font-size="16" text-anchor="middle">${s[0]}</text><text x="${74 + i * 60}" y="${165 - h}" font-size="11" font-weight="800" text-anchor="middle">${vals[i]}</text>`; }).join('')}</svg>`;
    const k = pick(['most', 'least', 'diff', 'total']); const iMax = vals.indexOf(Math.max(...vals)); const iMin = vals.indexOf(Math.min(...vals));
    const nm = (i) => t(S[i][1], S[i][2]);
    if (k === 'most' || k === 'least') {
      const ans = k === 'most' ? iMax : iMin; if (vals.filter((v) => v === vals[ans]).length > 1) { return GEN.bargraph(lv); }
      return R({ question: k === 'most' ? t('Children chose their favourite. Which got the <b class="in">most</b> votes?', 'बच्चों ने अपनी पसंद चुनी। सबसे <b class="in">ज़्यादा</b> वोट किसे मिले?') : t('Which got the <b class="in">fewest</b> votes?', 'सबसे <b class="in">कम</b> वोट किसे मिले?'), stage: svgB,
        options: S.map((s, i) => ({ label: `${s[0]} ${nm(i)}`, correct: i === ans })), ask: sayQ(k === 'most' ? 'Which got the most votes?' : 'Which got the fewest votes?', k === 'most' ? 'सबसे ज़्यादा वोट किसे मिले?' : 'सबसे कम वोट किसे मिले?'),
        explain: T('The tallest bar is the most, the shortest bar is the least.', 'सबसे ऊँचा खंभा सबसे ज़्यादा, सबसे छोटा खंभा सबसे कम।') });
    }
    if (k === 'diff') {
      const [a, b] = shuffle([0, 1, 2, 3]).slice(0, 2); const ans = Math.abs(vals[a] - vals[b]); if (!ans) { return GEN.bargraph(lv); }
      const big = vals[a] > vals[b] ? a : b; const small = big === a ? b : a;
      return R({ question: t(`How many more votes did ${S[big][0]} ${S[big][1]} get than ${S[small][0]} ${S[small][1]}?`, `${S[big][0]} ${S[big][2]} को ${S[small][0]} ${S[small][2]} से कितने ज़्यादा वोट मिले?`), stage: svgB, options: opts(ans, [vals[big], vals[small], ans + step, vals[big] + vals[small]]),
        ask: sayQ(`How many more votes did ${S[big][1]} get than ${S[small][1]}?`, `${S[big][2]} को ${S[small][2]} से कितने ज़्यादा वोट मिले?`), explain: T(`Read both bars and subtract: ${vals[big]} − ${vals[small]} = ${ans}.`, `दोनों खंभे पढ़ो और घटाओ: ${vals[big]} − ${vals[small]} = ${ans}।`) });
    }
    const tot = vals.reduce((a, b) => a + b, 0);
    return R({ question: t('How many children voted in all?', 'कुल कितने बच्चों ने वोट दिया?'), stage: svgB, options: opts(tot, [tot + step, tot - step, max * 4, tot + 10]),
      ask: sayQ('How many children voted in all?', 'कुल कितने बच्चों ने वोट दिया?'), explain: T(`Add all the bars: ${vals.join(' + ')} = ${tot}.`, `सब खंभे जोड़ो: ${vals.join(' + ')} = ${tot}।`) });
  };

  // ---------------------------------------------------------------- 18. symmetry & shapes (Class 4) / 3-D and volume (Class 5)
  GEN.shapes45 = (lv) => {
    const L = lv >= 5 ? [
      [['🧊', 'A cube has how many faces?', 'घन के कितने फलक होते हैं?'], 6, [4, 8, 12]], [['🧊', 'A cube has how many edges?', 'घन के कितने किनारे होते हैं?'], 12, [6, 8, 10]], [['🧊', 'A cube has how many corners (vertices)?', 'घन के कितने कोने होते हैं?'], 8, [6, 4, 12]],
      [['📦', 'A box is 4 cubes long, 3 wide and 2 high. How many unit cubes fill it?', 'एक डिब्बा 4 घन लंबा, 3 चौड़ा, 2 ऊँचा है। कितने इकाई घन भरेंगे?'], 24, [9, 12, 20]], [['🔺', 'A triangle has angles 60°, 70° and ?', 'त्रिभुज के कोण 60°, 70° और ?'], 50, [60, 40, 110]],
      [['⭕', 'The radius of a circle is 7 cm. Its diameter is?', 'वृत्त की त्रिज्या 7 सेमी है। व्यास कितना?'], 14, [7, 21, 49]], [['🔷', 'How many sides does a hexagon have?', 'षट्भुज की कितनी भुजाएँ होती हैं?'], 6, [5, 7, 8]],
    ] : [
      [['🦋', 'How many lines of symmetry does a square have?', 'वर्ग में सममिति की कितनी रेखाएँ होती हैं?'], 4, [1, 2, 0]], [['🔺', 'How many lines of symmetry does an equilateral triangle have?', 'समबाहु त्रिभुज में सममिति रेखाएँ?'], 3, [1, 2, 0]],
      [['▭', 'How many lines of symmetry does a rectangle have?', 'आयत में सममिति की कितनी रेखाएँ?'], 2, [4, 1, 0]], [['⭕', 'A circle: its diameter is 10 cm. The radius is?', 'वृत्त का व्यास 10 सेमी है। त्रिज्या कितनी?'], 5, [10, 20, 15]],
      [['🧱', 'A brick shape is called a…', 'ईंट जैसी आकृति कहलाती है…'], 'cuboid', ['cube', 'cone', 'sphere']], [['🍦', 'An ice-cream cone shape is a…', 'आइसक्रीम कोन की आकृति…'], 'cone', ['cylinder', 'cube', 'cuboid']], [['🥫', 'A tin can is shaped like a…', 'टिन का डिब्बा किस आकृति का?'], 'cylinder', ['cone', 'sphere', 'cuboid']],
    ];
    const [[e, en, hi], ans, wrong] = pick(L);
    return R({ question: `<span class="q-emoji">${e}</span>${t(en, hi)}`, options: opts(ans, wrong), ask: sayQ(en, hi), explain: T(`Answer: ${ans}. Try it with a real object or by folding paper!`, `उत्तर: ${ans}। असली चीज़ से या काग़ज़ मोड़कर देखो!`) });
  };
  void rand;
})();
