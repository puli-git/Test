<<<<<<< HEAD
import { useEffect, useState } from "react";
import { getAllRewards } from "../services/RedeemRewardService"; // Adjust path as necessary

export default function RedeemReward() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllRewards().then((rewards) => {
      setData(rewards);
    });
  }, []);

  /* return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Rewards</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );*/

  return (
    <div>
      <h1>Available Rewards</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
=======
import React from "react";

const RedeemReward = () => {
  return (
    <div>
      <h1>All rewards</h1>
    </div>
  );
};

export default RedeemReward;
>>>>>>> cde08405255a09287f49407cfa308cad9ac2d070
