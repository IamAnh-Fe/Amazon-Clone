import axiosClient from "./axiosClient";
const commentApi = {
  getComment: () => {
    const url = "comment/id";
    return axiosClient.get(url);
  },
};
export default categoryApi;
