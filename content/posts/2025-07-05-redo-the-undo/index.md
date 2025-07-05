---
title: "Redo the undo"
summary: "Basic actions that can save the day, but also give some headaches and cause serious data loss. Let's explore how they works and how to use them."
---

The undo and redo operations are built into most apps where you can edit something. They are so basic that even non tech-savvy users know about them. Hit the <kbd>⌘+z</kbd> to undo or <kbd>⌘+⇧+z</kbd> to redo (or the equivalent on your operating system). Touch interfaces usually use iconography that does the same job.

{{< figure
src="undo-redo-icons.jpg"
alt="Undo and redo actions are often represented as back and forth icons"
caption="Undo and redo actions are often represented as back and forth icons" >}}

Sometimes these commands can save the day, but they can also give some headaches and cause serious data loss. I’m a programmer, and most of the stuff I do I track using VCS (version control system), so naturally, when I think of a change, the picture of a tree and the branches is envisioned in my head. It is also the norm for me to write some code, just to undo dozens of changes and redo them in the next twelve milliseconds. Let's look at this super simple example.

```
I like cats.
```

For the brevity's sake, let’s assume that typing this text down generates a linear graph of three actions.

```
Action  | Result       | Current state
--------------------------------------
+ I     | I            |
+ like  | I like       |
+ cats. | I like cats. | ◄
```

When you undo a change, you move the "current state" to the previous stage. When you redo you move it to the next one. What happend when you undo twice, and start typing to replace the word "like" with "love"?

```
Action  | Result       | Current state
--------------------------------------
+ I     | I            | ◄
+ like  | I like       |
+ cats. | I like cats. |
```

```
Action  | Result       | Current state
--------------------------------------
+ I     | I            |
+ love  | I love       | ◄
```

The new inserted word totally messed up the graph of changes and as a result we lost information about the remaining part of the graph, "cat" in this example. Loosing a single word is no biggie but imaging writing a disertatin and loosing three paragraphs of content. This is how undo and redo works in most of the apps.

## Vim undo/redo & IntelliJ local history

It is the structure of undo trees in Vim that inspired me to write this article down. Vim lets you switch the state of your buffers (files loaded into the window) back and forth like most of the other editors, but it also persists diverging branches, which makes data loses also impossible to happen (if you only know how to recover them). [The undotree Vim plugin](https://github.com/mbbill/undotree) is my favourite way of traversing through the graphs of undofiles.

{{< figure
src="undotree.jpg"
alt="The undotree Vim plugin exposes the undo tree and allows for the easy switches between branches"
caption="The undotree Vim plugin exposes the undo tree and allows for the easy switches between branches" >}}

IntelliJ family of editors has a concept of [local history](https://www.jetbrains.com/help/idea/local-history.html) that also allows you to recover stuff in the case of accidental data loss. Is there a similar concept in other popular apps you know of?

Thanks for reading my random rumblings. Until next time, stay curious 🤗
