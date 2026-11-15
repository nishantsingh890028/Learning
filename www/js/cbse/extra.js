/* Top-ups so every section has at least 10 lessons. */
(() => {
  'use strict';
  const { ch } = window.SYL; const B = window.SYLB; const { T } = B;
  const sc = (sci, mode, en, hi) => ({ type: 'bank', sci, mode, title: T(en, hi) });
  const next = (cls, sub) => Math.max(0, ...window.SYL.chapters.filter((c) => c.board === 'cbse' && c.cls === cls && c.sub === sub).map((c) => c.no)) + 1;
  const more = (cls, sub, rows) => rows.forEach(([emoji, en, hi, acts]) => ch(cls, sub, next(cls, sub), emoji, T(en, hi), acts));

  more('bal', 'hindi', [
    ['🐘', 'Animal names in Hindi', 'जानवरों के नाम', [B.hwords(T('जानवर', 'जानवर'), [['🐘', 'हाथी', 'elephant'], ['🦁', 'शेर', 'lion'], ['🐒', 'बंदर', 'monkey'], ['🐄', 'गाय', 'cow'], ['🐶', 'कुत्ता', 'dog'], ['🐱', 'बिल्ली', 'cat'], ['🦜', 'तोता', 'parrot'], ['🐟', 'मछली', 'fish']])]],
    ['👃', 'My body in Hindi', 'मेरे शरीर के अंग', [B.hwords(T('शरीर के अंग', 'शरीर के अंग'), [['👀', 'आँख', 'eye'], ['👂', 'कान', 'ear'], ['👃', 'नाक', 'nose'], ['👄', 'मुँह', 'mouth'], ['✋', 'हाथ', 'hand'], ['🦶', 'पैर', 'foot'], ['🦷', 'दाँत', 'teeth'], ['💇', 'बाल', 'hair']])]],
    ['🍎', 'Fruits in Hindi', 'फलों के नाम', [B.hwords(T('फल', 'फल'), [['🍎', 'सेब', 'apple'], ['🍌', 'केला', 'banana'], ['🥭', 'आम', 'mango'], ['🍇', 'अंगूर', 'grapes'], ['🍊', 'संतरा', 'orange'], ['🍉', 'तरबूज़', 'watermelon']])]],
  ]);
  more('bal', 'maths', [
    ['🚂', 'Count up to 10', '10 तक गिनती', [{ type: 'countlab', mode: 'up', max: 10, title: T('Number train', 'संख्या रेलगाड़ी') }]],
    ['🚀', 'Count down from 10', '10 से उल्टी गिनती', [{ type: 'countlab', mode: 'down', max: 10, title: T('Rocket countdown', 'रॉकेट की उल्टी गिनती') }]],
  ]);
  more('bal', 'evs', [
    ['🌱', 'Living and non-living', 'सजीव और निर्जीव', [sc('living', 'sort', 'Living or not?', 'सजीव या निर्जीव?')]],
    ['🐣', 'Mothers and babies', 'माँ और बच्चे', [sc('babies', 'match', 'Baby animals', 'जानवरों के बच्चे')]],
    ['🚌', 'How we travel', 'हम कैसे जाते हैं', [sc('transport', 'sort', 'Land, water or air', 'ज़मीन, पानी या हवा')]],
    ['🌦️', 'Weather', 'मौसम', [sc('weather', 'sort', 'What to wear?', 'क्या पहनें?')]],
  ]);
  more('c1', 'evs', [
    ['💧', 'Water around us', 'हमारे आसपास पानी', [sc('water', 'explain', 'Where water comes from', 'पानी कहाँ से आता है'), sc('water', 'quiz', 'Water quiz', 'पानी प्रश्नोत्तरी')]],
    ['👩‍⚕️', 'People who help us', 'हमारे मददगार', [sc('helpers', 'match', 'Helpers and their tools', 'मददगार और उनके औज़ार')]],
  ]);
  more('c2', 'evs', [
    ['🧱', 'Things around us', 'हमारे आसपास की चीज़ें', [sc('materials', 'sort', 'What is it made of?', 'यह किससे बना है?')]],
    ['🪴', 'What plants need', 'पौधों की ज़रूरतें', [sc('plantneeds', 'explain', 'Plant needs', 'पौधों की ज़रूरतें'), sc('plantneeds', 'quiz', 'Quick check', 'जाँच')]],
  ]);

  const L = (id, a) => window.CUR.push({ id, world: 'play', levels: [1, 2, 3], free: true, ...a });
  L('p-team', B.situ(T('Teamwork', 'मिलकर खेलना'), [
    ['⚽', ['Your team is losing and a friend missed the goal.', 'तुम्हारी टीम हार रही है और दोस्त गोल चूक गया।'], [[['Say "Never mind, try again!"', 'कहो "कोई बात नहीं, फिर कोशिश करो!"'], true, ['Cheering teammates makes the whole team stronger.', 'साथियों का हौसला बढ़ाने से पूरी टीम मज़बूत होती है।']], [['Shout at him', 'उस पर चिल्लाओ'], false, ['Everyone misses sometimes. Encourage instead.', 'कभी-कभी सबसे चूक होती है। हौसला बढ़ाओ।']]]],
    ['🧒', ['A new child is standing alone at playtime.', 'खेल के समय एक नया बच्चा अकेला खड़ा है।'], [[['Invite them: "Want to play with us?"', 'बुलाओ: "हमारे साथ खेलोगे?"'], true, ['Including others makes friends!', 'सबको शामिल करने से दोस्त बनते हैं!']], [['Ignore them', 'अनदेखा करो'], false, ['Being left out feels sad. Invite them.', 'अकेला छोड़ा जाना दुख देता है। बुलाओ।']]]],
  ], ['Together Everyone Achieves More – that is a TEAM.', 'मिलकर सब ज़्यादा हासिल करते हैं – यही टीम है।'], { skills: ['values', 'emotions'] }));
  L('p-yoga', B.explain(T('Yoga for kids', 'बच्चों के लिए योग'), [
    ['🌳', ['Tree pose (Vrikshasana)', 'वृक्षासन'], ['Stand on one leg, put the other foot on your knee, hands joined above. Helps balance.', 'एक पैर पर खड़े हो, दूसरा पैर घुटने पर रखो, हाथ ऊपर जोड़ो। संतुलन बढ़ता है।']],
    ['🐍', ['Cobra pose (Bhujangasana)', 'भुजंगासन'], ['Lie on your tummy and gently lift your chest. Makes your back strong.', 'पेट के बल लेटो और धीरे से छाती उठाओ। पीठ मज़बूत होती है।']],
    ['🦋', ['Butterfly pose', 'तितली आसन'], ['Sit, join your feet and flap your knees like wings.', 'बैठकर पैरों के तलवे जोड़ो और घुटनों को पंखों की तरह हिलाओ।']],
    ['🧘', ['Deep breathing', 'गहरी साँस'], ['Breathe in slowly through the nose, breathe out slowly. Calms the mind.', 'नाक से धीरे साँस लो, धीरे छोड़ो। मन शांत होता है।']],
  ], { talk: T('Try one yoga pose together every morning.', 'हर सुबह साथ में एक योगासन करें।'), skills: ['health'] }));
})();
