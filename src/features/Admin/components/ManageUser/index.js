import React, { useEffect, useState } from 'react';
// import useSearch from '~/hooks/useSearch'
import Pagination from '~/components/Pagination';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSearch } from 'react-icons/ai';
import userApi from '~/apis/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/apis/axiosClient';
import { loginSuccess } from '~/features/Auth/authSlice';
import { toast } from 'react-toastify';
const ManageUser = () => {
    // const {search, handleSearching, handleSubmitSearch} = useSearch();
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberProduct, setNumberProduct] = useState();
    const user = useSelector((state) => state.auth.login?.currentUser);
    console.log('2');

    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const axiosJWT = createAxios(user, dispatch, loginSuccess);
                const res = await userApi.getAllUsers(user?.accessToken, currentPage, axiosJWT);
                setUsers(res.user);
                setNumberProduct(res.count);
            } catch (error) {
                console.log('Failed to fetch user list: ', error);
            }
        };
        fetchUserList();
    }, [currentPage]);

    const handleDeleteUser = async (user) => {
        const axiosJWT = createAxios(user, dispatch, loginSuccess);
        const id = user._id;
        await userApi.deleteAUser(user?.accessToken, id, axiosJWT);
        const currentUser = users.filter((users) => users._id !== user._id);
        setUsers(currentUser);
        toast.success('Deleted a user');
    };
    //pagination
    const limitPage = 15;
    const pages = Math.ceil(numberProduct / limitPage);

    return (
        <>
            {/* <div className="row cardAdmin">
        <div className="col l-2"></div>
        <div className="l-2"></div>
        <div className="l-2"></div>
       <div className='manageProduct-search col l-6 m-8'>
        <input type='text' placeholder='Search...' value={search} onChange={handleSearching} />
        <button onClick={handleSubmitSearch}><AiOutlineSearch/></button>
        </div>
      </div> */}

            <div className="cardAdmin ">
                <div className="manageProduct-title center">
                    <div className="l-3">Name</div>
                    <div className="l-3">Email</div>
                    <div className="l-2">Phone</div>
                    <div className="l-3">Address</div>
                    <div className="l-1">Edit / Delete</div>
                </div>
                {users &&
                    users.length &&
                    users.map((user) => (
                        <div key={user._id} className="manageUser-list row ">
                            <div className="l-3">{user.username}</div>
                            <div className="l-3">{user.email}</div>
                            <div className="l-2">{user.phone}</div>
                            <div className="l-3">{user.address}</div>
                            <div className="l-1">
                                <span onClick={() => handleDeleteUser(user)}>
                                    {' '}
                                    <AiOutlineDelete />
                                </span>
                            </div>
                        </div>
                    ))}
                <Pagination pages={pages} setCurrentPage={setCurrentPage} />
            </div>
        </>
    );
};

export default ManageUser;
