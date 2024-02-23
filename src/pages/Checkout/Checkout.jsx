import React from 'react'
import "./Checkout.css"
import summaryImage from "/resources/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
import shape from "../../../resources/assets/shared/desktop/shape.svg"

const Checkout = () => {
    
  return (
    <section className='checkoutContainer'>
        <h3 id='checkoutBack'>Go back</h3>
        {/* Form starts here */}
        <form action="" className='formContainer'>
            <h1>Checkout</h1>
            <legend>BILLING DETAILS</legend>
            <div className="billingDetails">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                    />
                </div>
                <div>
                    <label htmlFor="email" >Email Address</label>
                    <input
                        type="email"
                        id='email'
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" >Phone Number</label>
                    <input
                        type="tel"
                        id='phoneNumber'
                    />
                </div>
            </div>
            

            <legend>SHIPPING INFO</legend>
            <div className="shippingInfo">
                <div>
                    <label htmlFor="address">Your Address</label>
                    <input
                        type="text"
                        id='address'
                    />
                </div>
                <div className='zipCode'>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        id='zipCode'
                    />
                </div>
                <div className='city'>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id='city'
                    />
                </div>
            </div>

            <label htmlFor="country">Country</label>
            <input 
                type="text"
                id='country' 
            />
            
            <legend>PAYMENT DETAILS</legend>
                <div className="paymentMethod">
                    <legend>Payment Method</legend>
                    <div className="paymentOptions">
                        <div className='eMoney'>
                            <input
                                type="radio"
                                id="eMoney"
                            />
                            <label htmlFor="eMoney">e-Money</label>
                        </div>
                        <br />
                        <div className='cod'>
                            <input
                                type="radio"
                                id="cod"
                            />
                            <label htmlFor="cod">Cash on Delivery</label>
                        </div>
                    </div>
                    <br />
                </div>

            <div className="accounts">
                <div>
                    <label htmlFor="eMoneyNumber">e-Money Number</label>
                    <input
                        type="number"
                        id='eMoneyNumber'
                    />
                </div>
                <div>
                    <label htmlFor="eMoneyPin">e-Money PIN</label>
                    <input
                        type="number"
                        id='eMoneyPin'
                    />
                </div>
            </div>

            <div className="checkoutPara">
                <img src={shape} alt="" />
                <p>
                    The ‘Cash on Delivery’ option enables you to pay in
                    cash when our delivery courier arrives at your residence.
                    Just make sure your address is correct so that your order
                    will not be cancelled.
                </p>
            </div>
        </form>
        {/* Form ends here */}
        <div className='summaryContainer'>
                <h2 id='summary'>Summary</h2>
                <div className='summaryTop'>
                    <img src={summaryImage} alt="" width={100}/>
                    <div>
                        <h4>XX99 MK II</h4>
                        <h4>$2,999</h4>
                    </div>
                    <h4>x1</h4>
                </div>
                <div className="summaryBottom">
                    <div>
                        <h3>TOTAL</h3>
                        <h3>$2,999</h3>
                    </div>
                    <div>
                        <h3>SHIPPING</h3>
                        <h3>$50</h3>
                    </div>
                    <div>
                        <h3>VAT (INCLUDED)</h3>
                        <h3>$1,079</h3>
                    </div>
                    <div>
                        <h3>GRAND TOTAL</h3>
                        <h3>$2,999</h3>
                    </div>
                </div>
                <div className="formBtn">
                    <button>CONTINUE & PAY</button>
                </div>
            </div>
    </section>
  )
}

export default Checkout
