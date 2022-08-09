import { ArrowIcon, OptionExample1Icon, OptionExample2Icon } from '@/components/icons'
import { IconCheckbox, TextCheckbox } from '@/components/optionSelectors'
import { TabSelector } from '@/components/tabSelector'
import { Box, Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react'

const TestPage: NextPage = () => {
  const [selected, setSelected] = useState('Label 1')

  return (
    <Box padding={4}>
      <TabSelector
        setSelected={setSelected}
        selected={selected}
        values={['Label 1', 'Label 2', 'Label 3']}
      />
      <Flex my={2}>
        <TextCheckbox text="Option One" mr={2} defaultChecked={true} />
        <TextCheckbox text="Option Two" />
      </Flex>
      <Flex my={2}>
        <IconCheckbox
          centerIcon={<OptionExample1Icon ml={0} />}
          text="Option One"
          mr={2}
          defaultChecked={true}
        />
        <IconCheckbox centerIcon={<OptionExample2Icon ml={0} />} text="Option Two" />
      </Flex>
    </Box>
  )
}
export default TestPage
