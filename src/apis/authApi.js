// api/userApi.js
import axiosClient from './axiosClient';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logOutFailed,
    logOutStart,
    logOutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from '~/features/Auth/authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const url = '/auth/login';
        const res = await axiosClient.post(url, user);
        dispatch(loginSuccess(res));
        navigate('/');
    } catch (err) {
        console.log(loginFailed());
    }
};
export const registerUser = async (user, dispatch) => {
    dispatch(registerStart());
    try {
        const url = '/auth/register';
        await axiosClient.post(url, user);
        dispatch(registerSuccess());
    } catch (err) {
        dispatch(registerFailed());
    }
};
// export const logOut = async (dispatch, navigate, accessToken, axiosJWT) => {
//   dispatch(logOutStart());
//   try {
//     const url = "/auth/logout";
//     await axiosJWT.post(url, {
//       headers: { token: `Bearer ${accessToken}` },
//     })
//     dispatch(logOutSuccess());
//     localStorage.clear();
//     navigate("/auth/sign-in");
//   } catch (err) {
//     dispatch(logOutFailed());
//   }
// };

const authApi = {
    postForgotPassword: (email) => {
        const url = '/auth/forgot';
        return axiosClient.post(url, email);
    },
    postResetPassword: (password) => {
        const url = '/auth/reset';
        return axiosClient.post(url, { password });
    },
    postActivationEmail: (params) => {
        const url = '/auth/activation';
        return axiosClient.post(url, params);
    },
    logOut: (dispatch, navigate, accessToken, axiosJWT) => {
        dispatch(logOutStart());
        try {
            const url = '/auth/logout';
            axiosJWT.post(url, {
                headers: { token: `Bearer ${accessToken}` },
            });
            dispatch(logOutSuccess());
            localStorage.clear();
            navigate('/auth/sign-in');
        } catch (err) {
            dispatch(logOutFailed());
        }
    },
};
export default authApi;
