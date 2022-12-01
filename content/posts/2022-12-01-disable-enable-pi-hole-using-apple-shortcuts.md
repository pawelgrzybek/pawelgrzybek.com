---
title: "Disable/enable Pi-hole using Apple Shortcuts"
summary: "Pi-hole is my favourite ad-blocking solution. In most cases, it works like a charm, but from time to time, you just want to disable it temporarily."
photo: "2022-12-01.jpg"
---

[Pi-hole](https://pi-hole.net) is my favourite ad-blocking solution. It runs on Raspberry Pi hooked under my desk, and its only purpose is network-wide DNS filtering. ["The World’s Greatest Pi-hole Tutorial 2023" by Crosstalk Solutions](https://www.crosstalksolutions.com/the-worlds-greatest-pi-hole-and-unbound-tutorial-2023/) is an excellent primer if you are new to the subject.

In most cases, it works like a charm, but from time to time, you just want to disable it temporarily. You can stop it via CLI using `pihole disable` command, but this one required SSH login. It just takes too long, and on a mobile device, this is cumbersome. Look at some examples.

```bash
# Disable Pi-hole for 30 seconds
pihole disable 30s
```

```bash
# Disable Pi-hole for 8 minutes
pihole disable 8m
```

Pi-hole during the installation phase lets us install an optional web interface which also allows us to stop/start blocking. This is easier than the previous method but still painful, especially on touch devices.

![Disable/enable ad blocking via Pi-hole Web Interface](/photos/2022-12-01-1.png)

## Apple Shortcuts for the rescue

I spent a few minutes creating this little shortcut that ticks all the boxes for an easy and quick to use method for flipping between Pi-hole blocking states. I built it once on macOS, but thanks to the iCloud sync, I can also use it on iPadOS and iOS.

![Apple Shortcut to disable/enable ad blocking via Pi-hole on macOS](/photos/2022-12-01-2.png)

![Apple Shortcut to disable/enable ad blocking via Pi-hole on iOS](/photos/2022-12-01-3.jpg)

As you can see, calling Pi-hole API requires an authentication key. You can get it using Web Interface or by checking the Pi-hole setup configuration file.

```bash
# Get auth key
cat /etc/pihole/setupVars.conf | grep WEBPASSWORD
```

```bash
# Example how to disable Pi-hole using HTTP request
curl "http://pi.hole/admin/api.php?disable=30&auth=${WEBPASSWORD}"
```

```bash
# Example how to enable Pi-hole using HTTP request
curl "http://pi.hole/admin/api.php?enable&auth=${WEBPASSWORD}"
```

I hope you found it helpful. Until next time, keep on building cool shit 💩


