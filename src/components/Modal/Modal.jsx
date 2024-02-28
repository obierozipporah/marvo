import React, { useState } from 'react'
import "./Modal.css"
import { FaCheck } from "react-icons/fa6";
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Modal = () => {

    // import the cart context into the component
    const {cartProducts, getTotalCost} = useCart()

    // get the first item from the cart
    const firstCartItem = cartProducts.length > 0 ? cartProducts[0] : null;
    // get the rest of the items in the cart
    const additionalItems = cartProducts.slice(1)

    const shipping = getTotalCost() * 0.005
    const vat = getTotalCost() * 0.15
    const grandTotal = getTotalCost() + vat + shipping

  return (
    <section className="modalOverlay">
        <div className="orderContainer">
            <div className='checkContainer'>
                <FaCheck className='checkmark'/>
            </div>
            <div className='orderContainerTop'>
                <h1>
                    THANK YOU FOR YOUR ORDER
                </h1>
                <p>
                    You will receive an email confirmation shortly
                </p>
            </div>
            <div className="orderCenterContainer">
                <div className='orderContainerCenter'>
                    <div className='orderContainerContent'>
                        <div className="orderImage">
                            <img src={firstCartItem?.image?.mobile} alt="" />
                        </div>
                        <div className='orderContentTop'>
                            <h3>{firstCartItem?.name}</h3>
                            <h3>${firstCartItem?.price.toLocaleString()}</h3>
                        </div>
                        <h3 id='orderQuantity'>x{firstCartItem?.quantity}</h3>
                    </div>
                    <hr />
                    <div className='orderContentBottom'>
                        {additionalItems.length > 0 && (<p>and {additionalItems.length} other {additionalItems.length > 0 ? "items" : "item"}</p>)}
                    </div>
                </div>
                <div className='confirmOrderTotal'>
                    <h3>GRAND TOTAL</h3>
                    <h3>${grandTotal.toLocaleString()}</h3>
                </div>
            </div>
            <div className='orderTotalBtn'>
                <Link to="/">
                    <button>BACK TO HOME</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Modal
