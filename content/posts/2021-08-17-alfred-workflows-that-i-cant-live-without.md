---
title: "Alfred workflows that I can't live without"
summary: "Alfred is my favourite productivity app for macOS. You can use the basic features for free, but it shines the most with the Powerpack. I use it literally hundreds of times a day. The basic app launcher, file browser, web search, clipboard history, and more advanced workflows. There are my favourite ones!"
photo: "2021-08-17.jpg"
---

[Alfred](https://www.alfredapp.com) is my favourite productivity app for macOS. You can use the basic features for free, but it shines the most with [the Powerpack](https://www.alfredapp.com/shop/). I use it literally hundreds of times a day. The basic app launcher, file browser, web search, clipboard history, and more advanced [workflows](https://www.alfredapp.com/workflows/).

During pair programming sessions with my colleagues, I often hear the question “how did you do XYZ?” and most often, the answer is “Alfred”. So today, I would like to show you some of the most helpful custom workflows that I use all the time. Enjoy!

- [Div — windows manager](#div--windows-manager)
- [GitHub Search](#github-search)
- [MDN Search](#mdn-search)
- [npm Search](#npm-search)
- [SShot — change the screenshot format in no time](#sshot--change-the-screenshot-format-in-no-time)
- [JSON parse/stringify](#json-parsestringify)
- [Text manipulations](#text-manipulations)
- [Theme - toggle between ligh/dark mode](#theme---toggle-between-lightdark-mode)
- [CoinMarketCap — currencies converter](#coinmarketcap--currencies-converter)
- [Docs](#docs)

## Div — windows manager

There is plenty of good windows managers for macOS, but with a little bit of AppleScript, you can create your own one, so I did. [Div](https://github.com/pawelgrzybek/div) is crazy powerful in its simplicity. It comes with few layouts predefined, but you can always add your own presets and attach them to your preferable keybindings. ["Div — a simple Alfred window manager"](https://pawelgrzybek.com/div-simple-alfred-windows-manager/)  goes more in-depth about the feature set and implementation details.

![Div Alfred workflow screenshot](/photos/2021-08-17-1.gif)

## GitHub Search

Using [GitHub Search workflow](https://github.com/pawelgrzybek/alfred-github-search), I can browse GitHub repositories in no time. The <kbd>Return</kbd> click redirects to the project's website, but alternatively, you can go straight to open issues and pull requests by holding the modifiers key (<kbd>Cmd</kbd> and <kbd>Option</kbd>).

![GitHub Search Alfred workflow screenshot](/photos/2021-08-17-2.gif)

## MDN Search

Inspired by ["How MDN’s autocomplete search works"](https://hacks.mozilla.org/2021/08/mdns-autocomplete-search/) by [Peter Bengtsson](https://twitter.com/peterbe), I recently created [MDN Search workflow](https://github.com/pawelgrzybek/alfred-mdn-search). It is blazingly fast as it does not perform any external network calls under the hood. The documentation mapping is stored locally in the workflow.

![MDN Search Alfred workflow screenshot](/photos/2021-08-17-3.gif)

## npm Search

Same idea but for [npm](https://github.com/pawelgrzybek/alfred-npm-search). Under the hood, this workflow uses [Skypack API](https://www.skypack.dev/view/react) because it is faster and provides more valuable info (TypeScript support, for example).

![npm Search Alfred workflow screenshot](/photos/2021-08-17-4.gif)

## SShot — change the screenshot format in no time

Changing the screenshot format on macOS requires some Terminal commands that I used to google all the time. So, I created [SShot workflow](https://github.com/pawelgrzybek/alfred-sshot) to perform this action using a single ssAlfred command.

![SShot Alfred workflow screenshot](/photos/2021-08-17-5.gif)

## JSON parse/stringify

Browsing tons of logs every day, it is common to come across some stringified piece of JSON data. Sure, I can go to the browser's console and do a bit of `copy(JSON.parse())` magic, but I created [Alfred JSON workflow](https://github.com/pawelgrzybek/alfred-json) workflow to speed this process up.

![JSON Alfred workflow screenshot](/photos/2021-08-17-6.gif)

## Text manipulations

This one is super simple, but I use it all the time. If you fancy adding some other text manipulations to the [Text manipulation workflow](https://github.com/pawelgrzybek/alfred-text-manipulation), I am open to suggestions. Pull requests are always welcome.

![Text manipulations workflow screenshot](/photos/2021-08-17-7.gif)

## Theme - toggle between light/dark mode

Switch between system appearance mode using `theme` keyword or alternatively using <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>D</kbd> hotkey.

![Theme workflow screenshot](/photos/2021-08-17-8.gif)

## CoinMarketCap — currencies converter

From time to time, I need to convert some cryptocurrencies to regular fiat, and most of the time, I use [CoinMarketCap](https://coinmarketcap.com/) for that. So, I built [CoinMarketCap Alfred workflow](https://github.com/pawelgrzybek/alfred-cointmarketcap) to do it without ever opening a web browser. I shared more details about this workflow in ["I built a thing - an Alfred workflow for CoinMarketCap conversions"](https://pawelgrzybek.com/i-built-a-thing-an-alfred-workflow-for-coinmarketcap-conversions/) post.

![CoinMarketCap Alfred workflow screenshot](/photos/2021-08-17-9.gif)
## Docs

This one is a dead simple one, but I use it all the time! [Docs workflow](https://github.com/pawelgrzybek/alfred-docs) redirects you to docs of your favourite projects with few keystrokes.

![Docs Alfred workflow screenshot](/photos/2021-08-17-10.gif)
