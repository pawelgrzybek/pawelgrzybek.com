---
title: "Static promise methods explained"
description: ""
photo: 2019-07-26.jpg
draft: true
---

[Promises added to ECMAScript 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects) gave us a new way of dealing with deferred computations. In ["From callback hel
through promises to
sync functions"](https://pawelgrzybek.com/from-a-callback-hell-through-promises-to-async-functions/) I am explaining the differences, pros and cons of each of the popular methods of handling asynchronous code. Today I would like to go through `Promise` static methods and present and think of some practical use cases. - adds callback to 

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

To orchestrate its lifecycle, promise is using few methods from it's propotype:

- `than` - adds callback to fulfilled promise
- `catch` - adds callback to rejected promise
- `finally` - adds callback to settled promise

Of course all of these is much more complicated, but to comfortably grasp the concepts explained in a further part of this article this should be more than enough.

## Promise.all()

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

### When to use Promise.all()

## Promise.race()

```js
Promise.race([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(data => console.log(`The winner is: ${data.name}`))
  .catch(error => console.error(error));
```

### When to use Promise.race()

## Promise.allSettled()

```js
Promise.allSettled([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(result => console.log(`Cool dudes are: ${result.name}`))
  .catch(error => console.error(error));
```

### When to use Promise.allSettled()

## Promise.any()

```js
Promise.any([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(result => console.log(`Cool dudes are: ${result.name}`))
  .catch(error => console.error(error));
```

### When to use Promise.any()

## To recapitulate

That will do…

TABLE HERE
