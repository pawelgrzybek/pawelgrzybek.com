---
title: "The difference between module.exports and exports in Node.js"
summary: "When we define Node.js module it is easy to think that we can use `module.exports` and `exports` interchangeably, but can we? Let's understand what is going on under the hood."
---

Let's quickly remind ourselves how to export a CommonJS module, import it and use it in a different file in Node.js runtime. Look at the example.

```js
// greet.js
module.exports.greet = (name) => `Hi ${name} 👋`;
// or
exports.greet = (name) => `Hi ${name} 👋`;
```

```js
// index.js
const { greet } = require("./greet");

console.log(greet("Dan")); // Hi Dan 👋
```

Looking at the `greet` module definition, we achieved the same result using `module.exports` and `exports`. It is easy to think that we can use them interchangeably, but can we? Let's look at the example where `module.exports` works fine but fail using `exports` shortcut.

```js
// greet.js
exports = (name) => `Hi ${name} 👋`;
```

```js
// index.js
const greet = require("./greet");

console.log(greet("Dan")); // TypeError: greet is not a function
```

If this is looking confusing to you, you are not alone. To understand what is going on, we need to grasp how module loader works.

When we call `require`, the new module is created. Its initial value is an empty object literal `{}`. Before a module's code is executed, Node.js will wrap it with [the module wrapper](https://nodejs.org/dist/latest-v15.x/docs/api/modules.html#modules_the_module_wrapper). By doing so, we can achieve module scoped variables that don't leak out to the `global` object, and we also get access to module-specific variables like `module` and `exports`. The [`exports` shortcut](https://nodejs.org/dist/latest-v15.x/docs/api/modules.html#modules_exports_shortcut) is assigned the value of `module.exports`. Finally, the content of the `module.exports` is returned — this is the public API returned to the caller. A very simplified implementation of the `require` function looks like this.

```js
function require(/* module */) {
  const module = { exports: {} };

  // the module wrapper
  ((module, exports) => {
    // module's code
  })(module, module.exports);

  return module.exports;
}
```

Looking at the snippet above, we can conclude a few things.

## Export object literal

When we attach new member to the exported object, it is safe to use both `module.exports` and `exports` shortcut. The public API returned to the caller will reference the same object in both cases.

```js
// greet.js
module.exports.greet = (name) => `Hi ${name} 👋`;
// or
exports.greet = (name) => `Hi ${name} 👋`;
```

## Export function or primitive value

When we want to export a function or a primitive value (string, number, etc.), we need to reassign `module.exports`. Reassigning `exports` variable is not going to work — it will lose bond to the `module.exports` that is returned to the caller.

```js
// greet.js
module.exports= (name) => `Hi ${name} 👋`;
```

Hopefully, this explanation helped you out. Until next time, stay curious 👊
