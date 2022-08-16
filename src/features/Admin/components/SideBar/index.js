import React from 'react'
import logo from "~/assets/logo/adminlogo.png"
import {
  AiOutlineHome,
  AiOutlineCustomerService,
  AiOutlineCodeSandbox,
  AiOutlineDollar,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
      <div className="sidebarAdmin row">
          <div className="sidebarAdmin-list l-6 l-o-3  ">
              <div className="sidebarAdmin-logo">
                  <img src={logo} alt="logo-amazon" />
              </div>
              <div className="sidebarAdmin-content">
                  <div className="sidebarAdmin-inner">
                      <Link to="">
                          {' '}
                          <h3 className="sidebarAdmin-title">
                              <AiOutlineHome /> Dashboard
                          </h3>
                      </Link>
                  </div>

                  <div className="sidebarAdmin-inner">
                      <Link to="users">
                          <h3 className="sidebarAdmin-title">
                              <AiOutlineCustomerService /> Manage Users
                          </h3>
                      </Link>
                  </div>

                  <div className="sidebarAdmin-inner">
                      <Link to="products">
                          <h3 className="sidebarAdmin-title">
                              <AiOutlineCodeSandbox /> Product
                          </h3>
                      </Link>
                  </div>

                  <div className="sidebarAdmin-inner">
                      <h3 className="sidebarAdmin-title">
                          <AiOutlineDollar /> Order
                      </h3>
                  </div>
                  <div className="sidebarAdmin-inner">
                      <h3 className="sidebarAdmin-title">
                          <BsChatDots /> Chat
                      </h3>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default SideBar