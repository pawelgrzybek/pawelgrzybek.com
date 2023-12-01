---
title: "I replaced npm, yarn and nvm with pnpm"
summary: "It stands for a “performant npm”, which is not a stretch because it is much faster than any other package manager I used. Besides that, it has many great features."
---

 I used to use `npm` as my package manager because [I like defaults](/my-defaults-2023/). I need to switch versions of Node.js quite often, so I used to use `nvm`. When using that setup, packages globally installed via `npm` are bound to the version of Node.js, so to avoid installing the same package many times for every Node.js version, I used to use `yarn` for global modules. Sounds like a mess, right? I found a better way!

I replaced `npm`, `yarn` and `npm` with `pnpm`. It stands for a "performant npm", which is not a stretch because it is much faster than any other package manager I used. Besides that, it has many great features like workspace support, patching dependencies, managing runtime versions, peer installation and tons more! Look at the few examples of commands from my old workflow and how I mapped them to a new one.

- From `npm install` to `pnpm install`
- From `npm install eslint` to `pnpm add eslint`
- From `yarn global add eslint` to `pnpm add --global eslint`
- From `nvm install lts` to `pnpm env install --global lts`
- From `nvm use lts` to `pnpm env use --global lts`

Thank [Zoltan](https://www.kochan.io) for [pnpm](https://pnpm.io)!
