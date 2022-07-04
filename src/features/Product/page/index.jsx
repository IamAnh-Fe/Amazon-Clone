import React from 'react'
import SideBar from '~/features/Product/components/SideBar'
import KeyBoad from '~/features/Product/components/Product'
const Products = () => {
  return (
      <div className="products">
          <div className="products-list">
          <div className="products-sidebar">
              <SideBar />
          </div>
              <div className="products-showproduct">
                  <h2>RESULTS</h2>
              <KeyBoad />
          </div>

          </div>
          
    </div>
  )
}

export default Products