import React, {useState } from 'react';
import useSearch from '~/hooks/useSearch'
import { BiSearchAlt2 } from "react-icons/bi";
  const NavSearch = () => {
 const {search, handleSearching, handleSubmitSearch} = useSearch()
  return (
      <div className="navbar-search">
        <select>
          <option>All</option>
        </select>
        <input className="navbar-searchInput" type="text" value={search} onChange={handleSearching} />
         <button className="navbar-iconsearch"  onClick={handleSubmitSearch}>
            <BiSearchAlt2 />
          </button> 
      </div>
  );
}
export default NavSearch;