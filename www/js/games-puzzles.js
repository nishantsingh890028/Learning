/* Khel Khel Mein – thinking puzzles, freshly generated every time: mini sudoku, maze, number pyramid, sliding puzzle. */
(() => {
  'use strict';
  const { t, tx, pick, rand, shuffle, say, sayT, q, qa } = K;
  const E = K.ENGINES; const { frame, series, shake, bounce, wait, alive } = K.G;

  // ================================================================ MINI SUDOKU (4×4)
  E.sudoku = (act, back) => {
    const total = act.rounds || 2;
    series(act, back, total, (r, next) => {
      const syms = act.emoji ? shuffle(['🍎', '🍌', '🍇', '🥭', '🍊', '🍓']).slice(0, 4) : ['1', '2', '3', '4'];
      // valid 4×4 grid from a base pattern, shuffled
      const base = [[0, 1, 2, 3], [2, 3, 0, 1], [1, 0, 3, 2], [3, 2, 1, 0]];
      const perm = shuffle([0, 1, 2, 3]); const bands = shuffle([0, 1]); const rows = bands.flatMap((b) => shuffle([b * 2, b * 2 + 1]));
      const grid = rows.map((ri) => base[ri].map((v) => perm[v]));
      const blanks = new Set(shuffle([...Array(16).keys()]).slice(0, (act.blanks || 6) + r * 2));
      const cur = grid.flat().map((v, i) => (blanks.has(i) ? null : v)); let sel = null; let mistakes = 0; K._t = { grid };
      frame(act, back, {
        id: 'sudoku', r, total, prompt: { en: 'Fill the grid! Each row, each column and each box of 4 must have every picture once.', hi: 'खाने भरो! हर पंक्ति, हर स्तंभ और हर चार खानों के डिब्बे में हर चीज़ एक बार आए।' },
        body: `<div class="sudoku">${cur.map((v, i) => `<button class="sc ${v == null ? 'blank' : 'given'} ${[1, 3].includes(i % 4) && i % 4 === 1 ? 'vb' : ''} ${i >= 4 && i < 8 ? 'hb' : ''}" data-i="${i}">${v == null ? '' : syms[v]}</button>`).join('')}</div>
          <div class="sym-row">${syms.map((s, k) => `<button class="sym" data-s="${k}">${s}</button>`).join('')}</div>`,
      });
      qa('.sc.blank').forEach((el) => { el.onclick = () => { qa('.sc').forEach((x) => x.classList.remove('sel')); el.classList.add('sel'); sel = Number(el.dataset.i); K.sfx.tap(); }; });
      qa('[data-s]').forEach((el) => {
        el.onclick = async () => {
          if (sel == null) { const first = q('.sc.blank:not(.ok)'); if (first) { bounce(first); } say(t('First tap an empty box.', 'पहले कोई खाली खाना दबाओ।')); return; }
          const v = Number(el.dataset.s); const cell = q(`[data-i="${sel}"]`);
          if (grid[Math.floor(sel / 4)][sel % 4] === v) {
            cur[sel] = v; cell.textContent = syms[v]; cell.classList.add('ok'); cell.classList.remove('sel', 'blank'); cell.onclick = null; sel = null; K.sfx.good();
            if (cur.every((x) => x != null)) { await K.praise(); if (alive('sudoku')) { next(mistakes < 2); } }
          } else { mistakes++; shake(cell); K.sfx.bad(); sayT({ en: 'That one is already in this row, column or box. Look again!', hi: 'यह इस पंक्ति, स्तंभ या डिब्बे में पहले से है। फिर देखो!' }); }
        };
      });
    });
  };

  // ================================================================ MAZE
  E.maze = (act, back) => {
    const total = act.rounds || 2;
    series(act, back, total, (r, next) => {
      const n = (act.size || 5) + r * 2; const walls = Array.from({ length: n * n }, () => ({ n: 1, e: 1, s: 1, w: 1 })); const seen = new Set([0]); const stack = [0];
      while (stack.length) {
        const c = stack[stack.length - 1]; const x = c % n; const y = Math.floor(c / n);
        const nb = [[0, -1, 'n', 's'], [1, 0, 'e', 'w'], [0, 1, 's', 'n'], [-1, 0, 'w', 'e']].map(([dx, dy, a, b]) => [x + dx, y + dy, a, b]).filter(([nx, ny]) => nx >= 0 && ny >= 0 && nx < n && ny < n && !seen.has(ny * n + nx));
        if (!nb.length) { stack.pop(); continue; }
        const [nx, ny, a, b] = pick(nb); const ni = ny * n + nx; walls[c][a] = 0; walls[ni][b] = 0; seen.add(ni); stack.push(ni);
      }
      const goal = n * n - 1; let pos = 0; let moves = 0; K._t = { walls, n, goal, pos: () => pos };
      const [hero, prize] = pick([['🐘', '🍌'], ['🐭', '🧀'], ['🐰', '🥕'], ['🐝', '🌸'], ['🧒', '🏠']]);
      frame(act, back, {
        id: 'maze', r, total, prompt: { en: `Help ${hero} reach ${prize}! Swipe, or tap the arrows.`, hi: `${hero} को ${prize} तक पहुँचाओ! उँगली से खिसकाओ या तीर दबाओ।` },
        body: `<div class="maze" style="--n:${n}">${walls.map((w, i) => `<div class="mz ${w.n ? 'wn' : ''} ${w.e ? 'we' : ''} ${w.s ? 'ws' : ''} ${w.w ? 'ww' : ''}" data-c="${i}">${i === goal ? prize : ''}</div>`).join('')}</div>
          <div class="pad4"><button data-d="n">⬆️</button><div><button data-d="w">⬅️</button><button data-d="s">⬇️</button><button data-d="e">➡️</button></div></div>`,
      });
      const draw = () => { qa('.mz .hero').forEach((h) => h.remove()); q(`[data-c="${pos}"]`).insertAdjacentHTML('beforeend', `<span class="hero">${hero}</span>`); q(`[data-c="${pos}"]`).classList.add('visited'); };
      const move = async (d) => {
        if (walls[pos][d]) { shake(q('.maze')); K.sfx.bad(); return; }
        pos += { n: -n, s: n, e: 1, w: -1 }[d]; moves++; K.sfx.tap(); draw();
        if (pos === goal) { K.confetti(); await K.praise(); if (alive('maze')) { next(true); } }
      };
      qa('[data-d]').forEach((b) => { b.onclick = () => move(b.dataset.d); });
      const mz = q('.maze'); let sx = 0; let sy = 0; mz.style.touchAction = 'none';
      mz.onpointerdown = (e) => { sx = e.clientX; sy = e.clientY; };
      mz.onpointerup = (e) => { const dx = e.clientX - sx; const dy = e.clientY - sy; if (Math.max(Math.abs(dx), Math.abs(dy)) < 20) { return; } move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'e' : 'w') : (dy > 0 ? 's' : 'n')); };
      draw(); void moves;
    });
  };

  // ================================================================ NUMBER PYRAMID (each block = sum of the two below)
  E.pyramid = (act, back) => {
    const total = act.rounds || 3;
    series(act, back, total, (r, next) => {
      const rowsN = act.rows || 3; const bottom = Array.from({ length: rowsN }, () => rand(1, act.max || 9));
      const rows = [bottom]; while (rows[0].length > 1) { const b = rows[0]; rows.unshift(b.slice(1).map((v, i) => v + b[i])); }
      const cells = rows.flatMap((row, ri) => row.map((v, ci) => ({ v, ri, ci })));
      const hide = new Set(shuffle(cells.map((_, i) => i).filter((i) => cells[i].ri < rowsN - 1)).slice(0, act.hide || rowsN));
      let sel = null; let left = hide.size; let mistakes = 0; K._t = { cells, sel: () => sel };
      frame(act, back, {
        id: 'pyr', r, total, prompt: { en: 'Number pyramid! Each brick is the two bricks below it added together.', hi: 'संख्या पिरामिड! हर ईंट नीचे की दो ईंटों का जोड़ है।' },
        body: `<div class="pyramid">${rows.map((row, ri) => `<div class="prow">${row.map((v, ci) => { const i = cells.findIndex((c) => c.ri === ri && c.ci === ci); return `<button class="brick ${hide.has(i) ? 'hid' : ''}" data-b="${i}">${hide.has(i) ? '?' : v}</button>`; }).join('')}</div>`).join('')}</div><div data-pad></div>`,
      });
      const pickCell = (el) => { qa('.brick').forEach((x) => x.classList.remove('sel')); el.classList.add('sel'); sel = Number(el.dataset.b); K.sfx.tap(); };
      qa('.brick.hid').forEach((el) => { el.onclick = () => pickCell(el); });
      pickCell(qa('.brick.hid').slice(-1)[0]);
      K.keypad(q('[data-pad]'), async (v) => {
        if (sel == null) { return false; }
        const c = cells[sel]; const el = q(`[data-b="${sel}"]`);
        if (v === c.v) { el.textContent = v; el.classList.remove('hid', 'sel'); el.classList.add('ok'); el.onclick = null; K.sfx.good(); left--; sel = null; const nx = qa('.brick.hid').slice(-1)[0]; if (nx) { pickCell(nx); } if (!left) { await K.praise(); if (alive('pyr')) { next(mistakes < 2); } } return true; }
        mistakes++; K.tryAgain(); return false;
      }, { max: 4 });
    });
  };

  // ================================================================ SLIDING PUZZLE (3×3)
  E.slide = (act, back) => {
    const total = act.rounds || 1;
    series(act, back, total, (r, next) => {
      let b = [1, 2, 3, 4, 5, 6, 7, 8, 0]; let moves = 0;
      const nbrs = (i) => [i - 3, i + 3, i % 3 ? i - 1 : -1, i % 3 < 2 ? i + 1 : -1].filter((x) => x >= 0 && x < 9);
      let prev = -1; for (let k = 0; k < (act.shuffle || 18) + r * 10; k++) { const z = b.indexOf(0); const opts = nbrs(z).filter((x) => x !== prev); const m = pick(opts); [b[z], b[m]] = [b[m], b[z]]; prev = z; }
      if (b.join() === '1,2,3,4,5,6,7,8,0') { const z = b.indexOf(0); const m = nbrs(z)[0]; [b[z], b[m]] = [b[m], b[z]]; }
      const pic = act.pic || null; K._t = { board: () => b };
      frame(act, back, { id: 'slide', r, total, prompt: { en: 'Slide the tiles to put 1 to 8 in order. Tap a tile next to the empty space.', hi: 'टाइलें खिसकाकर 1 से 8 क्रम में लगाओ। खाली जगह के पास वाली टाइल दबाओ।' }, body: `<div class="slide" data-sl></div><div class="center big-sum">${t('Moves', 'चालें')}: <b data-mv>0</b></div>` });
      const draw = () => {
        q('[data-sl]').innerHTML = b.map((v, i) => (v ? `<button class="st ${v === i + 1 ? 'home' : ''}" data-i="${i}">${pic ? pic[v - 1] : v}</button>` : '<div class="st empty"></div>')).join('');
        qa('[data-i]').forEach((el) => { el.onclick = async () => { const i = Number(el.dataset.i); const z = b.indexOf(0); if (!nbrs(z).includes(i)) { shake(el); return; } [b[z], b[i]] = [b[i], b[z]]; moves++; q('[data-mv]').textContent = moves; K.sfx.tap(); draw(); if (b.join() === '1,2,3,4,5,6,7,8,0') { K.confetti(); await K.praise(); if (alive('slide')) { next(true); } } }; });
      };
      draw();
    });
  };
  void tx; void wait;
})();
