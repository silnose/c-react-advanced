import React from 'react'
import { Nav, Link } from './style.js'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <MdHome size='32px' />
      </Link>
      <Link to='/favorites'>
        <MdFavoriteBorder size='32px' />
      </Link>
      <Link to='/account'>
        <MdPersonOutline size='32px' />
      </Link>
    </Nav>
  )
}
