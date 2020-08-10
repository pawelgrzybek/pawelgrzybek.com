---
title: "Multiple SSH keys for multiple Bitbucket/GitHub accounts"
description: "If we cannot use singular SSH key across multiple accounts (what makes a perfect sense) the solution is to have multiple of them. Let's create two new pair of SSH keys, one for personal use and another one for the clients project."
photo: 2020-08-10.jpg
---

I recently joined a new project whereby a version control repository is hosted on [Bitucket](https://bitbucket.org). It is time to create an account, clone the repo and smash some code! Not that easy — this is what I got when I tried to add my public SSH key to newly created account.

> Someone has already added that SSH key.

That’s right, I had this key already added under my personal account. Luckily the solution is simple and it applies the same, not only to Bitbucket, but also to other popular version control hosting services like [GitHub](https://github.com) or [GitLab](https://gitlab.com). 

!["Key is already in use" alert on GitHub](/photos/2020-08-10-1.jpg)

1. [Generate multiple SSH keys](#generate-multiple-ssh-keys)
2. [Add new keys to SSH agent](#add-new-keys-to-ssh-agent)
3. [Add public keys to individual Bitbucket accounts](#add-public-keys-to-individual-bitbucket-accounts)
4. [Configure SSH](#configure-ssh)
5. [Change the upstream URL of already existing repository](#change-the-upstream-url-of-already-existing-repository)

## Generate multiple SSH keys

If we can’t use the same SSH key across multiple accounts (what makes perfect sense) the solution is to have multiple. Let’s create two new pairs of SSH keys, one for personal use and the other one for the clients project.

```
ssh-keygen -t rsa -b 4096 -C "personal@email.com" -f id_rsa
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in ~/.ssh/id_rsa.
Your public key has been saved in ~/.ssh/id_rsa.pub.
```

```
ssh-keygen -t rsa -b 4096 -C "client@email.com" -f id_rsa-client
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in ~/.ssh/id_rsa-client.
Your public key has been saved in ~/.ssh/id_rsa-client.pub.
```

## Add new keys to SSH agent

To make use of the newly created keys, we need to add them to `ssh-agent`, a program that holds private keys used for public authentication. The `ssh-agent` is probably running in the background of your operating system, but just in case lets turn it on and add new keys to it using `ssh-add`.

```
eval "$(ssh-agent -s)"
```

```
ssh-add -K id_rsa
ssh-add -K id_rsa-client
```

The `-K` flag adds a new key to the macOS keychain. If you’re not using Apple’s operating system, please skip this flag. To confirm that both keys have been successfully added we can use `ssh-add -l` command.

```
4096 SHA256:XXXXXX personal@email.com (RSA)
4096 SHA256:XXXXXX client@email.com (RSA)
```

## Add public keys to individual Bitbucket accounts

Add the newly created public keys to individual Bitbucket account. To copy the content of a file to the clipboard, use the `pbcopy` program.

```
pbcopy < ~/.ssh/id_rsa.pub
pbcopy < ~/.ssh/id_rsa-client.pub
```

![Add SSH key to Bitbucket account](/photos/2020-08-10-2.jpg)

## Configure SSH

SSH config file is where the magic lies. We need to create a configuration file and create custom aliases that are going to enforce usage or particular key for particular host. Let’s do it!

```
touch .ssh/config
```

```
Host bitbucket-client.org
  HostName bitbucket.org
  User git
  IdentityFile ~/.ssh/id_rsa-client
  IdentitiesOnly yes

Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

From now on, every time when you clone a repo from client’s account simply replace `bitbucket.com` with `bitbucket-client.com`. Example:

```
❌ git clone git@bitbucket.org:client/project.git
✅ git clone git@bitbucket-client.org:client/project.git
```

By doing so, you are skipping a default public key resolution, and explicitly pointing your `ssh-agent` to always resolve connection to `bitbucket-client.org` using `~/.ssh/id_rsa-client` key. Your default key is going to just work as it did before. Neat trick, isn’t it?

## Change the upstream URL of already existing repository

You may be asking, what should you do with already existing repositories. Cloning all of them one by one doesn’t sound like fun. Not it’s not and there is a solution! To change a URL of currently existing repository use git remote set-url command. For example:

```
git remote set-url origin git@bitbucket-client.org:client/project.git
```

This solution solved my problem and served me well. I hope it’s going to help you out as well. Stay curious and keep on coding 👩‍💻👨‍💻
