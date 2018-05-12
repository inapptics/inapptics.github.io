---
title: Android Manual Integration
menu_title: Manual
position: 2.2
parameters:
  - name: 
    content: 
content_markdown: |-
  [dashboardlink]: https://app.inapptics.com/dashboard
  [sdkdownloadlink]: https://todo/Inapptics.zip

  ##### Step 1:
  Download the **Inapptics SDK** [here][sdkdownloadlink].

  ---
  
  ##### Step 2:
  Add downloaded `aar` file to `{Project}/{AppModule}/libs` folder.
  
  ---
  
  ##### Step 3:
  Check if you have line `implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar'])` in your `build.gradle`, so gradle will scan `libs` folder and include all `jar` and `aar` files from there.

  ##### Step 4:
  Click `Sync Project with Gradle Files` and rebuild your project, so Android Studio will see new library.

  ![Sync Project with Gradle Files](images/sync_project_with_gradle_files.png)

  ---

  ##### Step 5:
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