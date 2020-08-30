---
title: BEM with Emmet
summary: Emmet is one of my favourite plugins for a lightning fast HTML & CSS workflow. BEM methodology helps me to keep my projects sane. Let’s try them together!
photo: 2015-10-17.jpg
---

You’ll notice a Russian theme to today’s post. [Emmet](http://emmet.io/), created by [Sergey Chikuyonok](https://twitter.com/chikuyonok) from Moscow, is a fantastic extension available for the majority of today’s popular code editors. [BEM](https://en.bem.info/) (Block, Element, Modifier) is a very widely used methodology that helps me to keep my projects sane and well organised. It is created by some very clever guys from Russia’s largest search engine — [Yandex](https://www.yandex.com/).

BEM requires a lot of typing, but Emmet helps you to create a markup with less typing. You probably can guess where I’m going with this. If not, have a look at [Wes’s tweet](https://twitter.com/wesbos/status/648907410929664000) that inspired me to dive into the subject.

## Emmet filters

Emmet is of the best things ever made for developers. It allows you to expand small abbreviations to serious chunks of code. Have a look at this easy example:

![Emmet](/photos/2015-10-17-1.gif)

Cool, yeah? I hope that you’re already using it, but if not go [here](http://emmet.io/download/) and download the extension to your editor of choice. But that’s not everything that it comes with. One of the features are filters:

> Filters are special post-processors that modify expanded abbreviation right before output to the editor.

Using filters is as easy as passing pipe (`|`) followed by shortcut of a filter after abbreviation. Let’s make our output single-lined by passing the `|s` filter.

![Emmet filters](/photos/2015-10-17-2.gif)

## BEM (Block, Element, Modifier)

This article is not about how amazing or ugly this methodology is. It works for me on the majority of my projects and it helps me a lot to keep my project well organised. If you would like to learn more about it, I highly recommend you read [official documentation](https://en.bem.info/) or [Harry’s article](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). Developer’s preference are different and some prefer to separate blocks and elements by a single underscore, some prefer double underscores. It’s the same with the modifier classes, some prefer a single hyphen, some prefer double hyphens. I prefer to follow the official notation with double separators. Let’s stick to the `article` example and have a look at how to BEMify this markup:

```html
<article class="post">
  <div class="post__title"></div>
  <div class="post__date"></div>
  <div class="post__content"></div>
</article>
```

## Using BEM filter with Emmet

You know about filters, you know about BEM. Let’s have a look at how to apply the `|bem` filter in practice:

![Emmet bem filter](/photos/2015-10-17-3.gif)

Love it! Massive time saver! If you use Sublime Text you may need to apply your own settings to customise the output for your needs. Just go to `Preferences -> Package settings -> Emmet -> Settings - User`. My configuration file looks like this:

```json
{
  "syntaxProfiles": {
    "html" : {
      "filters" : "html, bem"
    }
  },
  "preferences": {
    "bem.elementSeparator":"__",
    "bem.modifierSeparator":"--",
    "bem.shortElementPrefix":"-"
  }
}
```

As you can see I applied the `html` and `bem` filter as the default one for all `.html` files. It allows even more simplification of the process by omitting the filter in the abbreviation. Hopefully this article helped you to speed up your BEM workflow. Please share your thoughts, favourite Emmet features or methodologies that you use.
