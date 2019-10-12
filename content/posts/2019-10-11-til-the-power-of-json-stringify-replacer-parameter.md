---
title: "TIL — The power of JSON.stringify replacer parameter"
description: "I had a challenging problem with JSON stringify that ignored my data in a place where I expected sets of values. Luckily I managed to solve it in a very elegant way."
photo: 2019-10-11.jpg
---

I had an interesting problem that melted my brain a bit. Let me share what I have learned and maybe save you a few moments when you come across a similar challenge. Lets have some fun with `JSON.stringify()`.

```js
const dude = {
  name: "Pawel",
  friends: ["Dan", "Pedro", "Mr Gregory"]
};
const dudeStringified = JSON.stringify(dude);

console.log(dudeStringified);
// {"name":"Pawel","friends":["Dan","Pedro","Mr Gregory"]}
```

No surprises here. Unfortunately, the architecture used on my project (AWS DynamoDB for curious beasts) forced me to deal with [ECMAScript `Set`s](https://www.ecma-international.org/ecma-262/6.0/#sec-set-objects) and things became more interesting. Just look at this.

```js
const dude = {
  name: "Pawel",
  friends: new Set(["Dan", "Pedro", "Mr Gregory"])
};
const dudeStringified = JSON.stringify(dude);

console.log(dudeStringified);
// {"name":"Pawel","friends":{}}
```

I assumed that a set of values is going to be converted to a good old plain array. As you may have guessed I was wrong — `Set`s, `WeakSet`s, `Map`s and `WeakMap`s are ignored or replaced by `null`. There is hope though — the optional second argument of [`JSON.stringify()`](https://www.ecma-international.org/ecma-262/6.0/#sec-json.stringify) allows us to escape all `Set`s and convert them to an array.

```js
const dude = {
  name: "Pawel",
  friends: new Set(["Dan", "Pedro", "Mr Gregory"])
};
const dudeStringified = JSON.stringify(dude, (key, value) =>
  value instanceof Set ? [...value] : value
);

console.log(dudeStringified);
// {"name":"Pawel","friends":["Dan","Pedro","Mr Gregory"]}
```

Problem solved 👏

## (TIL) Today I learned

`JSON.stringify()` takes a second optional argument that maybe a replacer function or an array of white-listed keys to be stringified. To summarize…

```js
// Second argument as a replacer function

const dude = {
  name: "Dan"
};
const dudeStringified = JSON.stringify(dude, (key, value) =>
  key === "name" ? "Pawel" : value
);

console.log(dudeStringified);
// {"name":"Pawel"}
```

```js
// Second argument as an array of white-listed keywords

const dude = {
  name: "Pawel",
  friends: new Set(["Dan", "Pedro", "Mr Gregory"])
};

const dudeStringified = JSON.stringify(dude, ["name"]);

console.log(dudeStringified);
// {"name":"Pawel"}
```

Until next time, stay curious 💋
