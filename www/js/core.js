/* Khel Khel Mein v2 – core: state, profiles, language, voice, music, rewards, UI helpers. */
window.K = (() => {
  'use strict';
  const K = {};

  K.CONFIG = {
    privacyUrl: 'https://example.com/khel-khel-mein/privacy',  // TODO: your hosted privacy policy
    revenuecatApiKey: '',                                     // TODO: RevenueCat public Android key (goog_...)
    entitlement: 'full',
    priceFallback: '₹299',
    demoUnlock: true,                                         // browser preview only; never unlocks in the Android app
    version: '4.1.0',
    // Testing: everything unlocked. Set to false before publishing so the Full Pack purchase works.
    unlockAll: true,
    dailyCount: 5,
  };

  // ---------------------------------------------------------------- helpers
  K.pick = (a) => a[Math.floor(Math.random() * a.length)];
  K.rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  K.shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  K.esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  K.today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  K.plug = (name) => (window.KKM && window.KKM[name]) || null;   // native Android plugins
  K.isHindi = (s) => /[ऀ-ॿ]/.test(String(s));

  // ---------------------------------------------------------------- state
  const KEY = 'kkm2';
  const defaults = () => ({ profiles: [], current: null, full: false, sound: true, limit: 0, played: { day: '', ms: 0 }, bonusMs: 0, speed: 1, seenBrief: false, gallery: [] });
  K.state = (() => { try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { return defaults(); } })();
  K.save = () => { try { localStorage.setItem(KEY, JSON.stringify(K.state)); } catch { /* storage full or blocked */ } };

  K.child = () => K.state.profiles.find((p) => p.id === K.state.current) || null;
  K.newChild = (name, age, medium, avatar) => {
    const p = { id: 'c' + Date.now(), name, age, medium, avatar, stars: 0, stickers: [], streak: 0, lastDay: '', days: {}, counts: {}, skills: {} };
    K.state.profiles.push(p); K.state.current = p.id; K.save(); return p;
  };
  /** Level 1 = ages 3–5, 2 = ages 6–7, 3 = ages 8–10 */
  K.cls = (c = K.child()) => (!c ? 'bal' : c.cls || (window.SYL ? window.SYL.classForAge(c.age) : 'bal'));
  K.level = (c = K.child()) => (!c ? 1 : ({ bal: 1, c1: 2, c2: 2, c3: 3, c4: 4, c5: 4 }[K.cls(c)] || (c.age <= 5 ? 1 : c.age <= 7 ? 2 : c.age <= 8 ? 3 : 4)));
  K.LEVEL_NAME = { 1: { en: 'Little Explorer (3–5)', hi: 'नन्हे खोजी (3–5)' }, 2: { en: 'Young Learner (6–7)', hi: 'युवा सीखने वाले (6–7)' }, 3: { en: 'Smart Star (8)', hi: 'होशियार सितारे (8)' }, 4: { en: 'Senior Star (9–11)', hi: 'सीनियर सितारे (9–11)' } };

  // ---------------------------------------------------------------- language
  /** UI language: 'hi' for Hindi medium, otherwise English. 'both' shows English + Hindi subtitle. */
  K.ui = () => { const c = K.child(); return c && c.medium === 'hi' ? 'hi' : 'en'; };
  K.both = () => { const c = K.child(); return !!c && c.medium === 'both'; };
  K.t = (en, hi) => (K.ui() === 'hi' ? hi : en);
  /** text from {en, hi} or string */
  K.tx = (o) => (o == null ? '' : typeof o === 'string' || typeof o === 'number' ? String(o) : (K.ui() === 'hi' ? (o.hi ?? o.en) : (o.en ?? o.hi)));
  /** secondary-language subtitle when medium = both */
  K.sub = (o) => (K.both() && o && typeof o === 'object' && o.hi && o.en ? `<div class="subline">${K.esc(o.hi)}</div>` : '');

  // ---------------------------------------------------------------- sound effects
  let actx;
  K.ac = () => { if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch { /* no audio */ } } if (actx && actx.state === 'suspended') { actx.resume(); } return actx; };
  function tone(freqs, dur = 0.12, type = 'sine', gap = 0.09, vol = 0.2) {
    if (!K.state.sound) { return; }
    const a = K.ac(); if (!a) { return; }
    freqs.forEach((f, i) => {
      const o = a.createOscillator(); const g = a.createGain();
      o.type = type; o.frequency.value = f;
      const s = a.currentTime + i * gap;
      g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(vol, s + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, s + dur);
      o.connect(g).connect(a.destination); o.start(s); o.stop(s + dur + 0.03);
    });
  }
  K.sfx = {
    tap: () => tone([660], 0.07, 'triangle'),
    good: () => tone([523, 659, 784, 1047], 0.16, 'triangle', 0.08),
    bad: () => tone([260, 200], 0.18, 'square', 0.12, 0.07),
    pop: () => tone([880, 1320], 0.08, 'sine', 0.05),
    win: () => tone([523, 659, 784, 1047, 784, 1047, 1319], 0.2, 'triangle', 0.11),
  };

  // ---------------------------------------------------------------- music (sing-along backing)
  const NOTE = { C4: 261.6, D4: 293.7, E4: 329.6, F4: 349.2, G4: 392.0, A4: 440.0, B4: 493.9, C5: 523.3, D5: 587.3, E5: 659.3, F5: 698.5, G5: 784.0 };
  let musicTimer = null;
  /** Play a melody (array of [note, beats]) softly, looping until stopped. */
  K.music = (melody, bpm = 96, loop = true) => {
    K.stopMusic();
    if (!K.state.sound) { return; }
    const a = K.ac(); if (!a) { return; }
    const beat = 60 / bpm;
    const total = melody.reduce((s, [, b]) => s + b, 0) * beat;
    const play = () => {
      let t = a.currentTime + 0.05;
      for (const [n, b] of melody) {
        if (n !== '-') {
          const o = a.createOscillator(); const g = a.createGain(); const f = NOTE[n] || 0;
          o.type = 'triangle'; o.frequency.value = f;
          g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.06, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + b * beat * 0.95);
          o.connect(g).connect(a.destination); o.start(t); o.stop(t + b * beat);
        }
        t += b * beat;
      }
    };
    play();
    if (loop) { musicTimer = setInterval(play, total * 1000); }
  };
  K.stopMusic = () => { if (musicTimer) { clearInterval(musicTimer); musicTimer = null; } if (K.beat) { K.beat.stop(); } if (K.stopNotes) { K.stopNotes(); } if (K.drone) { K.drone(false); } };
  K.TUNES = {
    // traditional public-domain melody ("Ah vous dirai-je, maman")
    twinkle: [['C4', 1], ['C4', 1], ['G4', 1], ['G4', 1], ['A4', 1], ['A4', 1], ['G4', 2], ['F4', 1], ['F4', 1], ['E4', 1], ['E4', 1], ['D4', 1], ['D4', 1], ['C4', 2]],
    happy: [['C4', 1], ['E4', 1], ['G4', 1], ['E4', 1], ['F4', 1], ['A4', 1], ['G4', 2], ['E4', 1], ['G4', 1], ['C5', 1], ['G4', 1], ['F4', 1], ['D4', 1], ['C4', 2]],
    gentle: [['E4', 1], ['G4', 1], ['A4', 2], ['G4', 1], ['E4', 1], ['D4', 2], ['C4', 1], ['D4', 1], ['E4', 1], ['G4', 1], ['E4', 2], ['-', 2]],
    march: [['G4', 1], ['G4', 1], ['C5', 2], ['B4', 1], ['A4', 1], ['G4', 2], ['E4', 1], ['F4', 1], ['G4', 1], ['A4', 1], ['G4', 2], ['-', 2]],
  };

  // ---------------------------------------------------------------- voice
  /*
   * Voice order of preference:
   *  1. Pre-recorded clip from audio/vo/ (soft neural voice generated by tools/voice, see README)
   *  2. Phone text-to-speech, tuned to sound softer (best voice for the language, slower, natural pitch)
   */
  const HI_NUM = 'शून्य एक दो तीन चार पाँच छह सात आठ नौ दस ग्यारह बारह तेरह चौदह पंद्रह सोलह सत्रह अठारह उन्नीस बीस इक्कीस बाईस तेईस चौबीस पच्चीस छब्बीस सत्ताईस अट्ठाईस उनतीस तीस इकतीस बत्तीस तैंतीस चौंतीस पैंतीस छत्तीस सैंतीस अड़तीस उनतालीस चालीस इकतालीस बयालीस तैंतालीस चवालीस पैंतालीस छियालीस सैंतालीस अड़तालीस उनचास पचास इक्यावन बावन तिरपन चौवन पचपन छप्पन सत्तावन अट्ठावन उनसठ साठ इकसठ बासठ तिरसठ चौंसठ पैंसठ छियासठ सड़सठ अड़सठ उनहत्तर सत्तर इकहत्तर बहत्तर तिहत्तर चौहत्तर पचहत्तर छिहत्तर सतहत्तर अठहत्तर उन्यासी अस्सी इक्यासी बयासी तिरासी चौरासी पचासी छियासी सत्तासी अट्ठासी नवासी नब्बे इक्यानवे बानवे तिरानवे चौरानवे पचानवे छियानवे सत्तानवे अट्ठानवे निन्यानवे सौ'.split(' ');
  /** number → Hindi words (0–9999) so Hindi speech never switches to English digits */
  K.hiNum = (n) => {
    n = Math.round(Number(n)); if (n < 0) { return 'ऋण ' + K.hiNum(-n); }
    if (n <= 100) { return HI_NUM[n]; }
    if (n < 1000) { const h = Math.floor(n / 100); const r = n % 100; return `${HI_NUM[h]} सौ${r ? ' ' + HI_NUM[r] : ''}`; }
    if (n < 100000) { const th = Math.floor(n / 1000); const r = n % 1000; return `${K.hiNum(th)} हज़ार${r ? ' ' + K.hiNum(r) : ''}`; }
    return String(n);
  };
  // How single letters, matras and symbols should be spoken (engines say "क" alone very badly)
  const HI_SAY = {
    'अ': 'अ', 'आ': 'आ', 'इ': 'इ', 'ई': 'ई', 'उ': 'उ', 'ऊ': 'ऊ', 'ऋ': 'रि', 'ए': 'ए', 'ऐ': 'ऐ', 'ओ': 'ओ', 'औ': 'औ', 'अं': 'अं', 'अः': 'अह',
    'ा': 'आ की मात्रा', 'ि': 'छोटी इ की मात्रा', 'ी': 'बड़ी ई की मात्रा', 'ु': 'छोटे उ की मात्रा', 'ू': 'बड़े ऊ की मात्रा', 'ृ': 'ऋ की मात्रा', 'े': 'ए की मात्रा', 'ै': 'ऐ की मात्रा', 'ो': 'ओ की मात्रा', 'ौ': 'औ की मात्रा', 'ं': 'अनुस्वार', 'ँ': 'चंद्रबिंदु', '्': 'हलंत',
    'क्ष': 'क्ष', 'त्र': 'त्र', 'ज्ञ': 'ग्य', 'श्र': 'श्र', 'ड़': 'ड़', 'ढ़': 'ढ़',
  };
  /** Make text speakable: Hindi numbers in words, letters by their names, symbols removed. */
  K.speakable = (text, lang) => {
    text = String(text || '').replace(/<[^>]+>/g, ' ').replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu, '').replace(/\s+/g, ' ').trim();
    if (lang.startsWith('hi')) {
      const one = text.replace(/[।!?.,]/g, '').trim();
      if (HI_SAY[one]) { return HI_SAY[one]; }
      text = text.replace(/(\d)\s*[−-]\s*(\d)/g, '$1 घटा $2').replace(/−/g, ' घटा ').replace(/₹\s*(\d+)/g, '$1 रुपये').replace(/(\d+)\s*\/\s*(\d+)/g, '$2 में से $1').replace(/\d+/g, (d) => ` ${K.hiNum(d)} `).replace(/×/g, ' गुणा ').replace(/÷/g, ' भाग ').replace(/\+/g, ' जोड़ ').replace(/=/g, ' बराबर ');
    } else {
      text = text.replace(/₹\s*(\d+)/g, '$1 rupees').replace(/(\d)\s*−\s*(\d)/g, '$1 minus $2').replace(/×/g, ' times ').replace(/÷/g, ' divided by ').replace(/−/g, ' minus ').replace(/=/g, ' equals ');
    }
    return text.replace(/\s+/g, ' ').trim();
  };
  /** FNV-1a hash used to find a pre-recorded clip. tools/voice/build-voice.mjs uses the same function. */
  K.voKey = (lang, text) => { let h = 0x811c9dc5; const s = `${lang.slice(0, 2)}|${text}`; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
  K.voLog = null;          // test tool: set to a Set() to collect every line the app speaks

  let token = 0; let clip = null; let lastCancel = 0;
  K.synthCancel = () => { if (!!window.speechSynthesis) { window.speechSynthesis.cancel(); lastCancel = Date.now(); } };
  K.stopVoice = () => {
    token++;
    if (clip) { try { clip.pause(); } catch { /* ignore */ } clip = null; }
    const tts = K.plug('TextToSpeech'); if (tts) { tts.stop().catch(() => {}); }
    if (!!window.speechSynthesis) { K.synthCancel(); }
    K.mascotTalk(false);
  };

  // pick the nicest phone voice per language (prefers neural / natural / female voices)
  // A warm female "teacher" voice is preferred. (Bug fixed in v3.5: the old "male" check also matched "female".)
  const FEMALE = /(female|swara|kalpana|heera|neerja|aarti|ananya|kavya|lekha|veena|aditi|raveena|kajal|priya|samantha|zira|-x-hi[ac]-|-x-ahp-|-x-cxx-)/i;
  const MALE = /((^|[^e])male|madhur|hemant|ravi|prabhat|rishi|-x-hi[de]-|-x-ism-|-x-ene-)/i;
  const QUALITY = /(neural|natural|enhanced|premium|wavenet|network|google)/i;
  const scoreVoice = (v, lang) => {
    const l = (v.lang || '').replace('_', '-').toLowerCase(); const n = v.name || v.voiceURI || '';
    let s = l === lang.toLowerCase() ? 10 : l.startsWith(lang.slice(0, 2)) ? 5 : -99;
    if (FEMALE.test(n)) { s += 4; } if (MALE.test(n)) { s -= 4; } if (QUALITY.test(n)) { s += 1; } if (v.localService === false) { s -= 0.5; }
    return s;
  };
  // a voice the parent picked in Grown-ups → Voice check wins
  const picked = (lang) => ((K.state.voicePick || {})[lang.slice(0, 2)] || '');
  let nativeVoices = null;
  async function nativeVoice(tts, lang) {
    if (!nativeVoices) { try { nativeVoices = (await tts.getSupportedVoices()).voices || []; } catch { nativeVoices = []; } }
    const want = picked(lang); if (want) { const i = nativeVoices.findIndex((v) => (v.name || v.voiceURI) === want); if (i >= 0) { return i; } }
    let best = -1; let bs = 0;
    nativeVoices.forEach((v, i) => { const s = scoreVoice(v, lang); if (s > bs) { bs = s; best = i; } });
    return best >= 0 ? best : undefined;
  }
  if (!!window.speechSynthesis) { try { speechSynthesis.getVoices(); speechSynthesis.addEventListener('voiceschanged', () => speechSynthesis.getVoices()); } catch { /* ignore */ } }
  const webVoice = (lang) => { const vs = speechSynthesis.getVoices(); const want = picked(lang); if (want) { const w = vs.find((v) => v.name === want && !badVoices.has(v.name)); if (w) { return w; } } let best = null; let bs = 0; for (const v of vs) { if (badVoices.has(v.name)) { continue; } const s = scoreVoice(v, lang); if (s > bs) { bs = s; best = v; } } return best; };

  /** Voices for the parent's voice picker, best first: [{ name, label }] */
  K.voiceList = async (lang) => {
    const tts = K.plug('TextToSpeech'); let vs = [];
    if (tts) { if (!nativeVoices) { try { nativeVoices = (await tts.getSupportedVoices()).voices || []; } catch { nativeVoices = []; } } vs = nativeVoices; }
    else if (window.speechSynthesis) { vs = speechSynthesis.getVoices(); }
    return vs.filter((v) => scoreVoice(v, lang) > 0).sort((a, b) => scoreVoice(b, lang) - scoreVoice(a, lang)).slice(0, 10)
      .map((v) => { const n = v.name || v.voiceURI; return { name: n, label: `${FEMALE.test(n) ? '👩 ' : MALE.test(n) ? '👨 ' : '🗣️ '}${n}` }; });
  };

  // ---------------------------------------------------------------- web speech helpers (with diagnostics)
  const badVoices = new Set();
  K.voiceDiag = { lastError: '', started: 0, ended: 0, errors: 0, lastVoice: '' };
  function speakChunk(sy, ch, lang, rate, pitch, useVoice) {
    return new Promise((res) => {
      const u = new SpeechSynthesisUtterance(ch);
      u.lang = lang; u.rate = rate; u.pitch = pitch;
      const v = useVoice ? webVoice(lang) : null;
      if (v) { u.voice = v; } K.voiceDiag.lastVoice = v ? `${v.name} (${v.lang})` : `default (${lang})`;
      K._utter = u;   // keep a reference: Chrome loses events for garbage-collected utterances
      let over = false; let started = false;
      const end = (r) => { if (!over) { over = true; clearTimeout(tm); clearTimeout(st); res(r); } };
      const tm = setTimeout(() => { if (sy.speaking) { K.synthCancel(); } end('ok'); }, 2500 + ch.length * 140 / rate);
      // nothing happened at all within 2.5 s → this voice is not working here
      const st = setTimeout(() => { if (!started && !over) { K.synthCancel(); if (v) { badVoices.add(v.name); } end(useVoice ? 'retry' : 'blocked'); } }, 2500);
      u.onstart = () => { started = true; K.voiceDiag.started++; };
      u.onend = () => { K.voiceDiag.ended++; end('ok'); };
      u.onerror = (e) => {
        const er = (e && e.error) || 'error'; K.voiceDiag.lastError = er; K.voiceDiag.errors++;
        if (er === 'interrupted' || er === 'canceled') { end('ok'); return; }
        if (er === 'not-allowed') { end('blocked'); return; }
        if (v) { badVoices.add(v.name); } end(useVoice ? 'retry' : 'ok');
      };
      try { sy.resume(); } catch { /* ignore */ }
      sy.speak(u);
    });
  }
  /** one-time notice when this viewer cannot speak */
  let noticed = false;
  K.voiceNotice = (why) => {
    if (noticed || !K.state.sound) { return; } noticed = true;
    if (why !== 'none' && !!window.speechSynthesis && !speechSynthesis.getVoices().length) { why = 'novoices'; }
    const msg = why === 'novoices' ? K.t('🔇 No voices are installed on this phone. Android: Settings → Languages → Text-to-speech → Speech Services by Google → install English (India) and Hindi.', '🔇 इस फ़ोन में कोई आवाज़ इंस्टॉल नहीं है। Android: सेटिंग्स → भाषाएँ → टेक्स्ट-टू-स्पीच → Speech Services by Google → English (India) और हिंदी इंस्टॉल करें।') : why === 'none' ? K.t('🔇 This viewer has no voice. Open the app in Chrome or Safari (not inside another app) to hear Golu.', '🔇 इस व्यूअर में आवाज़ नहीं है। गोलू की आवाज़ सुनने के लिए ऐप को Chrome या Safari में खोलें।')
      : K.t('🔇 The voice did not start. Tap anywhere and try again, or open Grown-ups → Settings → Voice check.', '🔇 आवाज़ शुरू नहीं हुई। कहीं भी छूकर फिर कोशिश करें, या बड़ों के लिए → सेटिंग → आवाज़ जाँच खोलें।');
    const d = document.createElement('div'); d.className = 'toast'; d.textContent = msg; d.onclick = () => { d.remove(); if (K.voiceCheck) { K.voiceCheck(); } }; document.body.appendChild(d); setTimeout(() => d.remove(), 9000);
  };
  // iPhone/iPad: speech must first start directly inside a tap
  document.addEventListener('pointerdown', () => { if (!!window.speechSynthesis) { try { const w = new SpeechSynthesisUtterance(' '); w.volume = 0; speechSynthesis.speak(w); } catch { /* ignore */ } } }, { once: true, capture: true });

  /**
   * Speak text; resolves when finished. Language is detected from the script (Devanagari → Hindi).
   * Also shows the words in the mascot's speech bubble.
   */
  K.say = (raw, opts = {}) => new Promise((resolve) => {
    const lang = opts.lang || (K.isHindi(raw) ? 'hi-IN' : 'en-IN');
    const text = K.speakable(raw, lang);
    if (!text) { resolve(); return; }
    if (K.voLog) { K.voLog.add(`${lang.slice(0, 2)}\t${text}`); }
    const my = ++token;
    const rate = (opts.rate || 0.9) * (K.state.speed || 1);
    const estimate = 600 + text.length * (lang === 'hi-IN' ? 80 : 65) / rate;
    K.mascotSay(String(raw).replace(/<[^>]+>/g, ' ').trim());
    let done = false;
    const finish = () => { if (!done) { done = true; if (my === token) { K.mascotTalk(false); } resolve(); } };
    if (!K.state.sound) { setTimeout(finish, opts.silentWait ? estimate : 0); return; }
    K.mascotTalk(true);
    setTimeout(finish, estimate * 1.8 + 6000);   // safety net
    // 1. recorded clip
    const key = K.voKey(lang, text);
    if (window.VO && window.VO[key]) {
      if (clip) { try { clip.pause(); } catch { /* ignore */ } }
      const tts = K.plug('TextToSpeech'); if (tts) { tts.stop().catch(() => {}); }
      if (!!window.speechSynthesis) { K.synthCancel(); }
      clip = new Audio(`audio/vo/${key}.${window.VO_EXT || 'ogg'}`);
      clip.playbackRate = Math.min(1.2, Math.max(0.75, K.state.speed || 1));
      clip.onended = finish; clip.onerror = finish;
      clip.play().catch(finish);
      return;
    }
    // 2. phone voice – spoken in short chunks: long text makes Chrome's voices stop silently (15 s limit),
    //    and a new utterance right after cancel() is often dropped, so we pause briefly first.
    const chunks = K.chunkText(text);
    const tts = K.plug('TextToSpeech');
    if (tts) {
      tts.stop().catch(() => {}).then(async () => {
        const voice = await nativeVoice(tts, lang);
        for (let ci = 0; ci < chunks.length; ci++) { if (my !== token) { break; } try { await tts.speak({ text: chunks[ci], lang, rate, pitch: opts.pitch || 1.05, volume: 1.0, voice }); } catch { break; } if (ci < chunks.length - 1 && !opts.noPause) { await new Promise((r) => setTimeout(r, 220)); } }
        finish();
      });
      return;
    }
    if (!!window.speechSynthesis) {
      const sy = window.speechSynthesis;
      if (sy.speaking || sy.pending) { K.synthCancel(); }
      const gap = Math.max(30, 180 - (Date.now() - lastCancel));
      setTimeout(async () => {
        for (const ch of chunks) {
          if (my !== token) { break; }
          // try the chosen voice; if it fails (not installed / offline / blocked) retry with the phone's default voice
          let r = await speakChunk(sy, ch, lang, rate, opts.pitch || 1.05, true);
          if (r === 'retry' && my === token) { r = await speakChunk(sy, ch, lang, rate, opts.pitch || 1.05, false); }
          if (r === 'blocked') { K.voiceNotice('blocked'); break; }
          if (!opts.noPause && my === token) { await new Promise((res) => setTimeout(res, 220)); }
        }
        finish();
      }, gap);
      return;
    }
    K.voiceNotice('none');
    setTimeout(finish, estimate);
  });
  /** split text into short sentences / phrases (≤ ~150 chars) for reliable speech */
  K.chunkText = (text) => {
    const parts = String(text).match(/[^.!?।]+[.!?।]+["”’)]*\s*|[^.!?।]+$/g) || [text];
    const out = [];
    for (let p of parts) {
      p = p.trim(); if (!p) { continue; }
      while (p.length > 150) { let cut = p.lastIndexOf(',', 150); if (cut < 40) { cut = p.lastIndexOf(' ', 150); } if (cut < 20) { cut = 150; } out.push(p.slice(0, cut + 1).trim()); p = p.slice(cut + 1).trim(); }
      if (out.length && out[out.length - 1].length + p.length < 60) { out[out.length - 1] += ` ${p}`; } else if (p) { out.push(p); }
    }
    return out.length ? out : [String(text)];
  };
  // Golu only talks about the screen that is open: a speech (or a chain of speeches) started on a screen that has since
  // been closed never "finishes", so old lessons cannot keep announcing things on the new screen.
  { const sayRaw = K.say; K.say = (raw, opts = {}) => { const ep = K.rid; if (opts.ep != null && opts.ep !== ep) { return new Promise(() => {}); } return sayRaw(raw, opts).then(() => (K.rid === ep || opts.keep ? undefined : new Promise(() => {}))); }; }
  /** run fn after ms only if the same screen is still open */
  K.later = (fn, ms) => { const ep = K.rid; return setTimeout(() => { if (K.rid === ep) { fn(); } }, ms); };
  /** speak a {en,hi} object in the child's medium (both → English then Hindi) */
  K.sayT = async (o, opts) => {
    if (typeof o !== 'object' || o === null) { return K.say(o, opts); }
    if (K.both() && o.en && o.hi) { await K.say(o.en, opts); return K.say(o.hi, opts); }
    return K.say(K.tx(o), opts);
  };

  // ---------------------------------------------------------------- mascot (Golu the elephant)
  K.MASCOT = `<svg class="golu" viewBox="0 0 120 120" aria-hidden="true">
    <ellipse cx="60" cy="112" rx="34" ry="5" fill="rgba(0,0,0,.08)"/>
    <g class="golu-ears"><ellipse cx="22" cy="58" rx="20" ry="26" fill="#93c5fd"/><ellipse cx="24" cy="58" rx="13" ry="18" fill="#fbcfe8"/>
    <ellipse cx="98" cy="58" rx="20" ry="26" fill="#93c5fd"/><ellipse cx="96" cy="58" rx="13" ry="18" fill="#fbcfe8"/></g>
    <circle cx="60" cy="56" r="36" fill="#bfdbfe"/>
    <path d="M60 8 l5 9 h-10z" fill="#f59e0b"/><circle cx="60" cy="24" r="3.2" fill="#ef4444"/>
    <g class="golu-eyes"><ellipse cx="46" cy="50" rx="5" ry="6.5" fill="#1e1b4b"/><ellipse cx="74" cy="50" rx="5" ry="6.5" fill="#1e1b4b"/><circle cx="47.6" cy="47.6" r="1.8" fill="#fff"/><circle cx="75.6" cy="47.6" r="1.8" fill="#fff"/></g>
    <circle cx="38" cy="66" r="6" fill="#fda4af" opacity=".7"/><circle cx="82" cy="66" r="6" fill="#fda4af" opacity=".7"/>
    <path class="golu-trunk" d="M60 58 C 54 72, 52 86, 62 94 C 70 100, 80 94, 76 88 C 72 92, 66 90, 66 84 C 66 76, 68 68, 66 60 Z" fill="#93c5fd"/>
    <ellipse class="golu-mouth" cx="48" cy="77" rx="5" ry="2.2" fill="#9f1239"/>
  </svg>`;
  K.mascotSay = (text) => { const b = document.querySelector('.bubble'); if (b && text) { b.textContent = text.length > 120 ? text.slice(0, 118) + '…' : text; b.classList.add('show'); } };
  K.mascotTalk = (on) => { document.querySelectorAll('.mascot').forEach((m) => m.classList.toggle('talking', !!on)); };
  K.mascotCheer = () => { document.querySelectorAll('.mascot').forEach((m) => { m.classList.remove('cheer'); void m.offsetWidth; m.classList.add('cheer'); }); };

  // ---------------------------------------------------------------- feedback
  K.PRAISE = { en: ['Great job!', 'Well done!', 'Super!', 'You did it!', 'Awesome!', 'Fantastic!', 'Brilliant!'], hi: ['शाबाश!', 'बहुत बढ़िया!', 'वाह!', 'कमाल कर दिया!', 'बहुत अच्छे!', 'बिल्कुल सही!'] };
  K.TRY = { en: ['Try again!', 'Almost! Try again.', 'Oops! One more time.'], hi: ['फिर से कोशिश करो!', 'लगभग! एक बार और।', 'कोई बात नहीं, फिर से करो!'] };
  K.praise = () => { K.sfx.good(); K.mascotCheer(); return K.say(K.ui() === 'hi' ? K.pick(K.PRAISE.hi) : K.pick(K.PRAISE.en)); };
  K.tryAgain = () => { K.sfx.bad(); return K.say(K.ui() === 'hi' ? K.pick(K.TRY.hi) : K.pick(K.TRY.en)); };

  // ---------------------------------------------------------------- rewards
  K.STICKERS = ['🦄', '🐳', '🦖', '🚀', '🌈', '🍩', '🐙', '🦕', '🎠', '🚒', '🏰', '🐬', '🦚', '🍉', '🎡', '🛸', '🦒', '🐢', '🌻', '🎂', '🚂', '🦩', '🐞', '🪐', '🐯', '🦜', '🪁', '🏏', '🛺', '🐘', '🪔', '🎆', '🌺', '🦋', '🍦', '🏆'];
  K.addStars = (n = 1) => {
    const c = K.child(); if (!c || n <= 0) { return; }
    const before = Math.floor(c.stars / 10);
    c.stars += n; K.save();
    document.querySelectorAll('[data-stars]').forEach((el) => { el.textContent = c.stars; });
    if (Math.floor(c.stars / 10) > before) { setTimeout(K.giveSticker, 1300); }
  };
  K.giveSticker = () => {
    const c = K.child();
    const left = K.STICKERS.filter((s) => !c.stickers.includes(s));
    if (!left.length) { return; }
    const s = K.pick(left);
    c.stickers.push(s); K.save();
    K.confetti(); K.sfx.win();
    K.say(K.t('You won a new sticker!', 'तुम्हें नया स्टिकर मिला!'));
    K.modal(`<div class="emo">${s}</div><h2>${K.t('New sticker!', 'नया स्टिकर!')}</h2><p>${K.t('It is in your sticker book.', 'यह तुम्हारी स्टिकर बुक में है।')}</p><button class="btn" data-close>${K.t('Yay!', 'वाह!')}</button>`);
  };
  /** Record a finished activity: counts, skills, today's progress, streak. */
  K.complete = (act, stars) => {
    const c = K.child(); if (!c) { return; }
    const day = K.today();
    const d = c.days[day] || (c.days[day] = { plan: [], done: [], stars: 0, skills: {} });
    if (!d.done.includes(act.id)) { d.done.push(act.id); }
    d.stars += stars;
    c.counts[act.id] = (c.counts[act.id] || 0) + 1;
    for (const sk of act.skills || []) { c.skills[sk] = (c.skills[sk] || 0) + 1; d.skills[sk] = (d.skills[sk] || 0) + 1; }
    if (c.lastDay !== day) {
      const y = new Date(); y.setDate(y.getDate() - 1);
      const yd = `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, '0')}-${String(y.getDate()).padStart(2, '0')}`;
      c.streak = c.lastDay === yd ? c.streak + 1 : 1;
      c.lastDay = day;
    }
    // keep ~60 days of history
    const keys = Object.keys(c.days).sort();
    while (keys.length > 60) { delete c.days[keys.shift()]; }
    K.save();
  };

  // ---------------------------------------------------------------- overlay & confetti
  const $overlay = () => document.getElementById('overlay');
  K.modal = (html, actions = {}) => {
    const o = $overlay();
    o.innerHTML = `<div class="modal">${html}</div>`;
    o.classList.remove('hidden');
    o.onclick = (e) => {
      const b = e.target.closest('button'); if (!b) { return; }
      K.sfx.tap();
      for (const [k, fn] of Object.entries(actions)) { if (b.hasAttribute(`data-${k}`)) { K.closeModal(); fn(); return; } }
      if (b.hasAttribute('data-close')) { K.closeModal(); }
    };
  };
  K.closeModal = () => { const o = $overlay(); o.classList.add('hidden'); o.innerHTML = ''; };
  K.modalOpen = () => !$overlay().classList.contains('hidden');

  K.confetti = () => {
    const cv = document.getElementById('confetti'); const ctx = cv.getContext('2d'); const dpr = window.devicePixelRatio || 1;
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.scale(dpr, dpr);
    const colors = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#a855f7', '#ec4899'];
    const ps = Array.from({ length: 110 }, () => ({ x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * 0.5, r: 5 + Math.random() * 7, c: K.pick(colors), vy: 3 + Math.random() * 4, vx: -2 + Math.random() * 4, a: Math.random() * 6, va: -0.2 + Math.random() * 0.4 }));
    const start = performance.now();
    (function frame(now) {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const p of ps) { p.x += p.vx; p.y += p.vy; p.a += p.va; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 3, p.r, p.r * 0.66); ctx.restore(); }
      if (now - start < 2200) { requestAnimationFrame(frame); } else { ctx.clearRect(0, 0, innerWidth, innerHeight); }
    })(start);
  };

  // ---------------------------------------------------------------- screen helpers
  K.current = 'home';
  K.backStack = [];
  /** Render a screen with a top bar. back: function for the back button. */
  // ---------------------------------------------------------------- fit any screen: phone, tablet, laptop, portrait or landscape
  // Phones use the layout as designed. Bigger screens scale the whole app up (CSS zoom) so it fills the screen like a big phone,
  // and wide screens get more columns (container queries in style.css). Only browsers with standard CSS zoom are scaled.
  K.zoom = 1;
  K.fit = () => {
    const W = window.innerWidth; const H = window.innerHeight;
    const can = typeof Element !== 'undefined' && 'currentCSSZoom' in Element.prototype;
    let s = can ? Math.min(W / 440, H / (W > H ? 620 : 760)) : 1;
    s = Math.round(Math.max(1, Math.min(1.7, s)) * 20) / 20;
    K.zoom = s;
    const r = document.documentElement;
    r.style.setProperty('--z', String(s)); r.style.setProperty('--app-h', `${H / s}px`);
    r.classList.toggle('short', H < 520); r.classList.toggle('wide', W / s >= 700);
  };
  window.addEventListener('resize', K.fit); window.addEventListener('orientationchange', () => setTimeout(K.fit, 150)); K.fit();

  K.render = (title, body, { name = 'screen', back = null, right = null, mascot = ['act', 'poem', 'story', 'trace'].includes(name) } = {}) => {
    K.current = name; K.rid = (K.rid || 0) + 1;
    K.stopMusic(); K.stopVoice();
    const c = K.child();
    const app = document.getElementById('app');
    app.innerHTML = `<div class="bar"><button class="round" data-back aria-label="Back">${back ? '⬅️' : '🏠'}</button><h1>${title}</h1>${right || `<div class="stars">⭐ <span data-stars>${c ? c.stars : 0}</span></div>`}</div><div class="screen ${mascot ? 'with-mascot' : ''}">${body}</div>${mascot ? `<button class="mascot dock" data-mascot aria-label="Golu">${K.MASCOT}</button><div class="bubble"></div>` : ''}`;
    if (mascot) { app.querySelector('[data-mascot]').onclick = () => K.askGolu(); }
    app.querySelector('[data-back]').onclick = () => { K.sfx.tap(); K.stopVoice(); K.stopMusic(); (back || K.home)(); };
    app.querySelector('.screen').scrollTop = 0;
  };
  // ---------------------------------------------------------------- Ask Golu: tap the mascot on any lesson for help with THIS screen
  const H = (en, hi) => ({ en, hi });
  K.HELP = {
    quiz: H('Listen to the question, think, then tap the answer you believe is right. Tap the speaker to hear it again. After a right answer I explain why.', 'सवाल सुनो, सोचो, फिर सही लगने वाला उत्तर छुओ। दोबारा सुनने के लिए स्पीकर छुओ। सही उत्तर के बाद मैं कारण समझाऊँगा।'),
    gen: H('Read the question carefully. Work it out in your head or in your notebook, then tap the answer. If you get it wrong twice, I will give you a hint.', 'सवाल ध्यान से पढ़ो। मन में या कॉपी में हल करो, फिर उत्तर छुओ। दो बार ग़लत हुआ तो मैं संकेत दूँगा।'),
    facts: H('Read each picture card or tap it to hear me. Press Next to see the next card. At the end there is a short quiz.', 'हर चित्र-कार्ड पढ़ो या छूकर सुनो। अगला कार्ड देखने के लिए आगे दबाओ। आख़िर में छोटा क्विज़ है।'),
    match: H('Tap a word on the left, then tap its partner on the right.', 'बाईं ओर एक शब्द छुओ, फिर दाईं ओर उसका जोड़ीदार छुओ।'),
    sort: H('Pick up a card and drop it into the right basket.', 'एक कार्ड उठाओ और सही टोकरी में डालो।'),
    order: H('Tap the pieces in the right order, first to last.', 'टुकड़ों को सही क्रम में, पहले से आख़िरी तक, छुओ।'),
    story: H('Read each page or listen to me. Press Next to turn the page. At the end, answer the questions about the story.', 'हर पन्ना पढ़ो या मुझसे सुनो। पन्ना पलटने के लिए आगे दबाओ। अंत में कहानी के सवालों के जवाब दो।'),
    poem: H('Tap Sing along to sing with the music, or Learn line by line: I say a line, then you say it.', 'संगीत के साथ गाने के लिए "साथ में गाओ" दबाओ, या "पंक्ति-दर-पंक्ति": मैं एक पंक्ति बोलूँगा, फिर तुम बोलो।'),
    situation: H('Read what is happening and choose what a kind, wise child would do. I will tell you why.', 'पढ़ो क्या हो रहा है और चुनो कि एक दयालु, समझदार बच्चा क्या करेगा। मैं कारण बताऊँगा।'),
    abacus: H('Move the beads: lower beads are worth 1 each, push them up to the bar. The top bead is worth 5, bring it down. Follow the numbered steps. Tap Hint if you are stuck.', 'मोती खिसकाओ: नीचे वाला हर मोती 1 का, उसे पट्टी तक ऊपर करो। ऊपर वाला मोती 5 का, उसे नीचे लाओ। क्रमांकित कदम देखो। अटको तो संकेत दबाओ।'),
    mathlab: H('First watch how I solve it step by step. Then solve the next ones yourself on the number pad.', 'पहले देखो मैं कैसे कदम-दर-कदम हल करता हूँ। फिर अगले सवाल नंबर पैड पर ख़ुद हल करो।'),
    vocabday: H('Learn the word and its meaning, pick the sentence that uses it correctly, then tap the mic and say your own sentence. I check that you used the word properly.', 'शब्द और उसका अर्थ सीखो, सही प्रयोग वाला वाक्य चुनो, फिर माइक दबाकर अपना वाक्य बोलो। मैं जाँचूँगा कि शब्द सही प्रयोग हुआ।'),
    spell: H('Tap the letters in the right order to build the word.', 'शब्द बनाने के लिए अक्षर सही क्रम में छुओ।'),
    sentence: H('Tap the words in the right order to make the sentence.', 'वाक्य बनाने के लिए शब्द सही क्रम में छुओ।'),
    trace: H('Follow the dotted line with your finger, slowly and carefully.', 'बिंदु वाली रेखा पर उँगली धीरे-धीरे चलाओ।'),
    cards: H('Tap each card to hear it, then press Next.', 'हर कार्ड छूकर सुनो, फिर आगे दबाओ।'),
    memory: H('Turn two cards. If they match, they stay open. Remember where each picture is!', 'दो कार्ड पलटो। जोड़ी मिली तो खुले रहेंगे। याद रखो कौन सा चित्र कहाँ है!'),
  };
  K.askGolu = async () => {
    const a = K.curAct || {}; const help = K.HELP[a.type] || H('Listen carefully and try your best. Tap the speaker to hear the question again.', 'ध्यान से सुनो और पूरी कोशिश करो। सवाल दोबारा सुनने के लिए स्पीकर छुओ।');
    K.mascotCheer(); await K.sayT(help);
    const ask = document.getElementById('app').querySelector('[data-ask]'); if (ask) { ask.click(); }
  };
  K.q = (s) => document.getElementById('app').querySelector(s);
  K.qa = (s) => [...document.getElementById('app').querySelectorAll(s)];

  // ---------------------------------------------------------------- parent gate
  K.parentGate = (onPass, onCancel) => {
    const a = K.rand(3, 9); const b = K.rand(3, 9); let entry = '';
    K.modal(`<div class="emo" style="font-size:56px">👨‍👩‍👧</div><h2>${K.t('Grown-ups only', 'केवल बड़ों के लिए')}</h2>
      <p>${K.t('Please answer:', 'कृपया उत्तर दें:')} <b>${a} × ${b}</b></p>
      <div class="answer" data-ans>&nbsp;</div>
      <div class="keypad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `<button data-n="${n}">${n}</button>`).join('')}<button data-del>⌫</button><button data-n="0">0</button><button data-ok class="ok">✔</button></div>
      <button class="btn ghost" data-cancel style="margin-top:14px">${K.t('Cancel', 'रद्द करें')}</button>`);
    $overlay().onclick = (e) => {
      const btn = e.target.closest('button'); if (!btn) { return; }
      K.sfx.tap();
      if (btn.hasAttribute('data-cancel')) { K.closeModal(); if (onCancel) { onCancel(); } return; }
      if (btn.dataset.n !== undefined && entry.length < 3) { entry += btn.dataset.n; }
      if (btn.hasAttribute('data-del')) { entry = entry.slice(0, -1); }
      $overlay().querySelector('[data-ans]').innerHTML = entry || '&nbsp;';
      if (btn.hasAttribute('data-ok')) {
        if (Number(entry) === a * b) { K.closeModal(); onPass(); } else { K.sfx.bad(); entry = ''; $overlay().querySelector('[data-ans]').textContent = '✖'; }
      }
    };
  };

  // ---------------------------------------------------------------- purchases
  K.Store = {
    plugin: () => K.plug('Purchases'),
    ready: false,
    async init() {
      const P = this.plugin();
      if (!P || !K.CONFIG.revenuecatApiKey) { return; }
      try { await P.configure({ apiKey: K.CONFIG.revenuecatApiKey }); this.ready = true; const r = await P.getCustomerInfo(); this.apply(r.customerInfo); } catch (e) { console.warn('store init', e); }
    },
    apply(ci) { if (ci && ci.entitlements && ci.entitlements.active && ci.entitlements.active[K.CONFIG.entitlement]) { K.state.full = true; K.save(); } },
    async pkg() { const o = await this.plugin().getOfferings(); return o && o.current && o.current.availablePackages && o.current.availablePackages[0]; },
    async price() { if (!this.ready) { return null; } try { const p = await this.pkg(); return p && p.product && p.product.priceString; } catch { return null; } },
    async buy() {
      if (!this.ready) {
        if (K.CONFIG.demoUnlock && !window.KKM) { K.state.full = true; K.save(); return { ok: true, message: 'Preview mode: unlocked without payment. In the Android app this opens Google Play checkout.' }; }
        return { ok: false, message: 'Purchases are not available right now. Please try again later.' };
      }
      try {
        const r = await this.plugin().purchasePackage({ aPackage: await this.pkg() });
        this.apply(r.customerInfo);
        return K.state.full ? { ok: true, message: 'Everything is unlocked. Thank you!' } : { ok: false, message: 'The purchase did not complete.' };
      } catch (e) { return { ok: false, message: e && e.userCancelled ? 'Purchase cancelled.' : 'The purchase did not complete.' }; }
    },
    async restore() {
      if (!this.ready) { return { ok: K.state.full, message: K.state.full ? 'Already unlocked.' : 'Purchases are not available right now.' }; }
      try { const r = await this.plugin().restorePurchases(); this.apply(r.customerInfo); return { ok: K.state.full, message: K.state.full ? 'Purchase restored.' : 'No previous purchase found for this Google account.' }; } catch { return { ok: false, message: 'Could not reach Google Play.' }; }
    },
  };

  // ---------------------------------------------------------------- play-time limit
  K.todayMs = () => { if (K.state.played.day !== K.today()) { K.state.played = { day: K.today(), ms: 0 }; K.state.bonusMs = 0; } return K.state.played.ms; };
  let breakShown = false;
  K.breakShown = () => breakShown;
  setInterval(() => {
    if (document.hidden || !K.child()) { return; }
    K.todayMs(); K.state.played.ms += 10000; K.save();
    if (K.state.limit && K.state.played.ms >= K.state.limit * 60000 + (K.state.bonusMs || 0) && !breakShown) {
      breakShown = true; K.stopVoice(); K.stopMusic();
      K.say(K.t('Time for a break! See you later.', 'आराम का समय! फिर मिलेंगे।'));
      K.modal(`<div class="emo">😴</div><h2>${K.t('Time for a break!', 'आराम का समय!')}</h2><p>${K.t('You learned so much today. Go and play outside, drink water, and come back tomorrow!', 'आज तुमने बहुत कुछ सीखा। बाहर खेलो, पानी पियो, और कल फिर आना!')}</p><button class="btn ghost" data-more>${K.t('Grown-ups: 15 more minutes', 'बड़े: 15 मिनट और')}</button>`);
      document.getElementById('overlay').onclick = (e) => {
        if (!e.target.closest('[data-more]')) { return; }
        K.parentGate(() => { K.state.bonusMs = (K.state.bonusMs || 0) + 15 * 60000; K.save(); breakShown = false; }, () => { breakShown = false; });
      };
    }
  }, 10000);

  return K;
})();
