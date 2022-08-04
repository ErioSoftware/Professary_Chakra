import { ListItem, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export const BarItem = ({ link, active }: { link: IBarProps; active?: string }) => {
  const { href, label, icon } = link.link

  return (
    <ListItem mb="5">
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
