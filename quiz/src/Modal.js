import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModal, correct, quiz, modalHandle } = useGlobalContext();
  return (
    <div
      className={`${isModal ? "modal-container isOpen" : "modal-container"}`}
    >
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>
          You answered {(correct / quiz.length) * 100}% of questions correctly
        </p>
        <button className="close-btn" onClick={modalHandle}>play again</button>
      </div>
    </div>
  );
};

export default Modal;
