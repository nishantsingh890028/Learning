/* ICSE (CISCE themes) and International (Cambridge Primary–style, Stages 1–3) chapters. Activities are bank-driven: fresh questions every play.
   Pre-primary (Balvatika) chapters are shared by all boards. */
(() => {
  'use strict';
  const { ch } = window.SYL; const B = window.SYLB; const { T } = B;
  const bk = (bank, en, hi) => ({ type: 'bank', bank, title: T(en, hi || en) });
  const sc = (sci, mode, en, hi) => ({ type: 'bank', sci, mode, title: T(en, hi || en) });
  const lab = (op, level, en, hi) => ({ type: 'mathlab', op, level, title: T(en, hi) });
  const g = (type, en, hi, extra = {}) => ({ type, title: T(en, hi), ...extra });
  const add = (board, cls, sub, rows) => rows.forEach(([emoji, en, hi, acts], i) => ch(cls, sub, i + 1, emoji, T(en, hi), acts, { board }));

  // ================================================================ ICSE
  const I = 'icse';
  add(I, 'c1', 'english', [
    ['🔤', 'Letters and sounds', 'अक्षर और ध्वनियाँ', [g('pop', 'Pop the letters', 'अक्षर फोड़ो', { rounds: 3 }), bk('spelling', 'Spell little words')]],
    ['📛', 'Naming words', 'नाम वाले शब्द', [bk('nounverb', 'Naming or doing?')]],
    ['🏃', 'Doing words', 'काम वाले शब्द', [bk('nounverb', 'Find the doing words')]],
    ['🅰️', 'a or an', 'a या an', [bk('article', 'a or an?')]],
    ['👥', 'One and many', 'एक और अनेक', [bk('plural', 'Make it many')]],
    ['↔️', 'Opposites', 'विलोम', [bk('opposite', 'Match the opposites')]],
    ['🎵', 'Rhyming words', 'तुक वाले शब्द', [bk('rhyme', 'Find the rhyme')]],
    ['🌈', 'Describing words', 'विशेषण', [bk('adjective', 'Describing or naming?')]],
    ['📦', 'In, on, under', 'अंदर, ऊपर, नीचे', [bk('preposition', 'Where is it?')]],
    ['✍️', 'is, am, are', 'is, am, are', [bk('isare', 'Choose is, am or are')]],
    ['🔠', 'ABC order', 'ABC क्रम', [bk('alphabetical', 'ABC order')]],
    ['❗', 'Capital letters and full stops', 'बड़े अक्षर और पूर्ण विराम', [bk('punctuation', 'Which is correct?')]],
  ]);
  add(I, 'c1', 'hindi', [
    ['अ', 'स्वर', 'स्वर', [g('pop', 'स्वर फोड़ो', 'स्वर फोड़ो', { kind: 'hindi', letters: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ'], rounds: 3 }), B.trace(T('स्वर लिखो', 'स्वर लिखो'), ['अ', 'आ', 'इ', 'ई', 'उ'])]],
    ['क', 'व्यंजन', 'व्यंजन', [g('pop', 'व्यंजन फोड़ो', 'व्यंजन फोड़ो', { kind: 'hindi', rounds: 3 }), B.trace(T('व्यंजन लिखो', 'व्यंजन लिखो'), ['क', 'ख', 'ग', 'घ', 'च'])]],
    ['ा', 'मात्राओं से शब्द', 'मात्राओं से शब्द', [bk('h_spell', 'शब्द बनाओ', 'शब्द बनाओ')]],
    ['🔢', 'गिनती 1–50', 'गिनती 1–50', [bk('h_ginti', 'अंक और नाम मिलाओ', 'अंक और नाम मिलाओ')]],
    ['📅', 'सप्ताह के दिन', 'सप्ताह के दिन', [bk('h_days', 'दिन क्रम से', 'दिन क्रम से')]],
    ['👥', 'एक-अनेक', 'एक-अनेक', [bk('h_vachan', 'वचन मिलाओ', 'वचन मिलाओ')]],
    ['👦', 'लड़का-लड़की (लिंग)', 'लड़का-लड़की (लिंग)', [bk('h_ling', 'लिंग मिलाओ', 'लिंग मिलाओ')]],
    ['↔️', 'उल्टे शब्द', 'उल्टे शब्द', [bk('h_vilom', 'विलोम मिलाओ', 'विलोम मिलाओ')]],
    ['📛', 'नाम वाले शब्द', 'नाम वाले शब्द', [bk('h_sarvanam', 'संज्ञा या सर्वनाम?', 'संज्ञा या सर्वनाम?')]],
    ['🍎', 'फल-सब्ज़ी के नाम', 'फल-सब्ज़ी के नाम', [B.hwords(T('फल और सब्ज़ियाँ', 'फल और सब्ज़ियाँ'), [['🍎', 'सेब', 'apple'], ['🍌', 'केला', 'banana'], ['🥭', 'आम', 'mango'], ['🍇', 'अंगूर', 'grapes'], ['🥕', 'गाजर', 'carrot'], ['🥔', 'आलू', 'potato'], ['🍅', 'टमाटर', 'tomato'], ['🧅', 'प्याज़', 'onion']])]],
  ]);
  add(I, 'c1', 'maths', [
    ['🔟', 'Numbers to 100', '100 तक संख्याएँ', [g('bundles', 'Tens and ones', 'दहाई और इकाई', { max: 99 })]],
    ['⬅️', 'Before, after, between', 'पहले, बाद, बीच', [g('countlab', 'Number neighbours', 'संख्या के पड़ोसी', { mode: 'near', max: 100, rounds: 6 })]],
    ['⚖️', 'Greater and smaller', 'बड़ा और छोटा', [B.gen('compare', { title: T('Compare numbers', 'संख्याओं की तुलना'), level: 2 })]],
    ['➕', 'Addition', 'जोड़', [lab('add', 2, 'Add up to 20', '20 तक जोड़')]],
    ['➖', 'Subtraction', 'घटाव', [lab('sub', 2, 'Subtract within 20', '20 तक घटाव')]],
    ['🔁', 'Skip counting', 'उछल गिनती', [g('countlab', 'Count in 2s, 5s, 10s', '2, 5, 10 से गिनो', { mode: 'skip', max: 100 })]],
    ['🔺', 'Shapes', 'आकृतियाँ', [B.shapes(T('Draw shapes', 'आकृतियाँ बनाओ'), ['circle', 'square', 'triangle', 'rectangle'])]],
    ['🔴', 'Patterns', 'पैटर्न', [B.gen('pattern', { title: T('Continue the pattern', 'पैटर्न आगे बढ़ाओ') })]],
    ['🕐', 'Time', 'समय', [g('clockset', 'O’clock', 'पूरे घंटे', { minutes: [0] })]],
    ['🪙', 'Money', 'पैसे', [g('shop', 'Pay at the shop', 'दुकान पर पैसे दो', { max: 20, min: 3 })]],
    ['📊', 'Data handling', 'आँकड़े', [g('pictograph', 'Make a chart', 'चार्ट बनाओ')]],
    ['⚖️', 'Heavy and light', 'भारी और हल्का', [g('scale', 'Which is heavier?', 'कौन भारी?', { mode: 'compare' })]],
  ]);
  add(I, 'c1', 'evs', [
    ['🧒', 'About me: my body', 'मेरा शरीर', [sc('body', 'match', 'Body parts and jobs', 'अंग और काम'), sc('body', 'quiz', 'Healthy body', 'स्वस्थ शरीर')]],
    ['👨‍👩‍👧', 'My family', 'मेरा परिवार', [sc('family', 'match', 'Family relations', 'रिश्ते')]],
    ['🍲', 'My needs: food', 'भोजन', [sc('food', 'sort', 'Food groups', 'भोजन के समूह')]],
    ['💧', 'My needs: water', 'पानी', [sc('water', 'explain', 'All about water', 'पानी के बारे में'), sc('water', 'quiz', 'Water quiz', 'पानी प्रश्नोत्तरी')]],
    ['🏠', 'My needs: shelter', 'घर', [sc('shelter', 'match', 'Kinds of houses', 'तरह-तरह के घर')]],
    ['👕', 'My needs: clothing', 'कपड़े', [sc('clothing', 'sort', 'Clothes for each season', 'मौसम के कपड़े')]],
    ['🌱', 'Living and non-living', 'सजीव और निर्जीव', [sc('living', 'explain', 'What is living?', 'सजीव क्या है?'), sc('living', 'sort', 'Living or non-living?', 'सजीव या निर्जीव?')]],
    ['🐮', 'Animals and their babies', 'जानवर और उनके बच्चे', [sc('babies', 'match', 'Mother and baby', 'माँ और बच्चा')]],
    ['🚌', 'Transport', 'यातायात', [sc('transport', 'sort', 'Land, water or air?', 'ज़मीन, पानी या हवा?')]],
    ['👮', 'People who help us', 'हमारे मददगार', [sc('helpers', 'match', 'Who uses what?', 'कौन क्या इस्तेमाल करता है?')]],
  ]);

  add(I, 'c2', 'english', [
    ['🏙️', 'Common and proper nouns', 'जातिवाचक और व्यक्तिवाचक संज्ञा', [bk('commonproper', 'Find the proper noun')]],
    ['👥', 'Singular and plural', 'एकवचन और बहुवचन', [bk('plural', 'Make it plural')]],
    ['👑', 'Gender', 'लिंग', [bk('gender', 'Match the pairs')]],
    ['👉', 'Pronouns', 'सर्वनाम', [bk('pronoun', 'Use a pronoun')]],
    ['✍️', 'is, am, are', 'is, am, are', [bk('isare', 'Choose the right word')]],
    ['🎒', 'has and have', 'has और have', [bk('hashave', 'has or have?')]],
    ['🌈', 'Adjectives', 'विशेषण', [bk('adjective', 'Describing words')]],
    ['📦', 'Prepositions', 'संबंधबोधक', [bk('preposition', 'Where is it?')]],
    ['↔️', 'Opposites and synonyms', 'विलोम और समानार्थी', [bk('opposite', 'Opposites'), bk('synonym', 'Same meaning')]],
    ['👂', 'Sound-alike words', 'एक जैसी ध्वनि वाले शब्द', [bk('homophone', 'Match homophones')]],
    ['🌻', 'Compound words', 'संयुक्त शब्द', [bk('compound', 'Join the words')]],
    ['⏪', 'Past tense', 'भूतकाल', [bk('past', 'Yesterday I…')]],
    ['❓', 'Punctuation', 'विराम चिह्न', [bk('punctuation', 'Which is correct?')]],
  ]);
  add(I, 'c2', 'hindi', [
    ['ि', 'मात्रा वाले शब्द', 'मात्रा वाले शब्द', [bk('h_spell', 'शब्द बनाओ', 'शब्द बनाओ')]],
    ['👥', 'वचन', 'वचन', [bk('h_vachan', 'एक-अनेक', 'एक-अनेक')]],
    ['👦', 'लिंग', 'लिंग', [bk('h_ling', 'पुल्लिंग-स्त्रीलिंग', 'पुल्लिंग-स्त्रीलिंग')]],
    ['↔️', 'विलोम शब्द', 'विलोम शब्द', [bk('h_vilom', 'उल्टे शब्द', 'उल्टे शब्द')]],
    ['🔁', 'पर्यायवाची शब्द', 'पर्यायवाची शब्द', [bk('h_paryay', 'समान अर्थ', 'समान अर्थ')]],
    ['📛', 'संज्ञा', 'संज्ञा', [bk('h_shabd', 'संज्ञा, क्रिया, विशेषण', 'संज्ञा, क्रिया, विशेषण')]],
    ['👉', 'सर्वनाम', 'सर्वनाम', [bk('h_sarvanam', 'सर्वनाम पहचानो', 'सर्वनाम पहचानो')]],
    ['📅', 'महीनों के नाम', 'महीनों के नाम', [bk('h_months', 'महीने क्रम से', 'महीने क्रम से')]],
    ['🔢', 'गिनती', 'गिनती', [bk('h_ginti', 'अंक और नाम', 'अंक और नाम')]],
    ['📖', 'कहानी: कौआ और घड़ा', 'कहानी: कौआ और घड़ा', [B.situ(T('समझदारी', 'समझदारी'), [['🏺', ['कौए की चोंच घड़े के पानी तक नहीं पहुँच रही। वह क्या करे?', 'कौए की चोंच घड़े के पानी तक नहीं पहुँच रही। वह क्या करे?'], [[['घड़े में कंकड़ डाले', 'घड़े में कंकड़ डाले'], true, ['शाबाश! पानी ऊपर आ जाएगा।', 'शाबाश! पानी ऊपर आ जाएगा।']], [['हार मान ले', 'हार मान ले'], false, ['सोचो! कोई तरकीब निकालो।', 'सोचो! कोई तरकीब निकालो।']]]]], ['जहाँ चाह, वहाँ राह।', 'जहाँ चाह, वहाँ राह।'])]],
  ]);
  add(I, 'c2', 'maths', [
    ['💯', 'Numbers to 999', '999 तक संख्याएँ', [g('bundles', 'Hundreds, tens, ones', 'सैकड़ा, दहाई, इकाई', { max: 999 })]],
    ['🏷️', 'Place and face value', 'स्थानीय और अंकित मान', [B.gen('placevalue', { title: T('Place value', 'स्थानीय मान'), level: 3 })]],
    ['➕', 'Addition with carrying', 'हासिल वाला जोड़', [lab('add', 4, 'Add with carry', 'हासिल के साथ जोड़')]],
    ['➖', 'Subtraction with borrowing', 'उधार वाला घटाव', [lab('sub', 4, 'Subtract with borrow', 'उधार के साथ घटाव')]],
    ['✖️', 'Multiplication', 'गुणा', [g('tables', 'Tables 2 to 5', '2 से 5 के पहाड़े', { tables: [2, 3, 4, 5] }), lab('mul', 2, 'Multiply', 'गुणा करो')]],
    ['➗', 'Sharing and division', 'बाँटना और भाग', [g('share', 'Share fairly', 'बराबर बाँटो'), lab('div', 2, 'Division facts', 'भाग के तथ्य')]],
    ['📐', 'Shapes and lines', 'आकृतियाँ और रेखाएँ', [B.shapes(T('Lines and shapes', 'रेखाएँ और आकृतियाँ'), ['slant', 'curve', 'oval', 'diamond'])]],
    ['📏', 'Length and weight', 'लंबाई और वज़न', [g('scale', 'Balance the scale', 'तराज़ू बराबर करो', { mode: 'balance', max: 15 })]],
    ['🕒', 'Time and calendar', 'समय और कैलेंडर', [g('clockset', 'Half past', 'साढ़े', { minutes: [0, 30] })]],
    ['💰', 'Money', 'पैसे', [g('shop', 'Shopping', 'खरीदारी', { max: 50, min: 5 })]],
    ['📊', 'Pictographs', 'चित्रालेख', [g('pictograph', 'Read and make charts', 'चार्ट बनाओ', { rounds: 3 })]],
    ['🔁', 'Number patterns', 'संख्या पैटर्न', [B.gen('numpattern', { title: T('What comes next?', 'आगे क्या?') })]],
  ]);
  add(I, 'c2', 'evs', [
    ['👀', 'Sense organs', 'ज्ञानेंद्रियाँ', [sc('body', 'match', 'Senses', 'इंद्रियाँ')]],
    ['🥗', 'Food we eat', 'हमारा भोजन', [sc('food', 'sort', 'Food groups', 'भोजन समूह')]],
    ['💧', 'Water', 'पानी', [sc('water', 'explain', 'Sources of water', 'पानी के स्रोत'), sc('water', 'quiz', 'Water quiz', 'पानी प्रश्नोत्तरी')]],
    ['🏘️', 'Houses', 'घर', [sc('shelter', 'match', 'Kinds of houses', 'घरों के प्रकार')]],
    ['🧥', 'Clothes', 'कपड़े', [sc('clothing', 'sort', 'Which clothes when?', 'कब कौन से कपड़े?')]],
    ['🚂', 'Transport', 'यातायात', [sc('transport', 'sort', 'Ways to travel', 'यात्रा के साधन')]],
    ['📞', 'Communication', 'संचार', [sc('communication', 'match', 'Ways to send messages', 'संदेश भेजने के तरीके')]],
    ['🌿', 'Plants', 'पौधे', [sc('plantparts', 'explain', 'Parts of a plant', 'पौधे के भाग'), sc('plantparts', 'sort', 'Which part do we eat?', 'कौन सा भाग खाते हैं?')]],
    ['🐾', 'Animals', 'जानवर', [sc('animalgroups', 'explain', 'Animal groups', 'जानवरों के समूह'), sc('homes', 'match', 'Animal homes', 'जानवरों के घर')]],
    ['🌦️', 'Weather', 'मौसम', [sc('weather', 'sort', 'What do we need?', 'क्या चाहिए?')]],
    ['👩‍⚕️', 'Our helpers', 'हमारे सहायक', [sc('helpers', 'match', 'Helpers and tools', 'सहायक और औज़ार')]],
  ]);

  add(I, 'c3', 'english', [
    ['📛', 'Nouns', 'संज्ञा', [bk('commonproper', 'Proper nouns'), bk('plural', 'Plurals')]],
    ['👉', 'Pronouns', 'सर्वनाम', [bk('pronoun', 'Replace with a pronoun')]],
    ['🌈', 'Adjectives', 'विशेषण', [bk('adjective', 'Describing words')]],
    ['🐢', 'Adverbs', 'क्रियाविशेषण', [bk('adverb', 'How is it done?')]],
    ['⏪', 'Verbs and tenses', 'क्रिया और काल', [bk('past', 'Past tense'), bk('nounverb', 'Find the verbs')]],
    ['🔗', 'Conjunctions', 'समुच्चयबोधक', [bk('conjunction', 'Join with and, but, so…')]],
    ['🅰️', 'Articles', 'आर्टिकल', [bk('article', 'a or an')]],
    ['📦', 'Prepositions', 'संबंधबोधक', [bk('preposition', 'Choose the preposition')]],
    ['↔️', 'Synonyms and antonyms', 'समानार्थी और विलोम', [bk('synonym', 'Synonyms'), bk('opposite', 'Antonyms')]],
    ['👂', 'Homophones', 'समध्वनि शब्द', [bk('homophone', 'Sound-alike words')]],
    ['✂️', 'Contractions', 'संक्षिप्त रूप', [bk('contraction', 'Short forms')]],
    ['❓', 'Punctuation', 'विराम चिह्न', [bk('punctuation', 'Correct the sentence')]],
    ['🔠', 'Dictionary order', 'शब्दकोश क्रम', [bk('alphabetical', 'ABC order')]],
  ]);
  add(I, 'c3', 'hindi', [
    ['📛', 'संज्ञा, क्रिया, विशेषण', 'संज्ञा, क्रिया, विशेषण', [bk('h_shabd', 'शब्द छाँटो', 'शब्द छाँटो')]],
    ['👉', 'सर्वनाम', 'सर्वनाम', [bk('h_sarvanam', 'सर्वनाम', 'सर्वनाम')]],
    ['👥', 'वचन', 'वचन', [bk('h_vachan', 'वचन बदलो', 'वचन बदलो')]],
    ['👦', 'लिंग', 'लिंग', [bk('h_ling', 'लिंग बदलो', 'लिंग बदलो')]],
    ['↔️', 'विलोम', 'विलोम', [bk('h_vilom', 'विलोम शब्द', 'विलोम शब्द')]],
    ['🔁', 'पर्यायवाची', 'पर्यायवाची', [bk('h_paryay', 'पर्यायवाची', 'पर्यायवाची')]],
    ['☝️', 'अनेक शब्दों के लिए एक शब्द', 'अनेक शब्दों के लिए एक शब्द', [bk('h_ekshabd', 'एक शब्द बताओ', 'एक शब्द बताओ')]],
    ['📅', 'महीने और दिन', 'महीने और दिन', [bk('h_months', 'महीने', 'महीने'), bk('h_days', 'दिन', 'दिन')]],
    ['🔢', 'गिनती 1–50', 'गिनती 1–50', [bk('h_ginti', 'गिनती', 'गिनती')]],
    ['✍️', 'शब्द रचना', 'शब्द रचना', [bk('h_spell', 'शब्द बनाओ', 'शब्द बनाओ')]],
  ]);
  add(I, 'c3', 'maths', [
    ['🔢', 'Numbers to 999', '999 तक संख्याएँ', [g('bundles', 'Build big numbers', 'बड़ी संख्याएँ बनाओ', { max: 999 }), B.gen('placevalue', { title: T('Place value', 'स्थानीय मान'), level: 3 })]],
    ['➕', 'Addition (3-digit)', 'जोड़ (तीन अंक)', [lab('add', 5, '3-digit addition', 'तीन अंकों का जोड़')]],
    ['➖', 'Subtraction (3-digit)', 'घटाव (तीन अंक)', [lab('sub', 5, '3-digit subtraction', 'तीन अंकों का घटाव')]],
    ['✖️', 'Tables 6 to 10', '6 से 10 के पहाड़े', [g('tables', 'Learn the tables', 'पहाड़े सीखो', { tables: [6, 7, 8, 9, 10] })]],
    ['✖️', 'Multiplication', 'गुणा', [lab('mul', 4, '2-digit × 1-digit', 'दो अंक × एक अंक')]],
    ['➗', 'Division', 'भाग', [lab('div', 3, 'Division facts', 'भाग के तथ्य'), lab('div', 4, 'Long division', 'लंबा भाग')]],
    ['🫓', 'Fractions', 'भिन्न', [g('fraction', 'Colour the fraction', 'भिन्न रंगो')]],
    ['⏰', 'Time', 'समय', [g('clockset', 'Quarter past and to', 'सवा और पौने', { minutes: [0, 15, 30, 45] })]],
    ['💰', 'Money', 'पैसे', [g('shop', 'Find the change', 'बाकी पैसे', { mode: 'change', max: 95, min: 12 })]],
    ['⚖️', 'Measurement', 'माप', [g('scale', 'Balance in kg', 'किलो में तौलो', { mode: 'balance', max: 20 })]],
    ['🔷', 'Geometry', 'ज्यामिति', [B.shapes(T('Draw shapes', 'आकृतियाँ बनाओ'), ['pentagon', 'hexagon', 'star', 'arrow']), g('mirror', 'Symmetry', 'सममिति', { rounds: 2, size: 8 })]],
    ['📊', 'Data handling', 'आँकड़े', [g('pictograph', 'Make a pictograph', 'चित्रालेख बनाओ', { rounds: 3 })]],
    ['🧠', 'Mental maths', 'मौखिक गणित', [lab('mix', 3, 'Mixed practice', 'मिला-जुला अभ्यास')]],
  ]);
  add(I, 'c3', 'evs', [
    ['🌱', 'Living and non-living', 'सजीव और निर्जीव', [sc('living', 'sort', 'Sort them', 'छाँटो')]],
    ['🪴', 'What plants need', 'पौधों की ज़रूरतें', [sc('plantneeds', 'explain', 'Plant needs', 'पौधों की ज़रूरतें'), sc('plantneeds', 'quiz', 'Quick check', 'जाँच')]],
    ['🌿', 'Parts of a plant', 'पौधे के भाग', [sc('plantparts', 'explain', 'Plant parts', 'पौधे के भाग'), sc('plantparts', 'sort', 'Parts we eat', 'खाने वाले भाग')]],
    ['🐾', 'Animal groups', 'जानवरों के समूह', [sc('animalgroups', 'explain', 'Animal groups', 'समूह'), sc('animalgroups', 'sort', 'Sort the animals', 'जानवर छाँटो')]],
    ['🥗', 'Food and health', 'भोजन और स्वास्थ्य', [sc('food', 'sort', 'Food groups', 'भोजन समूह')]],
    ['💧', 'Water', 'पानी', [sc('water', 'quiz', 'Water quiz', 'पानी प्रश्नोत्तरी')]],
    ['🌦️', 'Air and weather', 'हवा और मौसम', [sc('weather', 'sort', 'Weather wear', 'मौसम के कपड़े')]],
    ['🌍', 'The Earth and the sky', 'धरती और आकाश', [sc('earth', 'explain', 'Sun, Earth, Moon', 'सूरज, धरती, चाँद'), sc('earth', 'quiz', 'Space quiz', 'अंतरिक्ष प्रश्नोत्तरी')]],
    ['🚀', 'Transport and communication', 'यातायात और संचार', [sc('transport', 'sort', 'Transport', 'यातायात'), sc('communication', 'match', 'Communication', 'संचार')]],
    ['🧱', 'Materials', 'पदार्थ', [sc('materials', 'sort', 'What is it made of?', 'किससे बना है?')]],
    ['⚡', 'Safety with electricity', 'बिजली से सुरक्षा', [sc('electricity', 'sort', 'Uses electricity?', 'बिजली से चलता है?'), sc('electricity', 'quiz', 'Stay safe', 'सुरक्षित रहो')]],
  ]);

  // ================================================================ INTERNATIONAL (Cambridge Primary–style)
  const X = 'intl';
  const E1 = [['🔤', 'Phonics: first sounds', [g('pop', 'Pop the sound', 'ध्वनि फोड़ो', { lower: true, rounds: 3 }), bk('spelling', 'Spell CVC words')]], ['🎵', 'Rhyme time', [bk('rhyme', 'Rhyming words')]], ['📛', 'Nouns and verbs', [bk('nounverb', 'Naming and doing words')]], ['🌈', 'Adjectives', [bk('adjective', 'Describing words')]], ['👥', 'Plurals with s and es', [bk('plural', 'One and many')]], ['🅰️', 'a and an', [bk('article', 'a or an')]], ['❗', 'Sentences', [bk('punctuation', 'Capital letters and full stops')]], ['📦', 'Where is it?', [bk('preposition', 'Position words')]], ['🔠', 'Alphabet order', [bk('alphabetical', 'ABC order')]], ['↔️', 'Opposites', [bk('opposite', 'Opposites')]]];
  const E2 = [['🔤', 'Spelling patterns', [bk('spelling', 'Spell it')]], ['⏪', 'Past tense', [bk('past', 'What happened yesterday?')]], ['👉', 'Pronouns', [bk('pronoun', 'He, she, it, they')]], ['✍️', 'is, are, has, have', [bk('isare', 'is / am / are'), bk('hashave', 'has / have')]], ['🔗', 'Joining words', [bk('conjunction', 'and, but, so, because')]], ['🌻', 'Compound words', [bk('compound', 'Make a compound word')]], ['↔️', 'Synonyms', [bk('synonym', 'Words with the same meaning')]], ['👂', 'Homophones', [bk('homophone', 'Sound-alike words')]], ['❓', 'Questions and exclamations', [bk('punctuation', 'Choose the right punctuation')]], ['🏙️', 'Proper nouns', [bk('commonproper', 'Special names')]]];
  const E3 = [['🐢', 'Adverbs', [bk('adverb', 'How did it happen?')]], ['✂️', 'Contractions', [bk('contraction', 'Short forms')]], ['🔗', 'Conjunctions', [bk('conjunction', 'Joining clauses')]], ['⏪', 'Irregular past tense', [bk('past', 'Past tense')]], ['👑', 'Gender words', [bk('gender', 'Masculine and feminine')]], ['👥', 'Irregular plurals', [bk('plural', 'Plurals')]], ['↔️', 'Synonyms and antonyms', [bk('synonym', 'Synonyms'), bk('opposite', 'Antonyms')]], ['📚', 'Dictionary skills', [bk('alphabetical', 'Order the words')]], ['👂', 'Homophones', [bk('homophone', 'Homophones')]], ['🌈', 'Expanded noun phrases', [bk('adjective', 'Add describing words')]], ['❗', 'Punctuation check', [bk('punctuation', 'Edit the sentence')]]];
  [['c1', E1], ['c2', E2], ['c3', E3]].forEach(([c, rows]) => add(X, c, 'english', rows.map(([e, en, acts]) => [e, en, en, acts])));
  add(X, 'c1', 'maths', [
    ['🔢', 'Counting to 20', '20 तक गिनती', [g('countlab', 'Count forwards', 'आगे गिनो', { mode: 'up', max: 20 }), g('tenframe', 'Ten frames', 'दस का खाना', { min: 5, max: 20 })]],
    ['🔙', 'Counting back', 'उल्टी गिनती', [g('countlab', 'Countdown!', 'उल्टी गिनती!', { mode: 'down', max: 20 })]],
    ['🔟', 'Number bonds to 10', '10 के जोड़े', [g('tenframe', 'Make 10', '10 बनाओ', { mode: 'make10' })]],
    ['➕', 'Adding', 'जोड़', [lab('add', 1, 'Add with pictures', 'चित्रों से जोड़'), lab('add', 2, 'Add to 20', '20 तक जोड़')]],
    ['➖', 'Taking away', 'घटाना', [lab('sub', 1, 'Take away with pictures', 'चित्रों से घटाओ')]],
    ['🐸', 'Number line', 'संख्या रेखा', [g('numline', 'Hop on the line', 'रेखा पर कूदो', { max: 20, sub: true })]],
    ['🔺', '2D shapes', '2D आकृतियाँ', [B.shapes(T('Draw 2D shapes', '2D आकृतियाँ बनाओ'), ['circle', 'triangle', 'square', 'rectangle'])]],
    ['🔴', 'Patterns', 'पैटर्न', [B.gen('pattern', { title: T('Repeating patterns', 'दोहराते पैटर्न') })]],
    ['⚖️', 'Heavier and lighter', 'भारी और हल्का', [g('scale', 'Compare mass', 'वज़न की तुलना', { mode: 'compare' })]],
    ['🕐', 'Time', 'समय', [g('clockset', 'O’clock', 'पूरे घंटे', { minutes: [0] })]],
    ['🪙', 'Money', 'पैसे', [g('shop', 'Pay with coins', 'सिक्कों से पैसे दो', { max: 20 })]],
    ['📊', 'Sorting and data', 'छाँटना और आँकड़े', [g('pictograph', 'Block graph', 'ब्लॉक ग्राफ़')]],
  ]);
  add(X, 'c2', 'maths', [
    ['💯', 'Numbers to 100', '100 तक संख्याएँ', [g('bundles', 'Tens and ones', 'दहाई और इकाई', { max: 99 })]],
    ['🔁', 'Counting in steps', 'कदमों में गिनती', [g('countlab', 'Count in 2s, 5s, 10s', '2, 5, 10 से गिनो', { mode: 'skip', max: 100 })]],
    ['➕', 'Addition strategies', 'जोड़ के तरीके', [lab('add', 3, '2-digit addition', 'दो अंकों का जोड़'), lab('add', 4, 'With regrouping', 'हासिल के साथ')]],
    ['➖', 'Subtraction strategies', 'घटाव के तरीके', [lab('sub', 3, '2-digit subtraction', 'दो अंकों का घटाव')]],
    ['✖️', 'Multiplication as arrays', 'पंक्तियों से गुणा', [lab('mul', 1, 'Groups and arrays', 'समूह और पंक्तियाँ'), g('tables', 'Tables 2, 5, 10', '2, 5, 10 के पहाड़े', { tables: [2, 5, 10] })]],
    ['➗', 'Sharing and grouping', 'बाँटना और समूह', [g('share', 'Share equally', 'बराबर बाँटो'), lab('div', 1, 'Division by sharing', 'बाँटकर भाग')]],
    ['🫓', 'Halves and quarters', 'आधा और चौथाई', [g('fraction', 'Colour the fraction', 'भिन्न रंगो', { parts: [[1, 2], [1, 4], [2, 4]] })]],
    ['🔷', 'Shapes and symmetry', 'आकृतियाँ और सममिति', [B.shapes(T('Draw shapes', 'आकृतियाँ बनाओ'), ['pentagon', 'hexagon', 'oval']), g('mirror', 'Symmetry', 'सममिति', { rounds: 2 })]],
    ['🕒', 'Time to half hour', 'साढ़े तक समय', [g('clockset', 'Half past', 'साढ़े', { minutes: [0, 30] })]],
    ['💰', 'Money', 'पैसे', [g('shop', 'Shopping', 'खरीदारी', { max: 50, min: 5 })]],
    ['📊', 'Pictograms', 'चित्रालेख', [g('pictograph', 'Make a pictogram', 'चित्रालेख बनाओ', { rounds: 3 })]],
  ]);
  add(X, 'c3', 'maths', [
    ['🔢', 'Numbers to 1000', '1000 तक संख्याएँ', [g('bundles', 'Hundreds, tens, ones', 'सैकड़ा, दहाई, इकाई', { max: 999 }), g('countlab', 'Number neighbours', 'संख्या के पड़ोसी', { mode: 'near', max: 999, rounds: 6 })]],
    ['➕', 'Adding 3-digit numbers', 'तीन अंकों का जोड़', [lab('add', 5, 'Column addition', 'स्तंभ जोड़')]],
    ['➖', 'Subtracting 3-digit numbers', 'तीन अंकों का घटाव', [lab('sub', 5, 'Column subtraction', 'स्तंभ घटाव')]],
    ['✖️', 'Times tables 3 and 4', '3 और 4 के पहाड़े', [g('tables', 'Tables 3, 4, 6, 8', '3, 4, 6, 8 के पहाड़े', { tables: [3, 4, 6, 8] })]],
    ['✖️', 'Multiplying', 'गुणा', [lab('mul', 4, '2-digit × 1-digit', 'दो अंक × एक अंक')]],
    ['➗', 'Dividing', 'भाग', [lab('div', 3, 'Division facts', 'भाग के तथ्य'), lab('div', 4, 'Divide bigger numbers', 'बड़ी संख्याओं का भाग')]],
    ['🫓', 'Fractions', 'भिन्न', [g('fraction', 'Fractions of shapes', 'आकृतियों के भिन्न'), B.gen('fraction', { title: T('Name the fraction', 'भिन्न पहचानो') })]],
    ['⏰', 'Time', 'समय', [g('clockset', 'Quarter hours', 'सवा और पौने', { minutes: [0, 15, 30, 45] })]],
    ['⚖️', 'Mass and capacity', 'वज़न और क्षमता', [g('scale', 'Balance in kg', 'किलो में तौलो', { mode: 'balance', max: 20 })]],
    ['💰', 'Money and change', 'पैसे और बाकी', [g('shop', 'Give change', 'बाकी पैसे', { mode: 'change', max: 95, min: 12 })]],
    ['🧩', 'Problem solving', 'समस्या हल करना', [B.gen('word', { title: T('Word problems', 'शब्द समस्याएँ'), level: 3 }), g('pyramid', 'Number pyramid', 'संख्या पिरामिड', { rows: 4, max: 9, hide: 4 })]],
  ]);
  const S1 = [['🌱', 'Living things', 'सजीव', [sc('living', 'explain', 'Living or not?'), sc('living', 'sort', 'Sort them')]], ['🌿', 'Plants', 'पौधे', [sc('plantparts', 'explain', 'Parts of a plant'), sc('plantneeds', 'quiz', 'What plants need')]], ['👀', 'My senses', 'मेरी इंद्रियाँ', [sc('body', 'match', 'Five senses')]], ['🐣', 'Animals and babies', 'जानवर और बच्चे', [sc('babies', 'match', 'Baby animals')]], ['🪵', 'Materials', 'पदार्थ', [sc('materials', 'sort', 'What is it made of?')]], ['🪶', 'Hard and soft', 'कठोर और मुलायम', [sc('properties', 'sort', 'Feel it')]], ['👉', 'Pushes and pulls', 'धक्का और खिंचाव', [sc('forces', 'explain', 'What is a force?'), sc('forces', 'sort', 'Push or pull?')]], ['🔊', 'Sound', 'ध्वनि', [sc('sound', 'explain', 'How sound is made'), sc('sound', 'sort', 'Loud or quiet?')]], ['🌦️', 'Weather', 'मौसम', [sc('weather', 'sort', 'Dress for the weather')]], ['🏠', 'Animal homes', 'जानवरों के घर', [sc('homes', 'match', 'Who lives where?')]]];
  const S2 = [['🐾', 'Animal groups', 'जानवरों के समूह', [sc('animalgroups', 'explain', 'Groups'), sc('animalgroups', 'sort', 'Sort the animals')]], ['🏞️', 'Habitats', 'आवास', [sc('homes', 'match', 'Homes and habitats')]], ['🧊', 'Changing materials', 'बदलते पदार्थ', [sc('changes', 'sort', 'Can it change back?')]], ['💡', 'Light and dark', 'रोशनी और अँधेरा', [sc('light', 'explain', 'Light sources'), sc('light', 'sort', 'Gives light or not?')]], ['⚡', 'Electricity', 'बिजली', [sc('electricity', 'sort', 'Uses electricity?'), sc('electricity', 'quiz', 'Electrical safety')]], ['🌍', 'Earth and Sun', 'धरती और सूरज', [sc('earth', 'explain', 'Day and night'), sc('earth', 'quiz', 'Quick check')]], ['🥗', 'Healthy eating', 'स्वस्थ भोजन', [sc('food', 'sort', 'Food groups')]], ['💧', 'Water', 'पानी', [sc('water', 'explain', 'Water around us'), sc('water', 'quiz', 'Water quiz')]], ['🪵', 'Material properties', 'पदार्थ के गुण', [sc('properties', 'sort', 'Hard or soft?'), sc('materials', 'sort', 'Which material?')]], ['🌱', 'Growing plants', 'पौधे उगाना', [sc('plantneeds', 'explain', 'What plants need')]]];
  const S3 = [['🦴', 'Humans and animals', 'मनुष्य और जानवर', [sc('body', 'match', 'Body and its jobs'), sc('body', 'quiz', 'Healthy habits')]], ['🌿', 'Plant needs', 'पौधों की ज़रूरतें', [sc('plantneeds', 'explain', 'Light, water, air, soil'), sc('plantparts', 'sort', 'Parts we eat')]], ['👉', 'Forces and motion', 'बल और गति', [sc('forces', 'explain', 'Forces'), sc('forces', 'sort', 'Push or pull?')]], ['🔦', 'Light and shadows', 'रोशनी और परछाईं', [sc('light', 'explain', 'Shadows'), sc('light', 'sort', 'Light sources')]], ['🔊', 'Sound', 'ध्वनि', [sc('sound', 'sort', 'Loud and quiet')]], ['🧱', 'Materials', 'पदार्थ', [sc('materials', 'sort', 'Materials around us')]], ['🧊', 'Reversible changes', 'उलटे जा सकने वाले बदलाव', [sc('changes', 'sort', 'Can it change back?')]], ['🪐', 'Earth and space', 'धरती और अंतरिक्ष', [sc('earth', 'explain', 'Our solar system'), sc('earth', 'quiz', 'Space quiz')]], ['⚡', 'Electricity', 'बिजली', [sc('electricity', 'sort', 'Electrical or not?')]], ['🐾', 'Classifying animals', 'जानवरों का वर्गीकरण', [sc('animalgroups', 'sort', 'Sort the animals')]], ['🥗', 'Nutrition', 'पोषण', [sc('food', 'sort', 'Food groups')]]];
  [['c1', S1], ['c2', S2], ['c3', S3]].forEach(([c, rows]) => add(X, c, 'evs', rows));
})();
