---
title: "What's new in ECMAScript 2021"
summary: "This week's TC39 meeting concluded with a complete list of ECMAScript 2021 features. Similarly, how I do it every year, let's have a look at what's coming this year. I also prepared for you a few code examples."
photo: 2021-02-01.jpg
---

This week's TC39 meeting concluded with a complete list of ECMAScript 2021 features. Similarly, how I did it in [2016](/whats-new-in-ecmascript-2016-es7/), [2017](/whats-new-in-ecmascript-2017/), [2018](/whats-new-in-ecmascript-2018/), [2019](/whats-new-in-ecmascript-2019/) and [2020](/whats-new-in-ecmascript-2020/), let's have a look at what's coming this year. I also prepared for you a few code examples.

- [String.prototype.replaceAll by Peter Marshall, Jakob Gruber and Mathias Bynens](#stringprototypereplaceall-by-peter-marshall-jakob-gruber-and-mathias-bynens)
- [Promise.any by Mathias Bynens, Kevin Gibbons and Sergey Rubanov](#promiseany-by-mathias-bynens-kevin-gibbons-and-sergey-rubanov)
- [WeakRefs by Dean Tribble and Sathya Gunasekaran](#weakrefs-by-dean-tribble-and-sathya-gunasekaran)
- [Logical Assignment Operators by Justin Ridgewell](#logical-assignment-operators-by-justin-ridgewell)
- [Numeric separators by Sam Goto and Rick Waldron](#numeric-separators-by-sam-goto-and-rick-waldron)

## String.prototype.replaceAll by Peter Marshall, Jakob Gruber and Mathias Bynens

To replace all string occurrences, we need to use a combination of `String.prototype.replace` and global regexp. The [`String.prototype.replaceAll`](https://github.com/tc39/proposal-string-replaceall) by Peter Marshall, Jakob Gruber and Mathias Bynens simplify this. The popularity of ["How to replace all occurrences of a string in Javascript?" thread on StackOverflow](https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript) proves this feature's need in the language.

```js
const string = "it-is-just-a-test";

// instead of doing this
string.replace(/-/g, "_")
// "it_is_just_a_test"

// in ES2021 we can do
string.replaceAll("-", "_")
// "it_is_just_a_test"
```

## Promise.any by Mathias Bynens, Kevin Gibbons and Sergey Rubanov

The `Promise.any` joins the list of Promise combinators in this year's specification. ["Promise combinators explained"](https://pawelgrzybek.com/promise-combinators-explained/) that I published some time ago elaborates about the core differences between them. Use `Promise.any` when you want to handle the first promise that fulfils.

```js
const API = "https://api.github.com/users"

Promise.any([
  fetch(`${API}/pawelgrzybek`),
  fetch(`${API}/gabriel403`)
])
  .then(response => response.json())
  .then(({name}) => console.log(`Cool dude is: ${name}`))
  .catch(error => console.error(error));
```

## WeakRefs by Dean Tribble and Sathya Gunasekaran

[WeakRefs proposal by Dean Tribble and Sathya Gunasekaran](https://github.com/tc39/proposal-weakrefs) brought to the language two new contructors — `WeakRef` and `FinalizationRegistry`. These new features are much more complicated, lower-level language concepts.

### WeakRef

When we assign an object to a variable, it points to the piece of memory where the value of this object is stored (strong reference). In case the program no longer references this object, garbage collector destroys it and reclaims the memory. An instance of `WeakRef` creates a reference to a given object that returns it if it is still in the memory or `undefined` in case the target object has been garbage collected.

```js
const obj = { spec: "ES2021" };
const objWeakRef = new WeakRef(obj);

// do something cool

objWeakRef.deref();
// returns obj in case it is still in memory
// returns undefined in case it has been garbage collected
```

### FinalizationRegistry

An instance of `FinalizationRegistry` triggers a callback function after a registered target object has been garbage collected. 

```js
const obj = { spec: "ES2021" };
const registry = new FinalizationRegistry(value => {
    console.log(`The ${value} object has been garbage collected.`)
});
registry.register(obj, "ECMAScript 2021");

// perform some action that triggers garbae collector on obj
// The ECMAScript 2021 object has been garbage collected.
```

Be careful though — we should avoid using them as per [proposal's author recommendation](https://github.com/tc39/proposal-weakrefs#a-note-of-caution). Both of these features rely on garbage collector implementation that varies based on engine and engine's version.

## Logical Assignment Operators by Justin Ridgewell

As the name suggests, [Logical assignments proposal](https://github.com/tc39/proposal-logical-assignment) is the combination of logical operators (&&, || and ??) and assignment operator (=). Convenient add-on to the language! Have a look.

```js
// set a to b only when a is truthy
a &&= b;
```

```js
// set a to b only when a is falsy
a ||= b;
```

```js
// set a to b only when a is nullish
a ??= b;
```

## Numeric separators by Sam Goto and Rick Waldron

Large numbers are hard to read. Thanks to Rick Waldron, we can now separate the digits group using underscores (`_`, U+005F). This feature is well-known from other programming languages like Java, Python, Perl, Ruby, Rust, Julia, Ada, C#.

```js
const population = 37_653_260
```
