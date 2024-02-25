import React from 'react'
import "./Cart.css"
import cartImage from "/resources/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
import { useCart } from '../CartContext/CartContext'

const Cart = () => {

    const { cartProducts, clearCart, removeFromCart, updateQuantity, getTotalCost } = useCart()

  return (
    <section className='overlay'>
        <div className="cartContent">
            <div className='cartTop'>
                <h3>Cart ({cartProducts.length})</h3>
                <button className='delete' onClick={clearCart}>Remove all</button>
            </div>
            
            {cartProducts.map((cartProduct) => (
                <div className="cartBottom">
                <img src={cartProduct.categoryImage.mobile} alt={cartProduct.name} className='cartImage'/>
                <div className='cartCenter'>
                    <h3>{cartProduct.name}</h3>
                    <h3>${cartProduct.price.toLocaleString()}</h3>
                </div>
                <div className='cartQty'>
                    <p onClick={() => updateQuantity(cartProduct.id, cartProduct.quantity - 1)}>-</p>
                    <p>{cartProduct.quantity}</p>
                    <p onClick={() => updateQuantity(cartProduct.id, cartProduct.quantity + 1)}>+</p>
                </div>
            </div>))}

            <div className='cartTotal'>
                <h3>TOTAL</h3>
                <h3>${getTotalCost().toLocaleString()}</h3>
            </div>
            <div className='chkOutBtn'>
                <button>CHECKOUT</button>
            </div>
        </div>
    </section>
  )
}

export default Cart
