import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <section className='heroWrapper'>
        <div className='bckImg'>
            <div className="heroContent">
              <h2>NEW PRODUCT</h2>
              <h1>XX99 MARK II HEADPHONES</h1>
              <p className='heroPara'>
                Experience natural, lifelike audio and exceptional 
                build quality made for the passionate music enthusiast.
              </p>
              <Link to="/headphones">
                <button className='heroBtn'>SEE PRODUCT</button>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
