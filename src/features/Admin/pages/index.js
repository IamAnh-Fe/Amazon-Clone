import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar'
import TopNav from '../components/TopNav'
import {  Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setThemeMode, setThemeColor } from '~/features/Admin/components/ThemeMenu/themeSlice';

const Admin = () => {
    const [show, setShow] = useState(false);
  const showSidebar = () => setShow(!show);

      const dispatch = useDispatch()
      const themeReducer = useSelector((state) => state.theme);
  useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(setThemeMode(themeClass))
        dispatch(setThemeColor(colorClass))
    }, [dispatch])

  return (
    <div className={`admin grid ${themeReducer.mode} ${themeReducer.color}  ` }>
      <div className="admin-sidebar">
      <SideBar showSidebar={showSidebar} show={show} />
        </div>
        <div className={show ? 'admin-data__active' : 'admin-data'} >
          <div>
            <TopNav />
          </div>
          <Outlet  />

      </div>
        </div>
  )
}

export default Admin;