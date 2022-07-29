import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { NextPage } from 'next'

import { validateEmail } from '@/utils'
import { useAuth } from '@/lib/auth'

import SkewLoader from 'react-spinners/SkewLoader'

import { RegisterLayoutDesktop, RegisterLayoutMobile } from '@/layouts/registerLayout'
import { ArrowIcon, Blob, MailIcon } from '@/components/icons'
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  Link as ChakraLink,
  Grid
} from '@chakra-ui/react'

const RegistrationPage: NextPage = () => {
  const router = useRouter()
  const auth = useAuth()

  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()

  const [passwordMatch, setPasswordMatch] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>(false)

  const [success, setSuccess] = useState<boolean>(false)

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault()

    if (loading) {
      return
    }
    setLoading(true)

    if (!(firstName && lastName && email && password && confirmPassword)) {
      console.log('Form Incomplete')
      setLoading(false)
      return
    }

    if (!validateEmail(email)) {
      console.log('Email Invalid')
      setLoading(false)
      return
    }

    if (!passwordMatch) {
      console.log('Password Does not Match')
      setLoading(false)
      return
    }

    const register = await auth?.register(firstName, lastName, email, password)

    if (register.success) {
      setSuccess(true)
    } else {
      console.log(register.error)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (password == confirmPassword) {
      setPasswordMatch(true)
    } else if (password && confirmPassword) {
      setPasswordMatch(false)
    }
  }, [password, confirmPassword])

  return (
    <>
      <RegisterLayoutDesktop>
        {success ? (
          <>
            {' '}
            <Grid as="section" position="relative" minH="full" placeItems="center">
              <Box maxW="xl" textAlign="center">
                <Box position="relative" w="max-content" mx="auto" mb="4">
                  <Blob className="w-32 h-32 text-greyscale-input dark:text-greyscale-label" />
                  <Box className="absolute inset-0 grid place-items-center">
                    <MailIcon width="12" height="12" />
                  </Box>
                </Box>
                <Heading as="h1" variant="desktop-display-medium">
                  Confirm your email
                </Heading>

                <Box mt="4">
                  <Text variant="authText">
                    We sent you an email to {email}. Click on the link there to continue your sign
                    up.
                  </Text>
                </Box>
                <Box mt="7">
                  <Text variant="authQuestion">Didn&apos;t receive an email?</Text>
                  <ChakraLink variant="login">Resend Email</ChakraLink>
                </Box>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Heading as="h1" variant="desktop-display-medium">
              Registration
            </Heading>
            <Box mt="10">
              <form onSubmit={e => handleRegister(e)}>
                <Box>
                  <Flex justifyContent="space-between">
                    <FormLabel mr="2">
                      <Input
                        variant="login"
                        type="text"
                        placeholder="First Name"
                        onChange={e => setFirstName(e.target.value)}
                      />
                    </FormLabel>
                    <FormLabel>
                      <Input
                        variant="login"
                        type="text"
                        placeholder="Last Name"
                        onChange={e => setLastName(e.target.value)}
                      />
                    </FormLabel>
                  </Flex>
                </Box>
                <Box mt="5">
                  <FormLabel>
                    <Input
                      variant="login"
                      type="text"
                      placeholder="Email Address"
                      onChange={e => setEmail(e.target.value)}
                    />
                  </FormLabel>
                </Box>
                <Box mt="5">
                  <FormLabel>
                    <Input
                      variant="login"
                      type="password"
                      placeholder="Create a password"
                      onChange={e => setPassword(e.target.value)}
                    />
                  </FormLabel>
                </Box>
                <Box mt="5">
                  <FormLabel>
                    <Input
                      variant="login"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                  </FormLabel>
                </Box>

                <Box mt="8">
                  <Button rounded="2xl" height="4rem" type="submit">
                    {loading ? (
                      <SkewLoader color="#ffffff" loading={loading} size={15} />
                    ) : (
                      <>
                        Join Now <ArrowIcon />
                      </>
                    )}
                  </Button>
                </Box>
              </form>
            </Box>
            <Box className="mt-7">
              <Text variant="authQuestion">Already have an account?</Text>
              <Link href={'/login'} passHref>
                <ChakraLink variant="login">Log In</ChakraLink>
              </Link>
            </Box>
          </>
        )}
      </RegisterLayoutDesktop>

      <RegisterLayoutMobile>
        {success ? (
          <>
            <Box as="section" mt="20">
              <Box maxW="xl" textAlign="center">
                <Box position="relative" mb="4" w="max-content" mx="auto">
                  <Blob className="w-24 h-24 text-greyscale-input dark:text-greyscale-label" />
                  <Grid position="absolute" inset="0" placeItems="center">
                    <MailIcon width="10" height="10" className="w-10 h-10" />
                  </Grid>
                </Box>
                <Heading variant="mobile-text-large">Confirm your email</Heading>
                <Box mt="4">
                  <Text variant="authTextMobile">
                    We sent you an email to {email}. Click on the link there to continue your sign
                    up.
                  </Text>
                </Box>
                <Box mt="7">
                  <Text variant="authQuestionMobile">Didn&apos;t receive an email?</Text>
                  <ChakraLink variant="loginMobile">Resend Email</ChakraLink>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Flex alignItems="flex-start" justifyContent="space-between" experimental_spaceX="12">
              <Link href={'/login'} passHref>
                <ChakraLink variant="loginMobileXSmall" px="2" py="3" borderBottom="2" w="full">
                  Login
                </ChakraLink>
              </Link>
              <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="full"
                px="2"
                py="3"
                fontWeight="semibold"
                borderBottom="2px"
                _dark={{ borderColor: 'primary.darkMode' }}>
                <Text variant="desktop-link-x-small">Register</Text>
              </Box>
            </Flex>

            <Box mt="7">
              <form onSubmit={e => handleRegister(e)}>
                <Flex alignItems="center" justifyContent="space-between" experimental_spaceX="4">
                  <Input
                    variant="login"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)}
                  />
                  <Input
                    variant="login"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    onChange={e => setLastName(e.target.value)}
                  />
                </Flex>
                <Box mt="5">
                  <FormLabel>
                    <Input
                      variant="login"
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={e => setEmail(e.target.value)}
                    />
                  </FormLabel>
                </Box>
                <Box mt="5">
                  <FormLabel>
                    <Input
                      variant="login"
                      type="password"
                      placeholder="Create a Password"
                      onChange={e => setPassword(e.target.value)}
                    />
                  </FormLabel>
                </Box>
                <Box mt="5">
                  <FormLabel>
                    <Input
                      variant="login"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                  </FormLabel>
                </Box>

                <Box mt="16">
                  <Button rounded="2xl" height="3.5rem" type="submit">
                    {loading ? (
                      <>
                        <SkewLoader color="#ffffff" loading={loading} size={15} />
                      </>
                    ) : (
                      <Text
                        variant="desktop-link-small"
                        color="greyscale.off-white"
                        _dark={{ color: 'greyscale.off-white' }}>
                        Join now
                      </Text>
                    )}
                  </Button>
                </Box>
              </form>
            </Box>
          </>
        )}
      </RegisterLayoutMobile>
    </>
  )
}

export default RegistrationPage
