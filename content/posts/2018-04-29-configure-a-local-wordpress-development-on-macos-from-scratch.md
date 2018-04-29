---
title: "Configure a local Wordpress development on macOS from scratch"
description: "So you're about to build a WordPress website. An Apache HTTP Server, PHP and MySQL database is all that you need. Let me guide you step by step."
photo: 2018-04-29.jpg
---

So you are a [macOS](https://www.apple.com/uk/macos/) user and you want to configure a local environment to build a [WordPress](https://wordpress.org/) project. Great choice, it is a fantastic piece of software! There are plenty of tools that let you set it up in no time at no cost — [MAMP](https://www.mamp.info/) and [XAMPP](https://www.apachefriends.org/) are probably the best choices for beginners. Smashing Magazine just published an article called ["WordPress Local Development For Beginners: From Setup To Deployment" by Nick Schäferhoff](https://www.smashingmagazine.com/2018/04/wordpress-local-development-beginners-setup-deployment/) which is a great guide that takes you through the journey when using these kinds of tools. There is one disadvantage though — applications like these hide lots of important details from the user and come pre-bundled with lots of stuff that you just don't need to run a Wordpress website.

My approach is a little bit more complicated but gives you enough knowledge about the environment to walk away confidently. An [Apache HTTP server](https://httpd.apache.org/), [MySQL database](https://www.mysql.com/) and [PHP programming language](http://php.net/) is all that we need and, believe it or not, your Apple computer comes with the majority of these elements baked in.

## Configure an Apache HTTP server and enable PHP

The Apache HTTP Server and PHP language are already on your machine. You can confirm they are installed by checking the current version for each of them in the command line.

```
apachectl -v
```

```
php -v
```

Before we run the server we need to make a tiny adjustment in its configuration file. To do so, feel free to use your favourite text editor such as `nano`, `vim`, `subl` or my beloved `code`. Superuser privileges (`sudo`) will be needed.

```
sudo nano /etc/apache2/httpd.conf
```

![Apache httpd configuration file](/photos/2018-04-29-1.jpg)

This is the main Apache configuration file that contains tons of helpful comments about all the available directives. We need to proceed with a few tweaks here:

1. Enable vhost
2. Enable rewrites
3. Enable PHP
4. Change the default location for our projects
5. Enable .htaccess

### Enable vhost (Virtual Host)

There is a chance that you are going to work on multiple WordPress projects in the future and it would be cool to access them via custom domains (i.e. `somewebsite.localhost` or `anotherone.localhost`). [Virtual Host](https://httpd.apache.org/docs/2.4/vhosts/) is a term that describes exactly this functionality. To enable it uncomment `LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so` (line 167 in my case) and `Include /private/etc/apache2/extra/httpd-vhosts.conf` (line 516 in my case) inside your Apache configuration file.

```
old: #LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so
new: LoadModule vhost_alias_module libexec/apache2/mod_vhost_alias.so
```

```
old: #Include /private/etc/apache2/extra/httpd-vhosts.conf
new: Include /private/etc/apache2/extra/httpd-vhosts.conf
```

### Enable rewrites

By default [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) follows the filesystem path. For example the URL to a page about your company may end up being `mycompany.com/about.php`. In the case of WordPress we will more likely see something like `mycompany.com/?p=1`. Wouldn't it be cool to simplify it to `mycompany.com/about`? This is the reason why we need to explicitly enable it. Uncomment `LoadModule rewrite_module libexec/apache2/mod_rewrite.so` (line 175 in my case).

```
old: #LoadModule rewrite_module libexec/apache2/mod_rewrite.so
new: LoadModule rewrite_module libexec/apache2/mod_rewrite.so
```

### Enable PHP

Wordpress is written in PHP. That being so our server surely needs to know how to deal with `.php` files. It is as easy as uncommenting `LoadModule php7_module libexec/apache2/libphp7.so` (line 176 in my case).

```
old: #LoadModule php7_module libexec/apache2/libphp7.so
new: LoadModule php7_module libexec/apache2/libphp7.so
```

### Change the default location for our projects

Personally I store the source files to all websites that I am working on inside a `Sites` folder in my home directory. It is not a requirement, just a convention. The default root directory for the Apache server is `/Library/WebServer/Documents`. We have to amend this path (line 244 and 255 in my case). Please, be sure to change the name of your username folder — the chances that your directory is called `pawelgrzybek` are slim!

```
old: DocumentRoot "/Library/WebServer/Documents"
old: <Directory "/Library/WebServer/Documents">
new: DocumentRoot "/Users/pawelgrzybek/Sites/"
new: <Directory "/Users/pawelgrzybek/Sites/">
```

### Enable .htaccess

To easily change the server configuration on a per-directory basis, Apache uses [`.htaccess` files](https://httpd.apache.org/docs/2.4/howto/htaccess.html). The `AllowOverride controls` section (line 266 in my case) of the configuration file allows us to enable the use of .htaccess files. Edit the value of `AllowOverride` from `None` to `All`. We are done here!

```
old: AllowOverride None
new: AllowOverride All
```

## Start, stop, restart and test apache server config

I know it is a little bit daunting but I promise that we'll never come back to this nasty lengthy configuration file again. Four simple commands are everything that we need to remember from now on. Start, stop, restart and configuration test.

```
sudo apachectl start
sudo apachectl stop
sudo apachectl restart
sudo apachectl configtest
```

Hopefully the commands are self-explanatory. Please bare in mind that every single change of the configuration file requires rebooting of the server — `sudo apachectl restart` comes in very handy for this so do it now please. A good practice is to run a sanity check beforehand by executing `sudo apachectl configtest`.

Test time! Now let's create a test `index.php` file in the root directory that we specified in the Apache configuration file (`/Users/pawelgrzybek/Sites/index.php` in my case). Put a `<?php phpinfo();` in there please. If you followed my previous instructions carefully, this is what you should see under [http://localhost/](http://localhost/).

![PHP info page on Apache on macOS](/photos/2018-04-29-2.jpg)

## Point *.localhost domains to 127.0.0.1

Every time when you visit a website your browser asks a DNS server for the IP address to redirect the request to. DNS server is like a massive phone book that maps domain names to IP numbers.

My convention is to use `.localhost` as a domain suffix for locally stored websites. We don't want those domains to go to the DNS Server to ask for an IP number because we already know it – it is the IP of our own computer — `127.0.0.1` ("localhost" in other words). A `hosts` file helps us with it — you can think of it as a local DNS directory. Add `127.0.0.1 *.localhost` to this file — it is located under `/etc/hosts`.

```
sudo nano /etc/hosts
```

![Add local domains to hosts file on macOS](/photos/2018-04-29-3.jpg)

## MySQL to store data, Sequel Pro to manage it

WordPress' mission is to edit and serve content stored in a database which is the last missing piece of our setup. In order to download the database software and a great GUI (graphical user interface) for it, we are going to use [Homebrew — the missing package manager for macOS](https://brew.sh/). If you are not a Homebrew user, please follow the installation steps from the website and take my word that it is going to make your life much easier in the future. One day I will publish an introduction to `brew` on this website.

```
brew install mysql
```

```
brew cask install sequel-pro
```

Now you have everything that you need. Run a `mysql.server start` command to initialise a MySQL daemon and launch your recently installed Sequel Pro app to create the first database that we are going to use on our website later on. On the initial screen use a descriptive name for your connection, `127.0.0.1` as a host, `root` as a username, keep the password blank and hit the "Connect" button.

![Configure a connection to local database via Sequel Pro](/photos/2018-04-29-4.jpg)

Are you in? From the dropdown in the top-left corner pick "Add database…", give it a meaningful name (I always follow the convention: `localhost_nameofawebsite`), confirm and you are done.

## Build a WordPress website via WP-CLI

If you are working a lot with WordPress but you don't use the [Command line interface for WordPress](https://wp-cli.org/) you need to re-evaluate your workflow. Seriously! There is no other way to save yourself more time than this. If you don't have it yet, install it via `brew` (I told you second ago that the Homebrew is amazing).

```
brew install wp-cli
```

Time to build out a new website! Let's call it `wp.localhost`. It was common practice to use `.dev` as a development domain but a few browser vendors made this a little bit more complicated by requiring an SSL certificate for all `.dev` domains. To avoid the additional steps required to configure it, change your habits and use `.local`, `.test` or `.localhost` instead.

```
mkdir ~/Sites/wp.localhost && cd ~/Sites/wp.localhost && wp core download && wp config create --dbname=NAME_OF_YOUR_DATABASE --dbuser=root --dbpass= --dbhost=127.0.0.1
```

This one-liner creates a folder `wp.localhost` inside a `Sites` directory, puts all the WordPress core files into it, creates a `wp-config.php` file and fills all the necessary details for you. Nice, isn't it?

### Add your local domain to the vhost config file

One last thing, I promise! We want our domain `wp.localhost` to point to `~/Sites/wp.localhost`. This is the function of the Apache Virtual Host that we enabled a few steps ago. We need to add a custom configuration to its configuration file that is located under `/etc/apache2/extra/httpd-vhosts.conf`. Open this file via the text editor of your choice.

```
sudo nano /etc/apache2/extra/httpd-vhosts.conf
```

Go to the very end of this file and add a configuration block that looks like this (make sure that you have amended the paths accordingly to your username):

```apache
<VirtualHost *:80>
    DocumentRoot "/Users/pawelgrzybek/Sites/wp.localhost"
    ServerName wp.localhost

    ErrorLog "/var/log/apache2/wp.localhost-error_log"
</VirtualHost>
```

The `DocumentRoot` tells Apache which directory the domain specified under the `ServerName` should be pointing to. The `ErrorLog` enables any error log files for this website (this may be helpful for debugging in the future). Time for a quick Apache restart and check if everything is working as expected.

```
sudo apachectl restart
```

![WordPress website running locally](/photos/2018-04-29-5.jpg)

## Helpful tip

As a front end developer, the majority of the time I use some node-based servers for my local environment. I rarely build Wordpress projects so there is no need for me to keep Apache and MySQL always running in a background. I created two quick bash aliases that enable / disable those tools for me in a blink of an eye. If you like my approach, add it to your `.bash_profile` file.

```bash
# start / stop Apache & MySQL
alias am-start="sudo apachectl start && mysql.server start"
alias am-stop="sudo apachectl stop && mysql.server stop"
```

## Enjoy WordPressing

Voilà! We ended up with a robust local environment for your Wordpress development. You can easily run other frameworks like [Laravel](https://laravel.com/) on this setup with ease. I hope that you found this article helpful.

I almost forgot! Thanks a ton for proofreading to [Marcin Krzemiński](https://twitter.com/krzeminskinet) who gave me lots of great advices how to make this article better. I highly advice this dude for any Wordpress related stuff — he knows his craft!

Until next time!
