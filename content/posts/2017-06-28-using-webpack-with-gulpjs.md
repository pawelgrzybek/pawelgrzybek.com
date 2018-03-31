---
title: Using webpack with gulp.js
description: Webpack is a module bundler for modern JavaScript apps. Gulp describes itself as a platform-agnostic task runner. Can they work together? Easily! Take a look.
date: 2017-06-28
photo: 2017-06-28.jpg
---

[Webpack](https://webpack.js.org/) is a popular module bundler for modern JavaScript applications. Its biggest advantage is its flexibility — it can be as simple or as complicated as you need it to be. It doesn't matter if you live on the edge and your app is full of modern ES2015 modules or still depends on some legacy code written in AMD style — this tool has you covered.

If I'm not working on a `jsFuckingEverythingInMyWholeLife.js` project I like to use [gulp.js](http://gulpjs.com/). It is a user friendly task runner that handles common tasks like: Sass compilation, media asset compression etc. However there is a chance that you may need to add a tiny bit of JavaScript functionality to a project. What's the solution for this scenario?

## webpack + gulp.js = <3

Let's combine the simplicity of Gulp's API with webpack to take advantage of a modern JavaScript workflow. Less talking, more coding…

```
npm i -D gulp webpack webpack-stream
```

```js
// gulpfile.js

const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('js', () => {
  gulp.src('./src/js/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist/js'));
});
```

That's the Gulp task ready. Let's tell webpack what to do now.

```
npm i -D babel-core babel-loader babel-preset-latest
```

```js
// webpack.config.js

module.exports = {
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['latest', { modules: false }],
          ],
        },
      },
    ],
  },
};
```

This is just an example of a basic configuration file. From this point you can go crazy with your [settings](https://webpack.js.org/configuration/). To use the task now just run in terminal:

```
 _________
< gulp js >
 ---------
        \   ^__^
         \  (@@)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
