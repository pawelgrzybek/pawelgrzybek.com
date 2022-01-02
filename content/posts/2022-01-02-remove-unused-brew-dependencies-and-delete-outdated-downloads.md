---
title: "Remove unused brew dependencies and delete outdated downloads"
summary: "Uninstalling a brew dependency does not remove its dependencies. There is an easy solution for that, though. If you want to delete outdated formulas, I also get you covered."
photo: "2022-01-02.jpg"
---

You're reading it, so I assume you know what the brew is and most likely, you use it. If you don't, check out my ["Homebrew — the best friend of the macOS user"](https://pawelgrzybek.com/homebrew-the-best-friend-of-the-macos-user/) that I published a few years ago.

Have you ever been wondering why `brew list` comes back with a gazillion packages even though you installed only a handful of them? These are your packages and all their dependencies. Compare it with the output of `brew leaves` that shows only top-level packages (most likely the ones you explicitly installed).

For instance, when you do `brew install git`, you add `git` executable and `gettext` and `pcre2` as dependencies. Unfortunately, when you reverse this process with `brew uninstall git`, the main formula disappears, but you end up with two no longer needed dependencies. After a while, it is easy to end up with hundreds of programs that clutter your hard drive. Luckily, there's a simple solution to solve this problem.

```
brew uninstall git
brew autoremove
```

The `autoremove` command removes all the hanging, no longer needed packages from your computer. So say goodbye to unneeded dependencies and messy `brew list` output.

```
~ brew help autoremove 

Uninstall formulae that were only installed as a dependency of another formula
and are now no longer needed.
```

If you want to take your tidy-up routine to the next level, you can also run `brew cleanup`. This command removes downloads for outdated formulas and casks.

```
~ brew help cleanup

Remove stale lock files and outdated downloads for all formulae and casks, and
remove old versions of installed formulae. If arguments are specified, only do
this for the given formulae and casks. Removes all downloads more than 120 days
old. This can be adjusted with HOMEBREW_CLEANUP_MAX_AGE_DAYS.
```

OK. Enough procrastination, pretending that you are doing productive work by shaving off a few MBs of your hard drive. Get back to work!
