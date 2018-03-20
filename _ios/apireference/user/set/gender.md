---
title: Set App User Gender
position: 3.23
description: Set app user's gender.
from_version: 1.7.0
parameters:
  - name: id
    content: A custom identifier for your app user. E.g. the app user’s ID in your own user database.
     
content_markdown: |-
  ##### Declaration

  ``` swift
  class func setUserId(_ identity: String)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)setUserId:(NSString *_Nonnull)id;
  ```
  {: .code-group title="Objective-C" }

  This method updates the `Inapptics.user.id` property with the provided value.

  ##### Example

  ``` swift
  Inapptics.setUserId("CUSTOM_ID")
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  [Inapptics setUserId:@"CUSTOM_ID"];
  ```
  {: .code-group title="Objective-C" }
---