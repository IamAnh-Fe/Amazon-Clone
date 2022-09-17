import React from 'react'
import Rating from '~/components/Rating'


const InfoProduct = ({product}) => {
  return (
    <div className='infoProduct'>
        <div className='infoProduct-content'>
            <h1 className='infoProduct-title'>{product.name}</h1>
            <span className='infoProduct-star'>
              </span>
            {/* <p>
               <span>{-product.discount}</span>
              <span className='infoProduct-saleprice'><sup>{product.sympol}</sup>{product.salePrice}<sup>{product.subPrice}</sup></span> 
            </p> */}
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
              
              </div>
                <p>List Price:
                  {product.originalPrice && (
                    <span >
                      {product.sympol}
                      {product.originalPrice}
                    </span>
                  ) }
                </p>
        </div>
    </div>
    
  )
}

export default InfoProduct