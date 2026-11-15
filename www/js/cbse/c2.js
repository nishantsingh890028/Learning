/* Class 2 – Mridang 2 (English), Sarangi 2 (Hindi), Joyful Mathematics 2, My World. Original lesson text. */
(() => {
  'use strict';
  const { ch } = window.SYL; const B = window.SYLB; const { T } = B;
  const C = 'c2';

  // ================================================================ ENGLISH – Mridang 2
  ch(C, 'english', 1, '🚲', T('My Bicycle', 'मेरी साइकिल'), [
    B.vocab(T('Parts of a bicycle', 'साइकिल के भाग'), [['🛞', 'wheel', 'पहिया'], ['🔔', 'bell', 'घंटी'], ['🪑', 'seat', 'सीट'], ['🦶', 'pedal', 'पैडल'], ['⛓️', 'chain', 'चेन'], ['🛑', 'brake', 'ब्रेक']]),
    B.poem(T('Ring, ring, my bicycle', 'मेरी साइकिल'), '🚲', 'march', ['Ring, ring, goes my little bell,', 'Round and round my wheels go well.', 'Pedal fast and pedal slow,', 'Down the lane, away I go!']),
  ]);
  ch(C, 'english', 2, '🖼️', T('Picture Reading', 'चित्र पढ़ना'), [
    B.spot(T('Look and find', 'देखो और ढूँढो'), [
      [[['🏫', 6, 18, 90, 'school', 'स्कूल'], ['🚌', 62, 62, 64, 'school bus', 'स्कूल बस'], ['👧', 40, 64, 40, 'girl', 'लड़की'], ['🎒', 34, 74, 28, 'school bag', 'बस्ता'], ['🌳', 74, 10, 80, 'tree', 'पेड़'], ['🐕', 18, 74, 36, 'dog', 'कुत्ता'], ['☁️', 44, 4, 44, 'cloud', 'बादल']],
        [[['Tap the girl going to school.', 'स्कूल जाती लड़की दबाओ।'], 2], [['What will take children to school? Tap it.', 'बच्चों को स्कूल कौन ले जाएगा? दबाओ।'], 1], [['Tap the bag next to the girl.', 'लड़की के पास का बस्ता दबाओ।'], 3], [['Tap something white and soft in the sky.', 'आसमान में सफ़ेद, मुलायम चीज़ दबाओ।'], 6]], '#e0e7ff'],
    ]),
  ]);
  ch(C, 'english', 3, '🤗', T('It is Fun', 'कितना मज़ा'), [
    B.vocab(T('Describing words', 'विशेषण'), [['🐘', 'big', 'बड़ा'], ['🐜', 'small', 'छोटा'], ['🔥', 'hot', 'गरम'], ['🧊', 'cold', 'ठंडा'], ['🪶', 'soft', 'मुलायम'], ['🪨', 'hard', 'कठोर'], ['😄', 'happy', 'खुश'], ['😢', 'sad', 'दुखी']]),
    B.match(T('Opposites', 'विलोम'), [['big', 'small'], ['hot', 'cold'], ['up', 'down'], ['day', 'night'], ['happy', 'sad'], ['fast', 'slow']]),
  ]);
  ch(C, 'english', 4, '🖐️', T('Seeing without Seeing', 'बिना देखे देखना'), [
    B.explain(T('Using our senses', 'इंद्रियों का उपयोग'), [['✋', ['Touch', 'छूना'], ['With our fingers we feel rough, smooth, soft and hard things.', 'उँगलियों से हम खुरदरा, चिकना, मुलायम और कठोर महसूस करते हैं।']], ['⠿', ['Braille', 'ब्रेल'], ['People who cannot see read with their fingers using raised dots called Braille.', 'जो देख नहीं सकते वे उभरे हुए बिंदुओं (ब्रेल) को उँगलियों से छूकर पढ़ते हैं।']], ['🤝', ['Be a good friend', 'अच्छे दोस्त बनो'], ['We help and include everyone. We ask, "Can I help you?"', 'हम सबकी मदद करते हैं और सबको साथ रखते हैं। पूछते हैं, "क्या मैं मदद करूँ?"']]]),
    B.sort(T('Rough or smooth?', 'खुरदरा या चिकना?'), [['r', '🪵', 'Rough', 'खुरदरा'], ['s', '🪞', 'Smooth', 'चिकना']], [['🪵', 'r', 'tree bark', 'पेड़ की छाल'], ['🪨', 'r', 'stone', 'पत्थर'], ['🧽', 'r', 'scrubber', 'स्क्रबर'], ['🪞', 's', 'mirror', 'शीशा'], ['🍎', 's', 'apple', 'सेब'], ['🥚', 's', 'egg', 'अंडा']]),
  ]);
  ch(C, 'english', 5, '🗺️', T('Between Home and School', 'घर और स्कूल के बीच'), [
    B.vocab(T('Places in my town', 'शहर की जगहें'), [['🏥', 'hospital', 'अस्पताल'], ['🏤', 'post office', 'डाकघर'], ['🏪', 'shop', 'दुकान'], ['🏞️', 'park', 'पार्क'], ['🚉', 'railway station', 'रेलवे स्टेशन'], ['🛕', 'temple', 'मंदिर'], ['🏦', 'bank', 'बैंक'], ['🚒', 'fire station', 'फ़ायर स्टेशन']]),
    B.match(T('Who works where?', 'कौन कहाँ काम करता है?'), [[['doctor', 'डॉक्टर'], '🏥'], [['teacher', 'शिक्षक'], '🏫'], [['postman', 'डाकिया'], '🏤'], [['firefighter', 'अग्निशामक'], '🚒'], [['farmer', 'किसान'], '🌾'], [['pilot', 'पायलट'], '✈️']]),
  ]);
  ch(C, 'english', 6, '☁️', T('A Show of Clouds', 'बादलों का खेल'), [
    B.colour(T('Kite in the sky', 'आसमान में पतंग'), ['kite']),
    B.quiz(T('Clouds', 'बादल'), [['☁️', ['Clouds are made of…', 'बादल किससे बने होते हैं?'], [['tiny water drops', 'पानी की छोटी बूँदें'], ['cotton', 'रुई']], 0], ['🐘☁️', ['A cloud that looks like an elephant is…', 'हाथी जैसा दिखने वाला बादल…'], [['our imagination!', 'हमारी कल्पना है!'], ['a real elephant', 'असली हाथी']], 0], ['🌧️', ['Dark clouds bring…', 'काले बादल लाते हैं…'], [['rain', 'बारिश'], ['snow in summer', 'गर्मी में बर्फ़']], 0]]),
  ]);
  ch(C, 'english', 7, '🏷️', T('My Name', 'मेरा नाम'), [
    B.sentence(T('Talk about yourself', 'अपने बारे में बोलो'), [['My name is Aarav.', '🙋'], ['I am seven years old.', '7️⃣'], ['I live in Jaipur.', '🏙️'], ['I like to play cricket.', '🏏'], ['My favourite colour is blue.', '🔵']]),
  ]);
  ch(C, 'english', 8, '🐦‍⬛', T('The Crow and The Smart Monkey', 'कौआ और चतुर बंदर'), [
    B.story(T('The Thirsty Crow', 'प्यासा कौआ'), [
      ['🐦‍⬛', 'It was a hot day. A crow was very thirsty.', 'गरमी का दिन था। एक कौआ बहुत प्यासा था।'],
      ['🏺', 'He found a pot with a little water at the bottom. His beak could not reach it.', 'उसे एक घड़ा मिला जिसमें नीचे थोड़ा पानी था। उसकी चोंच वहाँ तक नहीं पहुँची।'],
      ['🪨', 'He thought hard. Then he dropped pebbles into the pot, one by one.', 'उसने खूब सोचा। फिर एक-एक करके घड़े में कंकड़ डाले।'],
      ['💧', 'The water rose up! The crow drank and flew away happily.', 'पानी ऊपर आ गया! कौए ने पानी पिया और खुशी से उड़ गया।'],
    ], ['Where there is a will, there is a way.', 'जहाँ चाह, वहाँ राह।'], [[['What did the crow put in the pot?', 'कौए ने घड़े में क्या डाला?'], [['pebbles', 'कंकड़'], ['leaves', 'पत्ते'], ['sand', 'रेत']], 0], [['Why did the water rise?', 'पानी ऊपर क्यों आया?'], [['the pebbles took up space', 'कंकड़ों ने जगह ले ली'], ['it rained', 'बारिश हुई']], 0]]),
  ]);
  ch(C, 'english', 9, '💧', T('Little Drops of Water', 'पानी की नन्ही बूँदें'), [
    B.poem(T('Little Drops of Water', 'पानी की नन्ही बूँदें'), '💧', 'gentle', ['Little drops of water,', 'Little grains of sand,', 'Make the mighty ocean', 'And the pleasant land.'], ['Small things together make big things. Small kind acts matter.', 'छोटी-छोटी चीज़ें मिलकर बड़ी बनती हैं। छोटे अच्छे काम भी मायने रखते हैं।'], { credit: 'Traditional (Julia Carney, 1845) – public domain' }),
  ]);
  ch(C, 'english', 10, '🇮🇳', T('We are all Indians', 'हम सब भारतीय हैं'), [
    B.match(T('States and greetings', 'राज्य और अभिवादन'), [[['Punjab', 'पंजाब'], 'Sat Sri Akal'], [['Tamil Nadu', 'तमिलनाडु'], 'Vanakkam'], [['Bengal', 'बंगाल'], 'Nomoshkar'], [['Kerala', 'केरल'], 'Namaskaram'], [['Gujarat', 'गुजरात'], 'Kem cho'], [['Hindi-speaking states', 'हिंदी भाषी राज्य'], 'Namaste']]),
  ]);
  ch(C, 'english', 11, '✍️', T('Grammar: is, am, are', 'व्याकरण: is, am, are'), [
    B.quiz(T('is, am or are?', 'is, am या are?'), [['🙋', ['I ___ happy.', 'I ___ happy.'], ['am', 'is', 'are'], 0], ['🐶', ['The dog ___ brown.', 'The dog ___ brown.'], ['am', 'is', 'are'], 1], ['👫', ['They ___ friends.', 'They ___ friends.'], ['am', 'is', 'are'], 2], ['👧', ['She ___ my sister.', 'She ___ my sister.'], ['am', 'is', 'are'], 1], ['🍎🍎', ['The apples ___ red.', 'The apples ___ red.'], ['am', 'is', 'are'], 2], ['🫵', ['You ___ kind.', 'You ___ kind.'], ['am', 'is', 'are'], 2]]),
  ]);
  ch(C, 'english', 12, '👦', T('Grammar: he, she, it, they', 'व्याकरण: he, she, it, they'), [
    B.sort(T('Which word?', 'कौन सा शब्द?'), [['he', '👦', 'he', 'he'], ['she', '👧', 'she', 'she'], ['it', '📦', 'it', 'it']], [['👨', 'he', 'father'], ['👴', 'he', 'grandfather'], ['🤴', 'he', 'king'], ['👩', 'she', 'mother'], ['👸', 'she', 'queen'], ['👵', 'she', 'grandmother'], ['🪑', 'it', 'chair'], ['🍎', 'it', 'apple'], ['🚗', 'it', 'car']]),
  ]);
  ch(C, 'english', 13, '🔠', T('Spelling bee', 'स्पेलिंग'), [
    B.spell(T('Spell the words', 'शब्द लिखो'), [['FROG', '🐸'], ['BIRD', '🐦'], ['TREE', '🌳'], ['STAR', '⭐'], ['FISH', '🐟'], ['BOAT', '⛵'], ['CAKE', '🎂'], ['RAIN', '🌧️']]),
  ]);

  // ================================================================ HINDI – Sarangi 2 (themes) + grammar
  ch(C, 'hindi', 1, '👫', T('तीन दोस्त', 'तीन दोस्त'), [
    B.story(T('तीन दोस्त', 'तीन दोस्त'), [
      ['🐢🦌🐦', 'A tortoise, a deer and a crow were best friends in a forest.', 'जंगल में एक कछुआ, एक हिरन और एक कौआ पक्के दोस्त थे।'],
      ['🪤', 'One day the deer got caught in a hunter’s net.', 'एक दिन हिरन शिकारी के जाल में फँस गया।'],
      ['🐦', 'The crow flew and called the mouse, who cut the net with his sharp teeth.', 'कौआ उड़कर चूहे को बुला लाया, जिसने अपने तेज़ दाँतों से जाल काट दिया।'],
      ['🎉', 'Together they saved their friend and ran away before the hunter came.', 'सबने मिलकर दोस्त को बचाया और शिकारी के आने से पहले भाग गए।'],
    ], ['Friends help each other in trouble.', 'दोस्त मुसीबत में एक-दूसरे की मदद करते हैं।'], [[['हिरन कहाँ फँस गया?', 'हिरन कहाँ फँस गया?'], [['जाल में', 'जाल में'], ['पेड़ पर', 'पेड़ पर'], ['नदी में', 'नदी में']], 0], [['जाल किसने काटा?', 'जाल किसने काटा?'], [['चूहे ने', 'चूहे ने'], ['कौए ने', 'कौए ने'], ['शिकारी ने', 'शिकारी ने']], 0]]),
  ]);
  ch(C, 'hindi', 2, '🌈', T('रंग ही रंग', 'रंग ही रंग'), [
    B.colour(T('तितली रंगो', 'तितली रंगो'), ['butterfly']),
    B.quiz(T('किसका रंग?', 'किसका रंग?'), [['🥛', ['दूध का रंग?', 'दूध का रंग?'], ['सफ़ेद', 'काला', 'हरा'], 0], ['🍃', ['पत्ते का रंग?', 'पत्ते का रंग?'], ['लाल', 'हरा', 'नीला'], 1], ['🍆', ['बैंगन का रंग?', 'बैंगन का रंग?'], ['बैंगनी', 'पीला', 'सफ़ेद'], 0], ['🌌', ['रात के आसमान का रंग?', 'रात के आसमान का रंग?'], ['गुलाबी', 'काला', 'नारंगी'], 1], ['🍋', ['नींबू का रंग?', 'नींबू का रंग?'], ['पीला', 'भूरा', 'नीला'], 0]]),
  ]);
  ch(C, 'hindi', 3, '🌾', T('हरी-भरी धरती', 'हरी-भरी धरती'), [
    B.hwords(T('खेत और किसान', 'खेत और किसान'), [['🧑‍🌾', 'किसान', 'farmer'], ['🫘', 'बीज', 'seed'], ['🌾', 'फ़सल', 'crop'], ['🐸', 'मेंढक', 'frog'], ['🪷', 'तालाब', 'pond'], ['🥕', 'मूली', 'radish']]),
    B.order(T('किसान का काम', 'किसान का काम'), [[['किसान फ़सल कैसे उगाता है?', 'किसान फ़सल कैसे उगाता है?'], [['🚜', 'खेत जोतना', 'खेत जोतना'], ['🫘', 'बीज बोना', 'बीज बोना'], ['💧', 'सिंचाई करना', 'सिंचाई करना'], ['🌾', 'फ़सल काटना', 'फ़सल काटना']]]]),
  ]);
  ch(C, 'hindi', 4, '🦁', T('शेर और चूहे की दोस्ती', 'शेर और चूहे की दोस्ती'), [
    B.story(T('शेर और चूहा', 'शेर और चूहा'), [
      ['🦁', 'A lion was sleeping. A little mouse ran over him and woke him up.', 'एक शेर सो रहा था। एक छोटा चूहा उस पर दौड़ा और शेर जाग गया।'],
      ['🐭', '"Please let me go, one day I will help you," said the mouse. The lion laughed and let him go.', '"मुझे छोड़ दो, एक दिन मैं तुम्हारी मदद करूँगा," चूहे ने कहा। शेर हँसा और उसे छोड़ दिया।'],
      ['🕸️', 'Days later the lion was trapped in a net. He roared for help.', 'कुछ दिन बाद शेर एक जाल में फँस गया। वह मदद के लिए दहाड़ा।'],
      ['✂️', 'The mouse came and cut the net. "Thank you, little friend!" said the lion.', 'चूहा आया और जाल काट दिया। "धन्यवाद, छोटे दोस्त!" शेर ने कहा।'],
    ], ['No one is too small to help. Be kind to everyone.', 'कोई भी मदद करने के लिए छोटा नहीं होता। सब पर दया करो।'], [[['शेर को किसने बचाया?', 'शेर को किसने बचाया?'], [['चूहे ने', 'चूहे ने'], ['हाथी ने', 'हाथी ने'], ['बंदर ने', 'बंदर ने']], 0]]),
  ]);
  ch(C, 'hindi', 5, '🧭', T('चार दिशाएँ', 'चार दिशाएँ'), [
    B.explain(T('दिशाएँ', 'दिशाएँ'), [['🌅', ['पूर्व', 'पूर्व'], ['The sun rises in the East (पूर्व).', 'सूरज पूर्व दिशा में उगता है।']], ['🌇', ['पश्चिम', 'पश्चिम'], ['The sun sets in the West (पश्चिम).', 'सूरज पश्चिम दिशा में डूबता है।']], ['⬆️', ['उत्तर', 'उत्तर'], ['Face the rising sun: North (उत्तर) is on your left.', 'उगते सूरज की ओर मुँह करो: बाईं ओर उत्तर है।']], ['⬇️', ['दक्षिण', 'दक्षिण'], ['South (दक्षिण) is on your right.', 'दाईं ओर दक्षिण है।']]]),
    B.quiz(T('दिशा पहचानो', 'दिशा पहचानो'), [['🌅', ['सूरज किस दिशा में उगता है?', 'सूरज किस दिशा में उगता है?'], ['पूर्व', 'पश्चिम', 'उत्तर'], 0], ['🌇', ['सूरज किस दिशा में डूबता है?', 'सूरज किस दिशा में डूबता है?'], ['पूर्व', 'पश्चिम', 'दक्षिण'], 1], ['🧭', ['दिशाएँ कितनी होती हैं (मुख्य)?', 'मुख्य दिशाएँ कितनी होती हैं?'], ['चार', 'दो', 'छह'], 0]]),
  ]);
  ch(C, 'hindi', 6, '🌙', T('चंदा मामा', 'चंदा मामा'), [
    B.poem(T('चंदा प्यारा', 'चंदा प्यारा'), '🌙', 'twinkle', ['गोल-गोल चंदा प्यारा,', 'चमके जैसे एक सितारा।', 'रात को आए, सुबह जाए,', 'मीठी-मीठी नींद सुलाए।']),
    B.quiz(T('चाँद के बारे में', 'चाँद के बारे में'), [['🌕', ['पूरा गोल चाँद किस रात दिखता है?', 'पूरा गोल चाँद किस रात दिखता है?'], ['पूर्णिमा', 'अमावस्या'], 0], ['🌑', ['जिस रात चाँद नहीं दिखता, उसे कहते हैं…', 'जिस रात चाँद नहीं दिखता, उसे कहते हैं…'], ['अमावस्या', 'पूर्णिमा'], 0]]),
  ]);
  ch(C, 'hindi', 7, '☂️', T('सबसे बड़ा छाता', 'सबसे बड़ा छाता'), [B.dots(T('छाता बनाओ', 'छाता बनाओ'), ['umbrella', 'kite'], 'hinum')]);
  ch(C, 'hindi', 8, '🔤', T('संयुक्त अक्षर', 'संयुक्त अक्षर'), [
    B.hwords(T('क्ष त्र ज्ञ श्र', 'क्ष त्र ज्ञ श्र'), [['🛡️', 'क्षत्रिय', 'warrior'], ['🔱', 'त्रिशूल', 'trident'], ['📚', 'ज्ञान', 'knowledge'], ['🙇', 'श्रम', 'hard work'], ['🌍', 'क्षेत्र', 'area'], ['⭐', 'नक्षत्र', 'constellation']]),
  ]);
  ch(C, 'hindi', 9, '🔁', T('विलोम शब्द', 'विलोम शब्द'), [
    B.match(T('उल्टे शब्द मिलाओ', 'उल्टे शब्द मिलाओ'), [['दिन', 'रात'], ['ऊपर', 'नीचे'], ['गरम', 'ठंडा'], ['बड़ा', 'छोटा'], ['सच', 'झूठ'], ['आना', 'जाना'], ['हँसना', 'रोना'], ['मोटा', 'पतला']]),
  ]);
  ch(C, 'hindi', 10, '👦', T('लिंग: पुल्लिंग-स्त्रीलिंग', 'लिंग: पुल्लिंग-स्त्रीलिंग'), [
    B.match(T('जोड़ी बनाओ', 'जोड़ी बनाओ'), [['लड़का', 'लड़की'], ['राजा', 'रानी'], ['घोड़ा', 'घोड़ी'], ['दादा', 'दादी'], ['शेर', 'शेरनी'], ['मोर', 'मोरनी']]),
  ]);
  ch(C, 'hindi', 11, '📛', T('संज्ञा', 'संज्ञा'), [
    B.quiz(T('संज्ञा पहचानो', 'संज्ञा पहचानो'), [['🏙️', ['इनमें से संज्ञा (नाम) कौन सा शब्द है?', 'इनमें से संज्ञा (नाम) कौन सा शब्द है?'], ['दिल्ली', 'दौड़ना', 'सुंदर'], 0, ['दिल्ली एक जगह का नाम है।', 'दिल्ली एक जगह का नाम है।']], ['🐄', ['संज्ञा कौन सी है?', 'संज्ञा कौन सी है?'], ['खाना', 'गाय', 'लाल'], 1], ['📕', ['संज्ञा कौन सी है?', 'संज्ञा कौन सी है?'], ['पढ़ना', 'मोटा', 'किताब'], 2], ['👩‍🏫', ['संज्ञा कौन सी है?', 'संज्ञा कौन सी है?'], ['अध्यापिका', 'गाना', 'छोटा'], 0]]),
  ]);
  ch(C, 'hindi', 12, '💬', T('वाक्य बनाओ', 'वाक्य बनाओ'), [
    B.sentence(T('सही वाक्य', 'सही वाक्य'), [['मैं रोज़ स्कूल जाता हूँ।', '🏫', 'I go to school every day.'], ['माँ खाना बना रही है।', '👩‍🍳', 'Mother is cooking.'], ['बच्चे पार्क में खेलते हैं।', '🏞️', 'Children play in the park.'], ['मोर नाच रहा है।', '🦚', 'The peacock is dancing.'], ['हम पेड़ लगाएँगे।', '🌳', 'We will plant trees.']]),
  ]);

  // ================================================================ MATHS – Joyful Mathematics 2
  ch(C, 'maths', 1, '🐚', T('A Day at the Beach: counting in groups', 'समुद्र तट पर: समूह में गिनना'), [
    B.dots(T('Count in twos', 'दो-दो गिनो'), ['fish', 'butterfly'], 'skip2'),
    B.dots(T('Count in fives', 'पाँच-पाँच गिनो'), ['star', 'rocket'], 'skip5'),
  ]);
  ch(C, 'maths', 2, '🧊', T('Shapes Around Us (3D)', 'हमारे आसपास आकृतियाँ'), [
    B.match(T('Match the solid', 'ठोस आकृति मिलाओ'), [[['cube', 'घन'], '🎲'], [['sphere', 'गोला'], '⚽'], [['cylinder', 'बेलन'], '🥫'], [['cone', 'शंकु'], '🍦'], [['cuboid', 'घनाभ'], '🧱']]),
  ]);
  ch(C, 'maths', 3, '💯', T('Fun with Numbers (1–100)', 'संख्याओं का खेल (1–100)'), [
    B.g('bundles', T('Tens and ones', 'दहाई और इकाई'), { max: 99 }),
    B.gen('compare', { title: T('Bigger or smaller', 'बड़ी या छोटी'), level: 2 }),
    B.g('numline', T('Number line to 100', '100 तक संख्या रेखा'), { max: 100, step: 10, sub: true, rounds: 4 }),
  ]);
  ch(C, 'maths', 4, '🔦', T('Shadow Story: 2D shapes', 'परछाईं की कहानी: 2D आकार'), [B.shapes(T('Draw flat shapes', 'सपाट आकार बनाओ'), ['rectangle', 'oval', 'diamond', 'heart'])]);
  ch(C, 'maths', 5, '📐', T('Playing with Lines', 'रेखाओं का खेल'), [
    B.shapes(T('Straight and curved', 'सीधी और घुमावदार'), ['slant', 'curve', 'zigzag', 'spiral']),
    B.g('mirror', T('Line patterns', 'रेखा पैटर्न'), { rounds: 2 }),
  ]);
  ch(C, 'maths', 6, '🪔', T('Decoration for Festival: add & subtract', 'त्योहार की सजावट: जोड़-घटाव'), [
    B.gen('add', { title: T('Add 2-digit numbers', 'दो अंकों का जोड़'), level: 2 }),
    B.gen('sub', { title: T('Subtract 2-digit numbers', 'दो अंकों का घटाव'), level: 2 }),
    B.gen('word', { title: T('Story sums', 'कहानी वाले सवाल'), level: 2 }),
  ]);
  ch(C, 'maths', 7, '🎀', T('Rani’s Gift: measurement', 'रानी का तोहफ़ा: माप'), [
    B.g('scale', T('Heavy or light?', 'भारी या हल्का?'), { mode: 'compare' }),
  ]);
  ch(C, 'maths', 8, '🍬', T('Grouping and Sharing', 'समूह बनाना और बाँटना'), [
    B.g('share', T('Share fairly', 'बराबर बाँटो'), { maxPlates: 3, maxEach: 4 }),
    B.gen('tables', { title: T('Tables of 2, 3, 4, 5', '2, 3, 4, 5 के पहाड़े'), level: 2 }),
  ]);
  ch(C, 'maths', 9, '📅', T('Which Season is it? Months', 'कौन सा मौसम? महीने'), [
    B.order(T('Months of the year', 'साल के महीने'), [[['January to June', 'जनवरी से जून'], [['❄️', 'January'], ['💘', 'February'], ['🌸', 'March'], ['🌷', 'April'], ['☀️', 'May'], ['🌦️', 'June']]], [['July to December', 'जुलाई से दिसंबर'], [['🌧️', 'July'], ['☔', 'August'], ['🍂', 'September'], ['🪔', 'October'], ['🍁', 'November'], ['🎄', 'December']]]]),
    B.g('clockset', T('Half past', 'साढ़े'), { minutes: [0, 30] }),
  ]);
  ch(C, 'maths', 10, '🎡', T('Fun at the Fair: money', 'मेले में मज़ा: पैसे'), [
    B.g('shop', T('Buy at the fair', 'मेले में खरीदो'), { max: 50, min: 5 }),
  ]);
  ch(C, 'maths', 11, '📊', T('Data Handling', 'आँकड़ों का प्रबंधन'), [B.g('pictograph', T('Favourite fruits', 'पसंदीदा फल'), { rounds: 3 })]);

  // ================================================================ MY WORLD (Class 2 themes)
  ch(C, 'evs', 1, '🫁', T('My body works', 'मेरा शरीर कैसे काम करता है'), [
    B.explain(T('Inside my body', 'मेरे शरीर के अंदर'), [['🧠', ['Brain', 'दिमाग'], ['The brain helps us think, remember and move.', 'दिमाग हमें सोचने, याद रखने और हिलने-डुलने में मदद करता है।']], ['❤️', ['Heart', 'दिल'], ['The heart pumps blood all day and night.', 'दिल दिन-रात खून पंप करता है।']], ['🫁', ['Lungs', 'फेफड़े'], ['Lungs help us breathe in fresh air.', 'फेफड़े हमें ताज़ी हवा में साँस लेने में मदद करते हैं।']], ['🦴', ['Bones', 'हड्डियाँ'], ['Bones keep us strong and give our body shape.', 'हड्डियाँ हमें मज़बूत बनाती हैं और शरीर को आकार देती हैं।']]]),
    B.match(T('Body part and its job', 'अंग और उसका काम'), [['🧠', ['thinking', 'सोचना']], ['❤️', ['pumping blood', 'खून पंप करना']], ['🫁', ['breathing', 'साँस लेना']], ['🦷', ['chewing food', 'खाना चबाना']], ['🦵', ['walking', 'चलना']]]),
  ]);
  ch(C, 'evs', 2, '🍲', T('Food and where it comes from', 'खाना कहाँ से आता है'), [
    B.sort(T('Which part of the plant do we eat?', 'पौधे का कौन सा भाग खाते हैं?'), [['r', '🥕', 'Root', 'जड़'], ['l', '🥬', 'Leaf', 'पत्ता'], ['f', '🍎', 'Fruit', 'फल'], ['s', '🫘', 'Seed', 'बीज']], [['🥕', 'r', 'carrot', 'गाजर'], ['🫚', 'r', 'radish', 'मूली'], ['🥬', 'l', 'spinach', 'पालक'], ['🌿', 'l', 'mint', 'पुदीना'], ['🍎', 'f', 'apple', 'सेब'], ['🍅', 'f', 'tomato', 'टमाटर'], ['🫘', 's', 'beans', 'राजमा'], ['🌾', 's', 'wheat', 'गेहूँ']]),
  ]);
  ch(C, 'evs', 3, '🐾', T('Animals: food and homes', 'जानवर: खाना और घर'), [
    B.sort(T('What do they eat?', 'वे क्या खाते हैं?'), [['p', '🌿', 'Plants', 'पौधे'], ['m', '🍖', 'Other animals', 'दूसरे जानवर'], ['b', '🍽️', 'Both', 'दोनों']], [['🐄', 'p', 'cow'], ['🐘', 'p', 'elephant'], ['🐰', 'p', 'rabbit'], ['🦁', 'm', 'lion'], ['🐅', 'm', 'tiger'], ['🦅', 'm', 'eagle'], ['🐻', 'b', 'bear'], ['🐦‍⬛', 'b', 'crow']]),
  ]);
  ch(C, 'evs', 4, '🏠', T('Houses around India', 'भारत के घर'), [
    B.match(T('Which house where?', 'कौन सा घर कहाँ?'), [[['houseboat', 'हाउसबोट'], ['Kashmir lake', 'कश्मीर की झील']], [['stilt house', 'खंभों पर घर'], ['Assam, lots of rain', 'असम, खूब बारिश']], [['igloo', 'इग्लू'], ['ice land', 'बर्फ़ का देश']], [['tent', 'तंबू'], ['moving from place to place', 'जगह-जगह घूमना']], [['flat', 'फ़्लैट'], ['big cities', 'बड़े शहर']]]),
  ]);
  ch(C, 'evs', 5, '🚌', T('Transport', 'यातायात के साधन'), [
    B.sort(T('Land, water or air?', 'ज़मीन, पानी या हवा?'), [['l', '🛣️', 'Land', 'ज़मीन'], ['w', '🌊', 'Water', 'पानी'], ['a', '☁️', 'Air', 'हवा']], [['🚌', 'l', 'bus'], ['🛺', 'l', 'auto'], ['🚂', 'l', 'train'], ['⛵', 'w', 'sailboat'], ['🚢', 'w', 'ship'], ['🛶', 'w', 'canoe'], ['✈️', 'a', 'aeroplane'], ['🚁', 'a', 'helicopter'], ['🎈', 'a', 'hot-air balloon']]),
  ]);
  ch(C, 'evs', 6, '♻️', T('Keep it clean', 'सफ़ाई रखो'), [
    B.sort(T('Wet or dry waste?', 'गीला या सूखा कचरा?'), [['w', '🟢', 'Wet waste (green bin)', 'गीला कचरा (हरा डिब्बा)'], ['d', '🔵', 'Dry waste (blue bin)', 'सूखा कचरा (नीला डिब्बा)']], [['🍌', 'w', 'banana peel', 'केले का छिलका'], ['🥬', 'w', 'vegetable peels', 'सब्ज़ी के छिलके'], ['🍂', 'w', 'dry leaves', 'सूखे पत्ते'], ['🍞', 'w', 'leftover food', 'बचा खाना'], ['🧴', 'd', 'plastic bottle', 'प्लास्टिक की बोतल'], ['📰', 'd', 'newspaper', 'अख़बार'], ['🥫', 'd', 'tin can', 'टिन का डिब्बा'], ['📦', 'd', 'cardboard box', 'गत्ते का डिब्बा']]),
  ]);
  ch(C, 'evs', 7, '👮', T('People who help us', 'हमारे मददगार'), [
    B.quiz(T('Who helps?', 'कौन मदद करता है?'), [['🔥', ['There is a fire. Who do we call?', 'आग लगी है। किसे बुलाएँ?'], [['firefighters (101 or 112)', 'दमकल (101 या 112)'], ['the postman', 'डाकिया']], 0], ['🤒', ['You are ill. Who helps?', 'तुम बीमार हो। कौन मदद करेगा?'], [['a doctor', 'डॉक्टर'], ['a pilot', 'पायलट']], 0], ['🚨', ['Who keeps us safe from thieves?', 'चोरों से हमें कौन बचाता है?'], [['police', 'पुलिस'], ['a baker', 'बेकर']], 0], ['📞', ['India’s emergency number is…', 'भारत का आपातकालीन नंबर है…'], ['112', '999', '123'], 0, ['112 works for police, fire and ambulance.', '112 पुलिस, दमकल और एंबुलेंस सबके लिए है।']]]),
  ]);
  ch(C, 'evs', 8, '🌍', T('Air, water and sky', 'हवा, पानी और आसमान'), [
    B.explain(T('Water changes', 'पानी बदलता है'), [['🧊', ['Ice', 'बर्फ़'], ['When water gets very cold, it becomes solid ice.', 'पानी बहुत ठंडा हो तो जमकर बर्फ़ बन जाता है।']], ['💧', ['Water', 'पानी'], ['Ice melts back into water when it gets warm.', 'गरमी मिलने पर बर्फ़ पिघलकर पानी बनती है।']], ['♨️', ['Steam', 'भाप'], ['When water boils it becomes steam and goes up into the air.', 'पानी उबलने पर भाप बनकर हवा में उड़ जाता है।']], ['☁️', ['Clouds and rain', 'बादल और बारिश'], ['Water vapour makes clouds, and clouds give us rain.', 'भाप से बादल बनते हैं, और बादल बारिश देते हैं।']]]),
    B.order(T('The water cycle', 'जल चक्र'), [[['Put the water cycle in order.', 'जल चक्र को क्रम से लगाओ।'], [['🌊', 'Sea water', 'समुद्र का पानी'], ['☀️', 'Sun heats it', 'सूरज गरम करता है'], ['♨️', 'Vapour rises', 'भाप ऊपर उठती है'], ['☁️', 'Clouds form', 'बादल बनते हैं'], ['🌧️', 'Rain falls', 'बारिश होती है']]]]),
  ]);
})();
