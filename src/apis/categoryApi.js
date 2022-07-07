import axiosClient from "./axiosClient";
const categoryApi = {
  getAllCategory: (params) => {
    const url = "/category/getAllCategory";
    return axiosClient.get(url, {params});
  }
 
};
export default categoryApi;
