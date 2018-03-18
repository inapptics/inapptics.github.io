---
title: Crashes & dSYMs
position: 2
parameters:
  - name: 
    content: 
content_markdown: |-
  Inapptics SDK captures all crashes that happen in the app. Initially, a crash contains not so relevant hex numbers and file addresses.
  In order to convert those into readable functions and file names, the crash needs to be symbolicated.
  Inapptics will try to do this on device, but, depending on your app's project configurations, this might not be possible. In that case Inapptics will need special files related to the build version on which the crash occurred. Those are dSYMs.
  If there is a crash in your dashboard that is not symbolicated, you will see an "Upload dSYM file" button in its detail page.
---