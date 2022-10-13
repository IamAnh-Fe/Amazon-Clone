import React from 'react';
import ProductFeed from '~/features/HomePage/components/ProductFeed';
import SliderProduct from '../components/SliderProduct';
import Banner from '../components/Banner';
function HomePage() {
    return (
        <div className="background">
            <Banner />
            <ProductFeed />
            <SliderProduct />
        </div>
    );
}

export default HomePage;
