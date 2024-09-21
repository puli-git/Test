import React, { useState } from "react";
import { setBudget } from "../services/BudgetService";

function CreateBudget() {
  const [userId, setUserId] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await setBudget(userId, category, amount);
      setResponseMessage(response);
    } catch (error) {
      setResponseMessage(`Error: ${error}`);
    }
  };

  return (
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
      <button type="submit">Set Budget</button>
      <div>{responseMessage}</div>
    </form>
  );
}

export default CreateBudget;
