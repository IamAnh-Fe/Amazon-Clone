import axiosClient from "./axiosClient";
const categoryApi = {
  getAllCategory: (params) => {
    const url = "/category/getAllCategory";
    return axiosClient.get(url, {params});
  },
 getListKeyboard : () => {
   const url = "/category/getListKeyboard";
    return axiosClient.get(url);
 },
 getCategory: (Category) => {
    const url = `/category/${Category}`;
    return axiosClient.get(url)
},

};
export default categoryApi;
