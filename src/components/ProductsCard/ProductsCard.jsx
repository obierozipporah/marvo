import React from 'react'
import headphones from "../../../public/resources/assets/home/mobile/image-hp.png"
import speaker from "../../../public/resources/assets/home/mobile/image-dell.png"
import earphones from "../../../public/resources/assets/home/mobile/image-mac.png"
import "./ProductsCard.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'

const ProductsCard = () => {
  return (
    <div className='cardWrapper'>
      <div className='hpCard'>
        <img src={headphones} alt="" />
        <h3>HP</h3>
        <Link to="/hp" className='shopLink'>
          <h4>SHOP</h4>
          <MdKeyboardArrowRight className='arrow'/>
        </Link>
      </div>
      <div className='dellCard'>
        <img src={speaker} alt="" className='dell'/>
        <h3>DELL</h3>
        <Link to="/dell" className='shopLink'>
          <h4>SHOP</h4>
          <MdKeyboardArrowRight className='arrow'/>
        </Link>
      </div>
      <div className='macCard'>
        <img src={earphones} alt="" className='mac'/>
        <h3>MAC</h3>
        <Link to="/mac" className='shopLink'>
          <h4>SHOP</h4>
          <MdKeyboardArrowRight className='arrow'/>
        </Link>
      </div>

     
    </div>
  )
}

export default ProductsCard
