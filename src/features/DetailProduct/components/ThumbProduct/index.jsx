import React from 'react'

const ThumbProduct = ({product}) => {
  console.log('detail',product)
  return (
      <div className='thumbProduct'>
        <div className='thumbProduct-list'>
          <img className='thumbProduct-main' src={product.image} alt="thumbail-product" />

        </div>
    </div>
  )
}

export default ThumbProduct;