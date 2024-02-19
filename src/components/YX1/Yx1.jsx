import React from 'react'
import "./Yx1.css"
import { Link } from 'react-router-dom'

const Yx1 = () => {
  return (
    <div className='yx1Wrapper'>
      <div className='yx1Img'></div>
      <div className='yx1Content'>
        <h2>YX1 EARPHONES</h2>  
        <div className='yx1Btn'>
            <Link to="/earphones">
              <button>SEE PRODUCT</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Yx1
