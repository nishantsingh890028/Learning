/* POEMS (sing-along + repeat after me) and STORIES (moral stories, retold in our own words).
   Traditional rhymes are public domain. Poems marked "original" were written for Khel Khel Mein.
   To use a real recorded song, put an mp3 in www/audio/ and set audio: 'audio/<file>.mp3'. */
window.CUR = window.CUR || [];
(() => {
  const T = (en, hi) => ({ en, hi });
  const P = (id, levels, en, hi, emoji, tune, lines, extra = {}) => ({ id, world: 'poems', type: 'poem', levels, title: T(en, hi), emoji, tune, lines, skills: ['music', 'speaking', 'memory', 'listening'], ...extra });
  const S = (id, levels, en, hi, pages, moral, questions, extra = {}) => ({ id, world: 'stories', type: 'story', levels, title: T(en, hi), pages, moral, questions, skills: ['listening', 'reading', 'values'], ...extra });
  const pg = (emoji, en, hi) => ({ emoji, text: T(en, hi) });
  const qn = (en, hi, opts, answer = 0) => ({ q: T(en, hi), options: opts.map(([e, h]) => T(e, h)), answer });

  window.CUR.push(
    // ================================================================= POEMS – English (traditional)
    P('p-twinkle', [1, 2], 'Twinkle, Twinkle, Little Star', 'ट्विंकल ट्विंकल लिटिल स्टार', '⭐', 'twinkle',
      ['Twinkle, twinkle, little star,', 'How I wonder what you are!', 'Up above the world so high,', 'Like a diamond in the sky.', 'Twinkle, twinkle, little star,', 'How I wonder what you are!'],
      { free: true, credit: 'Traditional (Jane Taylor, 1806)', meaning: T('A child looks at a shining star and wonders what it is.', 'एक बच्चा चमकते तारे को देखकर सोचता है कि वह क्या है।'), talk: T('Go outside tonight and count the stars together while singing the poem.', 'आज रात बाहर जाकर तारे गिनें और साथ में कविता गाएँ।') }),
    P('p-baa', [1, 2], 'Baa, Baa, Black Sheep', 'बा बा ब्लैक शीप', '🐑', 'twinkle',
      ['Baa, baa, black sheep,', 'Have you any wool?', 'Yes sir, yes sir,', 'Three bags full.', 'One for the master,', 'One for the dame,', 'And one for the little boy', 'Who lives down the lane.'], { free: true, credit: 'Traditional' }),
    P('p-humpty', [1, 2], 'Humpty Dumpty', 'हम्प्टी डम्प्टी', '🥚', 'happy',
      ['Humpty Dumpty sat on a wall,', 'Humpty Dumpty had a great fall.', 'All the king’s horses and all the king’s men', 'Couldn’t put Humpty together again.'], { credit: 'Traditional' }),
    P('p-rain', [1, 2], 'Rain, Rain, Go Away', 'रेन रेन गो अवे', '🌧️', 'gentle',
      ['Rain, rain, go away,', 'Come again another day.', 'Little children want to play,', 'Rain, rain, go away.'], { credit: 'Traditional' }),
    P('p-jack', [1, 2, 3], 'Jack and Jill', 'जैक एंड जिल', '⛰️', 'happy',
      ['Jack and Jill went up the hill', 'To fetch a pail of water.', 'Jack fell down and broke his crown,', 'And Jill came tumbling after.'], { credit: 'Traditional' }),
    // English – original
    P('p-wash', [1, 2], 'Wash Your Hands', 'हाथ धोओ (अंग्रेज़ी गीत)', '🧼', 'march',
      ['Wash, wash, wash your hands,', 'Soap and water, clean and bright.', 'Before you eat and after play,', 'Wash your hands the proper way!'], { credit: 'Original – Khel Khel Mein', meaning: T('We wash our hands with soap before eating and after playing.', 'खाने से पहले और खेलने के बाद साबुन से हाथ धोते हैं।') }),
    P('p-thanks', [1, 2, 3], 'The Thank You Song', 'धन्यवाद गीत', '🙏', 'gentle',
      ['Thank you, Mummy, thank you, Papa,', 'Thank you, sun and rain.', 'Thank you, friends, for playing with me,', 'Let’s all play again!'], { credit: 'Original – Khel Khel Mein' }),
    P('p-earth', [2, 3], 'Little Hands, Big Earth', 'छोटे हाथ, बड़ी धरती', '🌍', 'march',
      ['Plant a tree and watch it grow,', 'Save the water, drop by drop.', 'Switch the lights off when you go,', 'Little hands can make it stop –', 'Stop the waste and stop the smoke,', 'Keep our Earth a happy home!'], { credit: 'Original – Khel Khel Mein' }),

    // ================================================================= POEMS – Hindi
    P('p-machli', [1, 2], 'Machhli Jal Ki Rani Hai', 'मछली जल की रानी है', '🐟', 'happy',
      ['मछली जल की रानी है,', 'जीवन उसका पानी है।', 'हाथ लगाओ डर जाएगी,', 'बाहर निकालो मर जाएगी।'],
      { free: true, credit: 'पारंपरिक बाल-गीत (Traditional)', meaning: T('A fish lives in water; water is its life.', 'मछली पानी में रहती है; पानी ही उसका जीवन है।') }),
    P('p-subah', [1, 2, 3], 'Subah Savere', 'सुबह सवेरे', '🌅', 'march',
      ['सुबह सवेरे जल्दी उठना,', 'मम्मी-पापा को नमस्ते करना।', 'ब्रश करना, फिर नहाना,', 'साफ़-सुथरे स्कूल को जाना।'],
      { free: true, credit: 'मौलिक कविता – खेल खेल में (Original)', meaning: T('Wake up early, greet your parents, brush, bathe and go to school neat and clean.', 'जल्दी उठो, माता-पिता को नमस्ते करो, ब्रश करो, नहाओ और साफ़-सुथरे होकर स्कूल जाओ।'), talk: T('Make a morning chart with your child using the steps in this poem.', 'इस कविता के कदमों से बच्चे के साथ सुबह का चार्ट बनाएँ।') }),
    P('p-namaste', [1, 2], 'Namaste Geet', 'नमस्ते गीत', '🙏', 'gentle',
      ['दोनों हाथ जोड़कर हम,', 'करते सबको नमस्ते।', 'दादा-दादी, नाना-नानी,', 'सबके चेहरे हँसते।'], { credit: 'मौलिक कविता – खेल खेल में (Original)' }),
    P('p-ginti', [1], 'Ginti Geet', 'गिनती गीत', '🔢', 'happy',
      ['एक, दो, तीन, चार,', 'आओ खेलें मिलकर यार।', 'पाँच, छह, सात, आठ,', 'पढ़ लो अपना पाठ।', 'नौ और दस,', 'खेल हुआ बस!'], { credit: 'मौलिक कविता – खेल खेल में (Original)' }),
    P('p-ped', [2, 3], 'Ped Hamare Dost', 'पेड़ हमारे दोस्त', '🌳', 'gentle',
      ['पेड़ हमारे सच्चे साथी,', 'देते छाया, फल और हवा।', 'आओ मिलकर पेड़ लगाएँ,', 'धरती को दें हरी दवा।'], { credit: 'मौलिक कविता – खेल खेल में (Original)' }),
    P('p-bharat', [2, 3], 'Mera Bharat', 'मेरा भारत', '🇮🇳', 'march',
      ['मेरा भारत देश महान,', 'ऊँची है इसकी शान।', 'रंग-बिरंगे लोग यहाँ के,', 'सबका एक ही गान।', 'मिलजुल कर हम रहते हैं,', 'यही है इसकी पहचान।'], { credit: 'मौलिक कविता – खेल खेल में (Original)' }),

    // ================================================================= STORIES (retold)
    S('st-crow', [1, 2, 3], 'The Thirsty Crow', 'प्यासा कौआ', [
      pg('☀️🐦', 'It was a very hot day. A crow was flying and he was very thirsty.', 'बहुत गर्मी का दिन था। एक कौआ उड़ रहा था और उसे बहुत प्यास लगी थी।'),
      pg('🏺', 'He found a pot with a little water at the bottom. His beak could not reach it.', 'उसे एक घड़ा मिला जिसकी तली में थोड़ा-सा पानी था। उसकी चोंच पानी तक नहीं पहुँची।'),
      pg('🤔🪨', 'The crow did not give up. He thought hard and saw some small pebbles nearby.', 'कौए ने हार नहीं मानी। उसने सोचा और पास में कुछ छोटे कंकड़ देखे।'),
      pg('🪨🏺', 'One by one, he dropped the pebbles into the pot. The water came up, up, up!', 'उसने एक-एक करके कंकड़ घड़े में डाले। पानी ऊपर, ऊपर, ऊपर आ गया!'),
      pg('😊💧', 'The crow drank the water happily and flew away.', 'कौए ने खुशी-खुशी पानी पिया और उड़ गया।'),
    ], T('Think hard and never give up. Where there is a will, there is a way.', 'सोचो और कभी हार मत मानो। जहाँ चाह, वहाँ राह।'), [
      qn('Why was the crow sad?', 'कौआ क्यों परेशान था?', [['He was thirsty', 'उसे प्यास लगी थी'], ['He was hungry', 'उसे भूख लगी थी'], ['He was lost', 'वह खो गया था']]),
      qn('What did the crow put in the pot?', 'कौए ने घड़े में क्या डाला?', [['Pebbles', 'कंकड़'], ['Leaves', 'पत्ते'], ['Bread', 'रोटी']]),
      qn('What does this story teach us?', 'यह कहानी क्या सिखाती है?', [['Use your brain and keep trying', 'दिमाग लगाओ और कोशिश करते रहो'], ['Give up quickly', 'जल्दी हार मान लो'], ['Always cry', 'हमेशा रोओ']]),
    ], { free: true, talk: T('Ask: "When did you not give up even though something was hard?"', 'पूछें: "कब तुमने मुश्किल होने पर भी हार नहीं मानी?"') }),
    S('st-lion-mouse', [1, 2, 3], 'The Lion and the Mouse', 'शेर और चूहा', [
      pg('🦁😴', 'A big lion was sleeping in the forest. A little mouse ran over his nose!', 'जंगल में एक बड़ा शेर सो रहा था। एक छोटा चूहा उसकी नाक पर से दौड़ गया!'),
      pg('🦁🐭', 'The lion woke up and caught the mouse. "Please let me go," said the mouse. "One day I will help you."', 'शेर जागा और उसने चूहे को पकड़ लिया। चूहे ने कहा, "मुझे छोड़ दीजिए। एक दिन मैं आपकी मदद करूँगा।"'),
      pg('🦁😄', 'The lion laughed. "How can a tiny mouse help me?" But he let the mouse go.', 'शेर हँसा, "इतना छोटा चूहा मेरी क्या मदद करेगा?" फिर भी उसने चूहे को छोड़ दिया।'),
      pg('🕸️🦁', 'Some days later, the lion was caught in a hunter’s net. He roared for help.', 'कुछ दिनों बाद शेर शिकारी के जाल में फँस गया। वह मदद के लिए दहाड़ा।'),
      pg('🐭✂️', 'The mouse came running and cut the net with his sharp teeth. The lion was free!', 'चूहा दौड़कर आया और अपने तेज़ दाँतों से जाल काट दिया। शेर आज़ाद हो गया!'),
      pg('🦁🤝🐭', 'From that day, the lion and the mouse were best friends.', 'उस दिन से शेर और चूहा पक्के दोस्त बन गए।'),
    ], T('Be kind to everyone. No one is too small to help.', 'सबके प्रति दयालु रहो। कोई भी मदद करने के लिए छोटा नहीं होता।'), [
      qn('Who caught the mouse?', 'चूहे को किसने पकड़ा?', [['The lion', 'शेर ने'], ['A cat', 'बिल्ली ने'], ['A hunter', 'शिकारी ने']]),
      qn('How did the mouse save the lion?', 'चूहे ने शेर को कैसे बचाया?', [['He cut the net', 'उसने जाल काटा'], ['He called the police', 'उसने पुलिस बुलाई'], ['He roared', 'वह दहाड़ा']]),
      qn('What is the lesson?', 'सीख क्या है?', [['Small friends can be a big help', 'छोटे दोस्त भी बड़ी मदद कर सकते हैं'], ['Big animals are always right', 'बड़े जानवर हमेशा सही होते हैं'], ['Never help anyone', 'कभी किसी की मदद मत करो']]),
    ]),
    S('st-hare', [1, 2, 3], 'The Hare and the Tortoise', 'खरगोश और कछुआ', [
      pg('🐇💨', 'A hare was very proud. "I am the fastest!" he said, and laughed at the slow tortoise.', 'एक खरगोश को बहुत घमंड था। "मैं सबसे तेज़ हूँ!" कहकर वह धीमे कछुए पर हँसता था।'),
      pg('🐢🏁', 'The tortoise said calmly, "Let us have a race." All the animals came to watch.', 'कछुए ने शांति से कहा, "चलो दौड़ लगाते हैं।" सब जानवर देखने आए।'),
      pg('🐇🌳😴', 'The hare ran far ahead. "The tortoise is so slow, I will take a nap," he thought.', 'खरगोश बहुत आगे निकल गया। "कछुआ तो बहुत धीमा है, थोड़ा सो लेता हूँ," उसने सोचा।'),
      pg('🐢➡️', 'The tortoise kept walking, slowly and steadily, without stopping.', 'कछुआ बिना रुके, धीरे-धीरे लगातार चलता रहा।'),
      pg('🐢🏆', 'When the hare woke up, the tortoise had already crossed the finish line!', 'जब खरगोश जागा, कछुआ पहले ही जीत की रेखा पार कर चुका था!'),
    ], T('Slow and steady wins the race. Never be proud; keep working hard.', 'धीरे-धीरे पर लगातार चलने वाला जीतता है। घमंड मत करो; मेहनत करते रहो।'), [
      qn('Who won the race?', 'दौड़ कौन जीता?', [['The tortoise', 'कछुआ'], ['The hare', 'खरगोश'], ['Nobody', 'कोई नहीं']]),
      qn('Why did the hare lose?', 'खरगोश क्यों हारा?', [['He slept on the way', 'वह रास्ते में सो गया'], ['He was too slow', 'वह बहुत धीमा था'], ['He got hurt', 'उसे चोट लगी']]),
      qn('What should we learn?', 'हमें क्या सीखना चाहिए?', [['Keep trying and don’t be proud', 'लगातार कोशिश करो और घमंड मत करो'], ['Always sleep in a race', 'दौड़ में हमेशा सो जाओ'], ['Laugh at others', 'दूसरों पर हँसो']]),
    ]),
    S('st-monkey-croc', [2, 3], 'The Monkey and the Crocodile', 'बंदर और मगरमच्छ', [
      pg('🐒🌳🐊', 'A monkey lived on a jamun tree by a river. He became friends with a crocodile and gave him sweet jamuns every day.', 'नदी किनारे जामुन के पेड़ पर एक बंदर रहता था। उसकी मगरमच्छ से दोस्ती हो गई और वह उसे रोज़ मीठे जामुन देता था।'),
      pg('🐊👩', 'The crocodile’s wife said, "If the jamuns are so sweet, the monkey’s heart must be sweeter. Bring it to me!"', 'मगरमच्छ की पत्नी बोली, "जामुन इतने मीठे हैं, तो बंदर का दिल और मीठा होगा। उसे मेरे लिए लाओ!"'),
      pg('🐊🐒🌊', 'The crocodile invited the monkey for dinner and carried him on his back across the river. In the middle, he told the truth.', 'मगरमच्छ ने बंदर को खाने पर बुलाया और पीठ पर बिठाकर नदी में ले गया। बीच में उसने सच बता दिया।'),
      pg('🐒💡', 'The clever monkey stayed calm. "Oh! I left my heart on the tree. Take me back and I will bring it."', 'चतुर बंदर शांत रहा। "अरे! मेरा दिल तो पेड़ पर रह गया। मुझे वापस ले चलो, मैं ले आता हूँ।"'),
      pg('🐒🌳😄', 'As soon as they reached the bank, the monkey jumped up the tree. "A heart is never kept on a tree! Our friendship is over."', 'किनारे पहुँचते ही बंदर पेड़ पर कूद गया। "दिल कोई पेड़ पर रखता है क्या! हमारी दोस्ती ख़त्म।"'),
    ], T('Stay calm and think in danger. Choose friends who are true to you.', 'मुसीबत में शांत रहकर सोचो। ऐसे दोस्त चुनो जो सच्चे हों।'), [
      qn('What did the monkey give the crocodile?', 'बंदर मगरमच्छ को क्या देता था?', [['Jamuns', 'जामुन'], ['Bananas', 'केले'], ['Fish', 'मछली']]),
      qn('How did the monkey save himself?', 'बंदर ने खुद को कैसे बचाया?', [['He used his brain and stayed calm', 'दिमाग लगाया और शांत रहा'], ['He fought', 'वह लड़ा'], ['He cried', 'वह रोया']]),
      qn('Was the crocodile a true friend?', 'क्या मगरमच्छ सच्चा दोस्त था?', [['No', 'नहीं'], ['Yes', 'हाँ'], ['Maybe', 'शायद']]),
    ], { credit: 'Panchatantra (retold)' }),
    S('st-woodcutter', [2, 3], 'The Honest Woodcutter', 'ईमानदार लकड़हारा', [
      pg('🪓🌳', 'A poor woodcutter was cutting wood near a river. Suddenly, his axe slipped and fell into the water.', 'एक गरीब लकड़हारा नदी किनारे लकड़ी काट रहा था। अचानक उसकी कुल्हाड़ी फिसलकर पानी में गिर गई।'),
      pg('😢🌊', 'He sat down and cried. "That was my only axe! How will I feed my family?"', 'वह बैठकर रोने लगा, "मेरे पास यही एक कुल्हाड़ी थी! अब परिवार का पेट कैसे भरूँगा?"'),
      pg('✨🥇', 'A water fairy appeared with a golden axe. "Is this yours?" "No," said the woodcutter.', 'एक जलपरी सोने की कुल्हाड़ी लेकर आई। "क्या यह तुम्हारी है?" लकड़हारे ने कहा, "नहीं।"'),
      pg('✨🥈', 'She brought a silver axe. "Is this yours?" "No," he said again.', 'फिर वह चाँदी की कुल्हाड़ी लाई। "क्या यह तुम्हारी है?" उसने फिर कहा, "नहीं।"'),
      pg('🪓😊', 'Then she brought his old iron axe. "Yes! That is mine!" he said happily.', 'फिर वह उसकी पुरानी लोहे की कुल्हाड़ी लाई। "हाँ! यही मेरी है!" उसने खुश होकर कहा।'),
      pg('🎁', 'The fairy was so pleased with his honesty that she gave him all three axes.', 'जलपरी उसकी ईमानदारी से इतनी खुश हुई कि उसने तीनों कुल्हाड़ियाँ उसे दे दीं।'),
    ], T('Honesty is the best policy.', 'ईमानदारी सबसे अच्छी नीति है।'), [
      qn('What fell into the river?', 'नदी में क्या गिरा?', [['An axe', 'कुल्हाड़ी'], ['A ball', 'गेंद'], ['A shoe', 'जूता']]),
      qn('Did he say the golden axe was his?', 'क्या उसने सोने की कुल्हाड़ी को अपना बताया?', [['No, he told the truth', 'नहीं, उसने सच कहा'], ['Yes', 'हाँ'], ['He took it and ran', 'वह लेकर भाग गया']]),
      qn('What did he get for being honest?', 'ईमानदारी के बदले उसे क्या मिला?', [['All three axes', 'तीनों कुल्हाड़ियाँ'], ['Nothing', 'कुछ नहीं'], ['A punishment', 'सज़ा']]),
    ]),
    S('st-sticks', [2, 3], 'Unity is Strength', 'एकता में बल', [
      pg('👴👦👦👦', 'An old farmer had four sons who always fought with each other. He was very worried.', 'एक बूढ़े किसान के चार बेटे थे जो हमेशा आपस में लड़ते थे। वह बहुत परेशान था।'),
      pg('🪵🪵🪵', 'One day he gave them a bundle of sticks. "Break it," he said. Each son tried, but no one could.', 'एक दिन उसने उन्हें लकड़ियों का गट्ठर दिया। "इसे तोड़ो," उसने कहा। सबने कोशिश की, पर कोई नहीं तोड़ पाया।'),
      pg('🪵💥', 'Then he untied the bundle and gave each son one stick. They broke them easily.', 'फिर उसने गट्ठर खोलकर हर बेटे को एक-एक लकड़ी दी। उन्होंने आसानी से तोड़ दीं।'),
      pg('👴💡', '"Alone, you are like one stick – easy to break. Together, you are strong like the bundle."', '"अकेले तुम एक लकड़ी जैसे हो – आसानी से टूट जाओगे। मिलकर रहोगे तो गट्ठर की तरह मज़बूत रहोगे।"'),
      pg('🤝', 'The sons understood. From that day, they lived and worked together happily.', 'बेटे समझ गए। उस दिन से वे मिलजुल कर खुशी से रहने लगे।'),
    ], T('Together we are strong. Unity is strength.', 'मिलकर रहने में ही ताकत है। एकता में बल है।'), [
      qn('Could the sons break the bundle?', 'क्या बेटे गट्ठर तोड़ पाए?', [['No', 'नहीं'], ['Yes, easily', 'हाँ, आसानी से'], ['Only one son', 'सिर्फ़ एक बेटा']]),
      qn('What does the bundle show?', 'गट्ठर क्या दिखाता है?', [['Being together makes us strong', 'साथ रहने से ताकत आती है'], ['Sticks are heavy', 'लकड़ियाँ भारी हैं'], ['Fighting is good', 'लड़ना अच्छा है']]),
    ]),
    S('st-rabbit-lion', [2, 3], 'The Clever Rabbit', 'चतुर खरगोश', [
      pg('🦁🌲', 'A cruel lion named Bhasuraka ate many animals every day. The animals made a deal: one animal would go to him each day.', 'भासुरक नाम का एक क्रूर शेर रोज़ कई जानवर मार डालता था। जानवरों ने तय किया: रोज़ एक जानवर उसके पास जाएगा।'),
      pg('🐇🤔', 'One day, it was a small rabbit’s turn. He walked very slowly, thinking of a plan.', 'एक दिन एक छोटे खरगोश की बारी आई। वह योजना सोचते हुए बहुत धीरे-धीरे चला।'),
      pg('🦁😡🐇', 'The lion roared, "Why are you late?" The rabbit said, "Another lion stopped me. He says he is the king of this forest!"', 'शेर दहाड़ा, "इतनी देर क्यों?" खरगोश बोला, "एक दूसरे शेर ने रोक लिया। वह कहता है वही इस जंगल का राजा है!"'),
      pg('🦁🕳️', 'The angry lion said, "Show me!" The rabbit took him to a deep well. The lion looked in and saw his own reflection.', 'गुस्से में शेर बोला, "दिखाओ!" खरगोश उसे एक गहरे कुएँ पर ले गया। शेर ने अंदर झाँका तो उसे अपनी ही परछाईं दिखी।'),
      pg('💦🐇🎉', 'Thinking it was another lion, he jumped in to fight – and never came out. The forest was safe again!', 'दूसरा शेर समझकर वह लड़ने कुएँ में कूद गया – और कभी बाहर नहीं निकला। जंगल फिर से सुरक्षित हो गया!'),
    ], T('Intelligence is stronger than strength. Think calmly to solve big problems.', 'बुद्धि बल से बड़ी है। बड़ी मुश्किल को शांति से सोचकर हल करो।'), [
      qn('Why was the rabbit late?', 'खरगोश देर से क्यों आया?', [['He was making a plan', 'वह योजना बना रहा था'], ['He was sleeping', 'वह सो रहा था'], ['He got lost', 'वह खो गया था']]),
      qn('What did the lion see in the well?', 'शेर ने कुएँ में क्या देखा?', [['His own reflection', 'अपनी परछाईं'], ['A real lion', 'असली शेर'], ['Fish', 'मछली']]),
    ], { credit: 'Panchatantra (retold)' }),
  );
})();
