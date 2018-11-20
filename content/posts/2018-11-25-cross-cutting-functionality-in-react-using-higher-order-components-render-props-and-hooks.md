---
title: "Cross-cutting functionality in React using Higher-Order Components, Render Props and Hooks"
description: "When working with moderns JavaScript frameworks we often have to share the same piece of functionality across multiple components. Let me explain to you few patterns that make is a breeze."
photo: 2018-11-25.jpg
draft: true
---

Working with modern JavaScript frameworks is all about reusable components that hold a markup, styling and a business logic — React being fantastic at it [gaining more popularity](https://2018.stateofjs.com/front-end-frameworks/react/) every year. Very often though, we have a situation where few components contain the same functionality and we need a way to abstract it out according to our [DRY (don't repeat yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) conduct that we were developing for years.

![Cross-cutting functionality in React — illustration by Zuzanna Rupinska](/photos/2018-11-25-1.jpg)

Practice is the best teacher so let's say that we have two components, `<Content />` and `<Sidebar />` and each of them fetches a random Chuck Norris joke from [chucknorris.io](https://api.chucknorris.io/) API. Like so…

```jsx
import React, { Component } from "react";

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      joke: "Loading…"
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(joke => this.setState({ joke: joke.value }))
      .catch(() => this.setState({ joke: "Error" }));
  }

  render() {
    return (
      <article>
        <h1>Content</h1>
        <p>{this.state.joke}</p>
      </article>
    );
  }
}
```

```jsx
import React, { Component } from "react";

export default class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      joke: "Loading…"
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(joke => this.setState({ joke: joke.value }))
      .catch(() => this.setState({ joke: "Error" }));
  }

  render() {
    return (
      <aside>
        <h2>Sidebar</h2>
        <p>{this.state.joke}</p>
      </aside>
    );
  }
}
```

<p>
<iframe src="https://codesandbox.io/embed/w66x1n5lpw?fontsize=16&hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</p>

Can you spot the logic duplication? Wouldn't be nicer to pass a joke as a prop and make a data fetch reusable across the whole project and maybe even drop it to another app one day? Historically Mixins system was used to reuse code between components but there is plenty of reasons why [Mixins are considered harmful](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html) and we shouldn't rely on this concept anymore. [Higher Order Components](https://reactjs.org/docs/higher-order-components.html) and [Render Props](https://reactjs.org/docs/render-props.html) aren't parts of React API per se but advanced patterns that allow us to reuse components logic. Announced on React Conf 2018 Hooks help to simplify reusability even further.

## Higher-Order Components

In mathematics and computer science world, [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) is the one that takes a function as an argument or returns a function as a result. To translate it to more React-like jargon it is a function that takes a **component as an argument** and **returns another component** (with some "extra powers"). It is very similar to a [Decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern) used extensively in software development. The naming convention adopted in a React ecosystem is to use `with` as a prefix for HOCs because it describes what the "extra power" of returned component is (ie. `withData`).

Theory aside and let's build a HOC `withJoke` that returns a component with extra `joke` prop that encapsulates logic duplicated in both of our components.

```jsx
const withJoke = WrappedComponent =>
  class extends React.Component {
    constructor() {
      super();

      this.state = {
        joke: "Loading…"
      };
    }

    componentDidMount() {
      fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(joke => this.setState({ joke: joke.value }))
        .catch(() => this.setState({ joke: "Error" }));
    }

    render() {
      return <WrappedComponent joke={this.state.joke} {...this.props} />;
    }
  };
```

The returned component has a new `joke` prop and receives all the props of it's source component via `...props`. By doing so we created a reusable provider of data fetched from API. Having that we can revisit out test application and remove a duplicated logic from `<Content />` and `<Sidebar />`, convert both of them to functional components and decorate them using `withJoke` higher order component.

```jsx
import React from "react";
import withJoke from "./withJoke";

const Content = ({ joke }) => (
  <article>
    <h1>Content</h1>
    <p>{joke}</p>
  </article>
);

export default withJoke(Content);
```

```jsx
import React from "react";
import withJoke from "./withJoke";

const Sidebar = ({ joke }) => (
  <aside>
    <h2>Sidebar</h2>
    <p>{joke}</p>
  </aside>
);

export default withJoke(Sidebar);
```

<p>
<iframe src="https://codesandbox.io/embed/m5ljlj8kvj?fontsize=16&hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</p>

### Pros of using HOC

HOCs provide a nice pattern to reuse a logic. Number of popular projects uses this pattern: [React Redux](https://www.npmjs.com/package/react-redux), [Relay](http://facebook.github.io/relay/) or [Radium](https://formidable.com/open-source/radium/) just to name a few. They are easy to compose, use and chain together. [Andrew Clark](https://twitter.com/acdlite) from React core team being a strong advocate of this composition created a popular utility library called [recompose](https://github.com/acdlite/recompose). The active maintenance of it has been discontinued because of the recently announced Hooks that solve majority of the issues that this library tried to help with (more on that later).

### Cons of using HOC

There is no rose without a thorn. Chained higher order components can lead to prop naming collisions — technically there is nothing incorrect about the implementation but unexpected results are painful to debug. When overused it is hard to guess where particular prop is coming from and going through nested tree in a console isn't pleasant at all. Some rare issues with using them inside a `render()`, class static methods and passing `ref`s are well detailed on React docs under the [Higher-Order Components — Caveats](https://reactjs.org/docs/higher-order-components.html#caveats) section.

[Michael Jackson](https://twitter.com/mjackson), creator of [React Router](https://github.com/ReactTraining/react-router) and tons of other popular open source projects pointed out a lot of issues with HOCs in his talk ["Never Write Another HoC"](https://youtu.be/BcVAq3YFiuc) presented at Phoenix ReactJS in September 2017. His solution leads me to another way of cross-cutting functionality in React.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I can do anything you&#39;re doing with your HOC using a regular component with a render prop. Come fight me.</p>&mdash; MICHAEL JACKSON (@mjackson) <a href="https://twitter.com/mjackson/status/885910701520207872?ref_src=twsrc%5Etfw">July 14, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Render Props

Render props is another technique of reusing logic in multiple components. Compared to HOCs it requires much less boiler code and data flow is much more transparent. The concept is simple — **build your component as you would normally do** and let the `render()` method **invoke a function with the extra logic** as a parameter. Our mission is to build a provider of a data fetched from [chucknorris.io](https://api.chucknorris.io/) API, so let's do it.

```jsx
import { Component } from "react";

export default class Joke extends Component {
  constructor() {
    super();

    this.state = {
      joke: "Loading…"
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(joke => this.setState({ joke: joke.value }))
      .catch(() => this.setState({ joke: "Error" }));
  }

  render() {
    return this.props.render(this.state.joke);
  }
}
```

As you can see, we are invoking a function stored in a `render` prop — this is a good indicator that the **value of a `render` prop should be a function**. The name `render` isn't a part of React API by all means — just a meaningful convention. This is the way to use it…

```jsx
const App = () => (
  <main>
    <Joke render={joke => <Content joke={joke} />} />
    <Joke render={joke => <Sidebar joke={joke} />} />
  </main>
);
```

<p>
<iframe src="https://codesandbox.io/embed/yw90n577zz?fontsize=16&hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</p>

Another possible implementation is to use `props.children()` as a function — this is exactly the same concept and more a subject of personal preference.

### Pros of using Render props

If you watched ["Never Write Another HoC"](https://youtu.be/BcVAq3YFiuc) by Michael Jackson, you probably understand the number of benefits of using Render Props over HOC. There is plenty of well know libraries that extensively use this pattern: [Downshift](https://github.com/paypal/downshift), [React-Motion](https://github.com/chenglou/react-motion) and [React Router](https://reacttraining.com/react-router/) to list a few. Have a look at the [Awesome React Render Props](https://github.com/jaredpalmer/awesome-react-render-props) by Jared Palmer to find hundreds more. Ooo, wait a second! [React Context API](https://reactjs.org/docs/context.html) uses that too.

Compared to imperative HOCs, Render Props provide a clean declarative API that is easy to reason about and compose. No need to worry about naming collisions of props, coping methods or out of the blue props attached to a component.

### Cons of using Render props

Render Props used with `React.PureComponent` comes with some restriction but this has been detailed on [React documentation](https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent) and the solution is easy to apply. Overusing Render Props may drive to something that looks like well know from back in the days callback hell — I am not missing these times.

Not to much that I can accuse this pattern for. There is one more thing that needs to be mention when we are talking about reusability in React though.

## Hooks

First and foremost! On this section I am talking about a part of an API that is on the proposal stage. Bare that in min because it may change in the future — hopefully it won't though.

On React Conf 2018 [Sophie Alpert](https://twitter.com/sophiebits) and [Dan Abramov](https://twitter.com/dan_abramov) announced [Hooks proposal](https://reactjs.org/docs/hooks-intro.html) — presumably the most excited thing in React land this year. ["React Today and Tomorrow"](https://youtu.be/V-QO-KO90iQ) followed by ["90% Cleaner React With Hooks" by Ryan Florence](https://youtu.be/wXLf18DsV-I) is required homework for those who are not familiar with Hooks yet.

Clear pattern to logic reusability was one of the main reasons why React Hooks API has been designed by [Sebastian Markbåge](https://twitter.com/sebmarkbage). Giving developers [a few built-in hooks](https://reactjs.org/docs/hooks-reference.html) to manage a state, lifecycle and context was a necessary design decision to allow React developers to create more powerful custom hooks — [Dan Abramov](https://twitter.com/dan_abramov) agrees that [custom Hooks are the most appealing part of the Hooks proposal](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889#f7df). This article is not about Hooks per se but about logic reusability — please familiarize yourself with basics on ["Introducing Hooks" section on React documentation](https://reactjs.org/docs/hooks-intro.html).

Back to `joke` provider…

```js
import { useState, useEffect } from "react";

export default function useJoke() {
  const [joke, setJoke] = useState("Loading…");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(joke => setJoke(joke.value))
      .catch(() => setJoke("Error"));
  }, []);
  return joke;
}
```

```jsx
import React from "react";
import useJoke from "./useJoke";

export default () => {
  const joke = useJoke();

  return (
    <article>
      <h1 className="heading">Content</h1>
      <p>{joke}</p>
    </article>
  );
};
```

```jsx
import React from "react";
import useJoke from "./useJoke";

export default () => {
  const joke = useJoke();

  return (
    <aside>
      <h2 className="heading">Sidebar</h2>
      <p>{joke}</p>
    </aside>
  );
};
```

<p>
<iframe src="https://codesandbox.io/embed/04833xvlyn?fontsize=16&hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</p>

This is clean, this is reusable, this is easy to read! I am Hook'ed!

### Pros of using HOOKS

No necessary nesting, no need to care about complex patterns, no need for classes, HOCs or `render` props. Despite the fact that Hooks API added 1,5 of gzipped kilobyte to React codebase, in the scale of a real life projects the minified results shows some impressive bundle size reductions (based on some early tests of some brave community members). Backward compatible, well designed, very declarative and self descriptive API.

### HOOKS cons:

:-)

## Wrap up

Hopefully you don't mind Chuck Norris joke application. It is just oversimplified example similar to the one that you may have tomorrow in your real-life project. The point is to understand reusability in React.

To build a fantastic web applications you don't need to know any of these patters but they may help you to put your work to the next level. Every abstraction comes with some cost. Which of these patters you are going to follow is just your personal preference. Personally speaking — Hooks is my way to go if I can, Render Props if I cannot use Hooks, HOCs if I have no choice.

Thanks to my girlfriend [Zuzanna Rupinska](https://twitter.com/hellozuzz) for her patience when I write new articles and for amazing illustration in the preface of this post.

Comments section is waiting for y'all! Until next time.
