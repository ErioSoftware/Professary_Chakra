import { Box, Button, Flex, FlexProps } from '@chakra-ui/react'

interface TabSelectorProps extends FlexProps {
  values: string[]
  setSelected: (s: string) => void
  selected: string
}

export const TabSelector = ({ values, setSelected, selected, ...props }: TabSelectorProps) => {
  const isActive = (v: string) => v === selected

  return (
    <>
      <Flex bg="gray.300" _dark={{ bg: 'greyscale.off-black' }} rounded="lg" p="1" {...props}>
        {values.map(v => (
          <Button
            bg="whiteAlpha.100"
            variant={isActive(v) ? 'tabSelected' : 'ghost'}
            rounded="lg"
            onClick={() => setSelected(v)}
            key={v}
            _focus={{ border: '0px' }}>
            {v}
          </Button>
        ))}
      </Flex>
    </>
  )
}
