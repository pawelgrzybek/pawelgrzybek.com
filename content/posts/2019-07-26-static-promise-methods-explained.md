---
title: "Static promise methods explained"
description: ""
photo: 2019-07-26.jpg
draft: true
---

[Promises added to ECMAScript 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects) gave us a new way of dealing with deferred computations. In ["From callback hell
through promises to
async functions"](https://pawelgrzybek.com/from-a-callback-hell-through-promises-to-async-functions/) I am explaining the differences, pros and cons of each of the popular methods of handling asynchronous code. Today I would like to go through `Promise` static methods and provide some practical use cases.

## Prerequisite — basic promise states and methods

The `than`, `catch` and `finally` keywords should already feel settled down in your long term memory by now, but just in case you need some refresher let's have a look at some basic example.

```js
fetch("https://api.github.com/users/pawelgrzybek")
  .then(data => data.json())
  .then(dataJSON => console.log(dataJSON))
  .catch(error => console.error(error))
  .finally(() => console.log("Finally resolved / rejected! Uff!"));
```

Promise object like this can live in [four distinguished states](https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects):

- pending - still waiting
- fulfilled - promise succeeded
- rejected - promise failed
- settled - succeeded or failed

To orchestrate its lifecycle, promises are using few methods from it's prototype:

- `than` - adds callback to fulfilled promise
- `catch` - adds callback to rejected promise
- `finally` - adds callback to settled promise

Of course all of these is much more complicated, but to comfortably grasp the concepts explained in a further part of this article this should be more than enough.

## Four static Promise methods

The `Promise.all` and `Promise.race` are part of a JavaScript since 2015. It is a time to add some more methods to the spec — `Promise.allSettled` and `Promise.any`.

- `Promise.all` - ES 2015
- `Promise.race` - ES 2015
- `Promise.allSettled` - ES 2020
- `Promise.any` - ES 2020 (maybe)

### Promise.all()

`Promise.all` is the way to go if you want to know when either all promises have fulfilled or one of them rejected.

```js
Promise.all([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(data =>
    console.log(`Cool dudes are: ${data.map(dude => dude.name).join(" and ")}`)
  )
  .catch(error => console.error(error));
```

### Promise.race()

`Promise.race` is the way to go if you want to know when either first promise fulfilled or one of them rejected.

```js
Promise.race([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(data => console.log(`The winner is: ${data.name}`))
  .catch(error => console.error(error));
```

### Promise.allSettled()

`Promise.allSettled` is the way to go if you want to know when all promises settled regardless of the result (fulfilled or rejected).

```js
Promise.allSettled([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(result => console.log(`Cool dudes are: ${result.name}`));
```

### Promise.any()

`Promise.any` is the way to go if you want to know when first promise fulfills. In contrast to `Promise.race` it doesn't reject when one of the promises fail.

```js
Promise.any([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(result => console.log(`Cool dudes are: ${result.name}`))
  .catch(error => console.error(error));
```

## To recapitulate

That will do…

TABLE HERE
