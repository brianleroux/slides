# CSS Business

- always put in the head to avoid getting FOUC
- media queries will save us all! 
- deeply nested selectors are slow dawg
- descriptive selectors not a big problem over gzip (ht <a href=http://twitter.com/scottjehl>@scottjehl</a>)
- more code, more latency duh

---

# looks kill

- don't use opacity on things that don't need it
- gradients and drop shadows choke the shit out of android
- avoid using high-resolution background images if you need good scrolling

---

# Be Responsible and Responsive

- adaptive layouts will scale to new devices and old
- serving content inappropriate for a device can be detrimetnal to performance

---

# hardware accel not ubqitous 
 
- Currently, only -webkit-transform and opacity offer hardware acceleration on iOS devices.
- -webkit-backface-visibility can help w/ flickers but slows things down
- -webkit-perspective slows things
- -webkit-transform-style: preserve-3d; will slow things
- canvas and svg accelerated on BB and Windows Phone...

---

# spriting all the images

- http://glue.readthedocs.org/en/latest/index.html#glue
- data uris can peform poorly too
- responsive images are new business but responseive polyfilling ninja @scottjehl has the answer here too

--- 

# your probably knew this but...

- change classes not styles; save on reflow cost (e.g. do not set style attribute directly)

---

# send only the css you need to send

- https://github.com/filamentgroup/eCSSential
- https://github.com/brianleroux/css-slap-chop

---
