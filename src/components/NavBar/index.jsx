import React from 'react'
import { Nav, Link } from './styles.js'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '25px'
export const NavBar = () => {
  return (

    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/profile'><MdPersonOutline size={SIZE} /></Link>
    </Nav>

  )
}
