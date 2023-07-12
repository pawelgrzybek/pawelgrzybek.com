---
title: "You might not need Jest — the Node.js native test runner is great"
summary: "I would like to share some of my findings from early explorations of the native Node.js test runner. Sometimes it is more than enough, and you might not need a bulky framework."
photo: "2023-06-12.jpg"
---

You might not need [Jest](https://jestjs.io). Just use [Vitest](https://vitest.dev) instead. Quick one today, bye!

It was just a joke! It is good advice, although today, I would like to share some of my findings from early explorations of [the native Node.js test runner](https://nodejs.org/api/test.html). As a disclaimer note, I will not play the feature comparison game between the Node.js module and your favourite framework, so please spare your comments about missing features. This post aims to show you that sometimes the native test runner is more than enough.

## Test runner module

Modern JavaScript runtimes, such as [Deno](https://deno.com/runtime) and [Bun](https://bun.sh), come equipped with testing capabilities, as do modern programming languages like [Go](https://golang.org/pkg/testing/) and [Rust](https://doc.rust-lang.org/book/ch11-01-writing-tests.html). Node.js is catching up, and many of highly-requested features landed in the last couple of releases. [Command-line arguments parser](/til-node-js-18-3-comes-with-command-line-arguments-parser/) and [watch mode](/til-node-v18-11-0-comes-with-a-watch-mode-so-you-might-not-need-nodemon/) are probably my favourite ones, but there is more. The experimental version of the test runner module [landed in version 18](https://nodejs.org/en/blog/announcements/v18-release-announce#test-runner-module-(experimental)) and [hit stable in version 20](https://nodejs.org/en/blog/announcements/v20-release-announce#stable-test-runner).

### Basic usage

The built-in `node:test` fails and returns process exit code set to `1` if the inner operation throws an error, rejects the promise or a callback is called with an error (first argument). It passes, and returns process code `0` otherwise. For the sake of simplicity, allow me to skip callback flavour examples as `async/await` functions and promise-based APIs are more common nowadays. I will use the built-in [`node:assert` module](https://nodejs.org/api/assert.html) to simplify assertions. Let’s have a look at a few examples.

```js
// index.test.js

import test from "node:test";
import { deepEqual } from "node:assert";

test("passing test 1", () => {
  deepEqual(1 + 1, 2);
});

test("passing test 2", async () => {
  await new Promise((resolve) => resolve());
});

test("failing test 1", () => {
  deepEqual(1 + 1, 3);
});

test("failing test 2", async () => {
  await new Promise((_, reject) => reject());
});
```

Executing `node --test` runs tests against all matching files according to the [test runner execution model](https://nodejs.org/api/test.html#test-runner-execution-model).

1. files explicitly passed as argument
1. files in the `test` directory
1. `test.{js,mjs,cjs}`
1. `test-*.{js,mjs,cjs}`
1. `*.test.{js,mjs,cjs}`, `*-test.{js,mjs,cjs}`, `*_test.{js,mjs,cjs}`

### Grouping, skipping, mocking, spying, hooks and more

At first, it was limited when testing facilities were added to Node.js. Fast-forward a few iterations, and we now have access to many more frequently used testing features, well-known from other frameworks like Jest or Mocha. Look at a more complex example that uses test [grouping](https://nodejs.org/api/test.html#describeit-syntax), [mocking](https://nodejs.org/api/test.html#mocking), hooks, and other goodies.

```js
import { describe, test, mock, before, after } from "node:test";
import { deepEqual } from "node:assert";
import os from "node:os";

const msg = (name) => `${name}, your computer has ${os.cpus().length} CPUs.`;

// grouping
describe("msg", () => {
  // hooks
  before(() => console.log("I run before a test suite."));
  after(() => console.log("I run after a test suite."));

  test("generates message", () => {
    deepEqual(msg("Pawel"), "Pawel, your computer has 8 CPUs.");
  });

  test("generates message (mocked data)", () => {
    // mocking/spying
    const osCpusMock = mock.method(os, "cpus", () => ({
      length: 666,
    }));

    deepEqual(msg("Dan"), "Dan, your computer has 666 CPUs.");
    deepEqual(osCpusMock.mock.callCount(), 1);
  });
});

// skipping tests
describe("failing", { skip: true }, () => {
  test("failing test 1", () => {
    deepEqual(1 + 1, 3);
  });

  test("failing test 2", async () => {
    await new Promise((_, reject) => reject());
  });
});
```

### Watch mode

After adding [the watch mode to Node.js CLI](/til-node-v18-11-0-comes-with-a-watch-mode-so-you-might-not-need-nodemon/) in version 18.11, [the watch mode for test runner](https://nodejs.org/api/test.html#watch-mode) was added slightly later in version 19.2 (it is still experimental when writing this article).
```
node --test --watch
```

### Custom code reporters

The default human-readable test reporter (`spec`) can be replaced with a compact (`dot`) format. If neither of these options suits your needs, custom reporters can be installed using npm. If that is not sufficient, [creating a custom reporter](https://nodejs.org/api/test.html#custom-reporters) that follows the [TAP (Test Anything Protocol) specification](https://testanything.org) is an option.

## Or…

Or use `jest`, it is fine!
