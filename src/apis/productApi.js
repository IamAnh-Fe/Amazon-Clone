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

postReviewRating: (id) => {
  const url = `/rate/${id}`;
  return axiosClient.post(url,id)

}
};
export default productApi;
