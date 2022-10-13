import React from 'react';
import ThemeMenu from '../ThemeMenu';
import { useSelector } from 'react-redux';

const TopNav = () => {
        const user = useSelector((state) => state.auth.login?.currentUser);
    return (
        <div className="topNav">
            <div className="topNav-menu"></div>
            <div className="topNav-right">
                <div className="topNav-avatar">
                    <img src={user?.avatar} alt="avatar" />
                </div>
                <div className="topNav-palette">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
