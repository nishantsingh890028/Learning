/* Class 4–5 content helpers. Topics are written once and placed into each board's chapter list (senior/boards.js),
   so CBSE, ICSE and International children each get their own course order and names. */
(() => {
  'use strict';
  const T = (en, hi) => ({ en, hi: hi ?? en });
  const two = (a) => (Array.isArray(a) ? T(a[0], a[1]) : typeof a === 'string' ? T(a, a) : a);
  const STRIP = /^[\^@~<+\-]+/;
  const L = window.SRL = { T, two, topics: {} };
  /** quiz question: answer is the first option (the engine shuffles) */
  L.Q = (emoji, q, right, wrongs, ex) => ({ emoji, q: two(q), options: [right, ...wrongs].map(two), answer: 0, explain: ex ? two(ex) : undefined });
  /** learn card: pic = emoji | 'dia:<name>' | {bg, actors} scene */
  L.I = (pic, h, x) => ({ ...(typeof pic === 'string' ? (pic.startsWith('dia:') ? { dia: pic.slice(4) } : { emoji: pic }) : { scene: pic, emoji: pic.actors.split(' ')[0].replace(STRIP, '') }), h: two(h), x: two(x) });
  L.FA = (title, emoji, items, qs, extra = {}) => ({ type: 'facts', title: two(title), emoji, items, questions: qs, count: Math.min(6, qs ? qs.length : 0), skills: ['knowledge', 'listening'], ...extra });
  L.QZ = (title, qs, count = 6, extra = {}) => ({ type: 'quiz', title: two(title), questions: qs, count: Math.min(count, qs.length), ...extra });
  L.MT = (title, pairs, extra = {}) => ({ type: 'match', title: two(title), pairs: pairs.map(([a, b]) => [two(a), two(b)]), ...extra });
  L.SO = (title, bins, items, extra = {}) => ({ type: 'sort', title: two(title), bins: bins.map(([id, emoji, en, hi]) => ({ id, emoji, label: T(en, hi) })), items: items.map(([e, bin, en, hi]) => ({ e, bin, name: T(en, hi) })), count: Math.min(8, items.length), ...extra });
  L.OR = (title, sets, extra = {}) => ({ type: 'order', title: two(title), sets: sets.map(([p, items, done]) => ({ prompt: two(p), items: items.map(([e, en, hi]) => ({ e, label: T(en, hi) })), done: done ? two(done) : undefined })), ...extra });
  L.GN = (gen, title, level, extra = {}) => ({ type: 'gen', gen, title: two(title), rounds: 8, level, ...extra });
  L.PO = (title, emoji, lines, meaning, credit, extra = {}) => ({ type: 'poem', title: two(title), emoji, tune: 'gentle', lines, meaning: meaning ? two(meaning) : undefined, credit, skills: ['music', 'speaking', 'memory', 'listening'], ...extra });
  /** illustrated story: pages [bg, actors, en, hi] */
  L.ST = (title, emoji, pages, moral, qs, extra = {}) => ({ type: 'story', title: two(title), emoji,
    pages: pages.map(([bg, actors, en, hi]) => ({ emoji: actors.split(' ')[0].replace(STRIP, ''), text: T(en, hi), scene: { bg, actors } })),
    moral: two(moral), remember: two(moral), questions: qs.map(([q, opts, answer]) => ({ q: two(q), options: opts.map(two), answer: answer || 0 })), skills: ['reading', 'listening', 'values'], ...extra });
  L.SI = (title, scenes, remember) => window.SYLB.situ(two(title), scenes, remember);
  /** define a topic: key → {emoji, title, acts} */
  L.topic = (key, emoji, title, acts) => { L.topics[key] = { emoji, title: two(title), acts }; };
})();
