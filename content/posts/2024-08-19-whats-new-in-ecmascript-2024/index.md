---
title: "What's new in ECMAScript 2024"
summary: "The list of new JavaScript features is now confirmed, and to keep my annual tradition, I am publishing this yearly recap for you and my future self."
---

The final version of [ECMAScript 2024 Language Specification](https://tc39.es/ecma262/2024/) was approved on [the 26th of June](https://github.com/tc39/ecma262/releases/tag/es2024). The list of new JavaScript features is now confirmed, and to keep my annual tradition, I am publishing this yearly recap for you and my future self. For curious ones, here are the posts from the past years: [2023](/whats-new-in-ecmascript-2023/), [2022](/whats-new-in-ecmascript-2022/), [2021](/whats-new-in-ecmascript-2021/), [2020](/whats-new-in-ecmascript-2020/), [2019](/whats-new-in-ecmascript-2019/), [2018](/whats-new-in-ecmascript-2018/), [2017](/whats-new-in-ecmascript-2017/) and [2016](/whats-new-in-ecmascript-2016-es7/).

Features added this year are pretty nuanced and outside my comfort zone, as are many other JavaScript users. I will try my best to explain them to regular app makers who rarely delve into the territory of complicated Regex, Unicode characters encoding and buffer manipulations.

- [Well-Formed Unicode Strings by Guy Bedford, Bradley Farias, Michael Ficarra](#well-formed-unicode-strings-by-guy-bedford-bradley-farias-michael-ficarra)
- [Asynchronous atomic wait for ECMAScript by Shu-yu Guo and Lars T Hansen](#asynchronous-atomic-wait-for-ecmascript-by-shu-yu-guo-and-lars-t-hansen)
- [RegExp v flag with set notation + properties of strings by Markus Scherer and Mathias Bynens](#regexp-v-flag-with-set-notation--properties-of-strings-by-markus-scherer-and-mathias-bynens)
- - [Checks against a subset of Unicode string properties](#checks-against-a-subset-of-unicode-string-properties)
- - [Subtraction/intersection/union matching](#subtractionintersectionunion-matching)
- - [Improved case-insensivity](#improved-case-insensivity)
- [In-Place Resizable and Growable ArrayBuffers by Shu-yu Guo](#in-place-resizable-and-growable-arraybuffers-by-shu-yu-guo)
- [ArrayBuffer transfer by Shu-yu Guo, Jordan Harband and Yagiz Nizipli](#arraybuffer-transfer-by-shu-yu-guo-jordan-harband-and-yagiz-nizipli)
- [Array grouping by Justin Ridgewell and Jordan Harband](#array-grouping-by-justin-ridgewell-and-jordan-harband)
- [Promise.withResolvers by Peter Klecha](#promisewithresolvers-by-peter-klecha)

---

## Well-Formed Unicode Strings by Guy Bedford, Bradley Farias, Michael Ficarra

Strings in JavaScript are represented as a sequence of UTF-16 code points. The 16 in the name represents the number of bits available to store the code point, which offers 65536 possible combinations (2<sup>16</sup>). This amount is sufficient to store characters of Latin, Greek, Cyrillic and East Asian alphabets but not enough to store things like Chinese, Japanese, and Korean ideographs or emojis. Additional characters are stored in pairs of 16-bit code units, known as surrogate pairs.

```js
'a'.length
// 1
'a'.split('')
// [ 'a' ]

'🥑'.length
// 2
'🥑'.split('')
//[ '\ud83e', '\udd51' ] 👈 surrogate pair
```

Leading and trailing surrogates are scoped to a range of code units which are not used to encode single-code-unit characters to avoid ambiguity. If a pair is missing a leading or tailing code unit or their order is flipped, we deal with a "lone surrogate", and the whole string is "ill-formed ". For the string to be "well-formatted," it must not contain lone surrogates.

[The Well-Formed Unicode Strings proposal](https://github.com/tc39/proposal-is-usv-string) introduces a `String.prototype.isWellFormed()` method to verify whether a string is well-formed or not. In addition, it comes with a `String.prototype.toWellFormed()` helper method that replaces all lone surrogates with replacement characters (`U+FFFD`, �).

```js {hl_lines=[4,7,10]}
'\ud83e\udd51'
// 🥑

'\ud83e\udd51'.isWellFormed()
// true

'\ud83e'.isWellFormed() // without trailing surrogate
// false

'\ud83e'.toWellFormed()
// �
```

## Asynchronous atomic wait for ECMAScript by Shu-yu Guo and Lars T Hansen

Workers enable multi-threading in JavaScript. The `SharedArrayBuffer` is a low-level API that allows us to perform operations on a memory shared between agents (main thread and workers). A set of static methods on `Atomics` object help us to avoid conflicts between reads and writes.

A common thing to do is to put a worker to sleep and wake it when needed. We combine `Atomics.wait()` and `Atomics.notify()` methods to achieve it. However, this can be limiting because `Atomics.wait()` is a synchronous API and cannot be used on the main thread.

[The Asynchronous atomic wait proposal](https://github.com/tc39/proposal-atomics-wait-async) gives a way to do it asynchronously, and most importantly, it is possible to do it on the main thread.

```js
// main thread
let i32a = null;

const w = new Worker("worker.js");
w.onmessage = function (env) {
  i32a = env.data;
};

setTimeout(() => {
  Atomics.store(i32a, 0, 1);
  Atomics.notify(i32a, 0);
}, 1000);
```

```js {hl_lines=[6]}
// worker thread
const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
const i32a = new Int32Array(sab);
postMessage(i32a);

const wait = Atomics.waitAsync(i32a, 0, 0);
// { async: false; value: "not-equal" | "timed-out"; }
// or
// { async: true; value: Promise<"ok" | "timed-out">; }

if (wait.async) {
  wait.value.then((value) => console.log(value));
} else {
  console.log(wait.value);
}
```

## RegExp v flag with set notation + properties of strings by Markus Scherer and Mathias Bynens

[The new RegExp `v` flag](https://github.com/tc39/proposal-regexp-v-flag) is similar to [unicode-aware regular expressions (`u` flag) added in 2015](https://mathiasbynens.be/notes/es6-unicode-regex) but does much more. Due to similarities with the `u` flag and some incompatibilities, these two flags cannot be combined. The new `v` Regex mode enables three features: checks against a subset of [Unicode string properties](https://www.unicode.org/reports/tr18/#Full_Properties), performs subtraction/intersection/union matching and improves case-insensitive matching.

```js
// `u` and `v` modes are similar, but they cannot be combined
const pattern = /./vu;
// SyntaxError: Invalid regular expression: invalid flags
```

### Checks against a subset of Unicode string properties 

The Unicode standard defines a list of properties that simplify regex patterns. For example, `/\p{Math}/u` checks for mathematical operators, `/\p{Dash}/u` for dash punctuation characters or `/\p{Hex_Digit}/u` for symbols used for the representation of hexadecimal numbers.

```js {hl_lines=["1-3"]}
const patternMath = /\p{Math}/u;
const patternDash = /\p{Dash}/u;
const patternHex = /\p{Hex_Digit}/u;

patternMath.test('+'); // true
patternMath.test('z'); // false

patternDash.test('-'); // true
patternDash.test('z'); // false

patternHex.test('f'); // true
patternHex.test('z'); // false
```

Most of the properties apply to individual code points, but there are very few (for now, mostly emoji-related) that apply to strings (multiple code points). `Basic_Emoji`, `RGI_Emoji` and `RGI_Emoji_Flag_Sequence`, to name a few. These are the types that `u` mode doesn't support, although [there are some discussions to change it](https://github.com/tc39/proposal-regexp-v-flag/issues/49#issuecomment-988956561). Luckily, one of the features of `v` mode is the ability to perform checks against Unicode string properties.

```js {hl_lines=[1]}
const pattern = /\p{RGI_Emoji}/u
// SyntaxError: Invalid regular expression: /\p{RGI_Emoji}/u: Invalid property name
```

```js {hl_lines=[1]}
const pattern = /\p{RGI_Emoji}/v;

// single codepoint emoji
pattern.test('😀') // true

// multiple codepoints emoji
pattern.test('🫶🏾') // true
```

### Subtraction/intersection/union matching

Another feature of `v` mode is subtraction (`--`), intersection (`&&`) and union of properties of strings. A new `\q` for string literals within character classes (multi-character strings) is worth noting.

```js {hl_lines=[2]}
// match all emojis except pile of poo
const pattern = /[\p{RGI_Emoji}--\q{💩}]/v;

pattern.test('😜') // true
pattern.test('💩') // false
```

```js {hl_lines=[2]}
// Only uppercase, hex-digit-safe chatacters
const pattern = /[\p{Uppercase}&&\p{Hex_Digit}]/v;

pattern.test('f') // true
pattern.test('F') // false
```

```js {hl_lines=[2]}
// only melons and berries
const pattern = /^[\q{🍈|🍉|🍓|🫐}]$/v;

pattern.test('🥑') // false
pattern.test('🫐') // true
```

### Improved case-insensivity

How the case sensitivity check works in `u` mode is confusing. Inversed patterns targeting specific case groups (`Lowercase_Letter` or `Uppercase_Letter`) with ignored case flag (`i`) enabled do not produce intuitive results. The new `v` flag makes the results much more predictable, which is why these two flags cannot be combined.

## In-Place Resizable and Growable ArrayBuffers by Shu-yu Guo

The `ArrayBuffer` object in JavaScript is a way to represent a buffer of binary data. Resizing `ArrayBuffers` before ECMAScript 2024 was a tedious process of creating a new one and moving data from one to the other. Thanks to the ["In-Place Resizable and Growable ArrayBuffers" proposal](https://github.com/tc39/proposal-resizablearraybuffer), we have a native way of defining growable buffers using `options.maxByteLength` property, and resize them by calling `resize()` method.

```js {hl_lines=[7]}
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resizable; // true
buffer.byteLength; // 8
buffer.maxByteLength; // 16

buffer.resize(16);

buffer.byteLength; // 16
buffer.maxByteLength; // 16
```

## ArrayBuffer transfer by Shu-yu Guo, Jordan Harband and Yagiz Nizipli

Following new resizing capabilities of `ArrayBuffer`s, [`arrayBuffer.prototype.transfer` and friends proposal](https://github.com/tc39/proposal-arraybuffer-transfer) add abilities to transfer their ownership. The `transfer()` or `transferToFixedLength()` methods allow us to relocate bytes depending on the destination. A new `detached` getter is a new native solution for checking deallocated buffers.

```js {hl_lines=[4]}
const buffer = new ArrayBuffer();
buffer.detached; // false

const newBuffer = buffer.transfer();
buffer.detached; // true
```

## Array grouping by Justin Ridgewell and Jordan Harband

Thanks to the [array grouping proposal](https://github.com/tc39/proposal-array-grouping), a popular `groupBy` method popularized by [Lodash](https://lodash.com/docs/4.17.15#groupBy), [Ramda](https://ramdajs.com/docs/#groupBy) and others has now become part of the ECMAScript. The initial idea was to implement it as `Array.prototype.groupBy` , which collided with the commonly used [Sugar utility](https://sugarjs.com). It is implemented as an `Object.groupBy` / `Map.groupBy` static method.

```js {hl_lines=[9]}
const langs = [
  { name: "Rust", compiled: true, released: 2015 },
  { name: "Go", compiled: true, released: 2009 },
  { name: "JavaScript", compiled: false, released: 1995 },
  { name: "Python", compiled: false, released: 1991 },
];

const callback = ({ compiled }) => (compiled ? "compiled" : "interpreted");
const langsByType = Object.groupBy(langs, callback);

console.log({ langsByType });
// {
//   compiled: [
//     { name: "Rust", compiled: true, released: 2015 },
//     { name: "Go", compiled: true, released: 2009 }
//   ],
//   interpreted: [
//     { name: "JavaScript", compiled: false, released: 1995 },
//     { name: "Python", compiled: false, released: 1991 }
//   ]
// }
```

## Promise.withResolvers by Peter Klecha

[The `Promise.withResolvers` proposal](https://github.com/tc39/proposal-promise-with-resolvers) adds to the language deferred promises, a popular pattern implemented before by [jQuery](https://api.jquery.com/jQuery.Deferred/), [bluebird](http://bluebirdjs.com/docs/api/deferred-migration.html), [p-defer](https://github.com/sindresorhus/p-defer) and plenty of other libraries. You can use it to avoid nesting in the promise executor, although it shines when you need to pass resolve or reject to multiple callers. Working with stream or event-based systems is an excellent use case.

Look at this example of a `createEventsAggregator` taken from ["Deferred JavaScript promises using Promise.withResolvers"](https://pawelgrzybek.com/deferred-javascript-promises-using-promise-withresolvers/) which I published a few months ago. It returns an `add` method to push a new event and an `abort` method that cancels aggregation. Most importantly, it returns an `events` promise that resolves when it hits an eventsCount limit or rejects when `abort` is triggered.

```js {hl_lines=[3]}
function createEventsAggregator(eventsCount) {
  const events = [];
  const { promise, resolve, reject } = Promise.withResolvers();

  return {
    add: (event) => {
      if (events.length < eventsCount) events.push(event);
      if (events.length === eventsCount) resolve(events);
    },
    abort: () => reject("Events aggregation aborted."),
    events: promise,
  };
}
```

```js
const eventsAggregator = createEventsAggregator(3);

eventsAggregator.events
  .then((events) => console.log("Resolved:", events))
  .catch((reason) => console.error("Rejected:", reason));

eventsAggregator.add("event-one");
eventsAggregator.add("event-two");
eventsAggregator.add("event-three");

// Resolved: [ "event-one", "event-two", "event-three" ]
```

---

Thats it for 2024. I will catch you next year 👋
