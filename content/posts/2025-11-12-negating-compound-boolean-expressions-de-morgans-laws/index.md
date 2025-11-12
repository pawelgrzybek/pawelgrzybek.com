---
title: "Negating compound boolean expressions (De Morgan's Laws)"
summary: "A pair programming session made me explore De Morgan's Laws. Here is a quick example and the essence of the rules defined by Augustus De Morgan."
---

I had a quick pair programming session with one of my colleagues. Can you imagine that Claude Code doesn't need to be your only coding buddy? The validation rules needed a little tweak, so here is the piece of code I typed, and below is the version suggested by my friend.

```go
validation.Field(&r.ScheduledAt, validation.When(!(r.SendNow || r.DryRun), validation.Required))
validation.Field(&r.ScheduledAt, validation.When(!r.SendNow && !r.DryRun, validation.Required))
```

We kept one of these, moved on to change some test logic, submitted a PR and called it a day. But this single liner above kept me thinking so I drew a good old true/false table. Both of us were right, they are identical. It is fascinating how differently programmers' brains are wired, and we are able to express the same thing in many ways. I am not the only one contemplating this subject. Augustus De Morgan came up with [De Morgan's Laws](https://en.wikipedia.org/wiki/De_Morgan's_laws) centuries ago, and here is the crux of it.

- `!(A || B)` equals `!A && !B`
- `!(A && B)` equals `!A || !B`

![A screenshot from my code editor, that highlights potential code improvement to apply the De Morgan's law on the go codebase](de-morgans-laws.jpg)

Staticcheck Go lang linter, comes with a [QF1001 - Apply De Morgan's law](https://staticcheck.dev/docs/checks/#QF1001) check. Perhaps trivia for you, but I found it super interesting. Stay curious and have a wonderful day.
