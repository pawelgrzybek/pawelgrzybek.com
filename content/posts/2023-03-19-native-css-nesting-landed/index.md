---
title: "Native CSS nesting landed"
summary: "If you asked me a few years ago about my favourite Sass features, I would tell you about variables and nesting at the top of my list. Then, in 2016, CSS Custom Properties landed, massively changing my workflow. So, fast forward to 2023, and I am stoked to tell you that native CSS nesting has landed!"
---

If you asked me a few years ago about my favourite [Sass](https://sass-lang.com) features, I would tell you about variables and nesting at the top of my list. Then, in 2016, [CSS Custom Properties](/css-custom-properties-explained/) landed, massively changing my workflow. So, fast forward to 2023, and I am stoked to tell you that [native CSS nesting](https://w3c.github.io/csswg-drafts/css-nesting-1/) has landed!

Remember that while writing this article, [the browser support is limited](https://caniuse.com/css-nesting) to Chrome in version 112 and [Safari Technology Preview 162](https://webkit.org/blog/13703/release-notes-for-safari-technology-preview-162/). But hey, remember that flexbox was a bleeding-edge technology a few years ago, and today, you cannot even centre a `div` without it 😜

## Let the community decide

["Help pick a syntax for CSS nesting" on Chrome Developers Blog](https://developer.chrome.com/blog/help-css-nesting/) followed by ["Help choose the syntax for CSS Nesting" on WebKit blog](https://webkit.org/blog/13607/help-choose-from-options-for-css-nesting-syntax/) presented multiple syntax options. The decision was made based on community feedback. I loved it so much! Collaboration between browser vendors, in this case, was more prominent than ever before. Also, the communication between spec creators and the Web community felt so good!

## CSS Nesting by example

The syntax for native CSS nesting should be familiar to everyone who has used Sass before. Let me use a few before/after examples as a syntax reminder and to illustrate the discrepancy.

### Basics


```css
/* before */
article {
  padding: 1rem;
}

article .title {
  color: salmon;
}

article .title.title--bold {
  font-weight: bolder;
}
```

```css
/* after */
article {
  padding: 1rem;

  .title {
    color: salmon;
    
    &.title--bold {
      font-weight: bolder;
    }
  }
}
```

Look how concise, easy to read and refactor this example is. There is nothing new in this example for everyone familiar with Sass nesting rules. Alternatively, the `.title` element could also be prefixed with `&` symbol to explicitly signify the placement of the parent class. It is required in the case of `&.title--bold` to chain `.title--bold` modifier class to title `.title` element.

### Nested media-queries

```css
/* before */
article {
  padding: 1rem;
}

@media (width >= 960px) {
  article {
    font-size: 2rem;  
  }
}
```

```css
/* after */
article {
  padding: 1rem;
  
  @media (width >= 960px) {
    font-size: 2rem;
  }
}
```

Nested media queries are one of my favourite parts of Sass nesting. CSS works precisely the same in that regard.

### Nesting selector with an identifier (a type selector)

```css
/* before */
form {
  padding: 1rem;
}

form input {
  outline: 2px solid #333;
}
```

```css
form {
  padding: 1rem;

  input {
    outline: 2px solid #333;
  }
}
```

<del>This is the main difference between CSS Nesting and the one you know from your favourite preprocessor. Due to the limitations of browser parsing engines, the `&` is mandatory in front of an identifier (a type selector, in other words). If the selector starts with `&`, `@`, `:`, `.`, `>`, `~`, `+`, `#`, `[` or `*`, you can skip the `&` symbol. Alternatively, you can write it using the `:is()` pseudo-class, like so…</del>

Luckily, the spec has changed, and the relaxed syntax for nesting identifiers is now possible, which is pretty much the same as in Sass. The `&` symbol is optional in front of an identifier (a type selector, in other words), and it is no longer mandatory as it was in the initial version of the specification.

This is the very first version of the CSS Nesting specification. Keep in mind that the feature's scope and syntax limitation may change in the future as the specification evolves. For example, do you remember the "parent selector"? It was impossible to implement a few years ago, but today it is one of the coolest modern CSS features.

I hope that helped you out 🫶
