import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Hello World');
  const change = (e)=>{
    if(text === 'Hello World'){
      setText("Hi world");
    }else{
      setText("Hello World")
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={change}>Click Me</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
