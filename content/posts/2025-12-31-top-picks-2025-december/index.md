---
title: "Top picks — 2025 December"
summary: "Solid list of resources this month. Some tutorials for web developers, something for Go programmers, interesting updates on acquisitions, management insights, database deep dives and more."
---

Howdy folks, can you believe that the year is over? Shocking! I spent December travelling around Sri Lanka with my family, and it was incredible! I published [a few pics from our trip](/sri-lanka-2025/). I managed to catch up on a long reading list and, as I do every year, I published [my annual summary of the past year](/a-look-back-at-2025/). It's been a good year for me!

I have a ton of good links for you prepared this month. Even though I spent most of the month far away from my record collection, I still have a solid music recommendation for you. I really hope you will like this month's selection and I will catch you all in 2026.

---

## Album of the month

Nightmares on Wax is my daughter's favourite artist and we spent countless hours dancing to his "Carboot Soul" and "Smoker's Delight". Now we listen to [the new album "Echo45 Sound System"](https://nightmaresonwax.warp.net/release/532575-nightmares-on-wax-echo45-sound-system) nonstop. Our favourite tune is "True" with Sadie Walker on vocals and Big Daddy Kane on bass. Super good album!

![iPhone on the table and AirPods Pro next to it. The album cover on the screen is Nightmares on Wax "Echo45 Sound System"](echo45.jpg)

---

## Top picks

### ["TIL: satisfies is my favorite TypeScript keyword" by Jerred Shepherd](https://sjer.red/blog/2024-12-21/)

This is the nth post I have read about the TypeScript `satisfies` keyword, and the one that made me understand it. I don't write complex TypeScript often, but now I have another tool in my toolbox.

### [Bun is joining Anthropic](https://bun.com/blog/bun-joins-anthropic)

This one came out of nowhere. Anthropic, AI giant and creators of the Claude Code, by many called the best AI code assistant out there, just like that acquired Bun. This article reveals more historical reasons why this takeover makes sense and assures people who placed their bets on Bun about the unchanged overall goal of the project.

### [Collection of polish matchbox labels from 1949-83](https://etykietki.co/)

I give little warning that this website is in Polish, but you don't need to understand my native language to appreciate the passion that went into this project. This is a collection of matchbox labels printed between 1949 and 1983. The project started during lockdown five years ago when one of the authors found a collection of grandfather's matchboxes. Posters designed by Polish designers from those years are classic, considered to be the golden age of Polish graphic design, but this project also shows incredible art being present on matchboxes. The subjects of these designs vary from ads for particular cultural events through architecture to propaganda slogans.

### ["Using the Ancient Evils for Debugging" by Manuel Strehl](https://htmhell.dev/adventcalendar/2025/2/)

HTMHell is one of my favourite geeky advent calendars. This post introduced me to the obscure `<plaintext>` element that I had never heard about before. It goes into the historical reason for having this evil feature in the specification and gives some examples of when it used to come in handy (it is not so useful nowadays).

### ["Why Companies Don’t Fix Bugs" by Ibrahim Diallo](https://idiallo.com/blog/companies-dont-fix-bugs)

I’m sure you can relate to the hypothetical scenario described in this post. A real story of why good UX is an afterthought for most companies, often caused by the fast-paced business requirements, staff rotation, lack of confidence in working on the dated codebases and invisible ROI.

### [CSS scroll-triggered animations are coming!](https://developer.chrome.com/blog/scroll-triggered-animations)

Another milestone for the animation on the web. This article is a first view of the totally new scroll-triggered animations. In contrast to scroll-driven animation, they do not advance and reverse as you scroll. They just play when the boundaries of the trigger are crossed. The `IntersectionObserver` is no longer needed for that.

### [Avoid UUID Version 4 Primary Keys (for Postgres)](https://andyatkinson.com/avoid-uuid-version-4-primary-keys)

Great and insightful post. For most use cases and the majority of apps out there that rely on Postgres, using UUID for the primary key is okay, but the performance degradation can hit at scale. I learned tons from this post!

> The number of random version-4 UUIDs which need to be generated in order to have a 50% probability of one collision: 2.71 quintillion. This number would be equivalent to generating 1 billion UUIDs per second for about 86 years.

### [No nonsense guide to Go projects layout](https://laurentsv.com/blog/2024/10/19/no-nonsense-go-package-layout.html)

When I started learning Go, I struggled to understand why so many Go projects follow an overly complicated project layout. Since the naming convention of packages and file locations is pretty consistent across many open source Go projects, it is easy to fall into a trap and think this is a language requirement. This article clarifies it all.

### [Cloudflare Radar 2025 Year in Review](https://radar.cloudflare.com/year-in-review/2025)

Cloudflare shared their annual recap of web trends. I find all these stats super interesting. Significant growth of internet traffic in the last year doesn't surprise me, but the increasing adoption of the v2 and v3 HTTP protocols is something I didn't expect. Hilbert curve visualisation of the IPv4 distribution is so cool! Also, we have heard for decades that we are running out of IPv4 addresses, but the adoption of v6 is so slow, literally 1% more than last year only. This page is full of interesting insights, so check it out yourself and pick your gems.

### [Please Just Fucking Try HTMX](https://pleasejusttryhtmx.com/)

I like the simplicity of HTMX a lot. It's my first pick for the interactions library and should be yours for most projects. This website is a series of reasons to reach the same conclusion. Give it a go on the next project and I bet you will like it.

### ["always bet on text" by frog hop](https://graydon2.dreamwidth.org/193447.html)

A great essay about the power of text and why should we prefer it over other kinds of media system. Little bit about the history of text, using it as a communication method, and about millions of reasons why you should bet on it.

### [Introducing CSS Grid Lanes](https://webkit.org/blog/17660/introducing-css-grid-lanes/)

The consensus about the native CSS masonry layout landed, and the `display: grid-lanes` is the way to go. This article by Jan Simons explains the property and also introduces the concept of "tolerance". I'm happy that this debate is finally over. The new feature is ready to play around with in Safari Technology Preview, and let's hope that other engines will catch up soon.

> Think of tolerance as how chill you want the car drivers to be. Will they change lanes to get just a few inches ahead? Or will they only move if there’s a lot of space in the other lane? The amount of space you want them to care about is the amount you set in item-tolerance.
