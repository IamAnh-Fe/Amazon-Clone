import React from 'react'
import Rating from '~/components/Rating';
const Item = ({data}) => {
  return (
    <div className="item">
      <div className="item-list">
        {data.map((category) => (
          <div className="item-content">
            <div className="item-thumb">
              <img src={category.image} alt="product" />
            </div>
            <div className="item-info">
              <h3 className="product-title">{category.name}</h3>
              <div>
                <Rating value={category.rating} />
              </div>
              <div className="item-price">
                <p className="item-discount">
                  {category.discount ? <span>-{category.discount}% </span> : ""}{" "}
                </p>
                <p>
                  <span className="item-saleprice">
                    <sup className="item-symbol">{category.sympol}</sup>
                    {category.salePrice}
                    <sup className="item-subprice">{category.subPrice}</sup>
                  </span>
                </p>
                <p>
                  {category.originalPrice ? (
                    <span className="item-original">
                      {category.sympol}
                      {category.originalPrice}.{category.subPrice}
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item