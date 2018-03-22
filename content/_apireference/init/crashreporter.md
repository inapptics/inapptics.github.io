---
title: Crash Reporter
position: 1.02
description: Optionally initialize Inapptics using this method to be able to disable the **Crash Reporter**.
from_version: 1.5.4
parameters:
  - name: appToken
    content: Your app's unique token.
  - name: crashReportingEnabled
    content: Boolean for setting whether the **Crash Reporter** should be enabled/disabled.
content_markdown: |-
  [addnewapplink]: https://app.inapptics.com/?action=add-app
  [appslink]: https://google.com

  In case you don't have an `appToken` yet, add an app [here][addnewapplink]{:target="_blank"} or get the **App Token** of your existing app [here][appslink]{:target="_blank"}.
  {: .info }

  Please note that an **App Token** can be used with a single Bundle ID and make sure the same **App Token** isn't used in another app/target with a different Bundle ID.
  {: .error }

  ##### Declaration

  ``` swift
  class func letsGo(withAppToken appToken: String, crashReportingEnabled: Bool)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)letsGoWithAppToken:(NSString *_Nonnull)appToken crashReportingEnabled:(BOOL)crashReportingEnabled;
  ```
  {: .code-group title="Objective-C" }

  ``` java
  + (void)letsGoWithAppToken:(NSString *_Nonnull)appToken crashReportingEnabled:(BOOL)crashReportingEnabled;
  ```
  {: .code-group title="Java" }

  ``` kotlin
  + (void)letsGoWithAppToken:(NSString *_Nonnull)appToken crashReportingEnabled:(BOOL)crashReportingEnabled;
  ```
  {: .code-group title="Kotlin" }

  Initializes **Inapptics** with the option to enable/disable **Crash Reporter** and automatically captures all user interaction events in the app.

  Call this method as the **first line** in your `AppDelegate` instead of the previous method in order to control the **Crash Reporter**.

  We recommend keeping the **Inapptics Crash Reporter** enabled in order to be able to leverage features like **Crash replays**.
  {: .info }

  Some other crash reporters, like Crashlytics, work fine side by side with **Inapptics Crash Reporter** enabled.
  {: .success }
---