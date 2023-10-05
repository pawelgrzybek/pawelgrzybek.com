---
title: "Migration from single content files to Hugo page bundles"
summary: "I decided to migrate from individual Markdown files to Hugo page bundles. This single change doesn’t look like a lot to the visitor, but it was a massive improvement for me as a publisher."
---

Since I migrated from [Jekyll](https://jekyllrb.com) to [Hugo](https://gohugo.io) a few years ago, I have never looked at any other static site generator. I elaborated on this process in ["From Jekyll to Hugo! From GitHub Pages to Netlify!"](/from-jekyll-to-hugo-from-github-pages-to-netlify/). It may not be the easiest tool of its kind out there, but the complexity pays off in the form of flexibility, speed, and reliability.

Over the last few years, I have been writing and adding more Markdown files to the content pile, as well as images to the static resources folder. It was all good, but I wasn't fully utilizing the potential of Hugo. Finally, I decided to migrate from individual Markdown files to [Hugo page bundles](https://gohugo.io/content-management/page-bundles/). For those unfamiliar with this concept, the following simple diagram should help.

```
// BEFORE
.
├── content
│   └── posts
│       ├── 2023-10-04-post-one.md
│       └── 2023-10-05-post-two.md
└── static
    ├── post-one-pic-1.jpg
    ├── post-one-pic-2.jpg
    ├── post-two-pic-1.jpg
    └── post-two-pic-2.jpg

// AFTER
.
└── content
    └── posts
        ├── 2023-10-04-post-one
        │   ├── index.md
        │   ├── post-one-pic-1.jpg
        │   └── post-one-pic-2.jpg
        └── 2023-10-05-post-two
            ├── index.md
            ├── post-two-pic-1.jpg
            └── post-two-pic-2.jpg
```

## Benefits of Page Bundles

The obvious benefit is file colocation. All files related to a single post live in the same directory. It vastly eliminates the potential for orphaned static files. When you delete a draft that you've lost hope for (which happens to me all the time), all related files will also be deleted.

[Page resources](https://gohugo.io/content-management/page-resources/) is a Hugo concept where all files in a page bundle are accessible in a template via `{{ .Resources }}` member. They also have some extra [image processing powers](https://gohugo.io/content-management/image-processing/) that are impossible with static files. This is very powerful and has allowed me to massively simplify how I handle multiple file formats (`jpg`, `webp`, and `avif`) and alternate dark mode variations. I have also managed to eliminate some unnecessary logic for handling open graph images—I need to remember to include an `og.jpg` file in the page bundle, and Hugo will take care of the rest.

This single change doesn't look like a lot to the visitor, but it was a massive improvement for me as a publisher. I can also reveal that I am planning to translate some of my posts into Polish, and with page bundles, it will be a breeze.

If you're curious about how it works, [the source code for my website is available on GitHub](https://github.com/pawelgrzybek/pawelgrzybek.com). Shout out if you have any questions or suggestions. Peace ✌️
