import React, {useState} from 'react'
import "./ProductDetails.css"
import data from "../../../public/resources/data.json"
import { useParams, Link } from 'react-router-dom'
import ProductsCard from "../../components/ProductsCard/ProductsCard"
import BestLaptop from "../../components/BestLaptop/BestLaptop"
import { useCart } from '../../components/CartContext/CartContext'

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

    // parameters for the url
    const { id, category } = useParams();
    
    // getting and filtering the data to use in the component
    const getProduct = data.filter((prod) => prod.id == id)
    const flippedProduct = [...getProduct].reverse()
    // console.log(flippedProduct)


    const product = getProduct[0]
    const { addToCart } = useCart()
    const handleAddTocart = () => {
      addToCart(product, quantityOrdered)
      setQuantityOrdered(1)
    }

    console.log(product);
    

    const productElement = flippedProduct.map(product => (
        <div key={product.id} className='product'>
            <Link to={`/${category}`} className='productBack'>
              <h4>Go back</h4>
            </Link>
            <div className="productContent">
              <div
                className='productImage'
                style={{backgroundImage: `url(${product.categoryImage.mobile})`}}
              >
              </div>
              <div className="productContentBottom">
                <h1 className='name'>{product.name.toUpperCase()}</h1>
                <p className='description'>{product.description}</p>
                <p className='price'>{`$ ${product.price.toLocaleString()}`}</p>
                <div className='quantity'>
                  <div className="qtyBtns">
                    <p onClick={decreaseQuantity} className='minus'>-</p>
                    <p>{quantityOrdered}</p>
                    <p onClick={increaseQuantity} className='add'>+</p>
                  </div>
                  <button className='cartBtn' onClick={handleAddTocart}>ADD TO CART</button>
              </div>
              </div>
            </div>

            <div className="featuresContent">
              <div className="featuresTop">
                <h3 className='features'>FEATURES</h3>
                <p className='featuresPara'>{product.features}</p>
              </div>
              <div className="boxContents">
                <h3 className='box'>IN THE BOX</h3>
                <div className="includes">
                  {
                    product.includes.map((include, index) => (
                      <p key={index}>
                      <span className="boxContent"> {`${include.quantity}x`}
                      </span>
                      <span className="boxItem">{include.item}</span>
                      </p>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className="gallery">
              <div className='gallery1'
                style={{backgroundImage: `url(${product.gallery.first.mobile})`}}
              ></div>
              <div className='gallery2'
                style={{backgroundImage: `url(${product.gallery.second.mobile})`}}
              ></div>
              <div className='gallery3'
                style={{backgroundImage: `url(${product.gallery.third.mobile})`}}
              ></div>
            </div>

            <div className='recommended'>
              <h3>YOU MAY ALSO LIKE</h3>
              <div className="recommendedContent">
                {
                  product.others.map((other, index) => (
                    <div key={index} className='recommendedItem'>
                      <div
                        className='recommendedImages'
                        style={{backgroundImage: `url(${other.image.mobile})`}}>
                      </div>
                      <div className="recommendedDetails">
                        <div className='recommendedName'>{other.name}</div>
                        <Link>
                          <button className='recommendedBtn'>SEE PRODUCT</button>
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
    ))

  return (
    <section>
        <div className="productWrapper">
          {productElement}
        </div>
        <ProductsCard />
        <BestLaptop />
    </section>
  )
}

export default ProductDetails
