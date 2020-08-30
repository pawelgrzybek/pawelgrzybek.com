---
title: "Install Node.js — installer vs. Homebrew vs. NVM"
summary: "There is plenty of ways to install Node.js and I am about to show you the most popular methods and highlight pros and cons of each of them"
photo: 2019-01-15.jpg
---

No matter if you are working on backend or are in the frontend camp, [Node.js](https://nodejs.org) is getting more popular day by day and you may need to install it at some point. There is plenty of ways to install it on your operating system and I am about to show you the most popular methods and highlight pros and cons of each of them.

## Pre-built installer for your platform

The easiest and most obvious way is to download a pre-built installer for your platform from the [Node.js downloads page](https://nodejs.org/en/download/). Installation itself is very straight forward — next, next, next, done.

![Node.js pre-built installer](/photos/2019-01-15-1.jpg)

Despite the fact it is the easiest way of installing it, it comes with many disadvantages. It locks you to a particular version — it may not be a big issue on day one but it can be in the long run if you are willing to jump between projects that depend on different versions. Another (worst) issue with this method is the fact that it requires admin permissions (`sudo`) to install package globally. I published ["Fix privileges and never again use sudo with npm"](https://pawelgrzybek.com/fix-priviliges-and-never-again-use-sudo-with-npm/) with some solutions for this issue, but you better check ["Resolving EACCES permissions errors when installing packages globally"](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) on official documentation or follow this article.

## Node from Homebrew / Chocolatey

["Homebrew — the best friend of the macOS user"](https://pawelgrzybek.com/homebrew-the-best-friend-of-the-macos-user/) explains why I love this tool so much. Windows users can find an alternative like [Chocolatey](https://chocolatey.org/). Both of these package managers allow you to install Node.js with ease.

```
brew install node
```

```
choco install nodejs.install
```

CLI tools like that allow you to install / uninstall software in no time and never again be bothered by insufficient permissions. Although they allow you to manage versions too, in Node.js you should use…

## NVM (Node Version Manager)

[Node Version Manager](https://github.com/creationix/nvm) is a simple bash CLI that allows you to install multiple Node.js versions and switch between them using simple commands. Although it is available for macOS and Linux only, [Node.js version manager for Windows](https://github.com/coreybutler/nvm-windows) exists (ironically it is written in Go). Installation is straightforward — you can use a simple bash script or `brew` (my preferred way).

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

```
brew install nvm
```

Thats the way to install the latest version of Node.js.

```
nvm install node
```

Be curious and explore more `nvm` commands on an [official nvm documentation](https://github.com/creationix/nvm#usage). My most frequently used commands are: `install`, `uninstall`, `list` and `use`.

![NVM (Node Version Manager) — list all the installed versions](/photos/2019-01-15-2.jpg)

It is hard to remember the version of Node.js that a project depends on — smash the version into `.nvmrc` file in the root of your project and run `nvm use` inside this directory. If something can be automated, it should be automated — installing the right version of dependencies is not an exception. I made a simple bash script that runs `nvm use` whenever it encounters a `.nvmrc` file inside your project. There is a cool [zsh-nvm plugin for Zsh users](https://github.com/lukechilds/zsh-nvm) that does the same job.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Do you use nvm by <a href="https://twitter.com/creationix?ref_src=twsrc%5Etfw">@creationix</a> to manage <a href="https://twitter.com/node?ref_src=twsrc%5Etfw">@node</a> versions? Have you ever forgotten to `nvm use` in your project? I have a little bash script for y&#39;all. Put it into your .bashrc / .bash_profile and you are all set :-*<a href="https://t.co/GhVwRKYnw7">https://t.co/GhVwRKYnw7</a><a href="https://twitter.com/hashtag/node?src=hash&amp;ref_src=twsrc%5Etfw">#node</a> <a href="https://twitter.com/hashtag/nodejs?src=hash&amp;ref_src=twsrc%5Etfw">#nodejs</a> <a href="https://twitter.com/hashtag/nvm?src=hash&amp;ref_src=twsrc%5Etfw">#nvm</a> <a href="https://twitter.com/hashtag/js?src=hash&amp;ref_src=twsrc%5Etfw">#js</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://t.co/jWGN89rQnA">pic.twitter.com/jWGN89rQnA</a></p>&mdash; Paweł Grzybek (@pawelgrzybek) <a href="https://twitter.com/pawelgrzybek/status/1084035186562605057?ref_src=twsrc%5Etfw">January 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
