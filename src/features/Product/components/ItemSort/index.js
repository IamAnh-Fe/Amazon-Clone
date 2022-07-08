import React from 'react'
import PropTypes from "prop-types";
const ItemSort = ({ currentSoft, onChange }) => {

  const handleSoftChange = (event, newValue) => {
    if(onChange){
        onchange(newValue)
    } 
  }
  return (
    <div className="itemsort">
      <div className="itemsort-content">
        <p>1-16 of over 10,000 results for ""</p>
        <div className="itemsort-price">
          <form value={currentSoft} onChange={handleSoftChange}>
            <select>
              <option>Sort by: Featured</option>
              <option value='sort=price'>Price: Low to High</option>
              <option value='sort=-price'>Price: High to Low</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};


ItemSort.propTypes = {

  currentSoft: PropTypes.string.isRequired,
  onchange: PropTypes.func
}
export default ItemSort