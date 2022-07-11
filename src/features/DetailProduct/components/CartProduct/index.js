import React from 'react'

const CartProduct = ({product}) => {
  return (
    <div className='cartProduct'>
      <div className='cartProduct-box'>
        <h3><sup>{product.sympol}</sup>{product.salePrice}<sup>{product.subPrice}</sup></h3>
     
      </div>
    </div>
  )
}

export default CartProduct