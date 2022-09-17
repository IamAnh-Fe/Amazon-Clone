import React from 'react'
import ItemSort from '~/features/Product/components/ItemSort';

const ThumbFeedOne = ({item, listData}) => {

console.log("itemư",item)
  return (
      <div className="col container">
      
      <div className="productfeed">
        <div className="productfeed-box">
            <h3 className="productfeed-title">{listData  ? listData.name  : "" || item ? item.name  : ""}</h3>
            <div className="productfeedproducts">
              <div className="productfeed-product">
                <img
                  className="productfeed-thumbnail"
                  src={listData ? listData.image : "" || item ? item.image  : ""}
                  alt="productfeed"
                />
              </div>
             
            </div>
            <p className="productfeed-text">See more</p>
          </div>
        </div>
      </div>
    );
}

export default ThumbFeedOne