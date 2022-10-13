import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import productApi from '~/apis/productApi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SliderProduct = () => {
    const [headsets, setHeadsets] = useState([]);
    useEffect(() => {
        const fetchListHeadsets = async () => {
            try {
                const res = await productApi.getHeadsets();
                setHeadsets(res);
            } catch (error) {
                console.log('Failed to fetch headsets: ', error);
            }
        };
        fetchListHeadsets();
    }, []);
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="col container">
            <div className="sliderProduct">
                <div className="sliderProduct-content">
                    <h2 className="sliderProduct-title">Headsets</h2>
                    <Slider {...settings}>
                        {headsets &&
                            headsets.length > 0 &&
                            headsets.map((item) => (
                                <div className="sliderProduct-customize" key={item._id}>
                                    <Link to={`/product/${item.slug}/${item._id}`}>
                                        <div
                                            className="sliderProduct-img"
                                            style={{ backgroundImage: `url(${item.images[0].url})` }}
                                        ></div>
                                    </Link>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SliderProduct;
