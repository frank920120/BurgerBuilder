import React from "react";
import "./styles.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = ({
  IncreaseIngredients,
  DecreaseIngredients,
  disableInfo,
  totalPrice,
  purchaseable,
  ordered
}) => {
  return (
    <div className="BuildControls">
      <p>
        Total Price : <strong>{totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          IncreaseIngredients={IncreaseIngredients}
          DecreaseIngredients={DecreaseIngredients}
          disableInfo={disableInfo[control.type]}
        />
      ))}
      <button
        onClick={ordered}
        disabled={!purchaseable}
        className="OrderButton"
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
