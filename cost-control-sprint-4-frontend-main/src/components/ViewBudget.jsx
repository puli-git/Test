import React, { useState } from "react";
import { viewBudget } from "../services/BudgetService"; // Import the service function

function ViewBudget() {
  const [userId, setUserId] = useState("");
  const [budgets, setBudgets] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await viewBudget(userId); // Call the service function to view the budget
      setBudgets(response); // Set the budget list in state
    } catch (error) {
      setResponseMessage(`Error: ${error}`); // Set error message if the request fails
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <button type="submit">View Budget</button>
      </form>

      {responseMessage && <div>{responseMessage}</div>}

      {budgets.length > 0 && (
        <div>
          <h3>Budgets for User: {userId}</h3>
          <pre>{JSON.stringify(budgets, null, 2)}</pre>

          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((budget, index) => (
                <tr key={index}>
                  <td>{budget.category}</td>
                  <td>{budget.budgetAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {budgets.length === 0 && !responseMessage && <div>No budgets found.</div>}
    </div>
  );
}

export default ViewBudget;
