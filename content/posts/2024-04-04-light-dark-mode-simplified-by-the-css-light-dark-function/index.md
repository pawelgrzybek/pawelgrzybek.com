---
title: "Light/dark mode simplified by the CSS light-dark() function"
summary: "We can adjust the look of our sites based on OS theme configuration. Let's examine how we have been doing that for the past few years and how we can simplify it by using the light-dark() function."
---

Most modern operating systems let us control the preferred color theme. The Appearance tab of macOS System Settings, for example, gives us three options: "light", "dark" and "system", which flips between themes according to the Night Shift schedule.

Luckily for us web developers, we can adjust the look of our sites based on this configuration. Let’s examine how we have been doing that for the past few years and how we can simplify it by using [the light-dark()](https://drafts.csswg.org/css-color-5/#light-dark) function that is part of [the CSS Color Module Level 5 specification](https://drafts.csswg.org/css-color-5/).

```css
:root {
  color-scheme: light dark;
  --color-fg: #292524;
  --color-bg: #f5f5f4;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #292524;
    --color-fg: #f5f5f4;
  }
}

body {
  color: var(--color-fg);
  background-color: var(--color-bg);
}
```

That's how we have been doing it for the past few years, and this method is precisely how it is implemented on this website at the time of publishing this article. Pretty repetitive, right? Let's refactor that to use the `light-dark()`function.

```css
:root {
  color-scheme: light dark;
}

body {
  color: light-dark(#292524, #f5f5f4);
  background-color: light-dark(#f5f5f4, #292524);
}
```

<p class="codepen" data-height="360" data-default-tab="css,result" data-slug-hash="GRLyaox" data-user="pawelgrzybek" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/GRLyaox">
  2024.04.04 -1- Light/dark mode simplified by CSS ligh-dark function</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

This implementation is a lot nicer, and for simple use cases, this is all we need to make our projects reactive to operating system preferences. This function is not helpful when you have a more advanced theming system for your project.

{{< baseline feature="light-dark" >}}

Hopefully that helps. Stay curious 👋
