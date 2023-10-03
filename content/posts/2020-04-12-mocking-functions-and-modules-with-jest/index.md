---
title: "Mocking functions and modules with Jest"
summary: "To write deterministic, repeatable unit tests, we need to control the inputs, outputs and invocations of mock objects. The Jest testing framework comes with great mocking capabilities. Let's have a look at them all."
---

A JavaScript program can have several dependencies, internal and/or external, most likely represented by the list of imports on the very top of your script. To write deterministic, repeatable unit tests, we need to control the inputs, outputs and invocations of those dependencies. These objects that simulate the real objects are mocks. Let's have a look at [Wikipedia definition of Mock object](https://en.wikipedia.org/wiki/Mock_object).

> Mock objects are simulated objects that mimic the behavior of real objects in controlled ways, most often as part of a software testing initiative.

There is plenty of JavaScript mocking libraries out there. Today I am going to review a few methods of creating functions and modules mock using [my favourite testing framework, Jest](https://jestjs.io). 

## To mock or not to mock?

Mocking all dependencies feels like a perfect solution. Who doesn't like to have total control? Unfortunately it may cause many false positives, because we end up testing a particular scenario implemented in a particular way. It is not a reliable test of a produced result.

On the other hand, why should we use mocks at all? Won't we get the most accurate results by testing software as it is implemented? Yes — but this is out of scope of a unit test. Unit test should be isolated, narrow in scope and quick to execute.

["Please don't mock me" by Justin Searls on YouTube](https://youtu.be/Af4M8GMoxi4) is a fantastic talk about things that should be mocked and where mocking should be avoided. ["Mock Objects: Shortcomings and Use Cases" by Alex Ruiz](https://www.oracle.com/technical-resources/articles/enterprise-architecture/mock-shortcomings.html) is another resource that I found very helpful. If you have to mock too much then this may indicate a high degree of coupling in your application. ["Mocking is a Code Smell" by Eric Elliott](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a) is a very helpful article that can help you to reduce tight coupling and a requirement of widespread mocking.

>  Mocking is required when our supposed atomic units of composition are not really atomic, and our decomposition strategy has failed to decompose the larger problem into smaller, independent problems.

These are my typical candidates for mocks:

- mock API calls
- mock databases queries
- mock conditions difficult to generate in a test environment

![Picture of website with helpful resources to understand mocks](2020-04-12-1.jpg)

## Jest mocks

The Jest testing framework comes with great mocking methods built-in for functions as well as modules. Let's have a look at them all.

- [Function mock using `jest.fn()`](#function-mock-using-jestfn)
- [Function mock using `jest.spyOn()`](#function-mock-using-jestfn)
- [Module mock using `jest.mock()`](#module-mock-using-jestmock)

### Function mock using jest.fn()

The simplest and most common way of creating a mock is `jest.fn()` method. If no implementation is provided, it will return the `undefined` value. There is plenty of helpful [methods on returned Jest mock](https://jestjs.io/docs/en/mock-function-api#methods) to control its input, output and implementation. Let's have a look at a few examples.

```js
it("returns undefined and has been called correct number of times", () => {
  const mock = jest.fn();

  const result = mock();

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith();
});

it("has been called with correct arguments and returns a correct value", () => {
  const mock = jest
    .fn()
    .mockReturnValueOnce("first return")
    .mockReturnValueOnce("second return");

  const resultFirst = mock("first call");
  const resultSecond = mock("second call");

  expect(resultFirst).toBe("first return");
  expect(resultSecond).toBe("second return");
  expect(mock).toHaveBeenCalledTimes(2);
  expect(mock).toHaveBeenNthCalledWith(1, "first call");
  expect(mock).toHaveBeenNthCalledWith(2, "second call");
});
```



### Function mock using jest.spyOn()

Another method of creating a function mock is a `jest.spyOn()` method. Same like `jest.fn()` it creates a controlled mock. The key difference is the fact that by default it calls the original implementation. [It stores in memory the original implementation](https://github.com/facebook/jest/blob/e9aa321e0587d0990bd2b5ca5065e84a1aecb2fa/packages/jest-mock/src/index.js#L685) so in case it has been redefined, `jest.spyOn()` allows us to restore the initial implementation using `mockRestore()` method. This is not something that we can do using `jest.fn()`. Example:

```js
// helpers.js
module.exports = {
  add: (a, b) => a + b,
};
```

```js
const helpers = require("./helpers");

it("returns correct result", () => {
  const addMock = jest.spyOn(helpers, "add");

  const result = addMock(1, 2);

  // look, in contrast to jest.fn() that returns undefined by default
  // jest.spyOn() calls original implementation
  expect(result).toBe(3);
});

it("returns mocked and original result", () => {
  const addMock = jest.spyOn(helpers, "add");
  addMock.mockImplementation(() => 4);

  // redefined implementation
  expect(helpers.add()).toBe(4);

  addMock.mockRestore();

  // original implementation
  expect(helpers.add(1, 2)).toBe(3);
});
```

I'm sorry for the terrible example above, this is because in real life you have no valid reasons to mock pure functions like `add()`. This is purely for illustrative purpose.

### Module mock using jest.mock()

To entirely mock a module we can do something like this…

```js
// helpers.js
module.exports = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
};
```

```js
const helpers = require("./helpers");

it("mocks entire module", () => {
  helpers.add = jest.fn();
  helpers.sub = jest.fn();

  expect(helpers.add.mock).toBeTruthy();
  expect(helpers.sub.mock).toBeTruthy();
});
```

It works, but what if a module exports tens or hundreds of methods? Manually reassigning all of them would be cumbersome. Jest comes with a fantastic feature called [`automock`](https://jestjs.io/docs/en/configuration#automock-boolean) that you can enable globally or inside individual test files using `jest.mock()` method.

```js
const helpers = require("./helpers");

jest.mock("./helpers");

it("mocks entire module", () => {
  expect(helpers.add.mock).toBeTruthy();
  expect(helpers.sub.mock).toBeTruthy();
});
```

Much nicer, isn't it? Internally Jest inspects the module and creates a mock that conforms to original's exports. Pretty neat!

## Hot tip — name your mock

Look at this test and its result.

```js
it("calls a function", () => {
  const mock = jest.fn();

  expect(mock).toHaveBeenCalledTimes(1);
});
```

```
expect(jest.fn()).toHaveBeenCalledTimes(expected)

    Expected number of calls: 1
    Received number of calls: 0
```

![Picture of simple jest usage of mock without descriptive name](2020-04-12-2.jpg)

This is OK if we have one test in a file, but it is hard to guess what `jest.fn()` is in a hundred lines long file. There is a simple solution — give your mock a descriptive name using [`mockName()`](https://jestjs.io/docs/en/mock-function-api#mockfnmocknamevalue) method. Look!

```js
it("calls a function", () => {
  const mock = jest.fn().mockName("my dope mock");

  expect(mock).toHaveBeenCalledTimes(1);
});
```

```
expect(my dope mock).toHaveBeenCalledTimes(expected)

    Expected number of calls: 1
    Received number of calls: 0
```

![Picture of simple jest usage of mock with descriptive name](2020-04-12-3.jpg)

Hopefully you found this article helpful and you learned a thing or two. Until next time, stay curious!
