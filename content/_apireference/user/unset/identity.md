---
title: Un-set App User Identity
position: 3.03
description: Unsets all previously set user identity parameters.
from_version: 1.7.0
content_markdown: |-
  ##### Declaration

  ``` swift  
  class func unsetUserIdentity()
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)unsetUserIdentity;
  ```
  {: .code-group title="Objective-C" }

  ``` java
  + (void)unsetUserIdentity;
  ```
  {: .code-group title="Java" }

  ``` kotlin
  + (void)unsetUserIdentity;
  ```
  {: .code-group title="Kotlin" }

  This method can be used e.g. after a logout action, in order to avoid logged out users being tied to subsequent sessions.

  Current session will still have the previously set identity, but subsequent sessions will not have an identity to inherit.
  {: .info }
  

  ##### Example

  ``` swift
  Inapptics.unsetUserIdentity()
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  [Inapptics unsetUserIdentity];
  ```
  {: .code-group title="Objective-C" }

  ``` java
  [Inapptics unsetUserIdentity];
  ```
  {: .code-group title="Java" }

  ``` kotlin
  [Inapptics unsetUserIdentity];
  ```
  {: .code-group title="Kotlin" }
---