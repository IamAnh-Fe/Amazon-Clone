import axiosClient from './axiosClient';

const userApi = {
    getAllUsers: (accessToken, currentPage, axiosJWT) => {
        const url = `/user?page=${currentPage}`;
        return axiosJWT.get(url, {
            headers: { token: `Bearer ${accessToken}` },
        });
    },
    updateUser: (id, values) => {
        const url = `/user/${id}`;
        return axiosClient.put(url, values);
    },
    deleteAUser: (accessToken, id, axiosJWT) => {
        const url = `/user/${id}`;
        return axiosJWT.delete(url, {
            headers: { token: `Bearer ${accessToken}` },
        });
    },
};
export default userApi;
