---
title: "Lazygit, the convenience of GUI with the power of git CLI"
summary: "I don't mind using git CLI directly for simple things, but it is famously verbose for more advanced use cases. Luckily, I found a project that ticks all the boxes of a good git client."
---

Built-in git client is a popular feature of modern IDEs. It is handy for committing code edits, switching branches, and fetching remote changes without distracting context switching. I have been doing that in Visual Studio Code for years until [I decided to try Helix](/the-joy-of-learning-helix-and-probably-other-modal-terminal-based-editors/) and accidentally became a much more efficient coder using it. The version control client isn't built into my new editor, so I moved back to CLI like in the good old days.

I don't mind using git CLI directly for simple things, but it is famously verbose for more advanced use cases. I am just too lazy to memorize longer commands. Also, with my crappy typing skills, it is a super error-prone task. Luckily, I found a project that ticks all the boxes of a good git client: works in the terminal, is super easy to use and, powerful enough to handle more advanced scenarios. [Lazygit](https://github.com/jesseduffield/lazygit) by Jesse Duffield made me a more productive git user than ever.

## Using lazygit

You can flick through the TUI (terminal user interface) panels using arrow keys or vim-style <kbd>H</kbd>/<kbd>J</kbd>/<kbd>K</kbd>/<kbd>L</kbd>. Some panels have multiple tabs, which you can navigate using square brackets. Besides navigating through sections and tabs, the only keyboard shortcut you need to remember is <kbd>?</kbd>, which shows you contextually available operations based on an active panel/tab.

{{< figure
  src="lazygit.jpg"
  alt="Lazygit contextually shows available options based on the active panel"
  caption="Lazygit contextually shows available options based on the active panel."
>}}

Keybinginds are intuitive, and you can usually guess the shortcut for the intended operation. Most likely to "commit" something, the <kbd>c</kbd> is what you're looking for while the files panel is active. Similarly, hitting <kbd>n</kbd> creates a new worktree or a branch if you're in that panel. If things are not as straightforward to guess, quick check via <kbd>?</kbd> is your friend. Have a look at this quick example where I stage a file, write a commit message and force push changes to remote repository.

{{< figure-video path="lazygit.mp4" caption="Move down (j), stage a file (space), commit (c), write a message and push (shift-p)." >}}

The documentation is [full of practical demos](https://github.com/jesseduffield/lazygit?tab=readme-ov-file#features). It took me a few days until I memorized all commonly used operations. Give it a go, and I'm sure you will fly through your git repositories faster than ever. Enjoy!
