import React from 'react'
import "./ProductPage.css"
import { useParams, Link } from 'react-router-dom'
import data from "../../../resources/data.json"
import BestAudio from '../../components/BestAudio/BestAudio'
import ProductsCard from '../../components/ProductsCard/ProductsCard'

const ProductPage = () => {

    const { category } = useParams()

    // filter the data
    const filteredProducts = data.filter(item => item.category === category);

    // flip the data
    const flippedProducts = [...filteredProducts].reverse()

    console.log(flippedProducts);

    // map over the flipped data
    const productElement = flippedProducts.map(product => (
        <div key={product.id} className='product'>
            <div 
                className="productImage"
                style={{backgroundImage: `url(${product.categoryImage.mobile})`}}
            >
            </div>
            <div className="productContent">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Link className='prodBtnContainer'>
                    <button className='productBtn'>SEE PRODUCT</button>
                </Link>
            </div>
        </div>
    ))

  return (
    <section>
        <div className="productHeading">
            <h1>{flippedProducts[0].category.toUpperCase()}</h1>
        </div>
        <div className="productWrapper">
            {productElement}
        </div>
        <ProductsCard />
        <BestAudio />
    </section>
  )
}

export default ProductPage
