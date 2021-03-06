import React from "react";
import "./styles.css";
import Backdrop from "../Backdrop/Backdrop";
const Modal = ({ children, show, modalClosed }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0"
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
