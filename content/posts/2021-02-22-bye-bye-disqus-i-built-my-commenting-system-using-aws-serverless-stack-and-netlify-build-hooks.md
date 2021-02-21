---
title: "Bye bye, Disqus! I built my commenting system using AWS serverless stack and Netlify build hooks!"
summary: ""
photo: "2021-02-22.jpg"
---

I have been using Disqus on this website since day one. It worked, and it didn’t cost me a single penny, but it cost me, and most importantly, my visitors compromised privacy. Since [Zeta Global acquired the Disqus ](https://techcrunch.com/2017/12/05/zeta-global-acquires-commenting-service-disqus) in 2017, things became even worst. To top it off, it is also a performance killer.

I started looking into alternatives, and surprisingly there is not a lot of things worth recommending. [Commento](https://commento.io) and [Hyvor Talk](https://talk.hyvor.com) look great, but it costs more than Apple Music or Netflix subscription. I am sure they are worth it, but I couldn’t justify paying this price to let someone leave a sentence or two under my posts.

I am not that bad with HTML. I quite enjoy writing CSS, JavaScript pays my bills, and I can find my way through some AWS services. Yes, you guessed it — I built my own one.

## Privacy first

I don’t want to show you ads, I don’t care about your location, and I don’t care about your email address. The only thing I care about is a meaningful conversation under my articles. Kindly introduce yourself by filling the “Name” field (it doesn’t have to be real) and participate in a conversation with others. If you fancy some nasty comments, please save yourself and me a time and go to Reddit instead.

## Performance

Disqus makes exactly 76 HTTP requests on load, and 11 of these resources are third-party trackers. It loads almost 2MB of data! To top it off, you have to wait around 10 seconds on average speed connection to get it all to display a commenting system with no comments whatsoever! Zero! Null! Nada!

For comparison, my website is ready after 300ms under the same network conditions using my current solution. The full functionality requires to download only 1kb of JavaScript. It is worth to mention that this data is coming from an article that contains over 100 comments. The Lighthouse score isn’t that bad neither.

![Lighthouse score of my individual page with more than 100 comments](/photos/2021-02-22-1.png)

## Freedom

Because I built it, I can do whatever the heck I want with it. I have full control of the functionality and visual aspect of it. I can even do shit like this!

!!! Some funny code snippet here !!!

## My new commenting system tech stack

There are literally a few HTML lines on the front end, around 100 lines of custom-written CSS and about 1kb of vanilla JavaScript. On the backend side of things, I use [AWS Lambda](https://aws.amazon.com/lambda/) to put something on and read from [DynamoDB](https://aws.amazon.com/dynamodb/). I also build a little moderation tool that allows me to discard or approve new comment by clicking a link in an email. To send notification emails, I use [Amazon Simple Email Service](https://aws.amazon.com/ses/).

![My custom commenting system built with AWS - diagram](/photos/2021-02-22-3.png)

![My custom commenting system built with AWS - notification email](/photos/2021-02-22-4.jpg)

![My custom commenting system built with AWS - diagram](/photos/2021-02-22-5.png)

## Feedback 

I plan to open-source it and provide a very detailed tutorial on how you can build a stack like this by yourself. Before I am going to do so, I want this thing to be properly tested. I highly encourage you to try it out and live ma comment below. As always, I am open to your feedback. For now, stay curious and build cool stuff 👋
