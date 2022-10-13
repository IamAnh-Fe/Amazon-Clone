import React from 'react';
import { Link } from 'react-router-dom';

const ThumbFeedOne = ({ listData }) => {
    return (
        <div className=" container">
            <div className="productfeed-wrapper">
                <div className="productfeed-box">
                    <h3 className="productfeed-title">{listData && listData.name}</h3>
                    <div className="productfeedproducts">
                        <Link to={`/product/${listData.slug}`}>
                            <div className="productfeed-product">
                                <img
                                    className="productfeed-thumbnail"
                                    src={listData && listData.image}
                                    alt="productfeed"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThumbFeedOne;
