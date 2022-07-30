import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import { useAuth } from '@/lib/auth'

import { ArrowIcon } from '@/components/icons'
import { AuthLayoutDesktop, AuthLayoutMobile } from '@/layouts/authLayout'
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Text
} from '@chakra-ui/react'
import SkewLoader from 'react-spinners/SkewLoader'

const LoginPage: NextPage = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const auth = useAuth()

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()

    if (loading) {
      return
    }

    setLoading(true)

    if (auth?.login) {
      const login = await auth.login(email, password)

      if (login.success) {
        router.reload()
      } else {
        console.log(login.error)
        setError(true)
      }
    }

    setLoading(false)
  }

  return (
    <>
      <AuthLayoutDesktop>
        <Box w="full" maxW="96" textAlign="left">
          <Heading
            as="h1"
            color="greyscale.off-black"
            fontSize="48px"
            _dark={{ color: 'greyscale.off-white' }}>
            Login
          </Heading>
          {error && (
            <>
              <Box mt="4" fontSize="sm" lineHeight="5" color="red.500">
                Invalid email or password
              </Box>
            </>
          )}
          <Box mt="4">
            <form onSubmit={handleLogin}>
              <Box>
                <FormLabel>
                  <Input
                    variant="login"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    value={email}
                    placeholder="Email Address"
                  />
                </FormLabel>
              </Box>
              <Box mt="5">
                <Input
                  variant="login"
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                />
              </Box>

              <Box mt="8">
                <Button rounded="2xl" height="4rem" type="submit">
                  {loading ? (
                    <SkewLoader color="#ffffff" loading={loading} size={15} />
                  ) : (
                    <>
                      Login <ArrowIcon />
                    </>
                  )}
                </Button>
              </Box>
            </form>
          </Box>
          <Box mt="7">
            <Text variant="authQuestion">Don&apos;t already have an account?</Text>
            <Link href={'/register'} passHref>
              <ChakraLink variant="login">Create an account</ChakraLink>
            </Link>
          </Box>
          <Box mt="7">
            <Text variant="authQuestion">Forgot your Password</Text>
            <Link href={'/forgot-password'} passHref>
              <ChakraLink variant="login">Reset Password</ChakraLink>
            </Link>
          </Box>
        </Box>
      </AuthLayoutDesktop>

      <AuthLayoutMobile>
        {error && (
          <>
            <Box mt="3" fontSize="sm" lineHeight="5" color="red.500">
              Invalid email or password
            </Box>
          </>
        )}
        <Box as="section" mt="6">
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Flex
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w="full"
              px="2"
              py="3"
              fontWeight="semibold"
              borderBottom="2px"
              mr={6}
              _dark={{ borderColor: 'primary.darkMode', color: 'primary.darkMode' }}>
              <Text variant="desktop-link-x-small">Login</Text>
            </Flex>

            <Link href={'/register'} passHref>
              <Flex
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="full"
                px="2"
                py="3"
                borderBottom="2"
                fontWeight="semibold"
                ml={6}>
                <Text variant="desktop-link-x-small" _dark={{ color: 'greyscale.label' }}>
                  Register
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Box mt="7">
            <form onSubmit={handleLogin}>
              <Box>
                <FormLabel>
                  <Input
                    variant="login"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    value={email}
                    placeholder="Email Address"
                  />
                </FormLabel>
              </Box>
              <Box mt="5">
                <FormLabel>
                  <Input
                    variant="login"
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                  />
                </FormLabel>
              </Box>

              <Box mt="16">
                <Button rounded="2xl" height="3.5rem" type="submit">
                  {loading ? (
                    <SkewLoader color="#ffffff" loading={loading} size={15} />
                  ) : (
                    <Text
                      variant="desktop-link-small"
                      color="greyscale.off-white"
                      _dark={{ color: 'greyscale.off-white' }}>
                      Login
                    </Text>
                  )}
                </Button>
              </Box>
            </form>
          </Box>
          <Box mt="7">
            <Link href="/forgot-password" passHref>
              <Text fontWeight="semibold" variant="desktop-link-small">
                Forgot Password
              </Text>
            </Link>
          </Box>
        </Box>
      </AuthLayoutMobile>
    </>
  )
}

export default LoginPage
