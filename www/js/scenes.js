/* Picture scenes: every story page becomes a little illustrated stage – a backdrop (forest, lake, night, village,
   palace…), scenery props and the characters, gently animated. Pages can describe their scene exactly
   ({ scene: { bg, actors } }) or the scene is worked out from the page emoji and the words in the text. */
(() => {
  'use strict';
  const seg = (s) => {
    s = String(s || '').trim();
    if (!s) { return []; }
    if (s.includes(' ')) { return s.split(/\s+/).filter(Boolean); }
    if (window.Intl && Intl.Segmenter) { return [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(s)].map((x) => x.segment).filter((x) => x.trim()); }
    return Array.from(s);
  };

  // backdrop → sky class, ground class, back props (far), front props (near)
  const BG = {
    meadow: { sky: 'day', ground: 'grass', far: '🌳 · · · 🌳', near: '🌼 · 🌷 · · 🌼', sun: true },
    forest: { sky: 'day', ground: 'grass', far: '🌲 🌳 🌲 🌳 🌲 🌳', near: '🍄 · · 🌿 · 🍄' },
    tree: { sky: 'day', ground: 'grass', bigtree: true, near: '· · 🌿 · 🌼' },
    lake: { sky: 'day', ground: 'grass', water: true, far: '🌳 · · · 🌲', near: '· 🌸 · · 🌸', sun: true },
    river: { sky: 'day', ground: 'grass', water: true, far: '🌳 🌲 · · 🌳 🌲', near: '· · 🪨 ·' },
    sea: { sky: 'day', ground: 'sand', water: 'deep', far: '· · · ⛵', sun: true },
    sky: { sky: 'day', ground: 'none', clouds: true, far: '· ☁️ · · ☁️' , sun: true },
    night: { sky: 'night', ground: 'dark', far: '🌳 · · · 🌲', moon: true },
    village: { sky: 'day', ground: 'earth', far: '🛖 🌳 🏡 · 🌴 🛖', near: '· 🐓 · · 🌾', sun: true },
    home: { sky: 'wall', ground: 'floor', far: '🪟 · · 🖼️ · 🪴', near: '' },
    palace: { sky: 'royal', ground: 'carpet', far: '🏛️ · · · 🏛️', near: '🪔 · · · 🪔', pillars: true },
    court: { sky: 'royal', ground: 'carpet', far: '👑 · · · 🪔', near: '', pillars: true },
    field: { sky: 'day', ground: 'wheat', far: '🌳 · · 🛖 ·', near: '🌾 🌾 · 🌾 🌾', sun: true },
    desert: { sky: 'hot', ground: 'sand', far: '🐪 · · 🌵 ·', near: '🌵 · · ·', sun: true },
    mountain: { sky: 'day', ground: 'grass', far: '🏔️ ⛰️ 🏔️', near: '· 🌲 · 🌲' },
    rain: { sky: 'rain', ground: 'grass', far: '🌳 · · 🌲', near: '· 💧 · 💧', rain: true },
    market: { sky: 'day', ground: 'earth', far: '🏪 ⛺ · 🏪 ⛺', near: '🧺 · · 🍎' },
    school: { sky: 'wall2', ground: 'floor', far: '📚 · 🧑‍🏫 · 🖍️', near: '' },
    road: { sky: 'day', ground: 'road', far: '🌳 · 🏡 · 🌳 · 🏡', near: '', sun: true },
    snow: { sky: 'winter', ground: 'snow', far: '🏔️ · 🌲 · 🏔️', near: '· ❄️ · ❄️' },
    space: { sky: 'space', ground: 'none', far: '✨ · 🪐 · ✨', stars: true },
    city: { sky: 'day', ground: 'road', far: '🏢 🏬 🏢 🏛️ 🏢', near: '', sun: true },
    garden: { sky: 'day', ground: 'grass', far: '🌳 🌷 · 🌹 · 🌳', near: '🌷 🌼 · 🌹 🌷', sun: true },
    well: { sky: 'day', ground: 'earth', far: '🛖 · 🌳 ·', near: '', sun: true, well: true },
    plain: { sky: 'soft', ground: 'none' },
  };

  // words in the text → backdrop (checked in order)
  const BG_WORDS = [
    ['space', /\b(space|planet|rocket|moon landing)\b/], ['night', /\b(night|dark|midnight|slept|asleep|moonlight|stars)\b/], ['rain', /\b(rain|storm|thunder)\b/],
    ['court', /\b(court|darbar|throne|emperor|akbar|minister)\b/], ['palace', /\b(palace|king|queen|prince|princess|royal)\b/],
    ['sea', /\b(sea|ocean|ship|beach)\b/], ['lake', /\b(lake|pond|river|stream|bank|water|swim)\b/],
    ['sky', /\b(flew|fly|flying|sky|clouds?)\b/], ['desert', /\b(desert|sand)\b/], ['mountain', /\b(mountain|hill|cave)\b/],
    ['field', /\b(field|farm|crop|harvest|wheat|grain)\b/], ['market', /\b(market|shop|bazaar|fair|sell)\b/],
    ['home', /\b(house|home|room|kitchen|bed|door)\b/], ['school', /\b(school|class|teacher)\b/],
    ['village', /\b(village|villagers|well)\b/], ['forest', /\b(forest|jungle|woods?|tree|trees|branch)\b/],
  ];
  // words in the text → characters
  const WHO = [
    [/\blions?\b/, '🦁'], [/\b(mouse|mice)\b/, '🐭'], [/\bcrows?\b/, '🐦'], [/\b(rabbit|hare)s?\b/, '🐇'], [/\btortoise\b/, '🐢'], [/\bmonkeys?\b/, '🐒'],
    [/\bcrocodiles?\b/, '🐊'], [/\belephants?\b/, '🐘'], [/\b(jackal|fox)\b/, '🦊'], [/\bsnakes?\b/, '🐍'], [/\b(doves?|pigeons?)\b/, '🕊️'], [/\bgeese|goose\b/, '🦢'],
    [/\bwolf\b/, '🐺'], [/\bsheep\b/, '🐑'], [/\bdogs?\b/, '🐕'], [/\bants?\b/, '🐜'], [/\bgrasshopper\b/, '🦗'], [/\bsparrows?\b/, '🐦'], [/\bfrogs?\b/, '🐸'],
    [/\bbees?\b/, '🐝'], [/\bcows?\b/, '🐄'], [/\bgoats?\b/, '🐐'], [/\bdeer\b/, '🦌'], [/\bowl\b/, '🦉'], [/\bswans?\b/, '🦢'], [/\bparrots?\b/, '🦜'],
    [/\bkings?\b/, '🤴'], [/\bqueen\b/, '👸'], [/\bfarmer\b/, '👨‍🌾'], [/\bhunters?\b/, '🧔'], [/\bwoodcutter\b/, '🧔'], [/\bold man\b/, '👴'], [/\bgrandma|old woman\b/, '👵'],
    [/\bboy\b/, '👦'], [/\bgirl\b/, '👧'], [/\bchildren|kids\b/, '🧒'], [/\bteacher\b/, '🧑‍🏫'], [/\bmother\b/, '👩'], [/\bfather\b/, '👨'],
  ];
  const SCENERY = new Set(['☀️', '🌙', '⭐', '🌧️', '⛈️', '🌊', '🌳', '🌲', '🏡', '🏠', '🛖', '🏰', '🌾', '🌈', '☁️', '🌸', '🌼', '🏞️', '🌅', '🌄', '🌃', '🏔️', '⛰️']);

  const auto = (P, act) => {
    const en = String((P.text && (P.text.en || P.text)) || '').toLowerCase();
    const bgFound = BG_WORDS.find(([, re]) => re.test(en));
    let bg = bgFound ? bgFound[0] : 'meadow';
    const own = seg(P.emoji);
    if (own.some((e) => e === '🌙' || e === '⭐' || e === '🌃')) { bg = 'night'; }
    if (own.some((e) => e === '🌧️' || e === '⛈️')) { bg = 'rain'; }
    const actors = own.filter((e) => !SCENERY.has(e));
    for (const [re, e] of WHO) { if (actors.length >= 3) { break; } if (re.test(en) && !actors.includes(e)) { actors.push(e); } }
    if (!actors.length) { actors.push(own[0] || act && act.emoji || '⭐'); }
    return { bg, actors: actors.slice(0, 3) };
  };

  const props = (s, cls) => seg(s).map((e, k, all) => (e === '·' ? '' : `<span class="z-pr ${cls}" style="left:${((k + 0.5) / all.length) * 100}%;animation-delay:${-k * 0.7}s">${e}</span>`)).join('');

  /** HTML for a scene. P: { scene?, emoji, text }. opts.mini → shorter stage for teaching cards. */
  K.scene = (P, act, opts = {}) => {
    const sc = P.scene || auto(P, act);
    const B = BG[sc.bg] || BG.meadow;
    const all = Array.isArray(sc.actors) ? sc.actors : seg(sc.actors);
    const MOOD = /^(\p{Emoji_Presentation}|\p{Extended_Pictographic})/u;
    const isMood = (e) => /^[\u{1F600}-\u{1F64F}\u{1F910}-\u{1F92F}\u{1F970}-\u{1F97A}💤💭❓❗💡❤️💔✨💢💦🎶💬]/u.test(e) && MOOD.test(e);
    const mood = sc.mood || all.slice(1).find(isMood);
    const list = all.filter((e, k) => !(k > 0 && e === mood)).slice(0, 5);
    const ground = list.filter((a) => !/^[\^@~]/.test(a));
    let gi = 0; let fi = 0;
    const flyers = list.filter((a) => /^[<+\-]*\^/.test(a)).length;
    const climbs = list.some((a) => /^[<+\-]*@/.test(a));
    const actors = list.map((raw, k) => {
      const m = raw.match(/^([\^@~<+\-]*)(.*)$/); const f = m[1]; const e = m[2];
      const cls = ['z-ac'];
      if (k === 0 || f.includes('+')) { cls.push('z-main'); }
      if (f.includes('-')) { cls.push('z-small'); }
      if (f.includes('<')) { cls.push('z-flip'); }
      let style;
      if (f.includes('^')) { cls.push('z-fly'); style = `left:${flyers === 1 ? 50 : 18 + (fi * 64) / (flyers - 1)}%;top:${8 + (fi++ % 2) * 14}%`; }
      else if (f.includes('@')) { cls.push('z-up'); style = 'left:24%;top:24%'; }
      else if (f.includes('~')) { cls.push('z-swim'); style = `left:${55 + (k % 2) * 18}%;bottom:12%`; }
      else { const n = ground.length; style = `left:${n === 1 ? 50 : 18 + (gi++ * 64) / (n - 1)}%`; }
      return `<span class="${cls.join(' ')}" style="${style};animation-delay:${-k * 0.45}s">${e}</span>`;
    }).join('');
    return `<div class="kscene sk-${B.sky} gr-${B.ground}${opts.mini ? ' mini' : ''}" aria-hidden="true">
      ${B.sun ? '<span class="z-sun">☀️</span>' : ''}${B.moon ? '<span class="z-moon">🌙</span><span class="z-stars">✨ · ⭐ · ✨ · ⭐</span>' : ''}${B.stars ? '<span class="z-stars">✨ · ⭐ · ✨ · ⭐ · ✨</span>' : ''}
      ${B.clouds || B.sky === 'day' ? '<span class="z-cloud z-c1">☁️</span><span class="z-cloud z-c2">☁️</span>' : ''}
      ${B.pillars ? '<span class="z-pillar z-l"></span><span class="z-pillar z-r"></span>' : ''}
      <div class="z-far">${props(B.far || '', 'z-f')}</div>
      ${B.ground !== 'none' ? '<div class="z-ground"></div>' : ''}
      ${B.water ? `<div class="z-water${B.water === 'deep' ? ' z-deep' : ''}"><i></i></div>` : ''}
      ${B.bigtree || climbs ? '<span class="z-bigtree">🌳</span>' : ''}${B.well ? '<span class="z-wellp">🪣</span>' : ''}
      <div class="z-near">${props(B.near || '', 'z-n')}</div>
      ${B.rain ? '<div class="z-raindrops"></div>' : ''}
      <div class="z-cast">${actors}${mood ? `<span class="z-bubble" style="left:${list.filter((a) => !/^[\^@~]/.test(a)).length > 1 ? 18 : 50}%">${mood}</span>` : ''}</div>
    </div>`;
  };
})();
