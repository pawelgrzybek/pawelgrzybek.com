---
title: "The CSS Reset, again"
summary: ""
---

There is a lot of chatter about CSS resets in the web sphere recently, as it always has been. I'm in the process of a never-ending redesign of my website, which is most likely going to end up being a simplification of already existing stuff. Probably the new design is going to look like the old one (again). As part of this process, I looked into my global CSS and resets made by others and wanted to share my approach, things that I picked up from others and popular snippets that I'm going to stay away from.

## New project, new reset

I don't maintain a single reset that I throw at the top of every single new project by default. I don't start new projects often, but when I'm about to work on a new one, I like to treat it with individual care. Fair point to you if you build a new website five times a month — I don't (look, an em dash is not only what AI can do). I see no point in loading styles for the `meter` element if it is never going to be used. Here is all I need at the beginning and nothing more.

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
  hanging-punctuation: first allow-end last;
}
```

Using the `box-sizing: border-box` feels like a more sensible default, but for the legacy reasons we ended up with the less intuitive `content-box`. The [International Box-Sizing Awareness Day](https://css-tricks.com/international-box-sizing-awareness-day/) is dedicated to this single CSS declaration. There is [a flavour where it's inherited from the `html` element](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/), but there are also [good reasons not to inherit the box model](https://www.oddbird.net/2025/09/04/box-model/). [Kevin Powell suggests that we may not need it all](https://www.youtube.com/watch?v=PtAcpV6TAGM), and maybe he's right because we don't need to set explicit sizes on things as often as we used to. Either way, this one lands very high on every single one of my projects.

Nuking down all the `margin`s and `padding`s is more opinionated. I still care about the vertical rhythm of typographic elements, and this requires some extra care when it comes to spacing, so my preference is to control it myself. Modern CSS units help here a lot, but I published ["Vertical rhythm using CSS lh and rlh units"](/vertical-rhythm-using-css-lh-and-rlh-units/) for those who care about this level of details.

There was a time when the `text-size-adjust` was kinda of useful, which is well described in the ["Adjusting the Text Size" sectoin of Apple's archive](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16), but these times are long gone, so I disable that by default. Safari still respects the version prefixed by the `-webkit-` so this one and the sans-prefix version are all I use. Other ones like `-moz-` and `-ms-` are no longer needed. [Kilian's "Your CSS reset needs text-size-adjust (probably)"](https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/) goes more in depth about it.

The `-webkit-font-smoothing: antialiased` is a macOS-only property, that disables the subpixel antialiasing. From my experience, it makes the website text look closer to the other OSs. David Bushell published ["What’s the deal with WebKit Font Smoothing?"](https://dbushell.com/2024/11/05/webkit-font-smoothing/) which aligns with my observations.

Adding the `color-scheme: light dark` is like my favourite. A cheap version of having multiple themes with next to none effort. There is still a lot that every project needs to implement proper theming, but this is a good starting point.

The `hanging-punctuation: first allow-end last` just looks better. [Jeremy Keith in the "Hanging punctuation in CSS"](https://adactio.com/journal/21027) reminds us how it can mess up form fields, so keep that in mind.

## More cool stuff

Piles of CSS are going to land on top of my few-lines base, but as I go I keep a few rules in mind. I also looked at dozens of resets maintained by some web folks, and I picked the bits that I like.

### Apply correct direction for Google Translate results

I picked this one up from [David Bushell](https://dbushell.com/2025/09/12/css-reset/). Pages translated to a language that reads from right to left, should have the `dir="rtl"` attribute on the root element. [Kagi Translate](https://translate.kagi.com/) does it right. There is also a CSS `direction: rtl` that changes only the presentation, but not the semantics, hence we should always prefer the `dir` attribute. [Yandex Translate](https://translate.yandex.com/) uses `direction: rtl`.

{{< figure src="translation.jpg" alt="Homepage of my website translated from English to Arabic using Kagi Translate, Yandex Translate and Google Translate. The first two generate a correct presentation, but the most popular Google Translate not so much." caption="Homepage of my website translated from English to Arabic using Kagi Translate, Yandex Translate and Google Translate. The first two generate a correct presentation, but the most popular Google Translate not so much." >}}

Amongst all the translation tools, the most popular by far is [Google Translate](https://translate.google.com), and this one does not use any of the techniques mentioned above. It simply generates a broken preview for languages that read from right to left, unless you add a declaration for the `translated-rtl` class to your stylesheet. Thanks, Google 🫤

```css
html.translated-rtl {
  direction: rtl;
}
```

### Logical properties everythere

There are very few reasons not to use logical properties. Just by following this simple rule you get an experience that in the past required [preprocessor plugins](https://github.com/vkalinichev/postcss-rtl). Just do it, and you will thank me later.

### Text wrap balance and pretty

Stuff simply looks better. Also, how cool that the `:heading` selector is on the horizon. That will target all headings and simplify this snippet a tad.

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}
```

### List style position

How embarrasing that I only learned about this property a few days ago when I read ["The Coyier CSS Starter" Chris](https://frontendmasters.com/blog/the-coyier-css-starter/).

```css
ul,
ol,
dl {
  list-style-position: inside;

  ul,
  ol,
  dl {
    padding-inline-start: 1lh;
  }
}
```

### Layers

["Your CSS reset should be layered" by Mayank](https://mayank.co/blog/css-reset-layer/) convinced me to use cascade layers. Low-effort safety net to prevent some potential specificity collisions. It should be either that or wrap every selector in `:where()`, but throwing all to the layer is less typing, so it's my preference.

```css
@layer reset {
  /* my stuff goes here */
}
```

### Animate to auto and others

If you missed that, you can now animate from `0px` to `auto`/`min-content` and other keywords. This snippet is to enable this one for anyone who is OK with animations. It will fallback to the good old instant transition otherwise. Magic 🪄

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}
```

### Flex/grid all the things

yolo

## What others do that I don't like

### Unset all

Default styles applied by the browsers are probably the most thought-out CSS resets amongst them all. They are a result of long years of itetating and reacting to user feedback, reacting to ever changing medium. This single like `unset: all` throws it all to the bin. Surprisingly, the thing is used a lot.

```css
* {
  all: unset;
}
```

### No fluid typography please

As said before, I do care about the vertical rhythm of my typography, and having a font that scales based on the viewport is a recipe for subpixels. Not the game I like to play! Readers of this blog (yes, you) are mostly devin’ in front of high-density screens on MacBooks, or 5k Studio Displays that are just gorgeous. This is not the norm, though! Go and look at your fluid typography on the screen of your father's decade-old HP laptop. [“Time to upgrade your monitor” by Nikita Prokopov](https://tonsky.me/blog/monitors/) is a great read about font rendering. I just don’t use fluid types 🤷‍♂️

```css
html {
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
}
```

---

["You are not a CSS dev if you have not made a CSS reset"](https://mikemai.net/blog/2024/11/01/you-are-not-a-css-dev-if-you-have-not-made-a-css-reset.html). Mine is not a typical reset, but hopefully I elaborated about the subject enough to call myself a CSS dev.

## Resources

- ["Let’s see Paul Allen’s CSS Reset" by David Bushell](https://dbushell.com/2025/09/12/css-reset/)
- ["The Coyier CSS Starter" by Chris Coyier](https://frontendmasters.com/blog/the-coyier-css-starter/)
- ["A (more) Modern CSS Reset" on Piccalli](https://piccalil.li/blog/a-more-modern-css-reset/)
- ["A Modern CSS Reset" by Joshua Comeau](https://www.joshwcomeau.com/css/custom-css-reset/)
