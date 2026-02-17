---
title: "Deploy Hugo site to Cloudflare Workers"
summary: "Deploy Hugo site to Cloudflare Workers"
draft: true
---

The Cloudflare team clearly stated that [we should prefer Workers over Pages](https://blog.cloudflare.com/full-stack-development-on-cloudflare-workers/), and this is the one that’s going to get future improvements and optimisations.

> Now that Workers supports both serving static assets and server-side rendering, you should start with Workers. Cloudflare Pages will continue to be supported, but, going forward, all of our investment, optimizations, and feature work will be dedicated to improving Workers.

Back in June when [Cloudflare announced pay per crawl](https://blog.cloudflare.com/introducing-pay-per-crawl/) for AI crawlers, I tried to migrate this very website to them. My site is a Hugo project, and [the only official guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/) for my static site generator is for Cloudflare Pages. Hugo documentation contains a detailed guide [how to host on Cloudflare Workers](https://gohugo.io/host-and-deploy/host-on-cloudflare/), and even though this is the most reliable way that gives you a full control, I would prefer something simpler.

I played around a little, and turns out the Cloudflare Workers runtime comes pre build with `hugo` and `sass` executables, which should be enough to build most of projects. The preinstalled version of hugo may not be the one you want to use, but same as on Cloudflare Pages, you can control it by adding a `HUGO_VERSION` build environment variable. Make sure this is a build, not runtime variable — this mistake wasted a lot of my time in the past 🤦‍♂️
