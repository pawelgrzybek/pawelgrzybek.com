---
title: "Cross-cutting functionality in React using Higher-Order Components, Render Props and Hooks"
description: "When working with moderns JavaScript frameworks we often have to share the same piece of functionality across multiple components. Let me explain to you few patterns that make is a breeze."
photo: 2018-11-25.jpg
draft: true
---

Working with modern JavaScript frameworks is all about reusable components that hold a markup, styling and a business logic — React being fantastic at it [gaining more popularity](https://2018.stateofjs.com/front-end-frameworks/react/) every year. Very often though, we have a situation where few components contain the same functionality and we need a way to abstract it out according to our [DRY (don't repeat yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) conduct that we were developing for years.

!!! IMAGE HERE !!!

Practice is the best teacher so let's say that we have two components, `<Content />` and `<Sidebar />` and both of them get a random color on every render. Like so…

```
const Content = () => (
  <article style={{ color: `hsl(${Math.random() * 360}, 100%, 50%)` }}>
    <h1>Content</h1>
    <p>Lorem ipsum, dolor sit…</p>
  </article>
);
```

```
const Sidebar = () => (
  <aside style={{ color: `hsl(${Math.random() * 360}, 100%, 50%)` }}>
    <h2>Sidebar</h2>
    <p>Lorem ipsum dolor sit…</p>
  </aside>
);
```

<p>
<iframe src="https://codesandbox.io/embed/w66x1n5lpw?fontsize=16&hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</p>

Can you spot the logic duplication? Wouldn't be nicer to pass a color as a components property and make a random hue creation reusable across the whole project and maybe even drop it to another app one day? Historically Mixins system was used to reuse code between components but there is plenty of reasons why [Mixins are considered harmful](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html) and we shouldn't rely on this concept anymore. [Higher Order Components](https://reactjs.org/docs/higher-order-components.html) and [Render Props](https://reactjs.org/docs/render-props.html) aren't parts of React API per se but advanced patterns that allow us to reuse components logic. Announced on React Conf 2018 Hooks help to simplify reusability even further.

## Higher-Order Components

In mathematics and computer science world, [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) is the one that takes a function as an argument or returns a function as a result. To translate it to more React-like jargon it is a function that takes a **component as an argument** and **returns another component** (with some "extra powers"). It is very similar to a [Decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern) used extensively in software development. The naming convention adopted in a React ecosystem is to use `with` as a prefix for this function because it describes what the "extra power" of returned component is (ie. `withData`, `withMessage` or `withColor`).

Theory aside and let's construct a HOC `withColor` that returns a component with extra `color` prop with randomly generated value.

```js
const withColor = Component => props => (
  <Component color={`hsl(${Math.random() * 360}, 100%, 50%)`} {...props} />
);
```

The returned component has a new `color` prop and receives all the props of it's source component via `...props`. By doing so we created a reusable provider of random color. Having that we can revisit out test application and remove a duplicated logic from `<Content />` and `<Sidebar />` components and decorate them using `withColor` higher order component.

```jsx
const ContentWithColor = withColor(Content);
const SidebarWithColor = withColor(Sidebar);

const App = () => (
  <main className="main">
    <ContentWithColor />
    <SidebarWithColor />
  </main>
);
```

<p>
<iframe src="https://codesandbox.io/embed/m5ljlj8kvj?fontsize=16&hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</p>

### Pros of using HOC

HOCs provide a nice pattern to reuse a logic. Number of popular projects uses this pattern: [React Redux](https://www.npmjs.com/package/react-redux), [Relay](http://facebook.github.io/relay/) or [Radium](https://formidable.com/open-source/radium/) just to name a few. They are easy to compose, use and chain together. [Andrew Clark](https://twitter.com/acdlite) from React core team being a strong advocate of this composition created a popular utility library called [recompose](https://github.com/acdlite/recompose). The active maintenance has been discontinuing because of the recently announced Hooks that solve majority of the issues that this library tried to help with (more on that later).

### Cons of using HOC

There is no rose without a thorn. Chained higher order components can lead to prop naming collisions — technically there is nothing incorrect about the implementation but unexpected results are painful to debug. When overused it is hard to guess where particular prop is coming from and going through nested tree in a console isn't pleasant at all. Some rare issues with using them inside a `render()`, class static methods and passing `ref`s are well detailed on React docs under the [Higher-Order Components — Caveats](https://reactjs.org/docs/higher-order-components.html#caveats) section.

[Michael Jackson](https://twitter.com/mjackson), creator of [React Router](https://github.com/ReactTraining/react-router) and tons of other popular open source projects pointed out a lot of issues with HOCs in his talk ["Never Write Another HoC"](https://youtu.be/BcVAq3YFiuc) presented at Phoenix ReactJS in September 2017. His solution leads me to another way of cross-cutting functionality in React.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I can do anything you&#39;re doing with your HOC using a regular component with a render prop. Come fight me.</p>&mdash; MICHAEL JACKSON (@mjackson) <a href="https://twitter.com/mjackson/status/885910701520207872?ref_src=twsrc%5Etfw">July 14, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Render Props

Render props is another technique of reusing a business logic in multiple components. Compared to HOCs it requires much less boiler code to create and using it gives much better readability about the given extra functionality. The concept is simple — **build your component as you would normally do** and let the `render()` method **invoke a function with the extra logic** as a parameter. Our mission is to build a provider of a random color, so let's do it.

```js
const RandomColor = props =>
  props.render(`hsl(${Math.random() * 360}, 100%, 50%)`);
```

As you can see, we are invoking a function stored in a `render` prop — this is a good indicator that the **value of a render prop should be a function**. The name `render` isn't a part of React API by all means — just a meaningful convention. This is the way to use it…

```jsx
const App = () => (
  <main>
    <RandomColor render={randomColor => <Content color={randomColor} />} />
    <RandomColor render={randomColor => <Sidebar color={randomColor} />} />
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

On React Conf 2018 [Sophie Alpert](https://twitter.com/sophiebits) and [Dan Abramov](https://twitter.com/dan_abramov) announced [Hooks proposal](https://reactjs.org/docs/hooks-intro.html) — presumably the most excited thing in React land this year. ["React Today and Tomorrow"](https://youtu.be/V-QO-KO90iQ) followed by ["90% Cleaner React With Hooks" by Ryan Florence](https://youtu.be/wXLf18DsV-I) are required homeworks for those of those who are not familiar with Hooks yet.

### HOOKS pros:

### HOOKS cons:

---

## CONCLUSIONS:

- everything presented is a very simplified verion but you can make your hoc, data providers much more complex
-
- personal preference
- each of these patterns comes with pros and cons
- Every abstraction comes with a cost,
- you can live and and build a fantastic projects without using any of these
- its worth to play around and decide yourself if its worth to abstract
