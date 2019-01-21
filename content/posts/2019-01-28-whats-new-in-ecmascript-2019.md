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

This one is specification update than a new language feature — fully backward compatible though. Although [ECMAScript documentation calls JSON as a subset of `JSON.parse()`](https://tc39.github.io/ecma262/#sec-json.parse), this is not entirely the truth. The fact that JSON can contain unescaped line separator (`U+2028`) and paragraph separator (`U+2029`) and ECMAScript string cannot makes this claim falsity. This may cause occasional bugs, adds unnecessary complexity to specification. This proposal introduces a consistency between JSON and the output of `JSON.parse()`.

- [JSON superset proposal](https://github.com/tc39/proposal-json-superset)

## Symbol.prototype.description

To improve debugging experience a `Symbol` can be created with an optional description. Historically we use to access this description by `Symbol.prototype.toString()` that returns description enclosed inside `Symbol()` string. Using ECMAScript 2019 you can do better.

```js
const foo = Symbol("My super symbol");

console.log(foo.toString()); // Symbol(My super symbol)
console.log(foo.description); // My super symbol
```

- [`Symbol.prototype.description` proposal](https://github.com/tc39/proposal-Symbol-description)

## Function.prototype.toString revision

The implementation of `toString()` has been revised (again) and standardizes the returned "implementation-dependent" string (source code that defines the function implementation). This is an incremental update in already biggish proposal and the rules are well defined in [`Function.prototype.toString` proposal introduction](http://tc39.github.io/Function-prototype-toString-revision/).

```js
function hi(name) {
  retuen`Hi ${name}`;
}

console.log(hi.toString());
// function hi(name) {
//   retuen`Hi ${name}`;
// }
```

```js
console.log(Array.isArray.toString());
// function isArray() { [native code] }
```

- [`Function.prototype.toString` proposal](http://tc39.github.io/Function-prototype-toString-revision/)

## globalThis by Jordan Harband

To access a global object you have to use `window`, `self`, `this`, `frames` or `global` — it all depends of the environment where your application is executed. Thanks to [Jordan Harband](https://twitter.com/ljharb) who proposed to standardized access to a global object using a `globalThis` keyword.

- [`globalThis` proposal](https://github.com/tc39/proposal-global)
