---
title: "TypeScript interface vs. type"
description: "Should it be an `interface` or a `type` alias? This is a question asked a lot by newcomers. Let me clarify the difference."
photo: 2019-05-29.jpg
draft: true
---

I'm not an expert in the field of TypeScript by any means but I have worked with it every single day for last few months and I am really enjoying the ride. Beneath its straight-forward set of features there are some confusing concepts as well. Should it be an `interface` or a `type` alias? This is a question asked a lot by newcomers.

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

Since [June 2016](https://github.com/microsoft/TypeScript-Handbook/commit/939650d392f389090b663bc5117234cfda5d4812) when this part of a documentation has been updated last time, TypeScript got a major version bump and lots of functionality has changed. Unfortunately none of these points is true anymore. It is a great time to update this obsolete part of a documentation. I will try to do a better job at explaining the difference. Hopefully TypeScript Handbook will be updated eventually, then I will get rid of this section of the article.

## Interfaces are restricted to object type

Interface declaration can only represent a shape of an object type. Type alias declaration can create a name for all kind of types including primitives (`undefined`, `null`, `boolean`, `string` and `number`), union, and intersection types. In a way, this difference makes the `type` more flexible. In theory every type declaration that you can express with an `interface`, you can recreate using a `type` alias. Lets have a look at the example that can be represented using `type` alias but is beyond the power of an `interface`.

```ts
type info = string | { name: string };
```

## You can merge interfaces but not types

Multiple declarations with the same name is valid only when used with `interface`. Doing so doesn't override previous one but produces merged result containing members from all declarations.

```ts
interface DudeInterface {
  name: string;
}

interface DudeInterface {
  age: number;
}

const pawel: DudeInterface = {
  name: "Pawel Grzybek",
  age: 31
};
```

Attempt of `type`s merging results in `Duplicate identifier` compiler error.


![Compiler error caused by merging type aliases attempt](/photos/2019-05-29-1.jpg)

## Type alias can use computed properties

The `in` keyword can be used to iterate over all the items in an union of keys. We can use this feature to programmatically generate properties inside a declarations. Have a look at the example using `type` alias.

```ts
type Keys = "firstname" | "surname"

type DudeType = {
  [key in Keys]: string
}

const test: DudeType = {
  firstname: "Pawel",
  surname: "Grzybek"
}
```

Unfortunately we cannot take an advantage of computed properties in an `interface` declaration.

A computed property name must be of type 'string', 'number', 'symbol', or 'any'.

![Compiler error caused by merging type aliases attempt](/photos/2019-05-29-2.jpg)


## Be consistent

Because in many situations you can use either of them, it doesn't mean you should use them interchangeably. As an active open source contributor I see some advantages of using `interface` for authoring a public API and I tend to use it more often. The `type` alias comes irreplaceable in some circumstances mentioned in this article. Most importantly — keep it consistent. Hopefully it helped you out.
