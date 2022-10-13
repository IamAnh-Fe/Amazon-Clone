import React from 'react';
import { FaBars } from 'react-icons/fa';

const SubNav = () => {
    return (
        <div className="subnav">
            <div className="subnav-bars hover">
                <i>
                    <FaBars />
                </i>
                <span>All</span>
            </div>
            <div>
                <ul className="subnav-content">
                    <li className="hover">Today's Deal</li>
                    <li className="hover">Customer Service</li>
                    <li className="hover">Registry</li>
                    <li className="hover">Gift Cards</li>
                    <li className="hover">Sell</li>
                </ul>
            </div>
        </div>
    );
};

export default SubNav;
