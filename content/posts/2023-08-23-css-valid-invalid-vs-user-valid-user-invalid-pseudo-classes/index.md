---
title: "CSS valid/invalid vs user-valid/user-invalid pseudo-classes"
summary: "Why would you like to see an error about the incorrect email address before you even could fill it out? Luckily there is a way to achieve this with CSS only."
---

CSS offers many [input value-checking pseudo-classes](https://drafts.csswg.org/selectors-4/#ui-validity). The `:valid` and `:invalid` are very common, and we use them to apply styling based on the input validity. The fact that they are applied immediately, without any user interaction, can be confusing. Why would you like to see an error about the incorrect email address before you even could fill it out?

Back in 2014, there was a [proposal to add `:changed`/`:edited`/`:altered`/`:dirty`](https://lists.w3.org/Archives/Public/www-style/2014Feb/0511.html) to solve this problem, but I don't think it went anywhere. This is why many popular component frameworks delegate this functionality to JavaScript. Luckily there is a way to achieve this with CSS only, using `:user-valid`/`:user-invalid` pseudo-classes. Unfortunately, [browser support is limited to Safari and Firefox](https://caniuse.com/?search=%3Auser-invalid) when writing this post. Have a look at the example:

{{< baseline feature="user-pseudos" >}}

```css
.user-invalid-message,
.invalid-message {
  display: none;
  color: red;
}

input:user-invalid ~ .user-invalid-message,
input:invalid ~ .invalid-message {
  display: block;
}
```

<p class="codepen" data-height="300" data-slug-hash="gOZpgjz" data-user="pawelgrzybek" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/gOZpgjz">
  Untitled</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I just learned about this today from the series of posts about [progressively enhanced form validation by Gerardo Rodriguez](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-1-html-and-css/). I highly recommend the whole series. I hope other browsers follow Firefox and Safari and implement this feature soon.

Hopefully, this helps! Peace ✌️
