import React from 'react'

const ThumbFeedFour = ({data}) => {
  const thumbnail = data.items
  return (
      <div className="container">
      
      <div className="productfeed">
        <div className="productfeed-box">
            <h3 className="productfeed-title">{data.title}</h3>
            <div className="productfeed-products">
              {thumbnail.map((thumb) => (

              <div className="productfeed-product">
                <img
                  className="productfeed-image"
                  src={thumb.image}
                  alt="productfeed"
                />
                <span className='center'>{thumb.name}</span>
              </div>
              ))}

             
            </div>
            <p className="productfeed-text">See more</p>
          </div>
        </div>
      </div>
    );
}

export default ThumbFeedFour