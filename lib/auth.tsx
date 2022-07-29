import { useState, useEffect, useContext, createContext, ReactNode } from 'react'
import Router from 'next/router'

import { authClient } from '@/lib/fauna'
import { query as q } from 'faunadb'
import { getCookie, setCookies, removeCookies } from 'cookies-next'


const authContext = createContext<IAuthContext | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuthProvider()
	//@ts-ignore
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

const useAuthProvider = () => {
  const [instance, setInstance] = useState<IInstance | null>()
  const [loading, setLoading] = useState<boolean>(true)

  const [moduleAPI, setModuleAPI] = useState<any>(null)
  const [moduleData, setModuleData] = useState<any>(null)

  useEffect(() => {
    try {
      const instanceCookie = JSON.parse(getCookie('instance') as string);
      setInstance(instanceCookie)
    } catch {
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if(instance){
      setModuleAPI(loadModuleAPI())
      setCookies('instance', JSON.stringify(instance))
    }
  }, [instance])

  useEffect(() => {
    if(moduleAPI){
      moduleAPI.fetchModuleData(instance?.secret, instance?.ref).then((e:{data: Im_ibdp_Data}) =>setModuleData(e.data))
    }
  }, [moduleAPI])

  useEffect(() => {
    if(moduleData){
      moduleAPI.saveModuleData(instance?.secret, instance?.ref, moduleData).then((e:any) => console.log(e))
    }
  }, [moduleData])

  const loadModuleAPI: any = () => {
    if(instance?.activeModule && instance.activeModule == 'm_ibdp'){
      const moduleAPI = require('@/modules/m_ibdp/api')
      return moduleAPI.api()
    }
  }

  const login:ILoginFn = async (email, password) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password })
    }

    const request = await fetch('/api/auth/login', requestOptions)
    const response = await request.json()

    if (!request.ok) {
      return { success: false, error: 'Login not allowed :(' }
    }
    setInstance(response.instance)

    return {
      success: true
    }
  }

  const register: IRegisterFn = async (
    firstName,
    lastName,
    email,
    password
  ) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        modules: ['m_ibdp']
      })
    }

    const request = await fetch('/api/auth/register', requestOptions)
    const response = await request.json()

    if (!request.ok) {
      return { success: false, error: response.error }
    }

    return {
      success: true,
      ...response
    }
  }

  const logout: ILogoutFn = async () => {
    if (instance?.secret) {
      try{
        await authClient(instance.secret).query(q.Logout(false))
      } catch (e) {
        console.log(e)
      }
  }
  removeCookies('instance')
  Router.reload()
}

  return {
    instance,
    loading,
    login,
    register,
    logout,
    moduleAPI,
    moduleData,
    setModuleData
  }
}
