---
title: "Configure a local WordPress development using Docker"
description: "WordPress being the absolute top of the podium of user-friendly content management systems can be a cumbersome to spin up locally. Docker containers are perfect for tasks like this so let me explain."
photo: 2019-07-04.jpg
draft: true
---

One of the most popular articles on my website is ["Configure a local WordPress development on macOS from scratch"](https://pawelgrzybek.com/configure-a-local-wordpress-development-on-macos-from-scratch/). I recently use [Docker](https://www.docker.com/) a lot so I decided to tackle the same subject again but this time using containers.

![Wordpress and Docker websites](/photos/2019-07-04-1.jpg)

It is not a Docker tutorial although by following along you learn how helpful this tool can be. I highly encourage you to familiarize yourself with few basic concepts like: [images](https://docs.docker.com/glossary/?term=image), [containers](https://docs.docker.com/glossary/?term=container), [networks](https://docs.docker.com/config/containers/container-networking/) and [volumes](https://docs.docker.com/glossary/?term=volume). Having a [docker app](https://www.docker.com/get-started) installed makes a lot of sense too. Regular readers know that [I am a great friend with Homebrew](https://pawelgrzybek.com/homebrew-the-best-friend-of-the-macos-user/). Yes, you can use it to download docker too.

```
brew cask install docker
```

## Wordpress + MySQL + phpMyAdmin

A bare-bone environment to comfortably work with WordPress locally requires two components although third one is nice to have in some circumstances.

1. [WordPress](https://wordpress.org/)
2.  [MySQL](https://www.mysql.com/) or [MariaDB](https://mariadb.org/) database
3. Database GUI like [phpMyAdmin](https://www.phpmyadmin.net/) (optional)

![Wordpress + MySQL + phpMyAdmin](/photos/2019-07-04-2.jpg)

[Docker compose](https://docs.docker.com/compose/overview/) is a tool for creating multi-container Docker applications defined using single `docker-compose.yml` file (`.yml` and `.yaml` extension works just fine). Sounds like a fantastic method to connect our three building blocks together. I will  do my best to provide helpful descriptions and comments to each of the core building blocks. Make a new directory for your website, create a `docker-compose.yml` in there and let's finally get into the meat of this article.

```
mkdir wp && cd $_ && touch docker-compose.yml
```

```yml
# Version of the Compose file format
# Version 3 is the most current and recommended one
version: "3"

# Top building block that defines
# All containers used for this service
services:

  # Container 1
  # https://hub.docker.com/_/mysql
  db:
    # Image name (optinally version)
    # https://docs.docker.com/compose/compose-file/#image
    image: mysql:5.7
    # Define restart policy
    # https://docs.docker.com/compose/compose-file/#restart
    restart: always
    # Volumes definition
    # https://docs.docker.com/compose/compose-file/#volumes
    # Maps your local folder, to path in a container
    # Useful for data persistence
    volumes:
      - db_data:/var/lib/mysql
    # Add environment variables
    # https://docs.docker.com/compose/compose-file/#environment
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    # List of networks to join
    networks:
      - wp

  # Container 2
  # https://hub.docker.com/_/wordpress
  wordpress:
    # List of dependencies
    depends_on:
      - db
    # Image name (optinally version)
    # https://docs.docker.com/compose/compose-file/#image
    # Feel free to add a version of WordPress
    # I.e. wordpress:5.2.0
    image: wordpress
    # Define restart policy
    # https://docs.docker.com/compose/compose-file/#restart
    restart: always
    # Volumes definition
    # https://docs.docker.com/compose/compose-file/#volumes
    # Maps your local folder, to path in a container
    # Useful for file edits
    # I like to map only wp-content
    # We should not care about WP core files
    volumes: ["./:/var/www/html/wp-content"]
    # Add environment variables
    # https://docs.docker.com/compose/compose-file/#environment
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
    # Ports mapping
    ports:
      - 80:80
      - 443:443
    # List of networks to join
    networks:
      - wp

  # Container 3
  # https://hub.docker.com/r/phpmyadmin/phpmyadmin
  # This one is optional
  phpmyadmin:
    # List of dependencies
    depends_on:
      - db
    # Image name (optinally version)
    # https://docs.docker.com/compose/compose-file/#image
    image: phpmyadmin/phpmyadmin
    # Define restart policy
    # https://docs.docker.com/compose/compose-file/#restart
    restart: always
    # Ports mapping
    ports:
      - 8080:80
    # Add environment variables
    # https://docs.docker.com/compose/compose-file/#environment
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: password
    # List of networks to join
    networks:
      - wp

# Top building block that defines
# All networks used for this service
networks:
  wp:

# Top building block that defines
# All volumes used for this service
volumes:
  db_data:
```

That's it — time to build our stack! Bare that in mind that when you run it for a first time it is going to download all necessary stack images. Every subsequent invocation is going to be almost instant.

```
docker-compose up -d 
```

![Run docker-compose command to spin up a WordPress website](/photos/2019-07-04-3.jpg)

## Voilà!

Hopefully you found it helpful. This simple setup helps me a lot to spin up a new WordPress from scratch in absolutely no time. 

Ps. For simple websites like this one don't use Wordpress. Use [Hugo](https://gohugo.io/) instead :)
