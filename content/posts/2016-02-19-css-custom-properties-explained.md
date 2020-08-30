---
title: CSS Custom Properties explained
summary: CSS Custom Properties (colloquially known as a CSS Variables) are around the corner. Let's embrace the power of a feature that we've been waiting years for.
photo: 2016-02-19.jpg
---

In programming languages the term "variable" describes a storage location normally associated with an identifier that contains some value. Despite fact that CSS is a markup language, spec creators were very generous recently and gave us a tiny, but very powerful piece of real programming capability. Excitement about native [CSS Custom Properties](https://www.w3.org/TR/css-variables/) is generally tempered by the incorrect comparison to variables used in preprocessors like [Sass](http://sass-lang.com/) or [LESS](http://lesscss.org/). Don't be fooled by this misconception! Bare with me for the rest of this article and let's embrace the power of this new native feature together.

## Syntax

 When I saw the syntax for a first time I wasn't a big fan of it. To be honest, not much has changed since. One of the spec creators gave us a [fair explanation](http://www.xanthir.com/blog/b4KT0) behind the naming decisions.

> If we use $foo for variables, we'll be unable to use it for future "variable-like" things.

 A declaration can be made on any selector and it requires a valid identifier that starts with two dashes. Unlike other CSS properties, variable names are case-sensitive. They follow inheritance and specificity rules like all other ordinary properties. If you need a reminder on how specificity in CSS works, I encourage you to read ["CSS Specificity explained"](https://pawelgrzybek.com/css-specificity-explained/) first. The common practice is to declare it on the `:root` element to keep it accessible in all child selectors.

```css
:root {
  --brand-color: #06c;
}
```

To reference a variable value use the `var()` function.

```css
h1 {
  color: var(--brand-color);
}
```

Custom properties can share values between each other.

```css
:root {
  --brand-color: #06c;
  --logo-color: var(--brand-color);
}
```

The new var function allows a fallback value in case the property wasn't declared beforehand.

```css
p {
  font-family: var(--font-stack, Roboto, Helvetica);
}

// Yes, quotation marks are not needed
// More about that here
// https://mathiasbynens.be/notes/unquoted-font-family
```

Variables cannot be a property name or part of a value. The following examples are not valid.

```css
.foo {
  --side: margin-top;
  var(--side): 20px;
}
```

```css
.foo {
  --gap: 20;
  margin-top: var(--gap)px;
}

// Use calc() instead
.foo {
  --gap: 20;
  margin-top: calc(var(--gap) * 1px);
}
```

## The difference between native CSS Custom Properties and Sass variables

Preprocessors like [Sass](http://sass-lang.com/) or [LESS](http://lesscss.org/) are fantastic! The variables available in these tools are not exactly the same as CSS Custom Properties though. Further, the variables that are available in the popular [PostCSS](http://postcss.org/) plugin called [cssnext](http://cssnext.io/) use the same syntax as native CSS Custom Properties but still behave exactly the same as those from Sass or LESS. They apply a static value to the declaration during the compilation process. The new native CSS feature applies a value to a DOM element on runtime meaning that the browser allows us to reassign it. The dynamic nature of this feature allows us to take advantage of other language facilities like media queries or cascading. Let's have a look at the classic example that is impossible with preprocessors, but works fine with native CSS.

```scss
$fz: 1rem;

@media (min-width: 60rem) {
  $fz: 1.5rem;
}

body {
  font-size: $fz;
}
```

The above example applies a static `font-size: 1rem` to the `body` tag. The media query is completely ignored because a media query is not something that works in the C or Ruby compiler, it is something that works only in the browser. To make it work in Sass we have to create two separate variables and assign them depending of the breakpoint. CSS Custom Properties don't require the additional compilation process so the browser applies the value at runtime. When we change the width of the viewport, the value of the property is reassigned as expected.

```css
:root {
  --fz: 1rem;
}

@media (min-width: 60rem) {
  :root {
    --fz: 1.5rem;
  }
}

body {
  font-size: var(--fz);
}
```

In my opinion it is freaking awesome and it opens an array of new options that weren't possible before. I have many more examples in my head, but hopefully this one clearly illustrates the subject.

## Working with CSS Custom Properties and JavaScript

The true power of CSS Custom Properties comes when we combine it together with JavaScript. It takes very few lines of code to allow us to get and change the value of CSS custom property. Let's go through a few simple examples.

### Get the value of CSS Custom Properties

To get a value of a property we have to use `getPropertyValue()`.

```css
:root {
  --brand-color: salmon;
}
```

```js
var styles = getComputedStyle(document.documentElement);
var customProp = String(styles.getPropertyValue('--brand-color')).trim();

console.log(customProp);
// salmon
```

### Reassign the value of CSS Custom Properties

To reassign the value `setProperty()` comes handy.

```css
:root {
  --brand-color: salmon;
}

p {
  color: var(--brand-color);
}
```

```js
document.documentElement.style.setProperty('--brand-color', 'purple');
```

```html
<p>I’m a purple paragraph!</p>
```

## Detect the browser support for CSS Custom Properties

Browser support for [CSS Variables](https://caniuse.com/#search=css%20var) isn't great at the time of writing this article. Google Chrome 49+, Firefox 31+, Safari 9.1+ and iOS 9.3+ doesn't make it reliable enough to use it in production. Luckily we have a few methods to detect the hero of today's article. [Native feature detection with CSS.supports() API](https://pawelgrzybek.com/native-feature-detection-with-csssupports-api/) helps us with that. Lets have a look at how to use it in CSS and JavaScript.

```css
body {
  --bg-color: #e46764;
  background-color: pink;
}

@supports (background-color: var(--bg-color)) {
  body {
    background-color: var(--bg-color);
  }
}
```


```js
CSS.supports('--bg-color', '#e46764');
// returns a boolean value
```

This method isn't bulletproof because support for `@support` isn't amazing at all. [Wes Bos](https://twitter.com/wesbos) posted a much more [reliable method](https://gist.github.com/wesbos/8b9a22adc1f60336a699) the other day. Thanks man!

```js
function testCSSVariables() {
  // create a new element
  var el = document.createElement('span');

  // add a new custom property and apply it as a background
  el.style.setProperty('--color', 'rgb(255, 198, 0)');
  el.style.setProperty('background', 'var(--color)');

  // print new element to the DOM
  document.body.appendChild(el);

  // assign computed styles of element
  var styles = getComputedStyle(el);

  // return true if background color is assigned correctlly, false otherwise
  var doesSupport = styles.backgroundColor === 'rgb(255, 198, 0)';

  // remove element from the DOM
  document.body.removeChild(el);

  // return boolean value
  return doesSupport;
}

testCSSVariables();
// returns a boolean value
```

## Day / night mode switch

Codepen is already full of beautiful projects that use CSS Custom Properties. Mine is nothing near this level of creativity but I had good fun doing it. Before checking example below, please make sure your browser [supports CSS Custom Properties](https://caniuse.com/#feat=css-variables) first. I'm super curious about how you use CSS Custom Properties. Don't be shy and post a link in the comments section :)

<p data-height="391" data-theme-id="14885" data-slug-hash="KVLmXQ" data-default-tab="result" data-user="pawelgrzybek" class='codepen'>See the Pen <a href='https://codepen.io/pawelgrzybek/pen/KVLmXQ/'>2016-02-19-css-custom-properties-explained</a> by Pawel Grzybek (<a href='https://codepen.io/pawelgrzybek'>@pawelgrzybek</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
