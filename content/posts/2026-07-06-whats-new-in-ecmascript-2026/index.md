---
title: "What's new in ECMAScript 2026"
summary: "Every year after the final language specification approval, I publish about the latest additions to the language. Here is a full list."
---

The reason I write more Go than JavaScript nowadays is not because there is anything wrong with the language, but because I’m tired of the ecosystem. The language on its own is really good, it is the first programming language that I became productive with and I’m still motivated to keep up with the new additions to its specification. Every year after the final language specification approval, I publish about the latest additions to the language. If you’re curious how the language has changed over the last decade, here is a full list.

- [What's new in ECMAScript 2016](/whats-new-in-ecmascript-2016-es7/)
- [What's new in ECMAScript 2017](/whats-new-in-ecmascript-2017/)
- [What's new in ECMAScript 2018](/whats-new-in-ecmascript-2018/)
- [What's new in ECMAScript 2019](/whats-new-in-ecmascript-2019/)
- [What's new in ECMAScript 2020](/whats-new-in-ecmascript-2020/)
- [What's new in ECMAScript 2021](/whats-new-in-ecmascript-2021/)
- [What's new in ECMAScript 2022](/whats-new-in-ecmascript-2022/)
- [What's new in ECMAScript 2023](/whats-new-in-ecmascript-2023/)
- [What's new in ECMAScript 2024](/whats-new-in-ecmascript-2024/)
- [What's new in ECMAScript 2025](/whats-new-in-ecmascript-2025/)

On 30 June 2026, Ecma International approved the ECMAScript® 2026 language specification, so here is a summary of the new additions.

- [`Array.fromAsync`](#arrayfromasync)
- [`Error.isError`](#erroriserror)
- [`Math.sumPrecise`](#mathsumprecise)
- [Uint8Array to/from Base64](#uint8array-tofrom-base64-and-hex)
- [Iterator Sequencing](#iterator-sequencing)
- [`JSON.parse` source text access](#jsonparse-source-text-access)
- [`Upsert`](#upsert)

## Array.fromAsync

To convert a synchronous iterator into an array, we can either use a `for` loop, or `Array.from()`. This has been available in the language since 2015.

```js
function* gen(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const arrOne = [];
for (const n of gen(2024, 2026)) {
  arrOne.push(`ECMAScript ${n}`);
}
console.log("arrOne", arrOne);
// arrOne [ 'ECMAScript 2024', 'ECMAScript 2025', 'ECMAScript 2026' ]

const arrTwo = Array.from(gen(2024, 2026), (n) => `ECMAScript ${n}`);
console.log("arrTwo", arrTwo);
// arrTwo [ 'ECMAScript 2024', 'ECMAScript 2025', 'ECMAScript 2026' ]
```

For asynchronous iterators for the last few years, we only had a `for await` loop and no static method helper on the Array prototype.

```js
async function* gen(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const arr = [];
for await (const n of gen(2024, 2026)) {
  arr.push(`ECMAScript ${n}`);
}
console.log("arr", arr);
// arr [ 'ECMAScript 2024', 'ECMAScript 2025', 'ECMAScript 2026' ]
```

This year, the `Array.fromAsync` is joining the specification to fill this gap. It produces an array from an async iterator, or a sync generator that yields promises. Thanks to J.S. Choi for the [Array.fromAsync for JavaScript proposal](https://github.com/tc39/proposal-array-from-async).

```js
async function* asyncGen(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const arrOne = [];
for await (const n of asyncGen(2024, 2026)) {
  arrOne.push(`ECMAScript ${n}`);
}
console.log("arrOne", arrOne);
// arrOne [ 'ECMAScript 2024', 'ECMAScript 2025', 'ECMAScript 2026' ]

const arrTwo = await Array.fromAsync(
  asyncGen(2024, 2026),
  (n) => `ECMAScript ${n}`,
);
console.log("arrTwo", arrTwo);
// arrTwo [ 'ECMAScript 2024', 'ECMAScript 2025', 'ECMAScript 2026' ]
```

```js
function* gen(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

const arr = await Array.fromAsync(gen(2024, 2026), (n) => `ECMAScript ${n}`);
console.log("arr", arr);
// arr [ 'ECMAScript 2024', 'ECMAScript 2025', 'ECMAScript 2026' ]
```

## Error.isError

Thanks to Jordan Harband for the [`Error.isError()` proposal](https://github.com/tc39/proposal-is-error). A much safer alternative to the `instanceof Error`.

```js
try {
  throw new Error("This is an error");
} catch (error) {
  console.log(Error.isError(error));
  // true
}
```

```js
try {
  throw "This is not an error";
} catch (error) {
  console.log(Error.isError(error));
  // false
}
```

## Math.sumPrecise

Adding a list of numbers together is such a frequent use case for the `Array.reduce()` function. Thanks to Kevin Gibbons, who submitted a proposal for the Math.sumPrecise function, we no longer need reducers and, as a bonus, we’re getting better precision for floating-point numbers.

```js
const values = [1e20, 0.1, -1e20];

const sumOne = values.reduce((a, b) => a + b, 0);
console.log("sumOne", sumOne);
// sumOne 0

const sumTwo = Math.sumPrecise(values);
console.log("sumTwo", sumTwo);
// sumTwo 0.1
```

## Uint8Array to/from Base64 and hex

A built-in mechanism for converting `Uint8Array` to base64 and hex values and back. Another addition to the language that will remove [an additional dependency](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/base64.md#js-libraries).

```js
const value = new Uint8Array([69, 83, 50, 48, 50, 54]);

const valueBase64 = value.toBase64();
const valueHex = value.toHex();

console.log({ value });
console.log({ valueBase64 });
// { value: Uint8Array(6) [ 69, 83, 50, 48, 50, 54 ] }
// { valueBase64: 'RVMyMDI2' }

const valueBase64Decoded = Uint8Array.fromBase64(valueBase64);
const valueHexDecoded = Uint8Array.fromHex(valueHex);

console.log({ valueBase64Decoded });
console.log({ valueHexDecoded });
// { valueBase64Decoded: Uint8Array(6) [ 69, 83, 50, 48, 50, 54 ] }
// { valueHexDecoded: Uint8Array(6) [ 69, 83, 50, 48, 50, 54 ] }

// 😜
console.log(new TextDecoder().decode(valueBase64Decoded));
// ES2026
```

## Iterator Sequencing

Before the ES2026, combining iterators meant creating a generator that sequentially yields iterators. Look at this example.

```js
const iOne = Iterator.from([2022, 2023]);
const iTwo = Iterator.from([2025, 2026]);

function* combine(...iterators) {
  for (const source of iterators) {
    yield* source;
  }
}

const combinedIterator = combine(iOne, iTwo);
console.log("combinedIterator", Array.from(combinedIterator));
// combinedIterator [ 2022, 2023, 2025, 2026 ]
```

Thanks to Michael Ficarra, we no longer need to do that dance because the [proposal for the Iterator Sequencing](https://github.com/tc39/proposal-iterator-sequencing) landed. As a nice bonus, it also offers a convenient way of slotting values in (look at the 2024 in the example below).

```js
const iOne = Iterator.from([2022, 2023]);
const iTwo = Iterator.from([2025, 2026]);

const combinedIterator = Iterator.concat(iOne, [2024], iTwo);
console.log("combinedIterator", Array.from(combinedIterator));
// combinedIterator [ 2022, 2023, 2024, 2025, 2026 ]
```

## JSON.parse source text access

JSON marshalling/unmarshalling is lossy in JavaScript. Look at these two examples where deserialization produces an incorrect value and serialization that results in a `TypeError` for a perfectly valid `BigInt`.

```js
console.log(JSON.parse("999999999999999999"));
// 1000000000000000000
```

```js
console.log(JSON.stringify(9999999999999999n));
// TypeError: Do not know how to serialize a BigInt
```

[The `JSON.parse` source text access proposal](https://github.com/tc39/proposal-json-parse-with-source) by Richard Gibson comes with a solution for both of these issues. The reviver callback of the `JSON.parse`, in addition to the good old `key` and `value`, now also exposes a third argument that gives us access to the original `source` value. Similarly, on the `JSON.stringify` replacer function, we can pass the value through the new `JSON.rawJSON()`.

```js
console.log(
  JSON.parse("999999999999999999", (key, value, { source }) => BigInt(source)),
);
// 999999999999999999n

console.log(
  JSON.stringify(9999999999999999n, (key, value) => JSON.rawJSON(value)),
);
// 9999999999999999
```

## Upsert

This one is a pure convenience and will reduce tons of boilerplate code. No need to explicitly check for the existence of the key on the `Map`/`WeakMap` before inserting, because the upserting is now possible using the `getOrInsert` method. [The Upsert proposal](https://github.com/tc39/proposal-upsert) became part of the language because of the hard work by Daniel Minor, Lauritz Thoresen Angeltveit, Jonas Haukenes, Sune Lianes, Vetle Larsen and Mathias Hop Ness. Thank you!

```js
const settings = new Map();
settings.set("language", "en");

// no need for this dance anymore 🎉
// if (!settings.has("theme")) {
//   settings.set("theme", "dark");
// }
// if (!settings.has("language")) {
//   settings.set("language", "pl");
// }

console.log(settings.getOrInsert("theme", "dark"));
// dark
console.log(settings.getOrInsert("language", "pl"));
// en
```
