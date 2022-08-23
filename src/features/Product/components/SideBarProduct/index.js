import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import categoryApi from '~/apis/categoryApi';
import FilterByBrand from '../Filter/FilterByBrand';
import FilterByPrice from '../Filter/FilterByPrice';
const SideBar = ({filters, onChange}) => {
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
      const  fetchCategoryList = async () => {
          try {
                const data = await categoryApi.getAllCategory()
                setCategoryList(data)
                console.log(data)
            } catch (error) {
                console.log('Failed to fetch category list: ',error)
            }

        }
        fetchCategoryList()
    }, [])
  
   const handleBrandChange = (newbrand) => {
     const newFilters = {
       ...filters,
       "brand": newbrand,
     };
     onChange(newFilters);
   };

  
   const handlePriceChange = (values) => {
     console.log(values);
     if (onChange) {
       onChange(values);
     }
   };
  return (
    <div className="sbProduct">
      <div className="sbProduct-list">
        <div className="sbProduct-rating">
          <h3>Customer Review</h3>
        </div>
        <div className="sbProduct-brand">
          <FilterByBrand onChange={handleBrandChange} data={categoryList} />
        </div>
        <div className="sbProduct-price">
          <FilterByPrice onChange={handlePriceChange}/>
        </div>
        <div className="sbProduct-searchprice"></div>
      </div>
    </div>
  );
}
SideBar.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
export default SideBar