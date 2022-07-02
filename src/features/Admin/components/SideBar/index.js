import React from 'react'
import logo from "~/assets/logo/adminlogo.png"
import {
  AiOutlineHome,
  AiOutlineCustomerService,
  AiOutlineCodeSandbox,
  AiOutlineDollar,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list">
        <div className="sidebar-logo">
          <img src={logo} alt="logo-amazon" />
        </div>
        <div className="sidebar-content">
          <h3 className="sidebar-title">
            <AiOutlineHome /> Dashboard
          </h3>
          <h3 className="sidebar-title">
            <AiOutlineCustomerService /> Customer
          </h3>
          <h3 className="sidebar-title">
            <AiOutlineCodeSandbox /> Product
          </h3>
          <h3 className="sidebar-title">
            <AiOutlineDollar /> Order
          </h3>
          <h3 className="sidebar-title">
            <BsChatDots /> Chat
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SideBar