---
title: "Top picks — 2024 August"
summary: "CSS grid areas, module script integrity, lessons from running a tech meetup, syntax highlighting, PostgreSQL discussion, JavaScript decorators and more."
---

I really enjoy my morning routine of catching up with the industry news while sipping a fresh coffee. It was particularly enjoyable this month because the web community published so many great resources. A bit of everything! From CSS magic to JavaScript security, database discussion, a nice write-up about changing code editors, some good talks, and a lot more. But before that, [a quick music recommendation](#album-of-the-month) of an album I enjoyed the most this past month 🎶

---

## Album of the month

I'm going to continue my streak of recommending you some great West Coast rap. A couple of weeks after I attended a great Pharcyde gig, I went to see Souls of Mischief live for the first time in my life. No surprise that I listened to their ["93 'til Infinity" album](https://www.discogs.com/release/5651162-Souls-Of-Mischief-93-Til-Infinity-20th-Anniversary-Edition) a lot last month. Tons of great instrumental beats, a bunch of top jazz and funky samples, and of course top lyrics sung by great voices (especially by Tajai). This is how we chill from '93 'til, this is how we chill…

![Souls of Mischief - 93 Til Infinity, album cover](souls-of-mischief-album.jpg)

![Crowd dancing in front of a stage at the Souls Of mischief concert](souls-of-mischief-gig.jpg)

---

## Top picks

### [CSS Grid Areas](https://ishadeed.com/article/css-grid-area/)

This post is another great one in the series of interactive CSS guides by Ahmad Shadeed. This time, it is about CSS grid areas, which I have rarely used. Using explicit line numbers has always been my preference, but this article may change it, especially after I finally understood how implicitly created grid areas work.
### [Shipping support for module script integrity in Chrome & Safari](https://shopify.engineering/shipping-support-for-module-script-integrity-in-chrome-safari)

A month ago, I didn’t know about the `integrity` attribute. Thanks to ["Script Integrity" by Chris Coyier](https://frontendmasters.com/blog/script-integrity/), I learned the basics. The Shopify team shared great news about adding script integrity to ECMAScript modules. This is helpful, especially for injecting scripts responsible for money operations and other critical functionalities where the security aspect is crucial.

### [12 lessons from 5 years of running a tech meetup](https://davekiss.com/blog/12-lessons-from-5-years-of-running-a-tech-meetup)

I am an organiser of [NN1 Dev Club](https://pawelgrzybek.com/i-am-organising-a-meetup-northamptonshire-dev-club/), a free meetup for software devs from the Northamptonshire (UK) area. Although it is a lot of fun doing something for people and building a local community, it is also a lot of hard work. I found this post by Dave Kiss super insightful and inspired me to improve a bunch about our meetup.

### [Font with Built-In Syntax Highlighting](https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/)

Syntax highlighting on the website is complicated. It requires millions of `div`s and `span`s or, as it turns out, a font with built-in syntax highlighting. This idea is a very creative use of open-type features. I am sure this is not the end of the story, and I look forward to future iterations of this idea. Rad!

### [Just use Postgres](https://mccue.dev/pages/8-16-24-just-use-postgres)

It is an excellent post by Ethan McCue about why you should default your database selection to Postgres if you are still wondering if the other one fits the purpose better. This post contains references to plenty of other related resources worth checking.

### [Leaving Neovim for Zed](https://stevedylan.dev/posts/leaving-neovim-for-zed)
I enjoy reading deep dives like this. I don't use Zed, nor am I a NeoVim user, but I enjoy exploring other devs' reasoning behind switching working environments.

### [Introducing the CSS anchor positioning API](https://developer.chrome.com/blog/anchor-positioning-api)

One of the most powerful recent additions to CSS is anchor positioning API. This addition to the CSS language will be the future of positioning one element in context to the other. If you have ever tried building a dynamically positioned tooltip, you know how hard a problem may become. Incredibly, it can all be solved using pure CSS. This article by Una on the Google Developers blog is an excellent explainer of API parts.

### [NSA releases copy of internal lecture delivered by computing giant Rear Adm. Grace Hopper](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/3884041/nsa-releases-copy-of-internal-lecture-delivered-by-computing-giant-rear-adm-gra/)

This video is a never-before-released footage of "Future Possibilities: Data, Hardware, Software, and People" by Rear Adm. Grace Hopper. It is a timeless presentation about resistant-to-change developers in the fast-paced industry, leadership, distributed systems, security, higher-level systems, and more. Incredibly, this 42-year-old presentation stays perfectly relevant nowadays.

### [Basic keyboard shortcut support for focused links](https://ericwbailey.website/published/basic-keyboard-shortcut-support-for-focused-links/)

This post is just a masterpiece that presents the complexity of link behaviour. The moral of the whole post is "Use appropriate, semantic HTML whenever possible, I beg you". That's incredible research, Eric!

### [How Google handles JavaScript throughout the indexing process](https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process)

Do server-side rendered websites perform better in search results than client-side, JS-heavy projects? What does Google crawl and that it skips? Does everything we have heard for the last decade still hold about indexing client-side render apps? This post is a detailed research about the subject with very up-to-date insights.

### [Exploring the Possibilities of Native JavaScript Decorators](https://frontendmasters.com/blog/exploring-the-possibilities-of-native-javascript-decorators/)

ECMAScript proposal to add decorators to the language is at stage 3, so it will inevitably land in the specification soon. It is an excellent time to familiarize yourself with the feature-rich new addition to the language, and this post by Alex MacArthur is a great primer.

### [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events?hl=en)

Scroll snapping is one of the most exciting parts of modern CSS. Because of this addition to the language, I rarely have to use JS solutions anymore. This post presents `scrollSnapChange` and `scrollSnapChanging` events that make it even more powerful. Adam, as always, did his homework and prepared a bunch of great demos.
