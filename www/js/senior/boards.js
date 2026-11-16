/* Class 4–5 courses for every board. CBSE follows the NCERT 2025–26 books (Santoor, Veena, Maths Mela, Our Wondrous World)
   plus Computers; ICSE and International split EVS into Science and Social Studies (Global Perspectives for International). */
(() => {
  'use strict';
  const { ch } = window.SYL; const { topics, GN, T } = window.SRL;
  const lab = (op, level, en, hi) => ({ type: 'mathlab', op, level, title: T(en, hi) });

  // ---------------------------------------------------------------- maths chapters (fresh problems every play)
  const M = {
    c4: [
      ['🔢', 'Numbers up to 1,00,000', '1,00,000 तक की संख्याएँ', [GN('placeval', ['Place value', 'स्थानीय मान'], 4), GN('numname', ['Number names', 'संख्याओं के नाम'], 4), GN('bigcompare', ['Biggest and smallest', 'सबसे बड़ी और सबसे छोटी'], 4)]],
      ['➕', 'Adding and subtracting big numbers', 'बड़ी संख्याओं का जोड़-घटाव', [lab('add', 6, 'Add with carrying (4 digits)', 'हासिल वाला जोड़ (4 अंक)'), lab('sub', 6, 'Subtract with borrowing (4 digits)', 'उधार वाला घटाव (4 अंक)'), GN('wordprob', ['Story sums', 'इबारती सवाल'], 4)]],
      ['✖️', 'Multiplication', 'गुणा', [lab('mul', 4, 'Watch and multiply', 'देखो और गुणा करो'), GN('mulbig', ['Multiply bigger numbers', 'बड़ी संख्याओं का गुणा'], 4)]],
      ['➗', 'Division', 'भाग', [lab('div', 4, 'Long division step by step', 'लंबा भाग, कदम-दर-कदम'), GN('divrem', ['Quotient and remainder', 'भागफल और शेषफल'], 4)]],
      ['🧮', 'Factors and multiples', 'गुणनखंड और गुणज', [GN('factors', ['Factors and multiples', 'गुणनखंड और गुणज'], 4)]],
      ['🍕', 'Fractions', 'भिन्न', [GN('fraction', ['Fractions', 'भिन्न'], 4)]],
      ['💰', 'Money', 'पैसा', [GN('money', ['Rupees and paise', 'रुपये और पैसे'], 4)]],
      ['📏', 'Length, weight and capacity', 'लंबाई, भार और धारिता', [GN('measure', ['Convert the units', 'इकाइयाँ बदलो'], 4)]],
      ['⏰', 'Time and calendar', 'समय और कैलेंडर', [GN('time24', ['24-hour clock and durations', '24 घंटे की घड़ी और अवधि'], 4)]],
      ['🔷', 'Shapes, symmetry and perimeter', 'आकृतियाँ, सममिति और परिमाप', [GN('shapes45', ['Shapes and symmetry', 'आकृतियाँ और सममिति'], 4), GN('perimarea', ['Perimeter', 'परिमाप'], 4)]],
      ['🔁', 'Patterns and Roman numerals', 'पैटर्न और रोमन संख्याएँ', [GN('pattern4', ['What comes next?', 'आगे क्या?'], 4), GN('roman', ['Roman numerals', 'रोमन संख्याएँ'], 4)]],
      ['📊', 'Data handling', 'आँकड़ों का प्रबंधन', [GN('bargraph', ['Read the bar graph', 'दंड आलेख पढ़ो'], 4)]],
    ],
    c5: [
      ['🔢', 'Large numbers (lakhs)', 'बड़ी संख्याएँ (लाख)', [GN('placeval', ['Place value in lakhs', 'लाखों में स्थानीय मान'], 5), GN('numname', ['Number names', 'संख्याओं के नाम'], 5), GN('bigcompare', ['Compare large numbers', 'बड़ी संख्याओं की तुलना'], 5)]],
      ['🧠', 'Operations and word problems', 'संक्रियाएँ और इबारती सवाल', [GN('mulbig', ['3-digit × 2-digit', '3 अंक × 2 अंक'], 5), GN('divrem', ['Division with remainders', 'शेषफल वाला भाग'], 5), GN('wordprob', ['Two-step story sums', 'दो कदम वाले सवाल'], 5)]],
      ['🧮', 'Factors, multiples, HCF and LCM', 'गुणनखंड, गुणज, म.स. और ल.स.', [GN('factors', ['Primes, HCF and LCM', 'अभाज्य, म.स., ल.स.'], 5)]],
      ['🍕', 'Fractions', 'भिन्न', [GN('fraction', ['Equivalent, add and subtract', 'तुल्य, जोड़ और घटाव'], 5)]],
      ['🔟', 'Decimals', 'दशमलव', [GN('decimal', ['Tenths and hundredths', 'दशांश और शतांश'], 5), GN('money', ['Money sums', 'पैसे के सवाल'], 5)]],
      ['📐', 'Angles as turns', 'कोण – घुमाव', [GN('angle', ['Kinds of angles', 'कोणों के प्रकार'], 5)]],
      ['⬜', 'Area and perimeter', 'क्षेत्रफल और परिमाप', [GN('perimarea', ['Area and perimeter', 'क्षेत्रफल और परिमाप'], 5)]],
      ['🧊', '3-D shapes and volume', 'त्रिविमीय आकृतियाँ और आयतन', [GN('shapes45', ['Faces, edges and volume', 'फलक, किनारे और आयतन'], 5)]],
      ['📏', 'Measurement', 'मापन', [GN('measure', ['Convert the units', 'इकाइयाँ बदलो'], 5)]],
      ['⏰', 'Time', 'समय', [GN('time24', ['24-hour time and durations', '24 घंटे का समय और अवधि'], 5)]],
      ['🔁', 'Patterns and Roman numerals', 'पैटर्न और रोमन संख्याएँ', [GN('pattern4', ['Number patterns', 'संख्या पैटर्न'], 5), GN('roman', ['Roman numerals to 100', '100 तक रोमन संख्याएँ'], 5)]],
      ['📊', 'Data handling', 'आँकड़ों का प्रबंधन', [GN('bargraph', ['Bar graphs', 'दंड आलेख'], 5)]],
    ],
  };
  const addMaths = (board, cls) => M[cls].forEach(([emoji, en, hi, acts], i) => ch(cls, 'maths', i + 1, emoji, T(en, hi), acts, { board }));
  /** chapters from topic keys */
  const addTopics = (board, cls, sub, keys) => keys.forEach((k, i) => { const tp = topics[k]; if (!tp) { throw new Error(`missing topic ${k}`); } ch(cls, sub, i + 1, tp.emoji, tp.title, tp.acts, { board }); });

  const PLAN = {
    cbse: {
      c4: { english: ['e4-nouns', 'e4-tenses', 'e4-story', 'e4-poem-wind', 'e4-adjectives', 'e4-sentences', 'e4-words', 'e4-poem-shadow', 'e4-letter', 'e4-vocab'],
        hindi: ['h4-sangya', 'h4-lingvachan', 'h4-kabir', 'h4-vilom', 'h4-kaal', 'h4-kahani', 'h4-muhavare', 'h4-patra'],
        evs: ['g-community', 'g-homes', 's-plants', 's-animals', 's-food', 's-digest', 's-water', 's-matter', 'g-maps', 's-environment'],
        computers: ['k-parts', 'k-keyboard', 'k-safety'] },
      c5: { english: ['e5-tenses', 'e5-story', 'e5-poem-arrow', 'e5-agreement', 'e5-joiners', 'e5-speech', 'e5-poem-daffodils', 'e5-idioms', 'e5-determiners', 'e5-writing', 'e5-poem-tagore', 'e5-vocab'],
        hindi: ['h5-visheshan', 'h5-rahim', 'h5-sarvanam', 'h5-kahani', 'h5-upsarg', 'h5-lokokti', 'h5-ekshabd', 'h5-vartani', 'h5-nibandh'],
        evs: ['s-river', 's-body', 's-photo', 'g-india', 's-force', 's-magnet', 's-space', 's-disaster', 'g-freedom', 'g-government'],
        computers: ['k-files', 'k-coding', 'k-safety'] },
    },
    icse: {
      c4: { english: ['e4-nouns', 'e4-adjectives', 'e4-tenses', 'e4-sentences', 'e4-words', 'e4-vocab', 'e4-story', 'e4-poem-wind', 'e4-poem-shadow', 'e4-letter'],
        hindi: ['h4-sangya', 'h4-lingvachan', 'h4-vilom', 'h4-kaal', 'h4-muhavare', 'h4-kabir', 'h4-kahani', 'h4-patra'],
        science: ['s-plants', 's-animals', 's-food', 's-digest', 's-matter', 's-water', 's-force', 's-environment'],
        social: ['g-maps', 'g-india', 'g-community', 'g-homes', 'g-government', 'g-history', 'g-culture'],
        computers: ['k-parts', 'k-keyboard', 'k-safety'] },
      c5: { english: ['e5-tenses', 'e5-agreement', 'e5-determiners', 'e5-joiners', 'e5-speech', 'e5-idioms', 'e5-vocab', 'e5-story', 'e5-poem-arrow', 'e5-poem-daffodils', 'e5-poem-tagore', 'e5-writing'],
        hindi: ['h5-visheshan', 'h5-sarvanam', 'h5-upsarg', 'h5-lokokti', 'h5-ekshabd', 'h5-vartani', 'h5-rahim', 'h5-kahani', 'h5-nibandh'],
        science: ['s-photo', 's-body', 's-magnet', 's-space', 's-river', 's-disaster', 's-environment'],
        social: ['g-india', 'g-rights', 'g-government', 'g-freedom', 'g-history', 'g-global'],
        computers: ['k-files', 'k-coding', 'k-safety'] },
    },
    intl: {
      c4: { english: ['e4-story', 'e4-nouns', 'e4-tenses', 'e4-poem-wind', 'e4-adjectives', 'e4-sentences', 'e4-words', 'e4-letter', 'e4-poem-shadow', 'e4-vocab'],
        science: ['s-plants', 's-animals', 's-food', 's-digest', 's-matter', 's-force', 's-magnet', 's-environment'],
        social: ['g-community', 'g-global', 'g-maps', 'g-homes', 'g-culture'],
        computers: ['k-parts', 'k-coding', 'k-safety'] },
      c5: { english: ['e5-story', 'e5-tenses', 'e5-agreement', 'e5-speech', 'e5-poem-arrow', 'e5-joiners', 'e5-determiners', 'e5-idioms', 'e5-poem-daffodils', 'e5-writing', 'e5-vocab', 'e5-poem-tagore'],
        science: ['s-photo', 's-body', 's-water', 's-space', 's-river', 's-disaster'],
        social: ['g-global', 'g-rights', 'g-maps', 'g-history', 'g-india'],
        computers: ['k-files', 'k-coding', 'k-safety'] },
    },
  };
  Object.entries(PLAN).forEach(([board, classes]) => Object.entries(classes).forEach(([cls, subs]) => {
    addMaths(board, cls);
    Object.entries(subs).forEach(([sub, keys]) => addTopics(board, cls, sub, keys));
  }));
})();
