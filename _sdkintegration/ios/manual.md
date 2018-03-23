---
title: iOS Manual Integration
menu_title: Manual
position: 1.2
parameters:
  - name: 
    content: 
content_markdown: |-
  [dashboardlink]: https://app.inapptics.com/dashboard
  [sdkdownloadlink]: https://s3.amazonaws.com/inapptics-cdn-ko0ld/sdk/manual/Inapptics.zip

  ##### Step 1:
  Download the **Inapptics SDK** [here][sdkdownloadlink].

  ---
  
  ##### Step 2:
  Extract the downloaded archive file.
  
  ---
  
  ##### Step 3:
  Open your project in Xcode.

  ##### Step 4:
  Select your project target and switch to the **General** tab. Drag and drop `Inapptics.framework` into the project's **Embedded Binaries** section.

  ![Embedded Binaries](images/embedded_binaries.png)

  ---

  ##### Step 5:
  Make sure the **'Copy items if needed'** checkbox is checked.
  {: .error }

  ![Copy items if needed](images/copy_items.png)

  ---

  ##### Step 6:
  Switch to the **Build Phases** tab and add a new **Run Script Phase** with the following code snippet:
  
  ``` bash
  bash "./Inapptics.framework/strip-frameworks.sh"
  ```

  ![Copy items if needed](images/build_phase.png)


  ##### Step 7:
  Finally, edit your `AppDelegate` file:

  1. Import the `Inapptics` module
  2. Initialize `Inapptics` in the `-application:didFinishLaunchingWithOptions:` method:

  ---
  ``` swift
  import Inapptics


  func application(application: UIApplication, didFinishLaunchingWithOptions
                  launchOptions: [NSObject: AnyObject]?) -> Bool
  {
      // Override point for customization after application launch.

      ...

      Inapptics.letsGo(withAppToken: "YOUR_APP_TOKEN")
      return true
  }
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  @import Inapptics;


  - (BOOL)application:(UIApplication *)application
          didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
  {
      // Override point for customization after application launch.

      ...

      [Inapptics letsGoWithAppToken:@"YOUR_APP_TOKEN"];
      return YES;
  }
  ```
  {: .code-group title="Objective-C" }

  ![AppDelegate](images/app-delegate.png)

  ---

  Congratulations! **Inapptics** is now integrated into your project target. Perform a session on your app, press the home button and the data will appear on your [Dashboard][dashboardlink]{:target="_blank"} within less than a minute.
  {: .success }
---