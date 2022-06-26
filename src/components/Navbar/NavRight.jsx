import React from 'react'
import cart from "../../assets/logo/cart.png";
import america from "../../assets/logo/america.png";
import { Link } from "react-router-dom";

import { BiChevronDown } from "react-icons/bi";
export const NavRight = () => {
  return (
    <div className="navbar-right">
      <div className="navbar-language hover">
        <img src={america} alt="" />
        <i><BiChevronDown/></i>

      </div>
      <div className="navbar-option hover">
        <span className="header-optionLineOne" ><Link to="user/sign-in">Hello, Sign in</Link></span>
        <span className="header-optionLineTwo">Account & Lists</span>
      </div>
      <div className="navbar-option hover">
        <span className="header-optionLineOne">Returns</span>
        <span className="header-optionLineTwo">& Order</span>
      </div>
      <div className="navbar-cart hover">
        <img className="navbar-iconcart" src={cart} alt="cart" />
        <span>Cart</span>
      </div>
    </div>
  );
}
