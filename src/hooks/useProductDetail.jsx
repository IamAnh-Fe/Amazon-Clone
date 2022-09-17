import { useState, useEffect } from "react"
import productApi from "~/apis/productApi";
export default function useProductDetail( productId) {
    const [product,setProduct] = useState({})
    const [image, setImage] = useState()
    const [Loading,setLoading] = useState(true)
useEffect(()=> {
     const fetchProductDetail = async () => {
       try {
       const result = await productApi.getProductId(productId);
       console.log('Fetch products successfully: ', result);
       const data = result ? result : ''
       setProduct(data);
       setImage(data.images[0].image);

       } catch (error) {
       console.log('Failed to fetch product list: ', error);
       }
       setLoading(false)
       }
       fetchProductDetail();
} ,[productId]);
return {product, Loading, image}
    
}