---
title: "Avoid parameter drilling by using the Node.js AsyncLocalStorage"
summary: "Parameter drilling or adding a property to the req object is a common solution for sharing context between asynchronous operations. There is a better way though."
photo: "2023-06-26.jpg"
---

Although considered a bad practice, global variables are probably the easiest form of sharing a context. In this example, I define the `context` global variable and use it to share the `uuid` value between the `main` and `logger` functions:

```js {hl_lines=[3,6,12]}
import crypto from "node:crypto";

const context = {};

function logger(msg) {
  console.log(`${context.uuid}: ${msg}`);
}

function main() {
  const uuid = crypto.randomUUID();

  context.uuid = uuid;

  logger("Hey there 👋");
}

main();
// 239252e8-a5de-4243-87ce-87927355bae2: Hey there 👋
```

This approach works OK for synchronous code, but it is problematic when we introduce asynchronous operations. Let me illustrate this issue by adding a `http` server into the mix:

```js  {hl_lines=[6,9,16]}
// 👎 do not blindly copy this code, it is bad example

import crypto from "node:crypto";
import http from "node:http";

const context = {};

function logger(msg) {
  console.log(`${context.uuid}: ${msg}`);
}

http
  .createServer((req, res) => {
    const uuid = crypto.randomUUID();

    context.uuid = uuid;

    // In real-life scenarios, this is the place where you would define some asynchronous operations that take some time to complete.

    logger("Hey there 👋");
    res.end();
  })
  .listen(8080);
```

Every consequent request will update the global context, and the `logger` function will always log the last value of `uuid`, not necessarily the one correlated with the request. Passing the `uuid` as a parameter to the `logger` (parameter drilling) or sticking it to the `req` object are common solutions for this problem. Both of them can quickly become cumbersome, though.

## Node.js AsyncLocalStorage

Available since Node.js 13.10, [the `AsyncLocalStorage` class](https://nodejs.org/api/async_context.html) provides a way to store context-specific data throughout the lifetime of a web request or any other asynchronous operation. It is similar to the [thread-local storage (TLS)](https://en.wikipedia.org/wiki/Thread-local_storage) concept used in different programming languages. Let's take advantage of this API and  rewrite our example:

```js   {hl_lines=[5,7,10,16]}
// 👍 yeah, you can copy this one, it is good

import crypto from "node:crypto";
import http from "node:http";
import { AsyncLocalStorage } from "node:async_hooks";

const context = new AsyncLocalStorage();

function logger(msg) {
  console.log(`${context.getStore()}: ${msg}`);
}

http
  .createServer((req, res) => {
    const uuid = crypto.randomUUID();
    context.run(uuid, () => {

      // In real-life scenarios, this is the place where you would define some asynchronous operations that take some time to complete.

      logger("Hey there 👋");
      res.end();
    });
  })
  .listen(8080);
```

Now, all consequent requests will log the correct `uuid` value without the risk of interfering with each other. Correlation IDs are just one of the many use cases for the `AsyncLocalStorage` API. It can be used for storing the current user, transaction ID, reporting data and whatnot.

Broad uses cases of the Node.js `AsyncLocalStorage` API inspired community members to [propose an Async Context for JavaScript](https://github.com/tc39/proposal-async-context). My fingers are crossed for this proposal to quickly become a part of the ECMAScript standard.

## Thanks to Syntax.fm

[One of the recent episodes of Syntax.fm](https://syntax.fm/show/629/asynclocalstorage-asynccontext-api) inspired me to explore the subject and write this article. Thanks, [Wes](https://wesbos.com) and [Scott](https://tolin.ski), for the great content you are creating!
