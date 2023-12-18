---
title: "The Deno Language Server configuration in Helix"
summary: "I bumped into a little config roadblock. Helix comes out of the box with LSP support. The Deno LSP server can be enabled via the deno lsp command. It took me a moment to make these two play nicely together, so I am sharing my config to spare you a little hassle."
---

[The Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) is the glue between your code editor and the features provided by the language server. Auto-complete, linting, go-to definition, members renaming, and code actions are just a few examples of things you do daily, thanks to LSP integration.

Today, I worked on a little [Deno](https://deno.com) project, and since I recently switched from Visual Studio Code to [Helix](https://helix-editor.com), I bumped into a little config roadblock. Helix comes out of the box with LSP support. The Deno LSP server can be enabled via the `deno lsp` command. It took me a moment to make these two play nicely together, so I am sharing my config to spare you a little hassle.

```toml
[[language]]
name = "typescript"
language-id = "typescript"
scope = "source.ts"
injection-regex = "^(ts|typescript)$"
file-types = ["ts"]
shebangs = ["deno"]
roots = ["deno.json", "deno.jsonc", "package.json"]
auto-format = true
language-servers = ["deno-lsp"]

[language-server.deno-lsp]
command = "deno"
args = ["lsp"]

[language-server.deno-lsp.config.deno]
enable = true
unstable = true
suggest.imports.hosts = { "https://deno.land" = true }
inlayHints.parameterNames.enabled = "all"
inlayHints.parameterTypes.enabled = true
inlayHints.variableTypes.enabled = true
inlayHints.propertyDeclarationTypes.enabled  = true
inlayHints.functionLikeReturnTypes.enabled = true
inlayHints.enumMemberValues.enabled = true
```

Paste this into the `languages.toml` configuration file (located in `~/.config/helix` to apply changes globally or in workspace-specific `.helix` config folder). Due to some restrictions and how Deno LSP works, go-to definition is not working in Helix, but that may be resolved in the future. Hopefully, this quick copy/paste article helped you out.
