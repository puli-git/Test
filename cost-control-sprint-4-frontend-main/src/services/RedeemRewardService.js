import axios from "axios";

let url = "http://localhost:8085/api/rewards";

export async function getAllRewards() {
  const response = await axios.get(`${url}`);
  const rewards = response.data;
  return rewards;
}
