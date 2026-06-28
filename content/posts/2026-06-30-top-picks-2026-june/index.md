---
title: "Top picks — 2026 June"
summary: ""
draft: true
---

---

## Album of the month

![]()

---

## Top picks

### ["Browsers Treat Big Sites Differently" by Den Odell](https://denodell.com/blog/browsers-treat-big-sites-differently)

Browsers ship with a long list of quirks, just to make sure a rendering is consistent with the dominant player, Google Chrome. Due to the significant market share dominance, Google's browser doesn't have a quirk mode. This is pretty shocking, and I would encourage you to look into the list of quirks. In some situations, Safari and Firefox literally modify the browser agent. A really nice deep dive by Den.

### ["Overview of Digital Accessibility Technologies" by Declan Vale Chidlow](https://vale.rocks/posts/digital-accessibility-technologies)

Declan is one of my favourite bloggers in recent years. The subjects that he picks are just so close to my heart. No matter if this is about the open web, accessibility or Neovim, I love his writing. This one is no different and it is a good reminder that when we talk about assistive technologies, it is not only about the screen reader. The list of input and output devices in this list is a real eye-opener, and it is non-exhaustive.

### ["On the \<dl\>" by Ben Myers](https://benmyers.dev/blog/on-the-dl/)

I love Ben and his never-ending advocacy to just use the web. This one is another great post by him that gives you six million reasons why you should consider the HTML `<dl>` element in your markup. I’m sure plenty of unordered lists (or divs if you’re a horrible person) can be replaced with details lists. Great semantics improvement and a good win for accessibility.

### ["In-N-Out Animations: Dialogs (Part 1/3)" by Chris Coyier](https://frontendmasters.com/blog/in-n-out-animations-dialogs-part-1-3/)

I recently spent hours trying to understand the order of transitions and animations of the top level HTML elements like `dialog`s and `popover`s. Shit is complicated! Only when I managed to make it work, Chris published that article that  made me actually understand these things. Chris builds this mental model of three distinct states and puts them in the timeline. This is the top explainer of the in and out animations of `dialog`s folks.

### [VoidZero is Joining Cloudflare](https://voidzero.dev/posts/voidzero-cloudflare)

VoidZero, a company founded by the creator of the Vue framework, now holds the most powerful suite of tools in the JavaScript ecosystem: Vite, Vitest, Rolldown, and the Ox set of tools (linter, formatter, parser and so on). Now it becomes part of CloudFlare, a company that I’m a huge fan of, but at the same time I’m a little scared that they own all the tools I like. Not long ago, they also acquired Astro. I really hope that CF won’t become a bad player and that they will fulfil the promise of continuous openness and development under the current licence for all these apps.

### ["Reading your own writes with WAIT FOR LSN in Postgres 19" by Redowan Delowar](https://rednafi.com/system/wait-for-lsn/)

There is a cool feature coming to Postgres 19. Read-after-write removes the need for the age-old hack of querying the data after writing it with a delay in between to accommodate replica delays. Redowan explains it really well.

### [".gitignore Isn’t the Only Way To Ignore Files in Git" by Nelson Figueroa](https://nelson.cloud/.gitignore-isnt-the-only-way-to-ignore-files-in-git/)

What a hot tip. I had no idea I can make a global `.config/git/ignore` file to never again deal with the annoying macOS `.DS_Store` files. Short one, good one.

### [no slop grenade.](https://noslopgrenade.com/)

Ain't that golden? Literally a whole website with a cool domain (I love short, single-purpose, even silly domains) dedicated to all I have been moaning about for the past years since the AI-generated slop explosion happened. Love it, read it, apply it and keep the human conversation going.

### ["The Siren Song of ariaNotify()" by Mat Marquis ](https://css-tricks.com/the-siren-song-of-arianotify/)

Good explainer of the new `ariaNotify()` and the overall state of assistive technology announcements of live regions. Mat Marquis presented a few practical examples, two ways of triggering new notifications and left us with a fair warning not to abuse this API.

### [The Field Guide to Grid Lanes](https://gridlanes.webkit.org/)

Here is a helpful little cheat sheet about new `grid lanes` display layouts (aka masonry) created by the WebKit team. Not only does it explain and present cool demos of the new feature, but it also explains in a really nice way other core aspects of layout sizing methods. For years I struggled to wrap my head around the `min-content` and `max-content` keywords, but this little guide nailed the definitions. I like little single-purpose pages like this one.

### ["Publishing on the Atmosphere with Standard.site" by Declan Chidlow](https://piccalil.li/blog/publishing-on-the-atmosphere-with-standardsite/)

Standard.site came out of nowhere some time ago, and a bunch of bloggers integrate their blogs with the new lexicons on the ATProto (Authenticated Transfer Protocol is the tech behind BlueSky). I read a few of the guides, and as much as the implementation makes sense to me, the part I was missing is the basic understanding of the ATProto concepts needed for the integration. This article by Declan "Vale" Chidlow is just perfect. It goes into the very basics of the concepts and presents just the essential parts needed for the integration. What a good blogger he is!
