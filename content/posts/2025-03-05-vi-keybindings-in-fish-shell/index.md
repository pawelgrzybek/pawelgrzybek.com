---
title: "Vi keybindings in fish shell"
summary: " I was blown away today when I learned that I can use vim keybindings directly in the fish shell, without ever opening vim. Absolutely killer productivity tip!"
---

Some time ago, [Stefan](https://www.stefanjudis.com/) shared a great tip on [how to edit a long shell command using the default editor](https://www.stefanjudis.com/today-i-learned/edit-long-shell-commands-in-your-usdeditor/) in bash and zsh. I chipped in and added a recipe for fish. I was blown away today when I learned that I can [use vim keybindings directly in the fish shell](https://fishshell.com/docs/current/cmds/fish_vi_key_bindings.html), without ever opening vim. Absolutely killer productivity tip!

You can enable it by adding this command to your `config.fish` file.

```fish
set -g fish_key_bindings fish_vi_key_bindings in config.fish.
```

{{< figure-video path="vi-keybindings-in-fish-shell.mp4" caption="" >}}

From now on you will see a new mode indicator in your prompt. As everything else in this shell, [the `fish_mode_prompt` is highly ocnfigurable](https://fishshell.com/docs/current/cmds/fish_mode_prompt.html). This is the way I tweaked mine.

```fish
function fish_mode_prompt
    switch $fish_bind_mode
        case default
            set_color green --bold
            echo '[N] '
        case insert
            set_color brblack --bold
            echo '[I] '
        case visual
            set_color green --bold
            echo '[V] '
    end
end
```
