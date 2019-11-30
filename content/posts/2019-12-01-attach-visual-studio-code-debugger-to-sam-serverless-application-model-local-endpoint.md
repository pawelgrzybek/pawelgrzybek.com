---
title: "Attach Visual Studio Code debugger to SAM (Serverless Application Model) local endpoint"
description: "Debugger is something that I cannot live without. Setting it up for my current SAM framework project written entirely in TypeScript took me a while but I finally got it right."
photo: 2019-12-01.jpg
draft: true
---

Hi! I am not going to go through basics of debugging or AWS SAM framework. At this point you are most likely familiar with those — otherwise you wound't land on this page. I am going to share with you how to attach [Visual Studio Code](https://code.visualstudio.com) debugger to local endpoint served by [AWS SAM (Serverless Application Model)](https://aws.amazon.com/serverless/sam/). Lets start with a simple server-less example app.

```
.
├── src
│   └── index.js
└── template.yaml
```

```yaml
# template.yaml

AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31

Resources:
  RandomNumber:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/
      Handler: index.handler
      Runtime: nodejs10.x
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /api
            Method: get
```

```js
const getRandomNumber = () => Math.ceil(Math.random() * 10);

module.exports.handler = async () => ({
  statusCode: 200,
  body: {
    randomNumber: getRandomNumber()
  }
});
```

And to spin up a local endpoint using SAM CLI we have to…

```
sam local start-api
```

As you can see we built this sophisticated server-less program that each time when we hit `http://127.0.0.1:3000/api` with a `GET` request gives us a random number between 1 and 10. Sweet! Should do the job as an example for this post. 

![Random number generator built using AWS SAM framework](/photos/2019-12-01-1.jpg)

## Attach Visual Studio Code debugger to SAM local endpoint

Debugger is my favorite way of stepping through the logic of codebase. Some time ago I used mainly the one built into Google Chrome developer tools but nowadays I rarely use anything else then Visual Studio Code. Luckily, [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-reference.html#serverless-sam-cli) allows us to [invoke out local API in debug mode](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-invoke.html).

```
sam local start-api -d 5858
```

Since now on, every time when we execute a request to our endpoint program will pause to let us hook into it's internals. To do so using [Visual Studio Code](https://code.visualstudio.com) we need a bit of a config inside `.vscode/launch.json` file — I got you covered!

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to SAM CLI",
      "address": "localhost",
      "port": 5858,
      "localRoot": "${workspaceRoot}/src",
      "remoteRoot": "/var/task",
      "protocol": "inspector",
      "stopOnEntry": false
    }
  ]
}
```

Now, as long as your API is running in debug mode you can attach your IDE to your program by hitting play button on debugger tab or by pressing <kbd>F5</kbd>. Voila!

![Attach Viusal Studio Code debugger to JavaScript file](/photos/2019-12-01-2.jpg)

## Debug TypeScript codebase

Nowadays, I very rarely write JavaScript that doesn't go through any additional transpilations before hitting a production. TypeScript is my preferred way of writing Javascript code nowadays and desipite the fact that the debugging setup is a tiny bit more complicated is possible and works like a charm. Lets recreate out simple random number generator using TypeScript.

```
.
├── dist
│   ├── index.js
│   └── index.js.map
├── src
│   └── index.ts
├── template.yaml
└── yarn.lock
```

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31

Resources:
  RandomNumber:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: dist/
      Handler: index.handler
      Runtime: nodejs10.x
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /api
            Method: get

```

```ts
const getBody = (message: string) => JSON.stringify({ message });

interface IEvent {
  body: string;
}

module.exports.handler = async (event: IEvent) => {
  const { message } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: getBody(message)
  };
};
```

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to SAM CLI",
      "address": "localhost",
      "port": 5858,
      "localRoot": "${workspaceRoot}/dist",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "remoteRoot": "/var/task",
      "protocol": "inspector",
      "stopOnEntry": false
    }
  ]
}
```

As you can see, the logic is written in TypeScript now. Transpiled version of our program landed in `dist` directory and this change has been reflected in `CodeUri` value inside template file. Pay attention to `index.js.map` that lives directly next to compiled version of a program — otherwise our debugger won't be able to map compiled code to the one inside `src` directory. Changes in fines tree are reflected in debugger config file that has been decorated with `outFiles` property that redirects debugger to the location fo transpiled files.

![Attach Viusal Studio Code debugger to TypeScript file](/photos/2019-12-01-3.jpg)

We did it! The same patterns can be resued for tons of other  frameworks, build tools and compilers. Hopefully this quick article helped you out. Bye :-*
