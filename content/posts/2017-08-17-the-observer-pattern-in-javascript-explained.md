---
title: The Observer Pattern in JavaScript explained
description: This popular pattern used by tons of JavaScript applications may save you from injecting costly dependencies in your project. Easy, clean and very useful.
date: 2017-08-17
photo: 2017-08-17.jpg
---

The Observer Pattern is a popular pattern used across all sorts of JavaScript applications. The instance (subject) maintains a collection of objects (observers) and notifies them all when changes to the state occurs. Does that sound difficult to you? Yes, it was upsetting me as well when I came across this pattern for a first time. A tiny practical example may help you to grasp the concept.

Imagine that you have to update multiple elements simultaneously when some event occurs (typing inside the `input` field perhaps). You need to be able to add more (subscribe) elements that react (observe) to a change of an input value. Removing subscriptions (unsubscribe) can be handy if you no longer need to broadcast state changes to a particular object. Do you get the idea now? Let's code it!

```js
// define a class
class Observable {
  // each instance of the Observer class
  // starts with an empty array of things (observers)
  // that react to a state change
  constructor() {
    this.observers = [];
  }

  // add the ability to subscribe to a new object / DOM element
  // essentially, add something to the observers array
  subscribe(f) {
    this.observers.push(f);
  }

  // add the ability to unsubscribe from a particular object
  // essentially, remove something from the observers array
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  // update all subscribed objects / DOM elements
  // and pass some data to each of them
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
```

The usecase example goes like this…

```js
// some DOM references
const input = document.querySelector('.js-input');
const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');

// some actions to add to the observers array
const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

// instantiate new Observer class
const headingsObserver = new Observable();

// subscribe to some observers
headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

// notify all observers about new data on event
input.addEventListener('keyup', e => {
  headingsObserver.notify(e.target.value);
});

```

With a little help of a few control buttons (added to make the demo more interactive), it gives you the power to do cool things like this with just a few lines of code. Isn't it nice?

<p>
<p data-height="431" data-theme-id="14885" data-slug-hash="XaVRyY" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="XaVRyY" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/XaVRyY/">XaVRyY</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

This very simplified version of the observer pattern can save you from downloading some costly frameworks like Vue or React. If you are looking for a detailed explanation of it, I can't recommend enough ["Learning JavaScript Design Patterns"](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript) by Addy Osmani. Classic! Sometimes "Publication / Subscription" is used interchangeably to describe this pattern, although [there are some minor differences](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript) between them and Addy points them all out in his book. Hopefully this article helped you out. Until next time curious people :-)
