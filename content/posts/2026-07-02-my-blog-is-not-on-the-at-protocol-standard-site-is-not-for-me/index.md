---
title: "My blog is not on the AT Protocol, standard.site is not for me"
summary: "Standard.site is a set of lexicons to sync your writing with the AT Protocol. What's not to like about it? I have a few reasons."
---

Since you landed on my blog, the chance is high you’re a tech-savvy web geek. If you publish stuff yourself, the chance is even higher that you came across [standard.site](https://standard.site/), a set of lexicons to sync your writing with the [AT Protocol](https://atproto.com/). There's a tonne of hype on the internet about the thing, and a bunch of friends integrated their blogs with it and published guides on how you can do so.

Another channel on the decentralised social platform where we can syndicate our content. What's not to like about it? I have a few reasons. Worth noting that I have a limited understanding of the AT Protocol, and in general I’m more of a Mastodon fan rather than a strangely funded Bluesky and everything around it. So now you know, here is why I'm choosing to stay away from the standard.site.

## New "View publication" button

One of the benefits of the AT Protocol integration is the link preview of your post on Bluesky. The new "View publication" button and a reading time estimation (with a horribly misaligned icon) is all you get. I'm so sorry, but I can't care less about it. The button redirects to the same place as the big ass image just above it. What the [Open Graph image](https://ogp.me/) gives is OK, requires no platform-specific implementation and is supported by most of the social media platforms and messaging apps.

{{< figure src="1.jpg" alt="A comparison of post preview without and with standard.site integration" caption="A comparison of the link preview on Bluesky without and with standard.site integration. By the way, if you don't follow Redowan's blog yet, you should!" >}}

I hope the Bluesky team is cooking something more incentivising for publishers. ["Highlighting journalism on Mastodon"](https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/) introduced a link to authors Frdiverse profile under the post embed, which is a lot more useful and only needs a single `meta` tag on your page. For now, the complexity required for ATmosphere integration is not worth it. Speaking of complexity, let’s talk about the integration.

## Integration and the maintenance cost

In the most basic form, the implementation requires two things: a single `site.standard.publication` record with the general info about your page, and a `site.standard.document` for every article. These records are JSON files, that you need to upload to your PDS (Personal Data Server) using millions of available integrations or via the [official TypeScript or Go SDK](https://atproto.com/sdks). There are plugins for popular CMSs which make the process easy. If you use a static site generator, the process is a little bit more involved but things like [Sequoia CLI](https://sequoia.pub) help a lot.

I'm a simple man. My page is [a simple Hugo project](https://github.com/pawelgrzybek/pawelgrzybek.com), and I'm a proud website owner without a `package.json` file. I have only a few HTML template files, a few CSS files and a dozen lines of JavaScript code to support the comments section below. The whole dance needed for the standard.site integration is far from being simple. You can argue that the whole process can run on CI and I will never have to think about it, but this is not simple. It is adding another thing that can go wrong, and that thing is not simple. I want my website to remain simple.

## Exposure to the interconnected services based on the AT Protocol

Bluesky is the most widely used service based on the AT Protocol, but there are more. There is a whole set of directories that for the IndieWeb [POSSE](https://indieweb.org/POSSE) believers can be an additional syndication channel.

Unfortunately, I see nothing that all these tools do that good old RSS cannot do. It may be related to my limited understanding of the protocol's capabilities or to the fact that I’m a huge fan of RSS.

## Give me a better reason AT Protocol

As of today, the lemon is not worth the squeeze. The complexity is too high for what I'm getting back out of it. I really hope that at some point I will have a reason to change my mind and revisit the subject. I'm going to leave you with a few good posts that go deeper into the subject, so make your own judgement.

P.S. Fuck Twitter and Elon Musk.

## Resources

- ["Publishing on the Atmosphere with Standard.site" by Declan Chidlow](https://piccalil.li/blog/publishing-on-the-atmosphere-with-standardsite/)
- ["Understanding Standard.Site" by Mat Marquis](https://wil.to/posts/standard-site/)
- ["Putting this blog on ATProto with standard.site" by Redowan Delowar](https://rednafi.com/misc/standard-site/)
