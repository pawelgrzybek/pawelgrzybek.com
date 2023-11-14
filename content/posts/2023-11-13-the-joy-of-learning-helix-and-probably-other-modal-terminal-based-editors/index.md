---
title: "The joy of learning Helix (and probably other modal, terminal-based editors)"
summary: "I decided to learn Helix - heavily inspired by Kauone and Neovim editor written in Rust, which speaks to my linking by its number of built-in features and configuration ease."
---

I went through quite a journey, from [Adobe Dreamweaver](https://www.adobe.com/uk/products/dreamweaver.html) at the very beginning through [Coda](https://panic.com/coda/), [Brackets](https://brackets.io) and many other editors I cannot recall. For the first time, I felt productive when I started using [Sublime Text](https://www.sublimetext.com). Lightweight, fast, simple, but easily adaptable by the ecosystem of plugins. I reached a productivity peak and stopped seeking another tool until the [Visual Studio Code](https://code.visualstudio.com) hype gave me a little FOMO (fear of missing out).

Due to my limited sympathy for Microsoft back then, I was skeptical at first, but I gave VSCode a go and instantly liked the tool and its ecosystem. I built a [snippet generator for Visual Studio Code (and other editors)](https://snippet-generator.app) and designed a [theme](https://marketplace.visualstudio.com/items?itemName=pawelgrzybek.gatito-theme) that people clearly like (100k+ downloads). Visual Studio Code is still my daily driver, but my excitement faded away. The simplicity I liked at first is no longer there, and my configuration JSON file got out of control. Despite being one of the best examples of [Electron-based apps](https://www.electronjs.org/apps), the performance is not even close to similar applications built using closer-to-the-metal technologies.

I have always been attracted to the idea of using a simple terminal-based editor. You can take it anywhere with you (in theory), and when mastered, it can be a serious boost for your productivity. I decided to learn [Helix](https://helix-editor.com) - a heavily inspired by [Kauone](http://kakoune.org) and [Neovim](https://neovim.io) editor written in Rust, which speaks to my linking by its number of built-in features and configuration ease. Here are a few things I like about it and maybe inspire you to try something new.

## Built-in features

At first, it looks no different than Vim or any other modal editor, but it has many built-in features. File/buffer picker, [surroundings](https://docs.helix-editor.com/usage.html#surround) (parentheses, brackets, quotes, tags), [context-aware selections and manipulations](https://docs.helix-editor.com/usage.html#navigating-using-tree-sitter-textobjects), [multiple modes](https://docs.helix-editor.com/keymap.html#minor-modes) (selection, goto, match, view, window, space), mouse support, [language server protocol support](https://docs.helix-editor.com/lang-support.html), [plenty of beautiful themes](https://github.com/helix-editor/helix/wiki/Themes), syntax highlighting for over 180 programming languages and a lot more. At the moment of writing, Helix doesn't have a plugin system, but this is an [actively discussed subject](https://github.com/helix-editor/helix/discussions/3806).


{{< figure
  src="features.png"
  alt="Split view, space mode and file picker in Helix"
  caption="Split view, space mode and file picker in Helix"
>}}

## Ease of configuration

Over the years, I have transitioned from "let me configure everything" to "let me use it without thinking about the config". I appreciate opinionated tools with strict conventions that allow me to get the stuff done. The same applies to programming frameworks. My VSCode `settings.json` file contains hundreds of lines of config, and I can barely tell what all this jazz is for. In contrast, this is my Helix `config.toml` in all glory.

```toml
theme = "base16_transparent"

[editor]
line-number = "relative"
rulers = [80]
bufferline = "multiple"

[editor.lsp]
display-messages = true

[editor.whitespace.render]
space = "all"
tab = "all"

[editor.indent-guides]
render = true
```

## Configure once, and take it with you anywhere

I like the idea that I can install Helix anywhere I may need it. Whether it is my personal computer, AWS EC2, or Raspberry Pi, I can install it, copy/pasta a few lines of config and Bob's your uncle. It takes seconds. Check the [installation guide](https://docs.helix-editor.com/install.html) for more details.

## I am becoming a better typist

Even though Helix has a mouse mode enabled by default, you shouldn't move your hands off the keyboard. This can be hard for anyone coming from the a graphical editor, but practising this habit from the get-go pays back quickly. Bookmark [the Keymap](https://docs.helix-editor.com/keymap.html) page and learn a new shortcut when you need it. If one doesn't exist, you can record a macro to streamline a series of commands (`Q` to start/stop recording). 

## Try something new!

This post may inspire you to try something new. Not necessarily Helix, but something new. Changing your habits and forcing yourself to step out of your comfort zone is good to get a new perspective. Do not expect it will change your life, but let’s hope you will have fun at least.
