---
title: "Top picks — 2021 December"
summary: "Amazon S3 Glacier reduces prices and new storage classes arrives, imporvements to AWS deal letter queues, AWS CDK v2 announced, brand new GitHub code search, some resources abour advanced Reacr concepts, Deno and TC39 work together, Tailwind 3.0 released, things that you didn't know about CSS content property, GitHub lists and more…"
photo: top-picks.jpg
---

## [Amazon S3 Glacier storage class is now Amazon S3 Glacier Flexible Retrieval; storage price reduced by 10% and bulk retrievals are now free](https://aws.amazon.com/about-aws/whats-new/2021/11/amazon-s3-glacier-storage-class-amazon-s3-glacier-flexible-retrieval/)

Amazon S3 Glacier is one of my favourite products from the Amazon platform. I use it as the backup solution I wrote about in ["My Amazon S3 photo backup solution"](https://pawelgrzybek.com/my-amazon-s3-photo-backup-solution/) article. This year on AWS reInvent, a [new storage class](https://aws.amazon.com/about-aws/whats-new/2021/11/amazon-s3-glacier-instant-retrieval-storage-class/) has been announced and a massive cost reduction of the already existing storage class. I am well excited about it because I am saving money by doing nothing. So if you are looking for a long-term cold backup solution, do not hesitate to consider using Amazon S3 Glacier.

## [Amazon SQS Enhances Dead-letter Queue Management Experience For Standard Queues](https://aws.amazon.com/about-aws/whats-new/2021/12/amazon-sqs-dead-letter-queue-management-experience-queues/)

Another announcement from reInvent 2021. This feature helps to redirect failed events from DLQs (Dead Letter Queues) to another queue. This process was possible before but required a lot of manual tweaking and multi-step procedures. Now it is as simple as clicking a button — a great feature for all maintainers of server-less infrastructures.

## [AWS Cloud Development Kit (AWS CDK) v2 is now generally available](https://aws.amazon.com/about-aws/whats-new/2021/12/aws-cloud-development-kit-cdk-generally-available/)

Yeah! Another AWS news (sorry if that's not your thing). AWS Cloud Development Kit v2 is now generally available, and it comes with a bunch of significant DX improvements. For example, all top-level constructs are now accessible from a single dependency, and there is no need to import everything individually.

## [Improving GitHub code search](https://github.blog/2021-12-08-improving-github-code-search/)

This new experience of browsing code across GitHub repositories looks appealing to me. Maybe with this tool traversing open-source packages will become less scary. This change is another exemplary application of Rust language. Also, look at the promo website for the new [GitHub Code Search](https://cs.github.com/about), absolutely gorgeous.

## [Understanding re-rendering and memoization in React](https://engineering.udacity.com/understanding-re-rendering-and-memoization-in-react-13e8c024c2b4)

This post is the best explanation of re-rendering and memoization of React components that I have read so far. Thanks to Kolby Sisk — he has a great skill of explaining complicated things using simple words. I love this style.

## [Deno joins TC39](https://deno.com/blog/deno-joins-tc39)

I am excited that Deno representative, [Luca Casonato](https://twitter.com/lcasdev), will be joining regular TC39 meetings. The goal is to make server-side JavaScript even more powerful with a strong push on features like non-JS assets in the ES module graph, explicit resource management and a better standard library.

## [Tailwind CSS v3.0](https://tailwindcss.com/blog/tailwindcss-v3)

Tailwind 3.0 is here, and many new features are coming with that version. Scroll-snap suppport, multi-column layout, native form controls, print stylesheets, aspect ratio, RTL modifiers and more. Although I am not a big Tailwind user, this looks like a super exciting announcement for die-hard Tailwind fans. Also, look at this promo video!

{{< youtube TmWIrBPE6Bc >}}

## [The CSS "content" property accepts alternative text](https://www.stefanjudis.com/today-i-learned/css-content-accepts-alternative-text/)

This is one of the most shocking accessibility related articles that I read recently. I didn;t have a clue that an alternative text in CSS `content` property is a thing. Also, CSS `alt` property is a new thing for me. Very great read by [Stefan Judis](stefanjudis).

This article is one of the most shocking accessibility-related articles I read recently. I didn't know that an alternative text in CSS content property is a thing. Also, the CSS alt property is a new thing for me. Very great read by [Stefan Judis](https://twitter.com/stefanjudis).

## [Lists are now available as a public beta](https://github.blog/changelog/2021-12-09-lists-are-now-available-as-a-public-beta/)

For me, this is one of the coolest features that the GitHub team added recently. You can now organize your starred projects into predefined categories. So my mess of hundreds of projects is over, now I can organize them into groups.
