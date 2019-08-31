---
title: "Optional chaining in JavaScript"
description: ""
photo: 2019-08-30.jpg
draft: true
---

Over the years we found a lot of hideous solutions to get an item from deeply nested object and prevent script from failing in case the value isn't present. Luckily [Optional Chaining for JavaScript](https://github.com/tc39/proposal-optional-chaining) proposed by [Claude Pache](https://github.com/claudepache), [Gabriel Isenberg](https://twitter.com/the_gisenberg) and [Dustin Savery](https://twitter.com/dustinsavery) is coming and gives an elegent solution for this problem. Lets get into it.

## The current state of chaining

Imagine that we deal with a deeply nested object and we are after grabbing a value of a property nested few levels down. As long as we are 100% sure that property of interest exists there is no issue with that. Life of a developer is not a land of milk and honey and Murphy's law exists. Chance that property that you are expecting doesn't exist — may that be inconsistent API, buggy implementation or simply incomplete record, whatever. Example…

```js
const dudes = {
  pawel: {
    age: 32,
    username: {
      github: "pawelgrzybek",
      twitter: "pawelgrzybek",
      instagram: "pawelgrzybek"
    }
  },
  dan: {
    age: 32
  }
};
```

Let's print Pawel's Instagram username…

```js
console.log(dudes.pawel.username.instagram);
// pawelgrzybek
```

Simple, isn't it? Now Dan's username……

```js
console.log(dudes.dan.username.instagram);
// Uncaught TypeError: Cannot read property 'instagram' of undefined
```

Big red error thrown, app crashed but we are asleep and loosing million dollars per hour. Waking to an instant depression and die week later. This Error could be prevented using…

###
###

## How did we historically solve chaining issue

- chaining
- lodash
- other libraries (do a research)
- if statetments
- nice we have all those optionas but it is so commmon it would be nice to have it built to the language — and there you go

## Thanks JavaScript for Optional Chaining

- it is almost here
- proposal merged?
- intuitive and native
- no need for external packages
- hopefullly this post helped you out
- see you next time
