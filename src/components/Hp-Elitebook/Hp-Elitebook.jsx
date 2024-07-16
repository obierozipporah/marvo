import React from 'react'
import "./Hp-Elitebook.css"
import dell from "../../../public/resources/assets/home/desktop/image-hp-elitebook.png"
import circle from "../../../public/resources/assets/home/mobile/pattern-circles.svg"
import { Link } from 'react-router-dom'


const HpElitebook = () => {
  return (
    <div className='Hp-ElitebookWrapper'>
        <img src={circle} alt="" className='circle'/>
        <img src={dell} alt="" className='dell'/>
        <div className="Hp-ElitebookContent">
            <h2>HP ELITEBOOK</h2>
            <p>
              Elevate your workday, embrace innovation, and experience the pinnacle of sophistication with the HP-ELITEBOOK- your ultimate companion for conquering every task with style and efficiency.
            </p>
            <div className="Hp-ElitebookBtn">
              <Link to="/dell">
                <button>SEE PRODUCT</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default HpElitebook
