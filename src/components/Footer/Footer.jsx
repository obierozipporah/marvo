import React, { useState} from 'react'
import "./Footer.css"
import logo from "../../../public/resources/assets/shared/desktop/logo.svg"
import facebookIcon from "../../../public/resources/assets/shared/desktop/icon-facebook.svg"
import InstagramIcon from "../../../public/resources/assets/shared/desktop/icon-instagram.svg"
import twitterIcon from "../../../public/resources/assets/shared/desktop/icon-twitter.svg"
import { NavLink } from 'react-router-dom'




const Footer = ({ activeLinks }) => {
    const [showLogin, setShowLogin] =useState(false);

    const handleLogInClick =() => {
        setShowLogin(true);
    };
    

  return (
    <footer className='footerWrapper'>
        <div className="footerContent">
            <div className="footerTop">
                <img src={logo} alt='' className='logo'/>
                  

            </div>
            <p className='footerPara'>
            Birne Hub is your one-stop destination for all your laptop needs. We are a dedicated team of tech enthusiasts and repair specialists committed to helping you find the perfect laptop, sell your old one, and ensure it stays in top condition with our repair services. Visit our demo facility, open 7 days a week, to explore the latest models and get expert advice on all things laptops.
            </p>
            <div className="footerBottom">
                <p>
                    Copyright 2021. All Rights Reserved
                </p>
                <div className='footerIcons'>
                    <a href="https://www.facebook.com/profile.php?id=100080419217752">
                        <img src={facebookIcon} alt="" />
                    </a>
                    <a href="">
                        <img src={twitterIcon} alt="" />
                    </a>
                    <a href="https://www.instagram.com/lilochi_birne/">
                         <img src={InstagramIcon} alt="" />
                    </a>
                   
                </div>
            </div>
        </div>
       
    </footer>
)



};

export default Footer 
