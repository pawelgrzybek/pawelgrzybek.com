---
title: What's new in ECMAScript 2020
description: The final list of features that are joining the ECMAScript specification this year is ready. Here's a quick summary and look at some practical examples.
photo: 2020-02-01.jpg
draft: true
---

It is this time of year when the list of new ECMAScript features is set in stone. In a similar fashion how I did it in [2016](https://pawelgrzybek.com/whats-new-in-ecmascript-2016-es7/), [2017](https://pawelgrzybek.com/whats-new-in-ecmascript-2017/), [2018](https://pawelgrzybek.com/whats-new-in-ecmascript-2018/) and [2019](https://pawelgrzybek.com/whats-new-in-ecmascript-2019/), let's have a look at new features coming to the language in 2020.

## String.prototype.matchAll by Jordan Harband

When regular expressions pattern contains multiple capturing groups, we often want an access to all of them when we compare a string against it. The `match()` method from `String.prototype` isn't helpful as it returns only complete regular expression matches. Thanks to [Jordan Harband](https://twitter.com/ljharb) for the [`String.prototype.matchAll` proposal](https://github.com/tc39/proposal-string-matchall) that returns iterator that contains an exact match with companion of all the groups. Do you remember [named capture groups by Gorkem Yakin](https://pawelgrzybek.com/whats-new-in-ecmascript-2018/#regexp-named-capture-groups-by-gorkem-yakin-and-daniel-ehrenberg) and Daniel Ehrenberg added to ECMAScript 2018? The `matchAll()` method works really well with it.

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

- https://github.com/tc39/proposal-dynamic-import

## BigInt – arbitrary precision integers by Daniel Ehrenberg

- https://github.com/tc39/proposal-bigint

## Promise.allSettled by Jason Williams, Robert Pamely and  Mathias Bynens

- https://github.com/tc39/proposal-promise-allSettled

## globalThis by Jordan Harband

- https://github.com/tc39/proposal-global

## for-in mechanics by Kevin Gibbons

- https://github.com/bakkot/for-in-exploration

## Optional chaining by Gabriel Isenberg, Claude Pache, Dustin Savery

- https://github.com/tc39/proposal-optional-chaining

## Nullish coalescing Operator by Gabriel Isenberg

- https://github.com/tc39/proposal-nullish-coalescing

- - -

## Legacy RegExp features in JavaScript by Claude Pache

- https://github.com/tc39/proposal-regexp-legacy-features

## import.meta by Domenic Denicola

- https://github.com/tc39/proposal-import-meta

## Private methods and getter/setters for JavaScript classes by Daniel Ehrenberg

- https://github.com/tc39/proposal-private-methods

## Class field declarations for JavaScript by Daniel Ehrenberg and Jeff Morrison

- https://github.com/tc39/proposal-class-fields

## Static class features by Shu-yu Guo, Daniel Ehrenberg

- http://github.com/tc39/proposal-static-class-features/

## Hashbang grammar by Bradley Farias

- https://github.com/tc39/proposal-hashbang

## Numeric separators by Sam Goto and Rick Waldron

- https://github.com/tc39/proposal-numeric-separator

## Top-level await by Myles Borins

- https://github.com/tc39/proposal-top-level-await

## WeakRefs by Dean Tribble and Sathya Gunasekaran

- https://github.com/tc39/proposal-weakrefs

## RegExp match indices by Ron Buckton

- https://github.com/tc39/proposal-regexp-match-Indices

## String.prototype.replaceAll by Peter Marshall, Jakob Gruber and Mathias Bynens

- https://github.com/tc39/proposal-string-replaceall

## Promise.any by Mathias Bynens, Kevin Gibbons and Sergey Rubanov

- https://github.com/tc39/proposal-promise-any

## Atomics.waitAsync by Lars Hansen

- https://github.com/tc39/proposal-atomics-wait-async
