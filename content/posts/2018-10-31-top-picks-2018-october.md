---
title: "Top picks — 2018 October"
description: "Welcome to Solid, Create React App 2.0, the state of Houdini API, Adobe Fonts, GitHub Actions, relative time format is coming to JavaScript, React 16.6 released and Hooks announced on React Conf 2018. Very crazy month!"
photo: top-picks.jpg
draft: true
---

## [Welcome to Solid](https://solid.inrupt.com/)

Sir Tim Berners-Lee — the creator of World Wide Web — announced the Solid ecosystem. The motivation and the way it works seems to be well-thought. I still don't understand it thoroughly but it is definitely a thing that is worth to follow.

## [Create React App 2.0: Babel 7, Sass, and More](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)

Years worth of improvements in a single dependency update just announced by React team. New version of React starter kit comes bundled via WebPack 4 and contains things like: Babel 7, Jest 23, Sass and CSS Modules support and tons of under the hood improvements.

## [Modern Web Podcast - Houdini](https://youtu.be/QbHJIybbPLM)

The state of Houdini project with core contributor [Das Surma](https://twitter.com/dassurma). About the Houdini basics, worklets and its API. Everything that you need to know about its current state in a single screencast.

{{< youtube QbHJIybbPLM >}}

## [Typekit is Adobe Fonts](https://theblog.adobe.com/typekit-is-adobe-fonts/)

Seven years ago TypeKit has been acquired by Adobe. Since then product was slowly merging into an Adobe ecosystem and today probably the biggest change happened. It is not a TypeKit anymore — say hello to Adobe Fonts. No more page-views and domain limits. Sounds really cool for all Adobe Creative Cloud owners.

## [GitHub Actions](https://github.com/features/actions)

Back in the days GitHub pages was a killer in terms of free hosting for static websites. Then players like Netlify came around and changed the game drastically by offering more cool features at a very low cost (or for free). Now enter the GitHub Actions. They allow you to stream your workflow by hooking GitHub events to simple but powerful commands created by little snippets of code or via GUI. I cannot wait to play a bit with this feature and possibly publish some primer on this website very shortly. If you wan't to find out more, I can't recommend enough [Introducing GitHub Actions](https://css-tricks.com/introducing-github-actions/) by [Sarah Drasner](https://twitter.com/sarah_edo).

## [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)

[Mathias Bynens](https://twitter.com/mathias) explains a very exciting spec that is slowly joining the Internationalization API — `RelativeTimeFormat`. If you have ever tried to print on your web app a phrase like "yesterday" or "4 weeks ago" you know how hard this is. Moment.js was my way to go for years — it comes with some disadvantages tho — performance. This method is going to be helpful. Great explained by Mathias from V8 team.

## [React v16.6.0: lazy, memo and contextType](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)

New minor upgrade to React came out. The most exciting part of a new release is definitely `React.lazy` and `<Suspense />` that allows developers to implement a lazy loaded chunks with ease. The new `contextType` provides a much better way to work with Context API introduced in 16.3. `React.memo` brings the advantages of `PureComponent` to functional components.

## [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

After quick intro by [Sophie Alpert ](https://twitter.com/sophiebits), [Dan Abramov](https://twitter.com/dan_abramov) presented something incredibly cool on [React Conf 2018](https://conf.reactjs.org/) — [Hooks](https://reactjs.org/docs/hooks-intro.html). It allows developers to supercharge functional components and give them a power of class based components. Adding state via `useState()`, subscribing to a change via `useEffect()` or hooking into a Context API via `useContext()` are not the only things that you can do with it. [Custom Hooks](https://reactjs.org/docs/hooks-custom.html) are the most exciting! [Ryan Florence
](https://twitter.com/ryanflorence) shows the practical use case for hooks in a second part of this presentation. Can't wait to use it in production and I am just waiting for the community to come up with some smart examples. This is still a proposal and despite the fact it is very stable, it may change slightly in a future — find out more about the current state on [RFC (Request for Comments): React Hooks page](https://github.com/reactjs/rfcs/pull/68). If React is your interest — [React Today and Tomorrow and 90% Cleaner React](https://youtu.be/dpw9EHDh2bM) is a must-watch.

{{< youtube dpw9EHDh2bM >}}
