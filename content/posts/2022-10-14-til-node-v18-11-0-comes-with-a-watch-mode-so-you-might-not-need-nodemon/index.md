---
title: "TIL — Node v18.11.0 comes with a watch mode, so you might not need nodemon"
summary: "The result of a little Twitter survey done by the Node.js team clearly shows that nodemon is one of the most helpful tools for day-to-day authoring experience. You might not need it anymore."
---

The result of [a little Twitter survey done by the Node.js team](https://twitter.com/nodejs/status/1446839365087412225?s=21) clearly shows that [nodemon](https://github.com/remy/nodemon) is one of the most helpful tools for day-to-day authoring experience. They did listen — just released version of Node.js v18.11.0 comes with a watch mode. Nice!

You can enable that using [`--watch`](https://nodejs.org/dist/latest-v18.x/docs/api/cli.html#--watch) flag to watch the entry point and any imported module. To be more granular, [`--watch-path`](https://nodejs.org/dist/latest-v18.x/docs/api/cli.html#--watch-path) allows you to specify a particular directory that should react to changes. These flags cannot be combined with `--check`, `--eval`, `--interactive` or when used in REPL (read–eval–print loop) mode.

```
node --watch server.js
```

```
node --watch-path=./src --watch-path=./tests server.js
```

At this point, I would like to thank [Remy Sharp](https://remysharp.com), the creator and maintainer of [nodemon](https://github.com/remy/nodemon). For years it has been my go-to helper tool to achieve what I described in this article (and a lot more). You might not need nodemon anymore, though — sorry, Remy 😙
