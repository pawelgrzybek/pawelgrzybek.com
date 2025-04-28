---
title: "Reconcile two conflicting LSP servers in Neovim 0.11+"
summary: "The difference between root_markers and root_dir, and how to use it to conditionally activate a server per buffer."
---

One of the highlight features of [Neovim 0.11](https://neovim.io/news/2025/03) is the simplified LSP setup. My needs are pretty basic, so I moved things off the `nvim-lspconfig` to my configuration folder, uninstalled the plugin, and almost everything works like a charm. If you use plenty of LSPs and you appreciate a stress-free life, I wouldn't recommend doing thaat - `nvim-lspconfig` is still a valuable helper.

Two competing LSPs attached to the same buffer were the only issues I had. It took me a while to resolve them, and I wanted to share the resolution with you. In my case, they were TypeScript and Deno LSP, providing some contradicting definitions for `.ts` files. They both by default target the same `filetypes` and different `root_markers`. Naively, I thought that this was enough to ensure only one of them was running: `ts_ls` inside my TypeScript-based project and `deno` on Deno ones.

```lua
-- ts_ls.lua
return {
    cmd = { "typescript-language-server", "--stdio" },
    root_markers = {
	"package.json",
    },
    filetypes = {
	"javascript",
	"javascriptreact",
	"javascript.jsx",
	"typescript",
	"typescriptreact",
	"typescript.tsx",
    }
    -- and some other stuff
}
```

```lua
-- deno.lua
return {
    cmd = { "deno", "lsp" },
    cmd_env = { NO_COLOR = true },
    root_markers = {
	"deno.json",
    },
    filetypes = {
	"javascript",
	"javascriptreact",
	"javascript.jsx",
	"typescript",
	"typescriptreact",
	"typescript.tsx",
    },
    -- and some other stuff
}
```

Turns out that `root_markers` is only a hint for the LSP, but in the case of more complex logic to decide whether to activate a server for a given buffer, the `root_dir` with a function signature should be used. Currently, the documentation doesn’t make that clear, but luckily [a future version of Neovim](https://github.com/neovim/neovim/pull/33446/files) will have a much better explanation of this field.

> The function form receives a buffer number and `on_dir` callback, which must be called to provide root_dir as a string. LSP will not be activated for the buffer unless `on_dir` is called; thus a `root_dir()` function can dynamically decide whether to activate (or skip) LSP per-buffer.

```lua {hl_lines=["5-15"]}
-- ts_ls.lua
return {
    cmd = { "typescript-language-server", "--stdio" },
    ---@diagnostic disable-next-line: unused-local
    root_dir = function(bufnr, on_dir)
	local root_path = vim.fs.find("package.json", {
	    upward = true,
	    type = "file",
	    path = vim.fn.getcwd(),
	})[1]

	if root_path then
	    on_dir(vim.fn.fnamemodify(root_path, ":h"))
	end
    end,
    filetypes = {
	"javascript",
	"javascriptreact",
	"javascript.jsx",
	"typescript",
	"typescriptreact",
	"typescript.tsx",
    }
    -- and some other stuff
}
```

```lua {hl_lines=["6-16"]}
-- deno.lua
return {
    cmd = { "deno", "lsp" },
    cmd_env = { NO_COLOR = true },
    ---@diagnostic disable-next-line: unused-local
    root_dir = function(bufnr, on_dir)
	local root_path = vim.fs.find("deno.json", {
	    upward = true,
	    type = "file",
	    path = vim.fn.getcwd(),
	})[1]

	if root_path then
	    on_dir(vim.fn.fnamemodify(root_path, ":h"))
	end
    end,
    filetypes = {
	"javascript",
	"javascriptreact",
	"javascript.jsx",
	"typescript",
	"typescriptreact",
	"typescript.tsx",
    },
    -- and some other stuff
}
```

In my case, this little tweak to the configuration resolved the issue with the competing LSP servers. Adding the `root_dir` also invalidates the need for `root_markers`. I hope that helps.

---

## Update, Neovim 0.11.1 comes with workspace_required

Hold on! Neovim 0.11.1 comes with a better way of solving this issue. A new configuration flag `workspace_required` that, in combination with `root_markers`, solves my problem in a much more elegant way. Thanks to the [cback Reddit user](https://www.reddit.com/user/cbackas/) who pointed me to this solution. Here is how it looks now. Nice!

```lua {hl_lines=["5"]}
-- ts_ls.lua
return {
    cmd = { "typescript-language-server", "--stdio" },
    root_markers = { "package.json" },
    workspace_required = true,
    -- and some other stuff
}
```

```lua {hl_lines=["6"]}
-- deno.lua
return {
    cmd = { "deno", "lsp" },
    cmd_env = { NO_COLOR = true },
    root_markers = { "deno.json" },
    workspace_required = true,
    -- and some oth
er stuff
}
```
