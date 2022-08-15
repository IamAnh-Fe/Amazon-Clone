import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import america from "~/assets/logo/america.png";
import logo from "~/assets/logo/logo.png"

const Footer = () => {
  return (
    <div className='amazonFooter'>
      <div className='amazonFooter-background'>
<div className='amazonFooter-content'>
  <div className='amazonFooter-footerbox'>
<div className='grid'>
  <div className='row no-gutters '>
    <div className=' l-3  m-6  c-12 '>
      <h3 className='amazonFooter-titleFooter'>Get to Know Us</h3>
      <ul className='amazonFooter-textFooter'>
        <li>Careers</li>
        <li>Blog</li>
        <li>About Amazon</li>
        <li>Investor Relations</li>
        <li>Amazon Devices</li>
        <li>Amazon Science</li>
      </ul>
    </div>
     <div className=' l-3 m-6 c-12 '>
      <h3 className='amazonFooter-titleFooter'>Make Monney with Us</h3>
      <ul className='amazonFooter-textFooter'>
        <li>Sell products on Amazon</li>
        <li>Sell on Amazon Business</li>
        <li>Sell apps on Amazon</li>
        <li>Advertise Your Products</li>
        <li>Self-Publish with Us</li>
        <li>Host an Amazon Hub</li>
        <li>See More Make Money with Us</li>
      </ul>
    </div>
     <div className=' l-3 m-6 c-12 '>
      <h3 className='amazonFooter-titleFooter'>Amazon Payment Products</h3>
      <ul className='amazonFooter-textFooter'>
        <li>Amazon Business Card</li>
        <li>Shop with Points</li>
        <li>Reload Your Balance</li>
        <li>Amazon Currency Converter</li>
      </ul>
    </div>
     <div className=' l-3  m-6  c-12'>
      <h3 className='amazonFooter-titleFooter'>Let Us Help You</h3>
      <ul className='amazonFooter-textFooter'>
        <li>Amazon and COVID-19</li>
        <li>Your Account</li>
        <li>Your Orders</li>
        <li>Shipping Rates & Policies</li>
        <li>Returns & Replacements</li>
        <li>Manage Your Content and Devices</li>
        <li>Amazon Assistant</li>
        <li>Help</li>
      </ul>
    </div>
  </div>
 
  
</div>
  </div>
</div>
<div className='amazonFooter-line'/>
<div className='amazonFooter-content'>
  <div className='amazonFooter-footerline'>
    <div className='center'>
      <div className='amazonFooter-logo'>
        <img src={logo} className="navbar-logo " alt="logo amazon" />
      </div>
      <div className=' center'>
      <div className=' '>
        <span className='button'><AiOutlineGlobal /> English  <BsArrowDownUp/></span>
      </div>
      <div className=' '>
        <span className='button'>$ USD - U.S.Dollar</span>
        </div>
      <div className=''>
        <span className='button center'><img className='amazonFooter-iconAmerica' src={america} alt="america" /> United States</span>
      </div>

      </div>
    </div>
  </div>
  </div>
  </div>
</div>
  )
}

export default Footer