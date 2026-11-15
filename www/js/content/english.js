/* ENGLISH: letters, phonics, vocabulary with Hindi meaning, spelling, sentences, spoken English, grammar. */
window.CUR = window.CUR || [];
(() => {
  const W = 'english';
  const v = (en, hi, emoji) => ({ word: { en, hi }, emoji });
  window.CUR.push(
    // ---------------------------------------------------------- Level 1 (3–5)
    { id: 'en-abc1', world: W, type: 'cards', levels: [1, 2], free: true, trace: true, title: { en: 'ABC: A to M', hi: 'ABC: A से M' }, skills: ['reading', 'writing', 'listening'],
      items: [['A', 'Apple', '🍎'], ['B', 'Ball', '⚽'], ['C', 'Cat', '🐱'], ['D', 'Dog', '🐶'], ['E', 'Elephant', '🐘'], ['F', 'Fish', '🐟'], ['G', 'Grapes', '🍇'], ['H', 'House', '🏠'], ['I', 'Ice cream', '🍦'], ['J', 'Juice', '🧃'], ['K', 'Kite', '🪁'], ['L', 'Lion', '🦁'], ['M', 'Mango', '🥭']]
        .map(([big, en, emoji]) => ({ big, emoji, word: en, say: `${big} for ${en}` })), talk: { en: 'Ask your child to find three things at home that start with A, B or C.', hi: 'बच्चे से घर में A, B या C से शुरू होने वाली तीन चीज़ें ढूँढने को कहें।' } },
    { id: 'en-abc2', world: W, type: 'cards', levels: [1, 2], free: true, trace: true, title: { en: 'ABC: N to Z', hi: 'ABC: N से Z' }, skills: ['reading', 'writing', 'listening'],
      items: [['N', 'Nest', '🪺'], ['O', 'Orange', '🍊'], ['P', 'Parrot', '🦜'], ['Q', 'Queen', '👑'], ['R', 'Rabbit', '🐰'], ['S', 'Sun', '☀️'], ['T', 'Tiger', '🐯'], ['U', 'Umbrella', '☂️'], ['V', 'Van', '🚐'], ['W', 'Watch', '⌚'], ['X', 'Box', '📦'], ['Y', 'Yo-yo', '🪀'], ['Z', 'Zebra', '🦓']]
        .map(([big, en, emoji]) => ({ big, emoji, word: en, say: big === 'X' ? 'X, as in box' : `${big} for ${en}` })) },
    { id: 'en-trace-caps', world: W, type: 'trace', levels: [1], free: true, title: { en: 'Write A B C D E', hi: 'लिखो A B C D E' }, skills: ['writing'], letters: ['A', 'B', 'C', 'D', 'E'] },
    { id: 'en-trace-caps2', world: W, type: 'trace', levels: [1, 2], title: { en: 'Write F to K', hi: 'लिखो F से K' }, skills: ['writing'], letters: ['F', 'G', 'H', 'I', 'J', 'K'] },
    { id: 'en-colours', world: W, type: 'cards', levels: [1], free: true, bilingual: true, title: { en: 'Colours', hi: 'रंग' }, skills: ['vocabulary', 'listening'],
      items: [v('Red', 'लाल', '🔴'), v('Blue', 'नीला', '🔵'), v('Green', 'हरा', '🟢'), v('Yellow', 'पीला', '🟡'), v('Orange', 'नारंगी', '🟠'), v('Purple', 'बैंगनी', '🟣'), v('Black', 'काला', '⚫'), v('White', 'सफ़ेद', '⚪'), v('Brown', 'भूरा', '🟤')] },
    { id: 'en-animals', world: W, type: 'cards', levels: [1, 2], free: true, bilingual: true, title: { en: 'Animals', hi: 'जानवर' }, skills: ['vocabulary', 'listening'],
      items: [v('Cow', 'गाय', '🐄'), v('Dog', 'कुत्ता', '🐕'), v('Cat', 'बिल्ली', '🐈'), v('Lion', 'शेर', '🦁'), v('Elephant', 'हाथी', '🐘'), v('Monkey', 'बंदर', '🐒'), v('Horse', 'घोड़ा', '🐎'), v('Peacock', 'मोर', '🦚'), v('Camel', 'ऊँट', '🐪'), v('Parrot', 'तोता', '🦜')] },
    { id: 'en-fruits', world: W, type: 'cards', levels: [1, 2], bilingual: true, title: { en: 'Fruits & Vegetables', hi: 'फल और सब्ज़ियाँ' }, skills: ['vocabulary'],
      items: [v('Mango', 'आम', '🥭'), v('Banana', 'केला', '🍌'), v('Apple', 'सेब', '🍎'), v('Grapes', 'अंगूर', '🍇'), v('Watermelon', 'तरबूज़', '🍉'), v('Potato', 'आलू', '🥔'), v('Tomato', 'टमाटर', '🍅'), v('Onion', 'प्याज़', '🧅'), v('Carrot', 'गाजर', '🥕'), v('Corn', 'मक्का', '🌽')] },
    { id: 'en-body', world: W, type: 'cards', levels: [1, 2], bilingual: true, title: { en: 'My Body', hi: 'मेरा शरीर' }, skills: ['vocabulary', 'science'],
      items: [v('Eyes', 'आँखें', '👀'), v('Ears', 'कान', '👂'), v('Nose', 'नाक', '👃'), v('Mouth', 'मुँह', '👄'), v('Teeth', 'दाँत', '🦷'), v('Hand', 'हाथ', '✋'), v('Leg', 'पैर', '🦵'), v('Foot', 'पाँव', '🦶'), v('Hair', 'बाल', '💇'), v('Brain', 'दिमाग', '🧠')] },
    { id: 'en-home', world: W, type: 'cards', levels: [1, 2], bilingual: true, title: { en: 'Things at Home', hi: 'घर की चीज़ें' }, skills: ['vocabulary'],
      items: [v('Bed', 'बिस्तर', '🛏️'), v('Chair', 'कुर्सी', '🪑'), v('Door', 'दरवाज़ा', '🚪'), v('Window', 'खिड़की', '🪟'), v('Clock', 'घड़ी', '🕰️'), v('Lamp', 'दीया', '🪔'), v('Cup', 'कप', '☕'), v('Plate', 'थाली', '🍽️'), v('Spoon', 'चम्मच', '🥄'), v('Television', 'टीवी', '📺')] },

    // ---------------------------------------------------------- Level 2 (6–7)
    { id: 'en-trace-small', world: W, type: 'trace', levels: [2], free: true, title: { en: 'Small letters a–f', hi: 'छोटे अक्षर a–f' }, skills: ['writing'], letters: ['a', 'b', 'c', 'd', 'e', 'f'] },
    { id: 'en-trace-small2', world: W, type: 'trace', levels: [2], title: { en: 'Small letters g–n', hi: 'छोटे अक्षर g–n' }, skills: ['writing'], letters: ['g', 'h', 'i', 'j', 'k', 'm', 'n'] },
    { id: 'en-trace-words', world: W, type: 'trace', levels: [2, 3], title: { en: 'Write words', hi: 'शब्द लिखो' }, skills: ['writing'], letters: ['cat', 'sun', 'pen', 'bus'] },
    { id: 'en-spell3', world: W, type: 'spell', levels: [2], free: true, title: { en: 'Spell 3-letter words', hi: '3 अक्षर के शब्द बनाओ' }, skills: ['reading', 'writing', 'vocabulary'],
      words: [['CAT', '🐱'], ['DOG', '🐶'], ['SUN', '☀️'], ['BUS', '🚌'], ['HEN', '🐔'], ['PEN', '🖊️'], ['CUP', '☕'], ['HAT', '👒'], ['FOX', '🦊'], ['BED', '🛏️'], ['BOX', '📦'], ['PIG', '🐷'], ['ANT', '🐜'], ['EGG', '🥚'], ['KEY', '🔑'], ['BAG', '👜'], ['MAP', '🗺️']].map(([w, emoji]) => ({ w, emoji })) },
    { id: 'en-spell4', world: W, type: 'spell', levels: [2, 3], title: { en: 'Spell 4-letter words', hi: '4 अक्षर के शब्द बनाओ' }, skills: ['reading', 'writing', 'vocabulary'],
      words: [['FISH', '🐟'], ['FROG', '🐸'], ['STAR', '⭐'], ['CAKE', '🎂'], ['TREE', '🌳'], ['BOOK', '📖'], ['BALL', '⚽'], ['DUCK', '🦆'], ['MILK', '🥛'], ['SHIP', '🚢'], ['KITE', '🪁'], ['MOON', '🌙'], ['RAIN', '🌧️'], ['BIRD', '🐦'], ['DOOR', '🚪'], ['HAND', '✋']].map(([w, emoji]) => ({ w, emoji })) },
    { id: 'en-sent1', world: W, type: 'sentence', levels: [2], free: true, title: { en: 'Make a sentence', hi: 'वाक्य बनाओ' }, skills: ['reading', 'speaking', 'vocabulary'],
      sentences: [
        { words: ['This', 'is', 'a', 'cat.'], emoji: '🐱', meaning: 'यह एक बिल्ली है।' },
        { words: ['I', 'like', 'mangoes.'], emoji: '🥭', meaning: 'मुझे आम पसंद हैं।' },
        { words: ['The', 'sun', 'is', 'hot.'], emoji: '☀️', meaning: 'सूरज गरम है।' },
        { words: ['Birds', 'can', 'fly.'], emoji: '🐦', meaning: 'पक्षी उड़ सकते हैं।' },
        { words: ['The', 'dog', 'is', 'big.'], emoji: '🐶', meaning: 'कुत्ता बड़ा है।' },
        { words: ['I', 'love', 'my', 'family.'], emoji: '👨‍👩‍👧', meaning: 'मुझे अपना परिवार बहुत प्यारा है।' },
        { words: ['We', 'go', 'to', 'school.'], emoji: '🏫', meaning: 'हम स्कूल जाते हैं।' },
        { words: ['The', 'sky', 'is', 'blue.'], emoji: '🌌', meaning: 'आसमान नीला है।' },
      ] },
    { id: 'en-speak1', world: W, type: 'cards', levels: [1, 2, 3], free: true, bilingual: true, repeat: true, title: { en: 'Speak English: Hello!', hi: 'अंग्रेज़ी बोलो: नमस्ते!' }, skills: ['speaking', 'listening', 'manners'],
      items: [v('Good morning!', 'सुप्रभात!', '🌅'), v('How are you?', 'आप कैसे हैं?', '🙂'), v('I am fine, thank you.', 'मैं ठीक हूँ, धन्यवाद।', '😊'), v('What is your name?', 'आपका नाम क्या है?', '❓'), v('My name is Aarav.', 'मेरा नाम आरव है।', '👦'), v('Nice to meet you!', 'आपसे मिलकर अच्छा लगा!', '🤝'), v('Good night!', 'शुभ रात्रि!', '🌙')],
      talk: { en: 'Practise these greetings at home today: say "Good morning" at breakfast and "Good night" at bedtime.', hi: 'आज घर पर ये अभिवादन बोलने का अभ्यास करें: नाश्ते पर "Good morning" और सोते समय "Good night"।' } },
    { id: 'en-speak2', world: W, type: 'cards', levels: [2, 3], bilingual: true, repeat: true, title: { en: 'Speak English: Please & Thank you', hi: 'अंग्रेज़ी बोलो: कृपया और धन्यवाद' }, skills: ['speaking', 'manners'],
      items: [v('Please help me.', 'कृपया मेरी मदद कीजिए।', '🙏'), v('Thank you very much!', 'बहुत-बहुत धन्यवाद!', '💐'), v('Sorry, it was my mistake.', 'माफ़ कीजिए, मेरी गलती थी।', '😔'), v('May I come in?', 'क्या मैं अंदर आ जाऊँ?', '🚪'), v('May I drink some water?', 'क्या मैं थोड़ा पानी पी लूँ?', '💧'), v('Can you play with me?', 'क्या तुम मेरे साथ खेलोगे?', '⚽'), v('Excuse me, where is the washroom?', 'सुनिए, शौचालय कहाँ है?', '🚻'), v("You're welcome!", 'कोई बात नहीं!', '😊')] },
    { id: 'en-opposites', world: W, type: 'quiz', levels: [2, 3], title: { en: 'Opposites', hi: 'उल्टे शब्द' }, skills: ['vocabulary', 'logic'],
      questions: [
        { q: 'The opposite of BIG is…', emoji: '🐘', options: ['small', 'tall', 'fat'], answer: 0 },
        { q: 'The opposite of HOT is…', emoji: '🔥', options: ['warm', 'cold', 'wet'], answer: 1 },
        { q: 'The opposite of DAY is…', emoji: '☀️', options: ['night', 'morning', 'sun'], answer: 0 },
        { q: 'The opposite of HAPPY is…', emoji: '😀', options: ['funny', 'sad', 'good'], answer: 1 },
        { q: 'The opposite of UP is…', emoji: '⬆️', options: ['top', 'down', 'over'], answer: 1 },
        { q: 'The opposite of OPEN is…', emoji: '🚪', options: ['shut', 'closed', 'both are right'], answer: 2 },
        { q: 'The opposite of FAST is…', emoji: '🐇', options: ['slow', 'quick', 'run'], answer: 0 },
        { q: 'The opposite of FULL is…', emoji: '🥛', options: ['empty', 'half', 'more'], answer: 0 },
      ] },

    // ---------------------------------------------------------- Level 3 (8–10)
    { id: 'en-sent2', world: W, type: 'sentence', levels: [3], free: true, title: { en: 'Longer sentences', hi: 'लंबे वाक्य' }, skills: ['reading', 'speaking', 'vocabulary'],
      sentences: [
        { words: ['She', 'is', 'reading', 'a', 'story', 'book.'], emoji: '📖', meaning: 'वह एक कहानी की किताब पढ़ रही है।' },
        { words: ['We', 'go', 'to', 'school', 'by', 'bus.'], emoji: '🚌', meaning: 'हम बस से स्कूल जाते हैं।' },
        { words: ['My', 'grandmother', 'tells', 'me', 'stories.'], emoji: '👵', meaning: 'मेरी दादी मुझे कहानियाँ सुनाती हैं।' },
        { words: ['Plants', 'need', 'water', 'and', 'sunlight.'], emoji: '🌱', meaning: 'पौधों को पानी और धूप चाहिए।' },
        { words: ['I', 'help', 'my', 'mother', 'at', 'home.'], emoji: '🏠', meaning: 'मैं घर पर अपनी माँ की मदद करता/करती हूँ।' },
        { words: ['Diwali', 'is', 'the', 'festival', 'of', 'lights.'], emoji: '🪔', meaning: 'दिवाली रोशनी का त्योहार है।' },
        { words: ['Please', 'switch', 'off', 'the', 'fan.'], emoji: '🌀', meaning: 'कृपया पंखा बंद कर दीजिए।' },
        { words: ['Yesterday', 'we', 'played', 'cricket.'], emoji: '🏏', meaning: 'कल हमने क्रिकेट खेला।' },
      ] },
    { id: 'en-grammar1', world: W, type: 'quiz', levels: [3], title: { en: 'Grammar: is / are / a / an', hi: 'व्याकरण: is / are / a / an' }, skills: ['reading', 'logic'],
      questions: [
        { q: 'The cats ___ sleeping.', emoji: '🐱', options: ['is', 'are', 'am'], answer: 1, explain: { en: 'More than one cat → "are".', hi: 'एक से ज़्यादा बिल्लियाँ → "are"।' } },
        { q: 'I ___ a good reader.', emoji: '📚', options: ['am', 'is', 'are'], answer: 0, explain: { en: 'With "I" we use "am".', hi: '"I" के साथ "am" आता है।' } },
        { q: 'This is ___ apple.', emoji: '🍎', options: ['a', 'an', 'the two'], answer: 1, explain: { en: '"Apple" starts with a vowel sound, so we say "an apple".', hi: '"Apple" स्वर की आवाज़ से शुरू होता है, इसलिए "an apple"।' } },
        { q: 'He has ___ kite.', emoji: '🪁', options: ['an', 'a', 'are'], answer: 1, explain: { en: '"Kite" starts with a consonant sound → "a kite".', hi: '"Kite" व्यंजन से शुरू होता है → "a kite"।' } },
        { q: 'One child, two ___', emoji: '🧒', options: ['childs', 'children', 'childes'], answer: 1, explain: { en: '"Child" becomes "children" for more than one.', hi: 'एक से ज़्यादा के लिए "child" का "children" बनता है।' } },
        { q: 'One box, two ___', emoji: '📦', options: ['boxs', 'boxes', 'boxies'], answer: 1, explain: { en: 'Words ending in x take "es": boxes.', hi: 'x पर खत्म होने वाले शब्दों में "es" लगता है: boxes।' } },
        { q: 'Yesterday I ___ football.', emoji: '⚽', options: ['play', 'played', 'playing'], answer: 1, explain: { en: '"Yesterday" means the past, so we say "played".', hi: '"Yesterday" बीता हुआ समय है, इसलिए "played"।' } },
        { q: 'The ball is ___ the table.', emoji: '⚽⬇️', options: ['under', 'on', 'in'], answer: 0, explain: { en: 'The ball is below the table: "under".', hi: 'गेंद मेज़ के नीचे है: "under"।' } },
      ] },
    { id: 'en-talk', world: W, type: 'quiz', levels: [2, 3], title: { en: 'What do you say?', hi: 'तुम क्या कहोगे?' }, skills: ['speaking', 'manners'],
      questions: [
        { q: { en: 'Your friend says "Thank you". You say…', hi: 'दोस्त ने कहा "Thank you"। तुम कहोगे…' }, emoji: '🙂', options: ["You're welcome!", 'Go away!', 'Good night!'], answer: 0 },
        { q: { en: 'You meet your teacher in the morning. You say…', hi: 'सुबह टीचर मिलीं। तुम कहोगे…' }, emoji: '👩‍🏫', options: ['Good morning, Ma’am!', 'Bye!', 'Sorry!'], answer: 0 },
        { q: { en: 'You want to borrow a pencil. You say…', hi: 'तुम्हें पेंसिल चाहिए। तुम कहोगे…' }, emoji: '✏️', options: ['Give me pencil!', 'May I borrow your pencil, please?', 'Pencil now!'], answer: 1 },
        { q: { en: 'You bumped into someone by mistake. You say…', hi: 'गलती से किसी से टकरा गए। तुम कहोगे…' }, emoji: '😮', options: ['Sorry!', 'Thank you!', 'Hello!'], answer: 0 },
        { q: { en: 'Someone gives you a gift. You say…', hi: 'किसी ने तोहफ़ा दिया। तुम कहोगे…' }, emoji: '🎁', options: ['Thank you so much!', 'It is small.', 'Okay.'], answer: 0 },
        { q: { en: 'You want to ask a question in class. You say…', hi: 'क्लास में सवाल पूछना है। तुम कहोगे…' }, emoji: '🙋', options: ['Hey you!', 'Excuse me, Ma’am, may I ask a question?', 'Listen!'], answer: 1 },
      ] },
    { id: 'en-feelings', world: W, type: 'cards', levels: [2, 3], bilingual: true, title: { en: 'Feeling words', hi: 'भावनाओं के शब्द' }, skills: ['vocabulary', 'emotions'],
      items: [v('Happy', 'खुश', '😀'), v('Sad', 'उदास', '😢'), v('Angry', 'गुस्सा', '😠'), v('Scared', 'डरा हुआ', '😨'), v('Surprised', 'हैरान', '😲'), v('Tired', 'थका हुआ', '🥱'), v('Proud', 'गर्व', '🦁'), v('Kind', 'दयालु', '🤗')] },
    { id: 'en-read1', world: W, type: 'story', levels: [3], title: { en: 'Read: Meera’s Garden', hi: 'पढ़ो: मीरा का बगीचा' }, skills: ['reading', 'listening', 'science'],
      pages: [
        { emoji: '👧🌱', text: { en: 'Meera planted a small seed in a pot. She gave it water every morning.', hi: 'मीरा ने गमले में एक छोटा बीज बोया। वह हर सुबह उसे पानी देती थी।' } },
        { emoji: '☀️🪴', text: { en: 'She kept the pot near the window, where the sun could reach it.', hi: 'उसने गमला खिड़की के पास रखा, जहाँ धूप आती थी।' } },
        { emoji: '🌿', text: { en: 'After seven days, a tiny green leaf came out. Meera was very happy.', hi: 'सात दिन बाद एक छोटी हरी पत्ती निकली। मीरा बहुत खुश हुई।' } },
        { emoji: '🌻', text: { en: 'A month later, a big yellow sunflower smiled at her!', hi: 'एक महीने बाद एक बड़ा पीला सूरजमुखी उसे देखकर मुस्कुराया!' } },
      ],
      moral: { en: 'Patience and care help things grow.', hi: 'धैर्य और देखभाल से चीज़ें बढ़ती हैं।' },
      questions: [
        { q: { en: 'What did Meera plant?', hi: 'मीरा ने क्या बोया?' }, options: [{ en: 'A seed', hi: 'बीज' }, { en: 'A stone', hi: 'पत्थर' }, { en: 'A toy', hi: 'खिलौना' }], answer: 0 },
        { q: { en: 'Where did she keep the pot?', hi: 'उसने गमला कहाँ रखा?' }, options: [{ en: 'Near the window', hi: 'खिड़की के पास' }, { en: 'Under the bed', hi: 'बिस्तर के नीचे' }, { en: 'In the fridge', hi: 'फ्रिज में' }], answer: 0 },
        { q: { en: 'What grew in the end?', hi: 'आख़िर में क्या उगा?' }, options: [{ en: 'A sunflower', hi: 'सूरजमुखी' }, { en: 'A mango tree', hi: 'आम का पेड़' }, { en: 'A cactus', hi: 'कैक्टस' }], answer: 0 },
      ] },
  );
})();
