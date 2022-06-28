// api/userApi.js
import axiosClient from "./axiosClient";
const userApi = {
  register (data) {
    const url = `/auth/register`;
    return axiosClient.post(url,data);
  },
  login (data) {
    const url = `/auth/login`;
    return axiosClient.post(url,data);
  },
};
export default userApi;
