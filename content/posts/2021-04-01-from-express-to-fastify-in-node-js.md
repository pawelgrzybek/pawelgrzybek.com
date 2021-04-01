---
title: "From Express to Fastify in Node.js"
summary: "It has been almost two years since Express has been updated, and a lot of new great tools came around since then. I recently tried Fastify for the first time, and it took me no longer than a few minutes to decide to make a switch. Let me share with you a few main reasons."
photo: "2021-04-01.jpg"
---

I've been building Node.js applications for years, and until now, [Express](https://expressjs.com) was my preference for building a server. It has been almost two years since this framework has been updated, and a lot of new great tools have come around since then. I recently tried [Fastify](https://www.fastify.io) for the first time, and it took me no longer than a few minutes to decide to make the switch. Let me share with you a few of the main reasons.

## Absurd performance

Fastify, with performance almost as good as native `http.Server` outperforms other frameworks by a significant margin. Due to the call stack reduced to a necessary minimum, advanced [radix tree](https://en.wikipedia.org/wiki/Radix_tree) based routing algorithm called "find-my-way" and JSON serialization achieved by the [fast-json-stringify](https://github.com/fastify/fast-json-stringify), it can handle twice more load than Express.

At this point, you may expect some numbers to prove it, so I run two equivalent servers that output the same piece of JSON through load test using [Vegeta](https://github.com/tsenart/vegeta). As mentioned before, Fastify outperforms Express in every single factor.

```
vegeta attack -duration=10s -rate=0 -max-workers=1 | vegeta report
```

```
# Express
Requests      [total, rate, throughput]         65584, 6558.34, 6558.26
Duration      [total, attack, wait]             10s, 10s, 130.149µs
Latencies     [min, mean, 50, 90, 95, 99, max]  122.225µs, 151.803µs, 147.911µs, 160.265µs, 164.189µs, 194.74µs, 3.094ms
Success       [ratio]                           100.00%
Status Codes  [code:count]                      200:65584

# Fastify
Requests      [total, rate, throughput]         118489, 11848.94, 11848.84
Duration      [total, attack, wait]             10s, 10s, 80.298µs
Latencies     [min, mean, 50, 90, 95, 99, max]  63.858µs, 83.763µs, 81.544µs, 88.909µs, 92.922µs, 136.839µs, 8.852ms
Success       [ratio]                           100.00%
Status Codes  [code:count]                      200:118489
```

If you would like to get more in-depth about the performance of Fastify and how it compares to other popular frameworks, ["Reaching Ludicrous Speed with Fastify"](https://www.nearform.com/blog/reaching-ludicrous-speed-with-fastify/) is a good read for this. If you prefer a video version, have a look at the ["Take your http server to ludicrous speed" by Matteo Collina on YouTube](https://youtu.be/5z46jJZNe8k).

## Native support for async code

The `UnhandledPromiseRejectionWarning` caused by an error of the asynchronous part of your application can crash your application (since Node.js v15.0.0) or cause memory leaks in older runtime versions. ["Broken Promises" by James Snell on YouTube](https://youtu.be/XV-u_Ow47s0) proves the point that working with Promises is a frequent reason for performance degradations.

> When a customer comes to us with a complaint that their code is running slowly, our first question has become, "Are you using Promises?". When they predictably tell us yes, our response has become, "You're likely using them wrong".

Even though nothing stops you from using `asyc`/`await` in Express applications, it's easy to fail on handling every single edge case. Fastify gives you this safety net that prevents your server from crashing and your request from ending up in a limbo state that eventually times out. It will gracefully handle unhandled promise rejection and sends an error response back to the user.

## Logging, routes validation, and output serialization

Validation and logging are almost unavoidable parts of every HTTP server. They are popular to the point that Fastify maintainers decided to pull it to the framework. [Pino](https://github.com/pinojs/pino) is a low overhead Node.js logger that comes bundled with it. Based on the [Ajv](https://www.npmjs.com/package/ajv) schema validator and output serializer using [fast-json-stringify](https://www.npmjs.com/package/fast-json-stringify), they can increase throughput and improve security even though they're not mandatory. Have a look at this simple example of request validation and response serialization.

```js
const schemaBody = {
  type: "object",
  required: ["id"],
  properties: {
    id: { type: "number" },
    username: { type: "string" },
  },
};

const schemaResponse = {
  200: {
    type: "object",
    properties: {
      name: { type: "string" },
    },
  },
};

const schema = {
  body: schemaBody,
  response: schemaResponse,
};

app.post("/user", { schema }, handler);
```

## Actively maintained

The last stable version of Express was released almost two years ago (May 2019). Fastify, on the other hand, is under active development led by [Matteo Collina](https://twitter.com/matteocollina) and [Tomas Della Vedova](https://twitter.com/delvedor). [Its ecosystem](https://www.fastify.io/ecosystem/) is becoming stronger day by day with a growing number of core plugins and community add-ons. Being a regular attendee on Node.js-related conferences and meetups (unfortunately recently only online), I see that this framework rapidly gains considerable traction in the community.

## A lot more

These are the main reasons I decided to invest my time in Fastify, but there is more to it! TypeScript support out of the box, a great community behind it, ease of use, excellent documentation full of examples, and more! Hopefully, I managed to convince you to at least give it a try on your next Node.js project! For now, stay safe 👋
