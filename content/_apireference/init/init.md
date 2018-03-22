---
title: Initializing the SDK with default settings
menu_title: Initializing Inapptics
position: 1.01
description: Initialize **Inapptics SDK** with default functionality.
from_version: 1.3.5
parameters:
  - name: appToken
    content: Your app's unique token.
content_markdown: |-
  [addnewapplink]: https://app.inapptics.com/?action=add-app
  [appslink]: https://google.com

  In case you don't have an `appToken` yet, add an app [here][addnewapplink]{:target="_blank"} or get the **App Token** of your existing app [here][appslink]{:target="_blank"}.
  {: .info }

  Please note that an **App Token** can be used with a single Bundle ID and make sure the same **App Token** isn't used in another app/target with a different Bundle ID.
  {: .error }

  ##### Declaration

  ``` swift
  class func letsGo(withAppToken appToken: String)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)letsGoWithAppToken:(NSString *_Nonnull)appToken;
  ```
  {: .code-group title="Objective-C" }

  ``` java
  + (void)letsGoWithAppToken:(NSString *_Nonnull)appToken;
  ```
  {: .code-group title="Java" }

  ``` kotlin
  + (void)letsGoWithAppToken:(NSString *_Nonnull)appToken;
  ```
  {: .code-group title="Kotlin" }

  Initializes **Inapptics SDK** with **Crash Reporter** enabled and automatically captures all user interaction events in the app.

  Call this method as the **first line** in `-application:didFinishLaunchingWithOptions:` method of your `AppDelegate` file.

  Apart from the `import` statement, this is the only required line of code for using **Inapptics**.
  {: .success }
---