import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

export const Insights: FunctionComponent = () => {
  return (
    <Box as="section" mt="12">
      <Box py="8">
        <Heading variant="dashboardH3">Recent Insights</Heading>
        <Flex
          flexDir="row"
          mt="4"
          overflowX="scroll"
          experimental_spaceX="4"
          scrollBehavior="smooth"
          className="no-scrollbar">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <Box
                key={index}
                bg="primary.default"
                _dark={{ bg: 'greyscale.off-black' }}
                p="8"
                w="56"
                rounded="2xl"
                flexShrink={0}
                color="greyscale.off-white">
                <Heading
                  as="h4"
                  fontWeight="bold"
                  fontSize="lg"
                  lineHeight="lg"
                  color="greyscale.off-white">
                  Physics HL
                </Heading>
                <Text as="time" mt="2" fontSize="xs" fontWeight="light">
                  August 10, 2021
                </Text>
                <Text fontSize="sm" mt="4" fontWeight="light">
                  You are not good with Subtopic 1.1. We believe you should focus more on topic 1.1
                  and less on topic 3.2.
                </Text>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Box>
  )
}
