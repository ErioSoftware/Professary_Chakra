import { extendTheme } from '@chakra-ui/react'
import { Button, IconButton } from './button'
import { Input, FormLabel } from './form'
import { colors } from './color'
import { Link } from './link'
import { fontSizes, letterSpacings, lineHeights, fonts, Text, Heading } from './text'

export const theme = extendTheme({
  colors,
  fontSizes,
  letterSpacings,
  lineHeights,
  fonts,
  components: { Button, Input, Text, Heading, Link, FormLabel, IconButton }
})
