---
title: Identify App User
position: 3.11
description: Set app user identity details.
from_version: 1.7.0
parameters:
  - name: id
    content: A custom identifier for your app user. E.g. the app user’s ID in your own user database.
  - name: email
    content: App user’s email.
  - name: name
    content: App user’s full name.
     
content_markdown: |-
  ##### Declaration

  ``` swift
  class func identifyUser(withId identity: String, email: String, name: String)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)identifyUserWithId:(NSString *)id email:(NSString *)email name:(NSString *)name;
  ```
  {: .code-group title="Objective-C" }

  By default, app users are identified using `identifierForVendor` **UUIDString**.
  
  Optionally you can attach more information about the user in order to make it easier to identify and find back a user.

  This method updates the `Inapptics.user` object with the provided parameters.

  You can call this method any time during the session. When app user parameters are set more than once during a session, the latest set values will be used for identifying the app user.
  {: .info }

  A user session can be associated with only one app user.
  {: .warning }
  

  ##### Example

  ``` swift
  Inapptics.identifyUser(withId: "CUSTOM_ID", email: "EMAIL", name: "NAME")
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  [Inapptics identifyUserWithId:@"CUSTOM_ID" email:@"EMAIL" name:@"NAME"];
  ```
  {: .code-group title="Objective-C" }
---