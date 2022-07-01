import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
export const NavSearch = () => {
  return (
    <>
      <div className="navbar-search">
        <select>
          <option>All</option>
        </select>

        <input className="navbar-searchInput" type="text" />
          <i className="navbar-iconsearch">
            <BiSearchAlt2 />
          </i>
      </div>
    </>
  );
}
