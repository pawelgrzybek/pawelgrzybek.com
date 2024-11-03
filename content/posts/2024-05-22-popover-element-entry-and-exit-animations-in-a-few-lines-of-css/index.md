---
title: "Popover element entry and exit animations in a few lines of CSS"
summary: "Creating entry and exit animations for elements has always been tedious. Nowadays, we can do it with just a few lines of pure CSS, without a single line of JS."
---

Creating entry and exit animations for elements has always been tedious. It typically involves defining entry and exit `@keyframes`, some `classList` dance, timeout management, listening for `transitionend`/`animationend` events, etc. I have written code like that many times. Boring!

Nowadays, we can do it with just a few lines of pure CSS, without a single line of JS. The snippet below uses a few modern Web featues: popover element, CSS nesting, transitioninig properties with discrete animation behaviour and `@starting-style`. It's packed with many goodies for such a tiny snippet, isn't it?
```html
<button popovertarget="pop">Open popover</button>
<div popover id="pop">If this isn't cool, I don't know what is!</div>
```

```css
[popover] {
  transition: opacity 0.2s, transform 0.2s, display 0.2s allow-discrete;

  opacity: 0;
  transform: translateY(3rem);

  &:popover-open {
    opacity: 1;
    transform: none;

    @starting-style {
      & {
        opacity: 0;
        transform: translateY(-1rem);
      }
    }
  }
}
```

<p class="codepen" data-height="440" data-default-tab="result" data-slug-hash="rNgeQKe" data-pen-title="Popover animation toggle in/out" data-user="pawelgrzybek" style="height: 440px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/rNgeQKe">
  Popover animation toggle in/out</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

{{< baseline feature="starting-style" >}}

Everything I presented here I learned from ["Using @starting-style and transition-behavior for enter and exit stage effects" by Adam Argyle](https://nerdy.dev/using-starting-style-and-transition-behavior-for-enter-and-exit-stage-effects) and ["Four new CSS features for smooth entry and exit animations" by Una Kravets and Joey Arhar](https://developer.chrome.com/blog/entry-exit-animations). Thanks, web folks for sharing knowledge 🫶
