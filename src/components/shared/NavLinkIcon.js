import React from 'react'
import PropTypes from 'prop-types'
import { Box, Icon } from '@chakra-ui/core'
import {
  BsFillExclamationOctagonFill,
  BsFillHouseDoorFill,
  BsFillCaretDownFill,
  BsFillCaretRightFill,
  BsFillChatSquareFill,
  BsFillFolderFill,
} from 'react-icons/bs'

const NavLinkIcon = ({ name, ...rest }) => {
  const iconMapping = {
    'bs-home': BsFillHouseDoorFill,
    'bs-caret-down': BsFillCaretDownFill,
    'bs-caret-right': BsFillCaretRightFill,
    'bs-chat': BsFillChatSquareFill,
    'bs-warning': BsFillExclamationOctagonFill,
    'bs-post': BsFillFolderFill,
  }

  const icon = iconMapping[name]

  if (!icon) return <Icon size={4} name={icon} mr={2} />
  return <Box as={icon} size={4} mr={2} {...rest} />
}

NavLinkIcon.propTypes = {
  /**
   * Name of the icon matching either a single property of `iconMapping` or
   * the name of a built-in Chakra UI icon.
   */
  name: PropTypes.string.isRequired,
  /** Other props to override the styling of the custom <Box /> icon. */
  rest: PropTypes.object,
}

export default NavLinkIcon
