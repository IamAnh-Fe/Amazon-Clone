import React, { useEffect, useState } from 'react'
import SideBar from '~/features/Product/components/SideBar'
import productApi from '~/apis/productApi'
import ItemSort from '~/components/ItemSort'
import Item from '../components/Item'
const Product = () => {
    const [productList, setProductList] = useState([])
    const [filters, setFilters] = useState({
    title_like: ''
  });
    useEffect(() => {
      const  fetchProductList = async () => {
          try {
                const data = await productApi.getAllCategory()
                setProductList(data)
                console.log(data)
            } catch (error) {
                console.log('Failed to fetch category list: ',error)
            }

        }
        fetchProductList()
    }, [filters])
  
  // const handleSortChange = (newSoftValue) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,

  //   }))
  // }

  const handleFiltersChange = (newFilters) => {
  console.log("check new cate: ", newFilters);
  setFilters((prevFilters)=> ({
    ...prevFilters,
    ...newFilters
  }))
}
  return (
    <div className="container">
      {/* <ItemSort /> */}
      <div className="product">
        <div className="product-list">
          <div className="product-sidebar">
            <SideBar filters={filters} onChange={handleFiltersChange} />
          </div>
          <div className="product-showproduct">
            <h2>RESULTS</h2>
            <Item data={productList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product