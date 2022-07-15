import React from 'react'
import PropTypes from "prop-types";

const FilterByBrand = ({data, onChange}) => {
    const handleBrandClick = (category) => {
      if (onChange) {
        onChange(category.brand);
      }
    };
  return (
    <div>
      <h3>Brand</h3>
      <ul>
        {data.map((category) => (
          <li key={category._id} >
            <input
              type="radio"
              name="checkbox1"
              onClick={() => handleBrandClick(category)}
            />
            <label>{category.brand}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

FilterByBrand.propTypes = {
  onchange: PropTypes.func,
};
export default FilterByBrand