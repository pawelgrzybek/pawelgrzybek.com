---
title: "Top picks — 2026 July"
summary: "The list of links for this month is long, so brew a good (and large) coffee and enjoy the read. Tons about the web, go, some conference talks, and a bit about the AT Protocol at the end."
---

End of July? Seriously? Feels like yesterday when I celebrated New Year’s Eve, and all of a sudden it is the end of July. Can we all slow down a little, please? Not a little. Slow down! You, time, the world. Pretty please! I’m in a good mood today, but not in a good one to write interesting intros, so let’s go straight to the album of the month (it is a good one), and of course links. I have plenty of good resources for you that I liked over the past month. Enjoy!

---

## Album of the month

Time for a classic! I have two reasons why ["The Score" by Fugees](https://www.discogs.com/release/11406302-Fugees-The-Score) was spinning quite a lot on our turntable in the past month. Firstly, this is an incredible album full of bangers, one after the other. Another reason is that my wife and I are going to see Lauryn Hill and Wyclef Jean live in a few weeks' time at the [Diaspora Calling](https://www.diasporacalling.com/) festival and we are expecting to hear quite a few songs by refugees. I’m well pumped about it. If you don’t know this album, you have homework to do, because this is one of the greatest pieces of music ever released.

!["The Score" by Fugees](fugees.jpg)

---

## Top picks

### ["The Goldilocks customizable select height" by Jake Archibald](https://jakearchibald.com/2026/goldilocks-select-height/)

I like posts about modern parts of CSS, but posts like this one are even better. Jake presents a tonnes of modern CSS to solve a particular UI challenge — adding margins and restricting block size of customizable selects. Along the way he also bumps into number of browsers incompatibilities. Again, it is packed with modern CSS like `position-try-fallbacks: flip-block` and other nuggets you probably never heard of. This is the best kind of blog posts!

### ["Modernizers & go fix" by Redowan Delowar](https://rednafi.com/go/gofix/)

Really good primer to the `go fix` CLI and the concept of modernizers in the Go language. The command line tool has been totally revamped in the recent major version 1.26 and it is an incredibly useful tool for projects managed by a team of multiple devs. Surprisingly, it is also very useful for codebases written using AI, even though modern LLMs are pretty good at writing Go.

### [Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)

I was so excited when the Microsoft team announced the TypeScript rewrite to Go over a year ago. For many months, I have been using `tsgo`, and the difference in the experience of working with this language is night and day. The part that I'm most excited about, other than the speed, of course, is the native LSP integration that fully follows the protocol spec. If you have ever complained about the TS compilation speed, today is the day when the wait is over. Update your projects and your IDEs to take full advantage of it.

### [Rediscover the HTML select element](https://developer.apple.com/videos/play/wwdc2026/315/)

I know that there are plenty of other resources that explain the new possibilities of fully customisable HTML select elements, but there is something different about this Apple production. This presentation is not too long, not too short, follows a nice pace and the constructs are layered on top of each other, so we are not bombarded with the complexity of new values and features all at once.

### [Create web extensions for Safari](https://developer.apple.com/videos/play/wwdc2026/216/)

This is a good guide on creating a web browser extension. The chapter closer to the end of this presentation is the most exciting to me, as it presents how you can package and distribute a Safari extension without ever downloading Xcode. This is exciting news and probably will unblock a lot of authors from distributing their plugins to Safari as well.

### ["Working backwards" by Daniel Roe | JSHeroes 2026 ](https://youtu.be/QFy7HmfTelo)

Really inspiring talk by Daniel about building successful products with people. It is backed by the origin story of npmx, which is one of the most successful open source stories in recent times. I love the way Daniel always puts people first in the way he works.

### [Announcing v1 of OpenTelemetry Go Compile-Time Instrumentation](https://opentelemetry.io/blog/2026/go-compile-time-instrumentation-v1/)

OpenTelemetry is an open-source framework to enable key observability elements in your application. It is a single framework that gives you logs, metrics, and traces, and it supports a lot of modern programming languages. Adding it to a Go application has never been simple, though. It required a lot of boilerplate code to propagate logs, hook into the transport layer events, and orchestrate spans for database calls, etc. Now this whole thing can go away, and we no longer need to write it all, as the new `otelc` CLI is a tool that can auto-instrument our application at compile time. The best code is the one that doesn't exist, right?

### ["Fluid Typography with progress()" by Matthew Morete](https://master.dev/blog/fluid-typography-with-progress/)

I had absolutely no clue about the CSS `progress()` function. This article presents one great use case for the new function, but I can think of plenty more good ones. Isn't modern CSS just too good?!

### ["Building Gin: Simple Over Easy" by Manuel Martínez-Almeida](https://manualmeida.dev/articles/gin-simple-over-easy/)

Good post about the goals of Gin, the most popular HTTP Go language framework. The author elaborates on the importance of backward compatibility, how the radix tree-based router made it a lot more efficient compared to other regex-based projects of its kind, and some other decisions that made it as popular as it is. Really good, short write-up with an interactive radix tree explainer.

### ["Maybe you should learn something" by Viktor Löfgren](https://www.marginalia.nu/log/a_135_learn/)

What a good write-up. Learning new things is probably your bread and butter if you work in the software engineering sector, but some people may need this reminder. It is really useful for people who claim not to have time for anything, and even more applicable to those who didn't train their self-improvement muscle since their school years.

### ["Your Worker can now have its own cache in front of it" by Dan Lapid and Connor Harwood](https://blog.cloudflare.com/workers-cache/)

I really like Cloudflare's intuitive, headers-controlled advanced caching. This is the thing that I always wanted to be available in Cloudflare Workers, and the wait is over. This blog post starts from the basics and goes into depth about the reasoning why this implementation took so long. It is such an interesting story how the web changed and the core Worker methodology flipped the order of resources (moved the cache in front of the origin).

### ["Good Tools Are Invisible" by Ginger Bill](https://www.gingerbill.org/article/2026/07/10/good-tools-are-invisible/)

Just read it. It is not about a specific tool, and Bill’s point is not to compare one to the other. It is about core principles of building a product that people want to use. The whole post, line by line, is a masterpiece and I would highly recommend reading it regardless of what the output of your creation is: a website, CLI tool or programming language. It applies to all those.

> Maximal configurability shouldn't be a tool's goal, it should be an option for when it's actually necessary. Designing an ergonomic tool is fundamentally about having good defaults, while still allowing escape hatches where they're possible/needed.

> "Highly configurable" is often just an excuse for shipping no opinion at all and calling the resulting work your problem. Good defaults are a form of respect for the user's time: the toolmaker does the thinking once so a thousand users don't each have to.

### [The Java Story | The Official Documentary](https://youtu.be/ZqGSg4b_cZA)

Documentaries by CultRepo are incredible, and another one has joined their collection recently, this time about the Java programming language. A language that I have absolutely no clue about, but that actually makes this a more interesting documentary for me. As always, top production quality and a superbly interesting story. Hey, modern Java doesn't really look as verbose as it looked a decade ago when I looked into it for the first time.

### ["Getting Started with Anchor Positioning" by Josh W. Comeau](https://www.joshwcomeau.com/css/anchor-positioning/)

Do I really need to highlight every single post by Josh in my top picks? Yes, I do, because they are great explainers of modern CSS concepts. His demos and very practical examples are always on point to convey just enough without exhausting my brain capacity.

### ["git rebase -i is not that scary" by Akrm Al-Hakimi](https://cachebag.sh/journal/interactive-rebasing/)

Super simple to follow intro to the interactive rebasing. I'm not scared of `git rebase -i` but I use it so infrequently that every time I use it, I need to remind myself where to put "s" to squash one commit onto the other. I really like this refresher.

### [The Open Web's second chance (w/ Dan Abramov)](https://syntax.fm/show/1025/the-open-web-s-second-chance-w-dan-abramov)

This episode of Syntax.fm answered so many questions I had about AT Protocol and a little bit about how it compares to something like the Fediverse (the concept behind Mastodon). Dan is a great educator and some of the concepts he explained finally clicked in my brain. After chatting about it on social media, Dan shared with me ["There Are No Instances in atproto"](https://overreacted.io/there-are-no-instances-in-atproto/) that goes much deeper into the comparison of AT Protocol and the Fediverse. I think I'm becoming a fan, but there is still one knowledge gap in my understanding, and I have a blog post coming precisely about that. There is no better way to learn something than writing about it. Right?

### [CodePen 2.0](https://chriscoyier.net/2026/07/30/codepen-2-0/)

There is no other web service that I have been using more throughout my career other than my email. Second is CodePen. This is a huge milestone that the whole team spent years to achieve and the whole, super small team deserves huge kudos. The new CodePen 2.0 is a lot more powerful, comes with all you would expect from a very modern service of its kind, but in a typical fashion for these folks, they kept it simple. To use its basic features it is as simple as it always has been, but now you can do serious development work with it including a whole deployment of your website, which is absolutely sick. I also enjoyed two episodes of the CodePen Radio podcast, that I would highly recommend you checking if you are curious about some internals: ["Why are we building CodePen v2"](https://youtu.be/S_wCMc_iNk4) and ["CodePen 2.0 Launch Party! Find out what everyone's favorite features of CodePen 2.0 are"](https://youtu.be/HC5CSWRqOGw). Huge congrats team!
