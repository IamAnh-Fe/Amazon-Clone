// api/productApi.js
import axiosClient from "./axiosClient";
const productApi = {
  getAllCategory: (params) => {
    const url = "/products/getAllCategory";
    return axiosClient.get(url, {params});
  }
 
};
export default productApi;
