---
title: Inapptics User Object
position: 3.01
description: Returns an `IAXUserIdentity` instance with currently set user properties.
from_version: 1.7.0
parameters:
  - name: 
    content: 
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

  ``` java
  + (IAXUserIdentity * _Nonnull)user;
  ```
  {: .code-group title="Java" }

  ``` kotlin
  + (IAXUserIdentity * _Nonnull)user;
  ```
  {: .code-group title="Kotlin" }

  These are the standard user properties:

  | Property | Type | Description |
  | --- | --- | --- |
  | `id` | string | A custom identifier for your user. E.g. the user's ID in your own user database. |
  | `email` | string | App user's email. |
  | `name` | string | App user's full name. |
  | `properties` | dictionary | A dictionary with custom key/value properties for the app user. |

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

  ``` java
  NSLog(@"%@", Inapptics.user.id);
  NSLog(@"%@", Inapptics.user.email);
  NSLog(@"%@", Inapptics.user.name);
  NSLog(@"%@", Inapptics.user.properties[@"YOUR_CUSTOM_KEY"]);
  ```
  {: .code-group title="Java" }

  ``` kotlin
  NSLog(@"%@", Inapptics.user.id);
  NSLog(@"%@", Inapptics.user.email);
  NSLog(@"%@", Inapptics.user.name);
  NSLog(@"%@", Inapptics.user.properties[@"YOUR_CUSTOM_KEY"]);
  ```
  {: .code-group title="Kotlin" }
---