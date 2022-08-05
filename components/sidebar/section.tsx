import { Box, Flex, List, Text } from '@chakra-ui/react'
import { BarItem } from './barItem'

export const SidebarSection = (props: { section: ISidebarSectionProps; active?: string }) => {
  return (
    <Flex flexDir="column">
      {props.section.title && <Text variant="sidebarTitle">{props.section.title}</Text>}
      <Box
        marginTop={4}
        borderStyle="solid"
        borderWidth="1px"
        borderColor="gray.200"
        _dark={{ borderColor: 'greyscale.body' }}
        w="full"
      />
      <List marginTop={6}>
        {props.section.items.map((link, index) => (
          <BarItem key={index} link={link} active={props.active} />
        ))}
      </List>
    </Flex>
  )
}
