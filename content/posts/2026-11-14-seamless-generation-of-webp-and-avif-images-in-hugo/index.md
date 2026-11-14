---
title: "Seamless generation of WebP and AVIF images in Hugo"
summary: "Shipping a website that uses only JPG and PNG is literally disrespectful to the end user. Hugo makes this process a tonne easier now, you literally don’t need to generate anything yourself, because it is all built in."
---

Shipping a website that uses only JPG and PNG is literally disrespectful to the end user. Especially for those without access to multi-Mbps broadband. Using "backwards compatibility" as an excuse not to serve better image formats is stupid because the browser serves the best one it is capable of serving and falls back to the archaic formats as a last resort. Progressive enhancement at its best. But the chance is slim that you use a browser that fails to use formats like WebP or AVIF because they have fantastic browser support.

{{< baseline feature="webp" >}}

{{< baseline feature="avif" >}}

I have been serving these modern formats to my readers on this very website for years, maybe even a decade. I have been using a combination of custom bash/fish scripts to generate these images, and some conditional logic that hooks into the Markdown rendering pipeline. ["WebP and AVIF images on a Hugo website"](/webp-and-avif-images-on-a-hugo-website/) and ["Quick script to convert JPEG/PNG images to WebP and AVIF"](/quick-script-to-convert-jpeg-png-images-to-webp-and-avif/) explain the way I have been doing that in the past. Hugo makes this process a tonne easier now, you literally don’t need to generate anything yourself, because it is all built in.

When you add an image to one of your Markdown files, by default it spits out an good old plain HTML tag with the resource you gave.

```md
![Some image](file.jpg)
```

```html
<img src="file.jpg" alt="Some image" />
```

This is the place for an [image rander hook](https://gohugo.io/render-hooks/images/) to override the generated HTML output. What we need is a few modern Hugo features to generate WebP and AVIF outputs, and the [HTML \<picture\> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture).

```
<picture>
  {{- $destination := .Destination -}}
  {{- $extension := path.Ext $destination -}}
  {{- $image := .Page.Resources.Get $destination -}}
  {{- $altText := .Text -}}

  {{- $formats := slice -}}
  {{- if in (slice ".jpg" ".jpeg" ".png") (lower $extension) -}}
    {{- $formats = slice "avif" "webp" -}}
  {{- end -}}

  {{- with $image -}}
    {{- range $format := $formats -}}
    <source srcset="{{- ($image.Process $format).Permalink -}}" type="image/{{- $format -}}">
    {{- end -}}
  {{- end -}}

  {{- with $image -}}
    <img
      src="{{- .Permalink -}}"
      alt="{{- $altText -}}"
      loading="lazy"
      decoding="async"
      width="{{- .Width -}}"
      height="{{- .Height -}}"
    />
  {{- end -}}
</picture>
```

Here is the example of the generated markup.

```html
<picture
  ><source
    srcset="https://pawelgrzybek.com/file_hu_9bb41489c358b97.avif"
    type="image/avif" />
  <source
    srcset="https://pawelgrzybek.com/file_hu_236e41ca6d79e727.webp"
    type="image/webp" />
  <img
    src="https://pawelgrzybek.com/file.jpg"
    alt="Some image"
    loading="lazy"
    decoding="async"
    width="1800"
    height="1201"
/></picture>
```

No more custom scripts, no more local binaries. Easy!
