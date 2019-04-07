---
title: I built a thing — httpsc (Simple HTTP status codes reference CLI)
description: How often do you visit Wikipedia to check for the meaning of a particular HTTP status code? For me it is at least once a week. I just made this thing easier for us all.
photo: 2019-04-07.jpg
draft: true
---

I am too old or too smart to memorize things. HTTP status codes is one of those that I don't want to clutter my brain with — I remember the most frequently used ones but every time when I see some obscure one I ask for help uncle Google. To make it even easier I created a [httpsc — handy HTTP status codes reference CLI](https://www.npmjs.com/package/httpsc).

## httpsc CLI

## Get an info about a code status

To make a CLI I put a database of all of the codes together, I decided to give you a quick method to get a particular one.

```js
import { getCode } from "httpsc";

getCode(404);

// returns
{

}
```
