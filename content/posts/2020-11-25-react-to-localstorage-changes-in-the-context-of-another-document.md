---
title: "React to localStorage changes in the context of another document"
summary: "The storage event that gets fired on every localStorage update that happens in different tab of window can be pretty useful on dynamic and reactive web apps. Let's explore it together."
photo: 2020-11-25.jpg
---

["Back/forward cache" by Philip Walton](https://web.dev/bfcache/) triggered my curiosity to explore more obscure events of the `window` object. One of them that caught my attention is [`storage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event) that gets fired on every `localStorage` update that happens in the context of a different document. Have a look at this example.

```js
window.addEventListener("storage", (e) => {
  const { key, newValue } = e;
  console.log(`Updated value:`, { [key]: newValue });
});
```

![React to localStorage changes in the context of another document](/photos/2020-11-25-1.gif)

Looking at the [HTML specification](https://html.spec.whatwg.org/multipage/indices.html#event-storage) that this event fires "when the corresponding `localStorage` or `sessionStorage` storage areas change". This confused me a little, as I managed to successfully implement it only for `localStorage` modification. If you know what's going on, let me know in the comments section below or ping me on [Twitter](https://twitter.com/pawelgrzybek), please.

Stay curious and share knowledge. Until next time 👋
