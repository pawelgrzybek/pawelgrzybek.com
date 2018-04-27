---
title: "Wordpress development on macOS"
description: "So you are about to build a WordPress. Apache HTTP Server, PHP and MySQL database is all that you need. Let me guide you step by step."
photo: 2018-04-30.jpg
draft: true
---

So you are a [macOS](https://www.apple.com/uk/macos/) user and you want to configure a local environment to build a [WordPress](https://wordpress.org/) projects. Great choice, it is a fantastic piece of software! There are plenty of tools that lets you set it up in no time at no cost — [MAMP](https://www.mamp.info/) and [XAMPP](https://www.apachefriends.org/) are probably the best choices for beginners. Smashing Magazine just published ["WordPress Local Development For Beginners: From Setup To Deployment" by Nick Schäferhoff](https://www.smashingmagazine.com/2018/04/wordpress-local-development-beginners-setup-deployment/) which is a great guide through the journey using these kind of tools. There is one disadvantage though — applications like that hide lots of important details from user and come pre-bundled with lots of stuff that you just don't need to run a Wordpress website.

My approach goes a little bit in depth about all required technologies. [Apache HTTP server](https://httpd.apache.org/), [MySQL database](https://www.mysql.com/) and [PHP programming language](http://php.net/) is all that we need. Believe me or not but your Apple computer comes with majority of those elements baked in.

## Configure Apache HTTP server and enable PHP

The Apache HTTP Server and PHP language is already on your machine.

```
apachectl -v
```

```
php -v
```

Before we run it we need to make a tiny adjustments in it's configuration file. To do it, feel free to use your favourite text editor like `nano`, `vim`, `subl` or my beloved `code`.

```
sudo code /etc/apache2/httpd.conf
```

!!! HTTPD.CONF IN CODE EDITOR IMAGE !!!

This is a main Apache configuration file that contains tons of helpful comments about all available directives. We need to proceed few tweeks here:

1. Enable vhost
2. Enable rewrites
3. Enable PHP
4. Change a default location for our projects
5. Enable .htaccess



### Enable vhost (Virtual Host)

There is a chance that you are going to work on multiple Wordpress projects in a future. If would be cool to access them via customized domains (`somewebsite.local`, `anotherone.local`). [Virtual Host](https://httpd.apache.org/docs/2.4/vhosts/) is a term that describes exactlly this functionality. To enable it uncomment `LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so` (line 167 - more likely this is going to change in a future) and `Include /private/etc/apache2/extra/httpd-vhosts.conf` (line 516 - more likely this is going to change in a future) inside your Apache configuration file.

```
old: #LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so
new: LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so
```

```
old: #Include /private/etc/apache2/extra/httpd-vhosts.conf
new: Include /private/etc/apache2/extra/httpd-vhosts.conf
```

### Enable rewrites

By default [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) folows filesystem path. For example URL to page about your company may end up to be `mycompany.com/about.php`. Wouldn't be cool to simplify it to be  just `mycompany.com/about`? This is the reason why we need to explicitly enable it. Uncomment `LoadModule rewrite_module libexec/apache2/mod_rewrite.so` (line 175 - more likely this is going to change in a future) please.

```
old: #LoadModule rewrite_module libexec/apache2/mod_rewrite.so
new: LoadModule rewrite_module libexec/apache2/mod_rewrite.so
```

### Enable PHP

Wordpress is written in PHP. Surely our server needs to know how to deal with php files. It is as easy as uncommenting `LoadModule php7_module libexec/apache2/libphp7.so` (line 176 - more likely this is going to change in a future).

```
old: #LoadModule php7_module libexec/apache2/libphp7.so
new: LoadModule php7_module libexec/apache2/libphp7.so
```

### Change a default location for our projects

Personally I store source files to all websites that I am working on inside `Sites` folder in my home directory. It is not a requirement, just a convention. Default root directory for Apache server is `/Library/WebServer/Documents`. We have to amend this path (line 244 and 255 - more likely this is going to change in a future). Please, be assured that you amended the name of your user name — there is a slim change that your directory is `pawelgrzybek`.

```
old: DocumentRoot "/Library/WebServer/Documents"
old: <Directory "/Library/WebServer/Documents">
new: DocumentRoot "/Users/pawelgrzybek/Sites/"
new: <Directory "/Users/pawelgrzybek/Sites/">
```

### Enable .htaccess

To easily change server configuration per-directory basis, Apache uses [`.htaccess` files](https://httpd.apache.org/docs/2.4/howto/htaccess.html). `AllowOverride controls` section (line 266 - more likely this is going to change in a future) of configuration file allow us to enable it. Edit a value of `AllowOverride` from `None` to `All`. We are done here!

## Start, stop and restart apache server

I know it is a little bit daunting but I promise that we will never come back to this nasty lengthy configuration file again. Three simple commands is everything that we need to remember since now on. Start, stop, and restart.

```
sudo apachectl start
sudo apachectl stop
sudo apachectl restart
```

Hopefully the commands are self-explanatory. Please bare in mind that every single change of a configuration file require rebooting a server — `sudo apachectl restart` comes very handy then so do it now please.

Test time! Now let's create a test `index.php` file in the root directory that we specified in Apache configuration file (`/Users/pawelgrzybek/Sites/index.php` in my case). Put a `<?php phpinfo(); ?>` in there please. If you followed my previous instructions carefully, this is what you should see under the [http://localhost/](http://localhost/)…

!!! PHP INFO PRINTED ON A PAGE IMAGE !!!

## MySQL to store a data, Sequel Pro to manage it

WordPress' mission is to edit and serve a content stored in a database which is a last missing bit of our setup. To download a database software and a great GUI (graphical user interface) for it, we are goint to use [Homebrew — The missing package manager for macOS](https://brew.sh/). If you are not a Homebrew user, please follow the installation steps from the website and take my word that it is going to make your life much easier in a future. I am currently working on another article which is an introduction to this package manager.

```
brew install mysql
```

```
brew cask install sequel-pro
```

Now you have everything that you need. Run a `mysql.server start` to initialize a MySQL deamon and lunch installed second ago Sequel Pro to create our first database that we are going to use on our website later one. on initial screen use some descriptive name for you connection, `127.0.0.1` as host, `root` as a username and keep password blank.

!!! PHP INFO PRINTED ON A PAGE IMAGE !!!

Are you in? From the dropdown on a top-left corner pick an "Add database…", give it a meaningful name, confirm and you are done.

## Build WordPress website via WP-CLI

If you are working a lot with WordPress but you don't use [Command line interface for WordPress](https://wp-cli.org/) you are living your life wrong. Seriously! There is no other that will save you more time than this one. If you don't have it yet, install it via brew.

```
brew install wp-cli
```

Time to build out new website! Lets call it `test.local`. It was a common practice to use `.dev` as a development domain but few browser vendors made this thing a little bit more complicated by requiring SSl certificate for all `.dev` domains. To avoid addition steps required to configure it, change a habit and use a `.local`, `.test` or `.localhost` instead.

```
mkdir ~/Sites/test.local && cd ~/Sites/test.local && wp core download
```

This one liner created a foler `test.local` inside `Sites` directory, and put all WordPress core files into it. nice, isn't it? Now rename `wp-config-sample.php` to `wp-config.php` and edit few lines of its content.

```
old: define('DB_NAME', 'database_name_here');
new: define('DB_NAME', 'NAMEOFYOURDATABASE');
```

```
old: define('DB_HOST', 'localhost');
new: define('DB_HOST', '127.0.0.1');
```
