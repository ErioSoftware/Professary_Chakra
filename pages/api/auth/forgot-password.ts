import type { NextApiRequest, NextApiResponse } from 'next'

import { serverClient } from '@/lib/fauna'

import { query as q } from 'faunadb'

export default async function forgotPassword(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const query: { email: string } = JSON.parse(req.body)

    if (!query.email) {
      res.status(400).json({ error: 'Missing Parameters' })
      return
    }

    const userExists: { exists: true; ref: typeof q.Ref } | { exists: false; ref: null } = await serverClient.query(
      q.Let(
        { user: q.Match(q.Index('user_by_email'), q.Casefold(query.email)) },
        q.If(
          q.Exists(q.Var('user')),
          { exists: true, ref: q.Select(['data', 0], q.Paginate(q.Var('user'))) },
          { exists: false, ref: null }
        )
      )
    )

    if (!userExists.exists){
      res.status(404).json({ error: 'User Not Found' })
      return
    } 

    try {
      const forgotPasswordQuery = await serverClient.query(
        q.Update(userExists.ref, {
          data: { _forgotPasswordCode: 'lalal' }
        })
      )

      res.status(200).json({
        message: 'Forgot Password Request Sucessful'
      })
      return
    } catch (e) {
      res.status(500).json({
        message: 'Unknown Server Error'
      })
      return
    }


  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }
}
