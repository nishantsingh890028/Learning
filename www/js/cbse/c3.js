/* Class 3 – Santoor (English), Veena (Hindi), Maths Mela, Our Wondrous World. Original lesson text. */
(() => {
  'use strict';
  const { ch } = window.SYL; const B = window.SYLB; const { T } = B;
  const C = 'c3';

  // ================================================================ ENGLISH – Santoor 3
  ch(C, 'english', 1, '🎨', T('Colours', 'रंग'), [
    B.vocab(T('More colour words', 'और रंगों के नाम'), [['🩷', 'pink', 'गुलाबी'], ['🟫', 'brown', 'भूरा'], ['🩶', 'grey', 'स्लेटी'], ['🟪', 'violet', 'बैंगनी'], ['🥇', 'golden', 'सुनहरा'], ['🥈', 'silver', 'चाँदी जैसा'], ['🌌', 'dark blue', 'गहरा नीला'], ['🍵', 'light green', 'हल्का हरा']]),
    B.colour(T('Colour the flowers', 'फूल रंगो'), ['flower']),
  ]);
  ch(C, 'english', 2, '🐕', T('Badal and Moti', 'बादल और मोती'), [
    B.story(T('Badal’s puppy', 'बादल का पिल्ला'), [
      ['👦', 'Badal found a little puppy shivering in the rain. He named him Moti.', 'बादल को बारिश में काँपता हुआ एक पिल्ला मिला। उसने उसका नाम मोती रखा।'],
      ['🥣', 'Every day Badal gave Moti fresh water, food and a warm bed.', 'बादल रोज़ मोती को ताज़ा पानी, खाना और गरम बिस्तर देता था।'],
      ['🩺', 'When Moti was ill, Badal took him to the vet with his father.', 'जब मोती बीमार हुआ, बादल पापा के साथ उसे जानवरों के डॉक्टर के पास ले गया।'],
      ['🐶', 'Moti got well and became Badal’s best friend. He wagged his tail all day!', 'मोती ठीक हो गया और बादल का सबसे अच्छा दोस्त बन गया। वह दिन भर पूँछ हिलाता!'],
    ], ['Pets need love, food, water and care every day.', 'पालतू जानवरों को रोज़ प्यार, खाना, पानी और देखभाल चाहिए।'], [[['What did Badal name the puppy?', 'बादल ने पिल्ले का क्या नाम रखा?'], [['Moti', 'मोती'], ['Tommy', 'टॉमी'], ['Sheru', 'शेरू']], 0], [['Where did he take Moti when he was ill?', 'बीमार होने पर मोती को कहाँ ले गया?'], [['to the vet', 'जानवरों के डॉक्टर के पास'], ['to school', 'स्कूल'], ['to the market', 'बाज़ार']], 0]]),
  ]);
  ch(C, 'english', 3, '🤝', T('Best Friends', 'सबसे अच्छे दोस्त'), [
    B.situ(T('Being a good friend', 'अच्छा दोस्त बनना'), [
      ['🏆', ['Your friend won the drawing prize, not you.', 'ड्रॉइंग का इनाम तुम्हें नहीं, दोस्त को मिला।'], [[['Say "Well done! Your drawing is lovely."', 'कहो "बधाई हो! तुम्हारी ड्रॉइंग बहुत सुंदर है।"'], true, ['Being happy for friends is a big-hearted thing.', 'दोस्त की खुशी में खुश होना बड़ी बात है।']], [['Stop talking to them', 'उससे बात करना बंद कर दो'], false, ['It is okay to feel sad, but friends cheer for each other.', 'दुखी होना ठीक है, पर दोस्त एक-दूसरे का हौसला बढ़ाते हैं।']]]],
      ['🤫', ['A friend tells you a secret that someone is hurting them.', 'दोस्त बताता है कि कोई उसे परेशान करता है और यह राज़ है।'], [[['Tell a trusted grown-up – this kind of secret must be shared', 'किसी भरोसेमंद बड़े को बताओ – ऐसा राज़ बताना ज़रूरी है'], true, ['Yes. Secrets that hurt someone should never be kept.', 'हाँ। जिस राज़ से किसी को नुकसान हो, उसे कभी मत छिपाओ।']], [['Keep the secret', 'राज़ रखो'], false, ['When someone is hurt, a grown-up must know.', 'जब किसी को चोट पहुँचे, बड़ों को पता होना चाहिए।']]]],
    ], ['Good friends are kind, honest and fair.', 'अच्छे दोस्त दयालु, ईमानदार और निष्पक्ष होते हैं।']),
  ]);
  ch(C, 'english', 4, '🌷', T('Out in the Garden', 'बगीचे में'), [
    B.spot(T('Garden hunt', 'बगीचे में खोज'), [[[['🌻', 10, 50, 60, 'sunflower', 'सूरजमुखी'], ['🐝', 24, 30, 30, 'bee', 'मधुमक्खी'], ['🐌', 46, 80, 30, 'snail', 'घोंघा'], ['🌳', 68, 8, 100, 'tree', 'पेड़'], ['🐿️', 80, 40, 36, 'squirrel', 'गिलहरी'], ['🪱', 34, 88, 26, 'earthworm', 'केंचुआ'], ['🐞', 56, 56, 26, 'ladybird', 'लेडीबर्ड'], ['🦋', 40, 18, 32, 'butterfly', 'तितली']],
      [[['Which one makes honey?', 'शहद कौन बनाता है?'], 1], [['Who carries its house on its back?', 'कौन अपना घर पीठ पर लेकर चलता है?'], 2], [['Who lives in the soil and helps plants?', 'मिट्टी में रहकर पौधों की मदद कौन करता है?'], 5], [['Who climbs trees and loves nuts?', 'पेड़ पर चढ़ने वाला, मेवे पसंद करने वाला कौन?'], 4], [['Tap the red insect with black spots.', 'काले धब्बों वाला लाल कीड़ा दबाओ।'], 6]], '#dcfce7']]),
  ]);
  ch(C, 'english', 5, '🧸', T('Talking Toys', 'बोलते खिलौने'), [
    B.sentence(T('Toy talk', 'खिलौनों की बातें'), [['Can I play with you?', '🧸'], ['Let us share the blocks.', '🧱'], ['Please wait for your turn.', '⏳'], ['That was a fun game!', '🎲'], ['Where did you put the ball?', '⚽']]),
    B.quiz(T('Asking questions', 'प्रश्न पूछना'), [['❓', ['Which word asks about a place?', 'जगह के बारे में कौन सा शब्द पूछता है?'], ['Where', 'When', 'Who'], 0], ['⏰', ['Which word asks about time?', 'समय के बारे में कौन सा शब्द पूछता है?'], ['Why', 'When', 'What'], 1], ['🧑', ['Which word asks about a person?', 'व्यक्ति के बारे में कौन सा शब्द पूछता है?'], ['Who', 'Where', 'How'], 0], ['🤔', ['Which word asks for a reason?', 'कारण पूछने वाला शब्द कौन सा है?'], ['Why', 'Which', 'Who'], 0]]),
  ]);
  ch(C, 'english', 6, '⛵', T('Paper Boats', 'काग़ज़ की नाव'), [
    B.order(T('Fold a paper boat', 'काग़ज़ की नाव बनाओ'), [[['How do we make a paper boat?', 'काग़ज़ की नाव कैसे बनाएँ?'], [['📄', 'Take paper', 'काग़ज़ लो'], ['📐', 'Fold in half', 'आधा मोड़ो'], ['🔺', 'Fold the corners', 'कोने मोड़ो'], ['🛶', 'Open into a boat', 'खोलकर नाव बनाओ'], ['🌊', 'Float it!', 'पानी में तैराओ!']]]]),
    B.quiz(T('Float or sink?', 'तैरेगा या डूबेगा?'), [['⛵', ['A paper boat will…', 'काग़ज़ की नाव…'], [['float', 'तैरेगी'], ['sink', 'डूबेगी']], 0], ['🪨', ['A stone will…', 'पत्थर…'], [['float', 'तैरेगा'], ['sink', 'डूबेगा']], 1], ['🍃', ['A leaf will…', 'पत्ता…'], [['float', 'तैरेगा'], ['sink', 'डूबेगा']], 0], ['🔑', ['A key will…', 'चाबी…'], [['float', 'तैरेगी'], ['sink', 'डूबेगी']], 1]]),
  ]);
  ch(C, 'english', 7, '🟠', T('The Big Laddoo', 'बड़ा लड्डू'), [B.g('fraction', T('Share the laddoo', 'लड्डू बाँटो'), { parts: [[1, 2], [1, 4], [2, 4], [3, 4]] })]);
  ch(C, 'english', 8, '🙏', T('Thank God: gratitude', 'धन्यवाद: कृतज्ञता'), [
    B.poem(T('Thank you for today', 'आज के लिए धन्यवाद'), '🌅', 'gentle', ['Thank you for the morning sun,', 'Thank you for the games and fun,', 'Thank you for my food and bed,', 'And for the loving words they said.'], ['We feel thankful for the good things in our life.', 'हम अपने जीवन की अच्छी चीज़ों के लिए आभारी होते हैं।']),
  ]);
  ch(C, 'english', 9, '✨', T('Madhu’s Wish', 'मधु की इच्छा'), [
    B.situ(T('Kind wishes', 'अच्छी इच्छाएँ'), [['🌟', ['Madhu sees a shooting star. She can make one wish.', 'मधु को टूटता तारा दिखता है। वह एक इच्छा माँग सकती है।'], [[['"I wish my sick friend gets well soon."', '"मेरी बीमार सहेली जल्दी ठीक हो जाए।"'], true, ['A kind wish for others is the most beautiful wish.', 'दूसरों के लिए अच्छी इच्छा सबसे सुंदर होती है।']], [['"I wish everyone else loses the race."', '"बाकी सब दौड़ हार जाएँ।"'], false, ['Hmm, that is not kind. Wish good things for everyone.', 'यह अच्छा नहीं। सबके लिए अच्छा सोचो।']]]]]),
  ]);
  ch(C, 'english', 10, '🌃', T('Night', 'रात'), [
    B.vocab(T('Night sky', 'रात का आसमान'), [['🌙', 'moon', 'चाँद'], ['⭐', 'star', 'तारा'], ['🦉', 'owl', 'उल्लू'], ['🦇', 'bat', 'चमगादड़'], ['🌌', 'sky', 'आसमान'], ['😴', 'sleep', 'नींद']]),
    B.dots(T('Join the stars', 'तारे जोड़ो'), ['star', 'rocket'], 'num'),
  ]);
  ch(C, 'english', 11, '🚀', T('Chandrayaan', 'चंद्रयान'), [
    B.explain(T('India goes to the Moon', 'भारत चाँद पर'), [['🇮🇳', ['ISRO', 'इसरो'], ['ISRO is India’s space agency. Its scientists build rockets and satellites.', 'इसरो भारत की अंतरिक्ष संस्था है। इसके वैज्ञानिक रॉकेट और उपग्रह बनाते हैं।']], ['🚀', ['Chandrayaan-3', 'चंद्रयान-3'], ['In August 2023, Chandrayaan-3 landed near the Moon’s south pole – India was the first to land there!', 'अगस्त 2023 में चंद्रयान-3 चाँद के दक्षिणी ध्रुव के पास उतरा – वहाँ उतरने वाला भारत पहला देश बना!']], ['🤖', ['Pragyan rover', 'प्रज्ञान रोवर'], ['A small robot called Pragyan moved on the Moon and studied its soil.', 'प्रज्ञान नाम का छोटा रोबोट चाँद पर चला और वहाँ की मिट्टी की जाँच की।']]]),
    B.order(T('Launch!', 'प्रक्षेपण!'), [[['Count down for launch!', 'प्रक्षेपण की उलटी गिनती!'], [['5️⃣', 'five'], ['4️⃣', 'four'], ['3️⃣', 'three'], ['2️⃣', 'two'], ['1️⃣', 'one'], ['🚀', 'lift off!']]]]),
  ]);
  ch(C, 'english', 12, '✍️', T('Grammar: past and present', 'व्याकरण: भूत और वर्तमान'), [
    B.match(T('Today and yesterday', 'आज और कल'), [['play', 'played'], ['go', 'went'], ['eat', 'ate'], ['run', 'ran'], ['sing', 'sang'], ['write', 'wrote'], ['see', 'saw'], ['jump', 'jumped']]),
    B.spell(T('Spell longer words', 'लंबे शब्द लिखो'), [['PLANT', '🌱'], ['TRAIN', '🚂'], ['CLOUD', '☁️'], ['HOUSE', '🏠'], ['WATER', '💧'], ['TIGER', '🐯'], ['SCHOOL', '🏫']]),
  ]);

  // ================================================================ HINDI – Veena 3 (themes)
  ch(C, 'hindi', 1, '🐜', T('प्रकृति से सीखो', 'प्रकृति से सीखो'), [
    B.match(T('किससे क्या सीखें?', 'किससे क्या सीखें?'), [['🐜 चींटी', 'मेहनत करना'], ['🌳 पेड़', 'सबको छाया देना'], ['🌊 नदी', 'आगे बढ़ते रहना'], ['☀️ सूरज', 'समय पर उठना'], ['🐝 मधुमक्खी', 'मिलकर काम करना'], ['🌸 फूल', 'मुस्कुराना']]),
  ]);
  ch(C, 'hindi', 2, '🦗', T('कितने पैर?', 'कितने पैर?'), [
    B.quiz(T('पैर गिनो', 'पैर गिनो'), [['🐜', ['चींटी के कितने पैर होते हैं?', 'चींटी के कितने पैर होते हैं?'], ['छह', 'चार', 'आठ'], 0, ['सभी कीड़ों के छह पैर होते हैं।', 'सभी कीड़ों के छह पैर होते हैं।']], ['🕷️', ['मकड़ी के कितने पैर?', 'मकड़ी के कितने पैर?'], ['छह', 'आठ', 'दस'], 1, ['मकड़ी कीड़ा नहीं है, उसके आठ पैर होते हैं।', 'मकड़ी कीड़ा नहीं है, उसके आठ पैर होते हैं।']], ['🐄', ['गाय के कितने पैर?', 'गाय के कितने पैर?'], ['दो', 'चार', 'छह'], 1], ['🐦', ['चिड़िया के कितने पैर?', 'चिड़िया के कितने पैर?'], ['दो', 'चार', 'शून्य'], 0], ['🐍', ['साँप के कितने पैर?', 'साँप के कितने पैर?'], ['शून्य', 'दो', 'चार'], 0]]),
  ]);
  ch(C, 'hindi', 3, '🐦', T('बया – चिड़िया रानी', 'बया – चिड़िया रानी'), [
    B.explain(T('बया का घोंसला', 'बया का घोंसला'), [['🐦', ['बया', 'बया'], ['The baya weaver is a small bird that weaves a hanging nest from grass.', 'बया एक छोटी चिड़िया है जो घास से लटकता हुआ घोंसला बुनती है।']], ['🪺', ['घोंसला', 'घोंसला'], ['The nest has a long tube-like door so snakes cannot get in.', 'घोंसले का दरवाज़ा लंबी नली जैसा होता है ताकि साँप अंदर न आ सके।']], ['🧵', ['बुनकर', 'बुनकर'], ['It is called a weaver because it weaves like a tailor.', 'इसे बुनकर चिड़िया कहते हैं क्योंकि यह दर्ज़ी की तरह बुनती है।']]]),
  ]);
  ch(C, 'hindi', 4, '🍲', T('बीरबल की खिचड़ी', 'बीरबल की खिचड़ी'), [
    B.story(T('बीरबल की खिचड़ी', 'बीरबल की खिचड़ी'), [
      ['❄️', 'A poor man stood all night in a cold lake to win a prize from King Akbar.', 'एक गरीब आदमी ने राजा अकबर से इनाम पाने के लिए पूरी रात ठंडी झील में खड़े होकर बिताई।'],
      ['🏮', 'The courtiers said, "He saw a lamp far away. He got warmth from it. No prize!"', 'दरबारियों ने कहा, "उसने दूर एक दीया देखा। उसी से गरमी मिली। इनाम नहीं मिलेगा!"'],
      ['🍲', 'Next day Birbal hung a pot of khichdi high up, far above a small fire.', 'अगले दिन बीरबल ने खिचड़ी की हांडी बहुत ऊपर टाँग दी, नीचे छोटी सी आग जलाई।'],
      ['🤴', '"How can it cook so far from the fire?" asked Akbar. Birbal smiled, "Just like the man got warmth from a far lamp!" Akbar understood and gave the prize.', '"इतनी दूर आग से खिचड़ी कैसे पकेगी?" अकबर ने पूछा। बीरबल मुस्कुराए, "जैसे उस आदमी को दूर के दीये से गरमी मिली!" अकबर समझ गए और इनाम दिया।'],
    ], ['Be fair, and use clever thinking to stand up for what is right.', 'न्याय करो, और सही बात के लिए समझदारी से आवाज़ उठाओ।'], [[['बीरबल ने हांडी कहाँ टाँगी?', 'बीरबल ने हांडी कहाँ टाँगी?'], [['आग से बहुत ऊपर', 'आग से बहुत ऊपर'], ['आग के अंदर', 'आग के अंदर']], 0], [['बीरबल क्या समझाना चाहते थे?', 'बीरबल क्या समझाना चाहते थे?'], [['दूर के दीये से गरमी नहीं मिलती', 'दूर के दीये से गरमी नहीं मिलती'], ['खिचड़ी स्वादिष्ट है', 'खिचड़ी स्वादिष्ट है']], 0]]),
  ]);
  ch(C, 'hindi', 5, '✉️', T('मित्र को पत्र', 'मित्र को पत्र'), [
    B.order(T('पत्र के भाग', 'पत्र के भाग'), [[['पत्र के भाग सही क्रम में लगाओ।', 'पत्र के भाग सही क्रम में लगाओ।'], [['📍', 'पता और तारीख़', 'पता और तारीख़'], ['👋', 'प्रिय मित्र (संबोधन)', 'प्रिय मित्र (संबोधन)'], ['📝', 'मुख्य बात', 'मुख्य बात'], ['💌', 'तुम्हारा मित्र (समाप्ति)', 'तुम्हारा मित्र (समाप्ति)'], ['✍️', 'नाम', 'नाम']]]]),
  ]);
  ch(C, 'hindi', 6, '🌼', T('फूलदेई – प्रकृति पर्व', 'फूलदेई – प्रकृति पर्व'), [
    B.explain(T('फूलदेई', 'फूलदेई'), [['🌼', ['फूलों का त्योहार', 'फूलों का त्योहार'], ['Phool Dei is a spring festival of Uttarakhand. Children put fresh flowers on every doorstep.', 'फूलदेई उत्तराखंड का वसंत का त्योहार है। बच्चे हर घर की देहरी पर ताज़े फूल रखते हैं।']], ['🙏', ['शुभकामना', 'शुभकामना'], ['They wish every home happiness and good harvests.', 'वे हर घर के लिए खुशी और अच्छी फ़सल की कामना करते हैं।']]]),
    B.match(T('राज्य और त्योहार', 'राज्य और त्योहार'), [['उत्तराखंड', 'फूलदेई'], ['पंजाब', 'लोहड़ी'], ['असम', 'बिहू'], ['केरल', 'ओणम'], ['तमिलनाडु', 'पोंगल'], ['महाराष्ट्र', 'गणेश चतुर्थी']]),
  ]);
  ch(C, 'hindi', 7, '🪢', T('रस्साकशी: मिलकर खेलो', 'रस्साकशी: मिलकर खेलो'), [
    B.hwords(T('भारत के खेल', 'भारत के खेल'), [['🪢', 'रस्साकशी', 'tug of war'], ['🏃', 'कबड्डी', 'kabaddi'], ['🪀', 'गिल्ली-डंडा', 'gilli-danda'], ['🪨', 'पिट्ठू', 'seven stones'], ['🪁', 'पतंगबाज़ी', 'kite flying'], ['♟️', 'शतरंज', 'chess']]),
  ]);
  ch(C, 'hindi', 8, '🌳', T('पेड़ों की अम्मा थिमक्का', 'पेड़ों की अम्मा थिमक्का'), [
    B.explain(T('सालुमरदा थिमक्का', 'सालुमरदा थिमक्का'), [['👵', ['थिमक्का', 'थिमक्का'], ['Saalumarada Thimmakka from Karnataka planted and cared for hundreds of banyan trees along a road.', 'कर्नाटक की सालुमरदा थिमक्का ने एक सड़क के किनारे सैकड़ों बरगद के पेड़ लगाए और पाले।']], ['💧', ['देखभाल', 'देखभाल'], ['She carried water for them every day, like a mother.', 'वह माँ की तरह रोज़ उनके लिए पानी ढोकर लाती थीं।']], ['🏅', ['सम्मान', 'सम्मान'], ['India honoured her with the Padma Shri.', 'भारत ने उन्हें पद्मश्री से सम्मानित किया।']]]),
  ]);
  ch(C, 'hindi', 9, '🦊', T('बोलने वाली माँद', 'बोलने वाली माँद'), [
    B.story(T('बोलने वाली माँद', 'बोलने वाली माँद'), [
      ['🦊', 'A jackal came home to his cave and saw a lion’s footprints going in, but none coming out.', 'एक गीदड़ अपनी माँद पर लौटा। उसने शेर के पंजों के निशान अंदर जाते देखे, पर बाहर आते नहीं।'],
      ['🤔', 'He thought, "The lion is hiding inside!" He shouted, "Hello cave! Why don’t you answer me today?"', 'उसने सोचा, "शेर अंदर छिपा है!" वह चिल्लाया, "ओ माँद! आज तुम जवाब क्यों नहीं देती?"'],
      ['🦁', 'The foolish lion answered in a big voice, "Come in!"', 'मूर्ख शेर ने ज़ोर से जवाब दिया, "अंदर आ जाओ!"'],
      ['🏃', 'The jackal laughed, "Caves don’t talk!" and ran away safely.', 'गीदड़ हँसा, "माँद कभी नहीं बोलती!" और सुरक्षित भाग गया।'],
    ], ['Think before you act – be alert and use your mind.', 'कुछ भी करने से पहले सोचो – सावधान रहो और दिमाग से काम लो।'], [[['गीदड़ को कैसे पता चला कि शेर अंदर है?', 'गीदड़ को कैसे पता चला कि शेर अंदर है?'], [['पंजों के निशान देखकर', 'पंजों के निशान देखकर'], ['शेर की आवाज़ सुनकर', 'शेर की आवाज़ सुनकर']], 0]]),
  ]);
  ch(C, 'hindi', 10, '🇮🇳', T('भारत – हम अनेक किंतु एक', 'भारत – हम अनेक किंतु एक'), [
    B.colour(T('तिरंगा', 'तिरंगा'), ['flag']),
    B.poem(T('मेरा भारत', 'मेरा भारत'), '🇮🇳', 'march', ['उत्तर में हिमालय ऊँचा,', 'दक्षिण में सागर गहरा।', 'अलग-अलग हैं बोली-भाषा,', 'फिर भी एक तिरंगा प्यारा।']),
  ]);
  ch(C, 'hindi', 11, '📝', T('विशेषण', 'विशेषण'), [
    B.quiz(T('विशेषण पहचानो', 'विशेषण पहचानो'), [['🍎', ['"लाल सेब" में विशेषण कौन सा है?', '"लाल सेब" में विशेषण कौन सा है?'], ['लाल', 'सेब'], 0, ['लाल शब्द सेब की विशेषता बताता है।', 'लाल शब्द सेब की विशेषता बताता है।']], ['🐘', ['"बड़ा हाथी" में विशेषण?', '"बड़ा हाथी" में विशेषण?'], ['हाथी', 'बड़ा'], 1], ['🌸', ['"सुंदर फूल" में विशेषण?', '"सुंदर फूल" में विशेषण?'], ['सुंदर', 'फूल'], 0], ['🍬', ['"मीठी जलेबी" में विशेषण?', '"मीठी जलेबी" में विशेषण?'], ['जलेबी', 'मीठी'], 1]]),
  ]);
  ch(C, 'hindi', 12, '🏃', T('क्रिया', 'क्रिया'), [
    B.sort(T('संज्ञा या क्रिया?', 'संज्ञा या क्रिया?'), [['n', '📛', 'संज्ञा (नाम)', 'संज्ञा (नाम)'], ['v', '🏃', 'क्रिया (काम)', 'क्रिया (काम)']], [['🏫', 'n', 'स्कूल'], ['🐄', 'n', 'गाय'], ['👩', 'n', 'माँ'], ['📚', 'n', 'किताब'], ['🏃', 'v', 'दौड़ना'], ['🍽️', 'v', 'खाना'], ['🎤', 'v', 'गाना'], ['😴', 'v', 'सोना']]),
  ]);
  ch(C, 'hindi', 13, '🔁', T('पर्यायवाची शब्द', 'पर्यायवाची शब्द'), [
    B.match(T('एक जैसे अर्थ', 'एक जैसे अर्थ'), [['सूरज', 'सूर्य'], ['पानी', 'जल'], ['आँख', 'नयन'], ['पेड़', 'वृक्ष'], ['घर', 'मकान'], ['माँ', 'माता']]),
  ]);
  ch(C, 'hindi', 14, '✍️', T('सुलेख: वाक्य लिखो', 'सुलेख: वाक्य लिखो'), [
    B.sentence(T('वाक्य बनाओ', 'वाक्य बनाओ'), [['चींटी बहुत मेहनती होती है।', '🐜', 'The ant is very hard-working.'], ['हमें पानी बचाना चाहिए।', '💧', 'We should save water.'], ['बया सुंदर घोंसला बनाती है।', '🪺', 'The baya makes a beautiful nest.'], ['हम सब भारत के बच्चे हैं।', '🇮🇳', 'We are all children of India.'], ['पेड़ हमें छाया देते हैं।', '🌳', 'Trees give us shade.']]),
  ]);

  // ================================================================ MATHS – Maths Mela 3
  ch(C, 'maths', 1, '🏷️', T('What’s in a Name? Tally marks', 'नाम में क्या है? मिलान चिह्न'), [
    B.quiz(T('Tally marks', 'मिलान चिह्न'), [['卌', ['卌 (four lines and a cross line) stands for…', '卌 (चार रेखाएँ और एक काटती रेखा) कितना है?'], ['5', '4', '10'], 0], ['卌 ||', ['卌 || is…', '卌 || कितना है?'], ['7', '6', '12'], 0], ['卌 卌', ['卌 卌 is…', '卌 卌 कितना है?'], ['10', '8', '5'], 0], ['🅰️', ['How many letters in the name ASHA?', 'ASHA नाम में कितने अक्षर हैं?'], ['4', '3', '5'], 0]]),
    B.g('pictograph', T('Class survey', 'कक्षा का सर्वे'), { kinds: ['🍎', '🍌', '🥭', '🍇'], rounds: 2 }),
  ]);
  ch(C, 'maths', 2, '🧸', T('Toy Joy: shapes and solids', 'खिलौनों का मज़ा: आकार'), [
    B.match(T('Faces of solids', 'ठोस की सतहें'), [[['cube', 'घन'], ['6 square faces', '6 वर्गाकार सतहें']], [['cylinder', 'बेलन'], ['2 circles + 1 curved face', '2 वृत्त + 1 घुमावदार सतह']], [['cone', 'शंकु'], ['1 circle + 1 pointed top', '1 वृत्त + 1 नुकीला सिरा']], [['sphere', 'गोला'], ['only a curved face', 'सिर्फ़ घुमावदार सतह']]]),
    B.shapes(T('Draw more shapes', 'और आकार बनाओ'), ['pentagon', 'hexagon', 'crescent', 'arrow']),
  ]);
  ch(C, 'maths', 3, '💯', T('Double Century: numbers to 200', 'दोहरा शतक: 200 तक'), [B.g('bundles', T('Hundreds, tens, ones', 'सैकड़ा, दहाई, इकाई'), { max: 200 }), B.gen('compare', { title: T('Compare numbers', 'संख्याओं की तुलना'), level: 3 })]);
  ch(C, 'maths', 4, '🚆', T('Vacation with My Nani Maa', 'नानी माँ के साथ छुट्टियाँ'), [B.gen('word', { title: T('Journey sums', 'सफ़र के सवाल'), level: 3 }), B.gen('add', { title: T('Add bigger numbers', 'बड़ी संख्याएँ जोड़ो'), level: 3 })]);
  ch(C, 'maths', 5, '🔷', T('Fun with Shapes: sides & corners', 'आकारों का खेल: भुजाएँ और कोने'), [
    B.quiz(T('Sides and corners', 'भुजाएँ और कोने'), [['🔺', ['How many sides does a triangle have?', 'त्रिभुज की कितनी भुजाएँ होती हैं?'], ['3', '4', '5'], 0], ['⬛', ['How many corners does a square have?', 'वर्ग के कितने कोने होते हैं?'], ['3', '4', '6'], 1], ['⬢', ['A hexagon has how many sides?', 'षट्भुज की कितनी भुजाएँ?'], ['5', '6', '8'], 1], ['⚪', ['How many corners does a circle have?', 'वृत्त के कितने कोने?'], ['0', '1', '4'], 0], ['⬠', ['A pentagon has…', 'पंचभुज की…'], [['5 sides', '5 भुजाएँ'], ['6 sides', '6 भुजाएँ']], 0]]),
    B.g('mirror', T('Symmetry', 'सममिति'), { rounds: 3, size: 8 }),
  ]);
  ch(C, 'maths', 6, '🏘️', T('House of Hundreds – I', 'सैकड़ों का घर – 1'), [B.g('bundles', T('Build 3-digit numbers', 'तीन अंकों की संख्याएँ बनाओ'), { max: 999 }), B.gen('placevalue', { title: T('Place value', 'स्थानीय मान'), level: 3 })]);
  ch(C, 'maths', 7, '🧵', T('Raksha Bandhan: multiplication', 'रक्षा बंधन: गुणा'), [
    B.quiz(T('Arrays', 'पंक्तियाँ'), [['🔴🔴🔴\n🔴🔴🔴', ['2 rows of 3 beads. How many beads?', '3 मोतियों की 2 पंक्तियाँ। कुल कितने?'], ['6', '5', '9'], 0, ['2 × 3 = 6', '2 × 3 = 6']], ['🟡🟡🟡🟡\n🟡🟡🟡🟡\n🟡🟡🟡🟡', ['3 rows of 4. How many?', '4 की 3 पंक्तियाँ। कुल कितने?'], ['12', '7', '16'], 0, ['3 × 4 = 12', '3 × 4 = 12']], ['🧵🧵🧵🧵🧵', ['5 rakhis, each with 2 beads. How many beads?', '5 राखियाँ, हर एक में 2 मोती। कुल कितने मोती?'], ['10', '7', '25'], 0, ['5 × 2 = 10', '5 × 2 = 10']]]),
    B.gen('tables', { title: T('Times tables', 'पहाड़े'), level: 3 }),
  ]);
  ch(C, 'maths', 8, '🫓', T('Fair Share: halves and quarters', 'बराबर हिस्सा: आधा और चौथाई'), [B.g('fraction', T('Colour the part', 'हिस्सा रंगो')), B.gen('fraction', { title: T('Name the fraction', 'भिन्न पहचानो') })]);
  ch(C, 'maths', 9, '🏘️', T('House of Hundreds – II', 'सैकड़ों का घर – 2'), [B.gen('add', { title: T('3-digit addition', 'तीन अंकों का जोड़'), level: 3 }), B.gen('sub', { title: T('3-digit subtraction', 'तीन अंकों का घटाव'), level: 3 })]);
  ch(C, 'maths', 10, '🎉', T('Fun at Class Party: division', 'कक्षा की पार्टी: भाग'), [B.g('share', T('Share the treats', 'मिठाई बाँटो'), { maxPlates: 5, maxEach: 4 }), B.gen('divide', { title: T('Division facts', 'भाग के तथ्य') })]);
  ch(C, 'maths', 11, '⚖️', T('Filling and Lifting: weight', 'भरना और उठाना: वज़न'), [B.g('scale', T('Balance it', 'तराज़ू बराबर करो'), { mode: 'balance', max: 20 }), B.g('scale', T('Heavier or lighter', 'भारी या हल्का'), { mode: 'compare', rounds: 3 })]);
  ch(C, 'maths', 12, '💰', T('Give and Take: money', 'लेन-देन: पैसे'), [B.g('shop', T('Get the change', 'बाकी पैसे'), { mode: 'change', max: 95, min: 12 }), B.g('shop', T('Pay exactly', 'ठीक पैसे दो'), { max: 100, min: 20, rounds: 3 })]);
  ch(C, 'maths', 13, '⏰', T('Time Goes On', 'समय चलता रहता है'), [B.g('clockset', T('Set the clock', 'घड़ी मिलाओ'), { minutes: [0, 15, 30, 45] }), B.gen('clock', { title: T('Read the clock', 'घड़ी पढ़ो'), level: 3 })]);
  ch(C, 'maths', 14, '🎪', T('The Surajkund Fair: review', 'सूरजकुंड मेला: दोहराव'), [B.gen('word', { title: T('Fair problems', 'मेले के सवाल'), level: 3, rounds: 8 }), B.gen('numpattern', { title: T('Number patterns', 'संख्या पैटर्न') })]);

  // ================================================================ OUR WONDROUS WORLD (EVS)
  ch(C, 'evs', 1, '👨‍👩‍👧‍👦', T('Family and Friends', 'परिवार और दोस्त'), [
    B.sort(T('Nuclear or joint family?', 'एकल या संयुक्त परिवार?'), [['n', '👨‍👩‍👧', 'Small family', 'एकल परिवार'], ['j', '👨‍👩‍👧‍👦👵👴', 'Joint family', 'संयुक्त परिवार']], [['👨‍👩‍👦', 'n', 'parents and one child', 'माता-पिता और एक बच्चा'], ['👩‍👧', 'n', 'mother and daughter', 'माँ और बेटी'], ['🏡', 'j', 'grandparents, uncles, aunts and cousins together', 'दादा-दादी, चाचा-चाची, बच्चे साथ'], ['👵👨‍👩‍👧', 'j', 'grandmother with parents and child', 'दादी के साथ माता-पिता और बच्चा']]),
    B.situ(T('Caring for elders', 'बड़ों की देखभाल'), [['👴', ['Dadaji cannot read small letters in the newspaper.', 'दादाजी अख़बार के छोटे अक्षर नहीं पढ़ पाते।'], [[['Read the news aloud to him', 'उन्हें ख़बरें पढ़कर सुनाओ'], true, ['How caring! Elders love spending time with us.', 'कितना प्यारा! बड़ों को हमारे साथ समय बिताना अच्छा लगता है।']], [['Say "I am busy"', 'कहो "मैं व्यस्त हूँ"'], false, ['Try to help. A few minutes means a lot to Dadaji.', 'मदद करो। कुछ मिनट भी दादाजी के लिए बहुत मायने रखते हैं।']]]]]),
  ]);
  ch(C, 'evs', 2, '🎡', T('Going to the Mela', 'मेले में चलें'), [B.g('shop', T('Shopping at the mela', 'मेले में खरीदारी'), { max: 50, min: 5, rounds: 3 }), B.quiz(T('Mela smarts', 'मेले में समझदारी'), [['😟', ['You get lost in a crowded mela. What should you do?', 'भीड़ भरे मेले में तुम खो गए। क्या करोगे?'], [['Stay where you are and ask a police officer or a shopkeeper with family', 'वहीं रुको और पुलिस या परिवार वाले दुकानदार से मदद माँगो'], ['Go with any stranger', 'किसी भी अजनबी के साथ चल दो']], 0, ['Also remember your parent’s phone number.', 'माता-पिता का फ़ोन नंबर याद रखो।']]])]);
  ch(C, 'evs', 3, '🪔', T('Celebrating Festivals', 'त्योहार मनाना'), [B.match(T('Festival food', 'त्योहार का खाना'), [[['Diwali', 'दीवाली'], ['mithai', 'मिठाई']], [['Eid', 'ईद'], ['sewaiyan', 'सेवइयाँ']], [['Pongal', 'पोंगल'], ['sweet pongal', 'मीठा पोंगल']], [['Christmas', 'क्रिसमस'], ['cake', 'केक']], [['Lohri', 'लोहड़ी'], ['rewri & peanuts', 'रेवड़ी और मूँगफली']], [['Onam', 'ओणम'], ['sadya', 'सद्या']]])]);
  ch(C, 'evs', 4, '🍃', T('Getting to Know Plants', 'पौधों को जानो'), [
    B.sort(T('Tree, shrub or herb?', 'पेड़, झाड़ी या शाक?'), [['t', '🌳', 'Tree (tall, hard trunk)', 'पेड़ (ऊँचा, मज़बूत तना)'], ['s', '🌿', 'Shrub (bushy)', 'झाड़ी'], ['h', '🌱', 'Herb (small, soft stem)', 'शाक (छोटा, नरम तना)']], [['🥭', 't', 'mango tree', 'आम का पेड़'], ['🌴', 't', 'coconut tree', 'नारियल का पेड़'], ['🌳', 't', 'neem tree', 'नीम का पेड़'], ['🌹', 's', 'rose bush', 'गुलाब की झाड़ी'], ['🌺', 's', 'hibiscus', 'गुड़हल'], ['🌿', 'h', 'tulsi', 'तुलसी'], ['🌱', 'h', 'mint', 'पुदीना'], ['🌾', 'h', 'wheat', 'गेहूँ']]),
    B.explain(T('Leaves are different', 'पत्तियाँ अलग-अलग'), [['🍁', ['Shapes', 'आकार'], ['Leaves can be round, long, heart-shaped or have jagged edges.', 'पत्तियाँ गोल, लंबी, दिल के आकार की या कटे किनारों वाली हो सकती हैं।']], ['🖍️', ['Leaf rubbing', 'पत्ती की छाप'], ['Put a leaf under paper and rub a crayon on top to see its veins!', 'काग़ज़ के नीचे पत्ती रखकर ऊपर क्रेयॉन रगड़ो और उसकी नसें देखो!']]]),
  ]);
  ch(C, 'evs', 5, '🐝', T('Plants and Animals Live Together', 'पौधे और जानवर साथ रहते हैं'), [B.match(T('Who helps whom?', 'कौन किसकी मदद करता है?'), [['🐝', ['carries pollen between flowers', 'फूलों के बीच पराग ले जाती है']], ['🐦', ['spreads seeds from fruits', 'फलों के बीज फैलाती है']], ['🪱', ['makes soil soft', 'मिट्टी को नरम बनाता है']], ['🌳', ['gives birds a home', 'चिड़ियों को घर देता है']], ['🐄', ['dung makes good manure', 'गोबर से अच्छी खाद बनती है']]])]);
  ch(C, 'evs', 6, '🕊️', T('Living in Harmony', 'मिल-जुलकर रहना'), [B.situ(T('Share the Earth', 'धरती सबकी'), [['🪺', ['A bird has made a nest on your balcony.', 'तुम्हारी बालकनी में चिड़िया ने घोंसला बनाया है।'], [[['Leave it alone and keep a bowl of water nearby', 'उसे छेड़ो मत और पास में पानी का कटोरा रखो'], true, ['Yes! Animals share our world.', 'हाँ! जानवर भी हमारी दुनिया के साथी हैं।']], [['Throw the nest away', 'घोंसला फेंक दो'], false, ['The eggs or babies would die. Let the bird stay.', 'अंडे या बच्चे मर जाएँगे। चिड़िया को रहने दो।']]]]], ['Plants, animals and people share one Earth.', 'पौधे, जानवर और लोग एक ही धरती बाँटते हैं।'])]);
  ch(C, 'evs', 7, '💧', T('Water – A Precious Gift', 'पानी – एक अनमोल उपहार'), [B.sort(T('Saves water or wastes it?', 'पानी बचाता है या बर्बाद करता है?'), [['s', '👍', 'Saves water', 'पानी बचाता है'], ['w', '👎', 'Wastes water', 'पानी बर्बाद करता है']], [['🪣', 's', 'bathing with a bucket', 'बाल्टी से नहाना'], ['🚿', 'w', 'long shower', 'देर तक शावर'], ['🌧️', 's', 'collecting rainwater', 'बारिश का पानी जमा करना'], ['🚰', 'w', 'leaving the tap open', 'नल खुला छोड़ना'], ['🥤', 's', 'using a glass to rinse while brushing', 'ब्रश करते समय गिलास से कुल्ला'], ['🚗', 'w', 'washing a car with a pipe', 'पाइप से गाड़ी धोना']]), B.order(T('The water cycle', 'जल चक्र'), [[['How does rain happen?', 'बारिश कैसे होती है?'], [['☀️', 'Sun heats water', 'सूरज पानी गरम करता है'], ['♨️', 'Water vapour rises', 'भाप ऊपर उठती है'], ['☁️', 'Clouds form', 'बादल बनते हैं'], ['🌧️', 'Rain falls', 'बारिश होती है']]]])]);
  ch(C, 'evs', 8, '🍱', T('Food We Eat', 'हमारा भोजन'), [B.sort(T('Food groups', 'भोजन के समूह'), [['e', '⚡', 'Energy food', 'ऊर्जा देने वाला'], ['b', '💪', 'Body-building', 'शरीर बनाने वाला'], ['p', '🛡️', 'Protective', 'रक्षा करने वाला']], [['🍚', 'e', 'rice', 'चावल'], ['🫓', 'e', 'roti', 'रोटी'], ['🥔', 'e', 'potato', 'आलू'], ['🥛', 'b', 'milk', 'दूध'], ['🫘', 'b', 'dal', 'दाल'], ['🥚', 'b', 'egg', 'अंडा'], ['🥕', 'p', 'carrot', 'गाजर'], ['🍊', 'p', 'orange', 'संतरा'], ['🥬', 'p', 'spinach', 'पालक']])]);
  ch(C, 'evs', 9, '🧘', T('Staying Healthy and Happy', 'स्वस्थ और खुश रहना'), [B.quiz(T('Healthy habits', 'अच्छी आदतें'), [['😴', ['How much should children sleep?', 'बच्चों को कितना सोना चाहिए?'], [['9–11 hours', '9–11 घंटे'], ['3 hours', '3 घंटे']], 0], ['🧘', ['Yoga and play help us…', 'योग और खेल हमें…'], [['stay fit and calm', 'फ़िट और शांत रखते हैं'], ['feel tired always', 'हमेशा थका देते हैं']], 0], ['📱', ['Too much screen time can hurt our…', 'ज़्यादा स्क्रीन देखने से नुकसान होता है…'], [['eyes and sleep', 'आँखों और नींद को'], ['hair', 'बालों को']], 0], ['💧', ['We should drink…', 'हमें पीना चाहिए…'], [['plenty of water', 'खूब पानी'], ['only cold drinks', 'सिर्फ़ कोल्ड ड्रिंक']], 0]])]);
  ch(C, 'evs', 10, '🧱', T('This World of Things: materials', 'चीज़ों की दुनिया: पदार्थ'), [B.sort(T('What is it made of?', 'यह किससे बना है?'), [['w', '🪵', 'Wood', 'लकड़ी'], ['m', '🔩', 'Metal', 'धातु'], ['p', '🧴', 'Plastic', 'प्लास्टिक'], ['c', '🏺', 'Clay', 'मिट्टी']], [['🪑', 'w', 'chair', 'कुर्सी'], ['✏️', 'w', 'pencil', 'पेंसिल'], ['🥄', 'm', 'spoon', 'चम्मच'], ['🔑', 'm', 'key', 'चाबी'], ['🪣', 'p', 'bucket', 'बाल्टी'], ['🧴', 'p', 'bottle', 'बोतल'], ['🏺', 'c', 'matka', 'मटका'], ['🪔', 'c', 'diya', 'दीया']])]);
  ch(C, 'evs', 11, '🧺', T('Making Things', 'चीज़ें बनाना'), [B.match(T('Who makes it?', 'कौन बनाता है?'), [[['potter', 'कुम्हार'], '🏺'], [['weaver', 'बुनकर'], '🧶'], [['carpenter', 'बढ़ई'], '🪑'], [['blacksmith', 'लोहार'], '⚒️'], [['cobbler', 'मोची'], '👞'], [['tailor', 'दर्ज़ी'], '🧵']])]);
  ch(C, 'evs', 12, '♻️', T('Taking Charge of Waste', 'कचरे की ज़िम्मेदारी'), [B.sort(T('Reduce, reuse, recycle', 'कम करो, दोबारा उपयोग, रीसायकल'), [['w', '🟢', 'Wet waste', 'गीला कचरा'], ['d', '🔵', 'Dry waste', 'सूखा कचरा']], [['🍎', 'w', 'apple core', 'सेब का बचा भाग'], ['🥚', 'w', 'eggshells', 'अंडे के छिलके'], ['🍃', 'w', 'leaves', 'पत्ते'], ['🧃', 'd', 'juice box', 'जूस का डिब्बा'], ['🥫', 'd', 'can', 'डिब्बा'], ['📰', 'd', 'newspaper', 'अख़बार']]), B.quiz(T('Reuse ideas', 'दोबारा उपयोग'), [['🫙', ['An empty jar can be reused as…', 'खाली डिब्बे का दोबारा उपयोग…'], [['a pencil holder', 'पेंसिल रखने में'], ['nothing', 'कुछ नहीं']], 0], ['🛍️', ['Instead of plastic bags we should use…', 'प्लास्टिक की थैली की जगह हमें…'], [['cloth bags', 'कपड़े का थैला'], ['more plastic bags', 'और प्लास्टिक थैलियाँ']], 0]])]);
})();
