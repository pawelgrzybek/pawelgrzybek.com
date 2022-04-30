---
title: "Top picks — 2022 April"
summary: "Writing JavaScript in a type-safe manner, HTTPS endpoints for AWS Lambdas, a complete guide to CSS Cascade Layers, CSS Parent Selector, great news in new TypeScript release, DuckDuckGo for macOS, Netlify Edge Functions, TypeScript magic with Matt, HTML inert attribute and more…"
photo: top-picks.jpg
---

## [Goodbye \#TypeScript (going back to \#JavaScript)](https://youtu.be/ytWbqnppzyc)

This title is a super clickbaity, but it was released on the 1st of April (April Fool’s Day), and it is about moving from TypeScript to JavaScript. Of course, the title is a joke, but the video is excellent and valuable. [Basarad Ali Syed](https://twitter.com/basarat) gives us a list of good recommendations on how we can write JavaScript in a type-safe manner if, for some reason, using TypeScript is not an option.

{{< youtube ytWbqnppzyc >}}

## [AWS Lambda Function URLs: built-in HTTPS endpoints for your Lambda functions](https://aws.amazon.com/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/)

HTTPS endpoints finally arrived. Not every Lambda needs to be a part of an advanced microservice build using many AWS services. Sometimes we need a simple webhook to trigger a Lambda function. Previously it wasn't an easy task and required a lot of configuration. Creating a new secure endpoint and attaching some CORS configuration is easier than ever with this new feature.

## [A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers/)

The CSS Cascade Layers are the second most exciting thing in modern CSS (Container Queries winning here). This comprehensive guide by [Miriam Suzanne](https://twitter.com/TerribleMia) is insanely detailed and covers everything that you would like to know about this feature. It also helped me to understand how `!important` keyword works.

## [CSS :has( ) A Parent Selector Now](https://matthiasott.com/notes/css-has-a-parent-selector-now)

This article by [Matthias Ott](https://twitter.com/m_ott) is so good. Great explanation of the new `:has()` pseudo-class and many practical examples. After reading this one, I finally understood the whole excitement about this feature.

## [Announcing TypeScript 4.7 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/)

This is the TypeScript release that you should be excited about. Microsoft team worked very hard to add support to ECMAScript modules, and the implementation looks very well-thought. Things like new extensions (`.mts` and `.cts`) map directly to the ECMAScript modules implementation. This announcement reveals a lot of nuances and, of course, goes in-depth about other features released in this cycle.

## [CSS Parent Selector](https://ishadeed.com/article/css-has-parent-selector/)

Another great post about recently popular CSS `:has()` pseudo-class. [Ahmad Shadeed](https://twitter.com/shadeed9) helps us understand the concept of this new feature by translating complicated selectors into plain English. Also, the list of use-cases is impressive. Very nice read!

## [Introducing DuckDuckGo for Mac: A Private, Fast, and Secure Browsing App](https://spreadprivacy.com/introducing-duckduckgo-for-mac/)

This kind of announcement makes me happy. Another big move from the biggest competitor to Google, DuckDuckGo. After great success after releasing the search engine and iOS app, the time for the macOS version of their browser arrived. This product offers ads-free browsing, fast rendering (based on the WebKit engine), password management, and reduced data consumption.

## [Netlify Edge Functions on Deno Deploy](https://deno.com/blog/netlify-edge-functions-on-deno-deploy)

Deno engineers teamed up with my favourite static website hosting, Netlify, to collaboratively re-build Edge Handlers from the clean sheet. Edge Functions run on the Deno Deploy in the background and help with tasks like server-rendered components for modern frameworks, OAuth authentication, geolocation and more! Exciting collaboration! [On the Netlify announcement post](https://www.netlify.com/blog/announcing-serverless-compute-with-edge-functions), you can find a few practical examples in the context of popular frameworks like Astro, Remix etc.

## [Node v18.0.0 (Current)](https://nodejs.org/en/blog/release/v18.0.0/)

Node.js 18 is here, and it comes with a bunch of features that I am excited about. For example, there is no need to use `--experimental-fetch` flag anymore because it is available by default. Also, a native test runner just landed. Experimental Web Streams API, new v8 engine and more!

## [TypeScript tips and Tricks with Matt](https://youtu.be/hBk4nV7q6-w)

Matt Pocock, commonly known as "The Rodney Mullen of TypeScript", shares some helpful TypeScript tricks. I am looking forward to his whole course of advanced TypeScript tips and tricks.

{{< youtube hBk4nV7q6-w >}}

## [Non-interactive Elements with the inert attribute](https://webkit.org/blog/12578/non-interactive-elements-with-the-inert-attribute/)

[Tim Nguyen](https://twitter.com/therealntim) from the WebKit Core team explains the new inert HTML attribute. This feature will vastly simplify optimizing the Web for assistive technologies.
