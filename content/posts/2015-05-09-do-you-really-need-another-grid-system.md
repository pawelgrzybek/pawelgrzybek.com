---
title: Do you really need another grid system?
description: CSS grid system is so easy to create. We can use one of thousands frameworks, but do we really have to? Let me show you how I do it with few SASS mixing.
photo: 2015-05-09.jpg
---

Every single day I come across new grid systems. They all do the same job. Some of them are terribly ugly and difficult to use, some of them are fantastic and so powerful. Let me point what needs to be possible in good grid system:

- easy to use
- using own markup
- nest grids
- reorder columns

One of the most important things for me is to use my own markup. I don’t want to use extra classes to describe my layout. It can be ugly and makes my markup so cluttered! Why do I have to use something like this:

```scss
<div class="post column small-6 medium-4 large-3 x-large-2">
  post
</div>
```


If I need just:

```scss
<div class="post">
  post
</div>
```

Sometimes we need to nest grids. Lets say we have a two columns and inside one of them we need well aligned gallery. Thats the case when grid nesting comes handy.

![Nestes grids](/photos/2015-05-09-1.jpg)

It is definitely not the best technique to place the most important content somewhere close to end of our html document. From SEO reasons is better to keep important things as close as possible. Correct me please if I’m wrong. What should we do if we have a sidebar on left hand side and main content div on right side? There is so many tricks to reorder content and we need to be able to do it as well. It's not important only from SEO point of view. Having a better control and changing the order dependable of viewport is a main thing.

![Reordered columns inside grid system](/photos/2015-05-09-2.jpg)

## Rows and columns

Thats it! Every single grid system creates some rows and columns. Row wraps things together and column sets specific width to en element. With this information in mind lets have a look at bits of code below.

```css
.wrapper {
  width: 100%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}
.wrapper:before, .wrapper:after {
  content: '';
  display: table;
}
.wrapper:after {
  clear: both;
}
```

Thats the way how we create element that wraps columns together and keeps everything centered. We can adjust maximum width of that element and use any absolute or relative units to set maximum width up. Because we are going to use floating elements inside that div, [clearfix](https://css-tricks.com/snippets/css/clear-fix/) is necessary here. Lets have a look at second puzzle.

```css
.column {
  float: left;
  width: 50%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
```

Columns are straight forward. Floating of that element allows us to place columns next to each other. Padding on left and right hand side gives us a gutter between columns. Thing that we can customise here is width and gutter. Percentage based width value is best option to create fluid layouts. I like to have all my gutters equal, thats why I use paddings to create a gutters between columns.

## Grid system via two SASS mixins

We know already the general idea behind every grid system. Lets convert our CSS snippets into SASS mixins.

```scss
/* Variables */
$wrapper: 80rem;
$gutter: 1rem;

/* Row */
@mixin row($inside: false) {
  @if($inside == true) {
    margin-left: -$gutter/2;
    margin-right: -$gutter/2;
  }
  @else {
    width: 100%;
    max-width: $wrapper;
    margin-left: auto;
    margin-right: auto;
  }
  &:before, &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
}
/* Column */
@mixin col($width: 1, $padding: true) {
  float: left;
  width: percentage($width);
  @if($padding == true) {
    padding-left: $gutter/2;
    padding-right: $gutter/2;
  }
}
```

BOOM! Just two variables and two SASS mixins gives us a powerful tool to build grid based layouts. Instead of explaining how to use it, have a look at straight forward examples below. Have a look at the styles of each example to find helpful descriptions.

### Easy blog layout

Standard blog layout with content area and sidebar. That is very easy one.

<p data-height="216" data-theme-id="14885" data-slug-hash="RPrNXw" data-default-tab="result" data-user="pawelgrzybek" class='codepen'>See the Pen <a href='https://codepen.io/pawelgrzybek/pen/RPrNXw/'>Do you really need another grid system? - Easy blog layout</a> by Pawel Grzybek (<a href='https://codepen.io/pawelgrzybek'>@pawelgrzybek</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Two columns layout with nested gallery

First part of creating this layout is similar to example above. It's more interesting with second grid that is nested inside on of the columns. Addition mixin argument (inside) used for nested gallery is necessary to reset extra padding.

<p data-height="524" data-theme-id="14885" data-slug-hash="rVxVBK" data-default-tab="result" data-user="pawelgrzybek" class='codepen'>See the Pen <a href='https://codepen.io/pawelgrzybek/pen/rVxVBK/'>2015.05.09 - 2</a> by Pawel Grzybek (<a href='https://codepen.io/pawelgrzybek'>@pawelgrzybek</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Reordered columns inside the SASS grid system

To reorder columns, we need to add two very easy  and straight forward mixins. Have a look at the bit of code below. Easy like that!

```scss
@mixin push($width: 0) {
  position: relative;
  left: percentage($width);
}
@mixin pull($width: 0) {
  position: relative;
  right: percentage($width);
}
```

<p data-height="216" data-theme-id="14885" data-slug-hash="GogRQX" data-default-tab="result" data-user="pawelgrzybek" class='codepen'>See the Pen <a href='https://codepen.io/pawelgrzybek/pen/GogRQX/'>2015.05.09 - 3</a> by Pawel Grzybek (<a href='https://codepen.io/pawelgrzybek'>@pawelgrzybek</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Do you really need another grid system?

No, you don’t. By the way - use flexbox instead!
