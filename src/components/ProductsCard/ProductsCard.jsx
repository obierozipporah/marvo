import React from 'react'
import headphones from "../../../resources/assets/home/mobile/image-product2.png"
import speaker from "../../../resources/assets/home/mobile/image-speaker-zx9.png"
import earphones from "../../../resources/assets/home/mobile/image-product -earphones.png"
import "./ProductsCard.css"

const ProductsCard = () => {
  return (
    <div className='cardWrapper'>
      <div className='headphonesCard'>
        <img src={headphones} alt="" />
        <h3>HEADPHONES</h3>
        <h4>SHOP</h4>
      </div>
      <div className='speakersCard'>
        <img src={speaker} alt="" className='speakers'/>
        <h3>SPEAKERS</h3>
        <h4>SHOP</h4>
      </div>
      <div className='earphonesCard'>
        <img src={earphones} alt="" className='earphones'/>
        <h3>EARPHONES</h3>
        <h4>SHOP</h4>
      </div>
    </div>
  )
}

export default ProductsCard
