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
    </Box>
  )
}
export default TestPage
