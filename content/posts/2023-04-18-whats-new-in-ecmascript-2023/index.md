---
title: "What's new in ECMAScript 2023"
summary: "After reading notes from the last TC39 meeting, it looks like the list of new features coming to JavaScript is already known. The final version of the ECMAScript specification is expected to be published at the end of June."
photo: "2023-04-18.jpg"
---

After reading [notes from the last TC39 meeting](https://github.com/tc39/notes/tree/main/meetings/2023-03), it looks like the list of new features coming to JavaScript is already known. The final version of the ECMAScript specification is expected to be published at the end of June.

> Last and most important thing is that we are cutting ES2023. We are freezing it, or rather we have frozen it, I should say. We are not expecting any more significant editorial changes. There will be at least a couple very small editorials tweaks that will land but nothing large. 

Let me share the list of all the new features that reached stage 4 and are expected to be included in the upcoming ECMAScript version. Exactly what I did in [2022](/whats-new-in-ecmascript-2022/), [2021](/whats-new-in-ecmascript-2021/), [2020](/whats-new-in-ecmascript-2020/), [2019](/whats-new-in-ecmascript-2019/), [2018](/whats-new-in-ecmascript-2018/), [2017](/whats-new-in-ecmascript-2017/) and [2016](/whats-new-in-ecmascript-2016-es7/).

- [Array find from last](#array-find-from-last)
- [Hashbang Grammar](#hashbang-grammar)
- [Symbols as WeakMap keys](#symbols-as-weakmap-keys)
- [Change Array by Copy](#change-array-by-copy)

## Array find from last

[Array find from the last proposal by Wenlu Wang](https://github.com/tc39/proposal-array-find-from-last) adds `findLast()` and `findLastIndex()` methods on `Array` and `TypedArray` prototype. They do the same thing as `find()` and `findIndex()` but in reverse order. Both methods are handy and let us skip creating temporary duplicates, mutations and confusing index substractions.

```js
const isEven = (number) => number % 2 === 0;
const numbers = [1, 2, 3, 4];

// from first to the last lookup
console.log(numbers.find(isEven));
// 2
console.log(numbers.findIndex(isEven));
// 1

// from last to the first lookup
console.log(numbers.findLast(isEven));
// 4
console.log(numbers.findLastIndex(isEven));
// 3
```

## Hashbang Grammar

[Hashbang, also known as a shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) is a sequence of characters at the beginning of an executable script that defines the interpreter for the program to be run on. When the Unix kernel's program loader executes a JavaScript program, the host strips the hashbang to generate a valid source before passing it down to the engine. [Hashbang Grammar proposal by Bradley Farias](https://github.com/tc39/proposal-hashbang) standardizes how it is done.

```js
#!/usr/bin/env node

console.log('hi 👋');
```

## Symbols as WeakMap keys

In JavaScript, Objects and Symbols are guaranteed to be unique and cannot be re-created, which makes them both great candidates for the `WeakMap` keys. Previous versions or specifications allowed only Objects to be used that way, but luckily [Symbols as WeakMap keys proposal by Daniel Ehrenberg, Richard Button, Robin Ricard, Leo Balter, Rick Waldron and Caridy Patiño](https://github.com/tc39/proposal-symbols-as-weakmap-keys) adds non-registered Symbols to the list of allowed keys.

```js
const weak = new WeakMap();
const key = Symbol("ref");
weak.set(key, "ECMAScript 2023");

console.log(weak.get(key));
// ECMAScript 2023
```

## Change Array by Copy

The `reverse()`, `sort()` and `splice()` methods on `Array.prototype` mutate the array in place. [Change Array by Copy proposal by Ashley Claymore and Robin Ricard](https://github.com/tc39/proposal-change-array-by-copy) adds equivalents of those methods that return a new copy — `toReversed()`, `toSorted()` and `toSpliced()`. This proposal also adds a `with()` method that returns a new array with the element at the given index replaced with the given value to avoid mutations in place using bracket notation.

```js
const original = [1, 2, 3, 4];
const reversed = original.toReversed();

console.log(original);
// [ 1, 2, 3, 4 ]

console.log(reversed);
// [ 4, 3, 2, 1 ]
```

```js
const original = [1, 3, 2, 4];
const sorted = original.toSorted();

console.log(original);
// [ 1, 3, 2, 4 ]

console.log(sorted);
// [ 1, 2, 3, 4 ]
```

```js
const original = [1, 4];
const spliced = original.toSpliced(1, 0, 2, 3);

console.log(original);
// [ 1, 4 ]

console.log(spliced);
// [ 1, 2, 3, 4 ]
```

```js
const original = [1, 2, 2, 4];
const withThree = original.with(2, 3);

console.log(original);
// [ 1, 2, 2, 4 ]

console.log(withThree);
// [ 1, 2, 3, 4 ]
```
