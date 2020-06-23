import React, { useState } from 'react'
import { useNavigate } from '@reach/router'
import {
  Box,
  Flex,
  Image,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/core'

import {
  Tooltip,
  Button,
  ButtonGroup,
  IconButton,
  Input,
  useDisclosure,
} from '@chakra-ui/core'

import unearthLogo from '../assets/unearth-horizontal_lockup.svg'

import { useAuth } from '../contexts/AuthContext'
import { SyncButton } from '../components'

const Header = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const show = false

  const { isOpen, onToggle } = useDisclosure()
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery) {
      navigate(`/search/${searchQuery}`)
    } else {
      onToggle()
    }
  }

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      h='47px'
      boxSizing='content-box'
      py={2}
      px={24}
      borderBottom='1px'
      borderBottomStyle='solid'
      borderBottomColor='gray.200'
    >
      <Flex flex={1} align='center' mr={5}>
        <Image src={unearthLogo} alt='Unearth logo' maxH='47px' />
      </Flex>

      {/* <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}> */}
      <Box display={{ sm: 'block', md: 'none' }}>
        <svg
          fill='white'
          width='12px'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>

      {/* <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
        >
          <MenuItems>Docs</MenuItems>
          <MenuItems>Examples</MenuItems>
          <MenuItems>Blog</MenuItems>
        </Box> */}

      <Box
        flex={6}
        mt={{ base: 4, md: 0 }}
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
      >
        <Box
          as='form'
          onSubmit={handleSearch}
          w='full'
          display={isOpen ? 'flex' : 'none'}
          justifyContent='space-between'
          alignItems='center'
        >
          <Input
            ml={20}
            w='3xl'
            size='lg'
            type='text'
            fontSize='md'
            variant='filled'
            placeholder='Search'
            _hover={{ bg: 'gray.100' }}
            _focus={{ bg: 'gray.100' }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ButtonGroup>
            <Button size='sm' onClick={onToggle}>
              Cancel
            </Button>
            <Button size='sm' variantColor='blue' type='submit'>
              Search
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          w='full'
          display={isOpen ? 'none' : 'flex'}
          justifyContent='flex-end'
          alignItems='center'
        >
          <Tooltip
            hasArrow
            label='Search'
            aria-label='Search'
            placement='bottom'
          >
            <IconButton
              mr={3}
              aria-label='Search saves'
              icon='search'
              variant='ghost'
              onClick={onToggle}
            />
          </Tooltip>
          <SyncButton />
          <Menu>
            <MenuButton as='button'>
              <Avatar name={user.username} src={user.avatar_img} size='sm' />
            </MenuButton>
            <MenuList placement='bottom-end'>
              <MenuGroup title={`Hello, ${user.username}`}>
                <MenuItem onClick={() => navigate('/account')}>
                  Account
                </MenuItem>
                <MenuItem isDisabled title='Coming soon'>
                  Preferences
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Flex>
  )
}

export default Header
