/*@author: Komal*/

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../Style/Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="budgetsection">
        {/* <h3>My Spendings</h3> */}
        <div className="budgetcontent">
          <ul>
            <li>
              <Link to="/">Track Spending</Link>
            </li>
            <li>
              <Link to="/create-budget">Create Budget</Link>
            </li>
            <li>
              <Link to="/my-budgets">My Budgets</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="reward-points">
        <h3>200.00</h3>
        <p>Reward Points</p>
      </div>
      <div className="rewardsection">
        <div className="rewardcontent">
          <ul>
            <li>
              <Link to="/redeem-reward">Redeem Reward</Link>
            </li>
            <li>
              <Link to="/my-rewards">My Rewards</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
