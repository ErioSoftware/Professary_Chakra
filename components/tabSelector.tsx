import { Button, Flex, FlexProps } from '@chakra-ui/react'

interface TabSelectorProps extends FlexProps {
  values: string[]
  setSelected: (s: string) => void
  selected: string
}

export const TabSelector = ({ values, setSelected, selected, ...props }: TabSelectorProps) => {
  const isActive = (v: string) => v === selected

  return (
    <Flex bg="greyscale.input" _dark={{ bg: 'greyscale.ash' }} borderRadius="10px" p="1" {...props}>
      {values.map(v => (
        <Button
          variant={isActive(v) ? 'tabSelected' : 'tabNotSelected'}
          rounded="lg"
          onClick={() => setSelected(v)}
          key={v}
          _focus={{ border: '0px' }}>
          {v}
        </Button>
      ))}
    </Flex>
  )
}
