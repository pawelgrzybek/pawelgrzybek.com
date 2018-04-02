---
title: Native feature detection with CSS.supports() API
description: Feature detection is something that every front end developer faced at some point. CSS.supports() API allows us to use very elegant form to doing it.
photo: 2015-09-17.jpg
---

Feature detection is something that every front end developer faced at some point. There are a number of solutions to handle features incompatibility. It can be some CSS hack that overrides the previous rule, or JavaScript snippet that returns boolean value that dictates further steps. Possibly you came across more advanced solutions like [Modernizr](https://modernizr.com/), which has been updated recently and brought us so many new checks.

There is one more method, not that widely used yet. One of the [CSS at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) is `@supports`. It gives us very intuitive way to check browser capabilities. It also comes with JavaScript `CSS.supports()` API. Let's have a look at some snippets:

```scss
.foo {
  background: #f00;
  @supports (background: conic-gradient(#eee, #bbb)) {
    background: conic-gradient(#eee, #bbb)
  }
}
```

```js
if (CSS.supports('background', 'conic-gradient(#eee, #bbb)')) {
  console.log('Your browser supports conic-gradient');
}
```

## Poor support for @support

I know this heading sounds weird, but it's cruel reality. This feature is too nice to be ready to use. [Browser support](http://caniuse.com/#feat=css-supports-api) isn't good at all.

- Internet Explorer and Opera Mini - forgot about it
- Edge is OK
- Firefox >= 23
- Chrome >= 28
- Safari >= 9
- Opera >= 12.1
- iOS Safari >= 9
- Chrome for Android >= 44.

I live in hope that this feature will be implemented in all browsers soon. That would be nice to have a that elegant way to feature detection. For now better keep your CSS sane or use Modernizr.
