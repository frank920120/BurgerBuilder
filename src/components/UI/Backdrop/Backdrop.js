import React from "react";
import "./styles.css";
const BackDrop = ({ show, clicked }) => {
  return show ? <div onClick={clicked} className="Backdrop" /> : null;
};

export default BackDrop;
