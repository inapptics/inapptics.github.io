---
title: Gradle Integration
menu_title: Gradle
position: 2.1
parameters:
  - name: 
    content: 
content_markdown: |-
  [dashboardlink]: https://app.inapptics.com/dashboard

  ##### Step 1:
  Open `build.gradle` for your app's module.
  
  ---
  
  ##### Step 2:
  Add the `implementation 'com.inapptics.sdk:android-sdk:0.9'` dependency in your `build.gradle`:
  ``` groovy
  dependencies {
    implementation 'com.inapptics.sdk:android-sdk:0.9'
    ...
  }
  ```
  
  ---
  
  ##### Step 3:
  Click on `Sync Now`.

  ---

  ##### Step 4:
  Finally, initialize Inapptics in `onCreate` method of your entry Activities:

  ---
  ``` java
  import android.app.Activity;
  import android.os.Bundle;

  import com.inapptics.sdk.Inapptics;

  public class MyMainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

      Inapptics.letsGo("YOUR_APP_TOKEN", this);

      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
    }
  }
  ```
  {: .code-group-start title="Java" }

  ``` kotlin
  import android.app.Activity
  import android.os.Bundle

  import com.inapptics.sdk.Inapptics

  class MyMainActivity : Activity() {

      override fun onCreate(savedInstanceState: Bundle?) {

          Inapptics.letsGo("YOUR_APP_TOKEN", this)

          super.onCreate(savedInstanceState)
          setContentView(R.layout.activity_main)
      }
  }
  ```
  {: .code-group title="Kotlin" }

  ---

  Congratulations! **Inapptics** is now integrated into your project target. Perform a session on your app, press the home button and the data will appear on your [Dashboard][dashboardlink]{:target="_blank"} within less than a minute.
  {: .success }
---