---
title: "The CSS Reset, again"
summary: "Apparently you are not a real CSS dev if you don't maintain your own CSS reset. Challenge accepted! Not a typical reset, but for sure a bunch of opinions."
---

There is a lot of chatter about CSS resets in the web sphere recently. For the first time in years, I recently looked into the stylesheet of this very website and decided to modernise a few bits. As part of this, I looked into some resets carefully crafted by others, and wanted to share my thoughts, things I liked, and popular snippets that I'm going to stay away from.

{{< figure src="reset.jpg" alt="Code editor with a CSS file open. Focus on the line with box-sizeing declaration." caption="I bought a new lens and I think this picture looks sick. Other than that, this image serves no purpose but this is my website and here I can do whatever I want. You should have a website too." >}}

## New project, new reset

I don't maintain a single reset that I throw at the top of every single new project. I like to treat new projects with individual care. Fair point to you if you build a new website five times a month — I don't (look, an em dash is not only what AI can do). I see no point in loading styles for the `meter` element if it is never going to be used. Here is all I need at the beginning, and nothing more.

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

Using `box-sizing: border-box` feels like a more sensible default, but for legacy reasons we ended up with the less intuitive `content-box`. The [International Box-Sizing Awareness Day](https://css-tricks.com/international-box-sizing-awareness-day/) is dedicated to this single CSS declaration. There is [a flavour where it's inherited from the `html` element](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/), but [Miriam Suzanne gave a compelling reason not to do so](https://www.oddbird.net/2025/09/04/box-model/). [Kevin Powell suggests that we may not need it at all](https://www.youtube.com/watch?v=PtAcpV6TAGM), and maybe he's right because we don't need to set explicit sizes on things as often as we used to. Either way, this one goes to the top of all my projects.

Nuking down all the `margin`s and `padding`s is more opinionated. I still care about the vertical rhythm of typographic elements, and this requires some extra care when it comes to spacing, so my preference is to control it myself. Modern CSS units help here a lot, but I published ["Vertical rhythm using CSS lh and rlh units"](/vertical-rhythm-using-css-lh-and-rlh-units/) for those who care about this level of detail.

There was a time when the `text-size-adjust` was useful, and [the "Adjusting the Text Size" section of Apple's archive](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16) lists a few good reasons, but these times are long gone. I disable that by default. Safari still respects the prefixed version `-webkit-` so this one and the unprefixed version are all I use. Other commonly used variations like `-moz-` and `-ms-` are no longer needed. [Kilian's "Your CSS reset needs text-size-adjust (probably)"](https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/) goes more in-depth about it.

The `-webkit-font-smoothing: antialiased` is a macOS-only property that disables the subpixel antialiasing. Too much time I spent trying to avoid it, but it actually produces a more consistent look across operating systems. David Bushell published ["What’s the deal with WebKit Font Smoothing?"](https://dbushell.com/2024/11/05/webkit-font-smoothing/), and you should give it a read because the dude put a lot of work into testing the thing.

Adding the `color-scheme: light dark` is my favourite. It's a cheap version of having multiple themes with next to none effort. There is still a lot that every project needs to implement proper theming, but this is a good starting point.

The `hanging-punctuation: first allow-end last` just looks better. [Jeremy Keith in the "Hanging punctuation in CSS"](https://adactio.com/journal/21027) reminds us how it can mess up form fields, so keep that in mind.

## More cool reset stuff

Piles of CSS are going to land on top of my few base lines, but as I go, I keep a few rules in mind. I also looked at dozens of resets maintained by some web folks, and I picked the bits that I like. Here is the list in no particular order.

### Apply correct direction for Google Translate results

I picked this one up from [David Bushell](https://dbushell.com/2025/09/12/css-reset/). Pages translated to a language that reads from right to left should have the `dir="rtl"` attribute on the root element. [Kagi Translate](https://translate.kagi.com/) does it right. There is also a CSS `direction: rtl` that changes the presentation, but not the semantics. [Yandex Translate](https://translate.yandex.com/) uses this technique.

{{< figure src="translation.jpg" alt="Homepage of my website translated from English to Arabic using Kagi Translate, Yandex Translate and Google Translate. The first two generate a correct presentation, but the most popular, Google Translate, not so much." caption="Homepage of my website translated from English to Arabic using Kagi Translate, Yandex Translate and Google Translate. The first two generate a correct presentation, but the most popular, Google Translate, not so much." >}}

Amongst all the translation tools, the most popular by far is [Google Translate](https://translate.google.com), and this one does not use any of the techniques mentioned above. It simply generates a broken preview for languages that read from right to left, unless you add a declaration for the `translated-rtl` class to your stylesheet.

```css
html.translated-rtl {
  direction: rtl;
}
```

### Logical properties everythere

There are very few reasons not to use logical properties. Just by following this simple rule, you get an experience that in the past required [preprocessor plugins](https://github.com/vkalinichev/postcss-rtl).

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

/* One day */
/* :heading { */
/*   text-wrap: balance; */
/* } */

p {
  text-wrap: pretty;
}
```

### List style position

How embarrassing that I only learned about this property a few days ago when I read ["The Coyier CSS Starter" by Chris](https://frontendmasters.com/blog/the-coyier-css-starter/). No need for `margin-inline-start` and some magic numbers that look good. Also, indenting nested lists using `lh` unit feels geometrically correct.

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

["Your CSS reset should be layered" by Mayank](https://mayank.co/blog/css-reset-layer/) convinced me to use cascade layers. It is a low-effort safety net to prevent some potential specificity collisions. It should be either that or wrap every selector in `:where()`, but throwing everything into the layer is less typing, and a winner option for me.

```css
@layer reset {
  /* stuff goes here */
}
```

### Animate to auto and others

If you missed that, you can now animate from `0px` to `auto`/`min-content` and other keywords. This snippet is to enable this one for anyone who is OK with animations. It will fall back to the good old instant transition otherwise. I took this magical trick from Joshua Comeau 🪄

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}
```

### Flex/grid all the things, aka YOLO mode

A few days ago I had a chat with my good friend who leads the web team at Unsplash, [Oliver Ash](https://oliverjash.me/). Good fella he is! He suggested a little crazy take but the more I think about it, the less I hate it, so I am including it on the list of things that I may do at some point. How about converting all the block elements to flex or even grid items? The [flexbox-reset by Daniel W. Hieber](https://github.com/dwhieb/flexbox-reset) exists and its philosophy is growing on me.

```css
:where(div, article, header, footer) {
  /* ...and other block elements */
  display: flex;
  flex-direction: column;
}
```

## Popular, but not for me

Not all so shiny. There are some snippets present in plenty of resets that you won’t find in my frontend projects. Just to balance things out, a few less likeable things here.

### Unset all

Browsers' default stylesheets are probably the best thought out resets amongst them all. The result of long years curation, focused on the usability and accessibility. The `unset: all` throws all this knowledge to the bin. Surprisingly, I see this thing a lot more often than I should.

```css
* {
  all: unset;
}
```

### No fluid typography please

As said before, I do care about the vertical rhythm of my typography, and having a font that scales based on the viewport is a quick recipe for subpixels. Not the game I like to play! Most likely you're reading it on a high density screen, on the shiny new MacBook, but this is not the norm. Go and look at your fluid typography on the screen of your father's 13-year-old HP laptop. [“Time to upgrade your monitor” by Nikita Prokopov](https://tonsky.me/blog/monitors/) is a great read about font rendering. I just don’t use fluid types 🤷‍♂️

```css
html {
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
}
```

---

["You are not a CSS dev if you have not made a CSS reset"](https://mikemai.net/blog/2024/11/01/you-are-not-a-css-dev-if-you-have-not-made-a-css-reset.html). Mine is not a typical reset per se, but hopefully I elaborated on the subject enough to call myself a CSS dev. Or maybe [Jonathan Snook is right](https://snook.ca/archives/html_and_css/still-no-css-reset), and we don't need the thing and we are just bikeshedding again 🤷‍♂️
