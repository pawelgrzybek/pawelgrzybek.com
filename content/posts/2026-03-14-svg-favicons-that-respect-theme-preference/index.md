---
title: "SVG favicons that respect theme preference"
summary: "Less of guide about the favicons and more a bug report of Safari that at the moment ignores media query user preferences in SVG favicons."
---

If you've been building web for a while, you probably remember the mess of six million files in your `head` element just to have a well-supported favicon. This is all over now, and a handful of files should be more than enough. Alleluia! ["How to Favicon in 2026" on Evil Martians blog](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) goes in depth into it.

[SVG favicons are well supported](https://caniuse.com/link-icon-svg) now! Since this is a vector format, resolution is not a concern, and it can also adapt to user theme preferences. Nothing new here — [Thomas Steiner blogged about it 7 years ago](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/). Here is all you need.

```html
<!-- index.html -->
<link rel="icon" href="/icon.svg" type="image/svg+xml" />
```

```html
<!-- icon.svg -->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <style>
    .bg {
      fill: #ffffff;

      @media (prefers-color-scheme: dark) {
        fill: #000000;
      }
    }
  </style>

  <rect x="0" y="0" width="100" height="100" class="bg" />
</svg>
```

This simple setup solves all the resolution drama, works in most browsers and in theory adapts to user appearance preferences. In practice it is a little bit more complicated.

{{< figure
src="favicons.jpg"
alt="A side by side comparison of the favicon rendering on the Google Chrome, Firefox and Safari"
caption="Light and dark theme preview on the Google Chrome, Firefox and Safari." >}}

Here is the preview of the [website for the meetup I organise](https://nn1.dev/) (pop in if you're near Northampton/UK, you will like it) where I implemented this technique. Google Chrome (top) respects favicon media queries overrides based on the user preferences, but requires a refresh for the new styles to kick in. That's fine because normal people do not change theme or resolution six times a second like we do (web developers). Firefox (middle) does it best amongst all players and it just works. Safari (bottom) unfortunately ignores media query overrides in the SVG favicon, and renders only the base version regardless of users preferences.

Here is a [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=309949) I submitted. Not a biggie but it would be cool if I could quote Steve Jobs and say "it just works" about SVG favicons. Also folks, please remember that complaining about browser bugs to your colleagues won't fix the bug. Report it and blog about it to make the Web a better place. Peace ✌️
