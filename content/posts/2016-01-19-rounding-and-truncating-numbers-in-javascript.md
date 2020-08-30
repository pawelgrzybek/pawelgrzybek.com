---
title: Rounding and truncating numbers in JavaScript
summary: Convert primary school math skills into code. Let's put together all that we know about rounding and truncating numbers in JavaScript.
photo: 2016-01-19.jpg
---

Rounding and truncating is a bread and butter action for every single developer. It was covered during your first few math lessons in primary school. Hopefully you still remember how it works in the world of numbers.

> 5 or more? Raise the Score.
> 4 or less? Let it Rest.

Let's use this knowledge and translate it to JavaScript using the built-in object called `Math`. As the name can suggests, it has a collection of properties and methods for mathematical operations on numbers. There is one small difference between `Math` and other built-in global objects. `Math` isn't a constructor which means that all properties and methods that belong to it are static (meaning that they need to be called by using Math as an object).

![Math Object in Google Chrome Console](/photos/2016-01-19-1.gif)

## Rounding vs Truncating

The difference between these two methods is minor but very important to understand. Both of them are methods of approximating a number by dropping decimal places. Rounding approximates a number using a nearby number at a given degree of accuracy. It can occur in two directions: up and down. Rounding up approximates a number towards positive infinity. Rounding down towards negative infinity. Truncating approximates without rounding. In other words, it "rounds" towards zero.

```js
Rounding
3.14159 ≈ 3.1416

Truncating
3.14159 ≈ 3.1415
```

Hopefully you get the difference. It makes truncating rarely useful in precise calculations (although JavaScript probably isn't a good choice at all if you need precise calculations) but you can come across a situation when it may be irreplaceable. Once example can be when needing to drop decimal places from a pixel value to avoid anti aliasing or weird pixel rounding which is completely different across browser engines.

## Rounding numbers in Javascript

Rounding is straight forward. We can round to the nearest integer, round down or round up. JavaScript uses three methods to achieve this:

- `Math.round()` - rounds to the nearest integer (if the fraction is 0.5 or greater - rounds up)
- `Math.floor()` - rounds down
- `Math.ceil()` - rounds up

```js
Math.round(3.14159)  // 3
Math.round(3.5)      // 4
Math.floor(3.8)      // 3
Math.ceil(3.2)       // 4
```

Rounding numbers with decimal precision requires a little bit of calculation and `Math.round()`. Optionally we can use the `toFixed()` method that belongs to the `Number` prototype. The output type of `toFixed()` is a `string` which needs to be passed to a top-level function called `parseFloat()` to return a `number`. Unfortunately this seems to be [really slow](http://jsperf.com/rounding-methods-in-javascript).

```js
Math.round(3.14159 * 100) / 100  // 3.14

3.14159.toFixed(2);              // 3.14 returns a string
parseFloat(3.14159.toFixed(2));  // 3.14 returns a number
```

## Truncating numbers in Javascript

`Math.trunc()` simply removes all the fractional digits. It takes one argument which is a number. If the argument is a positive number it behaves exactly the same as `Math.floor()`. For negative numbers it does the same job as `Math.ceil()`.

```js
Math.trunc(3.14159);   //  3
Math.trunc(-3.14159);  // -3
```

It's worth mentioning that the browser support for `Math.trunc()` isn't great. It is part of new [ES2015 (yeah, I prefer ES6 too) specification](http://www.ecma-international.org/ecma-262/6.0/#sec-math.trunc). Have a look at the browser support list:

- Google Chrome >= 38
- Firefox >= 25
- Internet Explorer >= Nope :(
- Opera >= 25
- Safari >= 7.1

Luckily there is a way to use this without ES6 support (thanks to Johny who suggested this solution in comments below). We can use [bitwise operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) to accomplish this task. Unfortunately there are some restriction as well. All bitwise operations work on signed 32-bit integers. Using them converts a float to an integer. In practice it means that we can safely work up to `2^31−1` ([2 147 483 647](https://en.wikipedia.org/wiki/2147483647_(number))) which is much less than `Number.MAX_VALUE` (1.7976931348623157e+308). This isn't a great idea for monetary calculations either.

```js
3.14159 | 0;   //  3
-3.14159 | 0;  // -3

3000000000.1 | 0  // -1294967296 Ups :(
```

### TLTR (too long to read)

I know, I know - time is money. Lets sum it up.

- `Math.round()` - rounds to the nearest integer
- `Math.floor()` - rounds down towards negative infinity
- `Math.ceil()` - rounds up towards positive infinity
- `Math.trunc()` - rounds up or down towards zero (bad browsers support)

![Math.floor() & Math.ceil() & Math.trunc() on timeline](/photos/2016-01-19-2.jpg)
