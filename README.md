# Khel Khel Mein: Play & Learn (Android) – v3.3

> **Testing mode is ON:** everything is unlocked (`unlockAll: true` in `www/js/core.js`). Set it to `false` before publishing so the Full Pack purchase works.

A CBSE-aligned learning app for children aged 3–10 (Balvatika to Class 3), in English, Hindi or both.
Golu the elephant teaches every lesson through games.

- **Syllabus:** 181 chapters that follow the NCERT books in order:
  - Balvatika: NCF Foundational Stage goals.
  - Classes 1–2: Mridang, Sarangi and Joyful Mathematics.
  - Class 3: Santoor, Veena, Maths Mela and Our Wondrous World.
  - "My World" covers environmental studies (EVS).
  - All lesson text is original; no textbook text is copied.
- **895 activities across 42 game types:**
  - Drag-and-drop sorting, putting things in order, matching pairs, feeding animals to count, balloon pop.
  - Shape drawing: Golu demonstrates, then the child traces. Also dot-to-dot, colouring pages (some guided, such as the flag and rainbow), and a mirror symmetry game.
  - Maths you can touch: ten-frames, bundles and sticks for place value, setting a clock, a balance scale, fair sharing, fractions, pictographs, number-line hops, a shop with real coins.
  - Picture "find it" scenes, stories, poems the app sings, "what would you do?" situations, and letter tracing.
- **Practice zone, with new problems every time:**
  - **Maths Gym:** 36 courses of addition, subtraction, multiplication and division. Golu first solves an example step by step: pictures, column sums with carry and borrow, arrays, times-table division and long division. Then the child practises on a number keypad. The level goes up after 3 right answers in a row and down after repeated misses, and Golu shows the full working when the child gets stuck.
  - **Tables:** tables 1–20 build up row by row, followed by practice and a skip-count race.
  - **Counting:** forwards, reverse (a rocket countdown), skip counting, and before / after / between.
  - **Abacus:** a 16-lesson soroban course. It covers the parts of the abacus, making and reading numbers, easy moves, "small friends" (5) and "big friends" (10), up to 3 rods and mental reading. Golu always demonstrates first.
  - **Puzzles:** mazes, fruit and number sudoku, number pyramids, a sliding puzzle, odd one out and patterns.
- **Good values, 40 new lessons:**
  - **Manners and etiquette:** at the table, with guests, in class, on the phone, in public, and knocking and asking first.
  - **Kindness and ethics:** caring for younger children, pets and animals, elders and helpers; honesty; saying sorry; keeping promises; not wasting; including everyone; gratitude.
  - **Safety and feelings:** "my body belongs to me", safe and unsafe touch, secrets vs surprises, "No – Go – Tell", what to do if something feels wrong at home, a safety circle of trusted adults, Childline 1098 and 112, sharing worries, and bullying.
  - **Play and grow:** why play matters, what to play, Indian games, being a good sport, playing safely, screen time and creative play.
- **Three school boards:** chosen per child in the profile or under "Board & class":
  - **CBSE / NCERT**
  - **ICSE:** CISCE themes, including heavy English grammar
  - **International:** Cambridge Primary–style English, Maths and Science, Stages 1–3

  There are 427 chapters in all, with at least 10 per subject per class. ICSE and International chapters use question banks, so the questions are different every time.
