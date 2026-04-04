---
title: "My read/watch/listen later workflow"
summary: "After many years of fighting with the sync issues of Safari Reading List, I re-designed my workflow of storing links for later. What I came up with is a lot more flexible and usable."
---

Two years ago I published ["Apple, please fix the Safari Reading List"](https://pawelgrzybek.com/apple-please-fix-the-safari-reading-list/) which suggests some improvements and highlights one critical bug that Apple should fix to make Safari Reading List usable. Having a robust system to keep things for later is crucial for my workflow. Unfortunately, nothing changed since then and it is still broken as it was years ago.

This morning I received a very kind email from Cal, who asked me about my current solution for keeping links for later. Great reminder about the fact that I never published a post about it. Thanks Cal! Some time ago I nerd sniped my good friend [Olivier Ash](https://oliverjash.me/) who struggled with a similar problem and we designed a solution that we both use to this day.

## From Safari Reading List to Apple Reminders

The sync mechanism behind the Safari Reading List is broken, but the one in Reminders is very good. I use the Reminders app heavily for a bunch of other things anyway, so why not use it as a reading list aggregator.

Since Apple Reminders has folders, we used this opportunity for better organisation instead of throwing everything into the same bucket. I consume long-form articles, videos and music/podcasts totally differently. I don't want to listen to a podcast when I'm on the toilet, or read long technical deep dives when I tidy up the house. Splitting them into multiple categories makes perfect sense and with the combination of Apple Shortcuts it is super easy.

{{< figure src="1.jpg" alt="Two screenshots side by side, one from iOS Safari and another from the Apple Reminders app on iOS. The first one presents the read/watch/listen later action on the share sheet, and the second one shows the Reminders directories where the output of the actions lands." caption="Three shortcuts added to the share sheet correspond to the three directories in the Apple Reminders app: Read Later, Watch Later and Listen Later. Also, I'm not sure if giving up on a big monitor can improve your productivity. I haven't read that yet. I will read it later :-)" >}}

Since it uses Shortcuts to capture links, it works across all the apps that expose URL on the entity. I use these actions with my RSS reader, Reddit app, podcast player, Mastodon client and plenty of others. It works just fine on iOS, iPadOS and macOS (with a small caveat). Let me walk you through one of these shortcuts.

1. Receive the input of type URL from the Share Sheet
2. Get the title from the input URL > Title
3. Get the URL from the input URL > URL on iOS/iPadOS and from the most foremost tab on Safari on macOS
4. Add a new Reminders item using the title and URL in the desired folder

{{< figure src="2.jpg" alt="A screenshot from the macOS Shortcuts app that presents the flow of my \"Real Later\" shortcut" caption="This is an example of the \"Read Later\" workflow, but all the others are the same except for the Reminders destination folder. It is important to select the \"Show in Spotlight\" option, because it is handy to trigger it from the Spotlight/Raycast level." >}}

- [Download my "Read Later" shortcut](https://www.icloud.com/shortcuts/94c5fac8ff584eb991f793a89fbe1a29)
- [Download my "Watch Later" shortcut](https://www.icloud.com/shortcuts/03c667936c14479d95eacc351b9fb77f)
- [Download my "Listen Later" shortcut](https://www.icloud.com/shortcuts/0570f0644c1445d4b6a2251e1b57b9cb)

## A few notes on this solution

- It only works if you use Safari as your main browser. If you use something else, you will need to use AppleScript to get the URL and the title of the link
- To be able to import and use my shortcuts, you need to pre-create "Read Latet", "Watch Later" and "Listen Later" folders

I hope that helps. Thanks again Cal for the inspiration to write this article.
