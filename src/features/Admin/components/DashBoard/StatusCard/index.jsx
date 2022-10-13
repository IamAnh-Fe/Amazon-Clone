import React from 'react';
import { BsHandbag } from 'react-icons/bs';

const StatusCard = () => {
    return (
        <div className="dashboard-statistic col l-5 ">
            <div className="dashboard-box">
                <i>
                    <BsHandbag />
                </i>
                <div>
                    <p>1666</p>
                    <p>Total Sales</p>
                </div>
            </div>
            <div className="dashboard-box">
                <i>
                    <BsHandbag />
                </i>
                <div>
                    <p>1666</p>
                    <p>Total Sales</p>
                </div>
            </div>
            <div className="dashboard-box">
                <i>
                    <BsHandbag />
                </i>
                <div>
                    <p>1666</p>
                    <p>Total Sales</p>
                </div>
            </div>
            <div className="dashboard-box">
                <i>
                    <BsHandbag />
                </i>
                <div>
                    <p>1666</p>
                    <p>Total Sales</p>
                </div>
            </div>
        </div>
    );
};

export default StatusCard;
