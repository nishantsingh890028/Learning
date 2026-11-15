/* v3.3: My India (National Anthem, National Song, flag, symbols, freedom, Constitution) and General Awareness.
   Office-holders were checked on 14 November 2026 – update KKM_GK.leaders after any change (elections, retirements).
   The National Anthem (Rabindranath Tagore, 1911) and National Song (Bankim Chandra Chattopadhyay, 1882) are public domain. */
(() => {
  'use strict';
  const B = window.SYLB; const { T } = B;
  const CUR = window.CUR;
  const ALL = [1, 2, 3]; const BIG = [2, 3];

  // ================================================================ current facts (edit here)
  window.KKM_GK = {
    asOf: T('14 November 2026', '14 नवंबर 2026'),
    leaders: [
      { id: 'president', emoji: '🏛️', role: T('President of India', 'भारत की राष्ट्रपति'), name: T('Smt. Droupadi Murmu', 'श्रीमती द्रौपदी मुर्मू'), since: T('since 25 July 2022', '25 जुलाई 2022 से'),
        about: T('She is the head of our country and the Supreme Commander of the armed forces. She is the first President from a tribal community. She lives in Rashtrapati Bhavan in New Delhi.', 'वे हमारे देश की प्रमुख और सेनाओं की सर्वोच्च कमांडर हैं। वे आदिवासी समुदाय से पहली राष्ट्रपति हैं। वे नई दिल्ली के राष्ट्रपति भवन में रहती हैं।') },
      { id: 'vp', emoji: '🤝', role: T('Vice President of India', 'भारत के उपराष्ट्रपति'), name: T('Shri C. P. Radhakrishnan', 'श्री सी. पी. राधाकृष्णन'), since: T('since 12 September 2025', '12 सितंबर 2025 से'),
        about: T('He is the second-highest leader. He runs the Rajya Sabha, one of the two houses of Parliament.', 'वे दूसरे सबसे बड़े पद पर हैं। वे संसद के दो सदनों में से एक, राज्यसभा को चलाते हैं।') },
      { id: 'pm', emoji: '🧑‍💼', role: T('Prime Minister of India', 'भारत के प्रधानमंत्री'), name: T('Shri Narendra Modi', 'श्री नरेंद्र मोदी'), since: T('since 26 May 2014', '26 मई 2014 से'),
        about: T('He leads the Government of India with his team of ministers. On Independence Day he hoists the flag at the Red Fort.', 'वे अपने मंत्रियों की टीम के साथ भारत सरकार चलाते हैं। स्वतंत्रता दिवस पर वे लाल किले पर झंडा फहराते हैं।') },
      { id: 'cji', emoji: '⚖️', role: T('Chief Justice of India', 'भारत के मुख्य न्यायाधीश'), name: T('Justice Surya Kant', 'न्यायमूर्ति सूर्यकांत'), since: T('since 24 November 2025', '24 नवंबर 2025 से'),
        about: T('He heads the Supreme Court, the highest court in India. Courts make sure everyone is treated fairly by the law.', 'वे सर्वोच्च न्यायालय के प्रमुख हैं, जो भारत का सबसे बड़ा न्यायालय है। अदालतें देखती हैं कि कानून सबके साथ न्याय करे।') },
      { id: 'speaker', emoji: '🔔', role: T('Speaker of the Lok Sabha', 'लोकसभा अध्यक्ष'), name: T('Shri Om Birla', 'श्री ओम बिरला'), since: T('since 19 June 2019', '19 जून 2019 से'),
        about: T('He runs the meetings of the Lok Sabha, where the MPs we elect talk and make laws.', 'वे लोकसभा की बैठकें चलाते हैं, जहाँ हमारे चुने हुए सांसद चर्चा करके कानून बनाते हैं।') },
    ],
  };
  const GK = window.KKM_GK; const LD = (id) => GK.leaders.find((x) => x.id === id);

  // ================================================================ helpers
  const two = (a) => (Array.isArray(a) ? T(a[0], a[1]) : a);
  const I = (pic, h, x, extra = {}) => ({ ...(typeof pic === 'string' ? (pic.startsWith('dia:') ? { dia: pic.slice(4) } : { emoji: pic }) : pic), h: two(h), x: two(x), ...extra });
  const Q = (emoji, q, opts, answer, ex) => ({ emoji, q: two(q), options: opts.map(two), answer, explain: ex ? two(ex) : undefined });
  const add = (id, world, levels, a) => CUR.push({ id, world, levels, free: true, ...a });
  const FACTS = (id, world, levels, title, emoji, items, qs, extra = {}) => add(id, world, levels, { type: 'facts', title: two(title), emoji, items, questions: qs, count: 5, skills: ['knowledge', 'listening'], ...extra });
  const QUIZ = (id, world, levels, title, emoji, qs, count = 8) => add(id, world, levels, { type: 'quiz', title: two(title), emoji, questions: qs, count, skills: ['knowledge'] });

  // ===================================================================================== MY INDIA
  // ---- National Anthem: sing (Devanagari + Roman)
  add('in-anthem', 'india', ALL, {
    type: 'poem', title: T('National Anthem: Jana Gana Mana', 'राष्ट्रगान: जन गण मन'), emoji: '🇮🇳', tune: 'gentle', bpm: 72,
    lines: ['जन-गण-मन अधिनायक जय हे', 'भारत-भाग्य-विधाता!', 'पंजाब-सिंधु-गुजरात-मराठा', 'द्राविड़-उत्कल-बंग', 'विंध्य-हिमाचल-यमुना-गंगा', 'उच्छल-जलधि-तरंग', 'तव शुभ नामे जागे,', 'तव शुभ आशिष मागे,', 'गाहे तव जय-गाथा।', 'जन-गण-मंगलदायक जय हे', 'भारत-भाग्य-विधाता!', 'जय हे, जय हे, जय हे,', 'जय जय जय, जय हे।'],
    roman: ['Jana-gana-mana adhinayaka jaya he', 'Bharata-bhagya-vidhata!', 'Punjaba-Sindhu-Gujarata-Maratha', 'Dravida-Utkala-Banga', 'Vindhya-Himachala-Yamuna-Ganga', 'Uchchhala-jaladhi-taranga', 'Tava shubha name jage,', 'Tava shubha ashisha mage,', 'Gahe tava jaya-gatha.', 'Jana-gana-mangala-dayaka jaya he', 'Bharata-bhagya-vidhata!', 'Jaya he, jaya he, jaya he,', 'Jaya jaya jaya, jaya he.'],
    meaning: T('Stand straight and still while it is sung. The full anthem takes about 52 seconds.', 'राष्ट्रगान के समय सीधे और स्थिर खड़े रहो। पूरा राष्ट्रगान लगभग 52 सेकंड का है।'),
    credit: 'Words & music: Rabindranath Tagore (1911) – public domain. Melody in C (Sa = C).', skills: ['music', 'memory', 'values'],
    // the anthem tune, one phrase per line: [note, beats]; ≈52 seconds at 0.26 s per beat, like the official rendition
    unit: 0.26, root: 'C3',
    melody: [
      [['C4', 1], ['D4', 1], ['E4', 1], ['E4', 1], ['E4', 1], ['E4', 1], ['E4', 1], ['E4', 1], ['E4', 2], ['E4', 1], ['E4', 1], ['D4', 1], ['E4', 1], ['F4', 3]],
      [['E4', 2], ['E4', 1], ['E4', 1], ['D4', 2], ['D4', 1], ['D4', 1], ['B3', 1], ['D4', 1], ['C4', 4]],
      [['C4', 2], ['G4', 2], ['G4', 1], ['G4', 2], ['G4', 1], ['G4', 1], ['G4', 1], ['G4', 2], ['G4', 1], ['G4', 1], ['F#4', 1], ['A4', 1], ['G4', 3]],
      [['F4', 2], ['F4', 1], ['F4', 1], ['E4', 2], ['E4', 1], ['E4', 1], ['D4', 1], ['F4', 1], ['E4', 4]],
      [['E4', 2], ['E4', 2], ['E4', 1], ['E4', 2], ['E4', 1], ['D4', 2], ['G4', 1], ['G4', 1], ['G4', 2], ['F4', 2], ['F4', 4]],
      [['E4', 2], ['E4', 1], ['E4', 1], ['D4', 1], ['D4', 1], ['D4', 1], ['D4', 1], ['B3', 1], ['D4', 1], ['C4', 4]],
      [['C4', 1], ['D4', 1], ['E4', 2], ['E4', 1], ['E4', 2], ['E4', 1], ['D4', 1], ['E4', 1], ['F4', 3]],
      [['E4', 1], ['F4', 1], ['G4', 2], ['G4', 1], ['G4', 2], ['F4', 1], ['E4', 1], ['D4', 1], ['F4', 1], ['E4', 3]],
      [['E4', 2], ['E4', 1], ['D4', 2], ['D4', 1], ['D4', 1], ['D4', 1], ['B3', 1], ['D4', 1], ['C4', 4]],
      [['G4', 1], ['G4', 1], ['G4', 1], ['G4', 1], ['G4', 2], ['G4', 1], ['F#4', 1], ['G4', 1], ['G4', 1], ['G4', 1], ['F#4', 1], ['A4', 1], ['G4', 3]],
      [['F4', 2], ['F4', 1], ['F4', 1], ['E4', 2], ['E4', 1], ['F4', 1], ['D4', 1], ['F4', 1], ['E4', 4]],
      [['C5', 1], ['B4', 1], ['C5', 3], ['B4', 1], ['A4', 1], ['B4', 3], ['A4', 1], ['G4', 1], ['A4', 4]],
      [['C4', 1], ['C4', 1], ['D4', 2], ['D4', 1], ['E4', 2], ['E4', 1], ['D4', 1], ['E4', 1], ['F4', 6]],
    ],
  });
  // ---- About the anthem
  FACTS('in-anthem-about', 'india', ALL, ['About our National Anthem', 'हमारे राष्ट्रगान के बारे में'], '🎼', [
    I('dia:attention', ['Our National Anthem', 'हमारा राष्ट्रगान'], ['“Jana Gana Mana” is India’s National Anthem. We sing it with pride at school, on Independence Day and on Republic Day.', '“जन गण मन” भारत का राष्ट्रगान है। हम इसे स्कूल में, स्वतंत्रता दिवस और गणतंत्र दिवस पर गर्व से गाते हैं।']),
    I('✍️', ['Who wrote it?', 'इसे किसने लिखा?'], ['The great poet Rabindranath Tagore wrote it. He was the first person from Asia to win the Nobel Prize, in 1913.', 'इसे महान कवि रवींद्रनाथ टैगोर ने लिखा। वे 1913 में नोबेल पुरस्कार जीतने वाले एशिया के पहले व्यक्ति थे।']),
    I('🗓️', ['When was it first sung?', 'पहली बार कब गाया गया?'], ['It was first sung on 27 December 1911 in Kolkata (then Calcutta). It was written in Bengali.', 'इसे पहली बार 27 दिसंबर 1911 को कोलकाता (तब कलकत्ता) में गाया गया। यह बांग्ला में लिखा गया था।']),
    I('📜', ['When did it become our anthem?', 'यह राष्ट्रगान कब बना?'], ['It was adopted as the National Anthem on 24 January 1950.', 'इसे 24 जनवरी 1950 को राष्ट्रगान के रूप में अपनाया गया।']),
    I('dia:timer', ['How long is it?', 'यह कितना लंबा है?'], ['The full anthem takes about 52 seconds. A short version – the first and last lines – takes about 20 seconds.', 'पूरा राष्ट्रगान लगभग 52 सेकंड का है। छोटा रूप – पहली और आखिरी पंक्तियाँ – लगभग 20 सेकंड का है।']),
    I('🧍', ['How do we show respect?', 'हम सम्मान कैसे दिखाते हैं?'], ['Stand up straight and still. Do not talk, eat or move around. Sing along proudly!', 'सीधे और स्थिर खड़े रहो। बात मत करो, कुछ मत खाओ, इधर-उधर मत हिलो। गर्व से साथ में गाओ!']),
  ], [
    Q('✍️', ['Who wrote our National Anthem?', 'हमारा राष्ट्रगान किसने लिखा?'], [['Rabindranath Tagore', 'रवींद्रनाथ टैगोर'], ['Mahatma Gandhi', 'महात्मा गांधी'], ['Jawaharlal Nehru', 'जवाहरलाल नेहरू']], 0),
    Q('⏱️', ['How long is the full anthem?', 'पूरा राष्ट्रगान कितना लंबा है?'], [['About 52 seconds', 'लगभग 52 सेकंड'], ['About 5 minutes', 'लगभग 5 मिनट'], ['About 1 hour', 'लगभग 1 घंटा']], 0),
    Q('🧍', ['What do we do when the anthem plays?', 'राष्ट्रगान बजे तो हम क्या करते हैं?'], [['Stand straight and still', 'सीधे और स्थिर खड़े रहते हैं'], ['Keep eating', 'खाते रहते हैं'], ['Run around', 'इधर-उधर भागते हैं']], 0),
    Q('🎼', ['What is our National Anthem called?', 'हमारे राष्ट्रगान का नाम क्या है?'], [['Jana Gana Mana', 'जन गण मन'], ['Vande Mataram', 'वंदे मातरम्'], ['Twinkle Twinkle', 'ट्विंकल ट्विंकल']], 0, ['Vande Mataram is our National SONG.', 'वंदे मातरम् हमारा राष्ट्रगीत है।']),
    Q('📜', ['In which year did it become our anthem?', 'यह किस साल राष्ट्रगान बना?'], [['1950', '1950'], ['1850', '1850'], ['2000', '2000']], 0),
  ]);
  // ---- Meaning, line by line, with pictures
  FACTS('in-anthem-meaning', 'india', BIG, ['What does our Anthem mean?', 'राष्ट्रगान का अर्थ क्या है?'], '🗺️', [
    I({ scene: { bg: 'city', actors: '🧑‍🤝‍🧑 👨‍👩‍👧 🧒' } }, ['Jana-gana-mana adhinayaka jaya he', 'जन-गण-मन अधिनायक जय हे'], ['“Victory to you, who rules the hearts and minds of all the people.”', '“हे सब लोगों के मन के अधिनायक, तुम्हारी जय हो।”']),
    I({ scene: { bg: 'meadow', actors: '🇮🇳 ✨' } }, ['Bharata-bhagya-vidhata', 'भारत-भाग्य-विधाता'], ['“You shape the future of India.”', '“तुम भारत के भाग्य को बनाने वाले हो।”']),
    I({ scene: { bg: 'field', actors: '👨‍🌾 🌾 🐪' } }, ['Punjab, Sindhu, Gujarat, Maratha', 'पंजाब, सिंधु, गुजरात, मराठा'], ['The song names lands of the north and west – Punjab, the Sindhu (Indus) region, Gujarat and the Maratha land.', 'गीत में उत्तर और पश्चिम के प्रदेशों के नाम हैं – पंजाब, सिंधु (सिंध) प्रदेश, गुजरात और मराठा प्रदेश।']),
    I({ scene: { bg: 'sea', actors: '🛶 🥥 🐘' } }, ['Dravida, Utkala, Banga', 'द्राविड़, उत्कल, बंग'], ['Then the south (Dravida), Odisha (Utkal) and Bengal (Banga) in the east.', 'फिर दक्षिण (द्राविड़), ओडिशा (उत्कल) और पूर्व में बंगाल (बंग)।']),
    I({ scene: { bg: 'mountain', actors: '🧗 🐐' } }, ['Vindhya, Himachala', 'विंध्य, हिमाचल'], ['The Vindhya hills and the mighty Himalaya mountains.', 'विंध्य पर्वत और विशाल हिमालय पर्वत।']),
    I({ scene: { bg: 'river', actors: '🛶 ~🐬 🪔' } }, ['Yamuna, Ganga', 'यमुना, गंगा'], ['Our great rivers, the Yamuna and the Ganga.', 'हमारी महान नदियाँ, यमुना और गंगा।']),
    I({ scene: { bg: 'sea', actors: '🌊 ~🐬 ⛵' } }, ['Uchchhala-jaladhi-taranga', 'उच्छल-जलधि-तरंग'], ['“The leaping waves of the ocean” around India.', '“भारत के चारों ओर समुद्र की उछलती लहरें।”']),
    I({ scene: { bg: 'meadow', actors: '🙏 🧒 👧' } }, ['Tava shubha name jage…', 'तव शुभ नामे जागे…'], ['“They all wake up to your good name, ask for your blessings and sing of your glory.”', '“सब तुम्हारा शुभ नाम लेकर जागते हैं, तुम्हारा आशीर्वाद माँगते हैं और तुम्हारी जय-गाथा गाते हैं।”']),
    I({ scene: { bg: 'city', actors: '🎉 🇮🇳 🎊' } }, ['Jaya he, jaya he, jaya he!', 'जय हे, जय हे, जय हे!'], ['“Victory, victory, victory to you!” All of India, from mountains to oceans, is one family.', '“जय हो, जय हो, जय हो!” पहाड़ों से समुद्र तक, पूरा भारत एक परिवार है।']),
  ], [
    Q('🏔️', ['“Himachala” in the anthem means…', 'राष्ट्रगान में “हिमाचल” का अर्थ…'], [['The Himalaya mountains', 'हिमालय पर्वत'], ['A river', 'एक नदी'], ['A city', 'एक शहर']], 0),
    Q('🌊', ['“Jaladhi-taranga” means…', '“जलधि-तरंग” का अर्थ…'], [['Waves of the ocean', 'समुद्र की लहरें'], ['A big tree', 'बड़ा पेड़'], ['A song', 'एक गाना']], 0),
    Q('🏞️', ['Which two rivers are in the anthem?', 'राष्ट्रगान में कौन सी दो नदियाँ हैं?'], [['Yamuna and Ganga', 'यमुना और गंगा'], ['Nile and Amazon', 'नील और अमेज़न'], ['Thames and Seine', 'टेम्स और सीन']], 0),
    Q('🇮🇳', ['The anthem tells us India is…', 'राष्ट्रगान हमें बताता है कि भारत…'], [['One family from mountains to sea', 'पहाड़ों से समुद्र तक एक परिवार है'], ['Only one city', 'सिर्फ़ एक शहर है'], ['Very small', 'बहुत छोटा है']], 0),
  ]);
  // ---- Respect: what would you do?
  add('in-anthem-respect', 'india', ALL, B.situ(T('Anthem time manners', 'राष्ट्रगान के समय का शिष्टाचार'), [
    ['🏫', ['The anthem starts in the school assembly. Your friend whispers a joke.', 'स्कूल की प्रार्थना सभा में राष्ट्रगान शुरू हुआ। दोस्त धीरे से चुटकुला सुनाता है।'], [[['Stay still and sing; talk later', 'स्थिर खड़े रहकर गाओ; बात बाद में'], true, ['Yes! We show respect for 52 seconds.', 'हाँ! हम 52 सेकंड पूरे सम्मान से खड़े रहते हैं।']], [['Laugh and talk', 'हँसो और बात करो'], false, ['Wait till the anthem ends.', 'राष्ट्रगान खत्म होने तक रुको।']]]],
    ['🎬', ['The anthem plays before a film and you are eating popcorn.', 'फ़िल्म से पहले राष्ट्रगान बजा और तुम पॉपकॉर्न खा रहे हो।'], [[['Put it down and stand up straight', 'उसे रखो और सीधे खड़े हो जाओ'], true, ['Well done! Respect comes first.', 'शाबाश! पहले सम्मान।']], [['Keep eating', 'खाते रहो'], false, ['Pause your snack and stand up.', 'नाश्ता रोककर खड़े हो जाओ।']]]],
    ['🏳️', ['You see a small paper flag lying on the road after 15 August.', '15 अगस्त के बाद सड़क पर एक छोटा कागज़ का झंडा पड़ा दिखा।'], [[['Pick it up gently and give it to an adult or school', 'उसे धीरे से उठाकर बड़ों या स्कूल को दो'], true, ['Our flag should never be on the ground.', 'हमारा झंडा कभी ज़मीन पर नहीं होना चाहिए।']], [['Step on it', 'उस पर पैर रखो'], false, ['Never! Our flag is our pride.', 'कभी नहीं! झंडा हमारी शान है।']]]],
    ['🧍', ['Your little brother does not know what to do during the anthem.', 'तुम्हारे छोटे भाई को नहीं पता कि राष्ट्रगान के समय क्या करें।'], [[['Show him: stand straight, hands by your side', 'उसे दिखाओ: सीधे खड़े, हाथ बगल में'], true, ['Good teacher!', 'अच्छे शिक्षक!']], [['Make fun of him', 'उसका मज़ाक उड़ाओ'], false, ['Help him learn kindly.', 'प्यार से सिखाओ।']]]],
  ], ['Stand still, stay quiet, sing with pride.', 'स्थिर खड़े रहो, चुप रहो, गर्व से गाओ।'], { skills: ['values', 'life'] }));
  // ---- National Song
  add('in-vande', 'india', BIG, {
    type: 'poem', title: T('National Song: Vande Mataram', 'राष्ट्रगीत: वंदे मातरम्'), emoji: '🌸', tune: 'gentle', bpm: 84,
    lines: ['वंदे मातरम्!', 'सुजलाम् सुफलाम् मलयज-शीतलाम्', 'शस्य-श्यामलाम् मातरम्! वंदे मातरम्!', 'शुभ्र-ज्योत्स्ना-पुलकित-यामिनीम्', 'फुल्ल-कुसुमित-द्रुमदल-शोभिनीम्', 'सुहासिनीम् सुमधुर-भाषिणीम्', 'सुखदाम् वरदाम् मातरम्! वंदे मातरम्!'],
    roman: ['Vande Mataram!', 'Sujalam suphalam malayaja-shitalam', 'Shasya-shyamalam Mataram! Vande Mataram!', 'Shubhra-jyotsna-pulakita-yaminim', 'Phulla-kusumita-drumadala-shobhinim', 'Suhasinim sumadhura-bhashinim', 'Sukhadam varadam Mataram! Vande Mataram!'],
    meaning: T('“I bow to you, Mother India – full of rivers and fruits, cool breezes and green fields, moonlit nights and flowering trees; always smiling, speaking sweetly, giving joy and blessings.” Written by Bankim Chandra Chattopadhyay.', '“हे भारत माँ, तुम्हें प्रणाम – तुम नदियों और फलों से भरी, ठंडी हवा और हरे खेतों वाली, चाँदनी रातों और फूलों से लदे पेड़ों वाली; सदा मुस्कुराती, मीठा बोलती, सुख और वरदान देती हो।” रचना: बंकिम चंद्र चट्टोपाध्याय।'),
    credit: 'Bankim Chandra Chattopadhyay (1882) – public domain', skills: ['music', 'memory', 'values'],
  });
  // ---- The flag
  FACTS('in-flag', 'india', ALL, ['Our National Flag – Tiranga', 'हमारा राष्ट्रीय ध्वज – तिरंगा'], '🇮🇳', [
    I('dia:flag', ['The Tiranga', 'तिरंगा'], ['Our flag has three colours, so we lovingly call it the “Tiranga”.', 'हमारे झंडे में तीन रंग हैं, इसलिए हम इसे प्यार से “तिरंगा” कहते हैं।']),
    I('dia:flagparts', ['What do the colours mean?', 'रंगों का क्या मतलब है?'], ['Saffron on top stands for courage. White in the middle stands for peace and truth. Green at the bottom stands for growth and life.', 'ऊपर केसरिया साहस का, बीच में सफ़ेद शांति और सच का, और नीचे हरा हरियाली और खुशहाली का प्रतीक है।']),
    I('dia:chakra', ['The Ashoka Chakra', 'अशोक चक्र'], ['In the centre is a navy-blue wheel with 24 spokes. It reminds us to keep moving forward.', 'बीच में गहरे नीले रंग का चक्र है, जिसमें 24 तीलियाँ हैं। यह हमें आगे बढ़ते रहने की याद दिलाता है।']),
    I('🗓️', ['When was it adopted?', 'इसे कब अपनाया गया?'], ['The flag was adopted on 22 July 1947. It is based on a design by Pingali Venkayya.', 'झंडे को 22 जुलाई 1947 को अपनाया गया। यह पिंगली वेंकय्या के डिज़ाइन पर आधारित है।']),
    I('📏', ['Its shape', 'इसका आकार'], ['The flag is a rectangle. Its length and height are in the ratio 3 : 2.', 'झंडा आयत के आकार का है। इसकी लंबाई और ऊँचाई का अनुपात 3 : 2 है।']),
    I('🙏', ['Respect the flag', 'झंडे का सम्मान'], ['Saffron always goes on top. Never let the flag touch the ground, and never tear or throw it.', 'केसरिया हमेशा ऊपर रहता है। झंडे को कभी ज़मीन से न छूने दो, न फाड़ो, न फेंको।']),
  ], [
    Q('🇮🇳', ['Which colour is at the top of our flag?', 'हमारे झंडे में सबसे ऊपर कौन सा रंग है?'], [['Saffron', 'केसरिया'], ['Green', 'हरा'], ['Blue', 'नीला']], 0),
    Q('☸️', ['How many spokes are in the Ashoka Chakra?', 'अशोक चक्र में कितनी तीलियाँ हैं?'], [['24', '24'], ['12', '12'], ['10', '10']], 0),
    Q('🟩', ['Green in the flag stands for…', 'झंडे में हरा रंग किसका प्रतीक है?'], [['Growth and life', 'हरियाली और खुशहाली'], ['Anger', 'गुस्सा'], ['Night', 'रात']], 0),
    Q('🤍', ['White stands for…', 'सफ़ेद किसका प्रतीक है?'], [['Peace and truth', 'शांति और सच'], ['Fire', 'आग'], ['Food', 'खाना']], 0),
    Q('🙏', ['Should the flag touch the ground?', 'क्या झंडा ज़मीन को छूना चाहिए?'], [['No, never', 'नहीं, कभी नहीं'], ['Yes', 'हाँ'], ['Only on Sundays', 'बस रविवार को']], 0),
  ]);
  add('in-flagbuild', 'india', ALL, { type: 'flagbuild', title: T('Build the Tiranga', 'तिरंगा बनाओ'), emoji: '🧩', skills: ['knowledge', 'logic'] });
  // ---- National symbols
  FACTS('in-symbols', 'india', ALL, ['Our National Symbols', 'हमारे राष्ट्रीय प्रतीक'], '🐅', [
    I('🐅', ['National Animal: Tiger', 'राष्ट्रीय पशु: बाघ'], ['The strong and graceful Royal Bengal Tiger.', 'ताकतवर और सुंदर रॉयल बंगाल टाइगर।']),
    I('🦚', ['National Bird: Peacock', 'राष्ट्रीय पक्षी: मोर'], ['The peacock dances with its colourful feathers when rain clouds come.', 'बादल आने पर मोर अपने रंग-बिरंगे पंख फैलाकर नाचता है।']),
    I('🪷', ['National Flower: Lotus', 'राष्ट्रीय पुष्प: कमल'], ['The lotus grows in muddy water but stays clean and beautiful.', 'कमल कीचड़ में उगकर भी साफ़ और सुंदर रहता है।']),
    I('🥭', ['National Fruit: Mango', 'राष्ट्रीय फल: आम'], ['The sweet mango – the king of fruits!', 'मीठा आम – फलों का राजा!']),
    I('🌳', ['National Tree: Banyan', 'राष्ट्रीय वृक्ष: बरगद'], ['The huge banyan tree lives for hundreds of years and gives shade to many.', 'विशाल बरगद सैकड़ों साल जीता है और बहुतों को छाँव देता है।']),
    I('🏞️', ['National River: Ganga', 'राष्ट्रीय नदी: गंगा'], ['The Ganga is the longest river flowing in India.', 'गंगा भारत में बहने वाली सबसे लंबी नदी है।']),
    I('🐬', ['National Aquatic Animal: River Dolphin', 'राष्ट्रीय जलीय जीव: गंगा डॉल्फ़िन'], ['The Ganga river dolphin lives in our rivers. It cannot see well, so it “sees” with sound!', 'गंगा डॉल्फ़िन हमारी नदियों में रहती है। उसे ठीक से दिखता नहीं, इसलिए वह आवाज़ से “देखती” है!']),
    I('🐘', ['National Heritage Animal: Elephant', 'राष्ट्रीय धरोहर पशु: हाथी'], ['The wise and gentle elephant – just like Golu!', 'समझदार और सीधा-सादा हाथी – बिल्कुल गोलू जैसा!']),
    I('🦁', ['National Emblem', 'राष्ट्रीय प्रतीक चिह्न'], ['Four lions standing back to back, from the Lion Capital at Sarnath. Below is written “Satyameva Jayate” – Truth alone wins.', 'सारनाथ के सिंह स्तंभ से लिए चार शेर, पीठ से पीठ मिलाए। नीचे लिखा है “सत्यमेव जयते” – सच की ही जीत होती है।']),
    I('₹', ['Our Currency: Rupee ₹', 'हमारी मुद्रा: रुपया ₹'], ['India’s money is the Rupee. Its symbol ₹ was chosen in 2010.', 'भारत की मुद्रा रुपया है। इसका चिह्न ₹ 2010 में चुना गया।']),
  ], [
    Q('🐅', ['What is our National Animal?', 'हमारा राष्ट्रीय पशु कौन है?'], [['Tiger', 'बाघ'], ['Lion', 'शेर'], ['Cow', 'गाय']], 0),
    Q('🦚', ['What is our National Bird?', 'हमारा राष्ट्रीय पक्षी कौन है?'], [['Peacock', 'मोर'], ['Parrot', 'तोता'], ['Crow', 'कौआ']], 0),
    Q('🌸', ['What is our National Flower?', 'हमारा राष्ट्रीय पुष्प कौन है?'], [['Lotus', 'कमल'], ['Rose', 'गुलाब'], ['Sunflower', 'सूरजमुखी']], 0),
    Q('🥭', ['What is our National Fruit?', 'हमारा राष्ट्रीय फल कौन है?'], [['Mango', 'आम'], ['Apple', 'सेब'], ['Banana', 'केला']], 0),
    Q('📜', ['“Satyameva Jayate” means…', '“सत्यमेव जयते” का अर्थ…'], [['Truth alone wins', 'सच की ही जीत होती है'], ['Eat well', 'अच्छा खाओ'], ['Run fast', 'तेज़ दौड़ो']], 0),
    Q('🌳', ['What is our National Tree?', 'हमारा राष्ट्रीय वृक्ष कौन है?'], [['Banyan', 'बरगद'], ['Neem', 'नीम'], ['Coconut', 'नारियल']], 0),
  ]);
  add('in-symbols-match', 'india', ALL, B.match(T('Match the national symbols', 'राष्ट्रीय प्रतीक मिलाओ'), [
    [['National animal', 'राष्ट्रीय पशु'], ['🐅 Tiger', '🐅 बाघ']], [['National bird', 'राष्ट्रीय पक्षी'], ['🦚 Peacock', '🦚 मोर']], [['National flower', 'राष्ट्रीय पुष्प'], ['🪷 Lotus', '🪷 कमल']],
    [['National fruit', 'राष्ट्रीय फल'], ['🥭 Mango', '🥭 आम']], [['National tree', 'राष्ट्रीय वृक्ष'], ['🌳 Banyan', '🌳 बरगद']], [['National river', 'राष्ट्रीय नदी'], ['🏞️ Ganga', '🏞️ गंगा']],
  ], { skills: ['knowledge', 'memory'] }));
  // ---- How India became free (illustrated story)
  window.KKM_LONG('freedom', ['How India Became Free', 'भारत आज़ाद कैसे हुआ'], '🇮🇳', [
    ['village', '👨‍🌾 👩 🧒', `Long ago, India was a land of farmers, kings, poets and traders. People from far away came to trade spices, cloth and gold.`, `बहुत पहले भारत किसानों, राजाओं, कवियों और व्यापारियों का देश था। दूर-दूर से लोग मसाले, कपड़े और सोने का व्यापार करने आते।`],
    ['sea', '⛵ 💂 🏰', `The British came as traders, but slowly they began to rule India. Indians were not free to make their own decisions.`, `अंग्रेज़ व्यापारी बनकर आए, पर धीरे-धीरे भारत पर राज करने लगे। भारतीय अपने फ़ैसले खुद नहीं ले पाते थे।`],
    ['palace', '👸 🐎 🗡️', `Brave people fought back. In 1857, Rani Lakshmibai of Jhansi rode into battle with great courage.`, `बहादुर लोगों ने मुकाबला किया। 1857 में झाँसी की रानी लक्ष्मीबाई बड़ी हिम्मत से युद्ध में उतरीं।`],
    ['sea', '👴 🧂 🧒 👩', `Mahatma Gandhi taught a new way: fight with truth and without violence. In 1930 he walked to Dandi by the sea to make salt, and thousands walked with him.`, `महात्मा गांधी ने नया रास्ता सिखाया: सच और अहिंसा से लड़ो। 1930 में वे नमक बनाने समुद्र किनारे दांडी तक पैदल गए, और हज़ारों लोग साथ चले।`],
    ['city', '🎖️ 🧑 ✊', `Many heroes joined: Netaji Subhas Chandra Bose, Bhagat Singh, Sardar Patel, Sarojini Naidu and lakhs of ordinary people.`, `बहुत से वीर जुड़े: नेताजी सुभाष चंद्र बोस, भगत सिंह, सरदार पटेल, सरोजिनी नायडू और लाखों आम लोग।`],
    ['night', '🇮🇳 🎉 🪔', `At last, at midnight on 15 August 1947, India became free! People celebrated with lamps and songs.`, `आखिरकार, 15 अगस्त 1947 की आधी रात को भारत आज़ाद हुआ! लोगों ने दीयों और गीतों से जश्न मनाया।`],
    ['city', '🧑‍💼 🇮🇳 🏰', `Jawaharlal Nehru became the first Prime Minister and raised the flag at the Red Fort in Delhi. Every year on 15 August, the Prime Minister still does this.`, `जवाहरलाल नेहरू पहले प्रधानमंत्री बने और दिल्ली के लाल किले पर झंडा फहराया। आज भी हर साल 15 अगस्त को प्रधानमंत्री ऐसा करते हैं।`],
    ['court', '📘 ✍️ 👨‍⚖️', `Then Dr. B. R. Ambedkar and his team wrote our Constitution – the rule book that says every Indian is equal.`, `फिर डॉ. भीमराव आंबेडकर और उनकी टीम ने हमारा संविधान लिखा – वह नियम-पुस्तक जो कहती है कि हर भारतीय बराबर है।`],
    ['city', '🎺 🇮🇳 💂', `On 26 January 1950, the Constitution began. India became a Republic! Dr. Rajendra Prasad was the first President. We celebrate Republic Day with a grand parade.`, `26 जनवरी 1950 को संविधान लागू हुआ। भारत गणतंत्र बना! डॉ. राजेंद्र प्रसाद पहले राष्ट्रपति बने। हम गणतंत्र दिवस भव्य परेड से मनाते हैं।`],
    ['school', '🧒 🇮🇳 👧 😊', `Our freedom was won with great sacrifice. We protect it by being honest, kind, and good citizens. Jai Hind!`, `हमारी आज़ादी बड़े बलिदान से मिली। हम ईमानदार, दयालु और अच्छे नागरिक बनकर इसकी रक्षा करते हैं। जय हिंद!`],
  ], ['Remember our heroes. Be a good citizen to keep India free and strong.', 'अपने वीरों को याद रखो। अच्छे नागरिक बनकर भारत को आज़ाद और मज़बूत रखो।'], [
    [['When did India become free?', 'भारत कब आज़ाद हुआ?'], [['15 August 1947', '15 अगस्त 1947'], ['26 January 1950', '26 जनवरी 1950'], ['2 October 1869', '2 अक्टूबर 1869']], 0],
    [['Gandhiji fought with…', 'गांधीजी किससे लड़े?'], [['Truth and non-violence', 'सच और अहिंसा से'], ['Swords', 'तलवारों से'], ['Tanks', 'टैंकों से']], 0],
    [['Who was the first Prime Minister?', 'पहले प्रधानमंत्री कौन थे?'], [['Jawaharlal Nehru', 'जवाहरलाल नेहरू'], ['Rajendra Prasad', 'राजेंद्र प्रसाद'], ['Bhagat Singh', 'भगत सिंह']], 0],
    [['What do we celebrate on 26 January?', '26 जनवरी को हम क्या मनाते हैं?'], [['Republic Day', 'गणतंत्र दिवस'], ['Diwali', 'दीवाली'], ['Children’s Day', 'बाल दिवस']], 0],
  ], BIG);
  CUR.find((a) => a.id === 'st-freedom').world = 'india';
  // ---- Our Constitution
  FACTS('in-constitution', 'india', BIG, ['Our Constitution', 'हमारा संविधान'], '📘', [
    I('📘', ['The rule book of India', 'भारत की नियम-पुस्तक'], ['The Constitution is India’s biggest rule book. Every law and every leader must follow it.', 'संविधान भारत की सबसे बड़ी नियम-पुस्तक है। हर कानून और हर नेता को इसे मानना होता है।']),
    I('✍️', ['Who made it?', 'इसे किसने बनाया?'], ['Dr. B. R. Ambedkar led the team that wrote it. He is called the father of our Constitution.', 'डॉ. भीमराव आंबेडकर ने इसे लिखने वाली टीम का नेतृत्व किया। उन्हें संविधान का जनक कहा जाता है।']),
    I('🗓️', ['Two special days', 'दो खास दिन'], ['It was adopted on 26 November 1949 (Constitution Day) and began on 26 January 1950 (Republic Day).', 'इसे 26 नवंबर 1949 को अपनाया गया (संविधान दिवस) और 26 जनवरी 1950 को लागू किया गया (गणतंत्र दिवस)।']),
    I('📚', ['Longest in the world', 'दुनिया का सबसे लंबा'], ['It is the longest written constitution of any country in the world.', 'यह दुनिया के किसी भी देश का सबसे लंबा लिखित संविधान है।']),
    I('⚖️', ['Everyone is equal', 'सब बराबर हैं'], ['Rich or poor, girl or boy, any religion or language – the Constitution says everyone is equal.', 'अमीर या गरीब, लड़की या लड़का, कोई भी धर्म या भाषा – संविधान कहता है कि सब बराबर हैं।']),
    I('🎒', ['Your rights', 'तुम्हारे अधिकार'], ['Every child aged 6 to 14 has the right to free education. Children must not be made to do hard work for money.', '6 से 14 साल के हर बच्चे को मुफ़्त शिक्षा का अधिकार है। बच्चों से पैसों के लिए कठिन काम नहीं करवाया जा सकता।']),
    I('🤝', ['Your duties', 'तुम्हारे कर्तव्य'], ['Respect the flag and anthem, protect nature, keep public places clean, and live in harmony with everyone.', 'झंडे और राष्ट्रगान का सम्मान करो, प्रकृति की रक्षा करो, सार्वजनिक जगहें साफ़ रखो, और सबके साथ मेल-जोल से रहो।']),
  ], [
    Q('📘', ['Who led the team that wrote our Constitution?', 'संविधान लिखने वाली टीम का नेतृत्व किसने किया?'], [['Dr. B. R. Ambedkar', 'डॉ. भीमराव आंबेडकर'], ['Rabindranath Tagore', 'रवींद्रनाथ टैगोर'], ['C. V. Raman', 'सी. वी. रमन']], 0),
    Q('🗓️', ['When did the Constitution begin?', 'संविधान कब लागू हुआ?'], [['26 January 1950', '26 जनवरी 1950'], ['15 August 1947', '15 अगस्त 1947'], ['14 November 1889', '14 नवंबर 1889']], 0),
    Q('⚖️', ['The Constitution says everyone is…', 'संविधान कहता है कि सब…'], [['Equal', 'बराबर हैं'], ['Different in rights', 'अलग-अलग अधिकार वाले'], ['Kings', 'राजा हैं']], 0),
    Q('🎒', ['Which is a right of children?', 'बच्चों का अधिकार कौन सा है?'], [['Free education', 'मुफ़्त शिक्षा'], ['Driving a car', 'गाड़ी चलाना'], ['Voting', 'वोट देना']], 0, ['Voting is for people aged 18 and above.', 'वोट 18 साल और उससे बड़े लोग देते हैं।']),
  ]);
  // ---- My promise to India (original)
  add('in-promise-en', 'india', ALL, B.poem(T('My Promise to India', 'भारत से मेरा वादा'), '🤞', 'march', [
    'India is my home, my pride and my joy,', 'I will be kind to every girl and boy.', 'I will keep my streets and rivers clean,', 'I will plant a tree and keep India green.',
    'I will respect my elders, my flag and my land,', 'I will help those in need and lend a hand.', 'I will speak the truth and work hard each day –', 'Jai Hind! I will make India proud in every way!',
  ], ['A promise to be a good citizen.', 'एक अच्छा नागरिक बनने का वादा।'], { skills: ['values', 'speaking'] }));
  add('in-promise-hi', 'india', ALL, B.poem(T('भारत से मेरा वादा (हिंदी)', 'भारत से मेरा वादा'), '🤞', 'march', [
    'भारत मेरा घर है, मेरी शान,', 'हर बच्चे का करूँगा सम्मान।', 'गली, नदी को रखूँगा साफ़,', 'पेड़ लगाऊँ, हवा रहे साफ़।',
    'बड़ों का, झंडे का करूँ आदर,', 'मदद करूँ मैं सबकी बढ़-चढ़कर।', 'सच बोलूँ, मेहनत करूँ हर दिन,', 'जय हिंद! चमके भारत हर दिन!',
  ], ['अच्छा नागरिक बनने का वादा।', 'अच्छा नागरिक बनने का वादा।'], { skills: ['values', 'speaking'] }));
  // ---- India quiz
  QUIZ('in-quiz', 'india', ALL, ['My India quiz', 'मेरा भारत प्रश्नोत्तरी'], '🏆', [
    Q('🎼', ['Our National Anthem is…', 'हमारा राष्ट्रगान है…'], [['Jana Gana Mana', 'जन गण मन'], ['Vande Mataram', 'वंदे मातरम्'], ['Sare Jahan Se Achha', 'सारे जहाँ से अच्छा']], 0),
    Q('🌸', ['Our National Song is…', 'हमारा राष्ट्रगीत है…'], [['Vande Mataram', 'वंदे मातरम्'], ['Jana Gana Mana', 'जन गण मन'], ['Happy Birthday', 'हैप्पी बर्थडे']], 0),
    Q('🇮🇳', ['How many colours are in the Tiranga (not counting the wheel)?', 'तिरंगे में कितने रंग हैं (चक्र छोड़कर)?'], [['3', '3'], ['5', '5'], ['2', '2']], 0),
    Q('☸️', ['The wheel on our flag is the…', 'हमारे झंडे का चक्र है…'], [['Ashoka Chakra', 'अशोक चक्र'], ['Sun', 'सूरज'], ['Clock', 'घड़ी']], 0),
    Q('🐅', ['National animal?', 'राष्ट्रीय पशु?'], [['Tiger', 'बाघ'], ['Elephant', 'हाथी'], ['Horse', 'घोड़ा']], 0),
    Q('🦚', ['National bird?', 'राष्ट्रीय पक्षी?'], [['Peacock', 'मोर'], ['Pigeon', 'कबूतर'], ['Eagle', 'चील']], 0),
    Q('🎆', ['Independence Day is on…', 'स्वतंत्रता दिवस कब है?'], [['15 August', '15 अगस्त'], ['26 January', '26 जनवरी'], ['14 November', '14 नवंबर']], 0),
    Q('🎺', ['Republic Day is on…', 'गणतंत्र दिवस कब है?'], [['26 January', '26 जनवरी'], ['15 August', '15 अगस्त'], ['2 October', '2 अक्टूबर']], 0),
    Q('🕊️', ['Who is called the Father of the Nation?', 'राष्ट्रपिता किसे कहा जाता है?'], [['Mahatma Gandhi', 'महात्मा गांधी'], ['Sardar Patel', 'सरदार पटेल'], ['A. P. J. Abdul Kalam', 'ए. पी. जे. अब्दुल कलाम']], 0),
    Q('📜', ['Our national motto “Satyameva Jayate” means…', 'राष्ट्रीय वाक्य “सत्यमेव जयते” का अर्थ…'], [['Truth alone wins', 'सच की ही जीत होती है'], ['Work is worship', 'काम ही पूजा है'], ['Be happy', 'खुश रहो']], 0),
  ]);

  // ===================================================================================== GENERAL AWARENESS
  // ---- Our leaders (current)
  FACTS('gk-leaders', 'gk', ALL, ['Who leads our country?', 'हमारे देश को कौन चलाता है?'], '🏛️', [
    I('dia:leaders', ['India’s top leaders', 'भारत के शीर्ष नेता'], [`These are the leaders of India as of ${GK.asOf.en}. Let us meet them one by one!`, `${GK.asOf.hi} तक भारत के ये नेता हैं। चलो एक-एक करके मिलें!`]),
    ...GK.leaders.map((l) => I(l.emoji, [`${l.role.en}: ${l.name.en}`, `${l.role.hi}: ${l.name.hi}`], [`${l.about.en} (${l.since.en})`, `${l.about.hi} (${l.since.hi})`])),
    I('🗳️', ['Leaders can change', 'नेता बदल सकते हैं'], ['In a democracy, leaders change after elections or when their term ends. Ask a grown-up to check who it is today!', 'लोकतंत्र में चुनाव के बाद या कार्यकाल पूरा होने पर नेता बदलते हैं। किसी बड़े से पूछो कि आज कौन है!']),
    I('🗺️', ['Leaders of your state', 'तुम्हारे राज्य के नेता'], ['Each state has a Chief Minister and a Governor. Ask your parents: who is the Chief Minister of our state?', 'हर राज्य में एक मुख्यमंत्री और एक राज्यपाल होते हैं। अपने माता-पिता से पूछो: हमारे राज्य के मुख्यमंत्री कौन हैं?']),
  ], [
    Q('🏛️', ['Who is the President of India?', 'भारत की राष्ट्रपति कौन हैं?'], [LD('president').name, LD('pm').name, LD('cji').name].map((n) => [n.en, n.hi]), 0),
    Q('🧑‍💼', ['Who is the Prime Minister of India?', 'भारत के प्रधानमंत्री कौन हैं?'], [LD('pm').name, LD('vp').name, LD('speaker').name].map((n) => [n.en, n.hi]), 0),
    Q('🤝', ['Who is the Vice President of India?', 'भारत के उपराष्ट्रपति कौन हैं?'], [LD('vp').name, LD('pm').name, LD('cji').name].map((n) => [n.en, n.hi]), 0),
    Q('⚖️', ['Who is the Chief Justice of India?', 'भारत के मुख्य न्यायाधीश कौन हैं?'], [LD('cji').name, LD('speaker').name, LD('president').name].map((n) => [n.en, n.hi]), 0),
    Q('🔔', ['Who is the Speaker of the Lok Sabha?', 'लोकसभा अध्यक्ष कौन हैं?'], [LD('speaker').name, LD('vp').name, LD('pm').name].map((n) => [n.en, n.hi]), 0),
    Q('🏠', ['Where does the President live?', 'राष्ट्रपति कहाँ रहती हैं?'], [['Rashtrapati Bhavan', 'राष्ट्रपति भवन'], ['Red Fort', 'लाल किला'], ['Taj Mahal', 'ताजमहल']], 0),
    Q('👑', ['Who is the head of our country?', 'हमारे देश की प्रमुख कौन होती/होता है?'], [['The President', 'राष्ट्रपति'], ['The Mayor', 'महापौर'], ['The Sarpanch', 'सरपंच']], 0),
  ], { count: 6 });
  // ---- How our country is run
  FACTS('gk-democracy', 'gk', BIG, ['How is India run?', 'भारत कैसे चलता है?'], '🗳️', [
    I('🗳️', ['India is a democracy', 'भारत एक लोकतंत्र है'], ['In a democracy, the people choose their leaders by voting. India is the world’s largest democracy.', 'लोकतंत्र में जनता वोट देकर अपने नेता चुनती है। भारत दुनिया का सबसे बड़ा लोकतंत्र है।']),
    I('dia:vote', ['From your vote to the government', 'तुम्हारे वोट से सरकार तक'], ['People aged 18 and above vote. They elect MPs. MPs in Parliament make laws, and the Prime Minister leads the government.', '18 साल और उससे बड़े लोग वोट देते हैं। वे सांसद चुनते हैं। संसद में सांसद कानून बनाते हैं, और प्रधानमंत्री सरकार चलाते हैं।']),
    I('dia:parliament', ['Parliament', 'संसद'], ['Our Parliament has the President and two houses: the Lok Sabha (House of the People) and the Rajya Sabha (Council of States).', 'हमारी संसद में राष्ट्रपति और दो सदन होते हैं: लोकसभा (जनता का सदन) और राज्यसभा (राज्यों की परिषद)।']),
    I('dia:levels', ['Country, state, city, village', 'देश, राज्य, शहर, गाँव'], ['The country has a Prime Minister. Each state has a Chief Minister. Cities have a Mayor, and villages have a Sarpanch in the Gram Panchayat.', 'देश के प्रधानमंत्री होते हैं। हर राज्य के मुख्यमंत्री। शहरों के महापौर, और गाँवों में ग्राम पंचायत के सरपंच।']),
    I('⚖️', ['Courts', 'अदालतें'], ['Courts make sure laws are followed and everyone is treated fairly. The Supreme Court in New Delhi is the highest court.', 'अदालतें देखती हैं कि कानून माने जाएँ और सबके साथ न्याय हो। नई दिल्ली का सर्वोच्च न्यायालय सबसे बड़ा न्यायालय है।']),
    I('🏫', ['Practise democracy at school!', 'स्कूल में लोकतंत्र अपनाओ!'], ['When your class votes for a monitor, listens to everyone and accepts the result kindly – that is democracy!', 'जब तुम्हारी कक्षा मॉनिटर चुनने के लिए वोट करती है, सबकी सुनती है और नतीजे को प्यार से मानती है – यही लोकतंत्र है!']),
  ], [
    Q('🗳️', ['At what age can people vote in India?', 'भारत में कितनी उम्र में वोट दे सकते हैं?'], [['18 years', '18 साल'], ['10 years', '10 साल'], ['50 years', '50 साल']], 0),
    Q('🏛️', ['Who makes laws for the country?', 'देश के लिए कानून कौन बनाता है?'], [['Parliament', 'संसद'], ['Shopkeepers', 'दुकानदार'], ['Teachers', 'शिक्षक']], 0),
    Q('🏡', ['Who leads a village panchayat?', 'ग्राम पंचायत का प्रमुख कौन होता है?'], [['Sarpanch', 'सरपंच'], ['President', 'राष्ट्रपति'], ['Captain', 'कप्तान']], 0),
    Q('🗺️', ['Who leads a state government?', 'राज्य सरकार का प्रमुख कौन होता है?'], [['Chief Minister', 'मुख्यमंत्री'], ['Prime Minister', 'प्रधानमंत्री'], ['Principal', 'प्रधानाचार्य']], 0),
    Q('🔁', ['How often are Lok Sabha elections held?', 'लोकसभा चुनाव कितने साल में होते हैं?'], [['Every 5 years', 'हर 5 साल'], ['Every year', 'हर साल'], ['Every 20 years', 'हर 20 साल']], 0),
  ]);
  // ---- Our country India
  FACTS('gk-india', 'gk', ALL, ['Know our country', 'अपने देश को जानो'], '🗺️', [
    I('dia:indiaseas', ['Where is India?', 'भारत कहाँ है?'], ['India is in Asia. The Himalayas are in the north, and the sea is on three sides: the Arabian Sea, the Bay of Bengal and the Indian Ocean.', 'भारत एशिया में है। उत्तर में हिमालय है, और तीन ओर समुद्र: अरब सागर, बंगाल की खाड़ी और हिंद महासागर।']),
    I('⭐', ['Capital: New Delhi', 'राजधानी: नई दिल्ली'], ['New Delhi is our capital. Parliament, Rashtrapati Bhavan and the Supreme Court are there.', 'नई दिल्ली हमारी राजधानी है। संसद, राष्ट्रपति भवन और सर्वोच्च न्यायालय वहीं हैं।']),
    I('🧩', ['28 states and 8 union territories', '28 राज्य और 8 केंद्र शासित प्रदेश'], ['India is divided into 28 states and 8 union territories. Each has its own food, dress, dance and festivals.', 'भारत 28 राज्यों और 8 केंद्र शासित प्रदेशों में बँटा है। हर एक का अपना खाना, पहनावा, नृत्य और त्योहार है।']),
    I('🏜️', ['Biggest and smallest state', 'सबसे बड़ा और सबसे छोटा राज्य'], ['Rajasthan is the largest state by area. Goa is the smallest.', 'क्षेत्रफल में राजस्थान सबसे बड़ा राज्य है। गोवा सबसे छोटा।']),
    I('👨‍👩‍👧‍👦', ['So many people!', 'कितने सारे लोग!'], ['India has more people than any other country in the world.', 'भारत में दुनिया के किसी भी देश से ज़्यादा लोग रहते हैं।']),
    I('🗣️', ['Many languages', 'बहुत सी भाषाएँ'], ['Our Constitution lists 22 languages, and hundreds more are spoken! “Unity in diversity” – many colours, one India.', 'हमारे संविधान में 22 भाषाएँ हैं, और सैकड़ों और बोली जाती हैं! “अनेकता में एकता” – कई रंग, एक भारत।']),
    I('🏔️', ['Mountains and rivers', 'पहाड़ और नदियाँ'], ['The Himalayas are the highest mountains in the world. Kangchenjunga is India’s highest peak. The Ganga is the longest river in India.', 'हिमालय दुनिया के सबसे ऊँचे पहाड़ हैं। कंचनजंगा भारत की सबसे ऊँची चोटी है। गंगा भारत की सबसे लंबी नदी है।']),
    I('🚀', ['Space city', 'अंतरिक्ष नगरी'], ['ISRO, our space agency, has its headquarters in Bengaluru.', 'इसरो, हमारी अंतरिक्ष एजेंसी, का मुख्यालय बेंगलुरु में है।']),
  ], [
    Q('⭐', ['What is the capital of India?', 'भारत की राजधानी क्या है?'], [['New Delhi', 'नई दिल्ली'], ['Mumbai', 'मुंबई'], ['Kolkata', 'कोलकाता']], 0),
    Q('🧩', ['How many states does India have?', 'भारत में कितने राज्य हैं?'], [['28', '28'], ['8', '8'], ['50', '50']], 0),
    Q('🏜️', ['Which is the largest state by area?', 'क्षेत्रफल में सबसे बड़ा राज्य कौन सा है?'], [['Rajasthan', 'राजस्थान'], ['Goa', 'गोवा'], ['Kerala', 'केरल']], 0),
    Q('🏖️', ['Which is the smallest state?', 'सबसे छोटा राज्य कौन सा है?'], [['Goa', 'गोवा'], ['Rajasthan', 'राजस्थान'], ['Bihar', 'बिहार']], 0),
    Q('🏔️', ['Which mountains are in the north of India?', 'भारत के उत्तर में कौन से पहाड़ हैं?'], [['The Himalayas', 'हिमालय'], ['The Alps', 'आल्प्स'], ['The Andes', 'एंडीज़']], 0),
    Q('🌊', ['Which sea is to the west of India?', 'भारत के पश्चिम में कौन सा सागर है?'], [['Arabian Sea', 'अरब सागर'], ['Bay of Bengal', 'बंगाल की खाड़ी'], ['Red Sea', 'लाल सागर']], 0),
  ]);
  // ---- Important days
  const D = (day, m, mh, emoji, h, x) => I({ dia: 'calendar', day, month: T(m, mh), emoji }, h, x);
  FACTS('gk-days', 'gk', ALL, ['Important days', 'महत्वपूर्ण दिवस'], '🗓️', [
    D(12, 'January', 'जनवरी', '🧡', ['National Youth Day', 'राष्ट्रीय युवा दिवस'], ['Birthday of Swami Vivekananda, who inspired young people to be strong and fearless.', 'स्वामी विवेकानंद का जन्मदिन, जिन्होंने युवाओं को मज़बूत और निडर बनने की प्रेरणा दी।']),
    D(26, 'January', 'जनवरी', '🎺', ['Republic Day', 'गणतंत्र दिवस'], ['Our Constitution began in 1950. There is a grand parade in New Delhi.', '1950 में हमारा संविधान लागू हुआ। नई दिल्ली में भव्य परेड होती है।']),
    D(28, 'February', 'फ़रवरी', '🔬', ['National Science Day', 'राष्ट्रीय विज्ञान दिवस'], ['Remembers the Raman Effect, discovered by C. V. Raman.', 'सी. वी. रमन की खोज “रमन प्रभाव” की याद में।']),
    D(22, 'April', 'अप्रैल', '🌍', ['Earth Day', 'पृथ्वी दिवस'], ['A day to protect our planet.', 'अपनी धरती की रक्षा का दिन।']),
    D(5, 'June', 'जून', '🌳', ['World Environment Day', 'विश्व पर्यावरण दिवस'], ['Plant a tree and say no to plastic!', 'पेड़ लगाओ और प्लास्टिक को ना कहो!']),
    D(21, 'June', 'जून', '🧘', ['International Yoga Day', 'अंतरराष्ट्रीय योग दिवस'], ['Yoga, a gift from India, is done all over the world.', 'योग, भारत का उपहार, पूरी दुनिया में किया जाता है।']),
    D(15, 'August', 'अगस्त', '🇮🇳', ['Independence Day', 'स्वतंत्रता दिवस'], ['India became free in 1947. The Prime Minister hoists the flag at the Red Fort.', '1947 में भारत आज़ाद हुआ। प्रधानमंत्री लाल किले पर झंडा फहराते हैं।']),
    D(23, 'August', 'अगस्त', '🌙', ['National Space Day', 'राष्ट्रीय अंतरिक्ष दिवस'], ['Chandrayaan-3 landed near the Moon’s south pole on this day in 2023.', '2023 में इसी दिन चंद्रयान-3 चाँद के दक्षिणी ध्रुव के पास उतरा।']),
    D(29, 'August', 'अगस्त', '🏑', ['National Sports Day', 'राष्ट्रीय खेल दिवस'], ['Birthday of hockey wizard Major Dhyan Chand.', 'हॉकी के जादूगर मेजर ध्यानचंद का जन्मदिन।']),
    D(5, 'September', 'सितंबर', '🧑‍🏫', ['Teachers’ Day', 'शिक्षक दिवस'], ['Birthday of Dr. Sarvepalli Radhakrishnan, a great teacher and our second President.', 'डॉ. सर्वपल्ली राधाकृष्णन का जन्मदिन, जो महान शिक्षक और हमारे दूसरे राष्ट्रपति थे।']),
    D(14, 'September', 'सितंबर', '🔤', ['Hindi Diwas', 'हिंदी दिवस'], ['A day to celebrate the Hindi language.', 'हिंदी भाषा का उत्सव मनाने का दिन।']),
    D(2, 'October', 'अक्टूबर', '🕊️', ['Gandhi Jayanti', 'गांधी जयंती'], ['Birthday of Mahatma Gandhi. It is also the International Day of Non-Violence.', 'महात्मा गांधी का जन्मदिन। यह अंतरराष्ट्रीय अहिंसा दिवस भी है।']),
    D(14, 'November', 'नवंबर', '🧒', ['Children’s Day', 'बाल दिवस'], ['Birthday of Pandit Jawaharlal Nehru, who loved children. “Chacha Nehru”!', 'पंडित जवाहरलाल नेहरू का जन्मदिन, जो बच्चों से बहुत प्यार करते थे। “चाचा नेहरू”!']),
    D(26, 'November', 'नवंबर', '📘', ['Constitution Day', 'संविधान दिवस'], ['Our Constitution was adopted on this day in 1949.', '1949 में इसी दिन हमारा संविधान अपनाया गया।']),
  ], [
    Q('🧒', ['When is Children’s Day?', 'बाल दिवस कब है?'], [['14 November', '14 नवंबर'], ['5 September', '5 सितंबर'], ['1 January', '1 जनवरी']], 0),
    Q('🧑‍🏫', ['When is Teachers’ Day?', 'शिक्षक दिवस कब है?'], [['5 September', '5 सितंबर'], ['14 November', '14 नवंबर'], ['2 October', '2 अक्टूबर']], 0),
    Q('🕊️', ['Whose birthday is on 2 October?', '2 अक्टूबर को किसका जन्मदिन है?'], [['Mahatma Gandhi', 'महात्मा गांधी'], ['Jawaharlal Nehru', 'जवाहरलाल नेहरू'], ['C. V. Raman', 'सी. वी. रमन']], 0),
    Q('🧘', ['International Yoga Day is on…', 'अंतरराष्ट्रीय योग दिवस कब है?'], [['21 June', '21 जून'], ['21 March', '21 मार्च'], ['21 December', '21 दिसंबर']], 0),
    Q('🌳', ['World Environment Day is on…', 'विश्व पर्यावरण दिवस कब है?'], [['5 June', '5 जून'], ['5 May', '5 मई'], ['15 August', '15 अगस्त']], 0),
    Q('🌙', ['What do we remember on National Space Day?', 'राष्ट्रीय अंतरिक्ष दिवस पर क्या याद करते हैं?'], [['Chandrayaan-3 landing on the Moon', 'चंद्रयान-3 का चाँद पर उतरना'], ['A cricket match', 'एक क्रिकेट मैच'], ['A new film', 'नई फ़िल्म']], 0),
  ], { count: 6 });
  // ---- Great Indians
  FACTS('gk-greats', 'gk', ALL, ['Great Indians', 'महान भारतीय'], '🌟', [
    I('🕊️', ['Mahatma Gandhi', 'महात्मा गांधी'], ['The Father of the Nation. He led India to freedom with truth and non-violence (ahimsa).', 'राष्ट्रपिता। उन्होंने सच और अहिंसा से भारत को आज़ादी दिलाई।']),
    I('🌹', ['Jawaharlal Nehru', 'जवाहरलाल नेहरू'], ['India’s first Prime Minister. Children called him “Chacha Nehru”.', 'भारत के पहले प्रधानमंत्री। बच्चे उन्हें “चाचा नेहरू” कहते थे।']),
    I('🏛️', ['Dr. Rajendra Prasad', 'डॉ. राजेंद्र प्रसाद'], ['India’s first President.', 'भारत के पहले राष्ट्रपति।']),
    I('📘', ['Dr. B. R. Ambedkar', 'डॉ. भीमराव आंबेडकर'], ['He led the writing of our Constitution and fought for equal rights for everyone.', 'उन्होंने हमारा संविधान लिखने का नेतृत्व किया और सबके बराबर अधिकारों के लिए लड़े।']),
    I('🤝', ['Sardar Vallabhbhai Patel', 'सरदार वल्लभभाई पटेल'], ['The “Iron Man of India”. He joined over 500 princely states into one India.', '“भारत के लौह पुरुष”। उन्होंने 500 से ज़्यादा रियासतों को जोड़कर एक भारत बनाया।']),
    I('🎖️', ['Netaji Subhas Chandra Bose', 'नेताजी सुभाष चंद्र बोस'], ['A brave freedom fighter who led the Indian National Army. He made “Jai Hind” famous.', 'एक बहादुर स्वतंत्रता सेनानी जिन्होंने आज़ाद हिंद फ़ौज का नेतृत्व किया। उन्होंने “जय हिंद” को लोकप्रिय बनाया।']),
    I('🐎', ['Rani Lakshmibai', 'रानी लक्ष्मीबाई'], ['The brave queen of Jhansi who fought for freedom in 1857.', 'झाँसी की बहादुर रानी, जो 1857 में आज़ादी के लिए लड़ीं।']),
    I('📚', ['Savitribai Phule', 'सावित्रीबाई फुले'], ['India’s first woman teacher. She opened a school for girls in 1848.', 'भारत की पहली महिला शिक्षिका। उन्होंने 1848 में लड़कियों के लिए स्कूल खोला।']),
    I('🚀', ['Dr. A. P. J. Abdul Kalam', 'डॉ. ए. पी. जे. अब्दुल कलाम'], ['The “Missile Man of India” and our 11th President. He loved children and said, “Dream big!”', '“मिसाइल मैन” और हमारे 11वें राष्ट्रपति। वे बच्चों से प्यार करते थे और कहते थे, “बड़े सपने देखो!”']),
    I('🎵', ['Rabindranath Tagore', 'रवींद्रनाथ टैगोर'], ['Poet who wrote our National Anthem. The first Asian to win a Nobel Prize (1913).', 'कवि जिन्होंने राष्ट्रगान लिखा। नोबेल पुरस्कार जीतने वाले पहले एशियाई (1913)।']),
    I('🌈', ['C. V. Raman', 'सी. वी. रमन'], ['A great scientist who discovered how light scatters. He won the Nobel Prize in Physics in 1930.', 'महान वैज्ञानिक जिन्होंने प्रकाश के बिखरने की खोज की। 1930 में भौतिकी का नोबेल पुरस्कार जीता।']),
    I('👩‍🚀', ['Kalpana Chawla', 'कल्पना चावला'], ['The first woman of Indian origin to go to space, in 1997.', '1997 में अंतरिक्ष जाने वाली भारतीय मूल की पहली महिला।']),
  ], [
    Q('🕊️', ['Who is the Father of the Nation?', 'राष्ट्रपिता कौन हैं?'], [['Mahatma Gandhi', 'महात्मा गांधी'], ['C. V. Raman', 'सी. वी. रमन'], ['Kalpana Chawla', 'कल्पना चावला']], 0),
    Q('🌹', ['Who was India’s first Prime Minister?', 'भारत के पहले प्रधानमंत्री कौन थे?'], [['Jawaharlal Nehru', 'जवाहरलाल नेहरू'], ['Rajendra Prasad', 'राजेंद्र प्रसाद'], ['Sardar Patel', 'सरदार पटेल']], 0),
    Q('🏛️', ['Who was India’s first President?', 'भारत के पहले राष्ट्रपति कौन थे?'], [['Dr. Rajendra Prasad', 'डॉ. राजेंद्र प्रसाद'], ['Mahatma Gandhi', 'महात्मा गांधी'], ['Rabindranath Tagore', 'रवींद्रनाथ टैगोर']], 0),
    Q('🚀', ['Who is called the “Missile Man of India”?', '“मिसाइल मैन” किसे कहा जाता है?'], [['A. P. J. Abdul Kalam', 'ए. पी. जे. अब्दुल कलाम'], ['Bhagat Singh', 'भगत सिंह'], ['Nehru', 'नेहरू']], 0),
    Q('🤝', ['Who is the “Iron Man of India”?', '“लौह पुरुष” कौन हैं?'], [['Sardar Patel', 'सरदार पटेल'], ['Netaji Bose', 'नेताजी बोस'], ['C. V. Raman', 'सी. वी. रमन']], 0),
    Q('📚', ['Who was India’s first woman teacher?', 'भारत की पहली महिला शिक्षिका कौन थीं?'], [['Savitribai Phule', 'सावित्रीबाई फुले'], ['Rani Lakshmibai', 'रानी लक्ष्मीबाई'], ['Kalpana Chawla', 'कल्पना चावला']], 0),
  ], { count: 6 });
  // ---- Space
  FACTS('gk-space', 'gk', ALL, ['Space and India in space', 'अंतरिक्ष और अंतरिक्ष में भारत'], '🚀', [
    I('dia:solar', ['Our Solar System', 'हमारा सौरमंडल'], ['The Sun is a star. Eight planets go around it: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.', 'सूरज एक तारा है। आठ ग्रह इसके चारों ओर घूमते हैं: बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण और वरुण।']),
    I('🪐', ['Biggest and closest', 'सबसे बड़ा और सबसे पास'], ['Jupiter is the biggest planet. Mercury is closest to the Sun. Saturn has beautiful rings.', 'बृहस्पति सबसे बड़ा ग्रह है। बुध सूरज के सबसे पास है। शनि के सुंदर छल्ले हैं।']),
    I('🔴', ['The Red Planet', 'लाल ग्रह'], ['Mars looks red. India’s Mangalyaan reached Mars on its very first try in 2014!', 'मंगल लाल दिखता है। भारत का मंगलयान 2014 में पहली ही कोशिश में मंगल तक पहुँच गया!']),
    I('🌙', ['Our Moon', 'हमारा चाँद'], ['The Moon goes around the Earth. In 2023, India’s Chandrayaan-3 landed near the Moon’s south pole – the first country ever to do so!', 'चाँद पृथ्वी के चारों ओर घूमता है। 2023 में भारत का चंद्रयान-3 चाँद के दक्षिणी ध्रुव के पास उतरा – ऐसा करने वाला पहला देश!']),
    I('☀️', ['Studying the Sun', 'सूरज का अध्ययन'], ['India’s Aditya-L1 mission watches the Sun from far out in space.', 'भारत का आदित्य-L1 मिशन अंतरिक्ष में दूर से सूरज पर नज़र रखता है।']),
    I('🧑‍🚀', ['Indians in space', 'अंतरिक्ष में भारतीय'], ['Rakesh Sharma was the first Indian in space (1984). In 2025, Shubhanshu Shukla became the first Indian to visit the International Space Station.', 'राकेश शर्मा अंतरिक्ष जाने वाले पहले भारतीय थे (1984)। 2025 में शुभांशु शुक्ला अंतरराष्ट्रीय अंतरिक्ष स्टेशन जाने वाले पहले भारतीय बने।']),
    I('🛰️', ['ISRO', 'इसरो'], ['The Indian Space Research Organisation builds and launches our rockets and satellites. Vikram Sarabhai is called the father of India’s space programme.', 'भारतीय अंतरिक्ष अनुसंधान संगठन हमारे रॉकेट और उपग्रह बनाता और छोड़ता है। विक्रम साराभाई को भारत के अंतरिक्ष कार्यक्रम का जनक कहा जाता है।']),
  ], [
    Q('☀️', ['The Sun is a…', 'सूरज एक…'], [['Star', 'तारा है'], ['Planet', 'ग्रह है'], ['Moon', 'चाँद है']], 0),
    Q('🪐', ['How many planets go around the Sun?', 'सूरज के चारों ओर कितने ग्रह घूमते हैं?'], [['8', '8'], ['5', '5'], ['12', '12']], 0),
    Q('🪐', ['Which is the biggest planet?', 'सबसे बड़ा ग्रह कौन सा है?'], [['Jupiter', 'बृहस्पति'], ['Earth', 'पृथ्वी'], ['Mars', 'मंगल']], 0),
    Q('🌙', ['Which Indian mission landed near the Moon’s south pole?', 'कौन सा भारतीय मिशन चाँद के दक्षिणी ध्रुव के पास उतरा?'], [['Chandrayaan-3', 'चंद्रयान-3'], ['Mangalyaan', 'मंगलयान'], ['Aditya-L1', 'आदित्य-L1']], 0),
    Q('🧑‍🚀', ['Who was the first Indian in space?', 'अंतरिक्ष जाने वाले पहले भारतीय कौन थे?'], [['Rakesh Sharma', 'राकेश शर्मा'], ['C. V. Raman', 'सी. वी. रमन'], ['Sardar Patel', 'सरदार पटेल']], 0),
    Q('🔴', ['Which planet is called the Red Planet?', 'किस ग्रह को लाल ग्रह कहते हैं?'], [['Mars', 'मंगल'], ['Venus', 'शुक्र'], ['Neptune', 'वरुण']], 0),
  ], { count: 6 });
  // ---- Our Earth
  FACTS('gk-earth', 'gk', ALL, ['Our Earth: continents & oceans', 'हमारी पृथ्वी: महाद्वीप और महासागर'], '🌍', [
    I('dia:continents', ['7 continents, 5 oceans', '7 महाद्वीप, 5 महासागर'], ['The land on Earth is divided into 7 continents. The water is in 5 big oceans.', 'पृथ्वी की ज़मीन 7 महाद्वीपों में बँटी है। पानी 5 बड़े महासागरों में है।']),
    I('🌏', ['Asia', 'एशिया'], ['Asia is the biggest continent. India is in Asia!', 'एशिया सबसे बड़ा महाद्वीप है। भारत एशिया में है!']),
    I('🦘', ['Australia', 'ऑस्ट्रेलिया'], ['Australia is the smallest continent. Kangaroos live there.', 'ऑस्ट्रेलिया सबसे छोटा महाद्वीप है। वहाँ कंगारू रहते हैं।']),
    I('🐧', ['Antarctica', 'अंटार्कटिका'], ['Antarctica is the coldest place, covered in ice. Penguins live there.', 'अंटार्कटिका सबसे ठंडी जगह है, बर्फ़ से ढकी। वहाँ पेंगुइन रहते हैं।']),
    I('🌊', ['The Pacific Ocean', 'प्रशांत महासागर'], ['The Pacific is the biggest and deepest ocean. The Indian Ocean is named after our country!', 'प्रशांत सबसे बड़ा और सबसे गहरा महासागर है। हिंद महासागर का नाम हमारे देश पर है!']),
    I('🏔️', ['Mount Everest', 'माउंट एवरेस्ट'], ['The highest mountain in the world. It is in the Himalayas.', 'दुनिया का सबसे ऊँचा पहाड़। यह हिमालय में है।']),
    I('💧', ['A blue planet', 'नीला ग्रह'], ['About three-fourths of the Earth is covered with water. That is why it looks blue from space.', 'पृथ्वी का लगभग तीन-चौथाई हिस्सा पानी से ढका है। इसीलिए अंतरिक्ष से यह नीली दिखती है।']),
    I('🔄', ['Day, night and the year', 'दिन, रात और साल'], ['The Earth spins once a day – that gives us day and night. It goes around the Sun once in about 365 days – one year.', 'पृथ्वी एक दिन में एक बार घूमती है – इससे दिन और रात होते हैं। यह लगभग 365 दिन में सूरज का एक चक्कर लगाती है – एक साल।']),
  ], [
    Q('🌏', ['How many continents are there?', 'कितने महाद्वीप हैं?'], [['7', '7'], ['5', '5'], ['10', '10']], 0),
    Q('🌊', ['How many oceans are there?', 'कितने महासागर हैं?'], [['5', '5'], ['7', '7'], ['2', '2']], 0),
    Q('🌏', ['Which is the biggest continent?', 'सबसे बड़ा महाद्वीप कौन सा है?'], [['Asia', 'एशिया'], ['Europe', 'यूरोप'], ['Australia', 'ऑस्ट्रेलिया']], 0),
    Q('🌊', ['Which is the biggest ocean?', 'सबसे बड़ा महासागर कौन सा है?'], [['Pacific', 'प्रशांत'], ['Indian', 'हिंद'], ['Arctic', 'आर्कटिक']], 0),
    Q('🏔️', ['The highest mountain in the world is…', 'दुनिया का सबसे ऊँचा पहाड़ है…'], [['Mount Everest', 'माउंट एवरेस्ट'], ['Mount Abu', 'माउंट आबू'], ['Vindhya', 'विंध्य']], 0),
    Q('🔄', ['How many days does Earth take to go around the Sun?', 'पृथ्वी सूरज का चक्कर कितने दिन में लगाती है?'], [['About 365', 'लगभग 365'], ['7', '7'], ['30', '30']], 0),
  ], { count: 6 });
  // ---- Helplines & safety
  FACTS('gk-helpline', 'gk', ALL, ['Emergency numbers', 'आपातकालीन नंबर'], '📞', [
    I('dia:helpline', ['Numbers that help', 'मदद करने वाले नंबर'], ['Remember these numbers. Call only in a real emergency – never for fun.', 'ये नंबर याद रखो। सिर्फ़ असली मुसीबत में फ़ोन करो – मज़ाक में कभी नहीं।']),
    I('🆘', ['112 – one number for all', '112 – सबके लिए एक नंबर'], ['112 is India’s single emergency number for police, fire and ambulance.', '112 भारत का एक आपातकालीन नंबर है – पुलिस, आग और एम्बुलेंस, सबके लिए।']),
    I('👮', ['100 – Police', '100 – पुलिस'], ['If someone is in danger or something is stolen, the police help.', 'अगर कोई खतरे में है या कुछ चोरी हुआ है, तो पुलिस मदद करती है।']),
    I('🚒', ['101 – Fire', '101 – दमकल'], ['If there is a fire, get out first, then call 101.', 'आग लगे तो पहले बाहर निकलो, फिर 101 पर फ़ोन करो।']),
    I('🚑', ['108 – Ambulance', '108 – एम्बुलेंस'], ['If someone is badly hurt or very sick, an ambulance takes them to hospital.', 'अगर कोई बहुत घायल या बीमार है, तो एम्बुलेंस अस्पताल ले जाती है।']),
    I('🧒', ['1098 – Child helpline', '1098 – बाल हेल्पलाइन'], ['If a child is hurt, lost or someone makes them feel unsafe, 1098 helps children – any time, day or night.', 'अगर कोई बच्चा घायल है, खो गया है या कोई उसे असुरक्षित महसूस कराता है, तो 1098 बच्चों की मदद करता है – दिन हो या रात।']),
    I('🏠', ['Know your details', 'अपनी जानकारी याद रखो'], ['Learn your full name, your parent’s phone number and your home address by heart. Tell them only to police or a trusted adult.', 'अपना पूरा नाम, माता-पिता का फ़ोन नंबर और घर का पता याद करो। ये सिर्फ़ पुलिस या भरोसेमंद बड़े को बताओ।']),
  ], [
    Q('🆘', ['Which number is for any emergency in India?', 'भारत में किसी भी आपातकाल के लिए कौन सा नंबर है?'], [['112', '112'], ['999', '999'], ['123', '123']], 0),
    Q('🚒', ['Which number for fire?', 'आग के लिए कौन सा नंबर?'], [['101', '101'], ['108', '108'], ['1098', '1098']], 0),
    Q('🚑', ['Which number for an ambulance?', 'एम्बुलेंस के लिए कौन सा नंबर?'], [['108', '108'], ['100', '100'], ['101', '101']], 0),
    Q('🧒', ['Which number is the child helpline?', 'बाल हेल्पलाइन का नंबर कौन सा है?'], [['1098', '1098'], ['112', '112'], ['101', '101']], 0),
    Q('😜', ['Can we call these numbers for fun?', 'क्या ये नंबर मज़ाक में मिला सकते हैं?'], [['No, only in a real emergency', 'नहीं, सिर्फ़ असली मुसीबत में'], ['Yes', 'हाँ'], ['Every day', 'रोज़']], 0),
  ]);
  // ---- Monuments (postcards)
  const PC = (emoji, h, x) => I(emoji, h, x);
  FACTS('gk-monuments', 'gk', ALL, ['Famous places of India', 'भारत की प्रसिद्ध जगहें'], '🏰', [
    PC('🤍', ['Taj Mahal – Agra', 'ताजमहल – आगरा'], ['A white marble wonder built by Emperor Shah Jahan in memory of his wife Mumtaz. It is one of the Seven Wonders of the World.', 'सम्राट शाहजहाँ ने अपनी पत्नी मुमताज़ की याद में सफ़ेद संगमरमर का यह अजूबा बनवाया। यह दुनिया के सात अजूबों में से एक है।']),
    PC('🇮🇳', ['Red Fort – Delhi', 'लाल किला – दिल्ली'], ['A huge red sandstone fort. The Prime Minister hoists the flag here every Independence Day.', 'लाल बलुआ पत्थर का विशाल किला। हर स्वतंत्रता दिवस पर प्रधानमंत्री यहाँ झंडा फहराते हैं।']),
    PC('📏', ['Qutub Minar – Delhi', 'कुतुब मीनार – दिल्ली'], ['A very tall tower made of bricks, more than 800 years old.', 'ईंटों से बनी बहुत ऊँची मीनार, 800 साल से भी पुरानी।']),
    PC('🌊', ['Gateway of India – Mumbai', 'गेटवे ऑफ़ इंडिया – मुंबई'], ['A grand arch standing by the sea in Mumbai.', 'मुंबई में समुद्र किनारे खड़ा एक भव्य द्वार।']),
    PC('4️⃣', ['Charminar – Hyderabad', 'चारमीनार – हैदराबाद'], ['“Char minar” means four towers. It stands in the heart of old Hyderabad.', '“चार मीनार” यानी चार मीनारें। यह पुराने हैदराबाद के बीच में है।']),
    PC('🍲', ['Golden Temple – Amritsar', 'स्वर्ण मंदिर – अमृतसर'], ['A golden gurdwara in a lake. Its langar (free kitchen) feeds thousands of people every day.', 'झील के बीच सुनहरा गुरुद्वारा। इसका लंगर हर दिन हज़ारों लोगों को मुफ़्त खाना खिलाता है।']),
    PC('🪟', ['Hawa Mahal – Jaipur', 'हवा महल – जयपुर'], ['The “Palace of Winds” has hundreds of small windows so cool air can flow through.', '“हवाओं का महल” – इसमें सैकड़ों छोटी खिड़कियाँ हैं ताकि ठंडी हवा आ सके।']),
    PC('☀️', ['Sun Temple – Konark', 'सूर्य मंदिर – कोणार्क'], ['A stone temple in Odisha shaped like the Sun God’s chariot, with 24 carved wheels.', 'ओडिशा में सूर्य देव के रथ के आकार का पत्थर का मंदिर, जिसमें 24 नक्काशीदार पहिए हैं।']),
    PC('🧍', ['Statue of Unity – Gujarat', 'स्टैच्यू ऑफ़ यूनिटी – गुजरात'], ['The tallest statue in the world (182 metres), of Sardar Vallabhbhai Patel.', 'दुनिया की सबसे ऊँची मूर्ति (182 मीटर), सरदार वल्लभभाई पटेल की।']),
    PC('🏛️', ['India Gate – New Delhi', 'इंडिया गेट – नई दिल्ली'], ['A tall arch built in memory of brave Indian soldiers.', 'बहादुर भारतीय सैनिकों की याद में बना ऊँचा द्वार।']),
  ], [
    Q('🤍', ['The Taj Mahal is in…', 'ताजमहल कहाँ है?'], [['Agra', 'आगरा'], ['Mumbai', 'मुंबई'], ['Jaipur', 'जयपुर']], 0),
    Q('🇮🇳', ['Where does the PM hoist the flag on 15 August?', '15 अगस्त को प्रधानमंत्री झंडा कहाँ फहराते हैं?'], [['Red Fort', 'लाल किला'], ['Charminar', 'चारमीनार'], ['Hawa Mahal', 'हवा महल']], 0),
    Q('🧍', ['The tallest statue in the world is…', 'दुनिया की सबसे ऊँची मूर्ति है…'], [['Statue of Unity', 'स्टैच्यू ऑफ़ यूनिटी'], ['India Gate', 'इंडिया गेट'], ['Qutub Minar', 'कुतुब मीनार']], 0),
    Q('🪟', ['Hawa Mahal is in…', 'हवा महल कहाँ है?'], [['Jaipur', 'जयपुर'], ['Delhi', 'दिल्ली'], ['Agra', 'आगरा']], 0),
    Q('🍲', ['Which place is famous for its free langar?', 'कौन सी जगह मुफ़्त लंगर के लिए प्रसिद्ध है?'], [['Golden Temple', 'स्वर्ण मंदिर'], ['Gateway of India', 'गेटवे ऑफ़ इंडिया'], ['Red Fort', 'लाल किला']], 0),
  ], { count: 5 });
  // ---- Festivals
  FACTS('gk-festivals', 'gk', ALL, ['Festivals of India', 'भारत के त्योहार'], '🪔', [
    I({ scene: { bg: 'night', actors: '🪔 🎆 🪔' } }, ['Diwali', 'दीवाली'], ['The festival of lights. We light diyas, share sweets and celebrate good winning over bad.', 'रोशनी का त्योहार। हम दीये जलाते हैं, मिठाई बाँटते हैं और बुराई पर अच्छाई की जीत मनाते हैं।']),
    I({ scene: { bg: 'meadow', actors: '🎨 🧒 💦' } }, ['Holi', 'होली'], ['The festival of colours that welcomes spring. Use safe colours and play gently!', 'रंगों का त्योहार जो बसंत का स्वागत करता है। सुरक्षित रंग लो और प्यार से खेलो!']),
    I({ scene: { bg: 'home', actors: '🌙 🍲 🤗' } }, ['Eid', 'ईद'], ['After a month of fasting, families pray, hug and share sweet seviyan with everyone.', 'एक महीने के रोज़ों के बाद परिवार नमाज़ पढ़ते हैं, गले मिलते हैं और सबके साथ मीठी सेवइयाँ बाँटते हैं।']),
    I({ scene: { bg: 'snow', actors: '🎄 🎁 ⭐' } }, ['Christmas', 'क्रिसमस'], ['On 25 December, we celebrate the birth of Jesus Christ with carols, stars and gifts.', '25 दिसंबर को हम ईसा मसीह के जन्म का उत्सव कैरल, तारों और उपहारों से मनाते हैं।']),
    I({ scene: { bg: 'palace', actors: '🙏 🍲 🧒' } }, ['Guru Nanak Jayanti', 'गुरु नानक जयंती'], ['The birthday of Guru Nanak Dev Ji, celebrated with prayers and langar for all.', 'गुरु नानक देव जी का जन्मदिन, प्रार्थना और सबके लिए लंगर के साथ मनाया जाता है।']),
    I({ scene: { bg: 'field', actors: '🍚 🐄 ☀️' } }, ['Pongal, Bihu, Baisakhi', 'पोंगल, बिहू, बैसाखी'], ['Harvest festivals of Tamil Nadu, Assam and Punjab – thanking the Sun, the soil and the farmers.', 'तमिलनाडु, असम और पंजाब के फ़सल के त्योहार – सूरज, धरती और किसानों का धन्यवाद।']),
    I({ scene: { bg: 'river', actors: '🛶 🌸 🐘' } }, ['Onam', 'ओणम'], ['Kerala’s harvest festival with flower rangolis (pookalam) and exciting boat races.', 'केरल का फ़सल त्योहार, फूलों की रंगोली (पूकलम) और रोमांचक नाव दौड़ के साथ।']),
    I({ scene: { bg: 'city', actors: '🥁 💃 🪔' } }, ['Navratri & Durga Puja', 'नवरात्रि और दुर्गा पूजा'], ['Nine nights of dance (garba) and prayer, and grand Durga Puja pandals in Bengal.', 'नौ रातों का नृत्य (गरबा) और पूजा, और बंगाल के भव्य दुर्गा पूजा पंडाल।']),
    I({ scene: { bg: 'home', actors: '👧 🪢 👦' } }, ['Raksha Bandhan', 'रक्षा बंधन'], ['Sisters tie a rakhi on their brothers’ wrists, and they promise to always care for each other.', 'बहनें भाइयों की कलाई पर राखी बाँधती हैं, और वे हमेशा एक-दूसरे का ख्याल रखने का वादा करते हैं।']),
    I({ scene: { bg: 'meadow', actors: '🧑‍🤝‍🧑 🇮🇳 💛' } }, ['Unity in diversity', 'अनेकता में एकता'], ['We celebrate each other’s festivals together. That is the beauty of India!', 'हम एक-दूसरे के त्योहार मिलकर मनाते हैं। यही भारत की सुंदरता है!']),
  ], [
    Q('🪔', ['Which is the festival of lights?', 'रोशनी का त्योहार कौन सा है?'], [['Diwali', 'दीवाली'], ['Holi', 'होली'], ['Onam', 'ओणम']], 0),
    Q('🎨', ['Which is the festival of colours?', 'रंगों का त्योहार कौन सा है?'], [['Holi', 'होली'], ['Christmas', 'क्रिसमस'], ['Pongal', 'पोंगल']], 0),
    Q('🎄', ['When is Christmas?', 'क्रिसमस कब है?'], [['25 December', '25 दिसंबर'], ['25 January', '25 जनवरी'], ['15 August', '15 अगस्त']], 0),
    Q('🛶', ['Which festival has boat races in Kerala?', 'केरल में किस त्योहार पर नाव दौड़ होती है?'], [['Onam', 'ओणम'], ['Bihu', 'बिहू'], ['Eid', 'ईद']], 0),
    Q('🌾', ['Pongal, Bihu and Baisakhi are…', 'पोंगल, बिहू और बैसाखी हैं…'], [['Harvest festivals', 'फ़सल के त्योहार'], ['Winter sports', 'सर्दियों के खेल'], ['School exams', 'स्कूल की परीक्षाएँ']], 0),
  ], { count: 5 });
  // ---- Amazing animals
  FACTS('gk-animals', 'gk', ALL, ['Amazing animal facts', 'जानवरों के अनोखे तथ्य'], '🐋', [
    I({ scene: { bg: 'sea', actors: '~🐋' } }, ['Biggest animal: Blue whale', 'सबसे बड़ा जानवर: नीली व्हेल'], ['The blue whale is the biggest animal that has ever lived – bigger than any dinosaur!', 'नीली व्हेल अब तक का सबसे बड़ा जानवर है – किसी भी डायनासोर से बड़ी!']),
    I({ scene: { bg: 'forest', actors: '+🐘 -🐘' } }, ['Biggest land animal: Elephant', 'ज़मीन का सबसे बड़ा जानवर: हाथी'], ['Elephants are the biggest animals on land. They never forget their friends!', 'हाथी ज़मीन के सबसे बड़े जानवर हैं। वे अपने दोस्तों को कभी नहीं भूलते!']),
    I({ scene: { bg: 'desert', actors: '🐆 💨' } }, ['Fastest on land: Cheetah', 'ज़मीन पर सबसे तेज़: चीता'], ['A cheetah can run as fast as a car on a highway. Cheetahs were brought back to India’s Kuno National Park in 2022.', 'चीता हाईवे पर कार जितना तेज़ दौड़ सकता है। 2022 में चीतों को भारत के कूनो राष्ट्रीय उद्यान में वापस लाया गया।']),
    I({ scene: { bg: 'desert', actors: '+🦒 🌳' } }, ['Tallest: Giraffe', 'सबसे लंबा: जिराफ़'], ['The giraffe is the tallest animal. Its long neck reaches the highest leaves.', 'जिराफ़ सबसे लंबा जानवर है। उसकी लंबी गर्दन सबसे ऊँचे पत्तों तक पहुँचती है।']),
    I({ scene: { bg: 'desert', actors: '+🐦 🥚' } }, ['Biggest bird: Ostrich', 'सबसे बड़ा पक्षी: शुतुरमुर्ग'], ['The ostrich is the biggest bird. It cannot fly, but it runs very fast!', 'शुतुरमुर्ग सबसे बड़ा पक्षी है। वह उड़ नहीं सकता, पर बहुत तेज़ दौड़ता है!']),
    I({ scene: { bg: 'forest', actors: '🦁 🦁' } }, ['Asiatic lions of Gir', 'गिर के एशियाई शेर'], ['Asiatic lions live in the wild only in the Gir forest of Gujarat.', 'एशियाई शेर जंगल में सिर्फ़ गुजरात के गिर वन में रहते हैं।']),
    I({ scene: { bg: 'field', actors: '🦏 🌾' } }, ['One-horned rhino', 'एक सींग वाला गैंडा'], ['Kaziranga National Park in Assam is famous for the one-horned rhinoceros.', 'असम का काज़ीरंगा राष्ट्रीय उद्यान एक सींग वाले गैंडे के लिए प्रसिद्ध है।']),
    I({ scene: { bg: 'river', actors: '🐅 ~🐊' } }, ['Tigers of the Sundarbans', 'सुंदरबन के बाघ'], ['In the Sundarbans mangrove forest of West Bengal, Royal Bengal tigers can even swim!', 'पश्चिम बंगाल के सुंदरबन मैंग्रोव वन में रॉयल बंगाल टाइगर तैर भी सकते हैं!']),
  ], [
    Q('🐋', ['The biggest animal ever is the…', 'अब तक का सबसे बड़ा जानवर…'], [['Blue whale', 'नीली व्हेल'], ['Elephant', 'हाथी'], ['Lion', 'शेर']], 0),
    Q('🐆', ['The fastest land animal is the…', 'ज़मीन पर सबसे तेज़ जानवर…'], [['Cheetah', 'चीता'], ['Tortoise', 'कछुआ'], ['Cow', 'गाय']], 0),
    Q('🦒', ['The tallest animal is the…', 'सबसे लंबा जानवर…'], [['Giraffe', 'जिराफ़'], ['Camel', 'ऊँट'], ['Horse', 'घोड़ा']], 0),
    Q('🦁', ['Where do Asiatic lions live in the wild?', 'एशियाई शेर जंगल में कहाँ रहते हैं?'], [['Gir forest, Gujarat', 'गिर वन, गुजरात'], ['Kerala', 'केरल'], ['Ladakh', 'लद्दाख']], 0),
    Q('🦏', ['Kaziranga is famous for…', 'काज़ीरंगा किसके लिए प्रसिद्ध है?'], [['One-horned rhino', 'एक सींग वाला गैंडा'], ['Penguins', 'पेंगुइन'], ['Kangaroos', 'कंगारू']], 0),
  ], { count: 5 });
  // ---- India's gifts & inventions
  FACTS('gk-inventions', 'gk', BIG, ['Great ideas & inventions', 'महान खोजें और आविष्कार'], '💡', [
    I('0️⃣', ['Zero', 'शून्य'], ['Indian mathematicians gave the world the zero and the place-value number system we use every day.', 'भारतीय गणितज्ञों ने दुनिया को शून्य और वह दशमलव प्रणाली दी जो हम रोज़ इस्तेमाल करते हैं।']),
    I('♟️', ['Chess', 'शतरंज'], ['Chess began in India as “chaturanga” long ago.', 'शतरंज बहुत पहले भारत में “चतुरंग” के रूप में शुरू हुआ।']),
    I('🎲', ['Snakes and ladders, Ludo', 'साँप-सीढ़ी, लूडो'], ['Snakes and ladders (moksha patam) and ludo (pachisi) were first played in India.', 'साँप-सीढ़ी (मोक्षपट) और लूडो (पच्चीसी) पहले भारत में खेले गए।']),
    I('🧘', ['Yoga', 'योग'], ['Yoga keeps body and mind healthy. Now it is done all over the world.', 'योग शरीर और मन को स्वस्थ रखता है। अब यह पूरी दुनिया में किया जाता है।']),
    I('🌱', ['Plants can feel!', 'पौधे महसूस करते हैं!'], ['Scientist Jagadish Chandra Bose showed that plants respond to the world around them.', 'वैज्ञानिक जगदीश चंद्र बसु ने दिखाया कि पौधे अपने आसपास की चीज़ों पर प्रतिक्रिया देते हैं।']),
    I('📞', ['Telephone', 'टेलीफ़ोन'], ['Alexander Graham Bell invented the telephone in 1876.', 'अलेक्ज़ेंडर ग्राहम बेल ने 1876 में टेलीफ़ोन का आविष्कार किया।']),
    I('💡', ['Light bulb', 'बिजली का बल्ब'], ['Thomas Edison made the first long-lasting light bulb.', 'थॉमस एडिसन ने पहला लंबे समय तक चलने वाला बल्ब बनाया।']),
    I('✈️', ['Aeroplane', 'हवाई जहाज़'], ['The Wright brothers flew the first aeroplane in 1903.', 'राइट बंधुओं ने 1903 में पहला हवाई जहाज़ उड़ाया।']),
  ], [
    Q('0️⃣', ['Which number did India give the world?', 'भारत ने दुनिया को कौन सी संख्या दी?'], [['Zero', 'शून्य'], ['Hundred', 'सौ'], ['Seven', 'सात']], 0),
    Q('♟️', ['Which game began in India as chaturanga?', 'कौन सा खेल भारत में चतुरंग के रूप में शुरू हुआ?'], [['Chess', 'शतरंज'], ['Football', 'फ़ुटबॉल'], ['Tennis', 'टेनिस']], 0),
    Q('📞', ['Who invented the telephone?', 'टेलीफ़ोन का आविष्कार किसने किया?'], [['Alexander Graham Bell', 'अलेक्ज़ेंडर ग्राहम बेल'], ['Thomas Edison', 'थॉमस एडिसन'], ['C. V. Raman', 'सी. वी. रमन']], 0),
    Q('✈️', ['Who flew the first aeroplane?', 'पहला हवाई जहाज़ किसने उड़ाया?'], [['The Wright brothers', 'राइट बंधु'], ['Graham Bell', 'ग्राहम बेल'], ['Kalpana Chawla', 'कल्पना चावला']], 0),
    Q('🌱', ['Who showed that plants respond to the world?', 'किसने दिखाया कि पौधे प्रतिक्रिया देते हैं?'], [['Jagadish Chandra Bose', 'जगदीश चंद्र बसु'], ['Tagore', 'टैगोर'], ['Patel', 'पटेल']], 0),
  ], { count: 5 });
  // ---- Sports
  FACTS('gk-sports', 'gk', ALL, ['Sports and games', 'खेल-कूद'], '🏏', [
    I({ scene: { bg: 'meadow', actors: '🏏 🧒 👧' } }, ['Cricket', 'क्रिकेट'], ['Cricket is very popular in India. Each team has 11 players.', 'क्रिकेट भारत में बहुत लोकप्रिय है। हर टीम में 11 खिलाड़ी होते हैं।']),
    I({ scene: { bg: 'meadow', actors: '🏑 🧑' } }, ['Hockey', 'हॉकी'], ['India has won 8 Olympic gold medals in hockey. Major Dhyan Chand was called the “Wizard” of hockey.', 'भारत ने हॉकी में 8 ओलंपिक स्वर्ण पदक जीते हैं। मेजर ध्यानचंद को हॉकी का “जादूगर” कहा जाता था।']),
    I({ scene: { bg: 'meadow', actors: '🤼 🧒 👦' } }, ['Kabaddi', 'कबड्डी'], ['Kabaddi was born in India. You hold your breath and say “kabaddi, kabaddi”!', 'कबड्डी भारत में जन्मा खेल है। साँस रोककर “कबड्डी, कबड्डी” बोलते हैं!']),
    I('♟️', ['Chess', 'शतरंज'], ['A game of thinking. Viswanathan Anand was India’s first chess Grandmaster.', 'सोचने का खेल। विश्वनाथन आनंद भारत के पहले शतरंज ग्रैंडमास्टर थे।']),
    I('🥇', ['Olympic Games', 'ओलंपिक खेल'], ['The Olympics happen every 4 years. Its flag has 5 rings for 5 parts of the world joined in friendship.', 'ओलंपिक हर 4 साल में होते हैं। उनके झंडे में 5 छल्ले हैं – दोस्ती से जुड़े दुनिया के 5 हिस्से।']),
    I('🤝', ['Good sportsmanship', 'अच्छी खेल भावना'], ['Play fair, follow the rules, shake hands after the game – win or lose!', 'ईमानदारी से खेलो, नियम मानो, खेल के बाद हाथ मिलाओ – जीतो या हारो!']),
  ], [
    Q('🏏', ['How many players are in a cricket team?', 'क्रिकेट टीम में कितने खिलाड़ी होते हैं?'], [['11', '11'], ['5', '5'], ['20', '20']], 0),
    Q('🏑', ['Who was the “Wizard” of hockey?', 'हॉकी का “जादूगर” कौन था?'], [['Major Dhyan Chand', 'मेजर ध्यानचंद'], ['Viswanathan Anand', 'विश्वनाथन आनंद'], ['C. V. Raman', 'सी. वी. रमन']], 0),
    Q('🥇', ['How many rings are on the Olympic flag?', 'ओलंपिक झंडे में कितने छल्ले हैं?'], [['5', '5'], ['3', '3'], ['7', '7']], 0),
    Q('🤝', ['After a game, a good sport…', 'खेल के बाद अच्छा खिलाड़ी…'], [['Shakes hands, win or lose', 'हाथ मिलाता है, जीते या हारे'], ['Shouts at others', 'दूसरों पर चिल्लाता है'], ['Runs away', 'भाग जाता है']], 0),
  ], { count: 4 });
  // ---- Big mixed quiz: all GK questions, a fresh mix every time
  const gkAll = CUR.filter((a) => a.world === 'gk' && a.questions).flatMap((a) => a.questions);
  QUIZ('gk-mix', 'gk', ALL, ['General Awareness challenge', 'सामान्य ज्ञान चुनौती'], '🏆', gkAll, 10);
})();
