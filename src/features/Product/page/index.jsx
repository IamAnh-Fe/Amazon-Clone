import React, { useEffect, useState } from 'react';
import SideBar from '~/features/Product/components/SideBarProduct';
import Pagination from '~/components/Pagination';
import ItemSort from '../components/ItemSort';
import productApi from '~/apis/productApi';
import Item from '../components/Item';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductList = () => {
    const category = useParams();
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberProduct, setNumberProduct] = useState();
    const [filters, setFilters] = useState({
        sort: '-rating',
        salePrice_gte: 1,
        salePrice_lte: 1000000000,
        searchValue: '',
    });
    const [filterBrand, setFilterBrand] = useState();
    const searchValue = useSelector((state) => state.search.search);
    useEffect(() => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            searchValue,
        }));
    }, [searchValue]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const res = await productApi.getProduct(category.slug, filters, filterBrand, currentPage);
                setProductList(res.product);
                setNumberProduct(res.count);
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        };
        fetchProductList();
    }, [filters, currentPage, filterBrand]);

    const handleSortChange = (newSortValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            sort: newSortValue,
        }));
    };

    const handleFiltersChange = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    };
    const handleFilterBrand = (newFilters) => {
        setFilterBrand((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    };
    //pagination
    const limitPage = 5;
    const pages = Math.ceil(numberProduct / limitPage);

    return (
        <div className="product col container">
            <ItemSort currentSort={filters.sort} onChange={handleSortChange} />
            <div>
                <div className="product-list row">
                    <div className="product-sidebar l-2 m-3 c-0">
                        <SideBar
                            filters={filters}
                            filterBrand={filterBrand}
                            handleFilterBrand={handleFilterBrand}
                            onChange={handleFiltersChange}
                        />
                    </div>
                    <div className="product-showproduct l-10 m-9 c-12">
                        <h2>RESULTS</h2>
                        <Item product={productList} />
                        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
