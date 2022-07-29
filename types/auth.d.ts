interface IInstance {
  firstName: string
  lastName: string
  email: string
  secret: string
  ref: string | any
  verified: boolean
  modules: string[]
  activeModule?: string
}

interface Im_ibdp_Data {
  subjects: string[]
  tests: string[]
}

interface IAuthContext {
  instance: IInstance | undefined
  loading: boolean
  login: LoginFucntion
  register: RegisterFunction
  logout: LogoutFunction
  moduleAPI: any
  moduleData?: Im_ibdp_Data
  setModuleData?: any
}

interface ILoginFn {
  (email: string, password: string): Promise<{ success: boolean; error?: string }>
}

interface IRegisterFn {
  (firstName: string, lastName: string, email: string, password: string): Promise<{
    success: boolean | undefined
    error: string | undefined
  }>
}

interface ILogoutFn {
  (): Promise<void>
}

interface ISyncFn {
  (): Promise<void>
}
