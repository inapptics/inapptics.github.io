---
title: Android Manual Integration
menu_title: Manual
position: 2.2
parameters:
  - name: 
    content: 
content_markdown: |-
  [dashboardlink]: https://app.inapptics.com/dashboard
  [sdkdownloadlink]: https://s3.amazonaws.com/inapptics-cdn-ko0ld/sdk/android/inapptics-sdk.aar

  ##### Step 1:
  Download the **Inapptics SDK** [here][sdkdownloadlink].

  ---
  
  ##### Step 2:
  In Android Studio click `File > New > New Module...`.
  
  ---
  
  ##### Step 3:
  Select `Import .JAR/.AAR Package`.

  ---

  ##### Step 4:
  Provide path to downloaded aar file from step 1 and click `Finish`.

  ---

  ##### Step 5:
  Click `File > Project Structure`

  ---

  ##### Step 6:
  Select your app module from listed modules, then click on `Dependencies`, then on the plus sign where you can click `Module dependency`.
  From available modules select library module that you created in steps 2-4 and click `OK`.

  ![Module dependency](images/sdk_integration_android_module_dependency.png)

  ---

  ##### Step 77:
  Finally, initialize Inapptics in `onCreate` method of your entry Activities:

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