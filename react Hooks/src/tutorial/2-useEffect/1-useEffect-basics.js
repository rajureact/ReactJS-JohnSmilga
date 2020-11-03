import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    if(value >= 1){
      document.title = `New value ${value}`
    }
  },[value])
  return (
    <React.Fragment>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={()=>setValue(value + 1)}>Increase</button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
