// api/userApi.js
import axios from "axios";
import { 
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess, } from "~/features/Auth/authSlice";
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
      const res = await axios.post("/api/auth/login", user)
      dispatch(loginSuccess(res.data));
      navigate("/")

    } catch (err){
      console.log(loginFailed())
    }
  }
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("/api/auth/register", user);
    dispatch(registerSuccess());
    navigate("/");
  } catch (err) {
    dispatch(registerFailed());
  }
};
