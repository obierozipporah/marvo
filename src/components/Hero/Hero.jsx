import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <section className='heroWrapper'>
        <div className='bckImg'>
            <div className="heroContent">
              <h2>NEW PRODUCT</h2>
              <h1>X360 LAPTOPS</h1>
              <p className='heroPara'>
                Get the best of both worlds with our x360 laptops- the flexibility and performance of a laptop for work, creativity, or study.
              </p>
              <Link to="/products">
                <button className='heroBtn'>SEE PRODUCT</button>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
