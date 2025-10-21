---
title: "Make Vim macros fun to work with"
summary: "Vim is a superb tool for repeating changes. The dot command and macros are insanely powerful, but it is worth knowing a few little tricks to work with them efficiently."
---

Vim is a superb tool for repeating changes, and there is even a whole [chapter in the user manual about repeating commands](https://vimhelp.org/repeat.txt.html). Before we discuss macros, you should master the <kbd>.</kbd> dot command first. It repeats the previous change, and no matter how trivial that sounds, this is the command I use a zillion times a day.

{{< figure-video path="dot-command.mp4" caption="I remove a class attribute from the HTML element using d2f\" and repeat the same change on multiple elements via the dot command." >}}

It is super useful and saves so much time, but it is limited to the single change. There is a tool to solve this limitation! Macros are sequences of commands and the concept is simple, but the feature is as powerful as your Vim manoeuvring skills. It is a sequence of keystrokes recorded and stored in a register that you can replay later. You record one by pressing `q{register}` followed by a series of commands and `q` to stop the recording. The register can be a number of lowercase character.

{{< figure-video path="macro.mp4" caption="This is a macro example where I record a macro to append a keyword, change the casing, change the quotation type and append a semicolon at the end. Afterwards I replay this macro on the lines below." >}}

The example above is not the most complicated macro, but good enough to prove its usefulness. Let's break the command down.

1. <kbd>qa</kbd> - start recording a macro to register `a`
1. <kbd>I</kbd> - Enter insert mode at the beginning of a line
1. <kbd>const </kbd> - add a `const` keyword followed by the a single space
1. <kbd>Esc</kbd> - get back to the normal mode
1. <kbd>f\_</kbd> - go to the `_` underscore
1. <kbd>x</kbd> - remove the `_` underscore
1. <kbd>~</kbd> - convert the character under the cursor to uppercase
1. <kbd>f"</kbd> - go to the `"`
1. <kbd>sr"\'</kbd> - surround replace `""` with `''` (enabled by the mini.surround plugin)
1. <kbd>A</kbd> - Enter insert mode at the end of the line
1. <kbd>;</kbd> - add a `;` semicolon
1. <kbd>Esc</kbd> - get back to the normal mode
1. <kbd>q</kbd> - stop the macro recording
1. <kbd>j</kbd> - go one line down
1. <kbd>@a</kbd> - replay the macro from the `a` register
1. <kbd>@@</kbd> - replay the most recently executed macro

Trivial example, but imagine the file having hundreds of lines. You can replay the recorded macro manually line by line like I did in the example above, or using two other methods.

- <kbd>100@a</kbd> - Pass a count, in this case 100, to sequentially run the macro 100 times
- <kbd>:normal @a</kbd> - Replay in parallel for all selected lines

# The remedy for macro pressure

I don't know about you, but every time I enter a new macro recording, my brain freezes, I forget all my Vim skills and the chance I fuck it up is pretty high. As I said before, a macro is a sequence of recorded commands stored in the register, so luckily we can refine them in the buffer. Paste it using `"{registry}p` or use a `:put {registry}` command, amend and save it back using the `^"{registry}y$`. Easy!

You may encounter keyboard codes like `^[` for escape, `^M` for enter or `<80>kb` for backspace. This is how Vim represents some keys. The list of these key codes is long, but luckily you don't need to remember them all. Just type <kbd>CTRL-v</kbd> while you're in insert mode, followed by the key, and Vim will insert the right code. This is a huge helper while crafting more complicated macros.

{{< figure-video path="ctrl-v.mp4" caption="Using <kbd>CTRL-v</kbd> followed by the key in the insert mode to insert a right key code. A super helpful feature when working with macros." >}}

I hope that helps. Let me know on [Mastodon](https://mastodon.social/@pawelgrzybek), [Bluesky](https://bsky.app/profile/pawelgrzybek.com), or in the comments section below if you have any other tips that make working with macros more fun.
