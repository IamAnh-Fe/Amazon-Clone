import axiosClient from "./axiosClient";
const commentApi = {
  getComment: (id, page) => {
    const url = `comment/${id}?limit=${page * 3}`;
    return axiosClient.get(url);
  },
};
export default commentApi;
