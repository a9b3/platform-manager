# Platform Manager

Currently just uses the digital ocean API.

```
npm i -g platform-manager
```

First obtain a digital ocean OAuth Token.

```
https://cloud.digitalocean.com/settings/applications
```

## Usage

```

 Usage: platform-manager [command] [flags] 
 
 Flags:

   --do-token       digital ocean token or set it in env var DO_TOKEN
   -h --help        show help
   -v --version     show version
 
 Commands:

   account     show account info
   regions     list available regions
   sizes       list available sizes
   images      list available images
   droplet     manipulate droplet resources


```

