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
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const url = "/auth/register";
    await axiosClient.post(url, user);
    dispatch(registerSuccess());
    navigate("/");
  } catch (err) {
    dispatch(registerFailed());
  }
};
