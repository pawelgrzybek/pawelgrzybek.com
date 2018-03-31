---
title: CSS Specificity explained
description: CSS Specificity is the most misunderstood part of Cascading Style Sheets. Let me explain how the browser understands and interprets the jungle of selectors.
date: 2015-07-08
photo: 2015-07-08.jpg
---

CSS Specificity is the most misunderstood part of Cascading Style Sheets. No doubt! Yes, it is even trickier than floats, trust me! I hang out with many web developers on a daily basis and I assume that lack of understanding of this concept is most frequently the reason of confusion. Let me quote [Harry Roberts](http://cssguidelin.es/#specificity):

> As we’ve seen, CSS isn’t the most friendly of languages: globally operating, very leaky, dependent on location, hard to encapsulate, based on inheritance… But! None of that even comes close to the horrors of specificity.

## What is CSS Specificity?

First lets have a look at a definition from [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity):

> Specificity is the means by which a browser decides which CSS property values are the most relevant to an element and therefore will be applied. Specificity is only based on the matching rules which are composed of CSS selectors of different sorts.

The definition is straight forward, so why can we experiencing issues? It starts when few selectors apply to the same element. Look!

```html
<p class="myclass" id="myid" style="color: yellow">Lorem ipsum dolor sit amet.</p>
```

```css
p {
  color: green;
}

.myclass {
  color: red;
}

#myid {
  color: blue;
}
```

What is the color of that paragraph? Hmmm? In this case our browser calculates a specificity value for each selector and prints the winner with highest score. This example is very trivial but in real life things are not that predictable.

## How to calculate CSS specificity

Before we go any further I need to make sure you know basic CSS terminology: selector, property, value, declaration, pseudo class and pseudo element. Have a look:


```css
.post:hover::before {
  color: red;
}

/*
.selector:pseudoClass::pseudoElement {
  property: value;
}
*/
```

Example above shows that:

- `.post` is a selector
- `:hover` is a pseudo-class
- `::before` is a pseudo-element
- `color` is a property
- `red` is a value
- `color: red;` is a declaration

Let's come back to specificity. We can separate CSS rules to 4 main categories and each of them adds a different value to specificity score. The correct notation of specificity score takes a form that separates points by coma in an appropriate order. Lets start counting from `0, 0, 0, 0` and then...

### Inline styles

```html
<p style="color: yellow">Lorem ipsum dolor sit amet.</p>
```

Using an inline style attribute in HTML markup always takes precedence. It adds `1, 0, 0, 0` to the specificity score.

### IDs


```css
#myid {}
```

Each ID adds `0, 1, 0, 0` to specificity score.

### Classes, pseudo-classes, attributes

```css
.myclass {}
```

Each class, [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes) and [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#Summary) adds `0, 0, 1, 0` to the specificity score.

### Elements and pseudo-elements

```css
p {}
```

Each element and [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#All_pseudo-elements) adds `0, 0, 0, 1` to the specificity score.

### Let's put it together

- If an element includes inline styles specificity is equal `1, 0, 0, 0`
- Each ID gives us `0, 1, 0, 0`
- Each class, pseudo-class or attribute gives us `0, 0, 1, 0`
- Each element or pseudo-element applies `0, 0, 0, 1`


### Few examples

Practice is a best teacher so let's have a look at a few examples.

```css
#toc li li {}

/*
Inline style: 0
IDs:          1 (#toc)
Classes:      0
Elements:     2 (li, li)

Specificity score: 0, 1, 0, 2
*/
```

```css
#nav .selected > a:hover {}

/*
Inline style: 0
IDs:          1 (#nav)
Classes:      2 (.selected, :hover)
Elements:     1 (a)

Specificity score: 0, 1, 2, 1
*/
```

```css
.header #nav li#list a[rel=nofollow]::after {}

/*
Inline style: 0
IDs:          2 (#nav, #list)
Classes:      2 (.header, [rel=nofollow])
Elements:     3 (li, a, ::after)

Specificity score: 0, 2, 2, 3
*/
```

```css
<div class="searchbar" style="display: none;">...</div>

.searchbar {}

/*
Inline style: 1 (style="display: none;")
IDs:          0
Classes:      1 (.searchbar)
Elements:     0

Specificity score: 1, 0, 1, 0
*/
```

### Exceptions

- The only way to override inline styles in an `!important` keyword. You can think of it as a `1, 0, 0, 0, 0`.
- Selector inside the `:not()` pseudo-class gets counted. This pseudo-class by itself does not get counted.
- Tie! If two selectors have the same specificity score then order decides which rules are applied.

### Non 10-based

Some people tend to represent the specificity value as a base-10 number by removing separators. It’s not right at all thats why we use a coma separated notation. Definition says that specificity values have an infinite base, but it’s not right either. I will show you some ugly example later on :)

## How to keep yourself away from specificity related issues?

We know that specificity is one of the worst parts of CSS but there are many rules that you can apply to daily code habits that will help you with this.

### Keep it low

Clean and neatly organised code brings so many benefits for you and your coworkers. There is a list of fantastic methodologies that you can grasp and use. My personal choice of combinations are [SMACSS](https://smacss.com/) by Jonathan Snook and [BEM naming convention](https://tech.yandex.com/bem/) by Yandex. Read more about these two approaches or [many alternatives here](http://sixrevisions.com/css/css-methodologies/). Low selectors specificity is always one of the advantages of using some CSS methodologies.

### Do not use IDs

Despite that it’s absolutely valid it’s very poor practice to use IDs to style elements. Accordingly to the previous rule, we are suppose to keep the specificity score as low as we can. Another reason avoid it is the fact that they can’t be reused. But it’s all about reusing components! Right?! If you need more reasons, check [this article](http://csswizardry.com/2011/09/when-using-ids-can-be-a-pain-in-the-class/).

### Nesting isn’t cool at all

Nesting is probably one of the most overused thing in CSS. Preprocessors sell nesting as a feature that combines selectors in more readable and easier to apply way. In fact, nesting should be avoided wherever possible. It’s another case where decent naming convention comes to the rescue! The rule of thumb is to not nest more than 4 levels. Funny guys from [The Sass Way](http://thesassway.com/beginner/the-inception-rule) called this the “Inception Rule" — if you have watched the "Inception" movie you know what I’m talking about. Another reason was described in fantastic article [“Cyclomatic Complexity: Logic in CSS” by Harry Roberts](http://csswizardry.com/2015/04/cyclomatic-complexity-logic-in-css/). Let me quote a sentence:

> Think of your selectors as mini programs: Every time you nest or qualify, you are adding an if statement; read these ifs out loud to yourself to try and keep your selectors sane.

### Forget about !important

Last resort of specificity war. If you use it on a daily basis you will probably be very depressed, or weeks after the project dead-line.

## Interesting facts about specificity

I was very curious about posibility to override ID by classes. 256 classes are enough to win a specificity war with one ID in:

- All versions on Internet Explorer
- All version of Firefox
- Google Chrome < 24
- Safari OS X < 6.1
- Safari iOS < 7
- Android < 4.4

Check this Codepen on one of the matching browsers above and you should see a green paragraph. Totally useless though :)

<p data-height="151" data-theme-id="14885" data-slug-hash="BNrYjO" data-default-tab="result" data-user="pawelgrzybek" class='codepen'>See the Pen <a href='http://codepen.io/pawelgrzybek/pen/BNrYjO/'>256 classes over ID</a> by Pawel Grzybek (<a href='http://codepen.io/pawelgrzybek'>@pawelgrzybek</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

I found out that on modern webkit browser 65536 classes are stronger than a single ID. Unfortunatelly I didn't manage to create an example. Codepen just simply couldn't handle that kind of calculation. If you have any confirmed information about it, please let me know.

## Helpful tools and resources

- [Official documentation](http://www.w3.org/TR/css3-selectors/#specificity)
- [Specificity Graph (for CSS)](https://github.com/pocketjoso/specificity-graph)
- [CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/)
- [Specificity Calculator](http://specificity.keegan.st/)
- [CSS Stats](http://cssstats.com/)
- [CSS Dig](http://cssdig.com/)
- [Parker - stylesheet analysis tool](https://github.com/katiefenn/parker)
