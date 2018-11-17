---
title: "hoc-render-props-render-props"
description: ""
photo: 2018-11-25.jpg
draft: true
---

- working with react is about reusability
- reusing ui is bread and butter of every react developer
- components are not only to render ui
- components may be only responsible for a logic
- reusing components logic
- helps with sharing logic between projects and teams
- historically mixins was made to solve this but it isn't recommended anymore for a good reason [https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)
- there is many way to implement this
- hoc, render props - not being part of React API are just advanced patterns that allow to reuse a component logic
- hooks - announced very recently and not being part of a stable version yet help to simplify reuse logic even further
- practice is a best teacher
- lets build a website with two components (`<Content />` and `<Sidebar />`) and each of these components gets random color on every refresh

## Higher-Order Components

- crosscutting functionality of HOCs is based on the [decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern) — takes a function as the first parameter and returns a new function with some extra powers. in React land we are passing a component as and arg and return a new Component.
- widely used `connect` from `react-redux` is a HOC
-

```js
function withSomeSuperExtraPower(Component) {
  return function(props) {
    return <Component {...props} />;
  };
}
```

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
- andy clark talk ? -
- dan abramov presents hooks? -
- kent c dodds articles

## CONCLUSIONS:

- personal preference
- each of these patterns comes with pros and cons
- you can live and and build a fantastic projects without using any of these
- its worth to play around and decide yourself if its worth to abstract
