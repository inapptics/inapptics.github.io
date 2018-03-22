---
title: Set App User Email
position: 3.11
description: Set app user's Email.
from_version: 1.7.0
parameters:
  - name: email
    content: App user’s email.
     
content_markdown: |-
  ##### Declaration

  ``` swift
  class func setUserEmail(_ email: String)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)setUserEmail:(NSString *_Nonnull)email;
  ```
  {: .code-group title="Objective-C" }

  This method updates the `Inapptics.user.email` property with the provided value.

  ##### Example

  ``` swift
  Inapptics.setUserEmail("EMAIL")
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  [Inapptics setUserEmail:@"EMAIL"];
  ```
  {: .code-group title="Objective-C" }
---