---
title: Masking View
position: 2.01
description: Mark a view as sensitive.
from_version: 3.0
parameters:
  - name: view
    content: View which content shouldn't be recorded (for example **UILabel** or **TextView** with credit card number).
     
content_markdown: |-
  ##### Declaration

  ``` swift
  class func markView(asSensitive view: UIView)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  + (void)markViewAsSensitive:(UIView *_Nonnull)view;
  ```
  {: .code-group title="Objective-C" }

  ``` java
  + (void)markViewAsSensitive:(UIView *_Nonnull)view;
  ```
  {: .code-group title="Java" }

  ``` kotlin
  + (void)markViewAsSensitive:(UIView *_Nonnull)view;
  ```
  {: .code-group title="Kotlin" }

  This method is optional and can be used for marking views as sensitive.

  Optionally call this method in your code to not track a view's content.

  You can call this method any time during the session.
  {: .info }


  ##### Example

  ``` swift
  Inapptics.markView(asSensitive: cardNumberLabel)
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  [Inapptics markViewAsSensitive:cardNumberLabel];
  ```
  {: .code-group title="Objective-C" }

  ``` java
  [Inapptics markViewAsSensitive:cardNumberLabel];
  ```
  {: .code-group title="Java" }

  ``` kotlin
  [Inapptics markViewAsSensitive:cardNumberLabel];
  ```
  {: .code-group title="Kotlin" }
---