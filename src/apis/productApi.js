// api/productApi.js
import axiosClient from "./axiosClient";
const productApi = {
  getAllProduct: (accessToken,params,searchValue , currentPage, axiosJWT) => {
    const url = `/products/getAllProducts?page=${currentPage}&search=${searchValue}&sort=${params.sort}`;
    return axiosJWT.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getProduct: (Category, filters,params, currentPage) => {    
    const url = `/products/list/${Category}?price[gte]=${filters.salePrice_gte}&price[lte]=${filters.salePrice_lte}&page=${currentPage}&search=${filters.searchValue}&sort=${filters.sort}&limit=5`;
    return axiosClient.get(url, {params});
  },
  getHeadsets: () => {
    const url = `/products/list-headsets`;
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
  updateProduct: (accessToken,id, values) => {
  const url = `/products/${id}`;
  return axiosClient.put(url, values,{
      headers: { token: `Bearer ${accessToken}` },
    })
  },
  deleteAProduct: (accessToken, id) => {
      const url = `/products/${id}`;
  return axiosClient.delete(url,{
      headers: { token: `Bearer ${accessToken}` },
    })
  }
  };
export default productApi;
