/* Learning helpers used on every chapter:
   - "Practice more": a fresh 10-question test built from everything the chapter teaches (maths: mixed generators),
     and a 20-question subject test.
   - "In real life": where the child will use this chapter, plus a manners tip, so learning connects to life. */
(() => {
  'use strict';
  const { t, tx, shuffle, pick } = K;
  const T = (en, hi) => ({ en, hi: hi ?? en });
  const lab = (x) => (x == null ? '' : typeof x === 'string' ? x : x);

  // ================================================================ question pool from any activities
  function poolOf(acts) {
    const pool = [];
    acts.forEach((a) => {
      if ((a.type === 'quiz' || a.type === 'facts') && a.questions) { a.questions.forEach((q) => pool.push(q)); }
      if (a.type === 'story' && a.questions) { a.questions.forEach((q) => pool.push({ emoji: a.emoji, q: q.q, options: q.options, answer: q.answer || 0 })); }
      if (a.type === 'match' && a.pairs && a.pairs.length >= 3) {
        a.pairs.forEach(([l, r], i) => { const wrong = shuffle(a.pairs.filter((_, j) => j !== i).map((p) => p[1])).slice(0, 2);
          pool.push({ emoji: '🔗', q: T(`What goes with “${typeof l === 'string' ? l : l.en}”?`, `“${typeof l === 'string' ? l : l.hi}” के साथ क्या जाएगा?`), options: [lab(r), ...wrong.map(lab)], answer: 0 }); });
      }
      if (a.type === 'sort' && a.items && a.bins) {
        a.items.filter((it) => it.name).forEach((it) => { const right = a.bins.find((b) => b.id === it.bin); if (!right) { return; }
          pool.push({ emoji: it.e, q: T(`Where does “${it.name.en}” go?`, `“${it.name.hi}” कहाँ जाएगा?`), options: [right.label, ...a.bins.filter((b) => b.id !== it.bin).map((b) => b.label)].slice(0, 3), answer: 0 }); });
      }
      if (a.type === 'situation' && a.scenes) {
        a.scenes.forEach((s) => { const good = s.choices.find((c) => c.good); if (!good) { return; }
          pool.push({ emoji: s.emoji, q: T(`${s.text.en} – What is the right thing to do?`, `${s.text.hi} – सही क्या है?`), options: [good.t, ...s.choices.filter((c) => !c.good).map((c) => c.t)], answer: 0, explain: good.why }); });
      }
      if (a.type === 'order' && a.sets) {
        a.sets.forEach((s) => { if (s.items.length >= 3) { pool.push({ emoji: s.items[0].e, q: T(`${s.prompt.en} – What comes FIRST?`, `${s.prompt.hi} – सबसे पहले क्या?`), options: [s.items[0].label, ...shuffle(s.items.slice(1)).slice(0, 2).map((x) => x.label)].filter(Boolean), answer: 0 }); } });
      }
    });
    return pool.filter((q) => q && q.options && q.options.length >= 2);
  }
  // ---------------------------------------------------------------- more question shapes from teaching activities
  const key = (o) => (typeof o === 'string' ? o : JSON.stringify(o));
  const first = (s) => String(s || '').split(/(?<=[.!?।])\s/)[0];
  const wrongOf = (list, right, n = 2) => { const k = key(right); const seen = new Set([k]); const out = [];
    shuffle(list).forEach((x) => { const kx = key(x); if (!seen.has(kx) && out.length < n) { seen.add(kx); out.push(x); } }); return out; };
  const scramble = (w) => { for (let i = 0; i < 8; i++) { const s = shuffle(w.split('')).join(''); if (s !== w) { return s; } } return w.split('').reverse().join(''); };
  const misspell = (w) => { const v = 'AEIOU'; const i = [...w].findIndex((c, j) => j > 0 && v.includes(c)); return i > 0 ? w.slice(0, i) + v[(v.indexOf(w[i]) + 1) % 5] + w.slice(i + 1) : scramble(w); };
  function morePool(acts, allMorals) {
    const pool = [];
    const add = (emoji, q, right, wrongs, explain) => { if (wrongs.length >= 1) { pool.push({ emoji, q, options: [right, ...wrongs], answer: 0, explain }); } };
    acts.forEach((a) => {
      // facts / explainer cards: which card says this?
      const notes = a.type === 'facts' ? (a.items || []).filter((it) => it.h && it.x).map((it) => ({ e: typeof it.pic === 'string' && !it.pic.startsWith('dia:') ? it.pic : (a.emoji || '💡'), h: it.h, x: it.x }))
        : a.type === 'cards' && a.noCheck ? (a.items || []).filter((it) => it.word && it.note).map((it) => ({ e: it.emoji, h: it.word, x: it.note })) : [];
      if (notes.length >= 3) { const hs = notes.map((n) => n.h); notes.forEach((n) => add(n.e || '💡', T(`Which one is this? “${first(n.x.en || n.x)}”`, `यह किसके बारे में है? “${first(n.x.hi || n.x)}”`), n.h, wrongOf(hs, n.h))); }
      if (a.type === 'cards' && !a.noCheck && a.items) {
        const its = a.items.filter((it) => it.emoji && it.word);
        if (a.trace && its.length >= 3) { const bigs = its.map((it) => it.big); its.forEach((it) => add(it.emoji, T(`${it.emoji} ${typeof it.word === 'string' ? it.word : it.word.en} starts with…?`, `${it.emoji} ${typeof it.word === 'string' ? it.word : it.word.hi} किससे शुरू होता है?`), it.big, wrongOf(bigs, it.big))); }
        else if (its.length >= 3) { const ws = its.map((it) => it.word); its.forEach((it) => add(it.emoji, T(`Which word is ${it.emoji}?`, `${it.emoji} कौन सा शब्द है?`), it.word, wrongOf(ws, it.word))); }
      }
      if (a.type === 'spell' && a.words) { a.words.forEach((w) => { if (w.w) { add(w.emoji, T(`Which spelling is right for ${w.emoji}?`, `${w.emoji} की सही वर्तनी?`), w.w, [...new Set([misspell(w.w), scramble(w.w)])].filter((x) => x !== w.w)); }
        else if (w.tiles && w.tiles.length >= 2) { const r = w.tiles.join(''); add(w.emoji, T(`Which word is ${w.emoji}?`, `${w.emoji} कौन सा शब्द है?`), r, [...new Set([shuffle(w.tiles).join(''), [...w.tiles].reverse().join('')])].filter((x) => x !== r)); } }); }
      if (a.type === 'sentence' && a.sentences) { a.sentences.forEach((s) => { if (s.words.length >= 3) { const r = s.words.join(' '); add(s.emoji, T('Which sentence is in the right order?', 'कौन सा वाक्य सही क्रम में है?'), r, [...new Set([shuffle(s.words).join(' '), [...s.words].reverse().join(' ')])].filter((x) => x !== r)); } }); }
      if (a.type === 'poem' && Array.isArray(a.lines) && a.lines.length >= 4) { const L = a.lines.filter((l) => l && l.trim()); L.slice(0, -1).forEach((l, i) => { if (L[i + 1] !== l) { add(a.emoji || '🎵', T(`What comes next? “${l}”`, `आगे क्या आता है? “${l}”`), L[i + 1], wrongOf(L.filter((x, j) => j !== i + 1 && x !== L[i + 1]), L[i + 1])); } }); }
      if (a.type === 'story' && a.pages && a.pages.length >= 3) {
        const S = a.pages.map((pg) => (pg.text ? { en: first(pg.text.en), hi: first(pg.text.hi) } : null)).filter(Boolean);
        if (S.length >= 3) { add(a.emoji || '📖', T('What happened FIRST in the story?', 'कहानी में सबसे पहले क्या हुआ?'), S[0], [S[S.length - 1], S[Math.floor(S.length / 2)]]);
          add(a.emoji || '📖', T('How did the story END?', 'कहानी का अंत कैसे हुआ?'), S[S.length - 1], [S[0], S[1]]); }
        if (a.moral && allMorals.length > 3) { add('🌟', T('What does this story teach us?', 'यह कहानी क्या सिखाती है?'), a.moral, wrongOf(allMorals.filter((m) => key(m) !== key(a.moral)), a.moral)); }
      }
      if (a.type === 'order' && a.sets) { a.sets.forEach((st) => { const it = st.items.filter((x) => x.label); if (it.length >= 3) { const labs = it.map((x) => x.label); it.slice(0, -1).forEach((x, i) => add(x.e, T(`${st.prompt.en} – What comes right after “${x.label.en || x.label}”?`, `${st.prompt.hi} – “${x.label.hi || x.label}” के ठीक बाद क्या?`), it[i + 1].label, wrongOf(labs.filter((l, j) => j !== i + 1 && j !== i), it[i + 1].label))); } }); }
      if (a.type === 'bank' && K.bankSpec) { for (let i = 0; i < 3; i++) { const sp = K.bankSpec(a); if (sp) { poolOf([sp]).forEach((q) => pool.push(q)); morePool([sp], allMorals).forEach((q) => pool.push(q)); } } }
    });
    // de-duplicate questions
    const seen = new Set(); return pool.filter((q) => { const k = key(q.q) + key(q.options[0]); if (seen.has(k)) { return false; } seen.add(k); return q.options.length >= 2; });
  }
  // maths / play engines that have a matching question generator
  const ENGINE_GEN = { mathlab: (a) => ({ add: 'add', sub: 'sub', mul: 'tables', div: 'divide' }[a.op] || 'add'), clockset: () => 'clock', shop: () => 'money', countlab: () => 'count', tenframe: () => 'count', dots: () => 'count', pop: () => 'count', feed: () => 'count', numline: () => 'add', tables: () => 'tables', share: () => 'divide', fraction: () => 'fraction', pictograph: () => 'compare', scale: () => 'bigsmall', bundles: () => 'placevalue', shapes: () => 'shapes', mirror: () => 'shapes', bargraph: () => 'bargraph' };
  const gensOf = (acts) => [...new Set(acts.map((a) => { const g = a.type === 'gen' ? a.gen : ENGINE_GEN[a.type] && (a.world === 'maths' || (a.chapter || '').includes('maths') || a.type === 'mathlab' || a.type === 'clockset') ? ENGINE_GEN[a.type](a) : null; return g && K.GEN[g] ? `${g}|${a.level || ''}` : null; }).filter(Boolean))];
  let MORALS = null; const morals = () => (MORALS = MORALS || [...new Map(window.CUR.filter((a) => a.type === 'story' && a.moral).map((a) => [key(a.moral), a.moral])).values()]);
  /** build a practice activity for a list of acts; null if nothing to practise */
  K.practiceAct = (id, title, acts, n = 10) => {
    const gens = gensOf(acts); const pool = [...poolOf(acts), ...morePool(acts, morals())];
    if (gens.length && pool.length < n) {
      const key = `mix:${id}`;
      K.GEN[key] = (lv, r) => { const [g, l] = pick(gens).split('|'); return K.GEN[g](Number(l) || lv, r); };
      return { id: `${id}-practice`, type: 'gen', gen: key, title, rounds: n, levels: [], free: true, skills: acts[0] && acts[0].skills };
    }
    if (pool.length < 4) { return null; }
    return { id: `${id}-practice`, type: 'quiz', title, questions: pool, count: Math.min(n, pool.length), levels: [], free: true, skills: acts[0] && acts[0].skills };
  };

  // ================================================================ real-life connections and manners
  const R = (re, use, manners) => ({ re, use, manners });
  const RULES = [
    R(/money|rupee|paise|shop|spend|give and take|पैसा|रुपये/i, T('At a shop: count the money before paying and check your change.', 'दुकान पर: पैसे देने से पहले गिनो और बाक़ी पैसे जाँचो।'), T('Say “please” and “thank you” to the shopkeeper.', 'दुकानदार से "कृपया" और "धन्यवाद" कहो।')),
    R(/time|clock|calendar|day|month|समय|घड़ी|महीन/i, T('Use time to be ready for the school bus and to plan homework and play.', 'स्कूल बस के लिए तैयार रहने और पढ़ाई-खेल की योजना में समय काम आता है।'), T('Being on time shows respect for others.', 'समय पर पहुँचना दूसरों का सम्मान है।')),
    R(/measure|length|weight|capacity|litre|kg|mass|lifting|filling|लंबाई|भार/i, T('In the kitchen: 1 cup of rice, ½ litre milk. At the doctor: your height and weight.', 'रसोई में: 1 कप चावल, आधा लीटर दूध। डॉक्टर के पास: लंबाई और वज़न।'), T('Help in the kitchen only with a grown-up nearby.', 'रसोई में बड़ों के साथ ही मदद करो।')),
    R(/fraction|half|quarter|share|division|divid|भिन्न|बाँट|भाग/i, T('Sharing a pizza, a roti or sweets equally with family and friends.', 'पिज़्ज़ा, रोटी या मिठाई परिवार-दोस्तों में बराबर बाँटना।'), T('Offer the first piece to others – it is good manners.', 'पहला टुकड़ा दूसरों को देना अच्छे संस्कार हैं।')),
    R(/add|subtract|plus|minus|carry|borrow|जोड़|घटा/i, T('Adding scores in a game, counting how many sweets are left.', 'खेल में अंक जोड़ना, बची टॉफ़ियाँ गिनना।'), T('Win or lose, shake hands after a game.', 'हार-जीत के बाद हाथ मिलाओ।')),
    R(/multipl|table|times|गुणा|पहाड़े/i, T('5 packets with 6 biscuits each? Multiply to know there are 30.', '5 पैकेट, हर एक में 6 बिस्कुट? गुणा करो – 30।'), T('When you know the answer, let others try first.', 'उत्तर आता हो तो दूसरों को भी मौक़ा दो।')),
    R(/shape|line|geometry|angle|symmetry|आकृति|कोण/i, T('Shapes are everywhere: round wheels, square tiles, triangle roofs. Builders and artists use them.', 'आकृतियाँ हर जगह: गोल पहिए, चौकोर टाइल, त्रिकोण छत। कारीगर और कलाकार इन्हें इस्तेमाल करते हैं।'), T('Keep your drawing tools neat and share them.', 'ड्रॉइंग का सामान साफ़ रखो और बाँटो।')),
    R(/data|graph|tally|pictograph|आँकड़/i, T('Make a chart of your family’s favourite fruits before shopping.', 'ख़रीदारी से पहले परिवार के पसंदीदा फलों का चार्ट बनाओ।'), T('Ask everyone politely and respect their choice.', 'सबसे विनम्रता से पूछो और उनकी पसंद का सम्मान करो।')),
    R(/number|count|place value|numeral|गिनती|संख्या/i, T('Numbers are on phone numbers, house numbers, bus numbers and prices.', 'फ़ोन नंबर, मकान नंबर, बस नंबर और दाम – सब में संख्याएँ।'), T('Learn your parent’s phone number for emergencies, but never share it with strangers.', 'आपात स्थिति के लिए माता-पिता का नंबर याद रखो, पर अनजान को मत बताओ।')),
    R(/plant|tree|seed|पौध|पेड़|बीज/i, T('Water a plant at home and watch it grow; trees give us fruits, shade and clean air.', 'घर पर पौधे को पानी दो; पेड़ फल, छाया और साफ़ हवा देते हैं।'), T('Don’t pluck flowers in a park – let everyone enjoy them.', 'पार्क में फूल मत तोड़ो – सबको आनंद लेने दो।')),
    R(/animal|bird|insect|ant|जानवर|पक्षी|चींटी/i, T('Keep a bowl of water for birds in summer; be gentle with pets.', 'गर्मी में पक्षियों के लिए पानी रखो; पालतू जानवरों से प्यार से पेश आओ।'), T('Never tease animals – they feel pain like us.', 'जानवरों को मत सताओ – उन्हें भी दर्द होता है।')),
    R(/water|rain|river|पानी|बरसात|नदी|जल/i, T('Close the tap while brushing; never waste drinking water.', 'ब्रश करते समय नल बंद करो; पीने का पानी बर्बाद मत करो।'), T('If you see a leaking tap, tell a grown-up politely.', 'टपकता नल दिखे तो बड़ों को विनम्रता से बताओ।')),
    R(/food|eat|fruit|vegetable|cook|roti|खाना|भोजन|रोटी|फल/i, T('Choose fruits and vegetables; finish what is on your plate.', 'फल-सब्ज़ियाँ चुनो; थाली में जितना लो, पूरा खाओ।'), T('Wash hands before eating and thank the cook.', 'खाने से पहले हाथ धोओ और खाना बनाने वाले को धन्यवाद कहो।')),
    R(/body|health|clean|teeth|हाथ|शरीर|स्वास्थ्य|सफ़ाई/i, T('Wash hands, brush twice, sleep early – your body thanks you.', 'हाथ धोओ, दो बार ब्रश करो, जल्दी सोओ – शरीर स्वस्थ रहेगा।'), T('Cover your mouth when you cough or sneeze.', 'खाँसते-छींकते समय मुँह ढको।')),
    R(/family|friend|grand|परिवार|दोस्त|दादा|दादी|नानी|माँ/i, T('Help at home – set the table, water plants, spend time with grandparents.', 'घर में मदद करो – थाली लगाओ, पौधों को पानी दो, दादा-दादी के साथ समय बिताओ।'), T('Touch elders’ feet or greet them warmly; listen when they speak.', 'बड़ों को प्रणाम करो; वे बोलें तो ध्यान से सुनो।')),
    R(/festival|fair|mela|holi|diwali|त्योहार|मेला|होली/i, T('At a festival, share sweets with neighbours and keep the street clean.', 'त्योहार पर पड़ोसियों से मिठाई बाँटो और गली साफ़ रखो।'), T('Respect every festival – they are all part of India.', 'हर त्योहार का सम्मान करो – सब भारत का हिस्सा हैं।')),
    R(/safe|road|traffic|electric|सुरक्षा|सड़क/i, T('Cross at the zebra crossing, hold a grown-up’s hand, and never touch switches with wet hands.', 'ज़ेब्रा क्रॉसिंग से पार करो, बड़ों का हाथ पकड़ो, गीले हाथ से स्विच मत छुओ।'), T('Thank the traffic police and the bus driver.', 'ट्रैफ़िक पुलिस और बस ड्राइवर को धन्यवाद कहो।')),
    R(/moon|sun|star|space|sky|chandrayaan|चाँद|सूरज|तारे|अंतरिक्ष/i, T('Look at the Moon tonight and see its shape; scientists use this to plan space missions.', 'आज रात चाँद का आकार देखो; वैज्ञानिक इससे अंतरिक्ष मिशन बनाते हैं।'), T('Ask questions – curious minds become scientists.', 'सवाल पूछो – जिज्ञासु बच्चे वैज्ञानिक बनते हैं।')),
    R(/computer|keyboard|mouse|internet|online|file|कंप्यूटर/i, T('Computers help in banks, hospitals and to call family far away.', 'बैंक, अस्पताल और दूर परिवार से बात में कंप्यूटर मदद करते हैं।'), T('Online, be as polite as face to face, and never share passwords.', 'ऑनलाइन भी आमने-सामने जितने विनम्र रहो, पासवर्ड कभी मत बताओ।')),
    R(/letter|write|writing|paragraph|notice|पत्र|लेखन|अनुच्छेद/i, T('Write a thank-you card for your teacher or a letter to your grandparents.', 'शिक्षक को धन्यवाद कार्ड या दादा-दादी को पत्र लिखो।'), T('Begin with a greeting and end with “Yours lovingly” – polite words matter.', 'संबोधन से शुरू करो, "आपका प्यारा" से ख़त्म – विनम्र शब्द ज़रूरी हैं।')),
    R(/greet|magic word|polite|manners|अभिवादन|शिष्टाचार/i, T('Use greetings at school, at home and with visitors every single day.', 'स्कूल, घर और मेहमानों से रोज़ अभिवादन करो।'), T('Say “please”, “thank you” and “sorry” – the three magic words.', '"कृपया", "धन्यवाद" और "माफ़ कीजिए" – तीन जादुई शब्द।')),
    R(/yoga|game|sport|play|khel|motor|ball|खेल|योग/i, T('Play outside for an hour daily; stretch before running.', 'रोज़ एक घंटा बाहर खेलो; दौड़ने से पहले स्ट्रेच करो।'), T('Take turns, follow the rules and cheer for the other team too.', 'बारी से खेलो, नियम मानो, दूसरी टीम के लिए भी ताली बजाओ।')),
    R(/art|draw|colour|music|dance|theatre|कला|संगीत|नृत्य/i, T('Make a birthday card, decorate your room, sing at a family function.', 'जन्मदिन का कार्ड बनाओ, कमरा सजाओ, परिवार के कार्यक्रम में गाओ।'), T('Praise others’ art – everyone creates differently.', 'दूसरों की कला की तारीफ़ करो – सब अलग तरह से बनाते हैं।')),
  ];
  const DEFAULTS = {
    english: [T('Read signboards, menus and story books – English helps you talk to people from many places.', 'साइनबोर्ड, मेन्यू और कहानियाँ पढ़ो – अंग्रेज़ी से कई जगहों के लोगों से बात होती है।'), T('Speak clearly and listen without interrupting.', 'साफ़ बोलो और बीच में टोके बिना सुनो।')],
    hindi: [T('Read Hindi newspapers, shop names and bus boards; talk with grandparents in Hindi.', 'हिंदी अख़बार, दुकानों के नाम और बस बोर्ड पढ़ो; दादा-दादी से हिंदी में बात करो।'), T('Use “आप” and “जी” with elders – it shows respect.', 'बड़ों से "आप" और "जी" लगाकर बात करो – यह सम्मान दिखाता है।')],
    maths: [T('Maths is used in shopping, cooking, games and planning your day.', 'गणित ख़रीदारी, खाना बनाने, खेल और दिन की योजना में काम आता है।'), T('If a friend is stuck, explain kindly instead of laughing.', 'दोस्त अटके तो हँसने की बजाय प्यार से समझाओ।')],
    evs: [T('Look around your home and street – you will see what you learnt today.', 'घर और गली में देखो – आज जो सीखा, वह दिखेगा।'), T('Keep surroundings clean and be kind to nature.', 'आस-पास साफ़ रखो और प्रकृति से प्यार करो।')],
    science: [T('Science explains everyday things – why ice melts, why plants need light.', 'विज्ञान रोज़ की बातें समझाता है – बर्फ़ क्यों पिघलती है, पौधों को रोशनी क्यों चाहिए।'), T('Do experiments only with a grown-up and tidy up after.', 'प्रयोग बड़ों के साथ करो और बाद में सफ़ाई करो।')],
    social: [T('Knowing your country and community helps you be a good citizen.', 'देश और समुदाय को जानकर अच्छे नागरिक बनते हैं।'), T('Respect people of every language, religion and region.', 'हर भाषा, धर्म और क्षेत्र के लोगों का सम्मान करो।')],
    computers: [T('Computers help in school projects and talking to family far away.', 'कंप्यूटर स्कूल प्रोजेक्ट और दूर परिवार से बात में मदद करते हैं।'), T('Ask a grown-up before downloading or sharing anything.', 'कुछ भी डाउनलोड या शेयर करने से पहले बड़ों से पूछो।')],
    pe: [T('Being active keeps your body strong and your mind happy.', 'सक्रिय रहने से शरीर मज़बूत और मन ख़ुश रहता है।'), T('Follow the rules and play fair.', 'नियम मानो और ईमानदारी से खेलो।')],
    arts: [T('Art and music make festivals, homes and hearts brighter.', 'कला और संगीत त्योहार, घर और मन को रोशन करते हैं।'), T('Appreciate others’ work before showing your own.', 'अपना दिखाने से पहले दूसरों के काम की सराहना करो।')],
    values: [T('Use these values at home, in school and on the playground every day.', 'इन मूल्यों को घर, स्कूल और मैदान में रोज़ अपनाओ।'), T('Good manners cost nothing but win every heart.', 'अच्छे संस्कार मुफ़्त हैं पर सबका दिल जीतते हैं।')],
  };
  K.realLife = (ch) => {
    if (ch.sub === 'values') {
      const st = ch.acts.find((a) => a.moral); const si = ch.acts.find((a) => a.type === 'situation' && a.remember);
      if (st) { return { use: T(`Try it this week: ${st.moral.en}`, `इस हफ़्ते आज़माओ: ${st.moral.hi}`), manners: T('Tell this story to someone at home and ask what they would do.', 'यह कहानी घर पर किसी को सुनाओ और पूछो कि वे क्या करते।') }; }
      if (si) { return { use: T(`Remember every day: ${si.remember.en}`, `रोज़ याद रखो: ${si.remember.hi}`), manners: T('Practise it at home, in school and outside – Golu will ask you tomorrow!', 'घर, स्कूल और बाहर अभ्यास करो – गोलू कल पूछेगा!') }; }
    }
    const text = `${ch.title.en} ${ch.title.hi}`; const r = RULES.find((x) => x.re.test(text));
    const d = DEFAULTS[ch.sub] || DEFAULTS.evs;
    return { use: r ? r.use : d[0], manners: r ? r.manners : d[1] };
  };
  void t; void tx;
})();
