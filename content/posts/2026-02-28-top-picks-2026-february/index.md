---
title: "Top picks — 2026 February"
summary: ""
draft: true
---

After an absolutely [devastating January](/top-picks-2026-january/), my February was chilled and productive, and I really hope to keep that trend. Today is the [State of the Browsers](https://2026.stateofthebrowser.com/) day, and I'm well pumped to be there with my best friends, surrounded by the best folks from the web community.

I'm still hunting for a new job, and things are going surprisingly well. Of course, I got rejected a number of times, but this is part of the game. I'm in the middle of the recruitment process for a few cool companies, and I'm sure very soon I will be able to share some good news on that front. I also kept myself busy working on the biggest side project that I have ever worked on (more about it very soon), and yes, it is written largely in Go. Working with that language brings me joy as if it were my first ever `addEventListener` added to a website.

Enough about me, time for some great links and some music recommendations that some folks seem to really enjoy. The web was generous with great resources this past month, and the album for this month is also not too shabby.

---

## Album of the month

["The Baby Huey Story (The Living Legend)" by Baby Huey](https://www.discogs.com/release/8425654-Baby-Huey-The-Baby-Huey-Story-The-Living-Legend) is a classic that needs to land on the shelf of every funk, soul and hip hop head. Why hip hop, you may ask! "Hard Times" from this album was sampled a million times by the best rap producers out there, and the flute part from "California Dreamin'" is another classic you hear a lot in rap and trip hop. A very good album!

!["The Baby Huey Story (The Living Legend)" by Baby Huey](1.jpg)

!["The Baby Huey Story (The Living Legend)" by Baby Huey](2.jpg)

---

## Top picks

### ["React's ViewTransition Element" by Chris Coyier](https://frontendmasters.com/blog/reacts-viewtransition-element/)

The upcoming version of React comes with the `ViewTransition` component, doing precisely the same as what you can achieve using `document.startViewTransition()`. Curious ones may wonder what the benefit of doing it the React way is. Chris summarised that in his famously practical manner.

### ["What is JPEG XL and do we really need another image format?" by Aaron T. Grogg](https://www.debugbear.com/blog/jpeg-xl-image-format)

When Apple announced Safari support for JPEG XL last year, I was a bit confused, as I didn't really understand the need for a new format. WebP and AVIF are so great, right? This article discusses what this format is good at, and why you are not ready to use it yet. I'm still not sure if the web needs that, though.

### ["Building a Computer with CSS" by Amit Sheen at CSS Day 2025](https://www.youtube.com/watch?v=PFqtjjpfp6o)

Amit’s CSS experiments are insane, and this one is no different, less visually pleasing than the others, but definitely super interesting. It starts from a simple concept but ends up in a trigonometry maze that I didn't even know CSS widely implemented already.

### ["Your Go tests probably don't need a mocking library" by Redowan Delowar](https://rednafi.com/go/mocking-libraries-bleh/#mocking-a-method-on-a-type)

A good article that explains plenty of Go patterns for well-testable code. Dependency injection, monkey patching, interface segregation and a number of other ways for members faking.

### ["Introduction to PostgreSQL Indexes" by Dalto Curvelano](https://dlt.github.io/blog/posts/introduction-to-postgresql-indexes/)

A very good deep dive into the different types of Postgres indexes. I learned a lot from this article! I didn't have a clue about expression indexes and this article landed on my reading list precisely when I needed it. Well explained from the very basics of index internals up to tree structures with a bunch of real-life scenarios when to use them. I would love to see more articles by Dalto Curvelano.

### ["CSS Minify Tests" by Keith Cirkel](https://www.keithcirkel.co.uk/css-minify-tests/)

Keith is working so hard on the [csskit](https://csskit.rs) and he just released a super useful comparison of all the popular CSS minifiers. It is a collection of 350+ tests of individual features, with a clear description, input and expected result. It is open-sourced and everyone with a good idea for a missing test can contribute to the tool.

### ["Try text scaling support in Chrome Canary" by Josh Tumath](https://www.joshtumath.uk/posts/2026-01-27-try-text-scaling-support-in-chrome-canary/)

Regardless of how the font size of your operating system is configured, your browser simply ignores it. There are some browser overrides, but most affect only the `zoom` of the entire page, not the `font-size` property. The new proposal by Josh Tumath, already implemented in Google Chrome Canary, is going to change that. The `<meta name="text-scale" content="scale" />` will magically make your page respect OS-level font settings. If you have been a good web citizen and you have been using the right units for the right things, you're good and there's not much work to do for you. If you use `px` units for your font-size, it is time to become a good web citizen.

### [Announcing Interop 2026](https://webkit.org/blog/17818/announcing-interop-2026/)

Web Interop is one of the best initiatives that ever happened to the web. A common effort of multiple leading tech giants to make the platform more interoperable across engines. This year's set of features is really exciting. My favourite focuses are CSS Container Queries, Custom Highlights, Navigation API, Scroll Snapping, and Scroll-driven animations. There are a few more that are great, but you should read on to find out more details or track the progress of the implementations in the [Interop 2026 Dashboard](https://wpt.fyi/interop-2026).

### ["Standard HTML Video & Audio Lazy-loading is Coming!" by Scott Jehl](https://scottjehl.com/posts/lazy-media/)

Thanks to Scott Jehl and his team at Squarespace, soon we will be able to use the `loading="lazy"` on `video` and `audio` HTML elements. This is exciting news for media-heavy pages. I remember my excitement when lazy-loading landed for images, made things historically so complicated so easy all of a sudden. This is another one of those little HTML improvements with a huge impact. Huge win for the web!

### ["Sprites on the Web" by Josh Comeau](https://www.joshwcomeau.com/animation/sprites/)

Another top article by Josh exploring the concept of sprites. Not a technique I used in the last decade, but still applicable for the right kind of animation. For me, the most important part of this post is about the second argument of the `step()` function, which I totally didn't have a clue about. As always, I learned something new from his post.

### ["Goodbye innerHTML, Hello setHTML: Stronger XSS Protection in Firefox 148" by Tom Schuster, Frederik Braun, Christoph Kerschbaumer](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/)

The native solution for cross-site scripting attacks (XSS) is coming, with the first implementation of [HTML Sanitizer API](https://wicg.github.io/sanitizer-api/) landing on Firefox 148. The sanitizer comes with a sane default configuration, but the API is very flexible. Jake posted on socials [a short video](https://mastodon.social/@firefoxwebdevs/116131186218787540) that explains the feature beautifully.
