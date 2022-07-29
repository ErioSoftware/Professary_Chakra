import { Sidebar } from '@/components'
import { CogIcon, LogoIcon, MenuIcon } from '@/components/icons'
import { useAuth } from '@/lib/auth'
import { Box, Button, Flex, IconButton, Text, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'

export const DashboardLayout = ({
  children,
  active,
  sideBarLinks
}: {
  children: ReactNode
  active?: string
  sideBarLinks: IBarProps[]
}) => {
  const auth = useAuth()
  const [mounted, setMounted] = useState(false)
  //This is used to toggle chakra theme
  const { toggleColorMode, colorMode } = useColorMode()

  useEffect(() => setMounted(true), [])

  const handleClick = () => toggleColorMode()

  return (
    <Box bg="greyscale.bg" _dark={{ bg: 'greyscale.ash' }}>
      <Box
        id="soy-prueba"
        zIndex="20"
        bg="greyscale.off-white"
        _dark={{ bg: 'greyscale.ash' }}
        position="fixed"
        insetX="0"
        top="0">
        <Box bg="greyscale.off-white" _dark={{ bg: 'greyscale.off-black' }}>
          <Flex
            as="header"
            alignItems="center"
            justifyContent="space-between"
            h="88px"
            maxW="7xl"
            px={{ base: '6', '2xl': '0' }}
            mx="auto">
            <Link href="/" passHref>
              <Flex
                alignItems="center"
                display={{ base: 'none', xl: 'inline-flex' }}
                cursor="pointer">
                <LogoIcon color="primary.default" _dark={{ color: 'primary.darkMode' }} />
                <Text
                  display={{ base: 'hidden', xl: 'inline' }}
                  ml="3"
                  variant="desktop-link-large"
                  color="primary.default"
                  _dark={{ color: 'primary.darkMode' }}>
                  Professary
                </Text>
              </Flex>
            </Link>
            <IconButton
              aria-label="button"
              w="fit-content"
              variant="ghost"
              display={{ xl: 'none' }}>
              <MenuIcon />
            </IconButton>
            <Flex alignItems="center" justifyContent="end" experimental_spaceX="6">
              <Button
                mx="1"
                variant="dbLayoutOutline"
                w="max"
                _active={{ border: '0px' }}
                _focus={{ border: '0px' }}
                onClick={handleClick}>
                {mounted && colorMode === 'dark' ? (
                  <SunIcon className="text-greyscale-placeholder dark:text-primary-darkMode w-6 h-6" />
                ) : (
                  <MoonIcon className="text-greyscale-placeholder dark:text-primary-darkMode w-6 h-6" />
                )}
              </Button>
              <Box>
                <Link href="/settings" passHref>
                  <Button
                    variant="dbLayoutOutline"
                    _active={{ border: '0px' }}
                    _focus={{ border: '0px' }}>
                    <CogIcon />
                  </Button>
                </Link>
              </Box>
              <Flex alignItems="center">
                <Button position="relative" w="12" h="12" overflow="hidden" rounded="full">
                  <Image
                    layout="fill"
                    src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    alt="avatar"
                  />
                </Button>
                <Text
                  display={{ base: 'none', xl: 'inline' }}
                  variant="desktop-link-x-small"
                  color="greyscale.body"
                  ml="4"
                  fontWeight="semibold"
                  _dark={{ color: 'greyscale.off-white' }}>
                  {auth?.instance?.firstName} {auth?.instance?.lastName}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Flex as="main" px={{ base: '6', xl: 0 }} mx="auto" maxW="7xl">
        <Sidebar sideBarLinks={sideBarLinks} active={active} />
        {auth?.instance ? children : 'Loading'}
      </Flex>
    </Box>
  )
}
