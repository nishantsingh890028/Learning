package com.khelkhelmein.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // App-local plugins must be registered before the bridge starts.
        registerPlugin(KkmSpeechPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
