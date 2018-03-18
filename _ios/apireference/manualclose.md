---
title: Manually Track Close Screen
position: 3.4
description: Set a manually tracked screen as closed and register the previous screen a new screen appearance.
from_version: 1.6.3
parameters:
  - name: 
    content: 
content_markdown: |-
  Please make sure to call this method only after the manually closed screen has finished disappearing.
  {: .error }

  ##### Declaration

  ``` swift
  class func closeScreen()
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)closeScreen;
  ```
  {: .code-group title="Objective-C" }

  When using manual screen capturing feature, in most cases it is recommended to also let the SDK know when a manually tracked screen has been closed.

  Closing a screen helps the **Ianpptics SDK** register the re-appearance of the previous screen.

  ##### Example

  ``` swift
  Inapptics.addScreen("MyCustomAlert")
  ...
  Inapptics.closeScreen()
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  [Inapptics addScreen:@"MyCustomAlert"];
  ...
  [Inapptics closeScreen];
  ```
  {: .code-group title="Objective-C" }
---