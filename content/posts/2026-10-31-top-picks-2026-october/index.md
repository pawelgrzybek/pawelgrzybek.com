---
title: "Top picks — 2026 October"
summary: "Rank your favourite Interop 2027 features, Deno is joining Cloudflare, why web devs don't use the platform, interesting facts about popular port numbers, the future of working with SVGs, a comparison of modern image formats, the Go team contributes an amazing feature to LSP, some great news about CSS-Tricks and a bunch more."
---

I spent every spare moment of the past month working on my side project. I can't wait to share more about it with you. Every time I think I'm close to a release, I find more work to do. It feels exhausting at this point, but I'm still not losing passion for the thing I'm building.

While I was busy building stuff, the web didn't slow down! I'm not talking about the number of data breaches and major service outages that happened in the past weeks. This is scary! I'm talking about real people posting real things that they are passionate about. As always, I have a full list of these bits for you all and, as always, some music recommendations from my record shelf. Let's go!

---

## Album of the month

I was listening to a lot of incredible music this past month, and it was really hard to pick a single record to recommend. Just look how much [my collection](/music/) expanded in recent weeks! Some time ago, I discovered [Karate Boogaloo from Australia](/top-picks-2024-june/#album-of-the-month). One of their members also plays with Surprise Chef, and I've been listening to them a lot recently. They just released ["Frogs In A Pond"](https://www.discogs.com/release/38820123-Surprise-Chef-Frogs-In-A-Pond), which is really good, but my favourite album by these guys is ["Daylight Savings"](https://www.discogs.com/release/16082627-Surprise-Chef-Daylight-Savings) from 2020, and this is my recommendation this month for all you funky heads! The title track is a top banger!

!["Daylight Savings" by Surprise Chef album label](/album.jpg)

{{< youtube 2S5kb6QJ83A >}}

---

## Top picks

### [2027 Web Platform Feature Ranking](https://interop-rank.fxdx.dev/)

Interop is an effort by multiple leading web companies to make the platform more interoperable. Friends at Firefox opened a survey for the second year to check what users need. This is going to help them prioritise the right features but also shape the roadmap for Firefox development. [Ana Rodrigues published her picks in the "My Interop feature ranking"](https://ohhelloana.blog/my-interop-2027/), and then [Tyler Sticka followed her in the "My Interop 2027 Ranking"](https://tylersticka.com/journal/interop-2027-rank/). I also cherry-picked mine in the ["My Interop 2027 picks"](/my-interop-2027-picks/). This is your low-effort option to contribute to the shape of the future web, so please take a minute and fill it in.

### [Deno is joining Cloudflare](https://deno.com/blog/cloudflare)

This news was a little bit sad to me at first. I invested a big chunk of my life using and trusting Deno's vision, but over the years I noticed the stagnation of this runtime and all the projects surrounding it. I'm not surprised at all by this news. Now I'm happy that good people with the right vision for building good primitives for the web are joining a bigger organisation, where they can focus their efforts on building good things and not worry about money.

### ["Anti-Patterns in Software Blogging" by Michael Lynch](https://refactoringenglish.com/blog/anti-patterns-software-blogging/)

I love writing, I love blogging, but it doesn't mean I'm good at it. Posts like this one help me a lot. I feel super guilty of an over-reliance on links. What I find most annoying in technical blog posts scattered across the web are boring intros and unnecessary formality. All these concepts are nicely described in this post.

### ["Why don't more developers "use the platform"?" by Nolan Lawson](https://nolanlawson.com/2026/10/03/why-dont-more-developers-use-the-platform/)

A stream of Nolan's thoughts about the platform features, the benefits of using primitives provided by the web, dated, overcomplicated solutions and a few good speculations about why web developers nowadays still mess it up.

### ["The accidental history of 3000, 8080, and other port numbers" by Matteo](https://smarmelling.com/posts/the-accidental-history-of-3000-8080-and-other-port-numbers.html)

Have you ever wondered why it is port 3000, 8080 or maybe even 5173 that your local project is most likely running on? Why are these particular ones so popular in a world where you have tens of thousands to choose from? I found the story of each of them interesting. Unfortunately, I don't know the author's surname, and I struggled to find any more resources about him.

### ["One SVG, nine posters: CSS linked parameters" by Vadim Makeev](https://pepelsbey.dev/articles/svg-link-params/)

This is future-level, hard-core SVG customisation. The new [CSS Linked Parameters Module Level 1](https://drafts.csswg.org/css-link-params-1/) specification is a way of passing custom values down to SVG files embedded using an HTML image `src` or using a CSS `background-image`. Vadim's post is a great intro to this super experimental feature. Keep in mind that, at the time of writing this, the browser support for this one is questionable, but it is still worth learning as it is superbly powerful.

### ["I'd like to have a universal pseudo selector in CSS" by Kilian Valkhof](https://kilianvalkhof.com/2026/css-html/id-like-to-have-a-universal-pseudo-selector-in-css/)

Kilian explains when the classic lazy CSS reset `*, *::before, *::after { box-sizing: border-box; }` may bite you and waste a moment of your life. I don't hate his proposed universal pseudo-selector. Also a good reminder about `::details-content`. This one on its own is amazing. Did you know you can animate native HTML accordions using pure CSS, and you no longer need 600 MB of JavaScript to do it?

### ["Standards In Progress: Making Video Posters Accessible, Responsive, and an Element" by Scott Jehl](https://scottjehl.com/posts/responsive-accessible-poster/)

Scott is on a journey to improve native HTML elements, and this time his focus is on the 20-year-old poster attribute of the video element. He proposes that it be a fully customisable element that will give us no less power than a regular picture element has. I love every effort that makes the internet more performant and accessible to others, and Scott is always smashing it.

### ["Partial updates with field masks" by Redowan Delowar](https://rednafi.com/go/patch-field-mask/)

This is a quick intro to the concept of API field masks, which are present in some big enterprise APIs or in the Protobuf specification. Redowan recalls a real-life example from one of the Reddit threads and gives a solution. Not the simplest, but a solution that I learned from. I always learn a lot from Redowan's posts: good blogger he is!

### ["JPEG XL vs AVIF for web use-cases" by Jake Archibald](https://jakearchibald.com/2026/jpeg-xl-vs-avif/)

Safari added partial support for JPEG XL a few years ago in version 17. Firefox added it recently in version 158, and Chrome just announced that [JPEG XL is coming in version 155](https://developer.chrome.com/blog/jpeg-xl-in-chrome). You may be wondering what the deal is. We have a bunch of modern image formats available in the engines already, mainly WebP and AVIF, which offer tons of advantages over the usual suspects like JPG and PNG formats. This post by Jake Archibald is an incredible resource to understand the pros and cons of each. If you're really short on time, here is all you need to know.

> For web use-cases, I'd currently default to AVIF 4:4:4, with the highest effort level I can be bothered with. If I felt AVIF was producing an unusually large file, I'd take a look at JPEG XL via jixel, and see if it did better.

### [Responsive iframes in Chrome 154](https://developer.chrome.com/blog/responsive-iframes)

The `iframe` on your page can dynamically adjust its size based on the content in it. There is no need to send and receive messages between both ends to make that happen any more. Now I'm tempted more than ever to make all the demos on my blog using just simple `iframe` embeds.

### [This hue shall pass](https://thishueshallpass.clearleft.com/)

Really neat little tool that does one job and does it really well. You pass the colours you use across your project, and it shows you the contrast ratio and whether the combination of colours on top of each other passes AA or AAA standards. It also suggests little adjustments to the colours when applicable. The only limitation of this tool is the hex colour format, which is the only option for passing an input to it. I sent my feedback to the author of the tool. Not the first tool that does this job, but for sure the simplest and most intuitive to use.

### [Interactive refactoring in gopls](https://go.dev/blog/interactive-refactoring)

Ignore the fact that this article comes from the official Go blog, as this is more about the new LSP features that the Go team proposed and implemented. Developers using LSP (you may not realise, but you are probably one of them), regardless of the programming language, will take advantage of these multi-step refactoring capabilities that are coming to the Language Server Protocol.

### [Introducing tsrs: A port of TypeScript to Rust](https://blog.cloudflare.com/typescript-rust-port/)

I don't find anything exciting about this article. It is just another one that makes you rethink the current space of software engineering. Every single day, we hear about new LLM-generated forks of something popular: Adobe applications, Microsoft's set of office tools, `brew` CLI, or now also TypeScript. In theory, all these forks perform a lot better according to the graphs that the authors decided to put on the Claude Code-generated README page on GitHub.

For the past few years, no one has decided to invest in the rewrite of the TypeScript compiler due to its complexity, but all of a sudden, in the past month, I heard about three new initiatives to do so. It makes headline after headline for a week or two, and in the end the idea dies and the original tool wins. It wins for a simple reason: the original authors do care about it. Even if this is not true, let me live in this naive world where people who care win.

### ["The Future of CSS - My top 10 picks for Interop 2027" by Joshua Comeau](https://www.joshwcomeau.com/css/interop-2027/)

Really nice selection of Interop 2027 features by Joshua Comeau. This one is a lot cooler than the one I shared because of the examples attached to every item. Josh is one of my favourite CSS bloggers. You can always find top explainers on his blog. Must follow!

### ["CSS-Tricks has a new owner!" by Geoff Graham](https://css-tricks.com/css-tricks-has-a-new-owner/)

Since Chris Coyier sold CSS-Tricks to DigitalOcean in 2022, things around this website have become a little strange. The DigitalOcean sponsorship sometimes felt subtle, but the next day it felt super salesy. The content was mostly good because it was still curated by the right web people, but occasionally some really bad pieces managed to slip in. Recently, it went quiet all of a sudden, and it was the first time in almost two decades that the page felt dead. Geoff now takes it over and has tons of plans for how to keep it alive under private ownership. I'm glad that DigitalOcean is out of the picture and the project is again with the right people.

### [It's time to come back to Firefox. The Internet you loved is still here.](https://youtu.be/E2AoYIKwJqM)

This one is going to be a good finisher. Firefox people are not only good at making incredible browser engines, they also made the funniest ad for their product! These are classic internet memes from the early 2000s. This is so so so funny!

{{< youtube E2AoYIKwJqM >}}
