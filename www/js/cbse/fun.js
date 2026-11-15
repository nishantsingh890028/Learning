/* Fun Zone extras: drawing studio, colouring book, dot-to-dot, symmetry and brain games for every age. */
(() => {
  'use strict';
  const B = window.SYLB; const { T } = B;
  const add = (id, world, levels, a, free) => window.CUR.push({ id, world, levels, free, ...a });
  // ---------------------------------------------------------------- Create (drawing)
  add('f-shapes1', 'creative', [1, 2], B.shapes(T('Shape studio: easy', 'आकार स्टूडियो: आसान'), ['circle', 'square', 'triangle', 'heart']), true);
  add('f-shapes2', 'creative', [2, 3], B.shapes(T('Shape studio: tricky', 'आकार स्टूडियो: मुश्किल'), ['star', 'hexagon', 'crescent', 'spiral', 'arrow']));
  add('f-lines', 'creative', [1], B.shapes(T('Lines for little hands', 'नन्हे हाथों की रेखाएँ'), ['stand', 'sleep', 'zigzag', 'wave']), true);
  add('f-colour1', 'creative', [1, 2, 3], B.colour(T('Colouring book: home & garden', 'रंग भरो: घर और बगीचा'), ['house', 'flower', 'butterfly']), true);
  add('f-colour2', 'creative', [1, 2, 3], B.colour(T('Colouring book: fun things', 'रंग भरो: मज़ेदार चीज़ें'), ['fish', 'car', 'elephant']));
  add('f-colour3', 'creative', [1, 2, 3], B.colour(T('Colouring book: festivals', 'रंग भरो: त्योहार'), ['diya', 'kite', 'flag']));
  add('f-dots1', 'creative', [1, 2], B.dots(T('Dot to dot: 1, 2, 3', 'बिंदु जोड़ो: 1, 2, 3'), ['tree', 'diya', 'heart'], 'num'), true);
  add('f-dots2', 'creative', [2, 3], B.dots(T('Dot to dot: count in twos', 'बिंदु जोड़ो: दो-दो करके'), ['butterfly', 'rocket', 'umbrella'], 'skip2'));
  // ---------------------------------------------------------------- Thinking
  add('f-mirror', 'thinking', [2, 3], B.g('mirror', T('Mirror magic', 'शीशे का जादू'), { rounds: 3, skills: ['logic', 'focus'] }), true);
  add('f-pop', 'thinking', [1, 2], B.g('pop', T('Balloon pop: letters', 'गुब्बारे फोड़ो: अक्षर'), { rounds: 3, skills: ['focus', 'reading'] }), true);
  add('f-pop-num', 'thinking', [1, 2, 3], B.g('pop', T('Balloon pop: numbers', 'गुब्बारे फोड़ो: संख्याएँ'), { kind: 'numbers', to: 20, rounds: 3, skills: ['focus', 'numbers'] }));
  add('f-pop-even', 'thinking', [2, 3], B.g('pop', T('Balloon pop: even numbers', 'गुब्बारे फोड़ो: सम संख्याएँ'), { kind: 'even', rounds: 2, skills: ['focus', 'numbers'] }));
  add('f-order', 'thinking', [1, 2, 3], B.order(T('What happens next?', 'आगे क्या होगा?'), [
    [['A chick hatches', 'चूज़ा निकलता है'], [['🥚', 'egg', 'अंडा'], ['🐣', 'hatching', 'अंडे से निकलना'], ['🐥', 'chick', 'चूज़ा'], ['🐔', 'hen', 'मुर्गी']]],
    [['A butterfly grows', 'तितली बनती है'], [['🥚', 'egg', 'अंडा'], ['🐛', 'caterpillar', 'इल्ली'], ['🫛', 'pupa', 'कोया'], ['🦋', 'butterfly', 'तितली']]],
    [['Making a sandwich', 'सैंडविच बनाना'], [['🍞', 'bread', 'ब्रेड'], ['🧈', 'butter', 'मक्खन'], ['🥒', 'vegetables', 'सब्ज़ियाँ'], ['🥪', 'sandwich!', 'सैंडविच!']]],
  ], { skills: ['logic', 'science'] }), true);
})();
