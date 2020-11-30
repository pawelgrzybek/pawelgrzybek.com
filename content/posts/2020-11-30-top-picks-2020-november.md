---
title: "Top picks — 2020 November"
summary: "Native CSS Masonry Layout In CSS Grid, super simple start to Netlify functions, well-known URL for changing passwords, Tailwind CSS v2.0 arrived, TypeScript 4.1 finally there, typed React, back/forward cache and more…"
photo: top-picks.jpg
---

## [Native CSS Masonry Layout In CSS Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)

[Level 3 of the CSS Grid specification](https://drafts.csswg.org/css-grid-3/) introduces something that web devs were waiting for ages — a native way of achieving masonry-like layout using just CSS. [Rachel Andrew](https://twitter.com/rachelandrew) published this fantastic explainer to this new feature. It is crazy how simple this implementation is.

## [Super simple start to Netlify functions](https://kentcdodds.com/blog/super-simple-start-to-netlify-functions)

[Kent C. Dodds](https://twitter.com/kentcdodds/) published the super simple to follow tutorial to get your hands dirty with Netlify Functions which are just an abstraction on top of the AWS Lambda. It is just a perfect solution to send emails, add a record to a database or perform pretty much anything that server-less function can do for you without worrying about setting up the whole infrastructure. Great write-up.

## [Help users change passwords easily by adding a well-known URL for changing passwords](https://web.dev/change-password-url/)

Security is one of the most important things on the web so why should we prevent us from doing the integration with password managers harder? Simply redirect a request to `/.well-known/change-password` to the change-passwords URL today. This article is a great explainer of everything that is described in ["A Well-Known URL for Changing Passwords"](https://w3c.github.io/webappsec-change-password-url/) by [Web Application Security Working Group](https://github.com/w3c/webappsec).

## [Tailwind CSS v2.0](https://blog.tailwindcss.com/tailwindcss-v2)

Even tho this is not my preferred way of styling, Tailwind is a popular choice amongst front end developers. Today's release brings a lot of new features to the table: new colour palette, dark mode support, extended breakpoints and a lot more. Promo video presents it all very nicely.

{{< youtube 3u_vIdnJYLc >}}

## [Announcing TypeScript 4.1](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)

This version of TypeScript comes with two great features that I have been waiting for a long time: template literal types and key remapping in mapped types. Look, how handy that is!

```ts
type Options = {
    [K in "Color" | "Width" | "Height" as `new${K}`]: string
};

const objOptions: Options = {
    newColor: "blue",
    newWidth: "2m",
    newHeight: "3m"
}
```

## [TSConf 2020 Workshop: TypeScript Plus React = Love](https://youtu.be/xfcPUP2_J9E)

TypeScript is my preferred way of writing JavaScript code nowadays. React is my framework of choice when it comes to making web apps. Turns out that this couple works great together. This great workshop by [Ben Ilegbodu](https://twitter.com/benmvp) is more than enough to get you running with type safety on your next front end project. 

{{< youtube xfcPUP2_J9E >}}

## [Back/forward cache](https://web.dev/bfcache/)

[Philip Walton](https://twitter.com/philwalton) published the best explainer of bfcache (back/forward cache) optimization around. In this article Phill clearly explains ins and outs of the concept, browser compatibility and dos and don'ts to optimise for the advantages that this technique comes with. One of the most important sections of this post goes through its impact on [Core Web Vitals](https://web.dev/vitals/).
