import { LogoIcon } from '@/components/icons'
import { Box, Flex, Grid, Heading, Link as ChakraLink, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FunctionComponent } from 'react'

export const AuthLayoutDesktop: FunctionComponent = ({ children }) => {
  return (
    <>
      <Grid
        as="main"
        display={{ base: 'none', xl: 'grid' }}
        minH="100vh"
        templateColumns="repeat(2, minmax(0, 1fr))"
        placeItems="center">
        <Box
          as="section"
          display="grid"
          w="full"
          h="full"
          bg="primary.default"
          _dark={{ bg: 'priamry.darkMode' }}
          placeItems="center"
          bgSize="contain"
          backgroundImage="url('/auth-pattern.png')">
          <Flex alignItems="center">
            <Box>
              <Link href="/" passHref>
                <ChakraLink>
                  <LogoIcon height="50" width="50" />
                </ChakraLink>
              </Link>
            </Box>
            <Box ml="6">
              <Text variant="desktop-display-small" fontWeight="bold" color="greyscale.off-white">
                Professary
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          as="section"
          display="grid"
          w="full"
          h="full"
          placeItems="center"
          _dark={{ bg: 'greyscale.off-black' }}>
          {children}
        </Box>
      </Grid>
    </>
  )
}

export const AuthLayoutMobile: FunctionComponent = ({ children }) => {
  return (
    <>
      <Box
        as="main"
        minH="100vh"
        px="4"
        pt="16"
        textAlign="center"
        display={{ xl: 'none' }}
        _dark={{ bg: 'greyscake-off-black' }}>
        <Box>
          <Link href="/" passHref>
            <ChakraLink>
              <LogoIcon
                mx="auto"
                width="20"
                height="24"
                color="primary.default"
                _dark={{ color: 'primary.darkMode' }}
              />
            </ChakraLink>
          </Link>
          <Heading as="h2" mt="6" textAlign="center" variant="mobile-display-huge">
            Professary
          </Heading>
          {children}
        </Box>
      </Box>
    </>
  )
}
