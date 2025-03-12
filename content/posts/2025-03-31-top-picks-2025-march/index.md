---
title: "Top picks — 2025 March"
summary: ""
---

...

---

## Album of the month

...

![Looptroop – The Struggle Continues](looptroop-rockers.jpg)

---

## Top picks

### [A Million Little Secrets](https://www.joshwcomeau.com/blog/whimsical-animations/)

Josh Cameau is about to release a new course, "Whimsical Animation," and [its website](https://whimsy.joshwcomeau.com/) is a stunning piece of art full of little interactive elements and Easter eggs. In this article, he shared an overview of a few techniques he used to build this website. I learned a ton and also explored a big bunch of useful resources for my future pet projects. The attention to detail that this guy puts into his projects is just unbelievable. Who would have thought that image sprites are still a valid technique to build websites in 2025?

### [TypeScript types can run DOOM](https://youtu.be/0mCsluv5FXA)

This is one of the wildest things I have seen in a while. Using nothing but the TypeScript type system, this genius rebuilt a fully functional and interactive DOOM game. The engineering effort put into this project is insane. The scale of the resulting types in comparison to an ordinary web application, Node.js type definitions really helps to convey the effort that went into it. Absolutely impressive!

### [React Libraries for 2025](https://www.robinwieruch.de/react-libraries/)

Robin Wieruch published a number of great React-related resources in the past, and this one is just another one to add on the pile. A comprehensive list of React solutions related to state management, styling, data management, authentication, payments, component libraries, and others. Very up to date and all in a single place.

### [Don’t Use Fake Bold or Italic in Social Media](https://adrianroselli.com/2025/03/dont-use-fake-bold-or-italic-in-social-media.html)

Adrian with another great accessibility tip. This one is about abusing some UTF characters and using them in place to fact bold or italic styling, and what the impact for screen reader users is. The consequences can be huge! Rule of thumb, plain good old text always wins.

### [How browsers REALLY load Web pages](https://fosdem.org/2025/schedule/event/fosdem-2025-4852-how-browsers-really-load-web-pages/)

A deep dive into the browsers' resources prioritisation strategies by Robin Marx from Akamai Technologies. Very interesting how much browsers differ in terms of loading assets heuristics. Very technical exploration but presented in an engaging way by Robin.

### [Introducing command and commandfor](https://developer.chrome.com/blog/command-and-commandfor)

Simple actions on the web, like opening a navigation when user clicks on the button, can be a tedious task to implement if it needs to respect all scenarios and does not harm accessibility. Some HTML elements come with native behaviours like `popoverTargetAction` and `popoverTarget` to simplify that, which does not require a single line of JS. These two `popover` attributes do not go anywhere, but now we are getting a lot more powerful solution that can fully replace them, but also work with plenty of other interactive elements. The `command` and `commandFor` can trigger an action on target elements like `popover`, `dialog`, and potentially soon on `input` and `detail` elements. This is one of the greatest additions to the web platform in a while, in my opinion.

### [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)

Rarely do dev news articles give me as much joy as this one. The TypeScript compiler is being ported to native code written in Go, and the early results report up to a 10 times faster compilation and type checking results. Other than the port of a codebase, something that does not get enough credit is the effort that goes into the proper TypeScript LSP build. Even though TS is well known for its integration with IDEs via ts-server, its implementation predated LSP. It is going to change, so users of LSP will get a much nicer user experience.

In addition to the blog post, the Microsoft team also published ["A 10x faster TypeScript" on YouTube](https://youtu.be/pNlq-EVld70) where Anders Hejlsberg elaborates more and presents the results of the project "Corsa". Additionally, the SyntaxFM crew recorded ["Typescript Just Got 10x Faster"](https://youtu.be/ZlGza4oIleY) that reveals a bit more technical details.
