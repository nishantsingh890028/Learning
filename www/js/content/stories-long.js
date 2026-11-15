/* Long illustrated stories (v3.3). Traditional tales (Panchatantra, Jataka, Aesop, Indian folk tales – public domain),
   retold in our own words. Each page: [backdrop, actors, English, Hindi].
   Actors: space-separated emoji; first is the main character. Prefix ^ = flying, @ = up in the tree, ~ = in the water,
   < = facing the other way, - = small, + = big. A face/feeling emoji after the first becomes a thought bubble. */
(() => {
  'use strict';
  const T = (en, hi) => ({ en, hi });
  const STRIP = /^[\^@~<+\-]+/;
  const LONG = window.KKM_LONG = (id, title, emoji, pages, moral, qs, levels) => {
    const data = {
      pages: pages.map(([bg, actors, en, hi]) => ({ emoji: actors.split(' ')[0].replace(STRIP, ''), text: T(en, hi), scene: { bg, actors } })),
      moral: T(...moral), remember: T(...moral),
      questions: qs.map(([q, opts, answer]) => ({ q: T(...q), options: opts.map((o) => T(...o)), answer })),
    };
    const old = window.CUR.find((a) => a.id === `st-${id}`);
    if (old) { Object.assign(old, data); if (title) { old.title = T(...title); } return; }
    window.CUR.push({ id: `st-${id}`, world: 'stories', type: 'story', levels: levels || [1, 2, 3], free: true, title: T(...title), emoji, skills: ['listening', 'values', 'reading'], ...data });
  };

  // ================================================================ 1. The Talkative Tortoise
  LONG('tortoise', null, '🐢', [
    ['lake', '🐢 🦢 🦢', `In a big blue lake lived a tortoise named Kambu. His best friends were two kind geese.`, `एक बड़ी नीली झील में कम्बु नाम का एक कछुआ रहता था। दो दयालु हंस उसके सबसे अच्छे दोस्त थे।`],
    ['lake', '🐢 💬 🦢', `Kambu loved to talk. He talked in the morning and he talked at night. The geese often said, “Kambu, think before you speak!”`, `कम्बु को बातें करना बहुत पसंद था। वह सुबह भी बोलता, रात को भी। हंस अक्सर कहते, “कम्बु, बोलने से पहले सोचो!”`],
    ['desert', '🐢 😟 🦢 🦢', `One year, no rain came. The hot sun shone every day, and slowly the lake dried up. Only mud was left.`, `एक साल बारिश नहीं हुई। रोज़ तेज़ धूप निकलती, और धीरे-धीरे झील सूख गई। बस कीचड़ बचा।`],
    ['desert', '🦢 💭 🐢 🦢', `“We must fly to a new lake,” said the geese. “But Kambu cannot fly. What shall we do?”`, `हंस बोले, “हमें नई झील पर उड़कर जाना होगा। पर कम्बु तो उड़ नहीं सकता। अब क्या करें?”`],
    ['desert', '🦢 💡 🪵 🦢', `Then they had an idea. “We will hold a stick at both ends. You hold the middle with your mouth, and we will carry you!”`, `फिर उन्हें एक तरकीब सूझी। “हम डंडी के दोनों सिरे पकड़ेंगे। तुम बीच से मुँह से पकड़ना, और हम तुम्हें ले उड़ेंगे!”`],
    ['sky', '^🦢 ^🐢 ^🦢', `“But do NOT open your mouth, whatever happens!” said the geese. Kambu nodded. Up, up they flew, over the trees.`, `“पर चाहे कुछ भी हो, मुँह मत खोलना!” हंसों ने कहा। कम्बु ने सिर हिलाया। वे ऊपर, और ऊपर, पेड़ों के ऊपर उड़ चले।`],
    ['village', '🧒 👧 👦 ^🐢', `They flew over a village. The children looked up and laughed, “Look! The geese are carrying a tortoise!”`, `वे एक गाँव के ऊपर से उड़े। बच्चों ने ऊपर देखा और हँसे, “देखो! हंस एक कछुए को ले जा रहे हैं!”`],
    ['sky', '^🐢 😠 ^🦢 ^🦢', `Kambu felt cross. He wanted to shout, “Mind your own business!” He forgot his promise and opened his mouth…`, `कम्बु को गुस्सा आया। वह चिल्लाना चाहता था, “अपना काम करो!” वह वादा भूल गया और उसने मुँह खोल दिया…`],
    ['field', '🐢 💥 🌾', `Down, down he fell! Luckily he landed in a soft pile of hay. He was not hurt, but he was very scared.`, `वह नीचे, और नीचे गिरा! किस्मत से वह भूसे के नरम ढेर पर गिरा। उसे चोट नहीं लगी, पर वह बहुत डर गया।`],
    ['lake', '🐢 😊 🦢 🦢', `The geese came down and took him to the new lake. Kambu said, “I am sorry. From today, I will think before I speak.”`, `हंस नीचे आए और उसे नई झील ले गए। कम्बु बोला, “मुझे माफ़ करो। आज से मैं बोलने से पहले सोचूँगा।”`],
  ], ['Think before you speak. Sometimes the wise thing is to stay quiet.', 'बोलने से पहले सोचो। कभी-कभी चुप रहना ही समझदारी है।'], [
    [['Why did the lake dry up?', 'झील क्यों सूख गई?'], [['No rain came', 'बारिश नहीं हुई'], ['The geese drank it', 'हंस पी गए'], ['Children took the water', 'बच्चे पानी ले गए']], 0],
    [['How did the tortoise fly?', 'कछुआ कैसे उड़ा?'], [['He held a stick in his mouth', 'उसने मुँह से डंडी पकड़ी'], ['He had wings', 'उसके पंख थे'], ['He sat on a kite', 'वह पतंग पर बैठा']], 0],
    [['Why did he fall?', 'वह क्यों गिरा?'], [['He opened his mouth to talk', 'उसने बोलने के लिए मुँह खोला'], ['The stick broke', 'डंडी टूट गई'], ['He fell asleep', 'वह सो गया']], 0],
    [['What should we do before we speak?', 'बोलने से पहले क्या करना चाहिए?'], [['Think', 'सोचना'], ['Shout', 'चिल्लाना'], ['Run', 'भागना']], 0],
  ]);

  // ================================================================ 2. The Blue Jackal
  LONG('bluejackal', null, '🦊', [
    ['forest', '🦊 😋', `A hungry jackal named Chandarav lived in a forest. One night he went to a town to look for food.`, `एक जंगल में चंडरव नाम का एक भूखा सियार रहता था। एक रात वह खाना ढूँढने शहर गया।`],
    ['night', '🦊 🐕 🐕', `The town dogs saw him and barked, “Woof! Woof!” They chased him through the dark streets.`, `शहर के कुत्तों ने उसे देखा और भौंके, “भौं! भौं!” वे अँधेरी गलियों में उसके पीछे दौड़े।`],
    ['home', '🦊 😱 🪣', `To hide, the jackal jumped into a big tub. It was full of blue dye from a cloth-dyer’s house!`, `छिपने के लिए सियार एक बड़े टब में कूद गया। उसमें कपड़े रँगने वाले का नीला रंग भरा था!`],
    ['forest', '🦊 💙', `When he came out, he was bright blue from nose to tail! He ran back to the forest.`, `जब वह बाहर निकला, तो नाक से पूँछ तक चमकीला नीला हो गया था! वह भागकर जंगल लौटा।`],
    ['forest', '🦁 😮 🐘 🐯', `The animals had never seen a blue animal. “Who are you?” asked the lion, the tiger and the elephant, a little afraid.`, `जानवरों ने कभी नीला जानवर नहीं देखा था। शेर, बाघ और हाथी ने थोड़ा डरकर पूछा, “तुम कौन हो?”`],
    ['forest', '🦊 😏 🦁 🐘', `The jackal had a naughty idea. “God has sent me to be your king!” he said. The animals believed him.`, `सियार को एक शरारती बात सूझी। “भगवान ने मुझे तुम्हारा राजा बनाकर भेजा है!” उसने कहा। जानवरों ने मान लिया।`],
    ['palace', '🦊 👑 🐯 🐘', `He became king. He sat on a high rock and gave orders. But he chased away all the other jackals, so no one would know his secret.`, `वह राजा बन गया। ऊँची चट्टान पर बैठकर हुक्म देता। पर उसने बाकी सब सियारों को भगा दिया, ताकि कोई उसका राज़ न जान सके।`],
    ['night', '🦊 🌕 🦊 🦊', `One full-moon night, the other jackals howled in the distance: “Hoo-oooo!”`, `एक पूनम की रात दूर से बाकी सियारों ने हुआँ-हुआँ किया: “हू-ऊऊऊ!”`],
    ['night', '🦊 😮 🦁', `The blue jackal could not stop himself. He lifted his head and howled too: “Hoo-oooo!”`, `नीला सियार खुद को रोक न सका। उसने भी सिर उठाकर हुआँ-हुआँ किया: “हू-ऊऊऊ!”`],
    ['forest', '🦁 😠 🐯 🦊', `Now everyone knew he was just a jackal who had lied. The angry animals chased him far away from the forest.`, `अब सबको पता चल गया कि वह बस एक झूठा सियार है। गुस्साए जानवरों ने उसे जंगल से दूर भगा दिया।`],
  ], ['Be yourself. A lie is found out one day.', 'जैसे हो वैसे रहो। झूठ एक दिन पकड़ा ही जाता है।'], [
    [['How did the jackal become blue?', 'सियार नीला कैसे हुआ?'], [['He fell into a tub of blue dye', 'वह नीले रंग के टब में गिरा'], ['He ate blueberries', 'उसने नीले फल खाए'], ['It rained blue', 'नीली बारिश हुई']], 0],
    [['What lie did he tell?', 'उसने क्या झूठ बोला?'], [['That God sent him to be king', 'कि भगवान ने उसे राजा बनाकर भेजा'], ['That he was a lion', 'कि वह शेर है'], ['That he could fly', 'कि वह उड़ सकता है']], 0],
    [['How was his secret found out?', 'उसका राज़ कैसे खुला?'], [['He howled like a jackal', 'उसने सियार की तरह हुआँ-हुआँ किया'], ['He washed his fur', 'उसने बाल धोए'], ['A bird told everyone', 'चिड़िया ने सबको बताया']], 0],
    [['What is the lesson?', 'सीख क्या है?'], [['Be yourself – do not lie', 'जैसे हो वैसे रहो – झूठ मत बोलो'], ['Always wear blue', 'हमेशा नीला पहनो'], ['Never go to town', 'कभी शहर मत जाओ']], 0],
  ]);

  // ================================================================ 3. The Crows and the Snake
  LONG('crowsnake', null, '🐦', [
    ['tree', '🐦 @🐦 🥚', `Two crows built a nest high up in a big banyan tree. They were very happy there.`, `दो कौओं ने एक बड़े बरगद के पेड़ पर ऊँचा घोंसला बनाया। वे वहाँ बहुत खुश थे।`],
    ['tree', '🐍 😈 @🥚', `But at the foot of the tree lived a wicked black snake. Every year, he crept up and ate the crows’ eggs.`, `पर पेड़ की जड़ में एक दुष्ट काला साँप रहता था। हर साल वह चुपके से ऊपर चढ़कर कौओं के अंडे खा जाता।`],
    ['tree', '🐦 😢 🐦', `The mother crow cried and cried. “We are small, and he is big. How can we stop him?”`, `माँ कौआ रोती रही। “हम छोटे हैं, वह बड़ा है। हम उसे कैसे रोकें?”`],
    ['forest', '🦊 💡 🐦', `They went to their wise friend, the jackal. He thought and said, “Don’t fight with strength. Use your brain!”`, `वे अपने समझदार दोस्त सियार के पास गए। उसने सोचकर कहा, “ताकत से मत लड़ो। दिमाग से काम लो!”`],
    ['lake', '👸 📿 ~🛁', `Next morning, the queen came to the lake for a bath. She took off her shining gold necklace and kept it on the bank.`, `अगली सुबह रानी झील पर नहाने आई। उसने अपना चमकता सोने का हार उतारकर किनारे पर रखा।`],
    ['lake', '^🐦 📿 💂', `Swoosh! The crow picked up the necklace in her beak and flew away slowly, so the guards could see her.`, `झपाक! कौए ने हार चोंच में उठाया और धीरे-धीरे उड़ी, ताकि पहरेदार उसे देख सकें।`],
    ['tree', '💂 💂 ^🐦', `“Follow that crow!” shouted the guards. They ran after her with big sticks.`, `“उस कौए का पीछा करो!” पहरेदार चिल्लाए। वे बड़े-बड़े डंडे लेकर उसके पीछे भागे।`],
    ['tree', '🐦 📿 🕳️', `The clever crow dropped the necklace right into the snake’s hole under the tree.`, `चतुर कौए ने हार सीधे पेड़ के नीचे साँप के बिल में गिरा दिया।`],
    ['tree', '💂 🐍 😱', `The guards poked the hole to get the necklace back. Out came the angry snake! The guards chased him far, far away.`, `हार निकालने के लिए पहरेदारों ने बिल में डंडे डाले। गुस्से में साँप बाहर निकला! पहरेदारों ने उसे बहुत दूर भगा दिया।`],
    ['tree', '🐦 🐣 🐣 😊', `The snake never came back. That spring, the crows’ eggs hatched safely, and their babies grew up happy.`, `साँप फिर कभी नहीं लौटा। उस बसंत कौओं के अंडों से सुरक्षित बच्चे निकले, और वे खुशी से बड़े हुए।`],
  ], ['A clever plan can beat a big bully.', 'समझदारी से बड़े से बड़े दादा को भी हराया जा सकता है।'], [
    [['Who ate the crows’ eggs?', 'कौओं के अंडे कौन खाता था?'], [['A snake', 'साँप'], ['A cat', 'बिल्ली'], ['A jackal', 'सियार']], 0],
    [['What did the crow take?', 'कौए ने क्या उठाया?'], [['The queen’s necklace', 'रानी का हार'], ['A mango', 'आम'], ['A shoe', 'जूता']], 0],
    [['Where did she drop it?', 'उसने वह कहाँ गिराया?'], [['In the snake’s hole', 'साँप के बिल में'], ['In the lake', 'झील में'], ['On the palace', 'महल पर']], 0],
    [['How did the crows win?', 'कौए कैसे जीते?'], [['With a clever plan', 'चतुर योजना से'], ['By fighting', 'लड़कर'], ['By crying', 'रोकर']], 0],
  ]);

  // ================================================================ 4. The Doves and the Hunter
  LONG('doves', null, '🕊️', [
    ['forest', '🕊️ 🕊️ 🕊️', `A big flock of doves lived in a forest. Their wise old king was called Chitragreev.`, `एक जंगल में कबूतरों का बड़ा झुंड रहता था। उनके समझदार बूढ़े राजा का नाम चित्रग्रीव था।`],
    ['forest', '🧔 🕸️ 🌾', `One day a hunter came. He spread a net on the ground and scattered rice grains on it. Then he hid behind a bush.`, `एक दिन एक शिकारी आया। उसने ज़मीन पर जाल बिछाया और उस पर चावल के दाने बिखेर दिए। फिर वह झाड़ी के पीछे छिप गया।`],
    ['sky', '^🕊️ ^🕊️ ^🕊️ 😋', `The doves flew over and saw the rice. “Food! Let’s eat!” they cried. The king said, “Wait! Rice in a forest is strange.”`, `कबूतरों ने ऊपर से चावल देखे। “खाना! चलो खाएँ!” वे बोले। राजा ने कहा, “रुको! जंगल में चावल अजीब बात है।”`],
    ['forest', '🕊️ 🕸️ 🕊️ 😱', `But the young doves did not listen. They flew down to eat – and the net trapped them all!`, `पर छोटे कबूतरों ने नहीं सुना। वे खाने उतरे – और सब के सब जाल में फँस गए!`],
    ['forest', '🕊️ 😢 🕊️ 🕊️', `They flapped and pushed, each one alone. But the net only got tighter. “Help! Help!”`, `वे अकेले-अकेले फड़फड़ाए और ज़ोर लगाया। पर जाल और कसता गया। “बचाओ! बचाओ!”`],
    ['forest', '🕊️ 💡 🧔', `The king said calmly, “Stop! Alone we are weak. Together we are strong. On ‘three’, all fly up at the same time!”`, `राजा ने शांति से कहा, “रुको! अकेले हम कमज़ोर हैं। साथ मिलकर ताकतवर। ‘तीन’ बोलते ही सब एक साथ उड़ो!”`],
    ['sky', '^🕊️ ^🕸️ ^🕊️', `“One, two, THREE!” All the doves flew up together – and the whole net went up into the sky with them!`, `“एक, दो, तीन!” सारे कबूतर एक साथ उड़े – और पूरा जाल उनके साथ आसमान में उड़ गया!`],
    ['forest', '🧔 😮 ^🕸️', `The hunter came running. He looked up with his mouth open. “Doves flying away with my net?!”`, `शिकारी भागता हुआ आया। उसने मुँह खोलकर ऊपर देखा। “कबूतर मेरा जाल लेकर उड़ रहे हैं?!”`],
    ['meadow', '🐭 🕊️ 🕊️', `The king led them to his friend Hiranyak the mouse. The mouse nibbled the net with his sharp teeth, string by string.`, `राजा उन्हें अपने दोस्त हिरण्यक चूहे के पास ले गया। चूहे ने अपने तेज़ दाँतों से जाल का एक-एक धागा कुतर दिया।`],
    ['sky', '^🕊️ ^🕊️ ^🕊️ 😊', `All the doves were free! They thanked the mouse and flew home, singing happily.`, `सारे कबूतर आज़ाद हो गए! उन्होंने चूहे को धन्यवाद दिया और खुशी से गाते हुए घर उड़ गए।`],
  ], ['Unity is strength. Together we can do what one cannot.', 'एकता में बल है। जो एक नहीं कर सकता, वह मिलकर हो जाता है।'], [
    [['What did the hunter put on the net?', 'शिकारी ने जाल पर क्या डाला?'], [['Rice grains', 'चावल के दाने'], ['Stones', 'पत्थर'], ['Flowers', 'फूल']], 0],
    [['How did the doves escape?', 'कबूतर कैसे बचे?'], [['They all flew up together', 'सब एक साथ उड़े'], ['They pecked the hunter', 'शिकारी को चोंच मारी'], ['They hid', 'वे छिप गए']], 0],
    [['Who cut the net?', 'जाल किसने काटा?'], [['A mouse', 'चूहे ने'], ['A lion', 'शेर ने'], ['The hunter', 'शिकारी ने']], 0],
    [['What did the young doves forget to do?', 'छोटे कबूतर क्या करना भूल गए?'], [['Listen to the wise king', 'समझदार राजा की बात सुनना'], ['Sleep', 'सोना'], ['Sing', 'गाना']], 0],
  ]);

  // ================================================================ 5. The Elephants and the Mice
  LONG('elephantsmice', null, '🐘', [
    ['village', '🐭 🐭 🐭 🛖', `Long ago, thousands of mice lived in an old, empty village. They played and sang all day.`, `बहुत पहले एक पुराने, सूने गाँव में हज़ारों चूहे रहते थे। वे दिन भर खेलते और गाते।`],
    ['forest', '🐘 🐘 🐘', `Not far away lived a big herd of elephants. One summer their ponds dried up, so they set out to find a new lake.`, `पास ही हाथियों का एक बड़ा झुंड रहता था। एक गर्मी में उनके तालाब सूख गए, तो वे नई झील ढूँढने निकले।`],
    ['village', '🐘 🐭 😱 -🐭', `The only path went through the mouse village. Thump! Thump! The elephants’ big feet crushed many mouse homes.`, `रास्ता चूहों के गाँव से ही होकर जाता था। धम! धम! हाथियों के बड़े पैरों ने चूहों के बहुत से घर कुचल दिए।`],
    ['forest', '🐭 🙏 🐘', `The mouse king went bravely to the elephant king. “Please take another path. You are crushing our homes. One day we will help you.”`, `चूहों का राजा हिम्मत करके हाथियों के राजा के पास गया। “कृपया दूसरा रास्ता लें। आप हमारे घर कुचल रहे हैं। एक दिन हम आपकी मदद करेंगे।”`],
    ['forest', '🐘 😄 -🐭', `The elephant king smiled. “How can tiny mice help big elephants? But you asked nicely, so we will go another way.”`, `हाथियों का राजा मुस्कुराया। “नन्हे चूहे बड़े हाथियों की क्या मदद करेंगे? पर तुमने प्यार से कहा, तो हम दूसरा रास्ता लेंगे।”`],
    ['forest', '🧔 🪢 🐘', `Months later, hunters came. They set big rope traps, and many elephants got caught! They could not break the thick ropes.`, `महीनों बाद शिकारी आए। उन्होंने रस्सी के बड़े जाल लगाए, और बहुत से हाथी फँस गए! वे मोटी रस्सियाँ नहीं तोड़ पाए।`],
    ['forest', '🐘 😢 🪢', `The elephant king remembered the mice. He sent a young elephant who was still free to the mouse village for help.`, `हाथियों के राजा को चूहे याद आए। उसने एक बचे हुए हाथी को मदद के लिए चूहों के गाँव भेजा।`],
    ['forest', '🐭 🐭 🐭 🐭', `“Our friends need us!” said the mouse king. Thousands of mice ran to the forest as fast as they could.`, `“हमारे दोस्तों को हमारी ज़रूरत है!” चूहों के राजा ने कहा। हज़ारों चूहे जितना तेज़ हो सका, जंगल की ओर दौड़े।`],
    ['forest', '🐭 🪢 🐘 -🐭', `Nibble, nibble, nibble! The mice chewed through every rope. Snap! Snap! The elephants were free!`, `कुतर, कुतर, कुतर! चूहों ने हर रस्सी कुतर डाली। चटाक! चटाक! हाथी आज़ाद हो गए!`],
    ['meadow', '🐘 😊 🐭', `“Thank you, little friends,” said the elephant king. “Now I know – no one is too small to help.” They stayed friends forever.`, `“धन्यवाद, नन्हे दोस्तों,” हाथियों के राजा ने कहा। “अब मैं जान गया – मदद करने के लिए कोई छोटा नहीं होता।” वे हमेशा दोस्त रहे।`],
  ], ['Be kind to everyone. Even the smallest friend can help you one day.', 'सबसे अच्छा व्यवहार करो। सबसे छोटा दोस्त भी एक दिन काम आ सकता है।'], [
    [['Why did the elephants walk through the village?', 'हाथी गाँव से होकर क्यों गए?'], [['To find a new lake', 'नई झील ढूँढने'], ['To eat cheese', 'पनीर खाने'], ['To play', 'खेलने']], 0],
    [['What trapped the elephants?', 'हाथी किसमें फँसे?'], [['Rope traps', 'रस्सी के जाल'], ['Mud', 'कीचड़'], ['A cage of gold', 'सोने का पिंजरा']], 0],
    [['How did the mice help?', 'चूहों ने कैसे मदद की?'], [['They chewed the ropes', 'उन्होंने रस्सियाँ कुतरीं'], ['They fought the hunters', 'शिकारियों से लड़े'], ['They brought water', 'पानी लाए']], 0],
    [['What did the elephant king learn?', 'हाथियों के राजा ने क्या सीखा?'], [['No one is too small to help', 'मदद के लिए कोई छोटा नहीं'], ['Mice are bad', 'चूहे बुरे हैं'], ['Never walk', 'कभी मत चलो']], 0],
  ]);

  // ================================================================ 6. The Monkey and the Wedge
  LONG('wedge', null, '🐒', [
    ['forest', '👷 🪵 🪚', `Some carpenters were building a temple near a forest. They were cutting a huge log of wood with a saw.`, `कुछ बढ़ई जंगल के पास एक मंदिर बना रहे थे। वे आरी से लकड़ी का एक बड़ा लट्ठा चीर रहे थे।`],
    ['forest', '👷 🍛 🪵', `At lunch time, they stopped. They pushed a wooden wedge into the half-cut log to keep it open, and went to eat.`, `दोपहर में वे खाने के लिए रुके। उन्होंने आधे कटे लट्ठे में लकड़ी की एक खूँटी फँसा दी ताकि वह खुला रहे, और खाना खाने चले गए।`],
    ['tree', '@🐒 🐒 🐒', `A group of monkeys came jumping down from the trees. They loved to play with everything!`, `पेड़ों से बंदरों का एक झुंड कूदता हुआ आया। उन्हें हर चीज़ से खेलना पसंद था!`],
    ['forest', '🐒 🧐 🪵', `One very curious monkey sat on the log. “What is this funny stick?” he wondered.`, `एक बहुत जिज्ञासु बंदर लट्ठे पर बैठ गया। “यह मज़ेदार डंडी क्या है?” उसने सोचा।`],
    ['forest', '🐒 🪵 💪', `His friends said, “Don’t touch it! It is not ours.” But he did not listen. He held the wedge and pulled and pulled.`, `दोस्तों ने कहा, “इसे मत छुओ! यह हमारा नहीं है।” पर उसने नहीं सुना। उसने खूँटी पकड़कर खींची और खींचता रहा।`],
    ['forest', '🐒 😱 🪵', `Pop! Out came the wedge – and SNAP! The two halves of the log closed tight on the monkey’s tail!`, `पॉप! खूँटी निकल गई – और चटाक! लट्ठे के दोनों हिस्से बंदर की पूँछ पर कसकर बंद हो गए!`],
    ['forest', '🐒 😭 🐒', `“Ow! Ow! Help me!” he cried. His friends ran to help, but the log was too heavy.`, `“आह! आह! बचाओ!” वह रोया। दोस्त मदद को दौड़े, पर लट्ठा बहुत भारी था।`],
    ['forest', '👷 🪵 🐒', `The carpenters came back and opened the log. The monkey pulled out his poor, sore tail.`, `बढ़ई लौटे और उन्होंने लट्ठा खोला। बंदर ने अपनी बेचारी, दुखती पूँछ बाहर निकाली।`],
    ['tree', '🐒 🩹 🐒', `“I should have listened,” he said softly. “I touched what was not mine, and I got hurt.”`, `“मुझे बात मान लेनी चाहिए थी,” उसने धीरे से कहा। “मैंने वह छुआ जो मेरा नहीं था, और चोट खा ली।”`],
  ], ['Do not touch things that are not yours, and listen to good advice.', 'जो चीज़ तुम्हारी नहीं, उसे मत छुओ, और अच्छी सलाह मानो।'], [
    [['Who was building the temple?', 'मंदिर कौन बना रहा था?'], [['Carpenters', 'बढ़ई'], ['Monkeys', 'बंदर'], ['Lions', 'शेर']], 0],
    [['What did the monkey pull out?', 'बंदर ने क्या खींचा?'], [['The wedge', 'खूँटी'], ['A banana', 'केला'], ['A nail', 'कील']], 0],
    [['What got stuck?', 'क्या फँस गया?'], [['His tail', 'उसकी पूँछ'], ['His hat', 'उसकी टोपी'], ['His friend', 'उसका दोस्त']], 0],
    [['What should the monkey have done?', 'बंदर को क्या करना चाहिए था?'], [['Listen and not touch', 'बात मानकर न छूना'], ['Pull harder', 'और ज़ोर से खींचना'], ['Bring a saw', 'आरी लाना']], 0],
  ]);

  // ================================================================ 7. The Jackal and the Drum
  LONG('drum', null, '🥁', [
    ['forest', '🦊 😩', `A jackal named Gomayu had not eaten for two days. He walked through the forest, very weak and hungry.`, `गोमायु नाम के एक सियार ने दो दिन से कुछ नहीं खाया था। वह बहुत कमज़ोर और भूखा, जंगल में भटक रहा था।`],
    ['field', '🥁 🌳 🦊', `He came to an old battlefield. A big drum lay under a tree. When the wind blew, a branch hit it: DHUM! DHUM!`, `वह एक पुराने युद्ध के मैदान पर पहुँचा। एक पेड़ के नीचे बड़ा ढोल पड़ा था। हवा चलती तो डाली उस पर लगती: ढम! ढम!`],
    ['field', '🦊 😱 🥁', `The jackal shook with fear. “What a huge monster! It will eat me!” He wanted to run away.`, `सियार डर से काँपने लगा। “कितना बड़ा राक्षस! यह मुझे खा जाएगा!” वह भागना चाहता था।`],
    ['field', '🦊 💭 🥁', `Then he stopped. “Wait. Running away without knowing is silly. Let me look carefully, slowly.”`, `फिर वह रुका। “ठहरो। बिना जाने भागना बेवकूफ़ी है। चलो धीरे-धीरे, ध्यान से देखूँ।”`],
    ['field', '🦊 🥁 👀', `Step by step, he went closer. The monster did not move. It only went DHUM when the branch hit it.`, `एक-एक कदम वह पास गया। राक्षस हिला भी नहीं। डाली लगने पर बस ढम करता था।`],
    ['field', '🦊 😄 🥁', `He touched it with his paw. “Ha! It is only a drum! It cannot hurt anyone.”`, `उसने पंजे से छुआ। “हा! यह तो बस एक ढोल है! यह किसी को नुकसान नहीं पहुँचा सकता।”`],
    ['field', '🦊 🍎 🍞', `Near the drum, he found food left behind by the soldiers. He ate happily until he was full.`, `ढोल के पास उसे सैनिकों का छोड़ा हुआ खाना मिला। उसने पेट भरकर खुशी से खाया।`],
  ], ['Do not be afraid of what you do not understand. Look closely and find out.', 'जो समझ न आए, उससे डरो मत। पास जाकर ध्यान से जानो।'], [
    [['What made the scary sound?', 'डरावनी आवाज़ किससे आ रही थी?'], [['A drum hit by a branch', 'डाली लगने से ढोल'], ['A monster', 'राक्षस'], ['A lion', 'शेर']], 0],
    [['What did the jackal do?', 'सियार ने क्या किया?'], [['Went closer to find out', 'पता करने पास गया'], ['Ran away', 'भाग गया'], ['Cried', 'रोया']], 0],
    [['What did he find near the drum?', 'उसे ढोल के पास क्या मिला?'], [['Food', 'खाना'], ['Gold', 'सोना'], ['A friend', 'दोस्त']], 0],
  ]);

  // ================================================================ 8. The Daydreamer and the Pot
  LONG('dream', null, '🏺', [
    ['village', '🧔 🏺', `A poor man named Swabhavkripan lived in a village. People gave him flour as a gift, and he filled a whole pot with it.`, `गाँव में स्वभावकृपण नाम का एक गरीब आदमी रहता था। लोगों ने उसे आटा दिया, और उसने एक पूरा मटका भर लिया।`],
    ['home', '🧔 🛏️ 🏺', `He hung the pot above his bed. Lying down, he looked at it and began to dream.`, `उसने मटका अपने बिस्तर के ऊपर टाँग दिया। लेटे-लेटे उसे देखकर वह सपने देखने लगा।`],
    ['market', '🧔 💭 🐐', `“If there is a famine, I will sell this flour for a lot of money. With that money I will buy two goats.”`, `“अगर अकाल पड़ा, तो मैं यह आटा बहुत पैसों में बेचूँगा। उन पैसों से दो बकरियाँ खरीदूँगा।”`],
    ['field', '🐐 🐐 🐄 🐄', `“The goats will have babies. I will sell them and buy cows. Then I will have lots of milk and calves!”`, `“बकरियों के बच्चे होंगे। उन्हें बेचकर गायें लूँगा। फिर ढेर सारा दूध और बछड़े होंगे!”`],
    ['village', '🧔 🏡 💰', `“I will become rich and build a big house. I will have a family and a son.”`, `“मैं अमीर बनकर बड़ा घर बनाऊँगा। मेरा परिवार होगा, एक बेटा होगा।”`],
    ['home', '🧔 😤 🦶', `“If my son is naughty, I will say ‘Stop it!’ and kick my foot like THIS!” And he kicked his foot up in the air.`, `“अगर बेटा शरारत करेगा, तो मैं कहूँगा ‘बंद करो!’ और ऐसे लात मारूँगा!” और उसने हवा में ज़ोर से पैर उछाला।`],
    ['home', '🏺 💥 🧔', `His foot hit the pot! CRASH! The pot broke, and the flour fell all over him.`, `उसका पैर मटके पर लगा! धड़ाम! मटका फूट गया, और सारा आटा उस पर गिर पड़ा।`],
    ['home', '🧔 😳 ⚪', `He sat up, white with flour from head to toe. All his dreams were gone, and so was the flour!`, `वह उठकर बैठा, सिर से पाँव तक आटे से सफ़ेद। उसके सारे सपने चले गए, और आटा भी!`],
  ], ['Dreams are good, but work hard today instead of only dreaming.', 'सपने अच्छे हैं, पर सिर्फ़ सपने देखने की जगह आज मेहनत करो।'], [
    [['What was in the pot?', 'मटके में क्या था?'], [['Flour', 'आटा'], ['Gold', 'सोना'], ['Milk', 'दूध']], 0],
    [['What broke the pot?', 'मटका किससे फूटा?'], [['His own kick', 'उसकी अपनी लात'], ['A cat', 'बिल्ली'], ['A storm', 'तूफ़ान']], 0],
    [['What is better than only dreaming?', 'सिर्फ़ सपने देखने से अच्छा क्या है?'], [['Working hard today', 'आज मेहनत करना'], ['Sleeping more', 'और सोना'], ['Kicking pots', 'मटके को लात मारना']], 0],
  ]);

  // ================================================================ 9. The Lion That Came Back to Life
  LONG('scholars', null, '🦁', [
    ['village', '👨‍🎓 👨‍🎓 👨‍🎓 🧑‍🌾', `Four friends lived in a village. Three had read many books and were very learned. The fourth had not studied much, but he had lots of common sense.`, `एक गाँव में चार दोस्त रहते थे। तीन ने बहुत किताबें पढ़ी थीं। चौथा ज़्यादा पढ़ा नहीं था, पर उसमें बहुत समझ थी।`],
    ['road', '👨‍🎓 👨‍🎓 🧑‍🌾', `“Let us go to the city and earn money with our learning,” they said, and set off through the forest.`, `“चलो शहर जाकर अपनी विद्या से धन कमाएँ,” उन्होंने कहा, और जंगल के रास्ते चल पड़े।`],
    ['forest', '🦴 👨‍🎓 🧐', `In the forest they found a heap of bones. The first scholar said, “Let us test our magic learning. I can join these bones!”`, `जंगल में उन्हें हड्डियों का ढेर मिला। पहला विद्वान बोला, “चलो अपनी विद्या आज़माएँ। मैं ये हड्डियाँ जोड़ सकता हूँ!”`],
    ['forest', '👨‍🎓 ✨ 🦴', `He said his mantra, and the bones came together to make a skeleton. The second scholar added skin and fur.`, `उसने मंत्र पढ़ा, और हड्डियाँ जुड़कर ढाँचा बन गईं। दूसरे विद्वान ने खाल और बाल लगा दिए।`],
    ['forest', '🧑‍🌾 😟 👨‍🎓', `“It is a lion!” said the fourth friend. The third scholar said, “Now I will give it life!” “Stop!” said the fourth. “A living lion will eat us!”`, `“यह तो शेर है!” चौथे दोस्त ने कहा। तीसरा विद्वान बोला, “अब मैं इसमें जान डालूँगा!” “रुको!” चौथा बोला। “ज़िंदा शेर हमें खा जाएगा!”`],
    ['forest', '👨‍🎓 😤 🧑‍🌾', `“You know nothing!” laughed the scholars. “We must show our power.” They did not listen.`, `“तुम्हें कुछ नहीं पता!” विद्वान हँसे। “हमें अपनी ताकत दिखानी है।” उन्होंने बात नहीं मानी।`],
    ['tree', '@🧑‍🌾 👨‍🎓 👨‍🎓', `“Then wait – let me climb this tree first,” said the wise friend, and he climbed up high.`, `“तो रुको – पहले मुझे इस पेड़ पर चढ़ जाने दो,” समझदार दोस्त बोला, और ऊँचा चढ़ गया।`],
    ['tree', '+🦁 😠 @🧑‍🌾', `The third scholar said his mantra. The lion opened its eyes, stood up, and gave a mighty ROAR!`, `तीसरे विद्वान ने मंत्र पढ़ा। शेर ने आँखें खोलीं, खड़ा हुआ, और ज़ोर से दहाड़ा!`],
    ['tree', '@🧑‍🌾 😢 🌳', `The scholars ran, but the lion chased them away into the forest. Only the friend in the tree was safe.`, `विद्वान भागे, पर शेर ने उन्हें जंगल में दूर तक खदेड़ दिया। बस पेड़ पर बैठा दोस्त सुरक्षित रहा।`],
  ], ['Learning is great, but use it with common sense.', 'विद्या बहुत अच्छी है, पर उसके साथ समझदारी भी ज़रूरी है।'], [
    [['What did the scholars find?', 'विद्वानों को क्या मिला?'], [['Lion bones', 'शेर की हड्डियाँ'], ['A box of gold', 'सोने का संदूक'], ['A cow', 'गाय']], 0],
    [['What did the wise friend do?', 'समझदार दोस्त ने क्या किया?'], [['Climbed a tree', 'पेड़ पर चढ़ गया'], ['Said a mantra', 'मंत्र पढ़ा'], ['Went to sleep', 'सो गया']], 0],
    [['What was missing in the scholars?', 'विद्वानों में किस चीज़ की कमी थी?'], [['Common sense', 'समझदारी'], ['Books', 'किताबें'], ['Shoes', 'जूते']], 0],
  ], [2, 3]);

  // ================================================================ 10. The Loyal Mongoose
  LONG('mongoose', null, '🦦', [
    ['home', '👩 👶 🦦', `A farmer’s wife had a baby boy and a pet mongoose. The mongoose loved the baby like a little brother.`, `एक किसान की पत्नी के एक नन्हा बेटा और एक पालतू नेवला था। नेवला बच्चे को छोटे भाई जैसा प्यार करता था।`],
    ['home', '👩 🧺 👶', `One day the mother had to fetch water. She put the baby to sleep in his cradle and said, “Mongoose, look after him.”`, `एक दिन माँ को पानी भरने जाना था। उसने बच्चे को पालने में सुला दिया और कहा, “नेवले, इसका ध्यान रखना।”`],
    ['home', '🐍 👶 🦦', `While she was away, a big black snake slid in through the window and went towards the cradle!`, `जब वह बाहर थी, एक बड़ा काला साँप खिड़की से अंदर आया और पालने की ओर बढ़ा!`],
    ['home', '🦦 💥 🐍', `The brave mongoose jumped! He fought the snake hard and saved the baby. The baby slept on, safe and sound.`, `बहादुर नेवला कूदा! उसने साँप से जमकर लड़ाई की और बच्चे को बचा लिया। बच्चा आराम से सुरक्षित सोता रहा।`],
    ['village', '🦦 😊 👩', `Proud and happy, the mongoose ran to the door to meet the mother. His mouth had red marks from the fight.`, `गर्व और खुशी से नेवला माँ से मिलने दरवाज़े की ओर दौड़ा। लड़ाई के लाल निशान उसके मुँह पर थे।`],
    ['village', '👩 😱 🦦', `The mother saw the red marks and screamed. “You hurt my baby!” Without thinking, she threw her water pot at him.`, `माँ ने लाल निशान देखे और चीख पड़ी। “तूने मेरे बच्चे को नुकसान पहुँचाया!” बिना सोचे उसने पानी का घड़ा उस पर फेंक दिया।`],
    ['home', '👩 😮 👶 🐍', `She ran inside. The baby was smiling in the cradle, and next to it lay the big snake. The mongoose had saved her son!`, `वह अंदर भागी। बच्चा पालने में मुस्कुरा रहा था, और पास में बड़ा साँप पड़ा था। नेवले ने उसके बेटे को बचाया था!`],
    ['home', '👩 😢 🦦', `She ran back and hugged the hurt mongoose. “I am so sorry! I did not stop to think.” She cared for him until he was well.`, `वह वापस भागी और घायल नेवले को गले लगाया। “मुझे माफ़ करो! मैंने रुककर सोचा नहीं।” उसने ठीक होने तक उसकी देखभाल की।`],
    ['home', '👶 🦦 👩 😊', `From that day, she always remembered: first find out what happened, then decide.`, `उस दिन से वह हमेशा याद रखती: पहले पता करो कि हुआ क्या, फिर फ़ैसला करो।`],
  ], ['Never act in anger. Find out the truth first.', 'गुस्से में कुछ मत करो। पहले सच का पता करो।'], [
    [['Who saved the baby?', 'बच्चे को किसने बचाया?'], [['The mongoose', 'नेवले ने'], ['The farmer', 'किसान ने'], ['A cat', 'बिल्ली ने']], 0],
    [['From what?', 'किससे?'], [['A snake', 'साँप से'], ['A fire', 'आग से'], ['A dog', 'कुत्ते से']], 0],
    [['What mistake did the mother make?', 'माँ ने क्या गलती की?'], [['She acted without finding out', 'बिना जाने कुछ कर दिया'], ['She fed the baby', 'बच्चे को खिलाया'], ['She sang', 'गाना गाया']], 0],
    [['What should we do when angry?', 'गुस्से में क्या करना चाहिए?'], [['Stop and find out the truth', 'रुककर सच जानना'], ['Throw things', 'चीज़ें फेंकना'], ['Shout', 'चिल्लाना']], 0],
  ]);

  // ================================================================ 11. The Sparrow and the Elephant
  LONG('sparrow', null, '🐦', [
    ['tree', '🐦 @🥚 🐦', `A sparrow and her husband built a nest on a tree branch. Soon there were little eggs in it.`, `एक गौरैया और उसके पति ने पेड़ की डाली पर घोंसला बनाया। जल्दी ही उसमें नन्हे अंडे आ गए।`],
    ['tree', '+🐘 😠 🌳', `One hot day, a proud, angry elephant came by. To cool off, he shook the tree hard with his trunk.`, `एक गर्म दिन एक घमंडी, गुस्सैल हाथी वहाँ आया। ठंडक के लिए उसने अपनी सूँड़ से पेड़ को ज़ोर से हिलाया।`],
    ['tree', '🐦 😭 🥚', `The nest fell down and the eggs broke. The sparrow cried and cried. “He is so big. What can a little bird do?”`, `घोंसला गिर गया और अंडे फूट गए। गौरैया रोती रही। “वह इतना बड़ा है। एक नन्ही चिड़िया क्या कर सकती है?”`],
    ['tree', '🐦 🐦 🐝 🐸', `Her friends came: a woodpecker, a bee and a frog. “Don’t cry,” they said. “Together, we will teach him a lesson.”`, `उसके दोस्त आए: एक कठफोड़वा, एक मधुमक्खी और एक मेंढक। “रोओ मत,” उन्होंने कहा। “मिलकर हम उसे सबक सिखाएँगे।”`],
    ['forest', '🐘 😌 ^🐝', `First, the bee buzzed a sweet song in the elephant’s ear. Bzzzz… He closed his eyes and swayed.`, `पहले मधुमक्खी ने हाथी के कान में मीठा गाना गुनगुनाया। भिन्न्न्न… उसने आँखें मूँद लीं और झूमने लगा।`],
    ['forest', '🐘 😵 ^🐦', `Then the woodpecker gently tapped near his eyes, so he could not see the path.`, `फिर कठफोड़वे ने उसकी आँखों के पास ठक-ठक की, जिससे उसे रास्ता न दिखे।`],
    ['forest', '🐘 🐸 🕳️', `Now the elephant was thirsty. The frog croaked from beside a deep pit: “Croak! Croak!” “Water must be there!” thought the elephant.`, `अब हाथी को प्यास लगी। मेंढक एक गहरे गड्ढे के पास से टर्राया: “टर्र! टर्र!” “वहाँ पानी होगा!” हाथी ने सोचा।`],
    ['forest', '🐘 😢 🕳️', `He walked towards the sound – and slid into the deep pit! He was stuck.`, `वह आवाज़ की ओर चला – और फिसलकर गहरे गड्ढे में जा गिरा! वह फँस गया।`],
    ['forest', '🐘 🙏 🐦', `“Help me!” he said. The sparrow said, “Will you stop hurting others?” “Yes! I am sorry,” said the elephant. The friends called others to pull him out.`, `“मुझे बचाओ!” उसने कहा। गौरैया बोली, “क्या तुम दूसरों को सताना बंद करोगे?” “हाँ! मुझे माफ़ करो,” हाथी बोला। दोस्तों ने सबको बुलाकर उसे बाहर निकलवाया।`],
    ['tree', '🐘 😊 🐦 🐸', `From that day, the elephant was gentle with everyone, big and small.`, `उस दिन से हाथी हर छोटे-बड़े के साथ नरमी से पेश आता।`],
  ], ['Small friends together can be stronger than one big bully.', 'छोटे दोस्त मिलकर एक बड़े दादा से भी ज़्यादा ताकतवर होते हैं।'], [
    [['Who broke the nest?', 'घोंसला किसने तोड़ा?'], [['A proud elephant', 'एक घमंडी हाथी'], ['The wind', 'हवा'], ['A boy', 'एक लड़का']], 0],
    [['Who helped the sparrow?', 'गौरैया की मदद किसने की?'], [['A bee, a woodpecker and a frog', 'मधुमक्खी, कठफोड़वा और मेंढक'], ['A lion', 'शेर'], ['Nobody', 'किसी ने नहीं']], 0],
    [['Where did the elephant fall?', 'हाथी कहाँ गिरा?'], [['Into a pit', 'गड्ढे में'], ['Into a river', 'नदी में'], ['Off a hill', 'पहाड़ी से']], 0],
    [['How did the elephant change?', 'हाथी कैसे बदला?'], [['He became gentle', 'वह नरम बन गया'], ['He became angrier', 'वह और गुस्सैल हुआ'], ['He flew away', 'वह उड़ गया']], 0],
  ]);

  // ================================================================ 12. The Monkey and the Crocodile
  LONG('monkey-croc', null, '🐒', [
    ['river', '@🐒 🌳 ~🐊', `A clever monkey named Raktamukh lived on a jamun tree by the river. The tree was full of sweet, purple jamuns.`, `नदी किनारे एक जामुन के पेड़ पर रक्तमुख नाम का एक चतुर बंदर रहता था। पेड़ मीठे, बैंगनी जामुनों से लदा था।`],
    ['river', '🐒 🫐 ~🐊', `One day a tired crocodile came to rest under the tree. The kind monkey threw him some jamuns. “Have some, friend!”`, `एक दिन एक थका मगरमच्छ पेड़ के नीचे आराम करने आया। दयालु बंदर ने उसे कुछ जामुन फेंके। “लो दोस्त, खाओ!”`],
    ['river', '🐒 😊 ~🐊', `The crocodile came every day. They talked and laughed and became best friends. The monkey always sent jamuns home for the crocodile’s wife.`, `मगरमच्छ रोज़ आने लगा। वे बातें करते, हँसते, और पक्के दोस्त बन गए। बंदर हमेशा मगरमच्छ की पत्नी के लिए भी जामुन भेजता।`],
    ['sea', '🐊 😈 🐊', `But the crocodile’s wife was greedy. “If the fruit is so sweet, the monkey’s heart must be sweeter! Bring me his heart!”`, `पर मगरमच्छ की पत्नी लालची थी। “अगर फल इतने मीठे हैं, तो बंदर का दिल और भी मीठा होगा! मुझे उसका दिल ला दो!”`],
    ['river', '~🐊 😟 🐒', `The crocodile did not want to, but he agreed. He said to the monkey, “My wife has invited you for dinner. Sit on my back!”`, `मगरमच्छ नहीं चाहता था, पर मान गया। उसने बंदर से कहा, “मेरी पत्नी ने तुम्हें खाने पर बुलाया है। मेरी पीठ पर बैठो!”`],
    ['sea', '~🐊 ~🐒', `In the middle of the deep river, the crocodile said, “Sorry, friend. My wife wants to eat your heart.”`, `गहरी नदी के बीच पहुँचकर मगरमच्छ बोला, “माफ़ करना दोस्त। मेरी पत्नी तुम्हारा दिल खाना चाहती है।”`],
    ['sea', '~🐒 💡 ~🐊', `The monkey was scared, but he stayed calm. “Oh, why didn’t you tell me before? I keep my heart safe up in the jamun tree!”`, `बंदर डर गया, पर उसने शांति रखी। “अरे, पहले क्यों नहीं बताया? मैं तो अपना दिल जामुन के पेड़ पर सँभालकर रखता हूँ!”`],
    ['river', '~🐊 🐒 🌳', `The silly crocodile believed him and swam back to the tree. The monkey jumped up onto a high branch.`, `बुद्धू मगरमच्छ ने विश्वास कर लिया और तैरकर पेड़ पर लौट आया। बंदर उछलकर ऊँची डाली पर चढ़ गया।`],
    ['tree', '@🐒 😤 🐊', `“Foolish friend! Nobody keeps their heart in a tree. You tried to trick me. Our friendship is over. Go away!”`, `“मूर्ख दोस्त! कोई अपना दिल पेड़ पर नहीं रखता। तुमने मुझे धोखा देना चाहा। हमारी दोस्ती खत्म। चले जाओ!”`],
    ['river', '~🐊 😔', `The crocodile swam away, ashamed. He had lost a true friend because of greed.`, `मगरमच्छ शर्मिंदा होकर तैर गया। लालच की वजह से उसने एक सच्चा दोस्त खो दिया था।`],
  ], ['Stay calm in danger and think. Never betray a true friend.', 'मुसीबत में शांत रहकर सोचो। सच्चे दोस्त को कभी धोखा मत दो।'], [
    [['What fruit grew on the monkey’s tree?', 'बंदर के पेड़ पर कौन सा फल था?'], [['Jamun', 'जामुन'], ['Apple', 'सेब'], ['Banana', 'केला']], 0],
    [['What did the crocodile’s wife want?', 'मगरमच्छ की पत्नी क्या चाहती थी?'], [['The monkey’s heart', 'बंदर का दिल'], ['A new house', 'नया घर'], ['Fish', 'मछली']], 0],
    [['How did the monkey escape?', 'बंदर कैसे बचा?'], [['He said his heart was in the tree', 'उसने कहा दिल पेड़ पर है'], ['He swam fast', 'वह तेज़ तैरा'], ['He called the police', 'उसने पुलिस बुलाई']], 0],
    [['What helped the monkey most?', 'बंदर के सबसे ज़्यादा क्या काम आया?'], [['Staying calm and thinking', 'शांत रहकर सोचना'], ['Crying loudly', 'ज़ोर से रोना'], ['Eating jamuns', 'जामुन खाना']], 0],
  ], [2, 3]);

  // ================================================================ 13. The Clever Rabbit
  LONG('rabbit-lion', null, '🐇', [
    ['forest', '+🦁 😠 🦌', `A cruel lion named Bhasuraka lived in a forest. Every day he hunted many animals, just for fun.`, `एक जंगल में भासुरक नाम का एक क्रूर शेर रहता था। वह रोज़ मज़े के लिए बहुत से जानवर मार डालता।`],
    ['forest', '🐘 🦌 🐇 🙏', `The animals met and went to the lion. “Please don’t hunt us all. Every day one of us will come to you.” The lion agreed.`, `जानवरों ने सभा की और शेर के पास गए। “कृपया हम सबको मत मारिए। रोज़ हममें से एक आपके पास आएगा।” शेर मान गया।`],
    ['forest', '🐇 😟', `One day it was the little rabbit’s turn. He was scared, but he was also very clever. He walked slowly… very slowly.`, `एक दिन नन्हे खरगोश की बारी आई। वह डरा हुआ था, पर बहुत चतुर भी था। वह धीरे-धीरे… बहुत धीरे चला।`],
    ['forest', '+🦁 😡 🐇', `He reached the lion very late. “Why are you so late? And you are so small!” roared the hungry lion.`, `वह शेर के पास बहुत देर से पहुँचा। “इतनी देर क्यों? और तुम इतने छोटे!” भूखा शेर दहाड़ा।`],
    ['forest', '🐇 💡 🦁', `“Sir,” said the rabbit, “five rabbits were coming. But another lion stopped us and ate the others! He says HE is the king of this forest.”`, `“महाराज,” खरगोश बोला, “पाँच खरगोश आ रहे थे। पर एक दूसरे शेर ने हमें रोक लिया और बाकियों को खा गया! वह कहता है कि जंगल का राजा वही है।”`],
    ['forest', '🦁 😤 🐇', `“Another king? In MY forest?” roared the lion. “Show me where he is!”`, `“दूसरा राजा? मेरे जंगल में?” शेर दहाड़ा। “मुझे दिखाओ वह कहाँ है!”`],
    ['well', '🐇 🦁 🕳️', `The rabbit led him to a deep well. “He lives down there, sir.”`, `खरगोश उसे एक गहरे कुएँ पर ले गया। “वह यहीं नीचे रहता है, महाराज।”`],
    ['well', '🦁 😠 💧', `The lion looked into the water and saw his own reflection – an angry lion! He roared. The well roared back!`, `शेर ने पानी में झाँका और अपनी ही परछाईं देखी – एक गुस्सैल शेर! वह दहाड़ा। कुआँ भी दहाड़ा!`],
    ['well', '🐇 😲 💦', `In a rage, the lion jumped into the well to fight – and that was the end of the cruel lion.`, `गुस्से में शेर लड़ने के लिए कुएँ में कूद गया – और उस क्रूर शेर का अंत हो गया।`],
    ['forest', '🐇 🎉 🦌 🐘', `The rabbit ran back and told everyone. The animals danced and cheered. The little rabbit had saved them all!`, `खरगोश ने लौटकर सबको बताया। जानवर नाचे और खुशी मनाई। नन्हे खरगोश ने सबको बचा लिया था!`],
  ], ['Brains are stronger than muscles.', 'बुद्धि बल से बड़ी होती है।'], [
    [['Why was the rabbit late?', 'खरगोश देर से क्यों आया?'], [['He walked slowly on purpose', 'वह जानबूझकर धीरे चला'], ['He was sleeping', 'वह सो रहा था'], ['He was lost', 'वह भटक गया']], 0],
    [['Where did he take the lion?', 'वह शेर को कहाँ ले गया?'], [['To a deep well', 'गहरे कुएँ पर'], ['To a cave', 'गुफा में'], ['To a river', 'नदी पर']], 0],
    [['What did the lion see in the water?', 'शेर ने पानी में क्या देखा?'], [['His own reflection', 'अपनी परछाईं'], ['A fish', 'मछली'], ['Another rabbit', 'दूसरा खरगोश']], 0],
    [['What is the lesson?', 'सीख क्या है?'], [['Brains beat muscles', 'बुद्धि बल से बड़ी'], ['Lions are kind', 'शेर दयालु हैं'], ['Wells are fun', 'कुएँ मज़ेदार हैं']], 0],
  ], [2, 3]);
})();
