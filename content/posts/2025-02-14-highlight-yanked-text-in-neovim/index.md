---
title: "Highlight yanked text in Neovim"
summary: "There is a little trick in Neovim that enables nice feedback after yanking a portion of text. Look at the example and a little Lua recipe."
---

Before [Neovim](https://neovim.io/), I used to use [Helix](https://helix-editor.com/), which follows the same [editing model](https://kakoune.org/why-kakoune/why-kakoune.html#_improving_on_the_editing_model) as [Kakoune](https://kakoune.org/). Having experience with both, I must admit that I prefer Helix’s selection → action editing model. It is a lot more precise and less error-prone to see the selection before taking action upon it. Although this workflow is possible in Vim, it can be inefficient.

Opinions and code editor disputes aside, there is a little trick in Neovim that enables nice feedback after yanking a portion of text. Look at the example and a little Lua recipe.

{{< figure-video path="text-yank-post.mp4" caption="A post yank highlight feedback emitted after yanking a word, line and a code block." >}}

```lua
vim.api.nvim_create_autocmd("TextYankPost", {
    callback = function()
        vim.highlight.on_yank()
    end,
})
```

The highlighting group styling, timeout, and a few other things are configurable. It's a little thing, but I found it superbly useful.

---

While writing this post and browsing Neovim’s events reference, I came across the [`UserGettingBored` event](https://neovim.io/doc/user/autocmd.html#UserGettingBored). It doesn’t do anything, but it is cool to see a sense of humour spread throughout the docs 🤣
