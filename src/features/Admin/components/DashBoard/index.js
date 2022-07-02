import React from 'react'
import { BsHandbag} from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="dashboard-list">
        <div className="dashboard-statistic">
          <div className="dashboard-statistic-box">
            <i>
              <BsHandbag />
            </i>
            <div>
              <p>1666</p>
              <p>Total Sales</p>
            </div>
          </div>

          <div className="dashboard-statistic-box">
            <i>
              <BsHandbag />
            </i>
            <div>
              <p>1666</p>
              <p>Total Sales</p>
            </div>
          </div>

          <div className="dashboard-statistic-box">
            <i>
              <BsHandbag />
            </i>
            <div>
              <p>1666</p>
              <p>Total Sales</p>
            </div>
          </div>

          <div className="dashboard-statistic-box">
            <i>
              <BsHandbag />
            </i>
            <div>
              <p>1666</p>
              <p>Total Sales</p>
            </div>
          </div>
        </div>

        <div className="dashboard-chair"></div>
      </div>
    </div>
  );
}

export default Dashboard