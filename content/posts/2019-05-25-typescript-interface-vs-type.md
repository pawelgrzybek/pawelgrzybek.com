---
title: "TypeScript interface vs type"
description: ""
photo: 2019-04-12.jpg
draft: true
---

I'm not an expert in a field of TypeScript by any means but I work with it every single day for last few months and I am really enjoying this ride. Beneath its straight-forward set of features there are some confusing concepts as well. Should it be an `interface` or a `type` alias? One of those asked a lot by newcomers.

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

Both methods are correct to describe a structure of an object but which one should we use? As always — it depends. Let me compare and contrast them.

## Misleading section of the official TypeScript Handbook

The ["Interfaces vs. Type Aliases"](http://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases) section of the official TypeScript Handbook explains the characteristics and differences between both of them.

1. Interfaces create a new name, type aliases don’t
2. Type aliases cannot be extended or implemented from

Since [June 2016](https://github.com/microsoft/TypeScript-Handbook/commit/939650d392f389090b663bc5117234cfda5d4812) when this part of a documentation has been updated last time, TypeScript got a major version bump and lots of functionality has changed. Unfortunately none of these points is true anymore. It is a great time to update this particular part of a documentation. I will try to do a better job at explaining the difference. Hopefully TypeScript Handbook will be updated eventually, then I will get rid of this section of an article.

## Interfaces are restricted to object type

Interface declaration can only represent a shape of an object type. Type alias declaration can create a name for all kind of types including primitives (`undefined`, `null`, `boolean`, `string` and `number`), union, and intersection types. In a way, this difference makes the `type` more flexible. In theory every type declaration that you can express with an `interface`, you can recreate using a `type` alias. Lets have a look at the example that can be represented using `type` alias but is beyond the power of an `interface`.

```ts
type info = string | { name: string };
```

## You can merge declaration of interfaces but not types

http://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html#adding-using-an-interface


## What do I use?
