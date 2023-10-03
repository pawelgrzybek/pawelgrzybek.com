---
title: "Three ways to activate an inspector in Node.js"
summary: "There are multiple methods to activate the Node.js inspector. I used to use two ways but recently learned about a third one, so I published this quick post to share it with you."
---

There are multiple methods to activate the Node.js inspector. I used to use two ways but recently learned about a third one, so I published this quick post to share it with you. Have a look!

```
node --inspect index.mjs
```

```
node --inspect-brk index.mjs
```

```
NODE_OPTIONS='--inspect' node index.mjs
```


Activating an inspector using a `NODE_OPTIONS` environment variable is handy for debugging a process that runs `node` indirectly.

```
NODE_OPTIONS='--inspect' gatsby serve
```

```
NODE_OPTIONS='--inspect' next dev
```

```
NODE_OPTIONS='--inspect' jest
```

If you are new to Node.js debugger, I published two articles in the past that you may find helpful — ["Basic Node.js debugging in Google Chrome"](/basic-nodejs-debugging-in-google-chrome/) and ["Continue, Step Over, Step Into and Step Out actions in Visual Studio Code debugger explained"](/continue-step-over-step-into-and-step-out-actions-in-visual-studio-code-debugger-explained/). I hope that helps!
