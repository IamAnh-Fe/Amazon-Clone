import React from 'react'
import { useParams } from "react-router-dom";
import ThumbnailProduct from '../components/ThumbProduct';
import InfoProduct from '../components/InfoProduct';
import CartProduct from '../components/CartProduct';
import useProductDetail from '~/hooks/useProductDetail';
const DetailPage = () => {
  let  productId  = useParams();
  const { product, loading } = useProductDetail(productId.id)
   if (loading) {
    return <h2>Loading</h2>
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
            </div>
            <div className="detailProduct-cart">
              <CartProduct product={product}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DetailPage