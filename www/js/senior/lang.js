/* Class 4–5 English and Hindi. Lesson text is original; the poems are classics in the public domain
   (C. Rossetti 1872, R. L. Stevenson 1885, H. W. Longfellow 1845, W. Wordsworth 1807, R. Tagore 1912, Kabir and Rahim – 15th–16th c.). */
(() => {
  'use strict';
  const { Q, I, FA, QZ, MT, SO, OR, PO, ST, SI, topic } = window.SRL;

  // =============================================================================== ENGLISH – CLASS 4
  topic('e4-nouns', '📛', ['Kinds of nouns', 'संज्ञा के प्रकार'], [
    FA(['Four kinds of nouns', 'संज्ञा के चार प्रकार'], '📛', [
      I('🏙️', ['Common noun', 'जातिवाचक संज्ञा'], ['A general name for any person, place or thing: city, girl, river, book.', 'किसी भी व्यक्ति, जगह या चीज़ का सामान्य नाम: शहर, लड़की, नदी, किताब।']),
      I('🗽', ['Proper noun', 'व्यक्तिवाचक संज्ञा'], ['A special name of one person, place or thing. It always begins with a capital letter: Delhi, Meera, the Ganga, Monday.', 'किसी एक ख़ास व्यक्ति, जगह या चीज़ का नाम। हमेशा बड़े अक्षर से शुरू: Delhi, Meera, the Ganga, Monday।']),
      I('🐝', ['Collective noun', 'समूहवाचक संज्ञा'], ['A name for a group: a swarm of bees, a flock of sheep, a team of players, a bunch of keys.', 'समूह का नाम: मधुमक्खियों का झुंड (swarm), भेड़ों का झुंड (flock), खिलाड़ियों की टीम, चाबियों का गुच्छा।']),
      I('💛', ['Abstract noun', 'भाववाचक संज्ञा'], ['A name for something we feel or think but cannot touch: kindness, honesty, joy, courage, friendship.', 'ऐसी चीज़ का नाम जिसे हम महसूस करते हैं पर छू नहीं सकते: दया, ईमानदारी, ख़ुशी, साहस, दोस्ती।']),
    ], [
      Q('🐝', 'A ___ of bees', 'swarm', ['herd', 'pack'], ['Bees fly together in a swarm.', 'मधुमक्खियाँ झुंड (swarm) में उड़ती हैं।']),
      Q('🐄', 'A ___ of cows', 'herd', ['flock', 'swarm']), Q('🐑', 'A ___ of sheep', 'flock', ['bunch', 'pride']),
      Q('🦁', 'A ___ of lions', 'pride', ['herd', 'school']), Q('🐟', 'A ___ of fish', 'school', ['flock', 'army']),
      Q('🔑', 'A ___ of keys', 'bunch', ['team', 'herd']), Q('🐜', 'An ___ of ants', 'army', ['herd', 'bunch']),
      Q('💛', ['Which is an ABSTRACT noun?', 'भाववाचक संज्ञा कौन सी है?'], 'honesty', ['table', 'Mumbai'], ['Honesty is a quality – you cannot touch it.', 'ईमानदारी एक गुण है – उसे छू नहीं सकते।']),
      Q('🗺️', ['Which is a PROPER noun?', 'व्यक्तिवाचक संज्ञा कौन सी है?'], 'Himalayas', ['mountain', 'river'], ['Himalayas is the name of particular mountains, so it starts with a capital H.', 'Himalayas ख़ास पहाड़ों का नाम है, इसलिए बड़ा H।']),
    ]),
    SO(['Common, proper or abstract?', 'जातिवाचक, व्यक्तिवाचक या भाववाचक?'], [['c', '🏙️', 'Common', 'जातिवाचक'], ['p', '🗽', 'Proper', 'व्यक्तिवाचक'], ['a', '💛', 'Abstract', 'भाववाचक']], [
      ['🐕', 'c', 'dog', 'dog'], ['🏫', 'c', 'school', 'school'], ['🌊', 'p', 'Arabian Sea', 'Arabian Sea'], ['👧', 'p', 'Ananya', 'Ananya'], ['📅', 'p', 'Friday', 'Friday'],
      ['😊', 'a', 'happiness', 'happiness'], ['🦁', 'a', 'courage', 'courage'], ['🤝', 'a', 'friendship', 'friendship'], ['🚂', 'c', 'train', 'train'], ['🏔️', 'p', 'Mount Everest', 'Mount Everest']]),
  ]);
  topic('e4-tenses', '⏳', ['Past, present and future', 'भूत, वर्तमान और भविष्य'], [
    FA(['Tenses tell WHEN', 'काल बताता है कब'], '⏳', [
      I('⬅️', ['Past tense', 'भूतकाल'], ['Already happened. Yesterday I played. She wrote a letter. We went to Agra.', 'जो हो चुका। Yesterday I played. She wrote a letter.']),
      I('⏺️', ['Present tense', 'वर्तमान काल'], ['Happens now or every day. I play every evening. She writes neatly. The Sun rises in the east.', 'अभी या रोज़ होता है। I play every evening. The Sun rises in the east.']),
      I('➡️', ['Future tense', 'भविष्य काल'], ['Will happen later. Tomorrow I will play. She will write. We shall visit Grandma.', 'आगे होगा। Tomorrow I will play. We shall visit Grandma.']),
      I('🔁', ['Tricky past forms', 'मुश्किल भूतकाल रूप'], ['Some verbs change fully: go → went, eat → ate, see → saw, buy → bought, teach → taught, catch → caught.', 'कुछ क्रियाएँ पूरी बदल जाती हैं: go → went, eat → ate, see → saw, buy → bought, teach → taught।']),
    ], [
      Q('📅', 'Yesterday we ___ a kite.', 'flew', ['fly', 'will fly']), Q('🌅', 'The Sun ___ in the east.', 'rises', ['rose', 'will rise'], ['A fact that is always true uses the present tense.', 'हमेशा सच बात वर्तमान काल में।']),
      Q('🎂', 'Next week I ___ ten years old.', 'will be', ['was', 'am']), Q('📖', 'Last night Papa ___ us a story.', 'told', ['tells', 'tell']),
      Q('🛒', 'Mummy ___ vegetables every Sunday.', 'buys', ['bought', 'buyed'], ['"Every Sunday" is a habit → present tense.', '"हर रविवार" आदत है → वर्तमान काल।']),
      Q('🍎', 'Past tense of "eat":', 'ate', ['eated', 'eaten']), Q('🧑‍🏫', 'Past tense of "teach":', 'taught', ['teached', 'teaches']),
      Q('⚽', 'Past tense of "catch":', 'caught', ['catched', 'catch']), Q('🚌', 'Tomorrow the bus ___ at 7 o’clock.', 'will come', ['came', 'comes yesterday']),
    ], { count: 6 }),
  ]);
  topic('e4-adjectives', '📏', ['Describing words and comparing', 'विशेषण और तुलना'], [
    FA(['Degrees of comparison', 'तुलना की अवस्थाएँ'], '📏', [
      I('🌳', ['Positive', 'मूल अवस्था'], ['Describes one thing: The banyan tree is tall.', 'एक चीज़ बताता है: The banyan tree is tall.']),
      I('🌲', ['Comparative (two things)', 'उत्तरावस्था (दो में)'], ['Add -er and use "than": The palm tree is taller than the banyan tree.', '-er लगाओ और "than": The palm is taller than the banyan.']),
      I('🗼', ['Superlative (three or more)', 'उत्तमावस्था (तीन या ज़्यादा)'], ['Add -est and use "the": The tower is the tallest of all.', '-est लगाओ और "the": The tower is the tallest of all.']),
      I('⭐', ['Special words', 'ख़ास शब्द'], ['good → better → best; bad → worse → worst; many → more → most; beautiful → more beautiful → most beautiful.', 'good → better → best; bad → worse → worst; beautiful → more beautiful → most beautiful।']),
    ], [
      Q('🐘', 'An elephant is ___ than a horse.', 'bigger', ['big', 'biggest']), Q('🏔️', 'Everest is the ___ mountain in the world.', 'highest', ['higher', 'high']),
      Q('📚', 'Your handwriting is ___ than mine.', 'better', ['gooder', 'best']), Q('🌹', 'This is the ___ flower in the garden.', 'most beautiful', ['beautifullest', 'more beautiful']),
      Q('🥵', 'Today is ___ than yesterday.', 'hotter', ['hoter', 'hottest'], ['Short words ending in one vowel + consonant double the last letter: hot → hotter.', 'छोटे शब्दों में आख़िरी अक्षर दोहरा: hot → hotter।']),
      Q('😷', 'My cold is ___ today than yesterday.', 'worse', ['badder', 'worst']), Q('🐢', 'The tortoise is the ___ of all the racers.', 'slowest', ['slower', 'slow']),
    ]),
  ]);
  topic('e4-sentences', '❗', ['Kinds of sentences and punctuation', 'वाक्य के प्रकार और विराम चिह्न'], [
    SO(['Which kind of sentence?', 'कौन सा वाक्य?'], [['s', '.', 'Statement', 'कथन'], ['q', '?', 'Question', 'प्रश्न'], ['e', '!', 'Exclamation', 'विस्मय'], ['c', '👉', 'Command / request', 'आदेश / निवेदन']], [
      ['🏫', 's', 'Our school opens at eight.', 'Our school opens at eight.'], ['❓', 'q', 'Where is my pencil box?', 'Where is my pencil box?'], ['🎉', 'e', 'What a lovely surprise!', 'What a lovely surprise!'],
      ['🚪', 'c', 'Please close the door.', 'Please close the door.'], ['🌧️', 's', 'It rained all night.', 'It rained all night.'], ['🤔', 'q', 'Did you finish your homework?', 'Did you finish your homework?'],
      ['😮', 'e', 'Hurray, we won!', 'Hurray, we won!'], ['🧹', 'c', 'Keep your room clean.', 'Keep your room clean.']]),
    QZ(['Punctuation check', 'विराम चिह्न जाँचो'], [
      Q('✍️', ['Which sentence is written correctly?', 'कौन सा वाक्य सही लिखा है?'], 'Rohan and I went to Jaipur.', ['rohan and i went to jaipur.', 'Rohan and I went to Jaipur?']),
      Q('🛒', ['Correct the list:', 'सूची सही करो:'], 'I bought apples, bananas and grapes.', ['I bought apples bananas and grapes.', 'I bought, apples bananas, and grapes']),
      Q('🙋', ['Which is a correct question?', 'कौन सा प्रश्न सही है?'], 'How old are you?', ['How old are you.', 'how old are you?']),
      Q('📛', ['Which needs a capital letter?', 'किसमें बड़ा अक्षर चाहिए?'], 'india', ['tree', 'chair'], ['Names of countries are proper nouns: India.', 'देश के नाम व्यक्तिवाचक संज्ञा हैं: India।']),
      Q('🐕', ['Which is correct?', 'कौन सा सही है?'], 'The dog wagged its tail.', ['The dog wagged it’s tail.', 'The dog wagged its’ tail.'], ['"its" = belongs to it. "it’s" = it is.', '"its" = उसका। "it’s" = it is।']),
    ]),
  ]);
  topic('e4-words', '🧩', ['Word building: prefixes, suffixes, opposites', 'शब्द रचना: उपसर्ग, प्रत्यय, विलोम'], [
    MT(['Make the opposite with a prefix', 'उपसर्ग लगाकर विलोम बनाओ'], [['happy', 'unhappy'], ['kind', 'unkind'], ['honest', 'dishonest'], ['agree', 'disagree'], ['possible', 'impossible'], ['polite', 'impolite'], ['correct', 'incorrect'], ['legal', 'illegal']]),
    QZ(['Suffix power', 'प्रत्यय की ताकत'], [
      Q('😊', ['Full of joy =', 'ख़ुशी से भरा ='], 'joyful', ['joyless', 'enjoy']), Q('🦁', ['Without fear =', 'बिना डर के ='], 'fearless', ['fearful', 'feared']),
      Q('🎨', ['A person who paints =', 'चित्र बनाने वाला ='], 'painter', ['painting', 'painty']), Q('👍', ['Can be used =', 'जिसे इस्तेमाल किया जा सके ='], 'usable', ['useless', 'user']),
      Q('🔁', ['Do again: re + write =', 'फिर से: re + write ='], 'rewrite', ['unwrite', 'writer']), Q('🤝', ['The state of being kind =', 'दयालु होने का भाव ='], 'kindness', ['kindly', 'unkind']),
      Q('🌍', ['A word with a prefix that means "before":', '"पहले" वाला उपसर्ग वाला शब्द:'], 'preview', ['review', 'viewer']),
    ]),
  ]);
  topic('e4-story', '👛', ['Reading: The Lost Purse', 'पठन: खोया हुआ बटुआ'], [
    ST(['The Lost Purse', 'खोया हुआ बटुआ'], '👛', [
      ['market', '👦 👛 🧺', 'On a busy Saturday, Kabir went to the vegetable market with a cloth bag. Near the tomato stall, something brown caught his eye – a fat leather purse lying in the dust.', 'एक व्यस्त शनिवार को कबीर कपड़े का थैला लेकर सब्ज़ी मंडी गया। टमाटर की दुकान के पास उसकी नज़र धूल में पड़े एक भूरे, मोटे चमड़े के बटुए पर पड़ी।'],
      ['market', '👦 🤔 👛', 'He opened it carefully. Inside were many notes, a train ticket to Lucknow and a small photo of an old man with his grandchildren. Kabir’s heart beat fast.', 'उसने उसे ध्यान से खोला। अंदर बहुत सारे नोट, लखनऊ का रेल टिकट और एक बूढ़े आदमी की अपने नाती-पोतों के साथ छोटी-सी फ़ोटो थी। कबीर का दिल ज़ोर से धड़कने लगा।'],
      ['market', '👦 💭 🚲', 'For a moment he thought of the new cycle he wanted. Then he thought of the old man. “He must be so worried,” Kabir whispered. The money was not his to keep.', 'एक पल को उसे अपनी मनचाही नई साइकिल याद आई। फिर उसने बूढ़े आदमी के बारे में सोचा। “वह कितने परेशान होंगे,” कबीर ने धीरे से कहा। यह पैसा उसका नहीं था।'],
      ['market', '👦 👮 👛', 'Kabir walked straight to the police help desk at the market gate. The kind constable wrote down where and when he had found the purse.', 'कबीर सीधे मंडी के गेट पर पुलिस सहायता केंद्र गया। दयालु सिपाही ने लिख लिया कि बटुआ कहाँ और कब मिला।'],
      ['market', '👴 😟 👮', 'Ten minutes later, an old man hurried in, searching every pocket. “My purse! My ticket for tonight’s train is in it,” he said, almost in tears.', 'दस मिनट बाद एक बूढ़े आदमी हड़बड़ाते हुए आए, हर जेब टटोलते हुए। “मेरा बटुआ! आज रात की ट्रेन का टिकट उसी में है,” उन्होंने रोते-रोते कहा।'],
      ['market', '👴 😊 👦', 'The constable matched the photo and handed the purse back. The old man hugged Kabir. “Your honesty is worth more than all the money in the world,” he said.', 'सिपाही ने फ़ोटो मिलाकर बटुआ लौटा दिया। बूढ़े आदमी ने कबीर को गले लगाया। “तुम्हारी ईमानदारी दुनिया के सारे पैसों से ज़्यादा क़ीमती है,” उन्होंने कहा।'],
      ['home', '👦 👩 🏅', 'That evening the constable phoned Kabir’s mother. “Your son is a true citizen,” he said. Kabir did not get a cycle that day, but he felt ten feet tall.', 'उस शाम सिपाही ने कबीर की माँ को फ़ोन किया। “आपका बेटा सच्चा नागरिक है,” उन्होंने कहा। उस दिन कबीर को साइकिल नहीं मिली, पर उसे बहुत गर्व महसूस हुआ।'],
    ], ['What is not ours, we return. Honesty makes us strong and trusted.', 'जो हमारा नहीं, उसे लौटाते हैं। ईमानदारी हमें मज़बूत और भरोसेमंद बनाती है।'], [
      [['Where did Kabir find the purse?', 'कबीर को बटुआ कहाँ मिला?'], [['Near the tomato stall', 'टमाटर की दुकान के पास'], ['On the bus', 'बस में'], ['At school', 'स्कूल में']]],
      [['Why did Kabir go to the police help desk?', 'कबीर पुलिस सहायता केंद्र क्यों गया?'], [['To return the purse safely to its owner', 'बटुआ सही मालिक तक पहुँचाने'], ['To buy a cycle', 'साइकिल ख़रीदने'], ['To ask for directions', 'रास्ता पूछने']]],
      [['What does "worried" mean?', '"worried" का अर्थ?'], [['upset and anxious', 'परेशान, चिंतित'], ['very happy', 'बहुत ख़ुश'], ['very hungry', 'बहुत भूखा']]],
      [['Which word best describes Kabir?', 'कबीर के लिए सबसे सही शब्द?'], [['honest', 'ईमानदार'], ['careless', 'लापरवाह'], ['greedy', 'लालची']]],
    ]),
  ]);
  topic('e4-poem-wind', '🍃', ['Poem: Who Has Seen the Wind?', 'कविता: हवा को किसने देखा?'], [
    PO(['Who Has Seen the Wind?', 'हवा को किसने देखा?'], '🍃', ['Who has seen the wind?', 'Neither I nor you:', 'But when the leaves hang trembling,', 'The wind is passing through.', 'Who has seen the wind?', 'Neither you nor I:', 'But when the trees bow down their heads,', 'The wind is passing by.'],
      ['We cannot see the wind, but we know it is there by what it does – trembling leaves and bending trees. Many true things (like love and kindness) are known by their effects.', 'हवा दिखती नहीं, पर काँपते पत्तों और झुकते पेड़ों से पता चलता है कि वह है। प्यार और दया जैसी कई सच्ची चीज़ें भी अपने असर से पहचानी जाती हैं।'], 'Christina Rossetti (1872)'),
    QZ(['Understand the poem', 'कविता समझो'], [
      Q('🍃', ['How do we know the wind is passing?', 'हवा गुज़र रही है, यह कैसे पता चलता है?'], ['The leaves tremble', 'पत्ते काँपते हैं'], [['We can see its colour', 'उसका रंग दिखता है'], ['It sings a song', 'वह गाना गाती है']]),
      Q('🌳', ['"The trees bow down their heads" means…', '"पेड़ सिर झुकाते हैं" का अर्थ…'], ['the trees bend in the wind', 'पेड़ हवा से झुकते हैं'], [['the trees are sad', 'पेड़ उदास हैं'], ['the trees fall asleep', 'पेड़ सो जाते हैं']]),
      Q('🎵', ['Which word rhymes with "through"?', '"through" से तुक मिलाने वाला शब्द?'], 'you', ['wind', 'trees']),
      Q('🔍', ['"Trembling" means…', '"Trembling" का अर्थ…'], ['shaking a little', 'हल्का-हल्का काँपना'], [['growing fast', 'तेज़ी से बढ़ना'], ['falling down', 'गिरना']]),
    ]),
  ]);
  topic('e4-poem-shadow', '👤', ['Poem: My Shadow', 'कविता: मेरी परछाईं'], [
    PO(['My Shadow', 'मेरी परछाईं'], '👤', ['I have a little shadow that goes in and out with me,', 'And what can be the use of him is more than I can see.', 'He is very, very like me from the heels up to the head;', 'And I see him jump before me, when I jump into my bed.', 'The funniest thing about him is the way he likes to grow—', 'Not at all like proper children, which is always very slow;', 'For he sometimes shoots up taller like an india-rubber ball,', 'And he sometimes gets so little that there’s none of him at all.'],
      ['A child wonders about his shadow. It copies him, and it grows tall or tiny depending on where the light is – that is real science: shadows change with the position of the light.', 'एक बच्चा अपनी परछाईं पर हैरान है। वह उसकी नकल करती है और रोशनी की जगह के हिसाब से लंबी या छोटी हो जाती है – यही विज्ञान है: रोशनी की दिशा से परछाईं बदलती है।'], 'Robert Louis Stevenson (1885)'),
    FA(['The science of shadows', 'परछाईं का विज्ञान'], '🔦', [
      I('🔦', ['How a shadow forms', 'परछाईं कैसे बनती है'], ['Light travels in straight lines. When your body blocks it, a dark shape – a shadow – forms on the other side.', 'रोशनी सीधी रेखा में चलती है। जब तुम्हारा शरीर उसे रोकता है, दूसरी तरफ़ काली आकृति – परछाईं – बनती है।']),
      I('🌅', ['Long and short shadows', 'लंबी और छोटी परछाईं'], ['Morning and evening Sun is low, so shadows are long. At noon the Sun is high and shadows are short.', 'सुबह-शाम सूरज नीचा होता है, तो परछाईं लंबी। दोपहर में सूरज ऊपर, तो परछाईं छोटी।']),
    ], [Q('☀️', ['When is your shadow shortest?', 'परछाईं सबसे छोटी कब होती है?'], ['At noon', 'दोपहर में'], [['Early morning', 'सुबह-सुबह'], ['Evening', 'शाम को']]), Q('👤', ['A shadow forms because light…', 'परछाईं बनती है क्योंकि रोशनी…'], ['travels in straight lines', 'सीधी रेखा में चलती है'], [['bends around us', 'हमारे चारों ओर मुड़ती है'], ['is heavy', 'भारी होती है']])]),
  ]);
  topic('e4-letter', '✉️', ['Writing: an informal letter', 'लेखन: अनौपचारिक पत्र'], [
    OR(['Put the parts of a letter in order', 'पत्र के भाग क्रम से लगाओ'], [
      [['Tap the parts of a letter to a friend in order.', 'दोस्त को पत्र के भाग क्रम से दबाओ।'], [['🏠', 'Your address and date', 'अपना पता और तारीख़'], ['👋', 'Greeting: Dear Riya,', 'संबोधन: प्रिय रिया,'], ['📝', 'Body: your news and questions', 'मुख्य भाग: समाचार और सवाल'], ['💌', 'Closing: Your loving friend,', 'समापन: तुम्हारा प्यारा दोस्त,'], ['✍️', 'Your name', 'अपना नाम']], ['A letter has five parts. Keep the tone warm and friendly!', 'पत्र के पाँच भाग होते हैं। भाषा प्यारी और दोस्ताना रखो!']],
    ]),
    QZ(['Letter manners', 'पत्र के तौर-तरीके'], [
      Q('💌', ['Best way to begin a letter to Grandpa:', 'दादाजी को पत्र की सबसे अच्छी शुरुआत:'], 'Dear Dadaji,', ['Hey you,', 'To whom it may concern']), Q('🙏', ['Best closing for a letter to your teacher:', 'शिक्षक को पत्र का सबसे अच्छा समापन:'], 'Yours sincerely,', ['Bye bye!!!', 'Your best buddy']),
      Q('📅', ['Where is the date written?', 'तारीख़ कहाँ लिखते हैं?'], ['Below your address, at the top', 'ऊपर, पते के नीचे'], [['At the very end', 'बिल्कुल आख़िर में'], ['Nowhere', 'कहीं नहीं']]),
      Q('😊', ['A good letter to a friend…', 'दोस्त को अच्छा पत्र…'], ['asks how they are and shares news', 'हालचाल पूछता है और ख़बर बताता है'], [['only talks about yourself', 'सिर्फ़ अपने बारे में'], ['has no greeting', 'उसमें संबोधन नहीं होता']]),
    ]),
  ]);
  topic('e4-vocab', '📚', ['Word power: synonyms and antonyms', 'शब्द शक्ति: समानार्थी और विलोम'], [
    MT(['Match words with the same meaning', 'समान अर्थ वाले जोड़ो'], [['huge', 'enormous'], ['begin', 'start'], ['brave', 'courageous'], ['quick', 'rapid'], ['shout', 'yell'], ['tidy', 'neat'], ['ancient', 'very old'], ['assist', 'help']]),
    QZ(['Choose the opposite', 'विलोम चुनो'], [
      Q('🌞', 'ancient ×', 'modern', ['old', 'huge']), Q('🎁', 'generous ×', 'selfish', ['kind', 'giving']), Q('🔊', 'noisy ×', 'quiet', ['loud', 'busy']),
      Q('🏆', 'victory ×', 'defeat', ['win', 'prize']), Q('🧊', 'freeze ×', 'melt', ['cold', 'ice']), Q('📈', 'increase ×', 'decrease', ['grow', 'add']), Q('🙂', 'polite ×', 'rude', ['nice', 'gentle']),
    ]),
  ]);

  // =============================================================================== ENGLISH – CLASS 5
  topic('e5-tenses', '🕰️', ['Continuous and perfect tenses', 'अपूर्ण और पूर्ण काल'], [
    FA(['More tenses', 'और काल'], '🕰️', [
      I('🏃', ['Present continuous', 'वर्तमान अपूर्ण'], ['Happening right now: am/is/are + -ing. She is reading a book.', 'अभी हो रहा है: am/is/are + -ing। She is reading a book.']),
      I('🌧️', ['Past continuous', 'भूत अपूर्ण'], ['Was going on in the past: was/were + -ing. We were playing when it started to rain.', 'बीते समय में चल रहा था: was/were + -ing। We were playing when it started to rain.']),
      I('✅', ['Present perfect', 'वर्तमान पूर्ण'], ['Just finished, result now: has/have + past participle. I have finished my homework.', 'अभी-अभी पूरा हुआ: has/have + तीसरा रूप। I have finished my homework.']),
      I('📜', ['Past perfect', 'भूत पूर्ण'], ['Finished before another past action: had + past participle. The train had left before we reached.', 'किसी और बीते काम से पहले पूरा: had + तीसरा रूप। The train had left before we reached.']),
    ], [
      Q('📖', 'Look! The baby ___ .', 'is sleeping', ['sleeps', 'slept']), Q('⛈️', 'We ___ cricket when the storm came.', 'were playing', ['are playing', 'play']),
      Q('✅', 'I ___ my project. Here it is!', 'have finished', ['finish', 'was finishing']), Q('🚆', 'The train ___ before we reached the station.', 'had left', ['has left', 'leaves']),
      Q('🎨', 'She ___ three paintings this week.', 'has made', ['have made', 'had make']), Q('📞', 'What ___ you doing at 8 pm yesterday?', 'were', ['are', 'have']),
      Q('🍽️', 'They ___ already eaten when I called.', 'had', ['have', 'are']),
    ], { count: 6 }),
  ]);
  topic('e5-agreement', '🤝', ['Subject–verb agreement', 'कर्ता और क्रिया का मेल'], [
    QZ(['Make the verb agree', 'क्रिया को कर्ता से मिलाओ'], [
      Q('🐕', 'The dog ___ loudly.', 'barks', ['bark', 'are barking'], ['One dog (singular) → barks.', 'एक कुत्ता (एकवचन) → barks।']), Q('🐕', 'The dogs ___ loudly.', 'bark', ['barks', 'is barking']),
      Q('👫', 'Ravi and Sita ___ cousins.', 'are', ['is', 'was'], ['Two people joined by "and" → plural verb.', '"and" से जुड़े दो लोग → बहुवचन क्रिया।']),
      Q('📦', 'Each of the boxes ___ heavy.', 'is', ['are', 'were'], ['"Each" means one at a time → singular.', '"Each" यानी एक-एक → एकवचन।']),
      Q('👨‍👩‍👧', 'My family ___ very kind.', 'is', ['are being', 'were']), Q('📚', 'Neither the book nor the pens ___ on the desk.', 'are', ['is', 'was'], ['With neither/nor, the verb agrees with the nearer subject (pens).', 'neither/nor में पास वाले कर्ता (pens) से मेल।']),
      Q('🧒', 'Everybody ___ to win.', 'wants', ['want', 'are wanting']), Q('🍬', 'There ___ many sweets in the jar.', 'are', ['is', 'was']),
    ]),
  ]);
  topic('e5-joiners', '🔗', ['Prepositions and conjunctions', 'संबंधबोधक और योजक'], [
    QZ(['Fill the joining word', 'जोड़ने वाला शब्द भरो'], [
      Q('☔', 'Take an umbrella ___ it may rain.', 'because', ['but', 'or']), Q('🏃', 'He ran fast, ___ he missed the bus.', 'but', ['so', 'because']),
      Q('📚', 'Finish your homework ___ you go out.', 'before', ['after', 'although']), Q('😴', 'I was tired, ___ I went to bed early.', 'so', ['but', 'or']),
      Q('🌙', 'Although it was late, ___', 'she kept reading.', ['so she slept.', 'because tired.']),
      Q('🐈', 'The cat jumped ___ the wall.', 'over', ['since', 'during']), Q('📅', 'We have lived here ___ 2019.', 'since', ['for', 'from']),
      Q('⏳', 'I have waited ___ two hours.', 'for', ['since', 'at'], ['"for" + a length of time; "since" + a starting point.', '"for" + कितनी देर; "since" + कब से।']),
      Q('🌉', 'The boat went ___ the bridge.', 'under', ['among', 'between']),
    ]),
  ]);
  topic('e5-speech', '💬', ['Direct and reported speech', 'प्रत्यक्ष और अप्रत्यक्ष कथन'], [
    FA(['Reporting what people say', 'किसी की बात बताना'], '💬', [
      I('🗣️', ['Direct speech', 'प्रत्यक्ष कथन'], ['The exact words inside quotation marks: Meena said, "I am hungry."', 'बोले गए सही शब्द उद्धरण चिह्नों में: Meena said, "I am hungry."']),
      I('📰', ['Reported speech', 'अप्रत्यक्ष कथन'], ['We report it without quotes and shift the tense back: Meena said that she was hungry.', 'बिना उद्धरण के, काल पीछे करके: Meena said that she was hungry.']),
      I('🔄', ['What changes', 'क्या बदलता है'], ['am/is → was, will → would, I → he/she, today → that day, here → there.', 'am/is → was, will → would, I → he/she, today → that day।']),
    ], [
      Q('🗣️', 'Raj said, "I am tired." → Raj said that he ___ tired.', 'was', ['is', 'am']), Q('🎂', 'Ma said, "I will bake a cake." → Ma said that she ___ bake a cake.', 'would', ['will', 'shall']),
      Q('✍️', ['Which is punctuated correctly?', 'कौन सा सही विराम चिह्न वाला है?'], 'Tara asked, "Where is my bag?"', ['Tara asked "where is my bag."', 'Tara asked, where is my bag?']),
      Q('📍', 'He said, "I live here." → He said that he lived ___ .', 'there', ['here', 'now']),
    ]),
  ]);
  topic('e5-idioms', '🐘', ['Idioms and phrases', 'मुहावरे और वाक्यांश'], [
    MT(['Match the idiom to its meaning', 'मुहावरे को अर्थ से मिलाओ'], [['a piece of cake', 'very easy'], ['once in a blue moon', 'very rarely'], ['under the weather', 'feeling ill'], ['break the ice', 'start a friendly talk'], ['hit the books', 'study hard'], ['all ears', 'listening carefully'], ['lend a hand', 'help'], ['spill the beans', 'tell a secret']]),
    QZ(['Use the idiom', 'मुहावरे का प्रयोग'], [
      Q('📝', 'The test was so easy – it was ___ .', 'a piece of cake', ['under the weather', 'all ears']), Q('🤒', 'Arjun stayed home; he felt ___ .', 'under the weather', ['all ears', 'a piece of cake']),
      Q('🎤', 'Tell me the story – I am ___ !', 'all ears', ['hitting the books', 'once in a blue moon']), Q('🧹', 'Can you ___ with these heavy bags?', 'lend a hand', ['spill the beans', 'break the ice']),
      Q('🌙', 'We eat at that hotel only ___ .', 'once in a blue moon', ['a piece of cake', 'all ears']),
    ]),
  ]);
  topic('e5-determiners', '🔢', ['Articles and determiners', 'आर्टिकल और निर्धारक'], [
    QZ(['Choose the right word', 'सही शब्द चुनो'], [
      Q('🦉', 'I saw ___ owl in the tree.', 'an', ['a', 'the'], ['Use "an" before a vowel SOUND.', 'स्वर ध्वनि से पहले "an"।']), Q('🎓', 'She is ___ honest girl.', 'an', ['a', 'the'], ['"honest" begins with a vowel sound (the h is silent).', '"honest" में h नहीं बोला जाता, स्वर ध्वनि है।']),
      Q('🦄', 'He wore ___ uniform.', 'a', ['an', 'the'], ['"uniform" starts with a "yu" sound → a.', '"uniform" "यू" ध्वनि से शुरू → a।']), Q('🌍', '___ Earth goes round the Sun.', 'The', ['A', 'An']),
      Q('🥛', 'There isn’t ___ milk left.', 'much', ['many', 'a few'], ['"much" for things we cannot count; "many" for things we can count.', 'न गिनी जाने वाली चीज़ों के लिए much; गिनी जाने वाली के लिए many।']),
      Q('🍎', 'How ___ apples do you want?', 'many', ['much', 'little']), Q('🪙', 'I have ___ coins in my pocket.', 'a few', ['a little', 'much']),
      Q('🍯', 'Add ___ honey to the tea.', 'a little', ['a few', 'many']),
    ]),
  ]);
  topic('e5-story', '🔬', ['Reading: The Science Fair', 'पठन: विज्ञान मेला'], [
    ST(['The Science Fair', 'विज्ञान मेला'], '🔬', [
      ['school', '👧 👦 👧 🔬', 'Class 5 had a science fair. Zoya, Aman and Priti were a team. Their project: a water filter made from sand, gravel and charcoal.', 'कक्षा 5 में विज्ञान मेला था। ज़ोया, अमन और प्रीति एक टीम थे। उनका प्रोजेक्ट था: रेत, कंकड़ और कोयले से बना पानी का फ़िल्टर।'],
      ['school', '👦 😤 👧', 'Aman wanted to do everything himself. “My idea is the best,” he kept saying. Priti went quiet, and Zoya felt left out.', 'अमन सब कुछ ख़ुद करना चाहता था। “मेरा आइडिया सबसे अच्छा है,” वह बार-बार कहता। प्रीति चुप हो गई और ज़ोया को लगा कि उसे अलग कर दिया गया।'],
      ['school', '🫗 💧 😟', 'On the first test the filter failed. Muddy water rushed straight through. Aman’s face fell. He had put the sand at the bottom instead of the top.', 'पहली जाँच में फ़िल्टर फ़ेल हो गया। गंदा पानी सीधा निकल आया। अमन का चेहरा उतर गया। उसने रेत ऊपर की जगह नीचे डाल दी थी।'],
      ['school', '👧 💡 👦', 'Priti spoke softly. “In my village the well filter has fine sand on top, then gravel, then charcoal.” Aman listened – really listened – for the first time.', 'प्रीति ने धीरे से कहा, “मेरे गाँव के कुएँ के फ़िल्टर में ऊपर बारीक रेत, फिर कंकड़, फिर कोयला होता है।” अमन ने पहली बार सच में ध्यान से सुना।'],
      ['school', '👦 🙏 👧 👧', '“I am sorry,” said Aman. “I did not let you speak.” Together they rebuilt the filter. Zoya made a neat chart explaining each layer.', '“माफ़ करना,” अमन ने कहा, “मैंने तुम्हें बोलने नहीं दिया।” तीनों ने मिलकर फ़िल्टर फिर से बनाया। ज़ोया ने हर परत समझाने वाला सुंदर चार्ट बनाया।'],
      ['school', '🧑‍🏫 🏆 👧 👦 👧', 'This time clear water dripped out. The judge smiled. “Good science needs good teamwork,” she said, and gave them the first prize.', 'इस बार साफ़ पानी टपका। जज मुस्कुराईं। “अच्छे विज्ञान के लिए अच्छी टीम चाहिए,” उन्होंने कहा और पहला इनाम दिया।'],
    ], ['Listening to others and saying sorry make a team stronger.', 'दूसरों की सुनना और माफ़ी माँगना टीम को मज़बूत बनाता है।'], [
      [['Why did the first filter fail?', 'पहला फ़िल्टर क्यों फ़ेल हुआ?'], [['The layers were in the wrong order', 'परतें ग़लत क्रम में थीं'], ['There was no water', 'पानी नहीं था'], ['The judge broke it', 'जज ने तोड़ दिया']]],
      [['What did Aman learn?', 'अमन ने क्या सीखा?'], [['To listen to his team', 'टीम की बात सुनना'], ['To work alone', 'अकेले काम करना'], ['To hide mistakes', 'ग़लतियाँ छिपाना']]],
      [['"Rebuilt" means…', '"Rebuilt" का अर्थ…'], [['built again', 'फिर से बनाया'], ['broke', 'तोड़ा'], ['bought', 'ख़रीदा']]],
      [['Which layer goes on top in a sand filter?', 'रेत फ़िल्टर में सबसे ऊपर क्या?'], [['fine sand', 'बारीक रेत'], ['charcoal', 'कोयला'], ['big stones', 'बड़े पत्थर']]],
    ]),
  ]);
  topic('e5-poem-arrow', '🏹', ['Poem: The Arrow and the Song', 'कविता: तीर और गीत'], [
    PO(['The Arrow and the Song', 'तीर और गीत'], '🏹', ['I shot an arrow into the air,', 'It fell to earth, I knew not where;', 'For, so swiftly it flew, the sight', 'Could not follow it in its flight.', 'I breathed a song into the air,', 'It fell to earth, I knew not where;', 'For who has sight so keen and strong,', 'That it can follow the flight of song?', 'Long, long afterward, in an oak', 'I found the arrow, still unbroke;', 'And the song, from beginning to end,', 'I found again in the heart of a friend.'],
      ['The poet loses an arrow and a song. Years later he finds the arrow in a tree – and the song living in a friend’s heart. Kind words and songs we share stay with people for a long time.', 'कवि का तीर और गीत खो जाते हैं। सालों बाद तीर एक पेड़ में मिलता है – और गीत एक दोस्त के दिल में। जो प्यारे शब्द और गीत हम बाँटते हैं, वे लोगों के दिल में लंबे समय तक रहते हैं।'], 'Henry Wadsworth Longfellow (1845)'),
    QZ(['Understand the poem', 'कविता समझो'], [
      Q('🌳', ['Where did the poet find the arrow?', 'कवि को तीर कहाँ मिला?'], ['in an oak tree', 'बलूत के पेड़ में'], [['in a river', 'नदी में'], ['in his bag', 'अपने थैले में']]),
      Q('💛', ['Where did he find the song?', 'गीत कहाँ मिला?'], ['in the heart of a friend', 'एक दोस्त के दिल में'], [['in a book', 'किताब में'], ['on the radio', 'रेडियो पर']]),
      Q('🎵', ['"air" rhymes with…', '"air" से तुक मिलता है…'], 'where', ['earth', 'song']), Q('🔍', ['"swiftly" means…', '"swiftly" का अर्थ…'], ['very fast', 'बहुत तेज़ी से'], [['slowly', 'धीरे'], ['sadly', 'उदासी से']]),
    ]),
  ]);
  topic('e5-poem-daffodils', '🌼', ['Poem: Daffodils', 'कविता: डैफ़ोडिल'], [
    PO(['Daffodils (first verse)', 'डैफ़ोडिल (पहला पद)'], '🌼', ['I wandered lonely as a cloud', 'That floats on high o’er vales and hills,', 'When all at once I saw a crowd,', 'A host, of golden daffodils;', 'Beside the lake, beneath the trees,', 'Fluttering and dancing in the breeze.'],
      ['Walking alone, the poet suddenly sees thousands of golden flowers dancing by a lake. Nature can lift our mood and fill us with joy.', 'अकेले घूमते हुए कवि अचानक झील के पास हज़ारों सुनहरे फूलों को हवा में नाचते देखता है। प्रकृति हमारा मन ख़ुश कर देती है।'], 'William Wordsworth (1807)'),
    QZ(['Understand the poem', 'कविता समझो'], [
      Q('☁️', ['The poet compares himself to…', 'कवि ख़ुद की तुलना करता है…'], ['a cloud', 'एक बादल से'], [['a bird', 'एक पक्षी से'], ['a tree', 'एक पेड़ से']]), Q('🌼', ['"A host" of daffodils means…', '"A host" का अर्थ…'], ['a very large number', 'बहुत बड़ी संख्या'], [['one flower', 'एक फूल'], ['a gardener', 'माली']]),
      Q('🌬️', ['The flowers were dancing in the…', 'फूल किसमें नाच रहे थे?'], 'breeze', ['rain', 'snow']), Q('🎵', ['"cloud" rhymes with…', '"cloud" से तुक…'], 'crowd', ['hills', 'trees']),
    ]),
  ]);
  topic('e5-poem-tagore', '🕊️', ['Poem: Where the Mind is Without Fear', 'कविता: जहाँ मन भय से मुक्त हो'], [
    PO(['Where the Mind is Without Fear', 'जहाँ मन भय से मुक्त हो'], '🕊️', ['Where the mind is without fear and the head is held high;', 'Where knowledge is free;', 'Where the world has not been broken up into fragments by narrow domestic walls;', 'Where words come out from the depth of truth;', 'Where tireless striving stretches its arms towards perfection;', 'Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit;', 'Where the mind is led forward by thee into ever-widening thought and action—', 'Into that heaven of freedom, my Father, let my country awake.'],
      ['Gurudev Tagore prays for an India where people are fearless, learning is open to all, people are not divided, speak the truth, keep working hard and think clearly. It is a dream for every citizen to build.', 'गुरुदेव टैगोर ऐसे भारत की प्रार्थना करते हैं जहाँ लोग निडर हों, ज्ञान सबके लिए खुला हो, लोग बँटे न हों, सच बोलें, मेहनत करते रहें और साफ़ सोचें। यह हर नागरिक का सपना है।'], 'Rabindranath Tagore, Gitanjali (1912)', { level: 5 }),
    QZ(['Understand the poem', 'कविता समझो'], [
      Q('🧠', ['"The mind is without fear" means people are…', '"मन भय से मुक्त" यानी लोग…'], ['brave and free to think', 'निडर और सोचने में आज़ाद'], [['always angry', 'हमेशा ग़ुस्से में'], ['very rich', 'बहुत अमीर']]),
      Q('🧱', ['"Narrow domestic walls" are things that…', '"संकरी दीवारें" वे चीज़ें हैं जो…'], ['divide people', 'लोगों को बाँटती हैं'], [['build houses', 'घर बनाती हैं'], ['grow plants', 'पौधे उगाती हैं']]),
      Q('📚', ['"Knowledge is free" means…', '"ज्ञान आज़ाद है" यानी…'], ['everyone can learn', 'हर कोई सीख सकता है'], [['books cost nothing', 'किताबें मुफ़्त हैं'], ['nobody studies', 'कोई नहीं पढ़ता']]),
      Q('✍️', ['Who wrote this poem?', 'यह कविता किसने लिखी?'], 'Rabindranath Tagore', ['Mahatma Gandhi', 'Sarojini Naidu'], ['Tagore also wrote our National Anthem.', 'टैगोर ने हमारा राष्ट्रगान भी लिखा।']),
    ]),
  ]);
  topic('e5-writing', '📝', ['Writing: notice, message and paragraph', 'लेखन: सूचना, संदेश और अनुच्छेद'], [
    OR(['Build a good paragraph', 'अच्छा अनुच्छेद बनाओ'], [
      [['Put the sentences of a paragraph on "My School Library" in order.', '"मेरा पुस्तकालय" अनुच्छेद के वाक्य क्रम से लगाओ।'], [['📚', 'Our school library is my favourite place.', 'हमारा पुस्तकालय मेरी पसंदीदा जगह है।'], ['🗄️', 'It has hundreds of books on stories, science and sports.', 'इसमें कहानियों, विज्ञान और खेल की सैकड़ों किताबें हैं।'], ['🤫', 'We must keep silence and handle books gently.', 'हमें शांति रखनी चाहिए और किताबों को ध्यान से पकड़ना चाहिए।'], ['💛', 'Reading there makes me calm and curious.', 'वहाँ पढ़कर मैं शांत और जिज्ञासु महसूस करता हूँ।']], ['Topic sentence → details → rules → feeling. That is a strong paragraph!', 'मुख्य वाक्य → विवरण → नियम → भावना। यही अच्छा अनुच्छेद है!']],
      [['Put the parts of a school notice in order.', 'स्कूल सूचना के भाग क्रम से लगाओ।'], [['🏫', 'School name', 'स्कूल का नाम'], ['📢', 'NOTICE + date', 'सूचना + तारीख़'], ['🏷️', 'Heading: Art Competition', 'शीर्षक: कला प्रतियोगिता'], ['📝', 'Details: what, when, where, who', 'विवरण: क्या, कब, कहाँ, कौन'], ['✍️', 'Name and post of the writer', 'लिखने वाले का नाम और पद']]],
    ]),
    QZ(['Writing smart', 'समझदारी से लेखन'], [
      Q('📢', ['A notice must tell…', 'सूचना में ज़रूर हो…'], ['what, when, where and who', 'क्या, कब, कहाँ, कौन'], [['a long story', 'लंबी कहानी'], ['jokes', 'चुटकुले']]),
      Q('📱', ['A good phone message is…', 'अच्छा संदेश होता है…'], ['short and clear', 'छोटा और साफ़'], [['very long', 'बहुत लंबा'], ['in capitals only', 'सिर्फ़ बड़े अक्षरों में']]),
      Q('📧', ['Best subject line for an email to your teacher about leave:', 'छुट्टी के लिए शिक्षक को ईमेल का विषय:'], 'Leave application – 12 March', ['hiii', 'URGENT!!!!!']),
    ]),
  ]);
  topic('e5-vocab', '🗝️', ['Word power: one word for many', 'शब्द शक्ति: अनेक के लिए एक शब्द'], [
    QZ(['One word for many words', 'अनेक शब्दों के लिए एक शब्द'], [
      Q('🌍', ['A person who travels to unknown places to find new things', 'नई जगहें खोजने वाला'], 'explorer', ['explainer', 'exporter']), Q('🥕', ['One who eats only plants', 'केवल पौधे खाने वाला'], 'herbivore', ['carnivore', 'omnivore']),
      Q('📖', ['The story of a person’s life written by himself', 'अपनी लिखी जीवन कथा'], 'autobiography', ['biography', 'dictionary']), Q('👀', ['One who sees an event happen', 'घटना देखने वाला'], 'eyewitness', ['spectacle', 'visitor']),
      Q('🌙', ['Happening every year', 'हर साल होने वाला'], 'annual', ['daily', 'weekly']), Q('🔇', ['That cannot be heard', 'जो सुनाई न दे'], 'inaudible', ['invisible', 'incredible']),
      Q('🫶', ['A person who works without pay to help others', 'बिना पैसे दूसरों की मदद करने वाला'], 'volunteer', ['villain', 'vendor']),
    ]),
    MT(['Homophones: same sound, different meaning', 'समान ध्वनि, अलग अर्थ'], [['see', 'sea'], ['right', 'write'], ['knew', 'new'], ['flour', 'flower'], ['peace', 'piece'], ['week', 'weak']]),
  ]);

  // =============================================================================== HINDI – CLASS 4
  topic('h4-sangya', '📛', ['संज्ञा के भेद', 'संज्ञा के भेद'], [
    FA(['संज्ञा के तीन मुख्य भेद', 'संज्ञा के तीन मुख्य भेद'], '📛', [
      I('🗽', ['व्यक्तिवाचक संज्ञा', 'व्यक्तिवाचक संज्ञा'], ['किसी ख़ास व्यक्ति, स्थान या वस्तु का नाम – Proper noun। जैसे: गंगा, दिल्ली, ताजमहल, सचिन।', 'किसी ख़ास व्यक्ति, स्थान या वस्तु का नाम। जैसे: गंगा, दिल्ली, ताजमहल, सचिन।']),
      I('🐄', ['जातिवाचक संज्ञा', 'जातिवाचक संज्ञा'], ['पूरी जाति या वर्ग का नाम – Common noun। जैसे: नदी, शहर, गाय, लड़का, पेड़।', 'पूरी जाति या वर्ग का नाम। जैसे: नदी, शहर, गाय, लड़का, पेड़।']),
      I('💛', ['भाववाचक संज्ञा', 'भाववाचक संज्ञा'], ['गुण, भाव या दशा का नाम – Abstract noun। जैसे: मिठास, बचपन, ईमानदारी, प्रेम, थकान।', 'गुण, भाव या दशा का नाम। जैसे: मिठास, बचपन, ईमानदारी, प्रेम, थकान।']),
    ], [
      Q('🏞️', '"यमुना" कौन सी संज्ञा है?', 'व्यक्तिवाचक', ['जातिवाचक', 'भाववाचक'], 'यमुना एक ख़ास नदी का नाम है।'), Q('🌳', '"पेड़" कौन सी संज्ञा है?', 'जातिवाचक', ['व्यक्तिवाचक', 'भाववाचक']),
      Q('🍯', '"मिठास" कौन सी संज्ञा है?', 'भाववाचक', ['जातिवाचक', 'व्यक्तिवाचक'], 'मीठा → मिठास, यह एक गुण है।'), Q('👶', '"बच्चा" से भाववाचक संज्ञा:', 'बचपन', ['बच्चे', 'बचाव']),
      Q('🙂', '"अच्छा" से भाववाचक संज्ञा:', 'अच्छाई', ['अच्छे', 'अच्छी']), Q('🏔️', '"हिमालय" कौन सी संज्ञा है?', 'व्यक्तिवाचक', ['भाववाचक', 'जातिवाचक']),
      Q('😴', '"थकना" से भाववाचक संज्ञा:', 'थकान', ['थका', 'थकी']),
    ]),
  ]);
  topic('h4-lingvachan', '👫', ['लिंग और वचन', 'लिंग और वचन'], [
    MT(['लिंग बदलो (पुल्लिंग – स्त्रीलिंग)', 'लिंग बदलो (पुल्लिंग – स्त्रीलिंग)'], [['राजा', 'रानी'], ['शेर', 'शेरनी'], ['मोर', 'मोरनी'], ['अध्यापक', 'अध्यापिका'], ['धोबी', 'धोबिन'], ['भाई', 'बहन'], ['नायक', 'नायिका'], ['बेटा', 'बेटी']]),
    MT(['वचन बदलो (एकवचन – बहुवचन)', 'वचन बदलो (एकवचन – बहुवचन)'], [['कपड़ा', 'कपड़े'], ['लड़की', 'लड़कियाँ'], ['माला', 'मालाएँ'], ['चिड़िया', 'चिड़ियाँ'], ['पुस्तक', 'पुस्तकें'], ['नदी', 'नदियाँ'], ['बात', 'बातें'], ['घोड़ा', 'घोड़े']]),
  ]);
  topic('h4-vilom', '↔️', ['विलोम और पर्यायवाची', 'विलोम और पर्यायवाची'], [
    MT(['विलोम शब्द मिलाओ', 'विलोम शब्द मिलाओ'], [['आदर', 'अनादर'], ['सुख', 'दुख'], ['आशा', 'निराशा'], ['प्रश्न', 'उत्तर'], ['जीत', 'हार'], ['स्वस्थ', 'अस्वस्थ'], ['प्राचीन', 'नवीन'], ['सरल', 'कठिन']]),
    QZ(['पर्यायवाची चुनो', 'पर्यायवाची चुनो'], [
      Q('☀️', '"सूरज" का पर्यायवाची:', 'रवि', ['चंद्र', 'तारा']), Q('💧', '"पानी" का पर्यायवाची:', 'जल', ['अग्नि', 'पवन']), Q('🌊', '"समुद्र" का पर्यायवाची:', 'सागर', ['तालाब', 'झरना']),
      Q('🌙', '"चाँद" का पर्यायवाची:', 'चंद्रमा', ['सूर्य', 'आकाश']), Q('🏠', '"घर" का पर्यायवाची:', 'गृह', ['वन', 'नगर']), Q('🌳', '"पेड़" का पर्यायवाची:', 'वृक्ष', ['पुष्प', 'पत्ता']),
      Q('🔥', '"आग" का पर्यायवाची:', 'अग्नि', ['जल', 'धरती']), Q('👁️', '"आँख" का पर्यायवाची:', 'नयन', ['कान', 'मुख']),
    ]),
  ]);
  topic('h4-kaal', '⏳', ['क्रिया और काल', 'क्रिया और काल'], [
    FA(['काल के तीन भेद', 'काल के तीन भेद'], '⏳', [
      I('⬅️', ['भूतकाल', 'भूतकाल'], ['जो काम बीत गया। जैसे: राधा ने खाना खाया। हम कल मेले गए थे।', 'जो काम बीत गया। जैसे: राधा ने खाना खाया। हम कल मेले गए थे।']),
      I('⏺️', ['वर्तमान काल', 'वर्तमान काल'], ['जो काम अभी हो रहा है। जैसे: राधा खाना खा रही है। चिड़िया गाती है।', 'जो काम अभी हो रहा है। जैसे: राधा खाना खा रही है। चिड़िया गाती है।']),
      I('➡️', ['भविष्य काल', 'भविष्य काल'], ['जो काम आगे होगा। जैसे: राधा खाना खाएगी। कल बारिश होगी।', 'जो काम आगे होगा। जैसे: राधा खाना खाएगी। कल बारिश होगी।']),
    ], [
      Q('🍽️', '"मोहन पढ़ रहा है।" – कौन सा काल?', 'वर्तमान काल', ['भूतकाल', 'भविष्य काल']), Q('🏏', '"हमने मैच जीता।" – कौन सा काल?', 'भूतकाल', ['वर्तमान काल', 'भविष्य काल']),
      Q('✈️', '"मैं कल दिल्ली जाऊँगा।" – कौन सा काल?', 'भविष्य काल', ['भूतकाल', 'वर्तमान काल']), Q('🏃', 'क्रिया पहचानो: "बच्चे मैदान में दौड़ते हैं।"', 'दौड़ते हैं', ['बच्चे', 'मैदान']),
      Q('📝', 'सही वाक्य चुनो (भविष्य):', 'सीता गाना गाएगी।', ['सीता गाना गाती थी।', 'सीता गाना गा रही है।']),
    ]),
  ]);
  topic('h4-muhavare', '🗣️', ['सरल मुहावरे', 'सरल मुहावरे'], [
    MT(['मुहावरे को अर्थ से मिलाओ', 'मुहावरे को अर्थ से मिलाओ'], [['आँखों का तारा', 'बहुत प्यारा'], ['नौ दो ग्यारह होना', 'भाग जाना'], ['मुँह में पानी आना', 'ललचाना'], ['कान खड़े होना', 'सावधान होना'], ['हाथ बँटाना', 'मदद करना'], ['आसमान सिर पर उठाना', 'बहुत शोर मचाना'], ['ईद का चाँद होना', 'बहुत दिनों बाद दिखना'], ['दाँतों तले उँगली दबाना', 'हैरान होना']]),
    QZ(['मुहावरे का प्रयोग', 'मुहावरे का प्रयोग'], [
      Q('🍰', 'मिठाई देखते ही मेरे ___ ।', 'मुँह में पानी आ गया', ['कान खड़े हो गए', 'नौ दो ग्यारह हो गए']), Q('👮', 'पुलिस को देखकर चोर ___ ।', 'नौ दो ग्यारह हो गया', ['आँखों का तारा बन गया', 'हाथ बँटाने लगा']),
      Q('👶', 'छोटा भाई सबकी ___ है।', 'आँखों का तारा', ['ईद का चाँद', 'नौ दो ग्यारह']), Q('🧹', 'हमें घर के कामों में माँ का ___ चाहिए।', 'हाथ बँटाना', ['आसमान सिर पर उठाना', 'कान खड़े होना']),
    ]),
  ]);
  topic('h4-kabir', '🪔', ['कबीर के दोहे', 'कबीर के दोहे'], [
    PO(['कबीर के दोहे', 'कबीर के दोहे'], '🪔', ['ऐसी वाणी बोलिए, मन का आपा खोय।', 'औरन को शीतल करे, आपहु शीतल होय॥', 'बुरा जो देखन मैं चला, बुरा न मिलिया कोय।', 'जो दिल खोजा आपना, मुझसे बुरा न कोय॥', 'धीरे-धीरे रे मना, धीरे सब कुछ होय।', 'माली सींचे सौ घड़ा, ऋतु आए फल होय॥'],
      ['पहला दोहा: ऐसी मीठी बात बोलो जिससे सुनने वाले को भी शांति मिले और तुम्हें भी। दूसरा: दूसरों में बुराई ढूँढ़ने से पहले अपने मन को देखो। तीसरा: धीरज रखो – माली सौ घड़े पानी डाले, फिर भी फल मौसम आने पर ही लगता है।', 'पहला दोहा: ऐसी मीठी बात बोलो जिससे सुनने वाले को भी शांति मिले और तुम्हें भी। दूसरा: दूसरों में बुराई ढूँढ़ने से पहले अपने मन को देखो। तीसरा: धीरज रखो – फल मौसम आने पर ही लगता है।'], 'संत कबीर (15वीं सदी)',
      { roman: ['Aisi vaani boliye, man ka aapa khoy.', 'Auran ko sheetal kare, aapahu sheetal hoy.', 'Bura jo dekhan main chala, bura na miliya koy.', 'Jo dil khoja aapna, mujhse bura na koy.', 'Dheere-dheere re mana, dheere sab kuchh hoy.', 'Maali seenche sau ghada, ritu aaye phal hoy.'] }),
    QZ(['दोहों को समझो', 'दोहों को समझो'], [
      Q('🗣️', '"ऐसी वाणी बोलिए" – कबीर कैसी बात बोलने को कहते हैं?', 'मीठी और शांत करने वाली', ['ज़ोर से चिल्लाकर', 'घमंड भरी']), Q('🪞', 'बुराई ढूँढ़ने निकले कबीर को सबसे पहले बुराई कहाँ दिखी?', 'अपने ही मन में', ['पड़ोसी में', 'बाज़ार में']),
      Q('🌱', '"ऋतु आए फल होय" से क्या सीख मिलती है?', 'धैर्य रखना', ['जल्दबाज़ी करना', 'पानी न देना']), Q('📖', '"शीतल" का अर्थ:', 'ठंडा, शांत', ['गर्म', 'तेज़']),
    ]),
  ]);
  topic('h4-kahani', '🌾', ['कहानी: मेहनत का फल', 'कहानी: मेहनत का फल'], [
    ST(['मेहनत का फल', 'मेहनत का फल'], '🌾', [
      ['village', '👴 👦 👦 👦', 'A farmer named Harkhu had three sons. They were strong but lazy, and spent the day sleeping under the neem tree.', 'हरखू नाम के एक किसान के तीन बेटे थे। वे ताक़तवर थे पर आलसी, और दिन भर नीम के पेड़ के नीचे सोते रहते।'],
      ['home', '👴 💭 👦 👦', 'When Harkhu grew old and ill, he called them. “I have hidden a treasure in our field. Dig it out after I am gone.”', 'जब हरखू बूढ़ा और बीमार हुआ, उसने बेटों को बुलाया। “मैंने अपने खेत में ख़ज़ाना छिपाया है। मेरे बाद उसे खोद निकालना।”'],
      ['field', '👦 ⛏️ 👦 👦', 'The sons dug the whole field, every corner, from sunrise to sunset. They found no treasure, only soft, well-turned soil.', 'बेटों ने सुबह से शाम तक पूरे खेत का कोना-कोना खोद डाला। ख़ज़ाना नहीं मिला, बस नरम, अच्छी तरह पलटी मिट्टी मिली।'],
      ['rain', '👦 🌧️ 🌱', 'Since the field was ready, they sowed wheat. The rains came, and the seeds grew strong in the loose earth.', 'खेत तैयार था, तो उन्होंने गेहूँ बो दिया। बारिश आई और भुरभुरी मिट्टी में बीज मज़बूती से उगे।'],
      ['field', '👦 🌾 💰 👦', 'At harvest they got the biggest crop in the village and sold it for a lot of money. Then they understood: the treasure was their own hard work.', 'कटाई पर गाँव की सबसे बड़ी फ़सल हुई और उन्होंने उसे अच्छे दाम पर बेचा। तब वे समझे: असली ख़ज़ाना उनकी अपनी मेहनत थी।'],
    ], ['मेहनत ही सबसे बड़ा ख़ज़ाना है।', 'मेहनत ही सबसे बड़ा ख़ज़ाना है।'], [
      [['किसान ने बेटों से क्या कहा?', 'किसान ने बेटों से क्या कहा?'], [['खेत में ख़ज़ाना छिपा है', 'खेत में ख़ज़ाना छिपा है'], ['शहर चले जाओ', 'शहर चले जाओ'], ['खेत बेच दो', 'खेत बेच दो']]],
      [['असली ख़ज़ाना क्या निकला?', 'असली ख़ज़ाना क्या निकला?'], [['मेहनत', 'मेहनत'], ['सोना', 'सोना'], ['चाँदी', 'चाँदी']]],
      [['"आलसी" का विलोम:', '"आलसी" का विलोम:'], [['परिश्रमी', 'परिश्रमी'], ['सुस्त', 'सुस्त'], ['थका', 'थका']]],
    ]),
  ]);
  topic('h4-patra', '✉️', ['पत्र लेखन', 'पत्र लेखन'], [
    OR(['पत्र के भाग क्रम से', 'पत्र के भाग क्रम से'], [[['दादाजी को पत्र – भाग क्रम से दबाओ।', 'दादाजी को पत्र – भाग क्रम से दबाओ।'], [['🏠', 'पता और दिनांक', 'पता और दिनांक'], ['🙏', 'संबोधन: पूज्य दादाजी,', 'संबोधन: पूज्य दादाजी,'], ['🙇', 'अभिवादन: सादर प्रणाम।', 'अभिवादन: सादर प्रणाम।'], ['📝', 'मुख्य बात', 'मुख्य बात'], ['💌', 'समापन: आपका प्यारा पोता,', 'समापन: आपका प्यारा पोता,'], ['✍️', 'नाम', 'नाम']], ['बड़ों को पत्र में "पूज्य" और "सादर प्रणाम" लिखते हैं।', 'बड़ों को पत्र में "पूज्य" और "सादर प्रणाम" लिखते हैं।']]]),
    QZ(['पत्र के शिष्टाचार', 'पत्र के शिष्टाचार'], [
      Q('👴', 'दादाजी के लिए संबोधन:', 'पूज्य दादाजी', ['प्रिय दोस्त', 'अरे दादा']), Q('👫', 'मित्र के लिए संबोधन:', 'प्रिय मित्र', ['आदरणीय महोदय', 'पूज्य मित्र']),
      Q('🏫', 'प्रधानाचार्य को पत्र का संबोधन:', 'आदरणीय प्रधानाचार्य जी', ['प्यारे सर', 'हेलो']), Q('🙏', 'बड़ों को अभिवादन:', 'सादर प्रणाम', ['ढेर सारा प्यार', 'बाय बाय']),
    ]),
  ]);

  // =============================================================================== HINDI – CLASS 5
  topic('h5-visheshan', '🌈', ['विशेषण और उसके भेद', 'विशेषण और उसके भेद'], [
    FA(['विशेषण – संज्ञा की विशेषता', 'विशेषण – संज्ञा की विशेषता'], '🌈', [
      I('🎨', ['गुणवाचक विशेषण', 'गुणवाचक विशेषण'], ['गुण, रंग, आकार बताए: लाल फूल, ईमानदार लड़का, ऊँचा पहाड़।', 'गुण, रंग, आकार बताए: लाल फूल, ईमानदार लड़का, ऊँचा पहाड़।']),
      I('🔢', ['संख्यावाचक विशेषण', 'संख्यावाचक विशेषण'], ['गिनती बताए: पाँच आम, पहला स्थान, कुछ बच्चे।', 'गिनती बताए: पाँच आम, पहला स्थान, कुछ बच्चे।']),
      I('⚖️', ['परिमाणवाचक विशेषण', 'परिमाणवाचक विशेषण'], ['नाप-तौल बताए: दो लीटर दूध, थोड़ा पानी, एक किलो चीनी।', 'नाप-तौल बताए: दो लीटर दूध, थोड़ा पानी, एक किलो चीनी।']),
      I('👉', ['सार्वनामिक विशेषण', 'सार्वनामिक विशेषण'], ['सर्वनाम जो संज्ञा से पहले आए: यह किताब, वह घर, कौन लड़का?', 'सर्वनाम जो संज्ञा से पहले आए: यह किताब, वह घर, कौन लड़का?']),
    ], [
      Q('🌹', '"लाल गुलाब" में विशेषण:', 'लाल', ['गुलाब', 'दोनों नहीं']), Q('🥛', '"दो लीटर दूध" – कौन सा विशेषण?', 'परिमाणवाचक', ['गुणवाचक', 'संख्यावाचक']),
      Q('🍎', '"चार सेब" – कौन सा विशेषण?', 'संख्यावाचक', ['परिमाणवाचक', 'गुणवाचक']), Q('📕', '"यह किताब मेरी है" – "यह" कौन सा विशेषण?', 'सार्वनामिक', ['गुणवाचक', 'संख्यावाचक']),
      Q('😇', '"ईमानदार" कौन सा विशेषण?', 'गुणवाचक', ['परिमाणवाचक', 'सार्वनामिक']), Q('🏙️', '"भारत" से विशेषण:', 'भारतीय', ['भारती', 'भारत का']),
    ]),
  ]);
  topic('h5-sarvanam', '👉', ['सर्वनाम के भेद', 'सर्वनाम के भेद'], [
    QZ(['सर्वनाम पहचानो', 'सर्वनाम पहचानो'], [
      Q('🙋', '"मैं, तुम, वह" – कौन सा सर्वनाम?', 'पुरुषवाचक', ['प्रश्नवाचक', 'निजवाचक']), Q('❓', '"कौन आया है?" – "कौन" कौन सा सर्वनाम?', 'प्रश्नवाचक', ['निश्चयवाचक', 'संबंधवाचक']),
      Q('👉', '"यह मेरी पेंसिल है।" – "यह"?', 'निश्चयवाचक', ['अनिश्चयवाचक', 'प्रश्नवाचक']), Q('🤷', '"दरवाज़े पर कोई है।" – "कोई"?', 'अनिश्चयवाचक', ['निश्चयवाचक', 'पुरुषवाचक']),
      Q('🪞', '"मैं अपना काम ख़ुद करता हूँ।" – "ख़ुद"?', 'निजवाचक', ['प्रश्नवाचक', 'संबंधवाचक']), Q('🔗', '"जो मेहनत करेगा, वह जीतेगा।" – "जो…वह"?', 'संबंधवाचक', ['निजवाचक', 'पुरुषवाचक']),
    ]),
  ]);
  topic('h5-upsarg', '🧩', ['उपसर्ग और प्रत्यय', 'उपसर्ग और प्रत्यय'], [
    FA(['शब्द बनाने के औज़ार', 'शब्द बनाने के औज़ार'], '🧩', [
      I('⬅️', ['उपसर्ग', 'उपसर्ग'], ['शब्द के आगे जुड़कर अर्थ बदले: अ + ज्ञान = अज्ञान, सु + पुत्र = सुपुत्र, प्र + गति = प्रगति।', 'शब्द के आगे जुड़कर अर्थ बदले: अ + ज्ञान = अज्ञान, सु + पुत्र = सुपुत्र, प्र + गति = प्रगति।']),
      I('➡️', ['प्रत्यय', 'प्रत्यय'], ['शब्द के बाद जुड़े: मीठा + आस = मिठास, लिख + आई = लिखाई, दया + लु = दयालु।', 'शब्द के बाद जुड़े: मीठा + आस = मिठास, लिख + आई = लिखाई, दया + लु = दयालु।']),
    ], [
      Q('🧩', '"अनपढ़" में उपसर्ग:', 'अन', ['पढ़', 'अनप']), Q('🧩', '"दयालु" में प्रत्यय:', 'लु', ['दया', 'या']), Q('🧩', '"सु" + "गंध" =', 'सुगंध', ['दुर्गंध', 'गंधसु']),
      Q('🧩', '"बेईमान" में उपसर्ग:', 'बे', ['ईमान', 'मान']), Q('🧩', '"चमक" + "ईला" =', 'चमकीला', ['चमकना', 'चमकाई']), Q('🧩', '"प्रति" + "दिन" =', 'प्रतिदिन', ['दिनप्रति', 'प्रदिन']),
    ]),
  ]);
  topic('h5-lokokti', '📜', ['मुहावरे और लोकोक्तियाँ', 'मुहावरे और लोकोक्तियाँ'], [
    MT(['लोकोक्ति को अर्थ से मिलाओ', 'लोकोक्ति को अर्थ से मिलाओ'], [['जैसी करनी वैसी भरनी', 'जैसा काम वैसा फल'], ['अब पछताए होत क्या जब चिड़िया चुग गई खेत', 'समय निकलने पर पछताना बेकार'], ['बूँद-बूँद से घड़ा भरता है', 'थोड़ा-थोड़ा जोड़कर बहुत हो जाता है'], ['नाच न जाने आँगन टेढ़ा', 'अपनी कमी दूसरों पर डालना'], ['एक पंथ दो काज', 'एक काम से दो फ़ायदे'], ['जल में रहकर मगर से बैर', 'जिसके साथ रहो उससे दुश्मनी']]),
    QZ(['सही प्रयोग चुनो', 'सही प्रयोग चुनो'], [
      Q('💰', 'रोज़ एक रुपया बचाकर रीना ने गुल्लक भर ली – ___ ।', 'बूँद-बूँद से घड़ा भरता है', ['नाच न जाने आँगन टेढ़ा', 'जल में रहकर मगर से बैर']),
      Q('📚', 'साल भर नहीं पढ़ा, अब परीक्षा में रो रहा है – ___ ।', 'अब पछताए होत क्या जब चिड़िया चुग गई खेत', ['एक पंथ दो काज', 'बूँद-बूँद से घड़ा भरता है']),
      Q('🛍️', 'नानी से मिलने गए और मेला भी देख आए – ___ ।', 'एक पंथ दो काज', ['जैसी करनी वैसी भरनी', 'नाच न जाने आँगन टेढ़ा']),
      Q('😤', '"आग बबूला होना" का अर्थ:', 'बहुत ग़ुस्सा होना', ['आग जलाना', 'ख़ुश होना']), Q('🏃', '"पीठ दिखाना" का अर्थ:', 'हारकर भाग जाना', ['पीठ खुजाना', 'मदद करना']),
    ]),
  ]);
  topic('h5-ekshabd', '🗝️', ['अनेक शब्दों के लिए एक शब्द', 'अनेक शब्दों के लिए एक शब्द'], [
    QZ(['एक शब्द चुनो', 'एक शब्द चुनो'], [
      Q('🙏', 'ईश्वर में विश्वास रखने वाला', 'आस्तिक', ['नास्तिक', 'आलसी']), Q('📖', 'जो पढ़ा-लिखा न हो', 'अनपढ़', ['विद्वान', 'शिक्षक']), Q('🌅', 'जो कभी न मरे', 'अमर', ['अजर', 'मरणशील']),
      Q('🏙️', 'शहर में रहने वाला', 'शहरी', ['ग्रामीण', 'वनवासी']), Q('🎁', 'जो दान करे', 'दानी', ['लोभी', 'भिखारी']), Q('🔭', 'जो दिखाई न दे', 'अदृश्य', ['दृश्य', 'अंधा']),
      Q('📅', 'जो हर साल हो', 'वार्षिक', ['मासिक', 'दैनिक']), Q('🤝', 'दूसरों का भला करने वाला', 'परोपकारी', ['स्वार्थी', 'अहंकारी']),
    ]),
  ]);
  topic('h5-rahim', '🪢', ['रहीम के दोहे', 'रहीम के दोहे'], [
    PO(['रहीम के दोहे', 'रहीम के दोहे'], '🪢', ['रहिमन धागा प्रेम का, मत तोड़ो चटकाय।', 'टूटे से फिर ना मिले, मिले गाँठ परि जाय॥', 'तरुवर फल नहिं खात है, सरवर पियहि न पान।', 'कहि रहीम पर काज हित, संपति सँचहि सुजान॥'],
      ['पहला दोहा: प्रेम का रिश्ता नाज़ुक धागे जैसा है – झटके से तोड़ो तो जुड़ने पर भी गाँठ रह जाती है। इसलिए रिश्ते सँभालकर रखो। दूसरा: पेड़ अपने फल नहीं खाते, तालाब अपना पानी नहीं पीते – अच्छे लोग अपनी संपत्ति दूसरों की भलाई के लिए जोड़ते हैं।', 'पहला दोहा: प्रेम का रिश्ता नाज़ुक धागे जैसा है – इसलिए रिश्ते सँभालकर रखो। दूसरा: पेड़ अपने फल नहीं खाते – अच्छे लोग दूसरों की भलाई के लिए जोड़ते हैं।'], 'अब्दुर्रहीम ख़ानख़ाना (16वीं सदी)',
      { roman: ['Rahiman dhaaga prem ka, mat todo chatkaay.', 'Toote se phir na mile, mile gaanth pari jaay.', 'Taruvar phal nahin khaat hai, sarvar piyahi na paan.', 'Kahi Rahim par kaaj hit, sampati sanchahi sujaan.'] }),
    QZ(['दोहों को समझो', 'दोहों को समझो'], [
      Q('🧵', 'रहीम प्रेम की तुलना किससे करते हैं?', 'धागे से', ['पत्थर से', 'पानी से']), Q('🪢', 'टूटा धागा जुड़ने पर क्या रह जाता है?', 'गाँठ', ['रंग', 'चमक']),
      Q('🌳', '"तरुवर" का अर्थ:', 'पेड़', ['तालाब', 'पत्थर']), Q('🤲', 'दूसरे दोहे की सीख:', 'दूसरों की भलाई करना', ['सब अपने पास रखना', 'पेड़ काटना']),
    ]),
  ]);
  topic('h5-kahani', '🏏', ['कहानी: सच्ची खेल भावना', 'कहानी: सच्ची खेल भावना'], [
    ST(['सच्ची खेल भावना', 'सच्ची खेल भावना'], '🏏', [
      ['field', '👦 🏏 👧', 'It was the final of the inter-school cricket match. Vihaan’s team needed four runs off the last ball.', 'अंतर-विद्यालय क्रिकेट का फ़ाइनल था। विहान की टीम को आख़िरी गेंद पर चार रन चाहिए थे।'],
      ['field', '👦 🏏 ⚪', 'Vihaan hit hard. The fielder dived near the rope. The umpire signalled FOUR, and Vihaan’s team began to cheer wildly.', 'विहान ने ज़ोर से मारा। फ़ील्डर रस्सी के पास कूदा। अंपायर ने चौका दिया और विहान की टीम ख़ुशी से नाचने लगी।'],
      ['field', '👧 😟 ⚪', 'But Vihaan had seen something. The fielder, Sana, had stopped the ball inside the rope with her fingertips before it rolled out. It was not a four.', 'पर विहान ने कुछ देखा था। फ़ील्डर सना ने गेंद को रस्सी के अंदर ही उँगलियों से रोक लिया था। वह चौका नहीं था।'],
      ['field', '👦 🙋 🧑‍⚖️', 'Vihaan walked to the umpire. “Sir, she stopped it inside. It was only two runs.” The ground fell silent. His teammates stared at him.', 'विहान अंपायर के पास गया। “सर, उसने गेंद अंदर रोकी थी। सिर्फ़ दो रन थे।” मैदान में सन्नाटा छा गया। उसके साथी उसे घूरने लगे।'],
      ['field', '🧑‍⚖️ 🏅 👦 👧', 'Vihaan’s team lost by one run. But the chief guest gave Vihaan a special medal for Fair Play, and Sana’s team captain shook his hand warmly.', 'विहान की टीम एक रन से हार गई। पर मुख्य अतिथि ने विहान को "खेल भावना" का ख़ास पदक दिया और सना की टीम के कप्तान ने गर्मजोशी से हाथ मिलाया।'],
      ['school', '👦 😊 👦 👦', 'Next day his friends said, “We lost a match, but we won respect.” Vihaan smiled. A win built on a lie is no win at all.', 'अगले दिन दोस्त बोले, “हम मैच हारे, पर इज़्ज़त जीती।” विहान मुस्कुराया। झूठ पर बनी जीत कोई जीत नहीं।'],
    ], ['सच्चाई और खेल भावना जीत से भी बड़ी है।', 'सच्चाई और खेल भावना जीत से भी बड़ी है।'], [
      [['विहान ने अंपायर से क्या कहा?', 'विहान ने अंपायर से क्या कहा?'], [['कि वह चौका नहीं था', 'कि वह चौका नहीं था'], ['कि वह छक्का था', 'कि वह छक्का था'], ['कि मैच फिर से हो', 'कि मैच फिर से हो']]],
      [['विहान को कौन सा पदक मिला?', 'विहान को कौन सा पदक मिला?'], [['खेल भावना (Fair Play)', 'खेल भावना (Fair Play)'], ['सबसे तेज़ गेंदबाज़', 'सबसे तेज़ गेंदबाज़'], ['कोई नहीं', 'कोई नहीं']]],
      [['"सन्नाटा" का अर्थ:', '"सन्नाटा" का अर्थ:'], [['पूरी शांति', 'पूरी शांति'], ['बहुत शोर', 'बहुत शोर'], ['बारिश', 'बारिश']]],
    ]),
  ]);
  topic('h5-vartani', '✍️', ['शुद्ध वर्तनी', 'शुद्ध वर्तनी'], [
    QZ(['सही वर्तनी चुनो', 'सही वर्तनी चुनो'], [
      Q('✍️', 'सही शब्द:', 'आशीर्वाद', ['आर्शीवाद', 'आशिर्वाद']), Q('✍️', 'सही शब्द:', 'परीक्षा', ['परिक्षा', 'परीक्शा']), Q('✍️', 'सही शब्द:', 'उज्ज्वल', ['उज्वल', 'उजवल']),
      Q('✍️', 'सही शब्द:', 'कवयित्री', ['कवियत्री', 'कवित्री']), Q('✍️', 'सही शब्द:', 'अतिथि', ['अतिथी', 'अतीथि']), Q('✍️', 'सही शब्द:', 'प्रदर्शनी', ['प्रर्दशनी', 'प्रदर्शिनी']),
      Q('✍️', 'सही शब्द:', 'सम्मान', ['समान्न', 'सम्मानन']), Q('✍️', 'सही शब्द:', 'बूढ़ा', ['बुढ़ा', 'बूड़ा']),
    ]),
  ]);
  topic('h5-nibandh', '📝', ['निबंध और अनुच्छेद', 'निबंध और अनुच्छेद'], [
    OR(['अनुच्छेद क्रम से लगाओ', 'अनुच्छेद क्रम से लगाओ'], [[['"मेरा प्रिय त्योहार – दीपावली" के वाक्य क्रम से लगाओ।', '"मेरा प्रिय त्योहार – दीपावली" के वाक्य क्रम से लगाओ।'], [['🪔', 'दीपावली रोशनी का त्योहार है।', 'दीपावली रोशनी का त्योहार है।'], ['🏹', 'इस दिन श्रीराम चौदह वर्ष बाद अयोध्या लौटे थे।', 'इस दिन श्रीराम चौदह वर्ष बाद अयोध्या लौटे थे।'], ['🧹', 'लोग घर साफ़ करते हैं और दीये जलाते हैं।', 'लोग घर साफ़ करते हैं और दीये जलाते हैं।'], ['🌿', 'हमें पटाखों से बचकर स्वच्छ, हरित दीपावली मनानी चाहिए।', 'हमें पटाखों से बचकर स्वच्छ, हरित दीपावली मनानी चाहिए।']], ['भूमिका → कारण → कैसे मनाते हैं → संदेश। यही अच्छा निबंध है!', 'भूमिका → कारण → कैसे मनाते हैं → संदेश। यही अच्छा निबंध है!']]]),
    QZ(['निबंध के नियम', 'निबंध के नियम'], [
      Q('📝', 'निबंध की शुरुआत में क्या लिखते हैं?', 'भूमिका', ['उपसंहार', 'हस्ताक्षर']), Q('🏁', 'निबंध के अंत को कहते हैं:', 'उपसंहार', ['भूमिका', 'शीर्षक']),
      Q('🧾', 'अच्छे निबंध में वाक्य होने चाहिए:', 'छोटे, साफ़ और क्रम से', ['बहुत लंबे और उलझे', 'बिना विराम के']),
    ]),
  ]);
})();
