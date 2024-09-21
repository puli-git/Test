/*@author: Komal*/

import React, { useEffect, useState } from "react";
import UserProfileService from "../services/UserProfileService";
import "../Style/Profile.css";
const MyProfile = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  // const userId = '1'; // Replace with the actual user ID as needed

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await UserProfileService.getUserProfile(userId);
        setProfile(userProfile);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <div>
      {profile ? (
        <div>
          <div className="profileContainer">
            <div className="intro">
              <h1>Hello,John Doe!</h1>
            </div>
            <div className="detail">
              <h1>
                <b>Username:</b> {profile.userName}
              </h1>
              <p>
                <b>Email:</b> {profile.email}
              </p>
              <p>
                <b>Total Points:</b> {profile.totalPoints}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default MyProfile;
