import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export const SimpleMetric = () => {
  return (
    <Flex
      borderRadius="16px"
      alignItems="center"
      padding="32px"
      height="200px"
      width="full"
      bgColor="greyscale.off-white"
      _dark={{ bgColor: 'greyscale.off-black' }}>
      <Flex
        w="80px"
        h="80px"
        borderRadius="512px"
        padding="20px"
        alignItems="center"
        justifyContent="center"
        bgColor="greyscale.input"
        _dark={{ bgColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Image
          src="/simple-metric-example.svg"
          alt="simple-metric-icon"
          width={36.67}
          height={30}></Image>
      </Flex>
      <Flex flexDir="column" marginStart="32px">
        <Text variant="metricSmall">Meta</Text>
        <Text variant="metricLarge">Metric</Text>
      </Flex>
    </Flex>
  )
}
