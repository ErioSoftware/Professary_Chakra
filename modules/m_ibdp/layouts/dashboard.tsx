import { OverviewIcon, SubjectsIcon, ToolsIcon } from '@/components/icons'
import { DashboardLayout } from '@/layouts/dashboardLayout'
import { ReactNode } from 'react'

export const M_IBDP_Dashboard = ({ children, active }: { children: ReactNode; active: string }) => {
  const sidebarSections: ISidebarSectionProps[] = [
    {
      title: 'Metrics',
      items: [
        {
          link: {
            href: '/',
            label: 'Overview',
            icon: <OverviewIcon width="6" height="6" mr="4" />,
            children: [
              {
                link: {
                  href: '/my-tools',
                  label: 'My Tools'
                }
              }
            ]
          }
        },
        {
          link: {
            href: '/my-subjects',
            label: 'My Subjects',
            icon: <SubjectsIcon width="6" height="6" mr="4" />
          }
        }
      ]
    },
    {
      items: [
        {
          link: {
            href: '/my-tools',
            label: 'My Tools',
            icon: <ToolsIcon width="6" height="6" mr="4" />,
            children: [
              {
                link: {
                  href: '/my-tools',
                  label: 'My Tools'
                }
              },
              {
                link: {
                  href: '/my-tools',
                  label: 'My Tools'
                }
              }
            ]
          }
        }
      ]
    }
  ]

  return (
    <DashboardLayout active={active} sidebarSections={sidebarSections}>
      {children}
    </DashboardLayout>
  )
}
