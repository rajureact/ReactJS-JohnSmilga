import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const nameHandle = useRef(null);
  const mailHandle = useRef(null);
  const handleBtn = (e)=>{
    e.preventDefault();
    console.log(nameHandle.current.value);
    console.log(mailHandle.current.value);
  }
  
  useEffect(()=>{
    console.log(nameHandle.current.value);
    nameHandle.current.focus()
  })

  return (
    <React.Fragment>
      <form action="" className="form">
        <div className="form-control">
          <label htmlFor="fname">Name</label>
          <input type="text" ref={nameHandle}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" ref={mailHandle}/>
        </div>
        <button className="btn" onClick={handleBtn}>Click</button>
      </form>
    </React.Fragment>
  );
};

export default UseRefBasics;
