import React, { useState } from 'react'
import "./Headphones.css"
import data from "../../../resources/data.json"
import { Link } from 'react-router-dom'
import ProductsCard from "../../components/ProductsCard/ProductsCard"
import BestAudio from "../../components/BestAudio/BestAudio"

const Headphones = () => {

    // Filter to get all the headphones data
    const headphonesData = data.filter(product => product.category === "headphones")

    /*
    * Flip the headphone data to get
    * the the first object to come first
    */
    const flippedHeadphoneData = [...headphonesData].reverse()

    console.log(flippedHeadphoneData);

    /*
    * Map over the filtered headphones data.
    * The inline style will be used to dynamically
    * render the images based on viewport sizes.
    */ 
    const headphones = flippedHeadphoneData.map(headphone => (
        <div key={headphone.id} className='headphone'>
            <div 
                className='headphoneImage' 
                style={{backgroundImage: `url(${headphone.categoryImage.mobile})`}}
            />
            <div className="headphoneContent">
                <h2>
                    {headphone.name.toUpperCase()}
                </h2>
                <p>
                    {headphone.description}
                </p>
                <div className="headBtnDiv">
                    <Link>
                        <button className='headBtn'>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
        </div>
    ))

    return (
        <div>
            <section className='productPageWrapper'>
                <div className='productHeading'>
                    <h1>HEADPHONES</h1>
                </div>
                <div className='headphoneWrapper'>
                    {headphones}
                </div>
            </section>
            <ProductsCard />
            <BestAudio />
        </div>
    )
}

export default Headphones