- **Stories, 32, illustrated:** every page has an animated picture scene (forest, lake, night sky, village, palace…) with the characters. Each story is 6–10 pages: 14 Panchatantra tales, Jataka tales (The Monkey King's Bridge, The Golden Swan), Shravan Kumar, Tenali Raman, Akbar–Birbal and classic fables. Each has a moral and quiz questions.
- **My India & Anthem (14 lessons):** Jana Gana Mana to sing along (Devanagari with Roman lines), its meaning line by line with pictures, anthem manners, Vande Mataram, the Tiranga with diagrams and a build-the-flag game, national symbols, the story of how India became free, our Constitution, a promise to India, and a quiz.
- **General Awareness (14 lessons with diagrams):** who leads India (President, Vice President, Prime Minister, Chief Justice, Lok Sabha Speaker), how India is run (voting → Parliament → government; country, state, city, village), know our country, important days, great Indians, space and ISRO, continents and oceans, emergency numbers, famous places, festivals, amazing animals, inventions, sports, and a mixed quiz that changes every time.
  - **Keep it current:** office-holders were checked on 14 November 2026. They live in one place, `window.KKM_GK` at the top of `www/js/cbse/india-gk.js`. Update the names there after elections or retirements; the lessons, diagrams and quiz questions update automatically.
- **Save Mother Earth (11 lessons):** plastic, water, electricity, waste bins, trees, clean air and wildlife.
- **Out & About (12 lessons):**
  - meeting new people, picnic spots, buses, trains and the metro
  - markets, places of worship, hospitals, the zoo, restaurants and weddings
  - lifts and queues, birthday parties, road safety, being on time
- **Daily Journey:** 6 activities a day (about 20 minutes): language, syllabus maths, Maths Gym or Abacus, My World, a values lesson, and a poem, drawing, puzzle or story. It moves through the syllabus chapter by chapter.
- **Voice:** soft studio neural voice, generated once and bundled with the app (see section 2). Until the voice files exist, the app uses the phone's best voice.
- **Parents:** a guide on first launch, a daily report with talk prompts, syllabus progress per subject, several children, a class picker, a play-time limit and a parent gate.

```
www/              the app (HTML/CSS/JS, works offline, no tracking)
  js/core.js        state, voice (clips → phone TTS), Golu the mascot, rewards, purchases (CONFIG at the top)
  js/engines.js     cards, quiz, trace, spell, sentence, situation, poem, story, maths generators, memory, draw
  js/games*.js      the interactive games (sort, order, match, feed, pop, shapes, dots, colour, mirror, tenframe, …, facts + diagrams, build-the-flag)
  js/scenes.js      picture scenes for story pages and teaching cards
  js/cbse/          the syllabus: _lib.js (builders), bal.js, c1.js, c2.js, c3.js, fun.js
  js/content/       extra practice, values, smart choices, poems and stories
  audio/vo/         studio voice clips (made by tools/voice)
  fonts/            Baloo 2 (SIL Open Font License)
tools/voice/      voice generator: lines.tsv (every spoken line), voices.json, lexicon.json, build-voice.mjs
android/          Android Studio project (Capacitor)
store/            Play Store listing, Data safety answers, privacy policy
```

**Free:** the first 2 chapters of every subject in every class, plus 49 Fun Zone activities (103 free in all).
**Full Pack (₹299, one-time):** everything.

### Adding a chapter
In `www/js/cbse/c2.js` (for example), copy any `ch(...)` line, give it the next number and pick activities with the builders in `_lib.js`. Examples: `B.sort`, `B.match`, `B.order`, `B.quiz`, `B.story`, `B.shapes`, `B.dots`, `B.colour`, or `B.g('tenframe', …)`. Then run `npm run build`.

## 1. Build the app on your Mac (first time: about 30 minutes)

1. Install **Android Studio**: https://developer.android.com/studio. Open it once and let it download the Android SDK.
2. In Terminal:
   ```bash
   cd khel-khel-mein
   npm install
   npm run build        # bundles native plugins and copies www/ into the Android project
   npm run open         # opens the project in Android Studio
   ```
3. **Try it on a phone:** plug in an Android phone with *USB debugging* turned on (Settings → About phone → tap *Build number* 7 times → Developer options → USB debugging). Then press ▶ Run in Android Studio.
4. **Make the APK** (to share for testing): *Build → Build App Bundle(s) / APK(s) → Build APK(s)*.
   The file appears in `android/app/build/outputs/apk/debug/app-debug.apk`.
5. **Make the Play Store file (.aab):** *Build → Generate Signed App Bundle / APK → Android App Bundle → Create new…* keystore.
   **Back up the keystore file and its passwords.** You need them for every future update, forever.

Whenever you change anything in `www/`, run `npm run build` again.

> Change the package name `com.khelkhelmein.app` in `capacitor.config.json` **before** your first upload. It can never be changed after you publish. Use something you own, such as `com.yourname.khelkhelmein`. After changing it, delete the `android/` folder and run `npx cap add android && npx @capacitor/assets generate --android && npm run build`.

## 2. Voice: make the soft studio voice (do this once, about 20 minutes)

The app speaks about 10,300 different lines (246,000 characters). A free Azure account covers this, because the free tier gives 500,000 characters a month.

1. Create a free Azure account at portal.azure.com, then **Create resource → Speech**. Choose region *Central India* and pricing tier *Free F0*. Open **Keys and Endpoint** and copy *Key 1*.
2. Listen to a sample first:
   ```bash
   AZURE_KEY=paste-key AZURE_REGION=centralindia npm run voice:sample
   ```
   Open `www/audio/vo-sample/listen.html` in Chrome. If you prefer another voice, change it in `tools/voice/voices.json` (soft options are listed there), delete `www/audio/vo-sample` and run the sample again.
3. Make all the clips (re-running resumes where it stopped):
   ```bash
   AZURE_KEY=paste-key AZURE_REGION=centralindia npm run voice
   npm run build
   ```
   Expect about 30–60 MB of audio. The app then speaks with the studio voice, offline.
4. **Have a Hindi speaker listen** to a few hundred clips. If a word sounds wrong, add a respelling to `tools/voice/lexicon.json` (for example `"कमला": "कम्ला"`), delete that clip and run `npm run voice` again.

**Other provider:** [Sarvam AI Bulbul](https://www.sarvam.ai) has very natural Indian Hindi (about ₹3 per 1,000 characters, so roughly ₹400 for the app). Install ffmpeg (`brew install ffmpeg`), then run `SARVAM_KEY=… npm run voice -- --provider sarvam`. Check Sarvam's current model and speaker names and their licence for bundling audio in an app.

**Songs:** the voice reads poems over a gentle tune; neural voices cannot truly sing. For real singing, record a singer for your top poems (an `.mp3` per poem in `www/audio/`, then add `audio: 'audio/name.mp3'` to the poem). Use a written full-buyout contract.

Long text is spoken in short sentences. Chrome's voices stop after about 15 seconds and drop speech that starts right after a stop, which used to cut off stories and teaching steps. Lines made up on the fly (for example "347 + 218?") are spoken by the phone's voice if they have no clip. The app picks the best Hindi and English voice on the phone. Parents can also install Google's Hindi voice: Settings → Text-to-speech → Google → Install voice data → Hindi.

The app never uses the microphone. In "Your turn" the child says the poem out loud and taps "I said it!".

## 3. Turn on payments (the Full Pack)

The app uses **RevenueCat** (free up to $2.5k/month revenue) on top of Google Play Billing.

1. **Play Console** → your app → *Monetize → Products → In-app products* → create `full_pack` (one-time, ₹299).
   Your app must have been uploaded at least once (internal testing is fine) before products can be created.
2. **revenuecat.com** → new project → add an *Android app* with your package name → connect Google Play (follow their service-account guide).
   - *Entitlements*: create `full` and attach `full_pack`.
   - *Offerings*: in the `default` offering, add a package containing `full_pack`.
3. Copy the **public Android SDK key** (`goog_…`) into `www/js/core.js` (CONFIG at the top):
   ```js
   revenuecatApiKey: 'goog_xxxxxxxx',
   ```
4. Run `npm run build` and test the purchase with a *license tester* account (Play Console → Settings → License testing).

Until a key is set, the Android app shows "Purchases are not available", so the paid games stay locked. Only the browser preview unlocks for free.

## 4. Publish on Google Play

1. Create a developer account at https://play.google.com/console ($25 one-time).
2. *Create app* → App name "Khel Khel Mein – Kids Learning", type Game, Free.
3. Fill *App content*:
   - **Target audience:** 5 & under, 6–8 and 9–12. This puts the app under the **Families policy**. The app is built for it: no ads, no accounts, no data collection, the advertising ID permission is removed, and purchases sit behind the parent gate.
   - **Privacy policy:** host `store/privacy-policy.html` (GitHub Pages or Google Sites are free) and paste its URL here and into `privacyUrl` in `www/js/core.js`.
   - **Data safety:** use the answers in `store/listing.md`.
   - **Ads:** No.
4. *Store listing*: copy the text from `store/listing.md`. Upload the icon (`assets/icon-only.png`, 512×512), a feature graphic (1024×500) and at least 2 phone screenshots.
5. **Closed test (new personal accounts):** you need **12 testers opted in for 14 days in a row** before you can apply for production. Ask friends and family now; each needs a Gmail address and an Android phone.
6. Apply for production → review (usually a few days) → live.

## 5. Ideas for the next updates
- Recorded songs for the top 10 poems (biggest quality jump)
- More lessons per world, especially English speaking and Hindi reading for ages 8–10
- Tamil / Telugu / Marathi / Bengali packs
- Weekly report the parent can share on WhatsApp
