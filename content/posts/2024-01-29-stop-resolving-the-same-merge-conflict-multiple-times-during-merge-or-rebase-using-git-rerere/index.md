---
title: "Stop resolving the same merge conflict multiple times during merge or rebase using git rerere"
summary: "If you read it, you probably experienced a continued queue of resolving the same merge conflict multiple times while merging or rebasing git branches. Wouldn’t it be helpful if git could reuse recorded resolution for us?"
---

If you read it, you probably experienced a continued queue of resolving the same merge conflict multiple times while merging or rebasing git branches. Wouldn't it be helpful if git could "reuse recorded resolution" for us? The ["rerere" tool](https://git-scm.com/book/en/v2/Git-Tools-Rerere) does precisely that, and you can enable it using the command below.
```
 git config --global rerere.enabled true
```

```
# .gitconfig

[rerere]
  enabled = true
```

Thanks for [this tip Max](https://front-end.social/@mxbck/111742602728977605) 🫶
