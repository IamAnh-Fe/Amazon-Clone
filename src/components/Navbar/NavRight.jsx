import React from 'react'
import cart from "~/assets/logo/cart.png";
import america from "~/assets/logo/america.png";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from "~/redux/selectors";

export const NavRight = () => {
    const badge = useSelector(cartItemsCountSelector)
const user = useSelector((state) => state.auth.login.currentUser)
  return (
    <div className="navbar-right">
        
      <Link to="admin">
      <div className="navbar-language hover">
        <img src={america} alt="" />
        <i><BiChevronDown/></i>
      </div>
        </Link>

      <div className="navbar-option hover">
          <Link to="user/sign-in">
        <span className="navbar-optionOne" >
            Hello, <span>{user ? (user.username) : "Sign in"}</span></span>
            </Link>
        <span className="navbar-optionTwo">Account & Lists</span>
      </div>
      <div className="navbar-option hover">
        <Link to="product">

        <span className="navbar-optionOne">Returns</span>
        </Link>
        <span className="navbar-optionTwo">& Order</span>
      </div>
      <Link to="product/Cart" >
      <div className="navbar-cart hover">
        <img className="navbar-iconCart" src={cart} alt="cart" />
        <span className='navbar-badge'>{badge}</span>
        <span>Cart</span>
      </div>
      </Link>
    </div>
  );
}
