import { ComponentStyleConfig } from '@chakra-ui/react'

export const fontSizes = {
  'mobile-display-huge': '32px',
  'mobile-display-large': '28px',
  'mobile-display-medium': '24px',
  'desktop-display-x-small': '24px',
  'desktop-display-small': '40px',
  'desktop-display-medium': '48px',
  'desktop-display-large': '56px',
  'desktop-text-large': '20px',
  'desktop-text-medium': '18px',
  'desktop-text-small': '15px',
  'desktop-text-x-small': '13px',
  'desktop-link-large': '20px',
  'desktop-link-medium': '18px',
  'desktop-link-small': '15px',
  'desktop-link-x-small': '13px',
  'mobile-link-large': '20px',
  'mobile-link-medium': '17px',
  'mobile-text-small': '15px',
  'mobile-text-large': '20px'
}

export const lineHeights = {
  'mobile-display-huge': '44px',
  'mobile-display-large': '44px',
  'mobile-display-medium': '34px',
  'desktop-display-x-small': '32px',
  'desktop-display-small': '48px',
  'desktop-display-medium': '56px',
  'desktop-display-large': '72px',
  'desktop-text-large': '32px',
  'desktop-text-medium': '32px',
  'desktop-text-small': '24px',
  'desktop-text-x-small': '22px',
  'desktop-link-large': '32px',
  'desktop-link-medium': '32px',
  'desktop-link-small': '24px',
  'desktop-link-x-small': '22px',
  'mobile-link-large': '32px',
  'mobile-link-medium': '28px',
  'mobile-text-small': '24px',
  'mobile-text-large': '32px'
}

export const letterSpacings = {
  'mobile-display-huge': ' 1px',
  'mobile-display-large': '1px',
  'mobile-display-medium': '1px',
  'desktop-display-x-small': '1px',
  'desktop-display-small': ' 1px',
  'desktop-display-medium': '1px',
  'desktop-display-large': '1px',
  'desktop-text-large': '0.75px',
  'desktop-text-medium': '  0.75px',
  'desktop-text-small': '0.75px',
  'desktop-text-x-small': '0.25px',
  'desktop-link-large': '0.75px',
  'desktop-link-medium': '0.75px',
  'desktop-link-small': '0.75px',
  'desktop-link-x-small': '0.25px',
  'mobile-link-large': '0.75px',
  'mobile-link-medium': '0.75px',
  'mobile-text-small': '0.75px',
  'mobile-text-large': '0.75px'
}

