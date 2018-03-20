---
title: Crashes & dSYMs
position: 2
parameters:
  - name: 
    content: 
content_markdown: |-
  **Inapptics SDK** captures all crashes that occur in the app. A crash report contains backtraces with memory addresses that are not human-readable.

  ---

  ##### Symbolication

  In order to convert **crash reports** into human-readable function names and line numbers, they need to be **symbolicated** first. In order to **symbolicate** a crash file, the matching **dSYM** file (generated during the build process of the binary) is required.

  ![Upload dSYM](images/upload-dsym-button.png)

  There are two main steps in symbolicating a crash report:
  1. Symbolicate system method calls (iOS Frameworks and Libraries)
  2. Symbolicate app mathod calls (Your code)

  We maintain a database of **dSYM** files for iOS Frameworks and Libraries and are able to **symbolicate** the backtraces of method calls by iOS.

  For symbolicating method calls in your code, **Inapptics SDK** will try to do this on the device without requiring a **dSYM** file, but depending on your project configuration, this may not be possible.

  In this case, we'll need the the specific **dSYM** file generated during the build process of your app.

  ---

  ##### Crash UUID

  Each crash has a **UUID**. It is an identifier generated for the crash based on app build type and device architecture. Crashes and dSYMs are associated with each other with the help of **UUIDs**.

  The same **dSYM** may contain symbols for multiple crashes with different **UUID**s. When looking for the missing **dSYM** for a crash to upload, you will need to find the **dSYM** that contains the symbols for the crash with the specific **UUID**. 
  
  When you click on the "Upload dSYM file" button, a popup will show up with the **UUID** of that particular crash, which you need to look for in dSYMs:

  ![Upload dSYM popup](images/upload-dsym-popup-uuid.png)

  When you open the popup from the **Crash List** page, there will be no UUID. That is because when uploading a **dSYM** from that page, we will automatically match it with the relevant crashes.
  Even when there is no matching crash found, we will store the **dSYM** and match it with future crashes.
  {: .info }
  
  ---

  ##### Finding local dSYM

  You can find a coresponding **dSYM** on the machine the app was built on. There are several ways for finding the matching **dSYM**:

  ###### **`mdfind` command**

  Assuming that you know the crash **UUID**, run the following command in terminal to find the matching **dSYM** and print its location:
  ``` bash
  mdfind "com_apple_xcode_dsym_uuids == YOUR_UUID"
  ```

  If the ```mdfind``` command fails to find the matching **dSYM**, you can look for the **dSYMs** manually. The location will be different for each project, depending on the build configuration. Possible locations are described below.
  {: .warning }

  ###### Products Folder

  When building an app in XCode, it compiles the code and saves the built app along with dSYMs in a designated directory. The directory location varies based on build configuration.

  Open your project in XCode, locate the **"Products"** folder in the Project Navigator on the left. Control-click on **"Products"** folder and select **Show in Finder**. This will open the folder where your app and its latest **dSYM** are located.

  ![Xcode Products](images/xcode-products.png)

  In order for the **dSYM** to be generated click on the project, go to **Build Settings** and make sure **"Debug Information Format"** is set to **"DWARF with dSYM"**.
  {: .warning }

  ###### xarchives

  If you are looking for the **dSYM** for a project archive, follow these steps:
  1. Open XCode's **"Organizer Window"** *(Window -> Organizer)*
  2. Select your app from the list of apps on the left
  3. Select the archive from the list of archives on the right
  4. Control-click on the selected archive and select **Show in Finder**
  ![Xcode Organizer](images/xcode-organizer.png)
  
  5. Control-click on the archive file in **Finder** and select **"Show Package Contents"**
  6. You should now see the folder called **"dSYMs"** that contains all the **dSYMs** for your app
  ![XCarchive dSYMs](images/xcarchive-dsyms.png)
  
  ##### Bitcode

  

  Inapptics will try to do this on the device, but depending on your app's project configurations this may not be possible. In that case, Inapptics will need special files related to the build version on which the crash occurred. Those are **dSYM**s.
  If there is a crash in your dashboard that is not **symbolicated**, you will see an "Upload **dSYM** file" button in its detail page.
---