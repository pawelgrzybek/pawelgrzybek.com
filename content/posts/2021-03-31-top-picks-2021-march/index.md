---
title: "Top picks — 2021 March"
summary: "A bunch of free resources for developers, Material Design Icons on Google Fonts, Global Privacy Control, color vision deficiencies in the Blink renderer, Amazon S3 Object Lambda, better browser compatibility in 2021, Deno Company, Practical Go Lessons and CSS Container Queries. Enjoy!"
---

## [free-for.dev](https://free-for.dev/)

This resource is an extensive list of services for developers that offer a free tier. [R.I.Pienaar](https://twitter.com/ripienaar) puts it together. I love little helper pages like this one.

## [Icons - Google Fonts](https://fonts.google.com/icons)

You can download Material Design Icons straight from the Google Fonts website. It is one of the best-designed icons set ever created and since now more accessible than ever before. Thanks, Google!

## [Global Privacy Control (GPC)](https://globalprivacycontrol.org)

Global Privacy Control (GPC) is a proposed specification designed to allow Internet users to notify businesses of their privacy preferences, such as whether they want their personal information to be sold or shared. It helps users signal their desired privacy to websites and services just by using their web browser. Several products come with GPC implementation, and I would expect more to come soon. From an implementation point of view, `Sec-GPC` header is all you need to signal that the user's Global Privacy Control preference is set. Check more details in [GCP specification](https://globalprivacycontrol.github.io/gpc-spec/).

## [Simulating color vision deficiencies in the Blink Renderer](https://youtu.be/34iDTeCNTz4)

[Mathias Bynens](https://twitter.com/mathias) explains all the technical nitty-gritty of the vision deficiencies colour simulations. A great explainer of SVG filters and all possible ways how you can take advantage of this feature in your web projects. It is nice that Matthias shows the exact low-level C++ implementation, which I found super interesting.

{{< youtube 34iDTeCNTz4 >}}

## [Introducing Amazon S3 Object Lambda – Use Your Code to Process Data as It Is Being Retrieved from S3](https://aws.amazon.com/blogs/aws/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/)

Beneficial announcement from AWS team — Amazon S Object Lambdas. It allows returning a customized S3 object. There is no need to store multiple copies of the same master data in a bucket to serve numerous consumers — this is not cost-effective and error-prone. There is no need to create a custom proxy anymore as S3 Object Lambdas give a native, easy to implement, and cost-effective solution.

{{< youtube uTBgpK07E38 >}}

## [Joining forces on better browser compatibility in 2021](https://blogs.windows.com/msedgedev/2021/03/22/better-compatibility-compat2021/)

Google, Microsoft, Igalia, and other web giants join forces to work through the main CSS incompatibility pain-points: CSS Flexbox, CSS Grid, CSS `position: sticky`, the CSS `aspect-ratio` property, and CSS transforms. ["Compat2021: Eliminating five top compatibility pain points on the web"](https://web.dev/compat2021/) provides more detailed stats on why they decided to focus on these features.

> We're excited to join with Google, Igalia, and the broader web community in committing resources to a cross-browser effort called #Compat2021, with the goal of substantial improvements in each area.

## [Announcing the Deno Company](https://deno.com/blog/the-deno-company)

With 4.9 million dollars of seed capital from multiple investors, Deno becomes a real company. I am looking forward to the future of this platform. It can't go wrong after the success of Node.js being build by the same people.

> This investment means we will have a staff of full-time expert engineers working to improving Deno. We will ensure that issues are addressed, bugs are fixed, timely releases are made; we will ensure Deno is a platform others can build on with trust.

## [Practical Go Lessons](https://www.practical-go-lessons.com)

This free book by [Maximilien Andile](https://twitter.com/MaximilienAld) is a golden gem for everyone keen to learn Go language. You can read it online for free, order a digital copy or purchase paper copy. This resource goes in depth into computer science core constructs first and then explains how to work with them using Go language. Really great resource!

## [CSS Container Queries: A First Look + Demo](https://www.bram.us/2021/03/28/css-container-queries-a-first-look-and-demo/)

This is going to be a revolution for CSS responsive components. We have been waiting for container queries for long years now and we finally can play around with its experimental implementation in Google Chrome. [Bramus Van Damme](https://twitter.com/bramus/) put together a quick explainer and simple demo. Finally!
