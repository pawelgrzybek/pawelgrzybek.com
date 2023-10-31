---
title: "Top picks — 2023 October"
summary: "The CSS @scope at-rule, ActivityPub on WordPress.com, Netlify Functions 2.0, and organizing multiple Git identities. Thats it for this month."
---

## [Limit the reach of your selectors with the CSS @scope at-rule](https://developer.chrome.com/articles/at-scope)

People struggle to embrace the cascade part of CSS, so plenty of solutions have evolved to limit the reach of CSS selectors. Various naming conventions like BEM and a number of CSS-in-JS libraries like styled-components have helped to work around it. Finally, we have a native solution to limit the access of CSS selectors—the `@scope` at-rule. Bramus did a splendid job explaining how it works and how to use it. So far, [the browser support for `@scope`](https://caniuse.com/?search=%40scope) is limited to Google Chrome 118, and I am unsure about the implementation status in other engines.

## [Engage a Wider Audience With ActivityPub on WordPress.com](https://wordpress.com/blog/2023/10/11/activitypub/)

ActivityPub, the protocol that powers Mastodon, Pixelfed, and other federated social networks, is now available on WordPress.com. This will help popularize the protocol and make it more accessible to the masses. Hopefully, it will also aid in eliminating the BirdShite/Twitter/X stupidity.

## [Introducing Netlify Functions 2.0](https://www.netlify.com/blog/introducing-netlify-functions-2-0/)

A ton of great improvements just landed in the Netlify Functions API. It introduces a new standardized interface, configurable endpoints using a config object, advanced routing via named groups, method matching, and simplified streaming. Using Netlify Functions now feels more like using the web and less like interacting with AWS Lambda. It's a nice move, and I love the flexibility that the config object enables.

## [Organizing multiple Git identities](https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities)

This is a great tip from Garrit. I had no clue that Git config can be conditional based on a repository location. Super handy!
