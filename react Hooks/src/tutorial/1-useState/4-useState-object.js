import React, { useState } from 'react';

const UseStateObject = () => {
  const [value, setValue] = useState({name: "Amir Hamza", age: "32", joke: "hehe"})
  const changeJoke = ()=>{
    setValue({...value, joke:"hihi"})
    // console.log({...value, joke: "hihi"});
    // setValue({joke: "hihi"})
  }
  return (
    <React.Fragment>
      <h1>{value.name}</h1>
      <h2>{value.age}</h2>
      <h3>{value.joke}</h3>
      <button type="button" className="btn" onClick={changeJoke}>Change Joke</button>
    </React.Fragment>
  );
};

export default UseStateObject;
