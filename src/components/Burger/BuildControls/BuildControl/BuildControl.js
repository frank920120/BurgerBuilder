import React from "react";
import "./styles.css";
const BuildControl = ({ label }) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};

export default BuildControl;
