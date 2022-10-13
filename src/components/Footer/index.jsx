import React from 'react';
import Footer from './Footer';
import SubFooter from './SubFooter';
const AmazonFooter = () => {
    return (
        <div className="amazonFooter">
            <div className="amazonFooter-box">
                <Footer />
                <SubFooter />
            </div>
        </div>
    );
};

export default AmazonFooter;
