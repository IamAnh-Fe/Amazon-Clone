import React from 'react'
import ProductFeedFour from './ProductFeedFour';
import ProductFeedOne from './ProductFeedOne'
import ProductFeedAuth from './ProductFeedAuth';
const ProductFeed = () => {
    return (
      <div className='container'>
      <div className='productfeed'>
        <div className='productfeed-list'>
        <div className='productfeed-card1'>
               <ProductFeedFour />
        </div>
           <div className='productfeed-card1'>
               <ProductFeedFour />
        </div>
          <div className='productfeed-card1'>
               <ProductFeedOne />
        </div> 
           <div className='productfeed-card1'>
               <ProductFeedAuth />
            </div>
            
        </div>
      </div>            
      </div>

  );
}

export default ProductFeed