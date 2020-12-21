---
title: "Top picks — 2020 December"
summary: "State of CSS 2020 survey, Extending CSS with Houdini, Cloudflare Pages, React Server Components"
photo: top-picks.jpg
draft: true
---

## [State of CSS 2020 survey](https://2020.stateofcss.com/)

The results of the annual CSS survey are ready. It is pretty shocking how changeable this territory is over the last decade. It is nice to see a growing number of participants and the rapid adoption of modern CSS features like CSS grid that exploded in 2020. It is nice to see the vast adoption of frameworks like Tailwind. Another realization — I am shocked that only 11.3% of participants test using a screen reader. I would love this proportion to be changed next year as I observe a great interest in accessibility recently. In general, it is full of fascinating insights worth exploring. Thanks for putting this thing together [Sacha Greif](https://twitter.com/sachagreif) and [Raphaël Benitte](https://twitter.com/benitteraphael).

## [Extending CSS with Houdini](https://youtu.be/5eBar5TI71M)

[Una Kravets](https://twitter.com/una) gave this quick intro to CSS Houdini as part of this year Chrome Dev Summit. During talk, she pointed the audience out to two helpful resources: [Is Houdini ready yet‽](https://ishoudinireadyyet.com) and [Houdini.how](https://houdini.how). Thanks for this Una. Nice to see more and more cool Paint API worklets created by the open-source community.

{{< youtube 5eBar5TI71M >}}

## [Cloudflare Pages](https://pages.cloudflare.com)

JAMstack exploded, and a lot of offers from leading hosting providers. Cloudflare just joined the long list of services that support and I cannot be happier about it. [Request your beta access today!](https://www.cloudflare.com/en-gb/pages-jamstack-platform-beta-sign-up/)

## [Announcing one-click install Next.js Build Plugin on Netlify](https://www.netlify.com/blog/2020/12/07/announcing-one-click-install-next.js-build-plugin-on-netlify)

Next.js apps onto Netlify are just a click away from you. Netlify team just announced an official build plugin that enables server-side rendering, incremental static regeneration compatibility and a lot more goodies well-known within Next.js ecosystem. If you are not a developer, you can install it using Netlify UI. Tech-savvy users can also append a bit of config to the `netlify.toml`.

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## [Introducing Zero-Bundle-Size React Server Components](https://youtu.be/TQQPAU21ZUw)

[Dan Abramov](https://twitter.com/dan_abramov) and [Lauren Tan](https://twitter.com/sugarpirate_) just shared initial demo of React Server Components. This is a first time the core engineers of this library presented an in-house built solution for server-side rendering (SSR). We have been waiting for it for years. After watching a demo, be nosy and have a look at the [demo app](https://github.com/reactjs/server-components-demo) built during the presentation. For people who would like to get involved, [RFC: React Server Components on GitHub](https://github.com/reactjs/rfcs/pull/188) is open for discussion.

{{< youtube TQQPAU21ZUw >}}
