---
title: Pinterest style layout with Bricky
description: The Pinterest / Masonry style layout has always been tricky to create so I've created a very lightweight and dependency-free plugin called Bricky.
date: 2016-05-10
photo: 2016-05-10.jpg
---

One of my recent clients wanted to use this trendy kind of layout well known by Tumblr or Pinterest users. I did a quick search but I haven’t found any plugin that fits my needs (something that was responsive, lightweight and free of dependencies). All the resources that I found were huge, required a jQuery dependency or provide tons of options that I don't need. Instead of going deeper with my research I decided to code it by myself. [Bricky](https://github.com/pawelgrzybek/bricky) (thanks to my good friend Kim for this name) is a very lightweight (≈ 1.5KB minified) and dependency-free script with a minimal number of options. It is open-source and you can download it from [Github](https://github.com/pawelgrzybek/bricky) or from [npm](https://www.npmjs.com/package/bricky). It did the job on my project so maybe you will find it useful as well. Have a look at the [CodePen demo](https://codepen.io/pawelgrzybek/pen/vGbzpW).

![Bricky - Masonry style layout without jQuery](/photos/2016-05-10-1.jpg)

## How does it work

Whenever I create a project like this, I start with a blank JavaScript file that is full of commented out instructions needed to accomplish the task. My initial plan to create this plugin looked similar to the list below and it’s pretty much all of what this script is doing.

1. Store all the articles in an array and remove them from the DOM.
2. Create a flex wrapper inside of the element defined in settings.
3. Dependent on the screen resolution, create columns inside the previously created wrapper (breakpoints and columns are configurable).
4. Loop through the articles inside the array and append them one by one to the column with the least space taken.
5. When the screen is resized, clear the container and repeat the process again. Debouncing the browser-intensive `resize` event improved the script's performance dramatically.

## How to use it

You can inject the script into your document markup manually or use a module bundler all the cool kids are using like [Browserify](http://browserify.org/) or [Webpack](https://webpack.github.io/) to use the node-style `required('bricky')` way. Configuration is dead simple - only two settings are required (`parent` & `elements`) and two are optionally configurable (`gutter` & `breakpoints`).

### Options

All that I needed and nothing else...

```js
var pref = {
  parent: '.bricky',
  elements: 'article',
  gutter: '12px',
  breakpoints: [
    [600, 2],
    [900, 3],
    [1200, 4]
  ]
};
```

- `parent` - (required) string with the selector where bricky should be placed
- `elements` - (required) string with the "bricks" selector
- `gutter` - gutter width in relative or absolute units
- `breakpoints` - this array is a collection of nested arrays. Each of them is constructed as `[pxValueOfbreakpoint, howManycolumns]`. You can pass as many breakpoints as you want.

### Node style

In the command line...

```
npm i -S bricky
```

In the script file...

```js
// Assign the 'bricky' module to Bricky variable
var Bricky = require('bricky');

// store the object with settings in the variable 'pref'
var pref = {
  parent: '.bricky',
  elements: 'article',
  gutter: '12px',
  breakpoints: [
    [600, 2],
    [900, 3],
    [1200, 4]
  ]
};

// Instantiate new Bricky & invoke it
var mySuperLayout = new Bricky(pref);
mySuperLayout.start();
```

### Browser oldschool style

In the document markup...

```html
<script src="../js/bricky.min.js"></script>
<script>
  // store object with setting in perf variable
  var pref = {
    parent: '.bricky',
    elements: 'article',
    gutter: '12px',
    breakpoints: [
      [600, 2],
      [900, 3],
      [1200, 4]
    ]
  };

  // Instantiate new Bricky & invoke it
  var mySuperLayout = new Bricky(pref);
  mySuperLayout.start();
</script>
```

## Feedback

Hopefully you'll find Bricky useful. If you decide to use it on your project, please send me a link - I'll be ultra proud and happy. Please report bugs and share your suggestions. Bye :*
