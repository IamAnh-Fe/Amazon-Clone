import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import categoryApi from '~/apis/categoryApi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderProduct = () => {
    const [keyboard, setKeyboard] = useState({})
    const listKeyboard = keyboard.listProduct;
console.log("keyboard", listKeyboard)
 useEffect(() => {
    const  fetchListKeyboard = async () => {
        try {
              const res = await categoryApi.getListKeyboard()
             setKeyboard(res[0])
          } catch (error) {
              console.log('Failed to fetch categoryThumb: ',error)
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
    <div className="container">
    <div className="sliderProduct">
    <div className="sliderProduct-content">
       <h2 className="sliderProduct-title">Top Sellers in Books for you</h2>
<Slider {...settings}>
        { listKeyboard && listKeyboard.length > 0 && listKeyboard.map((item) => (
      <div className="sliderProduct-customize" key={item._id}>
         <Link to={ `/product/${item._id}`}>
        <div className="sliderProduct-img" style={{backgroundImage: `url(${item.image})`}}></div>
         </Link>
      </div>
          ))}
      {/* <div className="sliderProduct-customize">
        <div className="sliderProduct-img"></div>
      </div>
      <div className="sliderProduct-customize">
        <div className="sliderProduct-img"></div>
      </div>
      <div className="sliderProduct-customize">
        <div className="sliderProduct-img"></div>
      </div>
      <div className="sliderProduct-customize">
        <div className="sliderProduct-img"></div>
      </div>
      <div className="sliderProduct-customize">
        <div className="sliderProduct-img"></div>
      </div> */}
    </Slider>  
    </div>
    </div>

    </div>
  )
}

export default SliderProduct