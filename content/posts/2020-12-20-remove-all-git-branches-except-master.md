---
title: "Remove all git branches except master"
summary: "After working on a project for a while, it is easy to end up with a lot of legacy branches that are not anymore needed. Removing one by one would be a cumbersome task. Luckily you don't have to!"
photo: 2020-12-28.jpg
---

After working on a project for a while, it is easy to end up with a lot of legacy branches that are not anymore needed. Removing one by one would be a cumbersome task. Luckily you don't have to!

```
git branch | grep -v "master" | xargs git branch -D
```

Let me explain each part:

1. `git branch` — list all branches
2. `grep -v "master"` — remove `master` from the list
3. `xargs git branch -D` — execute `git branch -D` against remaining branches

So helpful, isn't it? Catch you next time 👋
