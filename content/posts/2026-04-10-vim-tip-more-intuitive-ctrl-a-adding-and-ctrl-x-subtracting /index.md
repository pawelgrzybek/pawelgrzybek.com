---
title: "Vim tip: more intuitive CTRL-A (adding) and CTRL-X (subtracting)"
summary: "Adding and subtracting numbers in Vim is something I use all the time. The default config for this feature is not the most intuitive for me, though."
---

Little disclaimer. What's "more intuitive" for me may not be "more intuitive" for you. Also, the title says "Vim" but everything here is applicable in Neovim. With that out of the way, let’s learn something cool!

Vim allows us to increment a number via <kbd>CTRL-A</kbd> and decrement it using <kbd>CTRL-X</kbd>. Super handy, and I use it all the time. Look 👀

{{< figure-video path="ctrl-a-ctrl-x.mp4" caption="Adding and subtracting a numbers in Vim via CTRL-A and CTRL-X." >}}

If you pay attention, you will see that on the second line, the <kbd>CTRL-A</kbd> instead of adding to a month digit, subtracts from it. This tripped me up so many times!

In the string `2026-03-10`, when you try to bump up a month, you are actually adding a number to `-03`. Adding `1` to `-03` is `-02`, so what Vim is doing is correct, but this is not the way I would like to use this feature. The `nrformats` option is made precisely to control this behaviour.

> This defines what bases Vim will consider for numbers when using the CTRL-A and CTRL-X commands for adding to and subtracting from a number respectively.

```
vim.o.nrformats = "unsigned"
```

Smash that into your config and from now on Vim will treat all numbers as absolute values. Now it works like I want!
