---
title: "Homebrew — the best friend of the macOS user"
summary: "As a curious human being you are probably doing a lot of monotonous tasks: installing and removing software, switching versions of dependencies and searching for new tools. Make your life easier with Homebrew."
---

So you are planning on learning something new — [Node.js](https://nodejs.org/en/) for example — and you need to download it first. You visit the project's website, download an installer, go through the installation process. Next, next, next, done. You may need some kind of database at some point — [MongoDB](https://www.mongodb.com/) works really well with it. Again — visit the project's website, download an installer… You know what?! [Visual Studio Code](https://code.visualstudio.com/) is hot. Again — visit the project's website, download an installer…

![Search, install, remove macOS apps via Homebrew](2018-07-05-1.jpg)

As a curious human being you are probably going to do a lot of these monotonous tasks: installing and removing software, switching versions of dependencies, searching and trying new tools. There must be a better way than doing all these things manually! Good news — there is. [Homebrew](https://brew.sh/), the missing package manager for macOS.

```
brew install node mongodb && brew cask install visual-studio-code
```

## Package managers

The concept of using command line tools to manage packages isn't new. `apt-get` from Ubuntu systems is probably the most widely used one. [Scoop](https://scoop.sh/) and [Chocolatey](https://chocolatey.org/) are the equivalents for Windows users. As a macOS user [Homebrew](https://brew.sh/) is the one that I will guide you through, but I am sure that you can follow along and find the equivalent commands for your operating system of choice.

Programming languages have their own ecosystems and their own package managers to manage project components. For example, [npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/) are commonly used by JavaScript developers, [Composer](https://getcomposer.org/) makes the life of PHP developers much easier and [Pip](https://pypi.org/project/pip/) is the best friend of Python developers. This ["Comparison of Programming Language Package Managers"](https://news.ycombinator.com/item?id=12187888) HN thread is the place to go to find out more about them.

At the end of the day all package managers do the same job — make your life easier and boost your productivity by removing tedious tasks from your workflow.

## Prerequisites

Familiarity with the basics of the command line would be cool. You don't need to be a Terminal ninja with the most complex `.vimconfig` file on the whole of GitHub. As long as you know what `ls`, `cd` and `pwd` are, you are ready to go. If not, go and grab a copy of ["Working the Command Line" by Remy Sharp](https://remysharp.com/2016/12/09/working-the-command-line) and come back later on.

## Brew and its most popular commands

The [Homebrew documentation](https://brew.sh/) doesn't do a great job of explaining its capacity to novice users. I resisted using it for years because I didn't understand the geeky terminology. I will do my best to help you to:

- search for stuff
- install / uninstall stuff
- install / uninstall macOS app
- upgrade package / macOS app

Before doing so, we need one thing. We need `brew`.

### Install Brew

I recently joined a [new company](https://mindera.com/), where I got a new MacBook. Intuitively I tried to install `brew` via `brew` — this is how using it is now melded to my muscle memory. Of course this command didn't work so I had to visit the [Homebrew installation guide](https://brew.sh/#install) to copy a one-liner and paste it into my Terminal. I `brew`ed the rest afterwards.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Search for stuff via Homebrew

You can find tons of things on Homebrew! The default [homebrew-core repository](https://github.com/Homebrew/homebrew-core/tree/master/Formula) contains thousands of formulas and new ones are added everyday. A formula is just a fancy name for a little Ruby script that contains enough of information to download a package on to your machine. To look for a package of interest you can manually browse the repository (never do it like that), use the [online Brew Search](http://searchbrew.com/) or use the command line. [`cowsay`](https://en.wikipedia.org/wiki/Cowsay) is the most useless piece of software ever — I love it and I will use it as an example.

![Search packages via Homebrew](2018-07-05-2.jpg)

```
brew search cowsay
```

By default Homebrew uses a list of formulas included in the [homebrew-core repository](https://github.com/Homebrew/homebrew-core/tree/master/Formula), but you may face a situation when it is not enough. By adding [taps (third-party repositories)](https://docs.brew.sh/Taps) you can extend the list of packages available to `brew`.

### Install / uninstall stuff via Homebrew

The most frequently used commands are `install` and `uninstall`. Let's use the `cowsay` package as an example.

```
brew install cowsay
```

![Cowsay in action](2018-07-05-3.jpg)

```
brew uninstall cowsay
```

### Install / remove a macOS app via Homebrew

Since version 0.9.5 Homebrew comes with something called `brew cask`. It allows you to install macOS applications, fonts and drivers. You can browse all the available casks on the [homebrew-cask repo](https://github.com/Homebrew/homebrew-cask/tree/master/Casks) or search it via the command line. For example `brew search atom`. To install it…

```
brew cask install atom
```

![Install Atom via command line](2018-07-05-4.gif)

```
brew cask uninstall atom
```

### Upgrade package / macOS app via Homebrew

Of course we want the latest and greatest software on our machines. It couldn't be easier to update our packages — `brew upgrade` is all that we need. Similarly to bump the version of our graphical apps we can use `brew cask upgrade`. Follow these commands with the name of a formula if you want to update an individual package.

Please be aware that `brew update` is not an alias of `brew upgrade` — it fetches the newest formulas from GitHub but doesn't do anything to your brews.

## Brew everything

Hopefully this article helped you out and demystified the power that Homebrew comes with. I've helped you to explore some very basic commands, but please don't stop here. Look for some more sophisticated use cases in the [official documentation](https://docs.brew.sh/). I use it extensively in my daily routine but also to install [my favourite software](https://github.com/pawelgrzybek/dotfiles/blob/master/setup-brew.sh) every time I jump on a new machine. Thanks for reading and have a great day y'all!
