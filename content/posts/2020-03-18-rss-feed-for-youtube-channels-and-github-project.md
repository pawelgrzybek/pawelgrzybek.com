---
title: "RSS feed for youtube channels and GitHub project"
description: "Today a quick tip but a massive time saver in the long run. Let's stop being hooked on suggested youtube vides and watch only what we really care about."
photo: 2020-03-18.jpg
---

Today a quick tip but a massive time saver in the long run. I often check YouTube to watch a new video made by my favourite creator. Then, two more. Uuu, this review of the latest Bose headphones looks interesting. "What's in my bag" by Peter McKinnon — I must know what is inside his bag! "Why Casey Neistat Stopped Posting Videos" — how did I live my life without watching this one before. 

You know the drill. Let's stop it and watch only what we really care about. The pattern to get the RSS channel feed looks like this:

```
https://www.youtube.com/feeds/videos.xml?channel_id={{CHANNEL_ID}}
```

![Feedly and Reeder is my favourite RSS combo](/photos/2020-03-18-1.jpg)

Now add it to your RSS subscription service of choice and Bob's your uncle. Personally, I use the free version of [Feedly](http://feedly.com/). I heard just great things about [Feedbin](https://feedbin.com) too. My RSS client of choice is [Reeder by Silvio Rizzi](https://www.reederapp.com). If you are too stingy and don't want to support amazing independent developers you will like [NetNewsWire](https://ranchero.com/netnewswire/).

## Bonus tip — RSS for GitHub project releases / tags

For the geeky part of my audience, I have got something special. GitHub gives us RSS feeds for project releases too. Thats my preferred way of finding out about my followed projects fixed bugs and new features.

```
https://github.com/{{username}}/{{repository}}/releases.atom
```

```
https://github.com/{{username}}/{{repository}}/tags.atom
```

Stay productive 👋
