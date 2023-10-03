---
title: "From Jekyll to Hugo! From GitHub Pages to Netlify!"
summary: "After a few years of blogging using Jekyll, my website became slow and I stopped enjoying working on fresh content. Hugo and Netlify have solved my problem."
---

After a few years of blogging using [Jekyll](https://jekyllrb.com/), my website became slow and I stopped enjoying working on fresh content. The effortless integration of this static site generator with [GitHub Pages](https://pages.github.com/) was the only reason why I kept this setup for so long. A smart quote always looks good on a geeky article, so let me smash one by Benjamin Franklin.

> "When you are finished changing, you're finished."

## From Jekyll to Hugo

Jekyll is a great tool and its integration with free GitHub hosting makes it a great pairing to host a tiny website like this one. I elaborate on this setup in a post from three years ago: ["Jekyll blog on Github Pages supercharged by CloudFlare"](https://pawelgrzybek.com/jekyll-blog-on-github-pages-supercharged-by-cloudflare/). This website has grown up since then and the Ruby based engine started showing up some performance issues. [Enabling incremental regeneration](https://jekyllrb.com/docs/configuration/#incremental-regeneration) via the `--incremental` flag didn't give my project enough of a boost. The moment for change had arrived.

Looking for a Jekyll replacement didn't take me long despite the fact that the [list of static site generators is enormous](https://staticsitegenerators.net/). Performance, great documentation and simplicity is all I need — [Hugo](https://gohugo.io/) seemed to be a perfect candidate. It is written entirely in [Go](https://golang.org/) which has been made famous by its concurrency (processing of multiple tasks simultaneously). [Setting up your first project](https://gohugo.io/getting-started/quick-start/) takes no time at all and [the fantastic documentation](https://gohugo.io/documentation/) makes adding custom functionality on top of it a breeze. I am not the only one who thinks that Hugo is fab! [Smashing Magazine](https://www.smashingmagazine.com/), [1Password](https://support.1password.com/) and [Let’s Encrypt](https://letsencrypt.org/) are also big fans just to name a few.

As a result of this transition I have a smooth workflow, instant builds and most importantly I really enjoy blogging again. The compilation time hasn't been reduced from minutes to seconds, but to milliseconds. To rebuild over a hundred articles on this page Hugo doesn't choke at all — 200ms is all it needs. Thank you [Bjørn Erik Pedersen](https://twitter.com/bepsays), [Steve Francia](https://twitter.com/spf13) and rest of the team for building this tool!

## From GitHub Pages to Netlify

GitHub Pages served me well for years and the continuous integration with Jekyll projects allowed me to forget about things like hosting. Migrating from Jekyll to Hugo forced me to do some research. Although [Hugo can be easily hosted on GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/), I recently heard a lot of good things about [Netlify](https://www.netlify.com/).

- [JAM Stack with Phil Hawksworth](http://shoptalkshow.com/episodes/303-jam-stack-phil-hawksworth/)
- [Learning About Netlify w/ Phil Hawksworth](https://spec.fm/podcasts/toolsday/120903)

If you have never used Netlify and you think that your hosting solution is simple, you're living a lie my friend. It has a drag and drop interface, an amazing CLI (command line interface), continuous integration with GitHub projects, custom domain management, HTTPS certificates provided by Let’s Encrypt, HTTP 2.0 and tons of other cool features in the free tier. The documentation is superb and full of screenshots, video explainers and code snippets.

The website that you are reading now has been published via a simple `git push`, built on a Netlify server and deployed to a powerful content delivery network. Could it be easier?

## So happy!

I swear, neither Hugo's creators or the Netlify team paid me to throw so many compliments their way. The [source code for this website](https://github.com/pawelgrzybek/pawelgrzybek.com) is available on my GitHub account. Got questions? As always I am more than happy to help. Until next time people 🤪

