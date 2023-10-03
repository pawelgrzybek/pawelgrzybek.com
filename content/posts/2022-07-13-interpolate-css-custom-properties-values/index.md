---
title: "Interpolate CSS custom properties values"
summary: "CSS transitions and animations are methods to interpolate property values. Wouldn't it be cool if we could also transition our custom properties using these?"
---

In recent years [CSS Custom Properties](https://www.w3.org/TR/css-variables-1/) have become much more popular. These dynamic CSS runtime-defined slots are powerful, and [the browser support](https://caniuse.com/css-variables) is decent. I published ["CSS Custom Properties explained"](/css-custom-properties-explained/) a few years ago, and I highly recommend it if all these are new to you.

CSS transitions and animations are methods to interpolate property values. For example, it allows us to interpolate colours, lengths, angles and other characteristics over time. Wouldn't it be cool if we could also transition our custom properties using these? Let's try it out!

```css
div {
  --deg: 0;
  transform: rotate(calc(var(--deg) * 1deg));
  transition: --deg 1s ease-in-out;
}

div:hover {
  --deg: 120;
}
```

Nice try, but this ain't gonna work. Let me explain why.

When you interpolate the `width` of an element, the browser knows how to compute numbers between starting and final stages. Likewise, when you interpolate `color`, the browser also knows how to determine the shades in between. But, because of the highly permissive syntax for **custom** property values, the browser has no clue what type of a value it is, so it struggles to determine what should be between the starting and eventual state.

Luckily, the [CSS Properties and Values API](https://drafts.css-houdini.org/css-properties-values-api/) comes in handy with two methods that allow us to register a property of a particular type, specify the initial value and define its inheritance behaviour. Let's give it a go one more time, but this time we will provide the browser with a hint about the type of `--deg` custom property.

```css
@property --deg {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

div {
  --deg: 0;
  transition: --deg 1s ease-in-out;
  transform: rotate(calc(var(--deg) * 1deg));
}

div:hover {
  --deg: 120;
}
```

An alternative to a [CSS `@property` rule](https://drafts.css-houdini.org/css-properties-values-api/#at-property-rule) is [JavaScript `registerProperty()` function](https://drafts.css-houdini.org/css-properties-values-api/#the-registerproperty-function).

```js
window.CSS.registerProperty({
  name: "--deg",
  syntax: "<number>",
  initialValue: 0,
  inherits: false,
});
```

Be warned that this is at the experimental stage at the time of writing this article. So please check [the browser support for `@property`](https://caniuse.com/mdn-css_at-rules_property) before using it on your project.

<p class="codepen" data-height="280" data-default-tab="css,result" data-slug-hash="xxWEYoB" data-user="pawelgrzybek" style="height: 280px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/xxWEYoB">
  Untitled</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Thanks, Lea

I learned this and a lot more from [Lea Verou's talk "CSS Variable Secrets"](https://youtu.be/ZuZizqDF4q8), and I highly recommend it to you. Until next time dear friend, stay curious and share knowledge 👋
