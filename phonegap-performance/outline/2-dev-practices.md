# dev practices

<img src="img/i-have-no-idea-what-im-doing-dog.jpg">

---

# time to market

- revenue payload latency!
- reduce your problem surface area and thus maintainence and bug issues
- small teams rock: 2 devs and one interaction designer will kick ass every time
- focus and cadence always beat meetings and long release cycles

---

# user research and discovery

- find one problem; solve it in a prototype
- test w/ real ppl on real devices

---

# debug/testable

- black box abstractions are dangerous lockins
- test first not manditory but ability to run tests immediately is
- test every bug or I will kill you all
- have a test plan and publish it; you won't have all the devices

---

# bad requirements

- user feedback is the best requirements you can get. a bad strategy certainly begets bad architecture.
- daily standups between members and teams crucial but make sure you stand up
- issue tracker, backlog, and sprint roadmap (for bugs anyhow) should be PUBLIC

---

# proxy

- backends are kinda fucked up wastelands of XML bottlenecks
- create a restful JSON proxy to the data, even dummy data proxy
- cache agressively on the client (yay localStorage)
- have a first run experience that does not require the network

---

# ship daily

- release on a cadence; weekly seems good
- have builds available every day, ideally every commit
- marketing has nothing to do with releasing or shipping: don't let the non programmers tell you otherwise
- mentally prepare for App Store curation

---

# revenue is hard?

- $1 is not a business plan
- advertising not the only model. think: uber, cherry, etc
- open src is a competative advantage to your hosted service. think: wikipedia

---

# security 

- store nothing on the device
- do not trust 3rd party code
- do not be a dick (eg. save contacts and location and calendar events to your server)

---

# marketing

- another advantage of open src
- app store discovery is bad: use your competators in your description (but do not bash em)
- newsletters, meetups, mailing lists, twitter and other channels are awesome but stay on topic.

---

# metrics

- can slow your app down: sample
- use your current audience to guide your strategy not global marketshare projections of device sales
- a new metric: WTF/min (your job is to minimize this)

---

# optimize happiness

- step away from the computer
- effective teams are rested teams
- long hours do not beget good code
- get some exercise
- try a banana instead of choclate
- drink a big glass of water before reaching for coffee
- yoga is pretty wonderful
- so is having a beer with your friends

---

# seek balance instead of purity

## purity is an illusion wrought of a mind embattled by constant changing reality

---

# develop in the web browser

### test on real devices; emulation is currently kinda useless

---

# remember

## no code is faster than any amount of code

---
