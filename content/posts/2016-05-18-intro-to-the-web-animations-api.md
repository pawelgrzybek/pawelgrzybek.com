---
title: Intro to the Web Animations API
description: We have many methods available to move things around on the web. Let’s embrace the power of future animations with the Web Animations API.
photo: 2016-05-18.jpg
---

We have plenty of ways to animate things on the web. The answer of which one to use isn’t always easy. Each method comes with pros and cons. Should we use CSS, `canvas`, Web GL, JavaScript `requestAnimationFrame` or `setInterval`? Maybe SMIL? Oh no — this one is dead now. Maybe some external libraries like jQuery, GreenSock or VelocityJS? These are just a few possible ways to go. If you are keen to know a little bit more about these methods, I encourage you to read a fantastic article [“A Comparison of Animation Technologies”](https://css-tricks.com/comparison-animation-technologies/) by [Sarah Drasner](https://twitter.com/sarah_edo) on CSS-Tricks.


“Lord of the twins” is the unusual description that [Dave Rupert](https://twitter.com/davatron5000) named the [Web Animations API](https://w3c.github.io/web-animations/) in ShopTalk Show [episode](http://shoptalkshow.com/episodes/203-with-rachel-nabors-and-dan-wilson/) with [Rachel Nabors](https://twitter.com/rachelnabors) and [Dan Wilson](https://twitter.com/dancwilson) exclusively dedicated to this piece of the W3C spec. It is a combination of hardware accelerated CSS animations and the power of JavaScript. This high-performance API exposes powerful methods that allow us to control the animation of HTML and SVG elements.

## Are we ready to use WAAPI?

The Web Animations API is relatively new — the initial version of the spec was published in June 2012. At the moment of writing this article the [browser support](https://caniuse.com/#feat=web-animation) isn’t great. Even the browsers that support it offer a very inconsistent level of implementation. If you would like to play around with the bleeding edge parts of this spec then [Firefox Nightly build](https://nightly.mozilla.org/) is the best playground. Chrome and Opera are fine. [Firefox 48 is coming](https://groups.google.com/d/msg/mozilla.dev.platform/2INRr96R3IU/do-AigNwAwAJ) with WAAPI implementation on board. The status of [Safari](https://webkit.org/status/#specification-web-animations) is under consideration and the road map priority for the [IE platform](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/webanimationsjavascriptapi) is medium. The first mobile implementation very recently reached Android devices. Safari for iOS — no pressure — but we all are waiting for you.

[![Browser support for Web Animations API](/photos/2016-05-18-1.jpg)](https://caniuse.com/#feat=web-animation)

The good news is that there is a reliable [polyfill](https://github.com/web-animations/web-animations-js) that provides support for Chrome, Firefox 27+, IE10+ (including Edge), Safari (iOS) 7.1+ and Safari (Mac) 9+. Actually it exists in three versions — [web-animations](https://github.com/web-animations/web-animations-js/blob/master/web-animations.min.js) that covers support of basic stable features, [web-animations-next](https://github.com/web-animations/web-animations-js/blob/master/web-animations-next.min.js) that allows us to use newly proposed features and [web-animations-next-lite](https://github.com/web-animations/web-animations-js/blob/master/web-animations-next-lite.min.js) that is a stripped down version of "next" without some of the lesser-used properties.

## Basic syntax

The heading above is the most misleading part of this article because when it comes to the Web Animations API “basic syntax” doesn’t exist. The spec is a behemoth and there are so many constructors associated with the WAAPI (with more coming soon). Let’s just cover the bare minimum that allows us to create something simple.

```js
element.animate(effect, options);
```

Please don't confuse this native [`animate()`](https://w3c.github.io/web-animations/#dom-animatable-animate) function with the jQuery [`animate()`](http://api.jquery.com/animate/) function - they are not related whatsoever. The first parameter `effect` describes the movement of an animation. At the moment the only natively implemented option that can be used is an array full of keyframes. In the future browsers will allow us to use an object with an array of values (the length of array represents the number of keyframes). You can think about this parameter as an equivalent to `@keyframes` in CSS.

The absolute minimum that needs to be passed in the `options` parameter is the duration in milliseconds. Luckily we can pass many more parameters to the [`AnimationEffectTiming`](https://w3c.github.io/web-animations/#animationeffecttiming) object. Essentially think of this parameter as your CSS animation properties (animation-duration, animation-timing-function, animation-delay etc.).

## Don't believe it until you see it?

Enough of the theoretical gibberish — time for a practical example. If you have some previous experience with CSS animations, the piece of code below should look very familiar.

```js
document.querySelector('.box').animate(
  [
    {
      offset: 0,
      transform: 'none'
    },
    {
      offset: 0.25,
      transform: 'translate(200px, 0)'
    },
    {
      offset: 0.5,
      transform: 'translate(200px, 200px)'
    },
    {
      offset: 0.75,
      transform: 'translate(0, 200px)'
    },
    {
      offset: 1,
      transform: 'none'
    }
  ],
  {
    delay: 500,
    endDelay: 0,
    fill: 'both',
    iterationStart: 0,
    iterations: 50,
    duration: 1000,
    direction: 'normal',
    easing: 'cubic-bezier(.6, 0, 1, .6)'
  }
);
```

As mentioned before, think about the first parameter as the CSS `@keyframes` and the second one as CSS `animation-*` properties inside of a declaration block. On every single keyframe I passed `offset` although it [could be skipped](http://w3c.github.io/web-animations/#spacing-keyframes) in this case. I did this intentionally to show you how to control the offset of an animation — it does the same job as a percentage value in front of every CSS keyframe. It can be represented as a fraction (ie. `1/4`) or a decimal number (ie. `.25`). I used `endDelay` and `iterationStart` with a value of `0` (this is the default value when the property is not explicitly defined) to give you an overview of [all the possible options](https://w3c.github.io/web-animations/#dom-animationeffecttimingreadonly-delay). To make a clear comparison, have a look at the CSS animation with the properties mirrored.

```css
@keyframes move {
  0% {
    transform: none;
  }

  25% {
    transform: translate(200px, 0);
  }

  50% {
    transform: translate(200px, 200px);
  }

  75% {
    transform: translate(0, 200px);
  }

  100% {
    transform: none;
  }
}

.box {
  animation-name: move;
  animation-duration: 1000ms;
  animation-timing-function: cubic-bezier(.6, 0, 1, .6);
  animation-delay: 500ms;
  animation-iteration-count: 50;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
}

/* or as a shorthand */

.box {
  animation: move 500ms linear 500ms 10 normal both running;
}
```

Hopefully this comparison to CSS helps make the syntax clearer. Remember — you are dealing with JS so use camel-case values from the `style` object, not the property names from CSS. For instance — `margin-bottom` is `marginBottom`. It's just an example, but the animation of `margin` probably isn't the best idea from a performance perspective. [Paul Lewis](https://twitter.com/aerotwist) and [Surma](https://twitter.com/DasSurma) created  [CSS Triggers](https://csstriggers.com/) - a handy reference of triggered events associated with the animation of particular CSS properties. There is no restriction - whatever you can animate with CSS you can animate via WAAPI (including fancy [motion-path](https://www.w3.org/TR/motion-1/) animations).

![DOM style object](/photos/2016-05-18-3.jpg)

Cool, but does it really generate the same effect? Not really — the behavior of JavaScript's `easing` and CSS' `animation-timing-function` is different. The WAAPI [timing function](https://w3c.github.io/web-animations/#time-transformations) is applied to the whole iteration of an animation — as expected. As per [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function), the CSS `animation-timing-function` is applied on each step between keyframes.

> For keyframed animations, the timing function applies between keyframes rather than over the entire animation. In other words, the timing function is applied at the start of the keyframe and at the end of the keyframe.

Have a look...

<p>
  <p data-height="384" data-theme-id="dark" data-slug-hash="oxOmGG" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/oxOmGG/">oxOmGG</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</p>


## Animation methods and properties

So far we haven't seen any clear advantage of using WAAPI over CSS animations. Let's reveal the difference between reactive JavaScript over declarative CSS. When the `animate()` function is invoked a new instance of the [`Animation`](https://w3c.github.io/web-animations/#the-animation-interface) interface is returned — formerly known as `AnimationPlayer`. Assigning the animation to a variable allows us to use returned properties, methods and promises. Let's do it and print to the console these brand new toys.

```js
var move = document.querySelector('.box').animate([...], {...});
console.log(move);
```
![Web Animations API Animation object returned](/photos/2016-05-18-2.jpg)

Having access to all this goodness allows us to create more complex effects. If you haven't dived into the world of ES2015 Promises yet, it's worth taking a look at ["Asynchronous programming (background)"](http://exploringjs.com/es6/ch_async.html) by Dr. Axel Rauschmayer or ["ES6 Promises in Depth"](https://ponyfoo.com/articles/es6-promises-in-depth) by Nicolás Bevacqua. [Dan Wilson](https://twitter.com/dancwilson) wrote a helpful article about working with [Promises in Web Animations](http://danielcwilson.com/blog/2016/03/animations-and-promises/). Time for a simple example...

<p>
<p data-height="735" data-theme-id="dark" data-slug-hash="EKJqxG" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/EKJqxG/">2016-05-18-2</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</p>

## Let's talk about some constructors

Let's dive deeper. In the previous example we assigned the result of the `animate()` function to a variable. When `animate()` is invoked [a few things happen](https://w3c.github.io/web-animations/#dom-animatable-animate) — a new `KeyframeEffect` and `Animation` object is constructed, the animation starts playing and then is returned. [Following the documentation](https://w3c.github.io/web-animations/#dom-animatable-animate) we can manually use the `KeyframeEffect` and `Animation` global objects to instantiate a new animation. The only browser that gives us an access to both of them is Firefox Nightly. Thanks again to all amazing [polyfill](https://github.com/web-animations/web-animations-js) creators! Have a quick look at the syntax.

```js
new Animation(effect, timeline)
```

In the current implementation the only valid value passed as the `effect` parameter is an instance of the `KeyframeEffect` object. I will show you some more fancy things that we can pass here in a moment.

Another parameter `timeline`, connects the newly created animation with a source of time for synchronization purposes. As far as I know the only valid value here is the default document timeline accessed by `document.timeline`. [Rachel Nabors](https://twitter.com/rachelnabors) (a main contributor to the Web Animations API [documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)) suggests that in the future we may get other new cool options to use.

> ...in the future there may be timelines associated with gestures or scrolling for example.

Let's quickly remind ourselves how we did it previously and recreate the same animation in a manually constructed object.

```js
// via function
var element = document.querySelector('.anime-js');
var effect = [...];
var options = {...};

var move = element.animate(effect, options);
```

```js
// via constructors
var element = document.querySelector('.anime-js');
var effect = [...];
var options = {...};

var keyframes = new KeyframeEffect(element, effect, options);
var move = new Animation(keyframes, element.ownerDocument.timeline);
move.play();
```

<p>
<p data-height="384" data-theme-id="dark" data-slug-hash="mPYmQj" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/mPYmQj/">2016-05-18-3</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</p>

At this point you are probably thinking "Yeah, cool, but why should I bother about constructors if I can use the `animate()` function". Wait for it!

## GroupEffects and SequenceEffects

As I mentioned before, for the time being the only natively implemented property that can be used to determine the effect of an animation is `KeyframeEffect`. In the future level 2 spec [we will](https://twitter.com/rachelnabors/status/631545063965720576) have the opportunity to use more sophisticated constructors like `GroupEffect` and `SequenceEffect`. It's possible to apply a group of animations via CSS but chaining animations together has always been a pain in the arse. More good news — a polyfill allows us to do this today. Examples!

```js
var elem1 = document.querySelector('.box1');
var elem2 = document.querySelector('.box2');

var keyframes = {
  transform: ['none', 'translate(200px, 0)', 'translate(200px, 200px)', 'translate(0, 200px)', 'none']
};

var props = {
  duration: 1000,
  easing: 'cubic-bezier(.6, 0, 1, .6)',
  iterations: 50,
  direction: 'normal',
  delay: 500,
  fill: 'both'
};

var group = new GroupEffect(
  [
    new KeyframeEffect(elem1, keyframes, props),
    new KeyframeEffect(elem2, keyframes, props)
  ]
);

var move = new Animation(group, document.timeline);
```

<p>
<p data-height="384" data-theme-id="dark" data-slug-hash="WwBXxb" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/WwBXxb/">2016-05-18-4</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</p>

And one more for `SequenceEffects`.

```js
var elem1 = document.querySelector('.box1');
var elem2 = document.querySelector('.box2');
var elem3 = document.querySelector('.box3');

var keyframes = {
  transform: ['none', 'translate(100px, 0)', 'translate(100px, 200px)', 'translate(0, 200px)', 'none']
};

var group = new SequenceEffect(
  [
    new KeyframeEffect(elem1, keyframes, 3000),
    new KeyframeEffect(elem2, keyframes, 2000),
    new KeyframeEffect(elem3, keyframes, 1000),
    new KeyframeEffect(elem1, keyframes, 3000),
    new KeyframeEffect(elem2, keyframes, 2000),
    new KeyframeEffect(elem3, keyframes, 1000)
  ]
);

var move = new Animation(group, document.timeline);
```

<p>
<p data-height="384" data-theme-id="dark" data-slug-hash="wGbpWg" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/wGbpWg/">2016-05-18-5</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</p>

The only thing that confuses me with these two examples is that the animation is playing without invoking a `play()` method. If anyone can help me to understand this, I owe you a coffee / beer. I promise!

## People worth following and useful resources

- [Brian Birtles](https://twitter.com/brianskold) - a main contributor to the [Web Animations API](https://w3c.github.io/web-animations/) spec. Works for Mozilla in Japan.
- [Rachel Nabors](https://twitter.com/rachelnabors) - a main contributor to the [documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). Part-time [unicorn](https://twitter.com/rachelnabors/status/731922035190824960).
- [Dan Wilson](https://twitter.com/dancwilson) - author of a great [series about WAAPI](http://danielcwilson.com/blog/2015/07/animations-intro/) that ranks higher on Google than the MDN and W3C spec. I learned a lot from his blog!
- [Val Head](https://twitter.com/vlh) - Val has dedicated her life to animations. Author of a cool newsletter ["The UI Animation Newsletter"](http://uianimationnewsletter.com).
- [Sarah Drasner](https://twitter.com/sarah_edo) - she is amazing in general! React, SVG, CSS and of course animations. Author of the fantastic course — ["Advanced SVG Animation"](https://frontendmasters.com/courses/svg-animation/) available for all [Frontend Masters](https://frontendmasters.com) users.
- ["Silky smooth Web Animations"](https://youtu.be/ep0_0W0qWsc) - some time ago when the Chrome browser reached version 36, Google published this great explanation of the Web Animations API on their YouTube channel.
- [Web Animations API on Platform status](https://platform-status.mozilla.org/#web-animations) - track the progress of the implementation yourself.
- [“Are we animated yet?”](https://birtles.github.io/areweanimatedyet/) - a dedicated website that shows the implementation progress of all the future parts of the spec in Firefox Nightly.
- [WAAPI Browser Support Test](http://codepen.io/danwilson/pen/XmWraY) - check your browser compatibility on Codepen. Created by Dan Wilson mentioned above.
- [State of the Animation with Rachel Nabors](https://youtu.be/GxOq1bnlZXk) - a great talk by Rachel from the San Francisco HTML5 Developer Group meetup.

## Conclusions

To begin with I appreciate that I haven't demonstrated any particularly crazy or creative examples. The main purpose of this article was to introduce the concept, not to spend time on crafting beautiful demos. Hopefully this overview has helped you out and I'm sure that I'm going to write more about this subject. If you have any questions don't be afraid to use the comments section below. Thanks for reading!
