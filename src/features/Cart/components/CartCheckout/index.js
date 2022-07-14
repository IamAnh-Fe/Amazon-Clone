import React from 'react'
import SubTotal from '~/components/SubTotal'
const CartCheckout = () => {
  return (
    <div className='cartCheckout'>
        <div className='cartCheckout-box'>
          <SubTotal />
            <button className='cartCheckout-checkout'>Proceed to checkout</button>
        </div>
    </div>
  )
}

export default CartCheckout