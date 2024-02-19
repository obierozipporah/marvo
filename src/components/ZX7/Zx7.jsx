import React from 'react'
import "./Zx7.css"
import { Link } from 'react-router-dom'

const Zx7 = () => {
  return (
    <div className='zx7Wrapper'>
        <div className="zx7Content">
            <h2>ZX7 SPEAKER</h2>
            <div className="zx7Btn">
              <Link to="/speakers">
                <button>SEE PRODUCT</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Zx7
