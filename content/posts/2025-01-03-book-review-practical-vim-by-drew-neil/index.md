---
title: 'Book review: "Practical Vim" by Drew Neil'
summary: "This book helped me a lot to understand the editor's philosophy. It is a pile of hundreds of bite-sized practical tips, and it is designed to cherry-pick the bits you like."
---

I recently moved [from Helix to Neovim](/from-helix-to-neovim/). It wasn't too hard at first, as all the basic motions are very similar, but something didn't feel right. Because I came from the editor that follows a selection-first approach (motion → action), I blindly kept on replicating the same in the action-first Neovim (action → motion). I have seen crazy efficient Vim programmers before, and I just knew that I needed to level up.

[A Mastodon user called trójkąt ▼](https://101010.pl/@trojkat/113459820607813368) recommended the ["Practical Vim" by Drew Neil](https://pragprog.com/titles/dnvim2/practical-vim-second-edition/) to me. This book helped me a lot to understand the editor's philosophy. It is a pile of hundreds of bite-sized practical tips, and it is designed to cherry-pick the bits you like. The book assumes working with a Vim core, and apart from very few exceptions, does not require any particular plugin or configuration. It is a good one to have on a bookshelf regardless of proficiency in Vim.

!["Practical Vim" by Drew Neil](1.jpg)

!["Practical Vim" by Drew Neil](2.jpg)

## Favourite tips

Let me share with you a few tips that I learned from the book that made me a lot more efficient. I use them all the time! If that’s your thing, I would highly encourage you to get a copy for yourself.

### Underused the dot command

One of the most powerful commands is the dot command. It repeats the last change. You can use it to spare yourself from typing multi-keystroke commands multiple times or avoid mental overhead by counting how many times to perform an action.

{{< figure-video path="dot-command-1.mp4" caption="Instead of `>>>>>>>>>>` use `>>....` to indent a line five times." >}}

{{< figure-video path="dot-command-2.mp4" caption="Counterintuitively, typing `dw....` is easier for me than `5dw` because there is no need for counting before performing an operation." >}}

### Addition and substraction

The `<C-a>` and `<C-x>` perform number addition and substitution respectively. Super handy, and I use this trick all the time. It can also be prefixed with the count.

{{< figure-video path="cxca.mp4" caption="Increse a number by 40 via `40<C-a>` and then decrease usig `<C-x>`" >}}

### Do quick maths without ever leaving insert mode

The expression register can be invoked using `<C-r>=` and allows us to perform simple math calculations without leaving the insert mode.

{{< figure-video path="expression-register.mp4" caption="The expression register is like a tiny calculator built into the insert mode." >}}

### Run normal mode command across multiple lines

The `normal `ex command allows us to run all normal mode commands, but on a range of consecutive lines. This thing gets a lot more powerful with the combination of the dot command or even macros.

{{< figure-video path="normal-command.mp4" caption="Append a semicolon to the first line `A;` and then repeat this command `.` across the remaining lines using the `normal` ex command." >}}
