import axiosClient from "./axiosClient";
const categoryThumbApi = {
  getAllCategoryThumb: (params) => {
    const url = "categoryThumb/getAllCategoryThumb";
    return axiosClient.get(url, {params});
  }
 
};
export default categoryThumbApi;
