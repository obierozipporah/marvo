import React, {useState} from 'react'
import "./Header.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { NavLink, Link } from 'react-router-dom';
import Menu from "../ProductsCard/ProductsCard"
import Cart from '../Cart/Cart';
import logo from "../../../public/resources/assets/shared/desktop/logo.svg"
import { useCart } from '../CartContext/CartContext';


const Header = ( {activeLinks} ) => {

  const {cartProducts} = useCart()

  console.log(cartProducts,length);

  // create state for the mobile menu
  const [openMenu, setOpenMenu] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false)

  // create a function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setOpenMenu(!openMenu)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  // add a function to stop propagation
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  const closeCart = () => {
    setIsCartOpen(false)
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
            <Link to="/">
              <img src={logo} alt="site logo" />
            </Link>
          </div>
          
          <nav className='links'>
            <NavLink
              to="/"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              HOME
            </NavLink>
            <NavLink
              to="/hp"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              HP
            </NavLink>
            <NavLink
              to="/dell"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              DELL
            </NavLink>
            <NavLink
              to="/mac"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              MAC
            </NavLink>
            <NavLink
              to="/lenovo"
              style={({ isActive }) => isActive ? activeLinks : null}
            >
              LENOVO
            </NavLink>
          </nav>
          <div onClick={toggleCart}>
            <div id='cartProductsLength'>{cartProducts.length}</div>
            <BsCart  className='cart'/>
            {
                isCartOpen && (
                  <div className='cartOverlay' onClick={closeCart}></div>
                )
              }
            <div className={`cartOpen ${isCartOpen ? 'show' : ""}`} onClick={stopPropagation}>
              {isCartOpen && <Cart />}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
