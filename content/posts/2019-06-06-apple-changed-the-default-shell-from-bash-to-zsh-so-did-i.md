---
title: "Apple changed the default shell from bash to zsh, so did I"
description: "Love it or hate it but since macOS Catalina the default shell language is zsh. Personally I am very excited about this decision so let me share with you my favorite parts of the new command-line interpreter."
photo: 2019-06-06.jpg
draft: true
---

Announced at [WWDC 2019 (Worldwide Developers Conference)](https://developer.apple.com/wwdc19/), [macOS Catalina](https://www.apple.com/macos/catalina-preview/) comes with a lot of changes but in all honesty I didn't expect [switching the default shell to zsh (Z shell)](https://support.apple.com/en-ca/HT208050). Since OS X 10.2 Jaguar released in 2002 bash has been the primary operating system shell, so why all the sudden this change? Long story short — licensing.

![Bash in version 3.2.57 on macOS Mojave](/photos/2019-06-06-1.jpg)

Newer versions of Bash are licensed under the GPLv3 (GNU General Public License version 3) that comes with some restrictions that prevent Apple from adopting the most recent version of this command language. Thats the reason why macOS stuck with the last version released under GPLv2 which is 3.2.57 which dates back to 2007. Licensed under the MIT License Z shell allows Apple to ship regular updates to this command language and keep a great level of compatibility with Bash.

Because this is the future of my operating system, I decided to make the switch right now. Let me share with you how to do it and point out some things that I like the most about the new default shell language.

## Change your default shell to zsh

It may be a surprise to you but your Apple computer already comes with zsh, it is just not enabled by default. You can switch it using a GUI by going to Preferences > Users & Groups and changing it in the Advanced options which is accessible by right-clicking on your user icon. You can do it using the command line too.

```
chsh -s /bin/zsh
```

![Change the default login shell on macOS](/photos/2019-06-06-2.jpg)

## Cool things about zsh

While zsh is mostly feature compatible with bash there are some minor differences between them and a lot of advantages of using modern Z shell.

### Supercharged auto-completion

Not only can you skip `cd` to change your current working directory but you can type a path in an extremely lazy way and press then tab. No need for `cd Sites/projectname/src` anymore because `s/p/s` is more than enough. Look!

![Supercharged auto-completion with zsh](/photos/2019-06-06-3.jpg)

### Discover a commands options / flags

There is no need to check the `man` page of a particular command to find a flag that you want to pass. Just type `commandname -` and press tab to discover all possible options and flags.

![Discover a commands options / flags](/photos/2019-06-06-4.jpg)

### Plugins and themes support

There is a number of popular open source tools that help you manage your Zsh configuration, but [Oh My ZSH](https://ohmyz.sh/) is by far the most popular one. Bundled with hundreds of helpers, plugins and themes which make it a breeze to drop in new functionality or change the look of your prompt.

![A number of great zsh frameworks](/photos/2019-06-06-5.jpg)

### It is the default on macOS

Since macOS Catalina it's the default one, so you don't have to do anything to use it. It is fantastic, isn't it?

## What do you think about zsh?

What is your take about Apples recent decision? Do you use zsh or bash? What are your favorite features? Let me know in the comments below. Until next time, happy coding!
