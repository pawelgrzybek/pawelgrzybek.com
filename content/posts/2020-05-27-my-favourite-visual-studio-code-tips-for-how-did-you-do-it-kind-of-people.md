---
title: "My favourite Visual Studio Code tips for \"how did you do it\" kind of people"
description: ""
photo: 2020-05-27.jpg
---

If it is not a web browser, [Visual Studio Code](https://code.visualstudio.com) is the application that I spent the most time using. "How did you do it" is something that I hear quite often using it in front of the other developers. This article is exactly for this kind of people — Visual Studio Code users keen to learn a few little productivity tips, keyboard shortcuts or little known hidden gems.

- [Use Visual Studio Code as a diff tool](#use-visual-studio-code-as-a-diff-tool)
- [Switch theme based on the OS appearance](#switch-theme-based-on-the-os-appearance)
- [Language-specific settings](#language-specific-settings)
- [Change font size without changing the size of UI elements](#change-font-size-without-changing-the-size-of-ui-elements)
- [More descriptive project title (macOS)](#more-descriptive-project-title-macos)
- [Rename symbol](#rename-symbol)

## Use Visual Studio Code as a diff tool

Having a simple diff tool to compare two files very often comes handy. [Command-line interface for Visual Studio Code](https://code.visualstudio.com/docs/editor/command-line) has one.

```
code --diff one.js two.js
```

![Use Visual Studio Code as a diff tool](/photos/2020-05-27-1.jpg)

## Switch theme based on the OS appearance

Modern operating systems now support light and dark color schemes. Wouldn't be cool to adjust the look of our editor based on a preferred mode? Turns out that [auto-switch theme based on OS color scheme](https://code.visualstudio.com/updates/v1_42#_auto-switch-theme-based-on-os-color-scheme) is to our disposal since version 1.42 (January 2020). That's the snippet required to enable it.

```json
{
  "window.autoDetectColorScheme": true,
  "workbench.preferredDarkColorTheme": "GitHub Dark",
  "workbench.preferredLightColorTheme": "GitHub Light",
}
```

![Switch theme based on the OS appearance](/photos/2020-05-27-2.gif)

## Language-specific settings

Some customizations may be useful only for specific languages. My specific use case for this feature is to tweak slightly the Markdown display configuration. In contrast to code, in Markdown files I don't care too much about line numbers. Word wrapping comes helpful in reading/writing long-form paragraphs.

```json
{
  "[markdown]": {
    "editor.lineNumbers": "off",
    "editor.wordWrap": "bounded",
    "files.trimTrailingWhitespace": false
  },
}
```

## Change font size without changing the size of UI elements

Bumping up the font size of my editor is very handy during live demos and pair-programming sessions. Clicking `cmd +` and `cmd -` is a second nature to manipulate the size of a text. Unfortunately, these two shortcuts not only change the size of a font but affect the scale of all the UI elements. If it is not something that you want, add this to your `keybindings.json`.

```json
[
  {
    "key": "cmd+=",
    "command": "editor.action.fontZoomIn"
  },
  {
    "key": "cmd+-",
    "command": "editor.action.fontZoomOut"
  },
  {
    "key": "cmd+0",
    "command": "editor.action.fontZoomReset"
  }
]
```

![Change font size without changing the size of UI elements](/photos/2020-05-27-3.gif)

## More descriptive project title (macOS)

When I work with multiple projects, I like to have them open as a separated spaces (macOS). Unfortunately titles in Mission Control aren't helpful enough to quickly identify the project of interest. One picture worth thousands words.

![Default Visual Studio Code window title](/photos/2020-05-27-4.jpg)

With a one-liner config change, my life became much easier by showing a folder name, instead of the confusing path that is a default setting.

```json
{
  "window.title": "${folderName}",
}
```

![More descriptive Visual Studio Code window title](/photos/2020-05-27-5.jpg)

## Rename symbol

I change symbol names all the time. Simply type <kbd>F2</kbd> to [rename all occurrences of particular symbol](https://code.visualstudio.com/docs/editor/refactoring#_rename-symbol). It is not working for all languages, but inside JavaScript / TypeScript files it works like a charm.

![More descriptive Visual Studio Code window title](/photos/2020-05-27-6.gif)


