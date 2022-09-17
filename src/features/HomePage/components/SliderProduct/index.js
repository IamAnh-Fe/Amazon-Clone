import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import productApi from '~/apis/productApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderProduct = () => {
    const [keyboard, setKeyboard] = useState([])
console.log("keyboard", keyboard)
 useEffect(() => {
    const  fetchListKeyboard = async () => {
        try {
              const res = await productApi.getKeyboards()
             setKeyboard(res)
          } catch (error) {
              console.log('Failed to fetch keyboard: ',error)
          }
      }
     fetchListKeyboard()
  }, [])
    let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="col container">
    <div className="sliderProduct">
    <div className="sliderProduct-content">
       <h2 className="sliderProduct-title">Top Sellers in Books for you</h2>
<Slider {...settings}>
        { keyboard && keyboard.length > 0 && keyboard.map((item) => (
      <div className="sliderProduct-customize" key={item._id}>
         <Link to={ `/product/${item._id}`}>
        <div className="sliderProduct-img" style={{backgroundImage: `url(${item.images[0].url})`}}></div>
         </Link>
      </div>
          ))}
    </Slider>  
    </div>
    </div>

    </div>
  )
}

export default SliderProduct