/* Class 4–5 EVS (CBSE: Our Wondrous World themes), Science, Social Studies and Computers. Original lesson text. */
(() => {
  'use strict';
  const { Q, I, FA, QZ, MT, SO, OR, SI, topic } = window.SRL;

  // =============================================================================== SCIENCE / EVS
  topic('s-plants', '🌱', ['Plants: parts and seeds', 'पौधे: भाग और बीज'], [
    FA(['How a plant works', 'पौधा कैसे काम करता है'], '🌱', [
      I('dia:plant', ['Parts of a plant', 'पौधे के भाग'], ['Roots hold the plant and drink water. The stem carries water up. Leaves make food. Flowers turn into fruits with seeds.', 'जड़ें पौधे को थामती और पानी पीती हैं। तना पानी ऊपर ले जाता है। पत्तियाँ भोजन बनाती हैं। फूल बीज वाले फल बनते हैं।']),
      I({ bg: 'garden', actors: '🌰 🌱 🌿 🌳' }, ['A seed grows (germination)', 'बीज का अंकुरण'], ['A seed needs water, air and warmth to sprout. First a tiny root comes out, then a shoot reaches up for light.', 'बीज को अंकुरित होने के लिए पानी, हवा और गर्मी चाहिए। पहले छोटी जड़ निकलती है, फिर अंकुर रोशनी की ओर बढ़ता है।']),
      I({ bg: 'meadow', actors: '^🌬️ ^🌼 🌾' }, ['Seeds travel', 'बीज यात्रा करते हैं'], ['Wind carries light, fluffy seeds (cotton, dandelion). Water carries floating seeds (coconut). Animals carry sticky or tasty ones. Some pods burst open (pea, balsam).', 'हवा हल्के, रुई जैसे बीज ले जाती है (कपास)। पानी तैरने वाले बीज (नारियल)। जानवर चिपचिपे या स्वादिष्ट बीज। कुछ फलियाँ फटकर बीज फेंकती हैं (मटर)।']),
      I('🌵', ['Plants adapt', 'पौधों का अनुकूलन'], ['Cactus stores water in its thick stem and has spines instead of leaves. Lotus has wide floating leaves with a waxy coat.', 'नागफनी मोटे तने में पानी जमा करती है और पत्तियों की जगह काँटे होते हैं। कमल की चौड़ी पत्तियाँ पानी पर तैरती हैं।']),
    ], [
      Q('🌱', ['Which part of a plant makes food?', 'पौधे का कौन सा भाग भोजन बनाता है?'], ['Leaf', 'पत्ती'], [['Root', 'जड़'], ['Flower', 'फूल']]),
      Q('🥥', ['A coconut seed is carried by…', 'नारियल का बीज कौन ले जाता है?'], ['water', 'पानी'], [['wind', 'हवा'], ['birds', 'पक्षी']]),
      Q('💧', ['Which part carries water from roots to leaves?', 'जड़ से पत्तियों तक पानी कौन ले जाता है?'], ['Stem', 'तना'], [['Flower', 'फूल'], ['Seed', 'बीज']]),
      Q('🌵', ['Why does a cactus have spines?', 'नागफनी के काँटे क्यों होते हैं?'], ['To save water and stay safe', 'पानी बचाने और सुरक्षित रहने के लिए'], [['To look pretty', 'सुंदर दिखने के लिए'], ['To make food faster', 'जल्दी भोजन बनाने के लिए']]),
      Q('🌰', ['A seed does NOT need ___ to sprout.', 'अंकुरण के लिए बीज को ___ नहीं चाहिए।'], ['soil always', 'हमेशा मिट्टी'], [['water', 'पानी'], ['air', 'हवा']], ['Seeds can sprout on wet cotton – soil is needed later to grow big.', 'बीज गीली रुई पर भी अंकुरित हो जाते हैं – बड़े होने के लिए बाद में मिट्टी चाहिए।']),
    ]),
    SO(['How do these seeds travel?', 'ये बीज कैसे यात्रा करते हैं?'], [['w', '🌬️', 'Wind', 'हवा'], ['a', '🐦', 'Animals', 'जानवर'], ['h', '💧', 'Water', 'पानी']], [
      ['☁️', 'w', 'cotton', 'कपास'], ['🌼', 'w', 'dandelion', 'डेंडिलायन'], ['🍁', 'w', 'maple wing seed', 'मेपल'], ['🥭', 'a', 'mango', 'आम'], ['🌾', 'a', 'sticky burr', 'चिपकू बीज'], ['🍒', 'a', 'berries', 'बेरी'], ['🥥', 'h', 'coconut', 'नारियल'], ['🪷', 'h', 'lotus', 'कमल']]),
  ]);
  topic('s-photo', '☀️', ['Food from sunlight and food chains', 'धूप से भोजन और खाद्य शृंखला'], [
    FA(['Plants are food factories', 'पौधे भोजन की फ़ैक्ट्री हैं'], '☀️', [
      I('dia:photo', ['Photosynthesis', 'प्रकाश संश्लेषण'], ['Leaves use sunlight, water and carbon dioxide from air to make food (sugar). They give out oxygen – the air we breathe!', 'पत्तियाँ धूप, पानी और हवा की कार्बन डाइऑक्साइड से भोजन (शर्करा) बनाती हैं। और ऑक्सीजन छोड़ती हैं – जो हम साँस में लेते हैं!']),
      I('🟢', ['Chlorophyll', 'पर्णहरित'], ['The green colour in leaves is chlorophyll. It catches sunlight like a solar panel.', 'पत्तियों का हरा रंग पर्णहरित है। यह सोलर पैनल की तरह धूप पकड़ता है।']),
      I({ bg: 'meadow', actors: '🌿 🦗 🐸 🐍 ^🦅' }, ['Food chain', 'खाद्य शृंखला'], ['Grass → grasshopper → frog → snake → eagle. Energy passes from plants to animals. Plants are producers; animals are consumers.', 'घास → टिड्डा → मेंढक → साँप → बाज़। ऊर्जा पौधों से जानवरों तक जाती है। पौधे उत्पादक हैं, जानवर उपभोक्ता।']),
      I('🍄', ['Decomposers', 'अपघटक'], ['Mushrooms, worms and tiny germs break down dead plants and animals and return goodness to the soil.', 'कुकुरमुत्ते, केंचुए और छोटे जीवाणु मरे पौधों-जानवरों को तोड़कर मिट्टी में पोषण लौटाते हैं।']),
    ], [
      Q('🌿', ['Plants give out which gas in sunlight?', 'धूप में पौधे कौन सी गैस छोड़ते हैं?'], ['Oxygen', 'ऑक्सीजन'], [['Carbon dioxide', 'कार्बन डाइऑक्साइड'], ['Smoke', 'धुआँ']]),
      Q('🟢', ['What makes leaves green?', 'पत्तियाँ हरी क्यों होती हैं?'], ['Chlorophyll', 'पर्णहरित'], [['Paint', 'रंग'], ['Water', 'पानी']]),
      Q('🐸', ['Grass → grasshopper → ___ → snake', 'घास → टिड्डा → ___ → साँप'], ['frog', 'मेंढक'], [['cow', 'गाय'], ['eagle', 'बाज़']]),
      Q('🍄', ['A mushroom is a…', 'कुकुरमुत्ता है एक…'], ['decomposer', 'अपघटक'], [['producer', 'उत्पादक'], ['carnivore', 'मांसाहारी']]),
    ]),
    OR(['Build the food chain', 'खाद्य शृंखला बनाओ'], [[['Tap from the plant to the top hunter.', 'पौधे से शुरू करके सबसे बड़े शिकारी तक दबाओ।'], [['🌾', 'grain', 'अनाज'], ['🐭', 'mouse', 'चूहा'], ['🐍', 'snake', 'साँप'], ['🦅', 'eagle', 'बाज़']]], [['Now a sea food chain.', 'अब समुद्र की खाद्य शृंखला।'], [['🌿', 'sea plants', 'समुद्री पौधे'], ['🦐', 'tiny shrimp', 'छोटी झींगा'], ['🐟', 'small fish', 'छोटी मछली'], ['🦈', 'shark', 'शार्क']]]]),
  ]);
  topic('s-animals', '🐾', ['Animals: homes and adaptations', 'जानवर: घर और अनुकूलन'], [
    FA(['Built for their homes', 'अपने घर के हिसाब से बने'], '🐾', [
      I({ bg: 'desert', actors: '🐪 🌵' }, ['Desert', 'रेगिस्तान'], ['Camels store fat in their hump, have long eyelashes against sand and wide feet that do not sink.', 'ऊँट कूबड़ में चर्बी जमा करता है, रेत से बचने को लंबी पलकें और न धँसने वाले चौड़े पैर।']),
      I({ bg: 'snow', actors: '🐻‍❄️ 🧊' }, ['Polar lands', 'ध्रुवीय प्रदेश'], ['Polar bears have thick fur and a layer of fat to stay warm. White fur hides them in snow.', 'ध्रुवीय भालू के मोटे बाल और चर्बी की परत उन्हें गर्म रखती है। सफ़ेद बाल बर्फ़ में छिपाते हैं।']),
      I({ bg: 'sea', actors: '~🐟 ~🐬 ~🐙' }, ['Water', 'पानी'], ['Fish breathe with gills and swim with fins. Dolphins and whales breathe air through a blowhole.', 'मछलियाँ गलफड़ों से साँस लेती हैं और पंखों से तैरती हैं। डॉल्फ़िन और व्हेल ऊपर के छेद से हवा में साँस लेती हैं।']),
      I({ bg: 'tree', actors: '@🐒 @🦜 🐿️' }, ['Trees and forests', 'पेड़ और जंगल'], ['Monkeys have long arms and tails to swing. Parrots have curved beaks to crack nuts and claws to grip branches.', 'बंदरों की लंबी बाँहें और पूँछ झूलने के लिए। तोतों की मुड़ी चोंच मेवे तोड़ने और पंजे डाल पकड़ने के लिए।']),
      I('🦇', ['Night animals', 'रात के जानवर'], ['Owls have big eyes for seeing in the dark. Bats find their way using echoes of their own squeaks.', 'उल्लू की बड़ी आँखें अँधेरे में देखती हैं। चमगादड़ अपनी आवाज़ की गूँज से रास्ता ढूँढ़ते हैं।']),
    ], [
      Q('🐪', ['Why does a camel have wide feet?', 'ऊँट के चौड़े पैर क्यों?'], ['So it does not sink in sand', 'रेत में न धँसे'], [['To swim', 'तैरने के लिए'], ['To climb trees', 'पेड़ पर चढ़ने के लिए']]),
      Q('🐟', ['Fish breathe with…', 'मछली साँस लेती है…'], ['gills', 'गलफड़ों से'], [['lungs', 'फेफड़ों से'], ['skin only', 'सिर्फ़ त्वचा से']]),
      Q('🦉', ['Owls see well at night because of their…', 'उल्लू रात में अच्छा देखता है क्योंकि…'], ['big eyes', 'बड़ी आँखें'], [['long tail', 'लंबी पूँछ'], ['sharp teeth', 'तेज़ दाँत']]),
      Q('🐻‍❄️', ['What keeps a polar bear warm?', 'ध्रुवीय भालू को गर्म क्या रखता है?'], ['Thick fur and fat', 'मोटे बाल और चर्बी'], [['Sunlight', 'धूप'], ['A sweater', 'स्वेटर']]),
    ]),
    SO(['Where does it live?', 'यह कहाँ रहता है?'], [['d', '🏜️', 'Desert', 'रेगिस्तान'], ['p', '❄️', 'Polar', 'ध्रुवीय'], ['w', '🌊', 'Water', 'पानी'], ['f', '🌳', 'Forest', 'जंगल']], [
      ['🐪', 'd', 'camel', 'ऊँट'], ['🦎', 'd', 'desert lizard', 'छिपकली'], ['🐧', 'p', 'penguin', 'पेंगुइन'], ['🦭', 'p', 'seal', 'सील'], ['🐋', 'w', 'whale', 'व्हेल'], ['🐢', 'w', 'turtle', 'कछुआ'], ['🐅', 'f', 'tiger', 'बाघ'], ['🐒', 'f', 'monkey', 'बंदर']]),
  ]);
  topic('s-food', '🥗', ['Food and nutrition', 'भोजन और पोषण'], [
    FA(['Eat right, grow bright', 'सही खाओ, आगे बढ़ो'], '🥗', [
      I('dia:foodplate', ['A balanced meal', 'संतुलित भोजन'], ['A healthy plate has all food groups: grains for energy, dal or milk for growth, fruits and vegetables for protection, and water.', 'स्वस्थ थाली में सब कुछ हो: ऊर्जा के लिए अनाज, बढ़ने के लिए दाल-दूध, रक्षा के लिए फल-सब्ज़ी, और पानी।']),
      I('🍚', ['Carbohydrates and fats – energy', 'कार्बोहाइड्रेट और वसा – ऊर्जा'], ['Rice, roti, potato and sugar give energy. Ghee, oil and butter give a lot of energy – eat a little.', 'चावल, रोटी, आलू, चीनी ऊर्जा देते हैं। घी, तेल, मक्खन बहुत ऊर्जा देते हैं – थोड़ा खाओ।']),
      I('🥚', ['Proteins – body builders', 'प्रोटीन – शरीर बनाने वाले'], ['Dal, paneer, milk, eggs, fish and nuts build muscles and help us grow.', 'दाल, पनीर, दूध, अंडे, मछली और मेवे मांसपेशियाँ बनाते और बढ़ने में मदद करते हैं।']),
      I('🥕', ['Vitamins and minerals – protectors', 'विटामिन और खनिज – रक्षक'], ['Carrots (vitamin A) help eyes; oranges and amla (vitamin C) fight colds; milk (calcium) makes bones strong; spinach gives iron.', 'गाजर (विटामिन A) आँखों के लिए; संतरा और आँवला (विटामिन C) सर्दी से बचाते; दूध (कैल्शियम) हड्डियाँ मज़बूत; पालक में आयरन।']),
      I('🧂', ['Keep food safe', 'भोजन सुरक्षित रखो'], ['Cover food, wash fruits, and store milk in the fridge. Pickles use salt and oil, jam uses sugar to stay good for long.', 'खाना ढको, फल धोओ, दूध फ़्रिज में रखो। अचार नमक-तेल से और जैम चीनी से लंबे समय तक ठीक रहते हैं।']),
    ], [
      Q('🥛', ['Which nutrient makes bones strong?', 'हड्डियाँ किससे मज़बूत होती हैं?'], ['Calcium', 'कैल्शियम'], [['Sugar', 'चीनी'], ['Fat', 'वसा']]), Q('🍊', ['Vitamin C is found in…', 'विटामिन C किसमें मिलता है?'], ['amla and oranges', 'आँवला और संतरा'], [['rice', 'चावल'], ['ghee', 'घी']]),
      Q('🫘', ['Dal is rich in…', 'दाल में भरपूर होता है…'], ['protein', 'प्रोटीन'], [['fat', 'वसा'], ['vitamin C', 'विटामिन C']]), Q('🥕', ['Carrots are good for the…', 'गाजर किसके लिए अच्छी?'], ['eyes', 'आँखें'], [['hair only', 'सिर्फ़ बाल'], ['nails only', 'सिर्फ़ नाख़ून']]),
      Q('🍬', ['Jam stays good for long because of…', 'जैम लंबे समय तक ठीक रहता है क्योंकि…'], ['sugar', 'चीनी'], [['salt', 'नमक'], ['water', 'पानी']]),
    ]),
    SO(['Sort by what it gives us', 'क्या देता है, उस हिसाब से छाँटो'], [['e', '⚡', 'Energy', 'ऊर्जा'], ['b', '💪', 'Body-building', 'शरीर निर्माण'], ['p', '🛡️', 'Protection', 'रक्षा']], [
      ['🍚', 'e', 'rice', 'चावल'], ['🫓', 'e', 'roti', 'रोटी'], ['🥔', 'e', 'potato', 'आलू'], ['🫘', 'b', 'dal', 'दाल'], ['🥚', 'b', 'egg', 'अंडा'], ['🧀', 'b', 'paneer', 'पनीर'], ['🥕', 'p', 'carrot', 'गाजर'], ['🍊', 'p', 'orange', 'संतरा'], ['🥬', 'p', 'spinach', 'पालक']]),
  ]);
  topic('s-digest', '🦷', ['Teeth and digestion', 'दाँत और पाचन'], [
    FA(['The journey of food', 'भोजन की यात्रा'], '🦷', [
      I('🦷', ['Four kinds of teeth', 'चार तरह के दाँत'], ['Incisors cut, canines tear, premolars and molars grind. Children have 20 milk teeth; adults have 32 permanent teeth.', 'कृंतक काटते, रदनक फाड़ते, अग्रचर्वणक और चर्वणक पीसते हैं। बच्चों के 20 दूध के दाँत; बड़ों के 32 स्थायी दाँत।']),
      I('dia:digest', ['Digestion', 'पाचन'], ['Food travels from mouth → food pipe → stomach → small intestine → large intestine. Goodness goes into the blood; waste leaves the body.', 'भोजन मुँह → भोजन नली → आमाशय → छोटी आँत → बड़ी आँत तक जाता है। पोषण ख़ून में जाता है, बेकार बाहर निकलता है।']),
      I('🪥', ['Care of teeth', 'दाँतों की देखभाल'], ['Brush twice a day, rinse after meals, eat fewer sticky sweets and visit the dentist. Germs + sugar = cavities.', 'दिन में दो बार ब्रश, खाने के बाद कुल्ला, चिपचिपी मिठाई कम, और डेंटिस्ट के पास जाओ। कीटाणु + चीनी = सड़न।']),
    ], [
      Q('🦷', ['Which teeth cut food?', 'कौन से दाँत भोजन काटते हैं?'], ['Incisors', 'कृंतक'], [['Molars', 'चर्वणक'], ['Canines', 'रदनक']]), Q('🔢', ['How many milk teeth does a child have?', 'बच्चे के कितने दूध के दाँत?'], '20', ['32', '28']),
      Q('🌀', ['Where does food’s goodness go into the blood?', 'पोषण ख़ून में कहाँ जाता है?'], ['Small intestine', 'छोटी आँत'], [['Food pipe', 'भोजन नली'], ['Mouth', 'मुँह']]), Q('🪥', ['How often should we brush?', 'कितनी बार ब्रश करें?'], ['Twice a day', 'दिन में दो बार'], [['Once a week', 'हफ़्ते में एक बार'], ['Never', 'कभी नहीं']]),
    ]),
  ]);
  topic('s-body', '🦴', ['Our body: bones, muscles and senses', 'हमारा शरीर: हड्डियाँ, मांसपेशियाँ, ज्ञानेंद्रियाँ'], [
    FA(['The amazing body', 'अद्भुत शरीर'], '🦴', [
      I('🦴', ['Skeleton', 'कंकाल'], ['An adult has 206 bones. The skull protects the brain, the ribs protect the heart and lungs, and the backbone keeps us upright.', 'बड़ों में 206 हड्डियाँ होती हैं। खोपड़ी दिमाग़ की, पसलियाँ दिल-फेफड़ों की रक्षा करती हैं, रीढ़ हमें सीधा रखती है।']),
      I('💪', ['Muscles and joints', 'मांसपेशियाँ और जोड़'], ['Muscles pull bones to move them. Joints let us bend: knee and elbow (hinge), shoulder and hip (ball and socket).', 'मांसपेशियाँ हड्डियों को खींचकर हिलाती हैं। जोड़ मुड़ने देते हैं: घुटना-कोहनी (कब्ज़ा), कंधा-कूल्हा (गेंद-गड्ढा)।']),
      I('❤️', ['Heart and lungs', 'दिल और फेफड़े'], ['The heart pumps blood about 70–100 times a minute. Lungs take in oxygen and breathe out carbon dioxide.', 'दिल एक मिनट में लगभग 70–100 बार ख़ून पंप करता है। फेफड़े ऑक्सीजन लेते और कार्बन डाइऑक्साइड छोड़ते हैं।']),
      I('🧠', ['Brain and senses', 'दिमाग़ और ज्ञानेंद्रियाँ'], ['Eyes, ears, nose, tongue and skin send messages through nerves to the brain, which decides what to do.', 'आँख, कान, नाक, जीभ और त्वचा नसों से दिमाग़ को संदेश भेजते हैं, दिमाग़ तय करता है क्या करना है।']),
      I('🩹', ['First aid', 'प्राथमिक उपचार'], ['Small cut: wash with clean water, apply antiseptic, cover. Burn: cool under running water for 10 minutes. Always tell an adult.', 'छोटा कट: साफ़ पानी से धोओ, दवा लगाओ, ढको। जलना: 10 मिनट बहते पानी में ठंडा करो। हमेशा बड़ों को बताओ।']),
    ], [
      Q('💀', ['Which bones protect the brain?', 'दिमाग़ की रक्षा कौन करता है?'], ['Skull', 'खोपड़ी'], [['Ribs', 'पसलियाँ'], ['Backbone', 'रीढ़']]), Q('🦴', ['How many bones in an adult?', 'बड़ों में कितनी हड्डियाँ?'], '206', ['106', '300']),
      Q('🦵', ['The knee is a ___ joint.', 'घुटना ___ जोड़ है।'], ['hinge', 'कब्ज़ा'], [['ball and socket', 'गेंद-गड्ढा'], ['fixed', 'अचल']]), Q('🔥', ['First aid for a small burn:', 'छोटे जलने पर पहले:'], ['Cool it under running water', 'बहते पानी में ठंडा करो'], [['Put butter on it', 'मक्खन लगाओ'], ['Ignore it', 'ध्यान मत दो']]),
      Q('🫁', ['Which organ takes in oxygen?', 'ऑक्सीजन कौन लेता है?'], ['Lungs', 'फेफड़े'], [['Stomach', 'आमाशय'], ['Kidney', 'गुर्दा']]),
    ]),
  ]);
  topic('s-water', '💧', ['Water: the essence of life', 'जल: जीवन का सार'], [
    FA(['Precious water', 'क़ीमती पानी'], '💧', [
      I('dia:watercycle', ['The water cycle', 'जल चक्र'], ['The Sun heats water → it rises as vapour (evaporation) → cools into clouds (condensation) → falls as rain → flows back to rivers and seas.', 'सूरज पानी गर्म करता है → भाप बनकर ऊपर (वाष्पीकरण) → ठंडा होकर बादल (संघनन) → बारिश → नदियों-समुद्र में वापस।']),
      I('🌍', ['Little fresh water', 'बहुत कम मीठा पानी'], ['Most of Earth’s water is salty sea water. Only a tiny part is fresh water we can drink.', 'धरती का ज़्यादातर पानी खारा समुद्री पानी है। पीने लायक मीठा पानी बहुत थोड़ा है।']),
      I({ bg: 'village', actors: '🪣 🏡 🌧️' }, ['Rainwater harvesting', 'वर्षा जल संचयन'], ['Collecting rainwater from roofs into tanks or pits saves water and fills up the ground water.', 'छत का बारिश का पानी टंकी या गड्ढे में जमा करने से पानी बचता है और भूजल भरता है।']),
      I('🚰', ['Safe drinking water', 'सुरक्षित पीने का पानी'], ['Boil, filter or use a purifier. Dirty water spreads diseases like cholera and typhoid.', 'उबालो, छानो या प्यूरीफ़ायर लगाओ। गंदा पानी हैज़ा और टायफ़ाइड जैसी बीमारियाँ फैलाता है।']),
    ], [
      Q('☁️', ['Water vapour turning into clouds is…', 'भाप का बादल बनना…'], ['condensation', 'संघनन'], [['evaporation', 'वाष्पीकरण'], ['melting', 'पिघलना']]), Q('☀️', ['Water turning into vapour in sunlight is…', 'धूप में पानी का भाप बनना…'], ['evaporation', 'वाष्पीकरण'], [['freezing', 'जमना'], ['condensation', 'संघनन']]),
      Q('🌊', ['Most water on Earth is…', 'धरती का ज़्यादातर पानी…'], ['salty sea water', 'खारा समुद्री पानी'], [['in glaciers', 'हिमनद में'], ['in bottles', 'बोतलों में']]), Q('🦠', ['Dirty water can cause…', 'गंदे पानी से हो सकता है…'], ['cholera', 'हैज़ा'], [['strong bones', 'मज़बूत हड्डियाँ'], ['good sleep', 'अच्छी नींद']]),
    ]),
    SI(['Save water', 'पानी बचाओ'], [
      ['🚰', ['You see a tap dripping in the school washroom.', 'स्कूल के बाथरूम में नल टपक रहा है।'], [[['Close it tight and tell the teacher', 'कसकर बंद करो और टीचर को बताओ'], true, ['A dripping tap wastes many litres a day.', 'टपकता नल रोज़ कई लीटर बर्बाद करता है।']], [['Ignore it – not my tap', 'छोड़ो – मेरा नल नहीं'], false, ['Water belongs to everyone; saving it is everyone’s job.', 'पानी सबका है; बचाना सबकी ज़िम्मेदारी है।']]]],
      ['🪥', ['You are brushing your teeth.', 'तुम ब्रश कर रहे हो।'], [[['Turn the tap off while brushing', 'ब्रश करते समय नल बंद रखो'], true, ['Use a mug – it saves over 10 litres!', 'मग इस्तेमाल करो – 10 लीटर से ज़्यादा बचता है!']], [['Let it run the whole time', 'पूरे समय नल चलने दो'], false, ['That wastes clean water.', 'इससे साफ़ पानी बर्बाद होता है।']]]],
    ], ['Every drop counts.', 'हर बूँद क़ीमती है।']),
  ]);
  topic('s-river', '🏞️', ['Journey of a river', 'नदी की यात्रा'], [
    FA(['From mountain to sea', 'पहाड़ से समुद्र तक'], '🏞️', [
      I({ bg: 'mountain', actors: '❄️ 💧' }, ['The source', 'उद्गम'], ['Many rivers begin in mountains from melting glaciers or springs. The Ganga starts at the Gangotri glacier.', 'कई नदियाँ पहाड़ों पर पिघलते हिमनद या झरनों से निकलती हैं। गंगा गंगोत्री हिमनद से निकलती है।']),
      I({ bg: 'river', actors: '~🐟 🌾 🏘️' }, ['In the plains', 'मैदानों में'], ['The river slows down and spreads fertile soil. Farms, towns and cities grow along its banks.', 'नदी धीमी होकर उपजाऊ मिट्टी फैलाती है। किनारों पर खेत, गाँव और शहर बसते हैं।']),
      I({ bg: 'sea', actors: '~🐬 🏝️' }, ['The mouth', 'मुहाना'], ['Finally the river meets the sea. The Ganga and Brahmaputra form the Sundarbans delta, home of the Royal Bengal tiger.', 'आख़िर में नदी समुद्र से मिलती है। गंगा और ब्रह्मपुत्र सुंदरबन डेल्टा बनाती हैं, जहाँ रॉयल बंगाल टाइगर रहता है।']),
      I('🏗️', ['Dams', 'बाँध'], ['Dams store river water for farms and make electricity, but can flood forests and villages – they must be planned carefully.', 'बाँध खेती के लिए पानी जमा करते और बिजली बनाते हैं, पर जंगल-गाँव डूब सकते हैं – सोच-समझकर बनाने चाहिए।']),
    ], [
      Q('🏔️', ['The Ganga begins at…', 'गंगा कहाँ से निकलती है?'], ['Gangotri glacier', 'गंगोत्री हिमनद'], [['Bay of Bengal', 'बंगाल की खाड़ी'], ['Thar Desert', 'थार मरुस्थल']]),
      Q('🌊', ['Where a river meets the sea is its…', 'नदी जहाँ समुद्र से मिलती है…'], ['mouth', 'मुहाना'], [['source', 'उद्गम'], ['bank', 'किनारा']]),
      Q('🐅', ['The Sundarbans are famous for…', 'सुंदरबन किसके लिए प्रसिद्ध है?'], ['Royal Bengal tigers', 'रॉयल बंगाल टाइगर'], [['camels', 'ऊँट'], ['penguins', 'पेंगुइन']]),
    ]),
  ]);
  topic('s-matter', '🧊', ['Solids, liquids and gases', 'ठोस, द्रव और गैस'], [
    FA(['States of matter', 'पदार्थ की अवस्थाएँ'], '🧊', [
      I('dia:matter', ['Three states', 'तीन अवस्थाएँ'], ['Solids keep their shape. Liquids flow and take the shape of the container. Gases spread to fill all the space.', 'ठोस अपना आकार रखते हैं। द्रव बहते और बर्तन का आकार लेते हैं। गैसें पूरी जगह में फैल जाती हैं।']),
      I('🧊', ['Changing state', 'अवस्था बदलना'], ['Ice melts into water (melting). Water boils into steam (boiling). Steam cools into water drops (condensation). Water freezes into ice (freezing).', 'बर्फ़ पिघलकर पानी (गलन)। पानी उबलकर भाप (क्वथन)। भाप ठंडी होकर बूँदें (संघनन)। पानी जमकर बर्फ़ (हिमीकरण)।']),
      I('🧂', ['Dissolving', 'घुलना'], ['Sugar and salt dissolve in water; sand and oil do not. We can separate sand from water by filtering.', 'चीनी और नमक पानी में घुलते हैं; रेत और तेल नहीं। छानकर रेत को पानी से अलग कर सकते हैं।']),
    ], [
      Q('🧊', ['Ice turning into water is called…', 'बर्फ़ का पानी बनना…'], ['melting', 'गलन'], [['freezing', 'हिमीकरण'], ['boiling', 'क्वथन']]), Q('🎈', ['Air in a balloon is a…', 'गुब्बारे की हवा है…'], ['gas', 'गैस'], [['solid', 'ठोस'], ['liquid', 'द्रव']]),
      Q('🥤', ['Juice takes the shape of the glass because it is a…', 'जूस गिलास का आकार लेता है क्योंकि वह…'], ['liquid', 'द्रव'], [['solid', 'ठोस'], ['gas', 'गैस']]), Q('⏳', ['Which does NOT dissolve in water?', 'पानी में क्या नहीं घुलता?'], ['sand', 'रेत'], [['sugar', 'चीनी'], ['salt', 'नमक']]),
    ]),
    SO(['Solid, liquid or gas?', 'ठोस, द्रव या गैस?'], [['s', '🧱', 'Solid', 'ठोस'], ['l', '💧', 'Liquid', 'द्रव'], ['g', '💨', 'Gas', 'गैस']], [
      ['🪨', 's', 'stone', 'पत्थर'], ['🥄', 's', 'spoon', 'चम्मच'], ['🧊', 's', 'ice', 'बर्फ़'], ['🥛', 'l', 'milk', 'दूध'], ['🛢️', 'l', 'oil', 'तेल'], ['🍯', 'l', 'honey', 'शहद'], ['♨️', 'g', 'steam', 'भाप'], ['🎈', 'g', 'air in a balloon', 'गुब्बारे की हवा']]),
  ]);
  topic('s-force', '⚙️', ['Force, energy and simple machines', 'बल, ऊर्जा और सरल मशीनें'], [
    FA(['Push, pull and power', 'धक्का, खिंचाव और ताक़त'], '⚙️', [
      I('🛒', ['Force', 'बल'], ['A push or a pull is a force. It can start, stop, speed up or change the shape of things. Gravity pulls everything down to Earth.', 'धक्का या खिंचाव बल है। यह चीज़ों को चला, रोक, तेज़ कर या आकार बदल सकता है। गुरुत्वाकर्षण सब कुछ धरती की ओर खींचता है।']),
      I('🛝', ['Friction', 'घर्षण'], ['Friction slows moving things. Rough surfaces have more friction; that is why shoes have grooves and slides are smooth.', 'घर्षण चलती चीज़ों को धीमा करता है। खुरदरी सतह पर ज़्यादा घर्षण; इसलिए जूतों में खाँचे और फिसलपट्टी चिकनी।']),
      I('dia:lever', ['Simple machines', 'सरल मशीनें'], ['Levers (see-saw, scissors), pulleys (well), wheels and axles (cycle), inclined planes (ramp) and wedges (knife) make work easier.', 'उत्तोलक (सी-सॉ, कैंची), घिरनी (कुआँ), पहिया-धुरी (साइकिल), ढलान (रैंप) और फन्नी (चाकू) काम आसान बनाते हैं।']),
      I('☀️', ['Energy', 'ऊर्जा'], ['Energy lets us do work. Sun, wind and water give renewable energy; coal and petrol will run out and pollute the air.', 'ऊर्जा से काम होता है। सूरज, हवा, पानी नवीकरणीय ऊर्जा देते हैं; कोयला और पेट्रोल ख़त्म होंगे और हवा गंदी करते हैं।']),
    ], [
      Q('🍎', ['What makes an apple fall down?', 'सेब नीचे क्यों गिरता है?'], ['Gravity', 'गुरुत्वाकर्षण'], [['Friction', 'घर्षण'], ['Magnetism', 'चुंबकत्व']]), Q('✂️', ['Scissors are a kind of…', 'कैंची किस तरह की मशीन है?'], ['lever', 'उत्तोलक'], [['pulley', 'घिरनी'], ['wedge only', 'सिर्फ़ फन्नी']]),
      Q('🪣', ['Drawing water from a well uses a…', 'कुएँ से पानी खींचने में…'], ['pulley', 'घिरनी'], [['ramp', 'ढलान'], ['screw', 'पेंच']]), Q('🌬️', ['Which is a renewable energy source?', 'नवीकरणीय ऊर्जा स्रोत?'], ['wind', 'हवा'], [['coal', 'कोयला'], ['petrol', 'पेट्रोल']]),
      Q('👟', ['Shoes have grooves to…', 'जूतों में खाँचे क्यों?'], ['increase friction so we don’t slip', 'घर्षण बढ़ाकर फिसलने से बचाने'], [['look nice', 'सुंदर दिखने'], ['run faster on ice', 'बर्फ़ पर तेज़ दौड़ने']]),
    ]),
  ]);
  topic('s-magnet', '🧲', ['Magnets and electricity', 'चुंबक और बिजली'], [
    FA(['Invisible forces', 'अदृश्य बल'], '🧲', [
      I('🧲', ['Magnets', 'चुंबक'], ['A magnet attracts iron things. It has a North and a South pole. Like poles push away; unlike poles pull together.', 'चुंबक लोहे की चीज़ें खींचता है। इसके उत्तर और दक्षिण ध्रुव होते हैं। समान ध्रुव दूर धकेलते, असमान खींचते हैं।']),
      I('dia:compass', ['Compass', 'दिक्सूचक'], ['A compass needle is a tiny magnet. It always points North – sailors and hikers use it to find their way.', 'दिक्सूचक की सुई छोटा चुंबक है। यह हमेशा उत्तर दिखाती है – नाविक और यात्री रास्ता ढूँढ़ते हैं।']),
      I('dia:circuit', ['A simple circuit', 'सरल परिपथ'], ['Electricity flows in a closed loop: cell → wire → bulb → switch → back. Open the switch and the bulb goes off.', 'बिजली बंद घेरे में बहती है: सेल → तार → बल्ब → स्विच → वापस। स्विच खोलो, बल्ब बुझ जाता है।']),
      I('⚠️', ['Electricity safety', 'बिजली से सुरक्षा'], ['Never touch switches with wet hands or poke anything into a socket. Metals conduct electricity; rubber and plastic do not (insulators).', 'गीले हाथों से स्विच मत छुओ, सॉकेट में कुछ मत डालो। धातुएँ बिजली चलाती हैं; रबर, प्लास्टिक नहीं (कुचालक)।']),
    ], [
      Q('🧲', ['A magnet attracts…', 'चुंबक किसे खींचता है?'], ['an iron nail', 'लोहे की कील'], [['a wooden pencil', 'लकड़ी की पेंसिल'], ['a plastic cup', 'प्लास्टिक कप']]), Q('🧭', ['A compass needle points to the…', 'दिक्सूचक सुई दिखाती है…'], ['North', 'उत्तर'], [['East', 'पूर्व'], ['Sky', 'आसमान']]),
      Q('💡', ['The bulb lights when the circuit is…', 'बल्ब कब जलता है?'], ['closed', 'परिपथ बंद हो'], [['open', 'परिपथ खुला हो'], ['broken', 'टूटा हो']]), Q('🧤', ['Electricians wear rubber gloves because rubber is an…', 'बिजली मिस्त्री रबर के दस्ताने पहनते हैं क्योंकि रबर…'], ['insulator', 'कुचालक है'], [['conductor', 'सुचालक है'], ['magnet', 'चुंबक है']]),
    ]),
    SO(['Conductor or insulator?', 'सुचालक या कुचालक?'], [['c', '⚡', 'Conductor (lets electricity pass)', 'सुचालक'], ['i', '🛡️', 'Insulator (stops it)', 'कुचालक']], [
      ['🔩', 'c', 'iron nail', 'लोहे की कील'], ['🪙', 'c', 'coin', 'सिक्का'], ['🥄', 'c', 'steel spoon', 'स्टील चम्मच'], ['🔌', 'c', 'copper wire', 'ताँबे का तार'], ['🧤', 'i', 'rubber glove', 'रबर दस्ताना'], ['🪵', 'i', 'dry wood', 'सूखी लकड़ी'], ['🧸', 'i', 'cloth toy', 'कपड़े का खिलौना'], ['🥤', 'i', 'plastic cup', 'प्लास्टिक कप']]),
  ]);
  topic('s-space', '🪐', ['Earth, Moon and space', 'धरती, चाँद और अंतरिक्ष'], [
    FA(['Our place in space', 'अंतरिक्ष में हमारी जगह'], '🪐', [
      I('dia:solar', ['The Solar System', 'सौरमंडल'], ['Eight planets go around the Sun. Mercury, Venus, Earth and Mars are rocky; Jupiter, Saturn, Uranus and Neptune are giant gas planets.', 'आठ ग्रह सूरज का चक्कर लगाते हैं। बुध, शुक्र, पृथ्वी, मंगल चट्टानी; बृहस्पति, शनि, अरुण, वरुण विशाल गैस ग्रह।']),
      I('🌍', ['Day, night and years', 'दिन, रात और साल'], ['Earth spins on its axis once a day – that makes day and night. It goes round the Sun once in 365¼ days – one year.', 'पृथ्वी अपनी धुरी पर दिन में एक बार घूमती है – इससे दिन-रात। सूरज का एक चक्कर 365¼ दिन में – एक साल।']),
      I('dia:moon', ['Phases of the Moon', 'चाँद की कलाएँ'], ['The Moon has no light of its own; it reflects sunlight. As it goes round Earth (about 29½ days) we see different shapes: new moon to full moon.', 'चाँद की अपनी रोशनी नहीं; वह सूरज की रोशनी लौटाता है। धरती का चक्कर (लगभग 29½ दिन) लगाते हुए अलग आकार दिखते हैं: अमावस से पूर्णिमा।']),
      I('dia:layers', ['Inside the Earth', 'धरती के अंदर'], ['Earth has layers: the thin crust we live on, the hot mantle, and a very hot core made mostly of iron.', 'धरती की परतें: पतली भूपर्पटी जिस पर हम रहते हैं, गर्म मेंटल, और लोहे का बहुत गर्म कोर।']),
    ], [
      Q('🪐', ['Which is the largest planet?', 'सबसे बड़ा ग्रह?'], ['Jupiter', 'बृहस्पति'], [['Earth', 'पृथ्वी'], ['Mars', 'मंगल']]), Q('🌗', ['Day and night happen because Earth…', 'दिन-रात होते हैं क्योंकि पृथ्वी…'], ['spins on its axis', 'अपनी धुरी पर घूमती है'], [['goes round the Moon', 'चाँद का चक्कर लगाती है'], ['stops at night', 'रात को रुक जाती है']]),
      Q('🌕', ['The Moon shines because it…', 'चाँद चमकता है क्योंकि…'], ['reflects sunlight', 'सूरज की रोशनी लौटाता है'], [['has its own fire', 'उसकी अपनी आग है'], ['has bulbs', 'उसमें बल्ब हैं']]), Q('📅', ['Earth takes how long to go round the Sun?', 'पृथ्वी को सूरज का चक्कर लगाने में?'], ['about 365 days', 'लगभग 365 दिन'], [['one day', 'एक दिन'], ['one month', 'एक महीना']]),
    ]),
  ]);
  topic('s-environment', '♻️', ['Waste, pollution and the 3 Rs', 'कचरा, प्रदूषण और 3R'], [
    FA(['Care for our planet', 'धरती की देखभाल'], '♻️', [
      I({ bg: 'city', actors: '🚗 💨 🏭' }, ['Air pollution', 'वायु प्रदूषण'], ['Smoke from vehicles, factories and burning garbage makes air dirty and causes coughing and asthma. Trees clean the air.', 'गाड़ियों, फ़ैक्ट्रियों और जलते कचरे का धुआँ हवा गंदी करता और खाँसी-दमा देता है। पेड़ हवा साफ़ करते हैं।']),
      I('🗑️', ['Separate your waste', 'कचरा अलग करो'], ['Green bin: wet waste (peels, leftover food) becomes compost. Blue bin: dry waste (paper, plastic, metal) can be recycled.', 'हरा डिब्बा: गीला कचरा (छिलके, बचा खाना) खाद बनता है। नीला डिब्बा: सूखा कचरा (काग़ज़, प्लास्टिक, धातु) रीसायकल होता है।']),
      I('♻️', ['Reduce, Reuse, Recycle', 'कम करो, दोबारा इस्तेमाल करो, रीसायकल करो'], ['Reduce: carry a cloth bag. Reuse: use jars as pen stands. Recycle: send paper and bottles to be made into new things.', 'कम करो: कपड़े का थैला लो। दोबारा: डिब्बों को पेन-स्टैंड बनाओ। रीसायकल: काग़ज़-बोतल नई चीज़ें बनने भेजो।']),
    ], [
      Q('🍌', ['A banana peel goes in the…', 'केले का छिलका किस डिब्बे में?'], ['green bin (wet waste)', 'हरा डिब्बा (गीला कचरा)'], [['blue bin (dry waste)', 'नीला डिब्बा (सूखा)'], ['the river', 'नदी में']]),
      Q('🛍️', ['Which is "reduce"?', '"कम करना" कौन सा है?'], ['Carry a cloth bag to the market', 'बाज़ार कपड़े का थैला ले जाओ'], [['Buy more plastic bags', 'और प्लास्टिक थैलियाँ लो'], ['Burn plastic', 'प्लास्टिक जलाओ']]),
      Q('🌳', ['What helps clean the air?', 'हवा कौन साफ़ करता है?'], ['Trees', 'पेड़'], [['Smoke', 'धुआँ'], ['Horns', 'हॉर्न']]),
    ]),
    SO(['Wet or dry waste?', 'गीला या सूखा कचरा?'], [['w', '🟢', 'Wet waste (green bin)', 'गीला (हरा डिब्बा)'], ['d', '🔵', 'Dry waste (blue bin)', 'सूखा (नीला डिब्बा)']], [
      ['🍌', 'w', 'banana peel', 'केले का छिलका'], ['🥬', 'w', 'vegetable peels', 'सब्ज़ी के छिलके'], ['🍂', 'w', 'dry leaves', 'सूखी पत्तियाँ'], ['☕', 'w', 'tea leaves', 'चाय पत्ती'], ['📰', 'd', 'newspaper', 'अख़बार'], ['🧴', 'd', 'plastic bottle', 'प्लास्टिक बोतल'], ['🥫', 'd', 'tin can', 'टिन का डिब्बा'], ['📦', 'd', 'cardboard', 'गत्ता']]),
  ]);
  topic('s-disaster', '🌪️', ['Weather, seasons and staying safe in disasters', 'मौसम, ऋतुएँ और आपदा में सुरक्षा'], [
    FA(['Be prepared', 'तैयार रहो'], '🌪️', [
      I({ bg: 'rain', actors: '☔ 🌧️ 🏠' }, ['Weather and climate', 'मौसम और जलवायु'], ['Weather is how the air is today (sunny, rainy). Climate is the usual weather of a place over many years. India has summer, monsoon and winter.', 'मौसम आज की हवा की हालत (धूप, बारिश)। जलवायु किसी जगह का सालों का सामान्य मौसम। भारत में गर्मी, बरसात और सर्दी।']),
      I('🏚️', ['Earthquake', 'भूकंप'], ['DROP, COVER, HOLD: get under a strong table, cover your head, hold on. Stay away from windows. Go to an open space after shaking stops.', 'झुको, ढको, पकड़ो: मज़बूत मेज़ के नीचे जाओ, सिर ढको, पकड़कर रहो। खिड़कियों से दूर। हिलना रुकने पर खुली जगह जाओ।']),
      I({ bg: 'river', actors: '🌊 🏠 🚣' }, ['Flood', 'बाढ़'], ['Move to higher ground, switch off electricity, do not walk through flowing water and drink only boiled water.', 'ऊँची जगह जाओ, बिजली बंद करो, बहते पानी में मत चलो, सिर्फ़ उबला पानी पियो।']),
      I('🌀', ['Cyclone and lightning', 'चक्रवात और बिजली गिरना'], ['Stay indoors, keep away from trees and poles. During lightning, do not shelter under a tree. Keep a torch, water and first-aid kit ready.', 'घर के अंदर रहो, पेड़ और खंभों से दूर। बिजली कड़कने पर पेड़ के नीचे मत रुको। टॉर्च, पानी और दवा का डिब्बा तैयार रखो।']),
    ], [
      Q('🏚️', ['In an earthquake you should…', 'भूकंप में क्या करें?'], ['drop, cover and hold', 'झुको, ढको, पकड़ो'], [['use the lift', 'लिफ़्ट लो'], ['stand near windows', 'खिड़की के पास खड़े हो']]),
      Q('🌊', ['During a flood…', 'बाढ़ में…'], ['move to higher ground', 'ऊँची जगह जाओ'], [['swim in the water', 'पानी में तैरो'], ['go to the basement', 'तहख़ाने में जाओ']]),
      Q('⚡', ['During lightning, do NOT…', 'बिजली कड़कने पर क्या नहीं करना?'], ['stand under a tall tree', 'ऊँचे पेड़ के नीचे खड़े होना'], [['stay indoors', 'घर में रहना'], ['keep away from poles', 'खंभों से दूर रहना']]),
      Q('🌦️', ['The usual weather of a place over many years is its…', 'किसी जगह का सालों का सामान्य मौसम…'], ['climate', 'जलवायु'], [['weather today', 'आज का मौसम'], ['season', 'ऋतु']]),
    ]),
  ]);

  // =============================================================================== SOCIAL STUDIES / EVS
  topic('g-community', '🏘️', ['Living together: family, neighbourhood and helpers', 'साथ रहना: परिवार, पड़ोस और सहायक'], [
    FA(['We need each other', 'हमें एक-दूसरे की ज़रूरत है'], '🏘️', [
      I({ bg: 'home', actors: '👴 👩 👦 👧' }, ['Families', 'परिवार'], ['Some families are joint (grandparents, uncles, cousins together), some are nuclear (parents and children). Everyone shares work and care.', 'कुछ परिवार संयुक्त (दादा-दादी, चाचा, भाई-बहन साथ), कुछ एकल (माता-पिता और बच्चे)। सब काम और देखभाल बाँटते हैं।']),
      I({ bg: 'village', actors: '🧑‍🌾 👩‍⚕️ 👮 🧑‍🚒' }, ['Community helpers', 'सामुदायिक सहायक'], ['Farmers, doctors, police, firefighters, sanitation workers, teachers and postal workers keep our neighbourhood running. Thank them!', 'किसान, डॉक्टर, पुलिस, दमकलकर्मी, सफ़ाईकर्मी, शिक्षक और डाकिए हमारा पड़ोस चलाते हैं। उन्हें धन्यवाद कहो!']),
      I('🗺️', ['A neighbourhood map', 'पड़ोस का नक्शा'], ['A map shows places from above using symbols and a key. North is usually at the top.', 'नक्शा ऊपर से जगहें चिह्नों और संकेत-सूची से दिखाता है। उत्तर आमतौर पर ऊपर होता है।']),
      I('🤝', ['Sharing public places', 'सार्वजनिक जगहें'], ['Parks, libraries, trains and roads belong to all of us. Keep them clean, wait your turn and help people who need it.', 'पार्क, पुस्तकालय, रेल और सड़कें हम सबकी हैं। साफ़ रखो, बारी का इंतज़ार करो, ज़रूरतमंदों की मदद करो।']),
    ], [
      Q('🧑‍🚒', ['Who puts out fires?', 'आग कौन बुझाता है?'], ['Firefighters', 'दमकलकर्मी'], [['Postal workers', 'डाकिया'], ['Farmers', 'किसान']]), Q('👨‍👩‍👧', ['Parents and children living alone together are a…', 'माता-पिता और बच्चे अकेले रहें तो…'], ['nuclear family', 'एकल परिवार'], [['joint family', 'संयुक्त परिवार'], ['team', 'टीम']]),
      Q('🗺️', ['On most maps, which direction is at the top?', 'ज़्यादातर नक्शों में ऊपर कौन सी दिशा?'], ['North', 'उत्तर'], [['South', 'दक्षिण'], ['West', 'पश्चिम']]), Q('🚮', ['In a public park we should…', 'पार्क में हमें…'], ['put litter in the bin', 'कचरा डिब्बे में डालना'], [['pluck flowers', 'फूल तोड़ना'], ['write on benches', 'बेंच पर लिखना']]),
    ]),
  ]);
  topic('g-homes', '🏠', ['Homes and travel across India', 'भारत के घर और यात्रा'], [
    FA(['Different places, different homes', 'अलग जगह, अलग घर'], '🏠', [
      I({ bg: 'river', actors: '🏠 🌧️ 🐘' }, ['Stilt houses – Assam', 'खंभों वाले घर – असम'], ['Built on bamboo poles to stay safe from floods and animals.', 'बाँस के खंभों पर बने, ताकि बाढ़ और जानवरों से बचें।']),
      I({ bg: 'lake', actors: '🛶 🏠 ❄️' }, ['Houseboats – Kashmir', 'हाउसबोट – कश्मीर'], ['Wooden homes floating on Dal Lake in Srinagar.', 'श्रीनगर की डल झील पर तैरते लकड़ी के घर।']),
      I({ bg: 'desert', actors: '🛖 🐪 ☀️' }, ['Mud houses – Rajasthan', 'मिट्टी के घर – राजस्थान'], ['Thick mud walls keep homes cool in the hot desert day and warm at night.', 'मोटी मिट्टी की दीवारें गर्म दिन में ठंडक और रात में गर्मी रखती हैं।']),
      I({ bg: 'mountain', actors: '🏡 ❄️ 🐐' }, ['Sloping roofs – hills', 'ढलवाँ छत – पहाड़'], ['Sloping roofs let snow and rain slide off. Houses use stone and wood.', 'ढलवाँ छत से बर्फ़ और बारिश फिसल जाती है। घरों में पत्थर और लकड़ी।']),
      I('🚆', ['Transport and communication', 'परिवहन और संचार'], ['We travel by road, rail, water and air. We talk across distance by post, phone and internet. India has one of the world’s largest railway networks.', 'हम सड़क, रेल, जल और वायु से यात्रा करते हैं। डाक, फ़ोन, इंटरनेट से दूर बात करते हैं। भारत का रेल नेटवर्क दुनिया के सबसे बड़ों में है।']),
    ], [
      Q('🌊', ['Why are houses in Assam built on stilts?', 'असम में घर खंभों पर क्यों?'], ['To stay safe from floods', 'बाढ़ से बचने'], [['To look tall', 'ऊँचा दिखने'], ['To catch fish', 'मछली पकड़ने']]), Q('🛶', ['Houseboats are found on…', 'हाउसबोट कहाँ मिलती हैं?'], ['Dal Lake, Kashmir', 'डल झील, कश्मीर'], [['Thar Desert', 'थार मरुस्थल'], ['Chennai beach', 'चेन्नई तट']]),
      Q('🏔️', ['Hill houses have sloping roofs so that…', 'पहाड़ी घरों की छत ढलवाँ क्यों?'], ['snow and rain slide off', 'बर्फ़-बारिश फिसल जाए'], [['birds can sit', 'पक्षी बैठें'], ['it looks pretty', 'सुंदर लगे']]), Q('📧', ['Which is a means of communication?', 'संचार का साधन?'], ['email', 'ईमेल'], [['bus', 'बस'], ['ship', 'जहाज़']]),
    ]),
  ]);
  topic('g-maps', '🧭', ['Maps, directions and the globe', 'नक्शे, दिशाएँ और ग्लोब'], [
    FA(['Finding our way', 'रास्ता ढूँढ़ना'], '🧭', [
      I('dia:compass', ['Four directions', 'चार दिशाएँ'], ['North, South, East and West. The Sun rises in the East and sets in the West. In between are NE, NW, SE and SW.', 'उत्तर, दक्षिण, पूर्व, पश्चिम। सूरज पूर्व में उगता, पश्चिम में डूबता है। बीच में उत्तर-पूर्व, उत्तर-पश्चिम आदि।']),
      I('🌐', ['The globe', 'ग्लोब'], ['A globe is a small model of Earth. The Equator is an imaginary line around the middle; the North and South Poles are at the top and bottom.', 'ग्लोब धरती का छोटा मॉडल है। भूमध्य रेखा बीच से घूमती काल्पनिक रेखा; उत्तरी और दक्षिणी ध्रुव ऊपर-नीचे।']),
      I('dia:continents', ['Continents and oceans', 'महाद्वीप और महासागर'], ['Seven continents: Asia (biggest), Africa, North America, South America, Antarctica, Europe, Australia. Five oceans; the Pacific is the largest.', 'सात महाद्वीप: एशिया (सबसे बड़ा), अफ़्रीका, उत्तर अमेरिका, दक्षिण अमेरिका, अंटार्कटिका, यूरोप, ऑस्ट्रेलिया। पाँच महासागर; प्रशांत सबसे बड़ा।']),
      I('🔣', ['Map symbols and scale', 'नक्शे के चिह्न और पैमाना'], ['Maps use colours: blue for water, green for plains/forests, brown for mountains. A scale tells real distance, e.g. 1 cm = 10 km.', 'नक्शे में रंग: पानी नीला, मैदान/जंगल हरा, पहाड़ भूरा। पैमाना असली दूरी बताता है, जैसे 1 सेमी = 10 किमी।']),
    ], [
      Q('🌅', ['The Sun rises in the…', 'सूरज कहाँ उगता है?'], ['East', 'पूर्व'], [['West', 'पश्चिम'], ['North', 'उत्तर']]), Q('🌏', ['The largest continent is…', 'सबसे बड़ा महाद्वीप?'], ['Asia', 'एशिया'], [['Europe', 'यूरोप'], ['Australia', 'ऑस्ट्रेलिया']]),
      Q('🌊', ['The largest ocean is the…', 'सबसे बड़ा महासागर?'], ['Pacific Ocean', 'प्रशांत महासागर'], [['Indian Ocean', 'हिंद महासागर'], ['Arctic Ocean', 'आर्कटिक महासागर']]), Q('🟦', ['On a map, blue usually shows…', 'नक्शे में नीला रंग दिखाता है…'], ['water', 'पानी'], [['mountains', 'पहाड़'], ['deserts', 'रेगिस्तान']]),
      Q('➖', ['The imaginary line around the middle of Earth is the…', 'धरती के बीच की काल्पनिक रेखा?'], ['Equator', 'भूमध्य रेखा'], [['Pole', 'ध्रुव'], ['Border', 'सीमा']]),
    ]),
  ]);
  topic('g-india', '🇮🇳', ['India: land, rivers, states', 'भारत: भूमि, नदियाँ, राज्य'], [
    FA(['Our country', 'हमारा देश'], '🇮🇳', [
      I('dia:indiamap', ['Physical divisions', 'भौतिक विभाग'], ['The Himalayas in the north, the Northern Plains of the Ganga, the Thar Desert in the west, the Deccan Plateau in the south, coasts and islands.', 'उत्तर में हिमालय, गंगा का उत्तरी मैदान, पश्चिम में थार मरुस्थल, दक्षिण में दक्कन का पठार, तट और द्वीप।']),
      I('🌊', ['Great rivers', 'महान नदियाँ'], ['Himalayan rivers (Ganga, Yamuna, Brahmaputra) have water all year from snow. Peninsular rivers (Godavari, Krishna, Kaveri, Narmada) depend on rain.', 'हिमालयी नदियाँ (गंगा, यमुना, ब्रह्मपुत्र) बर्फ़ से साल भर बहती हैं। प्रायद्वीपीय नदियाँ (गोदावरी, कृष्णा, कावेरी, नर्मदा) बारिश पर निर्भर।']),
      I('🏛️', ['States and Union Territories', 'राज्य और केंद्र शासित प्रदेश'], ['India has 28 states and 8 Union Territories. New Delhi is the capital. Rajasthan is the largest state by area; Goa is the smallest.', 'भारत में 28 राज्य और 8 केंद्र शासित प्रदेश हैं। राजधानी नई दिल्ली। क्षेत्रफल में राजस्थान सबसे बड़ा, गोवा सबसे छोटा राज्य।']),
      I('🏝️', ['Islands', 'द्वीप'], ['Andaman and Nicobar Islands lie in the Bay of Bengal; Lakshadweep lies in the Arabian Sea.', 'अंडमान-निकोबार बंगाल की खाड़ी में; लक्षद्वीप अरब सागर में।']),
    ], [
      Q('🏔️', ['Which mountains are in the north of India?', 'भारत के उत्तर में कौन से पहाड़?'], ['Himalayas', 'हिमालय'], [['Andes', 'एंडीज़'], ['Alps', 'आल्प्स']]), Q('🏜️', ['The Thar Desert is mostly in…', 'थार मरुस्थल ज़्यादातर कहाँ?'], ['Rajasthan', 'राजस्थान'], [['Kerala', 'केरल'], ['Assam', 'असम']]),
      Q('🗺️', ['How many states does India have?', 'भारत में कितने राज्य?'], '28', ['29', '36']), Q('🏝️', ['Lakshadweep is in the…', 'लक्षद्वीप कहाँ है?'], ['Arabian Sea', 'अरब सागर'], [['Bay of Bengal', 'बंगाल की खाड़ी'], ['Pacific Ocean', 'प्रशांत महासागर']]),
      Q('🌊', ['Which river flows all year because of Himalayan snow?', 'हिमालय की बर्फ़ से साल भर बहने वाली नदी?'], ['Ganga', 'गंगा'], [['Kaveri', 'कावेरी'], ['Godavari', 'गोदावरी']]),
    ]),
    MT(['Match the state to its capital', 'राज्य को राजधानी से मिलाओ'], [['Maharashtra', 'Mumbai'], ['Karnataka', 'Bengaluru'], ['Tamil Nadu', 'Chennai'], ['West Bengal', 'Kolkata'], ['Uttar Pradesh', 'Lucknow'], ['Rajasthan', 'Jaipur'], ['Bihar', 'Patna'], ['Gujarat', 'Gandhinagar'], ['Kerala', 'Thiruvananthapuram'], ['Telangana', 'Hyderabad'], ['Madhya Pradesh', 'Bhopal'], ['Punjab', 'Chandigarh']]),
  ]);
  topic('g-government', '🏛️', ['Our government and local self-government', 'हमारी सरकार और स्थानीय स्वशासन'], [
    FA(['Who runs our country?', 'देश कौन चलाता है?'], '🏛️', [
      I('dia:panchayat', ['Levels of government', 'सरकार के स्तर'], ['Gram Panchayat for villages, Municipality for towns and cities, State Government for a state, and the Union Government for the whole country.', 'गाँव के लिए ग्राम पंचायत, शहर के लिए नगरपालिका, राज्य के लिए राज्य सरकार, पूरे देश के लिए केंद्र सरकार।']),
      I('🧑‍🌾', ['The Gram Panchayat', 'ग्राम पंचायत'], ['Villagers elect a Sarpanch and Panchs. They look after village roads, wells, street lights and schools. The Gram Sabha is all adult villagers.', 'गाँववाले सरपंच और पंच चुनते हैं। वे सड़क, कुएँ, बत्तियाँ और स्कूल देखते हैं। ग्राम सभा = गाँव के सभी वयस्क।']),
      I('dia:vote', ['Voting', 'मतदान'], ['In a democracy, every citizen aged 18 or above can vote to choose leaders. Every vote counts equally.', 'लोकतंत्र में 18 साल या उससे बड़ा हर नागरिक नेता चुनने के लिए वोट दे सकता है। हर वोट बराबर है।']),
      I('dia:parliament', ['Parliament', 'संसद'], ['Parliament (Lok Sabha + Rajya Sabha) makes laws for the country. The Prime Minister leads the government; the President is the head of the country.', 'संसद (लोकसभा + राज्यसभा) देश के लिए क़ानून बनाती है। प्रधानमंत्री सरकार चलाते; राष्ट्रपति देश के प्रमुख।']),
    ], [
      Q('🧑‍🌾', ['The head of a Gram Panchayat is the…', 'ग्राम पंचायत का प्रमुख?'], ['Sarpanch', 'सरपंच'], [['Mayor', 'महापौर'], ['Governor', 'राज्यपाल']]), Q('🗳️', ['At what age can Indians vote?', 'भारत में वोट देने की उम्र?'], ['18 years', '18 साल'], [['10 years', '10 साल'], ['30 years', '30 साल']]),
      Q('🏙️', ['A city is looked after by the…', 'शहर की देखभाल कौन करता है?'], ['Municipality', 'नगरपालिका'], [['Gram Sabha', 'ग्राम सभा'], ['Supreme Court', 'सर्वोच्च न्यायालय']]), Q('📜', ['Who makes laws for India?', 'भारत के लिए क़ानून कौन बनाता है?'], ['Parliament', 'संसद'], [['Police', 'पुलिस'], ['Schools', 'स्कूल']]),
    ]),
  ]);
  topic('g-rights', '⚖️', ['Constitution, rights and duties', 'संविधान, अधिकार और कर्तव्य'], [
    FA(['The rule book of India', 'भारत की नियम-पुस्तक'], '⚖️', [
      I('📜', ['The Constitution', 'संविधान'], ['India’s Constitution came into force on 26 January 1950 – Republic Day. Dr B. R. Ambedkar headed the committee that drafted it.', 'भारत का संविधान 26 जनवरी 1950 को लागू हुआ – गणतंत्र दिवस। डॉ. भीमराव आंबेडकर ने इसकी मसौदा समिति की अध्यक्षता की।']),
      I('🧒', ['Rights', 'अधिकार'], ['Every child has the right to equality, to free education from 6 to 14 years, to freedom of speech and religion, and to protection from child labour.', 'हर बच्चे को समानता, 6 से 14 साल तक मुफ़्त शिक्षा, बोलने और धर्म की आज़ादी, और बाल श्रम से सुरक्षा का अधिकार है।']),
      I('🤲', ['Duties', 'कर्तव्य'], ['Respect the flag and anthem, protect public property and the environment, help others and promote harmony.', 'झंडे और राष्ट्रगान का सम्मान, सार्वजनिक संपत्ति और पर्यावरण की रक्षा, दूसरों की मदद और भाईचारा।']),
    ], [
      Q('📅', ['The Constitution came into force on…', 'संविधान कब लागू हुआ?'], ['26 January 1950', '26 जनवरी 1950'], [['15 August 1947', '15 अगस्त 1947'], ['2 October 1869', '2 अक्टूबर 1869']]), Q('📚', ['Free education is a right for children aged…', 'मुफ़्त शिक्षा का अधिकार किस उम्र तक?'], ['6 to 14 years', '6 से 14 साल'], [['1 to 3 years', '1 से 3 साल'], ['20 to 30 years', '20 से 30 साल']]),
      Q('🌳', ['Which is a DUTY?', 'कर्तव्य कौन सा है?'], ['Protecting the environment', 'पर्यावरण की रक्षा'], [['Breaking public lights', 'सार्वजनिक बत्तियाँ तोड़ना'], ['Skipping school', 'स्कूल न जाना']]), Q('✍️', ['Who led the drafting of the Constitution?', 'संविधान का मसौदा किसने बनाया?'], ['Dr B. R. Ambedkar', 'डॉ. भीमराव आंबेडकर'], [['Rabindranath Tagore', 'रवींद्रनाथ टैगोर'], ['C. V. Raman', 'सी. वी. रमन']]),
    ]),
  ]);
  topic('g-history', '🏺', ['Long ago: early people and the Indus Valley', 'बहुत पहले: आदिमानव और सिंधु घाटी'], [
    FA(['India’s story begins', 'भारत की कहानी शुरू'], '🏺', [
      I('🔥', ['Early humans', 'आदिमानव'], ['Early people hunted, gathered fruits and lived in caves. Discovering fire and the wheel, and learning farming, changed life forever.', 'आदिमानव शिकार करते, फल इकट्ठा करते और गुफाओं में रहते थे। आग और पहिए की खोज और खेती ने जीवन बदल दिया।']),
      I('🏙️', ['Indus Valley Civilisation', 'सिंधु घाटी सभ्यता'], ['About 4,500 years ago, cities like Harappa and Mohenjo-daro had straight streets, brick houses, covered drains and the Great Bath.', 'लगभग 4,500 साल पहले हड़प्पा और मोहनजोदड़ो जैसे शहरों में सीधी सड़कें, ईंट के घर, ढकी नालियाँ और विशाल स्नानागार थे।']),
      I('🪙', ['Trade and seals', 'व्यापार और मुहरें'], ['Harappans made pottery, beads and stone seals with animal pictures and traded with faraway lands.', 'हड़प्पावासी मिट्टी के बर्तन, मनके और जानवरों के चित्र वाली पत्थर की मुहरें बनाते और दूर देशों से व्यापार करते थे।']),
      I('🦁', ['Emperor Ashoka', 'सम्राट अशोक'], ['After the Kalinga war, Ashoka gave up war and spread peace. Our national emblem comes from his Lion Capital at Sarnath.', 'कलिंग युद्ध के बाद अशोक ने युद्ध छोड़कर शांति फैलाई। हमारा राष्ट्रीय प्रतीक सारनाथ के उनके सिंह स्तंभ से है।']),
    ], [
      Q('🏙️', ['Mohenjo-daro was a city of the…', 'मोहनजोदड़ो किस सभ्यता का शहर था?'], ['Indus Valley Civilisation', 'सिंधु घाटी सभ्यता'], [['Mughal Empire', 'मुग़ल साम्राज्य'], ['British Raj', 'ब्रिटिश राज']]), Q('🔥', ['Which discovery changed early human life?', 'किस खोज ने आदिमानव का जीवन बदला?'], ['fire', 'आग'], [['television', 'टीवी'], ['plastic', 'प्लास्टिक']]),
      Q('🦁', ['Our national emblem comes from the pillar of…', 'राष्ट्रीय प्रतीक किसके स्तंभ से?'], ['Ashoka', 'अशोक'], [['Akbar', 'अकबर'], ['Shivaji', 'शिवाजी']]), Q('🚰', ['Harappan cities were famous for…', 'हड़प्पा के शहर किसके लिए प्रसिद्ध?'], ['covered drains and planned streets', 'ढकी नालियाँ और योजनाबद्ध सड़कें'], [['skyscrapers', 'गगनचुंबी इमारतें'], ['railways', 'रेलवे']]),
    ]),
  ]);
  topic('g-freedom', '🕊️', ['Freedom fighters and nation builders', 'स्वतंत्रता सेनानी और राष्ट्र निर्माता'], [
    FA(['They built free India', 'उन्होंने आज़ाद भारत बनाया'], '🕊️', [
      I('🧓', ['Mahatma Gandhi', 'महात्मा गांधी'], ['Led India’s freedom struggle with truth and non-violence – the Salt March (1930) and Quit India (1942).', 'सत्य और अहिंसा से स्वतंत्रता संग्राम चलाया – नमक सत्याग्रह (1930), भारत छोड़ो (1942)।']),
      I('🗡️', ['Rani Lakshmibai', 'रानी लक्ष्मीबाई'], ['The brave queen of Jhansi fought the British in 1857.', 'झाँसी की बहादुर रानी ने 1857 में अंग्रेज़ों से युद्ध किया।']),
      I('🎖️', ['Netaji Subhas Chandra Bose', 'नेताजी सुभाषचंद्र बोस'], ['Formed the Indian National Army: “Give me blood and I will give you freedom.”', 'आज़ाद हिंद फ़ौज बनाई: "तुम मुझे ख़ून दो, मैं तुम्हें आज़ादी दूँगा।"']),
      I('🏛️', ['Sardar Vallabhbhai Patel', 'सरदार वल्लभभाई पटेल'], ['The Iron Man of India united over 500 princely states into one nation.', 'भारत के लौह पुरुष ने 500 से ज़्यादा रियासतों को एक देश में जोड़ा।']),
      I('🚀', ['Dr A. P. J. Abdul Kalam', 'डॉ. ए. पी. जे. अब्दुल कलाम'], ['The Missile Man and People’s President. He loved children and said, “Dream, dream, dream.”', 'मिसाइल मैन और जनता के राष्ट्रपति। बच्चों से प्यार करते और कहते, "सपने देखो।"']),
    ], [
      Q('🧂', ['Who led the Salt March?', 'नमक सत्याग्रह किसने चलाया?'], ['Mahatma Gandhi', 'महात्मा गांधी'], [['Bhagat Singh', 'भगत सिंह'], ['Rani Lakshmibai', 'रानी लक्ष्मीबाई']]), Q('🏛️', ['Who is called the Iron Man of India?', 'भारत के लौह पुरुष?'], ['Sardar Patel', 'सरदार पटेल'], [['Jawaharlal Nehru', 'जवाहरलाल नेहरू'], ['Dr Kalam', 'डॉ. कलाम']]),
      Q('🎖️', ['Who formed the Indian National Army?', 'आज़ाद हिंद फ़ौज किसने बनाई?'], ['Subhas Chandra Bose', 'सुभाषचंद्र बोस'], [['Sardar Patel', 'सरदार पटेल'], ['Gandhiji', 'गांधीजी']]), Q('🗓️', ['India became independent on…', 'भारत आज़ाद कब हुआ?'], ['15 August 1947', '15 अगस्त 1947'], [['26 January 1950', '26 जनवरी 1950'], ['2 October 1947', '2 अक्टूबर 1947']]),
    ]),
  ]);
  topic('g-culture', '🎎', ['Unity in diversity', 'अनेकता में एकता'], [
    FA(['Many colours, one India', 'अनेक रंग, एक भारत'], '🎎', [
      I('🗣️', ['Languages', 'भाषाएँ'], ['India has 22 languages listed in the Constitution and hundreds of others. Hindi and English are used for the Union government’s work.', 'संविधान में 22 भाषाएँ सूचीबद्ध हैं, और सैकड़ों दूसरी भी। केंद्र सरकार के काम में हिंदी और अंग्रेज़ी।']),
      I('💃', ['Classical dances', 'शास्त्रीय नृत्य'], ['Bharatanatyam (Tamil Nadu), Kathak (North India), Kathakali (Kerala), Odissi (Odisha), Kuchipudi (Andhra Pradesh), Manipuri (Manipur).', 'भरतनाट्यम (तमिलनाडु), कथक (उत्तर भारत), कथकली (केरल), ओडिसी (ओडिशा), कुचिपुड़ी (आंध्र), मणिपुरी (मणिपुर)।']),
      I('🪔', ['Festivals', 'त्योहार'], ['Diwali, Eid, Christmas, Guru Nanak Jayanti, Pongal, Onam, Bihu and many more – we celebrate together and share sweets with neighbours.', 'दीवाली, ईद, क्रिसमस, गुरु नानक जयंती, पोंगल, ओणम, बिहू और बहुत से – हम साथ मनाते और पड़ोसियों से मिठाई बाँटते हैं।']),
    ], [
      Q('💃', ['Kathakali is a dance of…', 'कथकली कहाँ का नृत्य?'], ['Kerala', 'केरल'], [['Punjab', 'पंजाब'], ['Gujarat', 'गुजरात']]), Q('🌾', ['Pongal is a harvest festival of…', 'पोंगल किसका फ़सल त्योहार?'], ['Tamil Nadu', 'तमिलनाडु'], [['Kashmir', 'कश्मीर'], ['Rajasthan', 'राजस्थान']]),
      Q('🗣️', ['How many languages are listed in the Constitution?', 'संविधान में कितनी भाषाएँ?'], '22', ['2', '50']), Q('🤝', ['"Unity in diversity" means…', '"अनेकता में एकता" का अर्थ…'], ['different people living together as one', 'अलग-अलग लोग एक होकर रहें'], [['everyone is the same', 'सब एक जैसे हैं'], ['no festivals', 'कोई त्योहार नहीं']]),
    ]),
  ]);
  topic('g-global', '🌐', ['Global citizen: our shared world', 'विश्व नागरिक: हमारी साझी दुनिया'], [
    FA(['Thinking about the whole world', 'पूरी दुनिया के बारे में सोचना'], '🌐', [
      I('🎯', ['Global goals', 'विश्व लक्ष्य'], ['Countries have agreed on goals for 2030: no poverty, zero hunger, good health, quality education, clean water and climate action.', 'देशों ने 2030 के लक्ष्य तय किए: ग़रीबी और भूख ख़त्म, अच्छा स्वास्थ्य, अच्छी शिक्षा, साफ़ पानी और जलवायु के लिए काम।']),
      I('🔍', ['Asking good questions', 'अच्छे सवाल पूछना'], ['A global citizen researches from many sources, listens to other views, and checks if information is true before sharing it.', 'विश्व नागरिक कई स्रोतों से जानकारी लेता, दूसरों की राय सुनता और बाँटने से पहले जाँचता है कि बात सच है या नहीं।']),
      I('🤲', ['Taking action', 'कदम उठाना'], ['Small actions add up: saving electricity, planting trees, donating books, and being kind to people from other places.', 'छोटे कदम मिलकर बड़ा बदलाव: बिजली बचाना, पेड़ लगाना, किताबें दान करना, दूसरी जगहों के लोगों से अच्छा व्यवहार।']),
    ], [
      Q('📰', ['Before sharing news online you should…', 'ऑनलाइन ख़बर बाँटने से पहले…'], ['check it from a trusted source', 'भरोसेमंद स्रोत से जाँचो'], [['share it fast', 'जल्दी बाँटो'], ['add more drama', 'और मसाला डालो']]),
      Q('🎯', ['Which is a global goal?', 'विश्व लक्ष्य कौन सा?'], ['Quality education for all', 'सबके लिए अच्छी शिक्षा'], [['More traffic', 'ज़्यादा ट्रैफ़िक'], ['More plastic', 'ज़्यादा प्लास्टिक']]),
      Q('👂', ['When a friend has a different opinion…', 'जब दोस्त की राय अलग हो…'], ['listen and ask why', 'सुनो और कारण पूछो'], [['laugh at them', 'हँसो'], ['stop talking to them', 'बात बंद करो']]),
    ]),
  ]);

  // =============================================================================== COMPUTERS
  topic('k-parts', '🖥️', ['Parts of a computer', 'कंप्यूटर के भाग'], [
    FA(['Meet the computer', 'कंप्यूटर से मिलो'], '🖥️', [
      I('dia:computer', ['Main parts', 'मुख्य भाग'], ['The CPU is the brain. The monitor shows output. The keyboard and mouse give input. Speakers and printers are output devices too.', 'सीपीयू दिमाग़ है। मॉनिटर आउटपुट दिखाता है। कीबोर्ड और माउस इनपुट देते हैं। स्पीकर और प्रिंटर भी आउटपुट उपकरण हैं।']),
      I('🔄', ['Input → Process → Output', 'इनपुट → प्रोसेस → आउटपुट'], ['You type 2 + 3 (input), the CPU adds (process), the screen shows 5 (output). Saving it is storage.', 'तुमने 2 + 3 टाइप किया (इनपुट), सीपीयू ने जोड़ा (प्रोसेस), स्क्रीन पर 5 (आउटपुट)। सहेजना = स्टोरेज।']),
      I('🧠', ['Memory', 'मेमोरी'], ['RAM is short-term memory (cleared when switched off). The hard disk or SSD stores files for a long time.', 'RAM अस्थायी मेमोरी (बंद करने पर मिट जाती)। हार्ड डिस्क या SSD फ़ाइलें लंबे समय तक रखती है।']),
      I('🧽', ['Care of computers', 'कंप्यूटर की देखभाल'], ['Keep food and water away, use clean dry hands, shut down properly and cover it from dust.', 'खाना-पानी दूर रखो, साफ़ सूखे हाथ, ठीक से बंद करो और धूल से ढको।']),
    ], [
      Q('🧠', ['The brain of the computer is the…', 'कंप्यूटर का दिमाग़?'], ['CPU', 'सीपीयू'], [['mouse', 'माउस'], ['monitor', 'मॉनिटर']]), Q('🖨️', ['A printer is an ___ device.', 'प्रिंटर किस तरह का उपकरण है?'], ['output', 'आउटपुट'], [['input', 'इनपुट'], ['storage', 'स्टोरेज']]),
      Q('🔌', ['What is lost when the computer is switched off?', 'बंद करने पर क्या मिट जाता है?'], ['RAM contents', 'RAM की जानकारी'], [['Saved files on the hard disk', 'हार्ड डिस्क की फ़ाइलें'], ['The keyboard', 'कीबोर्ड']]),
    ]),
    SO(['Input or output?', 'इनपुट या आउटपुट?'], [['i', '⌨️', 'Input', 'इनपुट'], ['o', '🖥️', 'Output', 'आउटपुट']], [
      ['⌨️', 'i', 'keyboard', 'कीबोर्ड'], ['🖱️', 'i', 'mouse', 'माउस'], ['🎤', 'i', 'microphone', 'माइक'], ['📷', 'i', 'webcam', 'वेबकैम'], ['🖥️', 'o', 'monitor', 'मॉनिटर'], ['🖨️', 'o', 'printer', 'प्रिंटर'], ['🔊', 'o', 'speakers', 'स्पीकर'], ['📽️', 'o', 'projector', 'प्रोजेक्टर']]),
  ]);
  topic('k-keyboard', '⌨️', ['Keyboard and mouse skills', 'कीबोर्ड और माउस कौशल'], [
    MT(['Match the key to its job', 'कुंजी को उसके काम से मिलाओ'], [['Enter', 'new line / OK'], ['Backspace', 'delete left letter'], ['Space bar', 'gap between words'], ['Shift', 'one capital letter'], ['Caps Lock', 'all capital letters'], ['Arrow keys', 'move the cursor'], ['Delete', 'delete right letter'], ['Tab', 'jump forward']]),
    QZ(['Mouse moves', 'माउस के काम'], [
      Q('🖱️', ['To open a folder, we usually…', 'फ़ोल्डर खोलने के लिए…'], ['double-click it', 'डबल-क्लिक करते हैं'], [['right-click it', 'राइट-क्लिक'], ['shake the mouse', 'माउस हिलाते हैं']]),
      Q('📋', ['Right-click shows a…', 'राइट-क्लिक से क्या दिखता है?'], ['menu of options', 'विकल्पों की सूची'], [['new computer', 'नया कंप्यूटर'], ['blank screen', 'ख़ाली स्क्रीन']]),
      Q('✋', ['Moving a file by holding the button is called…', 'बटन दबाए रखकर फ़ाइल खिसकाना…'], ['drag and drop', 'ड्रैग एंड ड्रॉप'], [['typing', 'टाइपिंग'], ['printing', 'प्रिंटिंग']]),
      Q('⌨️', ['Ctrl + C does…', 'Ctrl + C से क्या होता है?'], ['copy', 'कॉपी'], [['close', 'बंद'], ['colour', 'रंग']]), Q('⌨️', ['Ctrl + Z does…', 'Ctrl + Z से?'], ['undo', 'पिछला काम वापस'], [['zoom', 'ज़ूम'], ['save', 'सेव']]),
    ]),
  ]);
  topic('k-files', '📁', ['Files, folders, hardware and software', 'फ़ाइल, फ़ोल्डर, हार्डवेयर और सॉफ़्टवेयर'], [
    FA(['Organising a computer', 'कंप्यूटर को व्यवस्थित करना'], '📁', [
      I('📁', ['Files and folders', 'फ़ाइल और फ़ोल्डर'], ['A file holds one piece of work (a story, a photo). Folders keep related files together, like a school bag with sections.', 'फ़ाइल में एक काम (कहानी, फ़ोटो)। फ़ोल्डर संबंधित फ़ाइलें साथ रखते हैं, जैसे बस्ते के खाने।']),
      I('🧩', ['Hardware and software', 'हार्डवेयर और सॉफ़्टवेयर'], ['Hardware = parts you can touch. Software = programs that tell the computer what to do (Paint, a browser, games). The operating system (Windows, Android) runs everything.', 'हार्डवेयर = छूने वाले भाग। सॉफ़्टवेयर = प्रोग्राम जो काम बताते (पेंट, ब्राउज़र, गेम)। ऑपरेटिंग सिस्टम (विंडोज़, एंड्रॉइड) सब चलाता है।']),
      I('📏', ['Storage units', 'स्टोरेज इकाइयाँ'], ['bit → byte (8 bits) → kilobyte (KB) → megabyte (MB) → gigabyte (GB) → terabyte (TB). Each big unit is about 1024 of the smaller one.', 'बिट → बाइट (8 बिट) → किलोबाइट → मेगाबाइट → गीगाबाइट → टेराबाइट। हर बड़ी इकाई ≈ 1024 छोटी।']),
    ], [
      Q('🧩', ['Which is software?', 'सॉफ़्टवेयर कौन सा?'], ['a drawing app', 'ड्रॉइंग ऐप'], [['keyboard', 'कीबोर्ड'], ['monitor', 'मॉनिटर']]), Q('🔢', ['1 byte = ___ bits', '1 बाइट = ___ बिट'], '8', ['10', '100']),
      Q('📏', ['Which is the biggest?', 'सबसे बड़ा?'], ['1 GB', '1 GB'], [['1 MB', '1 MB'], ['1 KB', '1 KB']]), Q('💻', ['Windows and Android are…', 'विंडोज़ और एंड्रॉइड…'], ['operating systems', 'ऑपरेटिंग सिस्टम'], [['input devices', 'इनपुट उपकरण'], ['viruses', 'वायरस']]),
    ]),
    OR(['Smallest to biggest', 'छोटे से बड़ा'], [[['Order the storage units from smallest to biggest.', 'स्टोरेज इकाइयाँ छोटे से बड़े क्रम में।'], [['·', 'bit', 'बिट'], ['▪️', 'byte', 'बाइट'], ['🔹', 'kilobyte', 'किलोबाइट'], ['🔷', 'megabyte', 'मेगाबाइट'], ['🟦', 'gigabyte', 'गीगाबाइट']]]]),
  ]);
  topic('k-coding', '🤖', ['Coding: algorithms, sequences and loops', 'कोडिंग: एल्गोरिदम, क्रम और लूप'], [
    FA(['Think like a programmer', 'प्रोग्रामर की तरह सोचो'], '🤖', [
      I('📋', ['Algorithm', 'एल्गोरिदम'], ['An algorithm is a list of clear steps to solve a problem – like a recipe. Computers follow steps exactly as written.', 'एल्गोरिदम समस्या हल करने के साफ़ कदमों की सूची है – रेसिपी जैसा। कंप्यूटर कदम बिल्कुल वैसे ही मानता है।']),
      I('🔢', ['Sequence', 'क्रम'], ['Order matters! "Put on socks, then shoes" works; "shoes, then socks" does not.', 'क्रम ज़रूरी है! "पहले मोज़े, फिर जूते" ठीक; "पहले जूते, फिर मोज़े" नहीं।']),
      I('🔁', ['Loop', 'लूप'], ['A loop repeats steps: "repeat 4 times: move 10, turn right 90°" draws a square.', 'लूप कदम दोहराता है: "4 बार दोहराओ: 10 चलो, 90° दाएँ मुड़ो" से वर्ग बनता है।']),
      I('🔀', ['Condition', 'शर्त'], ['If–then choices: IF it is raining THEN take an umbrella, ELSE wear a cap.', 'अगर–तो: अगर बारिश हो तो छाता लो, वरना टोपी पहनो।']),
      I('🐞', ['Debugging', 'डीबगिंग'], ['A bug is a mistake in the steps. Finding and fixing it is debugging – good coders test again and again.', 'बग यानी कदमों में ग़लती। ढूँढ़कर ठीक करना डीबगिंग है – अच्छे कोडर बार-बार जाँचते हैं।']),
    ], [
      Q('🔁', ['"Repeat 4 times: move, turn right 90°" draws a…', '"4 बार: चलो, 90° मुड़ो" से बनता है…'], ['square', 'वर्ग'], [['circle', 'वृत्त'], ['triangle', 'त्रिभुज']]), Q('🐞', ['Fixing a mistake in a program is…', 'प्रोग्राम की ग़लती ठीक करना…'], ['debugging', 'डीबगिंग'], [['typing', 'टाइपिंग'], ['printing', 'प्रिंटिंग']]),
      Q('📋', ['A recipe is like an…', 'रेसिपी किसके जैसी?'], ['algorithm', 'एल्गोरिदम'], [['virus', 'वायरस'], ['monitor', 'मॉनिटर']]), Q('🔀', ['"IF hungry THEN eat" is a…', '"अगर भूख तो खाओ" है…'], ['condition', 'शर्त'], [['loop', 'लूप'], ['bug', 'बग']]),
    ]),
    OR(['Order the robot’s steps', 'रोबोट के कदम क्रम से'], [
      [['Help the robot brush its teeth.', 'रोबोट को ब्रश करवाओ।'], [['🪥', 'Pick up the brush', 'ब्रश उठाओ'], ['🧴', 'Put toothpaste on it', 'टूथपेस्ट लगाओ'], ['😁', 'Brush for 2 minutes', '2 मिनट ब्रश करो'], ['💧', 'Rinse your mouth', 'कुल्ला करो'], ['🧼', 'Wash and keep the brush', 'ब्रश धोकर रखो']]],
      [['Help the robot plant a seed.', 'रोबोट को बीज बोने में मदद करो।'], [['⛏️', 'Dig a small hole', 'छोटा गड्ढा खोदो'], ['🌰', 'Drop in the seed', 'बीज डालो'], ['🟫', 'Cover with soil', 'मिट्टी से ढको'], ['💧', 'Water it', 'पानी दो']]],
    ]),
  ]);
  topic('k-safety', '🛡️', ['Internet and cyber safety', 'इंटरनेट और साइबर सुरक्षा'], [
    FA(['Be smart online', 'ऑनलाइन समझदार बनो'], '🛡️', [
      I('🔐', ['Keep secrets secret', 'राज़ राज़ रखो'], ['Never share your password, home address, school name, phone number or photos with strangers online.', 'पासवर्ड, घर का पता, स्कूल, फ़ोन नंबर या फ़ोटो कभी अनजान लोगों से ऑनलाइन मत बाँटो।']),
      I('🎣', ['Tricks and fake prizes', 'धोखे और नकली इनाम'], ['"You won a phone! Click here" is usually a trick. Do not click strange links or download unknown apps.', '"तुमने फ़ोन जीता! यहाँ क्लिक करो" अक्सर धोखा होता है। अजीब लिंक या अनजान ऐप मत खोलो।']),
      I('💬', ['Be kind online', 'ऑनलाइन दयालु रहो'], ['Say online only what you would say face to face. If someone is mean to you, don’t reply – save it and tell a grown-up.', 'ऑनलाइन वही कहो जो आमने-सामने कहते। कोई बुरा बोले तो जवाब मत दो – सहेजो और बड़ों को बताओ।']),
      I('⏰', ['Screen time balance', 'स्क्रीन टाइम का संतुलन'], ['Take breaks, play outside, and keep screens away an hour before sleep.', 'बीच-बीच में आराम, बाहर खेलो, और सोने से एक घंटा पहले स्क्रीन दूर रखो।']),
    ], [
      Q('🔑', ['Who can know your password?', 'पासवर्ड कौन जान सकता है?'], ['Only you and your parents', 'सिर्फ़ तुम और माता-पिता'], [['Your online friends', 'ऑनलाइन दोस्त'], ['Everyone', 'सब']]), Q('🎁', ['"Click to claim your free prize!" – you should…', '"मुफ़्त इनाम के लिए क्लिक करो!" – तुम…'], ['ignore it and tell an adult', 'अनदेखा करो और बड़ों को बताओ'], [['click quickly', 'जल्दी क्लिक करो'], ['share with friends', 'दोस्तों को भेजो']]),
      Q('😠', ['Someone sends you mean messages. You…', 'कोई बुरे संदेश भेजे तो…'], ['don’t reply, save them and tell a grown-up', 'जवाब मत दो, सहेजो और बड़ों को बताओ'], [['reply with meaner words', 'और बुरा जवाब दो'], ['keep it secret', 'छिपाकर रखो']]),
    ]),
    SI(['What should you do online?', 'ऑनलाइन क्या करोगे?'], [
      ['🎮', ['A player in a game asks for your home address to send a gift.', 'गेम में कोई खिलाड़ी तोहफ़ा भेजने के लिए घर का पता माँगता है।'], [[['Say no and tell a parent', 'मना करो और माता-पिता को बताओ'], true, ['Strangers online should never get your address.', 'अनजान लोगों को ऑनलाइन पता कभी मत दो।']], [['Send the address – free gift!', 'पता भेज दो – मुफ़्त तोहफ़ा!'], false, ['This can be dangerous. Real friends don’t ask for this.', 'यह ख़तरनाक हो सकता है। सच्चे दोस्त ऐसा नहीं माँगते।']]]],
      ['📸', ['A classmate wants to post an embarrassing photo of another child.', 'सहपाठी किसी बच्चे की शर्मिंदा करने वाली फ़ोटो डालना चाहता है।'], [[['Say "Please don’t – it will hurt them"', 'कहो "मत करो – उसे बुरा लगेगा"'], true, ['Standing up for others is kind and brave.', 'दूसरों के लिए खड़ा होना दयालु और बहादुरी है।']], [['Laugh and share it more', 'हँसो और और भेजो'], false, ['Sharing hurtful content is cyberbullying.', 'दुख देने वाली चीज़ें बाँटना साइबर बुलिंग है।']]]],
    ], ['Think before you click. Be safe, be kind.', 'क्लिक से पहले सोचो। सुरक्षित रहो, दयालु रहो।']),
  ]);
})();
