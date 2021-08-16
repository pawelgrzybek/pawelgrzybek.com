---
title: "My favourite Alfred workflows that I use all the time"
summary: ""
photo: "2021-08-17.jpg"
---

[Alfred](https://www.alfredapp.com) is my favourity poductivity app for macOS. You can use the basic set of features totally for free, but it shines only when you buy [the Powerpack](https://www.alfredapp.com/shop/). I use it literally hundreds times a day. From basic app lucher, through file browser, web seach, clipboard history to the more advanced [wokflows](https://www.alfredapp.com/workflows/).

During pair programming session with my coleagues, I often hear the question "how did you do XYZ?" and most often the answer is "Alfred". Today I would like to show you some of the most helpful custom workflows that I use all the time. Majority fo them are open-sourced available on my GitHub account. Enjoy!

## Div — windows manager

There is plenty of good windows managers for macOS but with a little bit of AppleScript you care create your own one, so I did. [Div](https://github.com/pawelgrzybek/div) is crazy powerful in its simplicity. It comes with few layouts predefined, but you can always add your own ones and attach them to your prefferable keybindings. ["Div — a simple Alfred window manager"](https://pawelgrzybek.com/div-simple-alfred-windows-manager/) goes more in depth about the features set and implementation details.

![Div Alfred workflow screenshot](/photos/2021-08-17-1.gif)

## GitHub Search

Using [GitHub Search workflow](https://github.com/pawelgrzybek/alfred-github-search) I am able to browse GitHub packages in no time. I can visit projects website by clicking <kbd>Return</kbd> or check issues and open pull request using modifiers key (<kbd>Cmd</kbd> and <kbd>Option</kbd>).

![GitHub Search Alfred workflow screenshot](/photos/2021-08-17-2.gif)

## MDN Search

Inspired by ["How MDN’s autocomplete search works"](https://hacks.mozilla.org/2021/08/mdns-autocomplete-search/) by [Peter Bengtsson](peterbe), I recently created [MDN Search workflow](https://github.com/pawelgrzybek/alfred-mdn-search). It is blazingly fast as it does not perform any external networks calls under the hood. The documentaion mapping is stored locally in the workflow.

![MDN Search Alfred workflow screenshot](/photos/2021-08-17-3.gif)

## npm Search

Same idea but to browse [npm registry](https://www.npmjs.com). Actually under the hook I use [Skypack API](https://www.skypack.dev/view/react) because it is faster and provides more information than the oficial registry index. I use [npm Search](https://github.com/pawelgrzybek/alfred-npm-search) all the time!

![npm Search Alfred workflow screenshot](/photos/2021-08-17-4.gif)

## SShot — change the screenshot format in no time

I am not sure if you know, but you can change the extension of a screenshot format on macOS. Instead of messing around with some hard to memorize Terminal commands, I created [SShot workflow](https://github.com/pawelgrzybek/alfred-sshot).

![SShot Alfred workflow screenshot](/photos/2021-08-17-5.gif)

## JSON parse/stringify

It is not uncommon to see stingified JSON objects all over the AWS logs that I have to work with all the time. Sure, I can go to browsers console and do a little bit of `copy(JSON.parse())` magic, but why should I if Alfred cound to it for me? Thats the one — [Alfred JSON workflow](https://github.com/pawelgrzybek/alfred-json).

![JSON Alfred workflow screenshot](/photos/2021-08-17-6.gif)

## Text manipulations
## Theme - toggle between ligh/dark mode
## CoinMarketCap — currencies converter
## Docs
