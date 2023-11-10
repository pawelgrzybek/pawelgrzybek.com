---
title: "The joy of using Helix (and probably other modal terminal-based editor)"
summary: ""
---

As a aspired frontend developer coming from a design bakground, a first code editor I started using was Adobe Dreamwaver. Very slow, bultky, visual edotor that produced a correct result only in a built in-preview, but never in the browser. After that i had a few attempts to start using sometihing else like brackets or Coda, but i did;t last long. Then I discovered Sublime Text - lightwaigh, fast, configurable, cheap. I spent years without even trying anything else, as i was fully convinved that this is my productivity pick.

A few years later vscode came out, and being not a big fan of Misrosoft i resisted at first. I couldnt resist the hype and i tried it and i was surprised how quickly i managed to replicate my sublime text flow in new environment. after a while i soked into the vscode even more, i built a qwuite popular theme and even built a little webapp the help people out to maker sinppets in no time. I reached my productivity pick, again. But there is no rose without a thorn - with power comes a cost (performance). Even tho thios is probably the best built app on top of Electron, i feels far from snappy as some of the other tools built in a bit lower level technologies. With a few plugins and hundred lines of super ocmplicated to understand config, speed and reliability is far from perfect.

I was alwaus jealous looking at magicians doign crazy shit in vim and others. I decided to learn at least some basics of terminal bssed editor. Being anlt to log in via SSH to boxx and work in a familiar way must feel super nice, right? Vim and emacs are great but we have probably easier to pick choices nowadays. Neovim looks appealing to me but after watching some of the videos and reading sme tutorials about the coniguration, this thing is so compilicated to my taste.
Kraken, maybe, i dont know.

Helix ticked all the boxes and i am having tons of fun learnign it. I am nowere near as quick and productive using it as VSCode but getting there. It is a first terminal based editor i use and learnign it is a tons of fun. Let me tell you why i like helix so much.

## Simple doesnt mean restricted

simple tool but contains a lot of features like:

### lsp

### ezxperimental debugger

### syntax highlighting

### file / buffer picker built in


## Ease of configuratoin

```toml
# congig.toml

theme = "base16_transparent"

[editor]
line-number = "relative"
scrolloff = 0
scroll-lines = 1
rulers = [80]
bufferline = "multiple"

[editor.lsp]
display-messages = true

[editor.whitespace.render]
space = "all"
tab = "all"

[editor.indent-guides]
render = true

[editor.soft-wrap]
enable = false
wrap-indicator = ""
wrap-at-text-width = true
```

```toml
# languages.toml

[[language]]
name = "markdown"
soft-wrap.enable = true
soft-wrap.wrap-at-text-width = true
```

## Take with you everywhere

> Never stop changing 

## I am becming a better typist/typer

## Good places to start
