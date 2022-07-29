import { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import { Box, Heading } from '@chakra-ui/react'

export const MyActivity: FunctionComponent = () => {
  const BarChart = dynamic(() => import('@/components/barChart'), { ssr: true })
  return (
    <Box>
      <Heading as="h3" variant="dashboardH3">
        Activity
      </Heading>
      <Box
        w="full"
        h={{ base: '56', xl: '72' }}
        p="8"
        mt="2"
        bg="greyscale.off-white"
        _dark={{ bg: 'greyscale.off-black' }}
        shadow="lg"
        rounded="xl">
        <Box h="full" w="full" ml="-4">
          <BarChart />
        </Box>
      </Box>
    </Box>
  )
}
