---
title: "The difference between the unordered list <ul> and the menu <menu> HTML element"
summary: "In contrast to the unordered list, which I always use, the menu is something I have never used. So you may be wondering what the difference is between them. Well, it is very subtle."
photo: "2022-12-02.jpg"
---

In contrast to the `<ul>`, which I always use, the `<menu>` is something I have never used. So you may be wondering what the difference is between them. Well, it is very subtle.

Both of them create an unordered list of items. The `<menu>` element is more specific and should be used for interactive toolbars. Look at the example.

```html
<h1>Scrambled eggs</h1>

<ul>
  <li>butter</li>
  <li>eggs</li>
  <li>salt</li>
</ul>

<menu>
  <li><button onclick="printRecipe()">Print recipe</button></li>
  <li><button onclick="saveRecipe()">Save recipe</button></li>
</menu>
```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="eYKLVOG" data-user="pawelgrzybek" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/eYKLVOG">
  ul vs menu</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

From a11y perspective, both elements produce the same accessibility tree. There is no difference between them for screen readers and other assistive technologies.

There are some tiny styling differences between user agents' stylesheets. I don’t think it is worth exploring that in-depth because you are going to reset them anyway 😜

## References

- [The ul element from HTML spec](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- [The menu element from HTML spec](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element)
