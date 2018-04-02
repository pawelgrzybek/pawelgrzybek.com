---
title: My web development setup
description: I like to read about tools, software, frameworks and frequently used tricks and tips of web developers. Today I would like to show you my set.
photo: 2015-03-26.jpg
---

Improving my workflow is an endless story. I always look for some new tools and new tricks that can speed my workflow up. I confirm that now I’m pretty happy with my current set of stuff that I use in my daily routine. I just bought a new Macbook so I’m in the process of installing necessary tools and adjusting all settings. I thought that is a nice opportunity to write a blog post about it.

I split this blog post into three sections: Hardware, Software and Web Services. Hopefully you are going to enjoy it. If you use something that could be beneficial for me or other readers, feel free to post about it in the comments.

---

## Hardware

### Mac mini (Late 2012)

This is my main computer. The full spec is: 2.6 GHz Intel Core i7, 16 GB 1600 MHz DDR3, Intel HD Graphics 4000 1024 MB and 1TB Fusion Drive. I use it with external monitor Dell U2711. I can’t imagine my life without Apple Wireless Keyboard and Magic Mouse connected to it.

### Macbook Pro with Retina display (Early 2015)

I travel a lot recently, and every single time when I’m not able to use decent computer, I need one. Thats why I bought recently upgraded Macbook Pro with Force Touch. Full spec is: 3.1GHz Dual-core Intel Core i7, 16GB 1866MHz LPDDR3 SDRAM, Intel Iris Graphics 6100 and 128GB PCIe-based Flash Storage. New force touch is very nice!

### iPhone 6

I can’t imagine myself without my iPhone. I really tried to use different  devices but for me it seems to be more complicated that it needs to be. Calls, messages, RSS feeds and Instagram :-) is all I need.

---

## Software

### 1 Password

