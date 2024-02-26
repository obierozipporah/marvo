import React, { useState } from 'react'
import "./Modal.css"
import { FaCheck } from "react-icons/fa6";
import orderImage from "/resources/assets/cart/image-xx99-mark-two-headphones.jpg"

const Modal = () => {

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
                        <img src={orderImage} alt="" width={50}/>
                        <div className='orderContentTop'>
                            <h3>XX99 MK 11</h3>
                            <h3>$ 2,999</h3>
                        </div>
                        <h3 id='orderQuantity'>x1</h3>
                    </div>
                    <hr />
                    <div className='orderContentBottom'>
                        <p>and 2 other item(s)</p>
                    </div>
                </div>
                <div className='confirmOrderTotal'>
                    <h3>GRAND TOTAL</h3>
                    <h3>$5,446</h3>
                </div>
            </div>
            <div className='orderTotalBtn'>
                <button>BACK TO HOME</button>
            </div>
        </div>
    </section>
  )
}

export default Modal