export const fontVariants = {
  'mobile-display-huge': {
    fontSize: 'mobile-display-huge',
    lineHeight: 'mobile-display-huge',
    letterSpacing: 'mobile-display-huge'
  },
  'mobile-display-large': {
    lineHeight: 'mobile-display-large',
    letterSpacing: 'mobile-display-large',
    fontSize: 'mobile-display-large'
  },
  'mobile-display-medium': {
    lineHeight: 'mobile-display-medium',
    letterSpacing: 'mobile-display-medium',
    fontSize: 'mobile-display-medium'
  },
  'desktop-display-x-small': {
    lineHeight: 'desktop-display-x-small',
    letterSpacing: 'desktop-display-x-small',
    fontSize: 'desktop-display-x-small'
  },
  'desktop-display-small': {
    lineHeight: 'desktop-display-small',
    letterSpacing: 'desktop-display-small',
    fontSize: 'desktop-display-small'
  },
  'desktop-display-medium': {
    lineHeight: 'desktop-display-medium',
    letterSpacing: 'desktop-display-medium',
    fontSize: 'desktop-display-medium'
  },
  'desktop-display-large': {
    lineHeight: 'desktop-display-large',
    letterSpacing: 'desktop-display-large',
    fontSize: 'desktop-display-large'
  },
  'desktop-text-large': {
    lineHeight: 'desktop-text-large',
    letterSpacing: 'desktop-text-large',
    fontSize: 'desktop-text-large'
  },
  'desktop-text-medium': {
    lineHeight: 'desktop-text-medium',
    letterSpacing: 'desktop-text-medium',
    fontSize: 'desktop-text-medium'
  },
  'desktop-text-small': {
    lineHeight: 'desktop-text-small',
    letterSpacing: 'desktop-text-small',
    fontSize: 'desktop-text-small'
  },
  'desktop-text-x-small': {
    lineHeight: 'desktop-text-x-small',
    letterSpacing: 'desktop-text-x-small',
    fontSize: 'desktop-text-x-small'
  },
  'desktop-link-large': {
    lineHeight: 'desktop-link-large',
    letterSpacing: 'desktop-link-large',
    fontSize: 'desktop-link-large'
  },
  'desktop-link-medium': {
    lineHeight: 'desktop-link-medium',
    letterSpacing: 'desktop-link-medium',
    fontSize: 'desktop-link-medium'
  },
  'desktop-link-small': {
    lineHeight: 'desktop-link-small',
    letterSpacing: 'desktop-link-small',
    fontSize: 'desktop-link-small'
  },
  'desktop-link-x-small': {
    lineHeight: 'desktop-link-x-small',
    letterSpacing: 'desktop-link-x-small',
    fontSize: 'desktop-link-x-small'
  },
  'mobile-link-large': {
    lineHeight: 'mobile-link-large',
    letterSpacing: 'mobile-link-large',
    fontSize: 'mobile-link-large'
  },
  'mobile-link-medium': {
    lineHeight: 'mobile-link-medium',
    letterSpacing: 'mobile-link-medium',
    fontSize: 'mobile-link-medium'
  },
  'mobile-text-small': {
    lineHeight: 'mobile-text-small',
    letterSpacing: 'mobile-text-small',
    fontSize: 'mobile-text-small'
  },
  'mobile-text-large': {
    lineHeight: 'mobile-text-large',
    letterSpacing: 'mobile-text-large',
    fontSize: 'mobile-text-large'
  }
}

export const fonts = {
  heading: 'Poppins',
  body: 'Poppins'
}

export const Text: ComponentStyleConfig = {
  variants: {
    ...fontVariants,
    authQuestion: {
      fontSize: 'desktop-text-medium',
      lineHeight: 'desktop-text-medium',
      letterSpacing: 'desktop-text-medium',
      color: 'greyscale.body',
      _dark: { textColor: 'greyscale.line' }
    },
    authQuestionMobile: {
      fontSize: 'text-sm',
      color: 'greyscale.body',
      _dark: { textColor: 'greyscale.line' }
    },
    authText: {
      fontSize: 'mobile-text-large',
      lineHeight: 'mobile-text-large',
      letterSpacing: 'mobile-text-large',
      color: 'greyscale.off-black',
      _dark: { color: 'greyscale.input' }
    },
    authTextMobile: {
      fontSize: 'text-sm',
      color: 'greyscale.body',
      _dark: { textColor: 'greyscale.line' }
    },
    settingsInputDesktop: {
      fontSize: 'desktop-text-x-small',
      lineHeight: 'desktop-text-x-small',
      letterSpacing: 'desktop-text-x-small',
      _dark: { color: 'greyscale.label' }
    },
    resultRowTitle: {
      color: 'greyscale.placeholder',
      w: '20',
      display: { base: 'inline-block', xl: 'none' }
    },
    onboarding: {
      letterSpacing: '0.75px',
      color: 'greyscale.label',
      _dark: { color: 'greyscale.line' }
    }
  }
}

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    color: 'greyscale.ash',
    _dark: { color: 'greyscale.off-white' }
  },
  variants: {
    ...fontVariants,
    dashboardH3: {
      fontSize: 'desktop-link-small',
      lineHeight: 'desktop-link-small',
      letterSpacing: 'desktop-link-small',
      fontWeight: 'medium',
      color: 'greyscale.off-black',
      _dark: { color: 'greyscale.off-white' }
    },
    onboarding: {
      letterSpacing: '0.75px',
      color: 'greyscale.off-black',
      _dark: { color: 'greyscale.off-white' }
    }
  }
}
