---
title: CocoaPods
position: 1.1
parameters:
  - name: 
    content: 
content_markdown: |-
  [dashboardlink]: https://app.inapptics.com/dashboard

  ##### Step 1:
  Create a `Podfile` in your project's root directory, if you don't have one yet.
  
  ---
  
  ##### Step 2:
  Add the `Inapptics` pod to the target in your `Podfile`:
  ``` bash
  target 'YOUR TARGET'
    ...
    pod 'Inapptics'
  end
  ```
  
  ---
  
  ##### Step 3:
  Run this in terminal:
  ``` bash
  pod repo update && pod install
  ```

  `repo update` ensures that you install the latest version of **Inapptics SDK**.
  {: .info }

    ---

  ##### Step 4:
  Open your project using the generated *.xcworkspace file.

  ---

  ##### Step 5:
  Finally edit your `AppDelegate` file:

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

  Congratulations! **Inapptics** is now integrated into your project target. Perform a session on your app, go to the background and you'll see the data on your [Dashboard][dashboardlink]{:target="_blank"} in less than a minute.
  {: .success }
---