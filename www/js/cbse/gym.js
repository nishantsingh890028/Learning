/* Maths Gym (dynamic – new problems every time), Abacus course and Thinking Puzzles. Listed in course order. */
(() => {
  'use strict';
  const B = window.SYLB; const { T } = B;
  const L = (id, world, levels, type, title, extra = {}) => window.CUR.push({ id, world, levels, free: true, type, title, ...extra });
  const SK = { gym: ['calculation', 'numbers', 'logic'], ab: ['calculation', 'focus', 'memory'], pz: ['logic', 'focus'] };

  // ---------------------------------------------------------------- MATHS GYM
  const OPN = { add: ['Addition', 'जोड़'], sub: ['Subtraction', 'घटाव'], mul: ['Multiplication', 'गुणा'], div: ['Division', 'भाग'], mix: ['Mixed practice', 'मिला-जुला अभ्यास'] };
  const LVN = [null, ['with pictures', 'चित्रों से'], ['up to 20', '20 तक'], ['2-digit', 'दो अंक'], ['2-digit, carry/borrow', 'दो अंक, हासिल/उधार'], ['3-digit', 'तीन अंक']];
  const MLV = [null, ['groups of 2, 5, 10', '2, 5, 10 के समूह'], ['tables to 5', '5 तक पहाड़े'], ['tables to 10', '10 तक पहाड़े'], ['2-digit × 1-digit', 'दो अंक × एक अंक'], ['3-digit × 1-digit', 'तीन अंक × एक अंक']];
  const DLV = [null, ['sharing', 'बाँटना'], ['facts to 5', '5 तक तथ्य'], ['facts to 10', '10 तक तथ्य'], ['long division 2-digit', 'लंबा भाग, दो अंक'], ['long division 3-digit', 'लंबा भाग, तीन अंक']];
  const lab = (op, lv, levels) => { const nm = op === 'mul' ? MLV[lv] : op === 'div' ? DLV[lv] : LVN[lv]; L(`gym-${op}${lv}`, 'gym', levels, 'mathlab', T(`${OPN[op][0]}: ${nm ? nm[0] : `level ${lv}`}`, `${OPN[op][1]}: ${nm ? nm[1] : `स्तर ${lv}`}`), { op, level: lv, skills: SK.gym }); };
  L('gym-count10', 'gym', [1], 'countlab', T('Count up to 10 – train!', '10 तक गिनती – रेलगाड़ी!'), { mode: 'up', max: 10, skills: SK.gym });
  L('gym-rev10', 'gym', [1, 2], 'countlab', T('Reverse count from 10 – rocket!', '10 से उल्टी गिनती – रॉकेट!'), { mode: 'down', max: 10, skills: SK.gym });
  L('gym-near20', 'gym', [1, 2], 'countlab', T('Before, after, between (to 20)', 'पहले, बाद, बीच में (20 तक)'), { mode: 'near', max: 20, rounds: 6, skills: SK.gym });
  lab('add', 1, [1]); lab('sub', 1, [1]); lab('mul', 1, [1, 2]);
  L('gym-tbl-small', 'gym', [1, 2], 'tables', T('Tables of 2, 5 and 10', '2, 5 और 10 के पहाड़े'), { tables: [2, 5, 10], skills: SK.gym });
  L('gym-rev20', 'gym', [1, 2], 'countlab', T('Reverse count from 20', '20 से उल्टी गिनती'), { mode: 'down', max: 20, skills: SK.gym });
  lab('add', 2, [1, 2]); lab('sub', 2, [1, 2]); lab('div', 1, [2]);
  L('gym-skip', 'gym', [2, 3], 'countlab', T('Skip counting: 2s, 5s, 10s', 'उछल गिनती: 2, 5, 10'), { mode: 'skip', max: 100, skills: SK.gym });
  L('gym-rev100', 'gym', [2, 3], 'countlab', T('Reverse count from 100', '100 से उल्टी गिनती'), { mode: 'down', max: 100, skills: SK.gym });
  L('gym-near100', 'gym', [2, 3], 'countlab', T('Before, after, between (to 100)', 'पहले, बाद, बीच में (100 तक)'), { mode: 'near', max: 100, rounds: 6, skills: SK.gym });
  lab('add', 3, [2]); lab('sub', 3, [2]); lab('mul', 2, [2]); lab('div', 2, [2]);
  L('gym-tbl-2to5', 'gym', [2], 'tables', T('Tables 2 to 5', '2 से 5 के पहाड़े'), { tables: [2, 3, 4, 5], skills: SK.gym });
  lab('add', 4, [2, 3]); lab('sub', 4, [2, 3]); lab('mix', 2, [2]);
  L('gym-tbl-6to10', 'gym', [2, 3], 'tables', T('Tables 6 to 10', '6 से 10 के पहाड़े'), { tables: [6, 7, 8, 9, 10], skills: SK.gym });
  lab('mul', 3, [2, 3]); lab('div', 3, [3]); lab('add', 5, [3]); lab('sub', 5, [3]); lab('mul', 4, [3]); lab('div', 4, [3]); lab('mul', 5, [3]); lab('div', 5, [3]); lab('mix', 3, [3]); lab('mix', 4, [3]);
  L('gym-tbl-pick', 'gym', [1, 2, 3], 'tables', T('Tables book: 1 to 20', 'पहाड़ों की किताब: 1 से 20'), { pick: true, from: 1, to: 20, skills: SK.gym });
  L('gym-skipdown', 'gym', [3], 'countlab', T('Skip count backwards', 'उल्टी उछल गिनती'), { mode: 'skip', down: true, max: 200, skills: SK.gym });
  L('gym-near1000', 'gym', [3], 'countlab', T('Before, after, between (to 1000)', 'पहले, बाद, बीच में (1000 तक)'), { mode: 'near', max: 999, rounds: 6, skills: SK.gym });

  // ---------------------------------------------------------------- ABACUS COURSE
  const AB = (id, levels, title, extra) => L(`ab-${id}`, 'abacus', levels, 'abacus', title, { skills: SK.ab, ...extra });
  AB('1-intro', [1, 2, 3], T('1. Meet the abacus', '1. गिनतारे से मिलो'), { mode: 'intro', rods: 1 });
  AB('2-set1', [1, 2, 3], T('2. Make numbers 1–9', '2. 1–9 संख्याएँ बनाओ'), { mode: 'set', rods: 1 });
  AB('3-read1', [1, 2, 3], T('3. Read the abacus (1–9)', '3. गिनतारा पढ़ो (1–9)'), { mode: 'read', rods: 1 });
  AB('4-add-direct', [1, 2, 3], T('4. Add: easy moves', '4. जोड़: आसान चाल'), { mode: 'add', rods: 1, rule: 'direct' });
  AB('5-sub-direct', [1, 2, 3], T('5. Take away: easy moves', '5. घटाव: आसान चाल'), { mode: 'sub', rods: 1, rule: 'direct' });
  AB('6-add-small', [2, 3], T('6. Add with small friends (5)', '6. छोटे दोस्त (5) से जोड़'), { mode: 'add', rods: 1, rule: 'small' });
  AB('7-sub-small', [2, 3], T('7. Take away with small friends (5)', '7. छोटे दोस्त (5) से घटाव'), { mode: 'sub', rods: 1, rule: 'small' });
  AB('8-set2', [2, 3], T('8. Two rods: tens and ones', '8. दो छड़ें: दहाई और इकाई'), { mode: 'set', rods: 2 });
  AB('9-read2', [2, 3], T('9. Read 2-digit numbers', '9. दो अंकों की संख्याएँ पढ़ो'), { mode: 'read', rods: 2 });
  AB('10-add2', [2, 3], T('10. Add 2-digit numbers', '10. दो अंकों का जोड़'), { mode: 'add', rods: 2, rule: 'direct' });
  AB('11-add-big', [2, 3], T('11. Add with big friends (10)', '11. बड़े दोस्त (10) से जोड़'), { mode: 'add', rods: 2, rule: 'big' });
  AB('12-sub-big', [2, 3], T('12. Take away with big friends (10)', '12. बड़े दोस्त (10) से घटाव'), { mode: 'sub', rods: 2, rule: 'big' });
  AB('13-mix2', [3], T('13. Mixed practice (2 rods)', '13. मिला-जुला अभ्यास (2 छड़ें)'), { mode: 'add', rods: 2, rule: 'any', rounds: 6 });
  AB('14-add3', [3], T('14. Three rods: up to 999', '14. तीन छड़ें: 999 तक'), { mode: 'add', rods: 3, rule: 'any' });
  AB('15-sub3', [3], T('15. Take away on three rods', '15. तीन छड़ों पर घटाव'), { mode: 'sub', rods: 3, rule: 'any' });
  AB('16-flash', [3], T('16. Mental abacus: read without counting', '16. मन का गिनतारा: बिना गिने पढ़ो'), { mode: 'read', rods: 3, rounds: 6 });

  // ---------------------------------------------------------------- THINKING PUZZLES
  const PZ = (id, levels, type, title, extra) => L(`pz-${id}`, 'puzzles', levels, type, title, { skills: SK.pz, ...extra });
  PZ('maze1', [1, 2], 'maze', T('Little maze', 'छोटी भूलभुलैया'), { size: 4, rounds: 2 });
  PZ('sudoku-fruit', [1, 2], 'sudoku', T('Fruit sudoku', 'फलों का सुडोकू'), { emoji: true, blanks: 4 });
  PZ('pyr3', [1, 2], 'pyramid', T('Number pyramid', 'संख्या पिरामिड'), { rows: 3, max: 5, hide: 2 });
  PZ('maze2', [2, 3], 'maze', T('Big maze', 'बड़ी भूलभुलैया'), { size: 6, rounds: 2 });
  PZ('sudoku-num', [2, 3], 'sudoku', T('Number sudoku', 'संख्याओं का सुडोकू'), { blanks: 7 });
  PZ('slide', [2, 3], 'slide', T('Sliding puzzle', 'खिसकने वाली पहेली'), { shuffle: 16 });
  PZ('pyr4', [3], 'pyramid', T('Tall number pyramid', 'ऊँचा संख्या पिरामिड'), { rows: 4, max: 9, hide: 4 });
  PZ('maze3', [3], 'maze', T('Giant maze', 'विशाल भूलभुलैया'), { size: 8, rounds: 2 });
  PZ('odd', [1, 2, 3], 'gen', T('Odd one out', 'अलग कौन?'), { gen: 'oddone', rounds: 6 });
  PZ('pattern', [1, 2, 3], 'gen', T('What comes next?', 'आगे क्या आएगा?'), { gen: 'pattern', rounds: 6 });
  PZ('numpat', [2, 3], 'gen', T('Number patterns', 'संख्या पैटर्न'), { gen: 'numpattern', rounds: 6 });
  PZ('mirror', [2, 3], 'mirror', T('Mirror puzzle', 'शीशा पहेली'), { rounds: 3, size: 8 });
  void B;
})();
