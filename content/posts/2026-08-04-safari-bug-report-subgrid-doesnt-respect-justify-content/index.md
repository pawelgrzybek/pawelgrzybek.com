---
title: "Safari bug report: subgrid doesn't respect justify-content"
summary: "I'm reporting an issues with Safari that doesn't respect the `justify-content` property on the subgrid containers."
---

Browser engineers encourage blogging about issues with engines, so here I'm reporting an issues with Safari that doesn't respect the `justify-content` property on the subgrid containers. The `justify-content` is not only a property of a flexbox, but you can also use it on `grid` containers to define how to distribute the space between items.

```html
<section class="grid">
  <div>one</div>
  <div>two</div>
  <div>three</div>
</section>
```

```css {hl_lines=[5]}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 25%);
  gap: 1rem;
  justify-content: space-between;
}
```

<p class="codepen" data-theme-id="-2" data-height="180" data-pen-title="2026.08.04 - 1: Safari bug report: subgrid doesn't respect justify-content" data-version="2" data-default-tab="result" data-slug-hash="BypMpMZ" data-user="pawelgrzybek" style="height: 180px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/pawelgrzybek/pen/019fce2a-261a-71ec-b305-348e0a0d2d3d">
  2026.08.04 - 1: Safari bug report: subgrid doesn't respect justify-content</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

Let's add another element into the mix that inherits the `grid-template-columns` definition from the parent using `subgrid` and also adds `justify-content`, just like it's parent.

```html
<section class="grid">
  <div>one</div>
  <div>two</div>
  <div>three</div>

  <section class="subgrid">
    <div>one</div>
    <div>two</div>
    <div>three</div>
  </section>
</section>
```

```css {hl_lines=[4,5]}
.subgrid {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  justify-content: space-between;
}
```

<p class="codepen" data-theme-id="-2" data-height="180" data-pen-title="2026.08.04 - 2: Safari bug report: subgrid doesn't respect justify-content" data-version="2" data-default-tab="result" data-slug-hash="vEgbLOg" data-user="pawelgrzybek" style="height: 180px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/pawelgrzybek/pen/019fcc89-c7a0-7069-9183-4cb470a6b5e5">
  2026.08.04 - 2: Safari bug report: subgrid doesn't respect justify-content</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

As a result, the subgrid should look no different from the top-level `div`s. This is the case in Chromium and Firefox, but not in Safari. Here is the [Bug 321024 on the WebKit Bugzilla website](https://bugs.webkit.org/show_bug.cgi?id=321024), so you can track the progress of resolution of that issue.

{{< figure src="subgrid.jpg" alt="A comparison view of rendering CSS subgrids with three children. Side by side Chrome, Firefox and Safari." caption="Top to bottom, Chrome, Firefox and Safari." >}}

{{% update %}}Wow! It took only 10 days since I published this bug report to the [merged issues resolution](https://github.com/WebKit/WebKit/pull/71768). This is the reason why you, web developer, should report bugs to browser engineers. They do listen and you have a chance to make the web a better place.{{% /update %}}
