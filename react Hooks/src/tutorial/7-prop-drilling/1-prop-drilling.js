import React, { useState } from 'react';
import {data} from '../../data'
// more components
// fix - context api, redux (for more complex cases)


const PropDrilling = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id)=>{
    const afterRemove = people.filter((item)=>{return item.id !== id})
    setPeople(afterRemove)
  }
  
  return (
    <React.Fragment>
      <List allPeople={people} removeItem={removeItem}/>
    </React.Fragment>
  );
};

const List = ({allPeople,removeItem}) =>{
  return(
    <React.Fragment>
      {allPeople.map((person)=>{
        return <Single {...person} removeItem={removeItem} key={person.id}/>
      })}
    </React.Fragment>
  );
};

const Single = ({name, id, removeItem})=>{
  return(
    <>
    <div className="item">
      <h1>{name}</h1>
      <button className="btn" onClick={()=>{removeItem(id)}}>Remove</button>
    </div>
    </>
  );
}

export default PropDrilling;
