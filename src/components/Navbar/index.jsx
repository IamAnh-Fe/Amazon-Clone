import React from 'react'
import NavLeft from './NavLeft'
import { NavRight } from './NavRight'
import { NavSearch } from './NavSearch'

const NavBar = () => {
  return (
        <div className="navbar">
          <NavLeft />
          <NavSearch />
          <NavRight />
        </div>
  
  );
};


export default NavBar;