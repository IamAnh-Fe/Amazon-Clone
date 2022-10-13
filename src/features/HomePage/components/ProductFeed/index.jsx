import React, { useEffect, useState } from 'react';
import collectionApi from '~/apis/collectionApi';
import categoryThumbApi from '~/apis/categoryThumb';
import ProductFeedFour from './ProductFeedFour';
import ProductFeedOne from './ProductFeedOne';
const ProductFeed = () => {
    const [list, setList] = useState([]);
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        const fetchCategoryThumb = async () => {
            try {
                const res = await categoryThumbApi.getAllCategoryThumb();
                setList(res);
            } catch (error) {
                console.log('Failed to fetch categoryThumb: ', error);
            }
        };
        fetchCategoryThumb();
    }, []);

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const res = await collectionApi.getAllCollection();
                setCollection(res);
            } catch (error) {
                console.log('Failed to fetch collection: ', error);
            }
        };
        fetchCollection();
    }, []);

    return (
        <div className=" container">
            <div className="productfeed">
                <div className="productfeed-list row">
                    {collection &&
                        collection.length > 0 &&
                        collection.map((item) => (
                            <div className="productfeed-card1 col5 l-3 m-4 c-12" key={item._id}>
                                <ProductFeedFour data={item} />
                            </div>
                        ))}
                    {list &&
                        list.length &&
                        list.map((item) => (
                            <div className="productfeed-card2 col5 l-3 m-4 c-12" key={item._id}>
                                <ProductFeedOne listData={item} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductFeed;
