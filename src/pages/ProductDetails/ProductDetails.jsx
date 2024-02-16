import React, {useState} from 'react'
import "./ProductDetails.css"
import data from "../../../resources/data.json"
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    // create state for the functions that increase and
    // decrease the quantity ordered
    const [quantityOrdered, setQuantityOrdered] = useState(1)

    // build the functions to increase and decrease the
    // quantity of items a user would like to purchase
    const increaseQuantity = () => {
      setQuantityOrdered(prevQuantityOrdered => prevQuantityOrdered + 1)
    }

    const decreaseQuantity = () => {
      setQuantityOrdered(prevQuantityOrdered => Math.max(prevQuantityOrdered - 1, 1))
    }

    // console.log(data)

    const { id } = useParams();
    
    const getProduct = data.filter((prod) => prod.id == id)

    const flippedProduct = [...getProduct].reverse()

    console.log(flippedProduct)

    const productElement = flippedProduct.map(product => (
        <div key={product.id} className='product'>
            <div
              className='productImage'
              style={{backgroundImage: `url(${product.categoryImage.mobile})`}}
            >
            </div>
            <h1 className='name'>{product.name.toUpperCase()}</h1>
            <p className='description'>{product.description}</p>
            <p className='price'>{`$ ${product.price}`}</p>
            <div className='quantity'>
              <div className="qtyBtns">
                <p onClick={decreaseQuantity} className='minus'>-</p>
                <p>{quantityOrdered}</p>
                <p onClick={increaseQuantity} className='add'>+</p>
              </div>
              <button className='cartBtn'>ADD TO CART</button>
            </div>  
            <h3 className='features'>FEATURES</h3>
            <p className='featuresPara'>{product.features}</p>
            <h3 className='box'>IN THE BOX</h3>
            <div className="includes">
              {
                product.includes.map((include, index) => (
                  <p key={index}>
                  <span className="boxContent"> {`${include.quantity}x`} 
                  </span>
                  {include.item}
                  </p>
                ))
              }
            </div>
            <div className="gallery">
              {
                Object.values(product.gallery).map((image, index) => (
                  <div 
                    key={index} 
                    style={{backgroundImage: `url(${image.mobile})`}}>
                  </div>
                ))
              }
            </div>
        </div>
    ))

  return (
    <section className='productWrapper'>
        {productElement}
    </section>
  )
}

export default ProductDetails
