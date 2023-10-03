---
title: Fluent interfaces explained
summary: Imagine a program that is written like a sentence instead of a series of separated command blocks — the technique of method chaining is the answer.
photo: 2017-03-17.jpg
---

It doesn't matter whether it is a professional developer writing a complicated Java application, a bored secretary playing Candy Crush Saga on Facebook or my father drinking a beer and reading football news on the Eurosport website — every single activity that is carried out on a computer ends up as a series of ones and zeros that tells the processor what to actually do. All programming languages are just a layer of abstraction on top of this principle. This article isn't about this concept but there is a publication that I can highly recommend to those curious — ["The Definitive Guide to How Computers Do Math"](https://www.amazon.com/Definitive-Guide-How-Computers-Math/dp/0471732788) by Clive Maxfield. The crucial outcome here is the fact that the computer doesn't care about the code readability — we developers do however so the code should be written in a way to help humans to read it. I'm almost sure that you heard before this popular sentence taken from from Martin Fowler's [book](https://www.amazon.co.uk/Refactoring-Improving-Design-Existing-Technology/dp/0201485672):

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

Knowing this, imagine a program that is written like a sentence instead of a series of commands in terminated lines. Method chaining, also known as a "fluent interface", is a design pattern that allows us to do just that. Today's example is written in JavaScript as that is the language I feel most comfortable with, but the same pattern can be used in many other programming languages too. As always, I'm here to explain the practice — the [wiki page](https://en.wikipedia.org/wiki/Fluent_interface) contains a great definition and tons of great examples if you need it.

> In software engineering, a fluent interface (as first coined by Eric Evans and Martin Fowler) is an implementation of an object oriented API that aims to provide more readable code.

## Create an element, add some content and color, append to another node...

One of the best fluent interfaces out there is the good old friend of all front-end developers — [jQuery](https://jquery.com/). The similarity of code written using it to sentences written in English is surely one of the reasons why it has gained such popularity.

We are going to write a small script that creates a DOM element, manipulates its content, changes colour and allows us to append it to another node. It looks something like this...

```js
class myElement {
  constructor(element) {
    this.element = document.createElement(element)
  }

  addText(text) {
    this.element.textContent = text;
  }

  addColor(color) {
    this.element.style.color = color;
  }

  addToElement(element) {
    element.appendChild(this.element);
  }
};
```

To use it...

```js
// create a new empty paragraph
const myParagraph = new myElement('p');
// add text to the element
myParagraph.addText('my super paragraph');
// add colour to the element
myParagraph.addColor('blue');
// add element to the body
myParagraph.addToElement(document.body);
```

There is nothing wrong about this code. The amount repetitive steps that we've taken isn't needed though. Wouldn't it be cool to just write:

```js
const myParagraph = new myElement('p')
  .addText('some test here')
  .addColor('blue')
  .addToElement(document.body);
```

It looks much better, cleaner and we're not repeating ourselves. Unfortunately it is not going to work because the methods don't return a value at the moment. Luckily the solution is very simple — each method execution should not only edit an element but should also return a reference to the `myElement` instance via the `this` keyword. Like so...

```js
class myElement {
  constructor(element) {
    this.element = document.createElement(element)
  }

  addText(text) {
    this.element.textContent = text;
    return this; // returning the instance allows method chaining
  }

  addColor(color) {
    this.element.style.color = color;
    return this; // returning the instance allows method chaining
  }

  addToElement(element) {
    element.appendChild(this.element);
    return this; // returning the instance allows method chaining
  }
};
```

<p><p data-height="584" data-theme-id="dark" data-slug-hash="KWyPQq" data-default-tab="js,result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="1" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/KWyPQq/">1</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script></p>

Fluent interface explained. Bye :-*
