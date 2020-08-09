---
title: Fix privileges and never again use sudo with npm
description: Running npm with sudo allows hackers to have full control over your computer. Fortunately it works perfectly fine without root powers. Let's fix it!
photo: 2015-08-05.jpg
---

{{< update >}}
Nah! Don't do it! I published this article years ago. It was a solution provided by npm team by the time of writing this article. Use `nvm` or [brew](https://pawelgrzybek.com/homebrew-the-best-friend-of-the-macos-user/) instead please.
{{< /update >}}

We have a few options to install Node and npm. Using [Homebrew](http://brew.sh/) is the safest and recommended way to do it. Another safety option is using [Node Version Manager](https://github.com/creationix/nvm). Next method is using [installer available on official node website](https://nodejs.org/). This way is the most obvious and the easiest one, but not necessarily the safest one. Fortunately there is a very easy fix.

If you used installer, whenever you want to install a package globally you need to use a super user power to do it. For example:

```
sudo npm install -g grunt-cli
```

On a first glance it's nothing wrong with that code, yeah? Even on official Grunt documentation it says:

> You may need to use sudo (for OS X, \*nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

Actually it is a very dangerous thing. Correctly pointed out by my [friend](https://twitter.com/IcyApril) recently, I started investigate the problem and I found an amazing article by [Gastón I. Silva](https://twitter.com/givanse) — [Do not sudo npm](http://givan.se/do-not-sudo-npm/).

> You should not run applications with root privileges if its not necessary. Node and npm can do their work just perfectly fine without admin powers. If you are running a server with root privileges and it gets hacked through a vulnerability in your code, the attacker will have total control over your machine.

We don't need troubles. We need to change privileges on few folders on our machine. The procedure is very simple and it's very clearly explained on [one of the videos](https://docs.npmjs.com/getting-started/fixing-npm-permissions) on the official npm documentation website. Open Terminal and type:

```
sudo chown -R $(whoami) /usr/local/lib/node_modules
sudo chown -R $(whoami) /usr/local/bin
sudo chown -R $(whoami) /usr/local/share
```

These few lines of code are very straight forward. It changes the owner of listed directories from root to your user name. Flag -R stands for 'recursively' which means it changes ownership on particular directory and all directories and files inside it.

Enjoy using npm without 'sudo' now.
