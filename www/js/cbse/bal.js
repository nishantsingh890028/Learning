/* Balvatika (Nursery – UKG, ages 3–5) – play-based, organised by NCF-FS curricular goals (Jadui Pitara). */
(() => {
  'use strict';
  const { ch } = window.SYL; const B = window.SYLB; const { T } = B;
  const C = 'bal';

  // ================================================================ ENGLISH (language & literacy, CG-8/9/10)
  ch(C, 'english', 1, '✏️', T('Get ready to write: lines', 'लिखने की तैयारी: रेखाएँ'), [
    B.shapes(T('Lines', 'रेखाएँ'), ['stand', 'sleep', 'slant', 'curve', 'zigzag', 'wave']),
  ]);
  ch(C, 'english', 2, '🅰️', T('Letters A to H', 'अक्षर A से H'), [
    B.letters(T('A to H', 'A से H'), [['A', '🍎', 'Apple'], ['B', '⚽', 'Ball'], ['C', '🐱', 'Cat'], ['D', '🐶', 'Dog'], ['E', '🐘', 'Elephant'], ['F', '🐟', 'Fish'], ['G', '🐐', 'Goat'], ['H', '🎩', 'Hat']]),
    B.g('pop', T('Pop the letters', 'अक्षर फोड़ो'), { letters: 'ABCDEFGH'.split(''), rounds: 3 }),
  ]);
  ch(C, 'english', 3, '🔤', T('Letters I to P', 'अक्षर I से P'), [
    B.letters(T('I to P', 'I से P'), [['I', '🍦', 'Ice cream'], ['J', '🫙', 'Jar'], ['K', '🪁', 'Kite'], ['L', '🦁', 'Lion'], ['M', '🥭', 'Mango'], ['N', '🪺', 'Nest'], ['O', '🦉', 'Owl'], ['P', '🦜', 'Parrot']]),
    B.g('pop', T('Pop the letters', 'अक्षर फोड़ो'), { letters: 'IJKLMNOP'.split(''), rounds: 3 }),
  ]);
  ch(C, 'english', 4, '🔡', T('Letters Q to Z', 'अक्षर Q से Z'), [
    B.letters(T('Q to Z', 'Q से Z'), [['Q', '👸', 'Queen'], ['R', '🐇', 'Rabbit'], ['S', '☀️', 'Sun'], ['T', '🐯', 'Tiger'], ['U', '☂️', 'Umbrella'], ['V', '🎻', 'Violin'], ['W', '⌚', 'Watch'], ['X', '📦', 'Box', 'X, as in box'], ['Y', '🧶', 'Yarn'], ['Z', '🦓', 'Zebra']]),
    B.dots(T('Join A, B, C', 'A, B, C जोड़ो'), ['kite', 'house', 'fish'], 'abc'),
  ]);
  ch(C, 'english', 5, '🧒', T('My body', 'मेरा शरीर'), [
    B.vocab(T('Body parts', 'शरीर के अंग'), [['👀', 'eyes', 'आँखें'], ['👂', 'ears', 'कान'], ['👃', 'nose', 'नाक'], ['👄', 'mouth', 'मुँह'], ['✋', 'hand', 'हाथ'], ['🦶', 'foot', 'पैर'], ['🦷', 'teeth', 'दाँत'], ['💇', 'hair', 'बाल']]),
    B.match(T('What do we use?', 'किससे करते हैं?'), [['👀', ['see', 'देखना']], ['👂', ['hear', 'सुनना']], ['👃', ['smell', 'सूँघना']], ['👅', ['taste', 'चखना']], ['✋', ['touch', 'छूना']]]),
  ]);
  ch(C, 'english', 6, '🎨', T('Colours', 'रंग'), [
    B.vocab(T('Colour words', 'रंगों के नाम'), [['🔴', 'red', 'लाल'], ['🔵', 'blue', 'नीला'], ['🟡', 'yellow', 'पीला'], ['🟢', 'green', 'हरा'], ['🟠', 'orange', 'नारंगी'], ['🟣', 'purple', 'बैंगनी'], ['⚫', 'black', 'काला'], ['⚪', 'white', 'सफ़ेद']]),
    B.colour(T('Colour the fruits', 'फलों में रंग भरो'), ['fruits']),
  ]);
  ch(C, 'english', 7, '🍌', T('Fruits and vegetables', 'फल और सब्ज़ियाँ'), [
    B.vocab(T('Fruits & vegetables', 'फल और सब्ज़ियाँ'), [['🥭', 'mango', 'आम'], ['🍌', 'banana', 'केला'], ['🍎', 'apple', 'सेब'], ['🍇', 'grapes', 'अंगूर'], ['🥕', 'carrot', 'गाजर'], ['🥔', 'potato', 'आलू'], ['🍅', 'tomato', 'टमाटर'], ['🧅', 'onion', 'प्याज़']]),
    B.sort(T('Fruit or vegetable?', 'फल या सब्ज़ी?'), [['f', '🧺', 'Fruits', 'फल'], ['v', '🥬', 'Vegetables', 'सब्ज़ियाँ']], [['🥭', 'f', 'mango', 'आम'], ['🍌', 'f', 'banana', 'केला'], ['🍎', 'f', 'apple', 'सेब'], ['🍇', 'f', 'grapes', 'अंगूर'], ['🍉', 'f', 'watermelon', 'तरबूज़'], ['🥕', 'v', 'carrot', 'गाजर'], ['🥔', 'v', 'potato', 'आलू'], ['🧅', 'v', 'onion', 'प्याज़'], ['🥦', 'v', 'broccoli', 'ब्रोकली'], ['🍆', 'v', 'brinjal', 'बैंगन']]),
  ]);
  ch(C, 'english', 8, '🐮', T('Animals and their sounds', 'जानवर और उनकी आवाज़'), [
    B.vocab(T('Animals', 'जानवर'), [['🐄', 'cow', 'गाय'], ['🐶', 'dog', 'कुत्ता'], ['🐱', 'cat', 'बिल्ली'], ['🐐', 'goat', 'बकरी'], ['🦆', 'duck', 'बत्तख'], ['🐓', 'rooster', 'मुर्गा'], ['🦁', 'lion', 'शेर'], ['🐘', 'elephant', 'हाथी']]),
    B.match(T('Who says it?', 'कौन ऐसे बोलता है?'), [['🐄', 'Moo!'], ['🐶', 'Woof!'], ['🐱', 'Meow!'], ['🦆', 'Quack!'], ['🐓', 'Cock-a-doodle-doo!'], ['🦁', 'Roar!'], ['🐐', 'Maa-aa!'], ['🐍', 'Hiss!']], { sayPair: (p) => p[1] }),
  ]);
  ch(C, 'english', 9, '🙏', T('Magic words', 'जादुई शब्द'), [
    B.situ(T('Please, thank you, sorry', 'प्लीज़, थैंक यू, सॉरी'), [
      ['🍪', ['You want a biscuit from Mummy.', 'तुम्हें मम्मी से बिस्किट चाहिए।'], [[['"Please may I have a biscuit?"', '"मम्मी, प्लीज़ एक बिस्किट दीजिए?"'], true, ['Lovely! "Please" is a magic word.', 'बहुत अच्छे! "प्लीज़" जादुई शब्द है।']], [['"Give me biscuit!"', '"बिस्किट दो!"'], false, ['That sounds rude. Say "please".', 'यह अच्छा नहीं लगता। "प्लीज़" बोलो।']]]],
      ['🎁', ['Nani gives you a present.', 'नानी तुम्हें तोहफ़ा देती हैं।'], [[['"Thank you, Nani!"', '"धन्यवाद, नानी!"'], true, ['Yes! We always say thank you.', 'हाँ! हम हमेशा धन्यवाद कहते हैं।']], [['Grab it and run', 'छीनकर भाग जाओ'], false, ['Say thank you first. Nani will feel happy.', 'पहले धन्यवाद कहो। नानी खुश होंगी।']]]],
      ['🧃', ['You spill juice on your friend’s drawing.', 'तुमने दोस्त की ड्रॉइंग पर जूस गिरा दिया।'], [[['"Sorry! Let me help you clean it."', '"सॉरी! आओ, मैं साफ़ करने में मदद करूँ।"'], true, ['Saying sorry and helping is kind.', 'सॉरी कहना और मदद करना अच्छी बात है।']], [['Laugh and walk away', 'हँसकर चले जाओ'], false, ['Your friend will feel sad. Say sorry.', 'दोस्त दुखी होगा। सॉरी कहो।']]]],
    ], ['Please, thank you and sorry are magic words.', 'प्लीज़, धन्यवाद और सॉरी जादुई शब्द हैं।']),
  ], { free: true });
  ch(C, 'english', 10, '👂', T('First sounds', 'पहली ध्वनि'), [
    B.quiz(T('Which starts with…?', 'किससे शुरू होता है?'), [
      ['🅱️', ['Which one starts with B?', 'कौन B से शुरू होता है?'], ['⚽', '🐱', '🍎'], 0, ['B for ball.', 'B से बॉल।']],
      ['🅼', ['Which one starts with M?', 'कौन M से शुरू होता है?'], ['🐶', '🥭', '☀️'], 1, ['M for mango.', 'M से मैंगो।']],
      ['🆂', ['Which one starts with S?', 'कौन S से शुरू होता है?'], ['☀️', '🐟', '🦁'], 0, ['S for sun.', 'S से सन।']],
      ['🅲', ['Which one starts with C?', 'कौन C से शुरू होता है?'], ['🐘', '🐱', '🎩'], 1, ['C for cat.', 'C से कैट।']],
      ['🅵', ['Which one starts with F?', 'कौन F से शुरू होता है?'], ['🐟', '🦜', '🪁'], 0, ['F for fish.', 'F से फ़िश।']],
      ['🅳', ['Which one starts with D?', 'कौन D से शुरू होता है?'], ['🐐', '🍦', '🐶'], 2, ['D for dog.', 'D से डॉग।']],
    ]),
  ]);

  // ================================================================ HINDI
  ch(C, 'hindi', 1, 'अ', T('Vowels अ to औ', 'स्वर अ से औ'), [
    B.letters(T('स्वर', 'स्वर'), [['अ', '🍍', 'अनानास'], ['आ', '🥭', 'आम'], ['इ', '🌿', 'इमली'], ['ई', '🧱', 'ईंट'], ['उ', '🦉', 'उल्लू'], ['ऊ', '🧶', 'ऊन'], ['ए', '1️⃣', 'एक'], ['ऐ', '👓', 'ऐनक'], ['ओ', '💧', 'ओस'], ['औ', '💊', 'औषधि'], ['अं', '🍇', 'अंगूर'], ['अः', '🙂', 'अः', 'अः']]),
    B.trace(T('Write अ आ इ ई उ', 'लिखो: अ आ इ ई उ'), ['अ', 'आ', 'इ', 'ई', 'उ']),
  ]);
  ch(C, 'hindi', 2, 'क', T('Consonants क to ञ', 'व्यंजन क से ञ'), [
    B.letters(T('क वर्ग, च वर्ग', 'क वर्ग, च वर्ग'), [['क', '🕊️', 'कबूतर'], ['ख', '🐇', 'खरगोश'], ['ग', '🐄', 'गाय'], ['घ', '🏠', 'घर'], ['च', '🥄', 'चम्मच'], ['छ', '☂️', 'छाता'], ['ज', '🚢', 'जहाज़'], ['झ', '🚩', 'झंडा']]),
    B.trace(T('Write क ख ग घ', 'लिखो: क ख ग घ'), ['क', 'ख', 'ग', 'घ']),
  ]);
  ch(C, 'hindi', 3, 'ट', T('Consonants ट to न', 'व्यंजन ट से न'), [
    B.letters(T('ट वर्ग, त वर्ग', 'ट वर्ग, त वर्ग'), [['ट', '🍅', 'टमाटर'], ['ठ', '🥶', 'ठंड'], ['ड', '🥁', 'डमरू'], ['ढ', '🛡️', 'ढाल'], ['त', '🦋', 'तितली'], ['थ', '🍽️', 'थाली'], ['द', '🥛', 'दूध'], ['ध', '☀️', 'धूप'], ['न', '🍋', 'नींबू']]),
    B.g('pop', T('Pop the letters', 'अक्षर फोड़ो'), { kind: 'hindi', letters: ['ट', 'ठ', 'ड', 'ढ', 'त', 'थ', 'द', 'ध', 'न'], rounds: 3 }),
  ]);
  ch(C, 'hindi', 4, 'प', T('Consonants प to ज्ञ', 'व्यंजन प से ज्ञ'), [
    B.letters(T('प वर्ग और बाकी', 'प वर्ग और बाकी'), [['प', '🪁', 'पतंग'], ['फ', '🌸', 'फूल'], ['ब', '🦆', 'बत्तख'], ['भ', '🐻', 'भालू'], ['म', '🐟', 'मछली'], ['य', '🧘', 'योग'], ['र', '🚂', 'रेल'], ['ल', '🍬', 'लड्डू'], ['व', '🌳', 'वन'], ['श', '🦁', 'शेर'], ['स', '🍎', 'सेब'], ['ह', '🐘', 'हाथी'], ['क्ष', '🛡️', 'क्षत्रिय'], ['त्र', '🔱', 'त्रिशूल'], ['ज्ञ', '📚', 'ज्ञान']]),
    B.dots(T('Join क, ख, ग…', 'क, ख, ग… जोड़ो'), ['star', 'boat'], 'hindi'),
  ]);
  ch(C, 'hindi', 5, '👨‍👩‍👧', T('My family words', 'मेरा परिवार'), [
    B.hwords(T('परिवार', 'परिवार'), [['👩', 'माँ', 'mother'], ['👨', 'पापा', 'father'], ['👵', 'दादी', 'grandmother (father’s mother)'], ['👴', 'दादा', 'grandfather (father’s father)'], ['👵', 'नानी', 'grandmother (mother’s mother)'], ['👴', 'नाना', 'grandfather (mother’s father)'], ['👦', 'भैया', 'elder brother'], ['👧', 'दीदी', 'elder sister']]),
  ]);
  ch(C, 'hindi', 6, '🌈', T('Colours in Hindi', 'हिंदी में रंग'), [
    B.hwords(T('रंग', 'रंग'), [['🔴', 'लाल', 'red'], ['🔵', 'नीला', 'blue'], ['🟡', 'पीला', 'yellow'], ['🟢', 'हरा', 'green'], ['🟠', 'नारंगी', 'orange'], ['⚪', 'सफ़ेद', 'white'], ['⚫', 'काला', 'black'], ['🟤', 'भूरा', 'brown']]),
    B.colour(T('इंद्रधनुष रंगो', 'इंद्रधनुष रंगो'), ['rainbow']),
  ]);
  ch(C, 'hindi', 7, '🎶', T('Rhyme time', 'कविता का समय'), [
    B.poem(T('मेरी गुड़िया', 'मेरी गुड़िया'), '🪆', 'gentle', ['छोटी सी है मेरी गुड़िया,', 'पहने लाल-लाल चुनरिया।', 'हँसती है वो, गाती है,', 'सबको नाच दिखाती है।'], ['A little girl sings about her happy doll in a red chunri.', 'एक बच्ची अपनी लाल चुनरी वाली गुड़िया के बारे में गाती है।']),
  ]);

  // ================================================================ MATHS (cognitive, CG-7/8)
  ch(C, 'maths', 1, '🔍', T('Where is it? In, on, under', 'कहाँ है? अंदर, ऊपर, नीचे'), [
    B.spot(T('Find it!', 'ढूँढो!'), [
      [[['🌳', 55, 8, 120], ['🐦', 72, 12, 34, 'bird', 'चिड़िया'], ['🐈', 70, 64, 40, 'cat', 'बिल्ली'], ['📦', 12, 60, 70, 'box', 'डिब्बा'], ['⚽', 22, 66, 30, 'ball', 'गेंद'], ['🪑', 30, 30, 70, 'chair', 'कुर्सी'], ['🧸', 34, 18, 34, 'teddy', 'टेडी']],
        [[['Tap the bird ON the tree.', 'पेड़ के ऊपर बैठी चिड़िया को दबाओ।'], 1], [['Tap the cat UNDER the tree.', 'पेड़ के नीचे बैठी बिल्ली को दबाओ।'], 2], [['Tap the ball IN the box.', 'डिब्बे के अंदर रखी गेंद दबाओ।'], 4], [['Tap the teddy ON the chair.', 'कुर्सी के ऊपर बैठे टेडी को दबाओ।'], 6]], '#e0f2fe'],
    ]),
    B.gen('bigsmall', { title: T('Big and small', 'बड़ा और छोटा') }),
  ]);
  ch(C, 'maths', 2, '🔺', T('Shapes around us', 'हमारे आसपास आकार'), [
    B.shapes(T('Draw shapes', 'आकार बनाओ'), ['circle', 'square', 'triangle', 'star']),
    B.gen('shapes', { title: T('Find the shape', 'आकार ढूँढो') }),
  ]);
  ch(C, 'maths', 3, '🖐️', T('Count 1 to 5', '1 से 5 तक गिनो'), [
    B.g('feed', T('Feed the animals', 'जानवरों को खिलाओ'), { max: 5 }),
    B.trace(T('Write 1 to 5', '1 से 5 लिखो'), ['1', '2', '3', '4', '5']),
  ]);
  ch(C, 'maths', 4, '🔟', T('Count 6 to 10', '6 से 10 तक गिनो'), [
    B.g('tenframe', T('Fill the ten frame', 'दस का खाना भरो'), { min: 4, max: 10 }),
    B.gen('count', { title: T('How many?', 'कितने हैं?') }),
    B.trace(T('Write 6 to 10', '6 से 10 लिखो'), ['6', '7', '8', '9', '10']),
  ]);
  ch(C, 'maths', 5, '⚖️', T('More and less', 'ज़्यादा और कम'), [B.gen('more', { title: T('Which has more?', 'किसमें ज़्यादा?') })]);
  ch(C, 'maths', 6, '🔴', T('Patterns', 'पैटर्न'), [B.gen('pattern', { title: T('What comes next?', 'आगे क्या आएगा?'), level: 1 })]);
  ch(C, 'maths', 7, '🧺', T('Sort and match', 'छाँटो और मिलाओ'), [
    B.sort(T('Sort by colour', 'रंग से छाँटो'), [['r', '🔴', 'Red', 'लाल'], ['y', '🟡', 'Yellow', 'पीला']], [['🍎', 'r', 'apple', 'सेब'], ['🍓', 'r', 'strawberry', 'स्ट्रॉबेरी'], ['🌹', 'r', 'rose', 'गुलाब'], ['🚒', 'r', 'fire engine', 'दमकल'], ['🍌', 'y', 'banana', 'केला'], ['🌻', 'y', 'sunflower', 'सूरजमुखी'], ['🐥', 'y', 'chick', 'चूज़ा'], ['🧀', 'y', 'cheese', 'चीज़'], ['🍋', 'y', 'lemon', 'नींबू']]),
    B.match(T('Match the same', 'एक जैसे मिलाओ'), [['🐘', '🐘'], ['🚗', '🚗'], ['🌸', '🌸'], ['🍉', '🍉'], ['⭐', '⭐'], ['🐟', '🐟']]),
  ]);
  ch(C, 'maths', 8, '⭐', T('Dot to dot 1–10', 'बिंदु जोड़ो 1–10'), [B.dots(T('Join 1, 2, 3…', '1, 2, 3… जोड़ो'), ['star', 'house', 'fish', 'boat'], 'num')]);

  // ================================================================ MY WORLD (physical, socio-emotional, environment)
  ch(C, 'evs', 1, '🧼', T('Clean hands', 'साफ़ हाथ'), [
    B.explain(T('Why wash hands?', 'हाथ क्यों धोएँ?'), [['🦠', ['Tiny germs', 'छोटे-छोटे कीटाणु'], ['Germs are so tiny we cannot see them. They can make us sick.', 'कीटाणु इतने छोटे होते हैं कि दिखते नहीं। ये हमें बीमार कर सकते हैं।']], ['🧼', ['Soap and water', 'साबुन और पानी'], ['Soap and water wash the germs away.', 'साबुन और पानी कीटाणुओं को धो देते हैं।']], ['🍽️', ['Before eating', 'खाने से पहले'], ['Always wash hands before eating and after the toilet.', 'खाने से पहले और शौच के बाद हमेशा हाथ धोओ।']]]),
    B.order(T('Wash your hands', 'हाथ धोओ'), [[['Put the steps in order.', 'सही क्रम में लगाओ।'], [['🚰', 'Wet hands', 'हाथ गीले करो'], ['🧼', 'Rub soap', 'साबुन लगाओ'], ['👐', 'Scrub well', 'अच्छे से रगड़ो'], ['💦', 'Rinse', 'पानी से धोओ'], ['🧻', 'Dry', 'पोंछो']], ['Clean hands, happy tummy!', 'साफ़ हाथ, खुश पेट!']]]),
  ]);
  ch(C, 'evs', 2, '🥗', T('Healthy food', 'सेहतमंद खाना'), [
    B.sort(T('Healthy or junk?', 'सेहतमंद या जंक?'), [['h', '💪', 'Eat every day', 'रोज़ खाओ'], ['j', '🙅', 'Only sometimes', 'कभी-कभी']], [['🍎', 'h', 'apple', 'सेब'], ['🥛', 'h', 'milk', 'दूध'], ['🥕', 'h', 'carrot', 'गाजर'], ['🍚', 'h', 'dal chawal', 'दाल चावल'], ['🫓', 'h', 'roti', 'रोटी'], ['🍟', 'j', 'chips', 'चिप्स'], ['🍭', 'j', 'lollipop', 'लॉलीपॉप'], ['🥤', 'j', 'cold drink', 'कोल्ड ड्रिंक'], ['🍩', 'j', 'doughnut', 'डोनट']]),
  ]);
  ch(C, 'evs', 3, '🌞', T('Day and night', 'दिन और रात'), [
    B.sort(T('Day or night?', 'दिन या रात?'), [['d', '☀️', 'Day', 'दिन'], ['n', '🌙', 'Night', 'रात']], [['🏫', 'd', 'go to school', 'स्कूल जाना'], ['🌅', 'd', 'sunrise', 'सूर्योदय'], ['🐓', 'd', 'rooster crows', 'मुर्गा बोलता है'], ['⚽', 'd', 'play outside', 'बाहर खेलना'], ['⭐', 'n', 'stars', 'तारे'], ['🦉', 'n', 'owl wakes up', 'उल्लू जागता है'], ['🛌', 'n', 'sleep', 'सोना'], ['🌙', 'n', 'moon', 'चाँद']]),
  ]);
  ch(C, 'evs', 4, '🏡', T('Animal homes', 'जानवरों के घर'), [
    B.match(T('Who lives where?', 'कौन कहाँ रहता है?'), [['🐦', ['🪺 nest', '🪺 घोंसला']], ['🐟', ['🌊 water', '🌊 पानी']], ['🐝', ['🍯 hive', '🍯 छत्ता']], ['🐄', ['🛖 shed', '🛖 गौशाला']], ['🦁', ['🕳️ den', '🕳️ माँद']], ['🐶', ['🏠 kennel', '🏠 कुत्ते का घर']]]),
  ]);
  ch(C, 'evs', 5, '😊', T('My feelings', 'मेरी भावनाएँ'), [
    B.match(T('How do they feel?', 'वे कैसा महसूस कर रहे हैं?'), [['🎂', ['😄 happy', '😄 खुश']], ['💔', ['😢 sad', '😢 दुखी']], ['🌩️', ['😨 scared', '😨 डरा हुआ']], ['🧸❌', ['😠 angry', '😠 गुस्सा']], ['🎁❓', ['😲 surprised', '😲 हैरान']]]),
    B.situ(T('When I feel angry', 'जब मुझे गुस्सा आए'), [['😠', ['Your brother took your crayons. You feel very angry.', 'भाई ने तुम्हारे क्रेयॉन ले लिए। तुम्हें बहुत गुस्सा आ रहा है।'], [[['Take 3 deep breaths, then say "Please give them back"', '3 गहरी साँस लो, फिर कहो "प्लीज़ वापस दो"'], true, ['Breathing calms us down. Then we can use words.', 'साँस लेने से मन शांत होता है। फिर हम बात कर सकते हैं।']], [['Hit him', 'उसे मारो'], false, ['Hitting hurts. Use words or ask a grown-up.', 'मारने से चोट लगती है। बात करो या बड़ों को बताओ।']]]]], ['When I am angry: stop, breathe, then talk.', 'गुस्सा आए तो: रुको, साँस लो, फिर बात करो।']),
  ]);
  ch(C, 'evs', 6, '🚦', T('Stay safe', 'सुरक्षित रहो'), [
    B.sort(T('Safe or not safe?', 'सुरक्षित या खतरनाक?'), [['s', '✅', 'Safe', 'सुरक्षित'], ['u', '⛔', 'Not safe', 'खतरनाक']], [['🧸', 's', 'teddy', 'टेडी'], ['📚', 's', 'books', 'किताबें'], ['🖍️', 's', 'crayons', 'क्रेयॉन'], ['🔪', 'u', 'knife', 'चाकू'], ['🔥', 'u', 'fire', 'आग'], ['🔌', 'u', 'plug socket', 'बिजली का सॉकेट'], ['💊', 'u', 'medicine', 'दवाई'], ['⚽', 's', 'ball', 'गेंद']]),
  ]);
})();
