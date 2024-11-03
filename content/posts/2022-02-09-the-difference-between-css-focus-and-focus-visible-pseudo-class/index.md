---
title: "The difference between CSS focus and focus-visible pseudo-class"
summary: "Browsers, by default, do a great job to determine if an element should indicate focus. The CSS `:focus` and `:focus-visible` pseudo-classes allow us to customise the look of a focus indicator. Do you know the difference between them?"
---

You can browse the Web using a mouse, keyboard and all sorts of assistive technology devices. Whichever input method you use, a clear indication of the current interactive element is crucial for a good user experience and accessibility. Default browsers stylesheets do a great job at it, but sometimes we want to be a little bit more sophisticated.

![Clearly highlighted interactive element using :focus on gov.uk website](2022-02-09-1.gif)

The CSS `:focus` and `:focus-visible` pseudo-classes allow us to customise the look of a focus indicator. The support for `:focus-visible` recently landed in [Safari Technology Preview 138](https://webkit.org/blog/12176/release-notes-for-safari-technology-preview-138/). We can expect it to be added in an upcoming stable release and make this feature available in all modern browsers.

{{< baseline feature="focus-visible" >}}

## CSS focus vs. focus-visible

As mentioned before, browsers, by default, do a great job to determine if an element should indicate focus based on the element type, user interaction, years of feedback, testing and studying user interaction. This state is usually indicated using the `outline`.

Adding the `:focus` pseudo-class to an element will make it show a focus specific styles and disregard browsers heuristics. The `:focus-visible`, in contrast, applies custom styling only if it would be shown natively. It's a win-win situation, a nice custom look and years of research in one CSS property.

A classic example is a `button` element. How often do you want to see a focus ring after clicking on a `button`? Rarely. How often do you want to see a focus indicator on a `button` when navigating a website using a keyboard? Almost always. There you go, `:focus-visible` and Bob's your uncle!

## CSS focus-visible is my new default

Am I going to replace the `focus` pseudo-class with `focus-visible`? Fuck yeah! Maybe not today but eventually for sure! With this quick write-up, I hope I helped you understand the difference between these two pseudo-classes. Until next time, stay focused (pun intended) 👊
