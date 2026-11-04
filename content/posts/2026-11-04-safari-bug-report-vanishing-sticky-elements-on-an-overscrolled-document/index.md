---
title: "Safari bug report: Vanishing sticky elements on an overscrolled document"
summary: "While working on one of my side projects that uses a few sticky elements, I noticed something strange. I spent some time debugging it, but I’m afraid that it is Safari that is buggy here, not my code."
---

You know this rubber-banding effect on iOS Safari when you reach the end of the scrollable element, and it does this cool bounce. You can prevent it using CSS `overscroll-behaviour: none` if you don't like it, but doing it also disables the "pull-to-refresh" gesture that was added to Safari not long ago.

While working on a side project that uses a few sticky elements, I noticed something strange. I spent some time debugging it, but I’m afraid it is Safari that is buggy here, not my code. Look at what happens when you overscroll the bottom edge of the screen when some sticky elements are on the page.

{{< figure-video path="scroll.mp4" caption="Vanishing sticky elements on an overscrolled document" >}}

Here is a reduced test case of the issue I hit.

```html
<main class="container">
  <section class="one">one</section>
  <section class="two">two</section>
  <p>Some content here...</p>
</main>
```

```css
.container {
  margin: 1rlh;
  padding: 1rlh;
  background: #eee;
}

.one,
.two {
  position: sticky;
  height: 2rlh;
}

.one {
  top: 0;
  background: salmon;
}

.two {
  top: 2rlh;
  background: rebeccapurple;
}
```

As I usually do, I opened [a bug on WebKit Bugzilla](https://bugs.webkit.org/show_bug.cgi?id=330140). I really hope we can resolve this nasty glitch together, Apple folks 🤗
