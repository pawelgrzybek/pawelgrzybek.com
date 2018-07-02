---
title: "Value vs. reference in JavaScript"
description: ""
photo: top-picks.jpg
draft: true
---

I will show you something. Look!

```js
function increase(x) {
  x++;
}

let a = 1;
increase(a);

console.log(a);
// 1
```

```js
function increase(x) {
  x[0]++;
}

let a = [1];
increase(a);

console.log(a);
// 2
```

What is going one here? We are increasing the same number (1) but dependable of the argument type that we pass to `increase` function we get a different result. Passed number doesn't affect the variable value, where passing the array containing the same number increases the value of inner element. 
