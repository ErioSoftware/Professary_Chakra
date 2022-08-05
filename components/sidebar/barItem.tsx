import { ListItem, Link as ChakraLink, Box, useColorMode, Flex, Text, List } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const BarItem = ({ link, active }: { link: IBarProps; active?: string }) => {
  const { href, label, icon, children } = link.link
  const [open, setOpen] = useState(false)
  const { colorMode } = useColorMode()

  return (
    <ListItem mb={1}>
      <Flex flexDir="column" alignItems="flex-end">
        <Flex
          w="full"
          alignItems="center"
          justifyContent="space-between"
          p="4"
          fontWeight="medium"
          rounded="xl"
          bg={active == href ? 'primary.bg' : 'none'}
          color={active == href ? 'primary.default' : 'greyscale.label'}
          _dark={active == href ? { color: 'primary.darkMode', bg: 'greyscale.body' } : {}}>
          <Link href={href} passHref>
            <ChakraLink
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
              _focus={{ border: '0px' }}>
              <Flex>
                {icon}
                <Text variant="desktop-link-small">{label}</Text>
              </Flex>
            </ChakraLink>
          </Link>
          {children ? (
            <Box p="1" cursor="pointer" onClick={() => setOpen(prev => !prev)}>
              {open ? (
                <Image
                  src={colorMode === 'dark' ? '/arrow-up-dark.svg' : '/arrow-up.svg'}
                  alt="arrow-sidebar-item-open"
                  width={16}
                  height={9}></Image>
              ) : (
                <Image
                  src={colorMode === 'dark' ? '/arrow-right-dark.svg' : '/arrow-right.svg'}
                  alt="arrow-sidebar-item-closed"
                  width={9}
                  height={16}></Image>
              )}
            </Box>
          ) : (
            <></>
          )}
        </Flex>
        {children && open && (
          <List marginTop={2} w="90%">
            {children.map((it, index) => (
              <BarItem key={index} link={it} active={active} />
            ))}
          </List>
        )}
      </Flex>
    </ListItem>
  )
}
