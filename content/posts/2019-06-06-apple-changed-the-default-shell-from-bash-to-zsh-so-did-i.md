---
title: "Apple changed the default shell from bash to zsh, so did I"
summary: "Love it or hate it but since macOS Catalina the default shell language is zsh. I am very excited about this decision so let me share with you my favourite parts of the new command-line interpreter."
photo: 2019-06-06.jpg
---

Announced at [WWDC 2019 (Worldwide Developers Conference)](https://developer.apple.com/wwdc19/), [macOS Catalina](https://www.apple.com/macos/catalina-preview/) comes with a lot of changes but in all honesty, I didn't expect [switching the default shell to zsh (Z shell)](https://support.apple.com/en-ca/HT208050). Since OS X 10.2 Jaguar released in 2002 bash has been the primary operating system shell, so why all the sudden this change? Long story short — licensing.

![Bash in version 3.2.57 on macOS Mojave](/photos/2019-06-06-1.jpg)

Newer versions of Bash are licensed under the GPLv3 (GNU General Public License version 3) which says you can't use it on a system that blocks 3rd party software installation. That's the reason why macOS stuck with 3.2.57 version released under GPLv2 which dates back to 2007. Licensed under the MIT License [Z shell](http://zsh.sourceforge.net) allows Apple to ship regular updates to this command language and keep a great level of compatibility with Bash.

Because this is the future of my operating system, I spent some time to explore a new shell. Let me share with you how to do it and point out some things that I like the most about the new default shell language.

## Change your default shell

Fresh installation of [macOS Catalina](https://www.apple.com/macos/catalina/) will default to Z shell but an update from the previous version of Apple OS will persist your preference. It is very simple to update this setting though. You have a few options to do so: `chsh` CLI tool, Users & Groups panel of System Preferences or Directory Utility built-in app.

```
chsh -s /bin/zsh
```

![Change the default login shell on macOS](/photos/2019-06-06-2.jpg)

## Cool things about zsh

While zsh is mostly feature-compatible with bash there are some minor differences between them. On top of that modern Z shell comes with a lot of useful user experience improvements. Let me share a few of my favourite bits.

### Flexibility and open-source resources

Z shell comes with tons of [options](http://zsh.sourceforge.net/Doc/Release/Options.html#Options) that allow you to make your prompt really yours. If you are not a big fan of crafting config files manually, there is several popular open-source tools that help you manage your Zsh configuration. Bundled with hundreds of helpers, plugins and themes [Oh My ZSH](https://ohmyz.sh/) is by far the most popular one.

![Several great zsh frameworks](/photos/2019-06-06-3.jpg)

### Supercharged auto-completion

Not only can you skip `cd` to change your current working directory but you can type a path in an extremely lazy way and press then <kbd>tab</kbd>. No need for `cd Sites/projectname/src` anymore because `s/p/s` is more than enough. This feature is enabled by default on Oh My ZSH framework but you can control it manually using [`AUTO_CD`](http://zsh.sourceforge.net/Doc/Release/Options.html#Description-of-Options-1) option. Look!

![Supercharged auto-completion with zsh](/photos/2019-06-06-4.jpg)

This feature is mind-bending. To explore current location just press <kbd>tab</kbd> twice to traverse through inner folders using arrow keys. This feature is part of Oh My ZSH.

![Supercharged auto-completion with zsh](/photos/2019-06-06-5.gif)

### Discover a commands options / flags

There is no need to check the man page of a particular command to find a flag that you want to pass. Just type command name - and press tab to discover all possible options and flags.

![Supercharged auto-completion with zsh](/photos/2019-06-06-6.jpg)

### It is the default on macOS

Since macOS Catalina it's the default one, so you don't have to do anything to use it. It is fantastic, isn't it?

## What do you think about zsh?

What is your take about Apples recent decision? Do you use zsh or bash? What are your favourite features? Let me know in the comments below. Until next time, happy coding!

