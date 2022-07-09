import React, { useState } from 'react'
import PropTypes from "prop-types";
const ItemSort = ({ currentSort, onChange }) => {

const [sort, setSort] = useState("")

console.log("curent",currentSort);
console.log(sort)
  const handleSortChange = (sort) => {
    if (onChange) onChange(sort);
    
  };
  return (
    <div className="itemsort">
      <div className="itemsort-content">
        <p>1-16 of over 10,000 results for ""</p>
        <div className="itemsort-price">
            <select value={currentSort} onChange={e => setSort(e.target.value)}>
              <option>Sort by: Featured</option>
              <option value="sort= salePrice">Price: Low to High</option>
              <option value="sort= -salePrice">Price: High to Low</option>
            </select>
        </div>
      </div>
    </div>
  );
};


ItemSort.propTypes = {

  currentSort: PropTypes.string.isRequired,
  onchange: PropTypes.func
}
export default ItemSort