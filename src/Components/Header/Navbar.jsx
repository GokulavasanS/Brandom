import React from 'react'
import Logo from './BLogo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt="Logo" />
        <div className="navmenu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
