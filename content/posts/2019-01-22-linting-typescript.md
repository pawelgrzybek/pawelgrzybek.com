---
title: Linting TypeScript
summary: Lint or not to lint? TSLint or ESLint? It is hard to decide what to use to identify potential errors. Let me elaborate why I chose ESLint to help me doing that.
photo: 2019-01-22.jpg
---

When I started using TypeScript some time ago I identified one thing that I am missing from the vanilla JavaScript territory — linting. Having [Prettier](https://prettier.io/) take care of stylistic aspects of my codebase and [ESLint](https://eslint.org/) catching potential errors — that's the way how I tend to live my life. Despite the fact that ESLint can help me with formatting flaws I much prefer using Prettier for it. I consider its restricted configuration options and opinionated rules to be its best features. Support for TypeScript comes out of the box — formatting sorted. To detect potential errors we have a few options in TypeScript ecosystem.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">HELP ‼️<br><br>What people use to lint <a href="https://twitter.com/typescriptlang?ref_src=twsrc%5Etfw">@typescriptlang</a> ? ESLint with some extra parser / plugin? TSLint? You don&#39;t lint it at all?<br><br>Retweet please :-* <a href="https://twitter.com/hashtag/typescript?src=hash&amp;ref_src=twsrc%5Etfw">#typescript</a> <a href="https://twitter.com/hashtag/ts?src=hash&amp;ref_src=twsrc%5Etfw">#ts</a> <a href="https://twitter.com/hashtag/eslint?src=hash&amp;ref_src=twsrc%5Etfw">#eslint</a> <a href="https://twitter.com/hashtag/tslint?src=hash&amp;ref_src=twsrc%5Etfw">#tslint</a></p>&mdash; Paweł Grzybek (@pawelgrzybek) <a href="https://twitter.com/pawelgrzybek/status/1084565668660473863?ref_src=twsrc%5Etfw">January 13, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

You may be wondering why I made one of the poll options "Don't lint at all". Since I started learning TypeScript I was relying on the fantastic code analysis tools that [Visual Studio Code](https://code.visualstudio.com/) has built-in. I kept relying on it until I wanted to add linting as a required step of my build process. The majority of TypeScript developers that I managed to reach prefer using [TSLint](https://palantir.github.io/tslint/) over [ESLint](https://eslint.org/). The recently published [TypeScript Roadmap for January - June 2019](https://github.com/Microsoft/TypeScript/issues/29288) may change this superiority in the near future.

## TypeScript <3 ESLint

After the TypeScript core team shared their plan to invest in ESLint integration, ["The future of TypeScript on ESLint"](https://eslint.org/blog/2019/01/future-typescript-eslint) has been published and the [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) monorepo released. It contains the whole set of tooling which enables ESLint to support TypeScript.

> Once again, we are very excited to welcome the TypeScript community into the ESLint community and look forward to seeing how James and the typescript-eslint team make ESLint the best choice for linting TypeScript code.

Looking for a quick copy / paste `.eslintrc.js` config file for lazy people? I've got your back :-\*

```
yarn add -D eslint @typescript-eslint/parser prettier eslint-plugin-prettier eslint-config-prettier
```

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:prettier/recommended"]
};
```
