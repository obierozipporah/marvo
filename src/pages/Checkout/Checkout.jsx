import React from 'react'
import "./Checkout.css"
import summaryImage from "/resources/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"

const Checkout = () => {
  return (
    <section className='checkoutContainer'>
        <h3 id='checkoutBack'>Go back</h3>
        {/* Form starts here */}
        <form action="" className='formContainer'>
            <h1>Checkout</h1>
            <legend>BILLING DETAILS</legend>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                id='name'
            />
            <label htmlFor="email" >Email Address</label>
            <input 
                type="email" 
                id='email'
            />
            <label htmlFor="phoneNumber" >Phone Number</label>
            <input 
                type="tel" 
                id='phoneNumber'
            />

            <legend>SHIPPING INFO</legend>
            <label htmlFor="address">Your Address</label>
            <input 
                type="text" 
                id='address'
            />
            <label htmlFor="zipCode">Zip Code</label>
            <input 
                type="text"
                id='zipCode' 
            />

            <label htmlFor="city">City</label>
            <input 
                type="text" 
                id='city'
            />

            <label htmlFor="country">Country</label>
            <input 
                type="text"
                id='country' 
            />
            
            <legend>PAYMENT DETAILS</legend>
                <legend>Payment Method</legend>
                <input 
                    type="radio"
                    id="eMoney"
                />
                <label htmlFor="eMoney">e-Money</label>
                <br />
                <input 
                    type="radio"
                    id="cod"
                />
                <label htmlFor="cod">Cash on Delivery</label>
                <br />

            <label htmlFor="eMoneyNumber">e-Money Number</label>
            <input 
                type="number"
                id='eMoneyNumber' 
            />

            <label htmlFor="eMoneyPin">e-Money PIN</label>
            <input 
                type="number"
                id='eMoneyPin' 
            />
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
