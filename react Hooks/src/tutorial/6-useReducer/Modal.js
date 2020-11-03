import React, { useEffect } from 'react';

const Modal = ({modalContent,closeModal}) => {
  useEffect(()=>{
    setTimeout(()=>{
      closeModal()
    },2000)
  })
  return(
    <React.Fragment>
      <div className="modal">{modalContent}</div>
    </React.Fragment>
  );
};

export default Modal;
