import CommanderShepard from 'commander-shepard'
import * as commandHandlers from './command-handlers.js'

function setupCommanderShepard() {
  const c = new CommanderShepard({
    key: 'platform-manager',
    package: require('../package.json'),
    flags: [
      {
        keys: ['do-token'],
        shortDescription: 'digital ocean token or set it in env var DO_TOKEN',
      },
    ],
    subcommands: [
      {
        key: 'account',
        shortDescription: 'show account info',
        command: commandHandlers.getAccount,
      },
      {
        key: 'regions',
        shortDescription: 'list available regions',
        flags: [
          {
            keys: ['slug'],
            shortDescription: 'show slugs only',
          },
        ],
        command: commandHandlers.listRegions,
      },
      {
        key: 'sizes',
        shortDescription: 'list available sizes',
        flags: [
          {
            keys: ['slug'],
            shortDescription: 'show slugs only',
          },
        ],
        command: commandHandlers.listSizes,
      },
      {
        key: 'images',
        shortDescription: 'list available images',
        flags: [
          {
            keys: ['slug'],
            shortDescription: 'show slugs only',
          },
        ],
        command: commandHandlers.listImages,
      },
      {
        key: 'droplet',
        shortDescription: 'manipulate droplet resources',
        subcommands: [
          {
            key: 'list',
            flags: [
              {
                keys: ['name'],
                shortDescription: 'filter by name',
              },
            ],
            longDescription: 'Lists all digital ocean droplets, this will print a JSON object to stout you can pipe this to jq to parse for specific information',
            shortDescription: 'list digital ocean droplets',
            command: commandHandlers.listDroplets,
          },
          {
            key: 'add',
            flags: [
              {
                keys: ['name'],
                required: true,
                shortDescription: 'filter by name',
              },
              {
                keys: ['region'],
                required: true,
                shortDescription: 'region of deploy',
              },
              {
                keys: ['size'],
                required: true,
                shortDescription: 'size of droplet',
              },
              {
                keys: ['image'],
                required: true,
                shortDescription: 'image id of droplet',
              },
              {
                keys: ['tags'],
                shortDescription: 'tags for droplet',
              },
            ],
            shortDescription: 'Add a droplet',
            command: commandHandlers.addDroplet,
          },
          {
            key: 'delete',
            flags: [
              {
                keys: ['id'],
                required: true,
                shortDescription: 'id of droplet',
              },
            ],
            longDescription: 'Delete a droplet using the provided id.',
            shortDescription: 'delete a droplet',
            command: commandHandlers.deleteDroplet,
          },
        ],
      },
    ],
  })
  c.execute()
}

async function main() {
  setupCommanderShepard()
}

main()
.catch((e) => {
  console.error(`ERROR`, e.message)
})
