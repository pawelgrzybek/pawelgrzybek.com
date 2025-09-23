---
title: "The CSS Reset, again"
summary: ""
---

There is a lot of chatter about CSS resets in the web sphere recently, as it always has been. I'm in the process of a never-ending redesign of my website, which is most likely going to end up being a simplification of already existing stuff. Probably the new design is going to look like the old one (again), because I like it. As part of this process, I looked into my global CSS and resets made by other people and wanted to share my approach, things that I picked up from others and parts that I’m going to rather stay away from.

## I don't maintain reuable CSS resets

I don't maintain a single reset that I throw at the top of every single new project by default. I don't start new projects often, but when I'm about to work on a new one, I like to treat it with individual care. Fair point to you if you build a new website five times a month — I don't (look, an em dash is not only what AI can do). There is no point in loading CSS that will never be used. Here is all I always start with and nothing more.

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  color-scheme: light dark;
  -webkit-font-smoothing: antialiased;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

Using the `box-sizing: border-box` feels like a more sensible default, but for the legacy reasons we ended up with the less intuitive `content-box`. The [International Box-Sizing Awareness Day](https://css-tricks.com/international-box-sizing-awareness-day/) is dedicated to this single CSS declaration. There is [a flavour where it's inherited from the `html` element](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/), but there are also [good reasons not to inherit the box model](https://www.oddbird.net/2025/09/04/box-model/). Either way, this one lands very high on every single one of my projects.

Nuking down all the `margin`s and `padding`s is more opinionated, but this is the part that I prefer to controll myself.

## What others do that I like

## What others do that I don't like

### One

```css
*:where(
  :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
) {
  all: unset;
}
```
