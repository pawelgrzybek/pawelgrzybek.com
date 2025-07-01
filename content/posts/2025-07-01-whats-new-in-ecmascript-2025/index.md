---
title: "What's new in ECMAScript 2025"
summary: "A short summary of every new feature added to the ECMAScript specification this year, with easy-to-follow, illustrative examples. A bunch of great new features."
---

[Another version of ECMAScript version has been approved by the TC39](https://ecma-international.org/news/ecma-international-approves-new-standards-11/), and to keep my annual tradition I’m sharing what’s new in the [ES2025](https://262.ecma-international.org/16.0/index.html) with simple practical examples. If you want to catch up with the previous editions, here you have them: [2024](/whats-new-in-ecmascript-2024/), [2023](/whats-new-in-ecmascript-2023/), [2022](/whats-new-in-ecmascript-2022/), [2021](/whats-new-in-ecmascript-2021/), [2020](/whats-new-in-ecmascript-2020/), [2019](/whats-new-in-ecmascript-2019/), [2018](/whats-new-in-ecmascript-2018/), [2017](/whats-new-in-ecmascript-2017/) and [2016](/whats-new-in-ecmascript-2016-es7/). Now, let's see what is new this year.

- [Duplicate named capturing groups](#duplicate-named-capturing-groups)
- [Set Methods for JavaScript](#set-methods-for-javascript)
- [Regular Expression Pattern Modifiers](#regular-expression-pattern-modifiers)
- [Import Attributes](#import-attributes-and-json-modules)
- [Iterator Helpers](#iterator-helpers)
- [Promise.try()](#promisetry)
- [Float16Array](#float16array)
- [RegExp Escaping](#regexp-escaping)

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

We have been importing non-JS files for ages. Thanks to the powerful bundlers, importing a CSS, SVG file, or JSON data heap has become the norm. The new import `type` attribute informs the module system about the MIME type, configures fetching behaviour, and orchestrates parsing and evaluation of the imported asset. This ensures that the correct validation rules are applied and prevents potential security risks. Implementing this feature was a baseis for JSON modules, and as of now this is the only non-JS format supported, but additional types will come in the following years.

```js
// Import
import data from "./data.json" with { type: "json" };

// Dynamic import
const data = await import("./data.json", { with: { type: "json" } });

// Re-export
export { data } from "./data.json" with { type: "json" };
```

## [Iterator Helpers](https://github.com/tc39/proposal-iterator-helpers)

I love working with iterators in Rust. This proposal brings us closer to this realm and makes working with them in JavaScript a lot moje enjoyable. No more `Array.from()` or some third party libs. This is by far my favourite proposal that landed in the new specification. Here is a list of new methods!

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

Some of them (`map`, `filter`, `reduce`, `flatMap`, `some`, `find` and `every`) mimic the naming and functionality of methods from the `Array.prototype`, and their usecase and functionality should be familiar. Here is a quick example.

```js
const iter = [..."ECMAScript2025"].values();
const iterNumeric = iter.filter((c) => /^\d$/.test(c));

iterNumeric.next();
// { value: '2', done: false }
iterNumeric.next();
// { value: '0', done: false }
iterNumeric.next();
// { value: '2', done: false }
iterNumeric.next();
// { value: '5', done: false }
iterNumeric.next();
// { value: undefined, done: true }
```

Some of them (`drop`, `take`) are just for iterator manipulations and are not present in an `Array.prototype`.

```js
const iter = [..."ECMAScript2025"].values();
const iterNumeric = iter.drop(10).take(4);

iterNumeric.next();
// { value: '2', done: false }
iterNumeric.next();
// { value: '0', done: false }
iterNumeric.next();
// { value: '2', done: false }
iterNumeric.next();
// { value: '5', done: false }
iterNumeric.next();
// { value: undefined, done: true }
```

## [Promise.try()](https://github.com/tc39/proposal-promise-try)

Wrapping a non-sync function in a Promise is a common operation. The new `Promise.try` is an elegant wrapper for sync or async operations that ensures a returned promise. Here is a simple use case.

```js
const handleAction = (action) =>
  action
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("done"));

handleAction(new Promise((resolve, reject) => resolve("all good")));
// all good
// done
```

```js
const handleAction = (action) =>
  action
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("done"));

handleAction(new Promise((resolve, reject) => reject("uuuupps")));
// uuuupps
// done
```

The `handleAction` works great with these two, because in both cases the passed argument is a Promise. What will happen if the argument is a sync operation though?

```js
const handleAction = (action) =>
  action
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("done"));

handleAction(() => "look ma, no promise!");
// TypeError: action.then is not a function
```

This is a common situation when people reach for `npm i p-try`, but now that's not needed as this helper is built into the language. Here is an example with a sync action again, and another one when it throws.

```js
const handleAction = (action) =>
  Promise.try(action) // 👈👈👈
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("done"));

handleAction(() => "look ma, no promise!");
// look ma, no promise!
// done
```

```js
const handleAction = (action) =>
  Promise.try(action) // 👈👈👈
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("done"));

handleAction(() => {
  throw "look me, no promise, but an error!";
});
// look me, no promise, but an error!
// done
```

## [Float16Array](https://github.com/tc39/proposal-float16array)

To complement the already existing `Float32Array` and `Float64Array` in the language, this proposal adds the missing [half-precision floating-point format](https://en.wikipedia.org/wiki/Half-precision_floating-point_format), `Float16Array`. This proposal hardly makes any difference for web developers, but for graphics-intensive calculations where memory is limited, this can save the day.

## [RegExp Escaping](https://github.com/tc39/proposal-regex-escaping)

Mechanism for escaping literal strings is something that the community has been asking for a very long time. It is present in Perl, PHP, Python, Ruby and many others. Let’s look at the problem and the solution that the new `RegExp.escape()` solves.

```js
const sentence = "He has two dogs. I have one dog.";
const pattern = /dog./;
const newSentence = sentence.replace(pattern, "cat.");

console.log(newSentence);
// He has two cat.. I have one dog.
```

Uuups. The `.` token in the pattern is matching any single character, but our intention was to match a literal `.`. Here is where the new `RegExp.escape()` comes in handy.

```js
const sentence = "He has two dogs. I have one dog.";
const pattern = new RegExp(RegExp.escape("dog.")); // 👈👈👈
const newSentence = sentence.replace(pattern, "cat.");

console.log(newSentence);
// He has two dogs. I have one cat.
```

This example is not the best, but imagine if the value inside the regex is coming from an external source or user input. This solves a huge problem and simplifies otherwise complex and error-prone solutions.

---

## JavaScript Trademark

Did you know that "JavaScript" is a registered trademark and belongs to Oracle? This company has very little to do with this language, but this is the main reason why we refer to this language as ECMAScript, and the reason why organising a "JavaScript Conf" violates trademark rules. Pretty silly, right?

Folks from Deno filed and open petition to release the "JavaScript" trademark. Thousands of developers signed a letter to help to make JavaScript free. If you haven't already, please do so at [javascript.tm](https://javascript.tm/). Thank you 😘
