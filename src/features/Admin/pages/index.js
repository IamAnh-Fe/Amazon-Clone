import React from 'react'
import SideBar from '../components/SideBar'
import Dashboard from '../components/DashBoard'
// import AddNewProduct from '../components/AdminProduct/AddNewProduct'
import {  Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin grid ">
      <div className="row">
      <div className="admin-sidebar col l-2 ">
      <SideBar />
        </div>
        <div className="admin-data col l-10 ">
          <Outlet />
            {/* <Dashboard />  */}
          {/* <AddNewProduct />  */}
      </div>
        </div>
    </div>
  )
}

export default Admin;