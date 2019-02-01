---
title: What's new in ECMAScript 2019
description: The final list of features that are joining the ECMAScript specification this year is ready. Let's sum it up and have a look at some practical examples.
photo: 2019-02-05.jpg
draft: true
---

The Ecma TC39 committee responsible for the ECMAScript specification confirmed a list of features that have reached [stage 4](https://tc39.github.io/process-document/), meaning that they will become a part of ECMAScript 2019 specification. Three years ago I published ["What's new in ECMAScript 2016"](https://pawelgrzybek.com/whats-new-in-ecmascript-2016-es7/), two years ago ["What's new in ECMAScript 2017"](https://pawelgrzybek.com/whats-new-in-ecmascript-2017/) and year later ["What's new in ECMAScript 2018"](https://pawelgrzybek.com/whats-new-in-ecmascript-2018/). It is time to add few more goodies.

## Optional catch binding by Michael Ficarra

You must have used `try...catch` block before.

```js
try {
  // exception is thrown
} catch (error) {
  console.error("My error handler");
}
```

Why if you don’t need to bind the `error` parameter of the catch clause? Now you can skip this parameter binding. Thanks to [Michael Ficarra](https://twitter.com/smooshMap).

```js
try {
  // exception is thrown
} catch {
  console.error("My error handler");
}
```

- [Optional catch binding proposal](https://github.com/tc39/proposal-optional-catch-binding)

## JSON superset by Richard Gibson, Mark Miller and Mathias Bynens

This one is more a specification update than a new language feature — fully backward compatible though. Although [ECMAScript documentation calls JSON as a subset of `JSON.parse()`](https://tc39.github.io/ecma262/#sec-json.parse), in reality JSON standard is not a subset of ECMAScript. JSON can contain unescaped line separator (`U+2028`) and paragraph separator (`U+2029`) but ECMAScript must use an escape sequence add them to a string. This may cause occasional bugs and adds unnecessary complexity to specification. This proposal introduces a consistency between ECMAScript string literals and JSON string literals.

- [JSON superset proposal](https://github.com/tc39/proposal-json-superset)

## Symbol.prototype.description by Michael Ficarra

To improve debugging experience a `Symbol` can be created with an optional description. Historically we use to access this description by `Symbol.prototype.toString()` that returns description enclosed inside `Symbol()` string. Using ECMAScript 2019 you can do better — `Symbol.prototype.description` simply retrieves a description without any decorators around the string.

```js
const foo = Symbol("My super symbol");

foo.toString();
// Symbol(My super symbol)

foo.description;
// My super symbol
```

- [`Symbol.prototype.description` proposal](https://github.com/tc39/proposal-Symbol-description)

## Function.prototype.toString revision by Michael Ficarra

The implementation of `toString()` has been revised (again) and standardizes the returned "implementation-dependent" string (source code that defines the function implementation). This is an incremental update in already biggish proposal and the rules are well defined in [`Function.prototype.toString` proposal introduction](http://tc39.github.io/Function-prototype-toString-revision/).

```js
function hi(name) {
  retuen`Hi ${name}`;
}

hi.toString();
// function hi(name) {
//   retuen`Hi ${name}`;
// }
```

```js
Array.isArray.toString();
// function isArray() { [native code] }
```

- [`Function.prototype.toString` proposal](http://tc39.github.io/Function-prototype-toString-revision/)

## Object.fromEntries by Darien Maillet Valentine

Very handy way to convert a list of key-value pairs into an object.

```js
const arr = [["name", "Pawel"], ["surname", "Grzybek"], ["age", 31]];
const obj = Object.fromEntries(arr);
// {name: "Pawel", surname: "Grzybek", age: 31}
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">ECMAScript 2019 Object.fromEntries() is very cool! No more Array.prototype.reduce()<a href="https://t.co/Rtk9bEhvzz">https://t.co/Rtk9bEhvzz</a><a href="https://twitter.com/hashtag/js?src=hash&amp;ref_src=twsrc%5Etfw">#js</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/ecmascript?src=hash&amp;ref_src=twsrc%5Etfw">#ecmascript</a> <a href="https://t.co/RC43G4O5Ac">pic.twitter.com/RC43G4O5Ac</a></p>&mdash; Paweł Grzybek (@pawelgrzybek) <a href="https://twitter.com/pawelgrzybek/status/1090551539058511873?ref_src=twsrc%5Etfw">January 30, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- [Object.fromEntries proposals](https://github.com/tc39/proposal-object-from-entries)

## Well-formed JSON.stringify by Richard Gibson and Mathias Bynens

This backwards-compatible change prevent `JSON.stringify()` from returning code points strings without representation in UTF-8 standard .

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

The `String.prototype.trim()` has been a part of a standard for years. This proposal introduces `String.prototype.trimStart()` and `String.prototype.trimEnd()`. They were added to web browsers years ago too — it is a good time to standardize them.

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

Do you remember [SmooshGate](https://developers.google.com/web/updates/2018/03/smooshgate)? It is finally over. `Array.prototype.flat()` flattens arrays recursively up to the specified depth. The default depth is 1. Let's have a look at some examples:

```
[1, 2, [3, 4, [5, 6]]].flat()
// [ 1, 2, 3, 4, [ 5, 6 ] ]

[1, 2, [3, 4, [5, 6]]].flat(2);
// [ 1, 2, 3, 4, 5, 6 ]
```

The `Array.prototype.flatMap()` returns a flatten result of `Array.prototype.map()` method. Think of it like `arr.map(mapper).flat(1)`.

```js
[1, 2, 3].flatMap(item => [item, item * 100]);
// (6) [1, 100, 2, 200, 3, 300]
```

- [Array.prototype.flat / Array.prototype.flatMap proposal](https://github.com/tc39/proposal-flatMap)
