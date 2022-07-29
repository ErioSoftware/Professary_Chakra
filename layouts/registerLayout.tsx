import { LogoIcon } from '@/components/icons'
import { Box, Flex, Grid, Heading, Icon, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { FunctionComponent } from 'react'

export const RegisterLayoutDesktop: FunctionComponent = ({ children }) => {
  return (
    <>
      <Box
        as="main"
        position="relative"
        display={{ base: 'none', xl: 'block' }}
        _dark={{ bg: 'greyscale.off-black' }}>
        <Box as="section" position="absolute" zIndex="20" top="12" left="20">
          <Flex alignItems="center">
            <Link href="/" passHref>
              <ChakraLink
                display="flex"
                flexDir="row"
                _hover={{ textDecoration: 'none' }}
                _focus={{ border: '0px' }}>
                <LogoIcon />
                <Heading as="h1" ml="6" variant="desktop-display-small">
                  Professary
                </Heading>
              </ChakraLink>
            </Link>
          </Flex>
        </Box>
        <Box
          as="section"
          position="absolute"
          inset="0"
          bgRepeat="no-repeat"
          pointerEvents="none"
          className="register-bg-left"
        />
        <Box
          as="section"
          position="absolute"
          inset="0"
          bgRepeat="no-repeat"
          pointerEvents="none"
          className="register-bg-right-top"
        />
        <Box
          as="section"
          position="absolute"
          inset="0"
          bgRepeat="no-repeat"
          pointerEvents="none"
          className="register-bg-right-bottom "
        />
        <Grid as="section" position="relative" w="full" h="full" minH="100vh" placeItems="center">
          <Box w="full" maxW="sm" textAlign="left">
            {children}
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export const RegisterLayoutMobile: FunctionComponent = ({ children }) => {
  return (
    <>
      <Box
        as="main"
        minH="100vh"
        px="4"
        pt="16"
        textAlign="center"
        display={{ xl: 'none' }}
        _dark={{ bg: 'greyscale.off-black' }}>
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
          <Heading variant="mobile-display-huge" mt="6">
            Professary
          </Heading>
          <Box as="section" mt="6">
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}
