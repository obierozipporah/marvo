import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from "../../../resources/assets/shared/desktop/logo.svg"
import facebookIcon from "../../../resources/assets/shared/desktop/icon-facebook.svg"
import InstagramIcon from "../../../resources/assets/shared/desktop/icon-instagram.svg"
import twitterIcon from "../../../resources/assets/shared/desktop/icon-twitter.svg"

const Footer = () => {
  return (
    <footer className='footerWrapper'>
        <div className="footerContent">
            <img src={logo} alt='' className='logo'/>
            <div className='footerLinks'>
                {/* don't forget to add the "to" properties */}
                <Link>HOME</Link>
                <Link>HEADPHONES</Link>
                <Link>SPEAKERS</Link>
                <Link>EARPHONES</Link>
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
