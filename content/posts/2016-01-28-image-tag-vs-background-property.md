---
title: Image tag vs background property
summary: Images need to be treated differently dependent on whether they are part of the design or part of the content. Let's discuss backgrounds and images.
photo: 2016-01-28.jpg
---

As [Anselm Hannemann](https://wdrl.info/archive/121) recently mentioned: front end developers have a problem with HTML and CSS. I avoided diving into the world of JavaScript for years and looking through prism of time I can see many benefits of focusing on HTML and CSS for so long. I learned it thoroughly and I know the power and restrictions that these languages come with. The HTML5 spec was finalized, and published some time ago but many people still don't know how to correctly use the `img` tag or `background-size` property. Today I focus exclusively on this subject and a bit about the CSS `cover` value.

## Image or background?

There is no official guide, and it's easy to understand why. Let me quote myself here (because quotes always look good in blog posts).

> Is it part of the content, or part of the design?

Images bring semantic value to a website, and adding the `alt` tag makes it super accessible and interpreted by all user agents and screen readers. By default your browser interprets it as a printable element unless you specifically say so (massive respect if you have print.css on your website).

A background image plays a decorative role in your website, it doesn't come with any semantic meaning or add any complementary value to the subject. [Definition](http://www.oxforddictionaries.com/definition/english/background) taken straight from the Oxford Dictionary doesn't sound web-related, but offers with same meaning.

> The part of a design that forms a setting for the main figures or objects.

## Yeah, but background-size: cover

In the age of responsive web design we tend to create boxes that are always nicely filled with pictures of cats or whatever. To create it we make use of `background-size: cover` definition. I described what it does on [one of my previous articles](https://pawelgrzybek.com/background-video-made-easy/) about background videos. It just works fine with adaptive and fluid layouts. Maybe this is the seventh image in your [completely useless carousel](http://shouldiuseacarousel.com/) or a featured image above an article on your Wordpress blog. It depends on the circumstances described above, but probably in many situations you ignored the rules described here! I'm guilty of doing the same thing.

## Object-fit for the rescue

[The `object-fit` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) defines how the content fits to the box. It takes few values: `fill`, `contain`, `cover`, `none`, `scale-down`. Chris Coyier already published this snappy [article](https://css-tricks.com/almanac/properties/o/object-fit/) about all these options with an example on Codepen. Essentially, `fill` stretches object to the applied dimensions. It is probably not the most helpful value to use with RWD. `Contain` and `scale-down` behave in exactly the same way, proportionally sizing the image down to adjust to the boundaries of element without clipping it. `None` is none. `Cover` is the clear winner in terms of usability in the daily routine of designers and front end developers. As you may have guessed, it does for image exactly what `cover` does for `background-size`. The content is sized to fill the entire available space of an element. It respects the aspect ratio and clips the width or height (dependent on the proportion).

```css
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Polyfil for object-fit: cover

Amazing things like this rarely come without any downsides. The only problem is Internet Explorer. I like this CSS property too much to not use it so I created a super easy JavaScript fix. If the feature isn't available in the browser, it grabs the source path of an image and applies it to parent element. Background-size and background-position is applied as well to imitate the same effect as `object-fit: cover`. Works fine on IE9, IE10, IE11 and Edge. If you need to support IE8, I'm sorry.

```js
// Detect objectFit support
if('objectFit' in document.documentElement.style === false) {
  // assign HTMLCollection with parents of images with objectFit to variable
  var container = document.getElementsByClassName('js-box');
  // Loop through HTMLCollection
  for(var i = 0; i < container.length; i++) {
    // Asign image source to variable
    var imageSource = container[i].querySelector('img').src;
    // Hide image
    container[i].querySelector('img').style.display = 'none';
    // Add background-size: cover
    container[i].style.backgroundSize = 'cover';
    // Add background-image: and put image source here
    container[i].style.backgroundImage = 'url(' + imageSource + ')';
    // Add background-position: center center
    container[i].style.backgroundPosition = 'center center';
  }
}
```

<p data-height="248" data-theme-id="14885" data-slug-hash="Rrybqg" data-default-tab="result" data-user="pawelgrzybek" class='codepen'>See the Pen <a href='https://codepen.io/pawelgrzybek/pen/Rrybqg/'>objectFit fallback for IE and Edge</a> by Pawel Grzybek (<a href='https://codepen.io/pawelgrzybek'>@pawelgrzybek</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
