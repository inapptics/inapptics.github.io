---
title: Set App User Name
position: 3.22
description: Set app user's name.
from_version: 1.7.0
parameters:
  - name: name
    content: App user’s full name.
     
content_markdown: |-
  ##### Declaration

  ``` swift
  class func setUserName(_ name: String)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)setUserName:(NSString *_Nonnull)name;
  ```
  {: .code-group title="Objective-C" }

  This method updates the `Inapptics.user.name` property with the provided value.

  ##### Example

  ``` swift
  Inapptics.setUserName("NAME")
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  [Inapptics setUserName:@"NAME"];
  ```
  {: .code-group title="Objective-C" }
---