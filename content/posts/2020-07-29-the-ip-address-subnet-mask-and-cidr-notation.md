---
title: "The IP address, subnet mask and CIDR notation"
description: "The Internet is a big network of devices, each of them is identified by the unique IP address. Subnetting is a process of dividing them into smaller subnetworks. Subnet mask helps us to determine which part of the IP address belongs to the network and which one belongs to us (host)."
photo: 2020-07-29.jpg
---

The Internet is a big network of devices, each of them is identified by the unique IP address. They are not connected directly though. Subnetting is a process of dividing them into smaller subnetworks. Subnet mask helps us to determine which part of the IP address belongs to the network and which one belongs to us (host).

![Subnetworks structure](/photos/2020-07-29-1.png)

This diagram represents a simple network of connected devices. It may be a switch on the corner of your street, yours and your neighbours wi-fi routers and a bunch of home devices connected to it.

## Subnet mask, network and host identifier

Just by looking at the picture above you may understand how subnet mask affects an IP address. To get a full understanding of it, lets convert the IP address `135.119.2.0` and its mask `255.255.255.0` to a numeral system that computers understand better, a binary system.

```
IP  : 135.119.2.0
Mask: 255.255.255.0
```

```
IP  : 10000111.01110111.00000010.00000000
Mask: 11111111.11111111.11111111.00000000
```

As you can see, both of them are easily represented by 4 octets of binary digits. All the mask bits enabled (`1`), lock the IP portion for the network and the remaining one is available for the host.

```
IP  : 10000111.01110111.00000010.00000000
Mask: 11111111.11111111.11111111.00000000
      |_________________________|_______|
                network            host
```

## CIDR notation

The combination of the IP and subnet mask is a [classful network architecture](https://en.wikipedia.org/wiki/Classful_network) that since 1993 is mostly replaced by [Classless Inter-Domain Routing (CIDR) method](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing). Let's have a look at the IP and its subnet mask from the example above, and convert it to CIDR notation.

```
IP  : 135.119.2.0
Mask: 255.255.255.0
```

```
IP  : 10000111.01110111.00000010.00000000
Mask: 11111111.11111111.11111111.00000000
```

```
CIDR: 135.119.2.0/24
```

Look how simple! The IP address is followed by slash `/` and by the number of starting bits enabled in a subnet mask. In this case, first 24 bits of the subnet mask are enabled, leaving for host the last octet.

## That's it for today

I was wondering what the hell this slash `/24` means next to the IP address on my home router configuration panel. I learned about it, so I shared it and now you know as well! Stay curious and share knowledge! Bye 👋
