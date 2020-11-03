import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../data';
// reducer function
const reducer = (state, action)=>{
  
  if(action.type === 'ADD_VALUE'){

    const newState = {...state, person:[...state.person, action.payload], isModal: true, modalContent:"item is added"}
    return newState
  }
  if(action.type === 'NO_VALUE'){
    return {...state, isModal:true, modalContent:"Please, add value"}
  }
  if(action.type === "MODAL_CLOSE"){
    const newState = {...state,  isModal: false}
    return newState
  }
  if(action.type === "REMOVE"){
    const newState = state.person.filter((item)=>action.payload !== item.id)
    return {...state,person:newState}
  }
  throw new Error("Sorry, action doesn't match")
}

const defaultState = 
{
  person: [],
  isModal:false,
  modalContent: " "
}

const Index = () => {
  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handle = (e)=>{
    setName(e.currentTarget.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name){
      dispatch({type: 'ADD_VALUE', payload:{name, id: new Date().getTime().toString()}})
    }
    else{
      dispatch({type: 'NO_VALUE'})
    }
  }
  const closeModal = ()=>{
    dispatch({type: "MODAL_CLOSE"})
  }
  return (
    <React.Fragment>
      {state.isModal && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form action="" className="form" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handle}/>
        <button type="submit" className="btn">Add</button>
      </form>
      {state.person.map((item)=>{
        return <div key={item.id} className="item">
            <p>{item.name}</p>
            <button className="btn" onClick={()=>{dispatch({type: "REMOVE",payload:item.id})}}>Remove</button>
          </div>
      })}
    </React.Fragment>
  );
};

export default Index;
