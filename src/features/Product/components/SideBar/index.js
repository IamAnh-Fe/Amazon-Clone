import React, { useEffect, useState } from 'react'
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
  return (

    <div className="sidebar">
      <div className="sidebar-list">
        <div className="sidebar-rating">
          <h3>Customer Review</h3>
        </div>
        <div className="sidebar-brand">
          <FilterByBrand data={categoryList} />
        </div>
        <div className="sidebar-price">
          <FilterByPrice data={categoryList} />
        </div>
        <div className="sidebar-searchprice"></div>
      </div>
    </div>
  );
}

export default SideBar