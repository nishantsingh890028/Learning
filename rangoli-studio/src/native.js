// Saving pictures inside the Android app: write the PNG to the app's cache and open the share sheet,
// so the person can save it to Photos / Gallery / Drive or send it on WhatsApp.
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
window.RSNative = {
  isNative: Capacitor.isNativePlatform(),
  async savePng(dataUrl, filename) {
    const data = dataUrl.split(',')[1];
    const res = await Filesystem.writeFile({ path: filename, data, directory: Directory.Cache });
    await Share.share({ title: 'My painting', text: 'Made in Rangoli Studio', files: [res.uri], dialogTitle: 'Save or share your picture' });
    return true;
  },
};
