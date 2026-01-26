---
title: "More invoker commands please, and more reasons not to use JavaScript"
summary: ""
draft: true
---

The rule of least power on the web incentivised using HTML before reaching for CSS, CSS before JavaScript, and bashing it into the JS script as a last resort. Every time the web ships new features that let us shift the implementation left on the stack, I’m excited about it. In recent years, we have received a heap of CSS features that required not a trivial chunk of JS code a few years ago. [The Invoker commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) moved the implementation upstream to the HTML, and I’m well pumped about it.

The invoker commands API recently landed on Safari, and now it is supported by all modern engines. This is usually the moment when I like to learn enough about the new feature so I will remember it when I need it. I probably won't wait too long until I need it as it is crazy useful.

{{< baseline feature="invoker-commands" >}}

## No need for the event listeners to do XYZ

It is a declarative API that triggers common behaviours against other elements via the click of a button, like opening and closing a dialog or a popover. The `command` attribute accepts an action and the `commandfor` sets the target to invoke the command upon. A classic dialog example.

```html
<button commandfor="d" command="show-modal">Open dialog</button>

<dialog id="d">
  <button commandfor="d" command="close">Close dialog</button>
  ♥️
</dialog>
```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="bNeovpr" data-pen-title="2026-01-26-1" data-user="pawelgrzybek" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/bNeovpr">
  2026-01-26-1</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://public.codepenassets.com/embed/index.js"></script>

Currently the list of commands predefined by the browsers is limited to: `toggle-popover`, `show-popover`, `hide-popover`, `show-modal`, `close` and `request-close`. The difference between `close` and `request-close` is subtle, but the latter one, before invoking the `close` event, also invokes the `cancel` event, which you can block using `preventDefault`.

### Custom commands

Registering a custom commands is what makes it interesting, and to make one you only need to prefix it with a double dash, for example `--change-bg`. This one invokes a custom command of the `CommandEvent` interface on the target element. It doesn't offer anything you couldn't do before, it just offers another, more declarative way. Here is a simple example (worth noting that the value defined on the button can be read from the `source` property).

```html
<button commandfor="d" command="--change-bg" value="salmon">Salmon</button>
<button commandfor="d" command="--change-bg" value="lime">Lime</button>
<button commandfor="d" command="--change-bg" value="hotpink">Hot pink</button>

<div id="d">♥️</div>
```

```js
const d = document.getElementById("d");

d.addEventListener("command", (e) => {
  if (event.command === "--change-bg") {
    d.style.backgroundColor = e.source.value;
  }
});
```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="vEKeRwZ" data-pen-title="2026-01-26-2" data-user="pawelgrzybek" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/pawelgrzybek/pen/vEKeRwZ">
  2026-01-26-2</a> by Pawel Grzybek (<a href="https://codepen.io/pawelgrzybek">@pawelgrzybek</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://public.codepenassets.com/embed/index.js"></script>

### The future of the invoker commands

Although the list of predefined commands looks slim at the moment, I learned from from the ["Everything you need to know about Invoker Commands" by Keith Cirkel talk](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) that there are discussions to add more commands. Media control, toggling the `summary` view of the `details` element and controlling form elements are all great candidates and they are all under the discussion. I will keep this post up to date if some of it lands.

## Resources

- [Invoker Commands API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- [Everything you need to know about Invoker Commands by Keith Cirkel on YouTube](https://youtu.be/svS_lf9AXkc)
