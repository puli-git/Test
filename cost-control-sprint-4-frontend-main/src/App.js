import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RedeemReward from "./components/RedeemReward";
import CreateBudget from "./components/CreateBudget";
import { getAllRewards } from "./services/RedeemRewardService";
import ViewBudget from "./components/ViewBudget";
import TrackSpending from "./components/TrackSpending";
import MyProfile from "./components/MyProfile";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// Components for different pages (dummy components for now)
const userId = "101";
const userIds = "101";


import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// Components for different pages (dummy components for now)
const userId = "101";
const dummy =102;


// Components for different pages (dummy components for now)
//const TrackSpending = () => <div>Track Spending Page</div>;
//const CreateBudget = () => <div>Create Budget Page</div>;
const MyBudgets = () => <div>My Budgets Page</div>;
//const RedeemReward = () => <div>Redeem Reward Page</div>;
const MyRewards = () => <div>My Rewards Page</div>;
const MySpendings = () => <div>My spendings</div>;
//const MyProfile = () => <div>My Profile Page</div>;
const Logout = () => {
  alert("Logged out!");
  return <div>You have been logged out</div>;
};

function ProfileIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllRewards().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="profile-icon-container">
      <div className="profile-icon" onClick={toggleDropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Link to="/my-profile">My Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    /* <Router>
      <div className="container">
       
        <div className="sidebar">
          <div className="section">
            <ul>
              <li>
                <Link to="/my-spendings">My Spendings</Link>
              </li>
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
          <div className="section reward-points">
            <h3>200.00</h3>
            <p>Reward Points</p>
          </div>
          <div className="section">
            <ul>
              <li>
                <Link to="/redeem-reward">Redeem Reward</Link>
              </li>
              <li>
                <Link to="/my-rewards">My Rewards</Link>
              </li>
            </ul>
          </div>
        </div>*/

    /*  
        <div className="main-content">
          <Routes>
            <Route path="/my-spendings" element={<MySpendings />} />
            <Route path="/" element={<TrackSpending />} />
            <Route path="/create-budget" element={<CreateBudget />} />
            <Route path="/my-budgets" element={<ViewBudget />} />
            <Route path="/redeem-reward" element={<RedeemReward />} />
            <Route path="/my-rewards" element={<MyRewards />} />
            <Route path="/my-profile" element={<MyProfile />} />{" "}
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
        <ProfileIcon />
      </div>
    </Router>*/

    <Router>
      <div className="app-container">
        <Navbar />

        <div className="container">
          <Sidebar />

          {/* Main Content Area */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<TrackSpending />} />
              <Route path="/create-budget" element={<CreateBudget />} />
              <Route path="/my-budgets" element={<MyBudgets />} />
               <Route path="/redeem-reward" element={<RewardList onRedeem={handleRedeem} />} />
               <Route path="/my-rewards" element={<MyRewards />} />
              <Route
                path="/my-profile"
                element={<MyProfile userId={userId} />}
              />
              <Route path="/logout" element={<Logout />} />
              <Route path="/navbar" element={<Navbar />} />
            </Routes>
          </div>
          {/* <ProfileIcon /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
