import { Box, Flex, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import { MetricLayout } from './metricLayout'

// From 0 to 180
const angleInDegrees = 135
const SHOW_BAR_THRESHOLD = 7

export const GaugeMetric = () => {
  const { colorMode } = useColorMode()

  return (
    <MetricLayout>
      <Flex
        position="relative"
        flexDir="column"
        w="full"
        alignItems="center"
        justifyContent="center">
        {/* Background radial bar */}
        <Box top={0} position="absolute" w={257} h={257}>
          <Image
            src={colorMode === 'dark' ? '/gauge-background-dark.svg' : '/gauge-background.svg'}
            alt="gauge"
            width={257}
            height={136}></Image>
        </Box>
        {/* The actual radial bar that grows (rotates) with percentage */}
        {/* It doesn't show until angleInDegrees is greater than 7 to avoid showing it on the end */}
        {angleInDegrees > SHOW_BAR_THRESHOLD && (
          <Box top={0} position="absolute" w={257} h={135} overflow="hidden">
            <Box top={0} transform={`rotate(${180 + angleInDegrees}deg)`} w={257} h={257}>
              <Image
                src={colorMode === 'dark' ? '/gauge-active-dark.svg' : '/gauge-active.svg'}
                alt="gauge"
                width={257}
                height={136}></Image>
            </Box>
          </Box>
        )}
        {/* Needed so that the start is rounded */}
        <Flex alignItems="flex-end" top={0} position="absolute" w={257} h={136}>
          <Box
            w={4}
            h={2}
            bgColor="greyscale.off-white"
            _dark={{ bgColor: 'greyscale.off-black' }}
            position="relative"
            overflow="hidden">
            <Box w={257} h={136} position="absolute" bottom={0}>
              <Image
                src={colorMode === 'dark' ? '/gauge-active-dark.svg' : '/gauge-active.svg'}
                alt="gauge"
                width={257}
                height={136}></Image>
            </Box>
          </Box>
        </Flex>
        {/* Pointer */}
        <Flex
          alignContent="center"
          justifyContent="center"
          top={0}
          position="absolute"
          w={257}
          h={257}>
          <Image
            src={colorMode === 'dark' ? '/gauge-pointer-2-dark.svg' : '/gauge-pointer-2.svg'}
            alt="gauge"
            width={45}
            height={45}></Image>
        </Flex>
        <Flex
          alignContent="center"
          justifyContent="center"
          top={0}
          position="absolute"
          w={257}
          h={257}
          transform={`rotate(${-90 + angleInDegrees}deg)`}>
          <Image
            src={colorMode === 'dark' ? '/gauge-pointer-1-dark.svg' : '/gauge-pointer-1.svg'}
            alt="gauge"
            width={21}
            height={86}
            style={{ transform: 'translate(0%, -13%)' }}></Image>
        </Flex>
      </Flex>
    </MetricLayout>
  )
}
