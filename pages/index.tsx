import { HelloUser } from '@/modules/core/widgets/helloUser'
import { Insights } from '@/modules/m_ibdp/widgets/insights'
import { MyActivity } from '@/modules/m_ibdp/widgets/myActivity'
import { MySuperpower } from '@/modules/m_ibdp/widgets/mySuperpower'
import { UserTests } from '@/modules/m_ibdp/widgets/userTests'
import { NextPage } from 'next'

import { M_IBDP_Dashboard } from '@/modules/m_ibdp/layouts/dashboard'
import { Box, Grid } from '@chakra-ui/react'

const Dashboard: NextPage = () => {
  return (
    <M_IBDP_Dashboard active="/">
      <Box
        pt="28"
        pb="8"
        overflowX="hidden"
        overflowY="scroll"
        h="100vh"
        flex="1 1 0%"
        className="no-scrollbar ">
        <HelloUser />
        <Grid
          templateColumns={{ xl: 'repeat(2, minmax(0, 1fr))' }}
          columnGap={{ xl: '3' }}
          rowGap={{ base: '8', xl: '4' }}
          mt="12">
          <MyActivity />
          <MySuperpower />
        </Grid>
        <Insights />
        <UserTests />
      </Box>
    </M_IBDP_Dashboard>
  )
}
export default Dashboard
