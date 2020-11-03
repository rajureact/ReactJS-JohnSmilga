import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [text,setItem] = useState(data)
  const clear = ()=>{
    setItem([]);
  }
  const singleHide = (id)=>{
    const newData = text.filter((newItem)=> id !== newItem.id)
    setItem(newData)
  }
  return (
    <React.Fragment>
      {text.map((item)=>{
        return (
          <div key={item.id} className="item">
            <h1>{item.name}</h1>
            <button type="button" className="btn" onClick={()=>singleHide(item.id)}>Hide</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={clear}>Clear Item</button>
    </React.Fragment>
  );
};

export default UseStateArray;
