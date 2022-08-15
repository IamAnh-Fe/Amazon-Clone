import React from 'react'
import SideBar from '../components/SideBar'
import Dashboard from '../components/DashBoard'
// import AddNewProduct from '../components/AdminProduct/AddNewProduct'
import {  Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin grid wide">
      <div className="row">
      <div className="admin-sidebar col l-3 ">
      <nav>
      <SideBar />
        </nav>
        </div>
        {/* <Outlet /> */}
        <div className="admin-data col l-9  ">
          {/* <Outlet /> */}
            {/* <Dashboard />  */}
          {/* <AddNewProduct />  */}
      </div>
        </div>
    </div>
  )
}

export default Admin;