import React, {useState} from 'react'
import logo from "~/assets/logo/adminlogo.png"
import {
  AiOutlineHome,
  AiOutlineUser,
  // AiOutlineDown,
  // AiOutlineUp,
AiOutlineAmazon,
AiOutlineMenuFold, AiOutlineMenuUnfold  
} from "react-icons/ai";
import { NavLink} from "react-router-dom";
import logoWhite from "~/assets/logo/logo.png"

import { useSelector } from 'react-redux'

const SideBar = (props) => {
const [hide, setHide] = useState(false)
const {showSidebar, show} = props;
const handleToggle  = () => setHide(!hide);

const themeReducer = useSelector((state) => state.theme);
const themeBlack = themeReducer.mode === 'theme-mode-dark'
  return (
     <div className={show ? 'sidebar open' : 'sidebar'}>
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus icon'></i>
        <div className="logo_name">Amazon</div>
        <i className='bx bx-menu' id="btn" onClick={showSidebar} >
          {show === false ? <AiOutlineMenuUnfold/> :<AiOutlineMenuFold/>  } 
        </i>
    </div>
    <ul className="nav-list">
     
      <li>
      <NavLink to="dashboard">          
     <i className='bx bx-grid-alt'>
          <AiOutlineHome />         
          </i>
          <span className="links_name">Dashboard</span>
        </NavLink>
         <span className="tooltip">Dashboard
         </span>
      </li>
             
     <li onClick={handleToggle} >
      <NavLink to="products">
         <i>
< AiOutlineAmazon/>
         </i>
         <span className="links_name">Manage Products</span>
       {/* <i className='hide'>{hide ? <AiOutlineDown/> : <AiOutlineUp />}</i>  */}
      </NavLink>
       <span  className="tooltip">Manage Products</span>
     </li>
       {/* <ul className={show == false || hide == true  ? 'sub-menu' : 'sub-menu showMenu'}>
          <li><NavLink to="products">All Products</NavLink></li>
          <li><NavLink to="addAProduct">Add to Product</NavLink></li>
          <li><a className="link_name" href="#">Login Form</a></li>
          <li><a className="link_name" href="#">Card Design</a></li>
        </ul> */}
      <li>
        <NavLink to="users">
         <i className='bx bx-user' >
          <AiOutlineUser/>
         </i>
         <span className="links_name">Manage Users</span>
       </NavLink>
       <span className="tooltip">Manage Users</span>
     </li>
    </ul>
  </div>
  );
}

export default SideBar;