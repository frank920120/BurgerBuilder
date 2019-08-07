import React from "react";
import "./styles.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = ({ IncreaseIngredients, DecreaseIngredients }) => {
  return (
    <div className="BuildControls">
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          IncreaseIngredients={IncreaseIngredients}
          DecreaseIngredients={DecreaseIngredients}
        />
      ))}
    </div>
  );
};

export default BuildControls;
