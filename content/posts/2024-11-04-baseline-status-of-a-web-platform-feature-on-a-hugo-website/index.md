---
title: "Baseline status of a web platform feature on a Hugo website"
summary: "A recipe for a Hugo shortcode that presents a baseline status of a web platform feature. A good starting point for a visually pleasing browser info representation."
---

An article about a web platform feature feels incomplete without a browser support info. [The CanIUse Embed](https://caniuse.bitsofco.de) built by [Ire Aderinokun](https://bitsofco.de) is widely used amongst web bloggers. Recently, [Rachel Andrew](https://rachelandrew.co.uk) from Google announced [an official web component to display the Baseline status](https://web.dev/blog/show-baseline-status).

Both of them fetch the results from external resources at runtime. To keep my website trully static, I would prefer to pre-build results at the build time. [Stefan Judis](https://www.stefanjudis.com/blog/browser-support-baseline-web-component/) uses a custom solution that takes results from the [browser-compat-data](https://github.com/mdn/browser-compat-data) and wraps it in a beautiful section at the build stage. [Chris Swithinbank](https://www.chrisswithinbank.net) took an official Google's `<baseline-status>` and converted it into [an Astro component](https://astro-embed.netlify.app/components/baseline-status/) to avoid client-side JavaScript.

I write a ton about the web on this blog, so I finally built a solution for my static website built using [Hugo](https://gohugo.io). Let me share a recipe with you.

## Hugo shortcode to display the Baseline status

For the sake of simplicity, I chose the [Web Platform Status API](https://webstatus.dev) as the source of data. As [Mathias Bynens](https://mathiasbynens.be) noticed, it is [not well documented](https://github.com/GoogleChrome/webstatus.dev/issues/280), but it exists and it is open for the public use. It returns a much more concise set of data than the `browser-compat-data`, but most importantly, it contains [the Baseline](https://web-platform-dx.github.io/web-features/) status. I'm a huge fan of the Baseline as it is an easily glanceable hint for a developer if something can be used or not.

Hugo [shortcodes](https://gohugo.io/content-management/shortcodes/) are parameterised (or not) snippets of code that return HTML. Inside them, you can use a bunch of other Hugo features like the [`resource.GetRemote` function](https://gohugo.io/functions/resources/getremote/) that returns a remote data.

This examples presents a good starting point for your very own Baseline status component. It declares a shortcode that takes a `feature` from the [Web Platform Status](https://webstatus.dev) as an argument, and returns its Baseline status.

```html
<!-- layouts/shortcodes/baseline.html -->

{{ $data := dict }}
{{ $baseurl := "https://api.webstatus.dev/v1/features/" }}
{{ $param := .Get "feature" }}
{{ $url := printf "%s/%s" $baseurl $param }}
{{ with resources.GetRemote $url }}
  {{ with .Err }}
    {{ errorf "Failed to fetch %s: %s" $url . }}
  {{ else }}
    {{ $data = . | transform.Unmarshal }}
  {{ end }}
{{ end }}

<p>The Baseline status of <strong>{{ $data.name }}</strong> is <strong>{{ $data.baseline.status }}</strong>.</p>
```

Now, you can use it inside any of the content files. Here is an example where we request [Web Platform Status data about the `Array.from()` method](https://webstatus.dev/features/array-from).

```md
<!-- content/posts/my-cool-article.md -->

{{</* baseline feature="array-from" */>}}
```

And here is a rendered result.

```html
<p>The Baseline status of <strong>Array.from()</strong> is <strong>widely</strong>.</p>
```

### Make it yours!

Examples above should do as a starting point. It is your time to make it yours. [The OpenAPI specification for the Web Platform Status API](https://github.com/GoogleChrome/webstatus.dev/blob/main/openapi/backend/openapi.yaml) is a handy reference of all fields you can play with. This is the variation that you are going to see more often around my website. Of course, [the source code for my Baseline status shortcode](https://github.com/pawelgrzybek/pawelgrzybek.com/blob/master/themes/pawelgrzybek/layouts/shortcodes/baseline.html) is on GitHub. Nice, right?

{{< baseline feature="array-from" >}}

## Time to revisit past posts

Since I have a cool-looking way of presenting browser support for web features now, I decided to revisit some of my past articles. Here is a list of the revisited pages.

- [Native feature detection with CSS.supports() API](/native-feature-detection-with-csssupports-api/)
- [Lets get into the basics of CSS Grid Layout Model](/lets-get-into-the-basics-of-css-grid-layout-model/)
- [CSS Custom Properties explained](/css-custom-properties-explained/)
- [Intro to the Web Animations API](/intro-to-the-web-animations-api/)
- [The Intersection Observer API explained](/the-intersection-observer-api-explained/)
- [Page scrolling in vanilla JavaScript](/page-scroll-in-vanilla-javascript/)
- [Native ECMAScript modules in the browser](/native-ecmascript-modules-in-the-browser/)
- [Make some magic with CSS blend modes](/make-some-magic-with-css-blend-modes/)
- [From callback hell, through promises to async functions](/from-a-callback-hell-through-promises-to-async-functions/)
- [Native lazy-loading of images on Hugo based website](/native-lazy-loading-of-images-on-hugo-based-website/)
- [WebP and AVIF images on a Hugo website](/webp-and-avif-images-on-a-hugo-website/)
- [CSS Container Queries — a revolution for responsive web design](/css-container-queries-a-revolution-for-responsive-web-design/)
- [The difference between CSS focus and focus-visible pseudo-class](/the-difference-between-css-focus-and-focus-visible-pseudo-class/)
- [TIL — Removing DOM Event Handlers using AbortController](/til-removing-dom-event-handlers-using-abortcontroller/)
- [A simple carousel with a few lines of CSS](/a-simple-carousel-with-a-few-lines-of-css/)
- [Native CSS nesting landed](/native-css-nesting-landed/)
- [You need to know the balance! CSS balance!](/you-need-to-know-the-balance-css-balance/)
- [Vertical rhythm using CSS lh and rlh units](/native-css-nesting-landed/)
- [CSS valid/invalid vs user-valid/user-invalid pseudo-classes](/css-valid-invalid-vs-user-valid-user-invalid-pseudo-classes/)
- [Deferred JavaScript promises using Promise.withResolvers](/deferred-javascript-promises-using-promise-withresolvers/)
- [Light/dark mode simplified by the CSS light-dark() function](/light-dark-mode-simplified-by-the-css-light-dark-function/)
- [Promise.try to improve error handling and sync/async interoperability](/promise-try-to-improve-error-handling-and-sync-async-interoperability/)
- [Popover element entry and exit animations in a few lines of CSS](/popover-element-entry-and-exit-animations-in-a-few-lines-of-css/)
- [Lesson learned — dataset keys are camel-cased](/lesson-learned-dataset-keys-are-camel-cased/)
