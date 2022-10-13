import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import productApi from '~/apis/productApi';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessage } from '@hookform/error-message';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const EditProduct = ({ handleOpenModalEdit, editProduct, handleOnchangeEdit }) => {
    let productId = useParams();
    const id = productId.id;
    const user = useSelector((state) => state.auth.login?.currentUser);
    const accessToken = user.accessToken;

    const schema = yup.object({
        name: yup.string(),
        price: yup.string(),
        originalPrice: yup.string(),
        salePrice: yup.string(),
        subPrice: yup.string(),
        brand: yup.string(),
        rating: yup.string(),
        discount: yup.string(),
        category: yup.string(),
    });
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleNewProductSubmit = async (values) => {
        await productApi.updateProduct(accessToken, id, values);
        reset();
          toast.success('Updated a product');
    };

    return (
        <div className="manageProduct">
            <div className="manageProduct-card center">
                <div className="manageProduct-content">
                    <div className="manageProduct-heading">
                        <span></span>
                        <h3 className="manageProduct-text">Edit Product</h3>
                        <span className="manageProduct-close" onClick={handleOpenModalEdit}>
                            <AiOutlineClose />
                        </span>
                    </div>

                    <form onSubmit={handleSubmit(handleNewProductSubmit)}>
                        <div className="row">
                            <div className="manageProduct-input col l-6">
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('name')}
                                        placeholder=" "
                                        value={editProduct.name}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">Name</label>
                                    <p className="error">
                                        <ErrorMessage errors={errors} name="name" />
                                    </p>
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('category')}
                                        placeholder=" "
                                        value={editProduct.category}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">Category</label>
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('brand')}
                                        placeholder=" "
                                        value={editProduct.brand}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">Brand</label>
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('discount')}
                                        placeholder=" "
                                        value={editProduct.discount}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">Discount</label>
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('rating')}
                                        placeholder=" "
                                        value={editProduct.rating}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">Rating</label>
                                </div>
                            </div>
                            <div className="manageProduct-input col l-6">
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('originalPrice')}
                                        placeholder=" "
                                        value={editProduct.originalPrice}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">OriginalPrice</label>
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('salePrice')}
                                        placeholder=" "
                                        value={editProduct.salePrice}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">SalePrice</label>
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('price')}
                                        placeholder=" "
                                        value={editProduct.price}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">Price</label>
                                </div>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        className="form-input"
                                        {...register('subPrice')}
                                        placeholder=" "
                                        value={editProduct.subPrice}
                                        onChange={handleOnchangeEdit}
                                    />
                                    <label className="form-label">SubPrice</label>
                                </div>
                            </div>
                        </div>
                        <button className="l-12" type="submit">
                            Add new product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
