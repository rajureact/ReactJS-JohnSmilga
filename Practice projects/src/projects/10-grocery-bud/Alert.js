import React, { useEffect } from "react";

const Alert = ({ show, type, message }) => {
  return (
    <React.Fragment>
      <p className={`alert alert-${type}`}>{message}</p>
    </React.Fragment>
  );
};

export default Alert;
