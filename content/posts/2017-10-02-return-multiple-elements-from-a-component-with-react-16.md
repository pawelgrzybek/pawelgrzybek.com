---
title: Return multiple elements from a component with React 16
description: One of the most requested features in React framework has always been returning multiple elements from a components render method. There you have it!
date: 2017-10-02
photo: 2017-10-02.jpg
---

[React 16 is here](https://reactjs.org/blog/2017/09/26/react-v16.0.html) and it brings lots of exciting changes. One of the most requesting features around React community has been [returning multiple elements](https://github.com/facebook/react/issues/2127) from a component's render method. Skipping wrapper tag is definitely something that developers are happy about — popularity of [my tweet](https://twitter.com/pawelgrzybek/status/913697990849826816) proves this point.

<p>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Return multiple elements in <a href="https://twitter.com/reactjs?ref_src=twsrc%5Etfw">@reactjs</a> 16 ❤️<a href="https://twitter.com/hashtag/js?src=hash&amp;ref_src=twsrc%5Etfw">#js</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/react?src=hash&amp;ref_src=twsrc%5Etfw">#react</a> <a href="https://twitter.com/hashtag/reactjs?src=hash&amp;ref_src=twsrc%5Etfw">#reactjs</a> <a href="https://t.co/uPGyxUGtWn">pic.twitter.com/uPGyxUGtWn</a></p>&mdash; Paweł Grzybek (@pawelgrzybek) <a href="https://twitter.com/pawelgrzybek/status/913697990849826816?ref_src=twsrc%5Etfw">September 29, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</p>

The basic way is to return an array of elements. To avoid warnings you have to add a key to each element, although it may not be needed in the future.

```jsx
const App = () => [
  <p key="1">React 16 can return multiple elements ❤️</p>,
  <p key="2">React 16 can return multiple elements ❤️</p>,
  <p key="3">React 16 can return multiple elements ❤️</p>,
];
```

<p>
<p data-height="270" data-theme-id="14885" data-slug-hash="WZEKWj" data-default-tab="js,result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-10-02-1" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/WZEKWj/">2017-10-02-1</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

To avoid array notation and manually added keys to each of the element, you can use an `Aux` helper function that simply returns all its children. Like so…

```jsx
const Aux = props => props.children;

const App = () =>
  <Aux>
    <p>React 16 can return multiple elements ❤️</p>
    <p>React 16 can return multiple elements ❤️</p>
    <p>React 16 can return multiple elements ❤️</p>
  </Aux>;
```

<p>
<p data-height="320" data-theme-id="14885" data-slug-hash="XeaPKo" data-default-tab="js,result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-10-02-2" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/XeaPKo/">2017-10-02-2</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

**UPDATE!**

[React v16.2](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html) introduced another way of returning multiple elements. `React.Fragment` abstracted in JSX way via just an empty tag. Bare in mind that JSX syntax doesn't support attributes — use a verbose way if you need so. No extra components needed, no array notation, no keys. Nice!

```jsx
const App = () => (
  <>
    <p>React 16 can return multiple elements ❤️</p>
    <p>React 16 can return multiple elements ❤️</p>
    <p>React 16 can return multiple elements ❤️</p>
  </>
);

// if your build tool goes crazy, do this…

const App = () => (
  <React.Fragment>
    <p>React 16 can return multiple elements ❤️</p>
    <p>React 16 can return multiple elements ❤️</p>
    <p>React 16 can return multiple elements ❤️</p>
  </React.Fragment>
);
```

<p>
<p data-height="320" data-theme-id="14885" data-slug-hash="qVJwaN" data-default-tab="js,result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-10-02-3" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/qVJwaN/">2017-10-02-3</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

Nice! Isn't it?! Find out about more really cool features added in the new version of React in this [great Egghead course](https://egghead.io/courses/leverage-new-features-of-react-16) by [Nik Graf](https://twitter.com/nikgraf).

Did you find it helpful? Consider to hit the share button below to make me more popular than I am! Have a great day you all 🥑
