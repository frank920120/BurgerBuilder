import React from "react";
import "./styles.css";
const Button = ({ children, clicked, btnType }) => {
  console.log(btnType);
  return (
    <button className={["Button", btnType].join(" ")} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
