---
title: "Top picks — 2018 May"
summary: "Arbitrary-precision integers in JavaScript, GitHub Pages gain support for HTTPS, LinkedIn’s new open source projects take on stylesheet performance, Multi-User access on Cloudflare, the best of Google I/O ’18, Prisma revolution, hard parts of JavaScript explained in simple words and more!"
photo: top-picks.jpg
---

## [BigInt: arbitrary-precision integers in JavaScript](https://developers.google.com/web/updates/2018/05/bigint?utm_source=feed&utm_medium=feed&utm_campaign=updates_feed)

Mathias Bynens from V8 team explained a new primitive in JavaScript — `BigInt`. Like a `Number` but with a arbitrary precision — it means that it can hold a number as big as our architecture can deal with. Really great article that explains the difference between regular `Number` type, shows differences in API and goes through some possible gotchas.

## [Custom domains on GitHub Pages gain support for HTTPS](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/)

GitHub Pages now makes generating SSL certificate via [Let’s Encrypt](https://letsencrypt.org/) a breeze. You can use it with your custom domain or with auto generated one `*.github.io`. CDN that sits on top of that makes a golden duo of Github Pages and Cloudflare not a necessity anymore.

## [CSS at Scale: LinkedIn’s New Open Source Projects Take on Stylesheet Performance](https://engineering.linkedin.com/blog/2018/04/css-at-scale--linkedins-new-open-source-projects-take-on-stylesh)

Team of LinkedIn engineers just announced two new tools for CSS authoring: [CSS Blocks](https://github.com/linkedin/css-blocks) and [OptiCSS](https://github.com/linkedin/opticss). The result is fantastic — the team managed to trim down overall size of stylesheet from 330kb to less than 9kb. Impressive result and I am very interested about the future of those tools. Currently they are both previews — stable version to be released later on this year.

## [Expanding Multi-User Access on dash.cloudflare.com](https://blog.cloudflare.com/expanding-multi-user-access/)

Multiple users under a single Cloudflare account finally arrived. It is just a beginning of a big rebuild and first steps in a migration from Backbone to React. Keep on doing amazing things Cloudflare!

## [Build the future of the web with modern JavaScript (Google I/O ’18)](https://youtu.be/mIWCLOftfRw)

Google I/O is one of the most important events for web professionals — no doubt. This year was no different and I highly encourage you to check [the playlist on Youtube](https://www.youtube.com/playlist?list=PLNYkxOF6rcIC4NQeXpdAy0RbOACI66Hvf) and catch up all the talks that you consider relevant. If you don't have a time and you can spare only a moment — I made your life easier. [Sathya Gunasekaran](https://twitter.com/gsathya) and [Mathias Bynens](https://twitter.com/mathias) in the span of 39 minutes give you a shortcut of all new features that recently has been added to V8 (JavaScript engine that works behind the Google Chrome and Node). Quick, snappy, on point comprehensive list of features that will become your daily routine at some point an a short future.

{{< youtube mIWCLOftfRw >}}

## [Prisma raises $4.5M to build the GraphQL data layer for all databases](https://www.prisma.io/blog/prisma-raises-4-5m-to-build-the-graphql-data-layer-for-all-databases-663484df0f60/)

Designed by Facebook GraphQL in rapid pace replaces other standards for building APIs, allowing developers for requesting only what is needed by simple to understand queries. Prisma is an abstraction layer that sits on top of your current database and allows you to work with it using GraphQL schema. At the moment it works with MySQL only, but recent announcement promises to create a layer that work with all popular database types. This is a really big news for all modern front end and back end developers. Can't wait to see the result of this investment.

## [JavaScript Symbols, Iterators, Generators, Async/Await, and Async Iterators — All Explained Simply](https://medium.freecodecamp.org/some-of-javascripts-most-useful-features-can-be-tricky-let-me-explain-them-4003d7bbed32)

[Raja Rao DV](https://twitter.com/rajaraodv) did a fantastic job by explaining complicated and confusing concepts in very simple and practical way. If you know about ECMAScript `Symbol()` but you cannot find a practical use case for it, if you don't know how to create a custom iterators or generators and mix them with the power of `async` & `await` — this article is for you.
