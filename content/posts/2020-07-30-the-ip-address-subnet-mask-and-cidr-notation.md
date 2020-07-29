---
title: "The IP address, subnet mask and CIDR notation"
description: ""
photo: 2020-07-30.jpg
draft: true
---

The Internet is a big network of devices and each of them is identified by the unique IP address. They are not connected directly though. Subnetting is a process of dividing them into smaller subnetworks. Subnet mask helps us to determine the part of the IP address that belongs to the network, the one that belong to us (host) and how many devices a network can have.

![Subnetworks structure](/photos/2020-07-30-1.png)

This diagram presents a simple network of connected devices. It may be a switch on the corner of your street, yours and your neighbor's wi-fi routers and bunch of your home devices connected to it.

## Subnet mask, network and host identifier

Just by looking at the picture above you may understand how subnet mask affects an IP address. To get a full understanding of it, lets convert the IP address `135.119.2.0` and its mask `255.255.255.0` to a numeral system that computers understand better, a binary system.

```
135.119.2.0
255.255.255.0
```

```
10000111.01110111.00000010.00000000
11111111.11111111.11111111.00000000
```

As you can see, both of them are easily representable by 4 octets of binary digits. All the mask bits enabled (`1`), lock the IP portion for the network and the remaining one is available for the host.

```
10000111.01110111.00000010.00000000
11111111.11111111.11111111.00000000
|_________________________|_______|
          network            host
```

## CIDR notation

The combination of the IP and subnet mask is a [classful network architecture](https://en.wikipedia.org/wiki/Classful_network) that since 1993 is mostly replaced by [Classless Inter-Domain Routing (CIDR) method](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing). CIDR notation is easier to understand and more performant. Let's have a look at the IP and its subnet mask from the example above, and convert it to CIDR notation.

```
135.119.2.0
255.255.255.0
```

```
10000111.01110111.00000010.00000000
11111111.11111111.11111111.00000000
```

```
135.119.2.0/24
```

Look how simple! The IP address is followed by slash `/` and by the number of starting bits enabled in a subnet mask. In this case, first 24 bits of the subnet mask are enabled, leaving for host the last octet.

## That's it for today

I was wondering what the hell this slash `/24` means next to the IP address on my home router configuration panel. I learned it so I shared it! Now you know as well. Stay curious and share knowledge! Bye 👋
