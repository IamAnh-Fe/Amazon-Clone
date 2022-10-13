import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import SubTotal from '~/components/SubTotal';
const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart);
    const cart = cartItems.cartItems;
    console.log(cart);
    return (
        <div>
            <div className="shoppingCart-list">
                <div className="shoppingCart-top">
                    <h2 className="shoppingCart-heading">Shopping Cart</h2>
                    <p className="shoppingCart-price">Price</p>
                </div>

                {cart.map((product) => {
                    return <CartItem product={product} />;
                })}
            </div>
        </div>
    );
};

export default ShoppingCart;
