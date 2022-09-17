import axiosClient from "./axiosClient";
const userApi = {
    getAllUsers: (currentPage) => {
    const url = `/user?page=${currentPage}`;
    return axiosClient.get(url);
  },
  deleteAUser: (id) => {
      const url = `/user/${id}`;
  return axiosClient.delete(url)
  }

};
export default userApi;