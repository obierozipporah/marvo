import React from 'react'
import "./Cart.css"
import cartImage from "../../../public/resources/assets/shared/desktop/image-s-series.jpg"
import { useCart } from '../CartContext/CartContext'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {

    // this handles the navigation to the 
    // checkout page from the cart
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate("/checkout")
    }

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
                    <p onClick={() => updateQuantity(cartProduct.id, Math.max(0, cartProduct.quantity - 1))}>-</p>
                    <p>{cartProduct.quantity}</p>
                    <p onClick={() => updateQuantity(cartProduct.id, cartProduct.quantity + 1)}>+</p>
                </div>
            </div>))}

            <div className='cartTotal'>
                <h3>TOTAL</h3>
                <h3>${getTotalCost().toLocaleString()}</h3>
            </div>
            <div className='chkOutBtn'>
                <button onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    </section>
  )
}

export default Cart
