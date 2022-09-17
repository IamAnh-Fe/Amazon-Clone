import React, { useEffect, useState } from 'react'
import collectionApi from '~/apis/collectionApi'
import categoryThumbApi from '~/apis/categoryThumb'
import ProductFeedFour from './ProductFeedFour';
import ProductFeedOne from './ProductFeedOne'
import ProductFeedAuth from './ProductFeedAuth';
const ProductFeed = () => {
  const [thumb, setThumb] = useState({})
  const [list, setList] = useState([])
  const [collection, setCollection] = useState([])
  useEffect(() => {
    const  fetchCategoryThumb = async () => {
        try {
              const res = await categoryThumbApi.getAllCategoryThumb()
              const data = [...res]
              setThumb(data.shift())
              setList(res.slice(1))
          } catch (error) {
              console.log('Failed to fetch categoryThumb: ',error)
          }
      }
      fetchCategoryThumb()
  }, [])
   

    useEffect(() => {
      const  fetchCollection = async () => {
          try {
                const res = await collectionApi.getAllCollection()
                setCollection(res)
               } catch (error) {
                console.log('Failed to fetch collection: ',error)
            }
        }
        fetchCollection()
    }, [])

    return (
      <div className='col container'>
      <div className='productfeed'>
        <div className='productfeed-list'>
                  {collection.map((item) => (
        <div className='productfeed-card1' key={item._id}>
               <ProductFeedFour data={item} />
        </div>
          ))}
           <div className='productfeed-card1'>
               <ProductFeedOne item={thumb}  />                 
        </div> 
           <div className='productfeed-card1'>
               <ProductFeedAuth />
            </div>
                  {list.map((item) => (
        <div className='productfeed-card2' key={item._id}>
               <ProductFeedOne listData={item} /> 
        </div> 
        ))}

        </div>
      </div>            
      </div>

  );
}

export default ProductFeed