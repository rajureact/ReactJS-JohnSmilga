import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <button className="btn"><Link to="/">Go To Home Page</Link></button>
    </div>
  );
};

export default Error;
