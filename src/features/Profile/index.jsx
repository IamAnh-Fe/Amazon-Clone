import React, { useState, useEffect } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch, useSelector } from 'react-redux';
import userApi from '~/apis/userApi';
import { createAxios } from '~/apis/axiosClient';
import { useNavigate } from 'react-router-dom';
import authApi from '~/apis/authApi';
import { logOutSuccess } from '~/features/Auth/authSlice';
import { toast } from 'react-toastify';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const id = user._id;
    const imageAvatar = user?.avatar.toString();
    const [avatar, setAvatar] = useState(imageAvatar);
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    const schema = yup.object({
        username: yup.string(),
        phone: yup.number(),
        address: yup.string(),
    });
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const handleAccountSubmit = async (data) => {
        let formData = new FormData();
        formData.append('username', data.username);
        formData.append('phone', data.phone);
        formData.append('address', data.address);
        formData.append('avatar', avatar);
        await userApi.updateUser(id, formData);
        reset();
        const accessToken = user?.accessToken;
        const axiosJWT = createAxios(user, dispatch, logOutSuccess);
        await authApi.logOut(dispatch, navigate, accessToken, axiosJWT);
        toast.success('Updated profile');
        navigate('/')

    };
    return (
        <div className="profile">
            <div className="profile-box center">
                <form onSubmit={handleSubmit(handleAccountSubmit)}>
                    <div className="profile-content cardAdmin row">
                        <div className="profile-avatar center col l-6 m-6 c-12">
                            <h1 className="profile-heading">Account</h1>
                            {avatar && (
                                <img
                                    className="profile-image"
                                    src={avatar.preview ? avatar.preview : avatar}
                                    alt="Avatar"
                                />
                            )}
                            <div className="button center">
                                <input
                                    id="previewImg"
                                    hidden
                                    type="file"
                                    {...register('avatar')}
                                    name="avatar"
                                    onChange={handlePreviewAvatar}
                                />
                                <label htmlFor="previewImg" className="profile-uploadAvatar">
                                    <AiOutlineCloudUpload /> Upload Avatar
                                </label>
                            </div>
                        </div>
                        <div className="col l-6 m-6 c-12">
                            <div className="profile-field form-field">
                                <input className="form-input" {...register('username')} type="text" />
                                <label className="form-label">Username</label>
                                <p className="error">
                                    <ErrorMessage errors={errors} name="username" />
                                </p>
                            </div>
                            <div className="profile-field form-field">
                                <input className="form-input" {...register('phone')} type="text" />
                                <label className="form-label">Phone Number</label>
                                <p className="error">
                                    <ErrorMessage errors={errors} name="phone" />
                                </p>
                            </div>
                            <div className="profile-field form-field">
                                <input className="form-input" {...register('address')} type="text" />
                                <label className="form-label">Address</label>
                                <p className="error">
                                    <ErrorMessage errors={errors} name="address" />
                                </p>
                            </div>
                                <button className="auth-button" variant="success" type="submit">
                                    Upload Account
                                </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
