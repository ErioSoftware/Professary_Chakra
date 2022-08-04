import { Box, Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'

const OnboardingPage: NextPage = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      as="main"
      minH="100vh"
      px="8"
      textAlign="center"
      justifyContent="center"
      flexDir="column"
      display={{ base: 'flex', xl: 'none' }}>
      <Heading as="h1" fontSize="40px" variant="onboarding">
        Sign Up
      </Heading>
      <Text marginTop={6} variant="onboarding">
        Additional information provided here.
      </Text>
      <Box width="100%" height="30vh" marginTop={50}>
        <Image
          src={colorMode === 'dark' ? '/onboarding-figures-dark.svg' : '/onboarding-figures.svg'}
          alt="onboarding-figures"
          objectFit="cover"
          width={238}
          height={280}></Image>
      </Box>
      <Heading as="h3" marginTop={50} fontSize="22px" variant="onboarding">
        Section Header Info
      </Heading>
      <Flex w="100%" justifyContent="center" marginTop="4">
        <Text maxW={250} variant="onboarding">
          Information on what this section is about
        </Text>
      </Flex>
      <Flex justifyContent="center" marginTop="16">
        <Box
          w={2}
          h={2}
          borderRadius={10}
          bgColor="greyscale.line"
          _dark={{ bgColor: 'greyscale.label' }}
          marginX={2}></Box>
        <Box
          w={4}
          h={2}
          borderRadius={10}
          bgColor="primary.default"
          _dark={{ bgColor: 'primary.darkMode' }}
          marginX={2}></Box>
      </Flex>
      <Button marginTop={50} type="submit" variant="onboarding">
        Continue
      </Button>
    </Flex>
  )
}

export default OnboardingPage
