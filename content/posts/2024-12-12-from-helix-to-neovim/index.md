---
title: "From Helix to Neovim"
summary: "A year ago, I decided to try Helix. A few weeks after playing around with it, I adopted it as a daily driver. On the way, I hit a few roadblocks, so, I made the switch to Neovim."
---

A year ago, I decided to try Helix.
["The joy of learning Helix (and probably other modal, terminal-based editors)"](https://pawelgrzybek.com/the-joy-of-learning-helix-and-probably-other-modal-terminal-based-editors/)
reveals more about the motivations and initial impressions. A few weeks after
playing around with it, I adopted it as a daily driver. I love Helix, its
simplicity, the set of features it comes with, the documentation, and the
community behind it. Learning this tool made me a more efficient programmer, a
better typist, and, due to the underlying technologies, I learned a lot about
LSPs, Tree-sitter, terminal emulators, and shells.

On the way, I hit a few roadblocks, though. A few of these nuanced or less
popular features can make or break your experience. So, after resisting for a
while, I made the switch to Neovim. It wasn’t love at first sight for sure. Let
me share why I abandoned Helix and what my initial impressions of using Neovim
are.

## Missing piece of Helix

It all comes down to a missing package manager. I don’t want to tell you about
all the occasions I was looking for something and I ended up with “it is out of
scope of the core Helix, and should be implemented as a plugin”. Code folding,
file tree, snippets, extended git functionalities to name a few.

[The plugin system](https://github.com/helix-editor/helix/discussions/3806) is
coming to Helix soon, but the feature is still in the making at the time of
writing this article. It will take a while longer for the plugins ecosystem to
reach maturity and partial parity with what Neovim has to offer. I can wait, but
my clients' projects cannot, and sadly this is the main reason for me switching
to Neovim.

## My experience of switching from Helix to Neovim

As much as I loved Helix on day one, I cannot say the same about Neovim. I like
the `select > act` philosophy adopted by Helix more than Vim’s opposite
strategy. I think it is easier and more predictable, so getting used to the
`act > move` model used by Neovim took a while. Too often I land in visual mode
to make a selection to trigger an action on it, instead of performing the same
with a few keystrokes in normal mode. One of the hard habits to break coming
from Helix.

Helix comes with very sane defaults, and configuration is limited to a minimum.
Neovim configuration has a reputation for being notoriously complicated, but it
is actually not that hard. After learning some basics of Lua, it is super
satisfying to do whatever the hell you want with your editor. The core of Neovim
is super powerful on its own, but the real fun comes when you throw a few
plugins into the mix. There is an endless number of resources out there, but I
would like to highlight two that I found super helpful on my journey.

1. [TJ DeVries on YouTube](https://www.youtube.com/@teej_dv/featured). Core
   contributor to Neovim and author of plugins used by the majority of Neovim
   users. He recorded an endless number of videos dedicated to Neovim. If you
   are just starting,
   ["The Only Video You Need to Get Started with Neovim"](https://youtu.be/m8C0Cq9Uv9o)
   is a great primer where he goes through
   [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim), which he also
   created.
1. ["Practical Vim: Edit Text at the Speed of Thought" by Drew Neil](https://pragprog.com/titles/dnvim2/practical-vim-second-edition/)
   is is a collection of tips that do not require any additional tools other
   than a core Vim. This books helped me a lot to understand the core
   philosoplhy of this tool.

!["The Practical Vim" by Drew Neil](1.jpg)

!["The Practical Vim" by Drew Neil](2.jpg)

I don't want to offend any die-hard Helix fans by writing this post. I have
mentioned enough times how much
[I like this tool](http://localhost:1313/from-helix-to-neovim/#:~:text=a%20daily%20driver.-,I%20love%20Helix,-%2C%20its%20simplicity%2C%20the).
One year is a decent time to give something a try and shape an opinion about it.
I am keeping my fingers crossed for the future development of Helix and, most
importantly, its plugins ecosystem.

If you have had a similar experience, please share your story with me in the
comments section below. Alternatively, you can find me on
[Mastodon](https://mastodon.social/@pawelgrzybek) and
[Bluesky](https://bsky.app/profile/pawelgrzybek.com), because that happens to be
the place where plenty of folks have recently moved. Fuck Twitter, fuck Elon. X
is a stupid name anyway. Bye 👋
