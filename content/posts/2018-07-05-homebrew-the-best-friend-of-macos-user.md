---
title: "Homebrew — the best friend of macOS user"
description: ""
photo: 2018-07-05.jpg
draft: true
---

You are planing to learn some new technology — [Node.js](https://nodejs.org/en/) for example — so you need to download it first. You visit a projects website, you download an installer, go through the procedure. Next, next, next, done. You may need some database at some point — [MongoDB](https://www.mongodb.com/) works really well with it. Again — visit a projects website, download an installer… You know what?! [Visual Studio Code](https://code.visualstudio.com/) is hot. Again — visit a projects website, download an installer…

![Search, install, remove macOS apps via Homebrew](/photos/2018-07-05-1.jpg)

As a software developer you are going to do a lot of this monotonous tasks: installing and removing software, switching versions of dependency, searching and trying new tools. There must be a better way than doing all these things manually! Good news — there is one. [Homebrew](https://brew.sh/), the missing package manager for macOS.

```
brew install node mongodb && brew cask install visual-studio-code
```

## Package managers

Concept of command line tools to manage packages isn't new. Probably the `apt-get` from Ubuntu systems is the most widely used one. [Scoop](https://scoop.sh/) and [Chocolatey](https://chocolatey.org/) are equivalents for Windows users. As a macOS user [Homebrew](https://brew.sh/) is the one that I will guide you through, but I am sure that you can follow along and find equivalent commands for your operating system of choice.

Programming languages have their own ecosystems and their own package managers to manage project components. Mentioned above [npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/) are often used by JavaScript developers, [Composer](https://getcomposer.org/) makes life of PHP developers much easier and [Pip](https://pypi.org/project/pip/) is the best friend of Python developers. This ["Comparison of Programming Language Package Managers"](https://news.ycombinator.com/item?id=12187888) HN thread is the place to go to find out more about them.

On the end of the day all package managers do the same job — make your life easier and boost your productivity by removing tedious tasks from your workflow.

## Prerequisites

Familiarity with command line would be cool. You don't need to be a Terminal ninja with the most complex `.vimconfig` file on a whole GitHub. As long as you know what `ls`, `cd` and `pwd` are, you are ready to go. If not, go and grab a copy of ["Working the Command Line" by Remy Sharp](https://remysharp.com/2016/12/09/working-the-command-line) and come back later on.

## Brew and its most popular commands

[Homebrew documentation](https://brew.sh/) doesn't do a great job explaining its capacity to novice users. I resisted to use it for years because I didn't understand the geeky terminology. I will do my best to help you to:

- search for stuff
- install / uninstall stuff
- install / uninstall macOS app
- upgrade package / macOS app

Before doing so, we need one thing. We need `brew`.

### Install Brew

I recently joined a new company, where I got a new MacBook ready to set up. Intuitively I tried to install `brew` via `brew` — thats how using it is welded to my muscle memory. Of course this command didn't work so I had to visit a [Homebrew installation guide](https://brew.sh/#install) to copy one-liner and paste it into my command line. I `brew`ed the rest afterwards.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Search for stuff via Homebrew

You can find tons of things on Homebrew! The default [homebrew-core repository](https://github.com/Homebrew/homebrew-core/tree/master/Formula) contains thousands of formulas and new ones are added on daily basis. Formula is just a  fancy name to call a little Ruby script that contains enough of information to download a package to your machine. To look for package of interest you can manually browse repository (never do it like that), use [online Brew Search](http://searchbrew.com/) or use a command line. The [`cowsay`](https://en.wikipedia.org/wiki/Cowsay) is the most useless piece of software ever — thats why I love it and use it as an example.

![Search packages via Homebrew](/photos/2018-07-05-2.jpg)

```
brew search cowsay
```

By default Homebrew uses a list of formulas included in [homebrew-core repository](https://github.com/Homebrew/homebrew-core/tree/master/Formula), but you may face a situation when it is not enough. By adding [taps (third-party repositories)](https://docs.brew.sh/Taps) you can extend a list of packages available to `brew`.

### Install / uninstall stuff via Homebrew

The most frequently used commands — `install` and `uninstall`. Let's use a `cowsay` package as an example.

```
brew install cowsay
```

![Cowsay in action](/photos/2018-07-05-3.jpg)

```
brew uninstall cowsay
```

### Install / remove macOS app via Homebrew

Homebrew in version 0.9.5 comes with something called `brew cask`. It allows you to install macOS applications, fonts and drivers. You can browse all available casks on the [homebrew-cask repo](https://github.com/Homebrew/homebrew-cask/tree/master/Casks) or search it via command line. For example `brew cask search firefox`. To install it you follow the same procedure as installing a regular package.

```
brew cask install firefox
```

![Install Firefox via command line](/photos/2018-07-05-3.jpg)

```
brew cask uninstall firefox
```

### Upgrade package / macOS app via Homebrew

Of course we want the latest, the greatest software on our machines. It cannot be easier to update our packages to the latest version — `brew upgrade` is all that we need. Similarly to bump the version of graphical apps we can use `brew cask upgrade`. Follow these commands by the name of a formula if you wan't to individually upgrade a package.

![Update node via Homebrew](/photos/2018-07-05-3.jpg)

## Brew all the thing

Hopefully this article helped you out and demystifies a bit the power that Homebrew comes with. I helped you to explore very basic commands, but please don't stop here and look for some more sophisticated use cases in [official documentation](https://docs.brew.sh/). I use it extensively on my daily routine but also to install [my favorite software](https://github.com/pawelgrzybek/dotfiles/blob/master/setup-brew.sh) every time when I jump on a new machine. Thanks for reading and have a great day y'all!
