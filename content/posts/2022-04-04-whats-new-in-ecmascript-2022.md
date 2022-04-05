---
title: "What's new in ECMAScript 2022"
summary: "The ECMAScript 2022 Language Specification candidate is now available. Even though the final version will be approved in June, the list of new features coming to the language this year is defined."
photo: 2022-04-04.jpg
---

The [ECMAScript 2022 Language Specification](https://tc39.es/ecma262/2022/) candidate is now available. Even though the final version will be approved in June, the list of new features coming to the language this year is already defined. Similarly, how I did it in [2016](/whats-new-in-ecmascript-2016-es7/), [2017](/whats-new-in-ecmascript-2017/), [2018](/whats-new-in-ecmascript-2018/), [2019](/whats-new-in-ecmascript-2019/), [2020](/whats-new-in-ecmascript-2020/) and [2021](/whats-new-in-ecmascript-2021/), let's look at what’s coming to ECMAScript specification in 2022.

- [Class fields (public, static, private) and private class methods by Daniel Ehrenberg and Kevin Gibbons](#class-fields-public-static-private-and-private-class-methods-by-daniel-ehrenberg-and-kevin-gibbons)
- [RegExp Match Indices by Ron Buckton](#regexp-match-indices-by-ron-buckton)
- [Top-level await by Myles Borins, Yulia Startsev, Daniel Ehrenberg, Guy Bedford, Ms2ger and others](#top-level-await-by-myles-borins-yulia-startsev-daniel-ehrenberg-guy-bedford-ms2ger-and-others)
- [Ergonomic brand checks for Private Fields by Jordan Harband](#ergonomic-brand-checks-for-private-fields-by-jordan-harband)
- [Accessible Object.prototype.hasOwnProperty() by Tierney Cyren and Jamie Kyle](#accessible-objectprototypehasownproperty-by-tierney-cyren-and-jamie-kyle)
- [The .at() method on all the built-in indexables](#the-at-method-on-all-the-built-in-indexables)
- [Class static initialization blocks](#class-static-initialization-blocks)
- [Error Cause](#error-cause)

## Class fields (public, static, private) and private class methods by Daniel Ehrenberg and Kevin Gibbons

[This proposal](https://github.com/tc39/proposal-class-fields) adds long-awaited class fields (public, static, private) and private methods to the ECMAScript classes. This feature will simplify or sometimes eliminate the need for a `constructor` to create instance properties. In addition, static fields eradicate the need for static getters or external assignments to the instances. Finally, private fields and private methods allow us to create genuinely protected data slots that are accessible only in the body of a class.

```js
class MyClass {
  // no need for a constructor
  // constructor() {
  //   this.publicField = 1;
  // }
  publicField = 1;

  // no need for external assignment or a static getter
  // static get staticField() {
  //   return 2;
  // }
  static staticField = 2;

  #privateField = 3;

  #privateMethod() {
    return 4;
  }
}

const instance = new MyClass();

console.log(instance.publicField); // 1
console.log(MyClass.staticField); // 2
// console.log(instance.#privateField); // SyntaxError: Private field '#privateField' must be declared in an enclosing class
// console.log(instance.#privateMethod()); // SyntaxError: Private field '#privateMethod' must be declared in an enclosing class
```

## RegExp Match Indices by Ron Buckton

[This proposal](https://github.com/tc39/proposal-regexp-match-indices) gives us more information about captured groups start and end indices. Additional output about indices on RegEx object can be enabled using the `d` flag (the `i` flag is reserved for case folding, so we so ended up with `d` due to its presence in the word indices 🤷‍♂️).

```js
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/d;
//                                                            👆
const string = "2022-04-04";
const result = pattern.exec(string);

console.log(result.indices);
// [
//   [ 0, 10 ],
//   [ 0, 4 ],
//   [ 5, 7 ],
//   [ 8, 10 ],
//   groups: [Object: null prototype] {
//     year: [ 0, 4 ],
//     month: [ 5, 7 ],
//     day: [ 8, 10 ]
//   }
// ]
```

## Top-level await by Myles Borins, Yulia Startsev, Daniel Ehrenberg, Guy Bedford, Ms2ger and others

[This proposal](https://github.com/tc39/proposal-top-level-await) enables top-level `await` without wrapping it in an `async` function.

```js
// Quick reminder, you may not need node-fetch anymore
// node --experimental-fetch index.mjs

// Look ma, no async function 😱
await fetch("https://api.github.com/users/pawelgrzybek")
  .then((response) => response.json())
  .then((responseJson) => console.log(responseJson.blog));

// https://pawelgrzybek.com
```

## Ergonomic brand checks for Private Fields by Jordan Harband

With the introduction of private fields in ECMAScript classes, we need a simple solution to check the presence of a private field on an object. [This propoal](https://github.com/tc39/proposal-private-fields-in-in) does precisely that.

```js
class MyClass {
  #hello = "hi";

  static checkHi(object) {
    return #hello in object;
  }
}

console.log(MyClass.checkHi(new MyClass()));
// true
```

## Accessible Object.prototype.hasOwnProperty() by Tierney Cyren and Jamie Kyle

[This proposal](https://github.com/tc39/proposal-accessible-object-hasownproperty) adds an `Object.hasOwn(object, property)` method with the same behaviour as calling `hasOwnProperty.call(object, property)`. Calling `hasOwnProperty()` on an object is not 100% safe because you can't be assured that property has not been reassigned if you don't own the object. Calling `Object.hasOwn()` is much safer.

```js
const dude = {
  name: "Pawel",
  hasOwnProperty() {
    return false;
  },
};

// 👎 Uuuups, I can clearly see that the 'name' property is there
console.log(dude.hasOwnProperty("name"));
// false

// 👍 Thats safer
console.log(Object.hasOwn(dude, "name"));
// true
```

## The .at() method on all the built-in indexables

[This proposal](https://github.com/tc39/proposal-relative-indexing-method) allows us to do negative indexing on arrays, strings and typed arrays, similarly to how we can do it in other languages like Python. Currently, the <s>only</s> most popular method to access the last element of an `arr` is `arr[arr.length - 1]`. With this new proposal, we can do better.

```js
const fruits = ["pawel", "dan", "pedro"];

console.log(fruits.at(-1));
// pedro
```

## Class static initialization blocks

[This proposal](https://github.com/tc39/proposal-class-static-block) gives us an additional way to perform static initialization during class evaluation. It helps to evaluate statements during initialization and avoid declaring this logic outside of the class.

```js
// This is the old way, pre 2022

class MyClass {
  static runtime;
}

try {
  MyClass.runtime = `Node ${process.version.replace("v", "")}`;
} catch {
  MyClass.runtime = "It is probably Deno";
}

console.log(MyClass.runtime);
```

```js
// In ECMAScript 2022 we can do it like that

class MyClass {
  static runtime;

  static {
    try {
      MyClass.runtime = `Node ${process.version.replace("v", "")}`;
    } catch {
      MyClass.runtime = "It is probably Deno";
    }
  }
}

console.log(MyClass.runtime);
```

```
node index.js
Node 17.8.0
```

```
deno run index.js
It is probably Deno
```

## Error Cause

[This propoasal](https://github.com/tc39/proposal-error-cause) lets us define the reason of abnormality in the `cause` property in an `Error()` constructor. This can be helpful to diagnose unexpected exceptions especially when the exception occured inside a deeply nested method.

```js
async function fetchProfile() {
  // I made a mistake here in the API URL
  //                  👇👇👇👇
  const API = "https://api.api.github.com/users/pawelgrzybek";

  return await fetch(API)
    .then((r) => r.json())
    .catch(() => {
      throw new Error("Download raw resource failed", {
        cause: `Call to ${API}`, // 👈 👈 👈
      });
    });
}

try {
  await fetchProfile();
} catch (e) {
  console.log(e);
  // Error: Download raw resource failed
  console.log("Caused by", e.cause);
  // Caused by Call to https://api.api.github.com/users/pawelgrzybek
}
```
