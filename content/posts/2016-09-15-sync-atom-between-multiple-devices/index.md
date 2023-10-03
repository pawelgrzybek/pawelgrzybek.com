---
title: Sync Atom between multiple devices
summary: Syncing the preferences and extensions of my code editor between all of my devices is part of my productive workflow. Here are a few methods to do it with Atom.
---

Keeping the preferences and installed extensions for my text editor in sync across all of my devices is an important part of my productive workflow. I can't think of a more annoying situation than being disturbed because of a missing snippet or plugin. I'm not sure why the creators of these tools don't explicitly provide a solution to import / export things in an easier way. [iTerm](https://www.iterm2.com/) and [Alfred](https://www.alfredapp.com/) are a great example of how to do it right — simply pick a location where your settings should be exported to and keep this file in sync with other devices (Dropbox, iCloud, git, whatever).

Text editors allow us to do the same but a small bit of hacking is required. As a long term [Sublime Text](https://www.sublimetext.com/) user I found keeping [dotfiles on Github](https://dotfiles.github.io/) the best solution. Very recently I jumped over to [Atom](https://atom.io/) and I had to keep it in sync between few computers at home and at work. Let me share with you a few possible options.

## Sync Settings Plugin for Atom

[Sync Settings for Atom](https://atom.io/packages/sync-settings) is a great plugin by [Geno Roupsky](https://github.com/groupsky). It stores all the settings, keymaps, styles, init scripts, snippets and a list of the installed packages in a single [gist](https://gist.github.com/). It requires you to create a new personal [access token](https://github.com/settings/tokens/new) on Github and put it into the plugin settings next to the gistID. This step is required to enable the Gist (which can be public or private) to communicate with all Atom instances. The final step is to trigger a "backup" on the main computer from the Command Palette — `cmd-shift-p` (macOS) or `ctrl-shift-p` (Linux/Windows). To inject the same config on another device use the "restore" command. To steal a config from your colleague use the "fork" option. It's easy and works like a charm!

## Sync Atom with dotfiles on Github

This option is a bit more manual but gives you full control and the ability to go back in time (thanks to git). Atom stores all settings files inside the `~/.atom/` directory. The trick is to move this folder to your `.dotfiles` directory and create a symlink from this directory to the original location. If you are not familiar with the concept of using `.dotfiles`, have a look at the [unofficial guide](https://dotfiles.github.io/) which is full of great examples.

```bash
# move .atom to .dotfiles
mv ~/.atom/ ~/.dotfiles/

# create a symlink to the directory inside dotfiles
ln -s ~/.dotfiles/.atom/ ~/.atom
```

Time to add the new `.atom` folder to the `.dotfiles` repository. Before doing this we need to add a few folders to our `.gitignore` file.

```bash
# Atom sync
/.atom/blob-store/
/.atom/compile-cache/
/.atom/packages/
/.atom/storage/
```

These device-specific folders don't store your settings. You may be wondering why did I add a `packages` folder for my `.gitignore`. The answer is easy - it stores the source files to all of your extensions and they may be heavy as hell! Does this mean that we need to manually manage the extensions? Nope :-) [Package Sync for Atom](https://atom.io/packages/package-sync) by [Lee Dohm](https://github.com/lee-dohm) stores a reference to all installed plugins in a `packages.cson` file. Simply install it and enable the "Create on change" and "Overwrite packages.cson" options inside the plugin settings. I'm surprised that Atom comes with a fantastic package manager, but doesn't come with this functionality by default. The only option that would be amazing to have in this plugin would be "Sync on start" but that's probably only me being fussy!

The thing that you may be concerned about is your `userId` being inside your `config.cson` file. You don't need to worry about it too much. [Apparently](https://github.com/atom/metrics/issues/18#issuecomment-36484448) it won't reveal anything sensitive. If it is still going to give you sleepless nights, you can simply disable the [Exception Reporting](https://atom.io/packages/exception-reporting) and [Metrics](https://atom.io/packages/metrics) plugins and then remove the `userId` line.

Now your `.dotfiles` are fully prepared to sync your Atom settings between all of your devices. It looks a bit more complicated than the previous method but it is definitely more powerful and reliable in my experience. When you jump on a new machine just pull the `.dotfiles` repo and run the "Package sync: Sync" command from the Atom Command Palette — `cmd-shift-p` (macOS) or `ctrl-shift-p` (Linux/Windows) — job done.

## Sync Atom via Dropbox (or any other cloud service)

The last option is to use a cloud service like Dropbox. I include this method here only because it is possible in theory but in practice it is nowhere near as reliable as the two options mentioned above. Dropbox is not a speed demon. The recent [data leak](https://www.troyhunt.com/the-dropbox-hack-is-real/) and [what it does with our operating systems](http://applehelpwriter.com/2016/08/29/discovering-how-dropbox-hacks-your-mac/) actually drove me to [drop Dropbox](http://www.drop-dropbox.com/). The decision is yours.

```bash
# move atom to dropbox
mv ~/.atom ~/Dropbox/Apps/Atom

# create a symlink to the dropbox directory
ln -s ~/Dropbox/Apps/Atom ~/.atom
```

## This is how I do it

The Sync Settings Plugin for Atom is fantastic but it doesn't give me an option to roll my settings back in time when I mess something up. This requirement is covered by git so that's why I sync it with my [dotfiles](https://github.com/pawelgrzybek/dotfiles). And the Dropbox method? Not for me.

So let me know, what do you think? Share with me your method. Do you have any suggestions? Feel free to use the comments section below. Have a great day :*
