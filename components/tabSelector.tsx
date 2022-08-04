import { Box, Button, Flex, FlexProps } from '@chakra-ui/react'

interface TabSelectorProps extends FlexProps {
  values: { left: string; right: string }
  setSelected: (s: string) => void
  selected: string
}

export const TabSelector = ({ values, setSelected, selected, ...props }: TabSelectorProps) => {
  const isActive = (v: string) => v === selected

  return (
    <>
      <Flex bg="gray.300" _dark={{ bg: 'greyscale.off-black' }} rounded="lg" p="1" {...props}>
        <Button
          bg="whiteAlpha.100"
          variant={isActive(values.left) ? 'tabSelected' : 'ghost'}
          rounded="lg"
          onClick={() => setSelected(values.left)}
          _focus={{ border: '0px' }}>
          {values.left}
        </Button>
        <Button
          variant={isActive(values.right) ? 'tabSelected' : 'ghost'}
          onClick={() => setSelected(values.right)}
          rounded="lg"
          _focus={{ border: '0px' }}>
          {values.right}
        </Button>
      </Flex>
    </>
  )
}
