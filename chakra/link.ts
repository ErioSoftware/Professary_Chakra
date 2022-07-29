import { ComponentStyleConfig } from '@chakra-ui/react'
import { fontVariants } from './text'

export const Link: ComponentStyleConfig = {
  variants: {
    ...fontVariants,
    login: {
      fontWeight: 'semibold',
      color: 'primary.default',
      fontSize: 'desktop-link-medium',
      letterSpacing: 'desktop-link-medium',
      cursor: 'pointer',
      _dark: { color: 'primary.darkMode' },
      _hover: { textDecoration: 'none' }
    },
    loginMobile: {
      fontWeight: 'semibold',
      color: 'primary.default',
      fontSize: 'desktop-link-small',
      letterSpacing: 'desktop-link-small',
      cursor: 'pointer',
      _dark: { color: 'primary.darkMode' },
      _hover: { textDecoration: 'none' }
    },
    loginMobileXSmall: {
      fontWeight: 'semibold',
      color: 'primary.default',
      fontSize: 'desktop-link-x-small',
      letterSpacing: 'desktop-link-small',
      cursor: 'pointer',
      _dark: { color: 'greyscale.label' },
      _hover: { textDecoration: 'none' }
    }
  }
}
