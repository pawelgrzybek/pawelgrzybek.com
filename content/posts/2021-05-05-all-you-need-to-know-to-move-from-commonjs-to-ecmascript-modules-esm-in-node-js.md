---
title: "All you need to know to move from CommonJS to ECMAScript Modules (ESM) in Node.js"
summary: "One of the most revolutionary features introduced as part of ECMAScript 2015 specification is modules (ESM). In April 2020, Node v14.0.0 landed without experimental modules warning. Even though it was still experimental, it felt like the right timing to adopt ESM for some toy projects and insignificant clients' work. Eventually, Node v15.3.0 arrived and marked modules implementation as stable."
photo: "2021-05-05.jpg"
---

One of the most revolutionary features introduced as part of ECMAScript 2015 specification is modules (ESM). The first browser implementation landed in April 2017 in Safari 10.1. I published a ["Native ECMAScript modules in the browser"](https://pawelgrzybek.com/native-ecmascript-modules-in-the-browser/) about this historical moment. A few months later, in September 2017, [Node v8.5.0](https://nodejs.org/en/blog/release/v8.5.0/) landed with experimental support for ESM.

This feature went through lots of iterations during its experimental phase, and no one adopted it on day one. A few years later, in April 2020, [Node v14.0.0](https://nodejs.org/en/blog/release/v14.0.0/) landed without experimental modules warning. Even though it was still experimental, it felt like the right timing to adopt ESM for some toy projects and insignificant clients' work. Eventually, [Node v15.3.0](https://nodejs.org/en/blog/release/v15.3.0/) arrived and marked modules implementation as stable.

That's enough of history, so let's get our hands dirty and dive into the ECMAScript modules in Node.js. We have a lot to cover, so let's jump into it!

- [Enabling ECMAScript modules (ESM) in Node.js](#enabling-ecmascript-modules-esm-in-nodejs)
- [Syntax](#syntax)
- [Strict by default](#strict-by-default)
- [Browser compatibility](#browser-compatibility)
- [ESM is missing some references ](#esm-is-missing-some-references)
- [Behavior of this keyword](#behavior-of-this-keyword)
- [From dynamically parsed CommonJS to statically parsed ESM](#from-dynamically-parsed-commonjs-to-statically-parsed-esm)
- [ESM with top-level await support](#esm-with-top-level-await-support)

## Enabling ECMAScript modules (ESM) in Node.js

To preserve backward compatibility, Node.js treats JavaScript code as CommonJS modules by default. To enable ESM, we have three options.

- use `.mjs` extension
- add `"type": "module"` to `package.json` file
- use `--input-type=module` flag for STDIN or strings passed to `--eval` argument

## Syntax

ECMAScript module introduced a new syntax. Have a look at the example written in CommonJS and equivalent using ESM.

```js
// util.js
module.exports.logger = (msg) => console.log(`👌 ${msg}`);

// index.js
const { logger } = require("./util");

logger("CommonJS");
// 👌 CommonJS
```

```js
// util.js
const logger = (msg) => console.log(`👌 ${msg}`);

export { logger };

// index.js
import { logger } from "./util.js";

logger("ECMAScript modules");
// 👌 ECMAScript modules
```

There is a lot more to explore in terms of syntax, but I will leave that to you as the Node.js closely conforms to official [ESCMAScript modules](https://tc39.es/ecma262/#sec-modules) syntax. Please pay attention to the file extension (`.js` or `.mjs`) needed to correctly resolve relative or absolute specifiers. This rule also applies to directory indexes compared to CommonJS (e.g. ./routes/index.js).

## Strict by default

There is no need for `use strict` on the top of your program to prevent the runtime from running in [sloppy mode](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode). ECMAScript modules run in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) by default.

## Browser compatibility

Because ESM implementation in Node.js and the browser conforms to the exact specification, we can share code between server and client runtime. In my opinion, the unified syntax is one of the most important reasons to embrace ESM today.

```html
<srcipt type="module" src="./index.js"> </srcipt>
```

["Get Ready For ESM"](https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77) by [Sindre Sorhus](https://twitter.com/sindresorhus) goes in-depth about other benefits of unified syntax and encourages package creators to make a move to ESM. I can't agree more with this fantastic dude!

## ESM is missing some references

ECMAScript modules enabled runtime is missing some commonly used in CommonJS references, like so:

- `exports`
- `module`
- `__filename`
- `__dirbane`
- `require`

```js
console.log(exports);
// ReferenceError: exports is not defined

console.log(module);
// ReferenceError: module is not defined

console.log(__filename);
// ReferenceError: __filename is not defined

console.log(__dirbane);
// ReferenceError: __dirbane is not defined

console.log(require);
// ReferenceError: require is not defined
```

As we discussed above, using ESM, we don't need access to `exports` and `module` anymore. We can recreate the remaining references that are missing.

```js
// Recreate missing reference to __filename and __dirname
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);
console.log(__filename);
```

```js
// Recreate missing reference to require
import { createRequire } from "module";

const require = createRequire(import.meta.url);
```

## Behavior of this keyword

It is worth mentioning that the behaviour of `this` keyword differs in the global scope. In ESM, `this` is undefined, however in CommonJS, `this` keyword points to `exports`. Worth remembering about this subtle difference.

```js
// this keyword in ESM
console.log(this);
// undefined
```

```js
// this keyword in CommonJS
console.log(this === module.exports);
// true
```

## From dynamically parsed CommonJS to statically parsed ESM

CommonJS modules are parsed dynamically during the execution phase. This functionality allows calling the `require` function inside the block (i.e. inside `if` statement) as the dependency graph is explored during the program execution.

ECMAScript modules are much more sophisticated — before running, the interpreter will build a dependency graph and then execute the program. Predefined dependencies graph before the execution allows the engine to perform optimizations such a tree shaking (dead code elimination) and more.

## ESM with top-level await support

Node.js in version 14 enabled support for top-level `await`. This changes dependency graph rules a little and makes a module act like a big `async` function. Example time!

```js
import { promises as fs } from "fs";

// Look ma, no async function wrapper!
console.log(JSON.parse(await fs.readFile("./package.json")).type);
// module
```

## Importing JSON

Importing JSON is a frequently used feature in CommonJS. Unfortunately, doing that using ESM will throw an error. As per the recommendation in ["ESM is missing some references" section of this article](#esm-is-missing-some-references), we can overcome this limitation by recreating `require` function.

```js
import data from "./data.json";
// TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".json"
```

```js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./data.json");

console.log(data);
// Works
```

## The best time to embrace ESM is now

I hope this article helped you out to understand the differences between CommonJS and ECMAScript modules in Node.js. I am looking forward to the age where we won't have to care about these differences anymore. The whole ecosystem will work according to the ECMAScript specification regardless of the runtime (either client or server). If you haven't already, I would highly recommend you jump on the ESM camp now and contribute to the consistent and unified JavaScript ecosystem.

I enjoyed writing it down for you! If you found it helpful, "hit that like button and don't forget to subscribe…". Nah, I'm just joking. Sharing with your friend means the world to me. Thanks, and until next time, stay curious 👋
