---
title: Change macOS user preferences via command line
description: The system preferences window is not the only way to change user preferences in macOS. The "defaults" command gives you more power to configure your machine than you would have thought.
photo: 2017-12-18.jpg
---

The System Preferences window is not the only way to adjust user settings. Macs come with a [`defaults`](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/defaults.1.html) command line interface that lets you read, write, and delete macOS user defaults. You may have even used it before — revealing hidden files in Finder is a popular snippet (hot tip: `⌘` + `⇧` + `.` is quicker).

```
defaults write com.apple.finder AppleShowAllFiles -string YES
```

Let's take it apart to get familiar with the terminology used throughout this article:

- `defaults` - interface
- `write` - method
- `comapple.finder` - domain
- `AppleShowAllFiles` - key
- `-string` - type descriptor
- `YES` - new value

You may be scratching your head asking yourself — why the hell would I prefer to do it through the command line instead of using a nice looking GUI (graphical user interface) to change things? Two reasons! A command line way gives you access to things that you cannot change via graphical panels (toggling hidden files is a perfect example). The next one is even better — do you remember last time when you had to set up a new computer from scratch? Change the settings, add a desktop background, disable the screen saver, download your favourite software etc. How long do you spend on these tasks? Two hours? Four? Ten? I spent about five minutes. Boom!

## Write, read and delete defaults settings

The [`defaults`](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/defaults.1.html) interface isn't complicated to use and comes equipped with just a few methods:

- `read` - prints current user settings
- `read-type` - prints the type of given key
- `write` - writes new settings
- `delete` - deletes a key or a full domain
- `domains` - prints the full list of domains
- `find` - searches all domain and keys for a given name
- `help` - I'm sure you know what this does

## Domains — system components and installed apps

Printing all the domains via `defaults domains` is a very helpful way to check what actually can be changed. Domains are objects that contain settings for a particular system component, installed application or a configuration `.plist` file located in `/Library/Preferences/`.

```
defaults domains
```

```
...com.apple.ActivityMonitor, com.apple.AddressBook, com.apple.Console, com.apple.DiskUtility, com.apple.FontBook, com.apple.Image_Capture, com.apple.Maps, com.apple.Messages, com.apple.Notes...
```

### Making the output of domains a little bit cleaner

If you (like me) are not a big fan of the comma separated output of `defaults domains`, you can pipe it through a translate command to make the output much easier to read.

```
defaults domains | tr ',' '\n'
```

```
...
com.apple.ActivityMonitor
com.apple.AddressBook
com.apple.Console
com.apple.DiskUtility
com.apple.FontBook
com.apple.Image_Capture
com.apple.Maps
com.apple.Messages
com.apple.Notes
...
```

## A basic workflow to amend user defaults

The idea is to traverse through any domains that we would like to change and compose a command that overrides the current setting. Let's say we would like to find the command to change spell checking inside the Notes app. The workflow would look something like this:

1. Print the settings for the notes app to find the right key.
3. Check the value type for a given key.
4. Write new settings.

```
defaults read com.apple.Notes
```

```
defaults read-type com.apple.Notes NotesContinuousSpellCheckingEnabled
```

```
defaults write com.apple.Notes NotesContinuousSpellCheckingEnabled -bool true
```

As you can see it is not that complicated. Bear in mind that some changes require you to restart an app or, occasionally, a full reboot of the operating system. A good idea is to close an app before changing any of its settings via the command line.

## The way to find the domain & key responsible for a setting

Browsing through the output of a `defaults read` command or browsing uncle Google for the correct domain and key can be a daunting task. Luckily you can easily find it out by yourself. Good old `diff` to the rescue!

1. Save a state before a change.
2. Make a change through GUI.
3. Save a state after a change.
4. Find the difference.

```
defaults read > before
```

```
defaults read > after
```

```shell
diff before after
```

Reading output of the default `diff` command isn't exactly enjoyable so feel free to use any other diff tool. Time for a hot tip now! Visual Studio Code, apart from being really cool code editor, is a fantastic diff tool. Just have a look!

```
code --diff before after
```

![Visual Studio Code as a diff tool](/photos/2017-12-18-1.jpg)

## My defaults tweaks

I actively maintain a list of settings that I change on my machine and you can find it on [my dotfiles repository](https://github.com/pawelgrzybek/dotfiles/blob/master/setup-macos.sh) on Github. It isn't too complex so if you are looking for a real ninja-level defaults tweaks example look at [Mathias Bynens one](https://github.com/mathiasbynens/dotfiles/blob/master/.macos).

Hopefully this article helped you to embrace the power of the defaults command. Share in the comments below your favourite defaults tweaks and stay tuned as more tutorial articles like this one are coming soon. Until next time.
