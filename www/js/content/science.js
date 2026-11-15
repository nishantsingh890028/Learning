/* SCIENCE / EVS – every question has an explanation in English and Hindi. */
window.CUR = window.CUR || [];
(() => {
  const W = 'science';
  const Q = (en, hi, emoji, opts, answer, exEn, exHi) => ({ q: { en, hi }, emoji, options: opts.map(([e, h]) => ({ en: e, hi: h })), answer, explain: { en: exEn, hi: exHi } });
  window.CUR.push(
    // ---------------------------------------------------------- Level 1
    { id: 's-senses', world: W, type: 'quiz', levels: [1, 2], free: true, title: { en: 'My five senses', hi: 'मेरी पाँच इंद्रियाँ' }, skills: ['science'],
      questions: [
        Q('We see with our…', 'हम किससे देखते हैं?', '🌈', [['eyes', 'आँखों से'], ['ears', 'कानों से'], ['nose', 'नाक से']], 0, 'Eyes help us see colours and shapes.', 'आँखों से हम रंग और आकार देखते हैं।'),
        Q('We hear music with our…', 'संगीत हम किससे सुनते हैं?', '🎵', [['ears', 'कानों से'], ['hands', 'हाथों से'], ['tongue', 'जीभ से']], 0, 'Ears help us hear sounds.', 'कानों से हम आवाज़ें सुनते हैं।'),
        Q('We smell flowers with our…', 'फूलों की खुशबू किससे सूँघते हैं?', '🌸', [['nose', 'नाक से'], ['eyes', 'आँखों से'], ['feet', 'पैरों से']], 0, 'Our nose tells us about smells.', 'नाक से हमें गंध पता चलती है।'),
        Q('We taste sweet and sour with our…', 'मीठा और खट्टा किससे चखते हैं?', '🍋', [['tongue', 'जीभ से'], ['ears', 'कानों से'], ['hair', 'बालों से']], 0, 'Our tongue tastes sweet, salty, sour and bitter.', 'जीभ मीठा, नमकीन, खट्टा और कड़वा पहचानती है।'),
        Q('We feel hot and cold with our…', 'गर्म और ठंडा किससे महसूस करते हैं?', '🧊', [['skin', 'त्वचा से'], ['teeth', 'दाँतों से'], ['nose', 'नाक से']], 0, 'Our skin feels touch, heat and cold.', 'त्वचा से हम छूना, गर्मी और ठंड महसूस करते हैं।'),
      ] },
    { id: 's-homes', world: W, type: 'quiz', levels: [1, 2], title: { en: 'Animals & their homes', hi: 'जानवर और उनके घर' }, skills: ['science'],
      questions: [
        Q('Where does a bird live?', 'चिड़िया कहाँ रहती है?', '🐦', [['Nest', 'घोंसला'], ['Kennel', 'कुत्ता-घर'], ['Den', 'माँद']], 0, 'Birds build nests with twigs and grass.', 'चिड़िया तिनकों से घोंसला बनाती है।'),
        Q('Where does a lion live?', 'शेर कहाँ रहता है?', '🦁', [['Den', 'माँद'], ['Nest', 'घोंसला'], ['Hive', 'छत्ता']], 0, 'Lions rest in a den.', 'शेर माँद में रहता है।'),
        Q('Where do bees live?', 'मधुमक्खियाँ कहाँ रहती हैं?', '🐝', [['Hive', 'छत्ता'], ['Stable', 'अस्तबल'], ['Burrow', 'बिल']], 0, 'Bees live in a hive and make honey.', 'मधुमक्खियाँ छत्ते में रहती हैं और शहद बनाती हैं।'),
        Q('Where does a horse live?', 'घोड़ा कहाँ रहता है?', '🐎', [['Stable', 'अस्तबल'], ['Nest', 'घोंसला'], ['Pond', 'तालाब']], 0, 'Horses live in a stable.', 'घोड़ा अस्तबल में रहता है।'),
        Q('Where does a fish live?', 'मछली कहाँ रहती है?', '🐟', [['Water', 'पानी'], ['Tree', 'पेड़'], ['Sand', 'रेत']], 0, 'Fish breathe and live in water.', 'मछली पानी में रहती और साँस लेती है।'),
        Q('Where does a rabbit live?', 'खरगोश कहाँ रहता है?', '🐇', [['Burrow', 'बिल'], ['Hive', 'छत्ता'], ['Nest', 'घोंसला']], 0, 'Rabbits dig burrows under the ground.', 'खरगोश ज़मीन के नीचे बिल बनाता है।'),
      ] },
    { id: 's-weather', world: W, type: 'quiz', levels: [1, 2], title: { en: 'Day, night & weather', hi: 'दिन, रात और मौसम' }, skills: ['science'],
      questions: [
        Q('What do we see in the sky during the day?', 'दिन में आसमान में क्या दिखता है?', '🌤️', [['The Sun', 'सूरज'], ['The Moon and stars', 'चाँद-तारे'], ['Nothing', 'कुछ नहीं']], 0, 'The Sun gives us light during the day.', 'दिन में सूरज हमें रोशनी देता है।'),
        Q('When it rains, we use…', 'बारिश में हम क्या इस्तेमाल करते हैं?', '🌧️', [['an umbrella', 'छाता'], ['a sweater', 'स्वेटर'], ['sunglasses', 'धूप का चश्मा']], 0, 'An umbrella keeps us dry.', 'छाता हमें भीगने से बचाता है।'),
        Q('In winter, we wear…', 'सर्दी में हम क्या पहनते हैं?', '❄️', [['warm clothes', 'गर्म कपड़े'], ['swimsuits', 'तैरने के कपड़े'], ['nothing special', 'कुछ ख़ास नहीं']], 0, 'Woollen clothes keep us warm.', 'ऊनी कपड़े हमें गर्म रखते हैं।'),
        Q('Which season is the hottest?', 'सबसे गर्म मौसम कौन सा है?', '☀️', [['Summer', 'गर्मी'], ['Winter', 'सर्दी'], ['Monsoon', 'बरसात']], 0, 'Summer is the hottest season.', 'गर्मी सबसे गर्म मौसम है।'),
        Q('What do we see at night?', 'रात में आसमान में क्या दिखता है?', '🌙', [['Moon and stars', 'चाँद और तारे'], ['A rainbow', 'इंद्रधनुष'], ['The Sun', 'सूरज']], 0, 'At night we can see the Moon and stars.', 'रात में चाँद और तारे दिखते हैं।'),
      ] },

    // ---------------------------------------------------------- Level 2
    { id: 's-plants', world: W, type: 'quiz', levels: [2, 3], free: true, title: { en: 'Plants', hi: 'पौधे' }, skills: ['science'],
      questions: [
        Q('Which part of a plant is under the soil?', 'पौधे का कौन सा भाग मिट्टी के नीचे होता है?', '🌱', [['Roots', 'जड़'], ['Leaves', 'पत्तियाँ'], ['Flowers', 'फूल']], 0, 'Roots hold the plant and drink water from the soil.', 'जड़ पौधे को पकड़ती है और मिट्टी से पानी लेती है।'),
        Q('Plants make their food in their…', 'पौधे अपना भोजन कहाँ बनाते हैं?', '🍃', [['Leaves', 'पत्तियों में'], ['Roots', 'जड़ों में'], ['Seeds', 'बीजों में']], 0, 'Leaves use sunlight to make food.', 'पत्तियाँ धूप की मदद से भोजन बनाती हैं।'),
        Q('What do plants need to grow?', 'पौधों को बढ़ने के लिए क्या चाहिए?', '🪴', [['Water, air and sunlight', 'पानी, हवा और धूप'], ['Only toys', 'सिर्फ़ खिलौने'], ['Darkness only', 'सिर्फ़ अंधेरा']], 0, 'Plants need water, air, sunlight and soil.', 'पौधों को पानी, हवा, धूप और मिट्टी चाहिए।'),
        Q('Trees give us…', 'पेड़ हमें क्या देते हैं?', '🌳', [['Oxygen, fruits and shade', 'ऑक्सीजन, फल और छाया'], ['Plastic', 'प्लास्टिक'], ['Smoke', 'धुआँ']], 0, 'Trees give fresh air, fruits, wood and shade.', 'पेड़ ताज़ी हवा, फल, लकड़ी और छाया देते हैं।'),
        Q('Which part becomes a fruit?', 'कौन सा भाग फल बनता है?', '🌸', [['Flower', 'फूल'], ['Root', 'जड़'], ['Stem', 'तना']], 0, 'Flowers turn into fruits that hold seeds.', 'फूल ही फल बनते हैं जिनमें बीज होते हैं।'),
      ] },
    { id: 's-food', world: W, type: 'quiz', levels: [2, 3], title: { en: 'Food & health', hi: 'भोजन और स्वास्थ्य' }, skills: ['science', 'health'],
      questions: [
        Q('Which food makes our bones strong?', 'कौन सा भोजन हड्डियों को मज़बूत बनाता है?', '🦴', [['Milk', 'दूध'], ['Chips', 'चिप्स'], ['Cold drink', 'कोल्ड ड्रिंक']], 0, 'Milk has calcium for strong bones and teeth.', 'दूध में कैल्शियम होता है जो हड्डियाँ और दाँत मज़बूत करता है।'),
        Q('Which is the healthiest snack?', 'सबसे सेहतमंद नाश्ता कौन सा है?', '🍎', [['Fruit', 'फल'], ['Candy', 'टॉफ़ी'], ['Fried snacks', 'तली हुई चीज़ें']], 0, 'Fruits give vitamins and keep us healthy.', 'फल विटामिन देते हैं और हमें स्वस्थ रखते हैं।'),
        Q('Dal, eggs and paneer give us…', 'दाल, अंडा और पनीर से हमें क्या मिलता है?', '🥚', [['Protein', 'प्रोटीन'], ['Sugar', 'चीनी'], ['Nothing', 'कुछ नहीं']], 0, 'Protein helps our body grow and repair.', 'प्रोटीन शरीर को बढ़ने और मज़बूत होने में मदद करता है।'),
        Q('How much water should we drink?', 'हमें कितना पानी पीना चाहिए?', '💧', [['Many glasses a day', 'दिन में कई गिलास'], ['None', 'बिल्कुल नहीं'], ['Only on Sunday', 'सिर्फ़ रविवार को']], 0, 'Our body needs plenty of water every day.', 'शरीर को रोज़ भरपूर पानी चाहिए।'),
        Q('Why should we sleep early?', 'जल्दी क्यों सोना चाहिए?', '😴', [['Body and brain rest and grow', 'शरीर और दिमाग को आराम मिलता है'], ['To miss school', 'स्कूल न जाने के लिए'], ['No reason', 'कोई कारण नहीं']], 0, 'Good sleep helps us grow, learn and stay happy.', 'अच्छी नींद से हम बढ़ते हैं, सीखते हैं और खुश रहते हैं।'),
      ] },
    { id: 's-living', world: W, type: 'quiz', levels: [2], title: { en: 'Living & non-living', hi: 'सजीव और निर्जीव' }, skills: ['science', 'logic'],
      questions: [
        Q('Which one is LIVING?', 'इनमें सजीव कौन है?', '🤔', [['Dog', 'कुत्ता'], ['Chair', 'कुर्सी'], ['Stone', 'पत्थर']], 0, 'Living things eat, grow, breathe and move.', 'सजीव खाते हैं, बढ़ते हैं, साँस लेते हैं।'),
        Q('Which one is NON-living?', 'इनमें निर्जीव कौन है?', '🤔', [['Car', 'गाड़ी'], ['Tree', 'पेड़'], ['Cat', 'बिल्ली']], 0, 'A car moves but does not eat, grow or breathe.', 'गाड़ी चलती है, पर खाती, बढ़ती या साँस नहीं लेती।'),
        Q('Is a plant living?', 'क्या पौधा सजीव है?', '🌱', [['Yes', 'हाँ'], ['No', 'नहीं'], ['Only at night', 'सिर्फ़ रात को']], 0, 'Plants grow, drink water and make food – they are living.', 'पौधे बढ़ते हैं, पानी पीते हैं, भोजन बनाते हैं – वे सजीव हैं।'),
        Q('Which one is NON-living?', 'इनमें निर्जीव कौन है?', '🤔', [['Pencil', 'पेंसिल'], ['Fish', 'मछली'], ['Baby', 'बच्चा']], 0, 'A pencil does not grow or breathe.', 'पेंसिल न बढ़ती है, न साँस लेती है।'),
      ] },
    { id: 's-water', world: W, type: 'quiz', levels: [2, 3], title: { en: 'Water', hi: 'पानी' }, skills: ['science', 'values'],
      questions: [
        Q('When water becomes very cold, it turns into…', 'पानी बहुत ठंडा होने पर क्या बनता है?', '🧊', [['Ice', 'बर्फ़'], ['Steam', 'भाप'], ['Sand', 'रेत']], 0, 'Water freezes into ice at 0 °C.', 'पानी 0 डिग्री पर जमकर बर्फ़ बनता है।'),
        Q('When water is boiled, it becomes…', 'पानी उबालने पर क्या बनता है?', '♨️', [['Steam', 'भाप'], ['Ice', 'बर्फ़'], ['Milk', 'दूध']], 0, 'Hot water turns into steam (water vapour).', 'गर्म पानी भाप बन जाता है।'),
        Q('Where does rain come from?', 'बारिश कहाँ से आती है?', '🌧️', [['Clouds', 'बादलों से'], ['Trees', 'पेड़ों से'], ['Taps', 'नल से']], 0, 'The Sun heats water, it rises, forms clouds and falls as rain.', 'सूरज पानी को गर्म करता है, भाप बादल बनती है और बारिश होती है।'),
        Q('How can we save water?', 'हम पानी कैसे बचा सकते हैं?', '🚰', [['Close the tap while brushing', 'ब्रश करते समय नल बंद रखें'], ['Leave taps open', 'नल खुला छोड़ दें'], ['Throw water away', 'पानी फेंक दें']], 0, 'Every drop counts – close the tap when not using it.', 'हर बूँद कीमती है – इस्तेमाल न हो तो नल बंद करें।'),
      ] },

    // ---------------------------------------------------------- Level 3
    { id: 's-space', world: W, type: 'quiz', levels: [3], free: true, title: { en: 'Sun, Moon & planets', hi: 'सूरज, चाँद और ग्रह' }, skills: ['science'],
      questions: [
        Q('Which planet do we live on?', 'हम किस ग्रह पर रहते हैं?', '🌍', [['Earth', 'पृथ्वी'], ['Mars', 'मंगल'], ['Jupiter', 'बृहस्पति']], 0, 'Earth is the only planet known to have life.', 'पृथ्वी अकेला ग्रह है जहाँ जीवन है।'),
        Q('The Earth goes around the…', 'पृथ्वी किसके चारों ओर घूमती है?', '☀️', [['Sun', 'सूरज'], ['Moon', 'चाँद'], ['Mars', 'मंगल']], 0, 'Earth takes about 365 days – one year – to go around the Sun.', 'पृथ्वी सूरज का एक चक्कर लगभग 365 दिन यानी एक साल में लगाती है।'),
        Q('Which is the biggest planet?', 'सबसे बड़ा ग्रह कौन सा है?', '🪐', [['Jupiter', 'बृहस्पति'], ['Earth', 'पृथ्वी'], ['Mercury', 'बुध']], 0, 'Jupiter is so big that more than 1,000 Earths could fit inside!', 'बृहस्पति इतना बड़ा है कि उसमें हज़ार से ज़्यादा पृथ्वियाँ समा जाएँ!'),
        Q('Which planet is called the Red Planet?', 'किस ग्रह को लाल ग्रह कहते हैं?', '🔴', [['Mars', 'मंगल'], ['Venus', 'शुक्र'], ['Saturn', 'शनि']], 0, 'Mars looks red because of rusty dust.', 'मंगल पर लाल धूल है, इसलिए वह लाल दिखता है।'),
        Q('India’s mission that landed near the Moon’s south pole?', 'चाँद के दक्षिणी ध्रुव के पास उतरने वाला भारत का मिशन?', '🚀', [['Chandrayaan-3', 'चंद्रयान-3'], ['Mangalyaan', 'मंगलयान'], ['Aryabhata', 'आर्यभट']], 0, 'ISRO’s Chandrayaan-3 landed in August 2023.', 'इसरो का चंद्रयान-3 अगस्त 2023 में चाँद पर उतरा।'),
        Q('Why do we have day and night?', 'दिन और रात क्यों होते हैं?', '🌗', [['The Earth spins', 'पृथ्वी अपनी धुरी पर घूमती है'], ['The Sun switches off', 'सूरज बंद हो जाता है'], ['Clouds cover the Sun', 'बादल सूरज को ढक लेते हैं']], 0, 'The side facing the Sun has day; the other side has night.', 'पृथ्वी का जो भाग सूरज की ओर होता है वहाँ दिन, दूसरी ओर रात होती है।'),
      ] },
    { id: 's-body', world: W, type: 'quiz', levels: [3], title: { en: 'Inside my body', hi: 'मेरे शरीर के अंदर' }, skills: ['science', 'health'],
      questions: [
        Q('Which organ pumps blood?', 'कौन सा अंग खून पंप करता है?', '❤️', [['Heart', 'दिल'], ['Stomach', 'पेट'], ['Lungs', 'फेफड़े']], 0, 'The heart beats about 100 times a minute in children.', 'बच्चों का दिल एक मिनट में लगभग 100 बार धड़कता है।'),
        Q('We breathe with our…', 'हम किससे साँस लेते हैं?', '🫁', [['Lungs', 'फेफड़ों से'], ['Heart', 'दिल से'], ['Kidneys', 'गुर्दों से']], 0, 'Lungs take in oxygen from the air.', 'फेफड़े हवा से ऑक्सीजन लेते हैं।'),
        Q('Which organ helps us think?', 'कौन सा अंग सोचने में मदद करता है?', '🧠', [['Brain', 'दिमाग'], ['Knee', 'घुटना'], ['Hair', 'बाल']], 0, 'The brain controls everything we do.', 'दिमाग हमारे हर काम को नियंत्रित करता है।'),
        Q('Food is digested in the…', 'खाना कहाँ पचता है?', '🍲', [['Stomach', 'पेट'], ['Ears', 'कानों में'], ['Lungs', 'फेफड़ों में']], 0, 'The stomach and intestines break food into energy.', 'पेट और आँतें खाने को ऊर्जा में बदलते हैं।'),
        Q('How many bones does an adult have?', 'बड़े इंसान में कितनी हड्डियाँ होती हैं?', '🦴', [['206', '206'], ['20', '20'], ['1000', '1000']], 0, 'Babies have about 300 bones; some join together as we grow.', 'बच्चों में लगभग 300 हड्डियाँ होती हैं; बड़े होने पर कुछ जुड़ जाती हैं।'),
      ] },
    { id: 's-matter', world: W, type: 'quiz', levels: [3], title: { en: 'Solids, liquids & gases', hi: 'ठोस, द्रव और गैस' }, skills: ['science', 'logic'],
      questions: [
        Q('Which one is a solid?', 'इनमें ठोस कौन है?', '🧱', [['Brick', 'ईंट'], ['Milk', 'दूध'], ['Air', 'हवा']], 0, 'Solids have a fixed shape.', 'ठोस का आकार निश्चित होता है।'),
        Q('Which one is a liquid?', 'इनमें द्रव कौन है?', '🥛', [['Juice', 'जूस'], ['Stone', 'पत्थर'], ['Smoke', 'धुआँ']], 0, 'Liquids flow and take the shape of their container.', 'द्रव बहते हैं और बर्तन का आकार ले लेते हैं।'),
        Q('Which one is a gas?', 'इनमें गैस कौन है?', '🎈', [['Air in a balloon', 'गुब्बारे की हवा'], ['Ice', 'बर्फ़'], ['Oil', 'तेल']], 0, 'Gases spread out to fill any space.', 'गैस हर जगह फैल जाती है।'),
        Q('A magnet attracts…', 'चुंबक किसे खींचता है?', '🧲', [['Iron nails', 'लोहे की कील'], ['Paper', 'काग़ज़'], ['Wood', 'लकड़ी']], 0, 'Magnets attract iron and steel.', 'चुंबक लोहे और स्टील को खींचता है।'),
        Q('Light travels in a…', 'प्रकाश कैसे चलता है?', '🔦', [['Straight line', 'सीधी रेखा में'], ['Circle', 'गोल-गोल'], ['Zig-zag', 'टेढ़ा-मेढ़ा']], 0, 'That is why shadows form behind objects.', 'इसीलिए चीज़ों के पीछे परछाईं बनती है।'),
      ] },
    { id: 's-earth', world: W, type: 'quiz', levels: [2, 3], title: { en: 'Care for our Earth', hi: 'धरती की देखभाल' }, skills: ['science', 'values'],
      questions: [
        Q('Which bin is for vegetable peels?', 'सब्ज़ी के छिलके किस डिब्बे में?', '🗑️', [['Green (wet waste)', 'हरा (गीला कचरा)'], ['Blue (dry waste)', 'नीला (सूखा कचरा)'], ['On the road', 'सड़क पर']], 0, 'Wet waste goes in the green bin and can become compost.', 'गीला कचरा हरे डिब्बे में जाता है और खाद बन सकता है।'),
        Q('What makes air dirty?', 'हवा को गंदा कौन करता है?', '🏭', [['Smoke from vehicles and factories', 'गाड़ियों और फ़ैक्टरियों का धुआँ'], ['Trees', 'पेड़'], ['Rain', 'बारिश']], 0, 'Smoke pollutes air; trees help clean it.', 'धुआँ हवा को गंदा करता है; पेड़ उसे साफ़ करते हैं।'),
        Q('Instead of plastic bags we should use…', 'प्लास्टिक की थैली की जगह क्या इस्तेमाल करें?', '🛍️', [['Cloth bags', 'कपड़े का थैला'], ['More plastic', 'और प्लास्टिक'], ['Nothing', 'कुछ नहीं']], 0, 'Cloth bags can be used again and again.', 'कपड़े का थैला बार-बार इस्तेमाल हो सकता है।'),
        Q('How can we save electricity?', 'बिजली कैसे बचाएँ?', '💡', [['Switch off lights when leaving', 'कमरे से जाते समय लाइट बंद करें'], ['Keep the TV on all day', 'टीवी दिन भर चलाएँ'], ['Open the fridge often', 'बार-बार फ्रिज खोलें']], 0, 'Switching off saves electricity and money.', 'बंद करने से बिजली और पैसा दोनों बचते हैं।'),
      ] },
  );
})();
