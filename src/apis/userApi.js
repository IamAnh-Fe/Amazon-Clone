// api/userApi.js
import axiosClient from "./axiosClient";
const userApi = {
    get: (userId) => {
    const url = `/user/${userId}`;
    return axiosClient.get(url);
  },
};
export default userApi;
