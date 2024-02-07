---
title: "Infer type of a function argument as const in TypeScript"
summary: "TypeScript infers literal types from function arguments of primitive types and creates more general types for complex data structures. There may be a situation when you need a stricter type of inference for reference data types."
---

TypeScript infers literal types from function arguments of primitive types and creates more general types for inner members of complex data structures. I can illustrate that by creating a function that returns a value of the same type as the passed argument.

```ts
function inferReturnTypeFromArgument<T>(arg: T) {
  return arg;
}

// primitive types
const exampleNumber = inferReturnTypeFromArgument(1);
const exampleString = inferReturnTypeFromArgument("hello");
// exampleNumber type: 1
// exampleString type: "hello"

// reference types
const exampleObject = inferReturnTypeFromArgument({ a: "hello" });
const exampleArray = inferReturnTypeFromArgument(["hello", "bye"]);
// exampleObject type: { a: string }
// exampleArray type: string[]
```

There may be a situation when you need a stricter type of inference for reference data types. In this case, you can add `as const` to function argument, and this is what I have been doing for ages. Today, I learned about a neat feature added to TypeScript 5.0 that solves this problem nicer - [const Type Parameters](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#const-type-parameters). Have a look at the possible methods.

```ts {hl_lines=["6-7"]}
function inferReturnTypeFromArgument<T>(arg: T) {
  return arg;
}

// reference types
const exampleObject = inferReturnTypeFromArgument({ a: "hello" } as const);
const exampleArray = inferReturnTypeFromArgument(["hello", "bye"] as const);
// exampleObject type: { readonly a: "hello" }
// exampleArray type: readonly ["hello", "bye"]
```

```ts {hl_lines=[1]}
function inferReturnTypeFromArgument<const T>(arg: T) {
  return arg;
}

// reference types
const exampleObject = inferReturnTypeFromArgument({ a: "hello" });
const exampleArray = inferReturnTypeFromArgument(["hello", "bye"]);
// exampleObject type: { readonly a: "hello" }
// exampleArray type: readonly ["hello", "bye"]
```

## Helpful resources

- [Announcing TypeScript 5.0](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#const-type-parameters)
- [Const type parameters bring 'as const' to functions by Matt Pocock](https://www.totaltypescript.com/const-type-parameters)
- [8 TypeScript Tips To Expand Your Mind (and improve your code by Matt Pocock)](https://www.youtube.com/watch?v=QSIXYMIJkQg)
