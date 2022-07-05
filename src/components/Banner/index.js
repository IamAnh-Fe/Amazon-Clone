import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">

        <Carousel 
        autoPlay
        infiniteLoop
        showArrows
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
          interval={4000}
          
        >
            <div>
                <img loading='lazy' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt='banner' />
            </div>
            <div>
                <img loading='lazy' src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg' alt='banner'/>

            </div>
            <div>
                <img loading='lazy' src='https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg' alt='banner'/>

              </div>
              <div>
                <img loading='lazy' src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg' alt='banner'/>
              </div>

            </Carousel>
      </div>

        </div>
  )
}

export default Banner