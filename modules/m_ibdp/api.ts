import { authClient } from '@/lib/fauna'
import { query as q } from 'faunadb'

export const api = () => {

  const saveModuleData = async (secret: string, ref: string, data: Im_ibdp_Data) => {
    const saveQuery = await authClient(secret)
      .query(q.Call('m_ibdp_SaveUserData', [ref, data]))

    return saveQuery
    }

  const fetchModuleData = async (secret: string, ref: string) => {
    const fetchQuery = await authClient(secret).query(q.Get(q.Ref(q.Collection('m_ibdp_user_data'), ref)))
    
    return fetchQuery
  }

  const createModuleData = async (secret: string, ref: string) => {
    return authClient(secret)
      .query(
        q.Call('m_ibdp_LinkUser', q.Ref(q.Collection('users'), ref))
      )
      .then(e => {return e})
      .catch(e => console.log(e))
  }

  return { saveModuleData, fetchModuleData, createModuleData }
}
