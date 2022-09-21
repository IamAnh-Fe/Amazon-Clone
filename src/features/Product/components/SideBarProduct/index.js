import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import filterApi from '~/apis/filterApi';
import FilterByBrand from '../Filter/FilterByBrand';
import FilterByPrice from '../Filter/FilterByPrice';

const SideBar = ({filters, filterBrand, onChange, handleFilterBrand}) => {
    const [filterList, setFilterList] = useState()
    const category = useParams()
    useEffect(() => {
      const  fetchFilterCategory = async () => {
          try {
                const res = await  filterApi.getFilter(category.slug)
                
                setFilterList(res[0])
            } catch (error) {
                console.log('Failed to fetch filter list: ',error)
            }

        }
       fetchFilterCategory()
    }, [filters])
  
   const handleBrandChange = (newbrand) => {
     const newFilters = {
       ...filterBrand,
       "brand": newbrand,
     };
     handleFilterBrand(newFilters);
   };

  
   const handlePriceChange = (values) => {
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
          <FilterByBrand onChange={handleBrandChange} filterList={filterList} />
        </div>
        <div className="sbProduct-price">
          <FilterByPrice onChange={handlePriceChange} filterList={filterList}/>
        </div>

        <div className="sbProduct-searchprice">
        </div>
      </div>
    </div>
  );
}
SideBar.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
export default SideBar