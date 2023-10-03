---
title: "TIL: invalid CSS cyclic dependencies and a valid empty fallback value using a bare comma"
summary: "Today I read one of the most mind-bending CSS articles I have read in a while. It made me think about all these patterns using CSS custom properties we explored in the last few years and how many we still have to discover."
---

Today I read ["Cyclic Dependency Space Toggles" by Roman Komarov](https://kizu.dev/cyclic-toggles/), one of the most mind-bending CSS articles I have read in a while. It made me think about all these patterns using CSS custom properties we explored in the last few years and how many we still have to discover.  I also learned two exciting concepts from this post, so let me share them with you.

## Invalid cyclic dependencies

When custom properties refer to each other, all the custom properties in the cycle are invalid. A quote from [the specification](https://www.w3.org/TR/css-variables-1/#cycles):

> This can create cyclic dependencies where a custom property uses a var() referring to itself, or two or more custom properties each attempt to refer to each other. […] If there is a cycle in the dependency graph, all the custom properties in the cycle are invalid at computed-value time. 

```css
div {
  --a: var(--b);
  --b: var(--a);
}
```

## Valid empty fallback value using a bare comma

If the initial value passed to a `var()` function is missing or invalid, but it is followed by a bare comma, the computed value is a valid empty fallback. And here is the explanation from [the specification](https://www.w3.org/TR/css-variables-1/#using-variables):

> […] a bare comma, with nothing following it, must be treated as valid in `var()`, indicating an empty fallback value.

```css
div {
  --my-var: var(--missing-var,);
  /*                         👆 */
}
```

## How are these two concepts useful?

If you are wondering how any of this is helpful, I recommend reading [Roman's article](https://kizu.dev/cyclic-toggles/), which presents a powerful use case for value toggling. Of course, it is not the only way to take advantage of valid/invalid evaluations of custom properties. Have a look at this simplified example.

```html
<!-- index.html -->

<div></div>
<div style="--color: var(--is-red)"></div>
<div style="--color: var(--is-green)"></div>
```

```css
/* style.css */

div {
  --color: var(--is-default);

  --is-default:   var(--color,);
  --is-red:   var(--color,);
  --is-green:   var(--color,);

  background-color: var(--is-default, gray) var(--is-red, red) var(--is-green, green);
}
```

The value of `--color` custom property determines the validity of `--is-default`, `--is-red` and `--is-green`. Then, the corresponding fallback value for a `background-color` is applied (`gray`, `red` or `green`).

<iframe style="width: 100%; height: 400px; border: 1px solid rgb(46, 49, 56);" src="https://stackblitz.com/edit/web-platform-c6g78y?embed=1&file=index.html&hideNavigation=1"></iframe>

It is not something I would use in any of my projects, but it is another example of how powerful CSS custom properties are. I hope you enjoyed this article and learned a thing or two. Thanks for reading 🫶
