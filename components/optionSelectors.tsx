import {
  Center,
  CheckboxProps,
  Flex,
  FormLabel,
  Text,
  useCheckbox,
  useColorMode
} from '@chakra-ui/react'
import Image from 'next/image'
import { ReactElement } from 'react'

interface OptionSelectorTextProps extends CheckboxProps {
  text: string | number
}

// Default chakraGroup component dont seems to work on custom checkbox
// aproach
// If you want to handle easily a group of checkbox values
// useCheckboxGroup hook is necessary
// https://chakra-ui.com/docs/hooks/use-checkbox-group#usage

export const TextCheckbox = ({ text, ...props }: OptionSelectorTextProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props)
  const { colorMode } = useColorMode()

  return (
    <FormLabel
      display="flex"
      flexDir="column"
      bg={state.isChecked ? 'primary.bg' : 'greyscale.bg'}
      _dark={{
        bg: state.isChecked ? 'greyscale.body' : 'greyscale.ash',
        color: state.isChecked ? 'primary.darkMode ' : 'cool-gray.300'
      }}
      p="32px"
      alignItems="center"
      w="fit-content"
      borderRadius="32px"
      cursor="pointer"
      color={state.isChecked ? 'primary.default' : 'greyscale.label'}
      {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        bg={state.isChecked ? 'primary.default' : 'cool-gray.300'}
        _dark={{
          bg: state.isChecked ? 'primary.darkMode' : 'greyscale.body'
        }}
        borderRadius="8px"
        w={9}
        h={8}
        {...getCheckboxProps()}>
        {state.isChecked && (
          <Image
            src={colorMode === 'dark' ? '/check-black.svg' : '/check-white.svg'}
            alt="check-icon"
            width={17}
            height={13}></Image>
        )}
      </Flex>
      <Text
        userSelect="none"
        variant="desktop-text-small"
        fontWeight="400"
        mt="10px"
        {...getLabelProps()}
        _dark={{ textColor: state.isChecked ? 'primary.darkMode' : 'greyscale.label' }}>
        {text}
      </Text>
    </FormLabel>
  )
}

interface IconCheckboxProps extends OptionSelectorTextProps {
  centerIcon: ReactElement
}

export const IconCheckbox = ({ text, centerIcon, ...props }: IconCheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props)
  const { colorMode } = useColorMode()

  return (
    <FormLabel
      display="flex"
      flexDir="column"
      p="10px"
      height="170px"
      alignItems="center"
      w="fit-content"
      borderRadius="16px"
      cursor="pointer"
      bg={state.isChecked ? 'primary.bg' : 'cool-gray.100'}
      color={state.isChecked ? 'purple.600' : 'greyscale.label'}
      _dark={{
        bg: state.isChecked ? 'greyscale.body' : 'greyscale.ash',
        color: state.isChecked ? 'primary.darkMode ' : 'cool-gray.300'
      }}
      {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        alignSelf="flex-start"
        justifyContent="center"
        borderRadius="8px"
        p="6px"
        w={6}
        h={6}
        bg={state.isChecked ? 'purple.600' : 'cool-gray.300'}
        _dark={{
          bg: state.isChecked ? 'primary.darkMode' : 'greyscale.body'
        }}
        {...getCheckboxProps()}>
        {state.isChecked && (
          <Image
            src={colorMode === 'dark' ? '/check-black.svg' : '/check-white.svg'}
            alt="check-icon"
            width={17}
            height={13}></Image>
        )}
      </Flex>
      <Flex flexDir="column" alignItems="center" m="3">
        <Center>{centerIcon}</Center>
        <Text
          userSelect="none"
          variant="desktop-text-small"
          fontWeight="400"
          mt="3"
          {...getLabelProps()}
          _dark={{ textColor: state.isChecked ? 'primary.darkMode' : 'greyscale.label' }}>
          {text}
        </Text>
      </Flex>
    </FormLabel>
  )
}
