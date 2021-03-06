---
title: Track HTTP Requests
position: 5.01
description: Track HTTP requests with this method
from_version: 3.0
parameters:
  - name: someParam
    content: some param description
content_markdown: |-
  Please make sure to call this method only after the manually tracked screen has finished appearing.
  {: .error }

  ##### Declaration

  ``` swift
  class func addScreen(_ screenName: String)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)addScreen:(NSString * _Nonnull)screenName;
  ```
  {: .code-group title="Objective-C" }

  In most cases, manual screen tracking should not be necessary, since the **Inapptics SDK** is able to capture all screen transition events and automatically register all screen appearances.

  But, there are cases where it's not possible to automatically capture screen transitions because they are technically not screen transitions. These are in most cases just the result of adding/removing or hiding/showing views on the screen.

  Some examples are custom alert views that are being added as a `subview` instead of opening a `ViewController` or custom `TabBar` components, where switching between the `Tabs` is based on showing/hiding views. 

  This these cases this method needs to be called so that the **Inapptics SDK** can register the modified screen state as a new screen.

  Please make sure to also study the [Manually Track Close Screen](#iosapireferencescreenclose) section to avoid common issues caused by manual screen tracking.
  {: .warning }

  ##### Example

  ``` swift
  Inapptics.addScreen("MyCustomAlert")
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  [Inapptics addScreen:@"MyCustomAlert"];
  ```
  {: .code-group title="Objective-C" }
---