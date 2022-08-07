import axiosClient from "./axiosClient";
const collectionApi = {
  getAllCollection: (params) => {
    const url = "/collection/getAllCollection";
    return axiosClient.get(url, {params});
  }
 
};
export default collectionApi;
