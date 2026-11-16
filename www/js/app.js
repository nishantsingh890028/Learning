/* Screens: onboarding & parent guide, home (Golu + Daily Journey + My Class + Fun Zone), subjects & chapters, parent area. */
(() => {
  'use strict';
  const { t, tx, esc, pick, say, sayT, q, qa } = K;
  const SYL = window.SYL; const CUR = window.CUR;

  // ---------------------------------------------------------------- worlds
  const ALL_SUBJECTS = ['english', 'hindi', 'maths', 'evs', 'science', 'social', 'computers', 'pe', 'arts'];
  const subjectsOf = (c = K.child()) => SYL.subjectsFor(K.cls(c), (c && c.board) || 'cbse');
  const FUN = [
    { id: 'gym', emo: '🏋️', c: 'c3', g: 'practice', name: { en: 'Maths Gym', hi: 'गणित जिम' } },
    { id: 'abacus', emo: '🧮', c: 'c1', g: 'practice', name: { en: 'Abacus', hi: 'अबेकस' } },
    { id: 'puzzles', emo: '🧩', c: 'c5', g: 'practice', name: { en: 'Puzzles', hi: 'पहेलियाँ' } },
    { id: 'sanskar', emo: '🙏', c: 'c8', g: 'values', name: { en: 'Manners', hi: 'शिष्टाचार' } },
    { id: 'kindness', emo: '💛', c: 'c2', g: 'values', name: { en: 'Kindness', hi: 'दया और नैतिकता' } },
    { id: 'choices', emo: '🛡️', c: 'c7', g: 'values', name: { en: 'Safety & Feelings', hi: 'सुरक्षा और भावनाएँ' } },
    { id: 'play', emo: '⚽', c: 'c4', g: 'values', name: { en: 'Play & Grow', hi: 'खेलो और बढ़ो' } },
    { id: 'earth', emo: '🌍', c: 'c3', g: 'values', name: { en: 'Save Mother Earth', hi: 'धरती माँ बचाओ' } },
    { id: 'outside', emo: '🧺', c: 'c10', g: 'values', name: { en: 'Out & About', hi: 'बाहर के तौर-तरीके' } },
    { id: 'india', emo: '🇮🇳', c: 'c3', g: 'aware', name: { en: 'My India & Anthem', hi: 'मेरा भारत और राष्ट्रगान' } },
    { id: 'gk', emo: '🌏', c: 'c5', g: 'aware', name: { en: 'General Awareness', hi: 'सामान्य ज्ञान' } },
    { id: 'creative', emo: '🎨', c: 'c6', g: 'fun', name: { en: 'Draw & Colour', hi: 'ड्रॉ और रंग' } },
    { id: 'thinking', emo: '🧠', c: 'c5', g: 'fun', name: { en: 'Brain Games', hi: 'दिमागी खेल' } },
    { id: 'poems', emo: '🎵', c: 'c9', g: 'fun', name: { en: 'Poems', hi: 'कविताएँ' } },
    { id: 'stories', emo: '📖', c: 'c10', g: 'fun', name: { en: 'Stories', hi: 'कहानियाँ' } },
  ];
  const GROUPS = [['practice', '🎯', 'Practice zone', 'अभ्यास ज़ोन'], ['values', '🌱', 'Good values', 'अच्छे संस्कार'], ['aware', '🧭', 'Know your world', 'अपनी दुनिया जानो'], ['fun', '🎪', 'Fun zone', 'मस्ती ज़ोन']];
  const WORLDS = [...ALL_SUBJECTS.map((id) => ({ id, ...SYL.SUBJECTS[id] })), ...FUN];
  K.WORLDS = WORLDS;
  const byId = (id) => CUR.find((a) => a.id === id);
  K.byId = byId;
  // Senior Stars (Class 4–5) also get the Class-3 practice, values and awareness content; baby rhymes and picture tales stay with the little ones.
  CUR.forEach((a) => { if (!a.chapter && a.levels.includes(3) && !a.levels.includes(4) && !a.noSenior && !(['poems', 'stories'].includes(a.world) && a.levels.includes(1))) { a.levels.push(4); } });
  const worldOf = (id) => WORLDS.find((w) => w.id === id) || FUN[0];
  const locked = (a) => !a.free && !K.state.full && !K.CONFIG.unlockAll;
  const AVATARS = ['🦁', '🐯', '🐼', '🦊', '🐰', '🐨', '🦄', '🐸', '🐵', '🦋', '🐬', '🦚'];
  const SKILL_NAMES = {
    reading: ['Reading', 'पढ़ना'], writing: ['Writing', 'लिखना'], vocabulary: ['Vocabulary', 'शब्द-ज्ञान'], speaking: ['Speaking', 'बोलना'], listening: ['Listening', 'सुनना'],
    numbers: ['Numbers', 'संख्याएँ'], calculation: ['Calculation', 'गणना'], logic: ['Logic & thinking', 'तर्क'], memory: ['Memory', 'याददाश्त'], focus: ['Focus', 'एकाग्रता'],
    creativity: ['Creativity', 'रचनात्मकता'], imagination: ['Imagination', 'कल्पना'], science: ['Science', 'विज्ञान'], values: ['Values', 'संस्कार'], emotions: ['Emotions', 'भावनाएँ'],
    safety: ['Safety', 'सुरक्षा'], culture: ['Indian culture', 'भारतीय संस्कृति'], music: ['Music & rhythm', 'संगीत'], manners: ['Manners', 'शिष्टाचार'], health: ['Health', 'स्वास्थ्य'], life: ['Life skills', 'जीवन कौशल'], knowledge: ['General knowledge', 'सामान्य ज्ञान'],
  };
  const skillName = (s) => (SKILL_NAMES[s] ? t(SKILL_NAMES[s][0], SKILL_NAMES[s][1]) : s);
  const clsInfo = (c = K.child()) => SYL.CLASSES.find((x) => x.id === K.cls(c));
  const boardOf = (c = K.child()) => (c && c.board) || 'cbse';
  const chaptersOf = (cls, sub, c = K.child()) => SYL.chaptersFor(cls, sub, boardOf(c));
  const subName = (sid, c = K.child()) => (sid === 'evs' && boardOf(c) === 'intl' ? { en: 'Science', hi: 'विज्ञान' } : sid === 'social' && boardOf(c) === 'intl' && K.level(c) < 4 ? { en: 'Global Perspectives', hi: 'वैश्विक दृष्टिकोण' } : sid === 'evs' && K.level(c) >= 4 ? { en: 'EVS – Our World', hi: 'पर्यावरण अध्ययन' } : SYL.SUBJECTS[sid].name);
  const clsName = (cls, c = K.child()) => SYL.classLabel(cls, boardOf(c));
  const chDone = (ch, c = K.child()) => ch.acts.filter((a) => c.counts[a.id]).length;
  const extrasOf = (sub, lv) => CUR.filter((a) => !a.chapter && (a.world === sub || (a.world === 'science' && (sub === 'evs' || sub === 'science'))) && a.levels.includes(lv));

  // ---------------------------------------------------------------- daily plan: follows the syllabus in order
  function nextInSubject(sub, c, avoid) {
    const acts = chaptersOf(K.cls(c), sub).flatMap((ch) => ch.acts).filter((a) => !locked(a));
    const fresh = acts.find((a) => !c.counts[a.id] && !avoid.has(a.id));
    if (fresh) { return fresh; }
    const pool = acts.length ? acts : extrasOf(sub, K.level(c)).filter((a) => !locked(a));
    if (!pool.length) { return null; }
    const min = Math.min(...pool.map((a) => c.counts[a.id] || 0));
    return pick(pool.filter((a) => (c.counts[a.id] || 0) === min && !avoid.has(a.id))) || pool[0];
  }
  K.nextLesson = (sub, c, avoid = []) => nextInSubject(sub, c, new Set(avoid));
  function nextFun(world, c, avoid) {
    const lv = K.level(c);
    let pool = CUR.filter((a) => a.world === world && a.levels.includes(lv) && !locked(a));
    if (!pool.length) { pool = CUR.filter((a) => a.world === world && !locked(a)); }
    if (!pool.length) { return null; }
    const fresh = pool.filter((a) => !avoid.has(a.id)); const list = fresh.length ? fresh : pool;
    const min = Math.min(...list.map((a) => c.counts[a.id] || 0));
    return pick(list.filter((a) => (c.counts[a.id] || 0) === min));
  }
  function nextCourse(world, c, avoid) {
    const lv = K.level(c); const pool = CUR.filter((a) => a.world === world && a.levels.includes(lv) && !locked(a));
    return pool.find((a) => !c.counts[a.id] && !avoid.has(a.id)) || nextFun(world, c, avoid);
  }
  function todayPlan() {
    const c = K.child(); const day = K.today();
    const d = c.days[day] || (c.days[day] = { plan: [], done: [], stars: 0, skills: {} });
    if (d.plan.length && d.plan.every((id) => byId(id))) { return d; }
    const n = Object.keys(c.days).length;
    const prevKeys = Object.keys(c.days).sort().filter((k) => k < day);
    const avoid = new Set(prevKeys.length ? c.days[prevKeys[prevKeys.length - 1]].plan : []);
    const lang = c.medium === 'en' ? (n % 3 === 2 ? 'hindi' : 'english') : c.medium === 'hi' ? (n % 3 === 2 ? 'english' : 'hindi') : (n % 2 ? 'hindi' : 'english');
    const plan = [nextInSubject(lang, c, avoid), nextInSubject('maths', c, avoid), nextCourse(n % 2 ? 'abacus' : 'gym', c, avoid), nextInSubject(subjectsOf(c).includes('evs') ? (K.level(c) >= 4 && n % 4 === 3 ? 'computers' : 'evs') : ['science', 'social', 'science', 'computers'][n % 4], c, avoid),
      nextFun(['kindness', 'sanskar', 'earth', 'choices', 'outside', 'play'][n % 6], c, avoid), nextFun(['stories', 'gk', 'creative', 'india', 'stories', 'thinking', 'poems', 'gk'][n % 8], c, avoid)];
    d.plan = plan.filter(Boolean).map((a) => a.id);
    K.save();
    return d;
  }
  function runJourney() {
    const d = todayPlan();
    const nextId = d.plan.find((id) => !d.done.includes(id));
    if (!nextId) { journeyDone(); return; }
    K.nextAction = () => { const dd = todayPlan(); if (dd.plan.every((id) => dd.done.includes(id))) { journeyDone(); } else { runJourney(); } };
    K.run(byId(nextId), home);
  }
  function journeyDone() {
    const c = K.child(); const d = todayPlan();
    K.nextAction = null;
    if (!d.bonus) { d.bonus = true; K.addStars(5); K.save(); }
    K.confetti(); K.sfx.win();
    say(t(`Amazing, ${c.name}! You completed today's journey!`, `वाह ${c.name}! तुमने आज की यात्रा पूरी कर ली!`));
    K.modal(`<div class="mascot big cheer">${K.MASCOT}</div><h2>${t('Journey complete!', 'यात्रा पूरी!')}</h2>
      <p>${t(`🔥 ${c.streak}-day streak · +5 bonus stars`, `🔥 ${c.streak} दिन लगातार · +5 बोनस सितारे`)}</p>
      <p>${t('Come back tomorrow for the next lessons. You can keep exploring!', 'कल अगले पाठों के लिए आना। अभी और खेलना है तो घूमते रहो!')}</p>
      <button class="btn green" data-close>${t('Yay!', 'वाह!')}</button>`);
    home();
  }

  // ---------------------------------------------------------------- HOME
  function home() {
    K.nextAction = null; K.stopMusic(); K.stopVoice();
    const c = K.child();
    if (!c) { welcome(); return; }
    K.current = 'home'; K.rid = (K.rid || 0) + 1;
    const d = todayPlan(); const doneN = d.plan.filter((id) => d.done.includes(id)).length; const cl = clsInfo(c);
    const nextIdx = d.plan.findIndex((id) => !d.done.includes(id));
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="bar home-bar"><button class="avatar-btn" data-switch aria-label="Switch child">${c.avatar}</button>
        <div class="hello-name"><b>${esc(c.name)}</b><span class="chip-cls">${tx(clsName(cl.id))} · ${boardOf(c) === 'intl' ? 'Intl' : boardOf(c).toUpperCase()}</span></div>
        <div class="stars">⭐ <span data-stars>${c.stars}</span></div><button class="round small" data-parents aria-label="Grown-ups">⚙️</button></div>
      <div class="screen home">
        <div class="hero"><button class="mascot hero-m" data-mascot>${K.MASCOT}</button><div class="bubble show hero-b">${esc(greeting(c, doneN, d.plan.length))}</div></div>
        <div class="journey">
          <div class="journey-head"><div><div class="j-title">🎒 ${t('Classwork', 'कक्षा-कार्य')}</div><div class="j-sub">${t("Today's journey", 'आज की यात्रा')} · 🔥 ${c.streak || 0} ${t('day streak', 'दिन लगातार')} · ${doneN}/${d.plan.length} ${t('done', 'पूरे')}</div></div>
            <div class="ring-prog" style="--p:${d.plan.length ? doneN / d.plan.length : 0}"><span>${doneN}/${d.plan.length}</span></div></div>
          <div class="path">${d.plan.map((id, k) => { const a = byId(id); const w = worldOf(a.world); const ok = d.done.includes(id); return `<button class="node ${ok ? 'ok' : ''} ${k === nextIdx ? 'now' : ''} ${w.c}" data-act="${id}" style="--k:${k}"><span class="n-emo">${ok ? '✅' : w.emo}</span><span class="n-name">${esc(tx(a.title))}</span></button>`; }).join('')}</div>
          <button class="btn big green pulse-btn" data-start>${doneN === 0 ? t('▶ Start', '▶ शुरू करो') : doneN < d.plan.length ? t('▶ Continue', '▶ आगे बढ़ो') : t('🏅 All done! Play again', '🏅 सब पूरा! फिर खेलो')}</button>
        </div>
        ${K.Diary ? K.Diary.card(c) : ''}
        <h3 class="section-title">📚 ${t('My class', 'मेरी कक्षा')} · ${tx(clsName(cl.id))}</h3>
        <div class="subjects">${subjectsOf(c).map((sid) => { const s = SYL.SUBJECTS[sid]; const chs = chaptersOf(cl.id, sid); const done = chs.filter((ch) => chDone(ch, c) === ch.acts.length).length; return `<button class="subject ${s.c}" data-sub="${sid}"><span class="s-emo">${s.emo}</span><span class="s-name">${tx(subName(sid))}</span><span class="s-book">${esc(SYL.bookFor(sid, cl.id, boardOf(c)))}</span><span class="s-bar"><i style="width:${chs.length ? (done / chs.length) * 100 : 0}%"></i></span><span class="s-count">${done}/${chs.length} ${t('chapters', 'पाठ')}</span></button>`; }).join('')}</div>
        ${GROUPS.map(([g, emo, en, hi]) => `<h3 class="section-title">${emo} ${t(en, hi)}</h3><div class="grid fun n${FUN.filter((w) => w.g === g).length}">${FUN.filter((w) => w.g === g).map((w) => `<button class="tile ${w.c}" data-world="${w.id}"><span class="emo">${w.emo}</span><span class="name">${tx(w.name)}</span></button>`).join('')}</div>`).join('')}
        <div class="footer-row"><button class="pill" data-stickers>📒 ${t('Stickers', 'स्टिकर')} (${c.stickers.length})</button><button class="pill" data-gallery>🖼️ ${t('My art', 'मेरी कला')}</button><button class="pill" data-classpick>🎒 ${t('Board & class', 'बोर्ड और कक्षा')}</button></div>
      </div>`;
    const greet = () => say(greeting(c, doneN, d.plan.length));
    if (!K.greeted) { K.greeted = true; K.later(greet, 400); }
    q('[data-mascot]').onclick = () => { K.mascotCheer(); greet(); };
    if (K.Diary) { K.Diary.bind(home); }
    q('[data-start]').onclick = () => { K.sfx.tap(); if (doneN === d.plan.length) { d.done = []; K.save(); } runJourney(); };
    qa('[data-act]').forEach((el) => { el.onclick = () => { K.sfx.tap(); K.nextAction = null; K.run(byId(el.dataset.act), home); }; });
    qa('[data-sub]').forEach((el) => { el.onclick = () => { K.sfx.tap(); subject(el.dataset.sub); }; });
    qa('[data-world]').forEach((el) => { el.onclick = () => { K.sfx.tap(); funWorld(el.dataset.world); }; });
    q('[data-stickers]').onclick = () => { K.sfx.tap(); stickers(); };
    q('[data-gallery]').onclick = () => { K.sfx.tap(); gallery(); };
    q('[data-classpick]').onclick = () => { K.sfx.tap(); K.parentGate(() => classPicker(home)); };
    q('[data-parents]').onclick = () => { K.sfx.tap(); K.parentGate(parents); };
    q('[data-switch]').onclick = () => { K.sfx.tap(); switchChild(); };
  }
  K.home = home;
  function greeting(c, doneN, total) {
    const h = new Date().getHours();
    const part = h < 12 ? t('Good morning', 'सुप्रभात') : h < 17 ? t('Good afternoon', 'नमस्ते') : t('Good evening', 'शुभ संध्या');
    if (doneN === 0) { return t(`${part}, ${c.name}! I am Golu. Shall we start today's journey?`, `${part}, ${c.name}! मैं गोलू हूँ। आज की यात्रा शुरू करें?`); }
    if (doneN < total) { return t(`Well done, ${c.name}! ${total - doneN} more to go.`, `शाबाश ${c.name}! बस ${total - doneN} और बाकी।`); }
    return t(`You finished today's journey! Want to draw or hear a story?`, 'आज की यात्रा पूरी! अब चित्र बनाएँ या कहानी सुनें?');
  }

  // ---------------------------------------------------------------- SUBJECT → CHAPTER → ACTIVITIES
  function subject(sid, cls) {
    const c = K.child(); cls = cls || K.cls(c); const s = SYL.SUBJECTS[sid]; const cl = SYL.CLASSES.find((x) => x.id === cls);
    const chs = chaptersOf(cls, sid); const extras = extrasOf(sid, cl.level);
    K.render(`${s.emo} ${tx(subName(sid))}`, `
      <div class="book-banner ${s.c}"><div><b>${tx(clsName(cls))}</b><span>📘 ${esc(SYL.bookFor(sid, cls, boardOf(c)))}</span></div><span class="bb-emo">${s.emo}</span></div>
      <div class="chapters">${chs.map((ch) => { const dn = chDone(ch, c); const full = dn === ch.acts.length; const lk = !ch.free && !K.state.full && !K.CONFIG.unlockAll; return `<button class="chapter ${full ? 'full' : ''} ${lk ? 'locked' : ''}" data-ch="${ch.id}"><span class="ch-no ${ch.book === false ? 'practice' : ''}">${ch.book === false ? '✎' : (ch.dno || ch.no)}</span><span class="ch-emo">${ch.emoji}</span><span class="ch-text"><b>${esc(tx(ch.title))}</b><small>${'⭐'.repeat(dn)}${'☆'.repeat(ch.acts.length - dn)} · ${ch.acts.length} ${t(ch.acts.length === 1 ? 'game' : 'games', 'खेल')}</small></span>${lk ? '<span class="l-lock">🔒</span>' : full ? '<span class="l-go">✅</span>' : '<span class="l-go">▶</span>'}</button>`; }).join('')}</div>
      ${extras.length ? `<h3 class="section-title">➕ ${t('Extra practice', 'और अभ्यास')}</h3><div class="lessons">${extras.map((a) => `<button class="lesson ${locked(a) ? 'locked' : ''}" data-l="${a.id}"><span class="l-emo">${c.counts[a.id] ? '✅' : typeEmoji(a.type)}</span><span class="l-text"><b>${esc(tx(a.title))}</b><small>${typeName(a.type)}</small></span>${locked(a) ? '<span class="l-lock">🔒</span>' : '<span class="l-go">▶</span>'}</button>`).join('')}</div>` : ''}
      <p class="center muted small">${t('Only your class is shown. A grown-up can change the class from ⚙️.', 'सिर्फ़ तुम्हारी कक्षा दिखती है। कक्षा बड़े ⚙️ से बदल सकते हैं।')}</p>`, { name: 'subject' });
    say(t(`${subName(sid).en}, ${clsName(cls).en}`, `${subName(sid).hi}, ${clsName(cls).hi}`));
    qa('[data-ch]').forEach((el) => { el.onclick = () => { K.sfx.tap(); const ch = SYL.chapters.find((x) => x.id === el.dataset.ch); if (!ch.free && !K.state.full && !K.CONFIG.unlockAll) { lockedTeaser(); return; } chapter(ch, () => subject(sid, cls)); }; });
    qa('[data-l]').forEach((el) => { el.onclick = () => { K.sfx.tap(); const a = byId(el.dataset.l); if (locked(a)) { lockedTeaser(); return; } K.nextAction = null; K.run(a, () => subject(sid, cls)); }; });
  }
  function chapter(ch, back) {
    const c = K.child(); const s = SYL.SUBJECTS[ch.sub];
    const self = () => chapter(ch, back);
    K.render(`${ch.emoji} ${ch.book === false ? t('Practice', 'अभ्यास') : `${t('Chapter', 'पाठ')} ${ch.dno || ch.no}`}`, `
      <div class="ch-hero ${s.c}"><div class="ch-big">${ch.emoji}</div><h2>${esc(tx(ch.title))}</h2>${K.both() && ch.title.hi !== ch.title.en ? `<div class="subline">${esc(ch.title.hi)}</div>` : ''}</div>
      <div class="acts">${ch.acts.map((a, k) => `<button class="act-btn ${c.counts[a.id] ? 'ok' : ''}" data-a="${k}"><span class="a-num">${c.counts[a.id] ? '⭐' : k + 1}</span><span class="a-emo">${typeEmoji(a.type)}</span><span class="a-text"><b>${esc(tx(a.title))}</b><small>${typeName(a.type)}</small></span><span class="l-go">▶</span></button>`).join('')}</div>
      <button class="btn big green" data-all>▶ ${t('Play the whole chapter', 'पूरा पाठ खेलो')}</button>`, { name: 'chapter', back });
    sayT(ch.title);
    const playFrom = (k) => {
      K.nextAction = k + 1 < ch.acts.length ? () => playFrom(k + 1) : null;
      K.run(ch.acts[k], self);
    };
    qa('[data-a]').forEach((el) => { el.onclick = () => { K.sfx.tap(); playFrom(Number(el.dataset.a)); }; });
    q('[data-all]').onclick = () => { K.sfx.tap(); const first = ch.acts.findIndex((a) => !c.counts[a.id]); playFrom(first >= 0 ? first : 0); };
  }
  function funWorld(id) {
    const w = worldOf(id); const lv = K.level(); const c = K.child();
    // only this child's class; lessons made just for this class come first, shared ones after
    const mine = CUR.filter((a) => a.world === id && a.levels.includes(lv)).sort((x, y) => x.levels.length - y.levels.length);
    const card = (a) => { const n = c.counts[a.id] || 0; return `<button class="lesson ${locked(a) ? 'locked' : ''}" data-l="${a.id}"><span class="l-emo">${n ? '✅' : typeEmoji(a.type)}</span><span class="l-text"><b>${esc(tx(a.title))}</b><small>${typeName(a.type)}${n ? ` · ${t('played', 'खेला')} ${n}×` : ''}</small></span>${locked(a) ? '<span class="l-lock">🔒</span>' : '<span class="l-go">▶</span>'}</button>`; };
    K.render(`${w.emo} ${tx(w.name)}`, `
      <div class="lvl-chip">🎒 ${tx(SYL.classLabel(K.cls(c), c.board))} · ${t('chosen for your class', 'तुम्हारी कक्षा के लिए')}</div>
      <div class="lessons">${mine.map(card).join('') || `<p class="center muted">${t('More coming soon!', 'और जल्द आ रहा है!')}</p>`}</div>`, { name: 'world' });
    say(tx(w.name));
    qa('[data-l]').forEach((el) => { el.onclick = () => { K.sfx.tap(); const a = byId(el.dataset.l); if (locked(a)) { lockedTeaser(); return; } K.nextAction = null; K.run(a, () => funWorld(id)); }; });
  }
  K.funWorld = funWorld;
  const TYPE = {
    cards: ['🃏', 'Learn', 'सीखो'], quiz: ['❓', 'Quiz', 'प्रश्नोत्तरी'], trace: ['✍️', 'Write', 'लिखो'], spell: ['🔠', 'Make words', 'शब्द बनाओ'], sentence: ['💬', 'Sentences', 'वाक्य'],
    situation: ['🧭', 'What would you do?', 'तुम क्या करोगे?'], poem: ['🎵', 'Sing & repeat', 'गाओ और दोहराओ'], story: ['📖', 'Story', 'कहानी'], gen: ['🎯', 'Practice', 'अभ्यास'], memory: ['🧠', 'Memory game', 'याददाश्त खेल'],
    draw: ['🖍️', 'Draw', 'चित्र बनाओ'], rangoli: ['🌸', 'Rangoli', 'रंगोली'], sort: ['🧺', 'Sorting game', 'छाँटने का खेल'], order: ['🔢', 'Put in order', 'क्रम से लगाओ'], match: ['🔗', 'Match pairs', 'जोड़ी मिलाओ'],
    feed: ['🍌', 'Feed & count', 'खिलाओ और गिनो'], pop: ['🎈', 'Balloon pop', 'गुब्बारे फोड़ो'], shapes: ['🔺', 'Draw shapes', 'आकार बनाओ'], dots: ['✨', 'Dot to dot', 'बिंदु जोड़ो'], colour: ['🖌️', 'Colouring', 'रंग भरो'],
    mirror: ['🪞', 'Mirror game', 'शीशे का खेल'], tenframe: ['🔟', 'Ten frame', 'दस का खाना'], bundles: ['🥢', 'Build numbers', 'संख्या बनाओ'], clockset: ['🕐', 'Set the clock', 'घड़ी मिलाओ'], scale: ['⚖️', 'Balance', 'तराज़ू'],
    share: ['🍪', 'Share fairly', 'बराबर बाँटो'], fraction: ['🫓', 'Fractions', 'भिन्न'], pictograph: ['📊', 'Make a chart', 'चार्ट बनाओ'], numline: ['🐸', 'Number line', 'संख्या रेखा'], shop: ['🛒', 'Shop game', 'दुकान का खेल'], spot: ['🔍', 'Find it', 'ढूँढो'], facts: ['🖼️', 'Picture facts', 'चित्र से जानो'], vocabday: ['🗣️', 'Word of the day', 'आज का शब्द'], flagbuild: ['🇮🇳', 'Build the flag', 'झंडा बनाओ'],
  };
  const typeEmoji = (ty) => (TYPE[ty] || ['⭐'])[0];
  const typeName = (ty) => (TYPE[ty] ? t(TYPE[ty][1], TYPE[ty][2]) : '');

  function lockedTeaser() {
    say(t('Ask a grown-up to unlock this!', 'इसे खोलने के लिए किसी बड़े से पूछो!'));
    K.modal(`<div class="emo">🔒</div><h2>${t('Full Pack lesson', 'फुल पैक पाठ')}</h2><p>${t('The first two chapters of every subject are free. Ask a grown-up to unlock the whole syllabus.', 'हर विषय के पहले दो पाठ मुफ़्त हैं। पूरा पाठ्यक्रम खोलने के लिए किसी बड़े से पूछो।')}</p>
      <div class="row center"><button class="btn" data-grown>${t('Grown-ups', 'बड़ों के लिए')}</button><button class="btn ghost" data-close>✖</button></div>`, { grown: () => K.parentGate(() => parents('settings')) });
  }
  function classPicker(after) {
    const c = K.child();
    K.modal(`<h2>${t('Board and class', 'बोर्ड और कक्षा')}</h2>
      <div class="row wrap center">${SYL.BOARDS.map((b) => `<button class="seg ${boardOf(c) === b.id ? 'on' : ''}" data-b="${b.id}">${tx(b.name)}</button>`).join('')}</div>
      <p class="small">${t('Pick the class your child studies in. Pre-primary is the same for every board.', 'जिस कक्षा में बच्चा पढ़ता है, वह चुनें। प्री-प्राइमरी सभी बोर्ड के लिए एक जैसा है।')}</p>
      <div class="who">${SYL.CLASSES.map((x) => `<button class="who-btn ${K.cls(c) === x.id ? 'on' : ''}" data-c="${x.id}"><span>${{ bal: '🧸', c1: '1️⃣', c2: '2️⃣', c3: '3️⃣', c4: '4️⃣', c5: '5️⃣' }[x.id]}</span>${tx(clsName(x.id))}<small>${tx(x.sub)}</small></button>`).join('')}</div><button class="btn ghost" data-close>✖</button>`);
    document.getElementById('overlay').onclick = (e) => {
      const b = e.target.closest('button'); if (!b) { return; } K.sfx.tap();
      const reset = () => { const d = c.days[K.today()]; if (d && !d.done.length) { d.plan = []; } K.save(); };
      if (b.dataset.b) { c.board = b.dataset.b; reset(); K.closeModal(); classPicker(after); return; }
      if (b.dataset.c) { c.cls = b.dataset.c; reset(); K.closeModal(); after(); }
      if (b.hasAttribute('data-close')) { K.closeModal(); after(); }
    };
  }

  // ---------------------------------------------------------------- STICKERS & GALLERY
  function stickers() {
    const c = K.child();
    K.render(t('My stickers', 'मेरे स्टिकर'), `
      <p class="center muted">${t('Every 10 stars wins a new sticker!', 'हर 10 सितारों पर एक नया स्टिकर!')} (${c.stickers.length}/${K.STICKERS.length})</p>
      <div class="sticker-grid">${K.STICKERS.map((s) => (c.stickers.includes(s) ? `<button class="sticker" data-s>${s}</button>` : '<div class="sticker empty">?</div>')).join('')}</div>`, { name: 'stickers' });
    qa('[data-s]').forEach((el) => { el.onclick = () => { K.sfx.pop(); el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); }; });
  }
  function gallery() {
    const items = K.state.gallery.filter((g) => g.child === K.state.current);
    K.render(t('My art gallery', 'मेरी आर्ट गैलरी'), items.length
      ? `<div class="gallery">${items.map((g, k) => `<button class="art" data-g="${k}"><img src="${g.img}" alt=""><span>${esc(g.title)}</span></button>`).join('')}</div>`
      : `<div class="empty-state"><div class="emo">🎨</div><p>${t('Your drawings will appear here.', 'तुम्हारी ड्रॉइंग यहाँ दिखेंगी।')}</p><button class="btn" data-create>🎨 ${t('Draw & Colour', 'ड्रॉ और रंग')}</button></div>`, { name: 'gallery' });
    qa('[data-g]').forEach((el) => { el.onclick = () => { const g = items[Number(el.dataset.g)]; K.modal(`<img src="${g.img}" style="width:100%;border-radius:18px;background:#fff"><p style="margin-top:10px">${esc(g.title)} · ${g.day}</p><button class="btn" data-close>OK</button>`); }; });
    const cr = q('[data-create]'); if (cr) { cr.onclick = () => funWorld('creative'); }
  }

  // ---------------------------------------------------------------- ONBOARDING
  function welcome() {
    K.current = 'welcome'; K.rid = (K.rid || 0) + 1;
    document.getElementById('app').innerHTML = `<div class="screen onboarding">
      <div class="mascot big wave">${K.MASCOT}</div>
      <div class="logo-big">खेल खेल में</div><div class="logo-sub">Khel Khel Mein</div>
      <h2>Play. Learn. Grow.<br><span class="hi">खेलो। सीखो। आगे बढ़ो।</span></h2>
      <p class="muted center">CBSE · ICSE · International · Balvatika to Class 5 · ages 3–11<br>बालवाटिका से कक्षा 5 तक · 3–11 साल</p>
      <button class="btn big green" data-go>Let's begin · शुरू करें</button></div>`;
    q('[data-go]').onclick = () => { K.sfx.tap(); K.ac(); brief(0, () => newChildForm(true)); };
  }
  const BRIEF = [
    { emo: '👋', en: ['Welcome, parents!', 'Khel Khel Mein follows the CBSE / NCERT, ICSE or International (Cambridge-style) syllabus from pre-primary to Class 3, in English and Hindi. Golu the elephant teaches every lesson with games, drawing, songs and stories.'], hi: ['अभिभावकों का स्वागत है!', 'खेल खेल में प्री-प्राइमरी से कक्षा 3 तक CBSE / NCERT, ICSE या इंटरनेशनल (कैम्ब्रिज जैसा) पाठ्यक्रम पर आधारित है – अंग्रेज़ी और हिंदी दोनों में। गोलू हाथी हर पाठ खेल, ड्रॉइंग, गीत और कहानियों से सिखाता है।'] },
    { emo: '📚', en: ['Chapter by chapter', 'Each subject follows the NCERT books: Mridang / Santoor (English), Sarangi / Veena (Hindi), Joyful Mathematics / Maths Mela, and Our Wondrous World. Every chapter has 1–3 hands-on games.'], hi: ['पाठ दर पाठ', 'हर विषय NCERT पुस्तकों के क्रम में है: मृदंग / संतूर (अंग्रेज़ी), सारंगी / वीणा (हिंदी), आनंदमय गणित / गणित मेला, और हमारा अद्भुत संसार। हर पाठ में 1–3 खेल हैं।'] },
    { emo: '🗺️', en: ['A Daily Journey', 'Every day: 6 short activities (about 20 minutes) – language, syllabus maths, Maths Gym or Abacus, My World, a values or safety lesson, and a poem, drawing, puzzle or story. The journey moves forward through the syllabus.'], hi: ['रोज़ की यात्रा', 'हर दिन 6 छोटी गतिविधियाँ (लगभग 20 मिनट) – भाषा, पाठ्यक्रम का गणित, गणित जिम या अबेकस, "मेरी दुनिया", संस्कार या सुरक्षा, और कविता, ड्रॉइंग, पहेली या कहानी। यात्रा पाठ्यक्रम में आगे बढ़ती है।'] },
    { emo: '👨‍👩‍👧', en: ['Your role', 'Sit together for poems and stories when you can. Each evening, open Grown-ups (⚙️) to see what your child learned and a question to talk about together.'], hi: ['आपकी भूमिका', 'कविता और कहानी के समय साथ बैठें। हर शाम बड़ों वाले भाग (⚙️) में देखें कि बच्चे ने क्या सीखा और साथ में बात करने के लिए एक सवाल।'] },
    { emo: '🔒', en: ['Safe by design', 'No ads. No chat. No accounts. The microphone is used only when your child taps 🎤 to say a sentence; voice clips stay on this phone. A daily play-time limit and a grown-ups lock keep screen time healthy.'], hi: ['पूरी तरह सुरक्षित', 'कोई विज्ञापन नहीं। कोई चैट नहीं। कोई अकाउंट नहीं। माइक सिर्फ़ तब चलता है जब बच्चा 🎤 दबाकर वाक्य बोलता है; आवाज़ की रिकॉर्डिंग इसी फ़ोन में रहती है। रोज़ की समय-सीमा और बड़ों का लॉक स्क्रीन टाइम संतुलित रखते हैं।'] },
  ];
  function brief(i, onDone, back) {
    const b = BRIEF[i];
    const html = `<div class="screen onboarding">
      <div class="brief-emo">${b.emo}</div>
      <h2>${esc(b.en[0])}<br><span class="hi">${esc(b.hi[0])}</span></h2>
      <p>${esc(b.en[1])}</p><p class="hi-p">${esc(b.hi[1])}</p>
      <div class="dots">${BRIEF.map((_, k) => `<span class="${k === i ? 'on' : k < i ? 'done' : ''}"></span>`).join('')}</div>
      <div class="nav">${i > 0 ? '<button class="round" data-prev>◀️</button>' : ''}<button class="btn green" data-next>${i < BRIEF.length - 1 ? 'Next · आगे ▶' : 'Got it · समझ गए ✔'}</button></div></div>`;
    if (back) { K.render(t('How it works', 'यह कैसे काम करता है'), html, { name: 'brief', back }); } else { K.current = 'brief'; document.getElementById('app').innerHTML = html; }
    q('[data-next]').onclick = () => { K.sfx.tap(); if (i < BRIEF.length - 1) { brief(i + 1, onDone, back); } else { K.state.seenBrief = true; K.save(); onDone(); } };
    const p = q('[data-prev]'); if (p) { p.onclick = () => { K.sfx.tap(); brief(i - 1, onDone, back); }; }
  }

  function newChildForm(first, edit) {
    const c = edit || { name: '', age: 6, medium: 'both', avatar: pick(AVATARS) };
    let { age, medium, avatar } = c; let cls = c.cls || SYL.classForAge(age); let board = c.board || 'cbse';
    const clsBtns = () => SYL.CLASSES.map((x) => { const l = SYL.classLabel(x.id, board); return `<button class="seg ${x.id === cls ? 'on' : ''}" data-cls="${x.id}">${l.en} · ${l.hi}</button>`; }).join('');
    const html = `<div class="bar form-bar"><h1>${edit ? 'Edit profile · प्रोफ़ाइल बदलें' : "Your child's profile · बच्चे की प्रोफ़ाइल"}</h1></div>
      <div class="screen form">
      <section class="fbox"><label>👤 Name · नाम</label><input data-name maxlength="20" value="${esc(c.name)}" placeholder="e.g. Aarav / आरव" autocomplete="off" enterkeyhint="done"></section>
      <section class="fbox"><label>🎂 Age · उम्र</label><div class="row wrap">${[3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => `<button class="seg ${a === age ? 'on' : ''}" data-age="${a}">${a}</button>`).join('')}</div></section>
      <section class="fbox"><label>🏫 School board · स्कूल बोर्ड</label><div class="row wrap">${SYL.BOARDS.map((b) => `<button class="seg ${b.id === board ? 'on' : ''}" data-board="${b.id}">${b.name.en}</button>`).join('')}</div></section>
      <section class="fbox"><label>📚 Class · कक्षा</label><div class="row wrap" data-clsrow>${clsBtns()}</div></section>
      <section class="fbox"><label>🗣️ Learning medium · सीखने का माध्यम</label><div class="row wrap">
        <button class="seg ${medium === 'en' ? 'on' : ''}" data-med="en">English</button><button class="seg ${medium === 'hi' ? 'on' : ''}" data-med="hi">हिंदी</button><button class="seg ${medium === 'both' ? 'on' : ''}" data-med="both">Both · दोनों</button></div>
        <p class="muted small">Both: English with Hindi meanings everywhere. Every medium includes both English and Hindi lessons.<br>दोनों: हर जगह अंग्रेज़ी के साथ हिंदी अर्थ। हर माध्यम में अंग्रेज़ी और हिंदी दोनों के पाठ हैं।</p></section>
      <section class="fbox"><label>😊 Avatar · चेहरा</label><div class="ava-grid">${AVATARS.map((a) => `<button class="ava ${a === avatar ? 'on' : ''}" data-ava="${a}">${a}</button>`).join('')}</div></section>
      </div>
      <div class="form-foot">${!first ? '<button class="btn ghost" data-cancel>Cancel · रद्द करें</button>' : ''}<button class="btn big green" data-save>${edit ? 'Save · सेव करें' : "Let's play · चलो खेलें"} ▶</button></div>`;
    K.current = 'form'; K.rid = (K.rid || 0) + 1; document.getElementById('app').innerHTML = html;
    const bindCls = () => qa('[data-cls]').forEach((el) => { el.onclick = () => { K.sfx.tap(); cls = el.dataset.cls; qa('[data-cls]').forEach((x) => x.classList.toggle('on', x === el)); }; });
    bindCls();
    { const nm = q('[data-name]'); const show = () => setTimeout(() => { try { nm.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch { /* old WebView */ } }, 350); nm.onfocus = show; nm.onclick = show; }
    qa('[data-age]').forEach((el) => { el.onclick = () => { K.sfx.tap(); age = Number(el.dataset.age); cls = SYL.classForAge(age); qa('[data-age]').forEach((x) => x.classList.toggle('on', x === el)); q('[data-clsrow]').innerHTML = clsBtns(); bindCls(); }; });
    qa('[data-board]').forEach((el) => { el.onclick = () => { K.sfx.tap(); board = el.dataset.board; qa('[data-board]').forEach((x) => x.classList.toggle('on', x === el)); q('[data-clsrow]').innerHTML = clsBtns(); bindCls(); }; });
    qa('[data-med]').forEach((el) => { el.onclick = () => { K.sfx.tap(); medium = el.dataset.med; qa('[data-med]').forEach((x) => x.classList.toggle('on', x === el)); }; });
    qa('[data-ava]').forEach((el) => { el.onclick = () => { K.sfx.tap(); avatar = el.dataset.ava; qa('[data-ava]').forEach((x) => x.classList.toggle('on', x === el)); }; });
    q('[data-save]').onclick = () => {
      const name = q('[data-name]').value.trim();
      if (!name) { q('[data-name]').focus(); q('[data-name]').classList.add('wrong'); return; }
      K.sfx.good();
      if (edit) { Object.assign(edit, { name, age, medium, avatar, cls, board }); const d = edit.days[K.today()]; if (d && !d.done.length) { d.plan = []; } K.save(); parents('settings'); return; }
      const p = K.newChild(name, age, medium, avatar); p.cls = cls; p.board = board; K.save(); K.greeted = false; home();
    };
    const cc = q('[data-cancel]'); if (cc) { cc.onclick = () => { K.sfx.tap(); edit ? parents('settings') : home(); }; }
  }

  function switchChild() {
    const ps = K.state.profiles;
    K.modal(`<h2>${t("Who's playing?", 'कौन खेल रहा है?')}</h2><div class="who">${ps.map((p) => `<button class="who-btn ${p.id === K.state.current ? 'on' : ''}" data-p="${p.id}"><span>${p.avatar}</span>${esc(p.name)}</button>`).join('')}
      <button class="who-btn" data-addp><span>➕</span>${t('Add child', 'बच्चा जोड़ें')}</button></div><button class="btn ghost" data-close>✖</button>`);
    document.getElementById('overlay').onclick = (e) => {
      const b = e.target.closest('button'); if (!b) { return; }
      K.sfx.tap();
      if (b.dataset.p) { K.state.current = b.dataset.p; K.save(); K.closeModal(); K.greeted = false; home(); }
      if (b.hasAttribute('data-addp')) { K.closeModal(); K.parentGate(() => newChildForm(false)); }
      if (b.hasAttribute('data-close')) { K.closeModal(); }
    };
  }

  // ---------------------------------------------------------------- PARENTS
  async function parents(tab = 'today') {
    const c = K.child(); const price = (await K.Store.price()) || K.CONFIG.priceFallback; const cl = clsInfo(c);
    const tabs = [['today', t('Today', 'आज')], ['diary', t('Diary', 'डायरी')], ['progress', t('Progress', 'प्रगति')], ['settings', t('Settings', 'सेटिंग')], ['about', t('How it works', 'जानकारी')]];
    const seg = (key, val, label) => `<button class="seg ${K.state[key] === val ? 'on' : ''}" data-set="${key}" data-val="${val}">${label}</button>`;
    let body = '';
    if (tab === 'today') {
      const d = c.days[K.today()] || { plan: [], done: [], stars: 0, skills: {} };
      const done = d.done.map(byId).filter(Boolean);
      const talks = done.filter((a) => a.talk || a.remember || a.moral).slice(0, 4);
      body = `
        <div class="panel"><h3>${c.avatar} ${esc(c.name)} · ${t('today', 'आज')}</h3>
          <p>${t(`${done.length} activities · ⭐ ${d.stars} stars · 🔥 ${c.streak || 0}-day streak · ${Math.round(K.todayMs() / 60000)} min played`, `${done.length} गतिविधियाँ · ⭐ ${d.stars} सितारे · 🔥 ${c.streak || 0} दिन लगातार · ${Math.round(K.todayMs() / 60000)} मिनट खेला`)}</p>
          ${done.length ? `<ul class="report">${done.map((a) => { const ch = a.chapter && SYL.chapters.find((x) => x.id === a.chapter); return `<li>${worldOf(a.world).emo} <b>${esc(tx(a.title))}</b> <span class="muted">· ${ch ? `${tx(SYL.SUBJECTS[ch.sub].name)}, ${t('chapter', 'पाठ')} ${ch.no}: ${esc(tx(ch.title))}` : tx(worldOf(a.world).name)}</span></li>`; }).join('')}</ul>` : `<p>${t('Nothing yet today. The Daily Journey is waiting!', 'आज अभी कुछ नहीं। आज की यात्रा इंतज़ार कर रही है!')}</p>`}
          ${Object.keys(d.skills).length ? `<p><b>${t('Skills practised:', 'अभ्यास किए गए कौशल:')}</b> ${Object.keys(d.skills).map(skillName).join(', ')}</p>` : ''}</div>
        ${talks.length ? `<div class="panel"><h3>💬 ${t('Talk about it tonight', 'आज रात इस पर बात करें')}</h3><ul class="report">${talks.map((a) => `<li>${esc(tx(a.talk || a.remember || a.moral))}</li>`).join('')}</ul></div>` : ''}`;
    } else if (tab === 'diary') {
      body = K.Diary ? K.Diary.report(c) : '';
    } else if (tab === 'progress') {
      const sk = Object.entries(c.skills).sort((a, b) => b[1] - a[1]); const max = Math.max(1, ...sk.map(([, v]) => v));
      const last7 = Array.from({ length: 7 }, (_, k) => { const dt = new Date(); dt.setDate(dt.getDate() - (6 - k)); const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`; return [dt.toLocaleDateString(K.ui() === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'short' }), (c.days[key] || { done: [] }).done.length]; });
      const mx = Math.max(1, ...last7.map(([, v]) => v));
      body = `
        <div class="panel"><h3>📚 ${t('Syllabus progress', 'पाठ्यक्रम प्रगति')} · ${tx(clsName(cl.id))} · ${tx(SYL.BOARDS.find((b) => b.id === boardOf(c)).name)}</h3>${subjectsOf(c).map((sid) => { const chs = chaptersOf(cl.id, sid); const acts = chs.flatMap((x) => x.acts); const dn = acts.filter((a) => c.counts[a.id]).length; const chFull = chs.filter((x) => chDone(x, c) === x.acts.length).length; return `<div class="skill"><span>${SYL.SUBJECTS[sid].emo} ${tx(subName(sid))}</span><div class="bar-bg"><span style="width:${acts.length ? (dn / acts.length) * 100 : 0}%"></span></div><b>${chFull}/${chs.length}</b></div>`; }).join('')}
          <p class="small">${t('Numbers show chapters fully completed. The bar shows games played.', 'संख्या पूरे किए गए पाठ दिखाती है। पट्टी खेले गए खेल दिखाती है।')}</p></div>
        <div class="panel"><h3>📅 ${t('Last 7 days', 'पिछले 7 दिन')}</h3><div class="week">${last7.map(([dname, v]) => `<div class="wk"><div class="wk-bar"><span style="height:${(v / mx) * 100}%"></span></div><small>${dname}</small><b>${v}</b></div>`).join('')}</div></div>
        <div class="panel"><h3>🌱 ${t('Skills growing', 'बढ़ते कौशल')}</h3>${sk.length ? sk.map(([s, v]) => `<div class="skill"><span>${skillName(s)}</span><div class="bar-bg"><span style="width:${(v / max) * 100}%"></span></div><b>${v}</b></div>`).join('') : `<p>${t('Play a few activities to see skills here.', 'कुछ गतिविधियाँ खेलें, फिर यहाँ कौशल दिखेंगे।')}</p>`}</div>`;
    } else if (tab === 'settings') {
      body = `
        ${K.CONFIG.unlockAll ? `<div class="panel"><h3>🧪 ${t('Testing mode: everything is unlocked', 'टेस्टिंग मोड: सब कुछ खुला है')}</h3><p class="small">${t('Set unlockAll: false in www/js/core.js before publishing.', 'प्रकाशित करने से पहले www/js/core.js में unlockAll: false करें।')}</p></div>` : ''}<div class="panel">${K.state.full ? `<h3>✅ ${t('Full Pack unlocked', 'फुल पैक अनलॉक है')}</h3><p>${t('Thank you for supporting us!', 'साथ देने के लिए धन्यवाद!')}</p>`
    : `<h3>⭐ ${t('Unlock the full syllabus', 'पूरा पाठ्यक्रम अनलॉक करें')}</h3><div class="price">${esc(price)} <small>${t('one-time · all children · no ads', 'एक बार · सभी बच्चे · कोई विज्ञापन नहीं')}</small></div>
          <ul class="perks"><li>${t(`All ${SYL.chapters.length} chapters for CBSE, ICSE and International, Balvatika to Class 5`, `CBSE, ICSE और इंटरनेशनल के बालवाटिका से कक्षा 5 तक के सभी ${SYL.chapters.length} पाठ`)}</li><li>${t(`${CUR.length} games: drawing, maths, stories, poems, values`, `${CUR.length} खेल: ड्रॉइंग, गणित, कहानियाँ, कविताएँ, संस्कार`)}</li><li>${t('All new lessons we add, free', 'आगे जुड़ने वाले सभी पाठ मुफ़्त')}</li></ul>
          <div class="row"><button class="btn" data-buy>${t('Unlock', 'अनलॉक करें')} – ${esc(price)}</button><button class="btn ghost" data-restore>${t('Restore', 'रीस्टोर')}</button></div>`}</div>
        <div class="panel"><h3>👧 ${t('Children', 'बच्चे')}</h3>${K.state.profiles.map((p) => `<div class="child-row"><span>${p.avatar} <b>${esc(p.name)}</b> · ${p.age} ${t('yrs', 'साल')} · ${tx(SYL.classLabel(K.cls(p), p.board || 'cbse'))} (${(p.board || 'cbse').toUpperCase()}) · ${{ en: 'English', hi: 'हिंदी', both: 'Both' }[p.medium]}</span><button class="seg" data-edit="${p.id}">${t('Edit', 'बदलें')}</button></div>`).join('')}<button class="btn ghost" data-add style="margin-top:8px">➕ ${t('Add child', 'बच्चा जोड़ें')}</button></div>
        <div class="panel"><h3>🔊 ${t('Sound & voice', 'आवाज़')}</h3><div class="row wrap">${seg('sound', true, t('Sound on', 'आवाज़ चालू'))}${seg('sound', false, t('Sound off', 'आवाज़ बंद'))}</div>
          <p style="margin-top:10px">${t('Voice speed', 'बोलने की गति')}</p><div class="row wrap">${seg('speed', 0.85, t('Slow', 'धीमी'))}${seg('speed', 1, t('Normal', 'सामान्य'))}${seg('speed', 1.15, t('Fast', 'तेज़'))}</div>
          <div class="row wrap" style="margin-top:10px"><button class="btn ghost" data-test>🔊 ${t('Test voice', 'आवाज़ सुनें')}</button><button class="btn ghost" data-vcheck>🩺 ${t('Voice check', 'आवाज़ जाँच')}</button></div>
          <p class="small">${window.VO ? t(`Studio voice installed (${Object.keys(window.VO).length} clips).`, `स्टूडियो आवाज़ लगी है (${Object.keys(window.VO).length} क्लिप)।`) : t('Using the phone’s voice. For the best Hindi, install Google’s Hindi voice: Settings → Text-to-speech → Google → Install voice data → Hindi.', 'फ़ोन की आवाज़ इस्तेमाल हो रही है। अच्छी हिंदी के लिए: सेटिंग्स → टेक्स्ट-टू-स्पीच → Google → वॉइस डेटा → हिंदी इंस्टॉल करें।')}</p></div>
        <div class="panel"><h3>⏰ ${t('Daily play time', 'रोज़ खेलने का समय')}</h3><div class="row wrap">${seg('limit', 0, t('No limit', 'कोई सीमा नहीं'))}${seg('limit', 20, '20 min')}${seg('limit', 30, '30 min')}${seg('limit', 45, '45 min')}${seg('limit', 60, '60 min')}</div></div>
        <div class="panel"><h3>🔒 ${t('Privacy', 'गोपनीयता')}</h3><p>${t('No ads. No accounts. Progress stays on this device. The microphone is used only when your child taps 🎤 in Word of the Day; the phone’s speech service (which may be Google’s online service) turns the sentence into text. Voice clips saved for you never leave this device.', 'कोई विज्ञापन नहीं। कोई अकाउंट नहीं। प्रगति इसी डिवाइस में रहती है। माइक सिर्फ़ तब चलता है जब बच्चा “आज का शब्द” में 🎤 दबाता है; फ़ोन की स्पीच सेवा (जो Google की ऑनलाइन सेवा हो सकती है) वाक्य को लिखित में बदलती है। आपके लिए सहेजी आवाज़ इसी डिवाइस में रहती है।')}</p>
          <div class="row wrap"><button class="btn ghost" data-privacy>${t('Privacy policy', 'गोपनीयता नीति')}</button><button class="btn ghost" data-reset>${t('Reset this child’s progress', 'इस बच्चे की प्रगति रीसेट करें')}</button></div><p class="small">Khel Khel Mein v${K.CONFIG.version} · ${t('Fonts: Baloo 2 (SIL OFL)', 'फ़ॉन्ट: Baloo 2 (SIL OFL)')}</p></div>`;
    } else {
      body = `<div class="panel">${BRIEF.map((b) => `<h3>${b.emo} ${esc(t(b.en[0], b.hi[0]))}</h3><p>${esc(t(b.en[1], b.hi[1]))}</p>`).join('')}</div>
        <div class="panel"><h3>📘 ${t('Syllabus map', 'पाठ्यक्रम')}</h3>${SYL.BOARDS.map((b) => `<p><b>${tx(b.name)}</b>: ${SYL.CLASSES.map((x) => `${tx(SYL.classLabel(x.id, b.id))} – ${SYL.subjectsFor(x.id, b.id).map((sid) => SYL.chaptersFor(x.id, sid, b.id).length).reduce((m, n) => m + n, 0)}`).join(' · ')} ${t('chapters', 'पाठ')}</p>`).join('')}
          <p class="small">${t('Chapters follow the themes and order of the NCERT books. All lesson text, stories and poems are written by us (or are traditional public-domain rhymes); no textbook text is copied.', 'पाठ NCERT पुस्तकों के विषयों और क्रम पर आधारित हैं। सारी सामग्री, कहानियाँ और कविताएँ हमारी लिखी हैं (या पारंपरिक); किसी पाठ्यपुस्तक से कुछ कॉपी नहीं किया गया।')}</p></div>`;
    }
    K.render(t('Grown-ups', 'बड़ों के लिए'), `<div class="tabs">${tabs.map(([k, l]) => `<button class="tab ${k === tab ? 'on' : ''}" data-tab="${k}">${l}</button>`).join('')}</div>${body}`, { name: 'parents' });
    qa('[data-tab]').forEach((el) => { el.onclick = () => { K.sfx.tap(); parents(el.dataset.tab); }; });
    if (tab === 'diary' && K.Diary) { K.Diary.bindReport(c, () => parents('diary')); }
    qa('[data-set]').forEach((el) => {
      el.onclick = () => {
        K.sfx.tap(); const k = el.dataset.set; let v = el.dataset.val;
        v = k === 'sound' ? v === 'true' : Number(v);
        K.state[k] = v; K.save(); parents('settings');
        if (k === 'speed') { say(t('This is how I will speak.', 'मैं ऐसे बोलूँगा।')); }
      };
    });
    const vc = q('[data-vcheck]'); if (vc) { vc.onclick = () => { K.sfx.tap(); voiceCheck(); }; }
    const tst = q('[data-test]'); if (tst) { tst.onclick = async () => { await say('नमस्ते! मैं गोलू हूँ। क से कबूतर, ख से खरगोश।'); say('Hello! I am Golu. A for apple, B for ball.', { lang: 'en-IN' }); }; }
    qa('[data-edit]').forEach((el) => { el.onclick = () => { K.sfx.tap(); newChildForm(false, K.state.profiles.find((p) => p.id === el.dataset.edit)); }; });
    const add = q('[data-add]'); if (add) { add.onclick = () => { K.sfx.tap(); newChildForm(false); }; }
    const buy = q('[data-buy]');
    if (buy) {
      buy.onclick = async () => {
        K.sfx.tap(); buy.disabled = true; buy.textContent = '…';
        const r = await K.Store.buy(); if (r.ok) { K.confetti(); K.sfx.win(); }
        K.modal(`<div class="emo">${r.ok ? '🎉' : 'ℹ️'}</div><h2>${r.ok ? t('Unlocked!', 'अनलॉक हो गया!') : t('Not completed', 'पूरा नहीं हुआ')}</h2><p>${esc(r.message)}</p><button class="btn" data-close>OK</button>`);
        parents('settings');
      };
      q('[data-restore]').onclick = async () => { K.sfx.tap(); const r = await K.Store.restore(); K.modal(`<div class="emo">${r.ok ? '✅' : 'ℹ️'}</div><p>${esc(r.message)}</p><button class="btn" data-close>OK</button>`); parents('settings'); };
    }
    const pr = q('[data-privacy]'); if (pr) { pr.onclick = () => { const b = K.plug('Browser'); if (b) { b.open({ url: K.CONFIG.privacyUrl }); } else { window.open(K.CONFIG.privacyUrl, '_blank'); } }; }
    const rs = q('[data-reset]');
    if (rs) {
      rs.onclick = () => K.modal(`<div class="emo">⚠️</div><h2>${t('Reset progress?', 'प्रगति रीसेट करें?')}</h2><p>${t('Stars, stickers, streak and history for this child will be cleared.', 'इस बच्चे के सितारे, स्टिकर, लगातार दिन और इतिहास मिट जाएँगे।')}</p>
        <div class="row center"><button class="btn orange" data-yes>${t('Reset', 'रीसेट')}</button><button class="btn ghost" data-close>${t('Cancel', 'रद्द करें')}</button></div>`,
      { yes: () => { Object.assign(c, { stars: 0, stickers: [], streak: 0, lastDay: '', days: {}, counts: {}, skills: {} }); K.save(); parents('settings'); } });
    }
  }
  K.parents = parents;

  /** Voice diagnostics: what this browser/phone can do, with test buttons and clear advice. */
  function voiceCheck() {
    const has = !!window.speechSynthesis; const native = !!K.plug('TextToSpeech'); const vo = window.VO ? Object.keys(window.VO).length : 0;
    const vs = has ? speechSynthesis.getVoices() : [];
    const en = vs.filter((v) => /^en/i.test(v.lang)); const hi = vs.filter((v) => /^hi/i.test(v.lang));
    const inApp = /; wv\)|FBAN|FBAV|Instagram|Line\/|WhatsApp|Claude/i.test(navigator.userAgent);
    const row = (ok, txt) => `<li>${ok ? '✅' : '❌'} ${txt}</li>`;
    const advice = [];
    if (!has && !native && !vo) { advice.push(t('This viewer has no text-to-speech. Open the link in Chrome (Android) or Safari (iPhone) directly – not inside another app.', 'इस व्यूअर में आवाज़ की सुविधा नहीं है। लिंक को सीधे Chrome (Android) या Safari (iPhone) में खोलें – किसी दूसरे ऐप के अंदर नहीं।')); }
    if (has && !vs.length) { advice.push(t('No voices found yet. On Android: Settings → System → Languages → Text-to-speech → choose "Speech Services by Google" and install English (India) and Hindi.', 'अभी कोई आवाज़ नहीं मिली। Android पर: सेटिंग्स → सिस्टम → भाषाएँ → टेक्स्ट-टू-स्पीच → "Speech Services by Google" चुनें और English (India) व हिंदी इंस्टॉल करें।')); }
    if (has && vs.length && !hi.length) { advice.push(t('No Hindi voice on this phone, so Hindi lines are silent or read in English. Install the Hindi voice in Text-to-speech settings.', 'इस फ़ोन में हिंदी आवाज़ नहीं है, इसलिए हिंदी पंक्तियाँ चुप रहती हैं। टेक्स्ट-टू-स्पीच सेटिंग में हिंदी आवाज़ इंस्टॉल करें।')); }
    if (inApp) { advice.push(t('You seem to be inside another app’s browser. If there is no sound, use "Open in Chrome/Safari".', 'आप किसी दूसरे ऐप के ब्राउज़र में हैं। आवाज़ न आए तो "Chrome/Safari में खोलें" चुनें।')); }
    if (!K.state.sound) { advice.push(t('Sound is switched off in Settings.', 'सेटिंग में आवाज़ बंद है।')); }
    advice.push(t('Also check: phone not on silent, media volume up.', 'यह भी देखें: फ़ोन साइलेंट पर न हो, मीडिया वॉल्यूम ऊपर हो।'));
    K.modal(`<h2>🩺 ${t('Voice check', 'आवाज़ जाँच')}</h2><ul class="report" style="text-align:left">
      ${row(K.state.sound, t('Sound switched on', 'आवाज़ चालू'))}
      ${row(vo > 0, t(`Studio voice clips: ${vo}`, `स्टूडियो आवाज़ क्लिप: ${vo}`))}
      ${row(native, t('Phone voice (app)', 'फ़ोन की आवाज़ (ऐप)'))}
      ${row(has, t('Browser voice (speech)', 'ब्राउज़र की आवाज़'))}
      ${row(en.length > 0, t(`English voices: ${en.length}`, `अंग्रेज़ी आवाज़ें: ${en.length}`))}
      ${row(hi.length > 0, t(`Hindi voices: ${hi.length}`, `हिंदी आवाज़ें: ${hi.length}`))}
      <li>🗣️ ${t('Last voice used', 'आखिरी आवाज़')}: ${esc(K.voiceDiag.lastVoice || '–')}</li>
      <li>⚠️ ${t('Last error', 'आखिरी त्रुटि')}: ${esc(K.voiceDiag.lastError || t('none', 'कोई नहीं'))} · ${t('started', 'शुरू')} ${K.voiceDiag.started}</li></ul>
      <div class="row center wrap"><button class="btn" data-ten>🔊 English</button><button class="btn orange" data-thi>🔊 हिंदी</button></div>
      <p class="small" data-vres></p>
      <div class="vpick"><h3>👩‍🏫 ${t('Choose the teacher’s voice', 'टीचर की आवाज़ चुनें')}</h3>
        <label>English</label><div class="row"><select data-vp="en"><option value="">${t('Automatic (best female voice)', 'अपने-आप (सबसे अच्छी महिला आवाज़)')}</option></select><button class="round small" data-vt="en">▶</button></div>
        <label>हिंदी</label><div class="row"><select data-vp="hi"><option value="">${t('Automatic (best female voice)', 'अपने-आप (सबसे अच्छी महिला आवाज़)')}</option></select><button class="round small" data-vt="hi">▶</button></div>
        <p class="small">${t('👩 = female voice. Tap ▶ to listen, then keep the one that sounds like a kind teacher.', '👩 = महिला आवाज़। ▶ दबाकर सुनें और जो आवाज़ प्यारी टीचर जैसी लगे, वही रखें।')}</p></div>
      <div class="explain" style="text-align:left">${advice.map((a) => `• ${esc(a)}`).join('<br>')}</div>
      <button class="btn ghost" data-close style="margin-top:10px">OK</button>`);
    const res = (txt) => { const el = document.querySelector('[data-vres]'); if (el) { el.textContent = txt; } };
    const test = async (lang, text) => { const before = K.voiceDiag.started; res(t('Speaking…', 'बोल रहा है…')); await say(text, { lang }); res(K.voiceDiag.started > before || K.plug('TextToSpeech') || vo ? t('✅ Did you hear it? If not, check volume and silent mode.', '✅ क्या आपने सुना? न सुना हो तो वॉल्यूम और साइलेंट मोड देखें।') : t(`❌ The voice did not start (${K.voiceDiag.lastError || 'no response'}). See the tips below.`, `❌ आवाज़ शुरू नहीं हुई (${K.voiceDiag.lastError || 'कोई जवाब नहीं'})। नीचे के सुझाव देखें।`)); };
    const LINES = { en: 'Hello children! Today we will learn something new. Are you ready?', hi: 'नमस्ते बच्चों! आज हम कुछ नया सीखेंगे। क्या आप तैयार हैं?' };
    ['en', 'hi'].forEach(async (lg) => {
      const sel = document.querySelector(`[data-vp="${lg}"]`); if (!sel) { return; }
      const list = await K.voiceList(lg === 'en' ? 'en-IN' : 'hi-IN');
      list.forEach((v) => { const o = document.createElement('option'); o.value = v.name; o.textContent = v.label; sel.appendChild(o); });
      sel.value = (K.state.voicePick || {})[lg] || '';
      sel.onchange = () => { K.state.voicePick = { ...(K.state.voicePick || {}), [lg]: sel.value }; K.save(); test(lg === 'en' ? 'en-IN' : 'hi-IN', LINES[lg]); };
      document.querySelector(`[data-vt="${lg}"]`).onclick = () => test(lg === 'en' ? 'en-IN' : 'hi-IN', LINES[lg]);
    });
    document.querySelector('[data-ten]').onclick = () => test('en-IN', 'Hello! I am Golu. Can you hear me?');
    document.querySelector('[data-thi]').onclick = () => test('hi-IN', 'नमस्ते! मैं गोलू हूँ। क्या आप मुझे सुन सकते हैं?');
  }
  K.voiceCheck = voiceCheck;

  // ---------------------------------------------------------------- START
  const App = K.plug('App');
  if (App) {
    App.addListener('backButton', () => {
      if (K.modalOpen() && !K.breakShown()) { K.closeModal(); return; }
      if (K.current === 'home' || K.current === 'welcome') { App.exitApp(); return; }
      const b = document.querySelector('[data-back]'); if (b) { b.click(); } else { home(); }
    });
  }
  if (!!window.speechSynthesis) { speechSynthesis.getVoices(); }
  document.addEventListener('pointerdown', () => K.ac(), { once: true });
  K.Store.init().then(() => { if (K.current === 'home') { home(); } });
  home();
})();
