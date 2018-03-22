---
title: This is the page title
menu_title: Optional menu title
icon: fas fa-cogs
position: 1
from_version: 1.2.2
description: This document gives a quick overview of the template functionality
parameters:
  - name: parameter_name
    content: This is parameter description
  - name: parameter_name_2
    content: This is parameter 2 description

content_markdown: |-
  This is a regular paragraph without anything fancy.

  **This is a bold text.** Wrap text in \*\* (double asterisk) on both ends to make it bold.
  
  *This is an italic text.* Wrap text in \* (single asterisk) on both ends to make it italic.

  ---

  Add a horizontal line like the one above and below with just \-\-\- on a new line.

  ---

  You'll succeed if you do this.
  {: .success }

  Here's some useful information.
  {: .info }

  Something may not happen if you try and do this.
  {: .warning }

  Something bad will happen if you do this.
  {: .error }

  ---

  | Code | Name | Description |
  | --- | --- | --- |
  | 200 | OK | Success |
  | 201 | Created | Creation Successful |
  | 400 | Bad Request | We could not process that action |
  | 403 | Forbidden | We couldn't authenticate you |

  ---

  Special tabbed code viewer.

  If you want to group different code pieces, make sure:
  1. There is nothing between them
  2. Ths first block has the class `.code-group-start`, apart from `title`
  3. Subsequent blocks must have the class `code-group` and `title`

  ``` swift
  import Inapptics


  func application(application: UIApplication, didFinishLaunchingWithOptions
                  launchOptions: [NSObject: AnyObject]?) -> Bool
  {
      // Override point for customization after application launch.

      ...

      Inapptics.letsGo(withAppToken: "YOUR_APP_TOKEN")
      return true
  }
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  @import Inapptics;


  - (BOOL)application:(UIApplication *)application
          didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
  {
      // Override point for customization after application launch.

      ...

      [Inapptics letsGoWithAppToken:@"YOUR_APP_TOKEN"];
      return YES;
  }
  ```
  {: .code-group title="Objective-C" }

  ``` java
  /**
  * @author John Smith <john.smith@example.com>
  */
  package l2f.gameserver.model;

  public abstract class L2Char extends L2Object {
    public static final Short ERROR = 0x0001;

    public void moveTo(int x, int y, int z) {
      _ai = null;
      log("Should not be called");
      if (1 > 5) { // wtf!?
        return;
      }
    }
  }
  ```
  {: .code-group title="JAVA" }

  ---

    ``` swift
  import Inapptics


  func application(application: UIApplication, didFinishLaunchingWithOptions
                  launchOptions: [NSObject: AnyObject]?) -> Bool
  {
      // Override point for customization after application launch.

      ...

      Inapptics.letsGo(withAppToken: "YOUR_APP_TOKEN")
      return true
  }
  ```
  {: .code-group-start title="Swift" }

  ``` objective_c
  @import Inapptics;


  - (BOOL)application:(UIApplication *)application
          didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
  {
      // Override point for customization after application launch.

      ...

      [Inapptics letsGoWithAppToken:@"YOUR_APP_TOKEN"];
      return YES;
  }
  ```
  {: .code-group title="Objective-C" }

  ``` java
  /**
  * @author John Smith <john.smith@example.com>
  */
  package l2f.gameserver.model;

  public abstract class L2Char extends L2Object {
    public static final Short ERROR = 0x0001;

    public void moveTo(int x, int y, int z) {
      _ai = null;
      log("Should not be called");
      if (1 > 5) { // wtf!?
        return;
      }
    }
  }
  ```
  {: .code-group title="JAVA" }


  ---
---