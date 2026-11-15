/* SANSKAR (Indian values, greetings, culture) and SMART CHOICES (situations, feelings, safety). */
window.CUR = window.CUR || [];
(() => {
  const C = (t, good, why) => ({ t, good, why });
  const T = (en, hi) => ({ en, hi });
  window.CUR.push(
    // ================================================================= SANSKAR
    { id: 'v-greet', world: 'sanskar', type: 'cards', levels: [1, 2, 3], free: true, repeat: true, title: T('How we greet', 'अभिवादन कैसे करें'), skills: ['values', 'culture', 'speaking'],
      items: [
        { emoji: '🙏', word: T('Namaste!', 'नमस्ते!'), note: T('Join both hands and smile. We say Namaste to everyone.', 'दोनों हाथ जोड़ें और मुस्कुराएँ। सबको नमस्ते कहते हैं।'), say: T('Namaste! Join your hands and smile.', 'नमस्ते! दोनों हाथ जोड़कर मुस्कुराओ।') },
        { emoji: '👵🙇', word: T('Pranam to elders', 'बड़ों को प्रणाम'), note: T('Touch the feet of grandparents and elders to take their blessings.', 'दादा-दादी और बड़ों के पैर छूकर आशीर्वाद लें।'), say: T('We touch the feet of our elders and say Pranam.', 'हम बड़ों के पैर छूकर प्रणाम करते हैं।') },
        { emoji: '👩‍🏫', word: T('Good morning, Ma’am!', 'गुड मॉर्निंग मैम!'), note: T('Stand up and greet your teacher when she comes to class.', 'टीचर के कक्षा में आने पर खड़े होकर अभिवादन करें।'), say: T('Good morning, Ma’am!', 'टीचर को कहो: गुड मॉर्निंग मैम!') },
        { emoji: '🗣️', word: T('Say "ji" to elders', 'बड़ों से "जी" लगाकर बात करें'), note: T('"Haan ji", "Nahi ji", "Aap" – we speak to elders with respect.', '"हाँ जी", "नहीं जी", "आप" – बड़ों से आदर से बात करते हैं।'), say: T('We say haan ji and use aap when talking to elders.', 'बड़ों से बात करते समय हाँ जी और आप कहते हैं।') },
        { emoji: '🌏', word: T('Many greetings, one India', 'अनेक अभिवादन, एक भारत'), note: T('Sat Sri Akal, Assalamu Alaikum, Vanakkam, Namaskar, Jai Shri Krishna – we respect every greeting.', 'सत श्री अकाल, अस्सलामु अलैकुम, वणक्कम, नमस्कार, जय श्री कृष्ण – हम हर अभिवादन का आदर करते हैं।'), say: T('Sat Sri Akal, Assalamu Alaikum, Vanakkam. India has many greetings, and we respect them all.', 'सत श्री अकाल, अस्सलामु अलैकुम, वणक्कम। भारत में अनेक अभिवादन हैं, हम सबका आदर करते हैं।') },
        { emoji: '💐', word: T('Thank you – Dhanyavaad', 'धन्यवाद – Thank you'), note: T('When someone helps us, we always say thank you.', 'जब कोई मदद करे, हमेशा धन्यवाद कहें।'), say: T('Thank you. Dhanyavaad.', 'धन्यवाद। थैंक यू।') },
        { emoji: '😔', word: T('Sorry – Maaf kijiye', 'माफ़ कीजिए – Sorry'), note: T('When we make a mistake, we say sorry and fix it.', 'गलती होने पर माफ़ी माँगें और उसे ठीक करें।'), say: T('Sorry. Maaf kijiye.', 'माफ़ कीजिए। सॉरी।') },
      ],
      talk: { en: 'Today, ask your child to greet every family member with Namaste or Pranam and praise them for it.', hi: 'आज बच्चे से हर परिवार के सदस्य को नमस्ते या प्रणाम करने को कहें और उसकी तारीफ़ करें।' } },
    { id: 'v-respect', world: 'sanskar', type: 'situation', levels: [1, 2, 3], free: true, title: T('Respect for elders', 'बड़ों का आदर'), skills: ['values', 'culture'],
      remember: T('Elders love us and guide us. We greet them, listen to them and help them.', 'बड़े हमें प्यार करते हैं और सही राह दिखाते हैं। हम उनका अभिवादन करते हैं, उनकी बात सुनते हैं और मदद करते हैं।'),
      scenes: [
        { emoji: '👵🚪', text: T('Dadi comes into the room where you are watching TV.', 'तुम टीवी देख रहे हो और दादी कमरे में आती हैं।'), choices: [
          C(T('Stand up, say Namaste and offer her a seat', 'खड़े होकर नमस्ते करो और उन्हें बैठने की जगह दो'), true, T('Wonderful! Showing respect makes Dadi very happy.', 'बहुत बढ़िया! आदर दिखाने से दादी बहुत खुश होती हैं।')),
          C(T('Keep watching TV and ignore her', 'टीवी देखते रहो और ध्यान मत दो'), false, T('Hmm. Dadi would feel sad. Let’s greet her and make space for her.', 'दादी को बुरा लगेगा। उनका अभिवादन करके उन्हें बैठने की जगह दो।')),
          C(T('Turn up the volume', 'आवाज़ और तेज़ कर दो'), false, T('That is not kind. We should take care of our elders.', 'यह ठीक नहीं। हमें बड़ों का ध्यान रखना चाहिए।')) ] },
        { emoji: '🧑‍🤝‍🧑🏠', text: T('Guests come to your home.', 'घर पर मेहमान आए हैं।'), choices: [
          C(T('Greet them with Namaste and bring them water', 'नमस्ते करो और उन्हें पानी लाकर दो'), true, T('Yes! "Atithi Devo Bhava" – a guest is like God. We welcome guests warmly.', 'हाँ! "अतिथि देवो भव" – मेहमान भगवान जैसे होते हैं। हम प्यार से स्वागत करते हैं।')),
          C(T('Hide in your room', 'अपने कमरे में छिप जाओ'), false, T('It is okay to feel shy, but saying Namaste is polite and kind.', 'शर्म आना ठीक है, पर नमस्ते कहना अच्छी आदत है।')),
          C(T('Ask them what gift they brought', 'पूछो कि क्या तोहफ़ा लाए हो'), false, T('That can make guests feel awkward. Just welcome them happily.', 'इससे मेहमान असहज हो सकते हैं। बस खुशी से स्वागत करो।')) ] },
        { emoji: '👴💬', text: T('Dadaji is telling a story, but you want to say something.', 'दादाजी कहानी सुना रहे हैं और तुम्हें कुछ कहना है।'), choices: [
          C(T('Wait till he finishes, then speak', 'उनके पूरा करने तक रुको, फिर बोलो'), true, T('Great listening! We never interrupt elders.', 'बहुत अच्छे! हम बड़ों की बात बीच में नहीं काटते।')),
          C(T('Shout over him', 'ज़ोर से बीच में बोलो'), false, T('Interrupting is not polite. Wait for your turn.', 'बीच में बोलना अच्छा नहीं। अपनी बारी का इंतज़ार करो।')),
          C(T('Walk away', 'उठकर चले जाओ'), false, T('Dadaji would feel sad. Listening is a way of showing love.', 'दादाजी को बुरा लगेगा। सुनना भी प्यार दिखाने का तरीका है।')) ] },
        { emoji: '🍽️👨‍👩‍👧', text: T('It is dinner time and food is served.', 'रात के खाने का समय है और खाना परोसा गया है।'), choices: [
          C(T('Wash hands, wait for everyone, and eat without wasting', 'हाथ धोओ, सबका इंतज़ार करो और खाना बर्बाद मत करो'), true, T('Perfect! We respect food and the people who cook it.', 'बिल्कुल सही! हम अन्न और खाना बनाने वालों का आदर करते हैं।')),
          C(T('Start eating before others and leave half on the plate', 'सबसे पहले खाना शुरू करो और आधा छोड़ दो'), false, T('Food is precious. Take only what you can eat.', 'अन्न कीमती है। उतना ही लो जितना खा सको।')),
          C(T('Complain loudly about the food', 'ज़ोर से खाने की शिकायत करो'), false, T('Someone worked hard to cook. Say thank you instead.', 'किसी ने मेहनत से खाना बनाया है। धन्यवाद कहो।')) ] },
      ] },
    { id: 'v-family', world: 'sanskar', type: 'cards', levels: [1, 2], bilingual: true, title: T('My family', 'मेरा परिवार'), skills: ['vocabulary', 'culture'],
      items: [
        { emoji: '👴', word: T('Grandfather (father’s father)', 'दादा जी') }, { emoji: '👵', word: T('Grandmother (father’s mother)', 'दादी जी') },
        { emoji: '🧓', word: T('Grandfather (mother’s father)', 'नाना जी') }, { emoji: '👵🏽', word: T('Grandmother (mother’s mother)', 'नानी जी') },
        { emoji: '👨', word: T('Uncle (father’s brother)', 'चाचा जी') }, { emoji: '👨🏽', word: T('Uncle (mother’s brother)', 'मामा जी') },
        { emoji: '👩', word: T('Aunt (father’s sister)', 'बुआ जी') }, { emoji: '👩🏽', word: T('Aunt (mother’s sister)', 'मौसी जी') },
        { emoji: '👦', word: T('Brother', 'भाई / भैया') }, { emoji: '👧', word: T('Sister', 'बहन / दीदी') },
      ] },
    { id: 'v-festivals', world: 'sanskar', type: 'quiz', levels: [1, 2, 3], title: T('Our festivals', 'हमारे त्योहार'), skills: ['culture', 'values'],
      questions: [
        { q: T('Which festival is the festival of lights?', 'रोशनी का त्योहार कौन सा है?'), emoji: '🪔', options: [T('Diwali', 'दिवाली'), T('Holi', 'होली'), T('Lohri', 'लोहड़ी')], answer: 0, explain: T('On Diwali we light diyas and share sweets.', 'दिवाली पर हम दीये जलाते और मिठाई बाँटते हैं।') },
        { q: T('Which festival is played with colours?', 'रंगों से कौन सा त्योहार खेलते हैं?'), emoji: '🎨', options: [T('Holi', 'होली'), T('Christmas', 'क्रिसमस'), T('Onam', 'ओणम')], answer: 0, explain: T('Holi is the festival of colours and joy.', 'होली रंगों और खुशियों का त्योहार है।') },
        { q: T('On Raksha Bandhan, a sister ties a…', 'रक्षाबंधन पर बहन क्या बाँधती है?'), emoji: '🧵', options: [T('Rakhi', 'राखी'), T('Kite', 'पतंग'), T('Shoe', 'जूता')], answer: 0, explain: T('Brothers and sisters promise to care for each other.', 'भाई-बहन एक-दूसरे की रक्षा का वादा करते हैं।') },
        { q: T('On Eid, people share…', 'ईद पर लोग क्या बाँटते हैं?'), emoji: '🌙', options: [T('Sewaiyan and hugs', 'सेवइयाँ और गले मिलना'), T('Firecrackers', 'पटाखे'), T('Kites', 'पतंगें')], answer: 0, explain: T('Eid Mubarak! Friends and families meet and share sweet sewaiyan.', 'ईद मुबारक! लोग मिलते हैं और मीठी सेवइयाँ बाँटते हैं।') },
        { q: T('On Christmas, we decorate a…', 'क्रिसमस पर हम क्या सजाते हैं?'), emoji: '🎄', options: [T('Christmas tree', 'क्रिसमस ट्री'), T('Rangoli only', 'सिर्फ़ रंगोली'), T('Car', 'गाड़ी')], answer: 0, explain: T('Christmas celebrates love and giving.', 'क्रिसमस प्यार और देने का त्योहार है।') },
        { q: T('Which festival celebrates Guru Nanak Dev Ji’s birthday?', 'गुरु नानक देव जी का जन्मदिन कौन सा पर्व है?'), emoji: '🙏', options: [T('Gurpurab', 'गुरुपर्व'), T('Pongal', 'पोंगल'), T('Navratri', 'नवरात्रि')], answer: 0, explain: T('On Gurpurab, langar food is served to everyone.', 'गुरुपर्व पर सबको लंगर खिलाया जाता है।') },
        { q: T('Pongal and Makar Sankranti thank nature for…', 'पोंगल और मकर संक्रांति किसके लिए प्रकृति को धन्यवाद है?'), emoji: '🌾', options: [T('A good harvest', 'अच्छी फ़सल'), T('New phones', 'नए फ़ोन'), T('Rain only', 'सिर्फ़ बारिश')], answer: 0, explain: T('Farmers celebrate the new crop with family.', 'किसान नई फ़सल का उत्सव परिवार के साथ मनाते हैं।') },
      ],
      remember: T('India has many festivals. We respect and enjoy all of them together.', 'भारत में अनेक त्योहार हैं। हम सबका आदर करते हैं और मिलकर मनाते हैं।') },
    { id: 'v-india', world: 'sanskar', type: 'quiz', levels: [2, 3], title: T('Our India', 'हमारा भारत'), skills: ['culture', 'knowledge'],
      questions: [
        { q: T('What are the colours of our national flag?', 'हमारे राष्ट्रीय ध्वज के रंग कौन से हैं?'), emoji: '🇮🇳', options: [T('Saffron, white and green', 'केसरिया, सफ़ेद और हरा'), T('Red and blue', 'लाल और नीला'), T('Black and yellow', 'काला और पीला')], answer: 0, explain: T('The blue wheel in the middle is the Ashoka Chakra with 24 spokes.', 'बीच में नीला अशोक चक्र है जिसमें 24 तीलियाँ हैं।') },
        { q: T('Our national bird is the…', 'हमारा राष्ट्रीय पक्षी कौन सा है?'), emoji: '🦚', options: [T('Peacock', 'मोर'), T('Crow', 'कौआ'), T('Parrot', 'तोता')], answer: 0 },
        { q: T('Our national animal is the…', 'हमारा राष्ट्रीय पशु कौन सा है?'), emoji: '🐯', options: [T('Tiger', 'बाघ'), T('Lion', 'शेर'), T('Elephant', 'हाथी')], answer: 0 },
        { q: T('Our national flower is the…', 'हमारा राष्ट्रीय फूल कौन सा है?'), emoji: '🪷', options: [T('Lotus', 'कमल'), T('Rose', 'गुलाब'), T('Sunflower', 'सूरजमुखी')], answer: 0 },
        { q: T('What is the capital of India?', 'भारत की राजधानी क्या है?'), emoji: '🏛️', options: [T('New Delhi', 'नई दिल्ली'), T('Mumbai', 'मुंबई'), T('Kolkata', 'कोलकाता')], answer: 0 },
        { q: T('When is Independence Day?', 'स्वतंत्रता दिवस कब है?'), emoji: '🎉', options: [T('15 August', '15 अगस्त'), T('26 January', '26 जनवरी'), T('2 October', '2 अक्टूबर')], answer: 0, explain: T('India became free on 15 August 1947.', 'भारत 15 अगस्त 1947 को आज़ाद हुआ।') },
        { q: T('What do we do when the national anthem plays?', 'राष्ट्रगान बजने पर हम क्या करते हैं?'), emoji: '🎶', options: [T('Stand still with respect', 'सम्मान से सीधे खड़े होते हैं'), T('Keep playing', 'खेलते रहते हैं'), T('Talk loudly', 'ज़ोर से बात करते हैं')], answer: 0 },
        { q: T('Who is called the Father of the Nation?', 'राष्ट्रपिता किसे कहते हैं?'), emoji: '👓', options: [T('Mahatma Gandhi', 'महात्मा गांधी'), T('A king', 'एक राजा'), T('A cricketer', 'एक क्रिकेटर')], answer: 0, explain: T('Gandhi ji taught truth and non-violence. His birthday is 2 October.', 'गांधी जी ने सत्य और अहिंसा सिखाई। उनका जन्मदिन 2 अक्टूबर है।') },
      ] },
    { id: 'v-habits', world: 'sanskar', type: 'situation', levels: [1, 2], title: T('Good habits', 'अच्छी आदतें'), skills: ['values', 'health'],
      remember: T('Good habits every day make us healthy, happy and loved.', 'रोज़ की अच्छी आदतें हमें स्वस्थ, खुश और सबका प्यारा बनाती हैं।'),
      scenes: [
        { emoji: '🧸🧩', text: T('You finished playing and toys are all over the floor.', 'खेलकर तुम हटे और खिलौने ज़मीन पर बिखरे हैं।'), choices: [
          C(T('Put the toys back in the box', 'खिलौने वापस डिब्बे में रखो'), true, T('Super! A tidy room is happy and safe.', 'बहुत बढ़िया! साफ़ कमरा खुशहाल और सुरक्षित होता है।')),
          C(T('Leave them for Mummy to pick up', 'मम्मी के उठाने के लिए छोड़ दो'), false, T('Mummy works hard too. Let’s help by tidying up.', 'मम्मी भी मेहनत करती हैं। सामान समेटकर मदद करो।')) ] },
        { emoji: '🍫🗑️', text: T('You finished a chocolate in the park. There is no bin nearby.', 'पार्क में चॉकलेट खाई। पास में कूड़ेदान नहीं है।'), choices: [
          C(T('Keep the wrapper in your pocket and throw it in a bin later', 'रैपर जेब में रखो और बाद में कूड़ेदान में डालो'), true, T('You are a cleanliness hero! Swachh Bharat starts with us.', 'तुम सफ़ाई के हीरो हो! स्वच्छ भारत हमसे शुरू होता है।')),
          C(T('Throw it on the grass', 'घास पर फेंक दो'), false, T('Litter makes our park dirty and can hurt animals.', 'कचरा पार्क को गंदा करता है और जानवरों को नुकसान पहुँचा सकता है।')) ] },
        { emoji: '🪥🚰', text: T('You are brushing your teeth and the tap is running.', 'तुम ब्रश कर रहे हो और नल चल रहा है।'), choices: [
          C(T('Close the tap while brushing', 'ब्रश करते समय नल बंद करो'), true, T('Yes! You just saved many litres of water.', 'हाँ! तुमने कई लीटर पानी बचा लिया।')),
          C(T('Let it run', 'चलने दो'), false, T('Water is precious. Let’s close the tap.', 'पानी कीमती है। नल बंद करो।')) ] },
        { emoji: '🍪👫', text: T('You have biscuits and your friend has none.', 'तुम्हारे पास बिस्कुट हैं और दोस्त के पास नहीं।'), choices: [
          C(T('Share with your friend', 'दोस्त के साथ बाँटो'), true, T('Sharing is caring! Now you both are happy.', 'बाँटने से प्यार बढ़ता है! अब तुम दोनों खुश हो।')),
          C(T('Eat them all quickly', 'जल्दी से सारे खा लो'), false, T('Your friend may feel left out. Sharing makes friendships strong.', 'दोस्त को बुरा लग सकता है। बाँटने से दोस्ती पक्की होती है।')) ] },
      ] },

    // ================================================================= SMART CHOICES
    { id: 'l-feelings', world: 'choices', type: 'situation', levels: [1, 2, 3], free: true, title: T('Handling big feelings', 'बड़ी भावनाओं को संभालना'), skills: ['emotions', 'values'],
      remember: T('All feelings are okay. When feelings are big: stop, breathe slowly, and talk to someone you trust.', 'हर भावना ठीक है। जब भावना बड़ी हो: रुको, धीरे-धीरे साँस लो, और किसी भरोसेमंद से बात करो।'),
      talk: { en: 'Ask: "What makes you angry? What helps you feel calm?" Practise 3 slow breaths together.', hi: 'पूछें: "तुम्हें गुस्सा कब आता है? शांत होने में क्या मदद करता है?" साथ में 3 गहरी साँसें लें।' },
      scenes: [
        { emoji: '😠🧱', text: T('Your little brother broke your block tower. You feel very angry.', 'छोटे भाई ने तुम्हारा ब्लॉक का टावर तोड़ दिया। तुम्हें बहुत गुस्सा आया।'), choices: [
          C(T('Stop, take 3 deep breaths, then tell him how you feel', 'रुको, 3 गहरी साँसें लो, फिर उसे बताओ कि तुम्हें कैसा लगा'), true, T('Excellent! Breathing calms our body so we can use kind words.', 'शानदार! गहरी साँस से शरीर शांत होता है और हम अच्छे शब्द बोल पाते हैं।')),
          C(T('Hit him', 'उसे मारो'), false, T('Hitting hurts. Anger is okay, but hurting is never okay.', 'मारने से चोट लगती है। गुस्सा ठीक है, पर किसी को चोट पहुँचाना कभी ठीक नहीं।')),
          C(T('Break his toy too', 'उसका खिलौना भी तोड़ दो'), false, T('That makes two sad children. Let’s build the tower again together.', 'इससे दोनों दुखी होंगे। चलो मिलकर टावर फिर से बनाते हैं।')) ] },
        { emoji: '😢🏏', text: T('You lost a game with your friends.', 'तुम दोस्तों के साथ खेल हार गए।'), choices: [
          C(T('Say "Well played!" and try again next time', 'कहो "अच्छा खेले!" और अगली बार फिर कोशिश करो'), true, T('That is a true sportsperson! Winning and losing are both part of playing.', 'यही सच्चा खिलाड़ी है! जीतना और हारना दोनों खेल का हिस्सा हैं।')),
          C(T('Cry and say you will never play again', 'रोओ और कहो कि अब कभी नहीं खेलोगे'), false, T('It’s okay to feel sad, but practice helps us get better.', 'दुख होना ठीक है, पर अभ्यास से हम बेहतर बनते हैं।')),
          C(T('Say the others cheated', 'कहो कि बाकी लोगों ने बेईमानी की'), false, T('Blaming others is unfair. Let’s be proud we tried our best.', 'दूसरों पर दोष लगाना ठीक नहीं। हमने पूरी कोशिश की, इस पर गर्व करो।')) ] },
        { emoji: '😨🌩️', text: T('There is a loud thunderstorm at night and you feel scared.', 'रात में ज़ोर से बादल गरज रहे हैं और तुम्हें डर लग रहा है।'), choices: [
          C(T('Go to Mummy or Papa and tell them you are scared', 'मम्मी-पापा के पास जाओ और बताओ कि डर लग रहा है'), true, T('Yes! Sharing our fears with family makes us feel safe.', 'हाँ! परिवार को डर बताने से हम सुरक्षित महसूस करते हैं।')),
          C(T('Hide and keep quiet all night', 'छिप जाओ और रात भर चुप रहो'), false, T('You don’t have to be scared alone. Family is there to help.', 'तुम्हें अकेले डरने की ज़रूरत नहीं। परिवार मदद के लिए है।')) ] },
      ] },
    { id: 'l-friends', world: 'choices', type: 'situation', levels: [1, 2, 3], title: T('Being a good friend', 'अच्छा दोस्त बनना'), skills: ['values', 'emotions'],
      remember: T('A good friend is kind, helps others, says sorry and stands up for what is right.', 'अच्छा दोस्त दयालु होता है, मदद करता है, माफ़ी माँगता है और सही के लिए खड़ा होता है।'),
      scenes: [
        { emoji: '🧒🤕', text: T('Your classmate falls down in the playground and is crying.', 'तुम्हारा सहपाठी खेल के मैदान में गिर गया और रो रहा है।'), choices: [
          C(T('Help them up and call the teacher', 'उसे उठाओ और टीचर को बुलाओ'), true, T('You are kind and brave! Helping others is a superpower.', 'तुम दयालु और बहादुर हो! दूसरों की मदद करना एक सुपरपावर है।')),
          C(T('Laugh at them', 'उस पर हँसो'), false, T('Laughing at someone who is hurt makes them feel worse. Let’s help.', 'चोट लगे व्यक्ति पर हँसने से उसे और बुरा लगता है। मदद करो।')),
          C(T('Keep playing', 'खेलते रहो'), false, T('Your friend needs help right now. Let’s stop and help.', 'दोस्त को अभी मदद चाहिए। रुककर मदद करो।')) ] },
        { emoji: '🧍‍♀️🏫', text: T('A new girl in class is sitting alone at lunch.', 'क्लास में नई लड़की लंच में अकेली बैठी है।'), choices: [
          C(T('Invite her to sit with you', 'उसे अपने साथ बैठने को बुलाओ'), true, T('How kind! Now she has a new friend – you!', 'कितना अच्छा! अब उसकी एक नई दोस्त है – तुम!')),
          C(T('Ignore her', 'उसे अनदेखा करो'), false, T('Being new can feel lonely. A smile can make her day.', 'नए होने पर अकेलापन लगता है। एक मुस्कान उसका दिन बना सकती है।')) ] },
        { emoji: '😤👦', text: T('Some children are teasing another child and calling him names.', 'कुछ बच्चे एक बच्चे को चिढ़ा रहे हैं और बुरे नाम ले रहे हैं।'), choices: [
          C(T('Say "Stop, that is not nice" and tell a teacher', 'कहो "रुको, यह अच्छा नहीं है" और टीचर को बताओ'), true, T('Brave choice! Telling a teacher about bullying is the right thing, not tattling.', 'बहादुरी का काम! बुलिंग के बारे में टीचर को बताना सही है, चुगली नहीं।')),
          C(T('Join in so they like you', 'उनके साथ मिलकर चिढ़ाओ ताकि वे तुम्हें पसंद करें'), false, T('Teasing hurts feelings. True friends don’t ask us to be unkind.', 'चिढ़ाने से दिल दुखता है। सच्चे दोस्त हमें बुरा बनने को नहीं कहते।')) ] },
        { emoji: '💔📕', text: T('You tore your friend’s book by mistake.', 'गलती से तुमने दोस्त की किताब फाड़ दी।'), choices: [
          C(T('Say sorry and help fix it with tape', 'माफ़ी माँगो और टेप से ठीक करने में मदद करो'), true, T('Saying sorry and fixing mistakes shows a big heart.', 'माफ़ी माँगना और गलती सुधारना बड़े दिल की निशानी है।')),
          C(T('Hide the book and say nothing', 'किताब छिपा दो और कुछ मत कहो'), false, T('Hiding makes things worse. Honesty keeps friendships strong.', 'छिपाने से बात बिगड़ती है। ईमानदारी से दोस्ती मज़बूत रहती है।')) ] },
      ] },
    { id: 'l-honesty', world: 'choices', type: 'situation', levels: [2, 3], title: T('Honesty', 'ईमानदारी'), skills: ['values'],
      remember: T('Always tell the truth, even when it is hard. Truth makes people trust us.', 'हमेशा सच बोलो, चाहे मुश्किल हो। सच से लोग हम पर भरोसा करते हैं।'),
      scenes: [
        { emoji: '🏺💥', text: T('You broke a glass while playing. Nobody saw it.', 'खेलते हुए तुमसे गिलास टूट गया। किसी ने नहीं देखा।'), choices: [
          C(T('Tell Mummy the truth and say sorry', 'मम्मी को सच बताओ और माफ़ी माँगो'), true, T('Truth takes courage. Mummy will be proud of your honesty – and keep you safe from the glass pieces.', 'सच बोलने में हिम्मत लगती है। मम्मी को तुम्हारी ईमानदारी पर गर्व होगा – और वे काँच से तुम्हें बचाएँगी।')),
          C(T('Say the cat did it', 'कहो कि बिल्ली ने तोड़ा'), false, T('Blaming someone else is not fair. Let’s tell the truth.', 'किसी और पर दोष डालना ठीक नहीं। सच बताओ।')) ] },
        { emoji: '💰🏫', text: T('You find ₹100 on the floor in school.', 'स्कूल में ज़मीन पर ₹100 मिले।'), choices: [
          C(T('Give it to the teacher', 'टीचर को दे दो'), true, T('Wonderful! Someone may be searching for it. Honesty is a great quality.', 'बहुत बढ़िया! कोई उन्हें ढूँढ रहा होगा। ईमानदारी सबसे अच्छा गुण है।')),
          C(T('Keep it secretly', 'चुपचाप रख लो'), false, T('It belongs to someone else. Let’s return it.', 'यह किसी और का है। वापस करो।')) ] },
        { emoji: '📝😬', text: T('You did not finish your homework. The teacher asks why.', 'तुमने होमवर्क पूरा नहीं किया। टीचर पूछती हैं क्यों।'), choices: [
          C(T('Tell the truth and promise to finish it', 'सच बताओ और पूरा करने का वादा करो'), true, T('Honest and responsible! Teachers respect that.', 'ईमानदार और ज़िम्मेदार! टीचर इसकी कद्र करती हैं।')),
          C(T('Make up a story', 'कोई कहानी बना दो'), false, T('Lies can grow bigger. The truth is always better.', 'झूठ बढ़ता जाता है। सच हमेशा बेहतर है।')) ] },
      ] },
    { id: 'l-home-safety', world: 'choices', type: 'situation', levels: [1, 2], free: true, title: T('Safety at home', 'घर में सुरक्षा'), skills: ['safety'],
      remember: T('Hot, sharp, electric and medicines – we never touch them without a grown-up.', 'गर्म, धारदार, बिजली और दवाइयाँ – इन्हें कभी बड़ों के बिना नहीं छूते।'),
      scenes: [
        { emoji: '🍳🔥', text: T('A pan is on the stove and it smells nice.', 'गैस पर कड़ाही है और बहुत अच्छी खुशबू आ रही है।'), choices: [
          C(T('Stay away and ask a grown-up', 'दूर रहो और बड़ों से पूछो'), true, T('Right! Stoves and pans are very hot and can burn.', 'सही! गैस और बर्तन बहुत गर्म होते हैं, जल सकते हैं।')),
          C(T('Touch the pan', 'कड़ाही को छुओ'), false, T('Ouch! That can burn your hand. Always ask a grown-up.', 'आउच! हाथ जल सकता है। हमेशा बड़ों से पूछो।')) ] },
        { emoji: '🔌✋', text: T('You see an electric socket on the wall.', 'दीवार पर बिजली का सॉकेट है।'), choices: [
          C(T('Never put fingers or objects in it', 'उसमें कभी उँगली या कोई चीज़ मत डालो'), true, T('Correct! Electricity can give a dangerous shock.', 'सही! बिजली का करंट ख़तरनाक होता है।')),
          C(T('Poke it with a pencil', 'उसमें पेंसिल डालो'), false, T('Very dangerous! Electricity can hurt badly.', 'बहुत ख़तरनाक! करंट से गंभीर चोट लग सकती है।')) ] },
        { emoji: '💊🍬', text: T('You find colourful tablets that look like sweets.', 'तुम्हें रंग-बिरंगी गोलियाँ मिलीं जो टॉफ़ी जैसी दिखती हैं।'), choices: [
          C(T('Don’t eat them – give them to a grown-up', 'मत खाओ – बड़ों को दे दो'), true, T('Smart! Medicines can make us very sick if we take them without a doctor.', 'समझदार! बिना डॉक्टर के दवा खाने से बहुत बीमार हो सकते हैं।')),
          C(T('Taste one', 'एक चखकर देखो'), false, T('No! Medicines are not sweets. Only take them from a grown-up.', 'नहीं! दवा टॉफ़ी नहीं है। सिर्फ़ बड़ों से ही लो।')) ] },
      ] },
    { id: 'l-outside', world: 'choices', type: 'situation', levels: [1, 2, 3], title: T('Safety outside', 'बाहर सुरक्षा'), skills: ['safety'],
      remember: T('Learn your parent’s phone number. If you are lost, stay where you are and ask a police officer or a mother with children. In an emergency in India, call 112.', 'अपने माता-पिता का फ़ोन नंबर याद करो। खो जाओ तो वहीं रुको और पुलिस या बच्चों वाली किसी माँ से मदद माँगो। भारत में आपातकाल में 112 पर कॉल करो।'),
      talk: { en: 'Help your child memorise your phone number and practise saying it.', hi: 'बच्चे को अपना फ़ोन नंबर याद कराएँ और बोलने का अभ्यास कराएँ।' },
      scenes: [
        { emoji: '🛍️😟', text: T('You are in a busy market and can’t see your mother.', 'तुम भीड़ भरे बाज़ार में हो और मम्मी नहीं दिख रहीं।'), choices: [
          C(T('Stay where you are and ask a police officer or a shopkeeper for help', 'वहीं रुको और पुलिस या दुकानदार से मदद माँगो'), true, T('Exactly right! Staying in one place helps Mummy find you. Tell them her phone number.', 'बिल्कुल सही! एक जगह रुकने से मम्मी तुम्हें ढूँढ लेंगी। उन्हें मम्मी का फ़ोन नंबर बताओ।')),
          C(T('Run around searching everywhere', 'इधर-उधर भागकर ढूँढो'), false, T('Running around makes it harder to find you. Stay in one place.', 'भागने से तुम्हें ढूँढना मुश्किल हो जाता है। एक जगह रुको।')),
          C(T('Go home alone', 'अकेले घर चले जाओ'), false, T('Never walk off alone. Ask a safe grown-up for help.', 'कभी अकेले मत जाओ। किसी सुरक्षित बड़े से मदद माँगो।')) ] },
        { emoji: '🍭🧔', text: T('A stranger offers you chocolate and says, "Come with me, I know your Papa."', 'एक अनजान आदमी चॉकलेट देकर कहता है, "मेरे साथ चलो, मैं तुम्हारे पापा को जानता हूँ।"'), choices: [
          C(T('Say NO loudly, run to your parent or teacher and tell them', 'ज़ोर से "नहीं" कहो, माता-पिता या टीचर के पास भागो और बताओ'), true, T('Perfect! Never go anywhere with someone your parents didn’t tell you about.', 'बिल्कुल सही! जिसके बारे में माता-पिता ने न बताया हो, उसके साथ कभी मत जाओ।')),
          C(T('Take the chocolate and go', 'चॉकलेट लेकर चले जाओ'), false, T('No! We never take things from or go with strangers.', 'नहीं! अनजान लोगों से कुछ नहीं लेते और उनके साथ नहीं जाते।')) ] },
        { emoji: '🚦🚗', text: T('You need to cross the road.', 'तुम्हें सड़क पार करनी है।'), choices: [
          C(T('Hold a grown-up’s hand, look right, left, right, and use the zebra crossing', 'बड़े का हाथ पकड़ो, दाएँ-बाएँ-दाएँ देखो, ज़ेबरा क्रॉसिंग से पार करो'), true, T('Safe crossing! Red means stop, green means go.', 'सुरक्षित तरीका! लाल मतलब रुको, हरा मतलब चलो।')),
          C(T('Run across quickly', 'तेज़ी से भागकर पार करो'), false, T('Cars may not see you. Always stop, look and cross carefully.', 'गाड़ियाँ तुम्हें नहीं देख पाएँगी। रुको, देखो, ध्यान से पार करो।')) ] },
      ] },
    { id: 'l-body', world: 'choices', type: 'situation', levels: [2, 3], title: T('My body is mine', 'मेरा शरीर मेरा है'), skills: ['safety', 'emotions'],
      remember: T('Your body belongs to you. If any touch feels wrong: say NO, go away, and tell a grown-up you trust. It is never your fault.', 'तुम्हारा शरीर तुम्हारा है। कोई छुअन गलत लगे तो: "नहीं" कहो, वहाँ से जाओ, और किसी भरोसेमंद बड़े को बताओ। इसमें कभी तुम्हारी गलती नहीं होती।'),
      talk: { en: 'Name 3 trusted adults with your child. Tell them they can always talk to you, and that nobody should ask them to keep secrets about touching.', hi: 'बच्चे के साथ 3 भरोसेमंद बड़ों के नाम तय करें। उन्हें बताएँ कि वे हमेशा आपसे बात कर सकते हैं, और छुअन के बारे में कोई राज़ रखने को नहीं कहना चाहिए।' },
      scenes: [
        { emoji: '🤗🙅', text: T('A relative wants a hug, but today you don’t feel like hugging.', 'कोई रिश्तेदार गले लगाना चाहते हैं, पर आज तुम्हारा मन नहीं है।'), choices: [
          C(T('Say "Namaste!" or give a high-five instead', 'उसकी जगह "नमस्ते!" कहो या हाई-फ़ाइव दो'), true, T('That’s okay! You can show love in other ways. Your body, your choice.', 'यह ठीक है! प्यार दूसरे तरीकों से भी दिखा सकते हैं। तुम्हारा शरीर, तुम्हारी मर्ज़ी।')),
          C(T('Hug even though you don’t want to', 'मन न होने पर भी गले लगो'), false, T('You can always say no politely. A kind grown-up will understand.', 'तुम हमेशा विनम्रता से मना कर सकते हो। अच्छे बड़े समझेंगे।')) ] },
        { emoji: '🤫😟', text: T('Someone touches you in a way that feels uncomfortable and says, "Keep it a secret."', 'कोई तुम्हें ऐसे छूता है जो अच्छा नहीं लगता और कहता है, "किसी को मत बताना।"'), choices: [
          C(T('Say NO, move away and tell Mummy, Papa or a teacher', '"नहीं" कहो, दूर हटो और मम्मी, पापा या टीचर को बताओ'), true, T('Very brave and very right. Touching should never be a secret. You did nothing wrong.', 'बहुत बहादुर और बिल्कुल सही। छुअन कभी राज़ नहीं होनी चाहिए। तुमने कुछ गलत नहीं किया।')),
          C(T('Keep the secret', 'राज़ रखो'), false, T('Some secrets are not safe. Always tell a grown-up you trust.', 'कुछ राज़ सुरक्षित नहीं होते। हमेशा किसी भरोसेमंद बड़े को बताओ।')) ] },
      ] },
    { id: 'l-online', world: 'choices', type: 'situation', levels: [3], title: T('Safe on phones & internet', 'फ़ोन और इंटरनेट पर सुरक्षा'), skills: ['safety'],
      remember: T('Never share your name, address, school or photos online. If something online scares you, tell a grown-up.', 'ऑनलाइन कभी अपना नाम, पता, स्कूल या फ़ोटो साझा मत करो। कुछ डरावना दिखे तो बड़ों को बताओ।'),
      scenes: [
        { emoji: '💬📱', text: T('Someone you don’t know sends a message in a game asking for your address.', 'गेम में कोई अनजान व्यक्ति मैसेज करके तुम्हारा पता पूछता है।'), choices: [
          C(T('Don’t reply and show a parent', 'जवाब मत दो और माता-पिता को दिखाओ'), true, T('Smart! We never share personal details with strangers online.', 'समझदारी! ऑनलाइन अनजान लोगों को निजी जानकारी नहीं देते।')),
          C(T('Send your address', 'अपना पता भेज दो'), false, T('Never! Strangers online may not be who they say they are.', 'कभी नहीं! ऑनलाइन लोग वो नहीं होते जो वे बताते हैं।')) ] },
        { emoji: '🎮⏰', text: T('You have been playing on the phone for a long time and your eyes feel tired.', 'तुम बहुत देर से फ़ोन पर खेल रहे हो और आँखें थक गई हैं।'), choices: [
          C(T('Stop, rest your eyes and play outside', 'रुको, आँखों को आराम दो और बाहर खेलो'), true, T('Great choice! Our eyes and body need breaks and fresh air.', 'बढ़िया! आँखों और शरीर को आराम और ताज़ी हवा चाहिए।')),
          C(T('Keep playing until night', 'रात तक खेलते रहो'), false, T('Too much screen time is not good for our eyes and sleep.', 'ज़्यादा स्क्रीन देखना आँखों और नींद के लिए अच्छा नहीं।')) ] },
      ] },
  );
})();
