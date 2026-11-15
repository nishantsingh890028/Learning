// Native plugins, bundled into www/native.js. Only used inside the Android app.
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { Purchases } from '@revenuecat/purchases-capacitor';

if (Capacitor.isNativePlatform()) {
  window.KKM = { App, Browser, TextToSpeech, Purchases };
}
