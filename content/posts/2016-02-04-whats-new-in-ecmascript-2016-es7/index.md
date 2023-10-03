---
title: What's new in ECMAScript 2016 (ES7)
summary: ES2015 brought a lot of large-scale features to the language. The new release process is going to introduce a few small bits every year. Here's what's new in ES2016.
photo: 2016-02-04.jpg
---

In June 2015 the TC39 (Technical Committee 39) officially released a [spec of ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) (colloquially known as a ES6). In parallel to the new spec, a new naming system within the language was introduced which is related with the new yearly release process. The plan is to release a new version of the language every year, and ship it with [features](https://github.com/tc39/ecma262/blob/master/README.md) that are ready at the time. ES2015 added a lot of amazing features. If you are not familiar with these fresh add-ons yet, check ["ES6 Overview in 350 Bullet Points"](https://ponyfoo.com/articles/es6) by [Nicolás Bevacqua](https://twitter.com/nzgb?lang=en). It's the best summary that I have seen so far. Luckily we shouldn't expect updates as huge every year which give us a chance to follow the spec.

The final list of features that we're going to see in ECMAScript 2016 is ready and as expected, it is just a small update. Let's have a look!

## Array.prototype.includes

This [feature](https://github.com/tc39/Array.prototype.includes/) proposed by Domenic Denicola and Rick Waldron  checks if the array includes an element and returns a boolean value. The syntax is super simple.

```js
['a', 'b', 'c'].includes('a');  // true
['a', 'b', 'c'].includes('d');  // false
```

Previously we did it like this which is not as self explanatory.

```js
['a', 'b', 'c'].indexOf('a') >= 0 ? true : false;  // true
['a', 'b', 'c'].indexOf('d') >= 0 ? true : false;  // false
```

This new feature also solves the problem of checking for `NaN` in an array. Compare these two examples and results.

```js
['a', 'b', 'c', NaN].includes(NaN);  // true
['a', 'b', 'c', NaN].indexOf(NaN) >= 0 ? true : false;  // false
```

## Exponentiation Operator

Proposed by Rick Waldron, Claude Pache and Brendan Eich, this [feature](https://github.com/rwaldron/exponentiation-operator) brings a much nicer notation to exponentiation. It uses [infix notation](https://en.wikipedia.org/wiki/Infix_notation) which is much cleaner than function notation (`Math.pow()`). We can find the same notation in other programming languages like: Python, Ruby or Pearl. Have look at the examples.

```js
2 ** 4;  // 16
```

```js
let a = 2;
a **= 4; // 16
```

Previously...

```js
Math.pow(2, 4);  // 16
```
