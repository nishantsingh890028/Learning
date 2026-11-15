/* v3.3: picture-fact lessons with diagrams (General Awareness, My India) + Build-the-Flag game.
   facts: { items: [{ dia?: 'flag'|…, scene?: {bg, actors}, emoji?, h: {en,hi}, x: {en,hi} }], questions?: [...] } */
(() => {
  'use strict';
  const { t, tx, esc, say, sayT, q, qa, shuffle } = K;
  const label = (o) => (typeof o === 'object' && o !== null ? (o.en && o.hi && K.both() ? `${esc(o.en)}<small>${esc(o.hi)}</small>` : esc(tx(o))) : esc(o));
  const L = (en, hi) => esc(t(en, hi));

  // ---------------------------------------------------------------- diagrams (SVG)
  const chakra = (cx, cy, r, col = '#000080') => {
    let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${col}" stroke-width="${r * 0.12}"/><circle cx="${cx}" cy="${cy}" r="${r * 0.16}" fill="${col}"/>`;
    for (let k = 0; k < 24; k++) {
      const a = (k * 15 * Math.PI) / 180;
      s += `<line x1="${cx}" y1="${cy}" x2="${(cx + r * 0.94 * Math.sin(a)).toFixed(1)}" y2="${(cy - r * 0.94 * Math.cos(a)).toFixed(1)}" stroke="${col}" stroke-width="${(r * 0.05).toFixed(2)}"/>`;
    }
    return s;
  };
  const FLAG = (w = 240, x = 30, y = 20, pole = true) => {
    const h = (w * 2) / 3; const b = h / 3;
    return `${pole ? `<rect x="${x - 8}" y="${y - 6}" width="6" height="${h + 70}" rx="3" fill="#8b5a2b"/><circle cx="${x - 5}" cy="${y - 8}" r="6" fill="#e2b13c"/>` : ''}
      <g class="dia-wave"><rect x="${x}" y="${y}" width="${w}" height="${b}" fill="#FF9933"/><rect x="${x}" y="${y + b}" width="${w}" height="${b}" fill="#FFFFFF"/><rect x="${x}" y="${y + 2 * b}" width="${w}" height="${b}" fill="#138808"/>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#d6d6d6" stroke-width="1"/>${chakra(x + w / 2, y + 1.5 * b, b * 0.45)}</g>`;
  };
  const svg = (vb, body, cls = '') => `<svg class="dia ${cls}" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img">${body}</svg>`;
  const box = (x, y, w, h, fill, emo, l1, l2, l3) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}"/>
      <text x="${x + w / 2}" y="${y + 30}" font-size="26" text-anchor="middle">${emo}</text>
      <text x="${x + w / 2}" y="${y + 52}" font-size="13" font-weight="800" text-anchor="middle" fill="#2d2250">${esc(l1)}</text>
      ${l2 ? `<text x="${x + w / 2}" y="${y + 68}" font-size="11.5" font-weight="700" text-anchor="middle" fill="#5b4b8a">${esc(l2)}</text>` : ''}
      ${l3 ? `<text x="${x + w / 2}" y="${y + 83}" font-size="10.5" text-anchor="middle" fill="#6b6b80">${esc(l3)}</text>` : ''}</g>`;
  const arrow = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#8a7cc0" stroke-width="3" marker-end="url(#ah)"/>`;
  const DEFS = '<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#8a7cc0"/></marker></defs>';
  const GK = () => window.KKM_GK;

  const DIA = K.DIA = {
    flag: () => svg('0 0 300 260', `<rect x="0" y="230" width="300" height="30" fill="#7ed957"/>${FLAG(240, 40, 30)}`),
    flagparts: () => svg('0 0 340 240', `${FLAG(170, 20, 30, false)}
      ${[[30 + 0, '#FF9933', t('Saffron: courage', 'केसरिया: साहस')], [30 + 38, '#bbb', t('White: peace & truth', 'सफ़ेद: शांति और सच')], [30 + 76, '#138808', t('Green: growth & life', 'हरा: हरियाली और खुशहाली')]].map(([yy, c, s]) => `<line x1="192" y1="${yy + 18}" x2="210" y2="${yy + 18}" stroke="${c}" stroke-width="3"/><text x="214" y="${yy + 22}" font-size="12" font-weight="800" fill="#2d2250">${esc(s)}</text>`).join('')}
      <text x="105" y="168" font-size="13" font-weight="800" text-anchor="middle" fill="#000080">☸ ${esc(t('Ashoka Chakra: 24 spokes', 'अशोक चक्र: 24 तीलियाँ'))}</text>
      <text x="105" y="188" font-size="12" text-anchor="middle" fill="#5b4b8a">${esc(t('“Keep moving forward”', '“आगे बढ़ते रहो”'))}</text>
      <text x="105" y="212" font-size="12" text-anchor="middle" fill="#6b6b80">${esc(t('Length : height = 3 : 2', 'लंबाई : ऊँचाई = 3 : 2'))}</text>`),
    chakra: () => svg('0 0 200 200', `${chakra(100, 100, 80)}<text x="100" y="196" font-size="13" font-weight="800" text-anchor="middle" fill="#000080">${esc(t('24 spokes', '24 तीलियाँ'))}</text>`),
    leaders: () => {
      const g = GK(); const n = (id) => g.leaders.find((x) => x.id === id);
      const p = n('president'); const vp = n('vp'); const pm = n('pm'); const cji = n('cji'); const sp = n('speaker');
      return svg('0 0 360 330', `${DEFS}<text x="180" y="22" font-size="15" font-weight="900" text-anchor="middle" fill="#2d2250">🇮🇳 ${esc(t('Who leads India?', 'भारत का नेतृत्व कौन करता है?'))}</text>
        ${box(110, 34, 140, 90, '#ffe7b3', '🏛️', t('President', 'राष्ट्रपति'), tx(p.name), t('Head of our country', 'देश की प्रमुख'))}
        ${arrow(130, 126, 70, 152)}${arrow(180, 126, 180, 152)}${arrow(230, 126, 290, 152)}
        ${box(6, 154, 116, 90, '#dff3ff', '🤝', t('Vice President', 'उपराष्ट्रपति'), tx(vp.name), t('Runs Rajya Sabha', 'राज्यसभा चलाते हैं'))}
        ${box(126, 154, 108, 90, '#e2f7d9', '🧑‍💼', t('Prime Minister', 'प्रधानमंत्री'), tx(pm.name), t('Leads the govt.', 'सरकार के मुखिया'))}
        ${box(238, 154, 116, 90, '#f3e5ff', '⚖️', t('Chief Justice', 'मुख्य न्यायाधीश'), tx(cji.name), t('Supreme Court', 'सर्वोच्च न्यायालय'))}
        ${box(110, 252, 140, 72, '#ffe3ec', '🔔', t('Lok Sabha Speaker', 'लोकसभा अध्यक्ष'), tx(sp.name))}`);
    },
    vote: () => svg('0 0 360 300', `${DEFS}
      ${box(10, 10, 100, 86, '#e2f7d9', '🧑‍🤝‍🧑', t('People 18+', '18+ के लोग'), t('vote', 'वोट देते हैं'))}
      ${arrow(112, 52, 130, 52)}${box(132, 10, 100, 86, '#dff3ff', '🗳️', t('Elect MPs', 'सांसद चुनते हैं'), t('543 in Lok Sabha', 'लोकसभा में 543'))}
      ${arrow(234, 52, 250, 52)}${box(252, 10, 100, 86, '#ffe7b3', '🏛️', t('Parliament', 'संसद'), t('makes laws', 'कानून बनाती है'))}
      ${arrow(300, 98, 300, 122)}${box(240, 124, 112, 86, '#f3e5ff', '🧑‍💼', t('Prime Minister', 'प्रधानमंत्री'), t('+ ministers run', '+ मंत्री चलाते हैं'), t('the government', 'सरकार'))}
      ${arrow(238, 166, 222, 166)}${box(110, 124, 110, 86, '#ffe3ec', '🏛️', t('President', 'राष्ट्रपति'), t('signs the laws', 'कानून पर हस्ताक्षर'))}
      ${arrow(108, 166, 92, 166)}${box(8, 124, 82, 86, '#fff3c4', '⚖️', t('Courts', 'अदालतें'), t('keep it fair', 'न्याय करती हैं'))}
      <text x="180" y="240" font-size="13" font-weight="800" text-anchor="middle" fill="#2d2250">${esc(t('Elections come every 5 years.', 'चुनाव हर 5 साल में होते हैं।'))}</text>
      <text x="180" y="262" font-size="12" text-anchor="middle" fill="#5b4b8a">${esc(t('The Election Commission runs them fairly.', 'चुनाव आयोग इन्हें निष्पक्ष कराता है।'))}</text>`),
    levels: () => svg('0 0 340 300', `${DEFS}
      ${box(100, 6, 140, 80, '#ffe7b3', '🇮🇳', t('Country', 'देश'), t('Prime Minister', 'प्रधानमंत्री'))}${arrow(170, 88, 170, 106)}
      ${box(100, 108, 140, 80, '#dff3ff', '🗺️', t('State', 'राज्य'), t('Chief Minister', 'मुख्यमंत्री'), t('+ Governor', '+ राज्यपाल'))}${arrow(140, 190, 80, 210)}${arrow(200, 190, 260, 210)}
      ${box(10, 212, 140, 80, '#e2f7d9', '🏙️', t('City', 'शहर'), t('Mayor', 'महापौर'), t('Municipal Corporation', 'नगर निगम'))}
      ${box(190, 212, 140, 80, '#fff3c4', '🏡', t('Village', 'गाँव'), t('Sarpanch', 'सरपंच'), t('Gram Panchayat', 'ग्राम पंचायत'))}`),
    parliament: () => svg('0 0 340 250', `
      <path d="M40 150 A130 110 0 0 1 300 150 Z" fill="#e2f7d9"/><text x="170" y="120" font-size="15" font-weight="900" text-anchor="middle" fill="#1d6b33">${esc(t('Lok Sabha', 'लोकसभा'))}</text>
      <text x="170" y="140" font-size="12" text-anchor="middle" fill="#1d6b33">${esc(t('House of the People – 543 MPs', 'जनता का सदन – 543 सांसद'))}</text>
      <path d="M60 235 A110 70 0 0 1 280 235 Z" fill="#ffe3ec"/><text x="170" y="212" font-size="15" font-weight="900" text-anchor="middle" fill="#a3203f">${esc(t('Rajya Sabha', 'राज्यसभा'))}</text>
      <text x="170" y="230" font-size="12" text-anchor="middle" fill="#a3203f">${esc(t('Council of States', 'राज्यों की परिषद'))}</text>
      <text x="170" y="28" font-size="14" font-weight="800" text-anchor="middle" fill="#2d2250">🏛️ ${esc(t('Parliament = President + 2 Houses', 'संसद = राष्ट्रपति + 2 सदन'))}</text>`),
    solar: () => {
      const P = [['☿', '#b5b5b5', 4, t('Mercury', 'बुध')], ['♀', '#e8c27a', 6, t('Venus', 'शुक्र')], ['🌍', '#3c8de0', 6.5, t('Earth', 'पृथ्वी')], ['♂', '#d4553a', 5, t('Mars', 'मंगल')], ['♃', '#d9a066', 13, t('Jupiter', 'बृहस्पति')], ['♄', '#e5c97a', 11, t('Saturn', 'शनि')], ['♅', '#8fd8e0', 8, t('Uranus', 'अरुण')], ['♆', '#4f6fd8', 8, t('Neptune', 'वरुण')]];
      let x = 84; let s = '<rect width="360" height="200" rx="16" fill="#0b1033"/><circle cx="10" cy="100" r="44" fill="#ffb703"/><text x="22" y="160" font-size="11" font-weight="800" fill="#ffd166" text-anchor="middle">' + esc(t('Sun', 'सूरज')) + '</text>';
      P.forEach(([, col, r, name], k) => {
        x += k ? r + P[k - 1][2] + 14 : 0;
        s += `<circle cx="${x}" cy="100" r="${r}" fill="${col}"/>${k === 5 ? `<ellipse cx="${x}" cy="100" rx="${r + 7}" ry="3.5" fill="none" stroke="#f1dca0" stroke-width="2"/>` : ''}
          <text x="${x}" y="${k % 2 ? 134 : 74}" font-size="10" font-weight="800" fill="#fff" text-anchor="middle">${esc(name)}</text><text x="${x}" y="${k % 2 ? 148 : 60}" font-size="9" fill="#9fb0ff" text-anchor="middle">${k + 1}</text>`;
      });
      return svg('0 0 360 200', s);
    },
    continents: () => {
      const C = [[70, 70, 46, 34, '#f4a261', t('N. America', 'उ. अमेरिका')], [104, 150, 26, 38, '#e76f51', t('S. America', 'द. अमेरिका')], [180, 62, 26, 18, '#2a9d8f', t('Europe', 'यूरोप')], [186, 130, 32, 38, '#e9c46a', t('Africa', 'अफ़्रीका')], [262, 76, 56, 38, '#8ab17d', t('Asia', 'एशिया')], [296, 164, 26, 18, '#bc6c25', t('Australia', 'ऑस्ट्रेलिया')], [190, 216, 90, 12, '#e8f1f8', t('Antarctica', 'अंटार्कटिका')]];
      const O = [[30, 150, t('Pacific', 'प्रशांत')], [140, 108, t('Atlantic', 'अटलांटिक')], [236, 168, t('Indian', 'हिंद')], [190, 14, t('Arctic', 'आर्कटिक')], [340, 214, t('Southern', 'दक्षिणी')]];
      return svg('0 0 380 240', `<rect width="380" height="240" rx="16" fill="#9ed2f5"/>${C.map(([x, y, rx, ry, c, n]) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" stroke="#fff" stroke-width="2"/><text x="${x}" y="${y + 4}" font-size="11" font-weight="900" text-anchor="middle" fill="#1f1f33">${esc(n)}</text>`).join('')}
        ${O.map(([x, y, n]) => `<text x="${x}" y="${y}" font-size="10.5" font-style="italic" font-weight="700" text-anchor="middle" fill="#1b4f7a">🌊 ${esc(n)}</text>`).join('')}
        <text x="370" y="234" font-size="9" text-anchor="end" fill="#1b4f7a">${esc(t('(not to scale – a picture to remember)', '(सही नाप नहीं – याद रखने का चित्र)'))}</text>`);
    },
    indiaseas: () => svg('0 0 340 280', `<rect width="340" height="280" rx="16" fill="#9ed2f5"/>
      <rect x="40" y="10" width="260" height="60" rx="12" fill="#e9eef5"/><text x="170" y="38" font-size="22" text-anchor="middle">🏔️🏔️🏔️</text><text x="170" y="60" font-size="12" font-weight="900" text-anchor="middle" fill="#2d2250">${esc(t('Himalayas (north)', 'हिमालय (उत्तर)'))}</text>
      <path d="M70 80 L270 80 L230 170 L170 262 L110 170 Z" fill="#b7e4a1" stroke="#fff" stroke-width="3"/>
      <text x="170" y="130" font-size="20" font-weight="900" text-anchor="middle" fill="#1d6b33">${esc(t('INDIA', 'भारत'))}</text><text x="170" y="152" font-size="12" text-anchor="middle" fill="#1d6b33">⭐ ${esc(t('New Delhi', 'नई दिल्ली'))}</text>
      <text x="40" y="190" font-size="12" font-weight="800" text-anchor="middle" fill="#1b4f7a" transform="rotate(-70 40 190)">${esc(t('Arabian Sea (west)', 'अरब सागर (पश्चिम)'))}</text>
      <text x="300" y="190" font-size="12" font-weight="800" text-anchor="middle" fill="#1b4f7a" transform="rotate(70 300 190)">${esc(t('Bay of Bengal (east)', 'बंगाल की खाड़ी (पूर्व)'))}</text>
      <text x="270" y="268" font-size="12" font-weight="800" text-anchor="middle" fill="#1b4f7a">${esc(t('Indian Ocean (south)', 'हिंद महासागर (दक्षिण)'))}</text>
      <text x="8" y="274" font-size="9" fill="#1b4f7a">${esc(t('simple picture, not a map', 'सरल चित्र, नक्शा नहीं'))}</text>`),
    helpline: () => {
      const N = [['112', '#e63946', t('Any emergency', 'हर आपातकाल')], ['100', '#1d3557', t('Police', 'पुलिस')], ['101', '#f77f00', t('Fire', 'आग / दमकल')], ['108', '#2a9d8f', t('Ambulance', 'एम्बुलेंस')], ['1098', '#7b2cbf', t('Child helpline', 'बाल हेल्पलाइन')]];
      return svg('0 0 340 280', `<rect x="30" y="4" width="280" height="272" rx="26" fill="#2d2250"/><rect x="42" y="22" width="256" height="236" rx="14" fill="#fff"/>
        ${N.map(([n, c, s], k) => `<rect x="52" y="${32 + k * 45}" width="236" height="38" rx="19" fill="${c}"/><text x="64" y="${57 + k * 45}" font-size="17" font-weight="900" fill="#fff">📞 ${n}</text><text x="278" y="${56 + k * 45}" font-size="12" font-weight="800" fill="#fff" text-anchor="end">${esc(s)}</text>`).join('')}`);
    },
    calendar: (it) => svg('0 0 200 200', `<rect x="20" y="24" width="160" height="160" rx="20" fill="#fff" stroke="#e63946" stroke-width="4"/><rect x="20" y="24" width="160" height="46" rx="20" fill="#e63946"/><rect x="20" y="52" width="160" height="18" fill="#e63946"/>
      <text x="100" y="58" font-size="20" font-weight="900" fill="#fff" text-anchor="middle">${esc(tx(it.month))}</text><text x="100" y="138" font-size="64" font-weight="900" fill="#2d2250" text-anchor="middle">${it.day}</text>
      <text x="100" y="172" font-size="26" text-anchor="middle">${it.emoji || ''}</text><circle cx="62" cy="24" r="7" fill="#2d2250"/><circle cx="138" cy="24" r="7" fill="#2d2250"/>`),
    timer: () => svg('0 0 200 200', `<circle cx="100" cy="104" r="78" fill="#fff" stroke="#2d2250" stroke-width="6"/><path d="M100 104 L100 32 A72 72 0 1 1 46 152 Z" fill="#ff9933" opacity=".85"/><rect x="88" y="10" width="24" height="14" rx="4" fill="#2d2250"/>
      <text x="100" y="114" font-size="34" font-weight="900" text-anchor="middle" fill="#2d2250">52 ${esc(t('sec', 'सेकंड'))}</text>`),
    attention: () => svg('0 0 300 220', `<rect width="300" height="220" rx="16" fill="#fff8e6"/>${FLAG(96, 180, 18)}
      <text x="80" y="150" font-size="96" text-anchor="middle">🧍</text><text x="80" y="196" font-size="12.5" font-weight="900" text-anchor="middle" fill="#2d2250">${esc(t('Stand straight & still', 'सीधे और स्थिर खड़े रहो'))}</text>
      <text x="228" y="190" font-size="12" font-weight="800" text-anchor="middle" fill="#2d2250">${esc(t('Face the flag', 'झंडे की ओर देखो'))}</text>`),
  };

  const pic = (it, act) => {
    if (it.dia && DIA[it.dia]) { return `<div class="dia-wrap">${DIA[it.dia](it)}</div>`; }
    if (it.scene) { return K.scene({ scene: it.scene, emoji: it.emoji, text: it.x }, act, { mini: true }); }
    return `<div class="card-emoji">${it.emoji || '⭐'}</div>`;
  };

  // ---------------------------------------------------------------- FACTS engine
  function facts(act, back) {
    const items = act.items;
    const show = (i) => {
      const it = items[i];
      K.render(tx(act.title), `
        <div class="fact-card" data-say>${pic(it, act)}
          <h3 class="fact-h">${label(it.h)}</h3><div class="fact-x">${label(it.x)}</div>
          <div class="tap-hint">👆 ${t('Tap to hear', 'सुनने के लिए छुओ')}</div></div>
        <div class="dots">${items.map((_, k) => `<span class="${k === i ? 'on' : k < i ? 'done' : ''}"></span>`).join('')}</div>
        <div class="nav"><button class="round" data-prev ${i === 0 ? 'disabled' : ''}>◀️</button>
          <button class="btn green" data-next>${i === items.length - 1 ? (act.questions ? t('Quiz', 'प्रश्नोत्तरी') + ' ✔' : t('Done', 'हो गया') + ' ✔') : t('Next', 'आगे') + ' ▶'}</button></div>`, { name: 'act', back });
      const speak = async () => { await sayT(it.h); if (K.current === 'act') { await sayT(it.x, { rate: 0.9 }); } };
      speak();
      q('[data-say]').onclick = () => { K.sfx.pop(); speak(); };
      q('[data-prev]').onclick = () => { K.sfx.tap(); if (i > 0) { show(i - 1); } };
      q('[data-next]').onclick = () => { K.sfx.tap(); if (i < items.length - 1) { show(i + 1); } else { end(); } };
    };
    const end = () => {
      if (act.questions && act.questions.length) { K.ENGINES.quiz({ ...act, type: 'quiz', count: Math.min(act.count || 5, act.questions.length) }, back); return; }
      K.addStars(2); K.finish(act, 3, back);
    };
    show(0);
  }

  // ---------------------------------------------------------------- Build the flag
  function flagbuild(act, back) {
    const BARS = [['s', '#FF9933', t('Saffron', 'केसरिया')], ['w', '#FFFFFF', t('White', 'सफ़ेद')], ['g', '#138808', t('Green', 'हरा')], ['b', '#2b6cff', t('Blue', 'नीला')], ['r', '#e63946', t('Red', 'लाल')], ['y', '#ffd60a', t('Yellow', 'पीला')]];
    const NEED = ['s', 'w', 'g'];
    let placed = []; let mistakes = 0; let stage = 'bars';
    const view = () => {
      const center = stage === 'done' || stage === 'spokes' ? chakra(150, 100, 30) : '';
      const rows = [0, 1, 2].map((k) => {
        const id = placed[k]; const c = id ? BARS.find((b) => b[0] === id)[1] : 'none';
        return `<rect x="50" y="${40 + k * 40}" width="200" height="40" fill="${c}" stroke="#bbb" stroke-dasharray="${id ? 0 : 6}"/>`;
      }).join('');
      K.render(tx(act.title), `
        <p class="prompt">${stage === 'bars' ? L(`Tap the colours from TOP to BOTTOM (${placed.length + 1} of 3)`, `ऊपर से नीचे रंग चुनो (${placed.length + 1} / 3)`) : stage === 'wheel' ? L('Now put the wheel in the middle!', 'अब बीच में चक्र लगाओ!') : stage === 'spokes' ? L('How many spokes does the Ashoka Chakra have?', 'अशोक चक्र में कितनी तीलियाँ हैं?') : L('Our Tiranga! Jai Hind!', 'हमारा तिरंगा! जय हिंद!')}</p>
        <div class="dia-wrap">${svg('0 0 300 200', `<rect x="44" y="20" width="6" height="180" fill="#8b5a2b"/>${rows}${center}`)}</div>
        <div class="flag-opts">${stage === 'bars' ? shuffle(BARS.filter((b) => !placed.includes(b[0]))).map(([id, c, n]) => `<button class="opt flag-bar" data-bar="${id}"><span class="sw" style="background:${c}"></span>${esc(n)}</button>`).join('')
          : stage === 'wheel' ? shuffle([['ok', svg('0 0 60 60', chakra(30, 30, 24)), t('Blue wheel', 'नीला चक्र')], ['no', '<span style="font-size:40px">⭐</span>', t('Star', 'तारा')], ['no', '<span style="font-size:40px">🌙</span>', t('Moon', 'चाँद')]]).map(([v, p, n]) => `<button class="opt" data-wheel="${v}">${p}<small>${esc(n)}</small></button>`).join('')
            : stage === 'spokes' ? shuffle([12, 24, 30]).map((n) => `<button class="opt" data-sp="${n}">${n}</button>`).join('') : ''}</div>`, { name: 'act', back });
      qa('[data-bar]').forEach((b) => { b.onclick = () => pickBar(b.dataset.bar, b); });
      qa('[data-wheel]').forEach((b) => { b.onclick = () => { if (b.dataset.wheel === 'ok') { K.sfx.good(); stage = 'spokes'; view(); say(t('Wonderful! How many spokes?', 'बहुत बढ़िया! कितनी तीलियाँ?')); } else { mistakes++; K.sfx.bad(); b.classList.add('wrong'); say(t('Not that one. The wheel!', 'वह नहीं। चक्र!')); } }; });
      qa('[data-sp]').forEach((b) => { b.onclick = () => { if (b.dataset.sp === '24') { K.sfx.good(); stage = 'done'; view(); finish(); } else { mistakes++; K.sfx.bad(); b.classList.add('wrong'); say(t('Count again – it is twenty-four!', 'फिर गिनो – चौबीस हैं!')); } }; });
    };
    const pickBar = (id, el) => {
      if (id === NEED[placed.length]) {
        K.sfx.good(); placed.push(id);
        say([t('Saffron on top!', 'सबसे ऊपर केसरिया!'), t('White in the middle!', 'बीच में सफ़ेद!'), t('Green at the bottom!', 'नीचे हरा!')][placed.length - 1]);
        if (placed.length === 3) { stage = 'wheel'; }
        view();
      } else {
        mistakes++; K.sfx.bad(); el.classList.add('wrong');
        say(NEED.includes(id) ? t('That colour is in our flag, but not here. Try again!', 'यह रंग झंडे में है, पर यहाँ नहीं। फिर कोशिश करो!') : t('Our flag does not have that colour.', 'हमारे झंडे में यह रंग नहीं है।'));
      }
    };
    const finish = async () => {
      K.mascotCheer && K.mascotCheer();
      await say(t('Our national flag, the Tiranga! Saffron, white and green, with the Ashoka Chakra. Jai Hind!', 'हमारा राष्ट्रीय ध्वज, तिरंगा! केसरिया, सफ़ेद और हरा, बीच में अशोक चक्र। जय हिंद!'));
      const stars = mistakes === 0 ? 3 : mistakes < 3 ? 2 : 1; K.addStars(stars);
      setTimeout(() => K.finish(act, stars, back), 600);
    };
    view();
    say(t('Let us make our national flag! Which colour is on top?', 'चलो अपना राष्ट्रीय ध्वज बनाएँ! सबसे ऊपर कौन सा रंग है?'));
    K._flag = { pick: (id) => { const el = q(`[data-bar="${id}"]`); if (el) { pickBar(id, el); } } };
  }

  Object.assign(K.ENGINES, { facts, flagbuild });
})();
