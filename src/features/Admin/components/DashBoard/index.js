import React from 'react'
import StatusCard from './StatusCard';
import ChartDashBoard from "./Chart";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="grid ">
        <div className="dashboard-list  row">
          <StatusCard />
          <ChartDashBoard />
        </div>
        <div className="row">
          <div className="dashboard-card l-4">
            <div className="dashboard-card__header">
              <h3>Top Customers</h3>
            </div>
            <div className="dashboard-card__body"></div>
            fffff
          </div>
          <div className="l-8">fffff</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard