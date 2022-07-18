import axiosClient from "./axiosClient";
export const reviewDetail = async (id, review) => {
  try {
  const url = `/products/rate/${id}`;
 await axiosClient.post(url, review);
    
  } catch (err) {
    console.log(err);
  }
};