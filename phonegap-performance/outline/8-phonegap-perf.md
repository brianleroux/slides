# web as a first class platform

## ability to work outside the sandbox, access low level device apis

---

# cease to exist

## reference implementation for browsers of the future

---

# when to use phonegap/apache cordova?

1. sane offline experience
2. require access to device apis not available in the vanilla browser
3. you want to participate in app store curation, discovery, and revenue

---

# how does phonegap/apache cordova work?

- everything lives on the device; we instantiate a chromeless browser and load your assets
- foreign function interface is initiated to bridge native calls to js anv vice versa
- js code (cordova.exec) and native code
- so whats the cost?

---

# cordova.exec is the magic src

    // method sig the same on all platforms
    cordova.exec = exec(win, fail, nativeNamespace, nativeMethod, argsArray) {
        // implemented differently on each platform
    }

---

# iOS JS to Native Bridge

    gapBridge = document.createElement("iframe");
    gapBridge.setAttribute("style", "display:none;");
    gapBridge.setAttribute("height","0px");
    gapBridge.setAttribute("width","0px");
    gapBridge.setAttribute("frameborder","0");
    document.documentElement.appendChild(gapBridge);

---

## yes, an iframe!?

# works everywhere and doesn't cause DOM jankyness

---

# iOS Native to JS Bridge

    // Execute any commands queued with cordova.exec() on the JS side.
    if ([[url scheme] isEqualToString:@"gap"]) {
        [self flushCommandQueue];
        return NO;
    }

---

# brute force

    //  Repeatedly fetches and executes the command queue until it is empty.
    - (void) flushCommandQueue
    {
        [self.webView stringByEvaluatingJavaScriptFromString:
         @"cordova.commandQueueFlushing = true"];

        // Keep executing the command queue until no commands get executed.
        // This ensures that commands that are queued while executing other
        // commands are executed as well.
        int numExecutedCommands = 0;
        do {
            numExecutedCommands = [self executeQueuedCommands];
        } while (numExecutedCommands != 0);

        [self.webView stringByEvaluatingJavaScriptFromString:
         @"cordova.commandQueueFlushing = false"];
    }

https://github.com/apache/incubator-cordova-ios/blob/master/CordovaLib/Classes/CDVViewController.m#L497

---

# interlude: debate is retarded

- web is native
- web browsers are written in C
- so is most of your operating system

---

# Futures: benchmarking init time

---

# Futures: benchmarking FileReader

---

# thx eh

---
