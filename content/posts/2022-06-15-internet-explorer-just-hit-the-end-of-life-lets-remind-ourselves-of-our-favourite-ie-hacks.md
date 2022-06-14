---
title: "Internet Explorer just hit the end of life — let's remind ourselves of our favourite IE hacks"
summary: "Microsoft's Internet Explorer just got retired. So to celebrate this historical moment, I put together a collection of ridiculous IE hacks that we used to copy/paste all the freakin time."
photo: "2022-06-15.jpg"
---

Today is the day — [Microsoft's Internet Explorer just got retired](https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/).

> Internet Explorer 11 desktop application will be retired and go out of support on June 15.

There is no other piece of technology that gave me more headaches in my life than IE. I'm sure many other Web Developers (or Web Masters, do you remember that?) can relate to my experience. So to celebrate this historical moment, I put together a collection of ridiculous IE hacks that we used to copy/paste all the freakin time.

- [Conditional comments](#conditional-comments)
- [CSS Limits of Internet Explorer](#css-limits-of-internet-explorer)
- [IE6, IE7 and IE8 :hover quirks](#ie6-ie7-and-ie8-hover-quirks)
- [The zoom: 1 hack](#the-zoom-1-hack)
- [CSS Dynamic Properties](#css-dynamic-properties)
- [PNG Hack/Fix for IE 6](#png-hackfix-for-ie-6)
- [256 classes stronger than a single ID](#256-classes-stronger-than-a-single-id)
- [Double Margin Float Hack](#double-margin-float-hack)

## Conditional comments

Conditional comments are the mechanism that works in IE 5 up to version 9. It was a viral technique to add IE-specific instructions or link to individual styles and scripts inside these blocks.

```html
<!--[if IE]> Internet Explorer <![endif]-->
<!--[if !IE]> Not Internet Explorer <![endif]-->

<!--[if IE 6]> Internet Explorer 6 <![endif]-->
<!--[if IE 7]> Internet Explorer 7 <![endif]-->
<!--[if IE 8]> Internet Explorer 8 <![endif]-->
<!--[if IE 9]> Internet Explorer 9 <![endif]-->

<!--[if gt IE 6]> Internet Explorer >6 <![endif]-->
<!--[if gte IE 6]> Internet Explorer >=6 <![endif]-->
<!--[if lt IE 9]> Internet Explorer <9 <![endif]-->
<!--[if lte IE 9]> Internet Explorer <=9 <![endif]-->
```

## CSS Limits of Internet Explorer

Internet Explorer before version 10 has some [CSS limitations](https://docs.microsoft.com/en-GB/troubleshoot/developer/browsers/development-website/css-styles-webpage-renders-wrongly). However, as Eric Law (former IE program manager) explained, they are the results of early design decisions about memory allocation.

- CSS file may contain up to 4095 selectors
- CSS file may @import up to 31 other stylesheets
- HTML document may load up to 31 stylesheets
- The `@import` nesting is limited to 4 levels deep
- Font-family names may be up to 31 characters long

I remember using tools like [Bless](https://github.com/blesscss/bless) and [Parker](https://github.com/katiefenn/parker) to analyze CSS files and chunk them up if needed.

## IE6, IE7 and IE8 :hover quirks

Before version 9, IE support for `:hover` was limited and not consistent. Luckily, it was possible to fix this by injecting [a custom `behavior` HTC script](<https://docs.microsoft.com/en-us/previous-versions//ms531078(v=vs.85)?redirectedfrom=MSDN>).

```css
body {
  behavior: url("csshover3.htc");
}
```

## The zoom: 1 hack

This legacy property to scale elements on the page is deprecated and replaced with CSS transforms. Back in the day, putting `zoom: 1` was the only method to force the browser to recalculate the layout and fix many rendering issues.

```css
.box {
  zoom: 1;
}
```

## CSS Dynamic Properties

For some reason, Microsoft thought the best way to extend CSS functionality was to add Dynamic Properties — JavaScript expressions in the CSS stylesheet. It was a feature of IE5, IE6 and IE7.

```css
body {
  width: expression(alert("CSS in JS? Easy! How about JS in CSS?"));
}
```

## PNG Hack/Fix for IE 6

The IE6 didn't support the alpha transparency of PNG images. Copy/paste this one, and Bob's your uncle.

```css
/* for image tags */
img {
  position: relative;
  behavior: expression(
    (this.runtimeStyle.behavior= "none") &&(
        this.pngSet?this.pngSet=true: (
          this.nodeName == "IMG" && this.src.toLowerCase() .indexOf(".png") >-1?(
              this.runtimeStyle.backgroundImage = "none",
              this.runtimeStyle.filter =
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                this.src + "', sizingMethod='image')",
              this.src = "images/transparent.gif"
            ):
            (
              this.origBg = this.origBg? this.origBg:
                this.currentStyle.backgroundImage.toString() .replace(
                  'url("',
                  ""
                )
                .replace('")', ""),
              this.runtimeStyle.filter =
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                this.origBg + "', sizingMethod='crop')",
              this.runtimeStyle.backgroundImage = "none"
            )
        ),
        this.pngSet=true
      )
  );
}

/* for background images */
.elm {
  width: 200px;
  height: 100px;
  background: url(/folder/yourimage.png) no-repeat;
  _background: none;
  _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/folder/yourimage.png',sizingMethod='crop');
}
```

## 256 classes stronger than a single ID

This hack is useless, and hopefully, you have never had to do madness like this. While working on the ["CSS Specificity explained"](/css-specificity-explained/) article, I found an interesting quirk of CSS specificity in all versions of Internet Explorer. To create a selector stronger than a single id, just chan together 256 classes 🤷‍♂️

```html
<div id="id" class="class">Green text on IE</div>
```

```css
/* 1 id */
#id {
  color: #d3d3d3;
}

/* 256 classes */
.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class.class {
  color: green;
}
```

## Double Margin Float Hack

This one is funny — thank you, [Dan](https://twitter.com/danjordan), for sending this one my way (by the way, Dan is excellent dev, you should follow him). What do you think? What is the `margin-left` value of the `.box` element?

```
.box {
  float: left;
  margin-left: 20px;
}
```

Yes, you are right, it is `20px`, but IE doesn’t care and renders `40px` margin anyway. Luckily the fix is simple, but god knows why it works 🤷‍♂️

```
.box {
  float: left;
  margin-left: 20px;
  display: inline;
}
```

## Bye IE

Today is going to be a remembered day in the Web Design chronicle. Even though all these years of trying to provide a good experience for IE users gave us a lot of headaches, I'm glad that I remember these days. It was fun!

Do you remember any of the IE-specific hacks that you used? I'm happy to update my article with them. Until next time, keep it fun 👋
