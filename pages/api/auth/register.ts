import { NextApiRequest, NextApiResponse } from 'next'

import { validateEmail, verificationCodeGenerator } from '@/utils'
import { sendVerificationEmail } from '@/lib/mail'
import { serverClient } from '@/lib/fauna'

import { query as q } from 'faunadb'

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const query: {
      firstName: string
      lastName: string
      email: string
      password: string
      modules: string[]
    } = JSON.parse(req.body)

    if (!(query.firstName && query.lastName && query.email && query.password && query.modules)) {
      res.status(400).json({ error: 'Missing Parameters' })
      return
    }

    if (!validateEmail(query.email)) {
      res.status(400).json({ error: 'Invalid Email' })
      return
    }

    try {
      const emailVerificationCode = verificationCodeGenerator()

      const registerRequest: { success: boolean; ref: typeof q.Ref } = await serverClient.query(
        q.Call('RegisterUser', [
          query.email,
          query.password,
          query.firstName,
          query.lastName,
          emailVerificationCode,
          ['m_ibdp'],
          'normal'
        ])
      )

      if (!registerRequest.success) {
        res.status(400).json({ error: 'Account Exists' })

        return
      }

      const encodedVerificationCode = Buffer.from(
        JSON.stringify({ code: emailVerificationCode, ref: registerRequest.ref })
      ).toString('base64')

      sendVerificationEmail(
        query.firstName,
        query.email,
        `http://app.local:3000/verify?secret=${encodedVerificationCode}`
      )

      res.status(200).json({ message: 'Account Created' })
    } catch (e) {
      res.status(400).json({ error: 'Unknown Error' })
      return
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }
}
