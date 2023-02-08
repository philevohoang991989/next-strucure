// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'

type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false
  }
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not supported' })
  }

  const cookie = new Cookies(req, res)
  cookie.set('access_token')

  res.status(200).json({ message: 'logout successfully' })
}
