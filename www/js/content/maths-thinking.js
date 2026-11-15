/* MATHS (computation), THINKING (logic, patterns, memory, riddles) and CREATIVITY (drawing, rangoli). */
window.CUR = window.CUR || [];
(() => {
  const g = (id, gen, levels, en, hi, skills, extra = {}) => ({ id, world: 'maths', type: 'gen', gen, levels, title: { en, hi }, skills, ...extra });
  const th = (id, gen, levels, en, hi, skills, extra = {}) => ({ id, world: 'thinking', type: 'gen', gen, levels, title: { en, hi }, skills, ...extra });
  window.CUR.push(
    // ---------------------------------------------------------- MATHS
    g('m-count', 'count', [1], 'Count 1 to 10', 'गिनती 1 से 10', ['numbers'], { free: true, talk: { en: 'Count steps, spoons or rotis together today.', hi: 'आज साथ में सीढ़ियाँ, चम्मच या रोटियाँ गिनें।' } }),
    g('m-more', 'more', [1], 'More or less', 'ज़्यादा या कम', ['numbers', 'logic'], { free: true }),
    g('m-shapes', 'shapes', [1, 2], 'Shapes & colours', 'आकार और रंग', ['logic', 'vocabulary'], { free: true }),
    g('m-add1', 'add', [1], 'Adding with pictures', 'चित्रों से जोड़ो', ['calculation'], { level: 1 }),
    g('m-sub1', 'sub', [1], 'Taking away', 'घटाना', ['calculation'], { level: 1 }),
    g('m-missing', 'missing', [1, 2, 3], 'Missing numbers', 'छूटी संख्या', ['numbers', 'logic']),
    g('m-compare', 'compare', [1, 2, 3], 'Bigger or smaller', 'बड़ी या छोटी संख्या', ['numbers', 'logic'], { free: true }),
    g('m-add', 'add', [2, 3], 'Addition', 'जोड़', ['calculation'], { free: true }),
    g('m-sub', 'sub', [2, 3], 'Subtraction', 'घटाव', ['calculation']),
    g('m-tables', 'tables', [2, 3], 'Times tables', 'पहाड़े', ['calculation', 'memory'], { talk: { en: 'Say a times table together on the way to school.', hi: 'स्कूल जाते समय साथ में पहाड़ा बोलें।' } }),
    g('m-money', 'money', [2, 3], 'Rupees & coins', 'रुपये और सिक्के', ['calculation', 'life']),
    g('m-clock', 'clock', [2, 3], 'Tell the time', 'घड़ी देखना', ['numbers', 'life']),
    g('m-place', 'placevalue', [2, 3], 'Tens & ones', 'इकाई और दहाई', ['numbers']),
    g('m-word', 'word', [2, 3], 'Word problems', 'इबारती सवाल', ['calculation', 'logic', 'reading']),
    g('m-divide', 'divide', [3], 'Division', 'भाग', ['calculation']),
    g('m-fraction', 'fraction', [3], 'Fractions', 'भिन्न', ['numbers', 'logic']),
    g('m-numpattern', 'numpattern', [3], 'Number patterns', 'संख्या के पैटर्न', ['logic', 'numbers']),

    // ---------------------------------------------------------- THINKING
    th('t-pattern', 'pattern', [1, 2, 3], 'What comes next?', 'आगे क्या आएगा?', ['logic'], { free: true }),
    th('t-odd', 'oddone', [1, 2, 3], 'Odd one out', 'कौन अलग है?', ['logic', 'vocabulary'], { free: true }),
    th('t-big', 'bigsmall', [1], 'Big and small', 'बड़ा और छोटा', ['logic'], { free: true }),
    { id: 't-memory', world: 'thinking', type: 'memory', levels: [1, 2, 3], free: true, title: { en: 'Memory match', hi: 'जोड़ी मिलाओ' }, skills: ['memory', 'focus'] },
    { id: 't-memory2', world: 'thinking', type: 'memory', levels: [2, 3], pairs: 8, pool: ['🪔', '🪁', '🛺', '🥭', '🦚', '🐘', '🏏', '🌺', '🍛', '🪷', '🥁', '🎆'], title: { en: 'Memory: India', hi: 'याददाश्त: भारत' }, skills: ['memory', 'focus', 'culture'] },
    { id: 't-sequence', world: 'thinking', type: 'quiz', levels: [1, 2], title: { en: 'What happens first?', hi: 'पहले क्या होता है?' }, skills: ['logic', 'life'],
      questions: [
        { q: { en: 'What do we do FIRST in the morning?', hi: 'सुबह सबसे पहले क्या करते हैं?' }, emoji: '🌅', options: [{ en: 'Wake up', hi: 'उठते हैं' }, { en: 'Go to school', hi: 'स्कूल जाते हैं' }, { en: 'Eat lunch', hi: 'दोपहर का खाना' }], answer: 0 },
        { q: { en: 'What comes before eating food?', hi: 'खाना खाने से पहले क्या करते हैं?' }, emoji: '🍽️', options: [{ en: 'Wash hands', hi: 'हाथ धोते हैं' }, { en: 'Sleep', hi: 'सोते हैं' }, { en: 'Play outside', hi: 'बाहर खेलते हैं' }], answer: 0 },
        { q: { en: 'A seed grows into…', hi: 'बीज बड़ा होकर बनता है…' }, emoji: '🌱', options: [{ en: 'A plant', hi: 'पौधा' }, { en: 'A stone', hi: 'पत्थर' }, { en: 'A bird', hi: 'चिड़िया' }], answer: 0 },
        { q: { en: 'An egg hatches into…', hi: 'अंडे से निकलता है…' }, emoji: '🥚', options: [{ en: 'A chick', hi: 'चूज़ा' }, { en: 'A puppy', hi: 'पिल्ला' }, { en: 'A kitten', hi: 'बिल्ली का बच्चा' }], answer: 0 },
        { q: { en: 'What do we do at night?', hi: 'रात को हम क्या करते हैं?' }, emoji: '🌙', options: [{ en: 'Sleep', hi: 'सोते हैं' }, { en: 'Go to school', hi: 'स्कूल जाते हैं' }, { en: 'Eat breakfast', hi: 'नाश्ता करते हैं' }], answer: 0 },
        { q: { en: 'Which comes after Monday?', hi: 'सोमवार के बाद कौन सा दिन?' }, emoji: '📅', options: [{ en: 'Tuesday', hi: 'मंगलवार' }, { en: 'Sunday', hi: 'रविवार' }, { en: 'Friday', hi: 'शुक्रवार' }], answer: 0 },
      ] },
    { id: 't-riddles', world: 'thinking', type: 'quiz', levels: [2, 3], free: true, title: { en: 'Riddles (पहेलियाँ)', hi: 'पहेलियाँ' }, skills: ['logic', 'vocabulary'],
      questions: [
        { q: { en: 'I have keys but open no locks. What am I?', hi: 'मेरे पास चाबियाँ हैं, पर कोई ताला नहीं खोलता। मैं कौन हूँ?' }, emoji: '🤔', options: [{ en: 'A piano', hi: 'पियानो' }, { en: 'A door', hi: 'दरवाज़ा' }, { en: 'A car', hi: 'गाड़ी' }], answer: 0 },
        { q: { en: 'I am full of water, round and green outside, red inside. What am I?', hi: 'बाहर से हरा, अंदर से लाल, पानी से भरा। मैं कौन?' }, emoji: '🤔', options: [{ en: 'Watermelon', hi: 'तरबूज़' }, { en: 'Mango', hi: 'आम' }, { en: 'Lemon', hi: 'नींबू' }], answer: 0 },
        { q: { en: 'The more you take, the more you leave behind. What are they?', hi: 'जितने ज़्यादा लो, उतने ज़्यादा पीछे छोड़ते जाओ। क्या?' }, emoji: '🤔', options: [{ en: 'Footsteps', hi: 'कदमों के निशान' }, { en: 'Coins', hi: 'सिक्के' }, { en: 'Sweets', hi: 'मिठाई' }], answer: 0 },
        { q: { en: 'I have a face and two hands but no arms or legs. What am I?', hi: 'मेरा चेहरा और दो हाथ हैं, पर पैर नहीं। मैं कौन?' }, emoji: '🤔', options: [{ en: 'A clock', hi: 'घड़ी' }, { en: 'A doll', hi: 'गुड़िया' }, { en: 'A chair', hi: 'कुर्सी' }], answer: 0 },
        { q: { en: 'What has to be broken before you can use it?', hi: 'किसे इस्तेमाल करने से पहले तोड़ना पड़ता है?' }, emoji: '🤔', options: [{ en: 'An egg', hi: 'अंडा' }, { en: 'A cup', hi: 'कप' }, { en: 'A pencil', hi: 'पेंसिल' }], answer: 0 },
        { q: { en: 'What goes up but never comes down?', hi: 'क्या हमेशा ऊपर जाता है, कभी नीचे नहीं आता?' }, emoji: '🤔', options: [{ en: 'Your age', hi: 'तुम्हारी उम्र' }, { en: 'A ball', hi: 'गेंद' }, { en: 'A kite', hi: 'पतंग' }], answer: 0 },
      ] },
    { id: 't-logic', world: 'thinking', type: 'quiz', levels: [3], title: { en: 'Brain teasers', hi: 'दिमागी कसरत' }, skills: ['logic', 'calculation'],
      questions: [
        { q: { en: 'If today is Wednesday, what day was yesterday?', hi: 'आज बुधवार है, तो कल कौन सा दिन था?' }, emoji: '📅', options: [{ en: 'Tuesday', hi: 'मंगलवार' }, { en: 'Thursday', hi: 'गुरुवार' }, { en: 'Monday', hi: 'सोमवार' }], answer: 0 },
        { q: { en: 'Riya is taller than Sam. Sam is taller than Ali. Who is the shortest?', hi: 'रिया, सैम से लंबी है। सैम, अली से लंबा है। सबसे छोटा कौन?' }, emoji: '📏', options: [{ en: 'Ali', hi: 'अली' }, { en: 'Riya', hi: 'रिया' }, { en: 'Sam', hi: 'सैम' }], answer: 0 },
        { q: { en: 'How many legs do 3 cows have?', hi: '3 गायों के कितने पैर होंगे?' }, emoji: '🐄', options: ['12', '9', '6'], answer: 0, keepOrder: false },
        { q: { en: 'A farmer has 5 hens. Each lays 2 eggs. How many eggs?', hi: 'किसान के पास 5 मुर्गियाँ हैं। हर एक 2 अंडे देती है। कुल अंडे?' }, emoji: '🐔', options: ['10', '7', '25'], answer: 0 },
        { q: { en: 'Which is heavier: 1 kg of cotton or 1 kg of iron?', hi: 'कौन भारी है: 1 किलो रुई या 1 किलो लोहा?' }, emoji: '⚖️', options: [{ en: 'Both are equal', hi: 'दोनों बराबर' }, { en: 'Iron', hi: 'लोहा' }, { en: 'Cotton', hi: 'रुई' }], answer: 0, explain: { en: 'Both weigh 1 kilogram!', hi: 'दोनों का वज़न 1 किलो ही है!' } },
        { q: { en: 'What number comes next: 1, 4, 9, 16, …?', hi: 'आगे क्या: 1, 4, 9, 16, …?' }, emoji: '🔢', options: ['25', '20', '18'], answer: 0, explain: { en: 'They are 1×1, 2×2, 3×3, 4×4 – next is 5×5 = 25.', hi: 'ये 1×1, 2×2, 3×3, 4×4 हैं – अगला 5×5 = 25।' } },
      ] },

    // ---------------------------------------------------------- CREATIVITY
    { id: 'c-draw-family', world: 'creative', type: 'draw', levels: [1, 2, 3], free: true, title: { en: 'Draw your family', hi: 'अपना परिवार बनाओ' }, prompt: { en: 'Draw your family! Who lives in your house?', hi: 'अपना परिवार बनाओ! तुम्हारे घर में कौन-कौन रहता है?' }, skills: ['creativity', 'emotions'], talk: { en: 'Ask your child to tell you about the drawing they made today.', hi: 'बच्चे से आज बनाई ड्रॉइंग के बारे में पूछें।' } },
    { id: 'c-draw-sunny', world: 'creative', type: 'draw', levels: [1, 2], title: { en: 'A sunny day', hi: 'धूप वाला दिन' }, prompt: { en: 'Draw a sunny day with a tree and a house.', hi: 'पेड़ और घर के साथ धूप वाला दिन बनाओ।' }, skills: ['creativity'] },
    { id: 'c-draw-dream', world: 'creative', type: 'draw', levels: [2, 3], title: { en: 'My dream house', hi: 'मेरे सपनों का घर' }, prompt: { en: 'Imagine your dream house. What is special about it?', hi: 'अपने सपनों का घर सोचो। उसमें क्या ख़ास है?' }, skills: ['creativity', 'imagination'] },
    { id: 'c-draw-festival', world: 'creative', type: 'draw', levels: [1, 2, 3], title: { en: 'My favourite festival', hi: 'मेरा पसंदीदा त्योहार' }, prompt: { en: 'Draw your favourite festival – lamps, colours, kites or stars!', hi: 'अपना पसंदीदा त्योहार बनाओ – दीये, रंग, पतंग या तारे!' }, stamps: ['🪔', '🎆', '🪁', '⭐', '🌸', '🎉', '🕯️', '🌙', '🎄', '🌼'], skills: ['creativity', 'culture'] },
    { id: 'c-draw-helper', world: 'creative', type: 'draw', levels: [2, 3], title: { en: 'A hero who helps', hi: 'मदद करने वाला हीरो' }, prompt: { en: 'Invent a hero who helps people. What is their special power?', hi: 'एक ऐसा हीरो बनाओ जो लोगों की मदद करता है। उसकी ख़ास शक्ति क्या है?' }, skills: ['creativity', 'imagination', 'values'] },
    { id: 'c-draw-nature', world: 'creative', type: 'draw', levels: [2, 3], title: { en: 'Save our Earth', hi: 'धरती बचाओ' }, prompt: { en: 'Draw one way we can keep our Earth clean and green.', hi: 'धरती को साफ़ और हरा-भरा रखने का एक तरीका बनाओ।' }, stamps: ['🌳', '🌱', '♻️', '💧', '☀️', '🐦', '🌍', '🚲', '🗑️', '🌸'], skills: ['creativity', 'science', 'values'] },
    { id: 'c-rangoli', world: 'creative', type: 'rangoli', levels: [1, 2, 3], free: true, title: { en: 'Rangoli maker', hi: 'रंगोली बनाओ' }, prompt: { en: 'Draw anywhere – your rangoli copies itself all around like magic!', hi: 'कहीं भी बनाओ – तुम्हारी रंगोली जादू की तरह चारों ओर बन जाएगी!' }, skills: ['creativity', 'culture', 'logic'], talk: { en: 'Rangoli teaches symmetry. Ask your child why the pattern repeats.', hi: 'रंगोली से समरूपता (symmetry) सीखते हैं। बच्चे से पूछें कि डिज़ाइन बार-बार क्यों बनता है।' } },
  );
})();
