---
title: "A few practical use cases for npm dependency queries"
summary: "Sometimes we need to get some insights about the packages that we use. Manually going through the modules directory sounds like a chore, but luckily there is a better way."
---

I don’t want to joke about the JavaScript ecosystem and its dependencies because we have seen enough of it. Let’s accept that our projects consist of hundreds of third-party modules — when it works, it works fine and pays the bills.

Sometimes we need to get some insights about the packages that we use. For example, what’s the licence of the software we rely on? What is the version of the particular package? How many modules we depend on are created by [Sindre Sorhus](https://sindresorhus.com), and how is that even possible? Manually going through `node_modules` sounds like a chore, but luckily there is a better way.

The [`npm query` command](https://docs.npmjs.com/cli/v8/commands/npm-query) added to [v8.16.0](https://github.com/npm/cli/releases/tag/v8.16.0) accepts a [CSS-like dependency selector](https://docs.npmjs.com/cli/v8/using-npm/dependency-selectors#dependency-selector-syntax-v100) and returns a filtered JSON list of dependencies from your project. Let’s look at a few practical examples that can help us in our day-to-day job.

## Basic npm queries

```bash
# List all dependencies
npm query "*"
```

```bash
# List all dependencies with "react" in their name
npm query "[name*=react]"
```

```bash
# List all dependencies with a licence other than MIT
npm query ":not([license=MIT])"
```

```bash
# List all dependencies without dependencies
npm query ":empty"
```

```bash
# List all dependencies that seek funding
npm query ":has([funding])"
```

```bash
# List all packages created by Sindre Sorhus 🦄
npm query ":attr(author, [name=\"Sindre Sorhus\"])"
```

## Advanced npm queries

The result of the npm query command is unformatted JSON which is OK, but with tools like the [`jq`](https://stedolan.github.io/jq/) we can achieve a lot more! Have a look at a few more advanced examples.


```bash
# List all dependencies (formatted output)
npm query "*" | jq '.'
```

```bash
# List only names of packages created by Sindre Sorhus 🦄
npm query ":attr(author, [name=\"Sindre Sorhus\"])" | jq '.[] | .name'
```


```bash
# Uninstall all packages with "gulp" in their name
npm query "[name*=gulp]" | jq 'map(.name)|join("\n")' -r | xargs -I {} npm uninstall {}
```

## Some helpful resources

I hope you liked this brief article. Let me leave you with a list of helpful resources to deepen your knowledge in a field. Until next time, stay groovy 👋

- ["Introducing the new npm Dependency Selector Syntax" on GitHub blog](https://github.blog/changelog/2022-08-03-introducing-the-new-npm-dependency-selector-syntax/)
- ["Use npm query and jq to dig into your dependencies" by Elijah Manor on YouTube](https://youtu.be/h_ZpixOgKDY)
