import React, {useEffect, useState} from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import productApi from '~/apis/productApi'

const ShowProducts = () => {
    const [product, setProduct] = useState([])
  useEffect(() => {
      const  fetchProductList = async () => {
          try {
                const res = await productApi.getAllproduct()
                setProduct(res.product)
            } catch (error) {
                console.log('Failed to fetch category list: ',error)
            }

        }
        fetchProductList()
    }, [])
  return (
    <div className='grid'>
      <div className='row cardAdmin'>
         <div className=' l-1'>
       id
        </div>

        <div className='l-2'>
       Thumbnail
        </div>
         <div className='l-3'>
       Name
        </div>
         <div className='l-3'>
       Info
        </div>
           <div className='l-2'>
       Inventory 
        </div>
           <div className='l-1'>
       Edit / Delete
        </div>
      </div>
      <div className='vh cardAdmin'>
              {product.map((item) => (
 <div className='manageProduct-item row' key={item._id}>
         <div className='col l-1'>
       
        </div>
        
        <div className='l-2'>
          {/* <img src={item.image} alt='image-product' /> */}
          
        </div>
         <div className='l-3'>
          {item.name}
        </div>
         <div className='l-3'>
          {item ? 
          <>
          <p>Brand: {item.brand}</p> 
          <p>Sale Price: {item.salePrice}</p>
          <p>Rating: {item.rating}</p>
          <p>Discount: {item.discount}</p> 
          </>
          : ''}
          </div>
           
          <div className='l-2'>
        </div>
           <div className='l-1'>
            <span><AiOutlineEdit/>/ </span> 
            <span> <AiOutlineDelete/></span>

            
        </div>
      </div>
      ))}
</div>

    </div>
  )
}

export default ShowProducts