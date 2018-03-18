---
title: Identify App User
position: 3.6
description: Set user identity details.
from_version: 1.7.0
parameters:
  - name: id
    content: A custom identifier of your user. E.g. the user’s ID in your own user database.
  - name: email
    content: App user’s email.
  - name: name
    content: App user’s full name.
     
content_markdown: |-
  ##### Declaration

  ``` swift
  class func user() -> IAXUserIdentity
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (IAXUserIdentity * _Nonnull)user;
  ```
  {: .code-group title="Objective-C" }

  By default, app users are identified using `identifierForVendor` **UUIDString**.
  
  Optionally you can attach more information about the user in order to make it easier to identify and find back a user.

  These are the standard user properties:

  | Property | Type | Description |
  | --- | --- | --- |
  | `id` | NSString | A custom identifier of your user. E.g. the user's ID in your own user database. |
  | `email` | NSString | App user's email. |
  | `name` | NSString | App user's full name. |
  | `properties` | NSDictionary | A dictionary with custom key/value properties for the app user. |

  ##### Example

  ``` swift
  print(Inapptics.user().id)
  print(Inapptics.user().email)
  print(Inapptics.user().name)
  print(Inapptics.user().properties["YOUR_CUSTOM_KEY"]!)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  NSLog(@"%@", Inapptics.user.id);
  NSLog(@"%@", Inapptics.user.email);
  NSLog(@"%@", Inapptics.user.name);
  NSLog(@"%@", Inapptics.user.properties[@"YOUR_CUSTOM_KEY"]);
  ```
  {: .code-group title="Objective-C" }
---