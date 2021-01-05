---
title: "The revealing module pattern in JavaScript explained"
summary: "Before ECMAScript 2015, JavaScript language was lacking an official module system. Lack of namespacing and protecting against polluting the global environment forced developers to design a solution for this problem. One of them is revealing module pattern. Have a look at the example below."
photo: "2021-01-06.jpg"
---

[Encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)), or [information hiding](https://en.wikipedia.org/wiki/Information_hiding) in other words, is one of the core characteristics of every module system. A well-designed module should export only a simple interface and keep the irrelevant logic private and inaccessible.

Before ECMAScript 2015, JavaScript language was lacking an official module system. Lack of namespacing and protecting against polluting the global environment forced developers to design a solution for this problem. One of them is revealing module pattern. Have a look at the example below.

```js
const myModule = (() => {
  const privateStuff = "private stuff";
  const publicStuff = "public stuff";

  return {
    publicStuff,
  };
})();

console.log(myModule.privateStuff); // undefined
console.log(myModule.publicStuff); // public stuff
```

Lexical scope of JavaScript functions keeps data that shouldn't be accessible by the user private (`privateStuff`). Immediately Invoked Function Expression (or IIFE, pronounced "iffy") exports only public-facing API (`publicStuff`) and assigns it to the `myModule` variable.

Quick and informative. Hopefully, you learned a thing. Until next time 👋
