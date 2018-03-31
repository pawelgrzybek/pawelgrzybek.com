---
title: Keep Sublime Text Snippets organized
description: Web development nowadays is a complex thing. Gazillion languages, techniques and functions are not easy to remmember. Let me remind you how cool snippets are.
date: 2015-04-26
photo: 2015-04-26.jpg
---

As a developer in big digital agency I spend most of my day with my code editor. I tried to use many different applications but I ended up with [Sublime Text](http://www.sublimetext.com/3) and I love it. I always look for some useful tricks and tips that saves myself from tedious tasks. One of this things is definitely core feature of Sublime Text - snippets. Let me show you how I use it and how does it speed my workflow up.

> Snippets are smart templates that will insert text for you and adapt it to their context.

## Gists vs Sublime Snippets

There is so many web services and applications to save code bits. This feature is build in most of the code editors as well. I tested some of them and the only two methods that I can recommend are [native snippets](http://docs.sublimetext.info/en/latest/extensibility/snippets.html) build into Sublime Text and [Gist by Github](https://gist.github.com/). Rest of them are not working well for me. Opening a different application or new browser window in the middle of script isn't something that we need. Snippets should be easily accessible and quick to implement.

The biggest advantage of GitHub snippets is awesome community, power of version control and ability to exchange comments about your collection. To manage your gists collection I highly recommend [Gistbox](http://www.gistboxapp.com/) by Rui Yang. To use it with Sublime Text without leaving editor window just install a plugin called [Gist](https://github.com/condemil/Gist). Constant access to one snippets collection from many computers is another cool thing about it.

Despite all this cool things that Gist brings on the table I choose to use [native snippets](http://docs.sublimetext.info/en/latest/extensibility/snippets.html) feature. If you have never worked with Sublime Text Snippets before, I recommend to read this easy to follow [article on Hongkiat blog](http://www.hongkiat.com/blog/sublime-code-snippets/). Simple XML files with .sublime-snippet extension live in ‘Packages’ folder. Clever idea is to create a separated directory inside ‘User’ folder for our reusable bits of code. Dropbox can help us to sync all snippets and settings across many devices. Very detailed instruction how to set syncing up is available on [Package Control website](https://packagecontrol.io/docs/syncing). Let’s have a look at some random snippet from my collection:

```xml
<snippet>
  <content><![CDATA[
  http://lorempixel.com/${1:600}/${2:400}/abstract/
  ]]></content>
  <tabTrigger>lorempixel</tabTrigger>
  <description>other - lorem pixel</description>
</snippet>
```


The idea is to create reusable element of a code between `<![CDATA[` and `]]>`. Placeholders inside a snippets is the reason why I like it so much. After choosing a snippet we can easily navigate via Tab key through predefined placeholders. We can assign to them default values. On example above you can see two placeholders `${1:600}` and `${2:400}`. If you would like to get a literal $ (for example inside some jQuery snippet), you have to escape it like this: `\$`. `tabTrigger` and `description` makes your snippet accessible via keyboard shortcut or select option inside Command Palette (Cmd + Shift + P). I don't use `scope` at all because I want to have an access to my entire library regardless of file type that I'm working with.

## How I keep it organized?

After a while of saving all useful lines of codes you can easily end up with hundreds of snippets. Thats why it’s important to have any strategy to categorise these files. I do it via description tag. Let’s have a look at this bit of code.

```xml
<description>php - wp - acf - flexible content</description>
```

This line of code tells me that this is a php code, wordpress specific. ACF stands for [Advanced Custom Fields](http://www.advancedcustomfields.com/) - one of my favourite Wordpress plugins. Keeping that simple naming convention helps me to filter my snippets so much! For example that's how looks like snippets structure for all my javaScript files.

```xml
js
- js - jquery
- - js - jquery - ajax
- js - ga
- js - modernizr
```

Please let me know in a comments how do you approach this subject and what tools do you use to manage your snippets.
