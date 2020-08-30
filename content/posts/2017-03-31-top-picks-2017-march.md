---
title: Top picks — 2017 March
description: Staying up to date in web industry is a difficult and time consuming task. I would like to share with you my top finds from the past month.
photo: top-picks.jpg
---

## Convert String to DOM Nodes

[https://davidwalsh.name/convert-html-stings-dom-nodes](https://davidwalsh.name/convert-html-stings-dom-nodes)

David Walsh explains how to convert strings to DOM nodes by using `parseFromString()` method from [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) instance. Nice, clean and library free solution.

```js
const myString = '<p>Hello, I am paragraph</p>';
const doc = new DOMParser().parseFromString(myString, 'text/html');
const div = doc.body.firstChild;

console.log(div);
// prints <p>Hello, I am paragraph</p> as a HTML
```

- - -

## JavaScript Deep Merge

[https://davidwalsh.name/javascript-deep-merge](https://davidwalsh.name/javascript-deep-merge)

David Walsh comes with another great tip this month. ECMAScript 2015 brought us `Object.assign()` that allows us to merge two object in elegant way. Newer feature that is coming to JavaScript spec is object spread operator that allows us to do it in even more readable way (`{...obj1, ...obj2}`). Both of these methods come with one downside — they generate shallow merge of top properties only. In majority of cases it is all that we need but if we need some more reliable way to construct deeply merged objects from multi-level collections [deepmerge](https://www.npmjs.com/package/deepmerge) is a great utility.

```js
// Shallow merge
Object.assign(obj1, obj2);
{...obj1, ...obj2};

// Deep merge
const merge = require('deepmerge');
merge(obj1, obj2);
```

- - -

## Grid

[https://tympanus.net/codrops/css_reference/grid/](https://tympanus.net/codrops/css_reference/grid/)


It was a great month for our browsers. Firefox in version 52, Google Chrome 57 and Safari 10.1 brought a bunch of great features. The most important one for me is the CSS Grids Module that I'm very excited about. If you don't have a clue what I am talking about have a look at my [basic introduction](https://pawelgrzybek.com/lets-get-into-the-basics-of-css-grid-layout-model/) that I published some time ago. It is definitely going to change the way how we create layouts. Internet is full of great resources to learn it and we are going to see more and more of it in a near future. This one by codrops is a really comprehensive tutorial with tons of illustrated examples. Another one worth to mention is [http://gridbyexample.com/](http://gridbyexample.com/) created by Rachel Andrew — can't think of a better person who could create a tutorial about this subject. You better catch up guys, you are going to see more and more of "gridy" CSS lines soon.

- - -

## The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)

[https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)

This 14 years old post is such a great introduction to characters encoding. Joel Spolsky, CEO and co-founder of [stackoverflow.com](http://stackoverflow.com/) does a really amazing job in explaining some historical background, languages differences and actions taken to find a solutions for encoding "problem". Must read!

- - -

## World Wide Web, Not Wealthy Western Web
[https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/)

[https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-2/](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-2/)

Probably my favorite article of a month. Bruce Lawson shares tons of insights about difference between internet usage around the glob, born of a world wide web on land of Asia and possible solutions to reach this audience.

> Horatio, as every schoolchild knows, is a designer from Berlin (or sometimes London or Silicon Valley) who has a top-of-the-line MacBook, the latest iPhone and an unlimited data plan over the fastest, most reliable network. But, as Hamlet points out to him, this is not the experience of most of the world’s web visitors.

> Please, do your part to ensure the health of the web that has provided you with so much, and pay it forward so the next people can benefit.

- - -

## Dr. Axel Rauschmayer - ECMAScript 2017 and beyond

[https://youtu.be/5Kw4XVSb4P4](https://youtu.be/5Kw4XVSb4P4)

Can't think of a better person that should introduce a set of new ECMAScript 2017 features than Dr. Axel Rauschmayer. Very well explained recently added parts of a spec proceeded by brief summary of spec and organizations behind it.

- - -

## React Conf 2017
[https://www.youtube.com/playlist?list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0](https://www.youtube.com/playlist?list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0)

This was a big month not only for browser vendors, but for React community as well. Official React conference is an event where a lot happens every year — this year wasn't an exception. I cannot decide what I am the most excited about. Simplifying process of boilerplating a mobil app using [create-react-native-app](https://youtu.be/9baaVjGdBqs) is very cool feature. Playing around and testing it with [Sketch](https://blog.expo.io/sketch-a-playground-for-react-native-16b2401f44a2) is even simpler to get started (don't get why they called it Sketch, this name seems to be reserved for product by Bohemian Coding for me). Of course [React VR](https://facebook.github.io/react-vr/) is a game changer in my eyes — this talk by [Michaela Lehr](https://youtu.be/CtVo3z_o9Rw) is a great primer to get started. [A Cartoon Intro to Fiber](https://youtu.be/ZCuYPiUIONs) by Link Clark well explains the functionality of future insides of React. [Using React for Anything but Website](https://youtu.be/-VC7o6wZ_a8) by Ken Wheeler is a funny showcase how can you use React for other things than web apps. A lot... Have a look at the youtube playlist and pick ones out of your interest.

 - - -

## Sketch 43 is coming to town with a new game. An open file format!
[https://medium.com/sketch-app-sources/sketch-43-is-coming-to-town-with-a-new-game-an-open-file-format-ae62e7e7c223](https://medium.com/sketch-app-sources/sketch-43-is-coming-to-town-with-a-new-game-an-open-file-format-ae62e7e7c223)

Sketch 43 is coming with big change — open file format (now I'm talking about this well-known Sketch, not the mobile React native parser by Expo). What does it mean? Essentially every single file is not a piece of binary data anymore. You can open it in your code editor and it is nothing else than JSON formatted collection of data about your project. It is just a matter of time to see Windows / Linux sketch file readers or even some template generators as a web apps. It opens a huge opportunities and I can't wait what kind of amazing ideas community will come up with.

- - -

## Slow the fuck down

[http://blog.officehours.io/slow-the-fuck-down/](http://blog.officehours.io/slow-the-fuck-down/)

The subject of burnout isn't a rare thing nowadays. We are aiming to get things done and it is very difficult to prioritize things. We are surrounded by many things that drive our attention and taking out attention span away from things that we should actually do at the time. [Eric Karjaluoto](https://twitter.com/karj) published a fantastic article that is full of amazing advices how to deal with this issues.

- - -

## Beyond The Browser: From Web Apps To Desktop Apps

[https://www.smashingmagazine.com/2017/03/beyond-browser-web-desktop-apps/](https://www.smashingmagazine.com/2017/03/beyond-browser-web-desktop-apps/)

An amazing introduction to building your first [nw.js](https://nwjs.io/) or [Electron](https://electron.atom.io/) desktop app using nothing more than you already know — HTML, CSS and JavaScript. Great explanation of these two popular frameworks with main differences between them clearly highlighted. It is not a 5 minutes read but definitely worth it — I built first working desktop app in less than an hour after reading this article.

- - -

## Angular 4.0.0 Now Available

[http://angularjs.blogspot.co.uk/2017/03/angular-400-now-available.html](http://angularjs.blogspot.co.uk/2017/03/angular-400-now-available.html)

We didn't wait too long for the next big number bump in Angular's version. Version 4.0.0 just landed with massive rendering engine optimization that can reduce total size of an app even by 60%. Animations package has been detached from the core to save even more on total projects size. I'm confused about versioning of this framework now a bit. Aren't you?

- - -

## The Road To Resilient Web Design

[https://www.smashingmagazine.com/2017/03/resilient-web-design/](https://www.smashingmagazine.com/2017/03/resilient-web-design/)

Jeremy Keith emphasizing the importance of learning from the past. From "Book of Kells" through Gutenberg’s invention, "A Dao of Web Design" by John Allsopp to nowadays where we constantly struggle to re-invite the ideas that the past  solved for us ages ago. It is just an excerpt from Jeremy's web book ["Resilient Web Design"](https://resilientwebdesign.com/).

- - -

## Functional setState is the future of React

[https://medium.freecodecamp.com/functional-setstate-is-the-future-of-react-374f30401b6b](https://medium.freecodecamp.com/functional-setstate-is-the-future-of-react-374f30401b6b)

Really great introduction to functional state management in React. As it turns out from few tweets published the other day by Dan Abramov, this is the future of working with React. Testing process if much easier with it and it is just one of many advantages a doing that in functional manner. Great explanation by [Justice Mba](https://twitter.com/Daajust).
