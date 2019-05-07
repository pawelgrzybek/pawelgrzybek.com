---
title: "TypeScript interface vs type"
description: ""
photo: 2019-04-12.jpg
draft: true
---

I'm not an expert in a field of TypeScript by any means but I work with it every single day for last few months and I am really enjoying this ride. Nonetheless, beneath its straight-forward set of features there are some very confusing ones. Should it be an `interface` or `type` alias? One of those from later category for newcomers.

```ts
interface DudeInterface {
  name: string;
  age: number;
}

const pawel: DudeInterface = {
  name: "Pawel",
  age: 31
};
```

```ts
type DudeType = {
  name: string,
  age: number
};

const pawel: DudeType = {
  name: "Pawel",
  age: 31
};
```

Both of them are correct but which one should we use? As always — it depends. Let me take a stab at explaining the difference.

## Misleading section of the official TypeScript Handbook

The ["Interfaces vs. Type Aliases"](http://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases) section of the official TypeScript Handbook explains the characteristic of both. Since October 2015 when this part of a documentation has been updated last time TypeScript got a major version bump and lots of things has changed. Unfortunately specification didn't catch up yet.

One day TypeScript Handbook will be updated and I will simply delete this section of an article. For now it details few not anymore relevant differences so stick with me to find a better clarification.

## Syntax

Very obvious one but needs to be mentioned. Expressing a type of an object is looking more JavaScripty when using `type` alias. Declaring an interface doesn't require `=` assignment.

https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md

https://github.com/prettier/prettier/issues/1944

https://github.com/storybooks/storybook/issues/6416

Despite the fact that you can separate properties of interface using comma `,` documentation suggest using semicolons `;` for that. Have a look at two code snippets using both techniques.

```ts
interface CarInterface {
  make: string;
  maxSpeed: number;
}
```

```ts
type CarType = {
  make: string,
  maxSpeed: number
};
```

## You can merge declaration of interfaces but not types

http://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html#adding-using-an-interface

## Primitives on types not on interfaces

The `type` alias declaration is in some way more powerful than alias because it allows you to use primitive types (`undefined`, `null`, `boolean`, `string` and `number`). The `interface` declaration suppose to be used with derivatives of objects. In theory every type declaration that you can express with `interface`, you can recreate with a `type` alias. 

## What do I use?
