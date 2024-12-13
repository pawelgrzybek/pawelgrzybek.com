---
title: My favourite tips from "Practical Vim" by Drew Neil
summary: ""
---

I just finished reading "Practical Vim" by Drew Neil. This book helped me to understand the Vim philosophy and made me a lot more efficient Vim user. It is a must-read for everyone interested in the subject, no matter how advanced you are. The book is structured into hundreds of bite sized practical tips and on this post I would like to share my favourite ones with you. This is just a snipet of wisdom that you can find in the book so I would highly recommend buying a copy.

## Underused the dot command

One the most powerful commands is the dot command. It repeats the last change. You can use it to spare yourself typing multi-keystrokes commands multiple times or avoid mental overhead by counting how many times to perform an action. Counterintuitively, typing `dw....` is easier for me than `5dw` because there is no need for counting before performing an operation. Also, undos become easier. It so versatile and I use it all the time.

- Instead of `>>>>>>` use `>>..` to indent a line three times
- Instead of `5dw` use `dw....`

## Addition and substraction

The `<C-a>` and `<C-x>` perform number additoina dn subsstitution respectively. Super handy and I use this trick all the time.

## Do quick math without ever leaving insert mode

The expression register can be invoked using `<C-r>=` and allows us to perform a simmple math clculations without leaving the insert mode.

`<C-r>=5*5*5<Cr>`
