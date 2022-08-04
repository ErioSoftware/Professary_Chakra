import { TabSelector } from '@/components/tabSelector'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

const VarietyPage = () => {
  const [selected, setSelected] = useState('Stream')

  return (
    <Box margin={100}>
      <TabSelector
        values={{ left: 'Stream', right: 'Download' }}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  )
}

export default VarietyPage
