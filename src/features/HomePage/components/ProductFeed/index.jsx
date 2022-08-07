import React, { useEffect, useState } from 'react'
import collectionApi from '~/apis/collectionApi'
import ProductFeedFour from './ProductFeedFour';
import ProductFeedOne from './ProductFeedOne'
import ProductFeedAuth from './ProductFeedAuth';
const ProductFeed = () => {
        const [collection, setCollection] = useState([])
    useEffect(() => {
      const  fetchCollection = async () => {
          try {
                const res = await collectionApi.getAllCollection()
                setCollection(res)
                
                console.log("collection", res)
            } catch (error) {
                console.log('Failed to fetch collection: ',error)
            }

        }
        fetchCollection()
    }, [])
    return (
      <div className='container'>
      <div className='productfeed'>
        <div className='productfeed-list'>
        <div className='productfeed-card1'>
                  {collection.map((item) => (

               <ProductFeedFour data={item} />
                       ))}

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