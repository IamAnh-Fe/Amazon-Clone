import React, { useEffect, useState } from 'react';
import AddNewProduct from '../AddNewProduct';
import useSearch from '~/hooks/useSearch';
import productApi from '~/apis/productApi';
import EditProduct from '../EditProduct';
import Pagination from '~/components/Pagination';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/apis/axiosClient';
import { loginSuccess } from '~/features/Auth/authSlice';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

const ShowProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [product, setProduct] = useState([]);
    const [editProduct, setEditProduct] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [numberProduct, setNumberProduct] = useState();
    const [filters, setFilters] = useState({
        sort: '',
    });
    const { search, handleSearching, handleSubmitSearch } = useSearch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const searchValue = useSelector((state) => state.search.search);

    console.log('1')
    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const axiosJWT = createAxios(user, dispatch, loginSuccess);
                    const res = await productApi.getAllProduct(
                        user?.accessToken,
                        filters,
                        searchValue,
                        currentPage,
                        axiosJWT,
                    );
                    setProduct(res.product);
                    setNumberProduct(res.count);
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        };
        fetchProductList();
    }, [filters, searchValue, currentPage]);

    const handleSortChange = (e) => {
        const newSortValue = e.target.value;
        setFilters((prevFilters) => ({
            ...prevFilters,
            sort: newSortValue,
        }));
    };
    //CRUD
    const handleToggle = () => setHidden(!hidden);

    const handleOpenModalEdit = () => {
        setOpenModalEdit(!openModalEdit);
        navigate(-1);
    };

    const handleDeleteProduct = async (item) => {
        const id = item._id;
        await productApi.deleteAProduct(user?.accessToken, id);
        const currentProduct = product.filter((product) => product._id !== item._id);
        setProduct(currentProduct);
        toast.success('Deleted a product');
    };

    const handleEditProduct = async (item) => {
        setOpenModalEdit(true);
        setEditProduct(item);
    };
    const handleOnchangeEdit = (event) => {
        let editCopy = { ...editProduct };
        editCopy = event.target.value;
        setEditProduct(editCopy);
    };
    //pagination
    const limitPage = 5;
    const pages = Math.ceil(numberProduct / limitPage);
    return (
        <>
            <div className="manageProduct-show center row cardAdmin">
                <div className=" l-2 m-1">
                    {/* <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select> */}
                </div>
                <div className="manageProduct-search col l-6 m-8 ">
                    <input type="text" placeholder="Search..." value={search} onChange={handleSearching} />
                    <button onClick={handleSubmitSearch}>
                        <AiOutlineSearch />
                    </button>
                </div>
                <div className=" col l-2 m-1">
                    <form value={filters.sort} onChange={handleSortChange}>
                        <select>
                            <option value="">Sort by</option>
                            <option value="salePrice">Price: Low to High</option>
                            <option value="-salePrice">Price: High to Low</option>
                        </select>
                    </form>
                </div>
                <a className="col l-2 m-2 c-2 buttonAdmin" onClick={handleToggle}>
                    ADD A PRODUCT
                </a>
            </div>
            {hidden ? <AddNewProduct handleToggle={handleToggle} /> : null}
            {openModalEdit &&
                <EditProduct
                    handleOpenModalEdit={handleOpenModalEdit}
                    editProduct={editProduct}
                    handleOnchangeEdit={handleOnchangeEdit}
                />
            }
            <div className="cardAdmin">
                <div className="manageProduct-title center">
                    <div className="l-2 m-2 c-2 ">Thumbnail</div>
                    <div className="l-3 m-3 c-3">Name</div>
                    <div className="l-4 m-4 c-4">Info</div>
                    <div className="l-2 m-2 c-1">Inventory</div>
                    <div className="l-1 m-1 c-1">Edit / Delete</div>
                </div>

                {product &&
                    product.length > 0 &&
                    product.map((item) => (
                        <div className="manageProduct-item row center" key={item._id}>
                            <div className="l-2 m-2 c-2">
                                <img className="manageProduct-image" src={item.images[0].url} alt="image-product" />
                            </div>
                            <div className="ellipsis l-3 m-3 c-3 ">{item.name}</div>
                            <div className="l-4 m-4 c-4">
                                {item ? (
                                    <>
                                        <p>Category: {item.category}</p>
                                        <p>Brand: {item.brand}</p>
                                        <p>Original Price: {item.originalPrice}</p>
                                        <p>Sale Price: {item.salePrice}</p>
                                        <p>Rating: {item.rating}</p>
                                        <p>Discount: {item.discount}</p>
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>

                            <div className="l-2 m-2 c-2"></div>
                            <div className="l-1 m-1 c-1">
                                <Link to={`/admin/products/${item._id}`}>
                                    <span className="manageProduct-edit" onClick={() => handleEditProduct(item)}>
                                        <AiOutlineEdit /> /{' '}
                                    </span>
                                </Link>
                                <span className="manageProduct-delete" onClick={() => handleDeleteProduct(item)}>
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

export default ShowProducts;
