---
title: "What's new in ECMAScript 2024"
summary: "The list of new JavaScript features is now confirmed, and to keep my annual tradition, I am publishing this yearly recap for you and my future self."
---

The final version of [ECMAScript 2024 Language Specification](https://tc39.es/ecma262/2024/) was approved on [the 26th of June](https://github.com/tc39/ecma262/releases/tag/es2024). The list of new JavaScript features is now confirmed, and to keep my annual tradition, I am publishing this yearly recap for you and my future self. For curious ones, here are the posts from the past years: ([2023](/whats-new-in-ecmascript-2023/), [2022](/whats-new-in-ecmascript-2022/), [2021](/whats-new-in-ecmascript-2021/), [2020](/whats-new-in-ecmascript-2020/), [2019](/whats-new-in-ecmascript-2019/), [2018](/whats-new-in-ecmascript-2018/), [2017](/whats-new-in-ecmascript-2017/) and [2016](/whats-new-in-ecmascript-2016-es7/)).

Features added this year are pretty nuanced and outside my comfort zone, as are many other JavaScript users. I will try my best to explain them to regular app makers who rarely dig into the territory of complicated Regex, Unicode characters encoding and buffer manipulations.

## Well-Formed Unicode Strings by Guy Bedford, Bradley Farias, Michael Ficarra

Strings in JavaScript are represented as a sequence of UTF-16 code points. The 16 in the name represents the number of bits available to store the code point, which offers 65536 possible combinations (2<sup>16</sup>). This amount is sufficient to store characters of Latin, Greek, Cyrillic and East Asian alphabets but not enough to store things like Chinese, Japanese, and Korean ideographs or emojis. Additional characters are stored in pairs of 16-bit code units, known as surrogate pairs.

```js
'a'.length
// 1
'a'.split('')
// [ 'a' ]

'🥑'.length
// 2
'🥑'.split('')
//[ '\ud83e', '\udd51' ] 👈 surrogate pair
```

Leading and trailing surrogates are scoped to a range of code units which are not used to encode single-code-unit characters to avoid ambiguity. If a pair is missing a leading or tailing code unit or their order is flipped, we deal with a "lone surrogate", and the whole string is "ill-formed ". For the string to be "well-formatted," it must not contain lone surrogates.

[The Well-Formed Unicode Strings proposal](https://github.com/tc39/proposal-is-usv-string) introduces a `String.prototype.isWellFormed()` method to verify whether a string is well-formed or not. In addition, it comes with a `String.prototype.toWellFormed()` helper method that replaces all lone surrogates with replacement characters (`U+FFFD`, �).

```js
'\ud83e\udd51'
// 🥑

'\ud83e\udd51'.isWellFormed()
// true

'\ud83e'.isWellFormed() // without trailing surrogate
// false

'\ud83e'.toWellFormed()
// �
```

## Asynchronous atomic wait for ECMAScript by Shu-yu Guo and Lars T Hansen

https://github.com/tc39/proposal-atomics-wait-async

## RegExp v flag with set notation + properties of strings by Markus Scherer and Mathias Bynens

https://github.com/tc39/proposal-regexp-v-flag

## In-Place Resizable and Growable ArrayBuffers by Shu-yu Guo

https://github.com/tc39/proposal-resizablearraybuffer

## Array grouping by Justin Ridgewell and Jordan Harband

https://github.com/tc39/proposal-array-grouping

## Promise.withResolvers by Peter Klecha

https://github.com/tc39/proposal-promise-with-resolvers

## ArrayBuffer transfer by Shu-yu Guo, Jordan Harband and Yagiz Nizipli

https://github.com/tc39/proposal-arraybuffer-transfer


---

## Helpful resources

- ["Unicode – a brief introduction (advanced)" by Dr. Axel Rauschmayer](https://exploringjs.com/js/book/ch_unicode.html)
- ["UTF-16 characters, Unicode code points, and grapheme clusters" section of String referende on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)
- []()
