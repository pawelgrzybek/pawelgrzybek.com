---
title: "Continue, Step Over, Step Into and Step Out actions in Visual Studio Code debugger explained"
summary: "Printing the result of your program to the console is a common practice, but being familiar with a debugger opens a new world of possibilities. To use the debugger with confidence, you need to understand the basic actions. So here I come with a simple explanation for y’all."
photo: "2021-11-04.jpg"
---

Printing the result of your program to the console is a common practice, but being familiar with a debugger opens a new world of possibilities. A debugger is built into most of the popular IDEs and is also integrated with most web browsers. It allows us to run a program, step through it, log transition stages, explore scope members and preview the values at any flow stage.

To use the debugger with confidence, you need to understand the basic actions — continue, step over, step into and step out. However, I noticed that people click these buttons randomly without understanding what they're doing. So here I come with a simple explanation for y'all.

![Continue, Step Over, Step Into, Step Out, Restart and Stop actions in Visual Studio Code debugger](/photos/2021-11-04-1.png)

I will use [Visual Studio Code](https://code.visualstudio.com) to debug a simple JavaScript program, but you can transfer this knowledge to any other IDE and programming language. Visual Studio Code supports JavaScript debugging out of the box, but you can also debug other programming languages just by installing the [debugger extension](https://code.visualstudio.com/Docs/editor/debugging#_debugger-extensions).

```js
const jenny = {
  name: "Jennifer",
  surname: "Lopez",
  born: 1969,
};

const getFullName = ({ name, surname }) => `${name} ${surname}`;
const getAge = ({ born }) => new Date().getFullYear() - born;

const fullName = getFullName(jenny);
const age = getAge(jenny);

const result = `${fullName} is ${age} years old.`;

console.log(result);
```

## Continue

Debugger executes the program and "breaks" only on user-defined breakpoints (red circles).

![Continue actions in Visual Studio Code debugger](/photos/2021-11-04-2.gif)

## Step Over

Debugger executes the program statement by statement within the current execution context (scope).

![Step Over actions in Visual Studio Code debugger](/photos/2021-11-04-3.gif)

## Step Into

Debugger executes the program statement by statement. If the statement is a function call, the debugger will also execute the function body (a new execution context appears in the "call stack" tab). Otherwise, the debugger will continue to the following statement.

![Step Into actions in Visual Studio Code debugger](/photos/2021-11-04-4.gif)

## Step Out

If the debugger is within a nested scope, this action proceeds until the function returns (exits the current execution context). In case the debugger is within the global scope, this action executes the program to the end.

![Step Out actions in Visual Studio Code debugger](/photos/2021-11-04-5.gif)

## Restart, stop and good luck!

You can figure out what "Restart" and "Stop" actions do by yourself, right? I hope this article helped you out to become a better debugger. Until next time, stay curious and keep on sharing knowledge with other geeks 👊
