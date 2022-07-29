import { OverviewIcon, SubjectsIcon, ToolsIcon } from '@/components/icons'
import { DashboardLayout } from '@/layouts/dashboardLayout'
import { ReactNode } from 'react'

export const M_IBDP_Dashboard = ({ children, active }: { children: ReactNode; active: string }) => {
  const sideBarLinks: IBarProps[] = [
    {
      link: {
        href: '/',
        label: 'Overview',
        icon: <OverviewIcon width="6" height="6" mr="4" />
      }
    },
    {
      link: {
        href: '/my-subjects',
        label: 'My Subjects',
        icon: <SubjectsIcon width="6" height="6" mr="4" />
      }
    },
    {
      link: {
        href: '/my-tools',
        label: 'My Tools',
        icon: <ToolsIcon width="6" height="6" mr="4" />
      }
    }
  ]

  return (
    <DashboardLayout active={active} sideBarLinks={sideBarLinks}>
      {children}
    </DashboardLayout>
  )
}
