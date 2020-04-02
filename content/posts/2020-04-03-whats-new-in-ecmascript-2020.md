---
title: "What's new in ECMAScript 2020"
description: "The final list of ECMAScript 2020 features is ready. Here's a quick summary with practical examples."
photo: 2020-04-03.jpg
draft: true
---

The list of new features of ECMAScript 2020 is set in stone. Similarly, how I did it in [2016](https://pawelgrzybek.com/whats-new-in-ecmascript-2016-es7/), [2017](https://pawelgrzybek.com/whats-new-in-ecmascript-2017/), [2018](https://pawelgrzybek.com/whats-new-in-ecmascript-2018/) and [2019](https://pawelgrzybek.com/whats-new-in-ecmascript-2019/), let's have a look at what's coming this year and a few practical examples.

## String.prototype.matchAll by Jordan Harband

The `match()` method from `String.prototype` returns only complete matches, but doesn't return any information about particular Regex groups. Thanks to [Jordan Harband](https://twitter.com/ljharb) for the [`String.prototype.matchAll` proposal](https://github.com/tc39/proposal-string-matchall) that returns a lot more info than `match()`. The returned iterator apart from exact match gives us an access to all Regex pattern capture groups. Do you remember [named capture groups by Gorkem Yakin](https://pawelgrzybek.com/whats-new-in-ecmascript-2018/#regexp-named-capture-groups-by-gorkem-yakin-and-daniel-ehrenberg) and Daniel Ehrenberg added to ECMAScript 2018? The `matchAll()` method works really well with it. The example will clarify it.

```js
const text = "From 2019.01.29 to 2019.01.30";
const regexp = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/gu;
const results = text.match(regexp);

console.log(results);
// [ '2019.01.29', '2019.01.30' ]
```

```js
const text = "From 2019.01.29 to 2019.01.30";
const regexp = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/gu;
const results = Array.from(text.matchAll(regexp));

console.log(results);
// [
//   [
//     '2019.01.29',
//     '2019',
//     '01',
//     '29',
//     index: 5,
//     input: 'From 2019.01.29 to 2019.01.30',
//     groups: [Object: null prototype] { year: '2019', month: '01', day: '29' }
//   ],
//   [
//     '2019.01.30',
//     '2019',
//     '01',
//     '30',
//     index: 19,
//     input: 'From 2019.01.29 to 2019.01.30',
//     groups: [Object: null prototype] { year: '2019', month: '01', day: '30' }
//   ]
// ]
```

## import() by Domenic Denicola

In contrast to static modules introduced in ECMAScript 2015, [dynamic imports](https://github.com/tc39/proposal-dynamic-import) proposed by [Domenic Denicola](https://twitter.com/domenic) can be fetched on-demand. This function-like format (it doesn't inherit from `Function.prototype`) returns a promise and it is very powerful. Things like: on-demand import, computed module name and execution inside of a script became possible.

```js
const modulePage = 'page.js';
import(modulePage)
    .then((module) => {
      module.default();
    });
```

```js
(async () => {
  const helpersModule = 'helpers.js';
  const module = await import(helpersModule)
  const total = module.sum(2, 2);
})();
```

## BigInt – arbitrary precision integers by Daniel Ehrenberg

Thanks to [Daniel Ehrenberg](https://twitter.com/littledan) `Number.MAX_SAFE_INTEGER` is no longer a restriction in JavaScript land. [`BigInt` is a new primitive](https://github.com/tc39/proposal-bigint) that can represent integers with arbitrary precision. You can convert a number to new `bigint` type using `BigInt` function or by appending `n` suffix to a numeric value.

```js
Number.MAX_SAFE_INTEGER
// 9007199254740991

Number.MAX_SAFE_INTEGER + 10 -10
// 9007199254740990 👎

BigInt(Number.MAX_SAFE_INTEGER) + 10n -10n
// 9007199254740991n 👍
```

## Promise.allSettled by Jason Williams, Robert Pamely and  Mathias Bynens

Since the ECMAScript ES2015 JavaScript has supported only two promise combinators: `Promise.all()` and `Promise.race()`. Thanks to Jason Williams, Robert Pamely and  [Mathias Bynens](https://twitter.com/mathias) we now have access to [`Promise.allSettled()`](https://github.com/tc39/proposal-promise-allSettled). Use it to handle when all promises are settled regardless of the result (fulfilled or rejected). Look ma, no catch!

```js
Promise.allSettled([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(result => console.log(`All profile settled`));
```

There is a `Promise.any()` potentially joining ECMAScript language soon. I described them all in ["Promise combinators explained"](https://pawelgrzybek.com/promise-combinators-explained/) some time ago.

## globalThis by Jordan Harband

So what is a global `this` in JavaScript? It is a `window` in the browser, `self` in a worker, `global` in Node.js and what else… This mess is over! Thanks to [Jordan Harband](https://twitter.com/ljharb) we now have access to [`globalThis` keyword](https://github.com/tc39/proposal-global).

## for-in mechanics by Kevin Gibbons

ECMAScript left behind a detailed description of for-in loop order. Thanks to [Kevin Gibbons](https://twitter.com/bakkoting) who finally put some [TLC](https://www.urbandictionary.com/define.php?term=TLC) and defined a set in stone [set of rules for for-in mechanics](https://github.com/bakkot/for-in-exploration).

## Optional chaining by Gabriel Isenberg, Claude Pache, Dustin Savery

Long chains of object property accesses can be error-prone and unconformable to read. Thanks to [Gabriel Isenberg](https://twitter.com/the_gisenberg), [Claude Pache](https://github.com/claudepache) and Dustin Savery this thing cannot be simpler now. If you are a TypeScript user you won't find anything new here because this feature has been implemented in [version 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining). Love it!

```js
// before
const title = data && data.article && data.article.title

// after
const title = data?.article?.title
```

## Nullish coalescing Operator by Gabriel Isenberg

[The nullish coalescing proposal](https://github.com/tc39/proposal-nullish-coalescing) adds a new short-circuiting operator to handle default values. [Gabriel Isenberg](https://twitter.com/the_gisenberg) did fantastic work. This feature goes hand in hand with optional chaining. In contrast to `||` operator, nullish coalescing operator `??` evaluating only when left-hand side value is strictly `null` or `undefined`.

```js
"" || "default value"
// default value

"" ?? "default value"
// ""
```

```js
const title = data?.article?.title ?? "What's new in ECMAScript 2020"
```
