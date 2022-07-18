import React from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ThumbnailProduct from '../components/ThumbProduct';
import InfoProduct from '../components/InfoProduct';
import CartProduct from '../components/CartProduct';
import useProductDetail from '~/hooks/useProductDetail';
import { addToCart } from '~/features/Cart/CartSlice';
import Review from '../components/Review';
const DetailPage = () => {
  let  productId  = useParams();
    const dispatch = useDispatch()

  const { product, loading } = useProductDetail(productId.id)
   if (loading) {
    return <h2>Loading</h2>
  }
    const handleAđdToCartSubmit = (formValues) => {
    const action = addToCart({
      id: product._id,
      product,
      quantity: formValues.quantity
    });
    console.log('check action: ',action)
    dispatch(action)
  }
    return (
      <div className="container">
        <div className="detailProduct">
          <div className="detailProduct-list">
            <div className="detailProduct-thumbnail">
              <ThumbnailProduct product={product} />
            </div>
            <div className="detailProduct-info">
              <InfoProduct product={product} />
              <CartProduct onSubmit={handleAđdToCartSubmit} />
            </div>
          </div>
            <div>
             <Review product={product} />
            </div>
        </div>
      </div>
    );
}

export default DetailPage