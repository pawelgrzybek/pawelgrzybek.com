---
title: "Autostart tmux on Alacritty launch"
summary: "After using Hyper for a long time, I recently tried Alacritty for the first time and I decided to switch almost instantly. At the time of writing this post it doesn’t support multiple windows — no biggie for me because tmux can solve this limitation quickly"
photo: "2021-06-09.jpg"
---

After using [Hyper](https://hyper.is) for a long time, I recently tried [Alacritty](https://github.com/alacritty/alacritty) for the first time and I decided to switch almost instantly. This OpenGL powered terminal emulator is crazy fast, lightweight and configurable. Love it!

At the time of writing this post it doesn't support multiple windows, although I know that the [support for multiple windows in Alacritty is coming soon](https://github.com/alacritty/alacritty/issues/607#issuecomment-844863126). No biggie for me because [tmux](https://github.com/tmux/tmux) can solve this limitation quickly. Ideally, I wanted to use this terminal multiplexer whenever I launch Alacritty. If you are after a similar solution, I have a solution that works like a charm.

```yaml
# ~/.alacritty.yaml

shell:
  program: /bin/zsh
  args:
    - -l
    - -c
    - "tmux attach || tmux"
```

![tmux running in Alacritty](/photos/2021-06-09-1.png)

If tmux session exists, this command will automatically attach to it. It will create a new session otherwise. A quick, simple tip for y’all today. Enjoy geeks!
