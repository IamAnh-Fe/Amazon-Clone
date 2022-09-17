import axiosClient from "./axiosClient";
const filterApi = {
 getFilter: (category) => {
    const url = `/filters/${category}`;
    return axiosClient.get(url)
},

};
export default filterApi;