import { Box, Checkbox, CheckboxProps, Flex, Input, Square, Text } from '@chakra-ui/react'

interface OptionSelectorProps extends CheckboxProps {
  value: string
  text: string | number
  isDisabled?: boolean
}

export const OptionSelectorText = ({ value, text, isDisabled, ...props }: OptionSelectorProps) => {
  return (
    <>
      <Flex
        flexDir="column"
        color="black"
        maxWidth="fit-content"
        maxH="fit-content"
        justifyContent="center"
        justifyItems="center"
        textAlign="center"
        __css={{ aspectRatio: '1' }}
        p="8"
        bg="greyscale.off-black"
        rounded="lg">
        <Checkbox size="lg" colorScheme="red" mx="auto" mt="3" {...props} />
        <Text mt="1">{text}</Text>
      </Flex>
    </>
  )
}

export const OptionSelectorIcon = () => {
  return <></>
}
