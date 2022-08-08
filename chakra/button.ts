import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    bg: 'primary.default',
    backgroundColor: 'primary.default',
    color: 'greyscale.off-white',
    width: 'full',
    rounded: 'xl'
  },
  variants: {
    //Solid is default variant, but pseudo selectors
    //must be explicity defined here
    solid: {
      _hover: { bg: 'primary.dark' },
      _dark: {
        backgroundColor: 'primary.darkMode'
      }
    },
    ghost: {
      backgroundColor: 'transparent',
      border: '0px',
      _dark: {
        backgroundColor: 'transparent',
        _hover: { backgroundColor: 'transparent', border: '0px' },
        _focus: { border: '0px', backgroundColor: 'transparent' },
        _active: { border: '0px', backgroundColor: 'transparent' }
      },
      _hover: { backgroundColor: 'transparent', border: '0px' },
      _focus: { border: '0px', backgroundColor: 'transparent', outline: '0px' },
      _active: { border: '0px', backgroundColor: 'transparent', outline: '0px' }
    },
    outline: {
      backgroundColor: 'transparent',
      _dark: { backgroundColor: 'transparent' },
      _hover: { backgroundColor: 'transparent' },
      ring: 2,
      rounded: 'md',
      px: '4',
      ringColor: 'greyscale.line',
      border: '0'
    },
    dbLayoutOutline: {
      backgroundColor: 'transparent',
      _dark: { backgroundColor: 'transparent' },
      _hover: { backgroundColor: 'transparent' },
      ring: 2,
      rounded: 'md',
      px: '4',
      ringColor: 'greyscale.line',
      border: '0',
      h: '42px'
    },
    onboarding: {
      rounded: '2xl',
      height: '4rem',
      letterSpacing: '0.75px',
      textColor: 'greyscale.off-white',
      _dark: { textColor: 'primary.dark', bgColor: 'primary.darkMode' }
    },
    tabSelected: {
      backgroundColor: 'white',
      lineHeight: '22px',
      letterSpacing: '0.25px',
      textColor: 'greyscale.off-dark',
      fontWeight: '500',
      _dark: { backgroundColor: 'greyscale.label' }
    },
    tabNotSelected: {
      backgroundColor: 'greyscale.input',
      lineHeight: '22px',
      textColor: 'greyscale.off-dark',
      letterSpacing: '0.25px',
      fontWeight: '500',
      _dark: { backgroundColor: 'greyscale.ash' }
    }
  }
}

export const IconButton: ComponentStyleConfig = {
  baseStyle: {
    _focus: { border: '0px' },
    _active: { border: '0px' }
  }
}
