/*@author: Komal*/

import axios from "axios";

const UserProfileService = {
  getUserProfile: async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8085/api/budget/userProfile`,
        {
          params: { userId },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  },
};

export default UserProfileService;
