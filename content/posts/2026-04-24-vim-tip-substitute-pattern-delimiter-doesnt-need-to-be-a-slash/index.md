---
title: "Vim tip: substitute pattern delimiter doesn't need to be a slash"
summary: "Did you know that slash is not the only valid pattern delimiter? How many times in the past have you escaped all the slashes in the URL or file path?"
---

I initially published [this tip on r/neovim Reddit](https://www.reddit.com/r/neovim/comments/1stjfae/tip_any_singlebyte_character_works_as_a_pattern/), and folks liked it. It will soon probably disappear in the maze of memes, so it probably makes sense for it to be a blog post. Here it is.

Do you know the substitute command `:s` in Vim/NeoVim? I bet you do!

```
:s/one/two
```

But did you know that slash `/` is not the only valid pattern delimiter? How many times in the past have you escaped all the slashes in the URL or file path? Any single-byte non-alphanumeric character (other than `\`, `"` or `|`) will do. The same one is valid for the `sed` CLI. Look at the example.

```
%s,some/path,aonther/one
```

{{< figure-video path="nvim.mp4" caption="Using substitute command in Vim with a comma as a pattern delimiter" >}}

I hope you liked the tip geeks🐘 💨
