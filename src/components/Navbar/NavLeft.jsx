import React from 'react'
import logo from "../../assets/logo/logo.png"
import { AiFillEnvironment } from "react-icons/ai";

const NavLeft = props => {
  return (
      <div className="navbar-left">
        <img src={logo} className="navbar-logo hover" alt="logo amazon" />
        <div className="navbar-location hover">
            <i>
              <AiFillEnvironment />
            </i>
          <div>
            <h5>Deliver to</h5>
            <h5>VietNam</h5>
          </div>
        </div>
      </div>
  );
}

NavLeft.propTypes = {}

export default NavLeft