---
title: "TypeScript interface vs type"
description: ""
photo: 2019-04-12.jpg
draft: true
---

I'm not an expert in TypeScript land by any means but I work with it every single day for last few months and I am really enjoying this ride. Nonetheless, a lot of its features is straight-forward some are very confusing. Should it be a `type` or `interface`? This one definitely belongs to the later category.

```ts
interface PersonInterface {
  name: string;
  age: number;
}

const pawel: PersonInterface = {
  name: "Pawel",
  age: 31
};
```

```ts
type PersonType = {
  name: string;
  age: number;
};

const pawel: PersonType = {
  name: "Pawel",
  age: 31
};
```

Both of them are correct but which one is better? It depends. The [difference between Interfaces vs. Type Aliases are defined in documentation](http://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases) but [it is very miss-leading](https://github.com/Microsoft/TypeScript/issues/28980) and should be updated. I will do my best highlight the divergence.

## Difference 1

Elaborate…

## Difference 2

Elaborate…
