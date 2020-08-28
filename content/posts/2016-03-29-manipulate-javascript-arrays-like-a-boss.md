---
title: Manipulate JavaScript Arrays like a boss
description: JavaScript arrays come with many useful methods. Mastering them can make you a much more efficient programmer. Let's have a look at a few of them.
photo: 2016-03-29.jpg
---

One of the most amazing things in programming is the fact that one task can be achieved via a number of different methods. My recent journey through the world of [React.js](https://facebook.github.io/react/) became extremely fascinating and not just because of the amazingness of this library. Spending so much time in the JavaScript environment taught me a lot of the language's core features. I would like to spend a few minutes showing you three easy methods that will make you a hero using arrays and give you a great start with functional programming. I will try to keep all of the examples in this article really simple, just to make the concepts discussed crystal clear.

## Stop looping, start mapping

[`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) is a method that behaves like a loop. It creates a new array and returns values transformed by the applied callback function. It doesn't do anything more than the standard `for` or `forEach` can do, it just provides a much nicer notation. It always returns an array with the same length and every element corresponds to the same position in the source array. Let's have a look at these examples where we're increasing each number in a collection by one. The first one with a `for` loop and the next one using `.map()`.

```js
var numbers = [2, 5, 8];
var numbersNew = [];

for (var i = 0; i < numbers.length; i++) {
  numbersNew.push(numbers[i] + 1);
}

console.log(numbersNew);
// [ 3, 6, 9 ]
```

```js
var numbers = [2, 5, 8];
var numbersNew = numbers.map(function(num) {
  return num + 1;
});

console.log(numbersNew);
// [ 3, 6, 9 ]
```

And ES2015 version...

```js
var numbers = [2, 5, 8];
var numbersNew = numbers.map((num) => num + 1);

console.log(numbersNew);
// [ 3, 6, 9 ]
```

## Filter values in an array

What if we would like to create a new array based on an already existing one, but simultaneously remove all the elements that are smaller than 5? Easy, right? Write a quick loop, an if statement, and push the result to a new collection. Yes, you are right, it does the job, but let me introduce you to the [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method. It works in a very similar way to `map()`, but the callback function, instead of returning a modified element, returns a boolean value that dictates if the element should be added to the new array (`true`) or not (`false`). Compared to map, `filter` doesn't guarantee that the length of the new array is the same as the source array. Time for some examples. Again, the first one using a `for` loop and the second one using the `filter()` method.

```js
var numbers = [2, 5, 8];
var numbersNew = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 5) {
    numbersNew.push(numbers[i]);
  }
}

console.log(numbersNew);
// [ 5, 8 ]
```

```js
var numbers = [2, 5, 8];
var numbersNew = numbers.filter(function(num) {
  return num >= 5;
});

console.log(numbersNew);
// [ 5, 8 ]
```

And ES2015 version...

```js
var numbers = [2, 5, 8];
var numbersNew = numbers.filter((num) => num >= 5);

console.log(numbersNew);
// [ 5, 8 ]
```

## Reducing an array's values to a single value

Lets say we would like to sum all of the values in an array. [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) comes in handy. This method is a bit more complicated, but at the same time much more powerful. Compared to `map()` and `filter()`, `reduce()` can take one more argument - the initial value - not only the callback function. The second argument is optional. Let's go back to our example and try to sum up all the values inside an array. Similarly to the previous examples, I will first show you a possible solution using a `for` loop, and then via the `reduce()` method.

```js
var numbers = [2, 5, 8];
var numbersSum = 0;

for (var i = 0; i < numbers.length; i++) {
  numbersSum += numbers[i]
}

console.log(numbersSum);
// 15
```

```js
var numbers = [2, 5, 8];
var numbersSum = numbers.reduce(function(total, num) {
  return total + num;
});

console.log(numbersSum);
// 15
```

And ES2015 version...

```js
var numbers = [2, 5, 8];
var numbersSum = numbers.reduce((total, num) => total + num);

console.log(numbersSum);
// 15
```

Wow, wow, wow! What just happened here? Easy, it is not as difficult or as magical as it looks at first glance. The names of the arguments that I used inside the callback function should give you a big hint. Let's go through every iteration step by step. Initially when the method `reduce()` traverses through a `number` array it will take the first value (2) of the array as the `total` argument and the second value (5) as `num`. The sum of the arguments (2 + 5) is returned (7) and is passed to the `total` argument to use in the next iteration. The array's third value (8) is assigned to the `num` argument. Again, the sum of these two values is returned (7 + 8). Because we don't have any more values in the `numbers` array, we receive 15 as the result of the `reduce()` method. Hopefully you understand the pattern.

I mentioned earlier that the `reduce()` method optionally accepts a second argument as the initial value. Let's repeat our example but with an initial value of 1000.

```js
var numbers = [2, 5, 8];
var numbersSum = numbers.reduce(function(total, num) {
  return total + num;
}, 1000);

console.log(numbersSum);
// 1015
```

And ES2015 version...

```js
var numbers = [2, 5, 8];
var numbersSum = numbers.reduce(((total, num) => total + num), 1000);

console.log(numbersSum);
// 1015
```

Passing the optional initial value as a second argument slightly changes the previously described behavior. The difference is minor though. Initially it assigns 1000 to the `total` argument and the first value in the array (2) as the `num` argument. The pattern then continues identically.

## Chain it together

The beautiful thing about `map()` and `filter()` is the fact that an array goes in and an array comes out as a result of the method. This behavior means we can chain these methods together with ease.

```js
var numbers = [2, 5, 8];
var numbersNew = numbers.map(function(num) {
  return num + 1;
}).filter(function(num) {
  return num >= 5;
});

console.log(numbersNew);
// [ 6, 9 ]
```

And ES2015 version...

```js
var numbers = [2, 5, 8];
var numbersNew = numbers.map((num) => num + 1).filter((num) => num >= 5);

console.log(numbersNew);
// [ 6, 9 ]
```

## I hope this helped you out

When I learned these three methods I had one of those "WOW" moments and I wanted to use them everywhere. However you should be aware about the lack of support for these features in Internet Explorer 8 and older. I hope you don't need to support these browsers anymore, but if you have to [es5-shim](https://github.com/kriskowal/es5-shim/) covers you.

Mattias Petter Johansson and his [Fun Fun Function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q/feed) YouTube channel is a good place to visit if you would like a deeper explanation of [filter()](https://youtu.be/BMUiFMZr7vk) and [map()](https://youtu.be/bCqtb-Z5YGQ). Subscribe to it and wait for new episodes every Monday morning!

Bye :-*
