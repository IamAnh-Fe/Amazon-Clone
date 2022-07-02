import React from 'react'
import SideBar from '../components/SideBar'
// import Dashboard from '../components/DashBoard'
import AddNewProduct from '../components/AdminProduct/AddNewProduct'
const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-sidebar">
      <SideBar />
      </div>
      <div className="admin-data">
      <AddNewProduct />
      </div>
    </div>
  )
}

export default Admin;