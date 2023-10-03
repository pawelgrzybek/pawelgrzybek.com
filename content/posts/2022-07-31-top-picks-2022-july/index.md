---
title: "Top picks — 2022 July"
summary: "Working with the file system on Node.js, come cool macOS CLI, some food for thoughs about the software lifetime, using Rust in Deno, some serious competition to Electron is coming, come aspect ratio tricks, HTML  outline drama aand more…"
---

## [Working with the file system on Node.js](https://2ality.com/2022/06/nodejs-file-system.html)

This `fs` module guide by [Dr. Axel Rauschmayer](https://twitter.com/rauschma) is everything you need to grasp the basics of working with files system in Node.js. Even though I felt I was already familiar with it, I still learned much from this resource. I will surely use this article as a reference in the future.

## [m-cli](https://github.com/rgcr/m-cli)

This repository is the “swiss army knife for macOS” under the one homebrew package. I spent hours reading the source code for this CLI tool. If you are a fan of making some macOS changes using Terminal, you will appreciate the fact that this is just a wrapper on top of simple shell or Apple Script commands. Very nice project.

## [Software Over Time](https://blog.jim-nielsen.com/2022/software-over-time/)

Food for thoughts. I really like to keep in mind what Jim said every time I add additional complexity or extra abstraction to the codebase that I collaborate on with others.

> Responding to change in year one of the business as quickly as in year ten of the business would be a phenomenal feat. All companies accumulate complexity over time, which is a weight you drag with you.

## [wasmbuild - Using Rust in Deno and Web Apps](https://deno.com/blog/wasmbuild)

Deno and Rust are probably two technologies that recently excite me the most in software development. ["Deno, a breath of fresh air for the server-side JavaScript"](/deno-a-breath-of-fresh-air-for-the-server-side-javascript/) sums up nicely what I think about this runtime. Rust, from the flipside, is something that I learn in my spare time, and it is probably the second time in my life when I am so excited about a piece of tech (the last time was when I learned how to use `addEventListener` on DOM elements). These two technologies are becoming good friends now. This article explains how simple it is to port a Rust function and import it into a JavaScript program. Exciting times.

## [Tauri 1.0 Release](https://tauri.app/blog/tauri_1_0/)

The biggest competitor to Electron just hit a stable release of 1.0. Written in Rust and operatable using JavaScript API opens vast opportunities for Frontend and Node.js developers to dip their toes into the world of native apps. The community feedback is really positive.

## [Avoiding <img> layout shifts: aspect-ratio vs width & height attributes](https://jakearchibald.com/2022/img-aspect-ratio/)

An excellent comparison of two popular techniques to avoid layout shifts. Also, by reading this article, I learned two really great things from Jake — two parameters on `aspect-ratio` and how powerful the `attr()` functions ar

## [Level Up Your Headings Game](https://matthiasott.com/notes/level-up-your-headings-game)

This article by Matt is a reminder of such a simple thing as an HTML outline. It is so bad that so many people still don’t understand that. Great write-up, especially the last section with a list of beneficial tools to level up your headings game.

## [Custom ESM loaders: Who, what, when, where, why, how](https://dev.to/jakobjingleheimer/custom-esm-loaders-who-what-when-where-why-how-4i1o)

Node.js 18.6 comes with a very powerful feature — custom ESM loaders. This article explains the concept and presents a few use cases. This feature is going to change the way how we work with Node.js a lot!

## [Tauri with Daniel Thompson-Yvetot](https://rustacean-station.org/episode/daniel-thompson/)

Daniel Thompson-Yvetot from the Tauri core team is a guest in the latest Rustacean Station podcast, where he compares Electron to Tauri, which just a moment ago hit a stable version 1.0. This is an exciting piece of tech to build desktop apps and, soon also, mobile applications (iOS and Android).

## [Why the HTML Outlining Algorithm was removed from the spec – the truth will shock you!](https://brucelawson.co.uk/2022/why-the-html-outlining-algorithm-was-removed-from-the-spec-the-truth-will-shock-you/)

Recently [the HTML outline algorithm was replaced with the one based on heading levels](https://github.com/whatwg/html/pull/7829). Even though this is a change in a part of a spec defined years ago, there was a good reason to change it. Bruce explains really well why that happened and provides a bit more context.
