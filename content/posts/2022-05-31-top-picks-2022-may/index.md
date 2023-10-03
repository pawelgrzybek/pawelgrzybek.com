---
title: "Top picks — 2022 May"
summary: "Some macOS ticks and tips, Web-interoperable Runtimes Community Group, Google team present new features for the Web Platform, Roboto Flex font announced, AWS powered by Node.js 16, useEvent hook in React, Next.js and Layouts proposal, Design Patterns and more!"
photo: top-picks.jpg
---

## [Moving a macOS window by clicking anywhere on it (like on Linux)](https://mmazzarolo.com/blog/2022-04-16-drag-window-by-clicking-anywhere-on-macos/)

The macOS is full of hidden gems that are configurable only via CLI (hidden from the System preferences UI). For example, this command enables moving an app by holding <kbd>Cmd + Ctrl</kbd> and dragging the window. Not a new thing for die-hard Linux users. Thank you for sharing [Matteo](https://twitter.com/mazzarolomatteo).

## [A Community Group for Web-interoperable JavaScript runtimes](https://blog.cloudflare.com/introducing-the-wintercg/)

This article on the Cloudflare blog introduces [Web-interoperable Runtimes Community Group (WinterCG)](https://wintercg.org), a new community group focused on improving the interoperability of web platform APIs across runtimes (especially non-browser ones). Something like W3C but for other runtimes. A significant announcement and I hope that job of developers targeting Node.js, Deno and Cloudflare Workers will become easier.

## [What's new for the web platform](https://youtu.be/5b4YcLB4DVI)

This is one of these presentations that I wait for every year. [Una](https://twitter.com/Una) and [Jake](https://twitter.com/jaffathecake) from the Google Web Platform team presented several new features coming to the Web. I know some of them and even use them in production with an appropriate fallback, but a few are new to me. The new COLRv1 font format combined with the new CSS `size-adjust` is a powerful method to display and control web fonts. ITNP (interaction to next paint) is a new metric that the Google team is experimenting with, and in my opinion, it is much more valuable than the time to the first interaction.

{{< youtube 5b4YcLB4DVI >}}

## [Roboto … But Make It Flex](https://material.io/blog/roboto-flex)

Roboto, the default font used on Android and probably the most popular font ever, got a significant update. Roboto goes flex, which means that there is finally a variable version of this font face. It gives users crazy 12 axes to play with and adjust to their taste. Roboto Flex is probably the most configurable font that I have ever seen. If you are too lazy to read the whole blog post, at least check this promo video. It is sick!

{{< youtube f3IQSmKFokU >}}

## [Node.js 16.x runtime now available in AWS Lambda](https://aws.amazon.com/blogs/compute/node-js-16-x-runtime-now-available-in-aws-lambda/)

It finally landed. Node.js 16 runtime support for AWS Lambdas is here. New ECMAScript features are just a partial reason why you should be excited. For example, combining [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html) with top-level await can give you a significant performance boost.

## [What the useEvent React hook is (and isn't)](https://typeofnan.dev/what-the-useevent-react-hook-is-and-isnt/)

A few days ago, [Dan Abramov](https://twitter.com/dan_abramov) published a [proposal for the new useEvent() hook](https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md). This feature can reduce re-renders of React components. Dan provides several good examples in his document. The article that I am recommending today is a very brief explanation of the new feature and the problem it is trying to solve by [Nick Scialli](https://twitter.com/nas5w) from SolidJS core team.

## [Layouts RFC](https://nextjs.org/blog/layouts-rfc)

The Next.js team dropped a big announcement. New Layouts API is the revolutionary way pages can reuse layouts. By doing this change, we can benefit from all the advantages of Server Renderered Components recently added to the React.js. In addition, this proposed API is so elegant and doesn't require a lot to change the mental model compared to the "old" way of working with routes in Next.js.

## [Patterns.dev - Modern Web App Design Patterns](https://www.patterns.dev)

This project created by [Lydia Hallie](https://twitter.com/lydiahallie) and [Addy Osmani](https://twitter.com/addyosmani) is a collection of design patterns software engineers use with a strong focus on the Web and React. Everything is nicely described and categorised into three main groups: Design Patterns, Rendering Patterns and Performance Patterns. I am a big fan of this project! Lydia does fantastic work for Vercel, and Addy’s explanations of design patterns are good. I still go back to his book about the same subject he published about a decade ago.
