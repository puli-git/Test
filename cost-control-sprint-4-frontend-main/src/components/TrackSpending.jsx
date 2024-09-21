import React, { useState } from "react";
import { trackSpending } from "../services/BudgetService";
import { viewBudget } from "../services/BudgetService";
import { getSpendingsByUserId } from "../services/BudgetService";

function TrackSpending() {
  const [userId, setUserId] = useState(""); // Input for user ID
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [initialBudget, setInitialBudget] = useState(null);
  const [spendings, setSpendings] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const budgetData = await viewBudget(userId);

      // Parse the JSON response to find the budget for the specified category
      const budgetForCategory = budgetData.find(
        (budget) => budget.category === category
      );

      if (budgetForCategory) {
        setInitialBudget(budgetForCategory);
      } else {
        setInitialBudget(null); // Clear budget if not found
      }
      const spendingData = await getSpendingsByUserId(userId);
      setSpendings(spendingData);
      const response = await trackSpending(userId, category, amount); // Call the service function
      setResponseMessage(response); // Set success message
    } catch (error) {
      setResponseMessage(
        `Error: ${error.response ? error.response.data : error.message}`
      ); // Set error message
    }
  };
  const filteredSpendings = spendings.filter(
    (spending) => spending.category === category
  );
  return (
    <div>
      <h3>Track Spending</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Track Spending</button>
      </form>

      {responseMessage && <div>{responseMessage}</div>}
      {initialBudget && (
        <div>
          <h4>Initial Budget for Category: {initialBudget.category}</h4>
          <p>Amount: {initialBudget.budgetAmount}</p>
        </div>
      )}

      <div>
        <h4>Spending Details for Category: {category}</h4>
        {filteredSpendings.length > 0 ? (
          filteredSpendings.map((spendings, index) => (
            <div key={index}>
              <p>Category: {spendings.category}</p>
              <p>Spent spent already: {spendings.amount}</p>
            </div>
          ))
        ) : (
          <p>No spending details available for this category.</p>
        )}
      </div>
    </div>
  );
}

export default TrackSpending;
