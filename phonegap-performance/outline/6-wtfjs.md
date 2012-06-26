# JS Business

- scripts block renderin b/c it haults parsing b/c the scripts *might* do document.write
- html5 async: download, and exec once you're avail (out of order issues)
- html5 defer: exec after a parse; in order
- html5 is missing: dl and exec last, dl last and exec on demand

---

# defer loading of javascript

    function downloadJSAtOnload() {
        var element = document.createElement("script");
        element.src = "deferredfunctions.js";
        document.body.appendChild(element);
    }

---

# script loader?

- http://controljs.org

---

# even closer to no code, lazy eval technique

- pioneered / discoverd at google (they cray)
- embed your code inline but comment out the code
- if you need a block grab the innerHTML, remove the comment, eval
- downloads immediately but does not block, available async

---

# defer execution of js

    // do this later, and by later I mean right now
    function defer(fn) { 
        setTimeout(fn, 0) 
    }

---

# fast touch

- click events are delayed 300ms, no kiddin
- millions of fixes for this: https://github.com/bebraw/jswiki/wiki/Touch

---

# eval not actually slow; still dangerous

- according to souders 3-10%
- nor evil. just dont' eval shit you don't own

---
