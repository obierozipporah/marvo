import React, {useState} from 'react'
import "./Checkout.css"
import summaryImage from "/resources/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
import shape from "../../../resources/assets/shared/desktop/shape.svg"
import Modal from "../../components/Modal/Modal"
import { useCart } from "../../components/CartContext/CartContext"

const Checkout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(prevIsModalOpen => !prevIsModalOpen)
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }
    
    const { cartProducts, getTotalCost } = useCart();

    const shipping = getTotalCost() * 0.005
    const vat = getTotalCost() * 0.15
    const grandTotal = getTotalCost() + vat + shipping;

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        paymentMethod: "",
        eMoneyNumber: "",
        eMoneyPin: ""
    })

    // console.log(formData)

    const handleChange = (event) => {
        setFormData(prevFormData => {
            const {name, type, checked, value} = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

  return (
    <section className='checkoutContainer'>
        <h3 id='checkoutBack'>Go back</h3>
        {/* Form starts here */}
        <form action="" className='formContainer' onSubmit={handleSubmit} id='checkoutForm'>
            <h1>Checkout</h1>
            <legend>BILLING DETAILS</legend>
            <div className="billingDetails">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                        name="fullName"
                        onChange={handleChange}
                        value={formData.fullName}
                    />
                </div>
                <div>
                    <label htmlFor="email" >Email Address</label>
                    <input
                        type="email"
                        id='email'
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" >Phone Number</label>
                    <input
                        type="tel"
                        id='phoneNumber'
                        name="phoneNumber"
                        onChange={handleChange}
                        value={formData.phoneNumber}
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
                        name="address"
                        onChange={handleChange}
                        value={formData.address}
                    />
                </div>
                <div className='zipCode'>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        id='zipCode'
                        name="zipCode"
                        onChange={handleChange}
                        value={formData.zipCode}
                    />
                </div>
                <div className='city'>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id='city'
                        name="city"
                        onChange={handleChange}
                        value={formData.city}
                    />
                </div>
            </div>

            <label htmlFor="country">Country</label>
            <input 
                type="text"
                id='country'
                name="country"
                onChange={handleChange}
                value={formData.country} 
            />
            
            <legend>PAYMENT DETAILS</legend>
                <div className="paymentMethod">
                    <legend>Payment Method</legend>
                    <div className="paymentOptions">
                        <div className='eMoney'>
                            <input
                                type="radio"
                                id="eMoney"
                                name="paymentMethod"
                                onChange={handleChange}
                                value="e-Money"
                                checked={formData.paymentMethod === "e-Money"}
                            />
                            <label htmlFor="eMoney">e-Money</label>
                        </div>
                        <br />
                        <div className='cod'>
                            <input
                                type="radio"
                                id="cod"
                                name="paymentMethod"
                                onChange={handleChange}
                                value="Cash on Delivery"
                                checked={formData.paymentMethod === "Cash on Delivery"}
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
                        name="eMoneyNumber"
                        onChange={handleChange}
                        value={formData.eMoneyNumber}
                    />
                </div>
                <div>
                    <label htmlFor="eMoneyPin">e-Money PIN</label>
                    <input
                        type="number"
                        id='eMoneyPin'
                        name="eMoneyPin"
                        onChange={handleChange}
                        value={formData.eMoneyPin}
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
                {cartProducts.map((cartProduct) => (
                <div className='summaryTop'>
                    <img src={cartProduct.categoryImage.mobile} alt="" width={100}/>
                    <div>
                        <h4>{cartProduct.name}</h4>
                        <h4>${cartProduct.price}</h4>
                    </div>
                    <h4>x{cartProduct.quantity}</h4>
                </div>))}
                <div className="summaryBottom">
                    <div>
                        <h3>TOTAL</h3>
                        <h3>${getTotalCost().toLocaleString()}</h3>
                    </div>
                    <div>
                        <h3>SHIPPING</h3>
                        <h3>${shipping.toFixed(2)}</h3>
                    </div>
                    <div>
                        <h3>VAT (INCLUDED)</h3>
                        <h3>${vat.toFixed(2)}</h3>
                    </div>
                    <div>
                        <h3>GRAND TOTAL</h3>
                        <h3>${grandTotal.toFixed(2)}</h3>
                    </div>
                </div>
                <div className="formBtn" onClick={toggleModal}>
                    {
                        isModalOpen && (
                            <div className='modalOverlay'></div>
                        )
                    }
                    <button type='submit' form='checkoutForm'>CONTINUE & PAY</button>
                    <div className={`modalOpen ${isModalOpen? 'show' : ''}`}>
                        {isModalOpen && <Modal />}
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Checkout
