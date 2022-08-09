---
title: "A simple carousel with a few lines of CSS"
summary: "A few years back, I built Siema — a lightweight (only 3kb gzipped) carousel plugin with no dependencies. Nowadays, I would like to ask you to stop using it."
photo: "2022-08-09.jpg"
---

A few years back, I built [Siema](https://pawelgrzybek.github.io/siema/) — a lightweight (only 3kb gzipped) carousel plugin with no dependencies. It became massively popular because of its simplicity and extensibility. I'm proud of this project because not only helped me but also many other developers.

CSS nowadays is so powerful, and if you need a simple carousel, I would like to kindly ask you not to use Siema (or any other carousel library) anymore. Using CSS is more straightforward, accessible, feels more natural and the [browser support for scroll snap](https://caniuse.com/css-snappoints) is great. Have a look at this minimalistic example.

```css
ul {
  display: flex;
  list-style: none;
  overflow: auto;
  scroll-snap-type: x mandatory;
}

li {
  flex-shrink: 0;
  width: 100%;
  scroll-snap-align: start;
}
```

<p>
<p class="codepen" data-height="464" data-default-tab="result" data-slug-hash="rNdKRGw" data-user="pawelgrzybek" style="height: 464px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/rNdKRGw">
  Super simple CSS carousel</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</p>

This article is just a quick note to my future self to come here and copy/paste what I need, but if you found it useful, I am super happy. I can assure you that the next major release of Siema will come with a lot less JavaScript (0kb). Bye 👋
