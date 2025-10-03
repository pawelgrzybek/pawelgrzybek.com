---
title: "Neovim incremental selection using Tree-sitter"
summary: "I use incremental selections in Neovim all the time. This is where I tap, tap, tap, and on every single tap, the selection expands starting from the cursor position and climbs up by the node or the whole scope."
---

I use incremental selections in Neovim all the time. This is where I tap, tap, tap, and on every single tap, the selection expands starting from the cursor position and climbs up by the node or the whole scope. This feature uses [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) under the hood, so it respects the grammar of the programming language. One of my favourite features of Neovim!

{{< figure-video path="incremental-selection.mp4" caption="A demo of incremental selection in Neovim." >}}

## Configure nvim-treesitter

To enable this feature, you need to install [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) first. The configuration differs depending on the branch you're using, so I will provide a recipe for the `master` (which is still the default branch at the time of writing this post) and the `main` branch, which will eventually become the default one according to [the roadmap](https://github.com/nvim-treesitter/nvim-treesitter/issues/4767). I use <kbd>\<A-o\></kbd> and <kbd>\<A-i\></kbd> where "o" and "i" work as a mnemonics for "select out" and "select in".

### The master branch

```lua
{
  "nvim-treesitter/nvim-treesitter",
  build = ":TSUpdate",
  config = function()
      incremental_selection = {
        enable = true,
        keymaps = {
          init_selection = "<A-o>",
          node_incremental = "<A-o>",
          scope_incremental = "<A-O>",
          node_decremental = "<A-i>",
        },
      },
    })
  end,
}
```

### The main branch

One of the biggest changes in the `main` branch is the lack of a modules framework, so some of the stuff like indentation, folding, and also incremental selection need to be recreated. The [treesitter-modules.nvim](https://github.com/MeanderingProgrammer/treesitter-modules.nvim) is the easiest and the most reliable plugin to reproduce missing functionalities amongst the other ones I tested. Also, keep in mind that using the `main` branch requires the `tree-sitter-cli`, so make sure you have one in your path.

```lua
return {
  {
    "nvim-treesitter/nvim-treesitter",
    branch = "main",
    build = ":TSUpdate",
  },
  {
    {
      "MeanderingProgrammer/treesitter-modules.nvim",
      dependencies = { "nvim-treesitter/nvim-treesitter" },
      opts = {
        incremental_selection = {
          enable = true,
          keymaps = {
            init_selection = "<A-o>",
            node_incremental = "<A-o>",
            scope_incremental = "<A-O>",
            node_decremental = "<A-i>",
          },
        },
      },
    },
  },
}
```

## Built-in incremental selection

The good news is that [LSP-based incremental selection](https://github.com/neovim/neovim/pull/34011/files) is coming to the Neovim core soon. The <kbd>an</kbd> and <kbd>in</kbd> in visual mode will map to the outer and inner incremental selections. Here are the new default mappings.

```lua
vim.keymap.set('x', 'an', function()
  vim.lsp.buf.selection_range('outer')
end, { desc = "vim.lsp.buf.selection_range('outer')" })

vim.keymap.set('x', 'in', function()
  vim.lsp.buf.selection_range('inner')
end, { desc = "vim.lsp.buf.selection_range('inner')" })
```

There is also [a strong signal from core maintainers](https://github.com/neovim/neovim/pull/34011#issuecomment-2971867557) that the LSP implementation will eventually be replaced with the Tree-sitter one. Nice 👌

I know that this feature is not specific to Neovim. Helix also comes with `expand_selection` and `shrink_selection`, also powered by Tree-sitter. Visual Studio Code most likely uses TextMate grammar and LSP under the hood to create the `Expand` and `Shrink` commands. IntelliJ uses its own proprietary PSI (Program Structure Interface) to enable `Extend Selection` and `Shrink Selection`, but I have never used it and I don't know how it compares to the TS one.

Done 👋
