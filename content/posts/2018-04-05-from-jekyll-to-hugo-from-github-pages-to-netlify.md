---
title: "From Jekyll to Hugo! From GitHub Pages to Netlify!"
description: "After few years of blogging using Jekyll, my website became slow and I stopped enjoying to work on a fresh content. Hugo and Netlify solved my problem."
photo: 2018-04-05.jpg
draft: true
---

After few years of blogging using [Jekyll](https://jekyllrb.com/), my website became slow and I stopped enjoying to work on a fresh content. Effortless integration of this static site generator with [GitHub Pages](https://pages.github.com/) was the only reason why I kept this setup for so long. A smart quote is always looking good on a geeky article, so let me smash one by Benjamin Franklin.

> "When you are finished changing, you're finished."

## From Jekyll to Hugo

Jekyll is a great tool and its integration with free GitHub hosting makes it a great couple to host a tiny website like this one. I elaborated about this setup three years ago on ["Jekyll blog on Github Pages supercharged by CloudFlare"](https://pawelgrzybek.com/jekyll-blog-on-github-pages-supercharged-by-cloudflare/). This website grown up since then and Ruby based engine started showing up some performance issues. [Enabling incremental regeneration](https://jekyllrb.com/docs/configuration/#incremental-regeneration) via `--incremental` flag didn't give my project enough of a boost. Time for change arrived.

Looking for a Jekyll replacement didn't take me a long time despite the fact that the [list of static site generators is enormous](https://staticsitegenerators.net/). Performance, great documentation and simplicity is all I need — [Hugo](https://gohugo.io/) seemed to be a perfect candidate. Written entirely in [Go](https://golang.org/) that is famous by its concurrency (processing multiple tasks simultaneously). [Setting up a first project](https://gohugo.io/getting-started/quick-start/) takes no time and [a fantastic documentation](https://gohugo.io/documentation/) makes adding custom functionality on top of it a breeze. I am not the only one who think that Hugo is fab! [Smashing Magazine](https://www.smashingmagazine.com/), [1Password](https://support.1password.com/) or [Let’s Encrypt](https://letsencrypt.org/) just to name a few.

As a result of this transition I have a smooth workflow, instant builds and most importantly I really enjoy blogging again. Compilation time has been reduced from minutes not to seconds but milliseconds. To rebuild over hundred articles on this pages Hugo doesn't need to choke at all — 200ms is all it needs. Thank you [Bjørn Erik Pedersen](https://twitter.com/bepsays), [Steve Francia](https://twitter.com/spf13) and rest of the team for building this tool!

## From GitHub Pages to Netlify

GitHub Pages served me well for years and a continuous integration with Jekyll projects allowed me to forget about such a thing like hosting. Migrating from Jekyll to Hugo forced me to do a reseach. Although [Hugo can be easily hosted on GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/), I recentlly heard too many good things about [Netlify](https://www.netlify.com/).

- [JAM Stack with Phil Hawksworth](http://shoptalkshow.com/episodes/303-jam-stack-phil-hawksworth/)
- [Learning About Netlify w/ Phil Hawksworth](https://spec.fm/podcasts/toolsday/120903)

If you have never used Netlify and you think that your hosting solution is simple, you live in a lie my friend. Drag and drop interface, amazing CLI (command line interface), continuous integration with GitHub projects, custom domain management, HTTPS certificates provided by Let’s Encrypt, HTTP 2.0 and tons of other cool features in free tier. Documentation is superb full of screen shots, video explainers and code snippets.

Website that you are reading now has published via simple `git push`, built on Netlify server and deployed to powerful content delivery network. Could it be easier?

## So happy!

I swear, either Hugo creators nor Netlify team paid me to throw so many compliments on their sides. The [source code for this website](https://github.com/pawelgrzybek/pawelgrzybek.com) is available on my GitHub account. Questions? As always I am more than happy to help. Until next time people 🤪

