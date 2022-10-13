import React from 'react';
import { Link } from 'react-router-dom';

const ThumbFeedFour = ({ data }) => {
    const thumbnail = data.items;
    return (
        <div className=" container">
            <div className="productfeed-wrapper">
                <div className="productfeed-box">
                    <h3 className="productfeed-title">{data.title}</h3>
                    <div className="productfeed-products">
                        {thumbnail &&
                            thumbnail.length > 0 &&
                            thumbnail.map((thumb) => (
                                <Link to={`/product/${thumb.slug}`}>
                                    <div className="productfeed-product">
                                        <img className="productfeed-image" src={thumb.image} alt="productfeed" />
                                        <a className="center">{thumb.name}</a>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThumbFeedFour;
