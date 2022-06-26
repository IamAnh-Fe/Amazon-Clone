// api/userApi.js
import axiosClient from "./axiosClient";
const userApi = {
  register (data) {
    const url = `/users`;
    return axiosClient.post(url,data);
  },
};
export default userApi;
