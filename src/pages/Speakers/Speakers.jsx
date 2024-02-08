import React from 'react'
import "./Speakers.css"
import { Link } from 'react-router-dom'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import BestAudio from '../../components/BestAudio/BestAudio'

const Speakers = ( {data} ) => {

    // Filter to get all the headphones data
    const speakerData = data.filter(product => product.category === "speakers")

    /*
    * Flip the headphone data to get
    * the the first object to come first
    */
    const flippedSpeakerData = [...speakerData].reverse()

    console.log(flippedSpeakerData);

    /*
    * Map over the filtered headphones data.
    * The inline style will be used to dynamically
    * render the images based on viewport sizes.
    */ 
    const speakers = flippedSpeakerData.map(speaker => (
        <div key={speaker.id} className='mapSpeakers'>
            <div 
                className='speakerImage' 
                style={{backgroundImage: `url(${speaker.categoryImage.mobile})`}}
            />
            <div className="speakerContent">
                <h2>
                    {speaker.name.toUpperCase()}
                </h2>
                <p>
                    {speaker.description}
                </p>
                <div className="speakerBtnDiv">
                    <Link>
                        <button className='speakerBtn'>SEE PRODUCT</button>
                    </Link>
                </div>
            </div>
        </div>
    ))

  return (
    <div>
        <section className='productPageWrapper'>
                <div className='productHeading'>
                    <h1>SPEAKERS</h1>
                </div>
                <div className='speakerWrapper'>
                    {speakers}
                </div>
        </section>
            <ProductsCard />
            <BestAudio />
    </div>
  )
}

export default Speakers
