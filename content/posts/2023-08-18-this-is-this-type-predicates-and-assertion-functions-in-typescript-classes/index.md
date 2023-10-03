---
title: "This is this — type predicates and assertion functions in TypeScript classes"
summary: "Type narrowing in TypeScript allows the compiler to infer more specific types based on certain conditions. Only recently, I realized that they can also be used in TypeScript classes, and the syntax is quite funky."
---

Type narrowing in TypeScript allows the compiler to infer more specific types based on certain conditions. The `typeof`, `in` and `instanceof` operators are commonly used JavaScript constructs to narrow down the type of a variable or expression. Some methods are specific to TypeScript — [type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) and [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) are some of them. Let's take a look at two examples.


```ts {hl_lines=["4-6"]}
let username: string | undefined;

// type predicate example
function isDefined(username: string | undefined): username is string {
  return username !== undefined;
}

// if user is defined, we will print it in uppercase
// otherwise we will throw an error
if (isDefined(username)) {
  // at this point, TypeScript knows that username is defined
  console.log(username.toUpperCase());
} else {
  throw new Error("Uuups. Dude is undefined.");
}
```

```ts {hl_lines=["4-6"]}
let username: string | undefined;

// assertion functions example
function isDefined(username: string | undefined): asserts username is string {
  if(username === undefined) {
    throw new Error("Uuups. Dude is undefined.");
  }
}

// if user is defined, we will print it in uppercase
// otherwise we will throw an error
isDefined(username)
// at this point, TypeScript knows that username is defined
console.log(username.toUpperCase());
```

Pretty cool, right? Perhaps you have used these concepts before. Only recently, I realized that they can be used in TypeScript classes as well, and the syntax is pretty funky — `this is this` 🤯

```ts {hl_lines=["6-8"]}
class Product {
  constructor(public name: string, public price?: number) {
    this.name = name;
  }

  hasPrice(): this is this & { price: number } {
    return this.price !== undefined;
  }
}
```

```ts {hl_lines=["6-10"]}
class Product {
  constructor(public name: string, public price?: number) {
    this.name = name;
  }

  hasPrice(): asserts this is this & { price: number } {
    if (!this.price) {
      throw new Error("No price");
    }
  }
}
```

That's it for today. I hope you enjoyed it! 👋
