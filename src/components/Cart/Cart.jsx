import React from 'react'
import cartImage from "/resources/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"

const Cart = () => {
  return (
    <section className='overlay'>
        <div className="cartContent">
            <div className='cartTop'>
                <h3>Cart (3)</h3>
                <button className='delete'>Remove all</button>
            </div>
            <img src={cartImage} alt="cart image" className='cartImage'/>
            <h3>XX99 MK II</h3>
            <h3>$2,999</h3>
            <div className='cartQty'>
                <p>-</p>
                <p>1</p>
                <p>+</p>
            </div>
            <div className='cartTotal'>
                <h3>Total</h3>
                <h3>$2,999</h3>
            </div>
            <div className='chkOutBtn'>
                <button>CHECKOUT</button>
            </div>
        </div>
    </section>
  )
}

export default Cart
