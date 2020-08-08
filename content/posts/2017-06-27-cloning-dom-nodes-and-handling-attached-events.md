---
title: Cloning DOM nodes and handling attached events
description: As a creator and maintainer of a popular DOM library, I found myself in a situation where I had to clone an element. Sounds trivial? This is what I learnt.
photo: 2017-06-27.jpg
---

I'm the creator and sole maintainer of [Siema](https://pawelgrzybek.github.io/siema/) — a simple carousel library that gained quite unexpected popularity on [Github](https://github.com/pawelgrzybek/siema) (thanks by the way). I constantly look to improve it and work hard to drop some new features in every once in a while. I recently came across a very minor challenge — I had to clone some DOM elements. Let me share with you some short and easy tips through what I learnt.

## Cloning DOM elements

To clone a DOM element we have two options: [`cloneNode()`](https://developer.mozilla.org/en/docs/Web/API/Node/cloneNode) and [`importNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode). The differences between these two methods are very minor and it shouldn't really matter which one you use to perform cloning within a single document. If you are a performance freak — [jsPerf](https://jsperf.com/innerhtml-vs-importnode/6) shows a slightly faster computation for `importNode()`. I doubt that you will ever need to duplicate thousands of elements on the page so I wouldn't worry yourself about these numbers too much.

```js
// using cloneNode()
const sourceElement = document.querySelector('.js-source div');
const destination = document.querySelector('.js-destination');

const copy = sourceElement.cloneNode(true);
destination.appendChild(copy);
```

```js
// using importNode()
const sourceElement = document.querySelector('.js-source div');
const destination = document.querySelector('.js-destination');

const copy = document.importNode(sourceElement, true);
destination.appendChild(copy);
```

## Reattach an event listener to a cloned element

After cloning, the element loses reference to all events attached to it via JavaScript. It creates something commonly known as a shallow copy. We can manually reattach all event listeners to the cloned node but that sounds like a tedious task. Back in the day we could find something like [`EventListenerList()`](https://www.w3.org/TR/2001/WD-DOM-Level-3-Events-20010823/events.html#Events-EventListenerList) in the DOM spec. That would be very helpful in solving our issue but unfortunately it has been removed from the specification and the implementation isn't available on any browser. The reason for ditching this part of the spec can be found on multiple [W3C mailing conversations](https://stackoverflow.com/a/7814692/2290040).

> [...] what is the motivation for adding this functionality at all? Previously, the working group resolved to remove the related but less powerful hasEventListenerNS method for lack of a use case, and because there are potential security issues.

Don't be tricked by [`getEventListeners()`](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference#geteventlistenersobject) either as this is only a part of the Chrome Command Line API and is available only from the Google browser's console. You cannot use it in your scripts.

Because the native method for checking the events attached to an element doesn't exist we need to find a different solution. Let's have a look at the available options.

### Inline events

A little bit old-school but it will do in some circumstances. HTML elements allow us to add an [event attribute](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers) with a tiny bit of JavaScript functionality inside it. Like so:

```html
<div onclick="alert('Hello')">some element</div>
```

```html
<div onclick="clickHandler()">some element</div>
```

Although it is not very elegant, not pleasant to maintain and can cause some accessibility difficulties sometimes it can be the best way to go. As always — it depends on the situation…

### Event delegation

Instead of adding an event listener to every element, let's just add it once to a parent element and take advantage of event bubbling. Sounds complicated but it is easier than you think and can save you from potential memory leaks and performance degradation. Here's an example:

```html
<ul class="list">
  <li class="list__item">Ed</li>
  <li class="list__item">Edd</li>
  <li class="list__item">Eddy</li>
</ul>
```

Adding a listener to every list item…

```js
// declare handler
function clickHandler(e) {
  console.log(e.target.innerHTML);
}

// reference to all list items
const items = document.querySelectorAll('.list__item');

// loop through list items and add listener to click event
for (const item of items) {
  item.addEventListener('click', clickHandler);
}
```

Instead, it's better to do this...

```js
// declare handler
function clickHandler(e) {
  if (e.target.matches('.list__item')) {
    console.log(e.target.innerHTML);
  }
}

// reference to a list
const list = document.querySelector('.list');

// add a single listener on list item
list.addEventListener('click', clickHandler);
```

Do you already know where I'm going with this in the context of cloned elements? Instead of fighting with attaching handlers to cloned nodes, attach a single event on the closest common parent element. Makes sense?

## jQuery clone() method

Popular DOM libraries like jQuery, YUI and Moo have their own methods for event delegation and I highly recommend using them if you can. The most popular one — jQuery — uses wrapper methods to deal with events. It internally tracks all the handlers attached to the node so whenever we use the [`clone()`](https://api.jquery.com/clone/) method it creates a deep copy (optional argument) that contains the source element's events.

```js
$('.js-source div').clone(true).appendTo('.js-destination')
```

## Example

Hopefully that made sense and this article helped you out. Thanks for reading and don't forget about the share buttons below this article — I'm sure that your friends don't know much about cloning yet. I put together two examples for you to play with. The first one uses event delegation and `cloneNode()`, and the second one uses the jQuery `clone()` method. Peace!

<p>
<p data-height="320" data-theme-id="14885" data-slug-hash="eRWbJZ" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017.06.27 - clone elements (vanilla js)" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/eRWbJZ/">2017.06.27 - clone elements (vanilla js)</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

<p>
<p data-height="320" data-theme-id="14885" data-slug-hash="rwGQap" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017.06.27 - clone elements (jQuery)" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/rwGQap/">2017.06.27 - clone elements (jQuery)</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>
