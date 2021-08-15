---
title: "Deno, a breath of fresh air for the server-side JavaScript"
summary: "Deno is made by the original creator of Node.js, Ryan Dahl. It is his successor project that aims to fix all regrettable things from the Node.js design. Let me share why I like it so much!"
photo: "2021-08-16.jpg"
---

There is a great reason why [JavaScript is the most used programming language](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages) in the world — easy-to-learn, powerful front-end and back-end technology. I used JavaScript for years on the browser, but since I moved to the server-side, [Node.js](https://nodejs.org/en/) is the technology I use most often. Even though I use other programming languages (recently mainly Go), JavaScript is the one that keeps me excited the most.

![Deno artwork](/photos/2021-08-16-1.jpg)

Speaking of exciting things, I recently tried something new — [Deno](https://deno.land) made by the original creator of Node.js, Ryan Dahl. It is his successor project that aims to fix all [regrettable things from the Node.js](https://youtu.be/M3BM9TB-8yA) design. Let me share with you why I like it so much!

## Just like on the Web

If you are coming from the browser land, Deno will feel familiar to you. ECMAScript modules are fully supported, and it works as it does on the front-end. Most of the methods from the browser are also available in Deno. No need for `npm install node-fetch` because [`fetch`](https://doc.deno.land/builtin/stable#fetch) is already there.

```js
import { format } from "https://cdn.skypack.dev/date-fns";

console.log(format(new Date(2021, 8, 16), "yyyy-MM-dd"));
// 2021-09-16
```

## Secure by default

One of the most significant Node.js flaws is its lack of access control. As long as you can execute a script, you can also read and write to the file system, perform network calls, access environment variables  and whatnot.

Following the good, old least privileged model, Deno is secure by default and gives you granular control over [permissions](https://deno.land/manual@v1.13.0/getting_started/permissions). However, to grant script access to particular features, we need to pass additional flags, like `--allow-env`, `--allow-read` or `--allow-write`, to name a few.

```
deno run --allow-net=api.github.com index.js
```

## Look ma, no package.json file

The `package.json` file was originally designed to store a mapping of dependencies that we can `require()` in the program. Over the years, it became a lot more than that. We use it to store external libraries configuration, licence information, repository links, references to types, and it is not rare to see hundreds of custom scripts there. Deno doesn’t need it — thanks Ryan!

## TypeScript support baked-in

Even though [Ryan Dahl is slightly concerned](https://changelog.com/podcast/443) about adding support to TypeScript out of the box, it is not going to be revoked. It feels like magic to write TS code, execute it without the compilation burden, and keep the performance intact.

```
deno run index.ts
```

I believe that TypeScript is the future of JavaScript, and we will see this superset in the browser at some point. This is my little dream for the future of JS.

## Linter, formatter, documentation generator…

I can’t count how many times I attended a meeting that ended up being an argument about some ESLint rules. This kind of bikeshedding will never happen in Rust or Go community because things like linters and formatters are part of the language. Deno borrowed this excellent idea, so it comes with built-in [linter](https://deno.land/manual@v1.13.0/tools/linter), [formater ](https://deno.land/manual@v1.13.0/tools/formatter), [dependency inspector](https://deno.land/manual@v1.13.0/tools/dependency_inspector) and [other cool tools](https://deno.land/manual@v1.13.0/tools).

## Try Deno!

There are many other reasons why I am so hyped about Deno, but hopefully, the list above is enough to make you try it out. Keep on coding curious geeks 🦖
