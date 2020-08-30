---
title: What's new in ECMAScript 2018
summary: The last TC39 meeting resulted in finalised features set for ECMAScript 2018. This article presents all the new goodies — let's get on it.
photo: 2018-01-29.jpg
---

It is that time of a year again after the TC39 meeting, which finalises a list of new features that we will get in the latest ECMAScript 2018 update. I published a list of new goodies for [2017 version](https://pawelgrzybek.com/whats-new-in-ecmascript-2017/), just as I did in [2016](https://pawelgrzybek.com/whats-new-in-ecmascript-2016-es7/). It is a good time to familiarise ourseves with the new features soon to be at to our disposal this year.

## Rest/Spread Properties by Sebastian Markbåge

ECMASCript 2015 introuduced rest / spread operators for `Array`s. This year the same feature welcomes `Object`s. Let's have a look at two examples.

```js
const dude = {
  name: 'Pawel',
  age: 30,
  role: 'Front End Developer',
}
const { name, ...details } = dude;

console.log(name);
// Pawel

console.log(details);
// {
//   age: 30,
//   role: 'Front End Developer',
// }
```

```js
const details = {
  age: 30,
  role: 'Front End Developer',
}

const dude = {
  name: 'Pawel',
  ...details
}

console.log(dude);
// {
//   name: 'Pawel',
//   age: 30,
//   role: 'Front End Developer',
// }
```

- [Object Rest/Spread Properties proposal for ECMAScript](https://github.com/tc39/proposal-object-rest-spread)
- [ES2018: Rest/Spread Properties by Dr. Axel Rauschmayer](http://2ality.com/2016/10/rest-spread-properties.html)

## Asynchronous Iteration by Domenic Denicola

Introduced in ECMAScript 2015, iterator interface returns an object with `{ value, done }` keys via `next()` interface. It is possible to use it with iterables that are known ahead of time. The `asyncIterator` allows us to replicate the same functionality for asynchronous operations and returns a promise for a `{ value, done }` pair.

```js
async function* createAsyncIterable(iterable) {
  for (const elem of iterable) {
      yield elem;
  }
}

const asyncIterable = createAsyncIterable(['async 1', 'async 2']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();
asyncIterator.next()
.then(result => {
    console.log(result);
    // {
    //   value: 'async 1',
    //   done: false,
    // }
    return asyncIterator.next();
})
.then(result => {
    console.log(result);
    // {
    //   value: 'async 2',
    //   done: false,
    // }
    return asyncIterator.next();
})
.then(result => {
    console.log(result);
    // {
    //   value: 'undefined',
    //   done: true,
    // }
});
```

- [Asynchronous iteration proposal](https://github.com/tc39/proposal-async-iteration)
- [ES2018: asynchronous iteration by Dr. Axel Rauschmayer](http://2ality.com/2016/10/asynchronous-iteration.html)
- [JavaScript Asynchronous Iteration Proposal by Nicolás Bevacqua](https://ponyfoo.com/articles/javascript-asynchronous-iteration-proposal)

## Promise.prototype.finally

A number of promise libraries have an implementation of the useful `finally()` method. [Bluebird](http://bluebirdjs.com/docs/api/finally.html), [Q](https://github.com/kriskowal/q/wiki/API-Reference#promisefinallycallback), and [when](https://github.com/cujojs/when/blob/master/docs/api.md#promisefinally) just to name few. It is now time for a native implementation — `Promise.prototype.finally` is finally here.

```js
fetch('https://api.github.com/users/pawelgrzybek')
  .then(response => response.json())
  .then(data  => console.log(data.name))
  .catch(err => console.error(err))
  .finally(() => console.log('All fetched :-*'));
```

- [Promise.prototype.finally proposal](https://github.com/tc39/proposal-promise-finally)

## Template Literal Revision by Tim Disney

Introduced in ECMAScript 2015, template literals come with some restrictions on escape sequences. This years version of the language solves all of these blockers. Currently valid escape sequences are replaced with a Unicode code point — invalid ones throw an early error. This proposal changes this behaviour by returning `undefined` for invalid strings and keeping the original one accessible via `.raw`.

```js
function tag(strs) {
  console.log(strs[0]);
  // undefined

  console.log(strs.raw[0]);
  // "\\Some string with invalid excape sequence \\u{55}"
}
tag`\Some string with invalid excape sequence \u{55}`
```

- [Template Literal Revision proposal](https://tc39.github.io/proposal-template-literal-revision/)

## s (dotAll) flag for regular expressions by Mathias Bynens

In regular expression patterns, the dot `.` matches any character but it is getting a little bit problematic with astral and line terminator characters. The need for matching any character without resorting to cryptic workarounds is very common. Other languages like Java, C#, Pearl or PHP have got an implementation of this functionality. Now it is coming to JavaScript under the `s` flag.

```js
/foo.bar/.test('foo\nbar');
// false

/foo.bar/s.test('foo\nbar');
// true
```

- [s (dotAll) flag for regular expressions proposal](https://github.com/tc39/proposal-regexp-dotall-flag)

## Unicode property escapes in regular expressions by Mathias Bynens

Currently there is no way to access Unicode character properties natively in JavaScript regular expressions. This proposal adds Unicode property escapes via `\p{…}` and `\P{…}`.

```js
const regexGreekSymbol = /\p{Script=Greek}/u;
regexGreekSymbol.test('π');
// → true
```

- [Unicode property escapes in regular expressions proposal](https://github.com/tc39/proposal-regexp-unicode-property-escapes)

## RegExp Named Capture Groups by Gorkem Yakin and Daniel Ehrenberg

Numbered capture groups refer to a part of a string matched by regular expression — it works but it can get a little bit difficult to read and refactor. Named capture groups to the rescue.

```js
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const result = re.exec('2019-01-29');
// result.groups.year === '2019';
// result.groups.month === '01';
// result.groups.day === '29';

// result[0] === '2019-01-29';
// result[1] === '2019';
// result[2] === '01';
// result[3] === '29';
```

- [RegExp Named Capture Groups proposal](https://github.com/tc39/proposal-regexp-named-groups)

## RegExp Lookbehind Assertions by Gorkem Yakin, Nozomu Katō and Daniel Ehrenberg

Currently ECMAScript RegExp has lookahead assertions that check a string in a forward direction — it is missing a backward check though. This proposal adds this feature to the language via `(?<=…)` and returns a result without capturing a checked string.

```js
'£10.53'.match(/(?<=\$)\d+(\.\d*)?/)
// null

'$10.53'.match(/(?<=\$)\d+(\.\d*)?/)
// ["10.53", ".53", index: 1, input: "$10.53"]
```

- [RegExp Lookbehind Assertions proposal](https://github.com/tc39/proposal-regexp-lookbehind)
