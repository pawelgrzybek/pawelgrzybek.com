---
title: "What's new in ECMAScript 2025"
summary: ""
---

[Another version of ECMAScript version has been approved by the TC39](https://ecma-international.org/news/ecma-international-approves-new-standards-11/), and to keep my annual tradition I’m sharing what’s new in the [ES2025](https://262.ecma-international.org/16.0/index.html) with simple practical examples. If you want to catch up with the previous editions, here you have it: [2024](/whats-new-in-ecmascript-2024/), [2023](/whats-new-in-ecmascript-2023/), [2022](/whats-new-in-ecmascript-2022/), [2021](/whats-new-in-ecmascript-2021/), [2020](/whats-new-in-ecmascript-2020/), [2019](/whats-new-in-ecmascript-2019/), [2018](/whats-new-in-ecmascript-2018/), [2017](/whats-new-in-ecmascript-2017/) and [2016](/whats-new-in-ecmascript-2016-es7/). Now, let's see what is new this year.

## [Duplicate named capturing groups](https://github.com/tc39/proposal-duplicate-named-capturing-groups?tab=readme-ov-file)

Regex capture groups are super helpful, but before ES2025 it was disallowed to duplicate them across alternatives (chunks separated by `|`). Prior to this release, it resulted in a syntax error, but this years update makes it work.

```js
const pattern = /ECMAScript(?<version>[0-9]{4})|ES(?<version>[0-9]{2})/;
//                              👆                     👆

// <ES2025
"ECMAScript2025".match(pattern);
// SyntaxError: Invalid regular expression: /ECMAScript(?<version>[0-9]{4})|ES(?<version>[0-9]{2})/: Duplicate capture group name

// >=ES2025
"ECMAScript2025".match(pattern);
// "2025"
```

## [Set Methods for JavaScript](https://github.com/tc39/proposal-set-methods?tab=readme-ov-file)

This proposal makes `Sets` more powerful. It adds the following methods to the Set prototype: `intersection`, `union`, `difference`, `symmetricDifference`, `isSubsetOf`, `isSupersetOf`, and `isDisjointFrom`.

```js
const setOne = new Set([1, 2, 3]);
const setTwo = new Set([3, 4, 5]);

setOne.intersection(setTwo);
// Set(1) { 3 }
setOne.union(setTwo);
// Set(5) { 1, 2, 3, 4, 5 }
setOne.difference(setTwo);
// Set(2) { 1, 2 }
setOne.symmetricDifference(setTwo);
// Set(4) { 1, 2, 4, 5 }

setOne.isSubsetOf(setTwo);
// false
setOne.isSupersetOf(setTwo);
// false
setOne.isDisjointFrom(setTwo);
// false
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) makes a great job of explaining every single one of these methods, but to be fully proficient with Sets, I would highly recommend catching up on some basics of [the Set theory](https://en.wikipedia.org/wiki/Set_theory).

## [Regular Expression Pattern Modifiers](https://github.com/tc39/proposal-regexp-modifiers)

This one allows developers to add regular expression flags (`i` for case insensitivity, `m` for multi-line and so on) to a subset of patterns in contrast to the whole expression. Look at this example that targets the word "bearer" and ignores capitalisation, followed by the literal "abc" that needs to be lowercase. Subexpression modifiers are present in Regex engines built into other programming languages like Pearl or .NET, and this year are also available in ECMAScript. This is super useful!

```js
const pattern = /^(?i:bearer) abc$/;

pattern.test("bearer abc");
// true
pattern.test("Bearer abc");
// true
pattern.test("bEaReR abc");
// true
pattern.test("bearer ABC");
// false
```

## [Import Attributes](https://github.com/tc39/proposal-import-attributes) and [JSON modules](https://github.com/tc39/proposal-json-modules)

We have been importing non-JS files for ages. Thanks to the powerful bundlers, importing a CSS, SVG file, or JSON data heap has become the norm. The new import `type` attribute informs the module system about the MIME type, configures fetching behaviour, and orchestrates parsing and evaluation of the imported asset. This ensures that the correct validation rules are applied and prevents potential security risks. Implementing this feature was a base for JSON modules, and as of now this is the only non-JS format supported, but additional types will come in the following years.

```js
// Import
import data from "./data.json" with { type: "json" };

// Dynamic import
const data = await import("./data.json", { with: { type: "json" } });

// Re-export
export { data } from "./data.json" with { type: "json" };
```

## [Iterator Helpers](https://github.com/tc39/proposal-iterator-helpers)

I love working with iterators in Rust. This proposal brings us closer to this realm and makes working with them in JavaScript a lot moje enjoyable. No more `Array.from()` or some third party libs. Here is a list of new goodies!

- `map()`
- `filter()`
- `take()`
- `drop()`
- `flatMap()`
- `reduce()`
- `toArray()`
- `forEach()`
- `some()`
- `every()`
- `find()`
- `Iterator.from()` (static method)
