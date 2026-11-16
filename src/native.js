// Native plugins, bundled into www/native.js. Only used inside the Android app.
import { Capacitor, registerPlugin } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { Purchases } from '@revenuecat/purchases-capacitor';

// App-local plugin (android/app/src/main/java/.../KkmSpeechPlugin.java): speech-to-text for vocabulary practice.
const KkmSpeech = registerPlugin('KkmSpeech');

if (Capacitor.isNativePlatform()) {
  window.KKM = { App, Browser, TextToSpeech, Purchases, KkmSpeech };
}
