---
title: "Configure Netlify redirects for projects with custom publish or base directory"
summary: "In the pre-processing stage, Netlify reads the configuration from the root. Post-processing configuration, like redirects and rewrites, is read from the base/publish directory."
photo: "2023-02-25.jpg"
---

Netlify supports [two methods to configure redirects](https://docs.netlify.com/routing/redirects/) — a `_redirects` file and `redirects` tables in the `netlify.toml`. For context, these are two examples of how to redirect `page-one` to `page-two` using both methods.

```
/page-one /page-two
```

```
[[redirects]]
  from = "/page-one"
  to = "/page-two"
```

I use the [Hugo framework](https://gohugo.io) that outputs HTML files into the `public` directory, so I configured it as a `publish` directory in `netlify.toml`. Since the configuration file was already there, I smashed some new redirects in there. I faced some issues with this setup, so I published this quick post to save you from the unpleasant surprise of broken redirects.

## Netlify reads redirects from the base/publish directory

As long as your website is hosted from the top-level directory of your repo, Netlify will respect redirects configured there. This behaviour changes when you use a framework that pre-builds files to a `publish` directory. The same applies when the `base` directory is anything else than the root, typical for monorepos.

In the pre-processing stage, Netlify reads the configuration from the root. Post-processing configuration, like redirects and rewrites, is read from the `base`/`publish` directory. In my case, adding a `_redirects` file to the `public` directory and removing `redirects` tables from the top-level `netlify.toml` solved the problem.


Unfortunately, this part of the official documentation could be better. I understood this only because of [one comment by Luke Lawson on the Netlify Support Forum](https://answers.netlify.com/t/cant-get-netlify-toml-redirects-to-work/4563/8). I will contact the Netlify team and do my best to contribute and improve this part of the documentation.

I still love you Netlify 🫶
