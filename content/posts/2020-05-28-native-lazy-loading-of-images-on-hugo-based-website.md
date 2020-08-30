---
title: "Native lazy-loading of images on Hugo based website"
summary: "The implementation of lazy-loading images using Hugo is equally simple as adding it to an HTML file and you don’t have a good reason not to do so. Let me explain."
photo: 2020-05-28.jpg
---

Images on the web take up more bandwidth than any other type of resources. Why do we have to load them all even if we are never going to scroll far enough to see them? Turns out that we don't have to anymore — support for [native lazy loading](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes) is coming. If you are using [Hugo static site generator](https://gohugo.io/), the implementation of it is equally simple as adding it to an HTML file and you don't have a good reason not to do so.

```html
<img src="cat.jpg" alt="Cat" loading="lazy" width="600" height="400">
```

## Hugo render hook templates for the rescue

[Goldmark — a markdown parser written in Go](https://github.com/yuin/goldmark/) since version 60 is the default Hugo library to render your content. It allows hooking into the rendering phase of particular HTML elements, like image, link or heading. This powerful feature allows us to manipulate the HTML markup for `<img />` elements and add `loading`, `width` and `height` attributes.

[Hugo documentation for markdown render hooks](https://gohugo.io/getting-started/configuration-markup/#markdown-render-hooks) provides a lot of great examples and explanations. Using the power of this feature we are able to implement a native lazy loading using a custom template. Like so:

```html
<!-- layouts/_default/_markup/render-image.html -->
{{ $img := imageConfig (add "/static" (.Destination | safeURL)) }}

<img
  src="{{ .Destination | safeURL }}"
  alt="{{ .Text }}"
  loading="lazy"
  width="{{ $img.Width }}"
  height="{{ $img.Height }}"
/>
```

![Native lazy loading](/photos/2020-05-28-1.gif)

Hopefully, you found this little tip helpful. Please don't be too concerned about the [browser support for lazy loading via attribute](https://caniuse.com/#feat=loading-lazy-attr). This feature comes for free! If a browser doesn't support it, it is simply ignored and everything is working as it did ever before. Progressive enhancement for the win!

Bye 👋
