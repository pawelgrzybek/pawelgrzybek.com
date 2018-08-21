---
title: "Semantic Versioning (SemVer) explained"
description: "Version of a software seems to be a confusing aspect for developer. The meaning of this versioning format isn't coming out of blue so let me help you to understand it."
photo: 2018-08-22.jpg
draft: true
---

Software nowadays is rarely built independently without a help of external packages, plugins or frameworks. It normally comes with a bunch of dependencies developed by other developers and we need a way to track versions of them. Following a meaningful convention helps to track software progress and avoid API collisions. Adopted by multiple ecosystems and software architectures [Semantic Versioning (commonly called SemVer)](https://semver.org/) helps with it.

The `major.minor.patch` notation comes with a ton of information about the software. Let me guide you through individual bits:

- `major` - introduces non-backward-compatible changes in API
- `minor` - introduces backward-compatible changes in API
- `mpatch` - introduces bug fixes

It starts at `0.1.0` — unfortunately packages creators don't always follow this guideline. Everything lower than `1.0.0` is in development phase. Version `1.0.0` is the one that is ready to share with other developers — this rule is not always followed by the end users though.

## Version ranges

Inspired by [Bundler](https://bundler.io/) (package manager used by Ruby developers) ranges are commonly used to represent a version scope. Have you ever seen `-`, `<`, `<=`, `>` or `>=` in version descriptor? This is exactly what I am talking about. For instance `>=1.3.3 <=2.4.7` matches anything from (and including) `1.3.3` all the way up to (and including) `2.4.7`.

There are few range descriptors introduced by node ecosystem that aren't that self explanatory. Have you ever seen `*`, `^` or `~` in front of a dependency version? Let me help you to embrace these symbols.

- `*` - update to the latest version (including major)
- `^` - update to the latest minor release
- `~` - update to the latest patch

Let's use current React 16.4.2 as an example.

### The * range specifier

```json
{
  "dependencies": {
    "react": "*"
  }
}
```

Personally I wouldn't recommend using `*` in your client-facing software never ever in your life. It may cause unpredictable consequences because the API may change drastically. In this case it means to always update to the latest stable version.

### The caret ^ range specifier

```json
{
  "dependencies": {
    "react": "^16.4.0"
  }
}
```

This notation accepts all version that span `>=16.4.0 <17.0.0`. Equivalent notation would be `16` and `16.x`.

### The tilde ~ range specifier

```json
{
  "dependencies": {
    "react": "~16.4.0"
  }
}
```

This notation accepts all version that span `>=16.4.0 <16.5.0`. Equivalent notation would be `16.4` and `16.4.x`.

## Keep your version right

Hopefully this short article helped you out to understand semantic versioning from user and developer perspective. There is no point to mess around with this core principles as it may bite you or creators of your favorite software out. Just keep it right. Until the next one, peace!
