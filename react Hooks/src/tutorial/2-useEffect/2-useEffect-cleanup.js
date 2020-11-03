import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const windowResize = ()=>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',windowResize)
    return(()=>{
      window.removeEventListener('resize',windowResize)
    })
  },[])

  return (
    <React.Fragment>
      <h2>Window</h2>
      <h1>{size} px</h1>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
