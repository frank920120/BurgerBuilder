import React from "react";
import "./styles.css";
const BuildControl = ({
  label,
  IncreaseIngredients,
  DecreaseIngredients,
  disableInfo
}) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button
        onClick={() => DecreaseIngredients(label)}
        disabled={disableInfo}
        className="Less"
      >
        Less
      </button>
      <button onClick={() => IncreaseIngredients(label)} className="More">
        More
      </button>
    </div>
  );
};

export default BuildControl;
