---
title: "Configure a local Wordpress development on macOS from scratch"
description: "So you are about to build a WordPress website. Apache HTTP Server, PHP and MySQL database is all that you need. Let me guide you step by step."
photo: 2018-04-30.jpg
---

So you are a [macOS](https://www.apple.com/uk/macos/) user and you want to configure a local environment to build a [WordPress](https://wordpress.org/) project. Great choice, it is a fantastic piece of software! There are plenty of tools that let you set it up in no time at no cost — [MAMP](https://www.mamp.info/) and [XAMPP](https://www.apachefriends.org/) are probably the best choices for beginners. Smashing Magazine just published ["WordPress Local Development For Beginners: From Setup To Deployment" by Nick Schäferhoff](https://www.smashingmagazine.com/2018/04/wordpress-local-development-beginners-setup-deployment/) which is a great guide through the journey using these kind of tools. There is one disadvantage though — applications like that hide lots of important details from user and come pre-bundled with lots of stuff that you just don't need to run a Wordpress website.

My approach is a little bit more complicated but gives you enough knowledge about the environment to walk away confidently. [Apache HTTP server](https://httpd.apache.org/), [MySQL database](https://www.mysql.com/) and [PHP programming language](http://php.net/) is all that we need and believe me or not, but your Apple computers come with majority of those elements baked in.

## Configure Apache HTTP server and enable PHP

The Apache HTTP Server and PHP language are already on your machine. You can confirm that by checking a version for each of those.

```
apachectl -v
```

```
php -v
```

Before we run it we need to make a tiny adjustments in it's configuration file. To do it, feel free to use your favourite text editor like `nano`, `vim`, `subl` or my beloved `code`. Superuser privileges `sudo` are needed.

```
sudo nano /etc/apache2/httpd.conf
```

![Apache httpd configuration file](/photos/2018-04-30-1.jpg)

This is a main Apache configuration file that contains tons of helpful comments about all available directives. We need to proceed few tweaks here:

1. Enable vhost
2. Enable rewrites
3. Enable PHP
4. Change a default location for our projects
5. Enable .htaccess



### Enable vhost (Virtual Host)

There is a chance that you are going to work on multiple WordPress projects in the future and it would be cool to access them via custom domains (ie. `somewebsite.localhost` or `anotherone.localhost`). [Virtual Host](https://httpd.apache.org/docs/2.4/vhosts/) is a term that describes exactlly this functionality. To enable it uncomment `LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so` (line 167 in my case) and `Include /private/etc/apache2/extra/httpd-vhosts.conf` (line 516 in my case) inside your Apache configuration file.

```
old: #LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so
new: LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so
```

```
old: #Include /private/etc/apache2/extra/httpd-vhosts.conf
new: Include /private/etc/apache2/extra/httpd-vhosts.conf
```

### Enable rewrites

By default [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) folows filesystem path. For example URL to page about your company may end up being `mycompany.com/about.php`. Wouldn't it be cool to simplify it to `mycompany.com/about`? This is the reason why we need to explicitly enable it. Uncomment `LoadModule rewrite_module libexec/apache2/mod_rewrite.so` (line 175 in my case) please.

```
old: #LoadModule rewrite_module libexec/apache2/mod_rewrite.so
new: LoadModule rewrite_module libexec/apache2/mod_rewrite.so
```

### Enable PHP

Wordpress is written in PHP. Surely our server needs to know how to deal with `.php` files if that is the case. It is as easy as uncommenting `LoadModule php7_module libexec/apache2/libphp7.so` (line 176 in my case).

```
old: #LoadModule php7_module libexec/apache2/libphp7.so
new: LoadModule php7_module libexec/apache2/libphp7.so
```

### Change a default location for our projects

Personally I store source files to all websites that I am working on inside `Sites` folder in my home directory. It is not a requirement, just a convention. Default root directory for Apache server is `/Library/WebServer/Documents`. We have to amend this path (line 244 and 255 in my case). Please, be assured that you changed the name of your username — there is a slim chance that your directory is `pawelgrzybek`.

```
old: DocumentRoot "/Library/WebServer/Documents"
old: <Directory "/Library/WebServer/Documents">
new: DocumentRoot "/Users/pawelgrzybek/Sites/"
new: <Directory "/Users/pawelgrzybek/Sites/">
```

### Enable .htaccess

To easily change server configuration per-directory basis, Apache uses [`.htaccess` files](https://httpd.apache.org/docs/2.4/howto/htaccess.html). `AllowOverride controls` section (line 266 in my case) of configuration file allows us to enable it. Edit a value of `AllowOverride` from `None` to `All`. We are done here!

```
old: AllowOverride None
new: AllowOverride All
```

## Start, stop and restart apache server

I know it is a little bit daunting but I promise that we will never come back to this nasty lengthy configuration file again. Three simple commands are everything that we need to remember since now on. Start, stop, and restart.

```
sudo apachectl start
sudo apachectl stop
sudo apachectl restart
```

Hopefully the commands are self-explanatory. Please bare in mind that every single change of a configuration file requires rebooting a server — `sudo apachectl restart` comes very handy so do it now please.

Test time! Now let's create a test `index.php` file in the root directory that we specified in Apache configuration file (`/Users/pawelgrzybek/Sites/index.php` in my case). Put a `<?php phpinfo(); ?>` in there please. If you followed my previous instructions carefully, this is what you should see under the [http://localhost/](http://localhost/).

![PHP info page on Apache on macOS](/photos/2018-04-30-2.jpg)

## Point *.localhost domains to 127.0.0.1

Every time when you visit a website your browser asks a DNS server for the IP address to redirect this request to. DNS server is like a massive phone book that maps domain names to IP numbers.

My convention is to use a `.localhost` as a domain suffix for locally stored websites. We don't want those domains to go to DNS Server to ask for IP number because we already know it – it is the IP of our own computer — `127.0.0.1` ("localhost" in other words). A `hosts` file helps us with it — you can think of it as a local DNS directory. Add `127.0.0.1 *.localhost` to this file that is located under `/etc/hosts`.

```
sudo nano /etc/hosts
```

![Add local domains to hosts file on macOS](/photos/2018-04-30-3.jpg)

## MySQL to store a data, Sequel Pro to manage it

WordPress' mission is to edit and serve a content stored in a database which is a last missing bit of our setup. To download a database software and a great GUI (graphical user interface) for it, we are going to use [Homebrew — The missing package manager for macOS](https://brew.sh/). If you are not a Homebrew user, please follow the installation steps from the website and take my word that it is going to make your life much easier in the future. One day I will publish an introduction to `brew` on this website.

```
brew install mysql
```

```
brew cask install sequel-pro
```

Now you have everything that you need. Run a `mysql.server start` to initialize a MySQL deamon and lunch installed a second ago Sequel Pro to create our first database that we are going to use on our website later on. On the initial screen use some descriptive name for your connection, `127.0.0.1` as a host, `root` as a username, keep the password blank and hit "Connect" button.

![Configure a connection to local database via Sequel Pro](/photos/2018-04-30-4.jpg)

Are you in? From the dropdown on a top-left corner pick "Add database…", give it a meaningful name (I always follow a convention: `localhost_nameofawebsite`), confirm and you are done.

## Build a WordPress website via WP-CLI

If you are working a lot with WordPress but you don't use [Command line interface for WordPress](https://wp-cli.org/) you are living your life wrong. Seriously! There is no other way that will save you more time than this one. If you don't have it yet, install it via brew (I told you second ago that the Homebrew is amazing).

```
brew install wp-cli
```

Time to build out a new website! Lets call it `wp.localhost`. It was a common practice to use `.dev` as a development domain but few browser vendors made this thing a little bit more complicated by requiring SSL certificate for all `.dev` domains. To avoid additional steps required to configure it, change your habit and use a `.local`, `.test` or `.localhost` instead.

```
mkdir ~/Sites/wp.localhost && cd ~/Sites/wp.localhost && wp core download
```

This one liner created a folder `wp.localhost` inside `Sites` directory, and put all WordPress core files into it. Nice, isn't it? Now rename `wp-config-sample.php` to `wp-config.php` and edit few lines of its content.

```
old: define('DB_NAME', 'database_name_here');
new: define('DB_NAME', 'NAME_OF_YOUR_DATABASE');
```

```
old: define('DB_USER', 'username_here');
new: define('DB_USER', 'root');
```

```
old: define('DB_PASSWORD', 'password_here');
new: define('DB_PASSWORD', '');
```

```
old: define('DB_HOST', 'localhost');
new: define('DB_HOST', '127.0.0.1');
```

### Add your local domain to vhost config file

Last thing, I promise! We want our domain `wp.localhost` to point to `~/Sites/wp.localhost`. This is a mission of Apache Virtual Host. We enabled that few steps ago. We need to add a custom configuration to its configuration file that is located under `/etc/apache2/extra/httpd-vhosts.conf`. Open this file via text editor of choice.

```
sudo nano /etc/apache2/extra/httpd-vhosts.conf
```

Go to the very end of this file add configuration block that looks like this (make sure that you amended the paths accordingly to your username).

```apache
<VirtualHost *:80>
    DocumentRoot "/Users/pawelgrzybek/Sites/wp.localhost"
    ServerName wp.localhost

    ErrorLog "/var/log/apache2/wp.localhost-error_log"
</VirtualHost>
```

The `DocumentRoot` says Apache which directory domain specified under the `ServerName` should be pointing to. The `ErrorLog` enables a error log files for this website (it may be helpful with debugging in the future). Time for a quick Apache restart and check if everything is working as expected.

```
sudo apachectl restart
```

![WordPress website running locally](/photos/2018-04-30-5.jpg)

## Helpful tip

As a front end developer, majority of time I use some node based servers for local environment. I rather rarely build Wordpress projects so there is no need for me to keep Apache and MySQL always running in a background. I created two quick bash aliases that enables / disables those tools for me in a blink of an eye. If you like my approach, add it to your `.bash_prifile` file.

```bash
# start / stop Apache & MySQL
alias am-start="sudo apachectl start && mysql.server start"
alias am-stop="sudo apachectl stop && mysql.server stop"
```

## Enjoy WordPressing

Voilà! We ended up with a robust local environment for your Wordpress development. You can easily run other frameworks like [Laravel](https://laravel.com/) on this setup with ease. I hope that you found this article helpful. Until next time!
