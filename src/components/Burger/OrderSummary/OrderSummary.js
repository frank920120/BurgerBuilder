import React from "react";
import Button from "../../UI/Button/Button";
const OrderSummary = ({
  ingredients,
  modalClosed,
  purchaseContinue,
  price
}) => {
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
      <p>
        <strong>Total Price:{price.toFixed(2)}</strong>
      </p>
      <p>Continue to CheckOut?</p>
      <Button btnType={"Danger"} clicked={modalClosed}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={purchaseContinue}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
