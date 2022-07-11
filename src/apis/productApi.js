// api/productApi.js
import axiosClient from "./axiosClient";
const productApi = {
  getAllCategory: (params) => {
    const url = "/products/getAllProduct";
    return axiosClient.get(url, {params});
  }
 
};
export default productApi;
