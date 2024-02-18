import React, {useState} from 'react'
import "./Header.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Menu from "../ProductsCard/ProductsCard"
import logo from "../../../resources/assets/shared/desktop/logo.svg"

const Header = ( {activeLinks} ) => {

  // create state for the mobile menu
  const [openMenu, setOpenMenu] = useState(false);

  // create a function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setOpenMenu(!openMenu)
  }
  
  return (
    <header className='header'>
      <div className="headerContent">
        <div onClick={toggleMobileMenu}>
          <RxHamburgerMenu className='burgerMenu' />
          <div className="menu">
            {openMenu && <Menu />} 
          </div>
        </div>
        <div className="headerLinks">
          <div className="headerLogo">
            <img src={logo} alt="site logo" />
          </div>
          <BsCart  className='cart'/>
          <nav className='links'>
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
      </div>
    </header>
  )
}

export default Header
