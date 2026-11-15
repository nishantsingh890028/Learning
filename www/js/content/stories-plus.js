/* More stories for life lessons: Panchatantra, Indian folk tales and fables (traditional, public domain), retold in our own words. */
(() => {
  'use strict';
  const T = (en, hi) => ({ en, hi });
  const S = (id, title, emoji, pages, moral, qs, levels = [1, 2, 3]) => window.CUR.push({
    id: `st-${id}`, world: 'stories', type: 'story', levels, free: true, title, emoji, skills: ['listening', 'values', 'reading'],
    pages: pages.map(([e, en, hi]) => ({ emoji: e, text: T(en, hi) })), moral: T(...moral), remember: T(...moral),
    questions: qs.map(([q, opts, answer]) => ({ q: T(...q), options: opts.map((o) => T(...o)), answer })),
  });
  const P = (en, hi) => T(`Panchatantra: ${en}`, `पंचतंत्र: ${hi}`);

  // ================================================================ PANCHATANTRA
  S('tortoise', P('The Talkative Tortoise', 'बातूनी कछुआ'), '🐢', [
    ['🐢', 'A tortoise lived in a lake with two geese, his best friends. He loved to talk and talk.', 'एक झील में एक कछुआ अपने दो हंस दोस्तों के साथ रहता था। उसे बहुत बातें करना पसंद था।'],
    ['☀️', 'One summer the lake dried up. The geese said, "Hold this stick in your mouth. We will fly you to a new lake. But do NOT open your mouth!"', 'एक गर्मी में झील सूख गई। हंसों ने कहा, "यह डंडी मुँह में पकड़ो। हम तुम्हें उड़ाकर नई झील ले चलेंगे। पर मुँह मत खोलना!"'],
    ['🧒', 'As they flew over a village, children shouted, "Look, a flying tortoise!"', 'जब वे गाँव के ऊपर से उड़े, बच्चे चिल्लाए, "देखो, उड़ता कछुआ!"'],
    ['💥', 'The tortoise could not stay quiet. He opened his mouth to reply – and fell down! Luckily he landed in a haystack.', 'कछुआ चुप न रह सका। जवाब देने के लिए उसने मुँह खोला – और नीचे गिर पड़ा! किस्मत से वह भूसे के ढेर पर गिरा।'],
  ], ['Think before you speak. Sometimes it is wise to stay quiet.', 'बोलने से पहले सोचो। कभी-कभी चुप रहना ही समझदारी है।'], [[['Why did the tortoise fall?', 'कछुआ क्यों गिरा?'], [['He opened his mouth to talk', 'उसने बोलने के लिए मुँह खोला'], ['The stick broke', 'डंडी टूट गई']], 0]]);
  S('bluejackal', P('The Blue Jackal', 'नीला सियार'), '🦊', [
    ['🦊', 'A hungry jackal ran into a village. Dogs chased him and he fell into a tub of blue dye.', 'एक भूखा सियार गाँव में घुस आया। कुत्तों ने पीछा किया और वह नीले रंग के टब में गिर गया।'],
    ['🔵', 'He came out bright blue! Back in the forest, the animals were scared. "Who is this strange creature?"', 'वह चमकीला नीला होकर निकला! जंगल में जानवर डर गए। "यह अजीब जीव कौन है?"'],
    ['👑', 'The jackal lied, "God has sent me to be your king!" The animals believed him and served him.', 'सियार ने झूठ बोला, "भगवान ने मुझे तुम्हारा राजा बनाकर भेजा है!" जानवरों ने मान लिया और उसकी सेवा करने लगे।'],
    ['🌙', 'One night other jackals howled "Hoo-hoo!" He could not stop himself and howled too. Everyone knew the truth, and he had to run away.', 'एक रात दूसरे सियार "हुआ-हुआ" करने लगे। वह खुद को रोक न सका और वह भी चिल्लाया। सबको सच पता चल गया और उसे भागना पड़ा।'],
  ], ['Be yourself. Lies are found out in the end.', 'जैसे हो वैसे रहो। झूठ आखिर पकड़ा ही जाता है।'], [[['How did the animals find out the truth?', 'जानवरों को सच कैसे पता चला?'], [['He howled like a jackal', 'वह सियार की तरह चिल्लाया'], ['The rain washed him', 'बारिश ने रंग धो दिया']], 0]]);
  S('crowsnake', P('The Crows and the Snake', 'कौए और साँप'), '🐦‍⬛', [
    ['🌳', 'Two crows had a nest in a tree. A wicked snake living below ate their eggs every year.', 'दो कौओं का पेड़ पर घोंसला था। नीचे रहने वाला एक दुष्ट साँप हर साल उनके अंडे खा जाता था।'],
    ['🦊', 'They asked their wise friend, the jackal. "Use your brain, not your beak," he said, and told them a plan.', 'उन्होंने अपने समझदार दोस्त सियार से पूछा। "चोंच से नहीं, दिमाग से काम लो," उसने कहा और एक तरकीब बताई।'],
    ['📿', 'The crow picked up a princess’s necklace near the palace and dropped it into the snake’s hole. The guards followed it.', 'कौए ने महल के पास से राजकुमारी का हार उठाया और साँप के बिल में गिरा दिया। सिपाही उसके पीछे-पीछे आए।'],
    ['🐣', 'The guards found the snake and took it far away to the forest. The crows lived happily and raised their chicks.', 'सिपाहियों ने साँप को पकड़कर दूर जंगल में छोड़ दिया। कौए खुशी से रहने लगे और उनके बच्चे बड़े हुए।'],
  ], ['Clever thinking can solve problems that strength cannot.', 'समझदारी से वह मुश्किल हल हो जाती है जो ताकत से नहीं होती।'], [[['Where did the crow drop the necklace?', 'कौए ने हार कहाँ गिराया?'], [['in the snake’s hole', 'साँप के बिल में'], ['in the river', 'नदी में']], 0]]);
  S('doves', P('The Doves and the Hunter', 'कबूतर और शिकारी'), '🕊️', [
    ['🕊️', 'A flock of doves saw rice grains in the forest and flew down to eat them.', 'कबूतरों के एक झुंड ने जंगल में चावल के दाने देखे और खाने के लिए नीचे उतर आए।'],
    ['🕸️', 'It was a hunter’s trap! A big net fell on them. The doves were scared and flapped in all directions.', 'यह शिकारी का जाल था! उन पर बड़ा जाल गिर पड़ा। कबूतर डरकर इधर-उधर फड़फड़ाने लगे।'],
    ['👑', 'Their wise king said, "Stop! If we all fly together, we can lift the net." One, two, three – they flew up together with the net!', 'उनके समझदार राजा ने कहा, "रुको! अगर सब एक साथ उड़ें, तो जाल उठा सकते हैं।" एक, दो, तीन – वे जाल समेत एक साथ उड़ गए!'],
    ['🐭', 'They flew to their friend the mouse, who cut the net with his teeth. All the doves were free.', 'वे अपने दोस्त चूहे के पास गए, जिसने दाँतों से जाल काट दिया। सारे कबूतर आज़ाद हो गए।'],
  ], ['Unity is strength. Together we can do what one alone cannot.', 'एकता में बल है। मिलकर हम वह कर सकते हैं जो अकेला नहीं कर सकता।'], [[['How did the doves escape?', 'कबूतर कैसे बचे?'], [['They flew up together', 'वे एक साथ उड़े'], ['The hunter let them go', 'शिकारी ने छोड़ दिया']], 0]]);
  S('elephantsmice', P('The Elephants and the Mice', 'हाथी और चूहे'), '🐘', [
    ['🐭', 'Many mice lived in an old village. Every day a herd of elephants walked through to reach the lake, and crushed many mice.', 'एक पुराने गाँव में बहुत से चूहे रहते थे। रोज़ हाथियों का झुंड झील तक जाते हुए वहाँ से गुज़रता और बहुत चूहे कुचले जाते।'],
    ['🙏', 'The mouse king politely asked the elephant king, "Please take another path. One day we may help you."', 'चूहों के राजा ने विनम्रता से हाथियों के राजा से कहा, "कृपया दूसरा रास्ता लीजिए। एक दिन हम आपकी मदद कर सकते हैं।"'],
    ['🕸️', 'The elephants agreed. Later, hunters trapped the elephants in strong nets.', 'हाथी मान गए। बाद में शिकारियों ने हाथियों को मज़बूत जालों में फँसा लिया।'],
    ['✂️', 'The mice came running and chewed all the ropes. The elephants were free and thanked their small friends.', 'चूहे दौड़कर आए और सारी रस्सियाँ कुतर डालीं। हाथी आज़ाद हो गए और अपने छोटे दोस्तों का धन्यवाद किया।'],
  ], ['Be kind to everyone – even the smallest friend can help you one day.', 'सबके साथ दया करो – सबसे छोटा दोस्त भी एक दिन मदद कर सकता है।'], [[['Who freed the elephants?', 'हाथियों को किसने छुड़ाया?'], [['the mice', 'चूहों ने'], ['the hunters', 'शिकारियों ने']], 0]]);
  S('wedge', P('The Monkey and the Wedge', 'बंदर और खूँटा'), '🐒', [
    ['🪵', 'Carpenters were splitting a big log. They put a wooden wedge in the crack and went for lunch.', 'बढ़ई एक बड़े लट्ठे को चीर रहे थे। उन्होंने दरार में लकड़ी का खूँटा फँसाया और खाना खाने चले गए।'],
    ['🐒', 'A naughty monkey came and sat on the log. "What is this?" he wondered, and pulled the wedge.', 'एक शरारती बंदर आया और लट्ठे पर बैठ गया। "यह क्या है?" उसने सोचा और खूँटा खींच दिया।'],
    ['😣', 'The wedge came out and the crack snapped shut – trapping his tail! He cried until the carpenters came back and helped him.', 'खूँटा निकलते ही दरार बंद हो गई – और उसकी पूँछ फँस गई! वह तब तक रोया जब तक बढ़ई लौटकर उसकी मदद न करें।'],
  ], ['Don’t meddle with things you don’t understand.', 'जिस चीज़ के बारे में न जानो, उससे छेड़छाड़ मत करो।'], [[['What happened when the monkey pulled the wedge?', 'खूँटा खींचने पर क्या हुआ?'], [['His tail got stuck', 'उसकी पूँछ फँस गई'], ['He found food', 'उसे खाना मिला']], 0]]);
  S('drum', P('The Jackal and the Drum', 'सियार और ढोल'), '🥁', [
    ['🦊', 'A hungry jackal heard a loud "DHUM! DHUM!" in the forest. He was very scared.', 'एक भूखे सियार ने जंगल में ज़ोर से "ढम! ढम!" सुना। वह बहुत डर गया।'],
    ['🤔', 'He wanted to run away. Then he thought, "Let me look carefully first."', 'वह भागना चाहता था। फिर उसने सोचा, "पहले ध्यान से देख लूँ।"'],
    ['🥁', 'It was only an old drum! When the wind blew, branches hit it and made the sound. The jackal laughed.', 'वह तो बस एक पुराना ढोल था! हवा चलने पर डालियाँ उससे टकराकर आवाज़ करती थीं। सियार हँस पड़ा।'],
  ], ['Don’t be afraid of what you don’t know – find out the truth.', 'अनजानी चीज़ से डरो मत – सच का पता लगाओ।'], [[['What was making the noise?', 'आवाज़ कौन कर रहा था?'], [['an old drum', 'एक पुराना ढोल'], ['a lion', 'एक शेर']], 0]]);
  S('dream', P('The Daydreamer and the Pot', 'शेखचिल्ली का सपना'), '🏺', [
    ['🏺', 'A poor man had a pot full of flour. He hung it above his bed and lay down to rest.', 'एक गरीब आदमी के पास आटे से भरा एक घड़ा था। उसने उसे बिस्तर के ऊपर टाँगा और आराम करने लेट गया।'],
    ['💭', 'He dreamed, "I’ll sell the flour, buy goats, then cows, then build a big house…"', 'वह सपने देखने लगा, "आटा बेचकर बकरियाँ खरीदूँगा, फिर गायें, फिर बड़ा घर बनाऊँगा…"'],
    ['🦶', '"…and if my son is naughty, I’ll kick like this!" He kicked his leg in the air – and hit the pot!', '"…और अगर मेरा बेटा शरारत करेगा, तो ऐसे लात मारूँगा!" उसने हवा में लात मारी – और घड़े से टकरा गई!'],
    ['💨', 'The pot broke and all the flour fell on him. His dream was gone.', 'घड़ा फूट गया और सारा आटा उस पर गिर पड़ा। उसका सपना भी चला गया।'],
  ], ['Dreams come true by working, not just by dreaming.', 'सपने मेहनत से पूरे होते हैं, सिर्फ़ सोचने से नहीं।'], [[['What did the man break?', 'आदमी ने क्या तोड़ दिया?'], [['the pot of flour', 'आटे का घड़ा'], ['his bed', 'अपना बिस्तर']], 0]]);
  S('scholars', P('The Lion That Came Back to Life', 'शेर को ज़िंदा करने वाले विद्वान'), '🦁', [
    ['📚', 'Four friends travelled together. Three had learned many books. The fourth had little learning but lots of common sense.', 'चार दोस्त साथ सफ़र कर रहे थे। तीन ने बहुत किताबें पढ़ी थीं। चौथा कम पढ़ा था पर बहुत समझदार था।'],
    ['🦴', 'In the forest they found the bones of a lion. "Let’s show our magic!" said the three learned friends.', 'जंगल में उन्हें एक शेर की हड्डियाँ मिलीं। "चलो अपना जादू दिखाएँ!" तीनों पढ़े-लिखे दोस्तों ने कहा।'],
    ['🌳', 'The fourth said, "Stop! A live lion will eat us!" They did not listen. So he climbed a tall tree.', 'चौथे ने कहा, "रुको! ज़िंदा शेर हमें खा जाएगा!" उन्होंने नहीं सुना। तो वह एक ऊँचे पेड़ पर चढ़ गया।'],
    ['🏃', 'They brought the lion to life – and it roared and chased them away! Only the wise friend in the tree was safe.', 'उन्होंने शेर को ज़िंदा कर दिया – वह दहाड़ा और उनके पीछे दौड़ पड़ा! सिर्फ़ पेड़ पर बैठा समझदार दोस्त सुरक्षित रहा।'],
  ], ['Knowledge is good, but common sense is even more important.', 'ज्ञान अच्छा है, पर समझदारी उससे भी ज़्यादा ज़रूरी है।'], [[['Who was safe in the end?', 'आखिर में कौन सुरक्षित रहा?'], [['the friend with common sense', 'समझदार दोस्त'], ['the lion', 'शेर']], 0]], [2, 3]);
  S('mongoose', P('The Loyal Mongoose', 'वफ़ादार नेवला'), '🦦', [
    ['👩‍🍼', 'A woman had a baby and a pet mongoose who loved the baby. One day she went to fetch water and left the mongoose with the baby.', 'एक औरत के पास एक बच्चा और एक पालतू नेवला था जो बच्चे से प्यार करता था। एक दिन वह पानी लेने गई और नेवले को बच्चे के पास छोड़ गई।'],
    ['🐍', 'A snake crept towards the cradle. The brave mongoose fought the snake and chased it away from the baby.', 'एक साँप पालने की ओर रेंगा। बहादुर नेवले ने साँप से लड़ाई की और उसे बच्चे से दूर भगा दिया।'],
    ['😨', 'The woman came back and saw the mongoose’s messy face. Without thinking, she thought it had hurt her baby and shouted at it.', 'औरत लौटी और नेवले का बिखरा चेहरा देखा। बिना सोचे उसने समझा कि उसने बच्चे को चोट पहुँचाई है और उस पर चिल्लाई।'],
    ['👶', 'Then she saw her baby sleeping safely, and the snake’s marks on the floor. She hugged the mongoose and said sorry.', 'फिर उसने बच्चे को सुरक्षित सोते देखा, और फ़र्श पर साँप के निशान। उसने नेवले को गले लगाया और माफ़ी माँगी।'],
  ], ['Never judge in a hurry. Find out the full story first.', 'जल्दबाज़ी में फ़ैसला मत करो। पहले पूरी बात जानो।'], [[['What did the mongoose really do?', 'नेवले ने असल में क्या किया?'], [['saved the baby from a snake', 'बच्चे को साँप से बचाया'], ['woke the baby', 'बच्चे को जगाया']], 0]]);
  S('sparrow', P('The Sparrow and the Elephant', 'गौरैया और हाथी'), '🐦', [
    ['🐘', 'A proud elephant shook a tree for fun and broke a sparrow’s nest. Her eggs fell down.', 'एक घमंडी हाथी ने मज़े के लिए पेड़ हिलाया और गौरैया का घोंसला तोड़ दिया। उसके अंडे गिर गए।'],
    ['🐝', 'The little sparrow asked her friends for help: a woodpecker, a bee and a frog.', 'नन्ही गौरैया ने अपने दोस्तों से मदद माँगी: कठफोड़वा, मधुमक्खी और मेंढक।'],
    ['🎶', 'The bee buzzed in the elephant’s ear, the woodpecker tapped near his eyes, and he could not see the way.', 'मधुमक्खी हाथी के कान में भिनभिनाई, कठफोड़वा उसकी आँखों के पास ठक-ठक करने लगा, और उसे रास्ता नहीं दिखा।'],
    ['🐸', 'The frog croaked near a muddy pit. The elephant walked into the mud and got stuck. He learned to respect even small creatures.', 'मेंढक एक कीचड़ भरे गड्ढे के पास टर्राया। हाथी कीचड़ में फँस गया। उसने छोटे जीवों का सम्मान करना सीख लिया।'],
  ], ['Small friends working together can be very strong. Never bully the weak.', 'छोटे दोस्त मिलकर बहुत ताकतवर होते हैं। कमज़ोर को कभी मत सताओ।'], [[['Who helped the sparrow?', 'गौरैया की मदद किसने की?'], [['a bee, a woodpecker and a frog', 'मधुमक्खी, कठफोड़वा और मेंढक'], ['a lion', 'शेर']], 0]]);

  // ================================================================ INDIAN TALES
  S('shravan', T('Shravan Kumar', 'श्रवण कुमार'), '🧺', [
    ['👴👵', 'Long ago, Shravan Kumar lived with his old parents. They could not see and could not walk far.', 'बहुत पहले श्रवण कुमार अपने बूढ़े माता-पिता के साथ रहते थे। वे देख नहीं सकते थे और ज़्यादा चल नहीं सकते थे।'],
    ['🧺', 'His parents wished to visit holy places. Shravan made two baskets on a pole and carried them on his shoulders.', 'उनके माता-पिता तीर्थ यात्रा करना चाहते थे। श्रवण ने एक बाँस पर दो टोकरियाँ बाँधीं और उन्हें कंधे पर उठा लिया।'],
    ['🚶', 'He walked through forests and villages, giving them water, food and rest, without ever complaining.', 'वह जंगलों और गाँवों से होकर चला, उन्हें पानी, खाना और आराम देता रहा, कभी शिकायत नहीं की।'],
    ['🌟', 'Even today, people call a child who loves and serves his parents "a Shravan Kumar".', 'आज भी जो बच्चा अपने माता-पिता से प्यार करता और सेवा करता है, उसे "श्रवण कुमार" कहते हैं।'],
  ], ['Love, respect and care for your parents and elders.', 'अपने माता-पिता और बड़ों से प्यार करो, उनका सम्मान और सेवा करो।'], [[['How did Shravan carry his parents?', 'श्रवण ने माता-पिता को कैसे उठाया?'], [['in two baskets on a pole', 'बाँस पर दो टोकरियों में'], ['in a car', 'गाड़ी में']], 0]]);
  S('tenali', T('Tenali Raman and the Thieves', 'तेनाली रामा और चोर'), '🪣', [
    ['🌙', 'One night Tenali Raman saw thieves hiding in his garden. He thought of a trick.', 'एक रात तेनाली रामा ने अपने बगीचे में चोरों को छिपे देखा। उन्होंने एक तरकीब सोची।'],
    ['🗣️', 'He said loudly to his wife, "Let’s hide our gold box in the well – thieves are about!" Then he dropped a box of stones into the well.', 'उन्होंने पत्नी से ज़ोर से कहा, "चलो सोने का बक्सा कुएँ में छिपा दें – चोर घूम रहे हैं!" फिर पत्थरों का बक्सा कुएँ में डाल दिया।'],
    ['🪣', 'The thieves spent the whole night pulling water out of the well to find the box. The water went into Tenali’s garden!', 'चोर सारी रात बक्सा ढूँढने के लिए कुएँ से पानी निकालते रहे। वह पानी तेनाली के बगीचे में बहता गया!'],
    ['😄', 'In the morning, Tenali said, "Thank you for watering my plants!" The thieves ran away and the guards caught them.', 'सुबह तेनाली ने कहा, "मेरे पौधों को पानी देने के लिए धन्यवाद!" चोर भागे और सिपाहियों ने उन्हें पकड़ लिया।'],
  ], ['A calm, clever mind is the best protection.', 'शांत और समझदार दिमाग सबसे अच्छी सुरक्षा है।'], [[['What did the thieves do all night?', 'चोरों ने सारी रात क्या किया?'], [['pulled water from the well', 'कुएँ से पानी निकाला'], ['slept', 'सोए']], 0]]);
  S('crows', T('Birbal Counts the Crows', 'बीरबल और कौओं की गिनती'), '🐦‍⬛', [
    ['🤴', 'King Akbar asked, "Birbal, how many crows are there in our city?"', 'राजा अकबर ने पूछा, "बीरबल, हमारे शहर में कितने कौए हैं?"'],
    ['🤔', 'Birbal thought for a moment and said, "Ninety-five thousand, four hundred and sixty-three, Your Majesty!"', 'बीरबल ने थोड़ा सोचा और कहा, "पंचानवे हज़ार चार सौ तिरसठ, जहाँपनाह!"'],
    ['❓', '"What if there are more?" asked Akbar. "Then their relatives are visiting!" said Birbal. "And if fewer?" "Then some have gone to visit relatives!"', '"अगर ज़्यादा हुए तो?" अकबर ने पूछा। "तो उनके रिश्तेदार मिलने आए होंगे!" बीरबल बोले। "और कम हुए तो?" "तो कुछ रिश्तेदारों से मिलने गए होंगे!"'],
    ['😂', 'Akbar laughed and gave Birbal a reward for his quick thinking.', 'अकबर हँस पड़े और बीरबल को उनकी हाज़िरजवाबी के लिए इनाम दिया।'],
  ], ['Quick, cheerful thinking helps us handle tricky questions.', 'तेज़ और खुशमिज़ाज सोच मुश्किल सवालों को आसान बना देती है।'], [[['Who asked the question?', 'सवाल किसने पूछा?'], [['King Akbar', 'राजा अकबर'], ['a crow', 'एक कौए ने']], 0]]);
  S('tailor', T('The Elephant and the Tailor', 'हाथी और दर्ज़ी'), '🐘', [
    ['🐘', 'Every day a temple elephant passed a tailor’s shop. The kind tailor gave him a banana.', 'रोज़ मंदिर का एक हाथी दर्ज़ी की दुकान के पास से गुज़रता था। दयालु दर्ज़ी उसे केला देता था।'],
    ['🪡', 'One day the tailor was in a bad mood. Instead of a banana, he poked the elephant’s trunk with a needle.', 'एक दिन दर्ज़ी का मूड खराब था। केले के बजाय उसने हाथी की सूँड में सुई चुभा दी।'],
    ['💦', 'The elephant went to the river, filled his trunk with muddy water, and sprayed it all over the tailor’s clothes.', 'हाथी नदी पर गया, सूँड में कीचड़ वाला पानी भरा और दर्ज़ी के सारे कपड़ों पर छिड़क दिया।'],
    ['🙏', 'The tailor understood his mistake. He said sorry and was kind to the elephant again.', 'दर्ज़ी को अपनी गलती समझ आई। उसने माफ़ी माँगी और फिर से हाथी के साथ अच्छा व्यवहार करने लगा।'],
  ], ['Treat others the way you want to be treated.', 'दूसरों के साथ वैसा ही व्यवहार करो जैसा तुम अपने लिए चाहते हो।'], [[['What did the tailor do wrong?', 'दर्ज़ी ने क्या गलत किया?'], [['poked the elephant with a needle', 'हाथी को सुई चुभाई'], ['gave him a banana', 'केला दिया']], 0]]);

  // ================================================================ FABLES
  S('ant', T('The Ant and the Grasshopper', 'चींटी और टिड्डा'), '🐜', [
    ['☀️', 'All summer the ant worked hard, carrying grains to her home. The grasshopper just sang and played.', 'पूरी गर्मी चींटी मेहनत करके दाने घर ले जाती रही। टिड्डा बस गाता और खेलता रहा।'],
    ['🎻', '"Why work so hard? Come and play!" laughed the grasshopper. "I am saving food for winter," said the ant.', '"इतनी मेहनत क्यों? आओ खेलो!" टिड्डा हँसा। "मैं सर्दी के लिए खाना जमा कर रही हूँ," चींटी बोली।'],
    ['❄️', 'Winter came. The grasshopper was cold and hungry. The ant was warm with plenty of food.', 'सर्दी आई। टिड्डा ठंडा और भूखा था। चींटी के पास गरमाहट और ढेर सारा खाना था।'],
    ['🤝', 'The kind ant shared some food, and the grasshopper promised to work hard next summer.', 'दयालु चींटी ने कुछ खाना बाँटा, और टिड्डे ने अगली गर्मी मेहनत करने का वादा किया।'],
  ], ['Work hard today and plan for tomorrow.', 'आज मेहनत करो और कल की तैयारी रखो।'], [[['What did the ant do in summer?', 'चींटी ने गर्मी में क्या किया?'], [['saved food', 'खाना जमा किया'], ['sang songs', 'गाने गाए']], 0]]);
  S('wolf', T('The Boy Who Cried Wolf', 'भेड़िया आया!'), '🐺', [
    ['🐑', 'A shepherd boy looked after sheep near a village. He felt bored.', 'एक चरवाहा लड़का गाँव के पास भेड़ें चराता था। वह ऊब गया।'],
    ['😆', 'For fun he shouted, "Wolf! Wolf!" The villagers ran to help – but there was no wolf. He laughed. He did it again the next day.', 'मज़े के लिए वह चिल्लाया, "भेड़िया! भेड़िया!" गाँव वाले मदद को दौड़े – पर कोई भेड़िया नहीं था। वह हँसा। अगले दिन उसने फिर ऐसा किया।'],
    ['🐺', 'Then a real wolf came! "Wolf! Please help!" he cried. But nobody came – they thought he was lying again.', 'फिर सच में भेड़िया आ गया! "भेड़िया! बचाओ!" वह चिल्लाया। पर कोई नहीं आया – सबने सोचा वह फिर झूठ बोल रहा है।'],
    ['😢', 'The wolf scared away the sheep. The boy learned an important lesson.', 'भेड़िये ने भेड़ों को भगा दिया। लड़के ने एक बड़ा सबक सीखा।'],
  ], ['If you tell lies, people won’t believe you even when you tell the truth.', 'झूठ बोलोगे तो सच बोलने पर भी कोई भरोसा नहीं करेगा।'], [[['Why did nobody come the last time?', 'आखिरी बार कोई क्यों नहीं आया?'], [['They thought he was lying', 'उन्होंने सोचा वह झूठ बोल रहा है'], ['They were asleep', 'वे सो रहे थे']], 0]]);
  S('grapes', T('The Fox and the Grapes', 'लोमड़ी और अंगूर'), '🍇', [
    ['🦊', 'A hungry fox saw juicy grapes hanging high on a vine.', 'एक भूखी लोमड़ी ने बेल पर ऊँचे लटके रसीले अंगूर देखे।'],
    ['🦘', 'She jumped and jumped, but could not reach them.', 'वह कूदी और कूदी, पर उन तक नहीं पहुँच सकी।'],
    ['😤', 'At last she walked away saying, "Those grapes are sour anyway!"', 'आखिर में वह यह कहकर चली गई, "वैसे भी अंगूर खट्टे हैं!"'],
  ], ['Don’t make excuses – it’s OK to say "I couldn’t do it yet" and try another way.', 'बहाने मत बनाओ – कहना ठीक है "मैं अभी नहीं कर पाया" और दूसरा तरीका आज़माओ।'], [[['Were the grapes really sour?', 'क्या अंगूर सच में खट्टे थे?'], [['No, the fox made an excuse', 'नहीं, लोमड़ी ने बहाना बनाया'], ['Yes', 'हाँ']], 0]]);
  S('dog', T('The Dog and His Reflection', 'कुत्ता और परछाईं'), '🐕', [
    ['🦴', 'A dog found a big bone and was carrying it home across a bridge.', 'एक कुत्ते को एक बड़ी हड्डी मिली और वह उसे पुल पार करके घर ले जा रहा था।'],
    ['🌊', 'He looked into the water and saw another dog with another bone! It was his own reflection.', 'उसने पानी में देखा तो एक और कुत्ता दूसरी हड्डी के साथ दिखा! वह उसकी अपनी परछाईं थी।'],
    ['😲', 'Greedy, he barked to grab that bone too – and his own bone fell into the river. Now he had nothing.', 'लालच में उसने वह हड्डी भी छीनने को भौंका – और उसकी अपनी हड्डी नदी में गिर गई। अब उसके पास कुछ नहीं था।'],
  ], ['Be happy with what you have. Greed makes us lose.', 'जो है उसमें खुश रहो। लालच से नुकसान होता है।'], [[['What did the dog see in the water?', 'कुत्ते ने पानी में क्या देखा?'], [['his own reflection', 'अपनी परछाईं'], ['a fish', 'एक मछली']], 0]]);
  S('antdove', T('The Ant and the Dove', 'चींटी और कबूतर'), '🕊️', [
    ['🐜', 'A thirsty ant fell into a river and was being carried away.', 'एक प्यासी चींटी नदी में गिर गई और बहने लगी।'],
    ['🍃', 'A dove saw her and dropped a leaf. The ant climbed on and floated safely to the bank.', 'एक कबूतर ने उसे देखा और एक पत्ता गिरा दिया। चींटी उस पर चढ़कर सुरक्षित किनारे पहुँच गई।'],
    ['🏹', 'Later a hunter aimed his arrow at the dove. The ant bit his foot – "Ouch!" – and the arrow missed.', 'बाद में एक शिकारी ने कबूतर पर तीर ताना। चींटी ने उसके पैर में काटा – "आउच!" – और तीर चूक गया।'],
    ['💛', 'The dove flew away safely. The two became friends forever.', 'कबूतर सुरक्षित उड़ गया। दोनों हमेशा के लिए दोस्त बन गए।'],
  ], ['One good turn deserves another. Help others and they will help you.', 'भलाई का बदला भलाई। दूसरों की मदद करोगे तो वे भी करेंगे।'], [[['How did the ant help the dove?', 'चींटी ने कबूतर की मदद कैसे की?'], [['bit the hunter’s foot', 'शिकारी के पैर में काटा'], ['brought water', 'पानी लाई']], 0]]);
  S('midas', T('The Golden Touch', 'सोने का स्पर्श'), '👑', [
    ['👑', 'King Midas loved gold more than anything. He wished, "Let everything I touch turn to gold!" His wish came true.', 'राजा मिडास को सोना सबसे ज़्यादा प्यारा था। उसने इच्छा की, "मैं जो भी छुऊँ वह सोना बन जाए!" उसकी इच्छा पूरी हो गई।'],
    ['🍎', 'He touched an apple – gold! His bread – gold! He could not eat anything.', 'उसने सेब छुआ – सोना! रोटी – सोना! वह कुछ खा नहीं सका।'],
    ['👧', 'His little daughter ran to hug him – and she turned into a golden statue! The king cried.', 'उसकी छोटी बेटी गले लगने दौड़ी – और वह सोने की मूर्ति बन गई! राजा रो पड़ा।'],
    ['💧', 'He begged for the wish to be taken back. When everything became normal, he hugged his daughter and was happy with simple things.', 'उसने इच्छा वापस लेने की विनती की। सब कुछ ठीक होने पर उसने बेटी को गले लगाया और साधारण चीज़ों में खुश रहने लगा।'],
  ], ['Love and family are worth more than gold. Don’t be greedy.', 'प्यार और परिवार सोने से ज़्यादा कीमती हैं। लालच मत करो।'], [[['What happened to his daughter?', 'उसकी बेटी को क्या हुआ?'], [['she turned to gold', 'वह सोने की बन गई'], ['she ran away', 'वह भाग गई']], 0]], [2, 3]);
})();
