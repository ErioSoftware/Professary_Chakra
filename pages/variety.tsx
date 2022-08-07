import { OptionSelectorText } from '@/components/optionSelector'
import { Box, Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react'
import { useState } from 'react'

const VarietyPage = () => {
  const [selected, setSelected] = useState('Stream')

  return (
    <Box margin={100}>
      <CheckboxGroup defaultValue={['naruto', 'kakashi']}>
        <OptionSelectorText text="Soy el text" value="kakashi" />
        <OptionSelectorText text="Soy el text" value="naruto" />
      </CheckboxGroup>
      <CheckboxGroup defaultValue={['naruto', 'kakashi']} onChange={v => console.log(v)}>
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
          <Checkbox value="naruto" />
        </Flex>
        <Checkbox value="sasuke">Sasuke</Checkbox>
        <Checkbox value="kakashi">Kakashi</Checkbox>
      </CheckboxGroup>
    </Box>
  )
}

export default VarietyPage
