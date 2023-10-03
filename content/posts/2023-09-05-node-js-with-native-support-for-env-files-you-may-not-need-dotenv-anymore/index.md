---
title: "Node.js with native support for .env files — you may not need dotenv anymore"
summary: "From now on, you may not need dotenv anymore. Node v20.6.0 comes with native support for .env configuration files."
---

The [dotenv](https://github.com/motdotla/dotenv) package is the most popular way to load environment variables from a `.env` file in the Node.js ecosystem. From now on, you may not need it anymore. [Node v20.6.0](https://nodejs.org/en/blog/release/v20.6.0) comes with native support for `.env` configuration files.

A storage mechanism for key/value vars is handy, but we can also use it to configure the runtime via [`NODE_OPTIONS`](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html#node_optionsoptions). This method is a lot easier to manage than long scripts in the `package.json` file.

Here is a simple example of invoking a node script with [the new `--env-file`](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html#--env-fileconfig) flag.

```env
# config.env

NODE_OPTIONS='--title="Testing Node v20.6.0"'
USER_NAME='Paweł Grzybek'
```

```js
// index.js

console.log(process.title);
console.log(`Hi ${process.env.USER_NAME} 👋`);
```

```txt
node --env-file=config.env index.js

Testing Node v20.6.0
Hi Paweł Grzybek 👋
```
