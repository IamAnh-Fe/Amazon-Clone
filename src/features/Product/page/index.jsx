import React, { useEffect, useState } from 'react'
import SideBar from "~/features/Product/components/SideBarProduct";
// import productApi from '~/apis/productApi'
import ItemSort from "../components/ItemSort";
import Item from "../components/Item";
import { useParams } from "react-router-dom";
import categoryApi from '~/apis/categoryApi';
const ProductList = () => {
  const category = useParams()
    const [productList, setProductList] = useState([])
    const [filters, setFilters] = useState({
      sort: 'sort= -rating',
      
  });
    useEffect(() => {
      const  fetchProductList = async () => {
          try {
                const res = await categoryApi.getCategory(category.slug,filters)
                setProductList(res)
                console.log("all", res)
            } catch (error) {
                console.log('Failed to fetch category list: ',error)
            }

        }
        fetchProductList()
    }, [filters])
  
    const handleSortChange = (newSortValue) => {
      console.log('ff',newSortValue);
      setFilters((prevFilters) => ({
        ...prevFilters,
        sort: newSortValue,
      }));
    };
  
  const handleFiltersChange = (newFilters) => {
  console.log("check new cate: ", newFilters);
  setFilters((prevFilters)=> ({
    ...prevFilters,
    ...newFilters,
  }))
}
  return (
    <div className="container">
      <ItemSort currentSort={filters.sort} onChange={handleSortChange} />
      <div className="product">
        <div className="product-list">
          <div className="product-sidebar">
            <SideBar filters={filters} onChange={handleFiltersChange} />
          </div>
          <div className="product-showproduct">
            <h2>RESULTS</h2>
            <Item product={productList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList