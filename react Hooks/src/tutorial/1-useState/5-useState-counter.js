import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)
  const reset = ()=>{
    setValue(0)
  }

  const deincrease = ()=>{
    setTimeout(()=>{
      // setValue(value - 1)
      setValue((changeValue)=>{
        return changeValue -1;
      })
    },2000)
  }

  return(
    <React.Fragment>
      <section>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={()=>setValue(value - 1)}>Decrease</button>
        <button type="button" className="btn" onClick={reset}>Reset</button>
        <button type="button" className="btn" onClick={()=>setValue(value + 1)}>Increase</button>
      </section>

      {/* Complex Counter and setValue use with function(Optional) */}
      <section style={{marginTop: "50px"}}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={deincrease}>Decrease</button>
        <button type="button" className="btn" onClick={reset}>Reset</button>
        <button type="button" className="btn" onClick={()=>setValue(value + 1)}>Increase</button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
