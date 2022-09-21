import React, {useEffect} from 'react'
import cart from "~/assets/logo/cart.png";
import america from "~/assets/logo/america.png";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from "~/redux/selectors";
import { useNavigate } from "react-router-dom";

export const NavRight = () => {
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
    <div className="navbar-right">
        
      <Link to="admin">
      <div className="navbar-language hover">
        <img src={america} alt="america" />
        <i><BiChevronDown/></i>
      </div>
        </Link>

      <div className="navbar-option hover">
          <Link to="auth/sign-in">
        <span className="navbar-optionOne" >
            Hello, <span>{user ? (user.username) : "Sign in"}</span></span>
            </Link>
            <Link to="profile">
        <span className="navbar-optionTwo">Account & Lists</span>
            </Link>
      </div>
      <div className="navbar-option hover">

        <span className="navbar-optionOne">Returns</span>
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
