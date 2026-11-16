/* CBSE / NCERT aligned syllabus: registry + compact builders.
   Chapters follow the NCERT books' themes (Balvatika: NCF-FS goals; Class 1–2: Mridang, Sarangi, Joyful Mathematics;
   Class 3: Santoor, Veena, Maths Mela, Our Wondrous World). All lesson text is original – no textbook text is copied. */
(() => {
  'use strict';
  const SYL = window.SYL = { chapters: [] };
  SYL.CLASSES = [
    { id: 'bal', name: { en: 'Balvatika', hi: 'बालवाटिका' }, sub: { en: 'Nursery – UKG · ages 3–5', hi: 'नर्सरी – यूकेजी · 3–5 साल' }, level: 1 },
    { id: 'c1', name: { en: 'Class 1', hi: 'कक्षा 1' }, sub: { en: 'age 6', hi: '6 साल' }, level: 2 },
    { id: 'c2', name: { en: 'Class 2', hi: 'कक्षा 2' }, sub: { en: 'age 7', hi: '7 साल' }, level: 2 },
    { id: 'c3', name: { en: 'Class 3', hi: 'कक्षा 3' }, sub: { en: 'age 8', hi: '8 साल' }, level: 3 },
    { id: 'c4', name: { en: 'Class 4', hi: 'कक्षा 4' }, sub: { en: 'age 9', hi: '9 साल' }, level: 4 },
    { id: 'c5', name: { en: 'Class 5', hi: 'कक्षा 5' }, sub: { en: 'ages 10–11', hi: '10–11 साल' }, level: 4 },
  ];
  SYL.SUBJECTS = {
    english: { emo: '🔤', c: 'c1', name: { en: 'English', hi: 'अंग्रेज़ी' }, book: { bal: 'Jadui Pitara', c1: 'Mridang', c2: 'Mridang', c3: 'Santoor', c4: 'Santoor 4', c5: 'Santoor 5' } },
    hindi: { emo: 'अ', c: 'c2', name: { en: 'Hindi', hi: 'हिंदी' }, book: { bal: 'Jadui Pitara', c1: 'Sarangi · सारंगी', c2: 'Sarangi · सारंगी', c3: 'Veena · वीणा', c4: 'Veena 4 · वीणा', c5: 'Veena 5 · वीणा' } },
    maths: { emo: '🔢', c: 'c3', name: { en: 'Maths', hi: 'गणित' }, book: { bal: 'Jadui Pitara', c1: 'Joyful Mathematics', c2: 'Joyful Mathematics', c3: 'Maths Mela', c4: 'Maths Mela 4', c5: 'Maths Mela 5' } },
    evs: { emo: '🌏', c: 'c4', name: { en: 'My World', hi: 'मेरी दुनिया' }, book: { bal: 'Jadui Pitara', c1: 'themes from Mridang & Sarangi', c2: 'themes from Mridang & Sarangi', c3: 'Our Wondrous World', c4: 'Our Wondrous World 4', c5: 'Our Wondrous World 5' } },
    science: { emo: '🔬', c: 'c5', name: { en: 'Science', hi: 'विज्ञान' }, book: {} },
    social: { emo: '🗺️', c: 'c6', name: { en: 'Social Studies', hi: 'सामाजिक अध्ययन' }, book: {} },
    computers: { emo: '💻', c: 'c2', name: { en: 'Computers', hi: 'कंप्यूटर' }, book: {} },
    pe: { emo: '🧘', c: 'c3', name: { en: 'Khel Yoga', hi: 'खेल योग' }, book: { c3: 'Khel Yoga' } },
    arts: { emo: '🎨', c: 'c4', name: { en: 'Arts', hi: 'कला' }, book: { c3: 'Bansuri' } },
    values: { emo: '🌟', c: 'c1', name: { en: 'Values & Manners', hi: 'मूल्य और संस्कार' }, book: {} },
  };
  /** Subjects a class studies on a board. Class 4–5: CBSE keeps EVS (Our Wondrous World); ICSE and International split it into Science + Social Studies. */
  SYL.subjectsFor = (cls, board = 'cbse') => {
    if (cls === 'bal') { return ['english', 'hindi', 'maths', 'evs']; }
    const more = ['computers', 'pe', 'arts', 'values'];
    if (cls === 'c4' || cls === 'c5') { return board === 'cbse' ? ['english', 'hindi', 'maths', 'evs', ...more] : ['english', 'hindi', 'maths', 'science', 'social', ...more]; }
    return board === 'intl' ? ['english', 'hindi', 'maths', 'evs', 'social', ...more] : ['english', 'hindi', 'maths', 'evs', ...more];
  };
  SYL.BOARDS = [
    { id: 'cbse', name: { en: 'CBSE / NCERT', hi: 'सीबीएसई / एनसीईआरटी' } },
    { id: 'icse', name: { en: 'ICSE', hi: 'आईसीएसई' } },
    { id: 'intl', name: { en: 'International (Cambridge-style)', hi: 'इंटरनेशनल (कैम्ब्रिज जैसा)' } },
  ];
  SYL.classLabel = (cls, board) => (board === 'intl' && cls !== 'bal' ? { en: `Stage ${cls.slice(1)}`, hi: `स्टेज ${cls.slice(1)}` } : SYL.CLASSES.find((x) => x.id === cls).name);
  SYL.bookFor = (sub, cls, board) => (cls === 'bal' ? 'Jadui Pitara (play-based)' : sub === 'pe' ? (board === 'cbse' && cls === 'c3' ? 'Khel Yoga' : 'Physical Education & Yoga') : sub === 'arts' ? (board === 'cbse' && cls === 'c3' ? 'Bansuri' : 'Art, Music, Dance & Theatre') : sub === 'values' ? 'Moral stories, manners & life skills' : sub === 'computers' ? (board === 'intl' ? 'Computing & digital literacy' : 'Computer studies') : board === 'icse' ? { english: 'ICSE English: grammar & language', hindi: 'ICSE हिंदी व्याकरण', maths: 'ICSE Mathematics themes', evs: 'ICSE EVS themes', science: 'ICSE Science themes', social: 'ICSE History, Civics & Geography' }[sub] : board === 'intl' ? { english: 'Cambridge Primary English–style', hindi: 'Hindi (second language)', maths: 'Cambridge Primary Maths–style', evs: 'Cambridge Primary Science–style', science: 'Cambridge Primary Science–style', social: 'Global Perspectives & Humanities–style' }[sub] : SYL.SUBJECTS[sub].book[cls] || '');
  /** chapters for a class/subject/board. Pre-primary is shared; International Hindi uses the ICSE Hindi course. */
  SYL.chaptersFor = (cls, sub, board = 'cbse') => {
    const b = cls === 'bal' ? 'cbse' : board === 'intl' && sub === 'hindi' ? 'icse' : board;
    const list = SYL.chapters.filter((c) => c.cls === cls && c.sub === sub && c.board === b).sort((x, y) => (x.ord ?? x.no) - (y.ord ?? y.no));
    list.forEach((c, i) => { if (c.book === undefined) { c.dno = i + 1; } });   // shown chapter number = position in the list
    return list;
  };
  /** Put a subject's chapters in textbook order. `nos` = chapter numbers (as registered) in the order of the book; every other
   *  chapter of that subject becomes a practice chapter after the book. First two in order are the free ones. */
  SYL.bookOrder = (board, cls, sub, nos, rename = {}) => {
    const chs = SYL.chapters.filter((c) => c.board === board && c.cls === cls && c.sub === sub);
    nos.forEach((no, i) => { const c = chs.find((x) => x.no === no); if (!c) { throw new Error(`bookOrder: ${board} ${cls} ${sub} ${no}`); } c.ord = i + 1; c.book = true; c.dno = i + 1; });
    let k = nos.length; chs.filter((c) => c.ord == null).sort((a, b) => a.no - b.no).forEach((c) => { c.ord = ++k; c.book = false; });
    chs.forEach((c) => { c.free = c.ord <= 2; c.acts.forEach((a) => { a.free = c.free; }); if (rename[c.no]) { c.title = rename[c.no]; } });
  };
  SYL.classForAge = (age) => (age <= 5 ? 'bal' : age === 6 ? 'c1' : age === 7 ? 'c2' : age === 8 ? 'c3' : age === 9 ? 'c4' : 'c5');
  const LV = SYL.LV = { bal: 1, c1: 2, c2: 2, c3: 3, c4: 4, c5: 4 };

  /** Register a chapter. acts are activity objects (type + payload). */
  SYL.ch = (cls, sub, no, emoji, title, acts, extra = {}) => {
    const board = extra.board || 'cbse';
    const id = `${board === 'cbse' ? '' : `${board}-`}${cls}-${sub}-${no}`;
    const ch = { id, cls, sub, no, emoji, title, free: no <= 2, ...extra, board, acts: [] };
    acts.filter(Boolean).forEach((a, k) => {
      const act = { levels: [LV[cls]], level: a.level || LV[cls], skills: a.skills || SKILL[sub], ...a, id: `${id}-${k + 1}`, world: sub, chapter: id, free: ch.free };
      if (!act.title) { act.title = title; }
      ch.acts.push(act); window.CUR.push(act);
    });
    SYL.chapters.push(ch);
    return ch;
  };
  const SKILL = { english: ['vocabulary', 'reading', 'listening'], hindi: ['reading', 'vocabulary', 'listening'], maths: ['numbers', 'calculation', 'logic'], evs: ['science', 'knowledge'], science: ['science', 'knowledge', 'logic'], social: ['knowledge', 'values'], computers: ['logic', 'knowledge'], pe: ['movement', 'values'], arts: ['creativity', 'music'], values: ['values', 'emotions', 'life'] };

  // ---------------------------------------------------------------- builders
  const T = (en, hi) => ({ en, hi });
  const two = (x) => (Array.isArray(x) ? T(x[0], x[1]) : x);
  const L = window.SYLB = {
    T,
    /** English vocabulary cards [[emoji, en, hi]] with quick check */
    vocab: (title, list, extra = {}) => ({ type: 'cards', bilingual: true, title, items: list.map(([e, en, hi]) => ({ emoji: e, word: T(en, hi) })), skills: ['vocabulary', 'listening', 'speaking'], ...extra }),
    /** Hindi word cards [[emoji, hindi, english]] */
    hwords: (title, list, extra = {}) => ({ type: 'cards', hindiCards: true, title, items: list.map(([e, hi, en]) => ({ emoji: e, word: hi, note: T(en, '') })), skills: ['reading', 'vocabulary'], ...extra }),
    /** Letter cards: [[letter, emoji, word]] */
    letters: (title, list, extra = {}) => ({ type: 'cards', trace: true, title, items: list.map(([b, e, w, s]) => ({ big: b, emoji: e, word: w, say: s || (K.isHindi(b) ? `${b} से ${w}` : `${b} for ${w}`) })), skills: ['reading', 'writing', 'listening'], ...extra }),
    /** Explainer cards: [[emoji, heading{en,hi}|[en,hi], text{en,hi}|[en,hi]]] – Golu explains, no quiz */
    explain: (title, list, extra = {}) => ({ type: 'cards', noCheck: true, title, items: list.map(([e, h, x]) => ({ emoji: e, word: two(h), note: two(x), say: two(x) })), skills: ['knowledge', 'listening'], ...extra }),
    /** Quiz: [[emoji, q[en,hi], [[en,hi]...] or ['a','b'], answerIndex, explain[en,hi]?]] */
    quiz: (title, list, extra = {}) => ({ type: 'quiz', title, count: Math.min(6, list.length), questions: list.map(([emoji, qq, opts, answer, ex]) => ({ emoji, q: two(qq), options: opts.map((o) => (Array.isArray(o) ? T(o[0], o[1]) : o)), answer, explain: ex ? two(ex) : undefined })), ...extra }),
    match: (title, pairs, extra = {}) => ({ type: 'match', title, pairs: pairs.map(([a, b]) => [two(a), two(b)]), ...extra }),
    /** sort: bins [[id, emoji, en, hi]], items [[emoji, binId, en?, hi?]] */
    sort: (title, bins, items, extra = {}) => ({ type: 'sort', title, bins: bins.map(([id, emoji, en, hi]) => ({ id, emoji, label: T(en, hi) })), items: items.map(([e, bin, en, hi]) => ({ e, bin, name: en ? T(en, hi || en) : undefined })), ...extra }),
    /** order: sets [[prompt[en,hi], [[emoji, en, hi]...], done[en,hi]?]] */
    order: (title, sets, extra = {}) => ({ type: 'order', title, sets: sets.map(([p, items, done]) => ({ prompt: two(p), items: items.map(([e, en, hi]) => ({ e, label: en ? T(en, hi || en) : undefined })), done: done ? two(done) : undefined })), skills: ['logic', 'listening'], ...extra }),
    /** story pages [[emoji, en, hi]], moral [en,hi], questions [[q[en,hi], [[en,hi]...], answer]] */
    story: (title, pages, moral, qs, extra = {}) => ({ type: 'story', title, pages: pages.map(([emoji, en, hi]) => ({ emoji, text: T(en, hi) })), moral: two(moral), questions: qs.map(([qq, opts, answer]) => ({ q: two(qq), options: opts.map(two), answer })), skills: ['listening', 'reading', 'values'], ...extra }),
    /** situation scenes [[emoji, text[en,hi], [[text[en,hi], good, why[en,hi]]...]]] */
    situ: (title, scenes, remember, extra = {}) => ({ type: 'situation', title, remember: remember ? two(remember) : undefined, scenes: scenes.map(([emoji, text, ch]) => ({ emoji, text: two(text), choices: ch.map(([tt, good, why]) => ({ t: two(tt), good, why: two(why) })) })), skills: ['values', 'emotions', 'life'], ...extra }),
    poem: (title, emoji, tune, lines, meaning, extra = {}) => ({ type: 'poem', title, emoji, tune, lines, meaning: meaning ? two(meaning) : undefined, credit: 'Original – Khel Khel Mein', skills: ['music', 'speaking', 'memory'], ...extra }),
    gen: (g, extra = {}) => ({ type: 'gen', gen: g, rounds: 6, ...extra }),
    spell: (title, words, extra = {}) => ({ type: 'spell', title, words: words.map((w) => (Array.isArray(w) ? (K.isHindi(w[0]) ? { tiles: w[0].split('|'), emoji: w[1] } : { w: w[0], emoji: w[1] }) : w)), skills: ['writing', 'reading'], ...extra }),
    sentence: (title, list, extra = {}) => ({ type: 'sentence', title, sentences: list.map(([s, emoji, meaning]) => ({ words: s.split(' '), emoji, meaning })), skills: ['reading', 'speaking'], ...extra }),
    trace: (title, letters, extra = {}) => ({ type: 'trace', title, letters, skills: ['writing'], ...extra }),
    shapes: (title, shapes, extra = {}) => ({ type: 'shapes', title, shapes, skills: ['writing', 'focus'], ...extra }),
    dots: (title, pics, mode, extra = {}) => ({ type: 'dots', title, pics, mode, skills: ['numbers', 'focus'], ...extra }),
    colour: (title, pages, extra = {}) => ({ type: 'colour', title, pages, skills: ['creativity', 'vocabulary'], ...extra }),
    spot: (title, scenes, extra = {}) => ({ type: 'spot', title, scenes: scenes.map(([items, asks, bg]) => ({ bg, items: items.map(([e, x, y, s, en, hi]) => ({ e, x, y, s, name: en ? T(en, hi) : undefined })), asks: asks.map(([qq, a, say]) => ({ q: two(qq), a, say: say ? two(say) : undefined })) })), ...extra }),
    g: (type, title, extra = {}) => ({ type, title, ...extra }),
  };
  L.two = two;
})();
