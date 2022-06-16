---
title: "TIL — Node.js 18.3 comes with command-line arguments parser"
summary: "Having such a common feature built into a runtime is so handy. Of course, it is neither as powerful as popular packages nor stable at this stage, but in many cases, it is a good enough solution."
photo: "2022-06-16.jpg"
---

Node.js 18.3 comes with a new [command-line arguments parser](https://nodejs.org/api/util.html#utilparseargsconfig). Having such a common feature built into a runtime is so handy. Of course, it is neither as powerful as popular packages like [yargs](https://github.com/yargs/yargs), [minimist](https://github.com/substack/minimist) or [argparse](https://github.com/nodeca/argparse), nor stable at this stage, but in many cases, it is a good enough solution. Have a look!

```shell
node greet.mjs --name Dan -c
# Dan is cool
```

```shell
node greet.mjs -n Pawel
# Pawel is not cool
```

```js
import { parseArgs } from "node:util";

const {
  values: { name, cool },
} = parseArgs({
  options: {
    name: {
      type: "string",
      short: "n",
    },
    cool: {
      type: "boolean",
      short: "c",
    },
  },
});

console.log(`${name} is ${cool ? "cool" : "not cool"}`);
```

It is nice, isn't it?! Until next time keep on building great stuff 😘
