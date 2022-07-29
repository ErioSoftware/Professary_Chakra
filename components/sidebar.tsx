import { useAuth } from '@/lib/auth'
import { Box, Button, Flex, List, ListItem, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

import { LogoutIcon } from './icons'

const BarItem = ({ link, active }: { link: IBarProps; active?: string }) => {
  const { href, label, icon } = link.link

  return (
    <ListItem my="5">
      <Link href={href} passHref>
        <ChakraLink
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
          display="flex"
          alignItems="center"
          p="4"
          fontWeight="medium"
          rounded="xl"
          bg={active == href ? 'primary.bg' : 'none'}
          color={active == href ? 'primary.default' : 'greyscale.label'}
          _focus={{ border: '0px' }}
          variant="desktop-link-small"
          _dark={active == href ? { color: 'primary.darkMode', bg: 'greyscale.body' } : {}}>
          {icon}
          {label}
        </ChakraLink>
      </Link>
    </ListItem>
  )
}

const Sidebar = ({ sideBarLinks, active }: { sideBarLinks: IBarProps[]; active?: string }) => {
  const auth = useAuth()
  return (
    <Box
      h="100vh"
      mr="8"
      w="80"
      pt="24"
      flexShrink={0}
      position="sticky"
      top="0"
      display={{ base: 'none', xl: 'block' }}>
      <Flex as="nav" flexDir="column" h="full" py="4" justifyContent="space-between">
        <List>
          {sideBarLinks.map((link, index) => (
            <BarItem key={index} link={link} active={active} />
          ))}
        </List>

        <Box>
          <Button
            onClick={() => auth?.logout()}
            variant="ghost"
            leftIcon={<LogoutIcon width="6" height="6" mr="4" />}
            p="4"
            w="fit-content">
            <Text variant="desktop-link-small" color="greyscale.label">
              Logout
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export { Sidebar }
