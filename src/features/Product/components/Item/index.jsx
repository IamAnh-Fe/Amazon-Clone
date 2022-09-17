import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item">
          {product && product.length > 0 && product.map((product) => (
        <div className="item-list" key={product._id}>
            
            <Link to={ `${product._id}`}>
         <div className="item-content">
         
            <div className="item-thumb">
              
              <img src={product.images[0].url} alt="product" />
            </div>
            <div className="item-info">
              <h3 className="product-title">{product.name}</h3>

              <div>
              </div>
              <div className="item-price">
                <p className="item-discount">
                  {product.discount > 0 ? <span>-{product.discount}% </span> : ""}{" "}
                </p>
                <p>
                  <span className="item-saleprice">
                    <sup className="item-symbol">{product.sympol}</sup>
                    {product.price}
                    <sup className="item-subprice">{product.subPrice}</sup>
                  </span>
                </p>
                <p>
                  {product.originalPrice ? (
                    <span className="item-original">
                      {product.sympol}
                      {product.originalPrice}
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </div>
            </Link> 
        </div>
              ))}
        </div>

  );
}

export default Item