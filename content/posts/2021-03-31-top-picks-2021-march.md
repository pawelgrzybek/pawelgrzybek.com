---
title: "Top picks — 2021 March"
summary: ""
photo: top-picks.jpg
---

## [free-for.dev](https://free-for.dev/)

An extensive list of services for developers that offer free tier put together by [R.I.Pienaar](https://twitter.com/ripienaar). I love little helper pages like this one.

## [Icons - Google Fonts](https://fonts.google.com/icons)

You can download Material Design Icons straight from the Google Fonts website. It is one of the best-designed icons set ever created and since now more accessible than ever before. Thanks, Google!

## [Global Privacy Control (GPC)](https://globalprivacycontrol.org)

Global Privacy Control (GPC) is a proposed specification designed to allow Internet users to notify businesses of their privacy preferences, such as whether they want their personal information to be sold or shared. It helps users signal their desired privacy to websites and services just by using their web browser. Several products come with GPC implementation, and I would expect more to come soon. From an implementation point of view, `Sec-GPC` header is all you need to signal that the user's Global Privacy Control preference is set. Check more details in [GCP specification](https://globalprivacycontrol.github.io/gpc-spec/).

## [Simulating color vision deficiencies in the Blink Renderer](https://youtu.be/34iDTeCNTz4)

[Mathias Bynens](https://twitter.com/mathias) explains all the technical nitty-gritty of the vision deficiencies color simulations. A great explainer of SVG filters and all possible ways how you can take advantage of this feature in your web projects. It is nice that Matthias shows the exact low-level C++ implementation, which I found super interesting.

{{< youtube 34iDTeCNTz4 >}}

## [Introducing Amazon S3 Object Lambda – Use Your Code to Process Data as It Is Being Retrieved from S3](https://aws.amazon.com/blogs/aws/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/)

Beneficial announcement from AWS team — Amazon S Object Lambdas. It allows returning a customized S3 object. No need to store multiple copies of the same master data in a bucket to serve multiple consumers — this is not cost-effective and error-prone. There is no need to create a custom proxy anymore as S3 Object Lambdas give a native, easy to implement, and cost-effective solution.

{{< youtube uTBgpK07E38 >}}

## [https://blogs.windows.com/msedgedev/2021/03/22/better-compatibility-compat2021/](https://blogs.windows.com/msedgedev/2021/03/22/better-compatibility-compat2021/)

Google, Microsoft, Igalia, and other web giants join forces to work through the main incompatibility pain-points: CSS Flexbox, CSS Grid, CSS `position: sticky`, the CSS `aspect-ratio` property, and CSS transforms. ["Compat2021: Eliminating five top compatibility pain points on the web"](https://web.dev/compat2021/) provides more detailed stats why they decided to focus on these features.

> We’re excited to join with Google, Igalia, and the broader web community in committing resources to a cross-browser effort called #Compat2021, with the goal of substantial improvements in each area.
