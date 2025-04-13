---
title: "Top picks — 2025 April"
summary: ""
---

Intro...

---

## Album of the month

Album recommendation...

![]()

---

## Top picks

### [Build Times - You should know this before choosing Next.js](https://eduardoboucas.com/posts/2025-03-25-you-should-know-this-before-choosing-nextjs/)

Eduardo Bouças from the Netlify team opened up and released his frustrations about the Next.js interoperability across host providers. Being one of the people involved in the constant backward engineering of Vercel’s framework, he has a lot of interesting points. If Next.js is the tool you are planning to use for your upcoming project, this one may change your mind a little, especially if vendor locking is your concern.

### [Item Flow, Part 1: A new unified concept for layout](https://webkit.org/blog/16587/item-flow-part-1-a-new-unified-concept-for-layout/)

This is the next iteration in the masonry layout hot debate about two competing spec ideas, one coming from Apple and the other made by Googlers. This recent post by Jen Simmons on the WebKit blog looks very promising as it resolves most of the concerns the web development crowd raised before. I am a little bit unsure about the functionality of `item-pack` inside `flex` containers and feel like the two suggested solutions introduce more issues than they solve. Also, `item-slack` sounds too funny to be part of an official spec, but it looks like the debate about renaming this one continues. I like the overall direction of merging `flex` and `grid` properties into one.

### [Better typography with text-wrap pretty](https://webkit.org/blog/16547/better-typography-with-text-wrap-pretty/)

The CSS `text-wrap: pretty` landed in stable Google Chrome in September 2023, and Safari is catching up only now but with a twist. The implementation between these two engines differs quite a lot. On this article Jen Simmons, explains the difference between implementations, why the differences are absolutely allowed in this case and also explains a good typography concepts needed to understand the power of the new `text-wrap` value.

### [Default styles for h1 elements are changing](https://developer.mozilla.org/en-US/blog/h1-element-styles/)

A pretty rare case when the browser implementation needs to be changed and potentially "break" some websites. This article explains what's changing and the reasoning behind it. Also, it is a great explainer of the HTML Outline that was removed from the spec a few years back.

### [Introducing Zod 4 beta](https://v4.zod.dev/v4)

The de facto industry standard schema validation library in the JavaScript ecosystem is becoming a lot better. The author just announced a beta version of the 4th iteration and its performance is significantly better. It also comes with a reduced bundle size, an alternative version mini perfect to use on the client side, a global registry, JSON schema conversion, better support for recursive types, pretty errors, template literal types, and tons more. This is a good release in the JS ecosystem. I personally use Zod on multiple projects and it is just a breeze to work with.
