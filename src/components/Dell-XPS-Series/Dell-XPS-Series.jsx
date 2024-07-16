import React from 'react'
import "./Dell-XPS-Series.css"
import { Link } from 'react-router-dom'

const DellXPSSeries = () => {
  return (
    <div className='Dell-XPS-SeriesWrapper'>
        <div className="Dell-XPS-SeriesContent">
            <h2>DELL XPS series</h2>
            <div className="Dell-XPS-SeriesBtn">
              <Link to="/dell">
                <button>SEE PRODUCT</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default DellXPSSeries
