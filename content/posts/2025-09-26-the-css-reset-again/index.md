---
title: "The CSS Reset, again"
summary: ""
---

There is a lot of chatter about CSS resets in the web sphere recently, as it always has been. I'm in the process of a never-ending redesign of my website, which is most likely going to end up being a simplification of already existing stuff. Probably the new design is going to look like the old one (again). As part of this process, I looked into my global CSS and resets made by others and wanted to share my approach, things that I picked up from others and popular snippets that I'm going to stay away from.

## New project, new reset

I don't maintain a single reset that I throw at the top of every single new project by default. I don't start new projects often, but when I'm about to work on a new one, I like to treat it with individual care. Fair point to you if you build a new website five times a month — I don't (look, an em dash is not only what AI can do). There is no point in loading CSS that will never be used. Here is all I need at the beginning and nothing more.

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
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

Using the `box-sizing: border-box` feels like a more sensible default, but for the legacy reasons we ended up with the less intuitive `content-box`. The [International Box-Sizing Awareness Day](https://css-tricks.com/international-box-sizing-awareness-day/) is dedicated to this single CSS declaration. There is [a flavour where it's inherited from the `html` element](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/), but there are also [good reasons not to inherit the box model](https://www.oddbird.net/2025/09/04/box-model/). [Kevin Powell suggests that we may not need it all](https://www.youtube.com/watch?v=PtAcpV6TAGM), and maybe he's right because we don't need to set explicit sizes on things as often as we used to. Either way, this one lands very high on every single one of my projects.

Nuking down all the `margin`s and `padding`s is more opinionated. I still care about the vertical rhythm of typographic elements, and this requires some extra care when it comes to spacing, so my preference is to control it myself. Modern CSS units help here a lot, but I published ["Vertical rhythm using CSS lh and rlh units"](/vertical-rhythm-using-css-lh-and-rlh-units/) for those who care about this level of details.

There was a time when the `text-size-adjust` was kinda of useful, which is well described in the ["Adjusting the Text Size" sectoin of Apple's archive](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16), but these times are long gone, so I disable that by default. Safari still respects the version prefixed by the `-webkit-` so this one and the sans-prefix version are all I use. Other ones like `-moz-` and `-ms-` are no longer needed. [Kilian's "Your CSS reset needs text-size-adjust (probably)"](https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/) goes more in depth about it.

The `-webkit-font-smoothing: antialiased` is a macOS-only property, that disables the subpixel antialiasing. From my experience, it makes the website text look closer to the other OSs. David Bushell published ["What’s the deal with WebKit Font Smoothing?"](https://dbushell.com/2024/11/05/webkit-font-smoothing/) which aligns with my obseravtions.

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
