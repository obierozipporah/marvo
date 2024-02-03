import React from 'react'
import './Hero.css'

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
              <button className='heroBtn'>SEE PRODUCT</button>
            </div>
        </div>
    </section>
  )
}

export default Hero
