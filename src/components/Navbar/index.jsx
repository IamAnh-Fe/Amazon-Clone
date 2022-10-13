import React, { useState, useEffect } from 'react';
import logo from '~/assets/logo/logo.png';
import useSearch from '~/hooks/useSearch';
import cart from '~/assets/logo/cart.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/apis/axiosClient';
import authApi from '~/apis/authApi';
import { logOutSuccess } from '~/features/Auth/authSlice';
import { BiSearchAlt2 } from 'react-icons/bi';
import { cartItemsCountSelector } from '~/redux/selectors';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
const NavBar = () => {
    const dispatch = useDispatch();
    const { search, handleSearching, handleSubmitSearch } = useSearch();
    const navigate = useNavigate();
    const badge = useSelector(cartItemsCountSelector);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const handleLogOut = async () => {
        const accessToken = user?.accessToken;
        const axiosJWT = createAxios(user, dispatch, logOutSuccess);
        await authApi.logOut(dispatch, navigate, accessToken, axiosJWT);
    };
    useEffect(() => {
        if (user?.isAdmin === true) {
            navigate('/admin');
        }
    }, []);
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} className="navbar-logo  " alt="logo amazon" />
                </Link>
                <div className="navbar-right">
                    <div className="navbar-option ">
                        {user ? (
                            <Link to="profile">
                                <img src={user.avatar} className="navbar-user" alt="avatar" />
                            </Link>
                        ) : (
                            <Link to="auth/sign-in">
                                <span className="navbar-user">
                                    <span>
                                        <CgProfile />
                                    </span>
                                </span>
                            </Link>
                        )}
                    </div>
                    {user && (
                        <div className="navbar-option">
                            <span className="navbar-icon" onClick={handleLogOut}>
                                <AiOutlineLogout />
                            </span>
                        </div>
                    )}

                    <Link to="product/Cart">
                        <div className="navbar-cart ">
                            <img className="navbar-icon" src={cart} alt="cart" />
                            <span className="navbar-badge">{badge}</span>
                            <span>Cart</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="navbar-search col">
                <select>
                    <option>All</option>
                </select>
                <input className="navbar-searchInput" type="text" value={search} onChange={handleSearching} />
                <button className="navbar-iconsearch" onClick={handleSubmitSearch}>
                    <BiSearchAlt2 />
                </button>
            </div>
        </div>
    );
};

export default NavBar;
