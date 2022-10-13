import React from 'react';
import PropTypes from 'prop-types';

const FilterByBrand = ({ filterList, onChange }) => {
    const handleBrandClick = (category) => {
        onChange(category);
    };

    return (
        <div>
            <h3>Brand</h3>
            <ul>
                {filterList &&
                    filterList?.brand?.length > 0 &&
                    filterList?.brand.map((category) => (
                        <li>
                            <input type="radio" name="checkbox1" onClick={() => handleBrandClick(category)} />
                            <label>{category}</label>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

FilterByBrand.propTypes = {
    onchange: PropTypes.func,
};
export default FilterByBrand;
