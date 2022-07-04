import React from 'react'

const Product = () => {
  return (
    <div className="product">
      <div className="product-list">
        <div className="product-content">
          <div className="product-thumb">
            <img
              src="https://m.media-amazon.com/images/I/81260quU7uL._AC_UY327_FMwebp_QL65_.jpg"
              alt="product"
            />
          </div>
          <div className="product-info">
            <h3 className="product-title">
              Razer Ornata V2 Gaming Keyboard: Hybrid Mechanical Key Switches -
              Customizable Chroma RGB Lighting - Individually Backlit Keys -
            </h3>
            <p>99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product