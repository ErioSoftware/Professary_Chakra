import { randomBytes } from 'crypto'

export const validateEmail = (email: string): boolean => {
  return (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )?.length != 0
  )
}

export const verificationCodeGenerator = (): string => {
  return 'P-' + randomBytes(8).toString('hex')
}

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}
