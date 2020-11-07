import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {
  const [btn, setBtn] = useState(false);
  return (
    <React.Fragment>
      <article className='question'>
        <header>
          <h4>{title}</h4>
            
            {/* {!btn?<button className="btn" onClick={()=>setBtn(true)}> <AiOutlinePlus/> </button>:<button className="btn" onClick={()=>setBtn(false)}> <AiOutlineMinus /> </button>} */}

            <button className="btn" onClick={()=>setBtn(!btn)}>{btn? <AiOutlineMinus />:<AiOutlinePlus />}</button>
        

        </header>
        {/* <p >{ btn && info}</p> */}
        {btn && <p>{info}</p>}
      </article>
    </React.Fragment>
  )
};

export default Question;
