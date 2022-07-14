import React from 'react'
import Rating from '~/components/Rating'
const InfoProduct = ({product}) => {
  return (
    <div className='infoProduct'>
        <div className='infoProduct-content'>
            <h1>{product.name}</h1>
            <Rating value={product.rating}/>
            <p>
               <span>{-product.discount}</span>
              <span className='infoProduct-saleprice'><sup>{product.sympol}</sup>{product.salePrice}<sup>{product.subPrice}</sup></span> 
            </p>
            <p>List Price:{product.originalPrice}</p>

        </div>
    </div>
  )
}

export default InfoProduct