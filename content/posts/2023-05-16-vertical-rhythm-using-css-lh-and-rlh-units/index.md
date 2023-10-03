---
title: "Vertical rhythm using CSS lh and rlh units"
summary: "Vertical rhythm is a design concept that helps to create a harmonious layout by following consistent spacing between elements, typically using the height of a line as a base."
photo: "2023-05-16.jpg"
---

Vertical rhythm is a design concept that helps to create a harmonious layout by following consistent spacing between elements, typically using the height of a line as a base. I learned it in my design days when printed media was still a thing[^1]. How much the same concept applies to the Web's fluid nature is debatable, but this post is not about that. To fulfil your curiosity — yes, the primitively simple design of my website follows the vertical rhythm.

[^1]: It is just a snarky joke. I love you designers out there ❣️

![Vertical rhythm grid on my website](2023-05-16-1.jpg)

Correctly implementing vertical rhythm is a tedious task. Luckily, the [CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/) defines two helpful units that make the job a breeze: `lh` and `rlh`, which are equal to the computed `line-height` of the element on which it is used and the root element, respectively.

At the time of writing this article, [the browser support](https://caniuse.com/?search=lh%20unit) is limited to Safari and Chromium-based browsers. Have a look at this simple example.

<iframe style="width: 100%; height: 480px; border: 1px solid rgb(46, 49, 56);" src="https://stackblitz.com/edit/web-platform-psz7ok?embed=1&file=styles.css&hideDevTools=1&view=preview"></iframe>

```css
html {
  font-size: 100%;
  line-height: 1.5;
}

main {
  padding: 1rlh; /* 🫶 */
}
```

This post is not a tutorial, just a quick appreciation of modern CSS features. Expect more of these because CSS tricks worth writing about are bombarding me daily. Also, it is the first article where I embedded [StackBlitz](https://stackblitz.com) demo — it is a great tool. Have a great day, folks 😙
