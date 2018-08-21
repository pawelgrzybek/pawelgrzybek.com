---
title: "Semantic Versioning (SemVer) explained"
description: "The versioning of software seems to be a confusing concept for developers. The meaning behind the versioning format isn't coming out of the blue so let me help you to understand it."
photo: 2018-08-22.jpg
draft: true
---

Software nowadays is rarely built independently without the help of external packages, plugins or frameworks. It normally comes with a bunch of dependencies developed by other developers and we need a way to track the versions of them. Following a meaningful convention helps to track software progress and avoid API collisions. Adopted by multiple ecosystems and software architectures [Semantic Versioning (commonly called SemVer)](https://semver.org/) helps with this.

The `major.minor.patch` notation comes with a ton of information about the software. Let me guide you through the individual components:

- `major` - introduces non-backward-compatible changes to the API
- `minor` - introduces backward-compatible changes to the API
- `mpatch` - introduces bug fixes

Versioning starts at `0.1.0` — unfortunately, however, package creators don't always follow this guideline. Everything lower than `1.0.0` indicates the software is in its development phase. Version `1.0.0` is the one that is ready to share with other developers — this rule is not always followed by the end user though.

## Version ranges

Inspired by [Bundler](https://bundler.io/) (the package manager used by Ruby developers) ranges are commonly used to represent a version scope. Have you ever seen `-`, `<`, `<=`, `>` or `>=` in the version descriptor? This is exactly what I am talking about. For instance `>=1.3.3 <=2.4.7` matches anything from (and including) `1.3.3` all the way up to (and including) `2.4.7`.

There are a few range descriptors introduced by the node ecosystem that aren't that self explanatory. Have you ever seen `*`, `^` or `~` in front of a dependency version? Let me help you to embrace these symbols.

- `*` - update to the latest version (including major)
- `^` - update to the latest minor release
- `~` - update to the latest patch

Let's use the current React 16.4.2 as an example.

### The * range specifier

```json
{
  "dependencies": {
    "react": "*"
  }
}
```

Personally I wouldn't recommend using `*` in your client-facing software - ever. It may cause unpredictable consequences if the API changes drastically. In this case it means the dependency should always update to the latest stable version.

### The caret ^ range specifier

```json
{
  "dependencies": {
    "react": "^16.4.0"
  }
}
```

This notation accepts all versions that span `>=16.4.0 <17.0.0`. The equivalent notation would be `16` and `16.x`.

### The tilde ~ range specifier

```json
{
  "dependencies": {
    "react": "~16.4.0"
  }
}
```

This notation accepts all versions that span `>=16.4.0 <16.5.0`. The equivalent notation would be `16.4` and `16.4.x`.

## Do your versioning right

Hopefully this short article helped you to understand semantic versioning from both the user and the developer perspective. There is no point in messing around with these core principles as it may come back to bite you or the creators of your favourite software. Just do it right. Until the next one, peace!
