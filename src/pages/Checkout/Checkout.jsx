import React, {useState} from 'react'
import "./Checkout.css"
import { Link } from 'react-router-dom'
import shape from "../../../public/resources/assets/shared/desktop/shape.svg"
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
        pin: "",
        amount: ""
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

    const handlePayNow = () => {
        const paymentMethod = prompt("Choose a payment method: M-Pesa, PayPal, or Visa");
        if (paymentMethod && (paymentMethod === 'M-Pesa' || paymentMethod === 'PayPal' || paymentMethod ==='Visa')) {
            setFormData(prevFormData => ({
               ...prevFormData,
               paymentMethod: paymentMethod 
            }));
        } else {
            alert("Invalid payment method selected. Please choose m-pesa, paypal, or visa");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const { paymentMethod, pin, amount } = formData;

        if (paymentMethod == 'Cash on Delivery') {
            alert(`Payment method selected: ${paymentMethod}. Amount to be paid on delivery: ${amount}`);
        } else if (paymentMethod && pin && amount){
            alert(`${paymentMethod} payment of ${amount} confirmed ith PIN: ${pin}`);
        }else {
            alert("All fields are required!");
        }
        console.log(formData)
    }


  return (
    <section className='checkoutContainer'>
        <Link to="/">
            <h3 id='checkoutBack'>Go back</h3>
        </Link>
        {/* Form starts here */}
        <form action="" className='formContainer' onSubmit={handleSubmit} id='checkoutForm'>
            <h1>Checkout</h1>

        <fieldset>
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
        </fieldset>

        <fieldset>  
            <legend>PAYMENT DETAILS</legend>
                <div className="paymentMethod">
                    <legend>Payment Method</legend>
                    <div className="paymentOptions">
                        <div className='payNow'>
                            <input
                                type="radio"
                                id="payNow"
                                name="paymentMethod"
                                onChange={() => setFormData(prevFormData => ({ ...prevFormData, paymentMethod: 'Pay Now '}))}
                                value="Pay Now"
                                checked={formData.paymentMethod === "Pay Now"}
                            />
                            <label htmlFor="payNow">Pay Now</label>
                        </div>

                        <br />
                        <div className='payOnDelivery'>
                            <input
                                type="radio"
                                id="payOnDelivery"
                                name="paymentMethod"
                                onChange={() => setFormData(prevFormData => ({ ...prevFormData, paymentMethod: 'Pay on Delivery' }))}
                                value="Pay on Delivery"
                                checked={formData.paymentMethod === "Pay on Delivery"}
                            />
                            <label htmlFor="payOnDelivery">Pay on Delivery</label>
                        </div>
                    </div>
                    <br />
                </div>

        {formData.paymentMethod === 'Pay Now' && (
                    <div className="accounts">
                        <button type="button" onClick={handlePayNow}>Choose Payment Method</button>
                        {formData.paymentMethod && formData.paymentMethod !== 'Pay on Delivery' && (
                            <>
                                <div>
                                    <label htmlFor="pin">PIN</label>
                                    <input
                                        type='password'
                                        id="pin"
                                        name="pin"
                                        value={formData.pin}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="amount">Amount</label>
                                    <input
                                        type='number'
                                        id="amount"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                        
                                    />
                                    </div>
                                </>
                        )}
                        </div>
        )}
                
                     {formData.paymentMethod === 'Pay on Delivery' && (
                        <div className="accounts">
                            <div>
                                <input
                                    type='number'
                                    id="amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    required
                                 />           
                            </div>
                        </div>
                     )};

                     <button type="submit">Confirm Order</button>
        
            <div className="checkoutPara">
                <img src={shape} alt="" />
                <p>
                    The ‘Cash on Delivery’ option enables you to pay in
                    cash when our delivery courier arrives at your residence.
                    Just make sure your address is correct so that your order
                    will not be cancelled.
                </p>
            </div>
            </fieldset>
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
                        <h3>${vat.toLocaleString()}</h3>
                    </div>
                    <div>
                        <h3>GRAND TOTAL</h3>
                        <h3>${grandTotal.toLocaleString()}</h3>
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
