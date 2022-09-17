// api/productApi.js
import axiosClient from "./axiosClient";
const productApi = {
  getAllProduct: (params,searchValue ,currentPage) => {
    console.log(params,searchValue, currentPage)
    const url = `/products/getAllProducts?page=${currentPage}&search=${searchValue}&sort=${params.sort}`;
    return axiosClient.get(url);
  },
  getProduct: (Category, params, currentPage) => {    
    const url = `/products/list/${Category}?price[gte]=${params.salePrice_gte}&price[lte]=${params.salePrice_lte}&page=${currentPage}&search=${params.searchValue}&sort=${params.sort}`;
    return axiosClient.get(url);
  },
  getKeyboards: () => {
    const url = `/products/list-keyboards`;
    return axiosClient.get(url);
  },
  getProductId: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url)
  },
 postAProduct: (data) => {
  console.log('apidataa',data)
    const url = `/products`;
    return axiosClient.post(url, data);
  },

  postReviewRating: (id, review) => {
  const url = `/products/rate/${id}`;
  return axiosClient.post(url, review)
  },
  updateProduct: (id, values) => {
  const url = `/products/${id}`;
  return axiosClient.put(url, values)
  },
  deleteAProduct: (id) => {
      const url = `/products/${id}`;
  return axiosClient.delete(url)
  }
  };
export default productApi;
