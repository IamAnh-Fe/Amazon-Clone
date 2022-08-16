import React, {useEffect, useState} from 'react'
import productApi from '~/apis/productApi'
const ShowProducts = () => {
    const [product, setProduct] = useState([])
    console.log("alladmin", product)
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
      <div className='row'>
         <div className='col l-1'>
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

              {product.map((item) => (

 <div className='row' key={item._id}>
         <div className='col l-1'>
       
        </div>
        
        <div className='l-2'>
          {/* <img src={item.image} alt='image-product' /> */}
          
        </div>
         <div className='l-3'>
          {item.name}
        </div>
         <div className='l-3'>
          <p>{item.brand}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>{item.rating}</p>
          <p>{item.discount}</p>
        </div>
           <div className='l-2'>
        </div>
           <div className='l-1'>
        </div>
      </div>
                    ))}

    </div>
  )
}

export default ShowProducts