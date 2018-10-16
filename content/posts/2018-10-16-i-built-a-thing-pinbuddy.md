---
title: I built a thing! PinBuddy!
description: PinBuddy is a Google Chrome toolbar extension for the Pinboard bookmarking service that lets you browse and add new bookmarks with ease. It is fully keyboard accessible and highlights previously bookmarked websites. It uses API tokens for server communications and never asks for your authentication credentials hence secure.
photo: 2018-10-16.jpg
draft: true
---

The internet is full of useful things that are worth revisiting in the future. Bookmarking them all in a browser built-in feature is an option but it quickly becomes unmanageable after a while. A myriad of bookmarking services have been born to solve this issue and my favourite amongst them is [Pinboard](http://pinboard.in) built by Maciej Cegłowski. Maybe it isn't the prettiest website around neither is the API the cleanest and most intuitive but it definitely comes with one big advantage — it works.

> There is absolutely nothing interesting about the Pinboard architecture or implementation; I consider that a feature!

After a few years of working with Pinboard, my collection has grown a lot, getting bigger day by day while I visit resources I don't want to lose. Adding new and browsing existing internet resources is what bookmarking services should do effectively — unfortunately, I identified some Pinboard issues regarding user interface usability. There are few browser plugins that make your life easier but they all seemed to steer away from solving these issues.

I had a few technologies I wanted to play with and I knew a little bit of HTML, CSS, and JavaScript too — which is all you need to build a browser extension. So I built…

## PinBuddy — Browse your Pinboard bookmarks and add new ones with ease

[PinBuddy](https://chrome.google.com/webstore/detail/pinbuddy/ppokjacfheflhaojmndcblibahmopkfl) is a simple Google Chrome toolbar extension that helps me to browse, filter and add new URLs to the service in no time. It is fully keyboard accessible, configurable and comes with a plain design well-known from Pinboard website. Let me go through a few aspects of this tool in more details.

### API token to authenticate

PinBuddy never asks you for your personal authentication credentials — it uses a dedicated API token to authenticate that you are you. You can find your personal token on the [setting page under the password tab](https://pinboard.in/settings/password). This short identifier can be invalidated and regenerated on user request at any time.

![PinBuddy uses API token to authenticate](/photos/2018-10-16-1.jpg)

### Configurable

Options page allows you to log out and configure a few very useful settings that may boost your productivity. Decide whether the "browsing" or "adding a new bookmark" should be your main screen, whether "private" or "read later" should be checked by default when you add a new resource or toggle system notifications for successfully saved or deleted links.

![PinBuddy options page](/photos/2018-10-16-2.jpg)

### Keyboard accessible

I am a keyboard shortcut geek and I use them all the time. Luckily PinBoard allows you to browse and add new URLs without ever leaving your keyboard.

- `⌥ + p` - show / hide PinBuddy
- `⌥ + 1` - go to all view
- `⌥ + 2` - go to add view
- `⌘ + Enter` / `Ctrl + Enter` - add bookmark (add view)
- `⌘ + Enter` / `Ctrl + Enter` - open bookmark in background (all view)
- `⌘ + Backspace` / `Ctrl + Backspace` - delete bookmark (all view)


![PinBuddy is keyboard accessible](/photos/2018-10-16-3.gif)

### Browsing bookmarks

Search for a keyword in title, filter private, public, untagged or unread. Delete or open in a background via single clicks — you can do it.

![Browse Pinboard bookmarks with PinBuddy](/photos/2018-10-16-4.jpg)

### Adding bookmarks

Adding a page could not be easier. The title is prefilled based on the website's `<title/>` tag which normally works for me but feel free to edit it — it is just a helpful feature of PinBuddy. The long description is optional and can be fetched based on user cursor selection. Handy, isn't it? Tags are probably the field you will edit the most.  Hit the "add bookmark" button or simply `⌘ + Enter` / `Ctrl + Enter`  when you are ready to add it to your collection.

![Add Pinboard bookmark with PinBuddy](/photos/2018-10-16-5.jpg)

### Highlight already bookmarked URLs

In a maze of resources on the internet, it is easy to add something that is already in your collection. PinBuddy helps you with that by highlighting an icon and prefilling form inputs with details that you previously used to identify this URL

![PinBuddy helps to identify already saved bookmarks](/photos/2018-10-16-6.jpg)

## Help me to improve PinBuddy, please

PinBuddy is an ongoing project and I am planning to add new features based on users requests. I already received a support of multiple people that I would love to thank you for so much.

- Thanks to [Miłosz Kaniuk](https://www.behance.net/miloszkanibf79) for great logo and UI / UX recommendations
- Thanks to [Gregory Assasie](https://twitter.com/gregory_jarvez) for dev tips
- Thanks to [Zuzanna Rupińska](https://www.instagram.com/zuzanna.rupinska/) for brewing a coffee for me during development:-*
- Potentially you…

For the time being, English and Polish are the only languages supported by PinBuddy. Luckily adding new translations is easy — your merge requests will be appreciated. All user suggestions, bug reports, and feature requests are more than welcome. Hit me up on [Twitter](https://twitter.com/pawelgrzybek) or open an issue on [PinBuddy GitHub repository](https://github.com/pawelgrzybek/PinBuddy).

[Download PinBuddy from Chrome Web Store](https://chrome.google.com/webstore/detail/pinbuddy/ppokjacfheflhaojmndcblibahmopkfl) today and let me know what you think. Enjoy!
