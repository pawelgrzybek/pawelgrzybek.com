---
title: "Top picks — 2024 February"
summary: "Interop 2024, React Server Components and upcoming updates to new version of React core, LLRT runtime from AWS team, URLs decoding demystified, colour spaces, Apple is killing PWAs, the state of JS bloat in 2024 and more!"
---

Welcome to this edition of top picks published on the leap day. Another one like that in four years! Do you know anyone who celebrates a birthday today? Sick! Happy birthday to them all 🎉

Although it is the shortest month of the year, the list of resources published on the web this past month is long, intense and full of controversy (thanks Apple). Enjoy!

- - -

## [The web just gets better with Interop 2024](https://webkit.org/blog/14955/the-web-just-gets-better-with-interop/)

Jen Simmons just dropped this highly anticipated post that summarised the results of last year's Interop 2023 and presented the focus areas for 2024. CSS nesting and Relative Color Syntax are the two that I am the most excited about. You can track the progress of selected features on the [web-platform-tests dashboard](https://wpt.fyi/interop-2024). 

## [JS Party – Episode #311 - React Server Components](https://changelog.com/jsparty/311)

I enjoyed this episode of the JS Party podcast about React Server Components. Dan Abramov is a great teacher. This episode helped me build a mental model for this new paradigm in the React world.

## [React Labs: What We've Been Working On – February 2024](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024)

I was excited about React when it came out. I liked it even more after they added the Hooks API in 2018, although I still don’t understand all the rules behind the `useEffect`. Everything after that was noise. There were a bunch of hooks talking about an API that never got released, and changes that didn’t matter happened over time, and I am glad I just ignored all these. I am excited to say that in 2024, my excitement is back because of this article. They announced a bunch of simplifications at the compile level and a few features that truly make a massive difference for app creators.

## [LLRT (Low Latency Runtime)](https://github.com/awslabs/llrt)

AWS released an experimental JavaScript engine designed to reduce costs and improve the cold starts of AWS Lambdas. It is still experimental, but the early performance statistics look very impressive. Once stable, it could be a significant money saver for enterprise organizations.

## [Encoding and Decoding URLs in JavaScript](https://frontendmasters.com/blog/encoding-and-decoding-urls-in-javascript/)

A good article about encoding and decoding URLs: most importantly, it explains very well the difference between `encodeURI` and `encodeURIComponent`. I always needed clarification about these two.

## [Okay, Color Spaces](https://ericportis.com/posts/2024/okay-color-spaces/)

The subject of colors on the web has become more complex in recent years. Color spaces are hard to understand but crucial to grasp the need for many color notations at our disposal. This article by Eric is one of the best explanations of colors in the digital space I have ever read.

## [Apple Is Trying to Kill the Open Internet!](https://youtu.be/up-zUEFNMww?si=R_CVWat6OaeGRWKj)

[A month ago](/top-picks-2024-january), I shared the exciting news that ["Apple announces changes to iOS, Safari, and the App Store in the European Union"](https://www.apple.com/newsroom/2024/01/apple-announces-changes-to-ios-safari-and-the-app-store-in-the-european-union/). Finally, we will be able to install non-webkit browser engines on iOS. It is what Web platform enthusiasts have been waiting for for ages. The state of happiness didn't last long because Apple decided to kill core PWA features in the EU. Move against the core web principle of backward compatibility. Such a shit move, Apple! We are all waiting for what will happen, but for now, the best you can do is fill out [the survey on the Open Web Advocacy](https://open-web-advocacy.org/apple-attempts-killing-webapps/). Also, for a lot more detailed explanation of the current situation, I highly recommend watching ["Coffee With Developers: The Uncertain Future of Web Apps on iOS in the EU"](https://youtu.be/Lr9f64B6Lao?si=bn1plkIkZA5Enm29) where Chris Heilmann invited Bruce Lawson and Ben Francis to discuss the matter.

{{< youtube up-zUEFNMww >}}

{{< youtube Lr9f64B6Lao >}}

 ## [View transitions: Handling aspect ratio changes](https://jakearchibald.com/2024/view-transitions-handling-aspect-ratio-changes/)

CSS view transitions are magical. It simplifies the transition between two UI component states without writing a single line of JavaScript. There are some problematic parts, though - dealing with the transition between two different aspect ratios is one of them. Jake's article explains how to deal with this situation.

## [JavaScript Bloat in 2024](https://tonsky.me/blog/js-bloat/)

Nikita Prokopov nicely presents the sad reality of the JavaScript abuse. Shocking 55MB of data needed to send over the wire to send a message on Slack or 50MB to move rectangles around on the Jira board are just a few examples presented in this article. If you check some of these web apps cost on [What Does My Site Cost?](http://whatdoesmysitecost.com) (by the way, I am not sure how accurate that is in 2024, but I still love this website), it is shocking that in some countries, opening Gmail costs a fortune! Let me summarise this using the author's summary.

> Fuck me.

## [CSS :has() Interactive Guide](https://ishadeed.com/article/css-has-guide)

Ahmad's interactive CSS guides are incredible. [Last month](/top-picks-2024-january/), he published an astonishing piece about better touch targets; this month, he published another deep dive. This time, it is all about CSS `:has()` selector—tons of beautiful and interactive examples to demonstrate the power of this recent addition to the language. It is a must-read for all design enthusiasts.

## [A Practical Introduction to Scroll-Driven Animations with CSS scroll() and view()](https://tympanus.net/codrops/2024/01/17/a-practical-introduction-to-scroll-driven-animations-with-css-scroll-and-view/)

Adam Argyle from Google wrote this incredible primer to scroll-driven animation in pure CSS, from the concise explanation of the core building blocks to the rad-looking carousel. This article is an excellent post for everyone who wants to grasp the basics of one of the best bleeding edge CSS features recently added to the specification.
