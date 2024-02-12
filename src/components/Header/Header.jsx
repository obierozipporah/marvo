import React, {useState} from 'react'
import "./Header.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Header = ( {activeLinks} ) => {

  // create state for the mobile menu
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // create a function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu)
  }
  
  return (
    <header className='header'>
      <div className="headerContent">
        <RxHamburgerMenu className='burgerMenu' onClick={toggleMobileMenu}/>
        <h1>audiophile</h1>
        <BsCart  className='cart'/>
        <nav className={`links ${openMobileMenu ? "mobileMenu" : ""}`}>
          <NavLink 
            to="/"
            style={({ isActive }) => isActive ? activeLinks : null}
          >
            HOME
          </NavLink>
          <NavLink 
            to="/headphones"
            style={({ isActive }) => isActive ? activeLinks : null}
          >
            HEADPHONES
          </NavLink>
          <NavLink 
            to="/speakers"
            style={({ isActive }) => isActive ? activeLinks : null}
          >
            SPEAKERS
          </NavLink>
          <NavLink 
            to="/earphones"
            style={({ isActive }) => isActive ? activeLinks : null}
          >
            EARPHONES
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
