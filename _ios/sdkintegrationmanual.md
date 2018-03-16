---
title: SDK Integration (Manual)
position: 1
parameters:
  - name: 
    content: 
content_markdown: |-

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


  You'll need an App Token in order to proceed. In case you don't have one yet, add an app [here]({{site.addnewapplink}}) or get the App Token of your exisiting app [here]({{site.appslink}}).

  Welcome to our docs section.

  Integrating the Inapptics SDKs require just a single line of code.

  ---

  Select a platform to get started:

  * [iOS SDK Integration](#iossdkintegration)
  * Android

  In addition, you can also [integrate Inapptics with your Slack team](#3rdpartyslack) for essential notifications.

  This API document is designed for those interested in developing for our platform.

  This API is still under development and will evolve.

  You'll succeed if you do this.
  {: .success }

  Here's some useful information.
  {: .info }

  Something may not happen if you try and do this.
  {: .warning }

  Something bad will happen if you do this.
  {: .error }
---