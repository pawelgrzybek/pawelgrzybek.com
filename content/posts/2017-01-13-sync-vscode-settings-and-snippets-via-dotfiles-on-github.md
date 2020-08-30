---
title: Sync VSCode settings and snippets via dotfiles on Github
summary: Having access to the same settings and snippets across multiple devices is a handy feature of some text editors. This is how to do it in VSCode.
photo: 2017-01-13.jpg
---

My text editor and the browser are probably the most frequently used applications in my daily work routine. As long as you are logged in to Google Chrome (or any other browser) the synchronization of settings and plugins happens in the background. Unfortunately syncing settings between applications like VSCode is not as straight forward. However, just because it doesn't come baked into the software it doesn't mean it is impossible.

As a long term Sublime Text user I managed to use Github to sync its settings across multiple machines via [.dotfiles](https://github.com/pawelgrzybek/dotfiles). I used Atom for a little while and I found a way to mimic this mechanism for it as well. [I published an article](https://pawelgrzybek.com/sync-atom-between-multiple-devices/) about it the other day. Today it is time to show you how to do it with VSCode. By the way - [VSCode](https://code.visualstudio.com/) is awesome!

## Moving VSCode settings to .dotfiles

The folder in which your VSCode settings and snippets reside depends on the operating system. [User and Workspace Settings](https://code.visualstudio.com/Docs/customization/userandworkspace) and its locations are described in the official documentation. As a macOS user I will provide some snippets associated with this operating system, but if you are a Windows or Linux user feel free to follow along and replace the paths accordingly. Before pasting anything into your Terminal make sure to shut down VSCode.

OK, let's move the settings files and the directory containing your snippets to your .dotfiles that is located in the root folder.

```
mv ~/Library/Application\ Support/Code/User/settings.json ~/.dotfiles/VSCode/
mv ~/Library/Application\ Support/Code/User/keybindings.json ~/.dotfiles/VSCode/
mv ~/Library/Application\ Support/Code/User/snippets/ ~/.dotfiles/VSCode/
```

## Create symbolic links to VSCode settings file directory

All that we need is in the correct location now, time to create symlinks to those files.

```
ln -s /Users/pawelgrzybek/.dotfiles/VSCode/settings.json /Users/pawelgrzybek/Library/Application\ Support/Code/User/settings.json
ln -s /Users/pawelgrzybek/.dotfiles/VSCode/keybindings.json /Users/pawelgrzybek/Library/Application\ Support/Code/User/keybindings.json
ln -s /Users/pawelgrzybek/.dotfiles/VSCode/snippets/ /Users/pawelgrzybek/Library/Application\ Support/Code/User
```

Boom! And it's done! Easy eh? Now you can commit the new "Code" directory to your .dotfiles repo, create symbolic links across all your machines and enjoy version controlled settings and snippets.

If you have any idea how to sync the list of plugins installed from VS Code Marketplace please let me know in the comments. Have a great day :*
