import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="banner">
      <div className="col container">
        <Slider {...settings}>
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

    
    </Slider> 


      </div>

        </div>
  )
}

export default Banner