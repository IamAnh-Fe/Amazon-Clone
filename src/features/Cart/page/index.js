import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import CartCheckout from '../components/CartCheckout';
const Cart = () => {
    return (
        <div className="col container">
            <div className="cart">
                <div className="cart-box row">
                    <div className="cart-items l-10 m-9 c-12">
                        <ShoppingCart />
                    </div>
                    <div className="cart-checkout l-2 m-3 ">
                        <CartCheckout />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
