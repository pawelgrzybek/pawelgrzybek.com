---
title: "Masonry aka waterfall aka collapse aka pack aka Pinterest-style layout — display grid-lanes cheatsheet for my future self"
summary: "Do you remember the little drama with Apple and Google proposing two contradicting ideas about the native CSS way for masonry layout implementation? It is all over, and what we got is a beautiful compromise between the two in a the form of display: grid-lanes."
---

Do you remember the little drama with Apple and Google proposing two contradicting ideas about the native CSS way for masonry layout implementation? It is all over, and what we got is a beautiful compromise between the two in a the form of `display: grid-lanes`. This is super exciting as it has been a frequently requested feature for many years, and the number of downloads of JS libraries like [Masonry by David DeSandro](https://masonry.desandro.com/) just proves this point. I celebrate every moment when I can bin a chunky third party script and replace it with a few lines of CSS.

This is just a quick copy/pasta 🍝 cheatsheet post with common use cases for the new layout mode. Be aware of the browser support and embrace the progressive enhancement as it works well with it.

{{< css-support-warning query="display: grid-lanes" >}}
Looks like your browser doesn't support `display: grid-lanes` yet. If you want to interact with the demos included in this post, please use one of the supported engines (Safari 26.4 has a good support). Think twice before you call Safari the next IE next time 😜
{{< /css-support-warning >}}

{{< css-support-warning query="block-size: random(1px, 3px)" >}}
Looks like your browser doesn't support CSS `random()` function used across the demos included in this post. Please use one of the supported engines (Safari 26.4 has a good support).

{{< /css-support-warning >}}

{{< baseline feature="masonry" >}}

## Columns and rows

The new display mode supports columns and rows. Perfecto! We use good old `grid-template-columns` and `grid-template-rows` to define them. Like so:

```css
.grid {
  display: grid-lanes;
  grid-template-columns: repeat(3, 1fr);

  div {
    block-size: random(2lh, 10lh);
  }
}
```

<p class="codepen" data-height="500" data-pen-title="Untitled" data-default-tab="result" data-slug-hash="bNgYXEm" data-user="pawelgrzybek" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/bNgYXEm">
  Untitled</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

```css
.grid {
  display: grid-lanes;
  grid-template-rows: repeat(3, 1fr);

  div {
    inline-size: random(2lh, 10lh);
  }
}
```

<p class="codepen" data-height="300" data-pen-title="2026.07-04 - columns" data-default-tab="result" data-slug-hash="azpVeyB" data-user="pawelgrzybek" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/azpVeyB">
  2026.07-04 - columns</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Variable grid items size

If you want to resize one of the items, you can do so by using all you already know. Here is an example.

```css {hl_lines=["8-10"]}
.grid {
  display: grid-lanes;
  grid-template-columns: repeat(3, 1fr);

  div {
    block-size: random(2lh, 10lh);

    &:first-of-type {
      grid-column: span 2;
    }
  }
}
```

<p class="codepen" data-height="500" data-pen-title="2026.07-04 - columns" data-default-tab="result" data-slug-hash="jEyagaj" data-user="pawelgrzybek" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/jEyagaj">
  2026.07-04 - columns</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

## Tolerance

Browser tasked to draw masonry layout, iterates over the elements, checks which column/row has the most empty room and places the next item there. In some circumstances, this algorithm produces an unintuitive results. Look at this example.

<p class="codepen" data-height="400" data-pen-title="2026.07-04 - columns" data-default-tab="result" data-slug-hash="QwdaLrG" data-user="pawelgrzybek" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/QwdaLrG">
  2026.07-04 - columns</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

Technically correct, right, but visually a little confusing and for assistive tech users messed up a little. Here is where the `flow-tolerance` comes in. Now, the calculation to determine the next available column/row is adjusted by the value of this property. The default value of `flow-tolerance` is `1em`. Now look at this. Better, right?

```css {hl_lines=[4]}
.grid {
  display: grid-lanes;
  grid-template-columns: repeat(2, 1fr);
  flow-tolerance: 1lh;
}
```

<p class="codepen" data-height="400" data-pen-title="2026.07-04 - tolerance default" data-default-tab="result" data-slug-hash="QwdaLBd" data-user="pawelgrzybek" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/QwdaLBd">
  2026.07-04 - tolerance default</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

The story of `grid-lanes` and accessibility is a bit more complicated, but there is no point getting into it here, because [Manuel Matuzović](https://www.matuzo.at/) already published ["Your Grid Lanes will likely fail WCAG 2.4.3"](https://www.matuzo.at/blog/2026/grid-lanes-accessibility) and ["Progressively enhancing Grid Lanes"](https://www.matuzo.at/blog/2026/grid-lanes-progressive-enhancement). Good posts, give them a read!

## References

- ["Learn CSS Grid Lanes" by Brandon Steward presented at WWDC 2026](https://developer.apple.com/videos/play/wwdc2026/314/)
- ["The Field Guide to Grid Lanes" by WebKit team](https://gridlanes.webkit.org/)
