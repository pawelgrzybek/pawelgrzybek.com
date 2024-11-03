---
title: "Lesson learned — dataset keys are camel-cased"
summary: "Unfortunately, it is a little rant for implementations that want to provide convenience by extending the standard but make things more confusing."
---

This quick post tells the story of how I learned that `dataset` keys are camel-cased. Unfortunately, it is a little rant about implementations that want to provide convenience by extending the standard but make things more confusing.

{{< baseline feature="dataset" >}}

## Accessing data-* attributes via dataset

HTML `data-*` attributes allow us to store arbitrary info on element declaration. It is also easy to retrieve these data via JavaScript `dataset` attribute. The `dataset` attribute is an object that contains all `data-*` values. According to the [`element.dataset` specifications](https://html.spec.whatwg.org/multipage/dom.html#dom-dataset-dev), all keys of this object are camel-cased.

```html
<div id="coolDiv" data-value="🥑" data-cool-value="🍆"></div>
```

```js
console.log(coolDiv.dataset.value)
// 🥑

console.log(coolDiv.dataset.coolValue)
// 🍆
```

## Safari wants to make it easier, but…

I don’t work with `dataset`s often, so while implementing some changes on the [NN1 Dev Club](https://nn1.dev), I forgot about the camel case conversion rule and referenced all the values via original dash-separated names.

```js
console.log(coolDiv.dataset['value'])
// 🥑
console.log(coolDiv.dataset['cool-value']) // 👈 don't do that
// 🍆
```

This style works just fine in Safari, which is my default browser. I implemented a feature, tested it, submitted a change and called it a day. Leave your suggestions for E2E tests for another day, please 😜

Unfortunately, this implementation is incorrect and does not follow the specification. It could be logical and even more intuitive, but it is against the spec and caused more confusion than anything else. Lesson learned — dataset keys are camel case 👍
