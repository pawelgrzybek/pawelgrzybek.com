---
title: "How I keep my Discogs collection in sync with my music page"
summary: ""
---

Inspired by [Andy Bell](https://bell.bz/music-collection/), a few years ago I added a [music page](/music) to my website. It is a mirror copy of [my Discogs collection](https://www.discogs.com/user/pawelgrzybek/collection) that I have meticulously maintained for over a decade now. A few folks have asked me before "how I keep my Discogs collection in sync with my music page", so here is the answer. Next time someone asks, I can share this link, because links on the web are cool, right?

For the past years it was just a dirty little [Deno](https://deno.com/) script that lived locally on my computer. After buying new records and adding them to my Discogs collection, I manually run the script to generate a markdown file with general info and to fetch the cover image. Today I do pretty much the same, but now my [Discogs release downloader](https://github.com/pawelgrzybek/discogs-release-downloader) is open sourced on GitHub and it is no longer a Deno, but a little Go program. If the format of the data it generates doesn’t fit your needs, AI tools will be able to tweak it as you please in no time.

Here is how to build it.

```
go build
```

```
make build
```

Here is how to run it.

```
./drd --username=pawelgrzybek --token=XXX --ids=123,456
```

...and that generates an `index.md` and `cover.jpg` in the new folder named after the `id` that I just copy to my [Hugo](https://gohugo.io/) based website. No complicated CI tasks that run on the pipeline, no local databases to keep stuff in sync. Purely run on demand little script that I use after records shopping. I hope that answers your question.
