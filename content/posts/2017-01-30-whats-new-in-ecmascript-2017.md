---
title: What's new in ECMAScript 2017
summary: Introduced in 2015, the ECMAScript annual release plan aims to add to the language any proposals that are ready at the time of the TC39 meeting. Here's what's new in ES2017.
photo: 2017-01-30.jpg
---

Two years ago when ECMAScript 2015 (colloquially known as a ES6) was standardized there was a massive update to the language. Announced at the same time was a yearly release plan that aims to deliver a new version of the language annually and ship it with the [proposals](https://github.com/tc39/ecma262/blob/master/README.md) that are ready at the time of the TC39 meeting. The list of language improvements is open and you can track it on the [TC39 Github account](https://github.com/tc39/proposals). You can find more info about the process itself [here](https://tc39.github.io/process-document/).

A year ago I published a [summary of new features from the 2016 spec](https://pawelgrzybek.com/whats-new-in-ecmascript-2016-es7/), and the list below presents the recently agreed proposals that will become part of ECMAScript this year.

## Async functions

Chained callbacks should have been ditched a long time ago. The combination of promises and generators provides a much better opportunity to work with asynchronous code in ECMAScript. [Async functions](https://tc39.github.io/ecmascript-asyncawait/) proposed by [Brian Terlson](https://twitter.com/bterlson) introduces a syntactic sugar for this powerful combination. [Jake Archibald](https://twitter.com/jaffathecake) published a [good introduction](https://developers.google.com/web/fundamentals/primers/async-functions) to the subject but if you are looking for a deeper explanation with tons of examples and use cases I highly recommend you have a look at ["Understanding JavaScript’s async await"](https://ponyfoo.com/articles/understanding-javascript-async-await) by [Nicolás Bevacqua](https://twitter.com/nzgb).

```
async function doSomething(id) {
  try {
    const valueOne = await someAsyncFunction(id);
    const valueTwo = await anotherAsyncFunction(valueOne);
    console.log(`Woho! The output of async call is: ${valueTwo}`);
  }
  catch (err) {
    console.log('Uuuups!', err);
  }
}
```

## Shared Memory and Atomics

[This proposal](https://github.com/tc39/ecmascript_sharedmem) by Lars T Hansen adds a form of shared memory to JavaScript. The new `SharedArrayBuffer` and  pre-existing `TypedArray` and `DataView` types can be used to allocate shared memory. The new `Atomics` object allows you to carry out some operations using shared memory. Quoting the author of this proposal it should help developers to handle the following use cases...

> Support for threaded code in programs written in other languages that are translated to asm.js or plain JS or a combination of the two, notably C and C++ but also other, safe, languages.

> Support for hand-written JS or JS+asm.js that makes use of multiprocessing facilities for select tasks, such as image processing, asset management, or game AI.

[A brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md) created by Lars T Hansen is a great explainer. [This article](http://2ality.com/2017/01/shared-array-buffer.html) by Dr. Axel Rauschmayer is a lengthy article that I highly encourage you to read if you would like to understand the background and dive deeper.

## Object.values and Object.entries

We don't need lodash or jQuery anymore to return enumerable pairs of entries or values from an object. The popularity of this use case have made `values()` and `entries()` new methods on the Object prototype in ES2017. Thanks to [Jordan Harband](https://twitter.com/ljharb) for [this proposal](https://github.com/tc39/proposal-object-values-entries). Lets have a look at an example...

```js
const pawelgrzybek = {
  name: 'Paweł',
  age: 29
};

Object.entries(pawelgrzybek);

// Returns
// [ [ 'name', 'Paweł' ], [ 'age', 29 ] ]
```

```js
const pawelgrzybek = {
  name: 'Paweł',
  age: 29
};

Object.values(pawelgrzybek);

// Returns
// [ 'Paweł', 29 ]
```

## String padding

Finally! [Jordan Harband & Rick Waldron](https://github.com/tc39/proposal-string-pad-start-end) just saved npm before the next catastrophe (read [here](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/) if you don't remember the leftpad crsis). Formatting of script output will become easier with the `padStart()` and `padEnd()` methods. Examples...

```js
'pawelgrzybek'.padStart(20);
// "        pawelgrzybek"

'pawelgrzybek'.padStart(20, '*');
// "********pawelgrzybek"
```

```js
'pawelgrzybek'.padEnd(20);
// "pawelgrzybek        "

'pawelgrzybek'.padEnd(20, '*');
// "pawelgrzybek********"
```

## Object.getOwnPropertyDescriptors

Copying between two objects has never been simple and never more required than now. In the age of functional programming where an object's immutability is crucial, having a native method to help us with that would be perfect. Introduced in ES2015 `Object.assign()` seems to be a good candidate to do this, but unfortunately [it has its limitations](http://2ality.com/2016/02/object-getownpropertydescriptors.html). Jordan Harband & Andrea Giammarchi proposed [this feature](https://github.com/tc39/proposal-object-getownpropertydescriptors) to solve the issue.

```js
const source = {
  name: 'Some name',
  id: 123
}
const sourceClone = Object.create(Object.getPrototypeOf(source), Object.getOwnPropertyDescriptors(source));
```

```js
const stateClone = Object.create(
  Object.getPrototypeOf(this.state),
  Object.getOwnPropertyDescriptors(this.state)
);

// some changes on stateClone
// some changes on stateClone

this.setState(stateClone);
```

## Trailing commas in function parameter lists

Jeff Morrison proposed this [pretty aesthetic update](https://github.com/tc39/proposal-trailing-function-commas). [I published a whole article](https://pawelgrzybek.com/trailing-comma-in-ecmascript2017-function-parameter-list/) about it the other day. Essentially you can place a trailing comma after the last function parameter now and your compiler won't complain at you. It will improve the readability of the output in version control systems.

```js
function someFunction(
  paramsOne,
  paramsTwo,
  paramsThree,
) {
  console.log('Look ma! Trailing comma!');
}
```

That is it for this year. Some of these features are already implemented in your browser and the majority of them can be transpiled with a little help from Babel and some appropriate plugins. Personally, I'm extremely happy about async functions and this is definitely my favourite feature that will become a part of ECMAScript 2017. What are your thoughts? Is there anything in particular that you would like to see in the language's core next year?
