---
title: "I tried Deno — server-side scripting using JavaScript is fun again"
summary: "Deno is made by the original creator of Node.js, Ryan Dahl. It is his successor project that aims to fix all regrettable things from the Node.js design. Let me share why I like it so much!"
photo: "2021-08-16.jpg"
---

There is a great reason why [JavaScript is the most used programming language](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages) — easy-to-learn, powerful front-end and back-end technology. I used JavaScript for years on the browser, but since I moved to the server-side, Node.js is the technology that I use the most. Even though I use other programming languages (recently mainly Go), JavaScript is the one that keeps me excited.

Speaking of exciting things, I recently tried something new — [Deno](https://deno.land) made by the original creator of Node.js, Ryan Dahl. It is his successor project that aims to fix all [regrettable things from the Node.js](https://youtu.be/M3BM9TB-8yA) design. Let me share why I like it so much!

## Just like on the Web

If you are coming from the browser land, transition to server-side using Deno will be even smoother than ever before. ECMAScript modules are fully supported, and it works as it does on the front-end. Most of the methods from the browser are also available in Deno. No need for `npm install node-fetch` because [`fetch`](https://doc.deno.land/builtin/stable#fetch) is already there.

```js
import { add } from "https://x.nest.land/ramda@0.27.0/source/index.js";

console.log(add(1, 2));
```

## Secure by default

One of the most significant Node.js flaws is its lack of access control. As long as you can execute a script, you can also read and write to the file system, perform network calls and whatnot.

Deno is secure by default and gives you a granular controll over [permissions](https://deno.land/manual@v1.13.0/getting_started/permissions). Following the good, old least privileged model, there is no need to provide `deno` access to environment variables and permission to write to a file system if you only need access to `api.github.com` network call.

```
deno run --allow-net=api.github.com index.js
```

## Look ma, no package.json file

The `package.json` file was designed to store mapping of dependencies needed for the project, but it became a mess over the years. It is used to store external libraries configuration, types information, and it is not rare to see hundreds of custom scripts in there. Deno doesn’t need it — a dream come true!

## TypeScript support baked-in

Even though [Ryan Dahl is slight concerned](https://changelog.com/podcast/443) about adding support to TypeScript out of the box, I works really great for me. It feels like magic to execute a file that could never be executed without the compilation step and still keep the performance intact.

```
deno run index.ts
```

## Linter, formatter, documentation generator…

I can’t count how many times I attended a meeting that ended up being an argument about some ESLint rules. This kind of bikeshedding will never happen in Rust or Go community as basic things like linters and formatters are part of the language. Deno borrowed this excellent idea, and we ended up with [linter](https://deno.land/manual@v1.13.0/tools/linter), [formater ](https://deno.land/manual@v1.13.0/tools/formatter), [dependency inspector](https://deno.land/manual@v1.13.0/tools/dependency_inspector) and [other cool tools](https://deno.land/manual@v1.13.0/tools)  built in.

## Fin

There are many other reasons why I am so hyped about Deno, but hopefully, the list above is enough to make you try it out. Keep on coding curious geeks 🦖
