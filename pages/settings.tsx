import Image from 'next/image'
import { useRouter } from 'next/router'
import { createRef, useState } from 'react'

import { useAuth } from '@/lib/auth'

import { DownloadIcon, EditIcon, LockIcon, TrashIcon } from '@/components/icons'
import { XIcon } from '@heroicons/react/outline'
import { NextPage } from 'next'
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  Switch,
  Text
} from '@chakra-ui/react'

const SettingsPage: NextPage = () => {
  const router = useRouter()
  const auth = useAuth()

  const [editMode, setEditMode] = useState(false)
  const inputRef = createRef<HTMLInputElement>()

  const toggleEditMode = () => {
    setEditMode(!editMode)
    inputRef.current?.focus()
  }

  return (
    <Box
      backgroundColor="greyscale.bg"
      _dark={{ backgroundColor: 'greyscale.ash' }}
      minH="100vh"
      pt="3">
      <Box>
        <Box as="main" p={{ base: '6', xl: '0' }} mx="auto" maxW="5xl">
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading as="h1" variant="desktop-display-small">
                Settings
              </Heading>
              <Text
                variant="desktop-text-small"
                color="greyscale.ash"
                _dark={{ color: 'greyscale.off-white' }}>
                Set according you need
              </Text>
            </Box>
            <IconButton
              aria-label="button"
              rounded="full"
              w="12"
              h="12"
              backgroundColor="white"
              color="greyscale.ash"
              shadow="sm"
              _dark={{ backgroundColor: 'greyscale.off-black', color: 'white' }}
              _hover={{ color: 'greyscale.off-black' }}
              onClick={async () => await router.push('/')}>
              <XIcon className="w-6 h-6" />
            </IconButton>
          </Flex>
          <Grid
            templateColumns="repeat(12, minmax(0, 1fr))"
            rowGap={{ xl: '6' }}
            columnGap={{ xl: 0 }}
            mt={{ xl: '6' }}>
            <GridItem
              colSpan={{ xl: 4 }}
              rowSpan={{ xl: 3 }}
              mt={{ base: 10, xl: 0 }}
              h="min-content"
              p="6"
              as="section"
              rounded="2xl"
              bg="greyscale.off-white"
              _dark={{ bg: 'greyscale.off-black' }}>
              <Flex alignItems="center" justifyContent="space-between">
                <Box position="relative" h="72px" w="72px" rounded="full" overflow="hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    alt="user avatar"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                <Box flex="1" ml="4">
                  <Heading
                    as="h2"
                    fontWeight="semibold"
                    variant="desktop-link-x-small"
                    color="greyscale.off-black">
                    {auth?.instance?.firstName} {auth?.instance?.lastName}
                  </Heading>
                  <Text
                    fontSize="13px"
                    color="greyscale.label"
                    _dark={{ color: 'greyscale-label' }}>
                    {auth?.instance?.email}
                  </Text>
                </Box>
              </Flex>
              <Box p="2" pb="1" mt="2" rounded="2xl" _dark={{ bg: 'greyscale.body' }}>
                <Text variant="settingsInputDesktop">First Name</Text>
                <Input
                  variant="settings"
                  defaultValue={auth?.instance?.firstName}
                  ref={inputRef}
                  readOnly={!editMode}
                />
              </Box>
              <Box p="2" mt="2" pb="1" rounded="2xl" _dark={{ bg: 'greyscale.body' }}>
                <Text variant="settingsInputDesktop">Last Name</Text>
                <Input
                  variant="settings"
                  defaultValue={auth?.instance?.lastName}
                  readOnly={!editMode}
                />
              </Box>
              <Box mt="4">
                <Button
                  variant="ghost"
                  leftIcon={<EditIcon className="w-4 h-4" />}
                  color={editMode ? 'green.500' : 'primary.default'}
                  _dark={{
                    color: editMode ? 'green.400' : 'primary.darkMode'
                  }}
                  _focus={{ border: '0px' }}
                  textAlign="left"
                  m="0"
                  px="2"
                  fontSize="sm"
                  w="fit-content"
                  onClick={toggleEditMode}>
                  {editMode ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </Box>
            </GridItem>
            <GridItem
              colSpan={8}
              rowSpan={1}
              as="section"
              ml={{ xl: '6' }}
              p="6"
              px={{ xl: '10' }}
              mt={{ base: '10', xl: 0 }}
              rounded="2xl"
              h="min-content"
              bg="greyscale.off-white"
              _dark={{ bg: 'greyscale.off-black' }}>
              <Box>
                <Flex alignItems={{ base: 'center', xl: 'flex-start' }} justifyContent="flex-start">
                  <Box
                    position="relative"
                    alignItems="center"
                    display="inline-block"
                    transition="ease-in"
                    transitionDuration="200ms"
                    userSelect="none">
                    <Switch
                      id="notificationSound"
                      defaultChecked
                      name="toggle"
                      colorScheme="switch"
                      size="lg"
                    />
                  </Box>
                  <FormLabel
                    ml={{ base: '4', xl: '8' }}
                    htmlFor="notificationSound"
                    variant="settingsToggle"
                    cursor="pointer">
                    Play sound when I get a notification
                  </FormLabel>
                </Flex>
              </Box>

              <Box mt="4">
                <Flex
                  alignItems={{ base: 'center', xl: 'flex-start' }}
                  justifyContent="flex-start"
                  cursor="pointer">
                  <Box
                    position="relative"
                    alignItems="center"
                    display="inline-block"
                    transition="ease-in"
                    transitionDuration="200ms"
                    userSelect="none"
                    cursor="pointer">
                    <Switch
                      id="testResult"
                      defaultChecked
                      name="toggle"
                      colorScheme="switch"
                      size="lg"
                    />
                  </Box>
                  <FormLabel
                    ml={{ base: '4', xl: '8' }}
                    htmlFor="testResult"
                    variant="settingsToggle"
                    cursor="pointer">
                    Send test result to email
                  </FormLabel>
                </Flex>
              </Box>
              <Box mt="4">
                <Flex alignItems={{ base: 'center', xl: 'flex-start' }} justifyContent="flex-start">
                  <Box
                    position="relative"
                    alignItems="center"
                    display="inline-block"
                    transition="ease-in"
                    transitionDuration="200ms"
                    userSelect="none">
                    <Switch
                      id="rankingUpdate"
                      defaultChecked
                      name="toggle"
                      colorScheme="switch"
                      size="lg"
                    />
                  </Box>
                  <FormLabel
                    ml={{ base: '4', xl: '8' }}
                    htmlFor="rankingUpdate"
                    variant="settingsToggle">
                    Send me notification about ranking update
                  </FormLabel>
                </Flex>
              </Box>
            </GridItem>
            <GridItem
              colSpan={8}
              colStart={5}
              rowSpan={1}
              as="section"
              ml={{ xl: '6' }}
              p="6"
              mt={{ base: '10', xl: '0' }}
              rounded="2xl"
              bg="greyscale.off-white"
              _dark={{ bg: 'greyscale.off-black' }}>
              <Flex>
                <Flex
                  w="64px"
                  h="64px"
                  rounded="md"
                  bg="primary.bg"
                  alignItems="center"
                  justifyContent="center"
                  _dark={{ bg: 'greyscale.body' }}>
                  <LockIcon />
                </Flex>
                <Flex flexDir="column" justifyContent="center" ml={{ xl: '8' }}>
                  <Box mt={{ base: '3', xl: '0' }}>
                    <Heading as="h2" variant="desktop-display-x-small">
                      My Password
                    </Heading>
                    <Text mt="2" variant="desktop-text-small">
                      Secure your account with the best combination of password
                    </Text>
                  </Box>
                  <Box mt="4">
                    <Button variant="ghost" w="fit-content" px="0" _focus={{ border: '0px' }}>
                      <Text
                        variant="desktop-link-x-small"
                        fontWeight="semibold"
                        color="primary.default"
                        _dark={{ color: 'primary.darkMode' }}>
                        Change Password
                      </Text>
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={8} rowSpan={1}>
              <Flex
                flexDir="column"
                ml={{ xl: '6' }}
                mt={{ base: '10', xl: '0' }}
                p="6"
                rounded="2xl"
                bg="greyscale.off-white"
                _dark={{ bg: 'greyscale.off-black' }}>
                <Button
                  leftIcon={<DownloadIcon />}
                  variant="ghost"
                  color="primary.default"
                  _dark={{ color: 'primary.darkMode' }}
                  w="fit-content"
                  px="6"
                  _focus={{ border: '0px' }}>
                  <Text ml="1" fontWeight="semibold" variant="desktop-link-x-small">
                    Download my account data
                  </Text>
                </Button>
                <Button
                  variant="ghost"
                  w="fit-content"
                  px="6"
                  _focus={{ border: '0px' }}
                  leftIcon={<TrashIcon />}>
                  <Text ml="1" variant="desktop-link-x-small">
                    Delete my account
                  </Text>
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default SettingsPage
