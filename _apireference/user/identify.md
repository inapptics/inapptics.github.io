---
title: Identify App User
position: 3.02
description: This method identifies your user by allowing you to set your custom user ID, email and name for the user.
from_version: 1.7.0
parameters:
  - name: id
    content: A custom identifier for your app user, e.g. the app user’s ID in your own user database
  - name: email
    content: App user’s email
  - name: name
    content: App user’s full name
     
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

  ``` java
  + (void)identifyUserWithId:(NSString *)id email:(NSString *)email name:(NSString *)name;
  ```
  {: .code-group title="Java" }

  ``` kotlin
  + (void)identifyUserWithId:(NSString *)id email:(NSString *)email name:(NSString *)name;
  ```
  {: .code-group title="Kotlin" }

  This method can be called anytime **after initializing Inapptics**. If you set this multiple times during a session, the last set values will be used.

  All subsequent sessions will automatically inherit the last set **identity**, unless [`unsetUserIdentity`](#apireferenceuserunsetidentity) is explicitly called.
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

  ``` java
  [Inapptics identifyUserWithId:@"CUSTOM_ID" email:@"EMAIL" name:@"NAME"];
  ```
  {: .code-group title="Java" }

  ``` kotlin
  [Inapptics identifyUserWithId:@"CUSTOM_ID" email:@"EMAIL" name:@"NAME"];
  ```
  {: .code-group title="Kotlin" }
---