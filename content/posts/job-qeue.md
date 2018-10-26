---
title: "JavaScript loop"
description: ""
photo: js.jpg
draft: true
---

## Prerequisite

- single thread — single call stack - one thing at the time in a runtime
- exceptions are worklets
- one thing at the time
- non-blocking
- asynchronous

- concurrent? because there are more things in js than a runtime

- heap (where memory allocation happens) / sometimes called "variable envioment"
-

* Job queue / Micro-task queue (jobs in ES spec)

* Event loop - looks at the call stack, microtasks and callback queue. When the call stack is empty, takes a first thing in a queue and adds it to call stack.

* Call stack
* records where in the program we are
* push to the top of a stack, pop out of the stack

-

- Task queue / Callback queue

- in browser we haeve node apis, in node we have c++ apis

## Helpful resources

- [Philip Roberts: What the heck is the event loop anyway? | JSConf EU](https://youtu.be/8aGhZQkoFbQ)
-
