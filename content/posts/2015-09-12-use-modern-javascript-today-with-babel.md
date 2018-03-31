---
title: Use modern JavaScript today with Babel
description: ECMAScript 2015 has been recently ratified and brought us many cool features. As you may expect, browsers support is the only issue, but not with Babel.
date: 2015-09-12
photo: 2015-09-12.jpg
---

In June 2015 new [version of ECMAScript](http://www.ecma-international.org/ecma-262/6.0/index.html) has been ratified and brought us many cool features. Last big update like that happened in 2009 when ES5 has been officially revealed. As always the biggest problem with new standards is browsers compatibility (incompatibility suits better here). This is the only reason that restrains developers from using latest standards. Fortunately we have a [Babel](https://babeljs.io/) (formerly known as 6to5). It allows you to use new syntax by transpiling your ECMAScript 2015 into ES5 code, that works fine in current JavaScript environments. How cool is that? [Setup](https://babeljs.io/docs/setup/) is super easy and well documented. If you are not 100% convinced yet, you can play around with it [online](https://babeljs.io/repl/).

Practice is a best teacher, so let me show you Babel in action. I'm going to use one of my favourite features in new ES2015 specification - default parameter values.

```js
// You do:

function sum(x = 5, y = 10) {
  return(x + y);
}
```

```js
// Babel does:

function sum() {
  var x = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
  var y = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

  return x + y;
}
```

Be ahead browsers adoption and start your journey with ECMAScript 2015 today. [Big companies](https://babeljs.io/users/) that are dictating development path of web technologies are using Babel already. You should as well! New specification brings us so many new features that are worth using. I'm planing to publish an article about my favourite parts of ES2015, but now I'm too busy with experimenting with Babel. Enjoy!
