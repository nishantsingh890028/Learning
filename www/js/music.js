/* v3.5 music: a beat machine for rhymes (lines are chanted ON the beat, like a teacher in class) and a soft
   harmonium-style instrument with a tanpura drone for real melodies (National Anthem). All synthesised – no files. */
(() => {
  'use strict';
  const SEMI = { C: -9, 'C#': -8, D: -7, 'D#': -6, E: -5, F: -4, 'F#': -3, G: -2, 'G#': -1, A: 0, 'A#': 1, B: 2 };
  const freq = (n) => { const m = /^([A-G]#?)(\d)$/.exec(n); if (!m) { return 0; } return 440 * 2 ** ((SEMI[m[1]] + (Number(m[2]) - 4) * 12) / 12); };
  K.noteFreq = freq;

  // ---------------------------------------------------------------- percussion
  const noise = (a) => { const b = a.createBuffer(1, a.sampleRate * 0.4, a.sampleRate); const d = b.getChannelData(0); for (let i = 0; i < d.length; i++) { d[i] = Math.random() * 2 - 1; } return b; };
  let NB = null;
  const kick = (a, t, out) => { const o = a.createOscillator(); const g = a.createGain(); o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.18); g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.28); o.connect(g).connect(out); o.start(t); o.stop(t + 0.3); };
  const hit = (a, t, out, { f = 1800, q = 0.8, vol = 0.25, len = 0.12, type = 'bandpass' } = {}) => {
    NB = NB || noise(a); const s = a.createBufferSource(); s.buffer = NB; const fl = a.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
    const g = a.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + len); s.connect(fl).connect(g).connect(out); s.start(t); s.stop(t + len + 0.02);
  };
  const tabla = (a, t, out, f = 220) => { const o = a.createOscillator(); const g = a.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(f * 1.5, t); o.frequency.exponentialRampToValueAtTime(f, t + 0.05); g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.35); o.connect(g).connect(out); o.start(t); o.stop(t + 0.4); };
  const bass = (a, t, out, f, len) => { const o = a.createOscillator(); const g = a.createGain(); o.type = 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.03); g.gain.exponentialRampToValueAtTime(0.001, t + len); o.connect(g).connect(out); o.start(t); o.stop(t + len + 0.05); };

  /** Beat machine. K.beat.start(bpm) → K.beat.nextBar() resolves on the next downbeat. 4 beats per bar. */
  const B = { on: false, bpm: 96, t0: 0, timer: null, out: null, next: 0, chord: ['C3', 'G2', 'A2', 'F2'] };
  K.beat = {
    start(bpm = 96, style = 'rhyme') {
      K.beat.stop(); if (!K.state.sound) { B.on = false; return false; }
      const a = K.ac(); if (!a) { return false; }
      B.on = true; B.bpm = bpm; B.style = style; B.out = a.createGain(); B.out.gain.value = 0.55; B.out.connect(a.destination);
      B.t0 = a.currentTime + 0.12; B.next = 0;
      const spb = 60 / bpm;
      const schedule = () => {
        while (B.on && B.t0 + B.next * spb / 2 < a.currentTime + 0.25) {
          const i = B.next; const t = B.t0 + i * spb / 2; const beatInBar = (i / 2) % 4; const bar = Math.floor(i / 8);
          if (i % 2 === 0) {
            if (beatInBar === 0 || beatInBar === 2) { kick(a, t, B.out); if (B.style === 'desi') { tabla(a, t, B.out, 196); } }
            if (beatInBar === 1 || beatInBar === 3) { hit(a, t, B.out, { f: 1500, q: 0.7, vol: 0.22, len: 0.14 }); if (B.style === 'desi') { tabla(a, t, B.out, 294); } }
            if (beatInBar === 0) { bass(a, t, B.out, freq(B.chord[bar % 4]), spb * 3.6); }
          }
          hit(a, t, B.out, { f: 7000, q: 1.2, vol: 0.05, len: 0.05, type: 'highpass' });
          B.next++;
        }
      };
      schedule(); B.timer = setInterval(schedule, 40);
      return true;
    },
    stop() { B.on = false; if (B.timer) { clearInterval(B.timer); B.timer = null; } if (B.out) { const o = B.out; try { o.gain.setTargetAtTime(0, K.ac().currentTime, 0.05); setTimeout(() => o.disconnect(), 300); } catch { /* ignore */ } B.out = null; } },
    barSec: () => (60 / B.bpm) * 4,
    /** milliseconds until the next bar starts (0 when the beat is off) */
    nextBar() {
      if (!B.on) { return Promise.resolve(); }
      const a = K.ac(); const bs = (60 / B.bpm) * 4; const el = a.currentTime - B.t0; const n = Math.max(0, Math.ceil((el + 0.12) / bs));
      return new Promise((r) => setTimeout(r, Math.max(0, (B.t0 + n * bs - a.currentTime) * 1000)));
    },
    get on() { return B.on; },
  };

  /** rough syllable count (English vowel groups; Devanagari akshar) – used to fit a line into its bars */
  K.syllables = (s) => {
    s = String(s);
    if (/[ऀ-ॿ]/.test(s)) { return (s.match(/[अ-औक-हक़-य़](?![्])/g) || []).length || 1; }
    return s.toLowerCase().split(/[^a-z']+/).filter(Boolean).reduce((n, w) => n + Math.max(1, (w.replace(/e$/, '').match(/[aeiouy]+/g) || []).length), 0) || 1;
  };

  // ---------------------------------------------------------------- melody instrument (harmonium-like) + tanpura drone
  let drone = null;
  K.drone = (on, root = 'C3') => {
    const a = K.ac(); if (!a) { return; }
    if (drone) { const d = drone; drone = null; try { d.g.gain.setTargetAtTime(0, a.currentTime, 0.3); setTimeout(() => d.os.forEach((o) => o.stop()), 1500); } catch { /* ignore */ } }
    if (!on || !K.state.sound) { return; }
    const g = a.createGain(); g.gain.value = 0; g.connect(a.destination); g.gain.setTargetAtTime(0.05, a.currentTime, 0.4);
    const os = [freq(root), freq(root) * 1.5, freq(root) * 2].map((f, i) => { const o = a.createOscillator(); o.type = i === 1 ? 'sine' : 'triangle'; o.frequency.value = f; o.detune.value = i * 3; o.connect(g); o.start(); return o; });
    drone = { g, os };
  };
  const reed = (a, t, f, len, out) => {
    const g = a.createGain(); const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1700; lp.Q.value = 0.6;
    [['sawtooth', 1, 0], ['square', 2, 4]].forEach(([type, mul, det]) => { const o = a.createOscillator(); o.type = type; o.frequency.value = f * mul; o.detune.value = det; o.connect(lp); o.start(t); o.stop(t + len + 0.12); });
    lp.connect(g).connect(out);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.04); g.gain.setValueAtTime(0.08, t + Math.max(0.05, len - 0.06)); g.gain.exponentialRampToValueAtTime(0.0001, t + len + 0.1);
  };
  /** play [[note, units], ...] at `unit` seconds per unit; resolves when done (or immediately when sound is off) */
  K.playNotes = (notes, unit = 0.26) => new Promise((resolve) => {
    const a = K.ac(); if (!a || !K.state.sound) { setTimeout(resolve, notes.reduce((s, [, u]) => s + u, 0) * unit * 1000); return; }
    const out = a.createGain(); out.gain.value = 0.8; out.connect(a.destination);
    let t = a.currentTime + 0.06;
    for (const [n, u] of notes) { if (n !== '-') { reed(a, t, freq(n), u * unit * 0.96, out); } t += u * unit; }
    const ms = (t - a.currentTime) * 1000;
    const timer = setTimeout(() => { out.disconnect(); resolve(); }, ms + 120);
    K._stopNotes = () => { clearTimeout(timer); try { out.gain.setTargetAtTime(0, a.currentTime, 0.03); setTimeout(() => out.disconnect(), 200); } catch { /* ignore */ } resolve(); };
  });
  K.stopNotes = () => { if (K._stopNotes) { K._stopNotes(); K._stopNotes = null; } };
})();
