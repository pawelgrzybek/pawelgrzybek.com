---
title: "Native CSS masonry layout"
summary: "A masonry type of layout, one of the biggest obsessions of UX designers,  is finally coming to CSS. Style popularized by Pinterest, where elements fill the vertical gaps instead of being aligned to the row axis."
photo: "2023-02-09.jpg"
---

A masonry type of layout, one of the biggest obsessions of UX designers,  is finally coming to CSS. Style popularized by Pinterest, where elements fill the vertical gaps instead of being aligned to the row axis.

{{< figure
  src="/photos/2023-02-09-1.png"
  alt="A default layout alignment vs masonry"
  caption="A default layout alignment vs masonry"
>}}

Over the years, we have seen a lot of JavaScript-based solutions to achieve this effect. [Masonry by David DeSandro](https://masonry.desandro.com) is the most popular one. I created [Bricky](https://github.com/pawelgrzybek/bricky) seven years ago (WOW, time flies 🤯) that solves the same problem. Luckily we can start thinking about getting rid of these hefty libraries.

The `grid-template-rows: masonry` and `grid-template-columns: masonry`, defined as part of the [CSS Grid Layout Module Level 3](https://w3c.github.io/csswg-drafts/css-grid-3/), are the modern solution for bricklayer-like designs. At the time of writing this article, the feature is available only in Firefox behind the `layout.css.grid-template-masonry-value.enabled` flag and Safari Technology Preview.

```css
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: masonry;
}
```

<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="QWBXWqK" data-user="pawelgrzybek" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/QWBXWqK">
  2023.02.09 - CSS Grid: masonry layout test</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Keep in mind accessibility — the default (`pack`) item placement algorithm may cause an unintended tabbing order. Luckily, a [`masonry-auto-flow`](https://w3c.github.io/csswg-drafts/css-grid-3/#masonry-auto-flow) gives us granular control over the item's placement.

I miss writing about CSS. This language gets more and more incredible features at an unstoppable rate, so expect more posts about it.
