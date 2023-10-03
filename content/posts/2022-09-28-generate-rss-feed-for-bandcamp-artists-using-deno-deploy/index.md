---
title: "Generate RSS feed for Bandcamp artists using Deno Deploy"
summary: "I mentioned multiple times how much I like RSS. But unfortunately, not every website I use generates feeds — Bandcamp is one of them."
photo: "2022-09-28.jpg"
---

I mentioned multiple times [how much I like RSS](/rss-feed-for-youtube-channels-and-github-project/). I use them to read my favourite blogs, follow YouTube channels, stay up to date with GitHub releases and much more. But unfortunately, not every website I use generates feeds — [Bandcamp](https://bandcamp.com) is one of them.

Speaking of favourite bloggers, Jim Nielsen recently published ["Creating Custom RSS Feeds For Following Others"](https://blog.jim-nielsen.com/2022/custom-rss-feeds/), which inspired me to build an RSS feed for Bandcamp. I planned to play around with [Deno Deploy](https://deno.com/) for a while, which seemed to be a perfect fit.

A moment later, I came up with a fully working Bandcamp RSS feed that runs on the edge across 32 network locations. Not perfect, nor bulletproof, but it works just fine to fetch the most recent releases of my favourite artists! Also, working with Deno Deploy is a breeze, and their free tier gives me up to 100 000 requests per day which should be enough for me (as long as my readers are good people, which I believe they are).

```
curl --url 'https://rss-bandcamp.deno.dev/?artist=plash'
```

```ts
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { DOMParser } from "https://esm.sh/linkedom@0.14.16";

serve(async (req: Request) => {
  const url = new URL(req.url);
  const artist = url.searchParams.get("artist");

  const res = await fetch(`https://${artist}.bandcamp.com/music`);

  if (!artist || !res.ok) {
    return Response.json(
      {
        error:
          "Something is broken here. Did you add an artist search param? For example: https://rss-bandcamp.deno.dev/?artist=plash",
      },
      {
        status: 404,
      }
    );
  }

  const html = await res.text();
  const document = new DOMParser().parseFromString(html, "text/html");
  const items = Array.from(document.querySelectorAll("#music-grid li")).map(
    (item) => {
      const title = item
        .querySelector(".title")
        .textContent.replace(/(\r\n|\n|\r)/gm, "")
        .trim();
      const url = `https://${artist}.bandcamp.com/${
        item.querySelector("a").href
      }`;

      return {
        title,
        url,
        content_html: title,
      };
    }
  );

  return Response.json({
    version: "https://jsonfeed.org/version/1.1",
    title: `Bandcamp: ${artist}`,
    home_page_url: `https://${artist}.bandcamp.com`,
    feed_url: `https://rss-bandcamp.deno.dev?artist=${artist}`,
    favicon: "https://s4.bcbits.com/img/favicon/apple-touch-icon.png",
    items,
  });
});
```

Hopefully, you like this idea. Until next time, stay curious, my friend 🤗

