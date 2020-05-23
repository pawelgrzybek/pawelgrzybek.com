---
title: Page scrolling in vanilla JavaScript
description: Scrolling to an element on a page has always been easy with jQuery. It's a bit tricky in vanilla JavaScript — but definitely doable.
photo: 2016-07-25.jpg
---

{{< update >}}I published this article years ago. At the time of writing, this solution was working very well for me. Today I would be using `window.scroll` and this lightweight [smooth scroll behavior polyfill](https://github.com/iamdustan/smoothscroll) instead.{{< /update >}}

How many times have you seen the effect of a page scrolling down after clicking a button? Probably thousands! It's always been extremely easy to do with the popular [jQuery](https://jquery.com/) library.

```js
$('.js-btn').click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').offset().top
    }, 200);
});
```

<p>
<p data-height="350" data-theme-id="14885" data-slug-hash="akqXro" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/akqXro/">Page scrolling in vanilla JavaScript 1</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</p>

It is a decent solution, works great and it's really well supported across the browsers. But there is a recent trend of abandoning jQuery because pure vanilla JavaScript DOM manipulation is the new hipster skill (I'm one of those hipsters by the way). With the ease of modern APIs and the amount of features that the JavaScript landscape has to offer nowadays it is not that difficult to leave chunky libraries behind.

On one recent project my client asked me to implement this kind of scrolling on his SPA (single page app). Aha! A "challenge" I said! Today I think "DOM-nightmare-inconsistency-mission" is a better term to describe this scenario. If you are one of those hipsters let me save you a couple of hours and share this tiny snippet with you.

## Page scrolling without jQuery

Plan! To start a script it's always a good idea to have a plan in place. Basically it goes like this:

1. Determine where to scroll, the duration, the easing function and an optional callback.
2. On click — grab a timestamp and the current document position.
3. Scroll to the element as long as you don't reach the destination.
4. If the element has finished scrolling trigger an optional callback function.

### Determine where to scroll, the duration, the easing function and an optional callback

All the other steps are always going to be exactly the same. This one may vary depending on the destination, the scrolling duration, the timing function and any callback that is invoked when the scrolling reaches it's destination. It makes sense to pass all these things as function arguments, right? The destination is the only required argument (ideally it should be a number or DOM element, and function should determine how to deal with it). The duration and easing function possess some sensible default values (thanks to ES2015 default arguments) and the callback function should be optional. Have a look at the wrapper of our function declaration.

```js
function scrollIt(destination, duration = 200, easing = 'linear', callback) {
  // object with some some timing functions
  // function body here
}
```

### On click — grab a timestamp and the current document position

To calculate values for function that is responsible for scrolling window position up and down, we need to have a reference to initial window value and timestamp.

```js
const start = window.pageYOffset;
const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
```

### Scroll to the element as long as you don't reach the destination

The most popular JavaScript animation solutions are mainly based on [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout), [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval), the [WEB Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) and [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/requestAnimationFrame). The first two are pretty old school. The Web Animation API isn't made to deal with these kind of situations — read more about it in one of my previous [articles](https://pawelgrzybek.com/intro-to-the-web-animations-api/). So `requestAnimationFrame` looks like a perfect candidate for this scenario. We have to be careful tho — it is easy to generate infinite loop if we request a frame loop without providing condition to terminate it. One of those situation can be scrolling below available scrollable window space. Luckily it is not difficult to prevent it. In case that `requestAnimationFrame` is not available we can just skip animation and move window to the destination. Have a look…

```js
const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

if ('requestAnimationFrame' in window === false) {
  window.scroll(0, destinationOffsetToScroll);
  if (callback) {
    callback();
  }
  return;
}

function scroll() {
  const now = 'now' in window.performance ? performance.now() : new Date().getTime();
  const time = Math.min(1, ((now - startTime) / duration));
  const timeFunction = easings[easing](time);
  window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

  requestAnimationFrame(scroll);
}
```

### If the element has finished scrolling trigger an optional callback function

The last step is to trigger a callback function whenever the document reaches its destination. This requires adding one more line to the condition that checks the current position and destination inside the `scroll` function.

```js
// Stop requesting animation when window reached its destination
// And run a callback function
if (window.pageYOffset === destinationOffsetToScroll) {
  if (callback) {
    callback();
  }
  return;
}
```

### Puting it all together

The whole function looks like this.

```js
function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}
```

...and to invoke it

```js
document.querySelector('.js-btn1').addEventListener('click', () => {
  scrollIt(
    document.querySelector('.js-section1'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});
```

or simply

```js
document.querySelector('.js-btn50000').addEventListener('click', () => scrollIt(50000));
```

<p>
<p data-height="390" data-theme-id="dark" data-slug-hash="ZeomJB" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="PURE JS scrolling" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/ZeomJB/">PURE JS scrolling</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

### A future solution using scroll-behavior: smooth

**UPDATE!** As correctly pointed out by [Šime Vidas](https://twitter.com/simevidas) there is another solution. There is a property of the [CSSOM View module](https://developer.mozilla.org/en-US/docs/Web/CSS/CSSOM_View) called [`scroll-behavior`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior). This is a native solution for the problem that I'm trying to solve by my script. The implementation is extremely easy, but unfortunately this method [isn't supported well enough](https://caniuse.com/#feat=css-scroll-behavior) to be used reliably (yet). It doesn't allow us to control timing functions or the duration either. It takes the user-agent values as its defaults. If you want to test examples below, use Firefox or Google Chrome with [Experimental Web Platform features](chrome://flags/#enable-experimental-web-platform-features) flag enabled.

```js
function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}
```

```js
const elm = document.querySelector('.js-section');
scrollIt(elm);
```

<p>
<p data-height="300" data-theme-id="14885" data-slug-hash="QEAZdP" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/QEAZdP/">2016.07.25 - 3</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</p>

And one more example using just a CSS (Firefox only)

```css
body {
  scroll-behavior: smooth;
}
```

```html
<a href="#one" class="btn">Section 1</a>
<div id="one" class="section">Section 1</div>
```

<p>
<p data-height="350" data-theme-id="14885" data-slug-hash="RRyXxJ" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/RRyXxJ/">2016.07.25 - 4</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</p>

## Wrap it up

Please let me know what you think about my solution. I know that the [browser support](https://caniuse.com/#feat=requestanimationframe) isn't that amazing compared to the usual jQuery solution. The compromise between browser support, bloating code and performance is a question that you need to answer yourself depending on your project. I had good fun building this script but it's even more enjoyable for me to share it with you.
