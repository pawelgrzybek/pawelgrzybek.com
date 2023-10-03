---
title: Loop through a collection of DOM elements
summary: Looping through a NodeList isn't as easy as iterating over a JavaScript array. In this article I am going to cover the possible methods (and hacks) to do it.
---

It is easy to think of a collection of DOM elements as a regular JavaScript array. This is a gotcha that many beginners fall into (including myself). NodeLists don't share all of the `Array`’s prototype methods, but there are a heap of ways to achieve the desired result. Let's go through the list of possible methods and hacks. No frameworks or libraries today - it's pure js day fellaz!

## NodeList.forEach()

Aha! You'll know this method mainly from the [Array's prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) but actually some browsers contain this function in the [prototype of NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach) too. However, because of the lack of sufficient browser support I wouldn't consider it the way to go. This list would have been incomplete without it though.

- Google Chrome - yeep
- Firefox >= 50
- IE - hazard a guess!
- Edge - nope
- Opera - yeep
- Safari (stable version) - nope
- Safari (Technology Preview) - yeep
- Android - nope
- Android (Chrome) - yeep
- Firefox Mobile - yeep
- iOS - nope

```js
const articles = document.querySelectorAll('article');

articles.forEach(a => {
  a.style.fontFamily = 'Comic Sans MS';
});

// Chrome - 'Comic Sans MS' everywhere dudes! Sweet!
// Firefox - TypeError: articles.forEach is not a function
```

## Array.prototype.forEach()

If `forEach()` doesn't exist in `NodeList`'s prototype, you can always ask your good friend `Array` to lend it to you — your browser definitely has this (if it's not Internet Explorer 8 or below).

```js
const articles = document.querySelectorAll('article');

[].forEach.call(articles, a => {
  a.style.fontFamily = 'Comic Sans MS';
});

// or

Array.prototype.forEach.call(articles, a => {
  a.style.fontFamily = 'Comic Sans MS';
});
```

If you don't like `call()` or `apply()` you can convert the DOM elements to an array first and then use `forEach()` as you intend to.

```js
const articles = [].slice.call(document.querySelectorAll('article'));

// or

const articles = [...document.querySelectorAll('article')];

// or

const articles = Array.from(document.querySelectorAll('article'));

articles.forEach(a => {
  a.style.fontFamily = 'Comic Sans MS';
});
```

You can even go absolutely crazy and add Array's `forEach()` to `NodeList.prototype`.

```js
if (typeof NodeList.prototype.forEach === "undefined") {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (typeof HTMLCollection.prototype.forEach === "undefined") {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}

const articles = document.querySelectorAll('article');

articles.forEach(a => {
  a.style.fontFamily = 'Comic Sans MS';
});
```

All three of the snippets above will work just fine. They do feel a bit hacky though and I'm [not the only one](https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/) who thinks like this. Bear in mind that the spread operator presented above `[...]` and `Array.from()` are parts of the modern spec. To use them without worry equip yourself with [Babel](https://pawelgrzybek.com/use-modern-javascript-today-with-babel/).

## for loop

The good ol' [`for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) is a good candidate to do this job. It's a very well supported and reliable method. No hacks, no babels!

```js
const articles = document.querySelectorAll('article');

for (let i = 0; i < articles.length; i++) {
  articles[i].style.fontFamily = 'Comic Sans MS';
}
```

## for-of loop

The ECMAScript 2015 spec brought us a new tool to traverse through iterable objects. As we saw in the previous example, `NodeList` is definitely an iterable collection so we can easily add a [for..of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop to our collection. [Babel](https://pawelgrzybek.com/use-modern-javascript-today-with-babel/) may be helpful in this instance as it is a part of the spec that is a bit more modern than your clients requirements.

```js
const articles = document.querySelectorAll('article');

for (let a of articles) {
  a.style.fontFamily = 'Comic Sans MS';
}
```

## Conclusions

Hopefully this list of methods (and hacks) helped you out. Use whatever feels right depending on your use case. My preferable method from the list above is the `for...of` loop as almost every single line of my code goes through a compiler that will translate it to a syntax that even old school browsers can handle. If I need to quickly smash an example out I use a `for` loop.

Let me know your thoughts. What is your preferred method to traverse through DOM elements? If you liked this article the share buttons are right below. Bye :*
