---
title: "Sorting and filtering in Helix"
summary: "I recently posted a quick tip about sorting in Helix that quickly became the second most popular subreddit post ever. This is a good indicator of two things: people found it helpful, and it should be a blog post. So here it is!"
---

I recently posted [a quick tip about sorting in Helix](https://www.reddit.com/r/HelixEditor/comments/1b9j40u/sorting_in_helix/) that quickly became the second most popular subreddit post ever. This is a good indicator of two things: people found it helpful, and it should be a blog post. So here it is!

Helix comes with a built-in `:sort` command mentioned on the website, but its functionality isn't well documented. It works on multiple selections and is as powerful as your multi-selection game. Another way of placing stuff in order is by piping a selection to the `sort` CLI program. Similarly, we can pipe a selection to whatever CLI you want. We can go crazy that way! Let's have a look at a few examples.

## Sort multiple lines (:sort command)

The simplest form of using `:sort` command is sorting multiple lines.

{{< video path="sort-1.mp4" >}}

1. <kbd>%</kbd> - Select everything
1. <kbd>Alt-s</kbd> - Split lines into individual selections
1. <kbd>:sort</kbd> - Sort command

## Sort complex selection (:sort command)

Even though it looks a bit more complicated, the same method can be used on more complex selections as long as they are symmetrical.

{{< video path="sort-2.mp4" >}}

1. <kbd>%</kbd> - Select everything
1. <kbd>s user</kbd> - Create multiple selection
1. <kbd>v jjgl</kbd> - Expand selections
1. <kbd>:sort</kbd> - Sort command

## Sort multiple lines (sort CLI)

The `sort` takes a singular selection compared to the built-in `:sort` command. This produces the same output as the method in the first example.

{{< video path="sort-3.mp4" >}}

1. <kbd>%</kbd> - Select everything
1. <kbd>| sort</kbd> - Pipe selection to `sort` CLI

## Randomize order (sort CLI)

We can randomize content by piping `stdin` (single selection) to `sort -R`.

{{< video path="sort-4.mp4" >}}

1. <kbd>%</kbd> - Select everything
1. <kbd>| sort -R</kbd> - Pipe selection to `sort -R` CLI

## Sort, remove duplicates and count occurrences (uniq and sort CLI)

How about sorting the output in descending order, removing duplicates and adding a count of occurrences? No problem 😉

{{< video path="sort-5.mp4" >}}

1. <kbd>%</kbd> - Select everything
1. <kbd>| sort | uniq -c | sort -r</kbd> - Pipe selection to `sort | uniq -c | sort -r` CLI to remove duplicates, acc counted and order lines in reverse order

- - -

I hope you see how powerful this is. Perhaps this post gave you some ideas about using these features in your projects. Feel free to share some of your favourite Helix tips and tricks with me in the comments below. Until next time, stay curious ✌️
