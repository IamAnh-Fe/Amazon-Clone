import React, {useState, useEffect} from 'react'
import logo from "~/assets/logo/logo.png"
import useSearch from '~/hooks/useSearch'
import cart from "~/assets/logo/cart.png";
import america from "~/assets/logo/america.png";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AiFillEnvironment } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { cartItemsCountSelector } from "~/redux/selectors";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
 const {search, handleSearching, handleSubmitSearch} = useSearch()
 const navigate = useNavigate();

    const badge = useSelector(cartItemsCountSelector)
    const user = useSelector((state) => state.auth.login?.currentUser)
    console.log("user",user)
    useEffect(() => {
     if(user?.isAdmin === true) {
              navigate("/admin")
     }

    }, [])
  return (
        <div className="navbar row">
         <div className="navbar-left l-1">
        <img src={logo} className="navbar-logo hover" alt="logo amazon" />
      </div>
        <div className="navbar-location hover l-1">
            <i>
              <AiFillEnvironment />
            </i>
          <div>
            <h5>Deliver to</h5>
            <h5>VietNam</h5>
          </div>
        </div>
       <div className="navbar-search l-6">
        <select>
          <option>All</option>
        </select>
        <input className="navbar-searchInput" type="text" value={search} onChange={handleSearching} />
         <button className="navbar-iconsearch"  onClick={handleSubmitSearch}>
            <BiSearchAlt2 />
          </button> 
      </div>
        
      <Link to="admin">
      <div className="navbar-language hover l-1">
        <img src={america} alt="america" />
        <i><BiChevronDown/></i>
      </div>
        </Link>

      <div className="navbar-option hover l-1">
          <Link to="auth/sign-in">
        <span className="navbar-optionOne" >
            Hello, <span>{user ? (user.username) : "Sign in"}</span></span>
            </Link>
            <Link to="profile">
        <span className="navbar-optionTwo">Account & Lists</span>
            </Link>
      </div>
      <div className="navbar-option hover l-1">

        <span className="navbar-optionOne">Returns</span>
        <span className="navbar-optionTwo">& Order</span>
      </div>
      <Link to="product/Cart" >
      <div className="navbar-cart hover l-1">
        <img className="navbar-iconCart" src={cart} alt="cart" />
        <span className='navbar-badge'>{badge}</span>
        <span>Cart</span>
      </div>
      </Link>
        </div>
  
  );
};


export default NavBar;