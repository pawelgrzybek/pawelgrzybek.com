---
title: "CSS Container Queries — a revolution for responsive web design"
summary: "There’s no other feature that web designers have asked for more than being able to style elements based on the size of their parent. Luckily, thanks to smart people like Miriam Suzanne, there’s great progress on the native implementation of CSS Container Queries."
photo: "2021-06-21.jpg"
---

There's no other feature that web designers have asked for more than being able to style elements based on the size of their parent. There were many attempts to solve this problem by attaching resize event on the element or using `ResizeObvserver` (["The Resize Observer explained"](https://pawelgrzybek.com/the-resize-observer-explained/) is for you if you're not aware of it). Luckily, thanks to smart people like [Miriam Suzanne](https://twitter.com/TerribleMia), there's great progress on the native implementation of CSS Container Queries defined as part of the [CSS Containment Module Specification](https://drafts.csswg.org/css-contain-3/).

## CSS Container Queries in practice

For this article, I created a super simple card component that changes the layout based on the container's inline size (width). Not too creative but works great as an example. Look ma, no media queries!

![Post component with container queries](/photos/2021-06-21-1.gif)

```html
<div class="post">
  <div class="post__wrapper">
    <div class="post__thumb">pic</div>
    <div class="post__content">
      <h1 class="post_title">Super cool title</h1>
      <time class="post_time" datetime="2021-06-21">2021.06.21</time>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet
        nemo quas quam delectus natus quae, maiores animi ut ducimus tenetur
        dignissimos? Rem, doloremque optio labore illo expedita sit suscipit
        voluptas sapiente cupiditate aspernatur sint!
      </p>
    </div>
  </div>
</div>
```

```css {hl_lines=["2-3","6-12"]}
.post {
  container-type: inline-size;
  container-name: post-container;
}

@container post-container (min-width: 400px) {
  .post__wrapper {
    display: grid;
    grid-template-columns: 4.8rem 1fr;
    grid-gap: 1.6rem;
  }
}
```

The `container-type` property creates a containment context. The `inline-size` creates a query container that reacts to changes on the inline axis (width). We can also use `block-size` to be able to adjust styling based on elements block axis (height), `size` to react to changes on both axis, `style` to react to style changes and `state` to react to state queries. The `container-name` allows us to add a descriptive name to a container.

The new `@container` rule allows us to style elements based on the size of the containment context. A lot like `@media` query, but better!

<p class="codepen" data-height="508" data-theme-id="14885" data-default-tab="result" data-user="pawelgrzybek" data-slug-hash="MWpxVWE" style="height: 508px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-container-queries">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/MWpxVWE">
  css-container-queries</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Do we still need media queries? Yes!

Container queries are here not to compete with media queries, but to work together with them. There is still a valid use case for good old `@media` queries for things like general layout changes, overrides to custom properties, user preferences, print styles etc. ["Media Queries in Times of @container" by Max Böck](https://mxb.dev/blog/media-queries-in-times-of-container-queries/) goes in-depth about the subject.

## Finally

I really believe that CSS Container Queries is the biggest revolution since [Ethan Marcotte coined the term "Responsive Web Design"](https://alistapart.com/article/responsive-web-design/) in 2010. Let me leave you here with a great episode of the Syntax.fm podcast where you can learn a bunch more about the future of CSS — [CSS Container Queries, Layers, Scoping and More with Miriam Suzanne](https://podcasts.apple.com/gb/podcast/syntax-tasty-web-development-treats/id1253186678?i=1000525733344). For now, stay curious and build cool web stuff 👌
