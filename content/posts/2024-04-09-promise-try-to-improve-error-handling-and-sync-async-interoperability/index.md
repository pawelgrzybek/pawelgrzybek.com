---
title: "Promise.try to improve error handling and sync/async interoperability"
summary: "There are already plenty of solutions in the ecosystem to mix and match synchronous and asynchronous function executions. Also, a common catch clause is handy for handling errors in a single place."
---

A few months ago, I published ["Deferred JavaScript promises using `Promise.withResolvers`"](/deferred-javascript-promises-using-promise-withresolvers/), which explains a modern way of dealing with one of the cumbersome chores as old as the Promises in JavaScript. Following the trend of adding to the specifications features that simplify our programs, today is about the upcoming [`Promise.try`](https://github.com/tc39/proposal-promise-try), which is quickly progressing through the ECMAScript proposals stages.

Assuming we have two functions, one that returns a promise and another one that synchronously returns a value, we can mix and match them like so:

```js
const retSync = () => "sync return";
const retAsync = () => new Promise((r) => r("async return"));

(async () =>
  retAsync()
    .then(console.log)
    .then(retSync)
    .then(console.log)
    .catch(console.error))();

// async return
// sync return
```

Let's flip the order and put a synchronous function first.

```js
// 🚨 this is not going to work

const retSync = () => "sync return";
const retAsync = () => new Promise((r) => r("async return"));

(async () =>
  retSync()
    .then(console.log)
    .then(retAsync)
    .then(console.log)
    .catch(console.error))();

// TypeError: retSync().then is not a function. (In 'retSync().then(console.log)', 'retSync().then' is undefined)
```

We can't do that because the return value of `retSync` is not a thenable promise. We need to wrap a synchronously returning function in a promise.

```js
const retSync = () => "sync return";
const retAsync = () => new Promise((r) => r("async return"));

(async () =>
  Promise.resolve()
    .then(retSync)
    .then(console.log)
    .then(retAsync)
    .then(console.log)
    .catch(console.error))();

// sync return
// async return
```

That works, but we wasted an event-loop cycle. It's doable to solve, though!

```js
const retSync = () => "sync return";
const retAsync = () => new Promise((r) => r("async return"));

(async () =>
  new Promise((resolve) => resolve(retSync()))
    .then(console.log)
    .then(retAsync)
    .then(console.log)
    .catch(console.error))();

// sync return
// async return
```

Finally, but isn't that tiresome? It would be cool to mix and match them without being concerned about whether a thing is synchronous or asynchronous. Also, a common `catch` clause is handy for handling errors in a single place, without writing error handling individually for sync and async executions.

There are plenty of solutions in the ecosystem already: [`p-try` by Sindre Sorhus](https://www.npmjs.com/package/p-try), [Bluebird `Promise.try`/`Promise.attempt`](http://bluebirdjs.com/docs/api/promise.try.html) or [`es6-promise-try`](https://www.npmjs.com/package/es6-promise-try), to name a few. Also, there is a native [`Promise.try`](https://github.com/tc39/proposal-promise-try) progressing through the ECMAScript proposal stages, and I am sure it will be part of a language specification soon.

```js
const retSync = () => "sync return";
const retAsync = () => new Promise((r) => r("async return"));

(async () =>
  Promise.try(retSync)
    .then(console.log)
    .then(retAsync)
    .then(console.log)
    .catch(console.error))();

// sync return
// async return
```


Hopefully, this post helped you to understand the purpose and what kind of problem `Promise.try` is trying to solve. Keep on coding and I will `catch("you")` next time 👋
