import React from "react";

const OrderSummary = ({ ingredients }) => {
  const ingredientsSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicous burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to CheckOut?</p>
    </>
  );
};

export default OrderSummary;
