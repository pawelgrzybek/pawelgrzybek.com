---
title: From callback hell, through promises to async functions
summary: The last few years have brought us lots of revolutionary features for working with asynchronous JavaScript operations. Let's review the most popular ones together.
photo: 2017-10-25.jpg
---

Working with asynchronous JavaScript has changed a lot in the last few years. When `Promise`s were introduced to ECMAScript a few years ago life became a dream. Two years later, the `async` function was added to the specification — I still can't believe how nice and easy to read it is! What's next? Time will tell, but now let's review what we went through to get where we are. You have to agree — a random Chuck Norris joke generator is the perfect demo program!

## Callbacks

If you joined the JS stage a few years ago or earlier you'll remember the [doom](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)) that you could easily end up in by nesting callbacks. Luckily those days are over. A simple `XMLHttpRequest` request fetches a piece of JSON from an API and it isn't hard to read (yet). Imagine a situation where you have to call another request based on the result of the first one — I don't miss that. 

```js
function getRandomJoke() {

  // show loading screen
  loading.classList.add('loading--active');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.icndb.com/jokes/random/1');
  xhr.responseType = 'json';

  xhr.onload = function onload() {
    // print a joke
    main.innerHTML = xhr.response.value[0].joke;

    // hide loading screen
    loading.classList.remove('loading--active');
  };

  xhr.onerror = function onerror() {
    // print an error
    main.textContent = 'Error :-(';

    // hide loading screen
    loading.classList.remove('loading--active');
  };

  xhr.send();
}
```

<p>
<p data-height="380" data-theme-id="dark" data-slug-hash="XeLJzJ" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-10-24-1" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/XeLJzJ/">2017-10-24-1</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

## The promise of a better future

An asynchronous operation takes some time and the only thing that we can be assured of ahead of time is the fact that it is going to be resolved or rejected. This could easily be the definition of a [JavaScript `Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). It landed in the ECMAScript spec in 2015 and totally revolutionized the way developers handle asynchronous programs. Promised-based methods (the ones that return the promise) are slowly replacing callback-based equivalents and `fetch()`, used in example below, is one of them.

```js
function getRandomJoke() {

  // show loading screen
  loading.classList.add('loading--active');

  fetch('https://api.icndb.com/jokes/random/1')
    .then(response => response.json())
    .then(joke => {
      // print a joke
      main.innerHTML = joke.value[0].joke;

      // hide loading screen
      loading.classList.remove('loading--active');
    })
    .catch(err => {
      // print an error
      main.textContent = `Error: ${err}`;

      // hide loading screen
      loading.classList.remove('loading--active');
    });
}
```

<p>
<p data-height="380" data-theme-id="dark" data-slug-hash="dVBPyM" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-10-24-2" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/dVBPyM/">2017-10-24-2</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

Living on the bleeding edge? Safari 11, Google Chrome 63, EDGE and Node under the `-​-harmony-promise-finally` flag comes with the additional handler `finally()`. Keep it DRY!

```js
function getRandomJoke() {

  // show loading screen
  loading.classList.add('loading--active');

  fetch('https://api.icndb.com/jokes/random/1')
    .then(response => response.json())
    .then(joke => {
      // print a joke
      main.innerHTML = joke.value[0].joke;
    })
    .catch(err => {
      // print an error
      main.textContent = `Error: ${err}`;
    })
    .finally(() => {
      // hide loading screen
      loading.classList.remove('loading--active');
    });
}
```

<p>
<p data-height="380" data-theme-id="dark" data-slug-hash="wrLBmE" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-10-24-3" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/wrLBmE/">2017-10-24-3</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

## Async code, sync look

In 2017 ECMAScript introduced another game changer — the [Async Function](https://tc39.github.io/ecmascript-asyncawait/). It makes working with asynchronous operations very intuitive because it is written in the same way as synchronous code with two tiny nuances — an [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) keyword in front of a function declaration and an [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator as a promise prefix. Apart from it just being syntactically much nicer to read, it comes with [optimizations in JavaScript engines](https://mathiasbynens.be/notes/async-stack-traces) as well. Based on the current [browser support](https://caniuse.com/#feat=async-functions) and the help that [babel-preset-env](https://github.com/babel/babel-preset-env) can offer this is my preferred way of working with asynchronous JavaScript.

```js
const getRandomJoke = async() => {

  // show loading screen
  loading.classList.add('loading--active');

  try {
    const response = await fetch('https://api.icndb.com/jokes/random/1');
    const joke = await response.json();

    // print a joke
    main.innerHTML = joke.value[0].joke;
  }
  catch (err) {
    // print an error
    main.textContent = `Error: ${err}`;
  }
  finally {
    // hide loading screen
    loading.classList.remove('loading--active');
  }
};
```

<p>
<p data-height="380" data-theme-id="dark" data-slug-hash="pWXJPy" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-10-24-4" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/pWXJPy/">2017-10-24-4</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

Hopefully you liked this quick time travel through asynchronous programming in JavaScript. The changes introduced in latest versions of the language are really exciting and I am really looking forward to see what's next! Until next time pals!
