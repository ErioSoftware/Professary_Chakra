import { TabSelector } from '@/components/tabSelector'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

const VarietyPage = () => {
  const [selected, setSelected] = useState('1')

  return (
    <Box margin={100}>
      <TabSelector setSelected={setSelected} selected={selected} values={['1', '2', '3']} />
    </Box>
  )
}

export default VarietyPage
