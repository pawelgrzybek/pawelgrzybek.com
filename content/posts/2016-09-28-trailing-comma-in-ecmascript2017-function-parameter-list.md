---
title: Trailing comma in ECMAScript 2017 function parameter list
description: Object and array literals already allow us to leave a trailing comma. ECMAScript 2017 adds the same functionality to the function parameter list.
photo: 2016-09-28.jpg
---

Object and array literals allow us to leave a comma dangling off the final item since the third version of ECMAScript (although the implementation in IE8 and below is a clear exception). Other programming languages (Python, D, Hack and probably many more) allow it in functions as well. JavaScript will be joining this list very soon people! [Jeff Morrison](https://twitter.com/lbljeffmo) is the author of the [Trailing Commas in Function Param Lists](https://jeffmo.github.io/es-trailing-function-commas/) proposal that is going to be merged with the upcoming ECMAScript 2017 spec. If you don't know what the heck I'm talking about, have a look at this basic example.

```js
// Array without trailing comma
const someArray = [
  'pawel',
  29
];

// Array with trailing comma
const someArray = [
  'pawel',
  29,
];
```

```js
// Object without trailing comma
const someObject = {
  name: 'pawel',
  age: 29
};

// Object with trailing comma
const someObject = {
  name: 'pawel',
  age: 29,
};
```

```js
// Function declaration without trailing comma
function someFunction(
  name,
  age
) {
// blah blah blah
}

// Function declaration with trailing comma
function someFunction(
  name,
  age,
) {
// blah blah blah
}
```

```js
// Function invocation without trailing comma
someFunction(
  'pawel',
  29
);

// Function invocation with trailing comma
someFunction(
  'pawel',
  29,
);
```

This article is not one of those stylistic dilemmas like "semicolon or die". In my opinion it is 100% about personal preference. Let's talk a bit about the benefits of the new feature and how to deal with it now.

## Nice VCS diff and easier code manipulations

The new feature won't supercharge the output of your app whatsoever but can definitely benefit your codebase [manipulation and maintainability](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8). Here's a few reasons why:

1. Nicer to read diffs
2. Easier code rearranging
3. You can programmatically generate code without extra logic for the last item

![Nicer diff of objet with trailing comma in iTerm](/photos/2016-09-28-1.jpg)

![Nicer diff of objet with trailing comma in Tower 2](/photos/2016-09-28-2.jpg)

## Babel to use, ESLint to check

Babel is like a time capsule that allows us to use the syntax of the future today. [Babel-preset-es2017](https://babeljs.io/docs/plugins/preset-es2017/) is something worth including in your `.babelrc` file. As an another confirmed feature that is coming with ES2017 — async functions support comes with this preset as well.

```bash
# install the cli and this preset
npm install --save-dev babel-cli babel-preset-es2017

# make a .babelrc (config file) with the preset
echo '{ "presets": ["es2017"] }' > .babelrc
```

ESLint is my gramma checker of choice. The [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle) allows you to enforce a dangling comma in object and array literals. It doesn't work with function declarations and invocations yet, but with the recently added [support for ES2017](http://eslint.org/blog/2016/09/eslint-v3.6.0-released) it is just a matter of time. Have a look at the example of this `.eslint.js` config file that enables this rule.

```js
module.exports = {
  'env': {
    'browser': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    "ecmaVersion": 2017,
    'sourceType': 'module',
  },
  'rules':
    'comma-dangle': [
      2,
      'always-multiline',
    ],
  },
};
```

## Dangle conclusion

A trailing comma is one of those things that definitely won't make you a better JavaScript developer. However, it is cool to see the progress of a language after the adoption of a yearly release plan. The spec for 2017 is still shaping up and you can follow the stage of all proposals on the [TC39 repository](https://github.com/tc39/proposals). Personally I'm still digesting the 2015 update. Stay tuned and wait for more articles about upcoming front-end goodies. Until next time pals :*
