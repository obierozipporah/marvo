import React, { useState } from 'react'
import data from "../../../resources/data.json"
import { Link } from 'react-router-dom'

const Headphones = () => {

    // Filter to get all the headphones data
    const headphonesData = data.filter(product => product.category === "headphones")

    console.log(headphonesData);

    /*
    * Map over the filtered headphones data.
    * The inline style will be used to dynamically
    * render the images based on viewport sizes.
    */ 
    const headphones = headphonesData.map(headphone => (
        <div key={headphone.id} className='headphoneWrapper'>
            <div 
                className='headphoneImage' 
                style={{backgroundImage: `url(${headphone.categoryImage.mobile})`}}
            />
            <h1>
                {headphone.name.toUpperCase()}
            </h1>
            <p>
                {headphone.description}
            </p>
        </div>
    ))

    return (
        <section className='productPageWrapper'>
            <div className='productHeading'>
                <h1>HEADPHONES</h1>
            </div>
            {headphones}
        </section>
    )
}

export default Headphones
