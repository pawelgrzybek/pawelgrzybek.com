---
title: "Baseline status of a web platform feature on a Hugo website"
summary: ""
---

An article about a web platform feature feels incomplete without a browser support info. [The CanIUse Embed](https://caniuse.bitsofco.de) built by [Ire Aderinokun](https://bitsofco.de) is widely used amongst web bloggers. Recently, [Rachel Andrew](https://rachelandrew.co.uk) from Google announced [an official web component to display the Baseline status](https://web.dev/blog/show-baseline-status).

Both of them fetch the results from external resources at runtime. To keep my website trully static, I would prefer to pre-build results at the build time. [Stefan Judis](https://www.stefanjudis.com/blog/browser-support-baseline-web-component/) uses a custom solution that takes results from the [browser-compat-data](https://github.com/mdn/browser-compat-data) and wraps it in a beautiful section at the build stage. [Chris Swithinbank](https://www.chrisswithinbank.net) took an official Google's `<baseline-status>` and converted it into [an Astro component](https://astro-embed.netlify.app/components/baseline-status/) to avoid client-side JavaScript.

I write a ton about the web on this blog, so I finally built a solution for my static website built using [Hugo](https://gohugo.io). Let me share a recipe with you.

## Hugo shortcode to display the Baseline status

For the sake of simplicity, I chose the [Web Platform Status API](https://webstatus.dev) as the source of data. As [Mathias Bynens](https://mathiasbynens.be) noticed, it is [not very well documented](https://github.com/GoogleChrome/webstatus.dev/issues/280), but it exists and it is open for the public use. It returns a lot more consise set of data than the browser-compat-data, but most importantly, it contains [the Baseline](https://web-platform-dx.github.io/web-features/) status. I'm a huge fan of the Baseline as it is an easily-glanceable hint for a developer if a thing can be used or not.

Hugo shortcode

Hugo caching

{{< baseline feature="array-from" >}}

{{< baseline feature="backdrop-filter" >}}

{{< baseline feature="web-midi" >}}
