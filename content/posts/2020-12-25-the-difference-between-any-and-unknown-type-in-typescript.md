---
title: "The difference between any and unknown type in TypeScript"
summary: "Both any and unknown are universal types in TypeScript that allow you to  assign whatever the heck you want to it. The difference is in accessing those values. Let me explain."
photo: 2020-12-25.jpg
---

Both `any` and `unknown` are universal types in TypeScript that allow you to  assign whatever the heck you want to it.

```ts
let exampleAny: any;
let exampleUnknown: unknown;

// I can assign anything to `any` type
exampleAny = {}
exampleAny = 123;

// I can also assign anything to `unknown` type
exampleUnknown = {}
exampleUnknown = 123;
```

So whats is the difference between them you may be asking? The difference is in accessing those values. Look!

```ts
let exampleAny: any;
let exampleUnknown: unknown;

// You can access Number.prototype method on any
// Without checking if the value is a number
console.log(exampleAny.toFixed());

// You can't access Number.prototype method on unknown
// Without checking if the value is a number
console.log(exampleUnknown.toFixed());
// ‼️ Error: Object is of type 'unknown'
```

Using `any` disables type-checking same as `@ts-ignore` does. The `unknown` is a type-safe counterpart of `any` type — before accessing the value, it requires type assertion or narrowing to a more specific type.

```ts
// Thats fine because before accesing Number.prototype method
// We can be assured that the type of value is a "number"
if (typeof exampleUnknown === "number") {
  console.log(exampleUnknown.toFixed());
}
```

## Rule of thumb for any and unknown type

Use `any` type only during the migration from JavaScript to TypeScript codebase, `unknown` otherwise. Karma will catch you if you assign an `any` type just because you cannot be bothered to define meaningful type!
