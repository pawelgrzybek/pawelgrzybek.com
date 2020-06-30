---
title: "Understanding Node.js Sreams"
description: ""
photo: 2020-07-05.jpg
draft: true
---

The results of [Stack Overflow Developer Survey 2020](https://insights.stackoverflow.com/survey/2020#technology-other-frameworks-libraries-and-tools) second year in a row proved the popularity of [Node.js](https://nodejs.org/). It also hit the top of the list of [the most wanted technologies](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-other-frameworks-libraries-and-tools-wanted3) to learn by programmers who are not developing with it. It is an obvious choice for JavaScript enthusiasts new to server side land. Apart from it's all similarities to the language used on a browser, it comes with a few hard to understand concepts. Streams is one of them (at least it was for me).

This article is for people familiar with JavaScript language, digging into Node.js, who are keen to understand streams. I promise that this subject won't be that confusing at the end of this article.

1. [What is a stream?](#what-is-a-stream)
2. [Stream by example](#stream-by-example)
2. [Types of streams](#types-of-streams)

## What is a stream?

Streams in nature flow water from it's source to it's destinations, streams in programming are exactly the same but instead of water, they flow chunks of data. It is a sequential way of handling manageable size chunks of bytes. Instead of loading a large amount of data to the memory all at once, streams are much more memory and time efficient as they allow to process individual chunk as soon as it arrives. Streams are very useful (and sometimes the only way) to work with large amounts of data. Most importantly they enable  [code composability](https://en.wikipedia.org/wiki/Composability) well known from [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy).

![Node.js streams](/photos/2020-07-05-1.jpg)

Apart from the implementation in Node.js, concept of streams is present in many other programing languages like: C++, Java and .NET. It is used for things like reading from and writing to a file, network communications and any other information exchange.

You can achieve a lot without using streams at all, but thorough understanding of them will make you a much better developer. Often times you use them without even knowing that your favorite package heavily relies on them under the hood. Bunch of built-in modules in Node.js implement the streaming interface (`http`, `zlib`, `crypto` just to name a few).

## Stream by example

A classic example to illustrate the power of streams is a server sending a file to a client. To keep things a bit more spicy let's assume that the file is a 500MB pile of data.

```js
import server from "http";
import { promises as fs } from "fs";

const app = server.createServer();

app.on("request", async (req, res) => {
  const file = await fs.readFile("./file.txt");
  res.end(file);
});

app.listen(8000);
```

![Serve file using node.js and file loaded to memory](/photos/2020-07-05-2.jpg)

In theory — it works. The problem is that we had to load a file entirely to memory before we sent it to the client (I used `curl http://localhost:8000` to send a request). As a result this operation consumed a lot of memory (around 500MB + some internal Node.js operations) and it took much longer that it should. Let's rewrite it using streams.

```js
import server from "http";
import fs from "fs";

const app = server.createServer();

app.on("request", async (req, res) => {
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});

app.listen(8000);
```

![Serve file using node.js and streams](/photos/2020-07-05-2.jpg)

If you don't understand what is going on here, thats fine for now — explainer later. The point here is to illustrate that changing few lines of code made this program much more time and memory efficient (around 28MB). Hopefully this significant difference is enough for you to stick around and learn streams.

## Types of streams

There is four types of streams and we are going to get into the nitty fritty and explore some examples of all of them.


1. Readable
2. Writable
3. Duplex
4. Transform

### Readable (input stream)

Readable

### Writable (output stream)

Writable

### Duplex

Duplex

### Transform

Transform

