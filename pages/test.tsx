import { ArrowIcon } from '@/components/icons'
import { IconCheckbox, TextCheckbox } from '@/components/optionSelectors'
import { TabSelector } from '@/components/tabSelector'
import { Box } from '@chakra-ui/react'
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
      <TextCheckbox icon={<ArrowIcon ml={0} />} text="Click me!" />
      <IconCheckbox
        icon={<ArrowIcon ml={0} />}
        centerIcon={<ArrowIcon ml={0} />}
        text="Click me!"
      />
    </Box>
  )
}
export default TestPage
