---
title: "Remove ads from your Twitter timeline with a few lines of CSS"
summary: 'Twitter timeline is full of ads, and the "What''s happening" section is nothing else, just crap that I don''t care about. The trick is simple — you must add a few lines of CSS to hide the unneeded stuff.'
photo: "2022-08-13.jpg"
---

Twitter timeline is full of ads, and the "What's happening" section is nothing else, just crap that I don't care about. That is the main reason why I use TweetDeck instead.

Inspired by [Šime's "How I Added Scroll Snapping To My Twitter Timeline"](https://css-tricks.com/how-i-added-scroll-snapping-to-my-twitter-timeline/), I decided to clean up my Twitter timeline, removing all the promoted tweets and this rubbish on the sidebar. Have a look at the before and after!

![Twitter timeline before and after adding custom CSS](/photos/2022-08-13-1.png)

The trick is simple — you must add a few lines of CSS to hide the unneeded stuff. Then, using Safari, you can pick a custom stylesheet in Preference's Advanced tab. [Stylus extension](https://add0n.com/stylus.html) is the way to go for Chrome and Firefox users.

![Advanced Settings in Safari allow you to specify a custom stylesheet](/photos/2022-08-13-2.png)

These few lines of code are all I added to my custom stylesheet. Of course, it is not perfect and will break if Twiter changes the markup, but it does the job now. I have no more promoted tweets, politics, or football news on my timeline.

```css
/* hide promoted tweets */
:has(meta[property="og:site_name"][content="Twitter"])
  [data-testid="cellInnerDiv"]:has(svg + [dir="auto"]) {
  display: none;
}

/* hide what's happening section */
:has(meta[property="og:site_name"][content="Twitter"])
  [aria-labelledby="accessible-list-0"] {
  display: none !important;
}
```

Hopefully, that helps. Bye 👋
