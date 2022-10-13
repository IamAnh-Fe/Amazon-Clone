import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";

axios.defaults.withCredentials = true;

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 8000,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: params => queryString.stringify(params),
});

const refreshToken = async () => {
  try {
    const res = await axiosClient.post("/auth/refresh", {
      withCredentials: true,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

 const newInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 8000,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: params => queryString.stringify(params),
});
export const createAxios = (user, dispatch, stateSuccess) => {
 
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwt_decode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["token"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
//request have token
newInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

//request havent token
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
