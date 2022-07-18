// api/productApi.js
import axiosClient from "./axiosClient";
const productApi = {
  getAllCategory: (params) => {
    const url = "/products/getAllProduct";
    return axiosClient.get(url, {params});
  },
getProductId: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url)
},

postReviewRating: (id, review) => {
  const url = `/products/rate/${id}`;
  return axiosClient.post(url, review)

}
};
export default productApi;
