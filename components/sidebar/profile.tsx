import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'

export const SidebarProfile = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      w="full"
      borderColor="gray.200"
      _dark={{ borderColor: 'greyscale.body' }}
      borderWidth="3px"
      borderStyle="solid"
      borderRadius="12px"
      justifyContent="space-between"
      padding="4">
      <Flex>
        <Box overflow="hidden" borderRadius="100px" w="12" h="12">
          <Image
            src="/sidebar-profile-image.png"
            alt="sidebar-profile-image"
            width={512}
            height={512}></Image>
        </Box>
        <Flex flexDir="column" paddingX="18px" alignItems="flex-start" justifyContent="center">
          <Text variant="profile" fontWeight="600">
            Yi Lee
          </Text>
          <Text variant="profile">yi.lee@gmail.com</Text>
        </Flex>
      </Flex>
      <Image
        src={colorMode === 'dark' ? '/arrow-down-dark.svg' : '/arrow-down.svg'}
        alt="arrow-profile"
        width={13.93}
        height={6.96}></Image>
    </Flex>
  )
}
