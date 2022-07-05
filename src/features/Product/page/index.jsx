import React, { useEffect, useState } from 'react'
import SideBar from '~/features/Product/components/SideBar'
import productApi from '~/apis/productApi'
import Item from '../components/Item'
const Product = () => {
    const [categoryList, setCategpryList] = useState([])
    useEffect(() => {
      const  fetchCategoryList = async () => {
          try {
                const data = await productApi.getAllCategory()
                setCategpryList(data)
                console.log(data)
            } catch (error) {
                console.log('Failed to fetch category list: ',error)
            }

        }
        fetchCategoryList()
    }, [])
  return (
    <div className="container">
      <div className="product">
        <div className="product-list">
          <div className="product-sidebar">
            <SideBar data={categoryList} />
          </div>
          <div className="product-showproduct">
            <h2>RESULTS</h2>
            <Item data={categoryList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product