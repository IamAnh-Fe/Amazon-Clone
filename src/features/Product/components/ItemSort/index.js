import React, { useState } from 'react';
import PropTypes from 'prop-types';
const ItemSort = ({ currentSort, onChange }) => {
    const handleSortChange = (e) => {
        const newSortValue = e.target.value;
        if (onChange) onChange(newSortValue);
    };
    return (
        <div className="itemsort">
            <div className="itemsort-content">
                <span></span>
                <div className="itemsort-price">
                    <form value={currentSort} onChange={handleSortChange}>
                        <select>
                            <option value="-rating">Sort by: Featured</option>
                            <option value="salePrice">Price: Low to High</option>
                            <option value="-salePrice">Price: High to Low</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    );
};

ItemSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onchange: PropTypes.func,
};
export default ItemSort;
