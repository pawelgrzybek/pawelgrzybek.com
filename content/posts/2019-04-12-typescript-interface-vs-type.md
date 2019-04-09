---
title: "TypeScript interface vs type"
description: ""
photo: 2019-04-12.jpg
draft: true
---

I'm not an expert in TypeScript land by any means but I work with it every single day for last few months and I am really enjoying this ride. Nonetheless, beneath its straight-forward set of features there are some very confusing ones. Should it be an `interface` or `type` alias? This one definitely belongs to the the later category.

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
  name: string;
  age: number;
};

const pawel: DudeType = {
  name: "Pawel",
  age: 31
};
```

Both of them are correct but which one should we use? As always — it depends. Let me take a stab at explaining the difference.

## Misleading section of the official TypeScript Handbook

["Interfaces vs. Type Aliases"](http://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases) section of the official TypeScript Handbook explains the characteristic of both. Since October 2015 when this part of a documentation has been updated last time TypeScript got a major version bump and lots of things has changed. The thing that hasn't changed since then is this part of a specification though.

One day someone smarter than me will update TypeScript Handbook and I will simply delete this section of an article. For now it details few not anymore relevant differences so stick with me for now please.

## Syntax

Elaborate…

## You can merge interfaces but not types

Elaborate…

## Primitives on types not on interfaces

Elaborate…

## What do I use?
