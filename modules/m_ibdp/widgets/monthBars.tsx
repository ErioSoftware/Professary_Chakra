import { Box, Flex, Text } from '@chakra-ui/react'
import { MetricLayout } from './metricLayout'

const data = [
  {
    label: 'JAN',
    progress: '60%'
  },
  {
    label: 'FEB',
    progress: '45%'
  },
  {
    label: 'MAR',
    progress: '20%'
  },
  {
    label: 'APR',
    progress: '80%'
  },
  {
    label: 'MAY',
    progress: '70%'
  },
  {
    label: 'JUN',
    progress: '30%'
  }
]

export const MonthBarsMetric = () => {
  return (
    <MetricLayout>
      <Flex flexDir="column" justifyContent="space-between" w="full" paddingX="32px">
        {data.map((it, index) => (
          <Flex
            key={index}
            alignItems="center"
            w="full"
            justifyContent="space-between"
            h="24px"
            marginTop="4px">
            <Text variant="metricSmall" fontSize="18px">
              {it.label}
            </Text>
            <Flex position="relative" w="85%" h="12px">
              <Box
                position="absolute"
                h="12px"
                w="full"
                borderRadius="200px"
                bgColor="rgba(0, 0, 0, 0.1)"
                _dark={{ bgColor: 'rgba(255, 255, 255, 0.2)' }}
                left={0}
                top={0}
                bottom={0}></Box>
              <Box
                position="absolute"
                h="12px"
                w={it.progress}
                borderRadius="200px"
                bgColor="primary.default"
                _dark={{ bgColor: 'primary.darkMode' }}
                left={0}
                top={0}
                bottom={0}></Box>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </MetricLayout>
  )
}
