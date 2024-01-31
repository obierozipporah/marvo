import React, {useState} from 'react'
import "./Header.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart } from "react-icons/bs";

const Header = () => {

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
          <a href="#">HOME</a>
          <a href="#">HEADPHONES</a>
          <a href="#">SPEAKERS</a>
          <a href="#">EARPHONES</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
