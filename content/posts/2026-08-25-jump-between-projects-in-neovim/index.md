---
title: "Jump between projects in Neovim"
summary: "I spent a moment to make a project-aware sessions wrapper that works beautifully as a project manager. Super slim solution but works well for me."
---

Modern IDEs let you jump from project to project with ease. Neovim doesn't have this feature, so folks usually keep a few terminal windows or tabs open or jump between [Zellij](https://zellij.dev/) or [tmux](https://github.com/tmux/tmux) multiplexer panes. As you can imagine, there are also a gazillion plugins to fill this gap.

None of these fits my bill, so I spent a moment to craft a solution that I wanted to share with you. It is a quick way of opening a project and pointing [the current directory](https://neovim.io/doc/user/usr_22/#_the-current-directory) to a new location for all the relative paths to resolve against. Restoring a [session](https://neovim.io/doc/user/usr_21/#_sessions) (open buffers, windows and tabs) comes as a nice bonus. Here it is.

```lua
local M = {}

local dir = vim.fn.stdpath("data") .. "/sessions/"

local function path()
	local cwd = vim.fn.getcwd()
	return dir .. cwd:gsub("/", "%%") .. ".vim"
end

function M.save()
	vim.fn.mkdir(dir, "p")
	vim.cmd("mksession! " .. vim.fn.fnameescape(path()))
end

function M.restore()
	local file = path()
	if vim.fn.filereadable(file) == 0 then
		return false
	end
	vim.cmd("silent! source " .. vim.fn.fnameescape(file))
	return true
end

function M.list()
	local items = {}
	for _, file in ipairs(vim.fn.glob(dir .. "*.vim", true, true)) do
		local session_dir = file:sub(#dir + 1, -5):gsub("%%", "/")
		items[#items + 1] = {
			dir = session_dir,
			text = vim.fn.fnamemodify(session_dir, ":~"),
			mtime = vim.fn.getftime(file),
		}
	end
	table.sort(items, function(a, b)
		return a.mtime > b.mtime
	end)
	return items
end

vim.api.nvim_create_autocmd("VimEnter", {
	nested = true,
	callback = function()
		if vim.fn.argc() == 0 then
			M.restore()
		end
	end,
})

vim.api.nvim_create_autocmd("VimLeavePre", {
	callback = M.save,
})

vim.api.nvim_create_user_command("SessionSave", M.save, {})
vim.api.nvim_create_user_command("SessionRestore", M.restore, {})

return M
```

The new `SessionSave` and `SessionRestore` are just location-aware wrappers on top of the Neovim sessions. They work great on their own, but we can do better by hooking them to a picker. Here is [the implementation I use for the Snacks picker](https://github.com/pawelgrzybek/dotfiles/blob/master/nvim/plugin/snacks.lua#L161-L205), but there are too many pickers out there to provide you with a bulletproof solution for them all, so I will leave this part for you. Here is a little demo of how it works for me.

{{< video path="sessions.mp4" >}}

There are some drawbacks to this solution which I happily accepted. It may leave some LSP servers lingering in the background, doesn’t scope jumplists, registers and marks to the project and probably some more nuances I missed. I’m accepting these little trade-offs. Otherwise I will be reimplementing [auto-sessions](https://github.com/rmagatti/auto-session) which is a fantastic choice if you need a more robust solution than my dirty script.

I hope that helps. Happy coding, folks!
