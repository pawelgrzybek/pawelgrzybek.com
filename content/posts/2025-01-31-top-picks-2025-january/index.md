---
title: "Top picks — 2025 January"
summary: ""
---

---

## Album of the month

I had a period of my life when I dug deeply into the Swedish rap scene. The Looptroop Rockers are still one of my favourite bands ever. Around the same time, I discovered Red Astaire, also known as Freddie Kruger or by his real name, Fredrik Lager. I can't tell you how much I dig some of his mixes. I recently picked up cheaply in a local record store ["Nuggets For The Needy Volume 3"](https://www.discogs.com/release/18822862-Red-Astaire-Nuggets-For-The-Needy-Volume-3), and it has been spinning on my record player for weeks. I recently found out that Fredrik died in June 2022 following a heart attack. Rest in peace 😔

![Red Astaire, Nuggets For The Needy Volume 3](red-astaire.jpg)

---

## Top picks

### [Collection of insane and fun facts about SQLite](https://avi.im/blag/2024/sqlite-facts/)

Pretty cool list of little-known facts about SQLite. The number of contributors to the project and the ratio of the implementation to test code shocked me the most.

### [Use "translate" to turn off element translation](https://www.stefanjudis.com/today-i-learned/non-translatable-html-elements/)

Really great tip by Stefan, and also a great reminder that people use auto-translation on the web. It is hilarious but also pretty scary how badly auto-translated content can mess things up.

### [Reckoning: Frontend's Lost Decade | Alex Russell | performance.now() 2024](https://youtu.be/0XwWVjQOmyg)

Very good talk about the current state of the frontend industry. Alex elaborates on the undelivered promises of the Web platform, where we as an industry went wrong and what we can do about it. It contains a bunch of shocking stats, but the one that shocked me the most was the global growth of mobile as a platform and the disproportional stagnation of the web.

### [Creator of Ghostty talks Zig over Go](https://youtu.be/YQnz7L6x068)

Insightful interview with [Mitchell Hashimoto](https://mitchellh.com), the creator of the [Ghostty terminal emulator](https://ghostty.org/docs) that I included in [the top picks list last month](/top-picks-2024-december/). Plenty of great lessons about choosing the programming language for the task, the importance of joy, and some controversial rants about Rust. I also learned a ton about the internals of terminal applications.

### [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim)

Very good explanation of the new `text-box` CSS property (a shorthand for `text-box-trim`, `text-box-edge` and `line-fit-edge`) by Adam Argyle from the Google team. It mayb be known as a `leading-trim`, but [it has been renamed](https://github.com/w3c/csswg-drafts/issues/8067#issuecomment-1451111081). This is super duper useful. Looking forward to some signals from Firefox about the implementation intent.

### [CSS attr() gets an upgrade](https://developer.chrome.com/blog/advanced-attr)

Definitely not enough folks talk about this announcement. The CSS `attr()` is now gaining some extra powers. Previously we could use this function to read the content of the attribute via CSS and pass it down to the `content `property, but from now on, we can use it wherever we want. This is an incredibly powerful feature and it is going to simplify tons of stuff.

### [calc-size() and interpolate size](https://12daysofweb.dev/2024/calc-size-and-interpolate-size/)

As part of last year's 12 Days of Web, Kevin Powell published this great explainer of one of the most awaited CSS features ever. Animating to height `auto` is finally possible, and we have not one, but two methods of doing so. Kevin explains them in great detail.

### [Typescript --erasableSyntaxOnly configuration flag](https://github.com/microsoft/TypeScript/pull/61011)

Recently added type stripping feature to Node.js inspired the TypeScript team to add a new configuration flag that disallows features that are not erasable, like enums, namespaces, experimental decorators and class parameter properties. It is scheduled to be released with the upcoming version 5.8. Also, Matt Pocock recorded ["TypeScript shipped a flag to disable enums"](https://youtu.be/zeNh4fuJhcA) about it.

### [Who's Afraid of a Hard Page Load?](https://unplannedobsolescence.com/blog/hard-page-load/)

Great article about the advantages of good old hard page reload vs. fancy client-side routing by Alex Petros. The more I work on the web, the more I respect the primitives the browser comes with. This is the first time I have read a piece by Alex, but for me, this kind of content smells like an instant subscribe kind of blog!

### [It's time to ditch BlinkMacSystemFont and -apple-system](https://highperformancewebfonts.com/read/ditch-BlinkMacSystemFont-and-apple-system)

A great advice about clearing out some of the legacy CSS font declarations. I must admit that for years I have been copying the system font declaration from GitHub, but now I have a good understanding of it and a good reason not to do it anymore.
