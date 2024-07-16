import React from 'react'
import "./Lenovo-Thinkpad.css"
import { Link } from 'react-router-dom'

const LenovoThinkpad = () => {
  return (
    <div className='Lenovo-ThinkpadWrapper'>
      <div className='Lenovo-ThinkpadImg'></div>
      <div className='Lenovo-ThinkpadContent'>
        <h2>LENOVO ThinkPad</h2>  
        <div className='Lenovo-ThinkpadBtn'>
            <Link to="/">
              <button>SEE PRODUCT</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default LenovoThinkpad
