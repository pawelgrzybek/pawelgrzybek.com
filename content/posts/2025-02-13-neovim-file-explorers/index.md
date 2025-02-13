---
title: "Neovim file explorers"
summary: "Creating new files, deleting and moving them around is probably the second most frequent thing you use your text editor for besides writing code. I have a few options for you."
---

Creating new new files, deleting and moving them around is probably the second most frequent thing you use your text editor for besides writing code. [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), [Zed](https://zed.dev/) and other GUI editors use tree-like file explorers inside toggleable drawers. As much as this is useful and convenient for mouse-operable interfaces, it doesn’t really fit into the philosophy of modal editors like Neovim. We have plenty of options, so let me go through the ones I use.

{{< figure src="1.jpg" alt="A preview of the three file explorer solutions for Neovim discussed in this post: netrw, oil.nvim and neo-tree.nvim" caption="Three popular file explorers for Neovim: netrw, oil.nvim and neo-tree.nvim" >}}

For quick file switching, I would recommend things like [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) or [Harpoon](https://github.com/ThePrimeagen/harpoon/tree/harpoon2). This post is not about file switching, but file-based operations.

Stop being so nit-picky, please! I understand that file managers, viewers and explorers can mean a different thing to different people, but I am going to use these terms interchangeably. A thing to do things with your files.

## The built-in netrw

A solution preferred by many purists is the built-in plugin `netrw`. I like defaults, and before I started exploring other options, I spent a lot of time using it. As a basic local file manager, it does an OK job, but its networking capabilities are its extra power, hence the name Network-Oriented File Transfer. It comes with many display options, preview mode, and supports a silly number of protocols for remote communication. If a tree-like viewer is your style, this one also comes with an option for you.

{{< figure src="2.jpg" alt="Some of the configuration capabilities of Neovim's built-in netrw plugin. The top one presents a wide view with a file preview enabled, and the bottom one is a tree-like viewer." caption="Some of the configuration capabilities of Neovim's built-in netrw plugin. The top one presents a wide view with a file preview enabled, and the bottom one is a tree-like viewer." >}}

Personally, I almost never edit remote files, and as much as it is an OK option for simple edits, multi-file operations are a bit clunky. Let’s look at the tree-like sidebar file manager as an alternative commonly used in most graphical IDEs.

## In defence of tree-like viewers

There is no shortage of "file tree sucks" kinda opinions floating around the Neovim community. Although I use them super rarely, seeing a hierarchical representation of files and directories is super helpful to understand the codebase. Of course, there are tools like [my beloved Yazi](/files-management-with-yazi/) that allow you to do it outside of Neovim, but the dynamically highlighted location of a currently edited file is a super handy exploration tool.

The [nvim-tree.lua](https://github.com/nvim-tree/nvim-tree.lua) is the most popular plugin of this kind. The [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim) is also a super popular choice and also my personal preference. I found it easier to configure and it's defaults are more to my liking.

{{< figure-video path="file-tree.mp4" caption="Using a toggleable file tree that highlights the currently edited buffer." >}}

When the file tree viewer can be useful, it is nice to have it one click away, but as mentioned before, I find it useful only when I don’t know the codebase. A classic ["Oil and vinegar - split windows and the project drawer" by Drew Neil](http://vimcasts.org/blog/2013/01/oil-and-vinegar-split-windows-and-project-drawer/) explains why it is not the best fit for multiple splits users. This leads me nicely to my favourite way of file manipulations.

## Buffer-like files manipulations using oil.nvim

The [oil.nvim created by Steven Arcangeli](https://github.com/stevearc/oil.nvim) is one of my recent additions to my setup. Imagine editing files and directories using all the skills you already have to make changes to regular buffers. This is precisely what oil.nvim is! There is no learning curve whatsoever, compared to `netrw`, which is famous for its error-prone workflows. Open an oil buffer and then delete a line to delete a file, add a line to create a new one, and edit a line to rename one. Can that be simpler?

{{< figure-video path="oil.mp4" caption="Oil.nvim makes file manipulations as intuitive as regular buffer manipulations." >}}

This covers most of the stuff I use it for, but there is more to it. You can use it as your default file explorer and replace netrw (this is the default behaviour), preview file permissions, size, MIME types, toggle hidden files, change sorting and more. Similarly to the default netrw, it allows you to browse files over SSH.

Helpful? Peace ✌️
