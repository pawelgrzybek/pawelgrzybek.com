---
title: From Sass to PostCSS
description: Do you remember that amazing feeling when you discovered the power of Sass? Variables, mixins, nesting — WOW! Time to do it again, this time with PostCSS.
date: 2015-08-26
photo: 2015-08-27.jpg
---

I have a feeling that my CSS authoring went way too far from vanilla CSS. Abstraction of my super functions heavy Sass files doesn’t even remind stylesheets as we remember them from the past. I noticed on Twitter a huge buzz about PostCSS but initially I refused to try it. I just couldn’t imagine a better process for working with styles than my sassy method. Excitement of community eventually triggered my curiosity and I gave it a try. Do you remember that feeling when you discovered power of Sass few years ago? I just moved back to CSS and have exactly the same feeling. Alan Mooiman gave an awesome talk at CascadiaFest 2015 conference titled [“CSS is dead, long live CSS”](https://youtu.be/jWDZP8twWDg) and I am currently on the same boat.

![Alan Mooiman - CSS is dead, long live CSS](/photos/2015-08-27-1.jpg)

## The main difference between Sass and PostCSS

Sass comes with bunch of functionality irrespectively if you use a whole bunch of features, or just simple variables. PostCSS comes with absolutely nothing apart from API that handles [plugins](https://github.com/postcss/postcss#plugins) written in JavaScript. Yeah, thats correct! You pick extra functionality and add them to your process by yourself. If you need variables, you need to install small plugin and now you have a CSS with variables. If you need nesting on top of that, one more plugin and your CSS is now supercharged by variables and nesting. You get it now. Because you use only the things that you need it makes the entire process super fast.

> PostCSS can do the same work as preprocessors like Sass, Less, and Stylus. But PostCSS is modular, 3-30 times faster, and much more powerful.

![PostCSS.parts website](/photos/2015-08-27-2.jpg)

## Grunt, Gulp, Broccoli…

There is many options to get your PostCSS running. Configurations is dead easy and it’s [well described on Github](https://github.com/postcss/postcss#usage). I use [gulp.js](http://gulpjs.com/) as a build system and it [works very well](https://github.com/postcss/gulp-postcss) with it. If you struggle to set it up, [“How to Build Your Own CSS Preprocessor With PostCSS” by Craig Buckler](http://www.sitepoint.com/build-css-preprocessor-postcss/) is a good resource to start with. Another very helpful resource to get your head around it is [PostCSS Tutorials](https://www.youtube.com/playlist?list=PLLnpHn493BHFvjZzyYrQP0RTsG-Al7j9m) by Scott Tolinski from Level Up Tuts. Sometimes I can’t believe all the videos that this guy is doing are available to watch for free. I highly recommend a different series by Scott (ie. Gulp or Sketch are very good).

## What I use

As I said earlier I try to restrict my toolkit to a minimum but it does’t mean I want to forget about amazing things like partials or variables. There is a few add-ons that I can’t live without and let me show you how it works. The majority of them work exactly the same as they do in Sass.

### Partials and imports

I can’t imagine to work with CSS without meaningful order of my partials files. Plugin that I use to make it work is [postcss-import](https://github.com/postcss/postcss-import). I kept the Sass naming convention with a single prefix underscore for partial files.

```css
/* Code looks like */

@import '_typography.css';
```

### Variables

Sass style variables you can add via [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars). Eventually I will replace it with [cssnext](https://github.com/cssnext/cssnext) that is using the syntax from latest CSS spec. It is cool to be familiar with upcoming standards, yeah?

```scss
/* Code looks like */

$color-brand: hotpink;
$font-size: 1em;

body {
  color: $color-brand;
  font-size: $font-size;
}
```

```css
/* Result */

body {
  color: hotpink;
  font-size: 1em;
}
```

### Nesting

I almost don’t nest at all. As a big fan of BEM methodology the only things that I nest are pseudo-classes and pseudo-elements. I could live without nesting, but it is just an affter-effect of longterm habits. The plugin that I use to do it is [postcss-nested](https://github.com/postcss/postcss-nested).

```scss
/* Code looks like */

a {
  color: black;

  &:hover {
    color: plum;
  }
}
```

```css
/* Result */

a {
  color: black;
}
a:hover {
  color: plum;
}
```

### Mixins

Sass mixins offers a huge power and I am worried that I won’t be able to replicate the same functionality in my new PostCSS workflow. Something that [postcss-mixins](https://github.com/postcss/postcss-mixins) brings to the table blew me away. Ability to define a mixin in CSS and function in JavaScript is awesome. I need to get my head around it a little bit more, but at first glance it’s superb!

```scss
/* Code looks like */

@define-mixin transition $property: all, $time: 150ms, $easing: ease-out {
  transition: $(property) $(time) $(easing);
}

body {
  @mixin transition color, 2s, ease-in;
}
```

```css
/* Result */

body {
  transition: color 2s ease-in;
}
```

### Media-queries concatenation

Small plugin [CSS MQPacker](https://github.com/hail2u/node-css-mqpacker) wraps the same media-queries rules into one. I know that few of the same media-queries decelerations doesn’t affect performance (as long as it is gzipped) but for peace of mind we can save few bits.

```scss
/* Code looks like */

.foo {
  width: 100%;

  @media (min-width: 960px) {
    width: 50%;
  }
}

.bar {
  width: 100%;

  @media (min-width: 960px) {
    width: 50%;
  }
}
```

```css
/* Result */

.foo {
  width: 100%;
}

.bar {
  width: 100%;
}

@media (min-width: 960px) {

  .foo {
    width: 50%;
  }

  .bar {
    width: 50%;
  }
}
```

### Autoprefixer

It is definitely the most popular add-on based on PostCSS. [Autoprefixer](https://github.com/postcss/autoprefixer) cares about adding necessary vendor prefixes. For example:

```css
/* Code looks like */

.box {
  display: flex;
}
```

```css
/* Result */

.box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

### Smart minification with cssnano

I used many CSS minification tools but [cssnano](http://cssnano.co) is much smarter than rest of them. This modular optimisation tool built on top of PostCSS generates as smaller production stylesheet as it can be. Have a look at the example from their website.

```css
/* Code looks like */

h1::before,
h1:before {
  margin: 10px 20px 10px 20px;
  color: #ff0000;
  -webkit-border-radius: 16px;
  border-radius: 16px;
  font-weight: normal;
  font-weight: normal;
}

/* invalid placement */
@charset "utf-8";
```

```css
/* Result */

@charset 'utf-8';h1:before{margin:10px 20px;color:red;border-radius:1pc;font-weight:400}
```

## Will I move from Sass to PostCSS

Yes. Maybe not today, maybe not tomorrow, but eventually I’ll find a perfect workflow that will let me smoothly transfer entirely to PostCSS. This tool is getting popular day by day and I’m sure that it is not a temporary hype. Companies like Google, Twitter, Alibaba, and Shopify use it already. Recently Chris Coyier on [Codepen’s blog](https://blog.codepen.io/2015/07/14/postcss-now-supported-on-codepen/) announced support for PostCSS. New plugins are coming out. All these things just make me curious what will Sass 4.0 bring to us?

Let me know what do you think about PostCSS. If you have any plugins or hints that I could implement into my workflow, please let me know. I'm sure I will write more posts about PostCSS in near future, so please stay tuned!
