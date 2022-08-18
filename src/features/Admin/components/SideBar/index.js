import React from 'react'
import logo from "~/assets/logo/adminlogo.png"
import {
  AiOutlineHome,
  AiOutlineCustomerService,
  AiOutlineCodeSandbox,
  AiOutlineDollar,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import logoWhite from "~/assets/logo/logo.png"
import { AiOutlineMenuFold } from "react-icons/ai";

import { useSelector } from 'react-redux'

const SideBar = () => {
          const themeReducer = useSelector((state) => state.theme);
const themeBlack = themeReducer.mode === 'theme-mode-dark'
  return (
      <div className="sidebarAdmin ">
          <div className="sidebarAdmin-header">
              <div className="sidebarAdmin-logo">
                  <img src={themeBlack ? logoWhite : logo} alt="logo-amazon" />
              </div>
              <div className='sidebarAdmin-menu'><AiOutlineMenuFold/></div>
         </div>
              <div className="sidebarAdmin-content">
                  <div className="sidebarAdmin-inner">
                      <NavLink  to="dashboard">
                           {/* <span className='sidebarAdmin-title'> */}
                          <i className='sidebarAdmin-icon'>
                              <AiOutlineHome /> 
                          </i>
                        <span>Dashboard</span>    
                            {/* </span>   */}
                      </NavLink>
                  </div>

                  <div className="sidebarAdmin-inner">
                      <NavLink to="users">
                           {/* <span className='sidebarAdmin-title'> */}
                        <i className='sidebarAdmin-icon'><AiOutlineCustomerService/>
                        </i>
                            <span>
                                Manage Users
                                </span>
                            {/* </span> */}
                      </NavLink>
                  </div>

                  <div className="sidebarAdmin-inner ">
                      <NavLink to="products">
                           {/* <span className='sidebarAdmin-title'> */}
                           <i className='sidebarAdmin-icon'>
                            <AiOutlineCodeSandbox /> 
                            </i>                           
                           <span>Product</span>
                      </NavLink>
                  </div>
              </div>
           </div>
    //   </div>
  );
}

export default SideBar