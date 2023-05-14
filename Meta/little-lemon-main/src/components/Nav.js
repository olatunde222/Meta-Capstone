import React from 'react';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
        <img src={Logo} alt="Nav logo" /> 
        <ul>
          <li><Link to='/' >Home </Link></li>
          <li><Link to='/about' >About </Link></li>
          <li><Link to='/menu' >Menu </Link></li>
          <li><Link to='/reservation' >Reservation </Link></li>
          <li><Link to='/order' >Order Online </Link></li>
          <li><Link to='/auth' >Sign In </Link></li>
        </ul>
    </nav>
  )
}

export default Nav;