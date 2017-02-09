import axios from 'axios'
import invariant from 'invariant'

const API_SCHEME = 'https://'
const API_HOST = 'api.digitalocean.com'
const API_VER = '/v2'
const API_BASE = `${API_SCHEME}${API_HOST}${API_VER}`
const API_URIS = {
  ACCOUNT: `${API_BASE}/account`,
  DROPLETS: `${API_BASE}/droplets`,
  REGIONS: `${API_BASE}/regions`,
  SIZES: `${API_BASE}/sizes`,
  IMAGES: `${API_BASE}/images`,
}

function getHeader({ token }) {
  invariant(token, `'token' must be provided`)

  return {
    Authorization: `Bearer ${token}`,
  }
}

export async function getAccount({ token } = {}) {
  const { data } = await axios.get(API_URIS.ACCOUNT, {
    headers: getHeader({ token }),
  })
  return data
}

export async function getDroplets({ token } = {}) {
  const { data } = await axios.get(API_URIS.DROPLETS, {
    headers: getHeader({ token }),
  })
  return data
}

export async function addDroplet({
  token,
  postData,
} = {}) {
  const { data } = await axios.post(API_URIS.DROPLETS, postData, {
    headers: getHeader({ token }),
  })
  return data
}

export async function deleteDroplet({
  token,
  id,
} = {}) {
  const { data } = await axios.delete(`${API_URIS.DROPLETS}/${id}`, {
    headers: getHeader({ token }),
  })
  return data
}

export async function listRegions({ token } = {}) {
  const { data } = await axios.get(`${API_URIS.REGIONS}?page=1&per_page=100`, {
    headers: getHeader({ token }),
  })
  return data
}

export async function listSizes({ token } = {}) {
  const { data } = await axios.get(`${API_URIS.SIZES}?page=1&per_page=100`, {
    headers: getHeader({ token }),
  })
  return data
}

export async function listImages({ token } = {}) {
  const { data } = await axios.get(`${API_URIS.IMAGES}?page=1&per_page=100`, {
    headers: getHeader({ token }),
  })
  return data
}
