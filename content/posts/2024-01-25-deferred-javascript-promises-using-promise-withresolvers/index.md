---
title: "Deferred JavaScript promises using Promise.withResolvers"
summary: "You can use it to avoid nesting in the promise executor, although it shines when you need to pass resolve or reject to multiple callers."
---

If you have been building for the Web platform long enough, you may remember [`jQuery.Deferred()`](https://api.jquery.com/jQuery.Deferred/) or [`bluebird Promise.defer()`](http://bluebirdjs.com/docs/api/deferred-migration.html). Maybe you used [`p-defer` package](https://github.com/sindresorhus/p-defer) in the past or implemented something like the code below yourself?

```js
let resolve, reject;

const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

Math.random() > 0.5 ? resolve("ok") : reject("not ok");
```

No need for this dance anymore. The [`Promise.withResolvers()`](https://github.com/tc39/proposal-promise-with-resolvers) will be part of the upcoming ECMAScript 2024, as this proposal recently reached stage 4. The snippet below is an equivalent of the code above.

```js
const { promise, resolve, reject } = Promise.withResolvers();

Math.random() > 0.5 ? resolve("ok") : reject("not ok");
```

## Use cases for Promise.withResolvers

You can use it to avoid nesting in the promise executor, although it shines when you need to pass `resolve` or `reject` to multiple callers. Working with stream or event-based systems is an excellent opportunity to simplify your life with `Promise.withResolvers()`.

Look at this example of a `createEventsAggregator`. It returns an `add` method to push new event and an `abort` method that cancels aggregation. Most importantly, it returns `events` promise that resolves when it hits a `eventsCount` limit or rejects when `abort` is triggered.

```js
function createEventsAggregator(eventsCount) {
  const events = [];
  const { promise, resolve, reject } = Promise.withResolvers();

  return {
    add: (event) => {
      if (events.length < eventsCount) events.push(event);
      if (events.length === eventsCount) resolve(events);
    },
    abort: () => reject("Events aggregation aborted."),
    events: promise,
  };
}
```

```js
const eventsAggregator = createEventsAggregator(3);

eventsAggregator.events
  .then((events) => console.log("Resolved:", events))
  .catch((reason) => console.error("Rejected:", reason));

eventsAggregator.add("event-one");
eventsAggregator.add("event-two");
eventsAggregator.add("event-three");

// Resolved: [ "event-one", "event-two", "event-three" ]
```

```js
const eventsAggregator = createEventsAggregator(3);

eventsAggregator.events
  .then((events) => console.log("Resolved:", events))
  .catch((reason) => console.error("Rejected:", reason));

eventsAggregator.add("event-one");
eventsAggregator.abort();
eventsAggregator.add("event-two");
eventsAggregator.add("event-three");

// Rejected: Events aggregation aborted.
```

I hope this example helps you understand the value of deferred promises and how to take advantage of this pattern in your projects. Until next time, stay curious ✌️
