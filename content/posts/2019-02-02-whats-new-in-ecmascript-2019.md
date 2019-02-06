---
title: What's new in ECMAScript 2019
description: The final list of features that are joining the ECMAScript specification this year is ready. Here's a quick summary and look at some practical examples.
photo: 2019-02-02.jpg
---

The Ecma TC39 committee responsible for the ECMAScript specification confirmed a list of features that have reached [stage 4](https://tc39.github.io/process-document/), meaning that they will become part of the ECMAScript 2019 specification. Three years ago I published ["What's new in ECMAScript 2016"](https://pawelgrzybek.com/whats-new-in-ecmascript-2016-es7/), two years ago ["What's new in ECMAScript 2017"](https://pawelgrzybek.com/whats-new-in-ecmascript-2017/) and year later ["What's new in ECMAScript 2018"](https://pawelgrzybek.com/whats-new-in-ecmascript-2018/). It's time to add a few more goodies.

## Optional catch binding by Michael Ficarra

You must have used a `try...catch` block before.

```js
try {
  // exception is thrown
} catch (error) {
  console.error("My error handler");
}
```

What if you don’t need to bind the `error` parameter of the catch clause? Now you can skip this parameter binding. Thanks to [Michael Ficarra](https://twitter.com/smooshMap).

```js
try {
  // exception is thrown
} catch {
  console.error("My error handler");
}
```

- [Optional catch binding proposal](https://github.com/tc39/proposal-optional-catch-binding)

## JSON superset by Richard Gibson, Mark Miller and Mathias Bynens

This one is more of a specification update than a new language feature — it's fully backwards compatible though. Although the [ECMAScript documentation calls JSON as a subset of `JSON.parse()`](https://tc39.github.io/ecma262/#sec-json.parse), in reality the JSON standard was not a subset of ECMAScript. JSON could contain an unescaped line separator (`U+2028`) and paragraph separator (`U+2029`) but ECMAScript must have been using an escape sequence to add them to a string. This may cause occasional bugs and adds unnecessary complexity to the specification. This proposal introduces some consistency between ECMAScript string literals and JSON string literals. The JSON standard is a legit subset of ECMAScript now.

- [JSON superset proposal](https://github.com/tc39/proposal-json-superset)

## Symbol.prototype.description by Michael Ficarra

To improve the debugging experience a `Symbol` can be created with an optional description. Historically we used to access this description via `Symbol.prototype.toString()` to return a description enclosed inside a `Symbol()` string. Using ECMAScript 2019 you can do this more intuitively — `Symbol.prototype.description` simply retrieves a description without any decorators around the string.

```js
const foo = Symbol("My super symbol");

foo.toString();
// Symbol(My super symbol)

foo.description;
// My super symbol
```

- [`Symbol.prototype.description` proposal](https://github.com/tc39/proposal-Symbol-description)

## Function.prototype.toString revision by Michael Ficarra

The implementation of `toString()` has been revised (again) and standardises the returned "implementation-dependent" string (the source code that defines the function implementation). This is an incremental update in an already biggish proposal and the rules are well defined in [`Function.prototype.toString` proposal introduction](http://tc39.github.io/Function-prototype-toString-revision/).

```js
function hi(name) {
  return `Hi ${name}`;
}

hi.toString();
// function hi(name) {
//   return `Hi ${name}`;
// }
```

```js
Array.isArray.toString();
// function isArray() { [native code] }
```

- [`Function.prototype.toString` proposal](http://tc39.github.io/Function-prototype-toString-revision/)

## Object.fromEntries by Darien Maillet Valentine

A very handy way to convert a list of key-value pairs into an object.

```js
const arr = [["name", "Pawel"], ["surname", "Grzybek"], ["age", 31]];
const obj = Object.fromEntries(arr);
// {name: "Pawel", surname: "Grzybek", age: 31}
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">ECMAScript 2019 Object.fromEntries() is very cool! No more Array.prototype.reduce()<a href="https://t.co/Rtk9bEhvzz">https://t.co/Rtk9bEhvzz</a><a href="https://twitter.com/hashtag/js?src=hash&amp;ref_src=twsrc%5Etfw">#js</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/ecmascript?src=hash&amp;ref_src=twsrc%5Etfw">#ecmascript</a> <a href="https://t.co/RC43G4O5Ac">pic.twitter.com/RC43G4O5Ac</a></p>&mdash; Paweł Grzybek (@pawelgrzybek) <a href="https://twitter.com/pawelgrzybek/status/1090551539058511873?ref_src=twsrc%5Etfw">January 30, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- [Object.fromEntries proposals](https://github.com/tc39/proposal-object-from-entries)

## Well-formed JSON.stringify by Richard Gibson and Mathias Bynens

This backwards-compatible change prevents `JSON.stringify()` from returning code point strings without representation in UTF-8 standard.

```js
// before
JSON.stringify("\u{D800}");
// '"�"'

// after
JSON.stringify("\u{D800}");
// "\ud800"
```

- [Well-formed JSON.stringify proposal](https://github.com/tc39/proposal-well-formed-stringify)

## String.prototype.trimStart / String.prototype.trimEnd by Sebastian Markbåge and Mathias Bynens

The `String.prototype.trim()` has been part of the standard for years. This proposal introduces `String.prototype.trimStart()` and `String.prototype.trimEnd()`. They were added to web browsers years ago too — it is a good time to standardise them.

```js
"   javascript   ".trim();
// "javascript"

"   javascript   ".trimStart();
// "javascript   "

"   javascript   ".trimEnd();
// "   javascript"
```

- [String.prototype.trimStart / String.prototype.trimEnd proposal](https://github.com/tc39/proposal-string-left-right-trim)

## Array.prototype.flat / Array.prototype.flatMap by Brian Terlson, Michael Ficarra and Mathias Bynens

Do you remember [SmooshGate](https://developers.google.com/web/updates/2018/03/smooshgate)? `Array.prototype.flat()` flattens arrays recursively up to a specified depth. The default depth is 1. Let's have a look at some examples:

```
[1, 2, [3, 4, [5, 6]]].flat();
// [ 1, 2, 3, 4, [ 5, 6 ] ]

[1, 2, [3, 4, [5, 6]]].flat(2);
// [ 1, 2, 3, 4, 5, 6 ]
```

The `Array.prototype.flatMap()` returns a flattened result of `Array.prototype.map()` method. Think of it like `arr.map(mapper).flat(1)`.

```js
[1, 2, 3].flatMap(item => [item, item * 100]);
// [1, 100, 2, 200, 3, 300]
```

- [Array.prototype.flat / Array.prototype.flatMap proposal](https://github.com/tc39/proposal-flatMap)

## Array.prototype.sort stability by Mathias Bynens

Previously arrays with more than 10 elements used an unstable [QuickSort algorithm](https://en.wikipedia.org/wiki/Quicksort). Moving forward, this functionality is going to be replaced with stable [TimSort algorithm](https://en.wikipedia.org/wiki/Timsort). If you are very curious I highly recommend catching up ["Getting things sorted in V8"](https://v8.dev/blog/array-sort) posted by [Simon Zünd](https://twitter.com/nimODota) from V8 team.

- [Array.prototype.sort stability PR](https://github.com/tc39/ecma262/pull/1340)
