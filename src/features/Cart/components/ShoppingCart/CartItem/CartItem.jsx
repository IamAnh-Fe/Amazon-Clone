import React from 'react'
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "~/features/Cart/CartSlice";
const CartItem = ({product}) => {
   const dispatch = useDispatch();
  const handleRemoveItem = () => {
    const action = removeFromCart({
      id: product.id,
    });
    dispatch(action);
  };
  const handleDecreaseQuantity = () => {
    const action = decreaseQuantity({
      id: product.id,
      quantity: product.quantity,
    });
    dispatch(action);
  };
  const handleIncreaseQuantity = () => {
    const action = increaseQuantity({
      id: product.id,
      quantity: product.quantity,
    });
    dispatch(action);
  };
  return (
      <div className='cartItem'>
        <div className='cartItem-box'>
                                
          <div className='cartItem-content'>
                <img className='cartItem-image' src={product.product.image} alt='cart Item'/>
                <div>
                   <div className='cartItem-title'>
                    <h3>{product.product.name}</h3>
                    <span>{product.product.salePrice}</span>
                    </div> 
                    <p>Category: {product.product.category}</p>
                     <div className='shoppingCart-quantity'>
              <span
                className="shoppingCart-btn"
                onClick={() => handleDecreaseQuantity()}
              >
                -
              </span>
              <span className="shoppingCart-number">{product.quantity}</span>
              <span
                className="shoppingCart-btn"
                onClick={() => handleIncreaseQuantity()}
              >
                +
              </span>
            </div>
                    <h3>
                        <span className='shoppingCart-delete' onClick={() => handleRemoveItem()}>Delete</span>
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem