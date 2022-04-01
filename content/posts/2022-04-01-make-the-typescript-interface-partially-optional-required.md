---
title: "Make the TypeScript interface partially optional/required"
summary: "I came across a situation when I had to make a single key of the TypeScript interface optional. My friend and I came up with this solution, and we hope you will find it helpful."
photo: "2022-04-01.jpg"
---

I came across a situation when I had to make a single key of the TypeScript interface optional. Let’s say that I have a type that consists of two keys, `name` and `age`, and I want to make the `age` key optional. My real-life scenario was more convoluted, but I just want to show you what I learned. Look!

```ts
interface Dude {
  name: string;
  age: number;
}

// 👍 OK, name and age are defined
const pawel: Dude = {
  name: "Pawel Grzybek",
  age: 34,
};

// 👎 Uuups, age is missing
const dan: Dude = {
  name: "Dan Jordan",
};
```

TypeScript comes with two handy utility types. The [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) converts all keys to optional and [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) that makes all keys mandatory.

```ts {hl_lines=[6]}
interface Dude {
  name: string;
  age: number;
}

type DudeAllOptional = Partial<Dude>;

// 👍 OK, name and age are optional
const dan: DudeAllOptional = {};
```

```ts {hl_lines=[6]}
interface Dude {
  name: string;
  age?: number;
}

type DudeAllRequired = Required<Dude>;

// 👎 Uuups, age is missing
const dan: DudeAllRequired = {
  name: "Dan Jordan",
};
```

These two [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) are super helpful, but it didn't solve my problem to make only a subset of keys optional. So I took a moment to brainstorm this idea with my friend [Matias](https://twitter.com/amatiasq) (hi dude 👋), and we came up with this solution.

```ts {hl_lines=[6]}
interface Dude {
  name: string;
  age: number;
}

type DudeWithOptionalAge = Omit<Dude, "age"> & Partial<Pick<Dude, "age">>;

// 👍 name is defined, age is optional
const dan: DudeWithOptionalAge = {
  name: "Dan Jordan",
};
```

Problem solved, but we can do better. This type looks ridiculous, and without a good coffee, I don’t want to make any edits to it. But, thanks to generics, we can wrap it in a little utility type and reuse it all over the place.

```ts {hl_lines=[1, 8]}
type PartiallyOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface Dude {
  name: string;
  age: number;
}

type DudeWithOptionalAge = PartiallyOptional<Dude, "age">;

// 👍 name is defined, age is optional
const dan: DudeWithOptionalAge = {
  name: "Dan Jordan",
};
```

```ts {hl_lines=[1, 8]}
type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

interface Dude {
  name: string;
  age?: number;
}

type DudeWithRequiredAge = PartiallyRequired<Dude, "age">;

// 👎 Uuups, age is missing
const dan: DudeWithRequiredAge = {
  name: "Dan Jordan",
};
```

If you know a better solution to my problem then please drop a comment below. If you don't know a better way of doing it, I hope you learned a thing or two. Until next time, stay curious 🤩
