import { Flex, Text, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import { ReactNode } from 'react'

export const MetricLayout = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      flexDir="column"
      borderRadius="16px"
      alignItems="center"
      height="340px"
      width="full"
      bgColor="greyscale.off-white"
      _dark={{ bgColor: 'greyscale.off-black' }}>
      <Flex justifyContent="space-between" w="full" padding="32px">
        <Flex flexDir="column">
          <Text variant="metricSmall">Meta</Text>
          <Flex alignItems="center">
            <Text variant="metricMedium">Metric</Text>
            <Flex
              marginStart="12px"
              borderStyle="solid"
              borderWidth="2px"
              borderColor="greyscale.off-black"
              borderRadius="8px"
              padding="6px 12px"
              _dark={{ borderColor: 'greyscale.line' }}
              alignItems="center">
              <Text variant="metricLabel">Label</Text>
              <Flex w="16px" h="16px" alignItems="center" justifyContent="center">
                <Image
                  src={
                    colorMode === 'dark'
                      ? '/metric-label-arrow-dark.svg'
                      : '/metric-label-arrow.svg'
                  }
                  alt="metric-label-arrow"
                  width={11}
                  height={11}></Image>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="40px"
          h="40px"
          alignItems="center"
          justifyContent="center"
          borderRadius="512px"
          bgColor="greyscale.input"
          cursor="pointer"
          _dark={{ bgColor: 'rgba(255, 255, 255, 0.1)' }}>
          <Image
            src={colorMode === 'dark' ? '/metric-menu-icon-dark.svg' : '/metric-menu-icon.svg'}
            alt="metric-menu-icon"
            width={4}
            height={10}></Image>
        </Flex>
      </Flex>
      {children}
    </Flex>
  )
}
