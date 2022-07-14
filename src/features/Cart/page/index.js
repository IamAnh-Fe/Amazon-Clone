import React from 'react'
import ShoppingCart from '../components/ShoppingCart'
import CartCheckout from '../components/CartCheckout'
const Cart = () => {
  return (
    <div className='container'>
    <div className='cart' >
        <div className='cart-box'>
            <div className='cart-items'>
              <ShoppingCart />
            </div>
            <div className='cart-checkout'>
                <CartCheckout/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart