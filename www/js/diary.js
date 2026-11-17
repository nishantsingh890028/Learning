/* Daily diary: Classwork (today's journey) + Homework (word of the day spoken in a sentence and checked, a revision
   game, and a notebook task a grown-up ticks). Also the speech helper used to listen to the child.
   Speech: Android → app-local KkmSpeech plugin (phone's speech recogniser); browsers → Web Speech API; otherwise typing. */
(() => {
  'use strict';
  const { t, tx, esc, say, sayT, q, qa, pick, shuffle } = K;
  const T = (en, hi) => ({ en, hi });

  // ================================================================ word banks (original example sentences)
  // [word, forms, emoji, meaning{en,hi}, example, rightUse, [wrongUse1, wrongUse2], cueWords]
  const W = {
    1: [['apple', [], '🍎', T('a red or green fruit', 'सेब, एक फल')], ['ball', [], '⚽', T('a round toy we play with', 'गेंद')], ['cat', [], '🐱', T('a small furry pet', 'बिल्ली')], ['sun', [], '☀️', T('the bright star in the sky', 'सूरज')],
      ['tree', [], '🌳', T('a tall plant with a trunk', 'पेड़')], ['fish', [], '🐟', T('it lives in water', 'मछली')], ['book', [], '📕', T('we read it', 'किताब')], ['milk', [], '🥛', T('a white drink', 'दूध')], ['star', [], '⭐', T('it twinkles at night', 'तारा')], ['duck', [], '🦆', T('a bird that says quack', 'बत्तख')], ['cup', [], '☕', T('we drink from it', 'कप')], ['hat', [], '👒', T('we wear it on the head', 'टोपी')]],
    2: [
      ['happy', ['happily', 'happier'], '😊', T('feeling glad', 'ख़ुश'), 'I am happy when Grandma visits.', 'The happy puppy wagged its tail.', ['I am happy that I fell and hurt my knee badly.', 'The happy is red.'], ['smile', 'glad', 'fun', 'play']],
      ['share', ['shares', 'shared', 'sharing'], '🤝', T('to give part of what you have', 'बाँटना'), 'I share my crayons with my friend.', 'Riya shared her lunch with Aman.', ['I share the sky with blue.', 'Share is a kind of fruit.'], ['friend', 'with', 'give']],
      ['clean', ['cleans', 'cleaned', 'cleaning', 'cleaner'], '🧹', T('not dirty; to make tidy', 'साफ़'), 'I clean my room on Sunday.', 'We cleaned the classroom after art.', ['The mud made my shirt very clean.', 'Clean is my best friend’s name.'], ['room', 'wash', 'tidy']],
      ['brave', ['braver', 'bravely'], '🦁', T('not afraid', 'बहादुर'), 'The brave girl climbed the tall slide.', 'He was brave at the dentist.', ['The brave mouse ran away crying from a leaf.', 'I ate a brave for lunch.'], ['afraid', 'fear', 'strong']],
      ['thank', ['thanks', 'thanked', 'thankful'], '🙏', T('to say you are grateful', 'धन्यवाद देना'), 'I thank the bus driver every day.', 'She thanked her teacher for the help.', ['I thank the stone for hitting me.', 'Thank is a colour.'], ['help', 'gift', 'you']],
      ['quick', ['quickly', 'quicker'], '⚡', T('fast', 'जल्दी, तेज़'), 'The rabbit is quick.', 'Come quickly, the bus is here!', ['The quick snail took a whole day.', 'I drank a glass of quick.'], ['fast', 'run', 'hurry']],
      ['kind', ['kinder', 'kindly', 'kindness'], '💛', T('nice and caring to others', 'दयालु'), 'Be kind to animals.', 'The kind man fed the dog.', ['The kind boy pushed his friend.', 'Kind is a vegetable.'], ['help', 'care', 'nice']],
      ['grow', ['grows', 'grew', 'growing', 'grown'], '🌱', T('to become bigger', 'बढ़ना, उगाना'), 'Plants grow with water and sun.', 'I grow tomatoes in a pot.', ['My shoes grow smaller every day.', 'I grow my homework in the oven.'], ['plant', 'tall', 'seed', 'big']],
      ['shiny', ['shinier'], '✨', T('bright and glowing', 'चमकीला'), 'My new shoes are shiny.', 'The shiny coin was on the floor.', ['The shiny mud was dark and dull.', 'I shiny my teeth.'], ['bright', 'new', 'sparkle']],
      ['careful', ['carefully'], '⚠️', T('paying attention to stay safe', 'सावधान'), 'Be careful on the stairs.', 'Carry the glass carefully.', ['He was careful and threw the glass on the floor.', 'Careful is a kind of bird.'], ['safe', 'slow', 'watch']],
      ['gentle', ['gently'], '🕊️', T('soft and kind', 'कोमल, नरम'), 'Be gentle with the baby.', 'She gently patted the kitten.', ['The gentle storm broke all the trees.', 'I gentle my food.'], ['soft', 'baby', 'slowly']],
      ['tidy', ['tidier', 'tidied', 'tidying'], '🗂️', T('neat, everything in its place', 'साफ़-सुथरा'), 'Keep your desk tidy.', 'I tidied my toys before dinner.', ['My tidy room had toys everywhere on the floor.', 'Tidy is a sweet.'], ['neat', 'clean', 'place']],
      ['loud', ['louder', 'loudly'], '📢', T('making a lot of noise', 'तेज़ आवाज़'), 'The drum is very loud.', 'Please do not talk loudly in the library.', ['The loud whisper could not be heard.', 'I wear loud on my feet.'], ['noise', 'sound', 'shout']],
      ['hungry', ['hungrier'], '🍽️', T('wanting food', 'भूखा'), 'I am hungry after playing.', 'The hungry bird looked for worms.', ['I am hungry because I just ate a big meal.', 'Hungry is a planet.'], ['eat', 'food', 'lunch']],
      ['helpful', ['helpfully'], '🧑‍🤝‍🧑', T('ready to help', 'मददगार'), 'My brother is very helpful.', 'The helpful girl carried the books.', ['The helpful boy broke my pencil.', 'Helpful is a game.'], ['help', 'carry', 'kind']],
    ],
    3: [
      ['curious', ['curiously', 'curiosity'], '🧐', T('wanting to know or learn', 'जिज्ञासु'), 'The curious boy asked how rainbows form.', 'Curious children ask many questions.', ['She was curious, so she never asked anything.', 'I put curious in my tea.'], ['ask', 'know', 'learn', 'why', 'how']],
      ['enormous', ['enormously'], '🐘', T('very, very big', 'बहुत विशाल'), 'An elephant is enormous.', 'We saw an enormous ship at the port.', ['The enormous ant was too small to see.', 'I enormous my bag.'], ['big', 'huge', 'elephant', 'ship', 'giant']],
      ['polite', ['politely', 'politeness'], '🙇', T('having good manners', 'विनम्र'), 'It is polite to say please.', 'He politely asked for water.', ['The polite boy shouted rude words.', 'Polite is a kind of soup.'], ['please', 'thank', 'sorry', 'manners']],
      ['explore', ['explores', 'explored', 'exploring', 'explorer'], '🧭', T('to travel and look around to discover', 'खोज करना'), 'We explored the forest trail.', 'I love to explore new places.', ['I explored my bed and slept all day without moving.', 'Explore is a fruit.'], ['forest', 'new', 'discover', 'place']],
      ['proud', ['prouder', 'proudly'], '🏅', T('happy about something good you did', 'गर्व'), 'I felt proud of my painting.', 'Mother was proud when I helped.', ['I was proud that I lied to my friend.', 'Proud is a vegetable.'], ['win', 'good', 'did', 'made']],
      ['nervous', ['nervously'], '😬', T('a little worried or afraid', 'घबराया हुआ'), 'I was nervous before my speech.', 'The nervous cat hid under the bed.', ['I was nervous because I felt totally calm.', 'Nervous is my pet dog.'], ['worried', 'stage', 'test', 'afraid']],
      ['patient', ['patiently', 'patience'], '⏳', T('able to wait calmly', 'धैर्यवान'), 'Be patient in the queue.', 'She waited patiently for her turn.', ['He was patient and shouted after one second.', 'I ate a patient.'], ['wait', 'turn', 'calm']],
      ['gather', ['gathers', 'gathered', 'gathering'], '🧺', T('to bring things or people together', 'इकट्ठा करना'), 'We gathered leaves for the project.', 'The children gathered around the teacher.', ['We gathered the leaves by throwing them far away.', 'Gather is a colour.'], ['together', 'collect', 'around']],
      ['delicious', ['deliciously'], '😋', T('tasting very good', 'स्वादिष्ट'), 'Grandma’s halwa is delicious.', 'The mangoes were delicious.', ['The delicious stone was hard to eat.', 'I delicious every morning.'], ['taste', 'eat', 'food', 'yummy']],
      ['protect', ['protects', 'protected', 'protecting', 'protection'], '🛡️', T('to keep safe from harm', 'रक्षा करना'), 'A helmet protects your head.', 'We must protect our trees.', ['I protect the plant by cutting it down.', 'Protect is a bird.'], ['safe', 'save', 'harm', 'helmet']],
      ['wonder', ['wonders', 'wondered', 'wondering', 'wonderful'], '✨', T('to think about and want to know', 'सोचना, आश्चर्य'), 'I wonder why the sky is blue.', 'She wondered where the river ends.', ['I wonder the ball to my friend.', 'Wonder is my shoe.'], ['why', 'how', 'where', 'sky']],
      ['heavy', ['heavier', 'heaviest'], '🏋️', T('hard to lift; weighing a lot', 'भारी'), 'The bag of rice is heavy.', 'Two people lifted the heavy table.', ['The heavy feather floated away.', 'I heavy my bed.'], ['lift', 'weight', 'carry']],
      ['honest', ['honestly', 'honesty'], '🫱', T('always telling the truth', 'ईमानदार'), 'An honest child tells the truth.', 'He honestly said he broke the vase.', ['The honest boy lied to everyone.', 'Honest is a planet.'], ['truth', 'true', 'lie']],
      ['repair', ['repairs', 'repaired', 'repairing'], '🔧', T('to fix something broken', 'मरम्मत करना'), 'Papa repaired my bicycle.', 'The cobbler repairs shoes.', ['I repaired the toy by breaking it more.', 'Repair is a fruit.'], ['fix', 'broken', 'tool']],
      ['ancient', [], '🏛️', T('very, very old', 'प्राचीन'), 'We visited an ancient temple.', 'Ancient people made tools from stone.', ['My ancient phone was bought yesterday.', 'I ancient my food.'], ['old', 'temple', 'long ago', 'history']],
      ['scatter', ['scatters', 'scattered', 'scattering'], '🌾', T('to throw or spread here and there', 'बिखेरना'), 'The wind scattered the leaves.', 'Farmers scatter seeds in the field.', ['She scattered the beads into one neat line.', 'Scatter is a vegetable.'], ['seeds', 'wind', 'around', 'everywhere']],
      ['silent', ['silently', 'silence'], '🤫', T('without any sound', 'चुप, शांत'), 'The library is silent.', 'The cat moved silently.', ['The silent band played very loud music.', 'I silent my homework.'], ['quiet', 'sound', 'library']],
      ['dangerous', ['dangerously', 'danger'], '⚠️', T('likely to hurt you', 'ख़तरनाक'), 'Playing near a busy road is dangerous.', 'Fire can be dangerous.', ['A soft pillow is very dangerous to sleep on.', 'Dangerous is a sweet.'], ['road', 'fire', 'hurt', 'careful']],
      ['decorate', ['decorates', 'decorated', 'decorating', 'decoration'], '🎉', T('to make a place look pretty', 'सजाना'), 'We decorate our home for Diwali.', 'She decorated the cake with fruit.', ['We decorated the room by making it messy and dirty.', 'Decorate is a dog.'], ['pretty', 'festival', 'lights', 'flowers']],
      ['journey', ['journeys'], '🚂', T('a trip from one place to another', 'यात्रा'), 'Our train journey took two days.', 'The journey to the hills was beautiful.', ['I made a journey by sitting still on my bed.', 'I ate a journey.'], ['train', 'travel', 'trip', 'went']],
    ],
    4: [
      ['generous', ['generously', 'generosity'], '🎁', T('happy to give and share', 'उदार, दानशील'), 'Our generous neighbour gave us mangoes from her tree.', 'He generously donated his old books to the library.', ['The generous man refused to share even a crumb.', 'I generous my homework every day.'], ['give', 'share', 'donate', 'help']],
      ['determined', ['determination'], '💪', T('not giving up even when it is hard', 'दृढ़ निश्चयी'), 'She was determined to finish the race.', 'With determination, he practised every evening.', ['He was determined, so he gave up at once.', 'Determined is a kind of fruit.'], ['practise', 'try', 'never', 'finish', 'hard']],
      ['responsible', ['responsibly', 'responsibility'], '🧑‍🔧', T('trusted to do your duty well', 'ज़िम्मेदार'), 'I am responsible for feeding our fish.', 'A responsible citizen throws litter in the bin.', ['A responsible child forgets all his duties.', 'Responsible is a colour.'], ['duty', 'care', 'job', 'feed', 'bin']],
      ['appreciate', ['appreciates', 'appreciated', 'appreciating', 'appreciation'], '👏', T('to value and be thankful for', 'सराहना करना'), 'I appreciate my teacher’s patience.', 'We appreciated the cook’s hard work.', ['I appreciate it when people hurt my feelings on purpose.', 'Appreciate is a vegetable.'], ['thank', 'value', 'grateful', 'hard work']],
      ['curious', ['curiosity', 'curiously'], '🔭', T('eager to learn and know', 'जिज्ञासु'), 'Curious scientists ask questions about everything.', 'Her curiosity led her to read about planets.', ['He was curious, so he never wanted to know anything.', 'I curious my shoes.'], ['question', 'learn', 'why', 'discover']],
      ['conserve', ['conserves', 'conserved', 'conserving', 'conservation'], '💧', T('to save something and not waste it', 'संरक्षण करना, बचाना'), 'We should conserve water and electricity.', 'Turning off lights conserves energy.', ['We conserve water by leaving taps running all day.', 'Conserve is a game.'], ['save', 'water', 'energy', 'waste']],
      ['cooperate', ['cooperates', 'cooperated', 'cooperating', 'cooperation'], '🤝', T('to work together', 'सहयोग करना'), 'The team cooperated to build the model.', 'If we cooperate, the work will finish faster.', ['They cooperated by refusing to help each other.', 'Cooperate is a bird.'], ['together', 'team', 'help', 'work']],
      ['enormous', ['enormously'], '🐋', T('extremely large', 'विशाल'), 'The blue whale is an enormous animal.', 'An enormous crowd gathered for the match.', ['The enormous ant fit on a grain of sugar.', 'I enormous my lunch.'], ['big', 'huge', 'whale', 'crowd']],
      ['observe', ['observes', 'observed', 'observing', 'observation'], '👀', T('to watch carefully', 'ध्यान से देखना'), 'We observed the moon every night for a week.', 'Scientists observe animals in the wild.', ['I observed the bird with my eyes tightly shut.', 'Observe is a fruit.'], ['watch', 'see', 'notice', 'carefully']],
      ['ancient', [], '🏺', T('belonging to the very distant past', 'प्राचीन'), 'Harappa was an ancient city.', 'We saw ancient coins in the museum.', ['The ancient laptop was made last week.', 'I ancient my bag.'], ['old', 'city', 'history', 'museum', 'years']],
      ['confident', ['confidently', 'confidence'], '😎', T('sure that you can do something', 'आत्मविश्वासी'), 'After practice, I felt confident about my speech.', 'She answered the question confidently.', ['He was confident, so he hid and trembled.', 'Confident is a vegetable.'], ['sure', 'practice', 'speech', 'can']],
      ['predict', ['predicts', 'predicted', 'predicting', 'prediction'], '🔮', T('to say what will happen in the future', 'पूर्वानुमान लगाना'), 'The weather report predicts rain tomorrow.', 'I predicted the story’s ending correctly.', ['I predicted what happened yesterday.', 'Predict is a pet.'], ['will', 'tomorrow', 'future', 'weather']],
      ['brilliant', ['brilliantly'], '🌟', T('very bright or very clever', 'शानदार, चमकदार'), 'Dr Kalam had a brilliant mind.', 'The stars looked brilliant in the dark sky.', ['The brilliant light was dull and dark.', 'I brilliant my hair.'], ['clever', 'bright', 'idea', 'shine']],
      ['grateful', ['gratefully', 'gratitude'], '🙏', T('feeling thankful', 'आभारी'), 'I am grateful to the farmers who grow our food.', 'He gratefully hugged his grandmother.', ['I am grateful that you broke my toy on purpose.', 'Grateful is a city.'], ['thank', 'thankful', 'help', 'kind']],
      ['investigate', ['investigates', 'investigated', 'investigating', 'investigation'], '🕵️', T('to find out the facts carefully', 'जाँच-पड़ताल करना'), 'The police investigated the missing bicycle.', 'Let us investigate why the plant is drooping.', ['I investigated by ignoring everything.', 'Investigate is a dessert.'], ['why', 'find', 'clue', 'facts']],
      ['fragile', [], '🥚', T('easily broken', 'नाज़ुक'), 'Glass bangles are fragile.', 'Handle the fragile vase gently.', ['The fragile rock could not be broken by a hammer.', 'I fragile my homework.'], ['break', 'glass', 'gently', 'careful']],
      ['volunteer', ['volunteers', 'volunteered', 'volunteering'], '🙋', T('to offer to help without being asked or paid', 'स्वेच्छा से मदद करना'), 'I volunteered to water the school garden.', 'Volunteers cleaned the beach on Sunday.', ['He volunteered by running away when asked for help.', 'Volunteer is a fruit.'], ['help', 'offer', 'clean', 'free']],
      ['habitat', ['habitats'], '🏞️', T('the natural home of an animal or plant', 'प्राकृतिक आवास'), 'The desert is the camel’s habitat.', 'Cutting forests destroys animal habitats.', ['A habitat is a kind of hat we wear.', 'I habitat every morning.'], ['animal', 'home', 'forest', 'live']],
      ['patience', ['patient', 'patiently'], '⏳', T('the ability to wait calmly', 'धैर्य'), 'Learning the abacus needs patience.', 'She patiently explained the sum to her brother.', ['With great patience, he shouted after one second.', 'Patience is a sweet.'], ['wait', 'calm', 'slowly', 'learn']],
      ['harmony', ['harmonious'], '🎶', T('living or working together peacefully', 'सद्भाव, मेल'), 'People of many faiths live in harmony in India.', 'The choir sang in perfect harmony.', ['They lived in harmony and fought every day.', 'I ate harmony for dinner.'], ['together', 'peace', 'live', 'friends']],
      ['opportunity', ['opportunities'], '🚪', T('a chance to do something', 'अवसर, मौक़ा'), 'The science fair is an opportunity to show our ideas.', 'Don’t miss the opportunity to learn something new.', ['An opportunity is a kind of shoe.', 'I opportunity the ball.'], ['chance', 'learn', 'show', 'try']],
      ['reluctant', ['reluctantly'], '😕', T('not wanting to do something', 'अनिच्छुक'), 'He was reluctant to jump into the cold water.', 'She reluctantly switched off the TV.', ['She was reluctant, so she rushed forward happily.', 'Reluctant is a bird.'], ['not want', 'slowly', 'didn’t', 'but']],
      ['magnificent', ['magnificently'], '🏰', T('very beautiful and impressive', 'भव्य, शानदार'), 'The Taj Mahal is a magnificent building.', 'We watched a magnificent sunrise over the hills.', ['The magnificent palace was tiny and broken.', 'I magnificent my bag.'], ['beautiful', 'grand', 'palace', 'view']],
      ['empathy', ['empathise', 'empathize'], '💞', T('understanding how others feel', 'सहानुभूति, दूसरों की भावना समझना'), 'Empathy helps us be good friends.', 'She showed empathy when her friend lost the match.', ['He showed empathy by laughing at the crying child.', 'I empathy my food.'], ['feel', 'friend', 'sad', 'understand']],
      ['independent', ['independently', 'independence'], '🇮🇳', T('free; able to do things by yourself', 'स्वतंत्र, आत्मनिर्भर'), 'India became independent in 1947.', 'I can now tie my shoes independently.', ['He is independent, so he needs help with everything.', 'Independent is a fruit.'], ['free', 'myself', '1947', 'own']],
    ],
  };
  const HW = {   // Hindi words (levels 2–4): [word, stem for checking, emoji, meaning{en,hi}, example, rightUse, wrongUses]
    2: [['मित्र', 'मित्र', '🤝', T('friend', 'दोस्त'), 'मेरा मित्र बहुत अच्छा है।', 'राहुल मेरा सबसे प्यारा मित्र है।', ['मित्र आसमान में उड़ता नीला पानी है।', 'मैंने मित्र को खा लिया।']], ['सुंदर', 'सुंदर', '🌸', T('beautiful', 'अच्छा दिखने वाला'), 'बगीचे में सुंदर फूल हैं।', 'मोर बहुत सुंदर पक्षी है।', ['सुंदर ने खाना पकाया।', 'मैं सुंदर से स्कूल गया।']], ['मेहनत', 'मेहनत', '💪', T('hard work', 'परिश्रम'), 'किसान बहुत मेहनत करता है।', 'मेहनत से पढ़ने पर अच्छे अंक आते हैं।', ['मेहनत एक मीठा फल है।', 'मैंने मेहनत को डिब्बे में रखा।']], ['सफ़ाई', 'सफ़ाई', '🧹', T('cleanliness', 'स्वच्छता'), 'हम रोज़ घर की सफ़ाई करते हैं।', 'सफ़ाई से बीमारियाँ दूर रहती हैं।', ['सफ़ाई ने गाना गाया।', 'मैंने सफ़ाई पहनी।']]],
    3: [['ईमानदार', 'ईमानदार', '🫱', T('honest', 'सच्चा'), 'ईमानदार बच्चा सच बोलता है।', 'दुकानदार ईमानदार था, उसने पूरे पैसे लौटाए।', ['ईमानदार लड़के ने सबसे झूठ बोला।', 'ईमानदार एक सब्ज़ी है।']], ['प्रकृति', 'प्रकृति', '🌳', T('nature', 'कुदरत'), 'हमें प्रकृति की रक्षा करनी चाहिए।', 'पहाड़, नदियाँ और पेड़ प्रकृति के उपहार हैं।', ['प्रकृति मेरी पेंसिल का नाम है।', 'मैंने प्रकृति को जेब में रखा।']], ['आदर', 'आदर', '🙏', T('respect', 'सम्मान'), 'हमें बड़ों का आदर करना चाहिए।', 'बच्चों ने अतिथि का आदर से स्वागत किया।', ['आदर से उसने दादी को धक्का दिया।', 'आदर एक खिलौना है।']], ['परिश्रम', 'परिश्रम', '⛏️', T('hard work', 'मेहनत'), 'परिश्रम से ही सफलता मिलती है।', 'मधुमक्खियाँ दिन भर परिश्रम करती हैं।', ['परिश्रम करने के लिए वह दिन भर सोया।', 'परिश्रम नीले रंग का है।']]],
    4: [['कर्तव्य', 'कर्तव्य', '📋', T('duty', 'फ़र्ज़'), 'देश की रक्षा करना हमारा कर्तव्य है।', 'पौधों को पानी देना मेरा रोज़ का कर्तव्य है।', ['कर्तव्य एक मिठाई है।', 'उसने कर्तव्य को पेड़ पर टाँग दिया।']], ['जिज्ञासा', 'जिज्ञासा', '🔭', T('curiosity', 'जानने की इच्छा'), 'जिज्ञासा से हम नई बातें सीखते हैं।', 'उसकी जिज्ञासा उसे पुस्तकालय ले गई।', ['जिज्ञासा से उसने कुछ भी जानना नहीं चाहा।', 'जिज्ञासा एक जूता है।']], ['सहयोग', 'सहयोग', '🤝', T('cooperation', 'मिलकर काम'), 'सहयोग से हर काम आसान होता है।', 'सबके सहयोग से कक्षा सुंदर सज गई।', ['सहयोग के लिए वे आपस में लड़ते रहे।', 'सहयोग एक नदी का नाम है।']], ['संरक्षण', 'संरक्षण', '💧', T('conservation', 'बचाकर रखना'), 'जल संरक्षण आज की ज़रूरत है।', 'वनों का संरक्षण करना हम सबकी ज़िम्मेदारी है।', ['संरक्षण के लिए हमने नल खुला छोड़ दिया।', 'संरक्षण एक खेल है।']], ['आत्मविश्वास', 'आत्मविश्वास', '😎', T('self-confidence', 'ख़ुद पर भरोसा'), 'अभ्यास से आत्मविश्वास बढ़ता है।', 'उसने आत्मविश्वास से मंच पर भाषण दिया।', ['आत्मविश्वास से वह डरकर छिप गया।', 'आत्मविश्वास एक फल है।']]],
  };
  const NOTE = {   // notebook homework per level; {w} = word of the day
    1: [T('Draw the word of the day ({w}) and colour it.', 'आज का शब्द ({w}) बनाओ और रंग भरो।'), T('Trace or write the first letter of {w} five times.', '{w} का पहला अक्षर पाँच बार लिखो।'), T('Show a grown-up three things at home that start with the same sound as {w}.', 'घर में {w} जैसी आवाज़ से शुरू होने वाली तीन चीज़ें बड़ों को दिखाओ।')],
    2: [T('Write the word {w} three times and draw a picture of it.', '{w} शब्द तीन बार लिखो और उसका चित्र बनाओ।'), T('Write two sentences using {w} in your notebook.', 'कॉपी में {w} से दो वाक्य लिखो।'), T('Read today’s story or poem aloud to someone at home.', 'आज की कहानी या कविता घर पर किसी को पढ़कर सुनाओ।'), T('Write numbers 1 to 50 neatly in your notebook.', 'कॉपी में 1 से 50 तक सुंदर गिनती लिखो।')],
    3: [T('Write three sentences using {w} in your notebook.', 'कॉपी में {w} से तीन वाक्य लिखो।'), T('Solve five sums from today’s maths in your notebook and show a grown-up.', 'आज के गणित के पाँच सवाल कॉपी में हल करो और बड़ों को दिखाओ।'), T('Read a page of any storybook aloud and tell the story in your own words.', 'किसी कहानी की किताब का एक पन्ना ज़ोर से पढ़ो और अपने शब्दों में सुनाओ।'), T('Write the tables of 6, 7 and 8 neatly.', '6, 7 और 8 के पहाड़े साफ़ लिखो।')],
    4: [T('Write a short paragraph (5 sentences) using {w}.', '{w} का प्रयोग करते हुए 5 वाक्य का अनुच्छेद लिखो।'), T('Solve five sums from today’s maths chapter in your notebook, showing every step.', 'आज के गणित पाठ के पाँच सवाल हर कदम दिखाते हुए कॉपी में हल करो।'), T('Write 5 new words from today’s lessons with their meanings and use one in a sentence.', 'आज के पाठों के 5 नए शब्द अर्थ सहित लिखो और एक का वाक्य बनाओ।'), T('Write a diary entry: What did you learn today and how did you help someone?', 'डायरी लिखो: आज क्या सीखा और किसकी मदद की?'), T('Draw and label a diagram from today’s science / EVS lesson.', 'आज के विज्ञान / पर्यावरण पाठ का चित्र बनाकर नाम लिखो।')],
  };

  // ================================================================ daily selection
  const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return h; };
  const dayNo = () => Math.floor(Date.now() / 86400000);
  function wordOfDay(c, day = K.today()) {
    const lv = Math.min(4, K.level(c));
    const hiDay = lv >= 2 && c.medium !== 'en' ? hash(day + c.id) % 3 === 0 : lv >= 2 && hash(day + c.id) % 5 === 0;
    if (hiDay) { const L = HW[Math.max(2, Math.min(4, lv))]; const r = L[(dayNo() + hash(c.id || '')) % L.length]; return { hi: true, w: r[0], forms: [r[1]], emoji: r[2], m: r[3], ex: r[4], right: r[5], wrong: r[6], cues: [] }; }
    const L = W[lv]; const r = L[(dayNo() + hash(c.id || '')) % L.length];
    return { hi: false, w: r[0], forms: r[1] || [], emoji: r[2], m: r[3], ex: r[4], right: r[5], wrong: r[6], cues: r[7] || [] };
  }
  K.wordOfDay = wordOfDay;
  const VOCAB = { id: 'vocab-day', world: 'english', type: 'vocabday', levels: [], free: true, title: T('Word of the day', 'आज का शब्द'), emoji: '🗣️', skills: ['vocabulary', 'speaking', 'listening'] };
  window.CUR.push(VOCAB);

  function homework(c = K.child()) {
    const day = K.today(); const d = c.days[day] || (c.days[day] = { plan: [], done: [], stars: 0, skills: {} });
    if (d.hw && d.hw.rev !== undefined) { return d.hw; }
    const lv = Math.min(4, K.level(c));
    // revision: something played on an earlier day, least practised first
    const earlier = Object.keys(c.days).filter((k) => k < day).flatMap((k) => c.days[k].done || []);
    const seen = [...new Set(earlier)].map((id) => K.byId && K.byId(id)).filter((a) => a && a.type !== 'vocabday' && !['draw', 'colour', 'rangoli', 'learndraw'].includes(a.type));
    let rev = seen.sort((a, b) => (c.counts[a.id] || 0) - (c.counts[b.id] || 0))[0];
    if (!rev && K.nextLesson) { const lang = c.medium === 'hi' ? 'hindi' : 'english'; rev = K.nextLesson(dayNo() % 2 ? 'maths' : lang, c, d.plan || []); }
    const notes = NOTE[lv];
    d.hw = { rev: rev ? rev.id : null, note: (dayNo() + hash(c.id || '')) % notes.length, noteDone: false, noteChecked: false };
    K.save();
    return d.hw;
  }
  const noteText = (c, hw) => { const w = wordOfDay(c); const n = NOTE[Math.min(4, K.level(c))][hw.note]; return { en: n.en.replace('{w}', w.w), hi: n.hi.replace('{w}', w.w) }; };
  function hwStatus(c = K.child()) {
    const d = c.days[K.today()] || { done: [] }; const hw = homework(c);
    const items = [{ k: 'word', ok: d.done.includes('vocab-day') }, { k: 'rev', ok: !!hw.rev && d.done.includes(hw.rev), none: !hw.rev }, { k: 'note', ok: hw.noteDone }].filter((x) => !x.none);
    return { hw, items, n: items.filter((x) => x.ok).length, total: items.length };
  }
  K.Diary = { homework, hwStatus, wordOfDay };

  // ================================================================ home card (classwork is the journey above it)
  K.Diary.card = (c) => {
    const s = hwStatus(c); const w = wordOfDay(c);
    return `<div class="diary-card">
      <div class="dc-head"><div><div class="j-title">📒 ${t('Homework', 'गृहकार्य')}</div><div class="j-sub">${t('Do it after your classwork', 'कक्षा-कार्य के बाद करो')} · ${s.n}/${s.total} ${t('done', 'पूरा')}</div></div><div class="ring-prog small" style="--p:${s.total ? s.n / s.total : 0}"><span>${s.n}/${s.total}</span></div></div>
      <button class="dc-word ${s.items[0].ok ? 'ok' : ''}" data-hw="word"><span class="dw-emo">${w.emoji}</span><span class="dw-txt"><small>${t('Word of the day', 'आज का शब्द')}</small><b>${esc(w.w)}</b><i>${esc(tx(w.m))}</i></span><span class="dw-go">${s.items[0].ok ? '✅' : '🎤'}</span></button>
      <div class="dc-row">${s.hw.rev ? `<button class="dc-task ${s.items.find((x) => x.k === 'rev').ok ? 'ok' : ''}" data-hw="rev"><span>🔁</span><b>${t('Revision', 'दोहराना')}</b><small>${esc(tx((K.byId(s.hw.rev) || {}).title || ''))}</small></button>` : ''}
        <button class="dc-task ${s.hw.noteDone ? 'ok' : ''}" data-hw="note"><span>✍️</span><b>${t('Notebook', 'कॉपी का काम')}</b><small>${s.hw.noteChecked ? t('Checked by grown-up ✔', 'बड़ों ने जाँचा ✔') : s.hw.noteDone ? t('Done – show a grown-up', 'हो गया – बड़ों को दिखाओ') : t('Tap to see the task', 'काम देखने के लिए छुओ')}</small></button></div></div>`;
  };
  K.Diary.bind = (back) => {
    qa('[data-hw]').forEach((el) => {
      el.onclick = () => {
        K.sfx.tap(); const c = K.child(); const s = hwStatus(c); const k = el.dataset.hw;
        if (k === 'word') { K.nextAction = null; K.run(VOCAB, back); return; }
        if (k === 'rev') { const a = K.byId(s.hw.rev); if (a) { K.nextAction = null; K.run(a, back); } return; }
        const nt = noteText(c, s.hw);
        K.modal(`<div class="emo">✍️</div><h2>${t('Notebook homework', 'कॉपी का गृहकार्य')}</h2><p class="note-task">${esc(tx(nt))}</p>
          ${s.hw.noteDone ? `<p class="small">${s.hw.noteChecked ? t('A grown-up has checked it. Well done!', 'बड़ों ने जाँच लिया। शाबाश!') : t('Show your notebook to a grown-up so they can tick it.', 'कॉपी बड़ों को दिखाओ ताकि वे सही का निशान लगाएँ।')}</p>` : ''}
          <div class="row center wrap">${s.hw.noteDone ? '' : `<button class="btn green" data-did>✅ ${t('I did it!', 'मैंने कर लिया!')}</button>`}${s.hw.noteDone && !s.hw.noteChecked ? `<button class="btn orange" data-chk>🧑‍🏫 ${t('Grown-up: check it', 'बड़े: जाँचें')}</button>` : ''}<button class="btn ghost" data-close>${t('Close', 'बंद करो')}</button></div>`,
        { did: () => { s.hw.noteDone = true; K.addStars(2); K.save(); K.sfx.good(); say(t('Super! Now show it to a grown-up.', 'बढ़िया! अब बड़ों को दिखाओ।')); back(); },
          chk: () => { K.parentGate(() => { s.hw.noteChecked = true; K.addStars(1); K.save(); K.confetti(); back(); }); } });
        sayT(nt);
      };
    });
  };

  // ================================================================ listening to the child
  const Speech = K.Speech = {
    native: () => K.plug('KkmSpeech'),
    web: () => window.SpeechRecognition || window.webkitSpeechRecognition,
    can: () => !!(Speech.native() || Speech.web()),
    /** resolves with the list of things the recogniser heard (best first); rejects on error / no speech */
    listen: (lang) => new Promise((resolve, reject) => {
      K.stopVoice();
      const nat = Speech.native();
      if (nat) { nat.listen({ lang }).then((r) => resolve((r && r.matches) || [])).catch(reject); return; }
      const R = Speech.web(); if (!R) { reject(new Error('none')); return; }
      const rec = new R(); rec.lang = lang; rec.interimResults = false; rec.maxAlternatives = 3; let got = false;
      rec.onresult = (e) => { got = true; resolve(Array.from(e.results[0]).map((x) => x.transcript)); };
      rec.onerror = (e) => { if (!got) { reject(e.error || e); } };
      rec.onend = () => { if (!got) { reject(new Error('nospeech')); } };
      try { rec.start(); } catch (e) { reject(e); }
    }),
  };
  /** record a short voice clip (for grown-ups to hear later). Resolves with a data URL or null. */
  K.recordClip = async (ms = 6000) => {
    try {
      if (!navigator.mediaDevices || !window.MediaRecorder) { return null; }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream); const parts = [];
      mr.ondataavailable = (e) => { if (e.data && e.data.size) { parts.push(e.data); } };
      const done = new Promise((res) => { mr.onstop = res; });
      mr.start(); await new Promise((r) => setTimeout(r, ms)); mr.stop(); await done; stream.getTracks().forEach((tr) => tr.stop());
      const blob = new Blob(parts, { type: parts[0] ? parts[0].type : 'audio/webm' });
      return await new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = () => res(null); fr.readAsDataURL(blob); });
    } catch { return null; }
  };

  // ================================================================ checking a sentence
  const norm = (s) => String(s || '').toLowerCase().replace(/[.,!?;:"“”'’()।॥\-]/g, ' ').replace(/\s+/g, ' ').trim();
  /** returns {ok, used, words, own, cue, msg{en,hi}} */
  function checkSentence(text, w) {
    const s = norm(text); const words = s ? s.split(' ') : [];
    const forms = [w.w, ...w.forms].map((x) => x.toLowerCase());
    const used = w.hi ? forms.some((f) => s.includes(f)) : words.some((x) => forms.includes(x) || forms.some((f) => x.startsWith(f) && x.length - f.length <= 3));
    const own = norm(w.ex) !== s && norm(w.right) !== s;
    const cue = w.cues.some((cu) => s.includes(cu.toLowerCase()));
    const long = words.length >= (K.level() >= 4 ? 5 : K.level() >= 3 ? 4 : 3);
    const wrong = w.wrong.some((x) => norm(x) === s);
    let msg; let ok = false;
    if (!words.length) { msg = T('I could not hear anything. Tap the mic and speak clearly.', 'मुझे कुछ सुनाई नहीं दिया। माइक दबाकर साफ़ बोलो।'); }
    else if (!used) { msg = T(`I didn’t hear the word "${w.w}". Try again and use it in your sentence.`, `मुझे "${w.w}" शब्द सुनाई नहीं दिया। फिर से बोलो और वाक्य में इसका प्रयोग करो।`); }
    else if (wrong) { msg = T('Hmm, that sentence uses the word in a way that doesn’t make sense. Think about its meaning and try again.', 'हम्म, इस वाक्य में शब्द का अर्थ ठीक नहीं बैठता। अर्थ सोचकर फिर कोशिश करो।'); }
    else if (!long) { msg = T('Good start! Make it a full sentence – add who, what or where.', 'अच्छी शुरुआत! पूरा वाक्य बनाओ – कौन, क्या या कहाँ जोड़ो।'); }
    else if (!own) { msg = T('That is Golu’s example! Now make your own sentence about your life.', 'यह तो गोलू का उदाहरण है! अब अपनी ज़िंदगी से अपना वाक्य बनाओ।'); }
    else { ok = true; msg = cue ? T(`Excellent! You used "${w.w}" correctly and your sentence shows you understand its meaning.`, `बहुत बढ़िया! तुमने "${w.w}" का सही प्रयोग किया और वाक्य से पता चलता है कि तुम अर्थ समझते हो।`) : T(`Well done! You used "${w.w}" in a complete sentence.`, `शाबाश! तुमने "${w.w}" का पूरे वाक्य में प्रयोग किया।`); }
    return { ok, used, n: words.length, own, cue, msg };
  }
  K.checkSentence = checkSentence;

  // ================================================================ WORD OF THE DAY engine
  K.ENGINES.vocabday = (act, back) => {
    const c = K.child(); const w = wordOfDay(c); const lang = w.hi ? 'hi-IN' : 'en-IN'; const lv = K.level(c);
    const sayW = (x) => say(x, { lang });
    const store = (entry) => { c.vocab = c.vocab || {}; c.vocab[K.today()] = { ...(c.vocab[K.today()] || {}), w: w.w, ...entry }; const keys = Object.keys(c.vocab).sort(); while (keys.length > 30) { delete c.vocab[keys.shift()]; } K.save(); };
    // step 1: learn
    const learn = () => {
      K.render(tx(act.title), `<div class="vocab-card"><div class="vc-emo">${w.emoji}</div><h2 class="vc-word">${esc(w.w)}</h2><div class="vc-mean">${esc(tx(w.m))}${K.both() ? `<small>${esc(w.m.hi)}</small>` : ''}</div>
        ${lv >= 2 ? `<div class="vc-ex"><span>💬</span>${esc(w.ex)}</div>` : ''}<div class="vc-steps"><span class="on">1 ${t('Learn', 'सीखो')}</span><span>2 ${t('Understand', 'समझो')}</span><span>3 ${t('Speak', 'बोलो')}</span></div></div>
        <div class="nav"><button class="round" data-hear>🔊</button><button class="btn green" data-go>${t('Next', 'आगे')} ▶</button></div>`, { name: 'act', back, mascot: true });
      const hear = async () => { await sayW(w.w); await sayT(w.m); if (lv >= 2) { await sayT({ en: 'For example:', hi: 'जैसे:' }); await sayW(w.ex); } };
      hear(); q('[data-hear]').onclick = () => { K.sfx.tap(); hear(); }; q('[data-go]').onclick = () => { K.sfx.tap(); lv >= 2 ? understand() : speak(); };
    };
    // step 2: which sentence uses it correctly?
    const understand = () => {
      const opts = shuffle([{ s: w.right, ok: true }, ...w.wrong.map((s) => ({ s, ok: false }))]); let tries = 0;
      K.render(tx(act.title), `<div class="question">${t(`Which sentence uses "<b>${esc(w.w)}</b>" correctly?`, `किस वाक्य में "<b>${esc(w.w)}</b>" का सही प्रयोग है?`)}</div>
        <div class="options text two">${opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.s)}</button>`).join('')}</div><div class="explain hidden" data-explain></div>`, { name: 'act', back, mascot: true });
      sayT({ en: `Which sentence uses ${w.w} correctly?`, hi: `किस वाक्य में ${w.w} का सही प्रयोग है?` });
      qa('[data-k]').forEach((el) => { el.onclick = async () => {
        const o = opts[Number(el.dataset.k)];
        if (o.ok) { el.classList.add('right'); qa('[data-k]').forEach((b) => { b.disabled = true; }); store({ understood: tries === 0 }); await K.praise(); speak(); return; }
        tries++; el.classList.add('wrong'); K.tryAgain(); const ex = q('[data-explain]'); ex.innerHTML = `💡 ${esc(t(`Remember: "${w.w}" means ${w.m.en}. Does that sentence make sense?`, `याद रखो: "${w.w}" का अर्थ है ${w.m.hi}। क्या वह वाक्य ठीक लगता है?`))}`; ex.classList.remove('hidden');
      }; });
    };
    // step 3: the child says (or types) a sentence; Golu checks it
    const speak = () => {
      let tries = 0; const can = Speech.can();
      K.render(tx(act.title), `<div class="question">${lv >= 2 ? t(`Make your own sentence with "<b>${esc(w.w)}</b>" and say it aloud.`, `"<b>${esc(w.w)}</b>" से अपना वाक्य बनाओ और ज़ोर से बोलो।`) : t(`Say the word: <b>${esc(w.w)}</b>`, `शब्द बोलो: <b>${esc(w.w)}</b>`)}</div>
        <div class="speak-box"><button class="mic-btn" data-mic ${can ? '' : 'disabled'}>🎤</button><div class="heard" data-heard>${can ? t('Tap the mic, then speak.', 'माइक दबाओ, फिर बोलो।') : t('Type your sentence below.', 'नीचे अपना वाक्य लिखो।')}</div>
          <div class="type-row"><input data-typed placeholder="${esc(t('…or type it here', '…या यहाँ लिखो'))}" autocomplete="off" ${w.hi ? 'lang="hi"' : ''}><button class="btn" data-check>✔ ${t('Check', 'जाँचो')}</button></div>
          <div class="verdict hidden" data-verdict></div></div>
        <div class="nav"><button class="btn ghost" data-hint>💡 ${t('Example', 'उदाहरण')}</button></div>`, { name: 'act', back, mascot: true });
      sayT(lv >= 2 ? { en: `Now make your own sentence with the word ${w.w}. Tap the mic and say it.`, hi: `अब ${w.w} शब्द से अपना वाक्य बनाओ। माइक दबाकर बोलो।` } : { en: `Say the word ${w.w}`, hi: `बोलो, ${w.w}` });
      const verdict = async (text, spoken) => {
        const v = lv >= 2 ? checkSentence(text, w) : { ok: norm(text).split(' ').some((x) => x === w.w.toLowerCase() || x.startsWith(w.w.toLowerCase())), msg: null };
        if (lv < 2) { v.msg = v.ok ? T(`Yes! You said "${w.w}" perfectly.`, `हाँ! तुमने "${w.w}" बहुत अच्छा बोला।`) : T(`Listen again: ${w.w}. Now you say it.`, `फिर सुनो: ${w.w}। अब तुम बोलो।`); }
        const box = q('[data-verdict]'); box.className = `verdict ${v.ok ? 'good' : 'bad'}`;
        box.innerHTML = `<div class="said">“${esc(text)}”</div><p>${v.ok ? '✅' : '🔁'} ${esc(tx(v.msg))}</p>${v.ok ? `<div class="row center wrap"><button class="btn orange" data-rec>🎙️ ${t('Record my voice for Mummy/Papa', 'मम्मी/पापा के लिए आवाज़ रिकॉर्ड करो')}</button><button class="btn green" data-done>${t('Finish', 'पूरा करो')} ✔</button></div>` : ''}`;
        if (v.ok) {
          K.sfx.good(); K.mascotCheer(); store({ sentence: text, ok: true, spoken, tries: tries + 1 });
          await sayT(v.msg);
          const rec = q('[data-rec]');
          if (rec) { rec.onclick = async () => { rec.disabled = true; rec.textContent = `🔴 ${t('Recording… say your sentence', 'रिकॉर्ड हो रहा है… वाक्य बोलो')}`; const clip = await K.recordClip(6000); if (clip && clip.length < 400000) { store({ audio: clip }); rec.textContent = `✅ ${t('Saved for grown-ups', 'बड़ों के लिए सहेजा')}`; } else { rec.textContent = t('Could not record – that’s okay!', 'रिकॉर्ड नहीं हुआ – कोई बात नहीं!'); } }; }
          q('[data-done]').onclick = () => { K.sfx.tap(); K.finish(act, tries === 0 ? 4 : 3, back); };
        } else { tries++; K.tryAgain(); store({ lastTry: text, ok: false }); await sayT(v.msg); }
      };
      const mic = q('[data-mic]');
      mic.onclick = async () => {
        if (mic.classList.contains('on')) { return; }
        mic.classList.add('on'); q('[data-heard]').textContent = t('Listening… speak now', 'सुन रहा हूँ… अब बोलो');
        try {
          const heard = await Speech.listen(lang);
          const best = heard.find((h) => { const n = norm(h); return [w.w, ...w.forms].some((f) => n.includes(f.toLowerCase())); }) || heard[0] || '';
          q('[data-heard]').textContent = t('I heard:', 'मैंने सुना:'); q('[data-typed]').value = best; verdict(best, true);
        } catch (e) {
          const denied = String(e && (e.code || e.message || e)).match(/denied|not-allowed|permission/i);
          q('[data-heard]').textContent = denied ? t('Microphone is off. A grown-up can allow it in phone settings – or type below.', 'माइक बंद है। बड़े फ़ोन सेटिंग में चालू कर सकते हैं – या नीचे लिखो।') : t('I could not hear you. Tap the mic and try again, or type below.', 'सुनाई नहीं दिया। फिर माइक दबाओ, या नीचे लिखो।');
        } finally { mic.classList.remove('on'); }
      };
      q('[data-check]').onclick = () => { const v = q('[data-typed]').value.trim(); if (!v) { q('[data-typed]').focus(); return; } K.sfx.tap(); verdict(v, false); };
      q('[data-hint]').onclick = () => { K.sfx.tap(); const h = q('[data-heard]'); h.innerHTML = `💬 ${esc(w.ex)}`; sayW(w.ex); };
    };
    learn();
  };

  // ================================================================ grown-ups: diary tab content
  K.Diary.report = (c) => {
    const days = Object.keys(c.days).sort().reverse().slice(0, 14);
    const v = c.vocab || {};
    if (!days.length) { return `<div class="panel"><p>${t('Nothing yet. The diary fills up as your child plays.', 'अभी कुछ नहीं। बच्चा खेलेगा तो डायरी भरेगी।')}</p></div>`; }
    return `<div class="panel"><h3>📒 ${t('Classwork & homework diary', 'कक्षा-कार्य और गृहकार्य डायरी')}</h3>
      <p class="small">${t('Classwork = Today’s Journey in the app. Homework = word of the day (spoken sentence checked by Golu), a revision game and a notebook task you tick.', 'कक्षा-कार्य = ऐप में आज की यात्रा। गृहकार्य = आज का शब्द (बोला गया वाक्य गोलू जाँचता है), एक दोहराने वाला खेल और कॉपी का काम जिसे आप जाँचते हैं।')}</p>
      ${days.map((k) => { const d = c.days[k]; const cw = d.plan.length ? `${d.plan.filter((id) => d.done.includes(id)).length}/${d.plan.length}` : '–'; const hw = d.hw; const vv = v[k];
        return `<div class="diary-day"><div class="dd-date">${esc(k)}</div><div class="dd-body">
          <span>🎒 ${t('Classwork', 'कक्षा-कार्य')}: <b>${cw}</b></span>
          <span>🗣️ ${vv ? `<b>${esc(vv.w)}</b>${vv.sentence ? ` – “${esc(vv.sentence)}” ${vv.ok ? '✅' : ''}` : vv.lastTry ? ` – ${t('tried', 'कोशिश')}: “${esc(vv.lastTry)}”` : ` – ${t('not done', 'नहीं किया')}`}${vv.audio ? ` <button class="pill" data-play="${esc(k)}">▶️ ${t('Listen', 'सुनें')}</button>` : ''}` : t('word not done', 'शब्द नहीं किया')}</span>
          <span>✍️ ${hw ? (hw.noteChecked ? t('notebook checked ✔', 'कॉपी जाँची ✔') : hw.noteDone ? `${t('notebook done – ', 'कॉपी हुई – ')}<button class="pill" data-tick="${esc(k)}">${t('Tick as checked', 'जाँचा हुआ लगाएँ')}</button>` : t('notebook not done', 'कॉपी नहीं हुई')) : '–'}</span>
          ${hw && hw.rev ? `<span>🔁 ${esc(tx((K.byId(hw.rev) || {}).title || ''))} ${d.done.includes(hw.rev) ? '✅' : ''}</span>` : ''}</div></div>`; }).join('')}</div>`;
  };
  K.Diary.bindReport = (c, again) => {
    qa('[data-play]').forEach((el) => { el.onclick = () => { const a = c.vocab[el.dataset.play]; if (a && a.audio) { K.stopVoice(); new Audio(a.audio).play().catch(() => {}); } }; });
    qa('[data-tick]').forEach((el) => { el.onclick = () => { const d = c.days[el.dataset.tick]; if (d && d.hw) { d.hw.noteChecked = true; K.save(); K.sfx.good(); again(); } }; });
  };
  void pick;
})();
