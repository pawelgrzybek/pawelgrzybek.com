---
title: CSS mixins with @apply rule
description: I'm excited about a recently added CSS features. Previously we discussed custom properties, now it's a time to talk about mixins using the @apply rule.
date: 2016-04-18
photo: 2016-04-18.jpg
---

I am very excited about recent evolution of CSS. Flexbox was a buzzword some time ago, today it is a part of a spec that is well supported and widely adopted. Few months back I published an [intro to CSS grid layout module](https://pawelgrzybek.com/lets-get-into-the-basics-of-css-grid-layout-model/) that is another approaching feature that will dramatically change the way we build our projects. The enormous popularity of preprocessors like Sass or LESS undoubtedly influenced spec authors to bring variables to the language as a CSS Custom Properties. I recently published a [post](https://pawelgrzybek.com/css-custom-properties-explained/) that explains everything that you need to know about this powerful feature. Another aspect of preprocessors that developers and designers love are mixins. Well the good news keeps coming my friend - [CSS @apply Rule](https://tabatkins.github.io/specs/css-apply-rule/) is just around the corner. Let's embrace a native CSS mixins together.

> This specification defines the @apply rule, which allows an author to store a set of properties in a named variable, then reference them in other style rules.

Before we begin with some code snippets and examples I need to inform you that at the time of writing this article [the only implementation](https://www.chromestatus.com/feature/5753701012602880) is in Google Chrome Canary with "Experimental Web Platform features" flag enabled.

![Enable Experimental Web Platform Featured Flag in Google Chrome](/photos/2016-04-18-1.jpg)

## Syntax

If you are familiar with the syntax of CSS Custom Properties you won't struggle to memorize this one. Just wrap a set of properties with curly braces like that...

```scss
:root {
  --heading-style: {
    font-family: cursive;
    font-weight: 700;
  };
}
```

Use the mixin via new `@apply` at-rule.

```scss
h1 {
  @apply --heading-style;
}
```

<p data-height="170" data-theme-id="dark" data-slug-hash="MyGVoo" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/pawelgrzybek/pen/MyGVoo/">2016.04.18 - 1</a> by Pawel Grzybek (<a href="http://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Local variables in CSS mixins

Sass allows us to pass a list of locally defined variables to a mixin. Unfortunately this isn't possible with the `@apply` rule.

If you have some object oriented JavaScript experience, the first thing that you will try as a way around this is doing something like...

```scss
:root {
  --brand-color: red;
  --heading-style: {
    color: var(--brand-color);
    font-family: cursive;
    font-weight: 700;
  };
}
```

```scss
h1 {
  --brand-color: green;
  @apply --heading-style;
}

/*
brand-color value pulled from the root, not the local block
value is red, not green
it is CSS, not JavScript
*/
```

...but this is not JavaScript my friend. It takes the value of the variable from the place where the mixin is defined, not from the block that is "invoked" in. Hopefully we will get ability to pass a parameters to a mixin at some point in the future - fingers crossed.

## Use native CSS mixins today

As I mentioned before, the browser support for this feature is practically zero right now. [Chrome Platform Status](https://www.chromestatus.com/feature/5753701012602880) informs us that the first implementation is planned for Google Chrome 51 (behind the flag) and Opera 38. Any details about other browsers haven't been revealed at the time of writing this article.

As a web developers we want to use the benefits of future improvements right now! That's what we do with Babel and ECMAScript 2015. This is the reason why I like [PostCSS](http://postcss.org/) so much! If you have never used it yet, I highly encourage you to check my [introduction](https://pawelgrzybek.com/from-sass-to-postcss/) to PostCSS for Sass users. [Pascal Duez](https://twitter.com/pascalduez) created a [postcss-apply](https://github.com/pascalduez/postcss-apply) that transpiles `@apply` rule to syntax understandable by current browsers.

The feature detection for `@apply` isn't [that straight forward](https://pawelgrzybek.com/css-custom-properties-explained/#detect-the-browser-support-for-css-custom-properties) as with CSS Custom Properties. I'm sure this is just a matter of time to standardize the way to use it with `@support` rule. If you really need to detect a support for `@apply` rule, look at the [script](https://gist.github.com/malyw/477cd45bd0ed501a1c3ce0870ae16dd1) created by [Serg Gospodarets](https://twitter.com/malyw). Serg also published [list of great use cases](https://blog.gospodarets.com/css_apply_rule) for CSS Mixins on his blog.

I hope you found this overview useful. See you next time :-*

**UPDATE!**

 [Tab Atkins Jr](https://github.com/tabatkins) officially anounced that the proposal for `@apply` has been abandoned from various reasons. Learn more details behind this decision [here](http://www.xanthir.com/b4o00).

 > There's plenty more space to experiment here, and while it does suck to lose a tool that you might have gotten excited about, `@apply` really is just quite a bad idea technically. Let's solve these problems correctly. 
