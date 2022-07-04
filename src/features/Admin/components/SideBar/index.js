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
    <div className="sidebarAdmin">
      <div className="sidebarAdmin-list">
        <div className="sidebarAdmin-logo">
          <img src={logo} alt="logo-amazon" />
        </div>
        <div className="sidebarAdmin-content">
          <h3 className="sidebarAdmin-title">
            <AiOutlineHome /> Dashboard
          </h3>
          <h3 className="sidebarAdmin-title">
            <AiOutlineCustomerService /> Customer
          </h3>
          <h3 className="sidebarAdmin-title">
            <AiOutlineCodeSandbox /> Product
          </h3>
          <h3 className="sidebarAdmin-title">
            <AiOutlineDollar /> Order
          </h3>
          <h3 className="sidebarAdmin-title">
            <BsChatDots /> Chat
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SideBar