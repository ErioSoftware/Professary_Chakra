import { serverClient } from '@/lib/fauna'

import { query as q } from 'faunadb'
import { setCookies } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const query: { email: string; password: string } = JSON.parse(req.body)

    if (!(query.email && query.password)) {
      res.status(400).json({ error: 'Missing Parameters' })
      return
    }

    const loginRequest: { success?: boolean } & Partial<IInstance> =
      await serverClient.query(q.Call('LoginUser', [query.email, query.password]))
      .then((r: any) => {
        Object.keys(r)
        .filter(key => key.startsWith('_'))
        .forEach(key => delete r[key]);
        return r
      }).catch(e => {
        return { success: false }
      })

    if (!loginRequest.success) {
      res.status(400).json({ error: 'Auth Failed' })
      return
    }

    if (!loginRequest.activeModule && loginRequest.modules) {
      loginRequest.activeModule = loginRequest.modules[0]
    }

    loginRequest.ref = loginRequest?.ref?.id;

    setCookies('instance', loginRequest, { req, res })

    res.status(200).json({
      message: 'User Authentication Successful',
      instance: loginRequest
    })
    return
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }
}
