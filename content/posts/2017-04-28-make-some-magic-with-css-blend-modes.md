---
title: Make some magic with CSS blend modes
description: Remember the bloody wars between web designers and front-end developers about blend modes? Those times are over — thanks to the power of CSS!
photo: 2017-04-28.jpg
---

It was an ordinary Wednesday morning, I was enjoying my morning espresso shot at [Engine Creative](https://twitter.com/enginecreative), when suddenly my lovely colleague Chloe put on my desk the latest issue of [net magazine](https://twitter.com/netmag) freshly delivered by the postman. I had a quick glance at the cover art that boldly stated "Make magic with CSS". Pfff — I totally ignored it — I know everything about CSS, don't I? It was a really nice espresso.

It is an ordinary Sunday morning, I'm enjoying my morning espresso shot on my sofa — time for some press. After reading the first three paragraphs of "Make magic with CSS" by [Aga Naplocha](https://twitter.com/aganaplocha) I've realised that I had really fallen behind on my CSS skills. It is a really nice espresso but I'm going to brew more because today is the day to catch up on some CSS magic — blend modes.

## Blend modes essentials

If you have ever used any image editing software like Adobe Photoshop, Affinity Photo or Sketch App you probably have some experience with blend modes. Yes — it is one of those features that designers love as it's essentially a shortcut method for doing beautiful things but front-end developers hate them because they are laborious to implement. A-ha! Not anymore! I will show you how in a second but first let's brush up on some theory courtesy of [Wikipedia](https://en.wikipedia.org/wiki/Blend_modes).

> Blend modes in digital image editing are used to determine how two layers are blended into each other. However, as each pixel has a numerical representation, a large number of ways to blend two layers is possible.

![Blend modes in Adobe Photoshop, Sketch App and Affinity Photo](/photos/2017-04-28-1.jpg)

For lots of designers and developers working with blend modes is a very experimental process. Memorizing all the mathematical calculations isn't required to use them effectively. It doesn't take much time to juggle with some options in Photoshop but it can be very time consuming when the same needs to be done in CSS or JavaScript. A little bit of understanding helps and I will do my best to help you with that.

### Blend modes by group

Photoshop and Sketch separate blending options into a few meaningful groups. Unfortunately Affinity Photo presents its options in a non-grouped manner (this would be worth adding in a future version). I'm not going to describe the algorithm behind each of them as there are plenty of [detailed explanations](https://photoshoptrainingchannel.com/blending-modes-explained/) out there — a brief summary of each group is enough to grasp the concept.

![Grouped blend modes in Sketch App](/photos/2017-04-28-2.jpg)

#### Normal

No mathematical algorithm is applied. If you are wondering why the very random looking "Dissolve" mode belongs to this group, you've just answered your own question — [random](https://en.wikipedia.org/wiki/Blend_modes#Dissolve). The example below shows the "Normal" blend mode.

![Blend mode - Normal group](/photos/2017-04-28-3.jpg)

#### Darken

As the name suggests — the result will be darker than the initial look of the blended layer. The base colour is pure white. Every pixel darker than white results in a darkened output of blended pixels. Using this mode with pure white layers won't generate any effect. Darken generates inverted effects to modes from the "Lighten" category. The example below shows the "Darken" blend mode.

![Blend mode - Darken group](/photos/2017-04-28-4.jpg)

#### Lighten

As the name suggests — the result will be lighter than the initial look of the blended layer. The base colour is a pure black. Every pixel brighter than black results in a lightened output of blended pixels. Using this mode with pure black layers won't generate any effect. Lighten generates inverted effects to modes from the "Darken" category. The example below shows the "Lighten" blend mode.

![Blend mode - Lighten group](/photos/2017-04-28-5.jpg)

#### Contrast

Darken blend modes use pure white as the neutral point. Lighten ones use pure black. The Contrast group uses 50% gray as the base colour to recalculate the blended result. The purpose of this category is to manipulate the contrast of an image. The example below shows the "Hard Light" blend mode.

![Blend mode - Contrast group](/photos/2017-04-28-6.jpg)

#### Inversion

This set of blend modes calculate the difference or colour inversion between two layers. This produces results where colours are cancelled or inverted in the colour wheel. The example below shows the "Difference" blend mode.

![Blend mode - Inversion group](/photos/2017-04-28-7.jpg)

#### Component

The Component group allows us to blend primary colour components: hue, saturation and brightness. The example below shows the "Hue" blend mode.

![Blend mode - Component group](/photos/2017-04-28-8.jpg)

### Software vs. web reality

Web design software is much more generous with the available options than the web platform is. Adobe Photoshop gives us access to 27 blend modes, Sketch gives us 16 options and Affinity Photo offers a crazy 30 variations.

According to the recent [Compositing and Blending Level Spec](https://drafts.fxtf.org/compositing-1/), CSS comes with 16 values that we can use in our projects. These are exactly the same values as are available in Sketch.

## Working with CSS blend modes

Enough theory — time for some practice. As mentioned a second ago, CSS allows us to use the following values:

- [`normal`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-normal) (initial value)
- [`multiply`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-multiply)
- [`screen`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-screen)
- [`overlay`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-overlay)
- [`darken`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-darken)
- [`lighten`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-lighten)
- [`color-dodge`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-color-dodge)
- [`color-burn`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-color-burn)
- [`hard-light`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-hard-light)
- [`soft-light`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-soft-light)
- [`difference`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-difference)
- [`exclusion`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-exclusion)
- [`hue`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-hue)
- [`saturation`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-saturation)
- [`color`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-color)
- [`luminosity`](https://www.w3.org/TR/compositing-1/#valdef-blend-mode-luminosity)

There are two CSS properties out there that allow us to work with blend modes: [`background-blend-mode`](https://www.w3.org/TR/compositing-1/#propdef-background-blend-mode) and [`mix-blend-mode`](https://www.w3.org/TR/compositing-1/#mix-blend-mode). The effect that those properties produce is identical but the use case for them is different. Let's have a quick look at both of them.

### background-blend-mode

As it says on the tin `background-blend-mode` applies a blend mode to `background-color` or `background-image`. It can take multiple values when we use more than one background. Using it with gradients can produce really impressive results — but I will leave the creativity to you. Let's have a look at a simple example.

```css
.box {
  background-color: #D3545B;
  background-image: url('image.jpg');
  background-blend-mode: multiply;
}
```

<p>
<p data-height="572" data-theme-id="14885" data-slug-hash="oWYgwd" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-04-28-1" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/oWYgwd/">2017-04-28-1</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

### mix-blend-mode

It would be a bit restrictive to use blend modes with backgrounds only. That's the reason why `mix-blend-mode` exists. It allows us to blend any element with its backdrop.

```css
.page {
  background-image: url('image.jpg');
}

.box {
  background-image: repeating-linear-gradient(
    45deg,
    #D3545B,
    #D3545B 2rem,
    transparent 2rem,
    transparent 3rem
  );
  mix-blend-mode: darken;
}
```

<p>
<p data-height="572" data-theme-id="14885" data-slug-hash="bWBNzV" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-04-28-2" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/bWBNzV/">2017-04-28-2</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

A word of advice! There is a bug in Chrome. Blending with the `body` element is broken in Google's browser — it works like a charm in other ones though.

### But Internet Explorer, Edge and Safari...

Let's be honest — the browser support isn't fantastic. Internet Explorer and Edge don't support it at all. Desktop and mobile Safari has a real issue with all non-separable blend modes: `hue`, `saturation`, `color`, `luminosity`.

![Blend modes support in the browsers](/photos/2017-04-28-9.jpg)

Let me introduce a new term now — "no blend modes first". Your project on an old-school browser shouldn't be any less functional as the one on the latest version of Google Chrome. Take the support for a crazy feature as an opportunity, not as something that should dictate your design decisions. But if you really, really must…

```js
if(!window.getComputedStyle(document.body).mixBlendMode) {
  document.body.className += ' no-mix-blend-mode';
}

if(!window.getComputedStyle(document.body).backgroundBlendMode) {
  document.body.className += ' no-background-blend-mode';
}
```

```css
.box {
  background-color: #D3545B;
  background-image: url('image.jpg');
  background-blend-mode: hard-light;
}

.no-background-blend-mode .box {
  background-image: url('some-fallback-image.jpg');
}
```

And here is the result on the latest version of Google Chrome and IE 9.

![Cross browser Internet Explorer 9 CSS blend mode](/photos/2017-04-28-10.jpg)

<p>
<p data-height="472" data-theme-id="14885" data-slug-hash="GmNmJK" data-default-tab="result" data-user="pawelgrzybek" data-embed-version="2" data-pen-title="2017-04-28-3" class="codepen">See the Pen <a href="https://codepen.io/pawelgrzybek/pen/GmNmJK/">2017-04-28-3</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</p>

## I missed you CSS

[Aga](https://twitter.com/aganaplocha), thanks for giving me the inspiration to write this article. I promise to catch up on some of the latest CSS magic — actually I really miss it.

Hopefully this article helped you out guys. For me, writing it was a really enjoyable path to learning it. I officially announce that I'm starting to use CSS blend modes in production today. Until next time CSS magicians!
