---
title: "Top picks — 2022 March"
summary: "TypeScript native support in the AWS SAM, new CSS features in 2022, better writing, Types as Comments in ECMAScript, crazy update for Safari, CSS-Tricks acquired by DigitalOcean, 1Password meet SSH, sick CodeSandbox announcement, Tao of Node.js, Docker course, PM2 guide and more…"
---

## [Announcing TypeScript native support in the AWS Serverless Application Model (AWS SAM) CLI (using esbuild) (public preview)](https://aws.amazon.com/about-aws/whats-new/2022/02/typescript-native-support-aws-serverless-application-model-cli-esbuild-public-preview/)

Using [AWS SAM Framework](https://github.com/aws/aws-sam-cli) with TypeScript became easier because now it is natively supported. However, to understand better how it works, I recommend ["Building TypeScript projects with AWS SAM CLI"](https://aws.amazon.com/blogs/compute/building-typescript-projects-with-aws-sam-cli/) on the AWS blog.

## [New CSS Features In 2022](https://www.smashingmagazine.com/2022/03/new-css-features-2022/)

This article by [Michelle Barker](https://twitter.com/MicheBarks) is a golden summary of all the new things that are coming to CSS in the sightable future. This format divided into sections with a brief explanation and practical examples is incredible for this post. So if things like Container Queries, `:has()`, `@when/@else`, `accent-color`, CSS Color Functions, Cascade Layers, Subgrid, Scroll Timeline or Nesting are new to you, check it out now. Also, the conclusion of this post is just bang-on.

> CSS appears to be reaching a level of maturity where the challenge is no longer whether something can be done in CSS, but rather training and arming a new generation of developers to understand the tools we have at our disposal, know when to reach for them, and how to make user-centered development decisions.

## [What makes writing more readable?](https://pudding.cool/2022/02/plain/)

[Becca Monteleone](https://twitter.com/BeccaMonteleone), [Jamie Brew](https://twitter.com/jamieabrew) and [Michelle McGhee](https://twitter.com/mich_mcghee) created this interactive guide to plain writing. It is easy to follow, clear to understand, and very informative. I love toggling between the version we often see nowadays and the straightforward alternative. This post is also full of references to studies and resources that can deepen your knowledge in good writing. I highly recommend this post to everyone, absolutely everyone!

## [Maarten Van Hoof - Container queries, the next step towards a truly modular CSS](https://youtu.be/A2dMca3WrJE)

CSS Container Queries is the biggest revolution since the introduction of media queries. I expressed my excitement about this feature in ["CSS Container Queries — a revolution for responsive web design"](https://pawelgrzybek.com/css-container-queries-a-revolution-for-responsive-web-design/). This talk by Maarten Van Hoof on YouTube is an excellent introduction to CSS Container Queries. It started with a brief overview of the problem this feature aims to solve, followed by a technical explanation of the implementation.

{{< youtube A2dMca3WrJE >}}

## [ECMAScript proposal: Types as Comments](https://github.com/giltayar/proposal-types-as-comments)

Looking at the TypeScript adoption in the last few years, I expected an ECMAScript proposal to add type annotations sooner or later. It happened to PHP, Ruby and many other dynamically typed languages. It was inevitable. I am glad to see some baby steps in that direction in the JavaScript ecosystem proposed by the Microsoft team. The idea is to add optional types in a form that follows TS types annotation, that during runtime, are treated as comments. One of the most controversial and exciting proposals in the ECMAScript ecosystem in years.

You can find more about the motivation behind this proposal in ["A Proposal For Type Syntax in JavaScript"](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/) by [Daniel Rosenwasser](https://twitter.com/drosenwasser) from the TypeScript core team.

> Reaching Stage 1 would mean that the standards committee believes that supporting type syntax is worth considering for ECMAScript. This isn’t a sure-fire thing – there are many valuable perspectives within the committee, and we do expect some amount of skepticism. A proposal like this will receive a lot of feedback and appropriate scrutiny. It may involve lots design changes along the way, and may take years to yield results. But if we pull this all off, we have the chance to make one of the most impactful improvements to the world of JavaScript. We’re excited by that, and we hope you are too.

## [New WebKit Features in Safari 15.4](https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/)

Safari is NOT new IE, for sure. Just check this out. Native lazy-loading attribute, HTML `dialog` element, CSS `::backdrop` pseudo-element, CSS `:has()` pseudo-class, CSS Cascade Layers, new CSS units (no more `100vh` issue on iOS), `:focus-visible` pseudo-class, `accent-color`, new CSS math functions, `font-palette` CSS property, removing prefixes form new properties, `windows` scroll behaviour, JavaScript `structuredClone()`, improvements to file system API, improvements to Progressive Web Apps, privacy and security improvements. Crazy update!

## [CSS-Tricks is joining DigitalOcean!](https://css-tricks.com/css-tricks-is-joining-digitalocean/)

I probably learned half of what I know about Web development from the CSS-Tricks website. [Chris Coyier](https://twitter.com/chriscoyier) and the rest of the team created a great knowledge base for our industry. From the Flexbox reference that I still use nowadays to obscure little CSS tricks that blow your mind. DigitalOcean has acquired CSS-Tricks! I am not sure what it means for the future of CSS-Tricks, time will tell, but I just wanted to say a massive thank you to Chris and the rest of the crew!

## [SSH and Git, meet 1Password](https://blog.1password.com/1password-ssh-agent/)

Excellent news for all developers using 1Password. Well-thought and user-friendly integration with SSH. Creating and managing SSH keys is now easier, faster, and safer. Configuration takes seconds. I am desperately waiting for the 1Password 8 for macOS (currently in beta). One more thing. [1Password now supports the Open Source community](https://github.com/1Password/1password-teams-open-source) by providing free business accounts.

> In today’s release 1Password can now create new SSH keys, keep them organized, and make them securely available everywhere you need them with just a few clicks. Best of all, each feature was built for developers, by developers, so they fit perfectly in your existing workflows.

## [CodeSandbox Announcement - Meet CodeSandbox Projects](https://youtu.be/XYOjF1dFt4g)

CodeSandbox evolved from a simple playground to a complete dev environment in the browser. CodeSandbox Projects is a revolutionary concept. I am well excited to see such a big move in this space. This video explains clearly all you want to know about CodeSandbox Projects.

{{< youtube XYOjF1dFt4g >}}

## [CSS co-designer about the !important](https://twitter.com/stevenpemberton/status/1505839184287870981)

Next time you are about to use `!important`, think twice. I am proud to say that I have never used it other than for some experiments. Embracing the cascade part of CSS is more than enough.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">CSS co-designer here.<br><br>!important was added for one reason only: laws in the US that require certain text to be in a given font-size. !important stops the cascade from changing it.<br><br>Anything else is probably misuse, and a sign you may not understand the cascade properly.</p>&mdash; Steven Pemberton (@stevenpemberton) <a href="https://twitter.com/stevenpemberton/status/1505839184287870981?ref_src=twsrc%5Etfw">March 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## [Tao of Node - Design, Architecture & Best Practices](https://alexkondov.com/tao-of-node/)

This guide by [Alex Kondov](https://twitter.com/alexanderkondov) is a golden resource for every Node.js developer. Full of best practices that can easily be applied to most projects. Even though Alex favours using Express, most of the techniques in “Tao of Node” are framework agnostic. Alex put a lot of work to write it down. Thank you, Alex!

## [Docker Crash Course Tutorial by The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7)

The author of thousands of programming tutorials on YouTube, Shaun Pelling, created an excellent playlist about Docker. I rarely use this tool, and this series was an excellent refresher for me. You can watch it in an hour and learn enough to get started.

## [How to Deploy, Manage and Scale Node.js Apps with PM2](https://betterstack.com/community/guides/scaling-nodejs/pm2-guide/)

PM2 is the most popular process manager for Node.js. It is simple to use, comes with everything you need to test your application locally, run it on a production, and scale it up and down when needed. This guide created by the Better Stack team is an excellent cheatsheet for PM2.
