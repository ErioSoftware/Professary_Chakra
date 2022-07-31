import { FC } from 'react'
import dynamic from 'next/dynamic'
import { SuperpowerRadarChartData } from '@/types/dashboard'
import { Box, Heading } from '@chakra-ui/react'

/**
 * Do not SSR this component. This is a huge component.
 */
const RadarChart = dynamic(() => import('@/components/radarChart'), { ssr: false })

const RadarChartData: SuperpowerRadarChartData = [
  { subject: 'Math', value: 21 },
  { subject: 'English', value: 22 },
  { subject: 'Chemical', value: -32 },
  { subject: 'Information', value: -14 },
  { subject: 'Chemistry', value: -51 },
  { subject: 'Biology', value: 16 },
  { subject: 'Physics', value: 7 }
]

export const MySuperpower: FC = () => {
  return (
    <Box>
      <Heading as="h3" variant="dashboardH3">
        My Superpower
      </Heading>
      <Box
        w="full"
        h={{ xl: '72' }}
        p="4"
        mt="2"
        rounded="xl"
        bg="greyscale.off-white"
        _dark={{ bg: 'greyscale.off-black' }}>
        <Box w="full" h="full" ml="-2">
          <RadarChart data={RadarChartData} />
        </Box>
      </Box>
    </Box>
  )
}
