import * as digitalOceanApi from './services/digital-ocean-api.js'
import _ from 'lodash'

export async function getAccount({ args, flags }) {
  const token = flags.do-token || process.env.DO_TOKEN
  const data = await digitalOceanApi.getAccount({ token })
  console.log(JSON.stringify(data, null, '  '))
}

/**
 *
 */
export async function listDroplets({ args, flags }) {
  const token = flags.do-token || process.env.DO_TOKEN
  const data = await digitalOceanApi.getDroplets({ token })

  const filters = [
    flags.name && {
      test(val) {
        return new RegExp(flags.name).test(val)
      },
      objectKey: 'name',
    },
  ].filter(a => a)

  const hasFlags = Object.keys(filters).length > 0 && Object.keys(filters).every(key => Boolean(filters[key]))
  if (!hasFlags) {
    return console.log(JSON.stringify(data, null, '  '))
  }

  const matched = filters.reduce((arr, filter) => {
    arr = arr.concat(data.droplets.filter(a => filter.test(_.get(a, filter.objectKey)))).filter(a => a)
    return arr
  }, [])
  console.log(JSON.stringify(matched, null, '  '))
}

/**
 *
 */
export async function addDroplet({ args, flags }) {
  const token = flags.do-token || process.env.DO_TOKEN

  const postData = {
    name: flags.name,
    region: flags.region,
    size: flags.size,
    image: flags.image,
    tags: (flags.tags || []).split(','),
  }

  console.log(`Adding droplet with the following data\n`, JSON.stringify(postData, null, '  '), `\n`)

  const data = await digitalOceanApi.addDroplet({ token, postData })
  console.log(JSON.stringify(data, null, '  '))
}

/**
 *
 */
export async function deleteDroplet({ args, flags }) {
  const token = flags.do-token || process.env.DO_TOKEN
  const id = flags.id

  const data = await digitalOceanApi.deleteDroplet({ token, id })
  console.log(JSON.stringify(data, null, '  '))
}

/**
 *
 */
export async function listRegions({ args, flags }) {
  const token = flags.do-token || process.env.DO_TOKEN
  const data = await digitalOceanApi.listRegions({ token })

  if (flags.slug) {
    return console.log(data.regions.map(s => s.slug).join('\n'))
  }

  console.log(JSON.stringify(data, null, '  '))
}

/**
 *
 */
export async function listSizes({ args, flags }) {
  const token = flags.do-token || process.env.DO_TOKEN
  const data = await digitalOceanApi.listSizes({ token })

  if (flags.slug) {
    return console.log(data.sizes.map(s => s.slug).join('\n'))
  }

  console.log(JSON.stringify(data, null, '  '))
}

/**
 *
 */
export async function listImages({ args, flags }) {
  const token = flags.do-token || process.env.DO_TOKEN
  const data = await digitalOceanApi.listImages({ token })

  if (flags.slug) {
    return console.log(data.images.map(s => s.slug).filter(a => a).join('\n'))
  }

  console.log(JSON.stringify(data, null, '  '))
}
