/* eslint-disable @next/next/no-img-element */
import { useAuth } from '@/lib/auth'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

export const HelloUser: FunctionComponent = () => {
  const auth = useAuth()
  return (
    <>
      <Flex
        flexDir="row"
        bgPosition="right"
        bgRepeat="no-repeat"
        backgroundSize="contain"
        alignItems="center"
        justifyContent="space-between"
        p="8"
        rounded="2xl"
        shadow="lg"
        bg="greyscale.off-white"
        _dark={{ bg: 'greyscale.off-black' }}
        className="bg-card-bg-light-half"
        position="relative">
        <Heading as="h2" position="relative">
          <Box display={{ xl: 'inline' }} mr="2" fontWeight="light">
            Hello
          </Box>
          <Box as="span">{auth?.instance?.firstName + ' ' + auth?.instance?.lastName} 🥳</Box>
          <Text variant="mobile-text-large" fontWeight="light">
            Welcome back to magicland!
          </Text>
        </Heading>
        <Box
          position="absolute"
          height="80%"
          right="2rem"
          display={{ base: 'none', xl: 'inline-block' }}>
          <img src="/ctapatternlight.png" alt="patternlight" style={{ height: '100%' }} />
        </Box>
      </Flex>
    </>
  )
}
