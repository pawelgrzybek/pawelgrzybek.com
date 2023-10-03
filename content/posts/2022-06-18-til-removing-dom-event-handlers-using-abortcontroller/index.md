---
title: "TIL — Removing DOM Event Handlers using AbortController"
summary: "Today I learned about the ability to remove DOM event handlers using AbortController. There is plenty of other good use cases for this controller, but this one blew my mind."
---

Thanks to [Dan](https://twitter.com/danjordan), who recommended ["AbortController is your friend"](https://whistlr.info/2022/abortcontroller-is-your-friend/) by [Sam Thorogood](https://twitter.com/samthor), today I learned about the ability to remove DOM event handlers using AbortController. Sam's article is full of good use cases for this controller, but this one blew my mind.

```js
const controller = new AbortController();

document.addEventListener(
  "mousemove",
  () => {
    // do some cool things here
  },
  { signal: controller.signal }
);

// later on
controller.abort();
```

Look at this example that tracks a `mousemove` event on the `document`, prints the coordinates and can be aborted on demand by clicking a button. So nice!

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="YzeMxMz" data-user="pawelgrzybek" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/YzeMxMz">
  2022-06-18</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
