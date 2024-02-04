import React from 'react'
import "./Zx9.css"
import speaker from "../../../resources/assets/home/desktop/image-speaker-zx9.png"
import circle from "../../../resources/assets/home/mobile/pattern-circles.svg"


const Zx9 = () => {
  return (
    <div className='zx9Wrapper'>
        <img src={circle} alt="" className='circle'/>
        <img src={speaker} alt="" className='speaker'/>
        <div className="zx9Content">
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that
              are phenomenally built to deliver truly remarkable sound.
            </p>
            <div className="zx9Btn">
                <button>SEE PRODUCT</button>
            </div>
        </div>
    </div>
  )
}

export default Zx9
