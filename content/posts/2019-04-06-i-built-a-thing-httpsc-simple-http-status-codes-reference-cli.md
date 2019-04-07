---
title: I built a thing — httpsc (Simple HTTP status codes reference CLI)
description: How often do you visit a Wikipedia for a definition of a HTTP status code? I don't know about you but it happens to me at least once a week. To make it a bit easier I created a httpsc.
photo: 2019-04-06.jpg
---

How often do you visit a Wikipedia for a definition of a HTTP status code? I don't know about you but it happens to me at least once a week. To make it a bit easier I created a [httpsc — simple HTTP status codes reference CLI](https://www.npmjs.com/package/httpsc).

![Screenshot of httpsc CLI](/photos/2019-04-06-1.jpg)

## httpsc CLI

The `httpsc` is built using [Node.js](https://nodejs.org) — presumably majority of my readers already have it installed but if not, give ["Install Node.js — installer vs. Homebrew vs. NVM"](https://pawelgrzybek.com/install-nodejs-installer-vs-homebrew-vs-nvm/) a quick read. Prerequisites out of the way, lets get into the CLI.

- `npx httpsc` to get the whole reference
- `npx httpsc 4` to get a short info about all `4xx` codes
- `npx httpsc 40` to get a short info about all `40x` codes
- `npx httpsc 404` to get a detailed info about `404` code

## httpsc Node.js API

Do you wan't to use this info on your project? Here you go.

```
yarn add httpsc
```

```js
import httpsc, { getCode } from "httpsc";
```

- `httpsc` to get the whole reference
- `getCode()` to get the info about particular status code (i.e. `getCode(404)`)

Enjoy :*
