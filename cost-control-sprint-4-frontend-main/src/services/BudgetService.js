import axios from "axios";

let url = "http://localhost:8085/api/budget";

export async function setBudget(userId, category, amount) {
  try {
    const response = await axios.post(`${url}/setBudget`, null, {
      params: {
        userId,
        category,
        amount,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

let url1 = "http://localhost:8085/api/budget";

// Function to view the budget by userId
export async function viewBudget(userId) {
  try {
    const response = await axios.get(`${url1}/viewBudget`, {
      params: {
        userId,
      },
    });
    return response.data; // Return the list of budgets
  } catch (error) {
    throw error.response ? error.response.data : error.message; // Return the error message
  }
}

export async function trackSpending(userId, category, amount) {
  const response = await axios.post(
    `http://localhost:8085/api/budget/trackSpending`,
    null,
    {
      params: {
        userId,
        category,
        amount,
      },
    }
  );

  const result = response.data;
  return result;
}

export async function getSpendingsByUserId(userId) {
  const response = await axios.get(
    `http://localhost:8085/api/budget/viewSpendings`,
    {
      params: {
        userId,
      },
    }
  );
  console.log("hi varsh");
  console.log(response.data);
  return response.data; // Extract and return the result
}
