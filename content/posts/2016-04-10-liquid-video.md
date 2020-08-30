---
title: Liquid video
summary: Make your iframe videos from YouTube or Vimeo responsive with ease with simple script that I published recently - Liquid video.
photo: 2016-04-10.jpg
---

I would like to share with you an easy script that I published the other day. [Liquid video](https://github.com/pawelgrzybek/liquid-video) does exactly what the name suggests. It converts fixed sized iframe videos (from YouTube, Vimeo and other services like that) to responsive ones that adapt to the width of the parent container. It does exactly the same job as popular [FitVids](http://fitvidsjs.com/) but doesn't rely on additional jQuery dependency. It is extremely lightweight - only 417 Bytes minified and 998 Bytes unminified.

## How to use Liquid video

You have two options to use [Liquid video](https://github.com/pawelgrzybek/liquid-video). You can manually inject script to source code of your project (sounds a bit old school) or via npm (preferred way).

### Manual method

Simply inject a minified script in source code of your website and instantiate a new `LiqudVideo` with custom element query as an only argument. Use it just before closing of `body` tag.

```html
<script src="js/liquid-video.min.js"></script>
<script>
var lv = new LiquidVideo(document.querySelectorAll('.post iframe'));
</script>
```

### Use with npm

In age of module bundlers like [Browserify](http://browserify.org/) or [Webpack](https://webpack.github.io/) using external scripts with npm makes life much easier. Just type in your command line...

```
npm install --save liquid-video
```

Personally I prefer to use shortcuts...

```
npm i -S liquid-video
```

And this one goes to your JavaScript file.

```js
var LiquidVideo = require('liquid-video');
var lv = new LiquidVideo(document.querySelectorAll('.post iframe'));
```

<p data-height="429" data-theme-id="14885" data-slug-hash="vGxqaq" data-default-tab="result" data-user="pawelgrzybek" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/vGxqaq/">Liquid video</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
