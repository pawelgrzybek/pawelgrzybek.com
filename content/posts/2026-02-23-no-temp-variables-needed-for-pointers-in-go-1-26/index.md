---
title: "No temp variables needed for pointers in Go 1.26"
summary: "Go 1.26 makes pointer creation a lot easier by allowing an expression as an argument. This little change can reduce a ton of boilerplate in your codebase."
---

How many millions of times have you seen this pattern in Go where a variable is pre-created just to make a pointer to it down the line? There is a high chance your codebase includes a utility to do that.

```go
// Something like this
a := 123
aPtr := &a

// Or like this
func Pointer[T any](v T) *T {
    return &v
}
bPtr := Pointer(456)
```

[Go 1.26](https://go.dev/blog/go1.26) makes this a lot simpler by extending the functionality of [the built-in `new` function](https://go.dev/ref/spec#Allocation). In addition to taking a type as an argument just to return its zero value, it now also accepts an expression. All the examples from above become one-liners.

```go
aPtr := new(123)
bPtr := new(456)
```

So handy! Thanks Go!
