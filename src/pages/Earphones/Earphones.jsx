import React from 'react'
import "./Earphones.css"
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import BestAudio from '../../components/BestAudio/BestAudio'
import { Link } from 'react-router-dom'

const Earphones = ( {data} ) => {

    // Filter to get all the earphone data
    const earphonesData = data.filter(product => product.category === "earphones")

    /*
    * Flip the earphone data to get
    * the the first object to come first
    */
    const flippedEarphoneData = [...earphonesData].reverse()

    console.log(flippedEarphoneData);

    /*
    * Map over the filtered earphones data.
    * The inline style will be used to dynamically
    * render the images based on viewport sizes.
    */ 
    const headphones = flippedEarphoneData.map(earphone => (
        <div key={earphone.id} className='earphones'>
            <div 
                className='earphoneImage' 
                style={{backgroundImage: `url(${earphone.categoryImage.mobile})`}}
            />
            <div className="earphoneContent">
                <h2>
                    {earphone.name.toUpperCase()}
                </h2>
                <p>
                    {earphone.description}
                </p>
                <div className="earBtnDiv">
                    <Link>
                        <button className='earBtn'>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
        </div>
    ))
  return (
    <div>
        <section className='productPageWrapper'>
                <div className='productHeading'>
                    <h1>EARPHONES</h1>
                </div>
                <div className='earphonesWrapper'>
                    {headphones}
                </div>
            </section>
            <ProductsCard />
            <BestAudio />
    </div>
  )
}

export default Earphones
