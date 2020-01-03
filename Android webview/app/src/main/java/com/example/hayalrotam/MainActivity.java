package com.example.hayalrotam;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
      private WebView  WebView;
      @Override
protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView=(WebView)findViewById(R.id.webView);
        WebSettings webSettings=WebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        WebView.loadUrl("http://www.hayalrotamnode-env.hy5vjwmhza.us-east-2.elasticbeanstalk.com/auth/login");
        WebView.setWebViewClient(new WebViewClient());
        }
@Override
public void onBackPressed(){
        if(WebView.canGoBack()){
        WebView.goBack();
        }else
        super.onBackPressed();

        }
        }