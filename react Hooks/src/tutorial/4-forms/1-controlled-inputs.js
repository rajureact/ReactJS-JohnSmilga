import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [person, setPerson] = useState([]);

  const handleUser = (e)=>{
    e.preventDefault();
    if(fname && email){
      const people = {id:new Date().getTime().toString(), fname, email};
      setPerson([...person, people]);
      setFname('')
      setEmail('')
    }
    else{
      console.log("Input de beta!!!");
    }
  }

  

  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleUser}>
          <div className="form-control">
            <label htmlFor="fname">Name</label>
            <input type="text" id="fname" name="fname" value={fname} onChange={(e)=>setFname(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <button type="submit" className="btn">Add People</button>
        </form>
      </article>

      {person.map((item)=>{
        return <div className="item" key={item.id}>
          <h2>{item.fname}</h2>
          <p>{item.email}</p>
        </div>
      })}
    </React.Fragment>
  );
};

export default ControlledInputs;
