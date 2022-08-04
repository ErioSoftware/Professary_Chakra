import { useAuth } from '@/lib/auth'
import { Box, Button, Flex, List, Text } from '@chakra-ui/react'

import { LogoutIcon } from '../icons'
import { BarItem } from './barItem'
import { SidebarProfile } from './profile'

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
        <Flex flexDir="column" w="full">
          <SidebarProfile />
          <List marginTop={6}>
            {sideBarLinks.map((link, index) => (
              <BarItem key={index} link={link} active={active} />
            ))}
          </List>
        </Flex>

        <Box>
          <Button
            onClick={() => auth?.logout()}
            variant="ghost"
            leftIcon={<LogoutIcon width="6" height="6" mr="4" />}
            p="4"
            w="fit-content"
            outline="0px"
            _focus={{ outline: '0px' }}
            _active={{ outline: '0px' }}>
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
