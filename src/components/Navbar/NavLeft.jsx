import React from 'react'
import logo from "../../assets/logo/logo.png"
import { AiFillEnvironment } from "react-icons/ai";

const NavLeft = props => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
        <img src={logo} className="nav-logo" alt="logo amazon" />
        <div className="nav-location">
            <div><i><AiFillEnvironment/></i></div>
            <div>
            <h4>Deliver to</h4>
            <h3>VietNam</h3>
            </div>

        </div>
        </div>

    </div>
  )
}

navLeft.propTypes = {}

export default NavLeft