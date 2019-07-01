---
title: "Configure a local WordPress development using Docker"
description: "Wordpress being the most popular CMS on the world can be a bit tricky to set up locally. Docker containers can help a lot to set things up so let me explain."
photo: 2019-07-04.jpg
draft: true
---

One of the most popular articles on my website is ["Configure a local WordPress development on macOS from scratch"](https://pawelgrzybek.com/configure-a-local-wordpress-development-on-macos-from-scratch/). Since very recently I use [Docker](https://www.docker.com/) a lot so I decided to tackle the same subject again but this time using containers.

![Wordpress and Docker websites](/photos/2019-07-04-1.jpg)

It is definitely not a Docker tutorial although by following along you notice how helpful this tool can be. I highly encourage you to familiarize yourself with few basic concepts like: [images](https://docs.docker.com/glossary/?term=image), [containers](https://docs.docker.com/glossary/?term=container), [networks](https://docs.docker.com/config/containers/container-networking/) and [volumes](https://docs.docker.com/glossary/?term=volume). Having a docker app installed will be very helpful too.

```
brew cask install docker
```

## Wordpress + MySQL + phpMyAdmin

Docker compose is a tool for creating multi-container Docker applications — this is exactly what we need. Having every service defined in a single `docker-compose.yml` file is very handy. I will  do my best to provide helpful descriptions and comments to each of the core building blocks.

### Create docker-compose file

One that rules them all `docker-compose.yml` (`.yml` and `.yaml` extension works just fine) is all that we need.

```
mkdir wp && cd "$_" && touch docker-compose.yml
```

1. `mkdir wp` to create a directory with a name "wp" (like WordPress)
2. `cd "$_"` to navigate into it (`$_` is an argument of a previous command)
3. `touch docker-compose.yml` to create a new file

```yml
# Current version
version: "3"

# We are going to add services here and its config
services:

# ???
networks:
  wp:

# ???
volumes:
  db_data:
```
