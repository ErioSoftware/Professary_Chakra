import { useAuth } from '@/lib/auth'
import { authClient } from '@/lib/fauna'
import { FC, FunctionComponent, ReactElement, useState } from 'react'
import { query as q } from 'faunadb'
import { DnaIcon, LanguageIcon, TrendUpIcon, ViewIcon } from '@/components/icons'
import { RefreshIcon } from '@heroicons/react/outline'
import { Badge, Box, Button, Flex, Grid, Heading, IconButton, Text } from '@chakra-ui/react'

interface ResultRowProps {
  icon?: ReactElement | string
  subject: string
  grade?: string | number
  date: string
  result: 'pass' | 'fail' | 'waiting'
}

interface StatusProps {
  result: 'pass' | 'fail' | 'waiting'
}

const Status = ({ result }: StatusProps) => {
  switch (result) {
    case 'pass':
      return <Badge colorScheme="green">Pass</Badge>
    case 'fail':
      return (
        <>
          <Badge colorScheme="red">Fail</Badge>
        </>
      )
    case 'waiting':
      return <Badge colorScheme="yellow">Waiting</Badge>
  }
}

export const ResultRow: FC<ResultRowProps> = props => {
  return (
    <Grid
      rowGap={{ base: 4, xl: 0 }}
      templateColumns="repeat(5, minmax(0, 1fr))"
      p="4"
      px="0"
      rounded="xl"
      shadow="lg"
      justifyItems="start"
      placeItems="center"
      bg="greyscale.off-white"
      _dark={{ bg: 'greyscale.off-black' }}>
      <Flex alignItems="center" experimental_spaceX="4">
        <Flex
          w="12"
          h="12"
          alignItems="center"
          justifyContent="center"
          bg="primary.bg"
          _dark={{ bg: 'greyscale.body' }}
          rounded="xl">
          {props.icon}
        </Flex>
        <Text>{props.subject}</Text>
      </Flex>
      <Box
        fontWeight={{ base: 'semibold', desktop: 'light' }}
        fontSize="desktop-text-small"
        lineHeight="desktop-text-small"
        letterSpacing="desktop-text-small"
        color="greyscale.off-black"
        _dark={{ color: 'greyscale.off-white' }}>
        <Text variant="resultRowTitle">Date</Text>
        <Text as="time">{props.date}</Text>
      </Box>
      <Box
        fontWeight={{ base: 'semibold', desktop: 'light' }}
        fontSize="desktop-text-small"
        lineHeight="desktop-text-small"
        letterSpacing="desktop-text-small"
        color="greyscale.off-black"
        _dark={{ color: 'greyscale.off-white' }}>
        <Text variant="resultRowTitle">Grade</Text>-
      </Box>
      <Flex alignItems="center">
        <Text variant="resultRowTitle">Status</Text>
        <Status result={props.result} />
      </Flex>
      <Box>
        <Button
          variant="ghost"
          leftIcon={<ViewIcon className="w-4 h-4 text-gray-400" />}
          color="greyscale.placeholder"
          fontSize="desktop-link-x-small">
          See Result
        </Button>
      </Box>
    </Grid>
  )
}

export const ResultRowHeader: FC = () => {
  return (
    <Grid
      templateColumns="repeat(5, minmax(0, 1fr))"
      px="6"
      py="2"
      mt="2"
      display={{ base: 'none', xl: 'grid' }}>
      {['Subject', 'Date', 'Score', 'Status'].map(itm => (
        <Text
          key={itm}
          textAlign="center"
          fontWeight="light"
          variant="desktop-text-x-small"
          color="greyscale.placeholder">
          {itm}
        </Text>
      ))}
    </Grid>
  )
}

export const UserTests: FunctionComponent = () => {
  const [tests, setTests] = useState<
    { action: 'add' | 'remove'; document?: object | undefined; index?: object | undefined } | number
  >()
  const auth = useAuth()

  const runSync = () => {
    if (!auth?.instance) {
      return
    }

    const ref = q.Documents(q.Collection('users'))

    const report = (
      e:
        | { action: 'add' | 'remove'; document?: object | undefined; index?: object | undefined }
        | number
    ) => {
      setTests(e)
    }
    const startStream = () => {
      const stream = authClient(auth?.instance?.secret as string)
        .stream(ref)
        .on('start', start => report(start))
        .on('set', set => report(set))
        .on('error', error => {
          console.log('Error:', error)
          stream.close()
          setTimeout(startStream, 1000)
        })
        .start()
    }
    startStream()
  }

  return (
    <Box mt="12">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h3" variant="dashboardH3">
          Recent Tests
        </Heading>
        <Flex alignItems="center">
          <Text as="small" mr="2" fontSize="xs" lineHeight="1rem" color="gray.400">
            {tests}
          </Text>
          <IconButton
            w="10"
            h="10"
            rounded="md"
            bg="greyscale.off-white"
            _dark={{ bg: 'greyscale.off-black' }}
            aria-label="button"
            title="Sync Results"
            onClick={runSync}>
            <RefreshIcon className="w-5 h-5 text-gray-500 dark:text-gray-200" />
          </IconButton>
        </Flex>
      </Flex>

      <ResultRowHeader />
      <Box experimental_spaceY="4" mt={{ base: '4', xl: '0' }}>
        <ResultRow
          date="26 Jul 2021"
          icon={<TrendUpIcon className="w-7 h-7 dark:text-primary-darkMode text-primary-default" />}
          subject="Statistics"
          result="waiting"
        />

        <ResultRow
          icon={
            <LanguageIcon className="w-7 h-7 dark:text-primary-darkMode text-primary-default" />
          }
          subject="English"
          date="8 Jul 2021"
          grade={82}
          result="pass"
        />

        <ResultRow
          icon={<DnaIcon className="w-7 h-7 dark:text-primary-darkMode text-primary-default" />}
          subject="Biology"
          date="2 Jul 2021"
          result="fail"
          grade={28}
        />
      </Box>
    </Box>
  )
}
