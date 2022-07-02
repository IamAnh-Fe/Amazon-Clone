import React from 'react'
import cart from "~/assets/logo/cart.png";
import america from "~/assets/logo/america.png";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from 'react-redux';

export const NavRight = () => {
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
        <span className="navbar-optionOne">Returns</span>
        <span className="navbar-optionTwo">& Order</span>
      </div>
      <div className="navbar-cart hover">
        <img className="navbar-iconcart" src={cart} alt="cart" />
        <span>Cart</span>
      </div>
    </div>
  );
}
