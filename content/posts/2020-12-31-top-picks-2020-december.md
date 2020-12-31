---
title: "Top picks — 2020 December"
summary: "State of CSS 2020 survey, Extending CSS with Houdini, Cloudflare Pages, React Server Components, AWS Workshops, CSS content-visibility and accessible semantics and more…"
photo: top-picks.jpg
---

## [State of CSS 2020 survey](https://2020.stateofcss.com/)

The results of the annual CSS survey are ready. It is pretty shocking how changeable this territory is over the last decade. It is nice to see a growing number of participants and the rapid adoption of modern CSS features like CSS grid that exploded in 2020. It is nice to see the vast adoption of frameworks like Tailwind. Another realization — I am shocked that only 11.3% of participants test using a screen reader. I would love this proportion to be changed next year, as I recently observed great interest in accessibility. In general, it is full of fascinating insights worth exploring. Thanks for putting this thing together [Sacha Greif](https://twitter.com/sachagreif) and [Raphaël Benitte](https://twitter.com/benitteraphael).

## [Extending CSS with Houdini](https://youtu.be/5eBar5TI71M)

[Una Kravets](https://twitter.com/una) gave this quick intro to CSS Houdini as part of this year Chrome Dev Summit. She pointed the audience out to two helpful resources during the talk: [Is Houdini ready yet‽](https://ishoudinireadyyet.com) and [Houdini.how](https://houdini.how). Thanks for this Una. Nice to see more and more cool Paint API worklets created by the open-source community.

{{< youtube 5eBar5TI71M >}}

## [Cloudflare Pages](https://pages.cloudflare.com)

JAMstack exploded, and a lot of offers from leading hosting providers. Cloudflare just joined the long list of services that support and I cannot be happier about it. [Request your beta access today!](https://www.cloudflare.com/en-gb/pages-jamstack-platform-beta-sign-up/)

## [Announcing one-click install Next.js Build Plugin on Netlify](https://www.netlify.com/blog/2020/12/07/announcing-one-click-install-next.js-build-plugin-on-netlify)

Next.js apps onto Netlify are just a click away from you. Netlify team just announced an official build plugin that enables server-side rendering, incremental static regeneration compatibility, and many more goodies well-known within Next.js ecosystem. If you are not a developer, you can install it using Netlify UI. Tech-savvy users can also append a bit of config to the `netlify.toml`.

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## [Introducing Zero-Bundle-Size React Server Components](https://youtu.be/TQQPAU21ZUw)

[Dan Abramov](https://twitter.com/dan_abramov) and [Lauren Tan](https://twitter.com/sugarpirate_) just shared an initial demo of React Server Components. For the first time, this library's core engineers presented an in-house built solution for server-side rendering (SSR). We have been waiting for it for years. After watching a demo, be nosy and look at the [demo app](https://github.com/reactjs/server-components-demo) built during the presentation. [RFC: React Server Components on GitHub](https://github.com/reactjs/rfcs/pull/188) is open for discussion for people who would like to get involved

{{< youtube TQQPAU21ZUw >}}

## [AWS Workshops](https://workshops.aws)

Hands-on workshops designed by the AWS team. Everything to get started with the AWS tech that you are keen to learn. The list of topics to learn is impressive. This resource is worth bookmarking if you are getting into Amazon Web Services land.

## [Content-visibility and Accessible Semantics](https://marcysutton.com/content-visibility-accessible-semantics)

[Marcy Sutton](https://twitter.com/marcysutton) researched accessibility side-effects of using CSS content-visibility. This property, unfortunately, degrades accessibility in favour of loading performance. To find out more, check out the original article's details, but for lazy ones, that's the key.

> "Based on my testing, I recommend keeping headings and landmark elements outside of regions styled with content-visibility: auto."
