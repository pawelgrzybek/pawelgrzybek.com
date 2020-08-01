---
title: "Execute a shell command inside a Docker container (3 methods)"
description: ""
photo: 2020-08-03.jpg
---

Running project inside containers is a bread and butter of developers life. It is not rare to need to execute a command against a container and Docker gives us multiple options to do so.

1. [Execute a command inside a new container](#execute-a-command-inside-a-new-container)
2. [Execute a command inside a stopped container](#execute-a-command-inside-a-stopped-container)
3. [Execute a command inside a running container](#execute-a-command-inside-a-running-container)

![Output of Docker info command](/photos/2020-08-03-1.jpg)

## Execute a command inside a new container

Often we want to run a command in an interactive mode inside a new, just instantiated container. Let's create a new `server` container based on the `nginx` image, and run a `bash` command after the container creation.

```
docker container run -it --name server nginx bash
```

## Execute a command inside a stopped container

Same thing but for the stopped container that already exists.

```
docker container start server -at bash
```

## Execute a command inside a running container

What if the container is already running, we don't want to interrupt its internal processes, but we really have to get into it to add a plugin or check some logs? The `exec` command comes handy then.

```
docker container exec -it server bash
```

Quick copy/paste kinda article today. Hopefully, you found it helpful. Ciao!
