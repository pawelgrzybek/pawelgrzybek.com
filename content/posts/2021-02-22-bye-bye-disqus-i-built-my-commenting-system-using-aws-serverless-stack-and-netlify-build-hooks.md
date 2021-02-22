---
title: "Bye-bye, Disqus! I built my commenting system using AWS serverless stack and Netlify build hooks!"
summary: "I have been using Disqus on this website since its inception. It worked, and it didn’t cost me a single penny, but it cost me, and most importantly, my visitors compromised privacy. I started looking into alternatives, and surprisingly there is not a lot of things worth recommending. Yes, you guessed it — I built my own one."
photo: "2021-02-22.jpg"
---

I've been using Disqus on this website since its inception. It worked and it didn't cost me a single penny, but it cost me and most importantly my visitors compromised privacy. Since [Zeta Global acquired the Disqus ](https://techcrunch.com/2017/12/05/zeta-global-acquires-commenting-service-disqus) in 2017, things became even worse. To top it off, it is also a performance killer.

I started looking into alternatives, and surprisingly there's not a lot of things worth recommending. [Commento](https://commento.io) and [Hyvor Talk](https://talk.hyvor.com) look great, but it costs more than Apple Music or Netflix subscription. I'm sure they are worth it but I couldn't justify paying this price to let someone leave a sentence or two under my posts.

I'm not that bad with HTML. I quite enjoy writing CSS, JavaScript pays my bills and I can find my way through a few AWS services. Yes, you guessed it — I built my own one.

## Privacy first

I don't want to show you ads, I don't care about your location and I don't care about your email address. The only thing I care about is a meaningful conversation under my articles. Kindly introduce yourself by filling the "Name" field (it doesn't have to be real) and participate in a conversation with others. If you fancy some nasty comments, please save you and me some time and go to Reddit instead.

## Performance

Disqus makes exactly 76 HTTP requests on load, and 11 of these resources are third-party trackers. It loads almost 2MB of data! To top it off, you have to wait around 10 seconds on average speed connection to get it all to display a commenting system with no comments whatsoever! Zero! Null! Nada!

For comparison, my website is ready after 300ms under the same network conditions using my current solution. The full functionality requires to download only 1kb of JavaScript. It's worth mentioning that this data is coming from an article that contains over 100 comments. The Lighthouse score isn't that bad neither.

![Lighthouse score of my individual page with more than 100 comments](/photos/2021-02-22-1.png)

## Freedom

Because I built it, I can do whatever the heck I want with it. I have full control over the functionality and the visual aspect of it. I can even do shit like this!

![A funny snippet of code](/photos/2021-02-22-2.jpg)

## My new commenting system tech stack

There are a few HTML lines on the front end, around 100 lines of custom-written CSS and about 1kb of vanilla JavaScript. On the backend side of things, I use [AWS Lambda](https://aws.amazon.com/lambda/) to put something on and read from [DynamoDB](https://aws.amazon.com/dynamodb/). I also build a little moderation tool that allows me to discard or approve new comment by clicking a link in an email. To send notification emails, I use [Amazon Simple Email Service](https://aws.amazon.com/ses/).

![My custom commenting system built with AWS - diagram](/photos/2021-02-22-3.png)

![My custom commenting system built with AWS - the notification email](/photos/2021-02-22-4.jpg)

![My custom commenting system built with AWS - diagram](/photos/2021-02-22-5.png)

Pro tip! You can send a `POST` request on link click by adding a [`ping` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-ping) to it. I learned that from [Sven, who tweeted about it](https://twitter.com/svenluijten/status/1363245229533507585) a few days ago. Excellent, isn’t it?

> A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs. Typically for tracking.

## Feedback please

I'm planning to open-source it and provide a detailed tutorial on how you can implement a commenting system like this on your own website. Before I am going to do so, I want this thing to be properly tested. I highly encourage you to try it out and leave me a comment below. As always, I am open to your feedback. For now, stay curious, build cool things and share with others 👋
