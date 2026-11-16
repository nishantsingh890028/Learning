package com.khelkhelmein.app;

import android.Manifest;
import android.content.Intent;
import android.os.Bundle;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import java.util.ArrayList;

/**
 * Speech-to-text for the "say a sentence" vocabulary practice.
 * Uses Android's built-in SpeechRecognizer; nothing is stored by the plugin.
 */
@CapacitorPlugin(name = "KkmSpeech", permissions = { @Permission(strings = { Manifest.permission.RECORD_AUDIO }, alias = "mic") })
public class KkmSpeechPlugin extends Plugin {

    private SpeechRecognizer recognizer;

    @PluginMethod
    public void available(PluginCall call) {
        JSObject r = new JSObject();
        r.put("available", SpeechRecognizer.isRecognitionAvailable(getContext()));
        call.resolve(r);
    }

    @PluginMethod
    public void listen(PluginCall call) {
        if (getPermissionState("mic") != PermissionState.GRANTED) {
            requestPermissionForAlias("mic", call, "micCallback");
            return;
        }
        start(call);
    }

    @PermissionCallback
    private void micCallback(PluginCall call) {
        if (getPermissionState("mic") == PermissionState.GRANTED) {
            start(call);
        } else {
            call.reject("Microphone permission denied", "denied");
        }
    }

    private void start(final PluginCall call) {
        final String lang = call.getString("lang", "en-IN");
        getActivity().runOnUiThread(() -> {
            try {
                if (recognizer != null) {
                    recognizer.destroy();
                }
                recognizer = SpeechRecognizer.createSpeechRecognizer(getContext());
                Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
                intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
                intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, lang);
                intent.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 3);
                intent.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, false);
                intent.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, 1500L);
                recognizer.setRecognitionListener(new RecognitionListener() {
                    private boolean done = false;

                    @Override public void onReadyForSpeech(Bundle params) { notifyListeners("ready", new JSObject()); }
                    @Override public void onBeginningOfSpeech() { }
                    @Override public void onRmsChanged(float rmsdB) { }
                    @Override public void onBufferReceived(byte[] buffer) { }
                    @Override public void onEndOfSpeech() { }
                    @Override public void onPartialResults(Bundle partialResults) { }
                    @Override public void onEvent(int eventType, Bundle params) { }

                    @Override
                    public void onError(int error) {
                        if (done) { return; }
                        done = true;
                        call.reject("Speech error " + error, String.valueOf(error));
                    }

                    @Override
                    public void onResults(Bundle results) {
                        if (done) { return; }
                        done = true;
                        ArrayList<String> matches = results.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
                        JSArray list = new JSArray();
                        if (matches != null) {
                            for (String m : matches) { list.put(m); }
                        }
                        JSObject r = new JSObject();
                        r.put("matches", list);
                        call.resolve(r);
                    }
                });
                recognizer.startListening(intent);
            } catch (Exception e) {
                call.reject(e.getMessage() == null ? "Speech failed" : e.getMessage());
            }
        });
    }

    @PluginMethod
    public void stop(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            if (recognizer != null) {
                recognizer.stopListening();
            }
        });
        call.resolve();
    }

    @Override
    protected void handleOnDestroy() {
        if (recognizer != null) {
            recognizer.destroy();
            recognizer = null;
        }
    }
}
