---
title: "Cross-cutting functionality in React using Higher-Order Components, Render Props and Hooks"
description: "When working with moderns JavaScript frameworks we often have to share the same piece of functionality across multiple components. Let me explain to you few patterns that make is a breeze."
photo: 2018-11-25.jpg
draft: true
---

Working with modern JavaScript frameworks is all about reusable components that hold a markup, styling and a business logic — React is fantastic at it. Very often though, we have a situation where few components contain the same functionality and we need a way to abstract it out according to our [DRY (don't repeat yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) conduct that we were developing for years.

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

Can you spot the duplication? Wouldn't be cool to pass color as a property and make this random hue creation reusable across the whole project and maybe even drop it to another project one day? Historically Mixins system was used to reuse code between components but there is plenty of reasons why [Mixins are considered harmful](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html) and we shouldn't rely on this concept anymore. Higher order components and render props aren't parts of React API per se but just advanced patterns that allow us to reuse components logic. Announced on React Conf 2018 Hooks help to simplify logic reusability even further.

## Higher-Order Components

In mathematics and computer science world, [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) is the one that takes another function as an argument or returns a function as a result. To translate it to more React-like jargon it is a function that takes a **component as an argument** and **returns another component** (with some extra powers). The naming convention is to use `with` as a prefix for this function because it describes well what the extra power of returned component is (ie. `withData`, `withMessage` or `withColor`).

Theory aside and let's construct a HOC `withColor` that returns a component with extra `color` prop with randomly generated color as a value.

```js
const withColor = Component => props => (
  <Component color={`hsl(${Math.random() * 360}, 100%, 50%)`} {...props} />
);
```

The returned component receives all the props of the container with a new `color` prop. By doing so we created reusable provider of random color to any component. Having that we can revisit out test application and remove duplicated logic from `<Content />` and `<Sidebar />` components and decorate them using `withColor` higher order component.

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

- widely used `connect` from `react-redux` is a HOC

### HOC pros:

- easy to make small reusable units

### HOC cons:

- when chained, some of them may use the prop with he same name and that may cause accidental override and prop collisions
- when chained, user may be unsure which HOC is providing particular prop
- generates deeply nested tree making it difficult to debug
- boiler code
- debugging isn't fun
- [cannot be used in render method](https://reactjs.org/docs/higher-order-components.html#dont-use-hocs-inside-the-render-method)
- [Static Methods Must Be Copied Over](https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over)
- [Refs Aren’t Passed Through](https://reactjs.org/docs/higher-order-components.html#refs-arent-passed-throug)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I can do anything you&#39;re doing with your HOC using a regular component with a render prop. Come fight me.</p>&mdash; MICHAEL JACKSON (@mjackson) <a href="https://twitter.com/mjackson/status/885910701520207872?ref_src=twsrc%5Etfw">July 14, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

## Render Props

- component’s prop is assigned a function
- name of a prop can be anything but it is kind of industry standard to call it `render`

### RENDER PROPS pros:

- reuse logic
- No naming collision issues for props, state and class methods
- No need to deal with boiler code and hoisting static methods
- transparency what super powers are added to component, not hiden like in hoc

### RENDER PROPS cons:

- render props callback in JSX is not so elegant, HOC looks more react'y
- nested look terrible and it is hard to read like callback hell
- when used with React.PureComponent requires to extract instance method - https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent
-

---

## Hooks

### HOOKS pros:

### HOOKS cons:

## Helpful resources

- HOC oficial react docs - https://reactjs.org/docs/higher-order-components.html
- RP official react docs - https://reactjs.org/docs/render-props.html
- michael jackson never write another hoc - https://youtu.be/BcVAq3YFiuc
- andy clark talk - creator of recompose liblary about the power of hocs - https://youtu.be/zD_judE-bXk
- dan abramov presents hooks? -
- kent c dodds articles

## CONCLUSIONS:

- personal preference
- each of these patterns comes with pros and cons
- you can live and and build a fantastic projects without using any of these
- its worth to play around and decide yourself if its worth to abstract
