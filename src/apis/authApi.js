// api/userApi.js
import { 
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess, } from "~/features/Auth/authSlice";
  import axiosClient from "./axiosClient";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
      const url = "/auth/login";
      const res = await axiosClient.post(url, user)
      dispatch(loginSuccess(res));
      navigate("/")

    } catch (err){
      console.log(loginFailed())
    }
  }
export const registerUser = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const url = "/auth/register";
    await axiosClient.post(url, user);
    dispatch(registerSuccess());
  } catch (err) {
    dispatch(registerFailed());
  }
};

const authApi = {
  postForgotPassword: (email) => {
    const url = "/auth/forgot";
    return axiosClient.post(url, email);
  },
  postResetPassword: (password) => {
    const url = "/auth/reset";
    return axiosClient.post(url, { password });
  },
  postActivationEmail: (params) => {
    const url = "/auth/activation";
    return axiosClient.post(url, params);
  },
  loginWithGoogle: (params) => {
       const url = "/auth/google_login";
       return axiosClient.post(url, params);
  }
};
export default authApi;