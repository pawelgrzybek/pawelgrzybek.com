---
title: "Top picks — 2021 September"
summary: "An Introduction to JQ, Google changes the algorithm to parse web page title (again), very helpful HTML parse htmlq, CSS Cascade Layers, beautiful CSS shadows, serverless observalibility, if/else for CSS, diagnose your HTML head and a lot more…"
photo: top-picks.jpg
---

## [An Introduction to JQ](https://earthly.dev/blog/jq-select/)

The `jq` command-line utility is a defacto solution for querying JSON data. It is lightweight, fast, available for all operating systems and pretty easy to use. This guide by [Adam Gordon Bell](https://twitter.com/adamgordonbell) is a good cheat sheet for using it.

## [An update to how we generate web page titles](https://developers.google.com/search/blog/2021/08/update-to-generating-page-titles)

Does Google "break the Web" again by changing the way how page titles are generated? Is it a good or a bad change in your opinion? I have to admit that I am not a big fan of ignoring the `title` tag, but I am a big fan of emphasising the HTML `h1` tag. Mixed feelings 🤷‍♂️

## [htmlq](https://github.com/mgdm/htmlq)

Like jq, but for HTML, I see more Rust-based projects that have recently blown my mind.

## [The Future of CSS: Cascade Layers (CSS @layer)](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)

Braum published a great primer to the CSS Cascade Layers. The New CSS feature lead by [Miriam Suzane](https://twitter.com/TerribleMia) will improve how we deal with CSS order, specificity, context, etc. I love to see this kind of addition being worked on.

## [Designing Beautiful Shadows in CSS](https://www.joshwcomeau.com/css/designing-shadows/)

If you think you know everything about CSS box-shadow, give this one a go. It is an excellent, interactive post that goes into depth of life-like looking shadows by [Joshw Comeau](https://twitter.com/joshwcomeau).

## [Mastering Serverless Application Observability](https://youtube.com/playlist?list=PLJo-rJlep0EDiN3pPjBDUfq34BqMAI_o-)

This course on Serverless Observability by [Julian Wood](https://twitter.com/julian_wood) is a top resource for everyone new to the world of micro-services. From the basic introduction of core observability pillars (metrics, logs and tracing) up to the advanced concepts of monitoring. Well spent one hour of your time.

## [Proposal for CSS @when](https://css-tricks.com/proposal-for-css-when/)

Another crazy cool announcement from Miriam about the CSS when proposal. How cool!

```css
/* instead of doing 😭 */
@media (min-width: 600px) {
  font-size: 2rem;
}
@media (max-width: 599px) {
  font-size: 1rem;
}
```

```css
/* we will be able to do 😊 */
@when media(min-width: 600px) {
  font-size: 2rem;
}
@else {
  font-size: 1rem;
}
```

## [ct.css – Let’s take a look inside your <head>](https://github.com/csswizardry/ct)

Even if you have t do it just once, please smash this snippet into your website and check for potential issues in your HTML <head> tag. As always, top work done by [Harry Roberts](https://twitter.com/csswizardry).
