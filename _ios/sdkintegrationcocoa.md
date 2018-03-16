---
title: SDK Integration (CocoaPods)
position: 1
parameters:
  - name: 
    content: 
content_markdown: |-
  [addnewapplink]: https://app.inapptics.com/?action=add-app
  [appslink]: https://google.com
  [dashboardlink]: https://google.com

  You'll need an App Token in order to proceed. In case you don't have one yet, add an app [here][addnewapplink]{:target="_blank"} or get the App Token of your exisiting app [here][appslink]{:target="_blank"}.
  {: .info }

  We support apps running on iOS 8.0 and later.
  {: .warning }

  Please note that an App Token can be used with a single Bundle ID and make sure the same App token isn't used in another app/target with a different Bundle ID.
  {: .error }
  
  ---

  #### Step 1:
  Create a `Podfile` in your project's root directory, if you don't have one yet.
  
  ---
  
  #### Step 2:
  Add the `Inapptics` pod to the target in your `Podfile`:
  ``` bash
  target 'YOUR TARGET'
    ...
    pod 'Inapptics'
  end
  ```
  
  ---
  
  #### Step 3:
  Run this in terminal:
  ``` bash
  pod repo update && pod install
  ```

  `repo update` ensures that you install the latest version of Inapptics SDK.
  {: .info }

    ---

  #### Step 4:

  Open your project using the generated *.xcworkspace file.

  ---

  #### Step 5:
  Finally edit your `AppDelegate` file:

  1. Import the `Inapptics` module
  2. Initialize `Inapptics` in the `-application:didFinishLaunchingWithOptions:` method:

  ``` swift
  import Inapptics

  ...

  func application(application: UIApplication, didFinishLaunchingWithOptions
                  launchOptions: [NSObject: AnyObject]?) -> Bool
  {
      // Override point for customization after application launch.

      ...

      Inapptics.letsGo(withAppToken: "YOUR_APP_TOKEN")
      return true
  }
  ```
  {: .code-group-start platform="ios" title="Swift" }

  ``` objective_c
  @import Inapptics;

  ...

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
---