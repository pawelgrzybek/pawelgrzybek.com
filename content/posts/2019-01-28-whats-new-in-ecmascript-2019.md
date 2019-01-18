---
title: What's new in ECMAScript 2019
description: The final list of features that are joining the ECMAScript specification this year is ready. Let's sum it up and have a look at some practical examples.
photo: 2019-01-28.jpg
draft: true
---

The Ecma TC39 committee responsible for the ECMAScript specification confirmed a list of features that have reached [stage 4](https://tc39.github.io/process-document/), meaning that they will become a part of ECMAScript 2019. Three years ago I published ["What's new in ECMAScript 2016"](https://pawelgrzybek.com/whats-new-in-ecmascript-2016-es7/), two years ago ["What's new in ECMAScript 2017"](https://pawelgrzybek.com/whats-new-in-ecmascript-2017/) and year later ["What's new in ECMAScript 2018"](https://pawelgrzybek.com/whats-new-in-ecmascript-2018/). It is time to add few more goodies.

## Optional catch binding by Michael Ficarra

You must have used `try...catch` block before.

```js
try {
  // exception is thrown
} catch (error) {
  console.error("My error handler");
}
```

Why if you don’t need to bind the `error` parameter of the catch clause? Now you can skip it. Thanks to [Michael Ficarra](https://twitter.com/smooshMap).

```js
try {
  // exception is thrown
} catch {
  console.error("My error handler");
}
```

- [Optional catch binding proposal](https://github.com/tc39/proposal-optional-catch-binding)

## JSON superset by Richard Gibson, Mark Miller and Mathias Bynens
