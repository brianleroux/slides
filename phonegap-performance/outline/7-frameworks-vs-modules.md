# Frameworks

<img src=img/oh-boy.png />

---

# gui frameworks

- jquerymobile
- sencha
- twitter bootstrap

---

# microframeworks!

## Hold on the hate: we'll call them modules in 2 years time and you'll love em.

---

# micro dom frameworks 

- xuijs
- zepto

---

# mvc business

- backbone + underscore (requires a dom framework)
- emberjs

---

<blockquote>75kb jquery + 15 kb jam required js libs to get off the ground. Need I go on? Performance is a nightmare. Ui parity is not hard. Spend a few hours and get a 300-400 line ui lib written yourself and you will do way better. - Fil Maj, Apache Cordova JS Lead at Adobe</blockquote>

---

<blockquote>I have had zero issues with jQM. + using jQM offers the best chance of UI reuse across platforms. My advice is to use jQM, if you are going to use a UI framework. - Jesse MacFadyen, Apache Cordova Windows Phone Lead at Adobe</blockquote>

---

<blockquote>We need to stop building things for developer convenience and instead build them for user experience. We can create rich experiences that solve these problems. Limitations can fuel creativity. Don’t get tied to particular solutions, revisit things that we previously dismissed. South Street is an umbrella project form the Filament Group that addressed problems around qualified application of features & improving delivery mechanisms. - http://www.lukew.com/ff/entry.asp?1565</blockquote>

---

<blockquote>And my advice is to not complain about performance if you use a general purpose UI Framework. The main performance problem is in interaction delays (which is perceived performance. The same as how 150ms is snappy and 300ms is slow). - Mike Brooks, Apache Cordova Docs Lead at Adobe</blockquote>

---

# Not So Simple!

<img src=img/aint-mad.jpg />

---

# this is not a benchmark 

- avoiding synthetic benchmarks
- remember user perception is best measured with real live ppl
- startup performance is an interesting indicator but hardly an absolute

---

# hello world, eh

     framework                        |  html  |    css   |     js   |  payload
    +--------------------------------+--------+----------+----------+----------+
     jquery .......................... 0.52 KB    0.00 KB   92.91 KB   93.43 KB     
     jquery-mobile ................... 0.79 KB   59.57 KB  182.01 KB  242.37 KB
     ember ........................... 1.69 KB    5.16 KB  247.54 KB  254.39 KB
     twitter bootstrap ............... 2.23 KB   91.99 KB  115.01 KB  209.23 KB
     sencha .......................... 0.14 KB  198.73 KB  357.90 KB  556.77 KB
     zepto + underscore + backbone ... 0.60 KB    0.00 KB   52.92 KB   52.92 KB

---

# avg network latency 

    Edge .... 64 kb/s
    3G ...... 384 kb/s
    HSDPA ... 7.2 mb/s

---

# WARNING: bad science ahead

...ignoring parallel downloading and caching

     framework                          edge      3G   
    +---------------------------------+-------+--------+
     jquery ..........................  1.4 s   0.24 s   
     jquery-mobile ...................  3.7 s   0.63 s
     ember ...........................  3.9 s   0.66 s
     twitter bootstrap ...............  3.2 s   0.54 s
     sencha ..........................  8.6 s   1.45 s
     zepto + underscore + backbone ...  0.8 s   0.13 s

---

# sencha app build production

- resolves dependencies and  only including exactly what is used for optimal file size / performance
- appcache douchebagger removed
- minify js and css
- js and css stored inside localStorage on first load, and patches them via delta updates between releases

---

# conclusions

1. sencha while heaviest has the most mature tooling; really thinks through perf practices (has to...)
2. zepto + underscore + backbone trinity easily the smallest; but does nothing for your UI
3. jQuery dependant frameworks somewhere in-between

---

# the setup

- platforms I am interested in: ios, android, blackberry, windows phone 
- browser insances I am interested in: stock browser, opera, firefox, chrome
- lets treat hybrid environments like phonegap seperatly 

---

# basically the two best appcach protips ever 

- jake archibald is hilarious and accurate in his hate on appcache
- lyza danger gardner saved my sanity with chrome://appcache-internals/

---
