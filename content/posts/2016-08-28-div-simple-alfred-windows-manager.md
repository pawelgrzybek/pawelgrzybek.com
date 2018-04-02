---
title: Div — a simple Alfred window manager
description: I'm happy to present you Div — a simple Alfred window manager. Let me explain the full potential of this easy and powerful tool in this blog post.
photo: 2016-08-28.jpg
---

There are tons of window managers for Mac OS X around. Chris Coyier published a [nice comparison](https://css-tricks.com/os-x-window-manager-apps/) of the most popular ones some time ago. These apps are great utilities that can boost your productivity by eliminating the time that you normally spend adjusting the window positions on your sceen. I was using [Divvy by Mizage](http://mizage.com/divvy/) for a long time and it worked like a charm for me. Another app that I use non-stop is [Alfred](https://www.alfredapp.com/). It looks like the default Spotlight search feature but it is much more powerful than that. It allows you to create advanced search functionality, custom hotkeys, explore files, control apps, store snippets, use clipboard history and so on. The app in itself is a subject that deserves a separate article (expect one soon).

Being uber minimalistic in terms of my workflow I decided to create a windows manager for Alfred. Say hello to [Div](http://www.packal.org/workflow/div)! It is a simple [Applescript](https://developer.apple.com/library/mac/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) (which incidentally was great fun to learn) with many triggers attached to it. I even created a logo for it :)

![Div — simple Alfred windows manager logo](/photos/2016-08-28-1.jpg)

## How to use Div

As I mentioned previously — [Div](http://www.packal.org/workflow/div) is a simple script with many options to control it. You can [download it from Packal](http://www.packal.org/workflow/div) — a community driven repository of the best Alfred workflows. It comes with some predefined layout settings, but it's dead easy to add custom ones. It is written in Applescript — a very basic scripting language to do practical but also cool stuff on Apple computers.

### Enable access for assistive devices (required)

Applescript works nicely with the majority of Mac OS X applications. Unfortunately some of them are non-scriptable. The solution is not to control app's position but the window around it. We need to give Alfred access for assistive devices first. Just follow these easy steps:

1. Open System Preferences
2. Go to Security & Privacy
3. Go to Privacy tab
4. Go to the Accessibility on the left panel
5. Click the lock and type your password
6. Click small + icon and add Alfred from the list
7. Done :)

![Enable access for assistive devices on El Capitan](/photos/2016-08-28-2.gif)

### Predefined list of layouts

[Div](http://www.packal.org/workflow/div) comes with a predefined list of layouts. To use one simply type `div` and choose an option from the list.

![Predefined list of layouts in Div Alfred workflow](/photos/2016-08-28-3.gif)

### Using hotkeys

There are a few predefined hotkeys. It is probably the quickest and most efficient way to manage your layouts. That's how I use it mainly.

- `⌃ ⌥ 1` Full
- `⌃ ⌥ 2` Medium
- `⌃ ⌥ 3` Small
- `⌃ ⌥ ←` Left
- `⌃ ⌥ →` Right
- `⌃ ⌥ ↑` Top
- `⌃ ⌥ ↓` Bottom

![Using hotkeys in Div Alfred workflow](/photos/2016-08-28-4.gif)


### Custom arguments

Sometimes predefined settings are not enough. [Div](http://www.packal.org/workflow/div) knows how to deal with these situations. It allows you to pass custom arguments to create a custom position. It accepts two or four arguments.

#### Custom boundaries

Choose custom boundaries by passing 4 space-separated values. For example `div 20 20 80 80` will place the top left corner of an app 20% from the top and 20% from the left edge of the screen, and the bottom right corner 80% from the top and 80% from the left edge of the screen.

![Custom boundaries in Div Alfred workflow](/photos/2016-08-28-5.gif)

#### Custom size

Choose a custom size by passing 2 (space separated) values. For example `div 800 600` will resize your window to 800px wide and 600px high and place the window in the middle of the screen.

![Custom size in Div Alfred workflow](/photos/2016-08-28-6.gif)

## Thanks for using Div

Hopefully you will find [it](http://www.packal.org/workflow/div) useful. If you need something more advanced have a look at the amazing [Alfred 2 layout](http://www.packal.org/workflow/alfred2-layout) workflow by Bodo Junglas. As always, user feedback is welcome. Use the comments section below to share your love, opinions or report any bugs. If you would like to help me in the future development of [Div](http://www.packal.org/workflow/div) feel free to fork it on [Github](https://github.com/pawelgrzybek/div) and send a pull request. Enjoy :*
