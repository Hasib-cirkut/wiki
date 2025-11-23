---
title: Introduction to Cloudflare Tunnel
description: How to expose your services to internet witout a static IP
slug: introduction-to-cloudflare-tunnel
---

Let’s say your ISP didn’t provide a real IP with your connection. When asked they said you have pay more for it. (which you shouldn’t btw)  
  
But you wanna expose some of your sites like your blog or your 10th portfolio site to the internet. Are you out of options then?  
  
Well no. You can always buy a cheap VPS and pay a monthly fee.  
  
Or you can also use github pages, netlify, vercel etc to host.  
  
What about self hosting? Remember you don’t have a real IP. So can you expose some of the services to the internet from your home network?  
  
Actually you can. That’s where services like [cloudflare tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/) and [tailscale](https://tailscale.com) comes to play.  
  
Let talk about cloudflare tunnel today.  
  
First you just have to install a cloudflare client called cloudflared in your server PC (which is basically any PC you have)

In MacOS you can use brew

```zsh
brew install cloudflared
```

Cloudflared also have a docker image. Find it here: https://hub.docker.com/r/cloudflare/cloudflared

Check if cloudflared is installed or not

```zsh
cloudflared --version
```

Then we need to login to our Cloudflare account

```bash
cloudflared tunnel login
```

After we complete the login in browser, we have to create a new tunnel. Let's say the name we choose is `last-jedi`

```bash
cloudflared tunnel create last-jedi
```

After this command, our tunnel is created. We can check by going to Cloudflare Dashboard.

Now we have to create a `config.yml` file. 

```bash
touch ~/.cloudflared/config.yml
```

Then use your favorite text editor to add these lines to the file.

```yml
tunnel: last-jedi
credentials-file: /Users/<your-user>/.cloudflared/<your-tunnel-id>.json

ingress:
  - hostname: portfolio.example.com # only add this if you already have an domain
    service: http://localhost:3000 # assuming the the site running at port 3000
  - service: http_status:404

```

The last step is to run the created tunnel

```bash
cloudflared tunnel run last-jedi
```

If we omit the `hostname` section, cloudflare will still generate a connector URL using which we can still access our site

```bash
https://<tunnel-id>.cfargotunnel.com
```

And voila, you now have a secure https connection between your home pc and cloudflare edge (which is a fancy way of saying a lot of computers)  
  
Now let’s say you want nice names for the services you wanna expose this way.  
  
So you buy a domain or use the one you got free with GitHub student bundle.  
  
Then you point your domains NS to cloudflare.  

1. Goto **Cloudflare** -> Add a site
2. Cloudflare will give you two nameservers, e.g:

``` text
ada.ns.cloudflare.com
brad.ns.cloudflare.com
```

3. Go to your domain registrar and replace the default nameservers with Cloudflare's NS

> It takes 10-15 minutes for NS server changes to come to effect

After this run this command

 ```bash
 cloudflared tunnel route dns last-jedi portfolio.example.com
 ```

This will basically add a CNAME entry for the site `portfolio.example.com` 

Now you site can be accessed by going to `portfolio.example.com` anywhere from he world. 

Remember that small config file you wrote? How about rather than serving a single service like a React app, you point it to a service like treafik or Caddy?  
  
If you do so, you now have a reverse proxy setup.  
  
Users would type  
[portfolio.coolusername.dev](http://portfolio.coolusername.dev/),  
  
Request resolves to cloudflare,  
  
Cloudflare sends this request through their secure tunnel to your home server,  
  
Your home server is running a reverse proxy which knows which internal service to navigate when the request starts with “portfolio”  
  
Users are now viewing your bloated React.js built portfolio online. And it’s automatically https too.  
  
No port forwarding.  
No manually writing firewalls.  
No https management.  
  
All of these learning came for me when I gave in, bought a mini PC, installed proxmox in it and turned it into a Homelab.  
  
In my opinion this is the best way to learn networking and OPS at least at the beginning.