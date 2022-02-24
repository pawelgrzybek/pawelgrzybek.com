---
title: "A few methods to check if all values in the JavaScript array are the same"
summary: "You can solve the same problem in multiple ways. That's what I love about programming. Checking if all items in an array are the same is a  great exercise, isn't it?"
photo: "2022-02-24.jpg"
---

There are many solutions to the same problem in programming, and that’s one of my favourite things about it. Checking if all the items in an array are the same is an interesting exercise, so let’s look at a few options.

- We want to return `false` for `['Ed', 'Edd', 'Eddy']`
- We want to return `true` for `['Edd', 'Edd', 'Edd']`

```js
const f = (array) => array.every((item) => item === array[0]);

f(["Ed", "Edd", "Eddy"]); // false
f(["Edd", "Edd", "Edd"]); // true
```

```js
const f = const f = ([first, ...rest]) => rest.every((item) => item === first);

f(["Ed", "Edd", "Eddy"]); // false
f(["Edd", "Edd", "Edd"]); // true
```

```js
const f = (array) => !array.some((item) => item !== array[0]);

f(["Ed", "Edd", "Eddy"]); // false
f(["Edd", "Edd", "Edd"]); // true
```

```js
const f = (array) => new Set(array).size === 1;

f(["Ed", "Edd", "Eddy"]); // false
f(["Edd", "Edd", "Edd"]); // true
```

```js
const f = (array) => {
  for (let index = 1; index < array.length; index++) {
    if (array[index] !== array[0]) {
      return false;
    }
  }

  return true;
};

f(["Ed", "Edd", "Eddy"]); // false
f(["Edd", "Edd", "Edd"]); // true
```

```js
import { uniq } from "lodash";

const f = (array) => uniq(array).length === 1;

f(["Ed", "Edd", "Eddy"]); // false
f(["Edd", "Edd", "Edd"]); // true
```

```js
import { without } from "lodash";

const f = (array) => !without(array, array[0]).length;

f(["Ed", "Edd", "Eddy"]); // false
f(["Edd", "Edd", "Edd"]); // true
```

From all the methods listed above, `every` and `new Set()` is my way to go. Nothing wrong with the good old `for` loop! Personally, for simple things like that, I wouldn't use external libraries like `lodash`, but you do you.

That's it for today. Can you think of any more solutions to solve this little problem? I am super curious what is your preference. For now, stay tuned for the next post and keep coding 👩‍💻 🧑‍💻
