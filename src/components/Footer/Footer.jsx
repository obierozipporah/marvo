import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from "../../../public/resources/assets/shared/desktop/logo.svg"
import facebookIcon from "../../../public/resources/assets/shared/desktop/icon-facebook.svg"
import InstagramIcon from "../../../public/resources/assets/shared/desktop/icon-instagram.svg"
import twitterIcon from "../../../public/resources/assets/shared/desktop/icon-twitter.svg"
import { NavLink } from 'react-router-dom'

const Footer = ( {activeLinks} ) => {

  return (
    <footer className='footerWrapper'>
        <div className="footerContent">
            <div className="footerTop">
                <img src={logo} alt='' className='logo'/>
                <div className='footerLinks'>
                    <NavLink 
                        to="/"
                        style={({isActive}) => isActive ? activeLinks : null}
                    >
                        HOME
                    </NavLink>
                    <NavLink 
                        to="/headphones"
                        style={({isActive}) => isActive ? activeLinks : null}
                    >
                        HEADPHONES
                    </NavLink>
                    <NavLink 
                        to="/speakers"
                        style={({isActive}) => isActive ? activeLinks : null}
                    >
                        SPEAKERS
                    </NavLink>
                    <NavLink 
                        to="/earphones"
                        style={({isActive}) => isActive ? activeLinks : null}
                    >
                        EARPHONES
                    </NavLink>
                </div>
            </div>
            <p className='footerPara'>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who
                are devoted to helping you get the most out of personal audio.
                Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="footerBottom">
                <p>
                    Copyright 2021. All Rights Reserved
                </p>
                <div className='footerIcons'>
                    <img src={facebookIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                    <img src={InstagramIcon} alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
