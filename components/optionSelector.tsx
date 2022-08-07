import { Box, Center, Checkbox, CheckboxProps, Flex, Input, Square, Text } from '@chakra-ui/react'

interface OptionSelectorTextProps extends CheckboxProps {
  text: string | number
}

export const OptionSelectorText = ({ text, ...props }: OptionSelectorTextProps) => {
  return (
    <>
      <Center
        maxWidth="fit-content"
        flexDir="column"
        px="5"
        color="purple.600"
        __css={{ aspectRatio: '1' }}
        bg="primary.bg"
        rounded="3xl">
        <Checkbox {...props} size="lg" colorScheme="checkbox" bg="cool-gray.300" />
        <Text>soy el text</Text>
      </Center>
    </>
  )
}

export const OptionSelectorIcon = () => {
  return <></>
}
