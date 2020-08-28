---
title: What's the deal with the Pointer Events in JavaScript?
description: How do you handle mouse events but maintain a good experience for users using their finger as the input device? How about pens / styluses? Pointer events to the rescue!
photo: 2016-12-06.jpg
---

Have you ever worked on a UI component that depends on events triggered by a pointer device? It can be a mouse, touch pad or more precise tools like the pencil often used with an iPad Pro or other devices like the Samsung Galaxy Note. Touch devices are also reading events triggered by your fingers. But wait a sec — it is 2016 — pressure and tilt-aware devices exist and presumably you've got one in your pocket.

Essentially trying to fulfill a rich experience for all those scenarios is a mess. When is a `mouseleave` or `mouseout` event triggered? Does it bubble up? How can we stop the propagation of an event but keep another one registered? What does `touchenter` do? If all those questions don't confuse you enough, have a look at the [events reference](https://developer.mozilla.org/en-US/docs/Web/Events) — there's a gazillion of them!

Time for the good news! The recently updated [Google Chrome 55](https://developers.google.com/web/updates/2016/11/nic55) comes with a [Pointer Events](https://w3c.github.io/pointerevents/) interface that will help us to unify our way of handling all input events in a hardware-agnostic way. Surprisingly [this is not](https://caniuse.com/#feat=pointer) one of those Chrome-only features that we won't be able to use in production for the next decade. It's been implemented in Microsoft Internet Explorer 11 and all Edge versions. Chrome and Opera are just joining the bandwagon. Firefox has partial support and Safari without any known info about the implementation are great candidates to use a [polyfill](https://github.com/jquery/PEP) maintained by the jQuery team.

> The primary goal is to provide a single set of events and interfaces that allow for easier authoring for cross-device pointer input while still allowing for device-specific handling only when necessary for an augmented experience.

## Kill three birds with one stone

Yeah three! Mouse, pen and touch. To make migration easier, the spec is designed based on the naming of most generic mouse events. For example `mousedown` becomes `pointdown`. Just by making this change we are gaining access to information like: pressure level, contact geometry, tilt etc.

So instead of doing...

```js
somethingCool.addEventListener('mousedown', () => {
  // do some more cool stuff here
});

somethingCool.addEventListener('touchdown', () => {
  // do some more cool stuff here
});
```

You can simply do

```js
somethingCool.addEventListener('pointerdown', () => {
  // do some more cool stuff here
});
```

If you would like to keep input-specific event handling by using a single pointer event you can use the `pointerType` property. For example:

```js
somethingCool.addEventListener('pointerdown', (e) => {
  switch (e.pointerType) {
  case 'mouse':
    /* mouse detected */
    break;
  case 'pen':
    /* pen / stylus detected */
    break;
  case 'touch':
    /* touch detected */
    break;
  default:
    /* pointerType unknown or cannot be detected */
  }
});
```

## Other benefits of Pointer Events

Apart from providing a cleaner and unified API to deal with user inputs, Pointer Events comes with other benefits. The most important one is the performance gain that comes built-in by taking advantage of [passive event listeners](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md). Removing unnecessary blocked-by-browser events can make a huge impact on scrolling executed on touch devices. Have a look at [this video](https://youtu.be/65VMej8n23A) that shows the scrolling experience on CNN website - UX is immensely improved by using it!

## Love it! Use it!

As I'm not the biggest fan of polyfills I'm going to deliberately use it going forward. For the time being, basic feature detection will do...

```js
if (window.PointerEvent) {
  // Yaah, the future is now!
} else {
  // Back to reality
}
```

Hopefully you'll like the Pointer Events API as much as I do. Any thoughts? Then the comments section below is all yours! Found this helpful? Share buttons are provided too below. Stay curious until the next time guys!
