---
title: TIL — git switch & git restore
summary: Switching branches and restoring files to its initial state are very common operations. Why the hell should we use a single command to perform such different actions?
---

It was such an ordinary day at work. I was pair programming with my friend (hi [Pedro](https://www.instagram.com/fidalgodev/)), we finished a feature and then he jumped to the command line to type `git switch`. Instant WTF moment! I have been using `git` for years and I have never come across this one. I jumped on the docs, learned a thing and now it is time to share it with you.

## New stuff in Git 2.23

Switching branches and restoring files to its initial state are very common operations. Why the hell should we use a single `git checkout` command to perform such different actions? Turns out that [Git 2.23](https://github.com/git/git/blob/master/Documentation/RelNotes/2.23.0.txt) added much more descriptive commands:

- `git switch` to switch branches
- `git restore` to restore working tree files

Nice and simple! Let's have a look at the related part of release notes.

> Two new commands "git switch" and "git restore" are introduced to split "checking out a branch to work on advancing its history" and "checking out paths out of the index and/or a tree-ish to work on advancing the current history" out of the single "git checkout" command.

## Examples

Some examples of how to use commands that we have learned today. Enjoy!

```bash
# switch to new-feature branch
git switch new-feature

# create and switch to new-feature branch
git switch -c new-feature

# create and switch to blank new-feature branch
# all tracked files are removed
git switch --orphan new-feature
```

```bash
# discard index.js changes
git restore index.js

# discard all files in the current directory
git restore .

# restore index.js from master branch
git restore --source master index.js
```
