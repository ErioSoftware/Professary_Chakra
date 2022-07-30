import { ComponentStyleConfig } from '@chakra-ui/react'
// Will set custom variants because of this error
// github.com/chakra-ui/chakra-ui/issues/2347
export const Input: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    // Solid is default variant, but pseudo selectors
    // must be explicity defined here
    login: {
      field: {
        border: '0',
        backgroundColor: 'greyscale.input',
        rounded: '2xl',
        px: '6',
        height: '16',
        w: 'full',
        textColor: 'greyscale.label',
        fontSize: 'desktop-text-small',
        letterSpacing: 'desktop-text-small',
        lineHeight: 'desktop-text-small',
        _focus: { ring: '2' },
        _dark: {
          textColor: 'greyscale.line',
          backgroundColor: 'greyscale.body',
          _focus: { ringColor: 'primary.darkMode' }
        }
      }
    },
    settings: {
      field: {
        w: 'full',
        fontWeight: 'light',
        bg: 'transparent',
        fontSize: 'desktop-text-small',
        lineHeight: 'desktop-text-small',
        letterSpacing: 'desktop-text-small',
        _focus: { outline: 'none' },
        p: '0'
      }
    }
  }
}

export const FormLabel: ComponentStyleConfig = {
  baseStyle: {
    margin: '0'
  },
  variants: {
    settingsToggle: {
      userSelect: 'none',
      _focus: { border: 'none' },
      fontWeight: { xl: 'light' },
      fontSize: 'desktop-text-small',
      lineHeight: 'desktop-text-small',
      letterSpacing: 'desktop-text-small',
      cursor: 'pointer'
    }
  }
}
