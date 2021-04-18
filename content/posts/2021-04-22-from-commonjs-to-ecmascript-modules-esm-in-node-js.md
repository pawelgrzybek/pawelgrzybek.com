---
title: "From CommonJS to ECMAScript modules (ESM) in Node.js"
summary: ""
photo: "2021-04-22.jpg"
---

One of the most revolutionary features introduced as part of ECMAScript 2015 specification is modules (ESM). The first browser implementation landed on April 2017 in Safari 10.1. I published a ["Native ECMAScript modules in the browser"](https://pawelgrzybek.com/native-ecmascript-modules-in-the-browser/) about this historical moment. A few months later, in September 2017, [Node v8.5.0](https://nodejs.org/en/blog/release/v8.5.0/) landed with experimental support for ESM.

This feature went through lots of iterations during its experimental phase, and no one adopted it on day one. A few years later, in April 2020, [Node v14.0.0](https://nodejs.org/en/blog/release/v14.0.0/) landed without experimental modules warning. Even though it was still experimental, that was the point in time when I adopted ESM for some toy projects and insignificant clients' work. Eventually, [Node v15.3.0](https://nodejs.org/en/blog/release/v15.3.0/) arrived and marked modules implementation as stable.

That's enough of history, lets get our hands dirty and dive into the ECMAScrpit modules in Node.js. I am going to split this article into few sections.

- [Enabling ECMAScript modules (ESM) in Node.js](#enabling-ecmascript-modules-esm-in-nodejs)
- [Syntax](#syntax)
- [Strict by default](#strict-by-default)
- [Browser compatibility](#browser-compatibility)
- [ESM is missing some references ](#esm-is-missing-some-references)
- [Behavior of this keyword](#behavior-of-this-keyword)

## Enabling ECMAScript modules (ESM) in Node.js

To preserve backward compatibility Node.js treats JavaScript code as CommonJS modules by default. To enable ESM we have three options.

- use `.mjs` extension
- add `"type": "module"` to `package.json` file
- use `--input-type=module` flag for STDIN or strings passed to `--eval` argument

## Syntax

ECMAScript module come with a new syntax. Have a look at the example written in CommonJS and equivalent using ESM.

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

There is a lot more to explore in terms of syntax, but I will leave that to you as the Node.js closely conforms to official [ESCMAScript modules](https://tc39.es/ecma262/#sec-modules) syntax. Please pay attention to the file extension (`.js` or `.mjs`) that is needed to correctly resolve relative or absolute specifiers. This rule also applies to directory indexes in contrast to CommonJS (e.g. `./routes/index.js`).

## Strict by default

There is no need for `use strict` on the very top of your program to prevent runtime to run in [sloppy mode](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode). ECMAScript modules run in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) by default.

## Browser compatibility

Because ESM implementation in Node.js and the browser conforms to the same specification, we are able to share code between server and client runtime. In my opinion unified syntax is one of the most important reasons to embrace ESM today.

```html
<srcipt type="module" src="./index.js"> </srcipt>
```

["Get Ready For ESM"](https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77) by [Sindre Sorhus](https://twitter.com/sindresorhus) goes in depth about other benefits of unified syntax and encourages package creators to make a move to ESM. Can't agree more with this amazing dude!

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

As we discussed above, using ESM we don't need access to `exports` and `module` anymore. Rest of the references that are missing, we can very easily recreate.

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

It is worth to mention that the behavior of `this` keyword differs in global scope. In ESM `this` is undefined where in CommonJS `this` keyword points to `exports`. Worth to remember about this subtle difference.

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
