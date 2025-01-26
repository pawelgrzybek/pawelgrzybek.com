---
title: "The old CSS attr() with new features"
summary: "The upgraded CSS attr() function works how I always wanted it to. The new implementation is backward compatible and opens its functionality to all properties."
---

The CSS `attr()` function retrieves a value from an HTML element’s attribute. Firefox added support for it two decades ago, so it's rather not a new thing. I can’t tell you how many times I had an incredible use case for it, just to be reminded a second later that its use is limited to the `content` property. Here is an example.

```html
<article data-category="Technology">...</article>
```

```css
article::before {
  content: "In category:" attr(data-category);
}
```

{{< baseline feature="attr-contents" >}}

## The new attr() function

I'm not sure if you noticed, but in the last few years all the impossible-to-implement CSS features all of a sudden became possible. [The CSS Values and Units Module Level 5](https://drafts.csswg.org/css-values-5/#funcdef-attr) redefines the `attr()` function, opens its functionality to all properties, allows us to exchange a value between the markup and stylesheet that is not only limited to strings, and also accepts a fallback.

```html
<article data-background="salmon">...</article>
```

```css
article {
  background-color: attr(data-background type(<color>), lime);
}
```

{{< baseline feature="attr" >}}

This update to the spec is backward compatible, with only [two exceptions defined on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/attr#backwards_compatibility). The value can be parsed into all CSS types with the exception of URL to avoid potential security threats. Of course, we can detect browser support for this feature using the CSS supports API.

```css
@supports (x: attr(x type(*))) {
  /* 👍 */
}

@supports not (x: attr(x type(*))) {
  /* 👎 */
}
```

```js
if (CSS.supports("x: attr(x type(*))")) {
  /* 👍 */
}

if (!CSS.supports("x: attr(x type(*))")) {
  /* 👎 */
}
```

Now the `attr()` works how I always wanted it to! I miss writing about CSS. I miss CSS. Expect more of it. Stay curious, geeks 👋
