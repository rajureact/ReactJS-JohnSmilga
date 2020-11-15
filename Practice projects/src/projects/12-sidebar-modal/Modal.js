import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { DataContext, useGlobalContext } from "./context";

const Modal = () => {
  const data = useGlobalContext();
  const { modal, closeModal } = data;
  // console.log(data);
  return (
    <React.Fragment>
      <div
        className={`${modal ? "modal-overlay show-modal" : "modal-overlay"}`}
      >
        <div className="modal-container">
          <h3>Modal Content</h3>
          <button className="close-modal-btn" onClick={() => closeModal()}>
            <FaTimes />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
