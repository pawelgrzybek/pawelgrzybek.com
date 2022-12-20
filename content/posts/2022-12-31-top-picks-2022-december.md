---
title: "Top picks — 2022 December"
summary: "Make your Node.js server HTTP-compatible, granular control over npm access tokens just landed, Rust-based TypeScript compiler, GraphQL vs tRPC, "
photo: "2022-12-31.jpg"
---

## [How to use HTTP2 with Express.js and test it locally](https://typeofnan.dev/how-to-use-http2-with-express/)

This article is a quick tutorial by Nick Scialli on creating an HTTP2-compatible Express.js server. Well explained, complete solution. It will work fine with other popular Node.js frameworks like my beloved Fastify.

## [New npm features for secure publishing and safe consumption](https://github.blog/2022-12-06-new-npm-features-for-secure-publishing-and-safe-consumption/)

Granular control over the npm access tokens is a feature I have been waiting for ages. It will make our life much easier, especially for those working on more significant organizations or contributors to large open-source projects. Code explored directly integrated with the npm website is also a sick feature.

## [Rewriting TypeScript in Rust? You'd have to be...](https://www.totaltypescript.com/rewriting-typescript-in-rust)

You can guess how complex the TypeScript compiler is. Only the [type-checking part is crazy at 2.6MB](https://github.com/microsoft/TypeScript/blob/main/src/compiler/checker.ts) of raw TypeScript. Speaking of the language that the TypeScript compiler is written in — TypeScript is made using TypeScript. There is plenty of advantages, but performance is not one of them. Due to this project's complexity, no one ever tried to rewrite it until very recently, [DongYoon Kang opened sourced of this Rust-based compiler called `stc`](https://github.com/dudykr/stc). Matt Pocock, better known as "The Rodney Mullen of TypeScript", interviewed DongYoon about the project. I am looking forward to the future of this project.

## [Discussing tRPC & GraphQL with Theo Browne & Max Stoiber](https://youtu.be/2-407yO8nEU)

Fascinating debate about tRPC and GraphQL. I am keen to finally try tRPC as it is a much better fit for the type of projects I am working on. It looks like I am not the only one who thinks so.