This is my ‘must have’ app. I install this app as a first one on my fresh OS. Without it my internet life doesn’t exist. I care about security. I don’t use passwords like “qwerty123” or “pawel456”. Every single password that I use across the internet is different, it’s minimum 15 characters long and means absolutely nothing. It is just a combination of random glyphs that normal human being is not able to remmember. Of course I don’t remember it neither, I do not write it down or keep in text file on my dropbox. [1Password](https://agilebits.com/onepassword) is my security manager. The only thing that I need to remember is one master password to have an access to all my encrypted and synced via iCloud passwords - easy like that. Combined with iOS version and browsers extensions this app is my number one all the time!

### iTerm 2

I’m Command Line heavy user. I don’t mind Terminal that Mac OS X comes with, but [iTerm2](http://iterm2.com/) is much more powerful. It gives you an access to use lots of features that don’t exist in default Terminal.

### Sublime Text

My journey through code editors was long and difficult but I’m finally there. [Sublime Text](http://www.sublimetext.com/3) is my code editor of choice. Because it is my main tool that I use to pay my bills I did master it. It comes as a plain text editor but power of this app is in settings and available plugins. I would like to share with you my personal settings that I use and list of my plugins.

```json
{
  "bold_folder_labels": true,
  "caret_extra_width": 1,
  "caret_style": "phase",
  "color_scheme": "Packages/User/SublimeLinter/base16-ocean.dark (SL).tmTheme",
  "detect_indentation": false,
  "draw_minimap_border": true,
  "folder_exclude_patterns":
  [
    ".sass-cache",
    ".git",
    "node_modules"
  ],
  "font_face": "Source Code Pro",
  "font_options":
  [
    "no_round"
  ],
  "font_size": 16,
  "highlight_line": true,
  "highlight_modified_tabs": true,
  "ignored_packages":
  [
    "Vintage"
  ],
  "indent_guide_options":
  [
    "draw_normal",
    "draw_active"
  ],
  "line_padding_bottom": 1,
  "line_padding_top": 1,
  "rulers":
  [
    80
  ],
  "tab_size": 2,
  "theme": "Spacegray.sublime-theme",
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": false
}
```

#### Package Control

Name is self descriptive. It lets you install, uninstall or update your extensions in very user friendly way. More about it on [official website](https://packagecontrol.io/).

#### AutoFileName

Whenever you need to pass a path to file you need to type it manually. With this plugin you have a hints that can speed this process up a bit.

#### BracketHighlighter

It shows the boundaries of block of code that you currently working on. So helpful especially when you are working on a chunky bit of code that doesn’t fit on one screen.

#### Color Highlighter

Whenever you use a colour value in your CSS stylesheet this plugin underlines it with border in appropriate colour. So small but helpful. It is working fine with SASS by taking colors values from variables.

#### Emmet

This is probably one of my favourite plugins of all the time. Creating a HTML markup with this tool takes a seconds. It comes very handy in CSS as well (tons of intuitive shortcuts). Have a look on [official documentation](http://emmet.io/). It is available for majority of popular code editors. You can use power of Emmet in some web tools like Codepen.io or Sassmeister.

#### GitGutter

If you use Git Version Control this small plugin show you in the sidebar differences between current version and last commit.

#### SCSS

Sublime Text doesn’t understand SCSS syntax. This plugin adds a syntax highlighting for your SCSS files. It doesn't work excellent (especially with some new features in CSS) but it does the job. If you use something better than this, please let me know in comments.

#### SFTP

I don’t work directly on FTP that much anymore, but sometimes it happens. Applications like Adobe Dreamweaver or Panic Coda have a FTP client build into app core. This plugin is essentially FTP client for Sublime Text. It lets you work directly on live server or map your local directory with remote server and sync the changes.

#### SideBarEnhancements

When you right click on a file in sidebar you don’t have to many options. With this plugin after right click you can see much more options like “Copy name”, “Copy path” or the most frequently used by myself “Duplicate”.

#### SublimeLinter

This is a core plugin for a whole family of different sub plugins. By itself it does’t do a lot, it is just a necessary bit that you need to install before using plugins like: SublimeLinter-jshint or SublimeLinter-php. This two are my linters of choice. Basically it is a code debugger. It debugs your code by indicating all errors in sidebar. When you hover over faulty line, it show you an error fault and gives you a hint how to fix it.

#### Theme - Spacegray

Something what is pretty cool in Sublime Text is fact that you can make it look exactly like you want. It’s very easy to create your own theme, but if you don’t feel it, you can use one of many amazing themes available on Package Control repository. [Spacegray](http://kkga.github.io/spacegray/) is my number one!

### Mail App

I’m not that massive mail user. I receive mails mainly from Ebay, Amazon or Discogs :) Default Mail app is more than enough for me. I like how cool is working with iCloud account. I use additionally Gmail account but I manage it through the browser.

### Reeder

I’m a little bit old school. I love RSS and I can’t imagine how internet could exist without it. I follow about 400 blogs and services across the web. [This beautiful application](http://reederapp.com/mac/) is the place where all this stuff are combined and served in beautiful, readable form. I’m a heavy user of both: OS X and iOS version.

### CleanMyMac 2

Your browser saves some cache files, your system generates some reports, many apps create tons of temporary files and all this crap exist somewhere in your Mac. After a while the amount of this files is much bigger than you can imagine. As you can guess CleanMyMac2 cleans your Mac :-) It looks for all the files that your OS can live without and delete them. Additionally you can remove some languages that are not applicable to you or schedule a reminder about next clean. One more thing. This application is one of the best designed app that I have ever seen. Amazing illustrations and smooth animations are really impressive.

### CopyLess

Multiple clipboard. I can't imagine work without it now. You just need to hit a global shortcut on your keyboard and pick from the list item that you would like to paste. Awesome tool!

### Divvy

I use it on both: 27 inch display connect to Mac Mini and 13 inch MacBook Pro. It helps to manage space on your desktop by positioning windows. Have a look on the [presentation video](http://mizage.com/divvy/) on official website. Really helpful utility in daily routine.

### Things

This is my favourite GTD app (get things done). Every single thing that comes to my mind and should be done anytime soon goes to this application. In combination with iOS version it helps me to do things.

### MAMP

I’m not a backend developer but I work a lot with Wordpress. I prefer to work locally so to run PHP server locally I use this app. I do not lunch this app very often but definitely it is necessary part of my setup.

### Sketch 3

I use to be a massive Photoshop lover. I have never wondered that I could replace Photoshop by something else. Nowadays I design every single project in [Sketch by Bohemian Coding](http://bohemiancoding.com/sketch/). When you work with this tool you know that this application has been made by developers and designers for developers and designers. It is not a best choice to do any photo retouch or image manipulation. This software is purely to create graphic interfaces of apps and websites. In the company where I work we still use Photoshop, and every single time when I need to do some work I struggle so much. Just give it a try and I promise you you will never come back to PS. It is way more faster, includes tons of features that you couldn’t find in Adobe’s app and it is way cheaper!

### iA Writter

Every single longer form of text that I do I create in this app. Support for Markdown, sync by iCloud and minimal design is all I need. Occasionally I use iOS version to do some quick amendments. Mobile version of this software is awesome as well.

### Google Chrome and Safari

On daily basis I’m a Chrome user. I don’t mind Safari, it is very reliable app but in terms of debugging websites, Google product is definitely a my winner. The only extensions that I use are: 1Password, AddBlock Plus, Instapaper and Pinboard Tools.

---

## Web services

### Dropbox and Copy

Both of this services I really like and both of them have own advantages and disadvantages. Dropbox is very popular and it’s incredibly fast compared to different services. The storage space isn’t enough unfortunately. Copy is incredibly cool. I have 200GB storage space on my account totally for free. Compared to Dropbox the sync speed isn’t that fantastic.

### Pinboard

Bookmarks in browser are so old school. Nowadays we have very nice looking services that saves our links and let us use additional features like tags or categories. My choice is Pinboard. It doesn’t look that great like for example Pocket but it’s very fast! Vary fast! This service isn’t free but it doesn’t cost much. I highly recommend to check it if you store endless lists of links in your browser bookmarks.

### Feedly

My main source of news from web development community. I follow about many blogs and services and all RSS feeds are combined together here - on my Feedly account. This service is well supported by Reeder App (described above).

### Instapaper

I love the minimalism of this app and build in distract free module. Browser extension and iOS app are awesome. Fantastic tool to read longer texts.
