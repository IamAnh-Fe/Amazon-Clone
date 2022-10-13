import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const AddNewProduct = ({ handleToggle }) => {
    const preventDefault = (e) => {
         e.preventDefault();
    }

    return (
        <div className="manageProduct">
            <div className="manageProduct-card center">
                <div className="manageProduct-content">
                    <div className="manageProduct-heading">
                        <span></span>
                        <h3 className="manageProduct-text">Create Product</h3>
                        <span className="manageProduct-close" onClick={handleToggle}>
                            <AiOutlineClose />
                        </span>
                    </div>

                    <form method="POST" action="http://localhost:5001/api/products" enctype="multipart/form-data">
                        <div className="row">
                            <div className="manageProduct-input col l-6">
                                <div className="form-field">
                                    <input type="text" className="form-input" name="name" placeholder=" " />
                                    <label className="form-label">Name</label>
                                </div>
                                <div className="form-field">
                                    <input type="text" className="form-input" name="category" placeholder=" " />
                                    <label className="form-label">Category</label>
                                </div>
                                <div className="form-field">
                                    <input type="text" className="form-input" name="brand" placeholder=" " />
                                    <label className="form-label">Brand</label>
                                </div>
                                <div className="form-field">
                                    <input type="text" className="form-input" name="discount" placeholder=" " />
                                    <label className="form-label">Discount</label>
                                </div>
                                <div className="form-field">
                                    <input type="text" className="form-input" name="rating" placeholder=" " />
                                    <label className="form-label">Rating</label>
                                </div>
                            </div>
                            <div className="manageProduct-input col l-6">
                                <div className="form-field">
                                    <input type="text" className="form-input" name="originalPrice" placeholder=" " />
                                    <label className="form-label">OriginalPrice</label>
                                </div>
                                <div className="form-field">
                                    <input type="text" className="form-input" name="salePrice" placeholder=" " />
                                    <label className="form-label">SalePrice</label>
                                </div>
                                <div className="form-field">
                                    <input type="text" className="form-input" name="price" placeholder=" " />
                                    <label className="form-label">Price</label>
                                </div>
                                <div className="form-field">
                                    <input type="text" className="form-input" name="subPrice" placeholder=" " />
                                    <label className="form-label">SubPrice</label>
                                </div>
                                <div>
                                    {/* <label>Select multiple images:</label> */}
                                    <input type="file" name="url" multiple />
                                </div>
                            </div>
                        </div>

                        <input
                            type="submit"
                            name="btn_upload_multiple_images"
                            value="Upload"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;
